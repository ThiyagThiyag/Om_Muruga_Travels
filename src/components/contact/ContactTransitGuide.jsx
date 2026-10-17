import React from 'react';

export default function ContactTransitGuide() {
  return (
    <div className="lg:col-span-5 bg-white p-5 xs:p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
      <div className="space-y-1">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
          Find Us Easily
        </span>
        <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0a2540] tracking-tight">
          Getting to Om Muruga Holidays
        </h3>
      </div>

      {/* Property Image */}
      <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48 bg-slate-900 border border-slate-200">
        <img 
          src="/assets/images/image-44.jpeg" 
          alt="Estate Stays" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-4 text-white">
          <span className="text-xs font-bold font-serif block">Om Muruga Holidays Sanctuary</span>
          <span className="text-[10px] text-slate-300">Group of Gowda's Heritage Estate</span>
        </div>
      </div>

      {/* Transit Advice */}
      <div className="space-y-3 text-xs text-slate-600">
        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-lg">✈️</span>
          <div>
            <strong className="text-slate-800 block">Nearest Airports:</strong>
            <span>Madurai Airport (IXM) ~120 km | Coimbatore (CJB) ~170 km. We arrange private pickup cabs directly from the terminal.</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-lg">🚆</span>
          <div>
            <strong className="text-slate-800 block">Nearest Railway Stations:</strong>
            <span>Kodai Road (KQN) ~80 km | Dindigul Junction ~90 km. Regular scenic hillside road connectivity.</span>
          </div>
        </div>
      </div>

      <a 
        href="https://maps.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full py-2.5 px-4 rounded-xl border border-[#0a2540] text-[#0a2540] hover:bg-[#0a2540] hover:text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        <span>Open in Google Maps Navigation</span>
      </a>
    </div>
  );
}
