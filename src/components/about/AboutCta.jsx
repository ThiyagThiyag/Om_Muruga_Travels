
export default function AboutCta() {
  return (
    <div className="max-w-7xl mx-auto text-center bg-white rounded-2xl sm:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-14 border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
      <h3 className="text-xl xs:text-2xl sm:text-3xl font-serif font-bold text-[#0a2540] tracking-tight">
        Ready to experience the warmth of Om Muruga Holidays?
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto px-2">
        We welcome families, newlyweds, corporate teams, and backpackers looking for an authentic escape with top-tier comforts.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="https://wa.me/916382508601?text=Hi%20Om%20Muruga%20Holidays,%20I%20would%20like%20to%20inquire%20about%20tours%20and%20cabs"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-lg hover:shadow-emerald-500/30 transition-all inline-flex items-center justify-center gap-2"
        >
          <span>Chat on WhatsApp</span>
        </a>
        <a
          href="tel:+916382508601"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[#0a2540] hover:text-white hover:bg-[#0a2540] border-2 border-[#0a2540] font-bold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2"
        >
          <span>Call Desk: +91 63825 08601</span>
        </a>
      </div>
    </div>
  );
}
