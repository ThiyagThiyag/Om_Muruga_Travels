import ReactDOMServer from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import Footer from './components/Footer';

export function render(url = '/') {
  return ReactDOMServer.renderToString(
    <MemoryRouter initialEntries={[url]}>
      <div className="flex flex-col min-h-screen bg-[#fdfbf7] text-slate-800 antialiased font-sans">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  );
}
