import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedShowcaseSection from '../components/home/FeaturedShowcaseSection';
import FleetSection from '../components/home/FleetSection';
import VideoSection from '../components/home/VideoSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

export default function HomePage({ onOpenBooking, onOpenRoomModal, onOpenTourModal }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onOpenBooking={onOpenBooking} />
      <ServicesSection />
      <FeaturedShowcaseSection
        onOpenBooking={onOpenBooking}
        onOpenRoomModal={onOpenRoomModal}
        onOpenTourModal={onOpenTourModal}
      />
      <FleetSection />
      <VideoSection onOpenBooking={onOpenBooking} />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
