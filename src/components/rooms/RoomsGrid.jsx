export default function RoomsGrid({ filteredRooms = [], totalCount = 0, onOpenRoomModal }) {
  const displayCount = filteredRooms.length;

  return (
    <main className="w-full">
      {/* Header bar with count */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a2540]">
          Available Cottages &amp; Suites
        </h2>
        <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
          Showing {displayCount} of {totalCount || displayCount} Stays
        </span>
      </div>

      {displayCount === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300">
          <span className="text-4xl block mb-3">🏡</span>
          <h3 className="text-lg font-serif font-bold text-slate-800 mb-1">
            No cottages found matching filters
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Please check back shortly or contact our travel desk for custom cottage bookings.
          </p>
        </div>
      ) : (
        /* Pure Images Grid with Tailwind hover zoom */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => onOpenRoomModal && onOpenRoomModal(room)}
              className="group relative h-72 sm:h-80 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-slate-900 border border-slate-200/60"
              title={`${room.title} (Click to view full details & gallery)`}
            >
              {/* Main Image with Tailwind hover zoom */}
              <picture className="w-full h-full block">
                {room.mainImage && room.mainImage.endsWith('.webp') && (
                  <source type="image/avif" srcSet={room.mainImage.replace('.webp', '.avif')} />
                )}
                <img
                  src={room.mainImage}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="320"
                />
              </picture>

              {/* Hover Overlay with pure Tailwind */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                  {room.title}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-bold shadow-xl border border-white/60 tracking-wide hover:bg-[#c59b27] hover:text-white transition-all duration-300">
                  <span>Click to show more</span>
                  <svg className="w-3.5 h-3.5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
