import React from 'react';

export default function PrincipalDesk() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 bg-blue-100 rounded-2xl border-4 border-yellow-500 p-6 text-center shadow-md">
          <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full mb-4 overflow-hidden border-2 border-blue-900 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-sm">[ Principal Photo ]</span>
          </div>
          <h3 className="text-xl font-bold text-blue-950">Dr. / Mr. Principal Name</h3>
          <p className="text-xs text-blue-700 font-semibold uppercase tracking-wider">Principal, BPS Balaghat</p>
        </div>
        <div className="md:col-span-7">
          <span className="text-yellow-600 font-bold uppercase tracking-wider text-xs bg-yellow-100 px-3 py-1 rounded">From The Desk of Principal</span>
          <h2 className="text-3xl font-extrabold text-blue-950 mt-3 mb-4">Shaping Tomorrow's Leaders Today</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Balaghat Public School, we believe education is not merely about stuffing information into young brains, but sparking curiosity, building discipline, and creating self-reliant individuals ready to face the world.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our comprehensive curriculum combines top-tier academics with sports, arts, and moral foundation programs to guarantee holistic growth.
          </p>
          <div className="grid grid-cols-2 gap-4 font-semibold text-blue-900">
            <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-yellow-500"></i> Smart Digital Labs</div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-yellow-500"></i> Qualified Faculty</div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-yellow-500"></i> Safe Campus & CCTV</div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-yellow-500"></i> Sports & Cultural Hub</div>
          </div>
        </div>
      </div>
    </section>
  );
}