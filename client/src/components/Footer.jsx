import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-950 text-white pt-16 pb-8 border-t-4 border-yellow-500">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="text-xl font-black mb-4 text-yellow-400 tracking-wide">BALAGHAT PUBLIC SCHOOL</h3>
          <p className="text-blue-200 text-sm leading-relaxed mb-4">
            Committed to building ethical, sharp, and confident individuals through modern scholastic frameworks and strong cultural heritage.
          </p>
          <div className="flex space-x-3 text-lg">
            <span className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center hover:bg-yellow-500 hover:text-blue-950 cursor-pointer transition"><i className="fa-brands fa-facebook-f"></i></span>
            <span className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center hover:bg-yellow-500 hover:text-blue-950 cursor-pointer transition"><i className="fa-brands fa-youtube"></i></span>
            <span className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center hover:bg-yellow-500 hover:text-blue-950 cursor-pointer transition"><i className="fa-brands fa-instagram"></i></span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-blue-900 pb-2">Quick Navigation</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="#" className="hover:text-yellow-400 transition">Home Page</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About Principal & School</a></li>
            <li><a href="#notices" className="hover:text-yellow-400 transition">Notice Board & Circulars</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400 transition">Photo Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-blue-900 pb-2">Contact Details</h4>
          <p className="text-sm text-blue-200 mb-2"><i className="fa-solid fa-location-dot text-yellow-400 mr-2"></i> Balaghat, Madhya Pradesh, India</p>
          <p className="text-sm text-blue-200 mb-2"><i className="fa-solid fa-phone text-yellow-400 mr-2"></i> +91 XXXXXXXXXX</p>
          <p className="text-sm text-blue-200"><i className="fa-solid fa-envelope text-yellow-400 mr-2"></i> info@bpsbalaghat.com</p>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-blue-900 pt-6 text-center text-xs text-blue-300">
        © {new Date().getFullYear()} Balaghat Public School (BPS Balaghat). All Rights Reserved. Designed for Professional Institutional Setup.
      </div>
    </footer>
  );
}