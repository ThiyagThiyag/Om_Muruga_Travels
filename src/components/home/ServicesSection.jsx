import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: '01',
    badge: 'Tailored Circuits',
    title: 'Custom Tour Packages',
    desc: 'Personalized holiday circuits across Kodaikanal, Ooty, Munnar, Wayanad, Coorg, Rameswaram, and international getaways.',
    link: '/tours',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    )
  },
  {
    id: '02',
    badge: 'Own Sanitized Fleet',
    title: 'Dedicated AC Cabs & Fleet',
    desc: 'Company-owned sedans, luxury Innova Crystas, and 17-seater Tempo Travelers with veteran mountain-certified chauffeurs.',
    link: '/tours#fleet',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1" />
        <path d="M10 5l1.5-2h2.5L15.5 5" />
        <circle cx="7.5" cy="16.5" r="2.5" />
        <circle cx="16.5" cy="16.5" r="2.5" />
        <path d="M5 9h14" />
      </svg>
    )
  },
  {
    id: '03',
    badge: '24/7 On-Time',
    title: 'Airport & Railway Transfers',
    desc: 'Reliable flight & train pickups from Madurai (IXM), Coimbatore (CJB), Trichy, Kochi, and Bangalore with courteous drivers.',
    link: '/contact',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    )
  },
  {
    id: '04',
    badge: 'Artisan Bamboo Stays',
    title: 'Boutique Cottages & Stays',
    desc: 'Exclusive access to our handcrafted bamboo luxury cottages, elevated treehouses, and private estates under Group of Gowda’s.',
    link: '/rooms',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: '05',
    badge: 'Family & Group Specials',
    title: 'Group & Pilgrimage Tours',
    desc: 'Dedicated transport, accommodations, and darshan coordination for large family reunions, college outings, and temple circuits.',
    link: '/tours/spiritual',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: '06',
    badge: 'Zero Middleman Markup',
    title: '100% Reliable & Direct Tariff',
    desc: 'Direct agency tariffs without online platform commissions, fully transparent itineraries, and dedicated WhatsApp concierge support.',
    link: '/contact',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-[#faf6f0] via-[#fdfbf7] to-[#faf6f0] border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59b27]/10 text-[#a37f1c] border border-[#c59b27]/30 text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-xs">
            <span>✨ Complete Travel Solutions</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0a2540] tracking-tight">
            Om Muruga Travels & Tour Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 px-2 leading-relaxed">
            Your trusted one-stop holiday partner with our own fleet of AC cabs, verified itineraries, boutique stays, and dedicated personal travel concierge.
          </p>
        </div>

        {/* 6 High-End Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-[#c59b27]/15 hover:-translate-y-2 hover:border-[#c59b27]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Shimmer Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c59b27]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Header with Icon, Tag & Watermark Number */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  {/* Glowing Icon Tile */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#123962] text-[#f4e8c1] flex items-center justify-center shadow-lg shadow-[#0a2540]/20 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#c59b27] group-hover:to-[#b0871a] group-hover:text-white transition-all duration-300 border border-white/10">
                    {service.icon}
                  </div>

                  {/* Watermark Index Number */}
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-serif font-bold text-slate-400 group-hover:text-amber-700/80 transition-colors select-none">
                      {service.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A6805] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300/80 mt-1">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Card Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif group-hover:text-[#0a2540] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-5 mt-6 border-t border-slate-100">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#8A6805] group-hover:text-[#0a2540] transition-colors"
                >
                  <span>Explore Offering</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Bottom Expand Highlight */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#0a2540] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
