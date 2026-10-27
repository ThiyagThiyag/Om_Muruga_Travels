import React from 'react';
import BrandLogo from '../BrandLogo';

export default function AboutStory() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
      <div className="space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59b27]/10 text-[#b0871a] border border-[#c59b27]/30 text-[11px] sm:text-xs font-bold">
          <span>A Venture of Group of Gowda's</span>
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight leading-tight">
          Crafting Seamless Journeys, Trusted Tours & Memorable Escapes
        </h2>

        <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed">
          <strong>Om Muruga Travels</strong> was founded with a clear purpose: to be South India's most dependable, transparent, and guest-centric travel agency. Operating our own fleet of air-conditioned sedans, Innova Crystas, and 17-seater Tempo Travelers, we provide end-to-end holiday tours, outstation transfers, and customized circuits.
        </p>

        <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed">
          As a natural extension of our travel services, we developed exclusive boutique accommodations—from handcrafted bamboo cottages to treetop chalets nestled amidst palm groves. For our travelers, these stays serve as peaceful private sanctuaries where you can unwind after a day of sightseeing.
        </p>

        {/* Group Logo Endorsement Card */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
            <BrandLogo variant="gowdas" isDarkBackground={false} className="h-12" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Group of Gowda's Trust</h4>
            <p className="text-xs text-slate-500">Over a decade of trusted enterprise in hospitality, guest wellness, and travel management.</p>
          </div>
        </div>
      </div>

      {/* Visual Mosaic */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <img 
            src="/assets/images/image-1.jpeg" 
            alt="Bamboo interior" 
            className="rounded-2xl shadow-md w-full h-56 object-cover hover:scale-102 transition-transform"
            loading="lazy"
            decoding="async"
            width="400"
            height="224"
          />
          <img 
            src="/assets/images/image-43.jpeg" 
            alt="Gazebo" 
            className="rounded-2xl shadow-md w-full h-44 object-cover hover:scale-102 transition-transform"
            loading="lazy"
            decoding="async"
            width="400"
            height="176"
          />
        </div>
        <div className="space-y-4 pt-6">
          <img 
            src="/assets/images/image-44.jpeg" 
            alt="Manor exterior" 
            className="rounded-2xl shadow-md w-full h-44 object-cover hover:scale-102 transition-transform"
            loading="lazy"
            decoding="async"
            width="400"
            height="176"
          />
          <img 
            src="/assets/images/image-7.jpeg" 
            alt="Treehouse" 
            className="rounded-2xl shadow-md w-full h-56 object-cover hover:scale-102 transition-transform"
            loading="lazy"
            decoding="async"
            width="400"
            height="224"
          />
        </div>
      </div>
    </div>
  );
}
