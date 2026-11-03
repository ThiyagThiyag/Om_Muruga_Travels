export default function ContactQuickDirect() {
  const whatsAppNumber = '916382508601';

  return (
    <div className="lg:col-span-7 bg-white p-6 xs:p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1">
          Direct Booking & Inquiry
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a2540] tracking-tight">
          Connect Directly on WhatsApp or Call
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          As a private family-run tour operator and resort retreat, we offer instant human responses without automated forms or delays. Tap below to chat or speak with our concierge directly.
        </p>
      </div>

      {/* Primary Action Buttons */}
      <div className="space-y-3.5 pt-2">
        <a
          href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
            'Hi Om Muruga Travels, I would like to inquire about tour packages, cab availability, and cottage stays.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base flex items-center justify-between shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all group"
        >
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.652-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div className="text-left">
              <span className="block text-xs uppercase tracking-wider text-emerald-100 font-semibold">Instant Response</span>
              <span className="text-base sm:text-lg font-bold">Chat on WhatsApp</span>
            </div>
          </div>
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <a
            href="tel:+916382508601"
            className="py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-[#0a2540] hover:text-white border border-slate-200 transition-all text-left group flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-[#c59b27] group-hover:text-amber-300 block">Travel Desk Phone</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-white">+91 63825 08601</span>
            </div>
            <span className="text-lg">📞</span>
          </a>

          <a
            href="tel:+916384693543"
            className="py-3.5 px-4 rounded-xl bg-slate-50 hover:bg-[#0a2540] hover:text-white border border-slate-200 transition-all text-left group flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-[#c59b27] group-hover:text-amber-300 block">Estate Manager</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-white">+91 63846 93543</span>
            </div>
            <span className="text-lg">📞</span>
          </a>
        </div>
      </div>

      {/* Assurance Highlights */}
      <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A6805]">
          Direct Service Commitment
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Zero middleman commission</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Real-time cab & room booking</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Personalized mountain itineraries</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Transparent fixed quotes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

