import React, { useEffect, useState } from 'react';

export default function MarqueeNotice() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/notices')
      .then(res => res.json())
      .then(data => setNotices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-red-700 text-white flex items-center shadow-inner overflow-hidden">
      <div className="bg-red-900 px-4 py-2 font-bold text-xs uppercase tracking-wider whitespace-nowrap z-10 flex items-center gap-2">
        <i className="fa-solid fa-bullhorn text-yellow-300"></i> Latest News:
      </div>
      <div className="py-2 overflow-hidden whitespace-nowrap w-full">
        <div className="inline-block animate-marquee text-sm font-medium">
          {notices.map((n, idx) => (
            <span key={n.id} className="mx-8">
              <span className="text-yellow-300 font-bold mr-1">[{n.date}]:</span> {n.title}
              {idx < notices.length - 1 && <span className="ml-8 text-red-300">✦</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}