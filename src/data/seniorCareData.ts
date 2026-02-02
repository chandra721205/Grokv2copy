// Senior Wellness & Care Tourism Data
// Extracted from SeniorWellnessHub and related components

export interface SeniorService {
  id: string;
  name: string;
  category: 'medical' | 'mobility' | 'social' | 'wellness' | 'accommodation';
  description: string;
  icon: string;
  includedIn: string[]; // Package IDs that include this service
}

export interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  icon: string;
  importance: 'essential' | 'recommended' | 'nice-to-have';
}

export interface SeniorPackage {
  id: string;
  name: string;
  duration: string;
  ageGroup: string;
  mobilityLevel: 'independent' | 'assisted' | 'wheelchair';
  price: string;
  included: string[];
  medicalSupport: string[];
  accessibility: string[];
  activities: string[];
}

export interface CareLevel {
  id: string;
  name: string;
  description: string;
  services: string[];
  staffRatio: string;
  medicalSupport: string;
}

export interface SeniorActivity {
  id: string;
  name: string;
  type: 'physical' | 'mental' | 'social' | 'cultural';
  intensity: 'light' | 'moderate' | 'gentle';
  duration: string;
  benefits: string[];
  suitableFor: string[];
}

// Senior Care Services
export const seniorServices: SeniorService[] = [
  {
    id: '24-7-medical',
    name: '[Admin: 24/7 Medical Support]',
    category: 'medical',
    description: 'Round-the-clock medical assistance',
    icon: '🏥',
    includedIn: ['pkg-premium', 'pkg-medical-tour', 'pkg-long-stay']
  },
  {
    id: 'wheelchair-access',
    name: '[Admin: Wheelchair Accessibility]',
    category: 'mobility',
    description: 'Complete wheelchair-friendly facilities',
    icon: '♿',
    includedIn: ['pkg-premium', 'pkg-heritage', 'pkg-medical-tour']
  },
  {
    id: 'companion-service',
    name: '[Admin: Companion Service]',
    category: 'social',
    description: 'Dedicated companion for assistance',
    icon: '🤝',
    includedIn: ['pkg-premium', 'pkg-solo-senior', 'pkg-long-stay']
  },
  {
    id: 'medication-management',
    name: '[Admin: Medication Management]',
    category: 'medical',
    description: 'Timely medication reminders and administration',
    icon: '💊',
    includedIn: ['pkg-premium', 'pkg-medical-tour', 'pkg-wellness']
  },
  {
    id: 'physiotherapy',
    name: '[Admin: Physiotherapy Sessions]',
    category: 'wellness',
    description: 'Professional physiotherapy and exercises',
    icon: '🧘',
    includedIn: ['pkg-wellness', 'pkg-medical-tour']
  },
  {
    id: 'special-meals',
    name: '[Admin: Special Dietary Meals]',
    category: 'medical',
    description: 'Customized meals for health conditions',
    icon: '🍽️',
    includedIn: ['pkg-premium', 'pkg-wellness', 'pkg-medical-tour', 'pkg-long-stay']
  },
  {
    id: 'emergency-transport',
    name: '[Admin: Emergency Transport]',
    category: 'medical',
    description: 'Quick access to medical facilities',
    icon: '🚑',
    includedIn: ['pkg-premium', 'pkg-medical-tour']
  },
  {
    id: 'social-activities',
    name: '[Admin: Social Activities]',
    category: 'social',
    description: 'Group activities and social events',
    icon: '👥',
    includedIn: ['pkg-social', 'pkg-long-stay', 'pkg-group-tour']
  }
];

// Accessibility Features
export const accessibilityFeatures: AccessibilityFeature[] = [
  {
    id: 'ramps',
    name: '[Admin: Wheelchair Ramps]',
    description: 'All entrances and pathways have ramps',
    icon: '♿',
    importance: 'essential'
  },
  {
    id: 'elevators',
    name: '[Admin: Elevators with Grab Bars]',
    description: 'Accessible elevators with support bars',
    icon: '🛗',
    importance: 'essential'
  },
  {
    id: 'accessible-rooms',
    name: '[Admin: Accessible Bathrooms]',
    description: 'Walk-in showers, grab bars, raised toilets',
    icon: '🚿',
    importance: 'essential'
  },
  {
    id: 'wider-doors',
    name: '[Admin: Wider Doorways]',
    description: 'Doorways accommodate wheelchairs and walkers',
    icon: '🚪',
    importance: 'recommended'
  },
  {
    id: 'visual-aids',
    name: '[Admin: Visual & Hearing Aids]',
    description: 'Large print signs, hearing loops available',
    icon: '👓',
    importance: 'recommended'
  },
  {
    id: 'non-slip-floors',
    name: '[Admin: Non-Slip Flooring]',
    description: 'Safe flooring throughout the facility',
    icon: '👟',
    importance: 'essential'
  },
  {
    id: 'emergency-call',
    name: '[Admin: Emergency Call Buttons]',
    description: 'Accessible emergency call systems in all rooms',
    icon: '🔔',
    importance: 'essential'
  },
  {
    id: 'adapted-transport',
    name: '[Admin: Adapted Transportation]',
    description: 'Vehicles with wheelchair lifts',
    icon: '🚐',
    importance: 'recommended'
  }
];

// Care Levels
export const careLevels: CareLevel[] = [
  {
    id: 'independent',
    name: '[Admin: Independent Care]',
    description: 'For seniors who can manage most activities independently',
    services: [
      'Daily check-ins',
      'Meal service',
      'Activity coordination',
      'Emergency support'
    ],
    staffRatio: '1:20',
    medicalSupport: 'On-call nurse'
  },
  {
    id: 'assisted',
    name: '[Admin: Assisted Care]',
    description: 'For seniors who need help with daily activities',
    services: [
      'Personal care assistance',
      'Medication management',
      'Mobility support',
      'Regular health monitoring',
      'Meal assistance'
    ],
    staffRatio: '1:10',
    medicalSupport: '24/7 nursing staff'
  },
  {
    id: 'intensive',
    name: '[Admin: Intensive Care]',
    description: 'For seniors with significant medical needs',
    services: [
      'Full personal care',
      'Medical monitoring',
      'Specialized treatments',
      'Physical therapy',
      'Dietary management',
      'Family liaison'
    ],
    staffRatio: '1:5',
    medicalSupport: '24/7 medical team with doctor on-site'
  }
];

// Senior-Friendly Activities
export const seniorActivities: SeniorActivity[] = [
  {
    id: 'gentle-yoga',
    name: '[Admin: Gentle Chair Yoga]',
    type: 'physical',
    intensity: 'gentle',
    duration: '30 minutes',
    benefits: ['Flexibility', 'Balance', 'Relaxation', 'Joint health'],
    suitableFor: ['All mobility levels', 'Arthritis', 'Limited flexibility']
  },
  {
    id: 'water-therapy',
    name: '[Admin: Aqua Therapy]',
    type: 'physical',
    intensity: 'light',
    duration: '45 minutes',
    benefits: ['Low-impact exercise', 'Pain relief', 'Mobility improvement'],
    suitableFor: ['Joint pain', 'Limited mobility', 'Post-surgery recovery']
  },
  {
    id: 'art-class',
    name: '[Admin: Art & Craft Classes]',
    type: 'mental',
    intensity: 'gentle',
    duration: '60 minutes',
    benefits: ['Creativity', 'Fine motor skills', 'Social interaction', 'Mental stimulation'],
    suitableFor: ['All seniors', 'Memory care', 'Hand dexterity']
  },
  {
    id: 'music-therapy',
    name: '[Admin: Music Therapy]',
    type: 'mental',
    intensity: 'gentle',
    duration: '45 minutes',
    benefits: ['Mood improvement', 'Memory stimulation', 'Stress reduction'],
    suitableFor: ['Dementia', 'Depression', 'All seniors']
  },
  {
    id: 'garden-walks',
    name: '[Admin: Garden Walks]',
    type: 'physical',
    intensity: 'light',
    duration: '30 minutes',
    benefits: ['Fresh air', 'Gentle exercise', 'Nature connection', 'Vitamin D'],
    suitableFor: ['Mobile seniors', 'Wheelchair accessible paths']
  },
  {
    id: 'memory-games',
    name: '[Admin: Memory Games & Puzzles]',
    type: 'mental',
    intensity: 'gentle',
    duration: '45 minutes',
    benefits: ['Cognitive stimulation', 'Memory enhancement', 'Problem-solving'],
    suitableFor: ['All seniors', 'Early dementia', 'Cognitive maintenance']
  },
  {
    id: 'social-hour',
    name: '[Admin: Social Hour & Tea]',
    type: 'social',
    intensity: 'gentle',
    duration: '90 minutes',
    benefits: ['Social connection', 'Reduced isolation', 'Community building'],
    suitableFor: ['All seniors', 'Living alone', 'New to community']
  },
  {
    id: 'cultural-programs',
    name: '[Admin: Cultural Performances]',
    type: 'cultural',
    intensity: 'gentle',
    duration: '60 minutes',
    benefits: ['Entertainment', 'Cultural enrichment', 'Social gathering'],
    suitableFor: ['All seniors', 'Limited mobility']
  }
];

// Senior Tourism Packages
export const seniorPackages: SeniorPackage[] = [
  {
    id: 'pkg-premium',
    name: '[Admin: Premium Senior Care Tour]',
    duration: '7 days / 6 nights',
    ageGroup: '60+ years',
    mobilityLevel: 'assisted',
    price: 'Rs.45,000 per person',
    included: [
      'Luxury accessible accommodation',
      'Personal care attendant',
      'All meals (special dietary options)',
      'Daily health checks',
      'Gentle exercise sessions',
      'Cultural activities',
      'Transport with wheelchair lift'
    ],
    medicalSupport: [
      '24/7 nursing staff',
      'On-call doctor',
      'Medication management',
      'Emergency transport'
    ],
    accessibility: [
      'Wheelchair ramps',
      'Accessible bathrooms',
      'Elevators',
      'Emergency call buttons'
    ],
    activities: ['Gentle yoga', 'Garden walks', 'Cultural programs', 'Art classes']
  },
  {
    id: 'pkg-medical-tour',
    name: '[Admin: Medical Tourism Package]',
    duration: '14 days / 13 nights',
    ageGroup: '55+ years',
    mobilityLevel: 'assisted',
    price: 'Rs.80,000 per person',
    included: [
      'Hospital-adjacent accommodation',
      'Pre & post-operative care',
      'Specialized meals',
      'Physiotherapy sessions',
      'Medical consultations',
      'Family accommodation',
      'Airport transfers'
    ],
    medicalSupport: [
      '24/7 medical team',
      'Specialist doctors',
      'Post-op monitoring',
      'Rehabilitation support'
    ],
    accessibility: [
      'Full wheelchair access',
      'Medical-grade facilities',
      'Emergency response system'
    ],
    activities: ['Gentle physiotherapy', 'Light walks', 'Relaxation sessions']
  },
  {
    id: 'pkg-wellness',
    name: '[Admin: Senior Wellness Retreat]',
    duration: '10 days / 9 nights',
    ageGroup: '60+ years',
    mobilityLevel: 'independent',
    price: 'Rs.35,000 per person',
    included: [
      'Wellness resort stay',
      'Ayurveda consultations',
      'Therapeutic massages',
      'Yoga & meditation',
      'Healthy meals',
      'Wellness workshops',
      'Health assessment'
    ],
    medicalSupport: [
      'Ayurveda doctor',
      'Therapists',
      'Nutritionist',
      'Emergency medical access'
    ],
    accessibility: [
      'Senior-friendly facilities',
      'Non-slip flooring',
      'Grab bars'
    ],
    activities: ['Gentle yoga', 'Meditation', 'Aqua therapy', 'Nature walks']
  },
  {
    id: 'pkg-heritage',
    name: '[Admin: Accessible Heritage Tour]',
    duration: '5 days / 4 nights',
    ageGroup: '65+ years',
    mobilityLevel: 'wheelchair',
    price: 'Rs.25,000 per person',
    included: [
      'Accessible hotel',
      'Wheelchair-friendly transport',
      'Skip-the-line entries',
      'Personal guide',
      'All meals',
      'Rest breaks at each site'
    ],
    medicalSupport: [
      'Travel nurse',
      'First aid kit',
      'Medical emergency plan'
    ],
    accessibility: [
      'Complete wheelchair access',
      'Adapted transportation',
      'Accessible monuments'
    ],
    activities: ['Heritage site visits', 'Museum tours', 'Cultural shows']
  },
  {
    id: 'pkg-social',
    name: '[Admin: Social Senior Group Tour]',
    duration: '6 days / 5 nights',
    ageGroup: '60+ years',
    mobilityLevel: 'independent',
    price: 'Rs.20,000 per person',
    included: [
      'Group accommodation',
      'All meals',
      'Group activities',
      'Social events',
      'Entertainment programs',
      'Sightseeing',
      'Group transport'
    ],
    medicalSupport: [
      'Group travel nurse',
      'Basic medical kit'
    ],
    accessibility: [
      'Senior-friendly facilities',
      'Comfortable seating',
      'Adequate rest stops'
    ],
    activities: ['Social hours', 'Group games', 'Cultural visits', 'Entertainment evenings']
  },
  {
    id: 'pkg-long-stay',
    name: '[Admin: Extended Senior Stay]',
    duration: '30 days / 29 nights',
    ageGroup: '65+ years',
    mobilityLevel: 'assisted',
    price: 'Rs.1,20,000 per person',
    included: [
      'Apartment-style accommodation',
      'Daily care services',
      'All meals',
      'Weekly health checks',
      'Activity programs',
      'Social events',
      'Laundry service',
      'Housekeeping'
    ],
    medicalSupport: [
      'Weekly doctor visits',
      'Nursing staff',
      'Medication management',
      'Emergency care'
    ],
    accessibility: [
      'Fully accessible apartments',
      'Emergency response',
      'Community facilities'
    ],
    activities: ['All senior activities', 'Varied weekly schedule', 'Community events']
  }
];

// Health Conditions Common in Seniors
export const commonSeniorConditions = {
  arthritis: {
    suitableActivities: ['Aqua therapy', 'Gentle yoga', 'Chair exercises'],
    accommodations: ['Easy-to-grip handles', 'Comfortable seating', 'Anti-inflammatory meals']
  },
  dementia: {
    suitableActivities: ['Music therapy', 'Memory games', 'Art classes'],
    accommodations: ['Structured routine', 'Clear signage', 'Companion service']
  },
  heartDisease: {
    suitableActivities: ['Gentle walks', 'Relaxation exercises', 'Seated activities'],
    accommodations: ['Medical monitoring', 'Low-sodium diet', 'Stress management']
  },
  diabetes: {
    suitableActivities: ['Moderate walks', 'Yoga', 'Swimming'],
    accommodations: ['Diabetic meals', 'Regular meal times', 'Glucose monitoring']
  },
  mobilityIssues: {
    suitableActivities: ['Chair yoga', 'Aqua therapy', 'Hand crafts'],
    accommodations: ['Wheelchair access', 'Grab bars', 'Personal assistance']
  }
};

// Helper Functions
export const getPackagesByMobility = (mobilityLevel: string): SeniorPackage[] => {
  return seniorPackages.filter(pkg => pkg.mobilityLevel === mobilityLevel);
};

export const getActivitiesByIntensity = (intensity: string): SeniorActivity[] => {
  return seniorActivities.filter(act => act.intensity === intensity);
};

export const getServicesByCategory = (category: string): SeniorService[] => {
  return seniorServices.filter(svc => svc.category === category);
};

export const getEssentialAccessibility = (): AccessibilityFeature[] => {
  return accessibilityFeatures.filter(feat => feat.importance === 'essential');
};
