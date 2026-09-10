import React from 'react';

export default function HeroSlider() {
  return (
    <section className="relative bg-blue-900 text-white py-24 md:py-32 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1600")' }}>
      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="bg-yellow-500 text-blue-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-widest">
          Welcome to BPS Balaghat
        </span>
        <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
          Nurturing Minds, <span className="text-yellow-400">Building Character</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 text-lg mb-10 font-normal">
          Empowering students with strong ethical values, modern technical education, and absolute academic rigor.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#notices" className="bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold px-8 py-3.5 rounded-lg shadow-lg transition">
            Explore Notices
          </a>
          <a href="#contact" className="border-2 border-white hover:bg-white hover:text-blue-950 font-bold px-8 py-3.5 rounded-lg transition">
            Admission Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}