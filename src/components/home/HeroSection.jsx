import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection({ onOpenBooking }) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-8 overflow-hidden bg-[#0a2540]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1100&q=70"
          alt="Scenic Mountain Road Tour - Om Muruga Travels"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width="1400"
          height="800"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061727]/90 via-[#0a2540]/80 to-[#061727]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,23,39,0.75)_100%)]" />
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c59b27]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full space-y-7 sm:space-y-9">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f4e8c1] text-xs sm:text-sm font-medium shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#c59b27] animate-ping shrink-0" />
          <span>Premier Tours, Travels & Cottage Stays • Group of Gowda's</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
            Experience Unforgettable Journeys with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4e8c1] to-[#c59b27]">
              Om Muruga Travels
            </span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            Tailored holiday packages, 24/7 private AC chauffeur cabs, outstation tour circuits, and boutique cottage stays across South India & beyond.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-2">
          {/* Primary CTA Button */}
          <button
            type="button"
            onClick={() => onOpenBooking ? onOpenBooking({ title: 'General Travel & Tour Inquiry' }) : navigate('/tours')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] shadow-xl shadow-[#c59b27]/25 hover:shadow-2xl hover:shadow-[#c59b27]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-amber-300/30"
          >
            <span>Plan Your Journey</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Secondary CTA Button */}
          <button
            type="button"
            onClick={() => navigate('/tours')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white/90 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/40 shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Tour Packages</span>
          </button>
        </div>

        {/* Quick Trust Highlights */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300/80 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-[#c59b27] font-bold">✓</span>
            <span>24/7 Verified Chauffeurs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#c59b27] font-bold">✓</span>
            <span>Transparent Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#c59b27] font-bold">✓</span>
            <span>Customizable Itineraries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
