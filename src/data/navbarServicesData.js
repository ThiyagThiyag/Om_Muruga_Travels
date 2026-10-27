export const servicesMegaMenuData = [
  {
    id: 'cabs',
    title: 'Cabs & Fleet',
    shortTitle: 'Cabs',
    mainPath: '/tours#fleet',
    icon: 'car',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
    subtopics: [
      { title: 'Sedan Cabs (Dzire / Etios)', path: '/tours#fleet' },
      { title: 'Innova Crysta & MUVs', path: '/tours#fleet' },
      { title: 'Tempo Traveler (Group)', path: '/tours#fleet' }
    ],
    footerAction: {
      text: 'View All Cabs',
      path: '/tours#fleet'
    }
  },
  {
    id: 'tours',
    title: 'Tour Packages',
    shortTitle: 'Tours',
    mainPath: '/tours',
    icon: 'compass',
    iconBg: 'bg-blue-50 text-[#0a2540] border-blue-200',
    subtopics: [
      { title: 'Hill Station Packages', path: '/tours/hill-station' },
      { title: 'Temple & Spiritual Tours', path: '/tours/spiritual' },
      { title: 'Honeymoon Specials', path: '/tours/honeymoon' }
    ],
    footerAction: {
      text: 'View All Tours',
      path: '/tours'
    }
  },
  {
    id: 'rooms',
    title: 'Rooms & Stays',
    shortTitle: 'Rooms',
    mainPath: '/rooms',
    icon: 'home',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    subtopics: [
      { title: 'Bamboo Cottages', path: '/rooms/cottage' },
      { title: 'Treehouse Villas', path: '/rooms/treehouse' },
      { title: 'Deluxe Manor Suites', path: '/rooms/suite' }
    ],
    footerAction: {
      text: 'View All Stays',
      path: '/rooms'
    }
  }
];
