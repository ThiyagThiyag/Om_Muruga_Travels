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

  // 1. Transparent Brand Logo with NO background container, using exact brand mark artwork
  if (variant === 'transparent-badge' || variant === 'gowdas') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img 
          src={isDarkBackground ? '/assets/images/group-of-gowdas-logo-light.webp' : '/assets/images/group-of-gowdas-logo.webp'} 
          alt="Group of Gowda's" 
          className="h-10 sm:h-12 w-auto object-contain pointer-events-none"
          draggable="false"
        />
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
      <div className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1 rounded-2xl bg-white border border-slate-200 shadow-xs shrink-0">
        <img 
          src="/assets/images/group-of-gowdas-logo.webp" 
          alt="Group of Gowda's" 
          className="h-6 sm:h-7.5 w-auto object-contain pointer-events-none"
          draggable="false"
        />
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
