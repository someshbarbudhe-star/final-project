import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-xl">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 font-black flex items-center justify-center rounded-xl shadow-lg text-xl transform hover:rotate-6 transition">
            BPS
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
              BPS BALAGHAT
            </h1>
            <p className="text-[10px] text-amber-400 tracking-widest font-semibold uppercase">Excellence in Education</p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium text-sm">
          <a href="#" className="hover:text-amber-400 transition">Home</a>
          <a href="#about" className="hover:text-amber-400 transition">About Us</a>
          <a href="#academics" className="hover:text-amber-400 transition">Academics</a>
          <a href="#notices" className="hover:text-amber-400 transition">Notice Board</a>
          <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition transform hover:-translate-y-0.5">
            Admission Open
          </a>
        </div>
      </div>
    </header>
  );
}