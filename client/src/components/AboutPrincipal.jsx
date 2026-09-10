import React from 'react';

export default function AboutPrincipal() {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs bg-blue-100 px-3.5 py-1.5 rounded-full">
            Institutional Heritage
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            About BPS Balaghat & Leadership
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Committed to building ethical, sharp, and confident individuals through modern scholastic frameworks.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Principal Desk Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 relative group hover:shadow-2xl transition duration-300">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wider">
                Principal Desk
              </div>
              <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-blue-900 to-slate-800 rounded-2xl mb-6 shadow-md flex items-center justify-center text-white text-3xl font-black border-4 border-amber-400">
                BPS
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center">Dr. / Mr. Principal</h3>
              <p className="text-xs text-blue-700 font-semibold text-center uppercase tracking-wider mt-1">
                Balaghat Public School
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="italic text-slate-600 text-xs leading-relaxed">
                  "Education is not just about academic scores; it is about shaping character, igniting curiosity, and preparing students for the real world."
                </p>
              </div>
            </div>
          </div>

          {/* About School Details */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
              Empowering Students with Knowledge, Values, and Innovation
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Balaghat Public School (BPS Balaghat) stands as a premier co-educational institution delivering world-class English medium education. Our approach combines rigorous academic training with dynamic co-curricular activities.
            </p>
            
            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Smart Classrooms</h4>
                  <p className="text-xs text-slate-500">Digital board enabled learning</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-bold flex items-center justify-center">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Expert Faculty</h4>
                  <p className="text-xs text-slate-500">Highly qualified mentors</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Secure Campus</h4>
                  <p className="text-xs text-slate-500">24/7 CCTV surveillance</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-bold flex items-center justify-center">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sports & Arts</h4>
                  <p className="text-xs text-slate-500">Holistic physical development</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}