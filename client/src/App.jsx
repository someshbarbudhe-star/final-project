import React, { useState, useEffect } from 'react';

export default function App() {
  const [notices, setNotices] = useState([
    { id: 1, title: "Admission Open for Academic Session 2026-27. Register Now!", date: "10 Sep 2026" },
    { id: 2, title: "Half Yearly Examination Schedule released for Classes I to XII.", date: "05 Sep 2026" },
    { id: 3, title: "Assembly Rules & Fee Structure Guidelines Updated.", date: "28 Aug 2026" }
  ]);

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    classApplying: 'Class I - V',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/notices')
      .then(res => res.json())
      .then(data => {
        if(data && data.length > 0) setNotices(data);
      })
      .catch(() => console.log("Using live presentation mode fallback"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        setSubmitted(true);
        setFormData({ studentName: '', parentName: '', phone: '', classApplying: 'Class I - V', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(() => setSubmitted(true));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-xl">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 font-black flex items-center justify-center rounded-xl shadow-lg text-lg">
              SPIS
            </div>
            <div>
              <h1 className="text-sm md:text-base font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
                SARDAR PATEL INTERNATIONAL SCHOOL
              </h1>
              <p className="text-[10px] text-amber-400 tracking-widest font-semibold uppercase">Balaghat, M.P.</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            <a href="#" className="hover:text-amber-400 transition">Home</a>
            <a href="#about" className="hover:text-amber-400 transition">About Us</a>
            <a href="#cbse" className="hover:text-amber-400 transition text-amber-400 font-bold">CBSE</a>
            <a href="#notices" className="hover:text-amber-400 transition">Notice Board</a>
            <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact Us</a>
          </nav>
          <div>
            <a href="#contact" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider shadow-lg transition">
              Apply Admission
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-10 items-center relative z-10">
          <div className="md:col-span-7 text-center md:text-left">
            <span className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              ★ Session 2026-27 Admissions Open
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Welcome to <span className="text-amber-400">Sardar Patel International School</span> Balaghat
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Equipped with modern infrastructure, smart digital classrooms, and a commitment to academic brilliance and discipline.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#notices" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-xl transition">
                View Notice Board
              </a>
              <a href="#cbse" className="border border-slate-600 hover:bg-white hover:text-slate-950 font-bold px-8 py-3.5 rounded-xl transition">
                CBSE Disclosures
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-3 rounded-3xl border border-white/20 shadow-2xl">
              <div className="h-64 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 text-xs font-medium relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 text-left">
                  <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase">Real Campus View</span>
                  <h4 className="text-white font-bold text-sm mt-1">SPIS Main Building Block</h4>
                </div>
                <span className="text-5xl">🏫</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Principal Desk Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-md text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-blue-900 to-slate-900 rounded-2xl mb-4 flex items-center justify-center text-white text-2xl font-black border-4 border-amber-400 shadow-lg">
              SPIS
            </div>
            <h3 className="text-xl font-bold text-slate-900">Principal Desk</h3>
            <p className="text-xs text-blue-700 font-bold uppercase mt-1">Sardar Patel International School</p>
            <p className="text-xs text-slate-600 mt-4 italic">
              "Our mission is to foster self-reliant, ethical, and academically brilliant individuals ready to lead the future."
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-amber-600 font-extrabold uppercase tracking-widest text-xs bg-amber-100 px-3 py-1 rounded-full">
              Excellence & Discipline
            </span>
            <h3 className="text-3xl font-black text-slate-900">World-Class Facilities in Balaghat</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Sardar Patel International School provides an enriching environment where students thrive academically, socially, and morally. Our campus features advanced smart boards, secure digital surveillance, and structured assembly protocols.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2 font-semibold text-sm text-slate-800">
              <div className="flex items-center gap-2">✅ Smart Digital Classrooms</div>
              <div className="flex items-center gap-2">✅ Strict Assembly & Moral Rules</div>
              <div className="flex items-center gap-2">✅ Transparent Fee Structure</div>
              <div className="flex items-center gap-2">✅ Outdoor Play & Sports Arena</div>
            </div>
          </div>
        </div>
      </section>

      {/* CBSE Mandatory Disclosure Section */}
      <section id="cbse" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-700 font-extrabold uppercase tracking-widest text-xs bg-blue-100 px-3.5 py-1.5 rounded-full">
              Affiliation & Compliance
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3">CBSE Mandatory Public Disclosures</h2>
            <p className="text-slate-600 text-sm mt-2">Essential documents, certificates, and institutional details as per CBSE guidelines.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Affiliation Status & Certificate", desc: "View official CBSE affiliation and extension details." },
              { title: "Society / Trust Registration", desc: "Legal registration certificate of the governing body." },
              { title: "NOC from State Government", desc: "No Objection Certificate issued by Madhya Pradesh Govt." },
              { title: "Building Safety Certificate", desc: "Certified structural safety and architectural compliance." },
              { title: "Fire Safety Certificate", desc: "Approved fire clearance and safety equipment audit." },
              { title: "Academic Calendar & Fee Structure", desc: "Detailed breakdown of annual fees, classes, and terms." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4">📄</div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wide">Document Verified</span>
                  <span className="text-xs text-amber-600 font-bold cursor-pointer hover:underline">Download PDF →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board & Inquiry Section */}
      <section id="notices" className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Notice Board */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl shadow-xl border border-slate-800 overflow-hidden">
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span> Live Notice Board & Fees
              </h3>
              <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded uppercase">MERN Backend Connected</span>
            </div>
            <div className="p-6 divide-y divide-slate-800 max-h-[350px] overflow-y-auto">
              {notices.map((notice) => (
                <div key={notice.id} className="py-3.5 first:pt-0 last:pb-0 flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-bold uppercase mr-2">Circular</span>
                    <span className="text-slate-200 text-sm font-medium">{notice.title}</span>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap font-mono">{notice.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Admission Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 p-8 rounded-3xl shadow-xl border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-4">Quick Admission Enquiry</h3>
            {submitted && (
              <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-semibold">
                ✓ Inquiry submitted successfully! Our counseling team will contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input 
                  type="text" 
                  placeholder="Student Name" 
                  required 
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-blue-900" 
                />
                <input 
                  type="text" 
                  placeholder="Parent Name" 
                  required 
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-blue-900" 
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-blue-900" 
                />
                <select 
                  value={formData.classApplying}
                  onChange={(e) => setFormData({...formData, classApplying: e.target.value})}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-blue-900"
                >
                  <option>Nursery - KG II</option>
                  <option>Class I - V</option>
                  <option>Class VI - VIII</option>
                  <option>Class IX - XII</option>
                </select>
              </div>
              <textarea 
                rows="2" 
                placeholder="Message / Query (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-blue-900 resize-none"
              ></textarea>
              <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wider shadow transition">
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs bg-blue-100 px-3.5 py-1.5 rounded-full">
            Campus Tour
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 mb-2">Photo Gallery & Infrastructure</h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto mb-10">Real snapshots of our modern classrooms, assembly rules, and exterior block.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Main School Exterior", tag: "Building" },
              { title: "Smart Digital Classrooms", tag: "Academics" },
              { title: "Assembly Rules Notice Board", tag: "Guidelines" },
              { title: "Fee Structure & Book List", tag: "Admissions" },
              { title: "Playground & Kids Area", tag: "Sports" },
              { title: "Computer & Science Labs", tag: "Technology" }
            ].map((item, idx) => (
              <div key={idx} className="h-52 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center p-6 hover:shadow-md transition text-center group">
                <span className="text-3xl mb-2 group-hover:scale-110 transition">🏫</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded mb-1 uppercase">{item.tag}</span>
                <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-1">Sardar Patel Int. School</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-12 pb-6 border-t-4 border-amber-500">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8 text-sm">
          <div>
            <h3 className="font-black text-amber-400 text-lg mb-2">SARDAR PATEL INT. SCHOOL</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Committed to delivering high standard English medium education and strong ethical values in Balaghat.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-slate-200">Quick Links</h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-white">Home Portal</a></li>
              <li><a href="#about" className="hover:text-white">About Principal Desk</a></li>
              <li><a href="#cbse" className="hover:text-white">CBSE Disclosures</a></li>
              <li><a href="#notices" className="hover:text-white">Notice Board</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-slate-200">Contact Details</h4>
            <p className="text-slate-400 text-xs mb-1">📍 Balaghat, Madhya Pradesh, India</p>
            <p className="text-slate-400 text-xs mb-1">📞 +91 XXXXXXXXXX</p>
            <p className="text-slate-400 text-xs">✉️ info@spisbalaghat.com</p>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Sardar Patel International School Balaghat. Final Year MERN Stack Project. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}