import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toursData } from '../../data/travelData';

export const tourCategories = [
  'All', 
  'Hill Station & Nature', 
  'Spiritual & Cultural', 
  'International'
];

export function useTourFilters() {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(
    catParam && tourCategories.includes(catParam) ? catParam : 'All'
  );
  const [selectedDuration, setSelectedDuration] = useState('all');

  useEffect(() => {
    const currentParam = searchParams.get('category');
    if (currentParam && tourCategories.includes(currentParam)) {
      setSelectedCategory(currentParam);
    } else if (!currentParam) {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  const filteredTours = useMemo(() => {
    return toursData.filter((t) => {
      if (selectedCategory !== 'All' && t.category !== selectedCategory) return false;
      if (selectedDuration === 'short' && !t.duration.includes('3 Days') && !t.duration.includes('4 Days')) return false;
      if (selectedDuration === 'long' && !t.duration.includes('5 Days') && !t.duration.includes('6 Days') && !t.duration.includes('7 Days')) return false;
      return true;
    });
  }, [selectedCategory, selectedDuration]);

  return {
    categories: tourCategories,
    selectedCategory,
    setSelectedCategory,
    selectedDuration,
    setSelectedDuration,
    filteredTours
  };
}
