import RoomsBanner from '../components/rooms/RoomsBanner';
import RoomsGrid from '../components/rooms/RoomsGrid';
import { roomsData } from '../data/travelData';

export default function RoomsPage({ onOpenRoomModal }) {
  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      <RoomsBanner />

      <div className="max-w-7xl mx-auto">
        <RoomsGrid
          filteredRooms={roomsData}
          totalCount={roomsData.length}
          onOpenRoomModal={onOpenRoomModal}
        />
      </div>
    </div>
  );
}
