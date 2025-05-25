# 나를 찾아줘! - 온라인 성격 유형 검사 애플리케이션

이 프로젝트는 사용자들이 성격 유형 검사를 통해 자신의 성격 유형을 알아볼 수 있는 웹 애플리케이션입니다.

## 기술 스택

- **프레임워크:** Next.js (App Router)
- **언어:** TypeScript
- **스타일링:** Tailwind CSS
- **데이터베이스:** PostgreSQL
- **ORM:** Prisma
- **상태 관리:** Zustand
- **폼 처리:** React Hook Form + Zod
- **데이터 페칭:** SWR
- **아이콘:** Lucide React
- **소셜 공유:** Next Share

## 로컬 개발 환경 설정

1. **저장소 클론:**
   ```bash
   git clone <repository-url>
   cd personality-test-app
   ```

2. **의존성 설치:**
   ```bash
   npm install
   ```

3. **환경 변수 설정:**
   `.env.local` 파일을 생성하고 다음과 같이 설정하세요:
   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY="your_kakao_javascript_app_key"
   ```

4. **데이터베이스 마이그레이션:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **개발 서버 실행:**
```bash
npm run dev
```
   이제 [http://localhost:3000](http://localhost:3000)에서 애플리케이션에 접속할 수 있습니다.

## 프로젝트 구조

```
personality-test-app/
├── prisma/
│   └── schema.prisma       # 데이터베이스 스키마 정의
├── public/                 # 정적 파일 (이미지, 폰트 등)
├── src/
│   ├── app/                # Next.js App Router 페이지
│   ├── components/         # 재사용 가능한 컴포넌트
│   └── lib/                # 유틸리티 함수 및 공통 코드
│       ├── prisma.ts       # Prisma 클라이언트 인스턴스
│       ├── types.ts        # TypeScript 타입 정의
│       └── zod-schemas.ts  # Zod 유효성 검사 스키마
└── ...
```

## 주요 기능

- 성격 유형 검사 설문지
- 결과 분석 및 성격 유형 표시
- 결과 공유 기능
- 이전 검사 결과 저장 (로그인 사용자)

## 라이센스

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
