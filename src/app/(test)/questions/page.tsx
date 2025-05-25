'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTestStore } from '@/stores/testStore';
import type { Question } from '@/lib/types';
import { Loader2, AlertTriangle, ChevronLeft, ChevronRight, CheckCircle2, BrainCircuit } from 'lucide-react';

// 정적 생성 비활성화
export const dynamic = 'force-dynamic';

export default function QuestionsPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  // Zustand 스토어에서 상태와 액션 가져오기
  const {
    allQuestions,
    answers,
    currentPage,
    isLoading,
    error,
    setAttemptId,
    fetchQuestions,
    setAnswer,
    nextPage,
    prevPage,
    submitAnswers,
    getCurrentPageQuestions,
    getTotalPages,
    isCurrentPageComplete,
    resetStore,
  } = useTestStore();

  // 클라이언트 사이드에서만 실행
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 초기화
  useEffect(() => {
    if (!isClient) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const attemptIdParam = urlParams.get('attemptId');
    
    if (!attemptIdParam) {
      console.warn("No attemptId found, redirecting to start.");
      router.push('/start');
      return;
    }

    // UUID 형식 검증
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(attemptIdParam)) {
      console.warn("Invalid attemptId format, redirecting to start.");
      router.push('/start');
      return;
    }

    // 스토어 초기화 및 데이터 로드
    resetStore();
    setAttemptId(attemptIdParam);
    fetchQuestions();
  }, [isClient, router, setAttemptId, fetchQuestions, resetStore]);

  // 서버 사이드 렌더링 중일 때 로딩 표시
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-slate-200 flex flex-col items-center justify-center p-4">
        <Loader2 size={52} className="text-sky-400 animate-spin mb-6" />
        <p className="text-xl font-semibold text-slate-100 mb-1">잠시만 기다려주세요...</p>
        <p className="text-slate-400">질문을 준비하고 있습니다.</p>
      </div>
    );
  }

  // 현재 페이지의 질문들 가져오기
  const currentQuestions = getCurrentPageQuestions();
  const totalPages = getTotalPages();
  const isLastPage = currentPage >= totalPages - 1;
  const isFirstPage = currentPage === 0;

  // 점수 선택 핸들러
  const handleScoreSelect = (questionId: number, score: number) => {
    setAnswer(questionId, score);
  };

  // 다음 페이지 핸들러
  const handleNext = () => {
    if (!isCurrentPageComplete() && !isLastPage) {
        useTestStore.setState({ error: '현재 페이지의 모든 질문에 답변해주세요.' });
        setTimeout(() => useTestStore.setState({ error: null }), 3000);
        return;
    }
    useTestStore.setState({ error: null });
    nextPage();
  };

  // 이전 페이지 핸들러
  const handlePrev = () => {
    useTestStore.setState({ error: null });
    prevPage();
  };

  // 결과 보기 핸들러
  const handleSubmit = async () => {
    if (!isCurrentPageComplete()) {
      useTestStore.setState({ error: '모든 질문에 답변해주세요.' });
      setTimeout(() => useTestStore.setState({ error: null }), 3000);
      return;
    }
    useTestStore.setState({ error: null });

    const confirmSubmit = confirm('모든 답변을 제출하시겠습니까? 제출 후에는 수정할 수 없습니다.');
    if (confirmSubmit) {
      await submitAnswers(router);
    }
  };

  // 에러 상태
  if (error && allQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-slate-200 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-xl shadow-blue-900/30 p-8 text-center border border-slate-700/80">
          <AlertTriangle size={52} className="text-red-400 mx-auto mb-5" />
          <h2 className="text-xl font-semibold text-slate-100 mb-2">오류 발생</h2>
          <p className="text-slate-300 mb-6">{error}</p>
          <button
            type="button"
            onClick={() => { resetStore(); router.push('/start');}}
            className="bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-500 hover:from-sky-400 hover:via-cyan-300 hover:to-teal-400 text-slate-900 font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            처음으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // 질문이 없는 경우
  if (!isLoading && allQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-slate-200 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-xl shadow-blue-900/30 p-8 text-center border border-slate-700/80">
          <BrainCircuit size={52} className="text-sky-400 mx-auto mb-5" />
          <p className="text-xl font-semibold text-slate-100 mb-1">질문을 불러올 수 없습니다.</p>
          <p className="text-slate-300 mb-6">네트워크 연결을 확인하거나 잠시 후 다시 시도해주세요.</p>
          <button
            type="button"
            onClick={() => { resetStore(); router.push('/start');}}
            className="bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-500 hover:from-sky-400 hover:via-cyan-300 hover:to-teal-400 text-slate-900 font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            처음으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  // Button styles
  const navButtonBaseStyle = "px-5 sm:px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-opacity-60 flex items-center justify-center space-x-2 w-full sm:w-auto";
  const navButtonDisabledStyle = "bg-slate-700 text-slate-500 cursor-not-allowed shadow-none scale-100 focus:ring-slate-600";
  
  const prevButtonStyle = `${navButtonBaseStyle} bg-slate-700/50 border-2 border-slate-600 text-slate-300 hover:bg-slate-600/70 hover:border-slate-500 hover:text-slate-100 focus:ring-slate-500 shadow-sm`;
  
  const nextButtonActiveStyle = "bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-500 hover:from-sky-400 hover:via-cyan-300 hover:to-teal-400 text-slate-900 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 focus:ring-sky-300";
  const nextButtonStyle = `${navButtonBaseStyle} ${nextButtonActiveStyle}`;
  
  const submitButtonActiveStyle = "bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 hover:from-emerald-600 hover:via-teal-600 hover:to-green-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 focus:ring-emerald-300";
  const submitButtonStyle = `${navButtonBaseStyle} ${submitButtonActiveStyle}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-slate-200 py-10 px-4 sm:px-6 lg:px-8">
      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 -z-20 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A0A0A0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">
            나를 찾아줘! 테스트
          </h1>
          <div className="flex items-center justify-center space-x-3 text-sm text-slate-400">
            <span>페이지 {currentPage + 1} / {totalPages}</span>
            <span className="text-slate-600">•</span>
            <span>총 {allQuestions.length}개 문항</span>
          </div>
        </div>

        {/* 안내 문구 */}
        <div className="bg-slate-800/60 border border-sky-700/50 rounded-lg p-4 mb-8 shadow-md">
          <p className="text-sky-300 text-center text-sm sm:text-base">
            각 문항을 읽고, 평소 자신의 모습과 얼마나 일치하는지 선택해주세요.
            <br className="sm:hidden"/>
            <span className="font-semibold text-sky-200">&apos;전혀 아니다(1점)&apos;</span>부터 <span className="font-semibold text-sky-200">&apos;매우 그렇다(10점)&apos;</span>까지 가능합니다.
          </p>
        </div>

        {/* 질문 카드 */}
        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-900/20 p-6 sm:p-8 mb-8 border border-slate-700/80">
          <div className="space-y-8">
            {currentQuestions.map((question: Question) => (
              <div key={question.id} className="border-b border-slate-700 last:border-b-0 pb-8 last:pb-0">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-6 leading-snug">
                  <span className="text-sky-400 mr-2">{allQuestions.findIndex((q: Question) => q.id === question.id) + 1}.</span>
                  {question.question_text}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm text-slate-400 px-1 sm:px-2 mb-1">
                    <span>전혀 아니다</span>
                    <span>매우 그렇다</span>
                  </div>
                  
                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                      <label
                        key={`${question.id}-${score}`}
                        className={`flex flex-col items-center cursor-pointer transition-all duration-200 group ${
                          answers[question.id] === score
                            ? 'transform scale-110 sm:scale-115 z-10'
                            : 'hover:transform hover:scale-105'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={score}
                          checked={answers[question.id] === score}
                          onChange={() => handleScoreSelect(question.id, score)}
                          className="sr-only peer"
                        />
                        <div
                          className={`w-full aspect-square rounded-lg sm:rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-200
                            peer-checked:border-sky-400 peer-checked:bg-sky-500 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-sky-500/30
                            border-slate-600 bg-slate-700/40 text-slate-300 group-hover:border-sky-600 group-hover:bg-slate-600/60
                          `}
                        >
                          {score}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 에러 메시지 */}
        {error && allQuestions.length > 0 && (
            <div className="bg-orange-800/50 border border-orange-600/70 rounded-lg p-3.5 mb-6 text-center shadow-md">
                <p className="text-orange-300 text-sm font-medium flex items-center justify-center">
                  <AlertTriangle size={18} className="mr-2 text-orange-400" />
                  {error}
                </p>
            </div>
        )}

        {/* 네비게이션 버튼 */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirstPage || (isLoading && allQuestions.length > 0)}
            className={`${isFirstPage || (isLoading && allQuestions.length > 0) ? navButtonDisabledStyle : prevButtonStyle}`}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
            <span>이전</span>
          </button>

          <div className="hidden sm:flex items-center space-x-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={`page-dot-${pageNum}`}
                className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${
                  pageNum - 1 === currentPage
                    ? 'bg-sky-400 w-6 shadow-md shadow-sky-500/30'
                    : 'bg-slate-600 w-2.5 hover:bg-slate-500'
                }`}
                title={`페이지 ${pageNum}`}
              />
            ))}
          </div>

          {isLastPage ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={(isLoading && allQuestions.length > 0)}
              className={`${(isLoading && allQuestions.length > 0) ? navButtonDisabledStyle : submitButtonStyle}`}
            >
              <span>{ (isLoading && allQuestions.length > 0) ? '제출 중...' : '결과 보기'}</span>
              {!(isLoading && allQuestions.length > 0) && <CheckCircle2 size={20} strokeWidth={2.5} />}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={(isLoading && allQuestions.length > 0)}
              className={`${(isLoading && allQuestions.length > 0) ? navButtonDisabledStyle : nextButtonStyle}`}
            >
              <span>다음</span>
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {/* 진행률 표시 */}
        <div className="mt-10">
          <div className="flex justify-between text-sm text-slate-400 mb-1.5 px-1">
            <span>답변 현황</span>
            <span className="font-medium text-sky-300">{Object.keys(answers).length} / {allQuestions.length}</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2.5 relative overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-500 to-cyan-400 h-full rounded-full transition-all duration-500 ease-out shadow-sm shadow-cyan-500/20"
              style={{
                width: `${allQuestions.length > 0 ? (Object.keys(answers).length / allQuestions.length) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 