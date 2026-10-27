import React from 'react';

/**
 * BrandLogo Component
 * Faithfully renders the "OM MURUGA HOLIDAYS" brush logo and "GROUP OF GOWDA'S" umbrella insignia.
 * Supports light and dark modes, and multiple layout variants.
 */
export default function BrandLogo({ 
  variant = 'combined', // 'combined' | 'muruga' | 'gowdas'
  isDarkBackground = false,
  className = 'h-12'
}) {
  const textColor = isDarkBackground ? '#ffffff' : '#0a2540';
  const subColor = isDarkBackground ? '#cbd5e1' : '#475569';
  const gowdasTextColor = isDarkBackground ? '#f1f5f9' : '#1e293b';

  if (variant === 'gowdas') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Umbrella Graphic */}
        <svg viewBox="0 0 160 160" width="40" height="40" className="h-full w-auto shrink-0" fill="none">
          <path d="M 80,18 L 80,4" stroke="#FF4500" strokeWidth="8" strokeLinecap="round" />
          <path 
            d="M 12,85 C 24,40 50,18 80,18 C 110,18 136,40 148,85 C 130,70 115,82 98,74 C 86,64 76,64 64,74 C 48,82 32,70 12,85 Z" 
            fill="#FF4500" 
          />
          <path d="M 18,82 Q 40,68 60,78 Q 80,64 100,78 Q 120,68 142,82" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <path d="M 80,70 L 80,140" stroke="#FF4500" strokeWidth="10" strokeLinecap="round" />
          <path d="M 80,140 C 80,162 52,162 52,142" stroke="#FF4500" strokeWidth="10" strokeLinecap="round" fill="none" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-400">
            GROUP OF
          </span>
          <span className={`text-xl font-black tracking-tight leading-none ${isDarkBackground ? 'text-white' : 'text-slate-900'}`}>
            gowda's
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF4500] ml-0.5"></span>
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'muruga') {
    return (
      <div className={`flex flex-col justify-center ${className}`}>
        {/* Brush style OM MURUGA */}
        <div className="flex items-baseline tracking-tight font-black leading-none font-sans text-2xl sm:text-3xl select-none">
          {/* OM in vibrant red */}
          <span className="text-[#E50914] mr-2 font-serif font-black tracking-tighter" style={{ textShadow: '0 1px 2px rgba(229, 9, 20, 0.2)' }}>
            OM
          </span>
          {/* M in vibrant red */}
          <span className="text-[#E50914] font-serif font-black">
            M
          </span>
          {/* URUGA in black/navy or white */}
          <span className="font-serif font-black" style={{ color: textColor }}>
            URUGA
          </span>
        </div>
        {/* Subtitle HOLIDAYS */}
        <div className="flex items-center justify-end pr-0.5 mt-0.5">
          <span 
            className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.28em]"
            style={{ color: isDarkBackground ? '#c59b27' : '#0a2540' }}
          >
            HOLIDAYS
          </span>
        </div>
      </div>
    );
  }

  // Unified Combined Logo: Umbrella + Group Endorsement + OM MURUGA HOLIDAYS
  return (
    <div className={`flex items-center gap-2 sm:gap-3.5 select-none ${className}`}>
      {/* Group of Gowda's Umbrella Emblem */}
      <div className="h-full flex items-center shrink-0">
        <svg viewBox="0 0 150 160" width="48" height="48" className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto" fill="none">
          {/* Umbrella Top Finial */}
          <path d="M 75,16 L 75,3" stroke="#FF4500" strokeWidth="7" strokeLinecap="round" />
          
          {/* Umbrella Canopy */}
          <path 
            d="M 10,80 C 22,38 46,16 75,16 C 104,16 128,38 140,80 C 122,66 108,76 92,70 C 82,60 70,60 60,70 C 44,76 28,66 10,80 Z" 
            fill="#FF4500" 
          />
          {/* Inner Curve Accent */}
          <path d="M 16,78 Q 36,66 56,74 Q 75,62 94,74 Q 114,66 134,78" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />

          {/* Shaft & Handle */}
          <path d="M 75,65 L 75,134" stroke="#FF4500" strokeWidth="8" strokeLinecap="round" />
          <path d="M 75,134 C 75,154 50,154 50,136" stroke="#FF4500" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Subtle Divider */}
      <div className={`h-6 sm:h-8 w-px ${isDarkBackground ? 'bg-white/20' : 'bg-slate-300'}`}></div>

      {/* Text Hierarchy */}
      <div className="flex flex-col justify-center">
        {/* Group Endorsement Line */}
        <div className="flex items-center gap-1 leading-none mb-0.5">
          <span className="text-[8px] sm:text-[9.5px] font-black uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#FF4500]">
            GROUP OF GOWDA'S
          </span>
        </div>

        {/* OM MURUGA */}
        <div className="flex items-baseline leading-none text-base xs:text-lg sm:text-2xl font-black font-sans tracking-tight">
          <span className="text-[#E50914] mr-1 sm:mr-1.5 font-serif font-black">
            OM
          </span>
          <span className="text-[#E50914] font-serif font-black">
            M
          </span>
          <span className="font-serif font-black" style={{ color: textColor }}>
            URUGA
          </span>
        </div>

        {/* HOLIDAYS */}
        <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-black uppercase tracking-[0.2em] sm:tracking-[0.28em] mt-0.5" style={{ color: isDarkBackground ? '#f4e8c1' : '#c59b27' }}>
          <span>HOLIDAYS</span>
        </div>
      </div>
    </div>
  );
}
