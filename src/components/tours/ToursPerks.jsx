import React from 'react';

const perks = [
  {
    icon: '🚗',
    title: 'Private AC Cab',
    desc: 'Dedicated vehicle for your group without sharing'
  },
  {
    icon: '🏡',
    title: 'Handpicked Premium Stays',
    desc: 'Personally vetted boutique cottages & suites'
  },
  {
    icon: '🗺️',
    title: 'Local Guide Support',
    desc: 'Expert destination coordinators on call'
  },
  {
    icon: '🛡️',
    title: 'Zero Hidden Costs',
    desc: 'Tolls, parking, and driver allowances all covered'
  }
];

export default function ToursPerks() {
  return (
    <div className="max-w-7xl mx-auto mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1">
          Always Included
        </span>
        <h3 className="text-2xl font-serif font-bold text-[#0a2540]">
          Every Om Muruga Tour Includes
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {perks.map((perk, i) => (
          <div key={i} className="space-y-2">
            <span className="text-3xl block">{perk.icon}</span>
            <h4 className="text-sm font-bold text-slate-800">{perk.title}</h4>
            <p className="text-xs text-slate-500">{perk.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
