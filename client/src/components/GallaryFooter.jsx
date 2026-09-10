import React from 'react';

export default function GalleryFooter() {
  return (
    <div>
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs bg-blue-100 px-3.5 py-1.5 rounded-full">
            Campus Glimpses
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight mb-3">
            Photo Gallery
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-12">
            A visual tour of our modern infrastructure, science laboratories, sports tournaments, and annual cultural functions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Smart Digital Classroom", tag: "Academics" },
              { title: "Advanced Computer Lab", tag: "Technology" },
              { title: "Spacious Sports Ground", tag: "Extracurricular" },
              { title: "Science Physics & Chemistry Lab", tag: "Laboratories" },
              { title: "Annual Cultural Fest", tag: "Events" },
              { title: "Library & Reading Hall", tag: "Resources" }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-64 bg-slate-200 rounded-3xl overflow-hidden shadow-md border border-slate-300 flex flex-col items-center justify-center p-6 transition transform hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
                <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider z-10">
                  {item.tag}
                </span>
                <div className="absolute bottom-6 left-6 right-6 text-left z-10">
                  <h3 className="text-white font-bold text-lg leading-snug">{item.title}</h3>
                  <p className="text-slate-300 text-xs mt-1">Balaghat Public School Campus</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-16 pb-8 border-t-4 border-amber-500">
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-10 mb-12">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 text-slate-950 font-black flex items-center justify-center rounded-xl text-xl">
                BPS
              </div>
              <h3 className="text-xl font-black tracking-wider text-white">BALAGHAT PUBLIC SCHOOL</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Dedicated to delivering holistic education, fostering intellectual growth, and building moral character for the leaders of tomorrow.
            </p>
            <div className="flex space-x-3 pt-2">
              <span className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 cursor-pointer transition">🌐</span>
              <span className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 cursor-pointer transition">📘</span>
              <span className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 cursor-pointer transition">▶</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-amber-400 transition">Home Portal</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition">About Principal Desk</a></li>
              <li><a href="#notices" className="hover:text-amber-400 transition">Notice Board & Notices</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition">Campus Photo Gallery</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-base font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">Official Contact</h4>
            <p className="text-sm text-slate-300 flex items-center gap-3">
              <span className="text-amber-400">📍</span> Balaghat, Madhya Pradesh, India
            </p>
            <p className="text-sm text-slate-300 flex items-center gap-3">
              <span className="text-amber-400">📞</span> +91 XXXXXXXXXX / Support Desk
            </p>
            <p className="text-sm text-slate-300 flex items-center gap-3">
              <span className="text-amber-400">✉️</span> info@bpsbalaghat.com
            </p>
          </div>

        </div>

        <div className="container mx-auto px-4 border-t border-slate-900 pt-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Balaghat Public School (BPS Balaghat). All Rights Reserved.</p>
          <p className="text-amber-400 font-medium">Final Year MERN Stack Showcase Project</p>
        </div>
      </footer>
    </div>
  );
}