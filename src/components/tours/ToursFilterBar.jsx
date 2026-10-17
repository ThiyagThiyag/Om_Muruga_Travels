import React from 'react';

export default function ToursFilterBar({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  selectedDuration, 
  setSelectedDuration 
}) {
  return (
    <div className="max-w-7xl mx-auto mb-8 sm:mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-slate-200">
      {/* Category Filter Pills (Horizontal scrollable on mobile) */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 md:flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 min-h-[38px] ${
              selectedCategory === cat
                ? 'bg-[#0a2540] text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-[#c59b27]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Duration Dropdown */}
      <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0">
        <span className="text-xs text-slate-500 font-semibold whitespace-nowrap">Duration:</span>
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="w-full sm:w-auto px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#c59b27] min-h-[38px]"
        >
          <option value="all">All Durations</option>
          <option value="short">Quick Getaways (3 - 4 Days)</option>
          <option value="long">Extended Vacations (5 - 7 Days)</option>
        </select>
      </div>
    </div>
  );
}
