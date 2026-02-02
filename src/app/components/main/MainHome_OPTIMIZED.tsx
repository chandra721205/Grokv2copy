import { useState, useReducer, Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { 
  Search, TrendingUp, Heart, Mountain, 
  Sparkles, Calendar, Bell, Compass, Church, Leaf, 
  GraduationCap, Briefcase, Ship, HeartPulse, Users, Trophy, Globe, Youtube, Car
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';
import { CategorySelectionOverlay } from '@/app/components/custom-tour/CategorySelectionOverlay';
import { NewCategoryScreen } from '@/app/components/custom-tour/NewCategoryScreen';
import { ComboTourFlow } from '@/app/components/custom-tour/ComboTourFlow';
import { PopularCombinations } from '@/app/components/custom-tour/PopularCombinations';
import { UserData } from '@/types/index';

// 🚀 LAZY LOADED COMPONENTS - Only load when needed!
const AdventureTourismHub = lazy(() => import('@/app/components/categories/AdventureTourismHub_OPTIMIZED'));
const DevotionalTourismHub = lazy(() => import('@/app/components/categories/DevotionalTourismHub'));
const EducationalTourismHub = lazy(() => import('@/app/components/categories/EducationalTourismHub_OPTIMIZED'));
const CorporateMICEHubEnhanced = lazy(() => import('@/app/components/categories/CorporateMICEHubEnhanced'));
const CruiseTourismHub = lazy(() => import('@/app/components/categories/CruiseTourismHub'));
const SportsTourismHub = lazy(() => import('@/app/components/categories/SportsTourismHub_OPTIMIZED'));
const SeniorWellnessHub = lazy(() => import('@/app/components/seniors/SeniorWellnessHub_OPTIMIZED'));
const TravelEssentialsHub = lazy(() => import('@/app/components/categories/TravelEssentialsHub_OPTIMIZED'));
const SelfDriveFlow = lazy(() => import('@/app/components/essentials/SelfDriveFlow'));
const HoneymoonHub = lazy(() => import('@/app/components/honeymoon/HoneymoonHub_OPTIMIZED'));

interface MainHomeProps {
  userData: UserData | null;
  onNavigate: (tab: string) => void;
}

// 🎯 CENTRALIZED STATE MANAGEMENT
type Screen = 
  | 'home'
  | 'adventure'
  | 'devotional'
  | 'educational'
  | 'corporate'
  | 'cruise'
  | 'honeymoon'
  | 'sports'
  | 'senior'
  | 'essentials'
  | 'self-drive'
  | 'wellness'
  | 'heritage'
  | 'eco'
  | 'health'
  | 'category-overlay'
  | 'combo-tour'
  | 'new-category';

interface NavigationState {
  currentScreen: Screen;
  previousScreen: Screen;
  searchQuery: string;
  newCategoryType: 'family-fun' | 'other' | null;
}

type NavigationAction =
  | { type: 'NAVIGATE_TO'; screen: Screen }
  | { type: 'GO_BACK' }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'SHOW_NEW_CATEGORY'; categoryType: 'family-fun' | 'other' }
  | { type: 'RESET' };

const initialState: NavigationState = {
  currentScreen: 'home',
  previousScreen: 'home',
  searchQuery: '',
  newCategoryType: null,
};

function navigationReducer(state: NavigationState, action: NavigationAction): NavigationState {
  switch (action.type) {
    case 'NAVIGATE_TO':
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: action.screen,
      };
    case 'GO_BACK':
      return {
        ...state,
        currentScreen: state.previousScreen,
        previousScreen: 'home',
        newCategoryType: null,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        searchQuery: action.query,
      };
    case 'SHOW_NEW_CATEGORY':
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: 'new-category',
        newCategoryType: action.categoryType,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// 📊 CATEGORY CONFIGURATION (moved outside component to prevent re-creation)
const CATEGORIES = [
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
  { id: 'self-drive', icon: Car, name: 'Self-Drive', gradient: 'from-orange-400 to-amber-500', featured: true },
];

// 🎨 LOADING FALLBACK COMPONENT
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4"
        />
        <p className="text-purple-600 font-semibold">Loading...</p>
      </div>
    </div>
  );
}

export function MainHome({ userData, onNavigate, onShowComboTour }: MainHomeProps) {
  const [state, dispatch] = useReducer(navigationReducer, initialState);

  const handleGoogleSearch = () => {
    const query = state.searchQuery || 'tourist destinations india';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const query = state.searchQuery || 'travel destinations india';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  const handleCategorySelect = (target: string) => {
    try {
      dispatch({ type: 'NAVIGATE_TO', screen: 'home' }); // Close overlay first
      
      // Map category targets to screens
      const screenMap: Record<string, Screen> = {
        'devotional': 'devotional',
        'adventure': 'adventure',
        'wellness': 'senior',
        'educational': 'educational',
        'honeymoon': 'honeymoon',
        'senior': 'senior',
        'cruise': 'cruise',
        'corporate': 'corporate',
        'sports': 'sports',
        'self-drive': 'self-drive',
      };

      const screen = screenMap[target];
      if (screen) {
        dispatch({ type: 'NAVIGATE_TO', screen });
      } else if (target === 'NEW') {
        dispatch({ type: 'SHOW_NEW_CATEGORY', categoryType: 'other' });
      } else {
        console.warn('Unknown category target:', target);
      }
    } catch (error) {
      console.error('Error handling category selection:', error);
    }
  };

  const handleBack = () => {
    dispatch({ type: 'GO_BACK' });
  };

  // 🎯 POPULAR COMBINATIONS - Quick Select Handler
  const handleQuickSelectCombo = (comboId: string, categoryIds: string[]) => {
    if (comboId === 'custom-mix' || categoryIds.length === 0) {
      // Open full category selection overlay
      dispatch({ type: 'NAVIGATE_TO', screen: 'combo-tour' });
    } else {
      // Quick-start with pre-selected categories
      // TODO: Pass pre-selected categories to ComboTourFlow
      // For now, just open the combo tour flow
      dispatch({ type: 'NAVIGATE_TO', screen: 'combo-tour' });
    }
  };

  // 🎭 RENDER SCREENS BASED ON STATE
  if (state.currentScreen === 'new-category' && state.newCategoryType) {
    return (
      <NewCategoryScreen 
        onBack={handleBack} 
        categoryType={state.newCategoryType}
      />
    );
  }

  if (state.currentScreen === 'adventure') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <AdventureTourismHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'devotional') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <DevotionalTourismHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'educational') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <EducationalTourismHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'corporate') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <CorporateMICEHubEnhanced onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'cruise') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <CruiseTourismHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'honeymoon') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <HoneymoonHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'sports') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <SportsTourismHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'senior' || state.currentScreen === 'wellness' || state.currentScreen === 'health') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <SeniorWellnessHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'heritage' || state.currentScreen === 'eco') {
    // Heritage and Eco Tourism redirect to Devotional for now (can create dedicated hubs later)
    return (
      <Suspense fallback={<LoadingFallback />}>
        <DevotionalTourismHub onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'self-drive') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <SelfDriveFlow onBack={handleBack} />
      </Suspense>
    );
  }

  if (state.currentScreen === 'essentials') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <TravelEssentialsHub 
          onBack={handleBack} 
          onNavigateToSelfDrive={() => dispatch({ type: 'NAVIGATE_TO', screen: 'self-drive' })}
        />
      </Suspense>
    );
  }

  // 🏠 HOME SCREEN
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 pb-20">
      <div className="px-6 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, {userData?.name || 'Traveler'}! 🙏
            </h1>
            <p className="text-sm text-gray-600">Discover incredible India</p>
          </div>
          <button
            onClick={() => onNavigate?.('profile')}
            className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
          >
            {userData?.name?.charAt(0) || 'U'}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search destinations, experiences..."
              value={state.searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH', query: e.target.value })}
              className="pl-12 pr-4 h-14 rounded-full bg-white border-0 shadow-md text-base"
            />
          </div>
          <div className="flex gap-3 mt-3">
            <Button
              onClick={handleGoogleSearch}
              className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-10 flex items-center justify-center gap-2 shadow-md"
            >
              <Globe className="w-4 h-4" />
              Google Search
            </Button>
            <Button
              onClick={handleYouTubeSearch}
              className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-10 flex items-center justify-center gap-2 shadow-md"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </Button>
          </div>
        </div>

        {/* Popular Combinations Section */}
        <PopularCombinations onQuickSelect={handleQuickSelectCombo} />

        {/* Grok AI Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-6 mb-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-white font-bold text-lg mb-1">Grok AI Assistant</h2>
              <p className="text-white/90 text-sm">Plan your perfect multi-category tour</p>
            </div>
            <Button 
              onClick={() => dispatch({ type: 'NAVIGATE_TO', screen: 'combo-tour' })}
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full h-10 px-5 font-semibold shadow-md"
            >
              Start Planning
            </Button>
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
                onClick={() => dispatch({ type: 'NAVIGATE_TO', screen: 'category-overlay' })}
                className="bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                <p className="font-semibold text-sm">Single Category</p>
                <p className="text-xs text-gray-600 mt-1">Browse by interest</p>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch({ type: 'NAVIGATE_TO', screen: 'combo-tour' })}
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
              onClick={() => dispatch({ type: 'NAVIGATE_TO', screen: 'essentials' })}
              className="w-full bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Car className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold">Travel Essentials</p>
                <p className="text-xs text-gray-600">Transport, guides & more</p>
              </div>
              <Bell className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Trending Now */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Trending Now</h2>
            <button className="text-sm text-purple-600 font-semibold">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {['Adventure', 'Devotional', 'Beach Honeymoon'].map((trend, idx) => (
              <motion.div
                key={trend}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-40 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-4 shadow-lg flex flex-col justify-between"
              >
                <TrendingUp className="w-5 h-5 text-white" />
                <p className="text-white font-semibold text-sm">{trend}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Browse Categories */}
        <div>
          <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.map((category, idx) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const screen = category.id as Screen;
                  dispatch({ type: 'NAVIGATE_TO', screen });
                }}
                className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-4 shadow-md hover:shadow-lg transition-all aspect-square flex flex-col items-center justify-center text-center relative`}
              >
                {category.featured && (
                  <div className="absolute top-1 right-1 bg-yellow-400 text-yellow-900 text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                    NEW
                  </div>
                )}
                <category.icon className="w-8 h-8 text-white mb-2" />
                <p className="text-white text-xs font-semibold leading-tight">{category.name}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Selection Overlay */}
      <CategorySelectionOverlay
        isOpen={state.currentScreen === 'category-overlay'}
        onClose={handleBack}
        onSelectCategory={handleCategorySelect}
      />

      {/* Combo Tour Flow */}
      <ComboTourFlow
        isOpen={state.currentScreen === 'combo-tour'}
        onClose={handleBack}
        onNavigateToCategory={handleCategorySelect}
      />

      {/* Interest Tracker Icon */}
      <InterestTrackerIcon />
    </div>
  );
}
