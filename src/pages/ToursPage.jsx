import React from 'react';
import { useTourFilters } from '../components/tours/useTourFilters';
import ToursBanner from '../components/tours/ToursBanner';
import ToursFilterBar from '../components/tours/ToursFilterBar';
import ToursGrid from '../components/tours/ToursGrid';
import ToursFleetShowcase from '../components/tours/ToursFleetShowcase';
import ToursPerks from '../components/tours/ToursPerks';

export default function ToursPage({ onOpenBooking, onOpenTourModal }) {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedDuration,
    setSelectedDuration,
    filteredTours
  } = useTourFilters();

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      <ToursBanner />
      <ToursFilterBar 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
      />
      <ToursGrid 
        tours={filteredTours} 
        onOpenTourModal={onOpenTourModal} 
        onOpenBooking={onOpenBooking} 
      />
      <ToursFleetShowcase />
      <ToursPerks />
    </div>
  );
}
