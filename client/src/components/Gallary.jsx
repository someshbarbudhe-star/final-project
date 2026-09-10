import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-yellow-600 font-bold uppercase text-xs tracking-widest">Campus Highlights</h3>
        <h2 className="text-3xl font-extrabold text-blue-950 mt-1 mb-3">Photo Gallery</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm">Glimpses of infrastructure, cultural functions, sports meets, and classroom activities.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div key={item} className="h-56 bg-gray-200 rounded-xl flex flex-col items-center justify-center border border-gray-300 shadow-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-blue-950 opacity-0 group-hover:opacity-40 transition duration-300"></div>
              <i className="fa-solid fa-image text-4xl text-gray-400 mb-2"></i>
              <span className="text-gray-600 font-bold text-sm">Campus View {item}</span>
              <span className="text-xs text-gray-400">Replace with actual image</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}