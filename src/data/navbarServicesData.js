export const servicesMegaMenuData = [
  {
    id: 'cabs',
    title: 'Cabs & Fleet',
    shortTitle: 'Cabs',
    mainPath: '/cabs',
    icon: 'car',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
    subtopics: [
      { title: 'Swift Dzire & Sedans', path: '/cabs' },
      { title: 'Innova Crysta & Ertiga', path: '/cabs' },
      { title: 'Tempo Traveler & Urbania', path: '/cabs' }
    ],
    footerAction: {
      text: 'View All Cabs',
      path: '/cabs'
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
      { title: 'Ooty & Coonoor Tours', path: '/tours/ooty' },
      { title: 'Kodaikanal Packages', path: '/tours/kodaikanal' },
      { title: 'Kerala & Munnar Getaways', path: '/tours/kerala' }
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
      { title: 'Bamboo Cottages', path: '/rooms' },
      { title: 'Treehouse Villas', path: '/rooms' },
      { title: 'Deluxe Manor Suites', path: '/rooms' }
    ],
    footerAction: {
      text: 'View All Stays',
      path: '/rooms'
    }
  }
];
