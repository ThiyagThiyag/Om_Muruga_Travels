import { useState, useMemo } from 'react';
import RoomsBanner from '../components/rooms/RoomsBanner';
import RoomsFilterSidebar from '../components/rooms/RoomsFilterSidebar';
import RoomsGrid from '../components/rooms/RoomsGrid';
import { useRoomFilters } from '../components/rooms/useRoomFilters';
import { roomsData } from '../data/travelData';

export default function RoomsPage({ onOpenRoomModal }) {
  const [rooms] = useState(roomsData);

  const {
    selectedType,
    sortBy,
    searchParams,
    setSearchParams,
    handleTypeChange,
    handleSortChange,
    resetFilters
  } = useRoomFilters();

  const filteredRooms = useMemo(() => {
    let result = [...rooms];
    if (selectedType !== 'all') {
      result = result.filter(
        (room) => room.type.toLowerCase() === selectedType.toLowerCase()
      );
    }
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'capacity') {
      result.sort((a, b) => b.capacity - a.capacity);
    }
    return result;
  }, [rooms, selectedType, sortBy]);

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      <RoomsBanner />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
        <RoomsFilterSidebar
          selectedType={selectedType}
          sortBy={sortBy}
          onTypeChange={handleTypeChange}
          onSortChange={handleSortChange}
          onReset={resetFilters}
          totalCount={rooms.length}
          filteredCount={filteredRooms.length}
        />

        <RoomsGrid
          filteredRooms={filteredRooms}
          onOpenRoomModal={onOpenRoomModal}
        />
      </div>
    </div>
  );
}
