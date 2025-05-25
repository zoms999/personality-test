/**
 * 성격 유형 타입
 */
export interface PersonalityType {
  id: string;
  type_code: string;
  type_name: string;
  title: string;
  theme_sentence: string;
  description: string;
  description_points: string[];
  strength_keywords: string[];
  weakness_keywords: string[];
  created_at: Date;
  updated_at: Date;
}

/**
 * 질문 타입
 */
export interface Question {
  id: number;
  personality_type_id: string;
  question_text: string;
  question_order_in_type: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  personality_type?: PersonalityType;
}

/**
 * 테스트 시도 타입
 */
export interface TestAttempt {
  id: string;
  session_id?: string;
  user_name?: string;
  user_email?: string;
  ip_address?: string;
  user_agent?: string;
  is_completed: boolean;
  completion_time?: number;
  created_at: Date;
  updated_at: Date;
}

/**
 * 사용자 답변 타입
 */
export interface UserAnswer {
  id: string;
  test_attempt_id: string;
  question_id: number;
  answer_option: string;
  score: number;
  answer_time?: number;
  created_at: Date;
}

/**
 * 테스트 결과 타입
 */
export interface TestResult {
  id: string;
  test_attempt_id: string;
  personality_type_id: string;
  total_score: Record<string, number>;
  percentage_scores: Record<string, number>;
  detailed_analysis?: Record<string, unknown>;
  recommendations?: Record<string, unknown>;
  share_token?: string;
  is_shared: boolean;
  created_at: Date;
  personality_type?: PersonalityType;
}

/**
 * API 요청/응답 타입들
 */

// 테스트 시작 요청
export interface StartTestRequest {
  gender: string;
  age: number;
  user_name?: string;
  user_email?: string;
}

// 테스트 시작 응답
export interface StartTestResponse {
  success: boolean;
  attempt_id: string;
  message: string;
}

// 질문 목록 응답
export interface QuestionsResponse {
  success: boolean;
  questions: Question[];
  total_count: number;
}

// 답변 제출 요청
export interface SubmitAnswerRequest {
  attempt_id: string;
  question_id: number;
  score: number;
  answer_time?: number;
}

// 답변 제출 응답
export interface SubmitAnswerResponse {
  success: boolean;
  message: string;
}

// 테스트 완료 요청
export interface CompleteTestRequest {
  attempt_id: string;
}

// 테스트 완료 응답
export interface CompleteTestResponse {
  success: boolean;
  result_id: string;
  personality_types: PersonalityType[];
  share_url: string;
  message: string;
}

// 통계 데이터 타입
export interface StatisticsData {
  total_tests: number;
  gender_distribution: Record<string, number>;
  age_distribution: Record<string, number>;
  personality_distribution: Record<string, number>;
  gender_personality_distribution: Record<string, Record<string, number>>;
  age_personality_distribution: Record<string, Record<string, number>>;
}

// 에러 응답 타입
export interface ErrorResponse {
  success: false;
  error: string;
  details?: unknown;
}

// 성공 응답 타입
export interface SuccessResponse<T = unknown> {
  success: true;
  data?: T;
  message?: string;
}

// API 응답 통합 타입
export type ApiResponse<T = unknown> = SuccessResponse<T> | ErrorResponse;

// 새로운 제출 방식 타입들

// 개별 답변 타입
export interface Answer {
  question_id: number;
  score: number;
}

// 테스트 전체 답변 제출 요청
export interface SubmitTestRequest {
  attempt_id: number;
  answers: Answer[];
}

// 테스트 전체 답변 제출 응답
export interface SubmitTestResponse {
  success: boolean;
  attempt_id: string;
  message: string;
}

// 테스트 결과 조회 응답에서 사용되는 성격 유형 정보
export interface ResultPersonalityType {
  id: string;
  type_code: string;
  type_name: string;
  title: string;
  theme_sentence: string;
  description: string;
  description_points: string[];
  strength_keywords: string[];
  weakness_keywords: string[];
  calculated_score: number;
}

// 테스트 결과 조회 응답
export interface TestResultResponse {
  success: boolean;
  data: {
    attempt_id: string;
    test_completed_at: Date;
    max_score: number;
    personality_types: ResultPersonalityType[];
    is_tie: boolean;
    total_questions_answered: number;
  };
  message: string;
} 