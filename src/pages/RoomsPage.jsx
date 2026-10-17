import React from 'react';
import { roomsData } from '../data/travelData';
import { useRoomFilters } from '../components/rooms/useRoomFilters';
import RoomsBanner from '../components/rooms/RoomsBanner';
import RoomsGrid from '../components/rooms/RoomsGrid';

export default function RoomsPage({ onOpenBooking, onOpenRoomModal }) {
  const filters = useRoomFilters();

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      <RoomsBanner />
      <div className="max-w-7xl mx-auto">
        <RoomsGrid 
          filteredRooms={filters.filteredRooms}
          totalCount={roomsData.length}
          onOpenRoomModal={onOpenRoomModal}
          onOpenBooking={onOpenBooking}
        />
      </div>
    </div>
  );
}

