import React from 'react';

export default function Hero() {
  return (
    <section className="relative hero-gradient text-white py-24 md:py-32 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column - Text Details */}
        <div className="md:col-span-7 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Session 2026-27 Admissions Live
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Shaping Future Leaders at <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">BPS Balaghat</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-normal mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            A blend of world-class scholastic curriculum, moral discipline, and cutting-edge digital infrastructure designed for holistic student development.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#notices" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-xl transition transform hover:-translate-y-1">
              View Notices
            </a>
            <a href="#about" className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm uppercase tracking-wider backdrop-blur-md transition">
              Explore Campus
            </a>
          </div>
        </div>

        {/* Right Column - Presentation Visual Card */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-md glass-card p-6 rounded-3xl shadow-2xl text-slate-900 border border-white/20 animate-float">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">MERN Stack Project</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Final Year Showcase</h3>
              </div>
              <div className="w-12 h-12 bg-amber-500 text-slate-950 font-black rounded-2xl flex items-center justify-center shadow-md text-xl">
                ★
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Interactive school web portal built with React, Node.js & Express featuring dynamic notice management and high-performance design.
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wide block mb-1">Status: Fully Operational</span>
              <span className="text-[11px] text-emerald-600 font-medium">● Live Server Connected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}