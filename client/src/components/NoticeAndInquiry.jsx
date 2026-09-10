import React, { useState, useEffect } from 'react';

export default function NoticeAndInquiry() {
  const [notices, setNotices] = useState([]);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    classApplying: 'Class I - V',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetching live data from Express backend server
    fetch('http://localhost:5000/api/notices')
      .then(res => res.json())
      .then(data => setNotices(data))
      .catch(err => console.error("Error fetching notices:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setSubmitted(true);
        setFormData({ studentName: '', parentName: '', phone: '', classApplying: 'Class I - V', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(err => console.error("Error submitting inquiry:", err));
  };

  return (
    <section id="notices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase tracking-widest text-xs bg-amber-100 px-3.5 py-1.5 rounded-full">
            Updates & Admissions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Notice Board & Quick Inquiry
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Stay connected with latest announcements, circulars, and admission windows.
          </p>
        </div>

        {/* Grid for Notice Board & Form */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Live Notice Board (Backend Connected) */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl shadow-xl border border-slate-800 overflow-hidden flex flex-col">
            <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                <h3 className="text-white font-bold text-base tracking-wide">Live School Circulars</h3>
              </div>
              <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                Backend API Active
              </span>
            </div>
            <div className="p-6 divide-y divide-slate-800/60 max-h-[400px] overflow-y-auto">
              {notices.length > 0 ? (
                notices.map(notice => (
                  <div key={notice.id} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group">
                    <div>
                      <span className="inline-block text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-bold uppercase mr-2">
                        New
                      </span>
                      <span className="text-slate-200 font-medium text-sm group-hover:text-amber-400 transition">
                        {notice.title}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 whitespace-nowrap font-mono">{notice.date}</span>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 text-center py-6 text-sm">Loading notices from backend...</p>
              )}
            </div>
          </div>

          {/* Admission Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-1">Fast Processing</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Online Admission Enquiry</h3>
            </div>

            {submitted && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-xs font-semibold animate-fade-in">
                ✓ Inquiry successfully submitted! Our counseling team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter student name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Parent Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter parent name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition" 
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Applying for Class</label>
                  <select 
                    value={formData.classApplying}
                    onChange={(e) => setFormData({...formData, classApplying: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition"
                  >
                    <option>Nursery - KG II</option>
                    <option>Class I - V</option>
                    <option>Class VI - VIII</option>
                    <option>Class IX - XII</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message (Optional)</label>
                <textarea 
                  rows="3" 
                  placeholder="Any specific query or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg transition transform hover:-translate-y-0.5"
              >
                Submit Application Enquiry
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}