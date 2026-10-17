import React from 'react';

export default function ToursBanner() {
  return (
    <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a2540] text-white p-5 xs:p-7 sm:p-10 md:p-14 shadow-xl border border-white/10">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
          alt="Scenic Mountains Road Tour" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-4">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
            Om Muruga Travels Agency
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Tour Packages & Travel Circuits
          </h1>
          <p className="text-xs xs:text-sm sm:text-base text-slate-300 leading-relaxed">
            From misty Kodaikanal, Ooty, and Munnar hill stations to peaceful Kerala backwaters, holy Rameswaram, Kashmir, and tropical Bali. Enjoy seamless vacations with our own private AC cabs, veteran mountain chauffeurs, and handpicked boutique accommodations.
          </p>
        </div>
      </div>
    </div>
  );
}
