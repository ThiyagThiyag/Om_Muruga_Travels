import React from 'react';

export default function RoomsGrid({
  filteredRooms,
  onOpenRoomModal
}) {
  return (
    <main className="w-full">
      {/* Empty State */}
      {filteredRooms.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
          <span className="text-4xl">🏡</span>
          <h3 className="text-lg font-bold text-[#0a2540]">No stays available at this moment</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Please check back shortly or contact our travel desk for custom cottage bookings.
          </p>
        </div>
      ) : (
        /* Pure Images Grid with 3D Flip on Hover */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => {
            const secondaryImage = (room.gallery && room.gallery[1]) 
              ? room.gallery[1] 
              : (room.gallery && room.gallery[0] && room.gallery[0] !== room.mainImage)
                ? room.gallery[0]
                : room.mainImage;

            return (
              <div
                key={room.id}
                onClick={() => onOpenRoomModal && onOpenRoomModal(room)}
                className="flip-card group relative h-72 sm:h-80 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer bg-slate-900 border border-slate-200/60"
                title={`${room.title} (Hover to flip • Click to view full image)`}
              >
                <div className="flip-card-inner">
                  {/* FRONT FACE: Main Image */}
                  <div className="flip-card-front rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900">
                    <img
                      src={room.mainImage}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* BACK FACE: Secondary Image */}
                  <div className="flip-card-back rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 relative">
                    <img
                      src={secondaryImage}
                      alt={`${room.title} alternate view`}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle Overlay with 'Click to show more' */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40 flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-2 drop-shadow">
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
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
