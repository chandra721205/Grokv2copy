import React, { useState } from 'react';
import TravelEssentialsLanding from './TravelEssentialsLanding';
import ServiceDetailPage from './ServiceDetailPage';
import CustomPackageBuilder from './CustomPackageBuilder';
import {
  Building2,
  Car,
  UtensilsCrossed,
  UserRound,
  HeartPulse,
  Accessibility,
  Users,
  PawPrint,
  Smartphone
} from 'lucide-react';

type Screen = 
  | { type: 'landing' }
  | { type: 'service-detail'; categoryId: string }
  | { type: 'custom-package' };

const serviceData = {
  'accommodation': {
    name: 'Accommodation',
    icon: Building2,
    services: [
      {
        id: 'acc-1',
        name: 'Admin-Added Hotels & Resorts',
        description: 'Luxury and budget hotel options',
        isAvailable: true
      },
      {
        id: 'acc-2',
        name: 'Admin-Added Vacation Rentals',
        description: 'Apartments, villas, and homestays',
        isAvailable: true
      },
      {
        id: 'acc-3',
        name: 'Admin-Added Hostels & Budget Stays',
        description: 'Affordable lodging options',
        isAvailable: true
      },
      {
        id: 'acc-4',
        name: 'Admin-Added Luxury Properties',
        description: 'Premium accommodations and resorts',
        isAvailable: true
      }
    ]
  },
  'transportation': {
    name: 'Transportation',
    icon: Car,
    services: [
      {
        id: 'trans-1',
        name: 'Admin-Added Flight Booking',
        description: 'Domestic and international flights',
        isAvailable: true
      },
      {
        id: 'trans-2',
        name: 'Admin-Added Car Rentals',
        description: 'Self-drive and chauffeur options',
        isAvailable: true
      },
      {
        id: 'trans-3',
        name: 'Admin-Added Bus & Train Services',
        description: 'Public transport booking',
        isAvailable: true
      },
      {
        id: 'trans-4',
        name: 'Admin-Added Airport Transfers',
        description: 'Pickup and drop-off services',
        isAvailable: true
      },
      {
        id: 'trans-5',
        name: '🚗 Self-Drive Vehicles',
        description: 'Featured rental vehicles',
        isAvailable: true,
        isFeatured: true
      }
    ]
  },
  'hospitality': {
    name: 'Hospitality & Dining',
    icon: UtensilsCrossed,
    services: [
      {
        id: 'hosp-1',
        name: 'Admin-Added Restaurant Bookings',
        description: 'Table reservations and fine dining',
        isAvailable: true
      },
      {
        id: 'hosp-2',
        name: 'Admin-Added Food Delivery',
        description: 'Local cuisine delivery services',
        isAvailable: true
      },
      {
        id: 'hosp-3',
        name: 'Admin-Added Catering Services',
        description: 'Event and party catering',
        isAvailable: true
      },
      {
        id: 'hosp-4',
        name: 'Admin-Added Culinary Tours',
        description: 'Food tasting and cooking experiences',
        isAvailable: true
      }
    ]
  },
  'personal-assistance': {
    name: 'Personal Assistance',
    icon: UserRound,
    services: [
      {
        id: 'pa-1',
        name: 'Admin-Added Travel Concierge',
        description: '24/7 personal assistance',
        isAvailable: true
      },
      {
        id: 'pa-2',
        name: 'Admin-Added Tour Guides',
        description: 'Expert local guides',
        isAvailable: true
      },
      {
        id: 'pa-3',
        name: 'Admin-Added Translation Services',
        description: 'Language interpretation support',
        isAvailable: true
      },
      {
        id: 'pa-4',
        name: 'Admin-Added Event Planning',
        description: 'Celebration and activity coordination',
        isAvailable: true
      }
    ]
  },
  'senior-care': {
    name: 'Senior Care',
    icon: HeartPulse,
    services: [
      {
        id: 'sc-1',
        name: 'Admin-Added Medical Assistance',
        description: 'Healthcare support and emergency services',
        isAvailable: true,
        isFeatured: true
      },
      {
        id: 'sc-2',
        name: 'Admin-Added Wheelchair Services',
        description: 'Mobility aid rental and support',
        isAvailable: true,
        isFeatured: true
      },
      {
        id: 'sc-3',
        name: 'Admin-Added Medication Management',
        description: 'Prescription and pharmacy assistance',
        isAvailable: true
      },
      {
        id: 'sc-4',
        name: 'Admin-Added Elder Companions',
        description: 'Dedicated travel companions',
        isAvailable: true
      }
    ]
  },
  'accessibility': {
    name: 'Accessibility Services',
    icon: Accessibility,
    services: [
      {
        id: 'acc-s-1',
        name: 'Admin-Added Mobility Support',
        description: 'Wheelchair and walker assistance',
        isAvailable: true
      },
      {
        id: 'acc-s-2',
        name: 'Admin-Added Sign Language Interpreters',
        description: 'Communication support services',
        isAvailable: true
      },
      {
        id: 'acc-s-3',
        name: 'Admin-Added Accessible Accommodations',
        description: 'Barrier-free lodging options',
        isAvailable: true
      },
      {
        id: 'acc-s-4',
        name: 'Admin-Added Special Equipment Rentals',
        description: 'Assistive devices and tools',
        isAvailable: true
      }
    ]
  },
  'family': {
    name: 'Family Services',
    icon: Users,
    services: [
      {
        id: 'fam-1',
        name: 'Admin-Added Childcare Services',
        description: 'Professional babysitting and daycare',
        isAvailable: true
      },
      {
        id: 'fam-2',
        name: 'Admin-Added Kid-Friendly Activities',
        description: 'Fun experiences for children',
        isAvailable: true
      },
      {
        id: 'fam-3',
        name: 'Admin-Added Babysitting Services',
        description: 'Trusted caregivers',
        isAvailable: true
      },
      {
        id: 'fam-4',
        name: 'Admin-Added Family Entertainment',
        description: 'Shows, parks, and attractions',
        isAvailable: true
      }
    ]
  },
  'pet-travel': {
    name: 'Pet Travel',
    icon: PawPrint,
    services: [
      {
        id: 'pet-1',
        name: 'Admin-Added Pet-Friendly Hotels',
        description: 'Accommodations that welcome pets',
        isAvailable: true
      },
      {
        id: 'pet-2',
        name: 'Admin-Added Pet Transportation',
        description: 'Safe travel for your pets',
        isAvailable: true
      },
      {
        id: 'pet-3',
        name: 'Admin-Added Veterinary Services',
        description: 'Emergency and routine pet care',
        isAvailable: true
      },
      {
        id: 'pet-4',
        name: 'Admin-Added Pet Care Services',
        description: 'Grooming, walking, and sitting',
        isAvailable: true
      }
    ]
  },
  'digital-tools': {
    name: 'Digital Tools & Services',
    icon: Smartphone,
    services: [
      {
        id: 'dig-1',
        name: 'Admin-Added Travel Apps',
        description: 'Navigation and translation apps',
        isAvailable: true
      },
      {
        id: 'dig-2',
        name: 'Admin-Added WiFi & SIM Cards',
        description: 'Internet connectivity solutions',
        isAvailable: true
      },
      {
        id: 'dig-3',
        name: 'Admin-Added Digital Wallets',
        description: 'Payment and currency services',
        isAvailable: true
      },
      {
        id: 'dig-4',
        name: 'Admin-Added Online Bookings',
        description: 'Digital reservation platforms',
        isAvailable: true
      },
      {
        id: 'dig-5',
        name: 'Admin-Added Virtual Assistants',
        description: 'AI-powered travel help',
        isAvailable: true
      }
    ]
  }
};

interface TravelEssentialsRouterProps {
  onBack: () => void;
  currentLocation?: string;
  userBudget?: number;
}

export default function TravelEssentialsRouter({
  onBack,
  currentLocation,
  userBudget
}: TravelEssentialsRouterProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>({ type: 'landing' });

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === 'custom-package') {
      setCurrentScreen({ type: 'custom-package' });
    } else {
      setCurrentScreen({ type: 'service-detail', categoryId });
    }
  };

  const handleBackToLanding = () => {
    setCurrentScreen({ type: 'landing' });
  };

  // Render current screen
  if (currentScreen.type === 'landing') {
    return (
      <TravelEssentialsLanding
        onBack={onBack}
        onCategorySelect={handleCategorySelect}
        currentLocation={currentLocation}
      />
    );
  }

  if (currentScreen.type === 'service-detail') {
    const category = serviceData[currentScreen.categoryId as keyof typeof serviceData];
    
    if (!category) {
      // Fallback to landing if category not found
      setCurrentScreen({ type: 'landing' });
      return null;
    }

    return (
      <ServiceDetailPage
        categoryId={currentScreen.categoryId}
        categoryName={category.name}
        categoryIcon={category.icon}
        services={category.services}
        onBack={handleBackToLanding}
        currentLocation={currentLocation}
      />
    );
  }

  if (currentScreen.type === 'custom-package') {
    return (
      <CustomPackageBuilder
        onBack={handleBackToLanding}
        userBudget={userBudget}
      />
    );
  }

  return null;
}
