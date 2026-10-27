import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useParams, useLocation } from 'react-router-dom';
import { roomsData } from '../../data/travelData';

export function useRoomFilters() {
  const [searchParams] = useSearchParams();
  const { typeSlug } = useParams();
  const location = useLocation();

  const getInitialType = () => {
    if (typeSlug) return typeSlug.toLowerCase();
    return searchParams.get('type') || 'all';
  };

  const initialCapacity = searchParams.get('capacity') || 'all';

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedType, setSelectedType] = useState(getInitialType);
  const [selectedCapacity, setSelectedCapacity] = useState(initialCapacity);
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('recommended');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (typeSlug) {
      setSelectedType(typeSlug.toLowerCase());
      return;
    }
    const typeParam = searchParams.get('type');
    const capParam = searchParams.get('capacity');
    if (typeParam) {
      setSelectedType(typeParam);
    } else if (!typeSlug) {
      setSelectedType('all');
    }
    if (capParam) {
      setSelectedCapacity(capParam);
    }
  }, [searchParams, typeSlug, location.pathname]);

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  const handleClearFilters = () => {
    setSearchKeyword('');
    setSelectedType('all');
    setSelectedCapacity('all');
    setSelectedRating('all');
    setSelectedAmenities([]);
    setSortBy('recommended');
  };

  const filteredRooms = useMemo(() => {
    return roomsData.filter(room => {
      if (searchKeyword.trim()) {
        const query = searchKeyword.toLowerCase();
        const match = room.title.toLowerCase().includes(query) ||
                      room.shortDescription.toLowerCase().includes(query) ||
                      room.type.toLowerCase().includes(query);
        if (!match) return false;
      }
      if (selectedType !== 'all' && room.category !== selectedType && room.type !== selectedType) return false;
      if (selectedCapacity !== 'all' && room.capacityType !== selectedCapacity) return false;
      if (selectedRating !== 'all' && room.rating < parseFloat(selectedRating)) return false;
      if (selectedAmenities.length > 0 && !selectedAmenities.every(a => room.amenities.includes(a))) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      return 0;
    });
  }, [searchKeyword, selectedType, selectedCapacity, selectedRating, selectedAmenities, sortBy]);

  return {
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
    sortBy,
    setSortBy,
    mobileFilterOpen,
    setMobileFilterOpen,
    handleClearFilters,
    filteredRooms
  };
}
