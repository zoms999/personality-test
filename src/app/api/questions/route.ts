import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { QuestionsResponse, ErrorResponse } from '@/lib/types';

/**
 * 검사 질문 목록 조회
 * GET /api/questions
 */
export async function GET(request: NextRequest): Promise<NextResponse<QuestionsResponse | ErrorResponse>> {
  try {
    console.log('[API_QUESTIONS_GET] 질문 목록 조회 요청');

    // 모든 활성 질문 조회 (성격 유형 정보 포함)
    const questions = await prisma.questions.findMany({
      where: {
        is_active: true
      },
      include: {
        personality_type: {
          select: {
            id: true,
            type_code: true,
            type_name: true,
            title: true
          }
        }
      },
      orderBy: [
        {
          personality_type_id: 'asc'
        },
        {
          question_order_in_type: 'asc'
        }
      ]
    });

    console.log(`[API_QUESTIONS_GET] 조회된 질문 수: ${questions.length}`);

    // 응답 데이터 구성
    const response: QuestionsResponse = {
      success: true,
      questions: questions.map(question => ({
        id: question.id,
        personality_type_id: question.personality_type_id,
        question_text: question.question_text,
        question_order_in_type: question.question_order_in_type,
        is_active: question.is_active,
        created_at: question.created_at,
        updated_at: question.updated_at,
        personality_type: question.personality_type ? {
          id: question.personality_type.id,
          type_code: question.personality_type.type_code,
          type_name: question.personality_type.type_name,
          title: question.personality_type.title,
          theme_sentence: '',
          description: '',
          description_points: [],
          strength_keywords: [],
          weakness_keywords: [],
          created_at: new Date(),
          updated_at: new Date()
        } : undefined
      })),
      total_count: questions.length
    };

    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    console.error('[API_QUESTIONS_GET_ERROR]', error);

    // 데이터베이스 연결 오류
    if (error && typeof error === 'object' && 'code' in error) {
      return NextResponse.json(
        {
          success: false,
          error: '데이터베이스 연결 오류가 발생했습니다.',
          details: process.env.NODE_ENV === 'development' ? error : undefined
        },
        { status: 500 }
      );
    }

    // 일반적인 서버 오류
    return NextResponse.json(
      {
        success: false,
        error: '서버 내부 오류가 발생했습니다.'
      },
      { status: 500 }
    );
  }
} 