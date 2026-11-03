import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-8 bg-[#061727]">
      {/* Background Image: Next-gen AVIF/WebP with responsive mobile variants */}
      <picture className="absolute inset-0 w-full h-full block">
        <source media="(max-width: 640px)" type="image/avif" srcSet="/assets/images/image-45-mobile.avif" />
        <source media="(max-width: 640px)" type="image/webp" srcSet="/assets/images/image-45-mobile.webp" />
        <source type="image/avif" srcSet="/assets/images/image-45.avif" />
        <source type="image/webp" srcSet="/assets/images/image-45.webp" />
        <img
          src="/assets/images/image-45.webp"
          alt="Scenic Western Ghats Mountain Tour - Om Muruga Travels"
          className="w-full h-full object-cover object-center brightness-45 contrast-105 block"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1600"
          height="1199"
        />
      </picture>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full space-y-7 sm:space-y-9">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f4e8c1] text-xs sm:text-sm font-medium shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#c59b27] shrink-0" />
          <span>Premier Tours, Travels & Cottage Stays • Group of Gowda's</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
            Experience Unforgettable Journeys with{' '}
            <span className="text-[#f4e8c1]">
              Om Muruga Travels
            </span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            Tailored holiday packages, 24/7 private AC chauffeur cabs, outstation tour circuits, and boutique cottage stays across South India & beyond.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-2">
          {/* Primary CTA Button */}
          <a
            href="https://wa.me/916382508601?text=Hi%20Om%20Muruga%20Travels,%20I%20would%20like%20to%20plan%20a%20tour%20or%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-emerald-300/30"
          >
            <span>WhatsApp Inquiry</span>
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>

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
