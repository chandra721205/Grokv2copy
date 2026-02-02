import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Search,
  Mountain,
  Globe,
  Youtube,
  Sparkles,
  Calendar,
  Star,
  ChevronRight,
  Heart,
  Waves,
  Wind,
  Bike,
  Bell,
  Shield,
  Users,
  Phone,
  Map,
  AlertTriangle,
  Clock,
  TrendingUp,
  User,
  CheckCircle2,
  Plus,
  Minus
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';
import { PersonalizedDealsAlert } from '@/app/components/shared/PersonalizedDealsAlert';
import { ComboTourPlanner } from '@/app/components/planning/ComboTourPlanner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner'; // 🆕 RECTIFIED: Added for toast notifications
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'; // 🆕 RECTIFIED: Added for Google/YouTube overlays

// ========================================
// ADVENTURE TOURISM HUB – RECTIFIED (BROWSE + INTEREST CAPTURE)
// ========================================
// 
// 📋 RECTIFIED COMPLETE FLOW VERSION
// Main landing screen with 6 sub-categories
// All content uses admin-editable placeholders
//
// 🎯 NEW FEATURES IN RECTIFIED VERSION:
// 1. ✅ Google Search Dialog Overlay (Mock Results)
// 2. ✅ YouTube Browse Dialog Overlay (Mock Videos)
// 3. ✅ Wishlist Save Toast Notifications
// 4. ✅ Notify Me Toast Confirmations
// 5. ✅ Interest Submit Toast Confirmations
//
// 📝 See: /ADVENTURE_TOURISM_RECTIFIED_DOCUMENTATION.md for full details
// ========================================

type AdventureScreen = 'hub' | 'trekking' | 'water-sports' | 'rock-climbing' | 'wildlife' | 'air-sports' | 'cycling' | 'senior';

interface AdventureTourismHubProps {
  onBack: () => void;
}

export function AdventureTourismHub({ onBack }: AdventureTourismHubProps) {
  const [currentScreen, setCurrentScreen] = useState<AdventureScreen>('hub');
  const [showPlanner, setShowPlanner] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetRange, setBudgetRange] = useState('[Admin: Budget Option 2]');
  const [tripDuration, setTripDuration] = useState<string[]>([]);
  const [dealAlertEnabled, setDealAlertEnabled] = useState(false);
  const [notificationMethod, setNotificationMethod] = useState('WhatsApp');
  const [adventureTypes, setAdventureTypes] = useState<string[]>([]);
  const [difficultyLevels, setDifficultyLevels] = useState<string[]>([]);
  const [groupPreferences, setGroupPreferences] = useState<string[]>([]);
  const [accommodation, setAccommodation] = useState<string[]>([]);
  
  // 🆕 RECTIFIED STATE: Dialog control for mock overlays
  const [showGoogleDialog, setShowGoogleDialog] = useState(false);
  const [showYouTubeDialog, setShowYouTubeDialog] = useState(false);
  
  // 🆕 UI/UX RECTIFICATION: Filter states
  const [difficultyFilter, setDifficultyFilter] = useState<string[]>([]);
  const [stateRegionFilter, setStateRegionFilter] = useState('');
  const [seniorFriendlyOnly, setSeniorFriendlyOnly] = useState(false);
  
  // 🆕 UI/UX RECTIFICATION: Booking flow states
  const [bookingStep, setBookingStep] = useState(1);
  const [preferredDate, setPreferredDate] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [selectedGear, setSelectedGear] = useState<string[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedGuide, setSelectedGuide] = useState('');
  const [medicalFitnessConfirmed, setMedicalFitnessConfirmed] = useState(false);
  const [adventureInsurance, setAdventureInsurance] = useState(false);
  const [paymentOption, setPaymentOption] = useState('full');

  const toggleTripDuration = (duration: string) => {
    if (tripDuration.includes(duration)) {
      setTripDuration(tripDuration.filter(d => d !== duration));
    } else {
      setTripDuration([...tripDuration, duration]);
    }
  };

  const toggleAdventureType = (type: string) => {
    if (adventureTypes.includes(type)) {
      setAdventureTypes(adventureTypes.filter(t => t !== type));
    } else {
      setAdventureTypes([...adventureTypes, type]);
    }
  };

  const toggleDifficultyLevel = (level: string) => {
    if (difficultyLevels.includes(level)) {
      setDifficultyLevels(difficultyLevels.filter(l => l !== level));
    } else {
      setDifficultyLevels([...difficultyLevels, level]);
    }
  };

  const toggleGroupPreference = (pref: string) => {
    if (groupPreferences.includes(pref)) {
      setGroupPreferences(groupPreferences.filter(p => p !== pref));
    } else {
      setGroupPreferences([...groupPreferences, pref]);
    }
  };

  const toggleAccommodation = (acc: string) => {
    if (accommodation.includes(acc)) {
      setAccommodation(accommodation.filter(a => a !== acc));
    } else {
      setAccommodation([...accommodation, acc]);
    }
  };

  // 🆕 RECTIFIED FUNCTION: Shows dialog overlay instead of opening external tab
  const handleGoogleSearch = (customQuery?: string) => {
    setShowGoogleDialog(true);
  };

  // 🆕 RECTIFIED FUNCTION: Shows dialog overlay instead of opening external tab
  const handleYouTubeSearch = (customQuery?: string) => {
    setShowYouTubeDialog(true);
  };

  if (showPlanner) {
    return <ComboTourPlanner onBack={() => setShowPlanner(false)} />;
  }

  // Sub-screen renderers
  if (currentScreen === 'trekking') {
    return <TrekkingMountaineeringScreen onBack={() => setCurrentScreen('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (currentScreen === 'water-sports') {
    return <WaterSportsScreen onBack={() => setCurrentScreen('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (currentScreen === 'rock-climbing') {
    return <RockClimbingScreen onBack={() => setCurrentScreen('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (currentScreen === 'wildlife') {
    return <WildlifeSafariScreen onBack={() => setCurrentScreen('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (currentScreen === 'air-sports') {
    return <AirSportsScreen onBack={() => setCurrentScreen('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (currentScreen === 'cycling') {
    return <CyclingBikingScreen onBack={() => setCurrentScreen('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (currentScreen === 'senior') {
    return <SeniorFriendlyScreen onBack={() => setCurrentScreen('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  // Main Hub Screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Purple Admin Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm"
            aria-label="View Journey Map"
          >
            <Map className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">[Admin: Journey Map]</span>
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Mountain className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              [Admin: Adventure Tourism]
            </h1>
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
              [Admin: Thrilling Experiences Await]
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="[Admin: Search adventure activities...]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 h-12 rounded-full bg-white border-0 shadow-lg"
          />
        </div>

        {/* Google/YouTube Buttons */}
        <div className="flex gap-3 mb-3">
          <Button
            onClick={() => handleGoogleSearch('[Admin: Adventure Activities India]')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => handleYouTubeSearch('[Admin: Adventure Tourism Videos]')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>

        <div className="flex items-center gap-2 text-white/70 text-xs">
          <Sparkles className="w-4 h-4" />
          <span>[Admin: Search & use Google/YouTube to discover real adventures]</span>
        </div>
      </div>

      {/* 🆕 UI/UX RECTIFICATION: Safety First Banner */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-3xl shadow-lg p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">[Admin: Safety First]</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs font-semibold text-gray-700">[Admin: Certified Guides]</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-xs font-semibold text-gray-700">[Admin: Safety Gear Included]</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-xs font-semibold text-gray-700">[Admin: 24/7 Medical Support]</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        {/* Deal Alert */}
        <div className="-mt-6 mb-6">
          <PersonalizedDealsAlert
            category="adventure-tourism"
            showAdminIndicators={true}
            onSavePreferences={(data) => console.log('Adventure deal preferences:', data)}
            content={{
              heading: '[Admin: Get Adventure Deal Alerts]',
              description: '[Admin: Set budget for adventure packages]',
              budgetPlaceholder: '[Admin: e.g., ₹50,000 for adventure package]',
              notificationText: '[Admin: Notify me of adventure deals]',
              buttonLabel: '[Admin: Save Adventure Preferences]'
            }}
          />
        </div>

        {/* 6 Sub-Category Cards */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
            [Admin: Explore by Activity Type]
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Trekking & Mountaineering */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentScreen('trekking')}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <Mountain className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Adventure Type 1]
                </h3>
                <p className="text-xs text-gray-600 mt-2">[Admin: Category Description]</p>
              </div>
              {/* 🆕 UI/UX RECTIFICATION: Research Integration */}
              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoogleSearch('[Admin: Trekking India]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Explore on Google"
                  tabIndex={0}
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYouTubeSearch('[Admin: Trekking Videos]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Watch on YouTube"
                  tabIndex={0}
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.button>

            {/* Water Sports */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentScreen('water-sports')}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="h-32 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Waves className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Adventure Type 2]
                </h3>
                <p className="text-xs text-gray-600 mt-2">[Admin: Category Description]</p>
              </div>
              {/* 🆕 UI/UX RECTIFICATION: Research Integration */}
              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoogleSearch('[Admin: Water Sports India]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Explore on Google"
                  tabIndex={0}
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYouTubeSearch('[Admin: Water Sports Videos]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Watch on YouTube"
                  tabIndex={0}
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.button>

            {/* Rock Climbing */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentScreen('rock-climbing')}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="h-32 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                <Mountain className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Adventure Type 3]
                </h3>
                <p className="text-xs text-gray-600 mt-2">[Admin: Category Description]</p>
              </div>
              {/* 🆕 UI/UX RECTIFICATION: Research Integration */}
              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoogleSearch('[Admin: Rock Climbing India]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Explore on Google"
                  tabIndex={0}
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYouTubeSearch('[Admin: Rock Climbing Videos]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Watch on YouTube"
                  tabIndex={0}
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.button>

            {/* Wildlife Safari */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentScreen('wildlife')}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="h-32 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Adventure Type 4]
                </h3>
                <p className="text-xs text-gray-600 mt-2">[Admin: Category Description]</p>
              </div>
              {/* 🆕 UI/UX RECTIFICATION: Research Integration */}
              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoogleSearch('[Admin: Wildlife Safari India]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Explore on Google"
                  tabIndex={0}
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYouTubeSearch('[Admin: Wildlife Safari Videos]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Watch on YouTube"
                  tabIndex={0}
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.button>

            {/* Air Sports */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentScreen('air-sports')}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Wind className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Adventure Type 5]
                </h3>
                <p className="text-xs text-gray-600 mt-2">[Admin: Category Description]</p>
              </div>
              {/* 🆕 UI/UX RECTIFICATION: Research Integration */}
              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoogleSearch('[Admin: Air Sports India]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Explore on Google"
                  tabIndex={0}
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYouTubeSearch('[Admin: Air Sports Videos]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Watch on YouTube"
                  tabIndex={0}
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.button>

            {/* Cycling & Biking */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentScreen('cycling')}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="h-32 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Bike className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Adventure Type 6]
                </h3>
                <p className="text-xs text-gray-600 mt-2">[Admin: Category Description]</p>
              </div>
              {/* 🆕 UI/UX RECTIFICATION: Research Integration */}
              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoogleSearch('[Admin: Cycling Adventures]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Explore on Google"
                  tabIndex={0}
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYouTubeSearch('[Admin: Cycling Videos]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Watch on YouTube"
                  tabIndex={0}
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.button>

            {/* 🆕 UI/UX RECTIFICATION: Soft Adventure – Senior Friendly */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentScreen('senior')}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="h-32 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Soft Adventure – Senior Friendly]
                </h3>
                <p className="text-xs text-gray-600 mt-2">[Admin: Gentle activities for all ages]</p>
              </div>
              {/* 🆕 UI/UX RECTIFICATION: Research Integration */}
              <div className="absolute top-2 right-2 flex gap-2">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGoogleSearch('[Admin: Senior Friendly Adventures]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Explore on Google"
                  tabIndex={0}
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleYouTubeSearch('[Admin: Senior Adventure Videos]');
                  }}
                  className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all cursor-pointer"
                  role="button"
                  aria-label="Watch on YouTube"
                  tabIndex={0}
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPlanner(true)}
            className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-sm mb-1">[Admin: Action Button 1]</h3>
            <p className="text-xs text-gray-600">[Admin: Button Description]</p>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleGoogleSearch()}
            className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-3">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-sm mb-1">[Admin: Action Button 2]</h3>
            <p className="text-xs text-gray-600">[Admin: Button Description]</p>
          </motion.button>
        </div>

        {/* Adventure Preferences Section */}
        <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
            [Admin: Adventure Preferences]
          </h2>

          <div className="space-y-5">
            {/* Budget Range */}
            <div>
              <label className="block text-sm font-semibold mb-3 bg-gray-100 px-2 py-1 rounded inline-block">
                [Admin: Budget Range]
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['[Admin: Budget Option 1]', '[Admin: Budget Option 2]', '[Admin: Budget Option 3]'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setBudgetRange(option)}
                    className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                      budgetRange === option
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Duration Preference */}
            <div>
              <label className="block text-sm font-semibold mb-3 bg-gray-100 px-2 py-1 rounded inline-block">
                [Admin: Trip Duration Preference]
              </label>
              <div className="flex gap-2">
                {['1-2 days', '3-5 days', '6+ days'].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => toggleTripDuration(duration)}
                    className={`flex-1 px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                      tripDuration.includes(duration)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>

            {/* Deal Alert Toggle */}
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-2xl">
              <div className="flex-1">
                <label htmlFor="deal-alert" className="font-semibold text-sm text-gray-900 cursor-pointer">
                  Notify me when deals match my preferences
                </label>
                <p className="text-xs text-gray-600 mt-1">[Admin: Deal Alert Description]</p>
              </div>
              <Switch
                id="deal-alert"
                checked={dealAlertEnabled}
                onCheckedChange={setDealAlertEnabled}
              />
            </div>

            {/* Notification Method */}
            {dealAlertEnabled && (
              <div>
                <label className="block text-sm font-semibold mb-3 bg-gray-100 px-2 py-1 rounded inline-block">
                  [Admin: Notification Method Label]
                </label>
                <Select value={notificationMethod} onValueChange={setNotificationMethod}>
                  <SelectTrigger className="w-full h-12 rounded-2xl">
                    <SelectValue placeholder="Select notification method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                    <SelectItem value="SMS">SMS</SelectItem>
                    <SelectItem value="Email">Email</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Save Preferences Button */}
            <Button
              onClick={() => console.log('Preferences saved:', { budgetRange, tripDuration, dealAlertEnabled, notificationMethod })}
              className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 h-12 font-bold"
            >
              <Bell className="w-4 h-4 mr-2" />
              [Admin: Save Preferences Button]
            </Button>
          </div>
        </div>

        {/* Adventure Experience Preferences Section */}
        <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
            [Admin: Adventure Experience Preferences]
          </h2>

          <div className="space-y-5">
            {/* Adventure Types */}
            <div>
              <label className="block text-sm font-semibold mb-3 bg-gray-100 px-2 py-1 rounded inline-block">
                [Admin: Adventure Types Label]
              </label>
              <div className="flex flex-wrap gap-2">
                {['Trekking', 'Water Sports', 'Rock Climbing', 'Wildlife Safari', 'Air Sports', 'Cycling'].map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleAdventureType(type)}
                    className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                      adventureTypes.includes(type)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Levels */}
            <div>
              <label className="block text-sm font-semibold mb-3 bg-gray-100 px-2 py-1 rounded inline-block">
                [Admin: Difficulty Levels Label]
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level) => (
                  <button
                    key={level}
                    onClick={() => toggleDifficultyLevel(level)}
                    className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                      difficultyLevels.includes(level)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Group Preferences */}
            <div>
              <label className="block text-sm font-semibold mb-3 bg-gray-100 px-2 py-1 rounded inline-block">
                [Admin: Group Preferences Label]
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Solo', 'Couple', 'Small Group', 'Large Group'].map((pref) => (
                  <button
                    key={pref}
                    onClick={() => toggleGroupPreference(pref)}
                    className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                      groupPreferences.includes(pref)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            </div>

            {/* Accommodation */}
            <div>
              <label className="block text-sm font-semibold mb-3 bg-gray-100 px-2 py-1 rounded inline-block">
                [Admin: Accommodation Label]
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Camping', 'Lodge', 'Luxury', 'Basic'].map((acc) => (
                  <button
                    key={acc}
                    onClick={() => toggleAccommodation(acc)}
                    className={`px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                      accommodation.includes(acc)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {acc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 🆕 UI/UX RECTIFICATION: Health & Safety Guidelines */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-lg font-bold text-red-900">[Admin: Health & Safety Guidelines]</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Mountain className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-sm text-gray-900">[Admin: High-Altitude Adventures (3000m+)]</h3>
              </div>
              <p className="text-xs text-gray-600 pl-8">[Admin: Acclimatization required. Consult physician before booking.]</p>
            </div>
            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-sm text-gray-900">[Admin: Medical Fitness Requirement]</h3>
              </div>
              <p className="text-xs text-gray-600 pl-8">[Admin: Medical certificate may be required for certain activities.]</p>
            </div>
            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-sm text-gray-900">[Admin: Age Restrictions]</h3>
              </div>
              <p className="text-xs text-gray-600 pl-8">[Admin: Minimum age varies by activity. Check specific requirements.]</p>
            </div>
          </div>
        </div>

        {/* Admin Guidance */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-6 mb-6">
          <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            [Admin: Editing Guide Title]
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>[Admin: Guide Section 1]:</strong> [Admin: Guide Text 1]</p>
            <p><strong>[Admin: Guide Section 2]:</strong> [Admin: Guide Text 2]</p>
            <p><strong>[Admin: Guide Section 3]:</strong> [Admin: Guide Text 3]</p>
            <p><strong>[Admin: Guide Section 4]:</strong> [Admin: Guide Text 4]</p>
          </div>
        </div>
      </div>

      {/* ========================================
          🆕 RECTIFIED FEATURE: Google Search Mock Overlay
          Replaces external tab opening with in-app dialog
          ======================================== */}
      <Dialog open={showGoogleDialog} onOpenChange={setShowGoogleDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Mock Google Adventure Results</DialogTitle>
            <DialogDescription className="text-sm text-gray-600 mt-2">
              [Admin: Adventure Search Results Placeholder]
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button
              onClick={() => setShowGoogleDialog(false)}
              className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ========================================
          🆕 RECTIFIED FEATURE: YouTube Browse Mock Overlay
          Replaces external tab opening with in-app dialog
          ======================================== */}
      <Dialog open={showYouTubeDialog} onOpenChange={setShowYouTubeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Mock YouTube Adventure Videos</DialogTitle>
            <DialogDescription className="text-sm text-gray-600 mt-2">
              [Admin: Adventure Video Results Placeholder]
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button
              onClick={() => setShowYouTubeDialog(false)}
              className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ========================================
// SUB-SCREEN 1: TREKKING & MOUNTAINEERING
// ========================================
interface SubScreenProps {
  onBack: () => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

function TrekkingMountaineeringScreen({ onBack, onGoogleSearch, onYouTubeSearch }: SubScreenProps) {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [wishlistItems, setWishlistItems] = useState<Set<string>>(new Set());
  const [activityNotes, setActivityNotes] = useState<Record<string, string>>({});

  // 🆕 RECTIFIED FUNCTION: Added toast notification on wishlist add
  const toggleWishlist = (activityId: string) => {
    const newWishlist = new Set(wishlistItems);
    if (newWishlist.has(activityId)) {
      newWishlist.delete(activityId);
    } else {
      newWishlist.add(activityId);
      // 🆕 RECTIFIED: Toast confirmation for wishlist save
      toast.success("Adventure interest saved! We'll notify you about similar adventures");
    }
    setWishlistItems(newWishlist);
  };

  const updateNotes = (activityId: string, notes: string) => {
    setActivityNotes({ ...activityNotes, [activityId]: notes });
  };

  const activities = [
    {
      id: 'trek-1',
      name: '[Admin: Adventure Destination 1]',
      region: '[Admin: Region 1]',
      difficulty: '[Admin: Difficulty Level]',
      duration: '[Admin: Duration]',
      price: '[Admin: Price Example]',
      rating: 4.8,
      reviews: 234,
      bestSeason: '[Admin: Best Season]',
      altitude: '[Admin: Altitude Info]',
      highlights: ['[Admin: Highlight 1]', '[Admin: Highlight 2]', '[Admin: Highlight 3]']
    },
    {
      id: 'trek-2',
      name: '[Admin: Adventure Destination 2]',
      region: '[Admin: Region 2]',
      difficulty: '[Admin: Difficulty Level]',
      duration: '[Admin: Duration]',
      price: '[Admin: Price Example]',
      rating: 4.9,
      reviews: 567,
      bestSeason: '[Admin: Best Season]',
      altitude: '[Admin: Altitude Info]',
      highlights: ['[Admin: Highlight 1]', '[Admin: Highlight 2]', '[Admin: Highlight 3]']
    },
    {
      id: 'trek-3',
      name: '[Admin: Adventure Destination 3]',
      region: '[Admin: Region 3]',
      difficulty: '[Admin: Difficulty Level]',
      duration: '[Admin: Duration]',
      price: '[Admin: Price Example]',
      rating: 4.7,
      reviews: 189,
      bestSeason: '[Admin: Best Season]',
      altitude: '[Admin: Altitude Info]',
      highlights: ['[Admin: Highlight 1]', '[Admin: Highlight 2]', '[Admin: Highlight 3]']
    }
  ];

  if (selectedActivity) {
    const activity = activities.find(a => a.id === selectedActivity);
    if (activity) {
      return (
        <ActivityDetailScreen
          activity={activity}
          onBack={() => setSelectedActivity(null)}
          onGoogleSearch={onGoogleSearch}
          onYouTubeSearch={onYouTubeSearch}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Mountain className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              [Admin: Adventure Type 1 Title]
            </h1>
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
              [Admin: Adventure Type 1 Tagline]
            </p>
          </div>
        </div>

        <div className="flex gap-3 mb-3">
          <Button
            onClick={() => onGoogleSearch('[Admin: Search Query 1]')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => onYouTubeSearch('[Admin: Video Query 1]')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6">
        <div className="-mt-6 mb-6">
          <PersonalizedDealsAlert
            category="trekking"
            showAdminIndicators={true}
            onSavePreferences={(data) => console.log('Trekking preferences:', data)}
            content={{
              heading: '[Admin: Deal Alert Heading]',
              description: '[Admin: Deal Alert Description]',
              budgetPlaceholder: '[Admin: Budget Placeholder]',
              notificationText: '[Admin: Notification Text]',
              buttonLabel: '[Admin: Button Label]'
            }}
          />
        </div>

        {/* Activity Cards */}
        <div className="space-y-4 mb-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all relative"
            >
              <div className="absolute top-6 right-6">
                <InterestTrackerIcon
                  destinationId={activity.id}
                  destinationName={activity.name}
                  category="adventure-trekking"
                  size="md"
                />
              </div>

              <div className="flex items-start gap-4 mb-4 pr-12">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                    {activity.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">[Admin: Region Label]:</span>{' '}
                    <span className="bg-gray-100 px-2 py-0.5 rounded">{activity.region}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-orange-50 rounded-2xl p-3">
                  <p className="text-xs font-semibold text-orange-700 mb-1">[Admin: Difficulty Label]</p>
                  <p className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">{activity.difficulty}</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-3">
                  <p className="text-xs font-semibold text-blue-700 mb-1">[Admin: Duration Label]</p>
                  <p className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">{activity.duration}</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-3 mb-4">
                <p className="text-xs font-semibold text-green-700 mb-2">[Admin: Highlights Label]:</p>
                <div className="flex flex-wrap gap-2">
                  {activity.highlights.map((highlight, i) => (
                    <Badge key={i} className="bg-gray-100 text-green-700 border-green-300 text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">[Admin: Rating Label]</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{activity.rating}</span>
                    <span className="text-xs text-gray-500">({activity.reviews} [Admin: Reviews Text])</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">[Admin: Price Label]</p>
                  <p className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    {activity.price}
                  </p>
                </div>
              </div>

              {/* Adventure Notes Input */}
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Adventure Notes: fitness level, risk comfort, must-haves"
                  value={activityNotes[activity.id] || ''}
                  onChange={(e) => updateNotes(activity.id, e.target.value)}
                  className="w-full h-10 text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mb-3">
                <Button
                  onClick={() => toggleWishlist(activity.id)}
                  variant="outline"
                  className="flex-1 rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 h-11"
                >
                  <Heart className={`w-4 h-4 mr-2 ${wishlistItems.has(activity.id) ? 'fill-current' : ''}`} />
                  Save to Adventure Wishlist
                </Button>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => setSelectedActivity(activity.id)}
                  className="flex-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 h-11"
                >
                  Browse Details
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// ACTIVITY DETAIL SCREEN (Used by all sub-categories)
// ========================================
interface ActivityDetailScreenProps {
  activity: any;
  onBack: () => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

function ActivityDetailScreen({ activity, onBack, onGoogleSearch, onYouTubeSearch }: ActivityDetailScreenProps) {
  const [showBookingFlow, setShowBookingFlow] = useState(false);

  if (showBookingFlow) {
    return (
      <BookingFlowScreen
        activity={activity}
        onBack={() => setShowBookingFlow(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Mountain className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold bg-white/10 px-3 py-1 rounded inline-block">
              {activity.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="-mt-6 mb-6 bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
            [Admin: About This Adventure]
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed bg-gray-100 px-3 py-2 rounded">
            [Admin: Detailed description of the adventure activity. This should include what makes it unique, what participants can expect, and why it's worth experiencing. Replace this placeholder text with compelling copy that inspires bookings.]
          </p>
        </div>

        {/* Key Details */}
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <h3 className="font-bold text-lg mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
            [Admin: Key Details]
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">[Admin: Region Label]</p>
              <p className="font-semibold bg-gray-100 px-2 py-1 rounded">{activity.region}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">[Admin: Difficulty Label]</p>
              <p className="font-semibold bg-gray-100 px-2 py-1 rounded">{activity.difficulty}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">[Admin: Duration Label]</p>
              <p className="font-semibold bg-gray-100 px-2 py-1 rounded">{activity.duration}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">[Admin: Best Season Label]</p>
              <p className="font-semibold bg-gray-100 px-2 py-1 rounded">{activity.bestSeason}</p>
            </div>
          </div>
        </div>

        {/* Browse Buttons */}
        <div className="flex gap-2 mb-6">
          <Button
            onClick={() => onGoogleSearch(`${activity.name} adventure booking`)}
            className="flex-1 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-11"
          >
            <Globe className="w-4 h-4 mr-2" />
            [Admin: Google Button Text]
          </Button>
          <Button
            onClick={() => onYouTubeSearch(`${activity.name} adventure experience`)}
            className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-11"
          >
            <Youtube className="w-4 h-4 mr-2" />
            [Admin: YouTube Button Text]
          </Button>
        </div>

        {/* 🆕 RECTIFIED: Notify Me Button with toast confirmation */}
        <Button
          onClick={() => {
            // 🆕 RECTIFIED: Show toast notification before proceeding
            toast.success("We'll notify you when admin-published adventure deals match your preferences");
            setTimeout(() => setShowBookingFlow(true), 1500);
          }}
          className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 h-14 text-lg font-bold shadow-xl"
        >
          Notify Me / Request Adventure
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// ========================================
// 4-STEP BOOKING FLOW
// ========================================
interface BookingFlowScreenProps {
  activity: any;
  onBack: () => void;
}

function BookingFlowScreen({ activity, onBack }: BookingFlowScreenProps) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    groupSize: 1,
    gearRental: [],
    guideNeeded: false,
    guideName: ''
  });

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SelectDateAndGroup bookingData={bookingData} setBookingData={setBookingData} onNext={() => setStep(2)} />;
      case 2:
        return <GearRentalStep bookingData={bookingData} setBookingData={setBookingData} onNext={() => setStep(3)} onBack={() => setStep(1)} />;
      case 3:
        return <SafetyAndGuideStep bookingData={bookingData} setBookingData={setBookingData} onNext={() => setStep(4)} onBack={() => setStep(2)} />;
      case 4:
        return <ReviewAndPayStep bookingData={bookingData} activity={activity} onBack={() => setStep(3)} onComplete={onBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <h1 className="text-white text-2xl font-bold mb-2 bg-white/10 px-3 py-1 rounded inline-block">
          [Admin: Booking Flow Title]
        </h1>
        <p className="text-white/90 text-sm">{activity.name}</p>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full ${
                s <= step ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-white/70 text-xs">
          <span className="bg-white/10 px-2 py-0.5 rounded">Interest Preferences 1</span>
          <span className="bg-white/10 px-2 py-0.5 rounded">Equipment Interest</span>
          <span className="bg-white/10 px-2 py-0.5 rounded">Safety Preferences</span>
          <span className="bg-white/10 px-2 py-0.5 rounded">Interest Summary</span>
        </div>
      </div>

      <div className="px-6 -mt-6">
        {renderStep()}
      </div>
    </div>
  );
}

// Step 1: Select Date & Group Size
function SelectDateAndGroup({ bookingData, setBookingData, onNext }: any) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
      <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
        Preferred Adventure Timeframe
      </h2>

      {/* Google/YouTube Chips */}
      <div className="flex gap-2 mb-4">
        <Button
          onClick={() => window.open('https://www.google.com/search?q=' + encodeURIComponent('[Admin: Adventure Booking Tips]'), '_blank')}
          className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full h-9 text-xs"
        >
          <Globe className="w-3.5 h-3.5 mr-1.5" />
          Google Search
        </Button>
        <Button
          onClick={() => window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent('[Admin: Adventure Booking Guide]'), '_blank')}
          className="flex-1 bg-white border border-red-600 text-red-600 hover:bg-red-50 rounded-full h-9 text-xs"
        >
          <Youtube className="w-3.5 h-3.5 mr-1.5" />
          YouTube Browse
        </Button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
            [Admin: Preferred Timeframe]
          </label>
          <Input
            type="date"
            value={bookingData.date}
            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
            [Admin: Group Configuration]
          </label>
          <Input
            type="number"
            min="1"
            value={bookingData.groupSize}
            onChange={(e) => setBookingData({ ...bookingData, groupSize: parseInt(e.target.value) })}
            className="w-full"
          />
        </div>

        <Button
          onClick={onNext}
          disabled={!bookingData.date}
          className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 h-12"
        >
          Save Interest & Continue
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// Step 2: Gear Rental
function GearRentalStep({ bookingData, setBookingData, onNext, onBack }: any) {
  const gearItems = [
    { id: 'gear-1', name: '[Admin: Equipment Item 1]', price: '[Admin: Price]' },
    { id: 'gear-2', name: '[Admin: Equipment Item 2]', price: '[Admin: Price]' },
    { id: 'gear-3', name: '[Admin: Equipment Item 3]', price: '[Admin: Price]' },
    { id: 'gear-4', name: '[Admin: Equipment Item 4]', price: '[Admin: Price]' }
  ];

  const toggleGear = (gearId: string) => {
    const current = bookingData.gearRental || [];
    const updated = current.includes(gearId)
      ? current.filter((id: string) => id !== gearId)
      : [...current, gearId];
    setBookingData({ ...bookingData, gearRental: updated });
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
      <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
        Browse Adventure Equipment
      </h2>

      {/* Google/YouTube Chips */}
      <div className="flex gap-2 mb-4">
        <Button
          onClick={() => window.open('https://www.google.com/search?q=' + encodeURIComponent('[Admin: Adventure Gear Guide]'), '_blank')}
          className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full h-9 text-xs"
        >
          <Globe className="w-3.5 h-3.5 mr-1.5" />
          Google Search
        </Button>
        <Button
          onClick={() => window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent('[Admin: Adventure Gear Reviews]'), '_blank')}
          className="flex-1 bg-white border border-red-600 text-red-600 hover:bg-red-50 rounded-full h-9 text-xs"
        >
          <Youtube className="w-3.5 h-3.5 mr-1.5" />
          YouTube Browse
        </Button>
      </div>

      <div className="space-y-3 mb-6">
        {gearItems.map((gear) => (
          <div
            key={gear.id}
            onClick={() => toggleGear(gear.id)}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
              (bookingData.gearRental || []).includes(gear.id)
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold bg-gray-100 px-2 py-1 rounded inline-block">{gear.name}</p>
                <p className="text-sm text-gray-600 mt-1">{gear.price}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 ${
                (bookingData.gearRental || []).includes(gear.id)
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-300'
              }`}>
                {(bookingData.gearRental || []).includes(gear.id) && (
                  <div className="w-full h-full flex items-center justify-center text-white text-xs">✓</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 rounded-full h-12"
        >
          [Admin: Back Button]
        </Button>
        <Button
          onClick={onNext}
          className="flex-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 h-12"
        >
          Save Interest & Continue
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// Step 3: Safety & Guide
function SafetyAndGuideStep({ bookingData, setBookingData, onNext, onBack }: any) {
  const guides = [
    { id: 'guide-1', name: '[Admin: Certified Guide 1]', experience: '[Admin: Years Experience]', rating: 4.9 },
    { id: 'guide-2', name: '[Admin: Certified Guide 2]', experience: '[Admin: Years Experience]', rating: 4.8 },
    { id: 'guide-3', name: '[Admin: Certified Guide 3]', experience: '[Admin: Years Experience]', rating: 4.7 }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
      <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
        Browse Safety & Guide Options
      </h2>

      {/* Google/YouTube Chips */}
      <div className="flex gap-2 mb-4">
        <Button
          onClick={() => window.open('https://www.google.com/search?q=' + encodeURIComponent('[Admin: Adventure Safety Guide]'), '_blank')}
          className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full h-9 text-xs"
        >
          <Globe className="w-3.5 h-3.5 mr-1.5" />
          Google Search
        </Button>
        <Button
          onClick={() => window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent('[Admin: Adventure Safety Videos]'), '_blank')}
          className="flex-1 bg-white border border-red-600 text-red-600 hover:bg-red-50 rounded-full h-9 text-xs"
        >
          <Youtube className="w-3.5 h-3.5 mr-1.5" />
          YouTube Browse
        </Button>
      </div>

      {/* Guide Selection */}
      <div className="mb-6">
        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={bookingData.guideNeeded}
            onChange={(e) => setBookingData({ ...bookingData, guideNeeded: e.target.checked, guideName: '' })}
            className="w-4 h-4"
          />
          <span className="font-semibold bg-gray-100 px-2 py-1 rounded">[Admin: Need Guide Checkbox]</span>
        </label>

        {bookingData.guideNeeded && (
          <div className="space-y-3">
            {guides.map((guide) => (
              <div
                key={guide.id}
                onClick={() => setBookingData({ ...bookingData, guideName: guide.name })}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  bookingData.guideName === guide.name
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold bg-gray-100 px-2 py-1 rounded inline-block">{guide.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{guide.experience}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{guide.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Safety Notice */}
      <div className="bg-blue-50 rounded-2xl p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2 bg-blue-100 px-2 py-1 rounded inline-block">
          [Admin: Safety Notice Title]
        </h3>
        <p className="text-sm text-blue-800 bg-blue-100 px-2 py-1 rounded">
          [Admin: Important safety information and guidelines. This text should include essential safety protocols, emergency procedures, and participant responsibilities. Replace with comprehensive safety details.]
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 rounded-full h-12"
        >
          [Admin: Back Button]
        </Button>
        <Button
          onClick={onNext}
          disabled={bookingData.guideNeeded && !bookingData.guideName}
          className="flex-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 h-12"
        >
          Save Interest & Continue
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// Step 4: Review & Pay
function ReviewAndPayStep({ bookingData, activity, onBack, onComplete }: any) {
  // 🆕 RECTIFIED FUNCTION: Replaced alert() with toast notification
  const handlePayment = () => {
    // In production, integrate with payment gateway
    // 🆕 RECTIFIED: Modern toast instead of browser alert
    toast.success('Your adventure interest has been submitted successfully!');
    setTimeout(() => onComplete(), 1500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl mb-6">
      <h2 className="text-xl font-bold mb-4 bg-gray-100 px-3 py-1 rounded inline-block">
        Adventure Interest Summary
      </h2>

      {/* Google/YouTube Chips */}
      <div className="flex gap-2 mb-4">
        <Button
          onClick={() => window.open('https://www.google.com/search?q=' + encodeURIComponent('[Admin: Adventure Payment Tips]'), '_blank')}
          className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full h-9 text-xs"
        >
          <Globe className="w-3.5 h-3.5 mr-1.5" />
          Google Search
        </Button>
        <Button
          onClick={() => window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent('[Admin: Adventure Booking Reviews]'), '_blank')}
          className="flex-1 bg-white border border-red-600 text-red-600 hover:bg-red-50 rounded-full h-9 text-xs"
        >
          <Youtube className="w-3.5 h-3.5 mr-1.5" />
          YouTube Browse
        </Button>
      </div>

      {/* Booking Summary */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">[Admin: Activity Label]</span>
          <span className="font-semibold bg-gray-100 px-2 py-1 rounded">{activity.name}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">[Admin: Date Label]</span>
          <span className="font-semibold bg-gray-100 px-2 py-1 rounded">{bookingData.date}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">[Admin: Group Size Label]</span>
          <span className="font-semibold bg-gray-100 px-2 py-1 rounded">{bookingData.groupSize} [Admin: People Text]</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">[Admin: Gear Rental Label]</span>
          <span className="font-semibold bg-gray-100 px-2 py-1 rounded">
            {bookingData.gearRental?.length || 0} [Admin: Items Text]
          </span>
        </div>
        {bookingData.guideNeeded && (
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">[Admin: Guide Label]</span>
            <span className="font-semibold bg-gray-100 px-2 py-1 rounded">{bookingData.guideName}</span>
          </div>
        )}
      </div>

      {/* 🆕 RECTIFIED: Interest Notification Message (removed payment section) */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 mb-6 border-2 border-purple-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-purple-900 mb-2 bg-white/60 px-2 py-1 rounded inline-block">
              [Admin: Deal Notification Title]
            </h3>
            <p className="text-sm text-purple-800 bg-white/40 px-2 py-1 rounded">
              [Admin: We'll notify you when admin-published adventures match your preferences. You'll receive exclusive deals and budget-friendly options via your preferred notification method.]
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 rounded-full h-12"
        >
          [Admin: Back Button]
        </Button>
        <Button
          onClick={handlePayment}
          className="flex-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 h-12 font-bold"
        >
          Submit Interest for Deals
        </Button>
      </div>
    </div>
  );
}

// ========================================
// OTHER SUB-SCREENS (Using same pattern)
// ========================================

function WaterSportsScreen({ onBack, onGoogleSearch, onYouTubeSearch }: SubScreenProps) {
  return <TrekkingMountaineeringScreen onBack={onBack} onGoogleSearch={onGoogleSearch} onYouTubeSearch={onYouTubeSearch} />;
}

function RockClimbingScreen({ onBack, onGoogleSearch, onYouTubeSearch }: SubScreenProps) {
  return <TrekkingMountaineeringScreen onBack={onBack} onGoogleSearch={onGoogleSearch} onYouTubeSearch={onYouTubeSearch} />;
}

function WildlifeSafariScreen({ onBack, onGoogleSearch, onYouTubeSearch }: SubScreenProps) {
  return <TrekkingMountaineeringScreen onBack={onBack} onGoogleSearch={onGoogleSearch} onYouTubeSearch={onYouTubeSearch} />;
}

function AirSportsScreen({ onBack, onGoogleSearch, onYouTubeSearch }: SubScreenProps) {
  return <TrekkingMountaineeringScreen onBack={onBack} onGoogleSearch={onGoogleSearch} onYouTubeSearch={onYouTubeSearch} />;
}

function CyclingBikingScreen({ onBack, onGoogleSearch, onYouTubeSearch }: SubScreenProps) {
  return <TrekkingMountaineeringScreen onBack={onBack} onGoogleSearch={onGoogleSearch} onYouTubeSearch={onYouTubeSearch} />;
}

// 🆕 UI/UX RECTIFICATION: Senior-Friendly Adventure Screen
function SeniorFriendlyScreen({ onBack, onGoogleSearch, onYouTubeSearch }: SubScreenProps) {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const seniorActivities = [
    {
      id: 'jeep-safari',
      name: '[Admin: Jeep Safaris]',
      icon: '🚙',
      description: '[Admin: Comfortable wildlife viewing from vehicle]',
      difficulty: 'Easy',
      duration: '[Admin: 2-3 hours]',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'nature-walks',
      name: '[Admin: Easy Nature Walks]',
      icon: '🌳',
      description: '[Admin: Gentle trails with rest points]',
      difficulty: 'Easy',
      duration: '[Admin: 1-2 hours]',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 'boat-rides',
      name: '[Admin: Calm Boat Rides]',
      icon: '⛵',
      description: '[Admin: Peaceful water experiences]',
      difficulty: 'Easy',
      duration: '[Admin: 1-3 hours]',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'scenic-drives',
      name: '[Admin: Scenic Drives]',
      icon: '🏔️',
      description: '[Admin: Beautiful mountain/valley routes]',
      difficulty: 'Easy',
      duration: '[Admin: 3-4 hours]',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      <div className="bg-gradient-to-r from-teal-500 to-green-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              [Admin: Senior-Friendly Adventures]
            </h1>
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
              [Admin: Gentle Activities for All Ages]
            </p>
          </div>
        </div>

        {/* Google/YouTube Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => onGoogleSearch('[Admin: Senior Friendly Adventures]')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => onYouTubeSearch('[Admin: Senior Adventure Videos]')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6 -mt-4">
        {/* Senior Activities Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {seniorActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className={`h-24 bg-gradient-to-br ${activity.gradient} flex items-center justify-center text-4xl`}>
                {activity.icon}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                  {activity.name}
                </h3>
                <p className="text-xs text-gray-600 mt-2 mb-3">{activity.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                    {activity.difficulty}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Senior-Friendly Features Banner */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-3xl p-5 mb-6">
          <h3 className="font-bold text-gray-900 mb-3">[Admin: Why Senior-Friendly?]</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>[Admin: No strenuous physical activity required]</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>[Admin: Wheelchair accessible options available]</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>[Admin: Medical assistance on call]</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>[Admin: Frequent rest stops provided]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}