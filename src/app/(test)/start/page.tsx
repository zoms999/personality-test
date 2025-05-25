'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, ArrowRight, Loader2, Check, BrainCircuit } from 'lucide-react';

type AgeRange = 'under18' | '19-25' | '26-50' | 'over51';
type Gender = 'male' | 'female';

// 나이대를 대표 나이값으로 변환하는 함수
const getRepresentativeAge = (ageRange: AgeRange): number => {
  switch (ageRange) {
    case 'under18':
      return 15;
    case '19-25':
      return 22;
    case '26-50':
      return 38;
    case 'over51':
      return 55;
    default:
      return 25;
  }
};

export default function StartTestPage() {
  const router = useRouter();
  
  // 상태 관리
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState<AgeRange | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 성별 버튼 데이터
  const genderOptions = [
    { value: 'male' as Gender, label: '남자', icon: <User size={20} strokeWidth={1.5} /> },
    { value: 'female' as Gender, label: '여자', icon: <User size={20} strokeWidth={1.5} /> }
  ];

  // 나이 버튼 데이터
  const ageOptions = [
    { value: 'under18' as AgeRange, label: '18세 이하' },
    { value: '19-25' as AgeRange, label: '19~25세' },
    { value: '26-50' as AgeRange, label: '26~50세' },
    { value: 'over51' as AgeRange, label: '51세 이상' }
  ];

  // API 호출 함수
  const handleNext = async () => {
    if (!selectedGender || !selectedAgeRange) {
      setError('성별과 나이를 모두 선택해주세요.');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const requestData = {
        gender: selectedGender,
        age: getRepresentativeAge(selectedAgeRange),
      };

      const response = await fetch('/api/test/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || '테스트 시작에 실패했습니다.');
      }

      if (result.success && result.attempt_id) {
        router.push(`/questions?attemptId=${result.attempt_id}`);
      } else {
        throw new Error('서버 응답이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('API 호출 오류:', error);
      setError(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 버튼 스타일 (선택/미선택)
  const buttonBaseStyle = "group flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl border-2 transition-all duration-200 ease-in-out transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-opacity-70";
  const buttonUnselectedStyle = "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-sky-500 hover:bg-slate-700/70 hover:text-sky-300 focus:ring-sky-400";
  const buttonSelectedStyle = "border-sky-400 bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-cyan-500/30 scale-[1.02] focus:ring-sky-300";
  const iconSelectedStyle = "text-white";
  const iconUnselectedStyle = "text-slate-400 group-hover:text-sky-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-12 px-4 flex flex-col items-center justify-center text-slate-100">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 -z-20 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23909090' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      {/* Animated Background Blobs (optional, for consistency) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-80 h-80 bg-blue-600/20 rounded-full animate-pulse-slow filter blur-3xl opacity-60" />
        <div className="absolute -bottom-1/4 -right-1/4 w-72 h-72 bg-purple-700/15 rounded-full animate-pulse-slower filter blur-3xl opacity-50" />
      </div>

      {/* 로고 또는 서비스 이름 */}
      <div className="text-center mb-10">
        <div className="w-14 h-14 mx-auto mb-4 p-3 bg-gradient-to-br from-sky-500/30 to-blue-600/30 backdrop-blur-md rounded-2xl border border-sky-400/40 shadow-lg shadow-blue-500/20 flex items-center justify-center">
          <BrainCircuit size={32} className="text-sky-300" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-1">
          옥타그노시스
        </h1>
        <p className="text-md text-slate-400">당신의 성향을 알아보세요!</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-lg bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-900/30 p-8 space-y-8 border border-slate-700/80">
        {/* 성별 선택 */}
        <div>
          <h2 className="text-xl font-semibold text-sky-300 mb-1">성별</h2>
          <p className="text-sm text-slate-400 mb-4">정확한 분석을 위해 성별을 선택해주세요.</p>
          <div className="grid grid-cols-2 gap-4">
            {genderOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedGender(option.value)}
                className={`${buttonBaseStyle} ${
                  selectedGender === option.value
                    ? buttonSelectedStyle
                    : buttonUnselectedStyle
                }`}
                disabled={isLoading}
              >
                {selectedGender === option.value && <Check size={20} strokeWidth={2.5} className="mr-1 text-white" />}
                <span className={selectedGender === option.value ? iconSelectedStyle : iconUnselectedStyle}>
                  {option.icon}
                </span>
                <span className="font-medium text-sm sm:text-base">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 나이 선택 */}
        <div>
          <h2 className="text-xl font-semibold text-sky-300 mb-1">나이대</h2>
          <p className="text-sm text-slate-400 mb-4">나이대에 맞는 분석 결과를 제공합니다.</p>
          <div className="grid grid-cols-2 gap-4">
            {ageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedAgeRange(option.value)}
                className={`${buttonBaseStyle} ${
                  selectedAgeRange === option.value
                    ? buttonSelectedStyle
                    : buttonUnselectedStyle
                }`}
                disabled={isLoading}
              >
                {selectedAgeRange === option.value && <Check size={20} strokeWidth={2.5} className="mr-1 text-white" />}
                <span className="font-medium text-sm sm:text-base">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-700/30 border border-red-500/50 rounded-lg p-3 text-center">
            <p className="text-red-300 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* 다음 버튼 */}
        <div className="pt-4">
          <button
            type="button"
            onClick={handleNext}
            disabled={isLoading || !selectedGender || !selectedAgeRange}
            className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-bold text-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-opacity-60
              ${
                isLoading || !selectedGender || !selectedAgeRange
                  ? 'bg-slate-600 text-slate-400 cursor-not-allowed focus:ring-slate-500'
                  : 'bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-500 hover:from-sky-400 hover:via-cyan-300 hover:to-teal-400 text-slate-900 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 focus:ring-sky-300'
              }`}
          >
            {isLoading ? (
              <>
                <Loader2 size={24} className="animate-spin mr-2 text-sky-300" />
                <span className="text-slate-200">다음 단계로 이동 중...</span>
              </>
            ) : (
              <>
                <span>NEXT</span>
                <ArrowRight size={22} strokeWidth={2.5} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* 진행 표시 */}
      <div className="mt-10 w-full max-w-lg">
        <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 px-1">
          <span className="font-medium text-sky-300">정보 입력</span>
          <span>성향 분석</span>
          <span>결과 확인</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5 relative">
          <div
            className="bg-gradient-to-r from-sky-500 to-cyan-400 h-2.5 rounded-full transition-all duration-500 ease-out shadow-md shadow-cyan-500/30"
            style={{ width: '33%' }}
          />
          {/* Current Step Indicator Dot */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-800 border-2 border-sky-400 rounded-full shadow-md"
            style={{ left: 'calc(33% - 8px)' }}
          />
        </div>
      </div>
    </div>
  );
} 