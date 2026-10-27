import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { roomsData, toursData } from '../../data/travelData';

export default function FeaturedShowcaseSection({ onOpenBooking, onOpenRoomModal, onOpenTourModal }) {
  const [activeTab, setActiveTab] = useState('tours'); // 'tours' (primary) or 'rooms' (secondary)

  const featuredTours = toursData.slice(0, 6);
  const featuredRooms = roomsData.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 xs:px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
        <div>
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#8A6805] font-bold block mb-1.5 sm:mb-2">
            Featured Circuits
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
            Popular Tour Packages & Stays
          </h2>
        </div>

        {/* Switcher Tabs - TOURS FIRST! */}
        <div className="flex p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-slate-200/80 border border-slate-300 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('tours')}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
              activeTab === 'tours'
                ? 'bg-[#0a2540] text-white shadow-md'
                : 'text-slate-700 hover:text-black'
            }`}
          >
            🗺️ Tour Packages (Primary)
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all text-center ${
              activeTab === 'rooms'
                ? 'bg-[#0a2540] text-white shadow-md'
                : 'text-slate-700 hover:text-black'
            }`}
          >
            🏡 Cottages & Stays
          </button>
        </div>
      </div>

      {/* Tab 1: TOURS GRID (DEFAULT PRIMARY) */}
      {activeTab === 'tours' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
          {featuredTours.map((tour) => (
            <div 
              key={tour.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="240"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0a2540]/90 text-white backdrop-blur-sm border border-white/20">
                    {tour.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#8A6805] text-white shadow-sm">
                    {tour.duration}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-md flex items-center gap-1">
                    <span className="text-[#8A6805]">★</span> {tour.rating}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[#0a2540] uppercase tracking-wider block mb-1">
                    {tour.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-serif line-clamp-1 mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                    {tour.description}
                  </p>

                  <div className="bg-amber-50/60 rounded-xl p-3 border border-amber-200/50 space-y-1">
                    {tour.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <span className="text-[#8A6805] font-bold">✓</span>
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-semibold">
                      Tour Package
                    </span>
                    <span className="text-sm font-bold text-[#0a2540]">
                      Tariff on Inquiry
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenTourModal(tour)}
                      className="px-3 py-1.5 rounded-lg border border-[#8A6805] text-[#8A6805] hover:bg-[#8A6805] hover:text-white text-xs font-bold transition-all"
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() => onOpenBooking(tour)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0a2540] hover:bg-[#c59b27] transition-colors"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: ROOMS GRID (SECONDARY OPTION) */}
      {activeTab === 'rooms' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
          {featuredRooms.map((room) => (
            <div 
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img 
                  src={room.mainImage} 
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="208"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0a2540]/90 text-white backdrop-blur-sm border border-white/20">
                    {room.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-md flex items-center gap-1">
                    <span className="text-[#8A6805]">★</span> {room.rating}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#8A6805] uppercase tracking-wider block mb-1">
                    {room.type}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-serif line-clamp-1 mb-2">
                    {room.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {room.shortDescription}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                    <span>👥 {room.capacity}</span>
                    <span>•</span>
                    <span>🛏️ {room.bedType}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
                      Seasonal Tariff
                    </span>
                    <span className="text-sm font-bold text-[#0a2540]">
                      Best Rates on Inquiry
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenRoomModal(room)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-[#0a2540] hover:bg-slate-50 text-xs font-semibold transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenBooking(room)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0a2540] hover:bg-[#c59b27] transition-colors"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Link
          to={activeTab === 'tours' ? '/tours' : '/rooms'}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#0a2540] border-2 border-[#0a2540] hover:bg-[#0a2540] hover:text-white transition-all shadow-sm hover:shadow-md"
        >
          <span>Explore All {activeTab === 'tours' ? 'Tour Packages & Circuits' : 'Cottages & Stays'}</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
