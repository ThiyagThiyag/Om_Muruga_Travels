import React, { useState, useEffect, useRef } from 'react';

export default function FloatingContactWidget({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const trayRef = useRef(null);

  // Close tray when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (trayRef.current && !trayRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 sm:right-6 z-40 flex flex-col items-center gap-3 select-none">
      {/* WhatsApp Floating Circle Button */}
      <a
        href="https://wa.me/916382508601?text=Hi%20Om%20Muruga%20Travels,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package%20or%20cab%20booking"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Direct WhatsApp Inquiry"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Hover Tooltip (Desktop) */}
        <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          WhatsApp Chat
        </span>
      </a>

      {/* Call Floating Circle Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group ${
            isOpen
              ? 'bg-[#c59b27] text-white border border-[#c59b27]'
              : 'bg-[#0a2540] hover:bg-[#061727] text-[#c59b27] border border-[#c59b27]/40'
          }`}
          aria-label="Direct Phone Inquiry Numbers"
          title="Call Travel Desk"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>

          {/* Hover Tooltip (Desktop) */}
          <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call Desk
          </span>
        </button>

        {/* Call Numbers Popover Drawer (opens to the left, vertically centered) */}
        {isOpen && (
          <div
            ref={trayRef}
            className="absolute right-14 top-1/2 -translate-y-1/2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 text-slate-800 animate-in fade-in slide-in-from-right-3 duration-200 text-left z-50"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c59b27] block">
                  Direct Travel Desk
                </span>
                <h4 className="text-sm font-bold font-serif text-[#0a2540]">
                  Om Muruga Travels
                </h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center text-xs"
                aria-label="Close call options"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 pt-3">
              {/* Phone Dials */}
              <a
                href="tel:+916382508601"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#0a2540] hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-200 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">📞</span>
                  <span>Desk Hotline</span>
                </div>
                <span className="font-bold text-[#c59b27] group-hover:text-white">+91 63825 08601</span>
              </a>

              <a
                href="tel:+916384693543"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#0a2540] hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-200 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">📞</span>
                  <span>Manager Line</span>
                </div>
                <span className="font-bold text-[#c59b27] group-hover:text-white">+91 63846 93543</span>
              </a>

              {/* Inquiry Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b0871a] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all text-center block mt-2"
              >
                📝 Customize Tour / Cab Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
