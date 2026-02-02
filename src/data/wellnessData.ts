// Health & Wellness Tourism Data
// Consolidates data from wellness-related components

export interface WellnessTreatment {
  id: string;
  name: string;
  category: 'ayurveda' | 'yoga' | 'spa' | 'meditation' | 'naturopathy';
  description: string;
  duration: string;
  benefits: string[];
  price: string;
  suitableFor: string[];
}

export interface WellnessCenter {
  id: string;
  name: string;
  type: string;
  specializations: string[];
  location: string;
  rating: number;
  treatments: string[];
  facilities: string[];
}

export interface WellnessPackage {
  id: string;
  name: string;
  duration: string;
  treatments: string[];
  price: string;
  included: string[];
  targetConditions: string[];
  minimumAge?: number;
}

export interface YogaProgram {
  id: string;
  name: string;
  style: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  schedule: string;
  benefits: string[];
}

// Treatment Categories
export const treatmentCategories = [
  {
    id: 'ayurveda',
    name: '[Admin: Ayurveda Treatments]',
    icon: '🌿',
    gradient: 'from-green-500 to-emerald-600',
    description: 'Traditional Indian medicine system'
  },
  {
    id: 'yoga',
    name: '[Admin: Yoga & Meditation]',
    icon: '🧘',
    gradient: 'from-purple-500 to-indigo-600',
    description: 'Mind-body wellness practices'
  },
  {
    id: 'spa',
    name: '[Admin: Spa & Wellness]',
    icon: '💆',
    gradient: 'from-pink-500 to-rose-600',
    description: 'Relaxation and rejuvenation therapies'
  },
  {
    id: 'meditation',
    name: '[Admin: Meditation Retreats]',
    icon: '🕉️',
    gradient: 'from-blue-500 to-cyan-600',
    description: 'Inner peace and mindfulness'
  },
  {
    id: 'naturopathy',
    name: '[Admin: Naturopathy]',
    icon: '🍃',
    gradient: 'from-teal-500 to-green-600',
    description: 'Natural healing methods'
  }
];

// Wellness Treatments
export const wellnessTreatments: WellnessTreatment[] = [
  {
    id: 'panchakarma',
    name: '[Admin: Panchakarma Therapy]',
    category: 'ayurveda',
    description: 'Complete detoxification and rejuvenation',
    duration: '14-21 days',
    benefits: [
      'Removes toxins',
      'Balances doshas',
      'Improves immunity',
      'Reduces stress',
      'Increases energy'
    ],
    price: 'Rs.50,000-80,000',
    suitableFor: ['Chronic diseases', 'Stress', 'Fatigue', 'Digestive issues']
  },
  {
    id: 'abhyanga',
    name: '[Admin: Abhyanga Massage]',
    category: 'ayurveda',
    description: 'Full body oil massage with herbal oils',
    duration: '60-90 minutes',
    benefits: [
      'Improves circulation',
      'Nourishes skin',
      'Reduces muscle tension',
      'Calms nervous system'
    ],
    price: 'Rs.2,000-3,500 per session',
    suitableFor: ['Stress', 'Muscle pain', 'Insomnia', 'Dry skin']
  },
  {
    id: 'shirodhara',
    name: '[Admin: Shirodhara]',
    category: 'ayurveda',
    description: 'Warm oil poured on forehead',
    duration: '45-60 minutes',
    benefits: [
      'Calms mind',
      'Reduces anxiety',
      'Improves sleep',
      'Balances emotions'
    ],
    price: 'Rs.2,500-4,000 per session',
    suitableFor: ['Anxiety', 'Insomnia', 'Headaches', 'Stress']
  },
  {
    id: 'hatha-yoga',
    name: '[Admin: Hatha Yoga Program]',
    category: 'yoga',
    description: 'Traditional yoga asanas and breathing',
    duration: '7-14 days',
    benefits: [
      'Improves flexibility',
      'Builds strength',
      'Reduces stress',
      'Improves posture'
    ],
    price: 'Rs.15,000-25,000',
    suitableFor: ['Beginners', 'Back pain', 'Stress', 'General fitness']
  },
  {
    id: 'vipassana',
    name: '[Admin: Vipassana Meditation]',
    category: 'meditation',
    description: 'Silent meditation retreat',
    duration: '10 days',
    benefits: [
      'Mental clarity',
      'Emotional balance',
      'Self-awareness',
      'Stress reduction'
    ],
    price: 'Donation-based',
    suitableFor: ['Mental peace', 'Stress', 'Personal growth']
  },
  {
    id: 'hydro-therapy',
    name: '[Admin: Hydrotherapy]',
    category: 'naturopathy',
    description: 'Water-based natural healing',
    duration: '5-7 days',
    benefits: [
      'Pain relief',
      'Improves circulation',
      'Detoxification',
      'Relaxation'
    ],
    price: 'Rs.12,000-20,000',
    suitableFor: ['Arthritis', 'Muscle pain', 'Stress']
  },
  {
    id: 'thai-massage',
    name: '[Admin: Thai Massage]',
    category: 'spa',
    description: 'Stretching and pressure point massage',
    duration: '90-120 minutes',
    benefits: [
      'Improves flexibility',
      'Releases tension',
      'Boosts energy',
      'Improves posture'
    ],
    price: 'Rs.3,000-5,000 per session',
    suitableFor: ['Muscle stiffness', 'Low energy', 'Stress']
  }
];

// Wellness Packages
export const wellnessPackages: WellnessPackage[] = [
  {
    id: 'pkg-detox-retreat',
    name: '[Admin: Complete Detox Retreat]',
    duration: '7 days / 6 nights',
    treatments: ['Panchakarma', 'Yoga', 'Meditation', 'Diet therapy'],
    price: 'Rs.35,000 per person',
    included: [
      'Accommodation',
      'Organic meals',
      'All treatments',
      'Yoga classes',
      'Health consultation',
      'Follow-up plan'
    ],
    targetConditions: ['Toxin buildup', 'Obesity', 'Digestive issues', 'Fatigue']
  },
  {
    id: 'pkg-stress-relief',
    name: '[Admin: Stress Relief Package]',
    duration: '5 days / 4 nights',
    treatments: ['Shirodhara', 'Abhyanga', 'Meditation', 'Yoga'],
    price: 'Rs.25,000 per person',
    included: [
      'Resort stay',
      'Daily treatments',
      'Meditation sessions',
      'Meals',
      'Stress management workshop'
    ],
    targetConditions: ['Stress', 'Anxiety', 'Insomnia', 'Burnout']
  },
  {
    id: 'pkg-yoga-immersion',
    name: '[Admin: Yoga Immersion]',
    duration: '14 days / 13 nights',
    treatments: ['Hatha Yoga', 'Pranayama', 'Meditation', 'Philosophy classes'],
    price: 'Rs.40,000 per person',
    included: [
      'Ashram accommodation',
      'Vegetarian meals',
      'Daily yoga classes',
      'Philosophy lectures',
      'Certificate',
      'Course materials'
    ],
    targetConditions: ['Personal growth', 'Fitness', 'Spiritual development']
  },
  {
    id: 'pkg-weight-management',
    name: '[Admin: Weight Management Program]',
    duration: '21 days / 20 nights',
    treatments: ['Ayurveda diet', 'Yoga', 'Fitness training', 'Counseling'],
    price: 'Rs.60,000 per person',
    included: [
      'Accommodation',
      'Customized diet plan',
      'Daily yoga',
      'Gym access',
      'Nutritionist consultations',
      'Follow-up support'
    ],
    targetConditions: ['Obesity', 'Metabolic disorders', 'Lifestyle diseases'],
    minimumAge: 18
  },
  {
    id: 'pkg-couples-wellness',
    name: '[Admin: Couples Wellness Retreat]',
    duration: '3 days / 2 nights',
    treatments: ['Couples massage', 'Spa treatments', 'Yoga', 'Meditation'],
    price: 'Rs.30,000 per couple',
    included: [
      'Luxury resort',
      'Spa treatments',
      'Romantic dinners',
      'Yoga for two',
      'Wellness consultation'
    ],
    targetConditions: ['Relaxation', 'Bonding', 'Stress relief']
  }
];

// Yoga Programs
export const yogaPrograms: YogaProgram[] = [
  {
    id: 'beginner-yoga',
    name: '[Admin: Beginner Yoga Foundation]',
    style: 'Hatha Yoga',
    level: 'beginner',
    duration: '7 days',
    schedule: '6:00 AM & 5:00 PM (2 hours total)',
    benefits: [
      'Learn basic asanas',
      'Breathing techniques',
      'Flexibility improvement',
      'Stress reduction'
    ]
  },
  {
    id: 'advanced-ashtanga',
    name: '[Admin: Advanced Ashtanga]',
    style: 'Ashtanga Yoga',
    level: 'advanced',
    duration: '14 days',
    schedule: '5:00 AM & 4:00 PM (3 hours total)',
    benefits: [
      'Advanced sequences',
      'Strength building',
      'Mental discipline',
      'Deep practice'
    ]
  },
  {
    id: 'prenatal-yoga',
    name: '[Admin: Prenatal Yoga]',
    style: 'Gentle Yoga',
    level: 'beginner',
    duration: '4 weeks (weekly classes)',
    schedule: '9:00 AM (90 minutes)',
    benefits: [
      'Safe pregnancy exercises',
      'Labor preparation',
      'Stress relief',
      'Community support'
    ]
  }
];

// Wellness Centers
export const wellnessCenters: WellnessCenter[] = [
  {
    id: 'center-ayurveda',
    name: '[Admin: Ayurveda Wellness Center]',
    type: 'Ayurveda Resort',
    specializations: ['Panchakarma', 'Rejuvenation', 'Chronic disease management'],
    location: '[Admin: Location]',
    rating: 4.8,
    treatments: ['Panchakarma', 'Abhyanga', 'Shirodhara', 'Diet therapy'],
    facilities: [
      'Treatment rooms',
      'Yoga hall',
      'Meditation garden',
      'Organic restaurant',
      'Swimming pool'
    ]
  },
  {
    id: 'center-yoga',
    name: '[Admin: Yoga Ashram]',
    type: 'Yoga Center',
    specializations: ['Hatha Yoga', 'Meditation', 'Yoga teacher training'],
    location: '[Admin: Mountain Location]',
    rating: 4.9,
    treatments: ['Yoga classes', 'Meditation', 'Pranayama', 'Philosophy'],
    facilities: [
      'Multiple yoga halls',
      'Library',
      'Meditation caves',
      'Organic farm',
      'Accommodation'
    ]
  }
];

// Health Conditions Addressed
export const healthConditions = {
  stress: ['Shirodhara', 'Abhyanga', 'Meditation', 'Yoga'],
  insomnia: ['Shirodhara', 'Meditation', 'Relaxation massage'],
  backPain: ['Yoga therapy', 'Physiotherapy', 'Ayurveda massage'],
  digestive: ['Panchakarma', 'Diet therapy', 'Yoga'],
  weight: ['Diet therapy', 'Fitness program', 'Lifestyle counseling'],
  anxiety: ['Meditation', 'Shirodhara', 'Counseling'],
  chronic: ['Panchakarma', 'Long-term therapy', 'Diet management']
};

// Helper Functions
export const getTreatmentsByCategory = (category: string): WellnessTreatment[] => {
  return wellnessTreatments.filter(t => t.category === category);
};

export const getPackagesByDuration = (maxDays: number): WellnessPackage[] => {
  return wellnessPackages.filter(pkg => {
    const days = parseInt(pkg.duration.split(' ')[0]);
    return days <= maxDays;
  });
};

export const getTreatmentsForCondition = (condition: string): string[] => {
  return healthConditions[condition as keyof typeof healthConditions] || [];
};
