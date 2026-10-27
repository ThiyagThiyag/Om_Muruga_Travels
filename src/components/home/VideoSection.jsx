import React from 'react';

export default function VideoSection({ onOpenBooking }) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0a2540] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
              Travel With Confidence
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Experience The Journey With Om Muruga Travels
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-slate-300 leading-relaxed">
              From winding Western Ghat mountain roads to peaceful palm estate cottages, our experienced drivers and tour planners take care of every detail so you can simply soak in the views.
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">✓</span>
                <span className="text-xs sm:text-sm font-semibold">Mountain-Trained Drivers</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">✓</span>
                <span className="text-xs sm:text-sm font-semibold">Clean Sanitized AC Cabs</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">✓</span>
                <span className="text-xs sm:text-sm font-semibold">Custom Daily Itineraries</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">✓</span>
                <span className="text-xs sm:text-sm font-semibold">24/7 On-Road Concierge</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] shadow-lg hover:shadow-[#c59b27]/30 transition-all min-h-[44px]"
              >
                Plan Your Tour / Cab via WhatsApp
              </button>
            </div>
          </div>

          {/* Video Player Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video flex items-center justify-center">
            <video 
              controls 
              preload="none"
              poster="/assets/images/image-44.jpeg"
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
