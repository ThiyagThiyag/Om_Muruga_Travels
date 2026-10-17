import React from 'react';

export default function ContactInfoCards() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
      {/* Office */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5 sm:space-y-3">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center font-bold text-xl">
          📍
        </div>
        <h4 className="text-base font-bold text-[#0a2540] font-serif">Estate Office & Stays</h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          Om Muruga Holidays, Group of Gowda's Estate, Valley Road, Kodaikanal - 624101, Tamil Nadu, India.
        </p>
      </div>

      {/* Hotline */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center font-bold text-xl">
          📞
        </div>
        <h4 className="text-base font-bold text-[#0a2540] font-serif">Direct Hotline</h4>
        <div className="space-y-1 text-xs text-slate-600">
          <div><a href="tel:+916382508601" className="hover:text-[#c59b27] font-semibold">+91 63825 08601</a> (Desk)</div>
          <div><a href="tel:+916384693543" className="hover:text-[#c59b27] font-semibold">+91 63846 93543</a> (Manager)</div>
          <a
            href="https://wa.me/918072171542"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#25D366] font-bold mt-1"
          >
            <span>Instant WhatsApp Chat</span>
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center font-bold text-xl">
          ✉️
        </div>
        <h4 className="text-base font-bold text-[#0a2540] font-serif">Official Emails</h4>
        <div className="space-y-1 text-xs text-slate-600">
          <div><a href="mailto:reservations@ommurugaholidays.com" className="hover:text-[#c59b27]">reservations@ommurugaholidays.com</a></div>
          <div><a href="mailto:support@ommurugaholidays.com" className="hover:text-[#c59b27]">support@ommurugaholidays.com</a></div>
        </div>
      </div>

      {/* Hours */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center font-bold text-xl">
          ⏰
        </div>
        <h4 className="text-base font-bold text-[#0a2540] font-serif">Operating Hours</h4>
        <div className="space-y-1 text-xs text-slate-600">
          <div><strong>Front Desk:</strong> 24 Hours / 7 Days</div>
          <div><strong>Tour Desk:</strong> 8:00 AM – 9:00 PM</div>
          <div className="text-emerald-600 font-semibold pt-1">Always Open for Guests</div>
        </div>
      </div>
    </div>
  );
}
