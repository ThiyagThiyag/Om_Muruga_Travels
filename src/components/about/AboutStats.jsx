import React from 'react';
import { statsData } from '../../data/travelData';

export default function AboutStats() {
  return (
    <div className="max-w-7xl mx-auto mb-12 sm:mb-20 bg-gradient-to-r from-[#0a2540] via-[#0d3257] to-[#0a2540] rounded-2xl sm:rounded-3xl p-5 xs:p-7 sm:p-10 md:p-14 text-white shadow-xl border border-[#c59b27]/20">
      <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1">
          Our Journey in Numbers
        </span>
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          Milestones of Trust & Excellence
        </h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 text-center">
        {statsData.map((stat, idx) => (
          <div key={idx} className="p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f4e8c1] mb-1 sm:mb-2">
              {stat.value}
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-slate-300 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
