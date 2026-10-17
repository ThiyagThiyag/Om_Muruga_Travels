import React from 'react';
import { testimonialsData } from '../../data/travelData';

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
            Guest Experiences
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
            Memories Shared by Our Travelers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 px-2">
            Read how couples, families, and travel enthusiasts describe their journeys with Om Muruga Travels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonialsData.map((t) => (
            <div 
              key={t.id}
              className="bg-[#faf6f0]/70 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#c59b27] text-sm">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-slate-200/60">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#c59b27]" 
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <span className="text-[10px] text-slate-500 block">{t.location}</span>
                  <span className="text-[10px] text-[#c59b27] font-medium block">{t.stay}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
