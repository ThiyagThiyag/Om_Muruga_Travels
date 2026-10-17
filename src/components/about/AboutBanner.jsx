import React from 'react';

export default function AboutBanner() {
  return (
    <div className="max-w-7xl mx-auto mb-10 sm:mb-16">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a2540] text-white p-5 xs:p-7 sm:p-10 md:p-14 shadow-xl border border-white/10">
        <img 
          src="/assets/images/image-48.jpeg" 
          alt="Estate Canopy" 
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-3xl space-y-2.5 sm:space-y-4">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
            Our Journey & Heritage
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            A Premier Travel Agency Built on Trust & Care
          </h1>
          <p className="text-xs xs:text-sm sm:text-base text-slate-300 leading-relaxed">
            Discover the story behind Om Muruga Travels, our dedicated vehicle fleet, customized tour planning, and our proud heritage as a flagship venture of Group of Gowda's.
          </p>
        </div>
      </div>
    </div>
  );
}
