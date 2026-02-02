// ============================================
// HONEYMOON & ROMANCE TOURISM DATA
// ============================================
// Centralized data for all honeymoon components
// Admin-editable placeholders throughout

export interface HoneymoonPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  destination: string;
  searchQuery: string;
  inclusions: { icon: string; text: string }[];
  features?: string[];
}

export interface HoneymoonCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  packages: HoneymoonPackage[];
}

// ============================================
// ROMANTIC PACKAGES (Main Honeymoon Offerings)
// ============================================

export const romanticPackages: HoneymoonPackage[] = [
  {
    id: 'romantic-escape',
    name: '[Admin: Romantic Escape Package]',
    description: '[Admin: Perfect for newlyweds seeking intimacy]',
    price: '₹30,000',
    duration: '3N/4D',
    rating: 4.8,
    reviews: 234,
    destination: '[Admin: Admin-Selected Romantic Destination]',
    searchQuery: 'romantic honeymoon package destinations',
    inclusions: [
      { icon: '🕯️', text: '[Admin: Candlelight dinner]' },
      { icon: '💆', text: '[Admin: Couple spa session]' },
      { icon: '❤️', text: '[Admin: Romantic room décor]' },
      { icon: '🌹', text: '[Admin: Welcome bouquet]' }
    ]
  },
  {
    id: 'luxury-suite',
    name: '[Admin: Luxury Honeymoon Suite]',
    description: '[Admin: Premium experience with exclusive amenities]',
    price: '₹50,000',
    duration: '5N/6D',
    rating: 4.9,
    reviews: 456,
    destination: '[Admin: Premium Location TBD]',
    searchQuery: 'luxury honeymoon suite packages',
    inclusions: [
      { icon: '🍾', text: '[Admin: Champagne welcome]' },
      { icon: '🎁', text: '[Admin: Honeymoon gift basket]' },
      { icon: '🌅', text: '[Admin: Sunset dinner cruise]' },
      { icon: '💆', text: '[Admin: Daily couple spa]' }
    ]
  },
  {
    id: 'intimate-getaway',
    name: '[Admin: Intimate Getaway]',
    description: '[Admin: Cozy retreat for quality time together]',
    price: '₹25,000',
    duration: '4N/5D',
    rating: 4.7,
    reviews: 189,
    destination: '[Admin: Secluded Spot (Admin)]',
    searchQuery: 'intimate honeymoon getaway destinations',
    inclusions: [
      { icon: '🔥', text: '[Admin: Private bonfire]' },
      { icon: '🍽️', text: '[Admin: In-room dining]' },
      { icon: '🎵', text: '[Admin: Romantic music setup]' },
      { icon: '📸', text: '[Admin: Couple photoshoot]' }
    ]
  }
];

// ============================================
// HILL STATION RETREATS
// ============================================

export const hillStationPackages: HoneymoonPackage[] = [
  {
    id: 'mountain-retreat',
    name: '[Admin: Cozy Mountain Retreat]',
    description: '[Admin: Nestled in scenic mountains]',
    price: '₹28,000',
    duration: '3N/4D',
    rating: 4.8,
    reviews: 156,
    destination: '[Admin: Hill Station Location]',
    searchQuery: 'cozy mountain honeymoon retreat',
    features: [
      '[Admin: Fireplace in room]',
      '[Admin: Hot chocolate service]',
      '[Admin: Mountain views]',
      '[Admin: Bonfire nights]'
    ],
    inclusions: []
  },
  {
    id: 'scenic-escape',
    name: '[Admin: Scenic Hill Station Escape]',
    description: '[Admin: Breathtaking valley views]',
    price: '₹32,000',
    duration: '4N/5D',
    rating: 4.9,
    reviews: 203,
    destination: '[Admin: Scenic Hill Location]',
    searchQuery: 'scenic hill station honeymoon destinations',
    features: [
      '[Admin: Scenic balcony]',
      '[Admin: Couple trekking]',
      '[Admin: Sunset viewpoints]',
      '[Admin: Local cuisine]'
    ],
    inclusions: []
  },
  {
    id: 'mountain-lodge',
    name: '[Admin: Romantic Mountain Lodge]',
    description: '[Admin: Private cottage experience]',
    price: '₹35,000',
    duration: '5N/6D',
    rating: 4.7,
    reviews: 178,
    destination: '[Admin: Mountain Lodge Area]',
    searchQuery: 'romantic mountain lodge honeymoon',
    features: [
      '[Admin: Private cottage]',
      '[Admin: Wood-fired heater]',
      '[Admin: Valley views]',
      '[Admin: Nature walks]'
    ],
    inclusions: []
  }
];

// ============================================
// ADVENTURE & ROMANCE
// ============================================

export const adventurePackages: HoneymoonPackage[] = [
  {
    id: 'adventure-thrill',
    name: '[Admin: Adventure Thrill Honeymoon]',
    description: '[Admin: For couples who love excitement]',
    price: '₹38,000',
    duration: '5N/6D',
    rating: 4.8,
    reviews: 192,
    destination: '[Admin: Adventure Destination]',
    searchQuery: 'adventure honeymoon packages',
    features: [
      '[Admin: Paragliding experience]',
      '[Admin: River rafting]',
      '[Admin: Rock climbing]',
      '[Admin: Camping under stars]'
    ],
    inclusions: []
  },
  {
    id: 'wilderness-romance',
    name: '[Admin: Wilderness Romance]',
    description: '[Admin: Connect in nature]',
    price: '₹32,000',
    duration: '4N/5D',
    rating: 4.7,
    reviews: 145,
    destination: '[Admin: Wildlife Area]',
    searchQuery: 'wilderness honeymoon romance',
    features: [
      '[Admin: Wildlife safari]',
      '[Admin: Nature trails]',
      '[Admin: Outdoor dining]',
      '[Admin: Stargazing sessions]'
    ],
    inclusions: []
  },
  {
    id: 'eco-adventure',
    name: '[Admin: Eco-Adventure Escape]',
    description: '[Admin: Sustainable adventure]',
    price: '₹29,000',
    duration: '3N/4D',
    rating: 4.6,
    reviews: 128,
    destination: '[Admin: Eco-Resort Location]',
    searchQuery: 'eco adventure honeymoon',
    features: [
      '[Admin: Eco-friendly resort]',
      '[Admin: Organic meals]',
      '[Admin: Nature activities]',
      '[Admin: Sustainable tourism]'
    ],
    inclusions: []
  }
];

// ============================================
// INTERNATIONAL ESCAPES
// ============================================

export const internationalPackages: HoneymoonPackage[] = [
  {
    id: 'european-romance',
    name: '[Admin: European Romance]',
    description: '[Admin: Explore romantic Europe]',
    price: '₹2,50,000',
    duration: '7N/8D',
    rating: 4.9,
    reviews: 312,
    destination: '[Admin: European City]',
    searchQuery: 'european honeymoon destinations',
    features: [
      '[Admin: City tours]',
      '[Admin: Fine dining]',
      '[Admin: Historic sites]',
      '[Admin: River cruises]'
    ],
    inclusions: []
  },
  {
    id: 'tropical-paradise',
    name: '[Admin: Tropical Paradise]',
    description: '[Admin: Island luxury]',
    price: '₹1,80,000',
    duration: '6N/7D',
    rating: 4.8,
    reviews: 267,
    destination: '[Admin: Tropical Island]',
    searchQuery: 'tropical island honeymoon',
    features: [
      '[Admin: Beach villa]',
      '[Admin: Water sports]',
      '[Admin: Island hopping]',
      '[Admin: Sunset cruises]'
    ],
    inclusions: []
  },
  {
    id: 'asian-heritage',
    name: '[Admin: Asian Heritage Tour]',
    description: '[Admin: Cultural immersion]',
    price: '₹1,20,000',
    duration: '5N/6D',
    rating: 4.7,
    reviews: 198,
    destination: '[Admin: Asian Country]',
    searchQuery: 'asian heritage honeymoon',
    features: [
      '[Admin: Temple visits]',
      '[Admin: Cultural shows]',
      '[Admin: Traditional cuisine]',
      '[Admin: Spa treatments]'
    ],
    inclusions: []
  }
];

// ============================================
// BEACH & ISLAND PARADISE
// ============================================

export const beachPackages: HoneymoonPackage[] = [
  {
    id: 'beach-luxury',
    name: '[Admin: Beach Luxury Escape]',
    description: '[Admin: Pristine beaches and luxury]',
    price: '₹45,000',
    duration: '5N/6D',
    rating: 4.9,
    reviews: 289,
    destination: '[Admin: Beach Resort]',
    searchQuery: 'luxury beach honeymoon',
    features: [
      '[Admin: Private beach access]',
      '[Admin: Beachfront villa]',
      '[Admin: Water sports]',
      '[Admin: Sunset dinners]'
    ],
    inclusions: []
  },
  {
    id: 'island-hopping',
    name: '[Admin: Island Hopping Adventure]',
    description: '[Admin: Explore multiple islands]',
    price: '₹55,000',
    duration: '6N/7D',
    rating: 4.8,
    reviews: 234,
    destination: '[Admin: Island Group]',
    searchQuery: 'island hopping honeymoon',
    features: [
      '[Admin: Island tours]',
      '[Admin: Snorkeling]',
      '[Admin: Beach activities]',
      '[Admin: Boat transfers]'
    ],
    inclusions: []
  },
  {
    id: 'coastal-romance',
    name: '[Admin: Coastal Romance]',
    description: '[Admin: Serene coastal experience]',
    price: '₹35,000',
    duration: '4N/5D',
    rating: 4.7,
    reviews: 176,
    destination: '[Admin: Coastal Town]',
    searchQuery: 'coastal honeymoon romance',
    features: [
      '[Admin: Seaside cottage]',
      '[Admin: Seafood dining]',
      '[Admin: Beach walks]',
      '[Admin: Fishing trips]'
    ],
    inclusions: []
  }
];

// ============================================
// HERITAGE PALACES
// ============================================

export const heritagePackages: HoneymoonPackage[] = [
  {
    id: 'palace-luxury',
    name: '[Admin: Palace Luxury Experience]',
    description: '[Admin: Live like royalty]',
    price: '₹65,000',
    duration: '4N/5D',
    rating: 4.9,
    reviews: 312,
    destination: '[Admin: Heritage Palace]',
    searchQuery: 'palace honeymoon luxury',
    features: [
      '[Admin: Royal suite]',
      '[Admin: Butler service]',
      '[Admin: Cultural performances]',
      '[Admin: Heritage tours]'
    ],
    inclusions: []
  },
  {
    id: 'fort-romance',
    name: '[Admin: Fort Romance]',
    description: '[Admin: Historic fort stay]',
    price: '₹48,000',
    duration: '3N/4D',
    rating: 4.8,
    reviews: 245,
    destination: '[Admin: Historic Fort]',
    searchQuery: 'fort honeymoon romance',
    features: [
      '[Admin: Fort accommodation]',
      '[Admin: Historic tours]',
      '[Admin: Traditional meals]',
      '[Admin: Cultural shows]'
    ],
    inclusions: []
  },
  {
    id: 'heritage-villa',
    name: '[Admin: Heritage Villa Retreat]',
    description: '[Admin: Colonial charm]',
    price: '₹42,000',
    duration: '4N/5D',
    rating: 4.7,
    reviews: 198,
    destination: '[Admin: Heritage Villa]',
    searchQuery: 'heritage villa honeymoon',
    features: [
      '[Admin: Colonial architecture]',
      '[Admin: Private gardens]',
      '[Admin: Heritage walks]',
      '[Admin: Vintage experiences]'
    ],
    inclusions: []
  }
];

// ============================================
// WELLNESS RETREATS
// ============================================

export const wellnessPackages: HoneymoonPackage[] = [
  {
    id: 'spa-wellness',
    name: '[Admin: Spa & Wellness Retreat]',
    description: '[Admin: Rejuvenate together]',
    price: '₹38,000',
    duration: '4N/5D',
    rating: 4.8,
    reviews: 267,
    destination: '[Admin: Wellness Resort]',
    searchQuery: 'spa wellness honeymoon',
    features: [
      '[Admin: Daily spa treatments]',
      '[Admin: Yoga sessions]',
      '[Admin: Meditation classes]',
      '[Admin: Healthy cuisine]'
    ],
    inclusions: []
  },
  {
    id: 'ayurvedic-healing',
    name: '[Admin: Ayurvedic Healing Escape]',
    description: '[Admin: Traditional wellness]',
    price: '₹42,000',
    duration: '5N/6D',
    rating: 4.7,
    reviews: 189,
    destination: '[Admin: Ayurvedic Center]',
    searchQuery: 'ayurvedic honeymoon retreat',
    features: [
      '[Admin: Ayurvedic treatments]',
      '[Admin: Herbal therapies]',
      '[Admin: Wellness consultation]',
      '[Admin: Organic meals]'
    ],
    inclusions: []
  },
  {
    id: 'holistic-retreat',
    name: '[Admin: Holistic Wellness Retreat]',
    description: '[Admin: Mind-body-soul connection]',
    price: '₹35,000',
    duration: '4N/5D',
    rating: 4.6,
    reviews: 156,
    destination: '[Admin: Holistic Center]',
    searchQuery: 'holistic honeymoon wellness',
    features: [
      '[Admin: Holistic therapies]',
      '[Admin: Nature immersion]',
      '[Admin: Mindfulness practices]',
      '[Admin: Detox programs]'
    ],
    inclusions: []
  }
];

// ============================================
// CATEGORY CONFIGURATION
// ============================================

export const honeymoonCategories: HoneymoonCategory[] = [
  {
    id: 'hill-station',
    name: '[Admin: Hill Station Retreats]',
    description: '[Admin: Cozy mountain escapes with scenic views]',
    icon: 'Mountain',
    gradient: 'from-pink-500 to-rose-600',
    packages: hillStationPackages
  },
  {
    id: 'adventure',
    name: '[Admin: Adventure & Romance]',
    description: '[Admin: Thrilling experiences for adventurous couples]',
    icon: 'Activity',
    gradient: 'from-orange-500 to-red-600',
    packages: adventurePackages
  },
  {
    id: 'international',
    name: '[Admin: International Escapes]',
    description: '[Admin: Exotic destinations worldwide]',
    icon: 'Plane',
    gradient: 'from-blue-500 to-indigo-600',
    packages: internationalPackages
  },
  {
    id: 'beach-paradise',
    name: '[Admin: Beach & Island Paradise]',
    description: '[Admin: Sun, sand & romance]',
    icon: 'Waves',
    gradient: 'from-cyan-500 to-blue-600',
    packages: beachPackages
  },
  {
    id: 'heritage-palaces',
    name: '[Admin: Heritage Palaces]',
    description: '[Admin: Royal heritage stays]',
    icon: 'Castle',
    gradient: 'from-purple-500 to-pink-600',
    packages: heritagePackages
  },
  {
    id: 'wellness-retreats',
    name: '[Admin: Wellness Retreats]',
    description: '[Admin: Spa and rejuvenation]',
    icon: 'Flower2',
    gradient: 'from-green-500 to-teal-600',
    packages: wellnessPackages
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getCategoryById(id: string): HoneymoonCategory | undefined {
  return honeymoonCategories.find(cat => cat.id === id);
}

export function getAllHoneymoonPackages(): HoneymoonPackage[] {
  return [
    ...romanticPackages,
    ...hillStationPackages,
    ...adventurePackages,
    ...internationalPackages,
    ...beachPackages,
    ...heritagePackages,
    ...wellnessPackages
  ];
}

export function searchPackages(query: string): HoneymoonPackage[] {
  const lowerQuery = query.toLowerCase();
  return getAllHoneymoonPackages().filter(pkg =>
    pkg.name.toLowerCase().includes(lowerQuery) ||
    pkg.description.toLowerCase().includes(lowerQuery) ||
    pkg.destination.toLowerCase().includes(lowerQuery)
  );
}
