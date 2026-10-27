import React, { useState, useEffect } from 'react';

export default function RoomModal({ isOpen, onClose, room }) {
  const [imageIndex, setImageIndex] = useState(0);

  // Reset swiper index when opening modal or selecting new room
  useEffect(() => {
    if (isOpen) {
      setImageIndex(0);
    }
  }, [isOpen, room?.id]);

  if (!isOpen || !room) return null;

  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.mainImage];

  const paginate = (newDirection) => {
    setImageIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const whatsAppUrl = `https://wa.me/916382508601?text=${encodeURIComponent(
    `Hi Om Muruga Holidays, I would like to inquire about availability and seasonal tariff for ${room.title} (${room.capacity}, ${room.bedType}).`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-slate-950 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full Image Swiper Showcase (Compact Landscape Framing, 100% Full Cover) */}
        <div className="relative h-[250px] xs:h-[280px] sm:h-[320px] md:h-[360px] w-full bg-slate-950 overflow-hidden select-none">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              key={imageIndex}
              src={images[imageIndex]}
              alt={`${room.title} photo ${imageIndex + 1}`}
              className="w-full h-full object-cover select-none transition-opacity duration-300"
              draggable="false"
            />
          </div>

          {/* Top Bar: Room Title & Close Button */}
          <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-5 flex items-center justify-between bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none">
            <div className="pointer-events-auto">
              <h3 className="text-base sm:text-xl font-serif font-bold text-white drop-shadow">
                {room.title}
              </h3>
              <span className="text-[11px] font-semibold text-amber-300 drop-shadow">
                Photo {imageIndex + 1} of {images.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all backdrop-blur-sm shadow-md hover:scale-105 active:scale-95 border border-white/20"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Previous & Next Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 border border-white/20"
                aria-label="Previous photo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 border border-white/20"
                aria-label="Next photo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Bottom Pagination Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPage([idx, idx > imageIndex ? 1 : -1]);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    imageIndex === idx ? 'w-6 bg-[#c59b27]' : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Booking & Hotline */}
        <div className="p-3.5 sm:px-5 sm:py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <div className="text-sm font-bold text-[#0a2540]">
              Tariff on Request
            </div>
            <span className="text-xs text-emerald-600 font-medium">Free breakfast included • Direct owner booking</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition-all"
            >
              <span>WhatsApp Inquiry</span>
            </a>
            <a
              href="tel:+916382508601"
              className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-full border-2 border-[#0a2540] text-[#0a2540] hover:bg-[#0a2540] hover:text-white font-bold text-xs transition-all text-center"
            >
              Call Desk
            </a>
            <a
              href="tel:+916384693543"
              className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-full border-2 border-[#0a2540] text-[#0a2540] hover:bg-[#0a2540] hover:text-white font-bold text-xs transition-all text-center"
            >
              Call Manager
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
