import React from 'react';

export default function ItineraryModal({ isOpen, onClose, tour }) {
  if (!isOpen || !tour) return null;

  const whatsAppUrl = `https://wa.me/916382508601?text=${encodeURIComponent(
    `Hi Om Muruga Holidays, I am interested in inquiring about the "${tour.title}" (${tour.duration}). Please share custom pricing, inclusions, and departure dates.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with close */}
        <div className="relative h-56 sm:h-64 w-full shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c59b27] text-white shadow-sm mb-2">
              {tour.category} • {tour.duration}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {tour.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {tour.description}
          </p>

          {/* Highlights */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <h4 className="text-xs font-bold text-[#b0871a] uppercase tracking-wider mb-2.5">
              Tour Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day by Day Itinerary */}
          <div>
            <h4 className="text-sm font-bold text-[#0a2540] uppercase tracking-wider mb-4 border-l-3 border-[#c59b27] pl-2.5">
              Day-by-Day Journey Plan
            </h4>
            <div className="space-y-4">
              {tour.itinerary.map((step) => (
                <div key={step.day} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                    D{step.day}
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex-1">
                    <h5 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200 pt-5">
            <div>
              <h5 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Inclusions
              </h5>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {tour.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span> Exclusions
              </h5>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {tour.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer with WhatsApp & Call */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-[#0a2540]">
              Custom Package Tariff on Inquiry
            </div>
            <span className="text-xs text-slate-500">Includes private cab, stay, and daily breakfast</span>
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
