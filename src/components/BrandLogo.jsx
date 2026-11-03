/**
 * BrandLogo Component
 * Supports:
 * - 'badge': Just the Umbrella and GROUP OF gowda's pill card (without OM MURUGA)
 * - 'transparent-badge': Umbrella and GROUP OF gowda's with NO background or border
 * - 'combined' (default): Umbrella & GROUP OF gowda's + OM MURUGA HOLIDAYS
 * - 'muruga': Just the OM MURUGA HOLIDAYS typography
 */
export default function BrandLogo({ 
  variant = 'combined',
  isDarkBackground = false,
  className = ''
}) {
  const urugaColor = isDarkBackground ? '#ffffff' : '#0a2540';
  const holidaysColor = isDarkBackground ? '#f4e8c1' : '#c59b27';
  const dividerColor = isDarkBackground ? 'bg-white/20' : 'bg-slate-300';

  // 1. Transparent Brand Logo with NO background container, just umbrella and text
  if (variant === 'transparent-badge' || variant === 'gowdas') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        {/* Orange Umbrella Icon */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 mr-2.5 flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
            <path d="M 80,18 L 80,4" stroke="#FF4500" strokeWidth="9" strokeLinecap="round" />
            <path 
              d="M 12,85 C 24,40 50,18 80,18 C 110,18 136,40 148,85 C 130,70 115,82 98,74 C 86,64 76,64 64,74 C 48,82 32,70 12,85 Z" 
              fill="#FF4500" 
            />
            <path d="M 18,82 Q 40,68 60,78 Q 80,64 100,78 Q 120,68 142,82" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 80,70 L 80,138" stroke="#FF4500" strokeWidth="10" strokeLinecap="round" />
            <path d="M 80,138 C 80,162 52,162 52,142" stroke="#FF4500" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* GROUP OF gowda's */}
        <div className="flex flex-col justify-center leading-tight">
          <span className="text-[8px] sm:text-[9.5px] font-bold tracking-[0.2em] uppercase text-slate-400">
            GROUP OF
          </span>
          <div className="flex items-baseline">
            <span className={`text-base sm:text-lg font-black tracking-tight leading-none ${isDarkBackground ? 'text-white' : 'text-slate-900'}`}>
              gowda's
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] ml-1 shrink-0 self-center"></span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Just OM MURUGA HOLIDAYS
  if (variant === 'muruga') {
    return (
      <div className={`flex flex-col justify-center select-none ${className}`}>
        <div className="flex items-baseline leading-none text-base xs:text-lg sm:text-2xl font-black font-sans tracking-tight">
          <span className="text-[#FF0000] mr-1 sm:mr-1.5 font-serif font-black">
            OM
          </span>
          <span className="text-[#FF0000] font-serif font-black">
            M
          </span>
          <span className="font-serif font-black" style={{ color: urugaColor }}>
            URUGA
          </span>
        </div>
        <span 
          className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.22em] sm:tracking-[0.3em] leading-none mt-0.5"
          style={{ color: holidaysColor }}
        >
          HOLIDAYS
        </span>
      </div>
    );
  }

  // 3. Combined: Pill badge + Divider + OM MURUGA HOLIDAYS (used in Navbar and Footer)
  return (
    <div className={`flex items-center gap-2.5 sm:gap-4 select-none ${className}`}>
      {/* Umbrella & GROUP OF gowda's Pill Card */}
      <div className="inline-flex items-center px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs shrink-0">
        <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 mr-2 flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
            <path d="M 80,18 L 80,4" stroke="#FF4500" strokeWidth="9" strokeLinecap="round" />
            <path 
              d="M 12,85 C 24,40 50,18 80,18 C 110,18 136,40 148,85 C 130,70 115,82 98,74 C 86,64 76,64 64,74 C 48,82 32,70 12,85 Z" 
              fill="#FF4500" 
            />
            <path d="M 18,82 Q 40,68 60,78 Q 80,64 100,78 Q 120,68 142,82" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 80,70 L 80,138" stroke="#FF4500" strokeWidth="10" strokeLinecap="round" />
            <path d="M 80,138 C 80,162 52,162 52,142" stroke="#FF4500" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        <div className="flex flex-col justify-center leading-tight">
          <span className="text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.2em] uppercase text-slate-400">
            GROUP OF
          </span>
          <div className="flex items-baseline">
            <span className="text-xs sm:text-sm font-black tracking-tight text-slate-900 leading-none">
              gowda's
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] ml-0.5 shrink-0 self-center"></span>
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className={`h-7 sm:h-9 w-[1.5px] ${dividerColor} hidden xs:block`}></div>

      {/* OM MURUGA HOLIDAYS */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-baseline leading-none text-base xs:text-lg sm:text-2xl font-black font-sans tracking-tight">
          <span className="text-[#FF0000] mr-1 sm:mr-1.5 font-serif font-black">
            OM
          </span>
          <span className="text-[#FF0000] font-serif font-black">
            M
          </span>
          <span className="font-serif font-black" style={{ color: urugaColor }}>
            URUGA
          </span>
        </div>
        <span 
          className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.22em] sm:tracking-[0.3em] leading-none mt-0.5"
          style={{ color: holidaysColor }}
        >
          HOLIDAYS
        </span>
      </div>
    </div>
  );
}
