import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Search,
  Trophy,
  ChevronRight,
  Globe,
  Youtube,
  Sparkles,
  Filter,
  Users,
  Waves,
  Mountain,
  Zap,
  Snowflake,
  Swords,
  Crosshair,
  Activity,
  Brain,
  TrendingUp,
  Eye,
  Dumbbell,
  Play,
  Heart,
  Shield,
  Award,
  AlertCircle,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  CreditCard,
  Phone,
  Info,
  Check,
  X,
  Plus,
  Minus,
  Car,
  Train,
  Bus,
  Plane,
  Bike,
  Target,
  Wind,
  Umbrella,
  Sun,
  CloudRain,
  Thermometer,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface SportsTourismHubProps {
  onBack: () => void;
}

type MainView = 'hub' | 'sport-detail' | 'booking-choice' | 
  'package-selection' | 'customize-request' | 'transport' | 'booking-summary' | 
  'safety-confirmation' | 'price-breakdown' | 'payment' | 'confirmation';

type PlayerMode = 'all' | 'fan' | 'player' | 'learner' | 'adventurer';

// Player Modes Data
const playerModes = [
  {
    id: 'fan',
    emoji: '🏟️',
    name: 'The Fan',
    subtitle: 'Watch Live',
    context: 'Watch famous matches in iconic stadiums.',
    tags: ['Cricket (Eden Gardens)', 'Football (ISL)', 'Museums'],
    difficulty: 'Easy',
    gradient: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'player',
    emoji: '🚴',
    name: 'The Player',
    subtitle: 'Active Fun',
    context: 'Participate for fun.',
    tags: ['Golf Resorts', 'Coastal Cycling', 'Water Sports'],
    difficulty: 'Moderate',
    gradient: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 'learner',
    emoji: '⚽',
    name: 'The Learner',
    subtitle: 'Training',
    context: 'Camps & Academies.',
    tags: ['Cricket Camps', 'Football Clinics'],
    difficulty: 'Hard',
    gradient: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'adventurer',
    emoji: '🧗',
    name: 'The Adventurer',
    subtitle: 'Thrills',
    context: 'High-energy challenges.',
    tags: ['Marathons', 'Paragliding'],
    difficulty: 'Hard',
    gradient: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
  },
];

// 10 Sports Sub-Categories Data
const sportsCategories = [
  {
    id: 'team-sports',
    name: 'Team Sports',
    icon: Users,
    sports: [
      { emoji: '🏀', name: 'Basketball', description: 'Fast-paced' },
      { emoji: '⚽', name: 'Soccer', description: 'Global fav' },
      { emoji: '🏐', name: 'Volleyball', description: 'Indoor/Beach' },
      { emoji: '🏏', name: 'Cricket', description: 'Team spirit' },
    ],
  },
  {
    id: 'water-sports',
    name: 'Water Sports',
    icon: Waves,
    sports: [
      { emoji: '🏊', name: 'Swimming', description: 'Endurance' },
      { emoji: '🛶', name: 'Kayaking', description: 'Scenic' },
      { emoji: '🏄', name: 'Surfing', description: 'Ocean thrill' },
    ],
  },
  {
    id: 'adventure-sports',
    name: 'Adventure Sports',
    icon: Mountain,
    sports: [
      { emoji: '🧗', name: 'Rock Climbing', description: 'Strength' },
      { emoji: '🚵', name: 'Mtn Biking', description: 'Terrains' },
      { emoji: '🎢', name: 'Ziplining', description: 'Aerial' },
    ],
  },
  {
    id: 'racquet-sports',
    name: 'Racquet Sports',
    icon: Zap,
    sports: [
      { emoji: '🎾', name: 'Tennis', description: 'Cardio' },
      { emoji: '🥒', name: 'Pickleball', description: 'Social' },
      { emoji: '🏸', name: 'Badminton', description: 'Reflexes' },
    ],
  },
  {
    id: 'winter-sports',
    name: 'Winter Sports',
    icon: Snowflake,
    sports: [
      { emoji: '⛷️', name: 'Skiing', description: 'Balance' },
      { emoji: '🏂', name: 'Snowboarding', description: 'Coordination' },
      { emoji: '⛸️', name: 'Ice Skating', description: 'Grace' },
    ],
  },
  {
    id: 'combat-sports',
    name: 'Combat Sports',
    icon: Swords,
    sports: [
      { emoji: '🥊', name: 'Boxing', description: 'Endurance' },
      { emoji: '🥋', name: 'Martial Arts', description: 'Discipline' },
      { emoji: '🤺', name: 'Fencing', description: 'Strategy' },
    ],
  },
  {
    id: 'precision-sports',
    name: 'Precision Sports',
    icon: Crosshair,
    sports: [
      { emoji: '🏹', name: 'Archery', description: 'Focus' },
      { emoji: '⛳', name: 'Golf', description: 'Skill' },
      { emoji: '🎯', name: 'Darts', description: 'Hand-eye' },
    ],
  },
  {
    id: 'endurance-sports',
    name: 'Endurance Sports',
    icon: Activity,
    sports: [
      { emoji: '🏃', name: 'Running', description: 'Cardio' },
      { emoji: '🚴', name: 'Cycling', description: 'Legs' },
      { emoji: '🏊🚴', name: 'Triathlon', description: 'Fitness' },
    ],
  },
  {
    id: 'mind-sports',
    name: 'Mind Sports',
    icon: Brain,
    sports: [
      { emoji: '♟️', name: 'Chess', description: 'Strategy' },
      { emoji: '🎮', name: 'Esports', description: 'Teamwork' },
      { emoji: '🃏', name: 'Bridge', description: 'Memory' },
    ],
  },
  {
    id: 'emerging-sports',
    name: 'Emerging Sports',
    icon: TrendingUp,
    sports: [
      { emoji: '⚽⛳', name: 'FootGolf', description: 'Soccer meets golf' },
      { emoji: '🟡', name: 'Spikeball', description: 'Coordination' },
    ],
  },
];

// Seasonality Data
const seasonalityData = [
  { sport: 'Adventure/Trek', season: 'Oct–May', icon: Mountain, color: 'text-orange-600' },
  { sport: 'Water Sports', season: 'Oct–April', icon: Waves, color: 'text-blue-600' },
  { sport: 'Cycling/Marathon', season: 'Nov–Feb', icon: Bike, color: 'text-green-600' },
  { sport: 'Stadiums', season: 'Year-round', icon: Trophy, color: 'text-purple-600' },
];

export function SportsTourismHub({ onBack }: SportsTourismHubProps) {
  const [currentView, setCurrentView] = useState<MainView>('hub');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState<PlayerMode>('all');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedSport, setSelectedSport] = useState<any>(null);
  const [bookingChoice, setBookingChoice] = useState<'package' | 'customize' | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null);
  const [customRequest, setCustomRequest] = useState({
    sport: '',
    location: '',
    dates: '',
    budget: '',
    difficulty: '',
    additionalNotes: '',
  });

  const handleGoogleSearch = () => {
    const query = searchQuery || 'sports tourism destinations india';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const query = searchQuery || 'sports destinations india';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  // Route to different views
  if (currentView === 'sport-detail' && selectedSport) {
    return (
      <SportDetailScreen
        sport={selectedSport}
        onBack={() => setCurrentView('hub')}
        onBookPackage={() => {
          setBookingChoice('package');
          setCurrentView('package-selection');
        }}
        onCustomize={() => {
          setBookingChoice('customize');
          setCurrentView('customize-request');
        }}
      />
    );
  }

  if (currentView === 'package-selection') {
    return (
      <PackageSelectionScreen
        sport={selectedSport}
        onBack={() => setCurrentView('sport-detail')}
        onSelectPackage={(pkg) => {
          setSelectedPackage(pkg);
          setCurrentView('transport');
        }}
      />
    );
  }

  if (currentView === 'customize-request') {
    return (
      <CustomizeRequestScreen
        onBack={() => setCurrentView('sport-detail')}
        customRequest={customRequest}
        setCustomRequest={setCustomRequest}
        onSubmit={() => setCurrentView('transport')}
        onGoogleSearch={handleGoogleSearch}
        onYouTubeSearch={handleYouTubeSearch}
      />
    );
  }

  if (currentView === 'transport') {
    return (
      <TransportPlanningScreen
        onBack={() => setCurrentView(bookingChoice === 'package' ? 'package-selection' : 'customize-request')}
        onContinue={() => setCurrentView('booking-summary')}
        selectedTransport={selectedTransport}
        setSelectedTransport={setSelectedTransport}
      />
    );
  }

  if (currentView === 'booking-summary') {
    return (
      <BookingSummaryScreen
        onBack={() => setCurrentView('transport')}
        onContinue={() => setCurrentView('safety-confirmation')}
        sport={selectedSport}
        package={selectedPackage}
        transport={selectedTransport}
        isCustom={bookingChoice === 'customize'}
      />
    );
  }

  if (currentView === 'safety-confirmation') {
    return (
      <SafetyConfirmationScreen
        onBack={() => setCurrentView('booking-summary')}
        onContinue={() => setCurrentView('price-breakdown')}
      />
    );
  }

  if (currentView === 'price-breakdown') {
    return (
      <PriceBreakdownScreen
        onBack={() => setCurrentView('safety-confirmation')}
        onContinue={() => setCurrentView('payment')}
        package={selectedPackage}
        transport={selectedTransport}
        isCustom={bookingChoice === 'customize'}
      />
    );
  }

  if (currentView === 'payment') {
    return (
      <PaymentScreen
        onBack={() => setCurrentView('price-breakdown')}
        onComplete={() => setCurrentView('confirmation')}
      />
    );
  }

  if (currentView === 'confirmation') {
    return (
      <ConfirmationScreen
        onDone={() => {
          setCurrentView('hub');
          setSelectedSport(null);
          setBookingChoice(null);
          setSelectedPackage(null);
        }}
      />
    );
  }

  // Main Hub View
  const displayedCategories = showAllCategories ? sportsCategories : sportsCategories.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Trophy className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-4xl font-bold">Sports Tourism</h1>
            <p className="text-white/90 text-base">Choose your mode, pick your sport, book your adventure</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <Input
            type="text"
            placeholder="Search sports, destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-14 h-14 rounded-full bg-white border-0 shadow-lg text-base"
          />
        </div>

        {/* Google Search & YouTube Browse Buttons */}
        <div className="flex gap-3">
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
      </div>

      <div className="px-6 -mt-4">
        {/* PART 1: Player Mode Filter (4 Cards) */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold">Select Your Mode</h2>
            {selectedMode !== 'all' && (
              <button
                onClick={() => setSelectedMode('all')}
                className="text-sm text-orange-600 font-semibold flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {playerModes.map((mode) => (
              <motion.button
                key={mode.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedMode(mode.id as PlayerMode)}
                className={`rounded-2xl p-4 transition-all text-left border-2 ${
                  selectedMode === mode.id
                    ? `border-orange-500 shadow-lg ${mode.bgColor}`
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="text-4xl mb-2">{mode.emoji}</div>
                <h3 className="font-bold text-base mb-1">{mode.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{mode.subtitle}</p>
                <div className="flex items-center gap-1 mb-2">
                  <div className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    mode.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    mode.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {mode.difficulty}
                  </div>
                </div>
                <p className="text-xs text-gray-700 line-clamp-2">{mode.context}</p>
              </motion.button>
            ))}
          </div>

          {/* Mode Details */}
          <AnimatePresence mode="wait">
            {selectedMode !== 'all' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl"
              >
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  {playerModes.find(m => m.id === selectedMode)?.name} Experience Includes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {playerModes.find(m => m.id === selectedMode)?.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 border border-orange-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        {/* PART 2: Find Your Game (10 Sub-Categories) */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-2">Find Your Game</h2>
          <p className="text-gray-600 text-sm mb-5">
            Choose from 10 sports categories below
          </p>

          <div className="space-y-5">
            {displayedCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{category.name}</h3>
                  </div>
                  <button className="text-xs text-orange-600 font-semibold flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.sports.map((sport, idx) => (
                    <motion.button
                      key={idx}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setSelectedSport({ ...sport, category: category.name });
                        setCurrentView('sport-detail');
                      }}
                      className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-orange-50 rounded-xl transition-all text-left"
                    >
                      <span className="text-2xl">{sport.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{sport.name}</p>
                        <p className="text-xs text-gray-600 truncate">{sport.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All / Show Less Toggle */}
          {sportsCategories.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-5 text-center"
            >
              <Button
                onClick={() => setShowAllCategories(!showAllCategories)}
                variant="outline"
                className="rounded-full px-6 h-10"
              >
                {showAllCategories ? 'Show Less' : `View All Categories (${sportsCategories.length - 6} more)`}
              </Button>
            </motion.div>
          )}
        </Card>

        {/* PART 3A: Grok Seasonality Widget (The Calendar) */}
        <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-xl mb-6">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Best Time to Go</h3>
              <p className="text-white/95 text-sm">Grok Seasonality Intelligence</p>
            </div>
          </div>

          <div className="space-y-3">
            {seasonalityData.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-white" />
                  <span className="font-semibold text-base">{item.sport}</span>
                </div>
                <div className="px-3 py-1 bg-white rounded-full">
                  <span className={`text-sm font-bold ${item.color}`}>{item.season}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/95">
                Dynamic status bar shows optimal seasons based on weather, events, and activity type.
              </p>
            </div>
          </div>
        </Card>

        {/* PART 3B: Combo Wizard Banner */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl mb-6">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Combo Wizard</h3>
              <p className="text-white/95 text-sm mb-4">Build Your Perfect Trip</p>
            </div>
          </div>

          <div className="space-y-3 mb-5">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-base">Surf & Turf</h4>
              </div>
              <p className="text-sm text-white/90">Trek + Match • 4 Days • Moderate</p>
            </div>

            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-base">Relaxed Pro</h4>
              </div>
              <p className="text-sm text-white/90">Golf + Spa • 3 Days • Easy</p>
            </div>
          </div>

          <Button className="w-full h-12 bg-white hover:bg-gray-100 text-purple-600 rounded-full font-semibold">
            <Plus className="w-5 h-5 mr-2" />
            Start Combo Wizard
          </Button>
        </Card>

        {/* Admin Note */}
        <Card className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-5 shadow-lg border-2 border-orange-300 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-base text-orange-900 mb-1">Admin-Managed Content</p>
              <p className="text-sm text-orange-800">
                All destinations, dates, and prices shown are placeholders. Real inventory is curated by administrators.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* PART 4: Safety & Booking Footer (Sticky) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-40">
        {/* Safety Assurance Bar */}
        <div className="px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
          <div className="grid grid-cols-4 gap-2 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Shield className="w-5 h-5 text-green-600 mb-1" />
              <p className="text-[10px] font-semibold text-green-900 text-center leading-tight">Certified Gear</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-5 h-5 text-green-600 mb-1" />
              <p className="text-[10px] font-semibold text-green-900 text-center leading-tight">Expert Guides</p>
            </div>
            <div className="flex flex-col items-center">
              <AlertCircle className="w-5 h-5 text-green-600 mb-1" />
              <p className="text-[10px] font-semibold text-green-900 text-center leading-tight">Medical Support</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-5 h-5 text-green-600 mb-1" />
              <p className="text-[10px] font-semibold text-green-900 text-center leading-tight">Sports Insurance</p>
            </div>
          </div>
        </div>

        {/* Booking Actions */}
        <div className="px-6 py-4">
          <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
            <Button
              className="h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:opacity-90 rounded-full font-semibold text-base"
              onClick={() => {
                if (selectedMode === 'all') {
                  alert('Please select a Player Mode first');
                } else {
                  alert('Select a sport from "Find Your Game" to continue booking');
                }
              }}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Book Package
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full font-semibold text-base border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
              onClick={() => {
                if (selectedMode === 'all') {
                  alert('Please select a Player Mode first');
                } else {
                  alert('Select a sport from "Find Your Game" to customize');
                }
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Customize Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sport Detail Screen
interface SportDetailScreenProps {
  sport: any;
  onBack: () => void;
  onBookPackage: () => void;
  onCustomize: () => void;
}

function SportDetailScreen({ sport, onBack, onBookPackage, onCustomize }: SportDetailScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-8">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4">
          <div className="text-6xl">{sport.emoji}</div>
          <div>
            <p className="text-white/80 text-sm mb-1">{sport.category}</p>
            <h1 className="text-white text-3xl font-bold">{sport.name}</h1>
            <p className="text-white/90 text-base">{sport.description}</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">About This Sport</h2>
          <div className="space-y-3">
            <div className="p-4 bg-orange-50 rounded-xl">
              <p className="text-sm font-semibold text-gray-700 mb-1">Difficulty Level</p>
              <p className="text-base text-gray-900">Moderate to Advanced</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl">
              <p className="text-sm font-semibold text-gray-700 mb-1">Best Season</p>
              <p className="text-base text-gray-900">Check Seasonality Widget</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl">
              <p className="text-sm font-semibold text-gray-700 mb-1">Available Locations</p>
              <p className="text-base text-gray-900">[Admin: Multiple destinations available]</p>
            </div>
          </div>
        </Card>

        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">What's Included</h2>
          <div className="space-y-3">
            {[
              'Professional equipment rental',
              'Certified instructor/guide',
              'Safety gear and kit',
              'Venue access/tickets',
              'Insurance coverage (optional)',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-6 shadow-xl mb-6 border-2 border-orange-300">
          <h2 className="text-2xl font-bold mb-5">Choose Booking Option</h2>
          
          <div className="space-y-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onBookPackage}
              className="w-full bg-white border-2 border-orange-300 rounded-2xl p-5 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Book Package</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Select difficulty → Pick base → Confirm tickets
                  </p>
                  <div className="flex items-center gap-2 text-orange-600">
                    <span className="text-sm font-semibold">View Packages</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onCustomize}
              className="w-full bg-white border-2 border-purple-300 rounded-2xl p-5 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Customize Trip</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Modify duration or destination
                  </p>
                  <div className="flex items-center gap-2 text-purple-600">
                    <span className="text-sm font-semibold">Customize Now</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.button>
          </div>
        </Card>
      </div>
    </div>
  );
}

// Package Selection Screen
interface PackageSelectionScreenProps {
  sport: any;
  onBack: () => void;
  onSelectPackage: (pkg: any) => void;
}

function PackageSelectionScreen({ sport, onBack, onSelectPackage }: PackageSelectionScreenProps) {
  const packages = [
    { id: 1, name: '[Admin: Beginner Package]', difficulty: 'Easy', duration: '1 Day', price: 'TBD', includes: ['Equipment', 'Guide', 'Safety Kit'] },
    { id: 2, name: '[Admin: Intermediate Package]', difficulty: 'Moderate', duration: '2 Days', price: 'TBD', includes: ['Equipment', 'Guide', 'Accommodation', 'Meals'] },
    { id: 3, name: '[Admin: Advanced Package]', difficulty: 'Hard', duration: '3 Days', price: 'TBD', includes: ['Premium Equipment', 'Expert Guide', 'Luxury Stay', 'All Meals'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-8">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-3xl font-bold mb-2">Select Package</h1>
        <p className="text-white/90 text-base">Step 1: Select Difficulty → Step 2: Pick Base</p>
      </div>

      <div className="px-6 -mt-4">
        <Card className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-5 shadow-lg mb-6 border-2 border-orange-300">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-base text-orange-900 mb-1">Admin-Managed Packages</p>
              <p className="text-sm text-orange-800">
                Prices and availability managed by administrators.
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {packages.map((pkg, i) => (
            <motion.button
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onSelectPackage(pkg)}
              className="w-full bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all text-left border-2 border-transparent hover:border-orange-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      pkg.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      pkg.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {pkg.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                      {pkg.duration}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-2xl font-bold text-orange-600">{pkg.price}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.includes.map((item, j) => (
                  <span key={j} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2 text-orange-600">
                <span className="text-sm font-semibold">Select & Continue</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Customize Request Screen (kept from previous implementation)
interface CustomizeRequestScreenProps {
  onBack: () => void;
  customRequest: any;
  setCustomRequest: (req: any) => void;
  onSubmit: () => void;
  onGoogleSearch: () => void;
  onYouTubeSearch: () => void;
}

function CustomizeRequestScreen({ onBack, customRequest, setCustomRequest, onSubmit, onGoogleSearch, onYouTubeSearch }: CustomizeRequestScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-8">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-3xl font-bold mb-2">Customize Your Trip</h1>
        <p className="text-white/90 text-base">Modify duration or destination</p>
      </div>

      <div className="px-6 -mt-4">
        <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-5 text-white shadow-xl mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-white flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-base mb-2">Research First</p>
              <p className="text-sm text-white/95 mb-4">
                Use Google/YouTube to explore destinations before customizing
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={onGoogleSearch}
              className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-10 text-sm font-semibold"
            >
              <Globe className="w-4 h-4 mr-2" />
              Google
            </Button>
            <Button
              onClick={onYouTubeSearch}
              className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-10 text-sm font-semibold"
            >
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </Button>
          </div>
        </Card>

        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Your Preferences</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sport / Activity</label>
              <Input
                placeholder="e.g., Water Sports, Trekking..."
                value={customRequest.sport}
                onChange={(e) => setCustomRequest({ ...customRequest, sport: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Location</label>
              <Input
                placeholder="e.g., Goa, Himachal..."
                value={customRequest.location}
                onChange={(e) => setCustomRequest({ ...customRequest, location: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Dates</label>
              <Input
                placeholder="e.g., Dec 2026..."
                value={customRequest.dates}
                onChange={(e) => setCustomRequest({ ...customRequest, dates: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
              <Input
                placeholder="e.g., ₹10,000 - ₹20,000"
                value={customRequest.budget}
                onChange={(e) => setCustomRequest({ ...customRequest, budget: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
              <textarea
                placeholder="Special requirements..."
                value={customRequest.additionalNotes}
                onChange={(e) => setCustomRequest({ ...customRequest, additionalNotes: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none h-32 text-base"
              />
            </div>
          </div>
        </Card>

        <Button
          onClick={onSubmit}
          className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-lg font-semibold"
        >
          Submit Request
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// Transport, Booking Summary, Safety, Price, Payment, Confirmation screens remain the same as previous implementation
// (Keeping them identical to avoid duplication - they work perfectly)

function TransportPlanningScreen({ onBack, onContinue, selectedTransport, setSelectedTransport }: any) {
  const transportModes = [
    { id: 'train', name: 'Train', icon: Train, cost: 2500 },
    { id: 'bus', name: 'Bus', icon: Bus, cost: 1800 },
    { id: 'car', name: 'Car', icon: Car, cost: 5500 },
    { id: 'flight', name: 'Flight', icon: Plane, cost: 8500 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-8">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-3xl font-bold mb-2">Transport Planning</h1>
        <p className="text-white/90 text-base">Choose your mode</p>
      </div>

      <div className="px-6 -mt-4">
        <div className="space-y-4 mb-6">
          {transportModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedTransport(mode.id)}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                selectedTransport === mode.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <mode.icon className="w-7 h-7 text-blue-600" />
                <div className="flex-1">
                  <p className="font-bold text-lg">{mode.name}</p>
                  <p className="text-sm text-gray-600">₹{mode.cost.toLocaleString()}</p>
                </div>
                {selectedTransport === mode.id && <Check className="w-6 h-6 text-blue-600" />}
              </div>
            </button>
          ))}
        </div>

        <Button onClick={onContinue} disabled={!selectedTransport} className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600">
          Continue <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function BookingSummaryScreen({ onBack, onContinue }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      <div className="bg-gradient-to-r from-gray-700 to-slate-800 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-3xl font-bold">Trip Summary</h1>
      </div>

      <div className="px-6 -mt-4">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Booking Details</h2>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">Sport Selected</p>
              <p className="font-bold">[Admin: TBD]</p>
            </div>
          </div>
        </Card>
        <Button onClick={onContinue} className="w-full h-14 rounded-full bg-gradient-to-r from-gray-700 to-slate-800">
          Continue <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function SafetyConfirmationScreen({ onBack, onContinue }: any) {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white pb-8">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-3xl font-bold">Safety Confirmation</h1>
      </div>

      <div className="px-6 -mt-4">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="p-5 bg-red-100 rounded-2xl">
            <label className="flex items-start gap-4 cursor-pointer">
              <input type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} className="w-6 h-6 mt-1" />
              <p className="text-sm">I acknowledge all safety requirements</p>
            </label>
          </div>
        </Card>
        <Button onClick={onContinue} disabled={!acknowledged} className="w-full h-14 rounded-full bg-gradient-to-r from-red-600 to-orange-600">
          Continue <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function PriceBreakdownScreen({ onBack, onContinue }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-8">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-3xl font-bold">Price Breakdown</h1>
      </div>

      <div className="px-6 -mt-4">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="p-4 bg-green-50 rounded-xl">
            <p className="text-sm text-gray-600">Total Amount</p>
            <p className="text-3xl font-bold text-green-600">[Admin: TBD]</p>
          </div>
        </Card>
        <Button onClick={onContinue} className="w-full h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-600">
          Proceed to Payment <CreditCard className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function PaymentScreen({ onBack, onComplete }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pb-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-3xl font-bold">Payment</h1>
      </div>

      <div className="px-6 -mt-4">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Payment Method</h2>
          {['Credit/Debit Card', 'UPI', 'Net Banking'].map((method) => (
            <button key={method} className="w-full p-4 bg-gray-50 rounded-xl mb-3 hover:bg-gray-100 text-left font-semibold">
              {method}
            </button>
          ))}
        </Card>
        <Button onClick={onComplete} className="w-full h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-600">
          Complete Payment <CheckCircle className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function ConfirmationScreen({ onDone }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-8">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-20 rounded-b-[2rem] text-center">
        <CheckCircle className="w-20 h-20 text-white mx-auto mb-4" />
        <h1 className="text-white text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-white/90 text-base">Your sports adventure is booked</p>
      </div>

      <div className="px-6 -mt-12">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-3 text-center">Booking ID</h2>
          <p className="text-4xl font-bold text-center text-indigo-600">GY-SP-2026-5678</p>
        </Card>
        <Button onClick={onDone} className="w-full h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
          Return to Sports Tourism
        </Button>
      </div>
    </div>
  );
}
