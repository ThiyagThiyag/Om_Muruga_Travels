import React from 'react';

const allAmenities = [
  'Free High-Speed WiFi',
  'Complimentary Breakfast',
  'Hot Water Geyser',
  'Nature / Valley View',
  'Air Conditioning',
  'Swimming Pool Access',
  'Private Balcony',
  'Room Service'
];

export default function RoomsFilterSidebar({
  searchKeyword,
  setSearchKeyword,
  selectedType,
  setSelectedType,
  selectedCapacity,
  setSelectedCapacity,
  selectedRating,
  setSelectedRating,
  selectedAmenities,
  handleAmenityToggle,
  handleClearFilters,
  mobileFilterOpen,
  setMobileFilterOpen,
  filteredCount
}) {
  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
        <span className="text-sm font-bold text-slate-800">
          Filters ({filteredCount} available)
        </span>
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="px-4 py-2 rounded-lg bg-[#0a2540] text-white text-xs font-bold flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <span>{mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
        </button>
      </div>

      {/* Filter Sidebar */}
      <aside className={`lg:block ${mobileFilterOpen ? 'block' : 'hidden'} space-y-6`}>
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-6 sticky top-24">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="text-base font-bold text-[#0a2540] font-serif flex items-center gap-2">
              <svg className="w-4 h-4 text-[#c59b27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filter Stays</span>
            </h3>
            <button
              onClick={handleClearFilters}
              className="text-xs font-semibold text-[#c59b27] hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Search by Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Search by Stay Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Bamboo, Treehouse, Suite..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c59b27]"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Style */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Stay Style
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50 focus:outline-none focus:border-[#c59b27]"
            >
              <option value="all">All Stay Types</option>
              <option value="cottage">Bamboo Luxury Cottage</option>
              <option value="treehouse">Treehouse Villa</option>
              <option value="suite">Deluxe Manor Suite</option>
            </select>
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Guest Capacity
            </label>
            <select
              value={selectedCapacity}
              onChange={(e) => setSelectedCapacity(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50 focus:outline-none focus:border-[#c59b27]"
            >
              <option value="all">All Group Sizes</option>
              <option value="couples">Couples (2 Guests)</option>
              <option value="family">Family (3 - 4 Guests)</option>
              <option value="group">Large Groups (5+ Guests)</option>
            </select>
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Minimum Rating
            </label>
            <div className="space-y-1.5">
              {[
                { label: 'All Ratings', value: 'all' },
                { label: '★ 5.0 Exceptional', value: '5.0' },
                { label: '★ 4.8 & Above', value: '4.8' },
                { label: '★ 4.5 & Above', value: '4.5' },
              ].map((item) => (
                <label key={item.value} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="radio"
                    name="ratingFilter"
                    value={item.value}
                    checked={selectedRating === item.value}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="text-[#c59b27] focus:ring-[#c59b27]"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Amenities & Features
            </label>
            <div className="space-y-2">
              {allAmenities.map((amenity) => (
                <label key={amenity} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="rounded text-[#c59b27] focus:ring-[#c59b27]"
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Direct Help */}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-slate-700 space-y-2">
            <strong className="text-emerald-800 block">Need Instant Tariff?</strong>
            <p>Chat directly with our manager on WhatsApp for current room availability.</p>
            <a
              href="https://wa.me/916382508601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] font-bold"
            >
              <span>WhatsApp: 6382508601</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
