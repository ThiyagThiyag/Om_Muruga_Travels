import React from 'react';
import { teamData } from '../../data/travelData';

export default function AboutTeam() {
  return (
    <div className="max-w-7xl mx-auto mb-12 sm:mb-20">
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1">
          The People Behind Your Smile
        </span>
        <h3 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
          Meet Our Leadership & Guides
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-2 px-2">
          Dedicated hospitality professionals passionate about delivering seamless holiday experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {teamData.map((member, idx) => (
          <div 
            key={idx}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="relative h-52 sm:h-64 overflow-hidden bg-slate-900">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-base font-bold text-slate-900 font-serif">{member.name}</h4>
              <span className="text-xs font-semibold text-[#c59b27] block">{member.role}</span>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
