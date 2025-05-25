/** @type {import('next').NextConfig} */
const nextConfig = {
  // API 요청에 대한 설정
  async headers() {
    return [
      {
        // 모든 API 경로에 대해 적용
        source: '/api/:path*',
        headers: [
          // CORS 설정
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
  // ESLint 검사 비활성화
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 타입 검사 비활성화
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 