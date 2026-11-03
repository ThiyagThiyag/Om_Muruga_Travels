import ContactBanner from '../components/contact/ContactBanner';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactQuickDirect from '../components/contact/ContactQuickDirect';
import ContactTransitGuide from '../components/contact/ContactTransitGuide';
import ContactFaq from '../components/contact/ContactFaq';

export default function ContactPage() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen py-8 sm:py-10 md:py-12 px-3 xs:px-4 sm:px-8">
      <ContactBanner />
      <ContactInfoCards />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
        <ContactQuickDirect />
        <ContactTransitGuide />
      </div>
      <ContactFaq />
    </div>
  );
}
