import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';

// Below-the-fold sections are lazy-loaded to keep initial TBT and bundle size near zero
const FeaturedShowcaseSection = lazy(() => import('../components/home/FeaturedShowcaseSection'));
const FleetSection = lazy(() => import('../components/home/FleetSection'));
const VideoSection = lazy(() => import('../components/home/VideoSection'));
const WhyChooseUsSection = lazy(() => import('../components/home/WhyChooseUsSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const CtaSection = lazy(() => import('../components/home/CtaSection'));

export default function HomePage({ onOpenBooking, onOpenRoomModal, onOpenTourModal }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onOpenBooking={onOpenBooking} />
      <ServicesSection />
      <Suspense fallback={<div className="min-h-[300px]" />}>
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
      </Suspense>
    </div>
  );
}
