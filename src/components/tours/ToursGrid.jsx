import React from 'react';

export default function ToursGrid({ tours, onOpenTourModal, onOpenBooking }) {
  if (!tours || tours.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-16 text-center text-slate-500">
        No tours found matching the selected filters.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
        >
          {/* Image Banner */}
          <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden bg-slate-900">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0a2540]/90 text-white backdrop-blur-sm border border-white/20">
                {tour.badge}
              </span>
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c59b27] text-white shadow-sm">
                {tour.duration}
              </span>
            </div>
            <div className="absolute bottom-3 right-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-md flex items-center gap-1">
                <span className="text-[#c59b27]">★</span> {tour.rating} ({tour.reviewsCount})
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#0a2540] uppercase tracking-wider block mb-1">
                {tour.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-1.5 sm:mb-2">
                {tour.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                {tour.description}
              </p>

              {/* Highlights */}
              <div className="bg-amber-50/60 rounded-xl p-3 sm:p-3.5 border border-amber-200/60 space-y-1.5">
                <span className="text-[10px] font-bold text-[#b0871a] uppercase tracking-wider block">
                  Top Inclusions & Sights:
                </span>
                {tour.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <span className="text-[#c59b27] font-bold">✓</span>
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
                  Package Tariff
                </span>
                <span className="text-sm sm:text-base font-bold text-[#0a2540]">
                  Tariff on Inquiry
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 block">
                  Customized per group size
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenTourModal(tour)}
                  className="flex-1 xs:flex-initial px-3 sm:px-3.5 py-2 rounded-xl border border-[#c59b27] text-[#c59b27] hover:bg-[#c59b27] hover:text-white text-xs font-bold transition-all shadow-sm text-center min-h-[38px]"
                >
                  Itinerary
                </button>
                <button
                  onClick={() => onOpenBooking(tour)}
                  className="flex-1 xs:flex-initial px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] shadow-md hover:shadow-lg hover:shadow-[#c59b27]/30 transition-all flex items-center justify-center gap-1.5 min-h-[38px]"
                >
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
