
import React from 'react';
import AdmissionsAssistant from './components/AdmissionsAssistant.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center p-6 md:p-12 lg:p-16 gap-12 lg:gap-20 max-w-[1600px] mx-auto overflow-y-auto">
      {/* Content Side - Desktop Left, Mobile Top */}
      <div className="w-full lg:flex-1 flex flex-col justify-center space-y-8 md:space-y-12 order-1 lg:order-1">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600 rounded-full shadow-xl shadow-indigo-100/50">
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mono-text">Advanced Admissions Logic</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            Admissions <br /> 
            <span className="text-slate-400 font-light">powered by</span> <br /> 
            Intelligence.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
            EduPath utilizes a high-performance admissions chatbot to automate university selection, essay strategy, and requirement tracking in seconds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg">
          <div className="flex gap-5 items-start">
            <div className="shrink-0 w-14 h-14 bg-white shadow-2xl border border-slate-100 rounded-2xl flex items-center justify-center text-indigo-600">
              <i className="fas fa-microchip text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Algorithmic Matching</h3>
              <p className="text-sm text-slate-500 mt-1.5 leading-snug">Processing university catalogs to find your perfect academic fit.</p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="shrink-0 w-14 h-14 bg-white shadow-2xl border border-slate-100 rounded-2xl flex items-center justify-center text-indigo-600">
              <i className="fas fa-bolt text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Instant Feedback</h3>
              <p className="text-sm text-slate-500 mt-1.5 leading-snug">Get immediate responses to policy and requirement queries.</p>
            </div>
          </div>
        </div>
        
        {/* Statistics Tag */}
        <div className="hidden lg:flex items-center gap-6 pt-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 789}`} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 shadow-sm" />
              ))}
            </div>
            <div className="text-sm">
                <p className="font-bold text-slate-900">10,000+ Queries processed today</p>
                <p className="text-slate-400 text-xs font-semibold">24/7 Automated Support Active</p>
            </div>
        </div>
      </div>

      {/* Chat Side - Desktop Right, Mobile Bottom */}
      <div className="w-full lg:flex-[1.1] xl:flex-1 h-[650px] md:h-[800px] lg:h-[85vh] min-h-[550px] flex flex-col relative order-2 lg:order-2 mb-12 lg:mb-0">
        <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-100/40 via-transparent to-slate-200/30 blur-3xl rounded-full opacity-60 -z-10 animate-pulse-soft"></div>
        
        <div className="relative flex-1 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] rounded-[2.5rem] border border-slate-200/40 overflow-hidden flex flex-col transition-all">
          <AdmissionsAssistant />
        </div>

        {/* Status Indicators */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
          <div className="flex lg:hidden items-center gap-4">
             <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 shadow-sm" />
              ))}
            </div>
            <p className="text-[11px] font-bold text-slate-900">Automated Assistance</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] mono-text text-slate-400 uppercase tracking-widest font-bold">Secure AI Connection Established</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
