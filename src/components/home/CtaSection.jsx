import React from 'react';

export default function CtaSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#0a2540] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src="/assets/images/image-43.jpeg" alt="Background pattern" loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4 sm:space-y-6">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Ready to Plan Your Next Tour or Road Trip?
        </h2>
        <p className="text-xs xs:text-sm sm:text-base text-slate-300 max-w-xl mx-auto px-2">
          Contact our dedicated travel desk today for personalized holiday packages, private outstation cabs, and boutique cottage reservations.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-lg mx-auto sm:max-w-none">
          <a
            href="https://wa.me/916382508601?text=Hi%20Om%20Muruga%20Travels,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <span>Chat on WhatsApp (+91 63825 08601)</span>
          </a>
          <a
            href="tel:+916382508601"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-white/40 text-white hover:bg-white hover:text-[#0a2540] font-bold text-xs sm:text-sm transition-all text-center min-h-[44px] flex items-center justify-center"
          >
            Call 63825 08601
          </a>
          <a
            href="tel:+916384693543"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-white/40 text-white hover:bg-white hover:text-[#0a2540] font-bold text-xs sm:text-sm transition-all text-center min-h-[44px] flex items-center justify-center"
          >
            Call 63846 93543
          </a>
        </div>
      </div>
    </section>
  );
}
