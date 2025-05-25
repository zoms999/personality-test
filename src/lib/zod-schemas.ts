import { z } from 'zod';

/**
 * 테스트 시작 요청 스키마
 */
export const startTestSchema = z.object({
  gender: z.string()
    .min(1, '성별을 선택해주세요.')
    .regex(/^(male|female)$/, '유효한 성별을 선택해주세요. (male 또는 female)'),
  age: z.number()
    .int('나이는 정수여야 합니다.')
    .min(1, '나이는 1세 이상이어야 합니다.')
    .max(120, '나이는 120세 이하여야 합니다.'),
  user_name: z.string()
    .min(1, '이름을 입력해주세요.')
    .max(100, '이름은 100자 이하로 입력해주세요.')
    .optional(),
  user_email: z.string()
    .email('유효한 이메일 주소를 입력해주세요.')
    .max(255, '이메일은 255자 이하로 입력해주세요.')
    .optional()
});

/**
 * 답변 제출 요청 스키마
 */
export const submitAnswerSchema = z.object({
  attempt_id: z.string()
    .uuid('유효한 테스트 ID를 입력해주세요.'),
  question_id: z.number()
    .int('질문 ID는 정수여야 합니다.')
    .min(1, '유효한 질문 ID를 입력해주세요.'),
  score: z.number()
    .int('점수는 정수여야 합니다.')
    .min(1, '점수는 1점 이상이어야 합니다.')
    .max(10, '점수는 10점 이하여야 합니다.'),
  answer_time: z.number()
    .int('답변 시간은 정수여야 합니다.')
    .min(0, '답변 시간은 0 이상이어야 합니다.')
    .optional()
});

/**
 * 테스트 완료 요청 스키마
 */
export const completeTestSchema = z.object({
  attempt_id: z.string()
    .uuid('유효한 테스트 ID를 입력해주세요.')
});

/**
 * 쿼리 매개변수 스키마들
 */

// 테스트 결과 조회용
export const resultQuerySchema = z.object({
  attempt_id: z.string()
    .uuid('유효한 테스트 ID를 입력해주세요.')
    .optional(),
  share_token: z.string()
    .min(1, '공유 토큰을 입력해주세요.')
    .optional()
}).refine(
  (data) => data.attempt_id || data.share_token,
  {
    message: 'attempt_id 또는 share_token 중 하나는 반드시 제공되어야 합니다.',
    path: ['attempt_id']
  }
);

// 통계 조회용
export const statisticsQuerySchema = z.object({
  gender: z.string()
    .regex(/^(male|female)$/, '유효한 성별을 선택해주세요.')
    .optional(),
  age_min: z.number()
    .int('최소 나이는 정수여야 합니다.')
    .min(1, '최소 나이는 1세 이상이어야 합니다.')
    .optional(),
  age_max: z.number()
    .int('최대 나이는 정수여야 합니다.')
    .max(120, '최대 나이는 120세 이하여야 합니다.')
    .optional(),
  personality_type: z.string()
    .min(1, '성격 유형을 입력해주세요.')
    .optional()
}).refine(
  (data) => !data.age_min || !data.age_max || data.age_min <= data.age_max,
  {
    message: '최소 나이는 최대 나이보다 작거나 같아야 합니다.',
    path: ['age_min']
  }
);

/**
 * 개별 답변 스키마 (새로운 제출 방식용)
 */
export const answerSchema = z.object({
  question_id: z.number()
    .int('질문 ID는 정수여야 합니다.')
    .min(1, '유효한 질문 ID를 입력해주세요.'),
  score: z.number()
    .int('점수는 정수여야 합니다.')
    .min(1, '점수는 1점 이상이어야 합니다.')
    .max(10, '점수는 10점 이하여야 합니다.')
});

/**
 * 테스트 전체 답변 제출 스키마
 */
export const submitTestSchema = z.object({
  attempt_id: z.string()
    .uuid('유효한 테스트 시도 ID를 입력해주세요.'),
  answers: z.array(answerSchema)
    .length(45, '모든 45개의 질문에 답변해주세요.')
    .refine(
      (answers) => {
        const questionIds = answers.map(a => a.question_id);
        const uniqueIds = new Set(questionIds);
        return uniqueIds.size === questionIds.length;
      },
      {
        message: '중복된 질문 ID가 있습니다. 각 질문에는 한 번씩만 답변해주세요.',
      }
    )
});

/**
 * 타입 추론을 위한 타입 내보내기
 */
export type StartTestInput = z.infer<typeof startTestSchema>;
export type SubmitAnswerInput = z.infer<typeof submitAnswerSchema>;
export type CompleteTestInput = z.infer<typeof completeTestSchema>;
export type ResultQueryInput = z.infer<typeof resultQuerySchema>;
export type StatisticsQueryInput = z.infer<typeof statisticsQuerySchema>;
export type AnswerInput = z.infer<typeof answerSchema>;
export type SubmitTestInput = z.infer<typeof submitTestSchema>; 