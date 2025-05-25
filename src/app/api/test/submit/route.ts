import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { submitTestSchema } from '@/lib/zod-schemas';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    // 요청 본문 파싱 및 유효성 검사
    const body = await request.json();
    const validatedData = submitTestSchema.parse(body);
    
    const { attempt_id, answers } = validatedData;

    // 트랜잭션으로 답변 저장 및 결과 계산 처리
    const result = await prisma.$transaction(async (tx) => {
      // 1. TestAttempt가 존재하고 아직 완료되지 않았는지 확인
      const testAttempt = await tx.testAttempts.findUnique({
        where: { id: attempt_id },
      });

      if (!testAttempt) {
        throw new Error('해당 테스트 시도를 찾을 수 없습니다.');
      }

      if (testAttempt.is_completed) {
        throw new Error('이미 완료된 테스트입니다.');
      }

      // 2. 기존 답변이 있는지 확인 (중복 제출 방지)
      const existingAnswers = await tx.userAnswers.findFirst({
        where: { test_attempt_id: attempt_id },
      });

      if (existingAnswers) {
        throw new Error('이미 답변이 제출된 테스트입니다.');
      }

      // 3. 질문 정보와 타입 매핑 조회
      const questions = await tx.questions.findMany({
        include: {
          personality_type: true,
        },
        orderBy: { id: 'asc' },
      });

      // 질문 ID로 빠른 조회를 위한 맵 생성
      const questionsMap = new Map(questions.map(q => [q.id, q]));

      // 4. 제출된 답변의 질문 ID가 모두 유효한지 확인
      const invalidQuestionIds = answers.filter(answer => 
        !questionsMap.has(answer.question_id)
      );

      if (invalidQuestionIds.length > 0) {
        throw new Error(`유효하지 않은 질문 ID가 있습니다: ${invalidQuestionIds.map(a => a.question_id).join(', ')}`);
      }

      // 5. 모든 답변을 UserAnswers 테이블에 저장
      const userAnswersData = answers.map(answer => ({
        id: crypto.randomUUID(),
        test_attempt_id: attempt_id,
        question_id: answer.question_id,
        answer_option: answer.score.toString(), // 점수를 문자열로 저장
        score: answer.score,
        created_at: new Date(),
      }));

      await tx.userAnswers.createMany({
        data: userAnswersData,
      });

      // 6. 성격 유형별 점수 계산
      const typeScores = new Map<string, number>();

      // 모든 성격 유형 ID 초기화
      const allPersonalityTypes = await tx.personalityTypes.findMany({
        select: { id: true },
      });

      for (const type of allPersonalityTypes) {
        typeScores.set(type.id, 0);
      }

      // 답변별로 해당 성격 유형에 점수 합산
      for (const answer of answers) {
        const question = questionsMap.get(answer.question_id);
        if (question) {
          const currentScore = typeScores.get(question.personality_type_id) || 0;
          typeScores.set(question.personality_type_id, currentScore + answer.score);
        }
      }

      // 7. TestResults 테이블에 단일 레코드로 모든 유형별 점수 저장
      let maxScore = -1;
      let primaryPersonalityTypeId: string | null = null;

      // Map을 일반 객체로 변환 (JSON으로 저장하기 위함)
      const allTypeScoresObject: Record<string, number> = {};
      typeScores.forEach((score, typeId) => {
        allTypeScoresObject[typeId] = score;
        if (score > maxScore) {
          maxScore = score;
          primaryPersonalityTypeId = typeId;
        }
      });

      // 동점 처리: 최고점이 같은 유형이 여러 개 있는 경우
      if (maxScore > 0) {
        const tiedTypes: string[] = [];
        typeScores.forEach((score, typeId) => {
          if (score === maxScore) {
            tiedTypes.push(typeId);
          }
        });

        // 동점인 경우 첫 번째 유형을 대표로 선택 (추후 더 정교한 로직 적용 가능)
        if (tiedTypes.length > 1) {
          primaryPersonalityTypeId = tiedTypes[0];
        }
      }

      // TestResults 테이블에 단일 레코드 생성
      await tx.testResults.create({
        data: {
          test_attempt_id: attempt_id,
          primary_personality_type_id: primaryPersonalityTypeId,
          total_scores: allTypeScoresObject, // Prisma 스키마의 total_scores 필드 사용
          percentage_scores: {}, // 빈 객체로 초기화
        },
      });

      // 8. TestAttempt를 완료 상태로 업데이트
      await tx.testAttempts.update({
        where: { id: attempt_id },
        data: {
          is_completed: true,
          updated_at: new Date(),
        },
      });

      return { success: true, attempt_id: attempt_id };
    });

    return NextResponse.json({
      success: true,
      attempt_id: result.attempt_id,
      message: '답변이 성공적으로 제출되고 결과가 계산되었습니다.',
    }, { status: 201 });

  } catch (error) {
    console.error('답변 제출 처리 중 오류 발생:', error);

    // Zod 유효성 검사 오류
    if (error instanceof ZodError) {
      return NextResponse.json({
        success: false,
        error: '입력 데이터가 유효하지 않습니다.',
        details: error.errors,
      }, { status: 400 });
    }

    // 비즈니스 로직 오류 (트랜잭션 내에서 throw된 Error)
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        error: error.message,
      }, { status: 400 });
    }

    // 기타 예상치 못한 오류
    return NextResponse.json({
      success: false,
      error: '답변 제출 처리 중 오류가 발생했습니다.',
    }, { status: 500 });
  }
} 