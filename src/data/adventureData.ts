// Adventure Tourism Data - Extracted from AdventureTourismHub.tsx
// This file contains all data structures for Adventure Tourism category

export interface AdventureActivity {
  id: string;
  name: string;
  icon: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'expert';
  seasons: string[];
  duration: string;
  minAge: number;
  maxGroupSize: number;
  certification?: string;
  description: string;
}

export interface SafetyGuideline {
  category: string;
  equipment: string[];
  certifications: string[];
  riskLevel: 'low' | 'medium' | 'high' | 'extreme';
  medicalRequirements: string[];
  insurance: 'recommended' | 'mandatory';
}

export interface AdventurePackage {
  id: string;
  name: string;
  activities: string[];
  duration: string;
  difficulty: string;
  price: string;
  included: string[];
  location: string;
  bestSeason: string;
}

// Main activity categories
export const adventureCategories: AdventureActivity[] = [
  {
    id: 'trekking',
    name: '[Admin: Update Activity - Trekking]',
    icon: 'mountain',
    difficulty: 'moderate',
    seasons: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    duration: '3-7 days',
    minAge: 12,
    maxGroupSize: 15,
    certification: 'Basic Trekking Certificate',
    description: 'Explore scenic mountain trails with experienced guides'
  },
  {
    id: 'rafting',
    name: '[Admin: Update Activity - River Rafting]',
    icon: 'waves',
    difficulty: 'moderate',
    seasons: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    duration: '1-2 days',
    minAge: 14,
    maxGroupSize: 12,
    certification: 'Water Safety Certificate',
    description: 'Navigate thrilling river rapids with safety equipment'
  },
  {
    id: 'paragliding',
    name: '[Admin: Update Activity - Paragliding]',
    icon: 'wind',
    difficulty: 'hard',
    seasons: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    duration: '1 day',
    minAge: 16,
    maxGroupSize: 8,
    certification: 'Paragliding License',
    description: 'Soar through the skies with certified tandem pilots'
  },
  {
    id: 'scuba',
    name: '[Admin: Update Activity - Scuba Diving]',
    icon: 'fish',
    difficulty: 'moderate',
    seasons: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    duration: '2-4 days',
    minAge: 12,
    maxGroupSize: 10,
    certification: 'PADI Open Water',
    description: 'Discover underwater marine life with certified instructors'
  },
  {
    id: 'mountain-biking',
    name: '[Admin: Update Activity - Mountain Biking]',
    icon: 'bike',
    difficulty: 'moderate',
    seasons: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    duration: '1-3 days',
    minAge: 14,
    maxGroupSize: 12,
    description: 'Ride challenging terrain on quality mountain bikes'
  },
  {
    id: 'rock-climbing',
    name: '[Admin: Update Activity - Rock Climbing]',
    icon: 'mountain',
    difficulty: 'hard',
    seasons: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    duration: '1-2 days',
    minAge: 16,
    maxGroupSize: 8,
    certification: 'Basic Climbing Course',
    description: 'Scale natural rock formations with professional belaying'
  },
  {
    id: 'camping',
    name: '[Admin: Update Activity - Wilderness Camping]',
    icon: 'tent',
    difficulty: 'easy',
    seasons: ['All Year'],
    duration: '2-5 days',
    minAge: 8,
    maxGroupSize: 20,
    description: 'Experience nature with organized camping expeditions'
  },
  {
    id: 'skiing',
    name: '[Admin: Update Activity - Skiing]',
    icon: 'mountain',
    difficulty: 'moderate',
    seasons: ['Dec', 'Jan', 'Feb', 'Mar'],
    duration: '3-7 days',
    minAge: 10,
    maxGroupSize: 15,
    description: 'Ski on pristine slopes with equipment rental included'
  },
  {
    id: 'bungee',
    name: '[Admin: Update Activity - Bungee Jumping]',
    icon: 'zap',
    difficulty: 'expert',
    seasons: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    duration: '1 day',
    minAge: 18,
    maxGroupSize: 5,
    certification: 'Medical Clearance Required',
    description: 'Take the ultimate leap with international safety standards'
  },
  {
    id: 'kayaking',
    name: '[Admin: Update Activity - Kayaking]',
    icon: 'waves',
    difficulty: 'easy',
    seasons: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    duration: '1-2 days',
    minAge: 12,
    maxGroupSize: 10,
    description: 'Paddle through calm waters and explore coastal areas'
  }
];

// Safety guidelines for each activity
export const safetyGuidelines: SafetyGuideline[] = [
  {
    category: 'trekking',
    equipment: ['Trekking boots', 'Backpack', 'First aid kit', 'Rain gear', 'Headlamp', 'Water bottles'],
    certifications: ['Basic first aid', 'High altitude training (for >3000m)'],
    riskLevel: 'medium',
    medicalRequirements: ['Medical fitness certificate', 'No cardiac issues', 'Good physical condition'],
    insurance: 'recommended'
  },
  {
    category: 'rafting',
    equipment: ['Life jacket', 'Helmet', 'Wetsuit', 'Water shoes', 'Dry bag'],
    certifications: ['Swimming proficiency', 'Water safety training'],
    riskLevel: 'medium',
    medicalRequirements: ['Swimming ability', 'No ear infections', 'No recent injuries'],
    insurance: 'mandatory'
  },
  {
    category: 'paragliding',
    equipment: ['Helmet', 'Harness', 'Reserve parachute', 'Radio', 'GPS device'],
    certifications: ['Tandem pilot license', 'P2/P3 certification for solo'],
    riskLevel: 'high',
    medicalRequirements: ['Medical clearance', 'No heart conditions', 'No epilepsy', 'No fear of heights'],
    insurance: 'mandatory'
  },
  {
    category: 'scuba',
    equipment: ['BCD', 'Regulator', 'Wetsuit', 'Fins', 'Mask', 'Dive computer', 'Tank'],
    certifications: ['PADI Open Water or equivalent', 'Advanced for deep dives', 'Nitrox for extended dives'],
    riskLevel: 'medium',
    medicalRequirements: ['Dive medical', 'No respiratory issues', 'No heart conditions', 'No ear problems'],
    insurance: 'mandatory'
  },
  {
    category: 'mountain-biking',
    equipment: ['Mountain bike', 'Helmet', 'Knee/elbow pads', 'Gloves', 'Water pack', 'Repair kit'],
    certifications: ['Basic cycling proficiency'],
    riskLevel: 'medium',
    medicalRequirements: ['Good physical fitness', 'No recent bone injuries'],
    insurance: 'recommended'
  },
  {
    category: 'rock-climbing',
    equipment: ['Climbing shoes', 'Harness', 'Helmet', 'Chalk bag', 'Belay device', 'Ropes'],
    certifications: ['Basic climbing course', 'Belaying certification'],
    riskLevel: 'high',
    medicalRequirements: ['Good upper body strength', 'No fear of heights', 'No recent injuries'],
    insurance: 'mandatory'
  },
  {
    category: 'camping',
    equipment: ['Tent', 'Sleeping bag', 'Camping stove', 'Torch', 'First aid kit', 'Insect repellent'],
    certifications: ['Basic outdoor survival skills (recommended)'],
    riskLevel: 'low',
    medicalRequirements: ['Basic physical fitness'],
    insurance: 'recommended'
  },
  {
    category: 'skiing',
    equipment: ['Skis', 'Poles', 'Boots', 'Helmet', 'Goggles', 'Warm clothing', 'Gloves'],
    certifications: ['Basic skiing lesson for beginners'],
    riskLevel: 'medium',
    medicalRequirements: ['Good leg strength', 'No knee problems', 'Good balance'],
    insurance: 'mandatory'
  },
  {
    category: 'bungee',
    equipment: ['Harness', 'Ankle straps', 'Safety backup cord', 'Helmet'],
    certifications: ['Professional jump master required'],
    riskLevel: 'extreme',
    medicalRequirements: ['Comprehensive medical checkup', 'No heart conditions', 'No back problems', 'No pregnancy', 'Weight limits apply'],
    insurance: 'mandatory'
  },
  {
    category: 'kayaking',
    equipment: ['Kayak', 'Paddle', 'Life jacket', 'Waterproof bag', 'Spray skirt'],
    certifications: ['Basic swimming', 'Kayaking orientation'],
    riskLevel: 'low',
    medicalRequirements: ['Swimming ability', 'Basic fitness'],
    insurance: 'recommended'
  }
];

// Pre-packaged adventure tours
export const adventurePackages: AdventurePackage[] = [
  {
    id: 'pkg-mountain-escape',
    name: '[Admin: Mountain Escape Package]',
    activities: ['trekking', 'camping', 'rock-climbing'],
    duration: '5 days / 4 nights',
    difficulty: 'Moderate',
    price: 'Rs.15,000 per person',
    included: ['Accommodation', 'All meals', 'Equipment rental', 'Professional guide', 'Permits & fees', 'Transport from base'],
    location: '[Admin: Location X]',
    bestSeason: 'Oct–May'
  },
  {
    id: 'pkg-water-adventure',
    name: '[Admin: Water Adventure Package]',
    activities: ['rafting', 'kayaking', 'camping'],
    duration: '3 days / 2 nights',
    difficulty: 'Easy to Moderate',
    price: 'Rs.9,000 per person',
    included: ['Riverside camping', 'All meals', 'Water sports equipment', 'Safety gear', 'Certified instructor', 'Video coverage'],
    location: '[Admin: Location Y]',
    bestSeason: 'Oct–Apr'
  },
  {
    id: 'pkg-aerial-thrill',
    name: '[Admin: Aerial Thrill Package]',
    activities: ['paragliding', 'mountain-biking'],
    duration: '2 days / 1 night',
    difficulty: 'Moderate to Hard',
    price: 'Rs.12,000 per person',
    included: ['Equipment rental', 'Tandem instructor', 'Accommodation', 'Meals', 'Video & photos', 'Insurance'],
    location: '[Admin: Location Z]',
    bestSeason: 'Sep–May'
  },
  {
    id: 'pkg-winter-sports',
    name: '[Admin: Winter Sports Package]',
    activities: ['skiing', 'camping'],
    duration: '4 days / 3 nights',
    difficulty: 'Moderate',
    price: 'Rs.18,000 per person',
    included: ['Ski resort stay', 'Ski equipment', 'Lessons for beginners', 'Lift passes', 'All meals', 'Warm clothing rental'],
    location: '[Admin: Snow Resort]',
    bestSeason: 'Dec–Feb'
  },
  {
    id: 'pkg-underwater-world',
    name: '[Admin: Underwater World Package]',
    activities: ['scuba'],
    duration: '3 days / 2 nights',
    difficulty: 'Moderate',
    price: 'Rs.16,000 per person',
    included: ['Beach resort stay', 'Diving equipment', '3 guided dives', 'PADI certification course', 'Underwater photography', 'Marine biology guide'],
    location: '[Admin: Coastal Location]',
    bestSeason: 'Oct–Apr'
  },
  {
    id: 'pkg-ultimate-adrenaline',
    name: '[Admin: Ultimate Adrenaline Package]',
    activities: ['bungee', 'paragliding', 'rafting'],
    duration: '2 days / 1 night',
    difficulty: 'Hard to Expert',
    price: 'Rs.14,000 per person',
    included: ['Hotel accommodation', 'All activity fees', 'Professional supervision', 'Medical support on-site', 'Insurance', 'Certificate of completion'],
    location: '[Admin: Adventure Hub]',
    bestSeason: 'Oct–May'
  }
];

// Seasonal recommendations
export const seasonalRecommendations = {
  winter: {
    season: 'Winter (Dec–Feb)',
    activities: ['skiing', 'trekking', 'camping'],
    description: 'Perfect for snow sports and cold-weather adventures'
  },
  summer: {
    season: 'Summer (Mar–May)',
    activities: ['rafting', 'kayaking', 'scuba', 'paragliding'],
    description: 'Ideal for water sports and aerial activities'
  },
  monsoon: {
    season: 'Monsoon (Jun–Aug)',
    activities: ['indoor-climbing', 'caving'],
    description: 'Limited outdoor activities due to rain'
  },
  postMonsoon: {
    season: 'Post-Monsoon (Sep–Nov)',
    activities: ['paragliding', 'trekking', 'mountain-biking', 'all activities'],
    description: 'Best season for most adventure activities'
  }
};

// Difficulty level definitions
export const difficultyLevels = {
  easy: {
    label: 'Easy',
    description: 'Suitable for beginners, minimal physical fitness required',
    color: 'green',
    requirements: 'Basic fitness, no prior experience needed'
  },
  moderate: {
    label: 'Moderate',
    description: 'Requires moderate fitness, some prior experience helpful',
    color: 'yellow',
    requirements: 'Good fitness level, basic skills recommended'
  },
  hard: {
    label: 'Hard',
    description: 'Requires good fitness, prior experience recommended',
    color: 'orange',
    requirements: 'High fitness level, prior experience required'
  },
  expert: {
    label: 'Expert',
    description: 'For experienced adventurers only, high fitness required',
    color: 'red',
    requirements: 'Excellent fitness, advanced skills, medical clearance'
  }
};

// Age-based activity recommendations
export const ageRecommendations = {
  kids: {
    ageRange: '8-12 years',
    activities: ['camping', 'kayaking'],
    note: 'Parental supervision required'
  },
  teens: {
    ageRange: '13-17 years',
    activities: ['trekking', 'rafting', 'mountain-biking', 'camping', 'kayaking'],
    note: 'Parental consent required'
  },
  adults: {
    ageRange: '18+ years',
    activities: ['all activities'],
    note: 'Medical clearance for high-risk activities'
  }
};

// Equipment rental prices (per day)
export const equipmentRental = {
  trekking: { boots: 200, backpack: 150, sleepingBag: 300, tent: 500 },
  rafting: { lifejacket: 100, wetsuit: 300, helmet: 100 },
  paragliding: { fullSet: 2000 },
  scuba: { fullSet: 1500, dryBag: 100 },
  mountainBiking: { bike: 800, helmet: 100, pads: 150 },
  skiing: { skis: 1000, boots: 400, poles: 200, helmet: 150 }
};
