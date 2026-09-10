import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-900 text-yellow-400 font-extrabold flex items-center justify-center rounded-lg text-2xl shadow">
            BPS
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wide text-blue-950 leading-tight">BALAGHAT PUBLIC SCHOOL</h1>
            <p className="text-xs text-gray-500 font-medium">English Medium Co-Educational Senior Secondary School</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-7 font-semibold text-gray-700 text-sm">
          <a href="#" className="text-blue-700 hover:text-blue-900 transition">Home</a>
          <a href="#about" className="hover:text-blue-900 transition">About Us</a>
          <a href="#academics" className="hover:text-blue-900 transition">Academics</a>
          <a href="#notices" className="hover:text-blue-900 transition">Notice Board</a>
          <a href="#gallery" className="hover:text-blue-900 transition">Gallery</a>
          <a href="#contact" className="hover:text-blue-900 transition">Contact Us</a>
        </nav>
        <div>
          <a href="#contact" className="bg-blue-900 hover:bg-blue-800 text-yellow-400 font-bold px-4 py-2 rounded-lg text-sm shadow transition">
            Apply Admission
          </a>
        </div>
      </div>
    </header>
  );
}