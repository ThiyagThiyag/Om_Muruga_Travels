import React from 'react';
import { travelFleetData } from '../../data/travelData';

export default function AboutCabs({ onOpenBooking }) {
  return (
    <section className="max-w-7xl mx-auto mb-14 sm:mb-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1.5">
          Company Owned Fleet
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
          Our Cabs & Travel Vehicles
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
          From executive air-conditioned sedans for couples to luxury Innova Crystas and 17-seater Tempo Travelers for big families—our pristine fleet is sanitized and maintained for safety on steep hill roads.
        </p>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {travelFleetData.map((cab) => (
          <div 
            key={cab.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Vehicle Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img 
                  src={cab.image} 
                  alt={cab.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0a2540]/90 backdrop-blur-md text-[#f4e8c1] border border-[#c59b27]/30 shadow-sm">
                    {cab.type}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/90 text-slate-800 shadow-xs">
                    Sanitized & Inspected
                  </span>
                </div>
              </div>

              {/* Vehicle Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif group-hover:text-[#c59b27] transition-colors">
                    {cab.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                    {cab.idealFor}
                  </p>
                </div>

                {/* Capacity & Luggage Badges */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#c59b27]">👥</span>
                    <span className="font-medium text-[11px]">{cab.capacity.split('+')[0].trim()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#c59b27]">🧳</span>
                    <span className="font-medium text-[11px] truncate">{cab.luggage.split('+')[0].trim()}</span>
                  </div>
                </div>

                {/* Key Features List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Features
                  </span>
                  {cab.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <svg className="w-3.5 h-3.5 text-[#25D366] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[11px]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fleet Assurance Highlights Banner */}
      <div className="mt-8 bg-gradient-to-r from-amber-500/10 via-[#c59b27]/10 to-transparent border border-[#c59b27]/30 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#c59b27] text-white flex items-center justify-center shrink-0 shadow-sm text-lg">
            🚗
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#0a2540] font-serif">
              Transparent Kilometer Billing & Zero Hidden Surcharges
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              All quotes clearly cover driver bata, vehicle fuel, toll taxes, and mountain permits with 24/7 mechanical standby support.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+916382508601"
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#0a2540] bg-white border border-slate-200 hover:border-[#c59b27] transition-all shadow-xs"
          >
            Call Fleet Manager
          </a>
        </div>
      </div>
    </section>
  );
}
