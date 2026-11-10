import { useEffect } from 'react';
import { travelFleetData } from '../data/travelData';

export default function CabsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Page Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#061727] text-white shadow-xl px-6 py-10 sm:py-14 sm:px-12">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#c59b27]/20 text-[#c59b27] border border-[#c59b27]/30">
              Verified Outstation & Local Fleet
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif text-white tracking-tight">
              Premium AC Cabs & Group Coaches
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore Ooty, Coonoor, Kodaikanal, Kerala, Munnar, Wayanad, and Coorg in total comfort. Clean, sanitized sedans, spacious MUVs, luxury Tempo Travelers, Force Urbania, and Deluxe Tour Coaches with veteran mountain drivers.
            </p>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {travelFleetData.map((vehicle) => {
            const waText = encodeURIComponent(
              `Hi Om Muruga Travels, I would like to inquire about booking the "${vehicle.name}" for outstation / sightseeing travel.`
            );

            return (
              <div
                key={vehicle.id}
                className="group bg-[#0a2540] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c59b27]/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <picture>
                      <source 
                        srcSet={vehicle.image.replace('.webp', '.avif')} 
                        type="image/avif" 
                      />
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                        draggable="false"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="220"
                      />
                    </picture>
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white font-serif line-clamp-1">
                        {vehicle.name}
                      </h2>
                      <p className="text-xs text-[#c59b27] font-semibold mt-0.5">
                        {vehicle.idealFor}
                      </p>
                    </div>

                    {/* Capacity & Luggage */}
                    <div className="space-y-1.5 text-xs text-slate-300 border-t border-b border-white/10 py-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#c59b27] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#c59b27] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    {/* Vehicle Features */}
                    <ul className="space-y-1 text-xs text-slate-300">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Action Footer */}
                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={`https://wa.me/917639327889?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.17.585 4.202 1.605 5.955l-1.705 6.229 6.398-1.678c1.676.914 3.593 1.494 5.702 1.494 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Inquire Cab on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Strip */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center shrink-0 font-bold">
              ✓
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Direct Agency Tariffs</h3>
              <p className="text-xs text-slate-600 mt-0.5">No aggregator markups or hidden fees</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center shrink-0 font-bold">
              ★
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Mountain Experienced</h3>
              <p className="text-xs text-slate-600 mt-0.5">Veteran drivers specialized in hairpin ghats</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center shrink-0 font-bold">
              ⚡
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Punctual & Reliable</h3>
              <p className="text-xs text-slate-600 mt-0.5">Prompt pickup for flights, trains, and resorts</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center shrink-0 font-bold">
              🛡️
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Sanitized & Safe</h3>
              <p className="text-xs text-slate-600 mt-0.5">Clean, inspected vehicles before every tour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

