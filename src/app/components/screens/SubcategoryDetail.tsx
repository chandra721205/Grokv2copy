/**
 * Subcategory Detail Page
 * 
 * Reusable template for all 9 service subcategories.
 * Shows admin-managed services with external search and preference saving.
 */

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Globe, Youtube, Heart, Check, ChevronLeft, Info, Sparkles } from 'lucide-react';

// ============================================================================
// SUBCATEGORY DATA
// ============================================================================

const subcategoryData: Record<string, any> = {
  'accommodation': {
    icon: '🛏️',
    title: 'Accommodation',
    subtitle: 'Places to stay',
    services: [
      {
        id: 'hotels-resorts',
        name: 'Admin-Added Hotels & Resorts',
        description: 'Luxury and budget hotels across all destinations',
        badge: 'Available',
        featured: false
      },
      {
        id: 'homestays',
        name: 'Admin-Added Homestays & Villas',
        description: 'Local experiences with homeowners and villa rentals',
        badge: 'Available',
        featured: false
      },
      {
        id: 'budget-stays',
        name: 'Admin-Added Budget Stays',
        description: 'Hostels, guesthouses, and affordable options',
        badge: 'Available',
        featured: false
      },
      {
        id: 'luxury',
        name: 'Admin-Added Luxury Accommodations',
        description: 'Premium hotels, resorts, and boutique properties',
        badge: 'Available',
        featured: false
      }
    ]
  },
  'transportation': {
    icon: '🚗',
    title: 'Transportation',
    subtitle: 'Ways to get around',
    services: [
      {
        id: 'flights',
        name: 'Admin-Added Flight Bookings',
        description: 'Domestic and international flight options',
        badge: 'Available',
        featured: false
      },
      {
        id: 'trains',
        name: 'Admin-Added Train Services',
        description: 'Railway bookings and reservations',
        badge: 'Available',
        featured: false
      },
      {
        id: 'bus',
        name: 'Admin-Added Bus & Coach',
        description: 'Inter-city and local bus services',
        badge: 'Available',
        featured: false
      },
      {
        id: 'car-rentals',
        name: 'Admin-Added Car Rentals',
        description: 'Rental vehicles with or without drivers',
        badge: 'Available',
        featured: false
      },
      {
        id: 'self-drive',
        name: '🚗 Self-Drive Vehicles',
        description: 'Drive yourself - adventure on your terms',
        badge: 'Popular',
        featured: true,
        highlight: true
      }
    ]
  },
  'hospitality-dining': {
    icon: '🍽️',
    title: 'Hospitality & Dining',
    subtitle: 'Food experiences',
    services: [
      {
        id: 'restaurants',
        name: 'Admin-Added Restaurants',
        description: 'Fine dining to local eateries',
        badge: 'Available',
        featured: false
      },
      {
        id: 'food-tours',
        name: 'Admin-Added Food Tours',
        description: 'Guided culinary experiences',
        badge: 'Available',
        featured: false
      },
      {
        id: 'catering',
        name: 'Admin-Added Catering Services',
        description: 'Event and group meal arrangements',
        badge: 'Available',
        featured: false
      },
      {
        id: 'local-cuisine',
        name: 'Admin-Added Local Cuisine Experiences',
        description: 'Authentic regional food adventures',
        badge: 'Available',
        featured: false
      }
    ]
  },
  'personal-assistance': {
    icon: '👤',
    title: 'Personal Assistance',
    subtitle: 'Help along your trip',
    services: [
      {
        id: 'companions',
        name: 'Admin-Added Travel Companions',
        description: 'Professional travel buddies and helpers',
        badge: 'Available',
        featured: false
      },
      {
        id: 'guides',
        name: 'Admin-Added Tour Guides',
        description: 'Expert local guides for sightseeing',
        badge: 'Available',
        featured: false
      },
      {
        id: 'concierge',
        name: 'Admin-Added Concierge Services',
        description: 'Full-service trip coordination',
        badge: 'Available',
        featured: false
      },
      {
        id: 'assistants',
        name: 'Admin-Added Personal Assistants',
        description: 'Dedicated support throughout your journey',
        badge: 'Available',
        featured: false
      }
    ]
  },
  'senior-care': {
    icon: '👵',
    title: 'Senior Care',
    subtitle: 'Services for aging travelers',
    services: [
      {
        id: 'healthcare',
        name: 'Admin-Added Healthcare Support',
        description: 'Medical assistance and monitoring',
        badge: 'Featured',
        featured: true
      },
      {
        id: 'mobility',
        name: 'Admin-Added Mobility Assistance',
        description: 'Wheelchairs, walkers, and movement support',
        badge: 'Featured',
        featured: true
      },
      {
        id: 'medical-equipment',
        name: 'Admin-Added Medical Equipment',
        description: 'Oxygen, CPAP, and other devices',
        badge: 'Available',
        featured: false
      },
      {
        id: 'nursing',
        name: 'Admin-Added Nursing Services',
        description: 'Professional nursing care during travel',
        badge: 'Available',
        featured: false
      },
      {
        id: 'diets',
        name: 'Admin-Added Specialized Diets',
        description: 'Medical diet planning and preparation',
        badge: 'Available',
        featured: false
      },
      {
        id: 'emergency',
        name: 'Admin-Added Emergency Services',
        description: '24/7 emergency medical response',
        badge: 'Available',
        featured: false
      }
    ]
  },
  'accessibility': {
    icon: '♿',
    title: 'Accessibility Services',
    subtitle: 'For special needs',
    services: [
      {
        id: 'wheelchair',
        name: 'Admin-Added Wheelchair Services',
        description: 'Wheelchair rentals and accessible venues',
        badge: 'Available',
        featured: false
      },
      {
        id: 'interpreters',
        name: 'Admin-Added Sign Language Interpreters',
        description: 'Communication support for deaf/HOH travelers',
        badge: 'Available',
        featured: false
      },
      {
        id: 'transport',
        name: 'Admin-Added Accessible Transport',
        description: 'Wheelchair-accessible vehicles',
        badge: 'Available',
        featured: false
      },
      {
        id: 'accommodations',
        name: 'Admin-Added Special Accommodations',
        description: 'Barrier-free hotels and facilities',
        badge: 'Available',
        featured: false
      }
    ]
  },
  'family-services': {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Services',
    subtitle: 'Travel with kids',
    services: [
      {
        id: 'childcare',
        name: 'Admin-Added Childcare Services',
        description: 'Professional babysitters and nannies',
        badge: 'Available',
        featured: false
      },
      {
        id: 'activities',
        name: 'Admin-Added Kids Activities',
        description: 'Child-friendly tours and entertainment',
        badge: 'Available',
        featured: false
      },
      {
        id: 'guides',
        name: 'Admin-Added Family-Friendly Guides',
        description: 'Tours designed for families with children',
        badge: 'Available',
        featured: false
      },
      {
        id: 'equipment',
        name: 'Admin-Added Baby Equipment Rental',
        description: 'Strollers, cribs, car seats, and more',
        badge: 'Available',
        featured: false
      }
    ]
  },
  'pet-travel': {
    icon: '🐾',
    title: 'Pet Travel',
    subtitle: 'Traveling with pets',
    services: [
      {
        id: 'pet-hotels',
        name: 'Admin-Added Pet-Friendly Hotels',
        description: 'Accommodations welcoming pets',
        badge: 'Available',
        featured: false
      },
      {
        id: 'pet-transport',
        name: 'Admin-Added Pet Transport',
        description: 'Safe animal transportation services',
        badge: 'Available',
        featured: false
      },
      {
        id: 'veterinary',
        name: 'Admin-Added Veterinary Services',
        description: 'Emergency and routine pet care',
        badge: 'Available',
        featured: false
      },
      {
        id: 'pet-care',
        name: 'Admin-Added Pet Care Facilities',
        description: 'Daycare, boarding, and grooming',
        badge: 'Available',
        featured: false
      }
    ]
  },
  'digital-tools': {
    icon: '📱',
    title: 'Digital Tools & Connectivity',
    subtitle: 'Stay connected',
    services: [
      {
        id: 'sim-cards',
        name: 'Admin-Added Local SIM Cards',
        description: 'Prepaid data and calling plans',
        badge: 'Available',
        featured: false
      },
      {
        id: 'wifi',
        name: 'Admin-Added Pocket WiFi Rental',
        description: 'Portable internet hotspots',
        badge: 'Available',
        featured: false
      },
      {
        id: 'power-banks',
        name: 'Admin-Added Power Banks',
        description: 'Portable charging solutions',
        badge: 'Available',
        featured: false
      },
      {
        id: 'tech-support',
        name: 'Admin-Added Tech Support',
        description: 'Device troubleshooting and help',
        badge: 'Available',
        featured: false
      },
      {
        id: 'travel-apps',
        name: 'Admin-Added Travel Apps & Tools',
        description: 'Recommended apps and digital guides',
        badge: 'Available',
        featured: false
      }
    ]
  }
};

// ============================================================================
// COMPONENTS
// ============================================================================

interface ServiceCardProps {
  service: any;
  onGoogleSearch: () => void;
  onYouTubeSearch: () => void;
  onSavePreference: () => void;
  isSaved: boolean;
}

function ServiceCard({ service, onGoogleSearch, onYouTubeSearch, onSavePreference, isSaved }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-3xl p-5 shadow-md transition-all ${service.highlight ? 'ring-2 ring-blue-500' : ''}`}>
      {/* Service Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-base text-gray-900">
              {service.name}
            </h3>
            {service.featured && (
              <Sparkles className="w-4 h-4 text-yellow-500" aria-label="Featured service" />
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
        
        {/* Save Button */}
        <button
          onClick={onSavePreference}
          className={`ml-3 p-2 rounded-full transition-colors ${
            isSaved 
              ? 'bg-red-100 text-red-600' 
              : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500'
          }`}
          aria-label={isSaved ? 'Remove from saved preferences' : 'Save to preferences'}
        >
          <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Badge */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
          service.badge === 'Featured' 
            ? 'bg-yellow-100 text-yellow-800'
            : service.badge === 'Popular'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-green-100 text-green-800'
        }`}>
          {service.badge}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onGoogleSearch}
          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full h-10 flex items-center justify-center gap-2 text-sm font-semibold hover:shadow-lg transition-all active:scale-98"
          aria-label={`Search for ${service.name} on Google`}
        >
          <Globe className="w-4 h-4" />
          Google
        </button>
        <button
          onClick={onYouTubeSearch}
          className="flex-1 bg-red-600 text-white rounded-full h-10 flex items-center justify-center gap-2 text-sm font-semibold hover:bg-red-700 transition-all active:scale-98"
          aria-label={`Browse ${service.name} on YouTube`}
        >
          <Youtube className="w-4 h-4" />
          YouTube
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function SubcategoryDetail() {
  const { subcategory: subcategoryId } = useParams<{ subcategory: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [savedServices, setSavedServices] = useState<Set<string>>(new Set());
  const [showSavedToast, setShowSavedToast] = useState(false);

  const subcategory = subcategoryData[subcategoryId || ''];

  if (!subcategory) {
    return <div>Subcategory not found</div>;
  }

  const handleGoogleSearch = (service: any) => {
    const query = `${service.name.replace('Admin-Added ', '')} travel services`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = (service: any) => {
    const query = `${service.name.replace('Admin-Added ', '')} travel guide review`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  const handleSavePreference = (serviceId: string) => {
    setSavedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
        setShowSavedToast(true);
        setTimeout(() => setShowSavedToast(false), 3000);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate('/travel-essentials')}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 hover:bg-white/30 transition-colors active:scale-95"
          aria-label="Go back to Travel Essentials"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Icon & Title */}
        <div className="flex items-center gap-4">
          <div className="text-5xl" aria-hidden="true">
            {subcategory.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-white text-3xl font-bold mb-1">
              {subcategory.title}
            </h1>
            <p className="text-white/90 text-base">
              {subcategory.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 -mt-4 space-y-6">
        {/* Section Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Admin-Managed Services
          </h2>
          <p className="text-sm text-gray-600">
            {subcategory.services.length} services available
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-4">
          {subcategory.services.map((service: any) => (
            <ServiceCard
              key={service.id}
              service={service}
              onGoogleSearch={() => handleGoogleSearch(service)}
              onYouTubeSearch={() => handleYouTubeSearch(service)}
              onSavePreference={() => handleSavePreference(service.id)}
              isSaved={savedServices.has(service.id)}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="bg-blue-50 rounded-3xl p-5 border-2 border-blue-200">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 leading-relaxed">
              All services shown are admin-curated placeholders. Use the buttons above to discover real providers and save your preferences for trip planning.
            </p>
          </div>
        </div>
      </main>

      {/* Saved Toast */}
      {showSavedToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-slide-up">
          <Check className="w-5 h-5 text-green-400" />
          <span className="text-sm font-semibold">Preferences saved</span>
        </div>
      )}
    </div>
  );
}
