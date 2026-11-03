import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Core Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactWidget from './components/FloatingContactWidget';

// Lazy load Modals on demand so they never block initial page load
const RoomModal = lazy(() => import('./components/RoomModal'));
const ItineraryModal = lazy(() => import('./components/ItineraryModal'));

// Direct import for immediate synchronous render of HomePage (0 CLS, instant FCP/LCP)
import HomePage from './pages/HomePage';

// Lazy-loaded secondary pages (Rooms, Tours, About, Contact)
const RoomsPage = lazy(() => import('./pages/RoomsPage'));
const ToursPage = lazy(() => import('./pages/ToursPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

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
        <FloatingContactWidget />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Dynamic Multi-Page Routes with Lazy Suspense */}
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
                <div className="w-9 h-9 border-3 border-[#c59b27]/30 border-t-[#c59b27] rounded-full animate-spin"></div>
                <span className="text-xs uppercase tracking-widest text-[#8A6805] font-semibold">
                  Loading Experience...
                </span>
              </div>
            }
          >
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenRoomModal={handleOpenRoomModal}
                    onOpenTourModal={handleOpenTourModal}
                  />
                }
              />

              {/* Rooms & Cottages Page */}
              <Route
                path="/rooms"
                element={
                  <RoomsPage
                    onOpenRoomModal={handleOpenRoomModal}
                  />
                }
              />
              <Route
                path="/rooms/:typeSlug"
                element={
                  <RoomsPage
                    onOpenRoomModal={handleOpenRoomModal}
                  />
                }
              />

              {/* Tours & Circuits Page */}
              <Route
                path="/tours"
                element={
                  <ToursPage
                    onOpenTourModal={handleOpenTourModal}
                  />
                }
              />
              <Route
                path="/tours/:categorySlug"
                element={
                  <ToursPage
                    onOpenTourModal={handleOpenTourModal}
                  />
                }
              />

              {/* About & Heritage Page */}
              <Route
                path="/about"
                element={
                  <AboutPage />
                }
              />

              {/* Contact Page */}
              <Route
                path="/contact"
                element={
                  <ContactPage />
                }
              />

              {/* Catch-all 404 Route */}
              <Route
                path="*"
                element={
                  <HomePage
                    onOpenRoomModal={handleOpenRoomModal}
                    onOpenTourModal={handleOpenTourModal}
                  />
                }
              />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Lazy-loaded Room & Tour Modals */}
        <Suspense fallback={null}>
          {isRoomModalOpen && (
            <RoomModal
              isOpen={isRoomModalOpen}
              onClose={() => setIsRoomModalOpen(false)}
              room={selectedRoom}
            />
          )}
        </Suspense>

        <Suspense fallback={null}>
          {isTourModalOpen && (
            <ItineraryModal
              isOpen={isTourModalOpen}
              onClose={() => setIsTourModalOpen(false)}
              tour={selectedTour}
            />
          )}
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
