import React from 'react';

export default function RoomsBanner() {
  return (
    <div className="max-w-7xl mx-auto mb-8 sm:mb-10">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a2540] text-white p-5 xs:p-7 sm:p-10 md:p-12 shadow-xl border border-white/10">
        <img 
          src="/assets/images/image-44.jpeg" 
          alt="Cottage Villa" 
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
            Om Muruga Travels Accommodations
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Boutique Cottages & Scenic Stays
          </h1>
          <p className="text-xs xs:text-sm sm:text-base text-slate-300 leading-relaxed">
            As an exclusive offering alongside our tour packages, enjoy handpicked bamboo chalets, elevated treehouses, and heritage manor suites personally managed by Group of Gowda's.
          </p>
        </div>
      </div>
    </div>
  );
}
