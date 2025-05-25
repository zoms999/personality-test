import Link from "next/link";
import { ChevronRight, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 flex flex-col items-center justify-center px-4 py-12 overflow-hidden relative text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full animate-pulse-slow filter blur-3xl opacity-70" />
        <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-purple-600/20 rounded-full animate-pulse-slower filter blur-3xl opacity-60" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-sky-700/15 rounded-full animate-pulse-even-slower filter blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-teal-500/20 rounded-full animate-pulse filter blur-3xl opacity-40" />
      </div>

      <div className="absolute inset-0 -z-20 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23909090' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-gradient-to-br from-sky-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl border border-sky-400/30 shadow-xl shadow-blue-500/30 hover:shadow-sky-400/40 transition-all duration-300 transform hover:scale-105">
            <BrainCircuit size={56} className="text-sky-300" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-400 leading-tight drop-shadow-[0_2px_4px_rgba(0,191,255,0.5)]">
          나를 찾아줘!!
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto">
          <span className="font-semibold text-cyan-400">10만 1천 4백명</span>의 성공을 만든 옥타그노시스 검사,
          <br />
          그 핵심을 담은 <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">&apos;나를 찾아줘!&apos;</span> 버전을 지금 시작하세요!
        </p>
        
        <div className="pt-8">
          <Link 
            href="/start"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-500 hover:from-sky-400 hover:via-cyan-300 hover:to-teal-400 text-slate-900 font-bold text-xl px-10 py-4 rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-50"
          >
            검사 시작하기
            <ChevronRight size={24} className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
        
        <div className="pt-12">
          <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
            * 본 무료 테스트는 옥타그노시스 검사의 축약본으로, 일부 성향만 나타날 수 있습니다.
            정확한 진단 및 상세 결과는 정식 검사를 통해 확인하시기 바랍니다.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-900/90 to-transparent pointer-events-none" />
    </div>
  );
}
