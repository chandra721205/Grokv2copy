// ============================================
// TRAVEL ESSENTIALS DATA
// ============================================
// Centralized data for all travel essentials components
// Admin-editable placeholders throughout

export interface EssentialService {
  id: number;
  name: string;
  icon: string; // Icon name as string
  description: string;
  featured?: boolean;
  isCrossReference?: boolean;
  crossRefCategory?: string;
  crossRefMessage?: string;
  price?: string;
  provider?: string;
}

export interface EssentialSubcategory {
  id: string;
  name: string;
  icon: string; // Icon name as string
  emoji: string;
  tagline: string;
  description: string;
  services: EssentialService[];
  isSpecial?: boolean;
  specialNote?: string;
}

// ============================================
// 10 SUBCATEGORIES OF TRAVEL ESSENTIALS
// ============================================

export const travelEssentialsSubcategories: EssentialSubcategory[] = [
  {
    id: 'accommodation',
    name: '[Admin: Accommodation]',
    icon: 'Bed',
    emoji: '🛏️',
    tagline: '[Admin: Places to stay]',
    description: '[Admin: Hotels, resorts, villas, and budget stays]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Hotels & Resorts]', icon: 'Building2', description: '[Admin: Comfortable stays with amenities]' },
      { id: 2, name: '[Admin: Admin-Added Villas & Homes]', icon: 'Home', description: '[Admin: Private vacation rentals]' },
      { id: 3, name: '[Admin: Admin-Added Budget Stays]', icon: 'Wallet', description: '[Admin: Affordable accommodations]' },
      { id: 4, name: '[Admin: Admin-Added Luxury Suites]', icon: 'Sparkles', description: '[Admin: Premium luxury experiences]' }
    ]
  },
  {
    id: 'transportation',
    name: '[Admin: Transportation]',
    icon: 'Car',
    emoji: '🚗',
    tagline: '[Admin: Ways to get around]',
    description: '[Admin: Airport transfers, rentals, and public transit]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Airport Transfers]', icon: 'Plane', description: '[Admin: Reliable pickup and drop-off]' },
      { id: 2, name: '[Admin: Admin-Added Car Rentals]', icon: 'Car', description: '[Admin: Self-drive and chauffeur options]' },
      { id: 3, name: '[Admin: Admin-Added Train Booking]', icon: 'Train', description: '[Admin: Railway reservations]' },
      { id: 4, name: '[Admin: Admin-Added Bus Services]', icon: 'Bus', description: '[Admin: Intercity and local buses]' },
      {
        id: 5,
        name: '[Admin: 🚗 Self-Drive Vehicles]',
        icon: 'Navigation',
        description: '[Admin: Explore at your own pace]',
        isCrossReference: true,
        crossRefCategory: 'Self-Drive Tourism',
        crossRefMessage: '[Admin: This service is fully featured in the Self-Drive Tourism category with complete vehicle options, route planning, and booking features.]'
      }
    ]
  },
  {
    id: 'hospitality-dining',
    name: '[Admin: Hospitality & Dining]',
    icon: 'UtensilsCrossed',
    emoji: '🍽️',
    tagline: '[Admin: Food and experiences]',
    description: '[Admin: Restaurants, food tours, and local cuisine]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Restaurants]', icon: 'Utensils', description: '[Admin: Curated dining experiences]' },
      { id: 2, name: '[Admin: Admin-Added Food Tours]', icon: 'Coffee', description: '[Admin: Guided culinary adventures]' },
      { id: 3, name: '[Admin: Admin-Added Catering Services]', icon: 'UtensilsCrossed', description: '[Admin: Event and group catering]' },
      { id: 4, name: '[Admin: Admin-Added Local Cuisine]', icon: 'Coffee', description: '[Admin: Authentic regional flavors]' }
    ]
  },
  {
    id: 'personal-assistance',
    name: '[Admin: Personal Assistance]',
    icon: 'UserCircle',
    emoji: '👤',
    tagline: '[Admin: Help during your trip]',
    description: '[Admin: Companions, translators, and concierge]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Travel Companion]', icon: 'Users', description: '[Admin: Professional travel buddies]' },
      { id: 2, name: '[Admin: Admin-Added Language Support]', icon: 'Languages', description: '[Admin: Translation and interpretation]' },
      { id: 3, name: '[Admin: Admin-Added Concierge Service]', icon: 'Briefcase', description: '[Admin: 24/7 assistance and planning]' },
      { id: 4, name: '[Admin: Admin-Added Shopping Assistant]', icon: 'ShoppingBag', description: '[Admin: Local market guides]' }
    ]
  },
  {
    id: 'senior-care',
    name: '[Admin: Senior & Special Care]',
    icon: 'Heart',
    emoji: '👵',
    tagline: '[Admin: Elderly support, mobility assistance, medical needs]',
    description: '[Admin: Comprehensive care for seniors and special needs travelers]',
    services: [
      { id: 1, name: '[Admin: Admin-Added 24/7 Medical Companion]', icon: 'Stethoscope', description: '[Admin: Round-the-clock medical professional accompaniment]', featured: true },
      { id: 2, name: '[Admin: Admin-Added Medication Management Service]', icon: 'Pill', description: '[Admin: Professional medication tracking and administration]' },
      { id: 3, name: '[Admin: Admin-Added Gentle Mobility Assistance]', icon: 'Accessibility', description: '[Admin: Patient support for movement and transfers]' },
      { id: 4, name: '[Admin: Admin-Added Senior-Friendly Transportation]', icon: 'Car', description: '[Admin: Comfortable, easy-access vehicles]' },
      { id: 5, name: '[Admin: Admin-Added Emergency Response Setup]', icon: 'Activity', description: '[Admin: Immediate medical response system]', featured: true },
      { id: 6, name: '[Admin: Admin-Added Special Dietary Meal Planning]', icon: 'Utensils', description: '[Admin: Custom meals for health conditions]' },
      { id: 7, name: '[Admin: Admin-Added Cognitive Support Companion]', icon: 'Heart', description: '[Admin: Memory and orientation assistance]' },
      { id: 8, name: '[Admin: Admin-Added Multi-lingual Elder Care]', icon: 'Languages', description: '[Admin: Care in preferred language]' }
    ],
    specialNote: '[Admin: ⭐ Recommended for inclusive travel. Some services may also be available in the Senior Wellness Hub category.]'
  },
  {
    id: 'accessibility-services',
    name: '[Admin: Accessibility Services]',
    icon: 'Accessibility',
    emoji: '♿',
    tagline: '[Admin: Wheelchair access, sensory-friendly, special assistance]',
    description: '[Admin: Complete accessibility solutions for all needs]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Wheelchair-Accessible Vehicles]', icon: 'Car', description: '[Admin: Fully adapted transport with ramps/lifts]' },
      { id: 2, name: '[Admin: Admin-Added Sign Language Interpreters]', icon: 'MessageSquare', description: '[Admin: Professional ASL/ISL interpreters]' },
      { id: 3, name: '[Admin: Admin-Added Sensory-Friendly Itinerary Planning]', icon: 'UserCircle', description: '[Admin: Adapted for neurodiversity needs]' },
      { id: 4, name: '[Admin: Admin-Added Mobility Equipment Rental]', icon: 'Wrench', description: '[Admin: Wheelchairs, walkers, and aids]' },
      { id: 5, name: '[Admin: Admin-Added Visual Impairment Support]', icon: 'Activity', description: '[Admin: Audio guides and tactile assistance]' },
      { id: 6, name: '[Admin: Admin-Added Cognitive Accessibility Guides]', icon: 'Heart', description: '[Admin: Simplified communication and navigation]' }
    ],
    specialNote: '[Admin: ⭐ Recommended for inclusive travel]'
  },
  {
    id: 'family-services',
    name: '[Admin: Family Services]',
    icon: 'Baby',
    emoji: '👨‍👩‍👧‍👦',
    tagline: '[Admin: Help for traveling with kids]',
    description: '[Admin: Child care, activities, meals, and play areas]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Child Care]', icon: 'Baby', description: '[Admin: Professional babysitting services]' },
      { id: 2, name: '[Admin: Admin-Added Family Activities]', icon: 'Users', description: '[Admin: Kid-friendly experiences]' },
      { id: 3, name: '[Admin: Admin-Added Kids Meals]', icon: 'Utensils', description: '[Admin: Child-appropriate dining]' },
      { id: 4, name: '[Admin: Admin-Added Play Areas]', icon: 'Sparkles', description: '[Admin: Safe spaces for children]' }
    ]
  },
  {
    id: 'pet-travel',
    name: '[Admin: Pet Travel]',
    icon: 'PawPrint',
    emoji: '🐾',
    tagline: '[Admin: Services for traveling with pets]',
    description: '[Admin: Pet-friendly hotels, transport, care, and vets]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Pet-Friendly Hotels]', icon: 'Building2', description: '[Admin: Accommodations that welcome pets]' },
      { id: 2, name: '[Admin: Admin-Added Pet Transport]', icon: 'Car', description: '[Admin: Safe pet travel arrangements]' },
      { id: 3, name: '[Admin: Admin-Added Pet Care]', icon: 'PawPrint', description: '[Admin: Professional pet sitting]' },
      { id: 4, name: '[Admin: Admin-Added Vet Services]', icon: 'HeartPulse', description: '[Admin: Veterinary care on the go]' }
    ]
  },
  {
    id: 'digital-tools',
    name: '[Admin: Digital Tools]',
    icon: 'Smartphone',
    emoji: '📱',
    tagline: '[Admin: Essential travel tech & docs]',
    description: '[Admin: Insurance, eSIM, guides, payments, visas]',
    services: [
      { id: 1, name: '[Admin: Admin-Added Travel Insurance]', icon: 'Shield', description: '[Admin: Comprehensive trip protection]' },
      { id: 2, name: '[Admin: Admin-Added eSIM & Data]', icon: 'Wifi', description: '[Admin: Internet connectivity solutions]' },
      { id: 3, name: '[Admin: Admin-Added Digital Guides]', icon: 'Map', description: '[Admin: Interactive travel information]' },
      { id: 4, name: '[Admin: Admin-Added Payment Solutions]', icon: 'CreditCard', description: '[Admin: Multi-currency payment options]' },
      { id: 5, name: '[Admin: Admin-Added Visa Assistance]', icon: 'FileText', description: '[Admin: Document processing help]' }
    ]
  },
  {
    id: 'custom-package-builder',
    name: '[Admin: Travel Essentials]',
    icon: 'Package',
    emoji: '🧳',
    tagline: '[Admin: Custom package builder]',
    description: '[Admin: Mix and match services for your perfect trip]',
    isSpecial: true,
    services: []
  }
];

// ============================================
// VEHICLE TYPES (FOR SELF-DRIVE)
// ============================================

export interface VehicleType {
  id: string;
  name: string;
  category: string;
  price: string;
  capacity: number;
  features: string[];
  icon: string;
}

export const vehicleTypes: VehicleType[] = [
  {
    id: 'sedan',
    name: '[Admin: Sedan]',
    category: 'Economy',
    price: '₹1,500/day',
    capacity: 5,
    features: ['[Admin: Air Conditioning]', '[Admin: Music System]', '[Admin: Power Windows]'],
    icon: 'Car'
  },
  {
    id: 'suv',
    name: '[Admin: SUV]',
    category: 'Premium',
    price: '₹3,000/day',
    capacity: 7,
    features: ['[Admin: 4WD]', '[Admin: Sunroof]', '[Admin: Premium Audio]', '[Admin: Cruise Control]'],
    icon: 'Car'
  },
  {
    id: 'luxury',
    name: '[Admin: Luxury Car]',
    category: 'Luxury',
    price: '₹8,000/day',
    capacity: 5,
    features: ['[Admin: Leather Seats]', '[Admin: Premium Sound]', '[Admin: Advanced Safety]', '[Admin: Chauffeur Option]'],
    icon: 'Car'
  },
  {
    id: 'bike',
    name: '[Admin: Motorcycle]',
    category: 'Adventure',
    price: '₹800/day',
    capacity: 2,
    features: ['[Admin: Adventure Ready]', '[Admin: Storage Box]', '[Admin: GPS]'],
    icon: 'Bike'
  }
];

// ============================================
// INSURANCE PACKAGES
// ============================================

export interface InsurancePackage {
  id: string;
  name: string;
  coverage: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export const insurancePackages: InsurancePackage[] = [
  {
    id: 'basic',
    name: '[Admin: Basic Travel Insurance]',
    coverage: '[Admin: Up to ₹5 Lakhs]',
    price: '₹500',
    features: [
      '[Admin: Medical emergencies]',
      '[Admin: Trip cancellation]',
      '[Admin: Lost baggage]'
    ]
  },
  {
    id: 'comprehensive',
    name: '[Admin: Comprehensive Coverage]',
    coverage: '[Admin: Up to ₹25 Lakhs]',
    price: '₹1,500',
    features: [
      '[Admin: All basic features]',
      '[Admin: Adventure activities]',
      '[Admin: Personal liability]',
      '[Admin: Emergency evacuation]'
    ],
    recommended: true
  },
  {
    id: 'premium',
    name: '[Admin: Premium Protection]',
    coverage: '[Admin: Up to ₹1 Crore]',
    price: '₹3,500',
    features: [
      '[Admin: All comprehensive features]',
      '[Admin: Pre-existing conditions]',
      '[Admin: Worldwide coverage]',
      '[Admin: 24/7 concierge]'
    ]
  }
];

// ============================================
// VISA ASSISTANCE TYPES
// ============================================

export interface VisaService {
  id: string;
  country: string;
  type: string;
  processingTime: string;
  price: string;
  documents: string[];
}

export const visaServices: VisaService[] = [
  {
    id: 'tourist-visa',
    country: '[Admin: Multiple Countries]',
    type: '[Admin: Tourist Visa]',
    processingTime: '[Admin: 5-7 working days]',
    price: '₹5,000',
    documents: [
      '[Admin: Passport]',
      '[Admin: Photos]',
      '[Admin: Bank statement]',
      '[Admin: Travel itinerary]'
    ]
  },
  {
    id: 'business-visa',
    country: '[Admin: Multiple Countries]',
    type: '[Admin: Business Visa]',
    processingTime: '[Admin: 3-5 working days]',
    price: '₹8,000',
    documents: [
      '[Admin: All tourist visa docs]',
      '[Admin: Company invitation]',
      '[Admin: Business registration]'
    ]
  }
];

// ============================================
// CONNECTIVITY OPTIONS
// ============================================

export interface ConnectivityOption {
  id: string;
  name: string;
  type: string;
  data: string;
  validity: string;
  price: string;
}

export const connectivityOptions: ConnectivityOption[] = [
  {
    id: 'esim-basic',
    name: '[Admin: Basic eSIM]',
    type: 'eSIM',
    data: '[Admin: 5GB]',
    validity: '[Admin: 7 days]',
    price: '₹500'
  },
  {
    id: 'esim-premium',
    name: '[Admin: Premium eSIM]',
    type: 'eSIM',
    data: '[Admin: 20GB]',
    validity: '[Admin: 30 days]',
    price: '₹1,500'
  },
  {
    id: 'pocket-wifi',
    name: '[Admin: Pocket WiFi Device]',
    type: 'Device',
    data: '[Admin: Unlimited]',
    validity: '[Admin: Per day]',
    price: '₹300/day'
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getSubcategoryById(id: string): EssentialSubcategory | undefined {
  return travelEssentialsSubcategories.find(sub => sub.id === id);
}

export function getAllServices(): EssentialService[] {
  return travelEssentialsSubcategories.flatMap(sub => sub.services);
}

export function searchServices(query: string): EssentialService[] {
  const lowerQuery = query.toLowerCase();
  return getAllServices().filter(service =>
    service.name.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery)
  );
}

export function getFeaturedServices(): EssentialService[] {
  return getAllServices().filter(service => service.featured);
}

export function getServicesByCategory(categoryId: string): EssentialService[] {
  const category = getSubcategoryById(categoryId);
  return category?.services || [];
}
