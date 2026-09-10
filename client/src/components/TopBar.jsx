import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-blue-950 text-blue-200 text-xs py-2 px-4 border-b border-blue-900">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center space-x-4">
          <span><i className="fa-solid fa-phone text-yellow-400 mr-1"></i> +91 XXXXXXXXXX</span>
          <span><i className="fa-solid fa-envelope text-yellow-400 mr-1"></i> info@bpsbalaghat.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-yellow-500 text-blue-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase">Affiliated & Recognized</span>
          <span className="hover:text-white cursor-pointer">Student Portal</span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer">Staff Login</span>
        </div>
      </div>
    </div>
  );
}