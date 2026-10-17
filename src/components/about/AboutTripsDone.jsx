import React from 'react';
import { completedTripsData, tripMetrics } from '../../data/aboutFleetTripsData';

export default function AboutTripsDone({ onOpenBooking }) {
  return (
    <section className="max-w-7xl mx-auto mb-14 sm:mb-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1.5">
          Real Milestones & Memories
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
          Trips Done So Far
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
          From tranquil Kodaikanal misty mornings to devotional Rameswaram sea breeze and adventurous Munnar tea garden roads—here is a glimpse into the thousands of journeys we have successfully conducted.
        </p>
      </div>

      {/* Metrics Counter Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12">
        {tripMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200/90 shadow-sm text-center space-y-1 hover:border-[#c59b27]/40 transition-colors"
          >
            <span className="text-2xl sm:text-3xl block mb-1">{metric.icon}</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0a2540]">
              {metric.value}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">
              {metric.label}
            </div>
            <p className="text-[11px] text-slate-500">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Completed Trips Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {completedTripsData.map((trip) => (
          <div
            key={trip.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Trip Photo Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Badge Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0a2540]/90 backdrop-blur-md text-[#f4e8c1] border border-[#c59b27]/30 shadow-sm">
                    {trip.badge}
                  </span>
                </div>

                {/* Rating & Date Bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-1 text-[#f4e8c1]">
                    <span>⭐</span>
                    <span className="font-bold">{trip.rating}</span>
                  </span>
                  <span className="text-[11px] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-slate-200">
                    {trip.date}
                  </span>
                </div>
              </div>

              {/* Trip Content */}
              <div className="p-5 sm:p-6 space-y-3.5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif group-hover:text-[#c59b27] transition-colors leading-snug">
                    {trip.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60">
                      {trip.duration}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60">
                      {trip.vehicleUsed}
                    </span>
                  </div>
                </div>

                {/* Route Trail */}
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-700">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Route Circuit
                  </span>
                  <p className="font-medium text-slate-800 leading-tight">
                    {trip.route}
                  </p>
                </div>

                {/* Travelers Details */}
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="text-[#c59b27]">👥</span>
                  <span className="font-semibold text-slate-700">{trip.travelers}</span>
                </div>

                {/* Verified Feedback Quote */}
                <div className="border-l-2 border-[#c59b27] pl-3 py-1 text-xs text-slate-600 italic bg-amber-50/30 rounded-r-lg">
                  "{trip.feedback}"
                </div>
              </div>
            </div>

            {/* Card Content Ends Cleanly */}
          </div>
        ))}
      </div>

      {/* CTA Ribbon at bottom */}
      <div className="mt-12 bg-gradient-to-r from-[#0a2540] via-[#0d3257] to-[#0a2540] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-[#c59b27]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold block">
            Custom Itineraries Welcome
          </span>
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Want to craft your own custom road trip or hill retreat?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us your travel dates, preferred vehicle, and destinations. We handle routes, cottages, and seasoned hill chauffeurs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="https://wa.me/916382508601?text=Hi%20Om%20Muruga%20Holidays,%20I%20would%20like%20to%20plan%20a%20trip"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-center text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>WhatsApp Custom Plan</span>
          </a>
        </div>
      </div>
    </section>
  );
}
