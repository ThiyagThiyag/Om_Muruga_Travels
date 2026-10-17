import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Reusable Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import RoomModal from './components/RoomModal';
import ItineraryModal from './components/ItineraryModal';
import FloatingContactWidget from './components/FloatingContactWidget';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Global Modals State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingItem, setBookingItem] = useState(null);

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  // Toast Notification State
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Handlers for Opening Modals
  const handleOpenBooking = (item = null) => {
    setBookingItem(item);
    setIsBookingOpen(true);
  };

  const handleOpenRoomModal = (room) => {
    setSelectedRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleOpenTourModal = (tour) => {
    setSelectedTour(tour);
    setIsTourModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#fdfbf7] text-slate-800 antialiased font-sans">
        {/* Scroll To Top helper & floating button */}
        <ScrollToTop />

        {/* Floating WhatsApp & Direct Call Widget */}
        <FloatingContactWidget onOpenBooking={handleOpenBooking} />

        {/* Global Navigation Header */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onOpenRoomModal={handleOpenRoomModal}
                  onOpenTourModal={handleOpenTourModal}
                />
              }
            />
            <Route
              path="/rooms"
              element={
                <RoomsPage
                  onOpenBooking={handleOpenBooking}
                  onOpenRoomModal={handleOpenRoomModal}
                />
              }
            />
            <Route
              path="/tours"
              element={
                <ToursPage
                  onOpenBooking={handleOpenBooking}
                  onOpenTourModal={handleOpenTourModal}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onShowToast={showToast} />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onOpenRoomModal={handleOpenRoomModal}
                  onOpenTourModal={handleOpenTourModal}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onShowToast={showToast} />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialItem={bookingItem}
          onShowToast={showToast}
        />

        {/* Room Quick-View Modal */}
        <RoomModal
          isOpen={isRoomModalOpen}
          onClose={() => setIsRoomModalOpen(false)}
          room={selectedRoom}
          onBookRoom={(room) => handleOpenBooking(room)}
        />

        {/* Tour Itinerary Detailed Modal */}
        <ItineraryModal
          isOpen={isTourModalOpen}
          onClose={() => setIsTourModalOpen(false)}
          tour={selectedTour}
          onBookTour={(tour) => handleOpenBooking(tour)}
        />

        {/* Floating Toast Notification Bar */}
        <Toast toasts={toasts} onDismiss={dismissToast} />
      </div>
    </BrowserRouter>
  );
}

export default App;
