import React, { useEffect, useState } from 'react';

export default function FeaturesGrid() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/notices')
      .then(res => res.json())
      .then(data => setNotices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="notices" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Notice Board */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col">
          <div className="bg-blue-900 text-white px-6 py-4 font-bold flex justify-between items-center">
            <span><i className="fa-solid fa-clipboard-list mr-2 text-yellow-400"></i> School Notice Board</span>
            <span className="text-xs bg-yellow-500 text-blue-950 px-2 py-1 rounded font-semibold">Live Updates</span>
          </div>
          <div className="p-6 divide-y divide-gray-100 flex-1 overflow-y-auto max-h-[350px]">
            {notices.map(notice => (
              <div key={notice.id} className="py-3 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold uppercase mr-2">New</span>
                  <span className="text-gray-800 font-medium text-sm">{notice.title}</span>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{notice.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Inquiry Form */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-yellow-500 text-blue-950 px-6 py-4 font-extrabold">
            <i className="fa-solid fa-pen-to-square mr-2"></i> Quick Admission Inquiry
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully!"); }} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Student Name" required className="w-full border p-2.5 rounded text-sm focus:outline-blue-900" />
              <input type="text" placeholder="Parent Name" required className="w-full border p-2.5 rounded text-sm focus:outline-blue-900" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone Number" required className="w-full border p-2.5 rounded text-sm focus:outline-blue-900" />
              <select className="w-full border p-2.5 rounded text-sm focus:outline-blue-900 bg-white">
                <option>Select Class</option>
                <option>Nursery - KG II</option>
                <option>Class I - V</option>
                <option>Class VI - VIII</option>
                <option>Class IX - XII</option>
              </select>
            </div>
            <textarea placeholder="Message / Query (Optional)" rows="2" className="w-full border p-2.5 rounded text-sm focus:outline-blue-900"></textarea>
            <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded text-sm shadow transition">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}