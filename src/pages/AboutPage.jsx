import React from 'react';
import AboutBanner from '../components/about/AboutBanner';
import AboutStory from '../components/about/AboutStory';
import AboutValues from '../components/about/AboutValues';
import AboutStats from '../components/about/AboutStats';
import AboutCabs from '../components/about/AboutCabs';
import AboutDrivers from '../components/about/AboutDrivers';
import AboutTripsDone from '../components/about/AboutTripsDone';
import AboutTeam from '../components/about/AboutTeam';
import AboutGallery from '../components/about/AboutGallery';
import AboutCta from '../components/about/AboutCta';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      {/* Banner & Heritage */}
      <AboutBanner />

      {/* Origin Story */}
      <AboutStory />

      {/* Values & Philosophy */}
      <AboutValues />

      {/* Stats Counter */}
      <AboutStats />

      {/* Our Cabs & Fleet */}
      <AboutCabs onOpenBooking={onOpenBooking} />

      {/* Our Drivers & Mountain Chauffeurs */}
      <AboutDrivers />

      {/* Trips Done So Far */}
      <AboutTripsDone onOpenBooking={onOpenBooking} />

      {/* Meet Our Team */}
      <AboutTeam />

      {/* Property & Stay Visual Gallery */}
      <AboutGallery />

      {/* Bottom CTA */}
      <AboutCta onOpenBooking={onOpenBooking} />
    </div>
  );
}
