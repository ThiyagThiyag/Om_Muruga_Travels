import AboutBanner from '../components/about/AboutBanner';
import AboutStory from '../components/about/AboutStory';
import AboutStats from '../components/about/AboutStats';
import AboutValues from '../components/about/AboutValues';
import AboutGallery from '../components/about/AboutGallery';
import AboutTeam from '../components/about/AboutTeam';
import AboutDrivers from '../components/about/AboutDrivers';
import AboutCabs from '../components/about/AboutCabs';
import AboutTripsDone from '../components/about/AboutTripsDone';
import AboutCta from '../components/about/AboutCta';

export default function AboutPage() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      <AboutBanner />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutGallery />
      <AboutTeam />
      
      {/* Transportation & Safety Sections */}
      <AboutDrivers />
      <AboutCabs />
      
      {/* Real Trips & Memories Showcase */}
      <AboutTripsDone />
      
      {/* Call to action */}
      <AboutCta />
    </div>
  );
}
