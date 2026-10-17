import React from 'react';
import AboutBanner from '../components/about/AboutBanner';
import AboutCabs from '../components/about/AboutCabs';
import AboutDrivers from '../components/about/AboutDrivers';
import AboutTripsDone from '../components/about/AboutTripsDone';
import AboutGallery from '../components/about/AboutGallery';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      {/* Banner & Heritage */}
      <AboutBanner />

      {/* Our Cabs & Fleet */}
      <AboutCabs onOpenBooking={onOpenBooking} />

      {/* Our Drivers & Mountain Chauffeurs */}
      <AboutDrivers />

      {/* Trips Done So Far */}
      <AboutTripsDone onOpenBooking={onOpenBooking} />

      {/* Property & Stay Visual Gallery */}
      <AboutGallery />
    </div>
  );
}
