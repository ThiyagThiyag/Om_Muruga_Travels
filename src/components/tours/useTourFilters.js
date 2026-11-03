import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useParams, useLocation } from 'react-router-dom';
import { toursData } from '../../data/travelData';

export const tourDestinations = [
  'All',
  'Ooty',
  'Coonoor',
  'Kodaikanal',
  'Kerala',
  'Munnar',
  'Wayanad',
  'Coorg'
];

const slugToDestination = {
  'ooty': 'Ooty',
  'conoor': 'Coonoor',
  'coonoor': 'Coonoor',
  'kodaikanal': 'Kodaikanal',
  'kodai': 'Kodaikanal',
  'kerala': 'Kerala',
  'munnar': 'Munnar',
  'wayanad': 'Wayanad',
  'coorg': 'Coorg',
  'hill-station': 'All'
};

export function useTourFilters() {
  const [searchParams] = useSearchParams();
  const { categorySlug } = useParams();
  const location = useLocation();

  const getInitialDestination = () => {
    if (categorySlug && slugToDestination[categorySlug.toLowerCase()]) {
      return slugToDestination[categorySlug.toLowerCase()];
    }
    const destParam = searchParams.get('destination') || searchParams.get('category');
    if (destParam) {
      const match = tourDestinations.find(d => d.toLowerCase() === destParam.toLowerCase());
      if (match) return match;
    }
    return 'All';
  };

  const [selectedDestination, setSelectedDestination] = useState(getInitialDestination);
  const [selectedDuration, setSelectedDuration] = useState('all');

  useEffect(() => {
    if (categorySlug && slugToDestination[categorySlug.toLowerCase()]) {
      setSelectedDestination(slugToDestination[categorySlug.toLowerCase()]);
      return;
    }
    const destParam = searchParams.get('destination') || searchParams.get('category');
    if (destParam) {
      const match = tourDestinations.find(d => d.toLowerCase() === destParam.toLowerCase());
      if (match) {
        setSelectedDestination(match);
        return;
      }
    }
    if (!destParam && !categorySlug) {
      setSelectedDestination('All');
    }
  }, [searchParams, categorySlug, location.pathname]);

  const filteredTours = useMemo(() => {
    return toursData.filter((t) => {
      if (selectedDestination !== 'All' && t.destination !== selectedDestination) return false;
      if (selectedDuration === 'short' && !t.duration.includes('2 Days') && !t.duration.includes('3 Days')) return false;
      if (selectedDuration === 'long' && !t.duration.includes('4 Days') && !t.duration.includes('5 Days')) return false;
      return true;
    });
  }, [selectedDestination, selectedDuration]);

  return {
    categories: tourDestinations,
    selectedCategory: selectedDestination,
    setSelectedCategory: setSelectedDestination,
    selectedDuration,
    setSelectedDuration,
    filteredTours
  };
}
