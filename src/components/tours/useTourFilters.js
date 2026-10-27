import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useParams, useLocation } from 'react-router-dom';
import { toursData } from '../../data/travelData';

export const tourCategories = [
  'All', 
  'Hill Station & Nature', 
  'Spiritual & Cultural', 
  'International'
];

const slugToCategory = {
  'hill-station': 'Hill Station & Nature',
  'spiritual': 'Spiritual & Cultural',
  'honeymoon': 'Hill Station & Nature',
  'nature': 'Hill Station & Nature',
  'international': 'International'
};

export function useTourFilters() {
  const [searchParams] = useSearchParams();
  const { categorySlug } = useParams();
  const location = useLocation();

  const getInitialCategory = () => {
    if (categorySlug && slugToCategory[categorySlug]) {
      return slugToCategory[categorySlug];
    }
    const catParam = searchParams.get('category');
    if (catParam && tourCategories.includes(catParam)) {
      return catParam;
    }
    return 'All';
  };

  const [selectedCategory, setSelectedCategory] = useState(getInitialCategory);
  const [selectedDuration, setSelectedDuration] = useState('all');

  useEffect(() => {
    if (categorySlug && slugToCategory[categorySlug]) {
      setSelectedCategory(slugToCategory[categorySlug]);
      return;
    }
    const currentParam = searchParams.get('category');
    if (currentParam && tourCategories.includes(currentParam)) {
      setSelectedCategory(currentParam);
    } else if (!currentParam && !categorySlug) {
      setSelectedCategory('All');
    }
  }, [searchParams, categorySlug, location.pathname]);

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
