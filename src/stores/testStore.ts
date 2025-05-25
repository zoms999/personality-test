import { create } from 'zustand';
import type { Question } from '@/lib/types';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface TestState {
  // 상태
  attemptId: string | null;
  allQuestions: Question[];
  answers: Record<number, number>; // { question_id: score }
  currentPage: number; // 0-indexed
  isLoading: boolean;
  error: string | null;

  // 액션
  setAttemptId: (id: string) => void;
  fetchQuestions: () => Promise<void>;
  setAnswer: (questionId: number, score: number) => void;
  nextPage: () => boolean; // 유효성 검사 통과 시 true 반환
  prevPage: () => void;
  submitAnswers: (router: AppRouterInstance) => Promise<void>;
  
  // 헬퍼 함수들
  getCurrentPageQuestions: () => Question[];
  getTotalPages: () => number;
  isCurrentPageComplete: () => boolean;
  isAllQuestionsAnswered: () => boolean;
  resetStore: () => void;
}

export const useTestStore = create<TestState>((set, get) => ({
  // 초기 상태
  attemptId: null,
  allQuestions: [],
  answers: {},
  currentPage: 0,
  isLoading: false,
  error: null,

  // 액션 구현
  setAttemptId: (id: string) => {
    set({ attemptId: id });
  },

  fetchQuestions: async () => {
    const { attemptId } = get();
    if (!attemptId) {
      set({ error: '테스트 시도 ID가 없습니다.' });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch('/api/questions');
      
      if (!response.ok) {
        throw new Error('질문을 불러오는데 실패했습니다.');
      }

      const result = await response.json();
      
      if (result.success && result.questions) {
        const questions = result.questions;
        
        // 질문을 personality_type_id별로 그룹화하고 정렬
        const sortedQuestions = questions.sort((a: Question, b: Question) => {
          // 먼저 타입 ID로 정렬, 그 다음 질문 순서로 정렬
          if (a.personality_type_id !== b.personality_type_id) {
            return a.personality_type_id.localeCompare(b.personality_type_id);
          }
          return a.question_order_in_type - b.question_order_in_type;
        });

        // 초기 답변 상태 생성 (모든 질문에 대해 undefined로 시작)
        const initialAnswers: Record<number, number> = {};
        
        set({
          allQuestions: sortedQuestions,
          answers: initialAnswers,
          currentPage: 0,
          isLoading: false,
        });
      } else {
        throw new Error('서버 응답이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('질문 로드 오류:', error);
      set({
        error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
        isLoading: false,
      });
    }
  },

  setAnswer: (questionId: number, score: number) => {
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: score,
      },
    }));
  },

  nextPage: () => {
    const { isCurrentPageComplete, currentPage, getTotalPages } = get();
    
    // 현재 페이지 완료 여부 확인
    if (!isCurrentPageComplete()) {
      set({ error: '현재 페이지의 모든 질문에 답변해주세요.' });
      return false;
    }

    // 마지막 페이지 체크
    if (currentPage >= getTotalPages() - 1) {
      set({ error: '마지막 페이지입니다.' });
      return false;
    }

    set({ 
      currentPage: currentPage + 1,
      error: null,
    });
    return true;
  },

  prevPage: () => {
    const { currentPage } = get();
    
    if (currentPage <= 0) {
      set({ error: '첫 번째 페이지입니다.' });
      return;
    }

    set({ 
      currentPage: currentPage - 1,
      error: null,
    });
  },

  submitAnswers: async (router: AppRouterInstance) => {
    const { attemptId, answers, allQuestions, isAllQuestionsAnswered } = get();

    if (!attemptId) {
      set({ error: '테스트 시도 ID가 없습니다.' });
      return;
    }

    if (!isAllQuestionsAnswered()) {
      set({ error: '모든 질문에 답변해주세요.' });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      // API에 전송할 형태로 답변 데이터 변환
      const answersArray = allQuestions.map(question => ({
        question_id: question.id,
        score: answers[question.id],
      }));

      const requestData = {
        attempt_id: attemptId,
        answers: answersArray,
      };

      const response = await fetch('/api/test/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || '답변 제출에 실패했습니다.');
      }

      if (result.success) {
        // 성공 시 결과 페이지로 이동
        router.push(`/result/${attemptId}`);
      } else {
        throw new Error('서버 응답이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('답변 제출 오류:', error);
      set({
        error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
        isLoading: false,
      });
    }
  },

  // 헬퍼 함수들
  getCurrentPageQuestions: () => {
    const { allQuestions, currentPage } = get();
    const startIndex = currentPage * 3;
    return allQuestions.slice(startIndex, startIndex + 3);
  },

  getTotalPages: () => {
    const { allQuestions } = get();
    return Math.ceil(allQuestions.length / 3);
  },

  isCurrentPageComplete: () => {
    const { getCurrentPageQuestions, answers } = get();
    const currentQuestions = getCurrentPageQuestions();
    
    return currentQuestions.every(question => 
      answers[question.id] !== undefined && answers[question.id] >= 1 && answers[question.id] <= 10
    );
  },

  isAllQuestionsAnswered: () => {
    const { allQuestions, answers } = get();
    
    return allQuestions.every(question => 
      answers[question.id] !== undefined && answers[question.id] >= 1 && answers[question.id] <= 10
    );
  },

  resetStore: () => {
    set({
      attemptId: null,
      allQuestions: [],
      answers: {},
      currentPage: 0,
      isLoading: false,
      error: null,
    });
  },
})); 