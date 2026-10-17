import React from 'react';

export default function AboutCta({ onOpenBooking }) {
  return (
    <div className="max-w-7xl mx-auto text-center bg-white rounded-2xl sm:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-14 border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
      <h3 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-[#0a2540] tracking-tight">
        Ready to experience the warmth of Om Muruga Holidays?
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto px-2">
        We welcome families, newlyweds, corporate teams, and backpackers looking for an authentic escape with top-tier comforts.
      </p>
      <button
        onClick={() => onOpenBooking()}
        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] shadow-lg hover:shadow-[#c59b27]/30 transition-all min-h-[44px]"
      >
        Inquire via WhatsApp or Call
      </button>
    </div>
  );
}
