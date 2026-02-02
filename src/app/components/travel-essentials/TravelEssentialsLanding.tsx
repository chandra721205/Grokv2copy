import React, { useState } from 'react';
import { 
  Building2, 
  Car, 
  UtensilsCrossed, 
  UserRound, 
  HeartPulse, 
  Accessibility, 
  Users, 
  PawPrint, 
  Smartphone, 
  Package,
  ArrowLeft,
  Search,
  MapPin,
  DollarSign,
  AlertCircle,
  Globe,
  Youtube,
  ChevronRight,
  Info
} from 'lucide-react';

// Service category configuration
const serviceCategories = [
  {
    id: 'accommodation',
    name: 'Accommodation',
    description: 'Places to stay',
    icon: Building2,
    serviceCount: 4,
    services: [
      'Admin-Added Hotels & Resorts',
      'Admin-Added Vacation Rentals',
      'Admin-Added Hostels & Budget Stays',
      'Admin-Added Luxury Properties'
    ]
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Ways to get around',
    icon: Car,
    serviceCount: 5,
    services: [
      'Admin-Added Flight Booking',
      'Admin-Added Car Rentals',
      'Admin-Added Bus & Train Services',
      'Admin-Added Airport Transfers',
      '🚗 Self-Drive Vehicles (Featured)'
    ],
    featured: 'self-drive'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Dining',
    description: 'Food experiences',
    icon: UtensilsCrossed,
    serviceCount: 4,
    services: [
      'Admin-Added Restaurant Bookings',
      'Admin-Added Food Delivery',
      'Admin-Added Catering Services',
      'Admin-Added Culinary Tours'
    ]
  },
  {
    id: 'personal-assistance',
    name: 'Personal Assistance',
    description: 'Helping your trip',
    icon: UserRound,
    serviceCount: 4,
    services: [
      'Admin-Added Travel Concierge',
      'Admin-Added Tour Guides',
      'Admin-Added Translation Services',
      'Admin-Added Event Planning'
    ]
  },
  {
    id: 'senior-care',
    name: 'Senior Care',
    description: 'Services for elders',
    icon: HeartPulse,
    serviceCount: 4,
    services: [
      'Admin-Added Medical Assistance (Featured)',
      'Admin-Added Wheelchair Services (Featured)',
      'Admin-Added Medication Management',
      'Admin-Added Elder Companions'
    ],
    hasFeatured: true
  },
  {
    id: 'accessibility',
    name: 'Accessibility Services',
    description: 'Barrier-free travel',
    icon: Accessibility,
    serviceCount: 4,
    services: [
      'Admin-Added Mobility Support',
      'Admin-Added Sign Language Interpreters',
      'Admin-Added Accessible Accommodations',
      'Admin-Added Special Equipment Rentals'
    ]
  },
  {
    id: 'family',
    name: 'Family Services',
    description: 'Fun with the kids',
    icon: Users,
    serviceCount: 4,
    services: [
      'Admin-Added Childcare Services',
      'Admin-Added Kid-Friendly Activities',
      'Admin-Added Babysitting Services',
      'Admin-Added Family Entertainment'
    ]
  },
  {
    id: 'pet-travel',
    name: 'Pet Travel',
    description: 'Traveling with pets',
    icon: PawPrint,
    serviceCount: 4,
    services: [
      'Admin-Added Pet-Friendly Hotels',
      'Admin-Added Pet Transportation',
      'Admin-Added Veterinary Services',
      'Admin-Added Pet Care Services'
    ]
  },
  {
    id: 'digital-tools',
    name: 'Digital Tools & Services',
    description: 'Tech for travelers',
    icon: Smartphone,
    serviceCount: 5,
    services: [
      'Admin-Added Travel Apps',
      'Admin-Added WiFi & SIM Cards',
      'Admin-Added Digital Wallets',
      'Admin-Added Online Bookings',
      'Admin-Added Virtual Assistants'
    ]
  },
  {
    id: 'custom-package',
    name: 'Travel Essentials',
    description: 'Custom package builder',
    icon: Package,
    serviceCount: 0,
    isCustomBuilder: true
  }
];

interface ServiceCardProps {
  category: typeof serviceCategories[0];
  onClick: () => void;
}

function ServiceCard({ category, onClick }: ServiceCardProps) {
  const IconComponent = category.icon;
  
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full text-left group"
      aria-label={`View ${category.name} services`}
    >
      {/* Icon Container */}
      <div className="bg-blue-50 rounded-2xl p-4 mb-4 inline-flex group-hover:bg-blue-100 transition-colors">
        <IconComponent className="w-8 h-8 text-blue-600" aria-hidden="true" />
      </div>

      {/* Category Name */}
      <h3 className="font-bold text-base text-gray-900 mb-1">
        {category.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-600 mb-3">
        {category.description}
      </p>

      {/* Service Count Badge */}
      {!category.isCustomBuilder && (
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            {category.serviceCount} {category.serviceCount === 1 ? 'service' : 'services'}
          </span>
          <span className="text-blue-600 text-xs font-semibold group-hover:translate-x-1 transition-transform">
            View Services →
          </span>
        </div>
      )}

      {category.isCustomBuilder && (
        <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold">
          <span>Build Package</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </button>
  );
}

interface TravelEssentialsLandingProps {
  onBack: () => void;
  onCategorySelect: (categoryId: string) => void;
  currentLocation?: string;
}

export default function TravelEssentialsLanding({
  onBack,
  onCategorySelect,
  currentLocation = '[Admin: Auto-Detect Location]'
}: TravelEssentialsLandingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [budget, setBudget] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleEnableAlerts = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleGoogleSearch = () => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent('travel essentials ' + currentLocation)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent('travel essentials guide ' + currentLocation)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Header with Gradient Background */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 hover:bg-white/30 transition-colors active:scale-95 relative z-10"
          aria-label="Go back to main categories"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Title Section */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Icon Container */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <Building2 className="w-9 h-9 text-white" aria-hidden="true" />
          </div>

          {/* Title and Subtitle */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-1">
              Travel Essentials
            </h1>
            <p className="text-white/90 text-base">
              Complete concierge services for your journey
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 -mt-4 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search services, locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-full bg-white shadow-md border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            aria-label="Search travel essentials services and locations"
          />
        </div>

        {/* Location and Budget Section */}
        <div className="space-y-3">
          {/* Location Selector */}
          <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
            <MapPin className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                {currentLocation}
              </p>
            </div>
            <button
              className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700 hover:bg-white transition-colors"
              aria-label="Change location"
            >
              Change
            </button>
          </div>

          {/* Budget Input */}
          <div className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
            <DollarSign className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
            <input
              type="text"
              placeholder="[Admin: Set your budget range]"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="flex-1 bg-transparent text-sm font-semibold text-gray-700 placeholder:text-gray-400 focus:outline-none"
              aria-label="Set your budget for travel essentials"
            />
          </div>
        </div>

        {/* Deal Alerts Banner */}
        <button
          onClick={handleEnableAlerts}
          className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
          aria-label="Enable travel essentials deal alerts"
        >
          <AlertCircle className="w-5 h-5 text-yellow-900 shrink-0" aria-hidden="true" />
          <div className="flex-1 text-left">
            <p className="text-sm font-bold text-yellow-900">
              [Admin: Get Travel Essentials Deal Alerts]
            </p>
          </div>
          <span className="px-4 py-1 bg-yellow-900 text-yellow-100 rounded-full text-xs font-bold">
            Enable
          </span>
        </button>

        {/* External Discovery Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleGoogleSearch}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors active:scale-95"
            aria-label="Search for travel essentials on Google"
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            Google Search
          </button>
          <button
            onClick={handleYouTubeSearch}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-full font-semibold text-sm hover:bg-red-700 transition-colors active:scale-95"
            aria-label="Browse travel essentials videos on YouTube"
          >
            <Youtube className="w-4 h-4" aria-hidden="true" />
            YouTube
          </button>
        </div>

        {/* Service Categories Section */}
        <section className="space-y-4">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Service Categories
            </h2>
            <span className="text-xs text-gray-500">
              {serviceCategories.reduce((acc, cat) => acc + cat.serviceCount, 0)} services across {serviceCategories.length} categories
            </span>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {serviceCategories.map((category) => (
              <ServiceCard
                key={category.id}
                category={category}
                onClick={() => onCategorySelect(category.id)}
              />
            ))}
          </div>
        </section>

        {/* Information Card */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100">
          <div className="flex gap-3 mb-3">
            <Info className="w-6 h-6 text-blue-600 shrink-0" aria-hidden="true" />
            <h3 className="font-bold text-base text-blue-900">
              How Travel Essentials Works
            </h3>
          </div>
          <div className="space-y-2 text-sm text-blue-800 leading-relaxed">
            <p>
              This is your <strong>central concierge hub</strong>. Unlike our categories where you book complete packages, here you choose individual services from various admin-curated providers.
            </p>
            <p>
              <strong>Save your preferences</strong>, and they'll be suggested when you book tours in other categories!
            </p>
            <p>
              All services shown are <strong>admin-managed placeholders</strong>. Use the Google Search and YouTube Browse buttons to discover real providers and get updated information.
            </p>
          </div>
        </div>
      </main>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-slide-up z-50">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Deal alerts enabled!</span>
        </div>
      )}
    </div>
  );
}
