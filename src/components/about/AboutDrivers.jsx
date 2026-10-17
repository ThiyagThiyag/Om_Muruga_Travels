import React from 'react';
import { driversData, driverStandards } from '../../data/aboutFleetTripsData';

export default function AboutDrivers() {
  return (
    <section className="max-w-7xl mx-auto mb-14 sm:mb-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1.5">
          The Heart of Our Journeys
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
          Our Professional Drivers & Mountain Pilots
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
          The safety and joy of any hill holiday depends on the person behind the wheel. Our chauffeurs are seasoned Western Ghats specialists with over a decade of accident-free mountain driving.
        </p>
      </div>

      {/* Drivers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {driversData.map((driver) => (
          <div
            key={driver.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Driver Image with Badges */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Master Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c59b27] text-white shadow-sm">
                    {driver.badge}
                  </span>
                </div>

                {/* Rating & Trips Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <span className="text-xs font-semibold flex items-center gap-1 text-[#f4e8c1]">
                    <span>⭐</span>
                    <span>{driver.rating} Rating</span>
                  </span>
                  <span className="text-[11px] font-medium bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full">
                    {driver.tripsCount}
                  </span>
                </div>
              </div>

              {/* Driver Details */}
              <div className="p-5 space-y-3.5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    {driver.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#c59b27] block mt-0.5">
                    {driver.role}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {driver.experience}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {driver.description}
                </p>

                {/* Speciality Highlight */}
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-700">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Speciality Route
                  </span>
                  <p className="font-semibold text-slate-800 text-[11px] leading-tight">
                    {driver.specialty}
                  </p>
                </div>

                {/* Languages Spoken */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1 self-center">
                    Speaks:
                  </span>
                  {driver.languages.map((lang, lIdx) => (
                    <span 
                      key={lIdx}
                      className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 text-[10px] font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Pills */}
            <div className="p-5 pt-0 border-t border-slate-100 mt-2">
              <div className="flex flex-wrap gap-1 pt-3">
                {driver.certifications.map((cert, cIdx) => (
                  <span 
                    key={cIdx}
                    className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                  >
                    <span className="text-emerald-600">✓</span>
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Driver Excellence Standards */}
      <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27] block mb-1">
            Our Driver Commitment
          </span>
          <h4 className="text-xl font-bold font-serif text-[#0a2540]">
            The 4 Safety Benchmarks Every Driver Meets
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {driverStandards.map((std, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-2xl block">{std.icon}</span>
              <h5 className="text-sm font-bold text-slate-900 font-serif">{std.title}</h5>
              <p className="text-xs text-slate-600 leading-relaxed">{std.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
