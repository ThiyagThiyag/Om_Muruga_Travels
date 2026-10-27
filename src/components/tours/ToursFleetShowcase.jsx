import React, { useRef } from 'react';
import { travelFleetData } from '../../data/travelData';

export default function ToursFleetShowcase() {
  const containerRef = useRef(null);

  const slide = (direction) => {
    if (containerRef.current) {
      const step = 340;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="fleet" className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-200">
      {/* Section Header with Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
              Our Transportation Fleet
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-[#c59b27] border border-amber-200/60 text-[10px] font-semibold">
              ↔ Drag to Explore
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0a2540]">
            Private Cabs & Travel Vehicles for Rent
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            From luxury mountain MUVs to spacious family touring vans and executive coaches. Drag or swipe to explore our complete fleet.
          </p>
        </div>

        {/* Desktop Carousel Navigation Arrows */}
        <div className="flex items-center gap-2.5 self-start md:self-end shrink-0">
          <button
            type="button"
            onClick={() => slide('left')}
            className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#c59b27] bg-white hover:bg-amber-50 text-slate-700 hover:text-[#0a2540] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            aria-label="Previous vehicles"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => slide('right')}
            className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#c59b27] bg-white hover:bg-amber-50 text-slate-700 hover:text-[#0a2540] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            aria-label="Next vehicles"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Draggable Fleet Carousel Container */}
      <div 
        ref={containerRef}
        className="overflow-x-auto scroll-smooth flex gap-5 sm:gap-6 pb-6 select-none -mx-2 px-2 no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {travelFleetData.map((cab) => (
          <div 
            key={cab.id}
            style={{ scrollSnapAlign: 'start' }}
            className="w-[280px] xs:w-[305px] sm:w-[325px] shrink-0 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
              <div>
                {/* Cab Photo */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img 
                    src={cab.image} 
                    alt={cab.name} 
                    className="w-full h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0a2540]/90 text-white backdrop-blur-xs border border-white/20 shadow-xs">
                      {cab.type}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <h4 className="text-base font-bold text-slate-900 font-serif line-clamp-1">
                    {cab.name}
                  </h4>
                  
                  <div className="text-xs text-slate-600 space-y-1.5 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-[#c59b27]">👥</span>
                      <span className="font-medium">{cab.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#c59b27]">🧳</span>
                      <span className="font-medium">{cab.luggage}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    <strong className="text-slate-700">Ideal for:</strong> {cab.idealFor}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cab.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/916382508601?text=${encodeURIComponent(
                    `Hi Om Muruga Travels, I would like to inquire about booking the "${cab.name}" (${cab.type}) for outstation cab service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.17.585 4.202 1.605 5.955l-1.705 6.229 6.398-1.678c1.676.914 3.593 1.494 5.702 1.494 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Inquire Cab on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
