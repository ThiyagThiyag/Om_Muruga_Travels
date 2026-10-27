import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { travelFleetData } from '../../data/travelData';

export default function FleetSection() {
  const containerRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const scrollW = containerRef.current.scrollWidth;
        const offsetW = containerRef.current.offsetWidth;
        const diff = Math.max(0, scrollW - offsetW);
        setMaxDrag(diff);
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    const timer = setTimeout(updateConstraints, 200);

    return () => {
      window.removeEventListener('resize', updateConstraints);
      clearTimeout(timer);
    };
  }, []);

  const slide = (direction) => {
    const currentX = x.get();
    const step = 340;
    let targetX = direction === 'left' ? currentX + step : currentX - step;
    targetX = Math.max(-maxDrag, Math.min(0, targetX));
    animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    });
  };

  return (
    <section id="fleet" className="py-12 sm:py-16 md:py-20 bg-[#061727] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Left/Right Drag Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
                Our Transportation Fleet
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-[#f4e8c1] border border-white/15 text-[10px] font-semibold">
                ↔ Drag to Explore
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Private AC Cabs & Group Travelers
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              As a dedicated travel agency, we operate our own fleet of well-maintained vehicles driven by courteous, mountain-certified chauffeurs.
            </p>
          </div>

          {/* Desktop Carousel Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-end shrink-0">
            <button
              type="button"
              onClick={() => slide('left')}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#c59b27] bg-white/10 hover:bg-[#c59b27] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous vehicles"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => slide('right')}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-[#c59b27] bg-white/10 hover:bg-[#c59b27] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next vehicles"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Draggable Fleet Carousel */}
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing pb-4 select-none -mx-2 px-2"
        >
          <motion.div
            drag="x"
            style={{ x }}
            dragConstraints={{ right: 0, left: -maxDrag }}
            dragElastic={0.15}
            className="flex gap-4 sm:gap-6"
          >
            {travelFleetData.map((vehicle) => (
              <div 
                key={vehicle.id}
                className="w-[280px] xs:w-[305px] sm:w-[325px] shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col justify-between hover:border-[#c59b27]/60 transition-all group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                      width="325"
                      height="176"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c59b27] text-white">
                        {vehicle.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-white font-serif line-clamp-1">
                      {vehicle.name}
                    </h3>
                    
                    <div className="space-y-1.5 text-xs text-slate-300 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[#c59b27]">👥</span>
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#c59b27]">🧳</span>
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      <strong className="text-slate-300">Best for:</strong> {vehicle.idealFor}
                    </p>

                    <div className="space-y-1 pt-1">
                      {vehicle.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                          <span className="text-emerald-400">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/916382508601?text=${encodeURIComponent(
                      `Hi Om Muruga Travels, I would like to inquire about booking the "${vehicle.name}" (${vehicle.type}) for outstation / sightseeing travel.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                  >
                    <span>Inquire Cab on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
