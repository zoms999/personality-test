'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useSWR, { type SWRConfiguration, type Revalidator, type BareFetcher } from 'swr';
import Script from 'next/script';
import Image from 'next/image';
import { 
  Share2, 
  Copy, 
  CheckCircle, 
  AlertTriangle,
  ExternalLink,
  Loader2,
  RefreshCw,
  Award,
  Sparkles,
  Users,
  BrainCircuit
} from 'lucide-react';

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          buttons: Array<{
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }>;
        }) => void;
      };
    };
  }
}

interface ResultPersonalityType {
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

interface TestResultData {
  attempt_id: string;
  test_completed_at: string;
  max_score: number;
  personality_types: ResultPersonalityType[];
  is_tie: boolean;
  total_questions_answered: number;
}

interface ApiResponse {
  success: boolean;
  data?: TestResultData;
  message: string;
}

// SWR fetcher 함수
const fetcher: BareFetcher<ApiResponse> = async (url: string): Promise<ApiResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: '결과를 불러오는데 실패했습니다.' }));
    throw new Error(errorData.message || '결과를 불러오는데 실패했습니다.');
  }
  return response.json();
};

// Helper function to get image path based on personality type title
const getPersonalityImagePath = (typeTitle: string): string | null => {
  const normalizedTitle = typeTitle.toLowerCase();
  
  // 모든 성격 유형별 이미지 매핑
  if (normalizedTitle.includes('관찰형')) {
    return '/관찰형.png';
  }
  if (normalizedTitle.includes('교육형')) {
    return '/교육형.png';
  }
  if (normalizedTitle.includes('생명형')) {
    return '/생명형.png';
  }
  if (normalizedTitle.includes('소통형')) {
    return '/소통형.png';
  }
  if (normalizedTitle.includes('봉사형')) {
    return '/봉사형.png';
  }
  if (normalizedTitle.includes('분석형')) {
    return '/분석형.png';
  }
  if (normalizedTitle.includes('규범형')) {
    return '/규범형.png';
  }
  if (normalizedTitle.includes('복합형')) {
    return '/복합형.png';
  }
  if (normalizedTitle.includes('창조형')) {
    return '/창조형.png';
  }
  if (normalizedTitle.includes('추리형')) {
    return '/추리형.png';
  }
  if (normalizedTitle.includes('원리형')) {
    return '/원리형.png';
  }
  if (normalizedTitle.includes('제작형')) {
    return '/제작형.png';
  }
  if (normalizedTitle.includes('운동형')) {
    return '/운동형.png';
  }
  if (normalizedTitle.includes('진취형')) {
    return '/진취형.png';
  }
  if (normalizedTitle.includes('실용형')) {
    return '/실용형.png';
  }
  
  // 기본 이미지가 필요한 경우 (없으면 null 반환)
  return null;
};

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const attemptId = params.attempt_id as string;
  
  const [copySuccess, setCopySuccess] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);

  const { data, error, isLoading, mutate } = useSWR<ApiResponse, Error>(
    attemptId ? `/api/test/result/${attemptId}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onErrorRetry: (
        err: Error,
        key: string,
        config: Readonly<SWRConfiguration<ApiResponse, Error, BareFetcher<ApiResponse>>>,
        revalidate: Revalidator,
        { retryCount }: { retryCount: number } 
      ) => {
        if (retryCount >= 2 || err.message.includes("not found")) return; // Don't retry on 404
        setTimeout(() => revalidate({ retryCount }), 2000);
      }
    }
  );

  // 카카오 SDK 초기화 로직 개선
  useEffect(() => {
    const KAKAO_SDK_URL = "https://developers.kakao.com/sdk/js/kakao.js";
    const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;

    if (!kakaoKey) {
      console.warn("Kakao JavaScript Key is not set. Kakao Share will be unavailable.");
      setKakaoReady(false);
      return;
    }
    
    const initKakao = () => {
      if (window.Kakao && typeof window.Kakao.init === 'function') {
        if (typeof window.Kakao.isInitialized === 'function' && !window.Kakao.isInitialized()) {
          try {
            window.Kakao.init(kakaoKey);
            setKakaoReady(true);
          } catch (e) {
            console.error("Kakao.init error:", e);
            setKakaoReady(false);
          }
        } else if (typeof window.Kakao.isInitialized === 'function' && window.Kakao.isInitialized()) {
          setKakaoReady(true);
        }
      } else {
        // Kakao object might not be available yet if script is still loading
        // The 'load' event listener on the script tag will handle this.
      }
    };

    let script = document.querySelector(`script[src="${KAKAO_SDK_URL}"]`) as HTMLScriptElement;
    if (script) { // Script already exists
      if (window.Kakao) { // Kakao object already available
        initKakao();
      } else { // Kakao object not yet available, wait for script to load
        script.addEventListener('load', initKakao, { once: true });
      }
    } else { // Script does not exist, create and append
      script = document.createElement('script');
      script.src = KAKAO_SDK_URL;
      script.async = true;
      script.onload = initKakao;
      script.onerror = () => {
        console.error("Failed to load Kakao SDK.");
        setKakaoReady(false);
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleCopyUrl = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('URL 복사 실패:', err);
      alert('URL 복사에 실패했습니다. 브라우저의 클립보드 접근 권한을 확인해주세요.');
    }
  };

  const handleKakaoShare = () => {
    if (!kakaoReady || !window.Kakao?.Share?.sendDefault) {
      alert('카카오톡 공유 기능을 사용할 수 없습니다. 페이지를 새로고침하거나 잠시 후 다시 시도해주세요.');
      return;
    }

    if (!data?.success || !data.data || data.data.personality_types.length === 0) {
      alert('공유할 결과 데이터가 없습니다.');
      return;
    }

    const firstType = data.data.personality_types[0];
    const currentUrl = window.location.href;
    const imageUrl = `${window.location.origin}/og-image.png`; 

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `[나를 찾아줘!] 나의 성격 유형: ${firstType.title}`,
        description: `"${firstType.theme_sentence}"\nAI가 분석한 내 성격 유형을 확인해보세요!`,
        imageUrl: imageUrl, 
        link: { mobileWebUrl: currentUrl, webUrl: currentUrl },
      },
      buttons: [
        { title: '내 결과 자세히 보기', link: { mobileWebUrl: currentUrl, webUrl: currentUrl } },
        { title: '나도 테스트하기', link: { mobileWebUrl: `${window.location.origin}/start`, webUrl: `${window.location.origin}/start` } },
      ],
    });
  };
  
  const commonPageWrapperStyle = "min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-slate-200 flex flex-col items-center justify-center p-4 relative overflow-hidden";
  const commonCardStyle = "w-full max-w-md bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-900/30 p-8 text-center border border-slate-700/80 z-10";
  const primaryActionButtonStyle = "bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-500 hover:from-sky-400 hover:via-cyan-300 hover:to-teal-400 text-slate-900 font-bold";
  const secondaryActionButtonStyle = "bg-slate-600 hover:bg-slate-500 text-slate-100 font-semibold";
  
  const BackgroundEffects = () => (
    <>
      <div className="fixed inset-0 -z-20 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="fixed -top-1/4 -left-1/4 w-96 h-96 bg-cyan-700 rounded-full opacity-20 animate-pulse-slow filter blur-3xl mix-blend-hard-light -z-10" />
      <div className="fixed -bottom-1/4 -right-1/4 w-80 h-80 bg-purple-800 rounded-full opacity-15 animate-pulse-slower filter blur-3xl mix-blend-hard-light -z-10" />
    </>
  );

  // --- 로딩 상태 ---
  if (isLoading) {
    return (
      <div className={commonPageWrapperStyle}>
        <BackgroundEffects />
        <Loader2 size={52} className="text-sky-400 animate-spin mb-6" />
        <p className="text-xl font-semibold text-slate-100 mb-1">결과를 분석 중입니다...</p>
        <p className="text-slate-400">AI가 당신의 성향을 정밀 분석하고 있어요!</p>
      </div>
    );
  }

  // --- 에러 상태 ---
  if (error || !data?.success) {
    return (
      <div className={commonPageWrapperStyle}>
        <BackgroundEffects />
        <div className={commonCardStyle}>
          <AlertTriangle size={52} className="text-red-400 mx-auto mb-5" />
          <h2 className="text-xl font-semibold text-slate-100 mb-2">결과를 불러올 수 없습니다</h2>
          <p className="text-slate-300 mb-6">
            {error?.message || data?.message || '알 수 없는 오류로 인해 결과를 표시할 수 없습니다.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={() => mutate()}
              className={`w-full sm:w-auto flex items-center justify-center px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all ${primaryActionButtonStyle}`}
            >
              <RefreshCw size={18} className="mr-2" />
              다시 시도
            </button>
            <button
              type="button"
              onClick={() => router.push('/')}
              className={`w-full sm:w-auto flex items-center justify-center px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all ${secondaryActionButtonStyle}`}
            >
              처음으로
            </button>
          </div>
        </div>
      </div>
    );
  }

  const resultData = data.data;
  if (!resultData || resultData.personality_types.length === 0) {
    return (
      <div className={commonPageWrapperStyle}>
        <BackgroundEffects />
        <div className={commonCardStyle}>
          <BrainCircuit size={52} className="text-sky-400 mx-auto mb-5" />
          <h2 className="text-xl font-semibold text-slate-100 mb-2">결과 정보 없음</h2>
          <p className="text-slate-300 mb-6">
            테스트 결과가 아직 준비되지 않았거나, 유효하지 않은 접근입니다.
          </p>
          <button
            type="button"
            onClick={() => router.push('/')}
            className={`flex items-center justify-center px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all ${primaryActionButtonStyle}`}
          >
            테스트 다시 시작하기
          </button>
        </div>
      </div>
    );
  }
  
  const personalityTypes = resultData.personality_types;
  const primaryType = personalityTypes[0]; 
  const pageTitle = `나의 성격 유형: ${primaryType.title}`;
  const pageDescription = `옥타그노시스 성격 검사 결과, 당신은 "${primaryType.theme_sentence}" 특징을 가진 ${primaryType.title} 유형입니다.`;

  const keywordBaseStyle = "px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all hover:shadow-md";
  const strengthKeywordStyle = `${keywordBaseStyle} bg-emerald-800/60 text-emerald-200 border border-emerald-700/70 hover:bg-emerald-700/70`;
  const weaknessKeywordStyle = `${keywordBaseStyle} bg-amber-800/60 text-amber-200 border border-amber-700/70 hover:bg-amber-700/70`;

  const cardHeaderGradients = [
    'from-sky-600/80 to-cyan-700/80',
    'from-blue-700/80 to-teal-700/80',
    'from-purple-700/80 to-fuchsia-700/80',
  ];

  return (
    <>
      {/* Head에 동적으로 타이틀, 설명 추가 (SEO 및 공유 개선) */}
      <Script id="dynamic-metadata" strategy="afterInteractive">
        {`
          document.title = "${pageTitle.replace(/"/g, '\\"')}";
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', "${pageDescription.replace(/"/g, '\\"')}");
          const metaOgTitle = document.querySelector('meta[property="og:title"]');
          if (metaOgTitle) metaOgTitle.setAttribute('content', "${pageTitle.replace(/"/g, '\\"')}");
          const metaOgDesc = document.querySelector('meta[property="og:description"]');
          if (metaOgDesc) metaOgDesc.setAttribute('content', "${pageDescription.replace(/"/g, '\\"')}");
        `}
      </Script>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-slate-200 py-10 px-4 sm:px-6 lg:px-8 relative">
        <BackgroundEffects />
        <div className="max-w-3xl mx-auto z-10 relative">
          {/* --- 메인 타이틀 --- */}
          <header className="text-center mb-12">
            <div className="inline-block p-3 bg-slate-700/50 backdrop-blur-md rounded-2xl shadow-lg shadow-sky-900/30 mb-5 border border-sky-500/30">
              <Sparkles size={36} className="text-sky-300" strokeWidth={1.5}/>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-400 mb-3 leading-tight drop-shadow-[0_2px_4px_rgba(0,191,255,0.3)]">
              나를 찾았어! AI 분석 완료
            </h1>
            <p className="text-lg text-slate-300">
              {resultData.is_tie && personalityTypes.length > 1
                ? `축하해요! AI가 당신 안의 ${personalityTypes.length}가지 다채로운 성격 스펙트럼을 발견했어요!`
                : '축하해요! AI가 당신의 핵심 성격 유형을 정밀하게 분석했어요!'
              }
            </p>
            {resultData.is_tie && personalityTypes.length > 1 && (
                 <p className="text-sm text-slate-400 mt-2">아래 유형들이 비슷한 강도로 나타났습니다. 모두 당신의 소중한 모습일 수 있습니다.</p>
            )}
          </header>

          {/* --- 결과 카드들 --- */}
          <section className="space-y-10 mb-12">
            {personalityTypes.map((type: ResultPersonalityType, index: number) => {
              const imagePath = getPersonalityImagePath(type.title);
              return (
                <article key={type.id} className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-950/30 overflow-hidden border border-slate-700/70 transform hover:scale-[1.01] hover:shadow-sky-700/20 transition-all duration-300">
                  {/* 카드 헤더 */}
                  <div className={`bg-gradient-to-br ${cardHeaderGradients[index % cardHeaderGradients.length]} p-6 text-white text-center`}>
                    {imagePath && (
                      <div className="mb-4 flex justify-center items-center">
                        <Image
                          src={imagePath}
                          alt={`${type.title} 대표 이미지`}
                          width={180} 
                          height={180}
                          className="rounded-md object-contain"
                          priority={index === 0}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-2 text-left">
                      <span className="text-xs sm:text-sm font-medium opacity-80 tracking-wide">
                        {personalityTypes.length > 1 ? `내 안의 모습 #${index + 1}` : '나의 대표 유형'}
                      </span>
                      <span className="bg-slate-900/40 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                        {type.calculated_score}점 / {resultData.max_score}점
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-sm text-left">
                      {type.title}
                    </h2>
                    <p className="text-lg sm:text-xl font-semibold text-slate-100/90 text-left italic">
                      &quot;{type.theme_sentence}&quot;
                    </p>
                  </div>

                  {/* 카드 내용 */}
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-sky-300 mb-3 flex items-center">
                        <Award size={22} className="text-yellow-400 mr-2.5 flex-shrink-0" strokeWidth={1.5} />
                        이런 점이 돋보여요!
                      </h3>
                      <ul className="space-y-2.5 pl-1">
                        {type.description_points.map((point: string, i: number) => (
                          <li key={`${type.id}-desc-${i}`} className="flex items-start">
                            <CheckCircle size={18} className="text-green-400 mt-0.5 mr-2.5 flex-shrink-0" strokeWidth={2} />
                            <span className="text-slate-300 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-teal-300 mb-3">
                        ✨ 나의 강점 키워드
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {type.strength_keywords.map((keyword: string) => (
                          <span key={keyword} className={strengthKeywordStyle}>
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-amber-300 mb-3">
                        🌱 함께 성장할 점
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {type.weakness_keywords.map((keyword: string) => (
                          <span key={keyword} className={weaknessKeywordStyle}>
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* --- 공유 기능 --- */}
          <section className="bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-950/25 p-6 sm:p-8 mb-10 border border-slate-700/80">
            <h3 className="text-xl font-semibold text-sky-300 mb-6 text-center">
              결과를 친구들과 공유해보세요!
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleKakaoShare}
                disabled={!kakaoReady}
                className={`w-full flex items-center justify-center px-5 py-3 rounded-xl font-bold transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-opacity-50 shadow-lg hover:shadow-xl
                  ${ kakaoReady
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-900 focus:ring-yellow-300'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed focus:ring-slate-600'
                }`}
              >
                <Share2 size={20} className="mr-2.5" strokeWidth={2} />
                카카오톡 공유
              </button>
              
              <button
                type="button"
                onClick={handleCopyUrl}
                className={`w-full flex items-center justify-center px-5 py-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-opacity-50 shadow-lg hover:shadow-xl ${primaryActionButtonStyle} focus:ring-sky-300`}
              >
                {copySuccess ? (
                  <>
                    <CheckCircle size={20} className="mr-2.5" strokeWidth={2} />
                    링크 복사 완료!
                  </>
                ) : (
                  <>
                    <Copy size={20} className="mr-2.5" strokeWidth={2} />
                    결과 링크 복사
                  </>
                )}
              </button>
            </div>
          </section>

          {/* --- 추가 정보 링크 (CTA) --- */}
          <section className="bg-gradient-to-tr from-sky-700/80 via-blue-800/70 to-indigo-800/80 rounded-2xl shadow-xl shadow-blue-950/30 p-6 sm:p-8 mb-10 text-slate-100 text-center border border-sky-600/50">
            <Users size={40} className="mx-auto mb-4 text-sky-300 opacity-90" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-slate-50">
              나에게 꼭 맞는 진로가 궁금하다면?
            </h3>
            <p className="text-slate-300 mb-6">
              전문적인 옥타그노시스 정식 검사를 통해<br/>더 깊이있는 분석과 맞춤형 진로 정보를 확인해보세요.
            </p>
            <a
              href="https://www.octagnosis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-slate-100 hover:bg-sky-100 text-blue-700 rounded-xl font-bold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-200/70"
            >
              <ExternalLink size={20} className="mr-2.5" strokeWidth={2.5} />
              정식 검사 알아보기
            </a>
          </section>
          
          {/* --- 새로운 검사 시작 버튼 --- */}
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => router.push('/')}
              className={`px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 shadow-xl hover:shadow-2xl ${primaryActionButtonStyle} focus:ring-sky-300`}
            >
              새로운 AI 분석 시작하기
            </button>
          </div>

          {/* --- 푸터 로고/회사 정보 (간단하게) --- */}
          <footer className="mt-16 pt-8 border-t border-slate-700 text-center">
            <p className="text-sm text-slate-500">
              본 테스트는 옥타그노시스 검사의 간략화 버전입니다.
            </p>
            <p className="text-sm text-slate-500 mt-1">
              © {new Date().getFullYear()} Octagnosis AI. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
} 