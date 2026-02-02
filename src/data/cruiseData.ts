// ========================================
// CRUISE & FAMILY FUN TOURISM DATA
// ========================================

export const ageFilters = [
  { id: 'infants', label: 'Infants (0-3)', color: 'bg-pink-100 text-pink-700' },
  { id: 'kids', label: 'Kids (4-12)', color: 'bg-blue-100 text-blue-700' },
  { id: 'teens', label: 'Teens (13-17)', color: 'bg-purple-100 text-purple-700' },
  { id: 'all', label: 'All Ages', color: 'bg-green-100 text-green-700' },
];

export interface CruiseSubCategory {
  id: number;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  ageRange: string;
  startingPrice: number;
  familyScore: number;
  ageGroups: string[];
  gradient: string;
  routes: string;
  bestFor: string;
  safety: {
    onboardSafety: string[];
    childSafety: string[];
    waterSafety: string[];
    medicalSupport: string[];
  };
  included: {
    activities: string[];
  };
  grokTips: string[];
  packagePrice: number;
  hasBeachAmenities?: boolean;
  hasTideChart?: boolean;
}

export const cruiseSubCategories: CruiseSubCategory[] = [
  {
    id: 1,
    emoji: '🚢',
    title: 'Ocean Cruises',
    tagline: 'The Floating Resort – Hotel + Shows + Travel',
    description: 'Multi-day luxury with entertainment',
    duration: '3-7 days',
    ageRange: 'All ages',
    startingPrice: 25000,
    familyScore: 4.8,
    ageGroups: ['kids', 'teens', 'all'],
    gradient: 'from-blue-500 to-cyan-600',
    routes: 'Mumbai-Goa, Chennai-Andaman, {Popular Routes}',
    bestFor: 'Families wanting everything in one place',
    safety: {
      onboardSafety: [
        'Life jackets for all passengers',
        'Mandatory safety drills',
        '24/7 security personnel',
        'Emergency response team',
      ],
      childSafety: [
        'Childproofed cabins available',
        'Supervised kids clubs (3-12 years)',
        'Lost child protocol with wristbands',
        'Dedicated family zones',
      ],
      waterSafety: [
        'Certified lifeguards on all decks',
        'Pool supervision with trained staff',
        'Life vests in every cabin',
        'Water depth markers visible',
      ],
      medicalSupport: [
        'Onboard doctor 24/7',
        'Pharmacy with pediatric meds',
        'Ambulance contact for ports',
        'Parent notification system',
      ],
    },
    included: {
      activities: [
        '🎭 Live Shows & Entertainment',
        '🍽️ Multi-Cuisine Dining',
        '🏊 Swimming Pools & Waterslides',
        '🎮 Kids Club & Teen Zone',
        '🎬 Movie Theaters',
        '🛍️ Onboard Shopping',
      ],
    },
    grokTips: [
      '🧳 Book inner cabins for budget, balcony for views',
      '👶 Babysitting available – book early',
      '🍽️ Dining times: Early (6pm) or Late (8pm)',
      '🎟️ Shore excursions book fast – pre-book online',
    ],
    packagePrice: 35000,
  },
  // Additional subcategories would follow same pattern...
  // For brevity, including just a couple more
  {
    id: 2,
    emoji: '🎪',
    title: 'Amusement Parks',
    tagline: 'Thrill Rides + Shows + Character Meets',
    description: 'Day-long fun for all ages',
    duration: '6-10 hours',
    ageRange: 'All ages',
    startingPrice: 1500,
    familyScore: 4.9,
    ageGroups: ['kids', 'teens', 'all'],
    gradient: 'from-purple-500 to-pink-600',
    routes: 'Major cities: Delhi, Mumbai, Bangalore, {Locations}',
    bestFor: 'Active families with kids 4+',
    safety: {
      onboardSafety: [
        'Ride height restrictions enforced',
        'Safety harnesses on all rides',
        'Regular equipment checks',
        'Trained ride operators',
      ],
      childSafety: [
        'Lost child booths in every zone',
        'Parent contact wristbands',
        'Designated family meetup points',
        'Child-friendly zones marked',
      ],
      waterSafety: [
        'Lifeguards at water attractions',
        'Non-slip flooring',
        'Shallow pools for kids',
        'Swim vest rentals available',
      ],
      medicalSupport: [
        'First-aid stations in each zone',
        'Trained medical staff',
        'Ambulance on standby',
        'Parent notification for injuries',
      ],
    },
    included: {
      activities: [
        '🎢 Unlimited Ride Access',
        '🎭 Parade & Character Shows',
        '🎨 Face Painting & Workshops',
        '🍔 Food Court Access',
        '📸 Photo Opportunities',
        '🎁 Souvenir Shops',
      ],
    },
    grokTips: [
      '🌤️ Weekdays less crowded than weekends',
      '⏰ Arrive early – first hour has shortest lines',
      '🍕 Outside food often not allowed – check policy',
      '👟 Wear comfortable shoes – lots of walking',
    ],
    packagePrice: 2500,
  },
  {
    id: 3,
    emoji: '🏖️',
    title: 'Beach Family Fun',
    tagline: 'Sun + Sand + Dolphins + Safety',
    description: 'Calm beaches with activities',
    duration: '4-6 hours',
    ageRange: 'All ages',
    startingPrice: 2000,
    familyScore: 4.7,
    ageGroups: ['infants', 'kids', 'all'],
    gradient: 'from-yellow-400 to-orange-500',
    routes: 'Goa, Kerala, Gokarna, {Beach Destinations}',
    bestFor: 'Families with young kids & infants',
    safety: {
      onboardSafety: [
        'Lifeguard towers every 200m',
        'Safety flags (red/yellow/green)',
        'No-swim zones clearly marked',
        'Beach patrol teams',
      ],
      childSafety: [
        'Shallow water play zones',
        'Childproof beach tents',
        'Lost child announcement system',
        'Parent contact wristbands',
      ],
      waterSafety: [
        'Boats stay in calm areas',
        'Dolphin watching from boat',
        'Beach amenities: lifeguards',
        'Life vests for water activities',
      ],
      medicalSupport: [
        'Motion sickness bags',
        'First-aid on boat',
        'Nearest hospital info',
        'Sunburn treatment',
      ],
    },
    included: {
      activities: [
        '🚤 Glass-Bottom Boat Rides',
        '🐬 Dolphin Watching',
        '🏖️ Beach Club Access',
        '🏰 Sandcastle Building',
        '🐠 Aquarium Visits',
        '📸 Marine Photography',
      ],
    },
    grokTips: [
      '🐬 Dolphin sightings: 7-9am best',
      '🌊 Check tide charts online',
      '☂️ Beach umbrellas, changing rooms available',
      '👶 Infant-safe life vests provided',
    ],
    packagePrice: 4000,
    hasBeachAmenities: true,
    hasTideChart: true,
  },
];
