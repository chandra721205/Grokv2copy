// Sports Tourism Data - Extracted from SportsTourismHub.tsx
// This file contains all data structures for Sports Tourism category

export interface Sport {
  emoji: string;
  name: string;
  description: string;
}

export interface SportsCategory {
  id: string;
  name: string;
  icon: string;
  sports: Sport[];
  gradient?: string;
}

export interface PlayerMode {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  context: string;
  tags: string[];
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Expert';
  gradient: string;
  bgColor: string;
}

export interface SeasonalityInfo {
  sport: string;
  peak: string[];
  offPeak: string[];
  bestMonths: string;
  weather: string;
}

export interface SportsPackage {
  id: string;
  name: string;
  sports: string[];
  duration: string;
  difficulty: string;
  price: string;
  included: string[];
  location: string;
  playerMode: string[];
}

// Player Modes - Different types of sports tourists
export const playerModes: PlayerMode[] = [
  {
    id: 'fan',
    emoji: '🏟️',
    name: 'The Fan',
    subtitle: 'Watch Live',
    context: 'Watch famous matches in iconic stadiums',
    tags: ['Cricket (Eden Gardens)', 'Football (ISL)', 'Museums'],
    difficulty: 'Easy',
    gradient: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'player',
    emoji: '🚴',
    name: 'The Player',
    subtitle: 'Active Fun',
    context: 'Participate for fun',
    tags: ['Golf Resorts', 'Coastal Cycling', 'Water Sports'],
    difficulty: 'Moderate',
    gradient: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'learner',
    emoji: '⚽',
    name: 'The Learner',
    subtitle: 'Training',
    context: 'Camps & Academies',
    tags: ['Cricket Camps', 'Football Clinics', 'Tennis Academy'],
    difficulty: 'Hard',
    gradient: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'adventurer',
    emoji: '🧗',
    name: 'The Adventurer',
    subtitle: 'Thrills',
    context: 'High-energy challenges',
    tags: ['Marathons', 'Paragliding', 'Extreme Sports'],
    difficulty: 'Hard',
    gradient: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50'
  }
];

// 10 Sports Sub-Categories
export const sportsCategories: SportsCategory[] = [
  {
    id: 'team-sports',
    name: '[Admin: Team Sports]',
    icon: 'users',
    gradient: 'from-blue-500 to-indigo-600',
    sports: [
      { emoji: '🏀', name: '[Admin: Basketball]', description: 'Fast-paced court action' },
      { emoji: '⚽', name: '[Admin: Soccer/Football]', description: 'Global favorite' },
      { emoji: '🏐', name: '[Admin: Volleyball]', description: 'Indoor/Beach variants' },
      { emoji: '🏏', name: '[Admin: Cricket]', description: 'Team spirit & strategy' },
      { emoji: '🏑', name: '[Admin: Hockey]', description: 'Speed and precision' }
    ]
  },
  {
    id: 'water-sports',
    name: '[Admin: Water Sports]',
    icon: 'waves',
    gradient: 'from-cyan-500 to-blue-600',
    sports: [
      { emoji: '🏊', name: '[Admin: Swimming]', description: 'Endurance & technique' },
      { emoji: '🛶', name: '[Admin: Kayaking]', description: 'Scenic paddling' },
      { emoji: '🏄', name: '[Admin: Surfing]', description: 'Ocean thrill' },
      { emoji: '🚣', name: '[Admin: Rowing]', description: 'Team coordination' },
      { emoji: '🤿', name: '[Admin: Scuba Diving]', description: 'Underwater exploration' }
    ]
  },
  {
    id: 'adventure-sports',
    name: '[Admin: Adventure Sports]',
    icon: 'mountain',
    gradient: 'from-orange-500 to-red-600',
    sports: [
      { emoji: '🧗', name: '[Admin: Rock Climbing]', description: 'Strength & strategy' },
      { emoji: '🚵', name: '[Admin: Mountain Biking]', description: 'Challenging terrains' },
      { emoji: '🎢', name: '[Admin: Ziplining]', description: 'Aerial adventure' },
      { emoji: '🪂', name: '[Admin: Paragliding]', description: 'Sky soaring' },
      { emoji: '🏔️', name: '[Admin: Trekking]', description: 'Mountain exploration' }
    ]
  },
  {
    id: 'racquet-sports',
    name: '[Admin: Racquet Sports]',
    icon: 'zap',
    gradient: 'from-yellow-400 to-orange-500',
    sports: [
      { emoji: '🎾', name: '[Admin: Tennis]', description: 'Singles/Doubles' },
      { emoji: '🏸', name: '[Admin: Badminton]', description: 'Fast reflexes' },
      { emoji: '🏓', name: '[Admin: Table Tennis]', description: 'Quick thinking' },
      { emoji: '🎾', name: '[Admin: Squash]', description: 'Indoor intensity' }
    ]
  },
  {
    id: 'winter-sports',
    name: '[Admin: Winter Sports]',
    icon: 'snowflake',
    gradient: 'from-blue-300 to-indigo-500',
    sports: [
      { emoji: '⛷️', name: '[Admin: Skiing]', description: 'Snow slopes' },
      { emoji: '🏂', name: '[Admin: Snowboarding]', description: 'Mountain boarding' },
      { emoji: '⛸️', name: '[Admin: Ice Skating]', description: 'Graceful gliding' },
      { emoji: '🏒', name: '[Admin: Ice Hockey]', description: 'Fast-paced ice game' }
    ]
  },
  {
    id: 'combat-sports',
    name: '[Admin: Combat Sports]',
    icon: 'target',
    gradient: 'from-red-500 to-pink-600',
    sports: [
      { emoji: '🥊', name: '[Admin: Boxing]', description: 'Strategic punching' },
      { emoji: '🤼', name: '[Admin: Wrestling]', description: 'Grappling techniques' },
      { emoji: '🥋', name: '[Admin: Martial Arts]', description: 'Discipline & skill' },
      { emoji: '🤺', name: '[Admin: Fencing]', description: 'Sword sport' }
    ]
  },
  {
    id: 'precision-sports',
    name: '[Admin: Precision Sports]',
    icon: 'crosshair',
    gradient: 'from-green-500 to-teal-600',
    sports: [
      { emoji: '🏹', name: '[Admin: Archery]', description: 'Focus & accuracy' },
      { emoji: '🎯', name: '[Admin: Darts]', description: 'Precision throwing' },
      { emoji: '🏌️', name: '[Admin: Golf]', description: 'Strategic putting' },
      { emoji: '🎳', name: '[Admin: Bowling]', description: 'Strike sport' }
    ]
  },
  {
    id: 'athletics',
    name: '[Admin: Athletics]',
    icon: 'activity',
    gradient: 'from-purple-500 to-indigo-600',
    sports: [
      { emoji: '🏃', name: '[Admin: Running]', description: 'Speed & endurance' },
      { emoji: '🏃‍♂️', name: '[Admin: Marathon]', description: 'Long distance' },
      { emoji: '🤸', name: '[Admin: Gymnastics]', description: 'Flexibility & strength' },
      { emoji: '🤾', name: '[Admin: Javelin/Discus]', description: 'Throwing events' }
    ]
  },
  {
    id: 'mind-sports',
    name: '[Admin: Mind Sports]',
    icon: 'brain',
    gradient: 'from-indigo-500 to-purple-600',
    sports: [
      { emoji: '♟️', name: '[Admin: Chess]', description: 'Strategic thinking' },
      { emoji: '🎴', name: '[Admin: Card Games]', description: 'Mental skill' },
      { emoji: '🧩', name: '[Admin: Puzzle Competitions]', description: 'Problem solving' },
      { emoji: '🎲', name: '[Admin: Board Games]', description: 'Strategy & luck' }
    ]
  },
  {
    id: 'emerging-sports',
    name: '[Admin: Emerging Sports]',
    icon: 'trending-up',
    gradient: 'from-pink-500 to-rose-600',
    sports: [
      { emoji: '🛹', name: '[Admin: Skateboarding]', description: 'Urban tricks' },
      { emoji: '🎮', name: '[Admin: E-Sports]', description: 'Digital competition' },
      { emoji: '🤖', name: '[Admin: Drone Racing]', description: 'Tech sport' },
      { emoji: '🏄‍♂️', name: '[Admin: Parkour]', description: 'Urban acrobatics' }
    ]
  }
];

// Seasonality Information for Sports
export const seasonalityData: SeasonalityInfo[] = [
  {
    sport: 'Cricket',
    peak: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    offPeak: ['Jun', 'Jul', 'Aug'],
    bestMonths: 'November-March',
    weather: 'Cool, dry weather ideal for outdoor play'
  },
  {
    sport: 'Water Sports',
    peak: ['Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov'],
    offPeak: ['Jul', 'Aug', 'Dec', 'Jan'],
    bestMonths: 'April-June, September-November',
    weather: 'Calm seas, warm temperatures'
  },
  {
    sport: 'Skiing',
    peak: ['Dec', 'Jan', 'Feb'],
    offPeak: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    bestMonths: 'December-February',
    weather: 'Heavy snowfall, cold temperatures'
  },
  {
    sport: 'Trekking',
    peak: ['Mar', 'Apr', 'May', 'Sep', 'Oct', 'Nov'],
    offPeak: ['Jun', 'Jul', 'Aug', 'Dec', 'Jan', 'Feb'],
    bestMonths: 'March-May, September-November',
    weather: 'Clear skies, moderate temperatures'
  },
  {
    sport: 'Golf',
    peak: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    offPeak: ['Jun', 'Jul', 'Aug'],
    bestMonths: 'October-March',
    weather: 'Pleasant weather for outdoor play'
  },
  {
    sport: 'Football/Soccer',
    peak: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    offPeak: ['Apr', 'May', 'Jun', 'Jul'],
    bestMonths: 'August-March',
    weather: 'Cool weather ideal for running'
  },
  {
    sport: 'Marathon',
    peak: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    offPeak: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    bestMonths: 'October-March',
    weather: 'Cool mornings ideal for long runs'
  }
];

// Sports Packages
export const sportsPackages: SportsPackage[] = [
  {
    id: 'pkg-cricket-fan',
    name: '[Admin: Cricket Fan Experience]',
    sports: ['Cricket'],
    duration: '3 days / 2 nights',
    difficulty: 'Easy',
    price: 'Rs.8,000 per person',
    included: ['Stadium tickets', 'Accommodation', 'Meals', 'Cricket museum tour', 'Meet & greet with players'],
    location: '[Admin: Cricket Stadium City]',
    playerMode: ['fan']
  },
  {
    id: 'pkg-water-sports-adventure',
    name: '[Admin: Water Sports Adventure]',
    sports: ['Swimming', 'Kayaking', 'Surfing'],
    duration: '5 days / 4 nights',
    difficulty: 'Moderate',
    price: 'Rs.15,000 per person',
    included: ['Beach resort stay', 'All water sports equipment', 'Professional instructors', 'Meals', 'Insurance'],
    location: '[Admin: Coastal Destination]',
    playerMode: ['player', 'adventurer']
  },
  {
    id: 'pkg-football-training',
    name: '[Admin: Football Training Camp]',
    sports: ['Football'],
    duration: '7 days / 6 nights',
    difficulty: 'Hard',
    price: 'Rs.20,000 per person',
    included: ['Academy accommodation', 'Professional coaching', 'All meals', 'Training kit', 'Match participation', 'Certificate'],
    location: '[Admin: Football Academy]',
    playerMode: ['learner']
  },
  {
    id: 'pkg-skiing-expedition',
    name: '[Admin: Skiing Expedition]',
    sports: ['Skiing', 'Snowboarding'],
    duration: '6 days / 5 nights',
    difficulty: 'Moderate',
    price: 'Rs.25,000 per person',
    included: ['Ski resort stay', 'Equipment rental', 'Ski lessons', 'Lift passes', 'All meals', 'Warm gear'],
    location: '[Admin: Ski Resort]',
    playerMode: ['player', 'learner', 'adventurer']
  },
  {
    id: 'pkg-golf-getaway',
    name: '[Admin: Golf Weekend Getaway]',
    sports: ['Golf'],
    duration: '3 days / 2 nights',
    difficulty: 'Easy',
    price: 'Rs.12,000 per person',
    included: ['Golf resort stay', 'Course fees', 'Club rental', 'Golf cart', 'Meals', 'Pro tips session'],
    location: '[Admin: Golf Resort]',
    playerMode: ['player']
  },
  {
    id: 'pkg-adventure-multi',
    name: '[Admin: Multi-Adventure Package]',
    sports: ['Rock Climbing', 'Mountain Biking', 'Paragliding', 'Ziplining'],
    duration: '5 days / 4 nights',
    difficulty: 'Hard',
    price: 'Rs.18,000 per person',
    included: ['Adventure camp stay', 'All equipment', 'Professional guides', 'Meals', 'Insurance', 'Medical support'],
    location: '[Admin: Adventure Hub]',
    playerMode: ['adventurer']
  },
  {
    id: 'pkg-marathon-training',
    name: '[Admin: Marathon Training Program]',
    sports: ['Running', 'Marathon'],
    duration: '4 days / 3 nights',
    difficulty: 'Hard',
    price: 'Rs.10,000 per person',
    included: ['Runner accommodation', 'Training sessions', 'Nutrition plan', 'Marathon registration', 'Race kit', 'Meals'],
    location: '[Admin: Marathon City]',
    playerMode: ['learner', 'adventurer']
  }
];

// Sports Equipment Rental Prices (per day)
export const equipmentRental = {
  cricket: { bat: 150, pads: 100, helmet: 80, gloves: 60 },
  tennis: { racquet: 200, balls: 50 },
  golf: { clubs: 500, cart: 300, shoes: 150 },
  skiing: { skis: 800, boots: 400, poles: 200, helmet: 150 },
  cycling: { bike: 400, helmet: 100, gear: 150 },
  waterSports: { kayak: 300, lifejacket: 100, wetsuit: 250 },
  climbing: { rope: 200, harness: 150, shoes: 200, helmet: 100 }
};

// Helper function to get sports by category
export const getSportsByCategory = (categoryId: string): Sport[] => {
  const category = sportsCategories.find(c => c.id === categoryId);
  return category?.sports || [];
};

// Helper function to get packages by player mode
export const getPackagesByPlayerMode = (mode: string): SportsPackage[] => {
  return sportsPackages.filter(pkg => pkg.playerMode.includes(mode));
};

// Helper function to get sports by season
export const getSportsBySeason = (month: string): string[] => {
  return seasonalityData
    .filter(s => s.peak.includes(month))
    .map(s => s.sport);
};
