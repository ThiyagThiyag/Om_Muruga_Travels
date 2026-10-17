import React from 'react';

const col1Advantages = [
  {
    num: '01',
    title: 'Best Tariff Guarantee',
    tag: 'Direct Owner Tariffs',
    desc: 'Direct owner tariffs without middleman markups, ensuring unbeatable seasonal rates shared upon quick inquiry with zero platform commissions.',
    icon: (
      <svg className="w-5 h-5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    indent: 'md:pr-4'
  },
  {
    num: '03',
    title: 'Handpicked Authentic Stays',
    tag: 'Artisan Nature Stays',
    desc: 'Personally managed nature cottages, bamboo chalets, and private suites offering true local warmth, plush bedding, and verified modern hygiene.',
    icon: (
      <svg className="w-5 h-5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    indent: 'md:pl-8 lg:pl-12'
  },
  {
    num: '05',
    title: 'Farm-Fresh Local Cuisine',
    tag: 'Authentic Southern Flavors',
    desc: 'Delight in home-style regional delicacies prepared with locally sourced organic farm ingredients, aromatic South Indian filter coffee, and Southern hospitality.',
    icon: (
      <svg className="w-5 h-5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    indent: 'md:pr-4'
  }
];

const col2Advantages = [
  {
    num: '02',
    title: '24/7 Dedicated Support',
    tag: 'Always Accessible',
    desc: 'Direct phone & WhatsApp lines (+91 63825 08601 / +91 63846 93543) for immediate assistance, personalized rates, and real-time custom plans.',
    icon: (
      <svg className="w-5 h-5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    indent: 'md:pl-4'
  },
  {
    num: '04',
    title: 'Easy & Flexible Rescheduling',
    tag: 'Peace of Mind',
    desc: 'Hassle-free date rescheduling and transparent policies because we understand travel plans can shift unexpectedly when traveling with family.',
    icon: (
      <svg className="w-5 h-5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    indent: 'md:pl-10 lg:pl-14'
  },
  {
    num: '06',
    title: 'Tailored Custom Itineraries',
    tag: 'Western Ghats Specialists',
    desc: 'Custom travel blueprints curated by veteran destination specialists who know the hidden viewpoints, peaceful lakes, and scenic trails off tourist crowds.',
    icon: (
      <svg className="w-5 h-5 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    indent: 'md:pl-4'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-28 bg-[#fdfbf7] relative overflow-hidden">
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Simple & Neat Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
            The Om Muruga Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0a2540] tracking-tight">
            Why Travelers Choose Our Agency
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            Rooted in the trusted enterprise of Group of Gowda's, we combine genuine personal service with reliable fleet operations and transparent hill tariffs.
          </p>
        </div>

        {/* Staggered 2-Column Layout with Real DOM Padding (Zero Overlap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Column 1: Items 01, 03, 05 */}
          <div className="space-y-14 sm:space-y-20">
            {col1Advantages.map((item, idx) => (
              <div
                key={idx}
                className={`group flex flex-col justify-start transition-all duration-300 ${item.indent}`}
              >
                {/* Index & Minimal Icon Tag */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-serif font-light text-[#c59b27] group-hover:scale-110 transition-transform duration-300 select-none">
                    {item.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]/40"></span>
                  <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#c59b27] transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0a2540] group-hover:text-[#c59b27] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Subtle Expanding Line */}
                <div className="w-10 h-[2px] bg-[#c59b27]/40 my-3 group-hover:w-20 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2: Items 02, 04, 06 (Offset downward with real DOM padding) */}
          <div className="space-y-14 sm:space-y-20 md:pt-16 lg:pt-20">
            {col2Advantages.map((item, idx) => (
              <div
                key={idx}
                className={`group flex flex-col justify-start transition-all duration-300 ${item.indent}`}
              >
                {/* Index & Minimal Icon Tag */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-serif font-light text-[#c59b27] group-hover:scale-110 transition-transform duration-300 select-none">
                    {item.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]/40"></span>
                  <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#c59b27] transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0a2540] group-hover:text-[#c59b27] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Subtle Expanding Line */}
                <div className="w-10 h-[2px] bg-[#c59b27]/40 my-3 group-hover:w-20 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Bottom Trust Footnote with ample separation */}
        <div className="mt-20 sm:mt-28 pt-8 border-t border-slate-200/70 text-center max-w-md mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
            Group of Gowda's Hospitality & Travel Enterprise
          </p>
        </div>
      </div>
    </section>
  );
}
