import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, Bot, TrendingUp, MapPin, Heart, Mountain, 
  Sparkles, Calendar, ChevronRight, Bell, Compass, Church, Leaf, 
  GraduationCap, Briefcase, Ship, HeartPulse, Users, Trophy, Wrench, Globe, Youtube, Car
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { CategoryHub } from '@/app/components/categories/CategoryHub';
import { AdventureTourismHub } from '@/app/components/categories/AdventureTourismHub';
import { DevotionalTourismHub } from '@/app/components/categories/DevotionalTourismHub';
import { EducationalTourismHub } from '@/app/components/categories/EducationalTourismHub';
import { CorporateMICEHubEnhanced } from '@/app/components/categories/CorporateMICEHubEnhanced';
import { CruiseTourismHub } from '@/app/components/categories/CruiseTourismHub';
import { SportsTourismHub } from '@/app/components/categories/SportsTourismHub';
import { SeniorWellnessHub } from '@/app/components/seniors/SeniorWellnessHub';
import { TravelEssentialsHub } from '@/app/components/categories/TravelEssentialsHub';
import { SelfDriveFlow } from '@/app/components/essentials/SelfDriveFlow';
import { HoneymoonHub } from '@/app/components/honeymoon/HoneymoonHub';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';
import { CategorySelectionOverlay } from '@/app/components/custom-tour/CategorySelectionOverlay';
import { NewCategoryScreen } from '@/app/components/custom-tour/NewCategoryScreen';
import { ComboTourFlow } from '@/app/components/custom-tour/ComboTourFlow';
import { UserData, DestinationType, CategoryType } from '@/types/index';

interface MainHomeProps {
  userData: UserData | null;
  onNavigate: (tab: string) => void;
  onShowComboTour?: () => void;
}

const categories = [
  { id: 'adventure', icon: Mountain, name: 'Adventure', gradient: 'from-orange-500 to-red-600' },
  { id: 'wellness', icon: HeartPulse, name: 'Wellness', gradient: 'from-green-500 to-teal-600' },
  { id: 'devotional', icon: Church, name: 'Devotional', gradient: 'from-purple-500 to-pink-600' },
  { id: 'heritage', icon: Compass, name: 'Heritage', gradient: 'from-amber-500 to-orange-600' },
  { id: 'eco', icon: Leaf, name: 'Eco Tourism', gradient: 'from-emerald-500 to-green-600' },
  { id: 'educational', icon: GraduationCap, name: 'Educational', gradient: 'from-blue-500 to-indigo-600' },
  { id: 'corporate', icon: Briefcase, name: 'Corporate', gradient: 'from-gray-600 to-slate-700' },
  { id: 'cruise', icon: Ship, name: 'Cruise', gradient: 'from-cyan-500 to-blue-600' },
  { id: 'health', icon: HeartPulse, name: 'Health', gradient: 'from-red-500 to-pink-600' },
  { id: 'senior', icon: Users, name: 'Senior Tourism', gradient: 'from-indigo-500 to-purple-600' },
  { id: 'honeymoon', icon: Heart, name: 'Honeymoon', gradient: 'from-pink-500 to-rose-600' },
  { id: 'sports', icon: Trophy, name: 'Sports', gradient: 'from-yellow-500 to-orange-600' },
  { id: 'self-drive', icon: Car, name: 'Self-Drive', gradient: 'from-orange-400 to-amber-500', featured: true }, // NEW
];

export function MainHome({ userData, onNavigate, onShowComboTour }: MainHomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSeniorHub, setShowSeniorHub] = useState(false);
  const [showEssentialsHub, setShowEssentialsHub] = useState(false);
  const [showSelfDrive, setShowSelfDrive] = useState(false);
  const [showHoneymoonHub, setShowHoneymoonHub] = useState(false);
  const [showAdventureHub, setShowAdventureHub] = useState(false);
  const [showDevotionalHub, setShowDevotionalHub] = useState(false);
  const [showEducationalHub, setShowEducationalHub] = useState(false);
  const [showCorporateHub, setShowCorporateHub] = useState(false);
  const [showCruiseHub, setShowCruiseHub] = useState(false);
  const [showSportsHub, setShowSportsHub] = useState(false);
  const [showCategoryOverlay, setShowCategoryOverlay] = useState(false);
  const [showNewCategory, setShowNewCategory] = useState<'family-fun' | 'other' | null>(null);
  const [showComboTourFlow, setShowComboTourFlow] = useState(false);

  const handleGoogleSearch = () => {
    const query = searchQuery || 'tourist destinations india';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const query = searchQuery || 'travel destinations india';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  // Handle category selection from overlay
  const handleCategorySelect = (target: string) => {
    try {
      setShowCategoryOverlay(false);
      
      // Route to appropriate hub or screen
      switch (target) {
        case 'devotional':
          setShowDevotionalHub(true);
          break;
        case 'adventure':
          setShowAdventureHub(true);
          break;
        case 'wellness':
          setShowSeniorHub(true); // Maps to Wellness hub
          break;
        case 'eco':
          setSelectedCategory('eco');
          break;
        case 'heritage':
          setSelectedCategory('heritage');
          break;
        case 'educational':
          setShowEducationalHub(true);
          break;
        case 'honeymoon':
          setShowHoneymoonHub(true);
          break;
        case 'senior':
          setShowSeniorHub(true);
          break;
        case 'cruise':
          setShowCruiseHub(true);
          break;
        case 'corporate':
          setShowCorporateHub(true);
          break;
        case 'sports':
          setShowSportsHub(true);
          break;
        case 'self-drive':
          setShowSelfDrive(true);
          break;
        case 'NEW':
          // For now, show Other/Custom screen for all NEW categories
          setShowNewCategory('other');
          break;
        default:
          console.warn('Unknown category target:', target);
          break;
      }
    } catch (error) {
      console.error('Error handling category selection:', error);
      // Fail gracefully by closing overlay
      setShowCategoryOverlay(false);
    }
  };

  // Handle NEW category placeholder
  if (showNewCategory) {
    return (
      <NewCategoryScreen 
        onBack={() => setShowNewCategory(null)} 
        categoryType={showNewCategory}
      />
    );
  }

  // Handle Adventure Tourism category
  if (showAdventureHub) {
    return <AdventureTourismHub onBack={() => setShowAdventureHub(false)} />;
  }

  // Handle Devotional Tourism category
  if (showDevotionalHub) {
    return <DevotionalTourismHub onBack={() => setShowDevotionalHub(false)} />;
  }

  // Handle Educational Tourism category
  if (showEducationalHub) {
    return <EducationalTourismHub onBack={() => setShowEducationalHub(false)} />;
  }

  // Handle Corporate & MICE category
  if (showCorporateHub) {
    return <CorporateMICEHubEnhanced onBack={() => setShowCorporateHub(false)} />;
  }

  // Handle Cruise Tourism category
  if (showCruiseHub) {
    return <CruiseTourismHub onBack={() => setShowCruiseHub(false)} />;
  }

  // Handle Honeymoon category
  if (showHoneymoonHub) {
    return <HoneymoonHub onBack={() => setShowHoneymoonHub(false)} />;
  }

  // Handle Sports Tourism category
  if (showSportsHub) {
    return <SportsTourismHub onBack={() => setShowSportsHub(false)} />;
  }

  // Handle Senior category
  if (showSeniorHub) {
    return <SeniorWellnessHub onBack={() => setShowSeniorHub(false)} />;
  }

  // Handle Self-Drive Vehicles
  if (showSelfDrive) {
    return <SelfDriveFlow onBack={() => setShowSelfDrive(false)} />;
  }

  // Handle Travel Essentials
  if (showEssentialsHub) {
    return (
      <TravelEssentialsHub 
        onBack={() => setShowEssentialsHub(false)} 
        onNavigateToSelfDrive={() => setShowSelfDrive(true)}
      />
    );
  }

  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    if (!category) {
      // Fallback: If category not found, reset selection and return to main
      setSelectedCategory(null);
      return null;
    }
    return (
      <CategoryHub
        category={category}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/80 text-sm">Welcome back,</p>
            <h1 className="text-white text-2xl font-bold">{userData?.name || 'Traveler'} ✨</h1>
          </div>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Destinations, activities, vehicle rentals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 h-12 rounded-full bg-white border-0 shadow-lg"
          />
        </div>

        {/* Google Search & YouTube Browse Buttons */}
        <div className="flex gap-3 mb-3">
          <Button
            onClick={handleGoogleSearch}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Globe className="w-4 h-4" />
            Google Search
          </Button>
          <Button
            onClick={handleYouTubeSearch}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Youtube className="w-4 h-4" />
            YouTube
          </Button>
        </div>

        {/* Search hint */}
        <div className="flex items-center gap-2 text-white/70 text-xs">
          <Sparkles className="w-4 h-4" />
          <span>Search by interest, use Google/YouTube to find destinations</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4">
        {/* Grok AI Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 shadow-xl mb-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-1">Grok AI Assistant</h3>
              <p className="text-white/90 text-sm mb-3">Let AI plan your perfect journey</p>
              <Button 
                onClick={() => onShowComboTour?.()}
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full h-9 px-4"
              >
                Start Planning
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {/* Top row - Tour Options */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCategoryOverlay(true)}
                className="bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                <p className="font-semibold text-sm">Single Category</p>
                <p className="text-xs text-gray-500 mt-1">Browse one category</p>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComboTourFlow(true)}
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-4 shadow-md hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-1 right-1 bg-yellow-400 text-yellow-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  NEW
                </div>
                <Sparkles className="w-8 h-8 text-white mb-2" />
                <p className="font-semibold text-sm text-white">Combo Tour</p>
                <p className="text-xs text-white/90 mt-1">Mix 2-5 categories</p>
              </motion.button>
            </div>
            {/* Bottom button - Travel Essentials */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowEssentialsHub(true)}
              className="w-full bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-sm">Travel Essentials</p>
                <p className="text-xs text-gray-500 mt-0.5">Hotels • Transport • Activities</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Tourism Categories */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Browse Categories</h2>
            <button className="text-blue-600 text-sm font-semibold">View All</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (category.id === 'senior') {
                    setShowSeniorHub(true);
                  } else if (category.id === 'self-drive') {
                    setShowSelfDrive(true);
                  } else if (category.id === 'honeymoon') {
                    setShowHoneymoonHub(true);
                  } else if (category.id === 'adventure') {
                    setShowAdventureHub(true);
                  } else if (category.id === 'devotional') {
                    setShowDevotionalHub(true);
                  } else if (category.id === 'educational') {
                    setShowEducationalHub(true);
                  } else if (category.id === 'corporate') {
                    setShowCorporateHub(true);
                  } else if (category.id === 'cruise') {
                    setShowCruiseHub(true);
                  } else if (category.id === 'sports') {
                    setShowSportsHub(true);
                  } else {
                    setSelectedCategory(category.id);
                  }
                }}
                className={`bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-all text-center relative ${
                  category.featured ? 'ring-2 ring-orange-400' : ''
                }`}
              >
                {category.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                    NEW
                  </div>
                )}
                <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-xs">{category.name}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Personalized Recommendations Note */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Browse & Discover
              </p>
              <p className="text-xs text-gray-600">
                Items shown are admin-managed placeholders. Use Google Search or YouTube Browse 
                buttons to discover real destinations that match your interests!
              </p>
            </div>
          </div>
        </div>

        {/* Trending Destinations */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Popular Categories</h2>
            <button className="text-blue-600 text-sm font-semibold flex items-center gap-1">
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Adventure Tours', type: 'Multiple activity options', rating: 4.8, image: 'nature water' },
              { name: 'Cultural Experiences', type: 'Heritage & traditions', rating: 4.9, image: 'desert fort' },
              { name: 'Wellness Retreats', type: 'Health & relaxation', rating: 4.7, image: 'mountain hiking' },
            ].map((dest, index) => (
              <DestinationCard key={index} destination={dest} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />
            ))}
          </div>
        </div>
      </div>

      {/* Category Selection Overlay */}
      <CategorySelectionOverlay
        isOpen={showCategoryOverlay}
        onClose={() => setShowCategoryOverlay(false)}
        onSelectCategory={handleCategorySelect}
      />

      {/* Combo Tour Flow */}
      <ComboTourFlow
        isOpen={showComboTourFlow}
        onClose={() => setShowComboTourFlow(false)}
        onNavigateToCategory={handleCategorySelect}
      />
    </div>
  );
}

function DestinationCard({ destination, onGoogleSearch, onYouTubeSearch }: { destination: any; onGoogleSearch: () => void; onYouTubeSearch: () => void }) {
  // Generate a stable ID from the destination name
  const destinationId = `main-${destination.name.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all relative"
    >
      {/* Interest Tracker Icon - Top Right Corner */}
      <div className="absolute top-3 right-3 z-10">
        <InterestTrackerIcon
          destinationId={destinationId}
          destinationName={destination.name}
          category={destination.type}
          size="sm"
        />
      </div>

      <div className="flex gap-4 p-4">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
          <MapPin className="w-10 h-10 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{destination.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{destination.type}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold text-sm">{destination.rating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 flex gap-2">
        <Button 
          onClick={onGoogleSearch}
          size="sm" 
          className="flex-1 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-8 flex items-center justify-center gap-1"
        >
          <Globe className="w-3 h-3" />
          Google
        </Button>
        <Button 
          onClick={onYouTubeSearch}
          size="sm" 
          className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-8 flex items-center justify-center gap-1"
        >
          <Youtube className="w-3 h-3" />
          YouTube
        </Button>
      </div>
    </motion.div>
  );
}