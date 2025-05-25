import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { startTestSchema } from '@/lib/zod-schemas';
import type { StartTestResponse, ErrorResponse } from '@/lib/types';

/**
 * 새로운 검사 시도 시작
 * POST /api/test/start
 */
export async function POST(request: NextRequest): Promise<NextResponse<StartTestResponse | ErrorResponse>> {
  try {
    // 요청 본문 파싱
    const body = await request.json();
    
    // 입력 데이터 유효성 검사
    const validation = startTestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: '입력 데이터가 유효하지 않습니다.',
          details: validation.error.flatten()
        },
        { status: 400 }
      );
    }

    const { gender, age, user_name, user_email } = validation.data;

    // 클라이언트 정보 수집
    const ip_address = request.headers.get('x-forwarded-for') || 
      request.headers.get('x-real-ip') || 
      'unknown';
    const user_agent = request.headers.get('user-agent') || 'unknown';

    // gender, age 정보를 포함한 user_name 생성
    const displayName = user_name ? `${user_name} (${gender}, ${age}세)` : `익명 (${gender}, ${age}세)`;

    // 새로운 테스트 시도 생성
    const testAttempt = await prisma.testAttempts.create({
      data: {
        user_name: displayName,
        user_email,
        ip_address,
        user_agent,
        is_completed: false
      }
    });

    console.log(`[TEST_START] 새로운 테스트 시도 생성: ${testAttempt.id}`);

    return NextResponse.json(
      {
        success: true,
        attempt_id: testAttempt.id,
        message: '테스트가 성공적으로 시작되었습니다.'
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('[API_TEST_START_ERROR]', error);
    
    // Prisma 에러 처리
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: '데이터 검증 오류가 발생했습니다.',
          details: error.flatten()
        },
        { status: 400 }
      );
    }

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