import React, { useState } from 'react';
import { faqsData } from '../../data/travelData';

export default function ContactFaq() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mb-10 sm:mb-16">
      <div className="text-center mb-6 sm:mb-10 space-y-1.5 sm:space-y-2">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
          Common Inquiries
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 px-2">
          Everything you need to know about booking with Om Muruga Holidays.
        </p>
      </div>

      <div className="space-y-2.5 sm:space-y-3">
        {faqsData.map((faq, index) => {
          const isOpen = activeFaqIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none hover:bg-slate-50/60 transition-colors"
              >
                <span className="text-xs xs:text-sm sm:text-base font-bold text-[#0a2540] font-serif">
                  {faq.question}
                </span>
                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-transform duration-200 shrink-0 ${
                  isOpen ? 'bg-[#c59b27] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                }`}>
                  ↓
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
