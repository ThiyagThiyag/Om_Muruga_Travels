import React from 'react';

const values = [
  {
    icon: '🌱',
    title: 'Eco-Conscious Stays',
    desc: 'Built with natural bamboo, cane, and stone while preserving lush surrounding flora and bird habitats.'
  },
  {
    icon: '🍛',
    title: 'Warm Local Flavors',
    desc: 'Delicious meals prepared with organic farm produce, aromatic filter coffee, and heartfelt Southern recipes.'
  },
  {
    icon: '🤝',
    title: 'Transparent Bookings',
    desc: 'Zero middleman fees, direct reservation support, clear itineraries, and personalized seasonal tariff packages.'
  },
  {
    icon: '🛡️',
    title: 'Safety & Care',
    desc: '24/7 dedicated property caretakers, sanitized living quarters, safe family lawns, and secure vehicle parking.'
  }
];

export default function AboutValues() {
  return (
    <div className="max-w-7xl mx-auto mb-12 sm:mb-20">
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1">
          Guiding Philosophy
        </span>
        <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
          The Pillars of Om Muruga Holidays
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {values.map((v, i) => (
          <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2.5 sm:space-y-3">
            <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center font-bold text-lg sm:text-xl">
              {v.icon}
            </span>
            <h4 className="text-base font-bold text-slate-900 font-serif">{v.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
