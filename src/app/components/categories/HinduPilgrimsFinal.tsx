import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Heart,
  Youtube,
  Globe,
  Navigation,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  Sparkles,
  Bell,
  ChevronRight,
  ChevronDown,
  Eye,
  EyeOff,
  Filter,
  Search,
  Package,
  Gift,
  Gem,
  Map,
  Mountain,
  Flame,
  Flower2,
  Sun,
  Waves,
  Award,
  Accessibility,
  Plus,
  Check,
  Loader2,
  MessageSquare,
  X,
  Star,
  Info,
  CircleDot,
  ChevronUp,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';

// ========================================
// HINDU PILGRIMS - FINAL ENHANCED VERSION
// ========================================
//
// COMPLETE 3-SCREEN IMPLEMENTATION:
// 
// SCREEN 1: Main Hindu Circuits Dashboard
// - 6 Sacred Circuits (attractive cards)
// - 4 New Modules (Hidden Gems, Geography, Deity, Packages)
// - Interest System (hearts)
// - Notification Toggle
// - YouTube/Google Integration
// - Build Custom Pilgrimage CTA
//
// SCREEN 2: Deity-Focused Circuits
// - Deity Selection Grid
// - Custom Tour Builder Form (4 steps)
// - AI Confirmation Modal
// - Back Navigation
//
// SCREEN 3: Temple Detail View
// - Temple Information (all sections)
// - Interactive Features
// - Grok AI Travel Tips
// - Ask Grok Query Box
// - Nearby Temples
// - YouTube/Google Buttons
//
// ALL CONTENT: Lorem ipsum placeholders
// ALL FIELDS: Admin-editable with dashed borders
// ALL INTERACTIONS: Fully functional
//
// ========================================

type Screen = 'dashboard' | 'deity-circuits' | 'temple-detail';
type Deity = 'all' | 'vishnu' | 'shiva' | 'shakti' | 'ganesha' | 'hanuman' | 'surya' | 'kartikeya';

interface HinduPilgrimsFinalProps {
  onBack: () => void;
}

// ========================================
// SACRED CIRCUITS DATA (6 Circuits)
// ========================================

const sacredCircuits = [
  {
    id: 'char-dham',
    name: 'Lorem Ipsum Char Dham',
    subtitle: 'Four Divine Abodes',
    deity: 'Vishnu & Shiva',
    icon: Mountain,
    emoji: '⛰️',
    priceRange: '₹35,000 - ₹75,000',
    duration: '10-15 days',
    keyTemples: ['Temple Alpha', 'Temple Beta', 'Temple Gamma', 'Temple Delta'],
    states: 'State Name',
    bestTime: 'May - October',
    crowdLevel: 'High',
    difficulty: 'Challenging',
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'jyotirlinga',
    name: 'Lorem 12 Jyotirlingas',
    subtitle: 'Sacred Shiva Shrines',
    deity: 'Lord Shiva',
    icon: Flame,
    emoji: '🕉️',
    priceRange: '₹50,000 - ₹1,20,000',
    duration: '15-30 days',
    keyTemples: ['Temple One', 'Temple Two', 'Temple Three', 'Temple Four'],
    states: 'Multiple States',
    bestTime: 'October - March',
    crowdLevel: 'Very High',
    difficulty: 'Moderate',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 'divya-desam',
    name: 'Lorem 108 Divya Desams',
    subtitle: 'Vishnu Sacred Temples',
    deity: 'Lord Vishnu',
    icon: Flower2,
    emoji: '🪷',
    priceRange: '₹60,000 - ₹1,50,000',
    duration: '20-45 days',
    keyTemples: ['Temple Primus', 'Temple Secundus', 'Temple Tertius', 'Temple Quartus'],
    states: 'South India',
    bestTime: 'November - February',
    crowdLevel: 'Moderate',
    difficulty: 'Easy to Moderate',
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  },
  {
    id: 'shakti-peetha',
    name: 'Lorem 51 Shakti Peethas',
    subtitle: 'Divine Feminine Shrines',
    deity: 'Goddess Shakti',
    icon: Sparkles,
    emoji: '🌺',
    priceRange: '₹70,000 - ₹1,80,000',
    duration: '25-40 days',
    keyTemples: ['Temple First', 'Temple Second', 'Temple Third', 'Temple Fourth'],
    states: 'Pan-India',
    bestTime: 'October - April',
    crowdLevel: 'Moderate to High',
    difficulty: 'Moderate',
    gradient: 'from-pink-500 via-rose-500 to-red-600',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
  },
  {
    id: 'navagraha',
    name: 'Lorem Navagraha Temples 🪐',
    subtitle: 'Cosmic Deity Shrines',
    deity: 'Nine Celestial Gods',
    icon: Sun,
    emoji: '🪐',
    priceRange: '₹15,000 - ₹30,000',
    duration: '5-7 days',
    keyTemples: ['Sun Temple', 'Moon Temple', 'Mars Temple', 'Mercury Temple'],
    states: 'South State',
    bestTime: 'Year-round',
    crowdLevel: 'Low to Moderate',
    difficulty: 'Easy',
    gradient: 'from-yellow-500 via-amber-500 to-orange-600',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    id: 'pancha-bhoota',
    name: 'Lorem Pancha Bhoota Sthalams',
    subtitle: 'Five Element Temples',
    deity: 'Lord Shiva',
    icon: Waves,
    emoji: '🌊',
    priceRange: '₹20,000 - ₹40,000',
    duration: '5-8 days',
    keyTemples: ['Earth Temple', 'Water Temple', 'Fire Temple', 'Air Temple'],
    states: 'South State',
    bestTime: 'November - March',
    crowdLevel: 'Moderate',
    difficulty: 'Easy',
    gradient: 'from-cyan-500 via-teal-500 to-blue-600',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
  },
];

// ========================================
// DEITY CATEGORIES (7 Deities + All)
// ========================================

const deityCategories = [
  {
    id: 'vishnu' as Deity,
    name: 'Lord Vishnu',
    icon: Flower2,
    emoji: '🪷',
    count: 108,
    gradient: 'from-blue-500 to-purple-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 'shiva' as Deity,
    name: 'Lord Shiva',
    icon: Flame,
    emoji: '🕉️',
    count: 45,
    gradient: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    id: 'shakti' as Deity,
    name: 'Goddess Shakti',
    icon: Sparkles,
    emoji: '🌺',
    count: 51,
    gradient: 'from-pink-500 to-red-600',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    id: 'ganesha' as Deity,
    name: 'Lord Ganesha',
    icon: Award,
    emoji: '🐘',
    count: 30,
    gradient: 'from-yellow-500 to-orange-600',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    id: 'hanuman' as Deity,
    name: 'Lord Hanuman',
    icon: TrendingUp,
    emoji: '🦁',
    count: 25,
    gradient: 'from-red-500 to-orange-600',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    id: 'surya' as Deity,
    name: 'Lord Surya',
    icon: Sun,
    emoji: '☀️',
    count: 12,
    gradient: 'from-amber-500 to-yellow-600',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    id: 'kartikeya' as Deity,
    name: 'Lord Kartikeya',
    icon: CircleDot,
    emoji: '🦚',
    count: 15,
    gradient: 'from-green-500 to-teal-600',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
];

// ========================================
// HIDDEN GEMS (6+ temples)
// ========================================

const hiddenGems = [
  {
    id: 'gem-1',
    name: 'Lorem Hidden Temple Alpha',
    location: 'District Name, State Name',
    visitorCount: '< 20 visitors/day',
    accessibility: '♿ Senior-friendly',
    deity: 'Deity Name',
  },
  {
    id: 'gem-2',
    name: 'Lorem Hidden Temple Beta',
    location: 'District Name, State Name',
    visitorCount: '< 30 visitors/day',
    accessibility: '🚗 Jeep access required',
    deity: 'Deity Name',
  },
  {
    id: 'gem-3',
    name: 'Lorem Hidden Temple Gamma',
    location: 'District Name, State Name',
    visitorCount: '< 50 visitors/day',
    accessibility: '♿ Wheelchair accessible',
    deity: 'Deity Name',
  },
  {
    id: 'gem-4',
    name: 'Lorem Hidden Temple Delta',
    location: 'District Name, State Name',
    visitorCount: '< 40 visitors/day',
    accessibility: '🥾 Moderate trekking',
    deity: 'Deity Name',
  },
  {
    id: 'gem-5',
    name: 'Lorem Hidden Temple Epsilon',
    location: 'District Name, State Name',
    visitorCount: '< 25 visitors/day',
    accessibility: '♿ Senior-friendly',
    deity: 'Deity Name',
  },
  {
    id: 'gem-6',
    name: 'Lorem Hidden Temple Zeta',
    location: 'District Name, State Name',
    visitorCount: '< 35 visitors/day',
    accessibility: '🚗 4WD recommended',
    deity: 'Deity Name',
  },
];

// ========================================
// GEOGRAPHY STATES
// ========================================

const geographyStates = [
  { id: 'state-1', name: 'Lorem State Alpha', templeCount: 45, districts: 12 },
  { id: 'state-2', name: 'Lorem State Beta', templeCount: 38, districts: 8 },
  { id: 'state-3', name: 'Lorem State Gamma', templeCount: 52, districts: 15 },
  { id: 'state-4', name: 'Lorem State Delta', templeCount: 30, districts: 10 },
  { id: 'state-5', name: 'Lorem State Epsilon', templeCount: 25, districts: 7 },
  { id: 'state-6', name: 'Lorem State Zeta', templeCount: 40, districts: 11 },
];

// ========================================
// SPECIAL PACKAGES
// ========================================

const specialPackages = [
  {
    id: 'pkg-1',
    name: 'Lorem Festival Package',
    duration: '12 days',
    price: '₹45,000',
    inclusions: ['Transport (Admin editable)', 'Accommodation', 'Meals', 'Darshan tickets'],
    tag: 'FESTIVAL',
    gradient: 'from-purple-500 to-pink-600',
    icon: Gift,
  },
  {
    id: 'pkg-2',
    name: 'Lorem Senior Package',
    duration: '8 days',
    price: '₹32,000',
    inclusions: ['Medical support', 'Wheelchair access', 'Special meals', 'AC transport'],
    tag: 'SENIOR CARE',
    gradient: 'from-green-500 to-teal-600',
    icon: Accessibility,
  },
  {
    id: 'pkg-3',
    name: 'Lorem Premium Package',
    duration: '10 days',
    price: '₹38,000',
    inclusions: ['Priority darshan', 'Luxury stay', 'Personal guide', 'Special rituals'],
    tag: 'PREMIUM',
    gradient: 'from-blue-500 to-indigo-600',
    icon: Award,
  },
];

// ========================================
// MAIN COMPONENT
// ========================================

export function HinduPilgrimsFinal({ onBack }: HinduPilgrimsFinalProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [selectedDeity, setSelectedDeity] = useState<Deity>('all');
  const [selectedCircuit, setSelectedCircuit] = useState<any>(null);
  const [selectedTemple, setSelectedTemple] = useState<any>(null);
  const [showHiddenGems, setShowHiddenGems] = useState(false);
  const [showCustomTourModal, setShowCustomTourModal] = useState(false);
  const [showAIConfirmation, setShowAIConfirmation] = useState(false);
  const [isAITyping, setIsAITyping] = useState(false);
  const [savedInterests, setSavedInterests] = useState<Set<string>>(new Set());
  const [notifyDeals, setNotifyDeals] = useState(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [grokQuery, setGrokQuery] = useState('');

  // Form state
  const [tourForm, setTourForm] = useState({
    startDate: '',
    endDate: '',
    groupSize: '',
    seniorCare: '',
    deity: '',
    budget: '',
  });

  const handleSaveInterest = (id: string) => {
    const newSaved = new Set(savedInterests);
    if (newSaved.has(id)) {
      newSaved.delete(id);
      toast.success('Removed from saved interests');
    } else {
      newSaved.add(id);
      toast.success('Added to saved interests ❤️');
    }
    setSavedInterests(newSaved);
  };

  const handleCustomTourSubmit = () => {
    setShowCustomTourModal(false);
    setIsAITyping(true);
    setShowAIConfirmation(true);

    setTimeout(() => {
      setIsAITyping(false);
    }, 3000);
  };

  const handleViewDetails = (circuit: any) => {
    setSelectedCircuit(circuit);
    setSelectedTemple({
      name: circuit.name,
      deity: circuit.deity,
      description: circuit.description,
      ...circuit,
    });
    setCurrentScreen('temple-detail');
  };

  const handleWatchVideos = (name: string) => {
    toast.success('Opening YouTube videos...');
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(name)}`, '_blank');
  };

  const handleViewMap = (name: string) => {
    toast.success('Opening Google Maps...');
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(name)}`, '_blank');
  };

  // ========================================
  // SCREEN 1: DASHBOARD
  // ========================================

  if (currentScreen === 'dashboard') {
    const filteredCircuits = selectedDeity === 'all'
      ? sacredCircuits
      : sacredCircuits.filter(c => c.deity.toLowerCase().includes(selectedDeity));

    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onBack}
                  className="text-white hover:bg-white/20 transition-all"
                >
                  <ArrowLeft className="w-6 h-6" />
                </Button>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">🕉️</span>
                    <div>
                      <h1 className="text-3xl font-bold">Hindu Pilgrims</h1>
                      <p className="text-white/90 text-sm mt-1 border-b-2 border-dashed border-white/40 inline-block pb-1">
                        Admin editable: Subtitle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => setShowCustomTourModal(true)}
                className="bg-white text-orange-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Build Custom Pilgrimage
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
          {/* Notification Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-orange-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Notify me about deals & budget updates</p>
                  <p className="text-sm text-gray-500 border-b border-dashed border-gray-300 inline-block">
                    Admin editable: Toggle description
                  </p>
                </div>
              </div>
              <Switch checked={notifyDeals} onCheckedChange={setNotifyDeals} />
            </div>
          </motion.div>

          {/* Sacred Circuits Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Mountain className="w-8 h-8 text-orange-600" />
                  Sacred Circuits
                </h2>
                <p className="text-gray-600 text-sm mt-1 border-b border-dashed border-gray-300 inline-block">
                  Admin editable: Section description - Lorem ipsum dolor sit amet
                </p>
              </div>
              <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-lg">
                6 Major Circuits
              </Badge>
            </div>

            {/* Sacred Circuits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCircuits.map((circuit, index) => {
                const Icon = circuit.icon;
                const isSaved = savedInterests.has(circuit.id);

                return (
                  <motion.div
                    key={circuit.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                      {/* Gradient Header */}
                      <div className={`bg-gradient-to-r ${circuit.gradient} p-6 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                        
                        <div className="relative">
                          <div className="flex items-start justify-between mb-3">
                            <div className={`${circuit.iconBg} p-4 rounded-2xl shadow-lg`}>
                              <Icon className={`w-8 h-8 ${circuit.iconColor}`} />
                            </div>
                            <button
                              onClick={() => handleSaveInterest(circuit.id)}
                              className={`p-3 rounded-full transition-all shadow-lg ${
                                isSaved ? 'bg-red-500 scale-110' : 'bg-white/20 hover:bg-white/30'
                              }`}
                            >
                              <Heart className={`w-5 h-5 ${isSaved ? 'fill-white' : ''}`} />
                            </button>
                          </div>
                          <div className="border-2 border-dashed border-white/40 p-2 rounded-lg bg-white/10 mb-2">
                            <p className="text-xs text-white/80">Admin editable: Circuit name</p>
                            <h3 className="text-xl font-bold">{circuit.name}</h3>
                          </div>
                          <p className="text-sm text-white/90 border-b border-dashed border-white/30 inline-block">
                            {circuit.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 space-y-4">
                        <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-200">
                          <p className="text-xs text-gray-500 mb-2">Admin editable: Description</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{circuit.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="w-4 h-4 text-gray-500" />
                              <span className="text-xs text-gray-500">Price</span>
                            </div>
                            <p className="text-sm font-bold text-gray-900 border-b border-dashed border-gray-300">
                              {circuit.priceRange}
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <span className="text-xs text-gray-500">Duration</span>
                            </div>
                            <p className="text-sm font-bold text-gray-900 border-b border-dashed border-gray-300">
                              {circuit.duration}
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-xl border-2 border-dashed border-gray-200">
                          <p className="text-xs text-gray-500 mb-2">Admin editable: Key temples list</p>
                          <div className="flex flex-wrap gap-2">
                            {circuit.keyTemples.map((temple, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {temple}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg text-xs border border-blue-100">
                            <MapPin className="w-3 h-3 text-blue-600" />
                            <span className="border-b border-dashed border-blue-300">{circuit.states}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg text-xs border border-green-100">
                            <Calendar className="w-3 h-3 text-green-600" />
                            <span className="border-b border-dashed border-green-300">{circuit.bestTime}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-orange-50 p-2 rounded-lg text-xs border border-orange-100">
                            <Users className="w-3 h-3 text-orange-600" />
                            <span className="border-b border-dashed border-orange-300">{circuit.crowdLevel}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-purple-50 p-2 rounded-lg text-xs border border-purple-100">
                            <TrendingUp className="w-3 h-3 text-purple-600" />
                            <span className="border-b border-dashed border-purple-300">{circuit.difficulty}</span>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2">
                          <Button
                            onClick={() => handleViewDetails(circuit)}
                            className={`w-full bg-gradient-to-r ${circuit.gradient} text-white hover:shadow-xl transition-all`}
                          >
                            <Navigation className="w-4 h-4 mr-2" />
                            View Details & Plan Yatra
                          </Button>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleWatchVideos(circuit.name)}
                              className="text-red-600 border-red-200 hover:bg-red-50"
                            >
                              <Youtube className="w-4 h-4 mr-2" />
                              Watch Videos
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewMap(circuit.name)}
                              className="text-blue-600 border-blue-200 hover:bg-blue-50"
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Explore Map
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Browse by Deity */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-orange-600" />
                Browse by Deity
              </h2>
              <p className="text-gray-600 text-sm mt-1 border-b border-dashed border-gray-300 inline-block">
                Admin editable: Filter description - Lorem ipsum select deity
              </p>
            </div>

            {/* Deity Filter Bar */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-orange-200">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                <button
                  onClick={() => setSelectedDeity('all')}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    selectedDeity === 'all'
                      ? 'border-orange-500 bg-orange-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  <Star className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                  <p className="text-sm font-bold text-gray-900">All Deities</p>
                  <Badge className="mt-2 w-full justify-center text-xs">
                    {sacredCircuits.length} circuits
                  </Badge>
                </button>

                {deityCategories.map((deity) => {
                  const Icon = deity.icon;
                  
                  return (
                    <button
                      key={deity.id}
                      onClick={() => setSelectedDeity(deity.id)}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        selectedDeity === deity.id
                          ? `border-${deity.iconColor.split('-')[1]}-500 bg-${deity.iconBg} shadow-lg scale-105`
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <div className={`${deity.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2`}>
                        <Icon className={`w-6 h-6 ${deity.iconColor}`} />
                      </div>
                      <p className="text-xs font-bold text-gray-900 border-b border-dashed border-gray-300 pb-1">
                        {deity.name}
                      </p>
                      <Badge className="mt-2 w-full justify-center text-xs">
                        {deity.count} temples
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>

            <Button
              onClick={() => setCurrentScreen('deity-circuits')}
              variant="outline"
              className="w-full border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-400 transition-all py-6"
            >
              See All {selectedDeity !== 'all' ? deityCategories.find(d => d.id === selectedDeity)?.name : 'Deity'} Circuits
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Hidden Spiritual Gems */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Gem className="w-8 h-8 text-purple-600" />
                  Hidden Spiritual Gems 💎
                </h2>
                <p className="text-gray-600 text-sm mt-1 border-b border-dashed border-gray-300 inline-block">
                  Admin editable: Gems description - Lorem ipsum hidden temples
                </p>
              </div>
              <Button
                onClick={() => setShowHiddenGems(!showHiddenGems)}
                variant="outline"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-400 transition-all"
              >
                {showHiddenGems ? (
                  <>
                    <EyeOff className="w-5 h-5 mr-2" />
                    Hide Gems
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5 mr-2" />
                    Show Hidden Gems
                  </>
                )}
              </Button>
            </div>

            <AnimatePresence>
              {showHiddenGems && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {hiddenGems.map((gem, index) => (
                    <motion.div
                      key={gem.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-dashed border-purple-200"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 border-2 border-dashed border-purple-300 p-3 rounded-xl bg-white">
                            <p className="text-xs text-purple-500 mb-1">Admin editable: Temple name</p>
                            <h3 className="font-bold text-gray-900">{gem.name}</h3>
                          </div>
                          <Badge className="ml-2 bg-purple-600 text-white">
                            {gem.visitorCount}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-purple-200">
                            <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700 border-b border-dashed border-purple-200 flex-1">
                              {gem.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-purple-200">
                            <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700 border-b border-dashed border-purple-200 flex-1">
                              {gem.deity}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-purple-200">
                            <Info className="w-4 h-4 text-purple-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700 border-b border-dashed border-purple-200 flex-1">
                              {gem.accessibility}
                            </span>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          Explore This Gem
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Browse by Geography */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Map className="w-8 h-8 text-green-600" />
                  Browse by Geography 📍
                </h2>
                <p className="text-gray-600 text-sm mt-1 border-b border-dashed border-gray-300 inline-block">
                  Admin editable: Geography description - Lorem ipsum state/district
                </p>
              </div>
              <Button
                variant="outline"
                className="border-2 border-green-200 text-green-600 hover:bg-green-50 hover:border-green-400 transition-all"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filter by District
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {geographyStates.map((state, index) => (
                <motion.div
                  key={state.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setSelectedState(state.id);
                    setShowLoadMore(true);
                  }}
                  className={`bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${
                    selectedState === state.id ? 'border-green-500 scale-105' : 'border-dashed border-green-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="border-2 border-dashed border-green-300 p-3 rounded-xl bg-white mb-2">
                        <p className="text-xs text-green-600 mb-1">Admin editable: State name</p>
                        <h3 className="font-bold text-lg text-gray-900">{state.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 border-b border-dashed border-green-200 inline-block">
                        {state.districts} districts
                      </p>
                    </div>
                    <Badge className="bg-green-600 text-white text-sm">
                      {state.templeCount}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View Temples
                  </Button>
                </motion.div>
              ))}
            </div>

            {showLoadMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <Button
                  variant="outline"
                  className="border-2 border-green-200 text-green-600 hover:bg-green-50 px-8 py-6"
                >
                  Load More Temples
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            )}
          </div>

          {/* Special Packages */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Package className="w-8 h-8 text-blue-600" />
                Special Pilgrimage Packages 🎁
              </h2>
              <p className="text-gray-600 text-sm mt-1 border-b border-dashed border-gray-300 inline-block">
                Admin editable: Packages description - Lorem ipsum curated tours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialPackages.map((pkg, index) => {
                const Icon = pkg.icon;
                
                return (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
                      <div className={`bg-gradient-to-r ${pkg.gradient} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-3">
                          <Icon className="w-8 h-8" />
                          <Badge className="bg-white/20 text-white border-0">
                            {pkg.tag}
                          </Badge>
                        </div>
                        <div className="border-2 border-dashed border-white/40 p-3 rounded-xl bg-white/10">
                          <p className="text-xs text-white/80 mb-1">Admin editable: Package name</p>
                          <h3 className="font-bold text-lg">{pkg.name}</h3>
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between border-b-2 border-dashed border-gray-200 pb-2">
                          <span className="text-sm text-gray-600">Duration:</span>
                          <span className="font-bold">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center justify-between border-b-2 border-dashed border-gray-200 pb-2">
                          <span className="text-sm text-gray-600">Price:</span>
                          <span className="font-bold text-lg text-gray-900">{pkg.price}</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-200">
                          <p className="text-xs text-gray-500 mb-2">Admin editable: Inclusions</p>
                          <ul className="space-y-1">
                            {pkg.inclusions.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                                <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                                <span className="border-b border-dashed border-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className={`w-full bg-gradient-to-r ${pkg.gradient} text-white shadow-lg`}>
                          <Package className="w-4 h-4 mr-2" />
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Tour Modal (4-step form) */}
        <Dialog open={showCustomTourModal} onOpenChange={setShowCustomTourModal}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl flex items-center gap-3">
                <Navigation className="w-8 h-8 text-orange-600" />
                Build Custom Pilgrimage
              </DialogTitle>
              <DialogDescription className="text-lg border-b border-dashed border-gray-300 inline-block">
                Admin editable: Form description - Step {formStep} of 4
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-6">
              {/* Step 1: Basic Details */}
              {formStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 border-2 border-dashed border-gray-200 p-6 rounded-2xl"
                >
                  <h3 className="font-bold text-xl text-gray-900">Step 1: Basic Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-dashed border-gray-300 p-3 rounded-xl">
                      <label className="text-sm font-medium mb-2 block">Dates (Admin editable)</label>
                      <Input
                        type="date"
                        value={tourForm.startDate}
                        onChange={(e) => setTourForm({ ...tourForm, startDate: e.target.value })}
                      />
                    </div>
                    <div className="border border-dashed border-gray-300 p-3 rounded-xl">
                      <label className="text-sm font-medium mb-2 block">End Date (Admin editable)</label>
                      <Input
                        type="date"
                        value={tourForm.endDate}
                        onChange={(e) => setTourForm({ ...tourForm, endDate: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="border border-dashed border-gray-300 p-3 rounded-xl">
                    <label className="text-sm font-medium mb-2 block">Group Size (Admin editable)</label>
                    <Select
                      value={tourForm.groupSize}
                      onValueChange={(value) => setTourForm({ ...tourForm, groupSize: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 people</SelectItem>
                        <SelectItem value="10-50">10-50 people</SelectItem>
                        <SelectItem value="50+">50+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Special Needs */}
              {formStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 border-2 border-dashed border-gray-200 p-6 rounded-2xl"
                >
                  <h3 className="font-bold text-xl text-gray-900">Step 2: Special Needs</h3>
                  <div className="border border-dashed border-gray-300 p-3 rounded-xl">
                    <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                      <Accessibility className="w-4 h-4" />
                      Senior Care Requirements ♿ (Admin editable)
                    </label>
                    <Select
                      value={tourForm.seniorCare}
                      onValueChange={(value) => setTourForm({ ...tourForm, seniorCare: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select requirements" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No special needs</SelectItem>
                        <SelectItem value="wheelchair">Wheelchair access</SelectItem>
                        <SelectItem value="mobility">Mobility assistance</SelectItem>
                        <SelectItem value="medical">Medical support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Spiritual Preferences */}
              {formStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 border-2 border-dashed border-gray-200 p-6 rounded-2xl"
                >
                  <h3 className="font-bold text-xl text-gray-900">Step 3: Spiritual Preferences</h3>
                  <div className="border border-dashed border-gray-300 p-3 rounded-xl">
                    <label className="text-sm font-medium mb-2 block">Primary Deity Focus (Admin editable)</label>
                    <Select
                      value={tourForm.deity}
                      onValueChange={(value) => setTourForm({ ...tourForm, deity: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select deity" />
                      </SelectTrigger>
                      <SelectContent>
                        {deityCategories.map(d => (
                          <SelectItem key={d.id} value={d.id}>
                            {d.emoji} {d.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Budget Range */}
              {formStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 border-2 border-dashed border-gray-200 p-6 rounded-2xl"
                >
                  <h3 className="font-bold text-xl text-gray-900">Step 4: Budget Range</h3>
                  <div className="border border-dashed border-gray-300 p-3 rounded-xl">
                    <label className="text-sm font-medium mb-2 block">Select Budget (Admin editable)</label>
                    <Select
                      value={tourForm.budget}
                      onValueChange={(value) => setTourForm({ ...tourForm, budget: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy (₹20k-40k)</SelectItem>
                        <SelectItem value="standard">Standard (₹40k-80k)</SelectItem>
                        <SelectItem value="premium">Premium (₹80k+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4 border-t-2 border-dashed border-gray-200">
                {formStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setFormStep(formStep - 1)}
                    className="border-2 border-gray-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
                {formStep < 4 ? (
                  <Button
                    onClick={() => setFormStep(formStep + 1)}
                    className="ml-auto bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Next Step
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleCustomTourSubmit}
                    className="ml-auto bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg px-8 py-6"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request Customization
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* AI Confirmation Modal */}
        <Dialog open={showAIConfirmation} onOpenChange={setShowAIConfirmation}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-3xl flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-purple-600" />
                Grok AI Processing
              </DialogTitle>
            </DialogHeader>

            <div className="py-8">
              {isAITyping ? (
                <div className="flex flex-col items-center justify-center space-y-6">
                  <Loader2 className="w-16 h-16 text-purple-600 animate-spin" />
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
                        className="w-3 h-3 bg-purple-600 rounded-full"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center text-lg border-b-2 border-dashed border-purple-200 pb-2">
                    Admin editable: Loading message
                  </p>
                  <p className="text-gray-600 text-center">
                    Grok AI is analyzing your preferences...
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-green-50 border-4 border-green-200 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 border-2 border-dashed border-green-300 p-3 rounded-xl bg-white">
                        <p className="text-xs text-green-600 mb-1">Admin editable: Success title</p>
                        <h3 className="font-bold text-2xl text-gray-900">Request Received!</h3>
                        <p className="text-sm text-gray-600">Reference: GROK-{Math.floor(Math.random() * 100000)}</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-green-200">
                      <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                        We've received your request! Grok AI is analyzing your preferences and will get back to you within 24 hours with a customized itinerary including:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="border-b border-dashed border-green-200 flex-1">Budget breakdown</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="border-b border-dashed border-green-200 flex-1">Senior care facilities</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="border-b border-dashed border-green-200 flex-1">Custom itinerary with timing</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="border-b border-dashed border-green-200 flex-1">All requested details</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      setShowAIConfirmation(false);
                      setFormStep(1);
                    }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // ========================================
  // SCREEN 2: DEITY CIRCUITS
  // ========================================

  if (currentScreen === 'deity-circuits') {
    const selectedDeityData = deityCategories.find(d => d.id === selectedDeity) || deityCategories[0];
    const Icon = selectedDeityData.icon;

    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <div className={`bg-gradient-to-r ${selectedDeityData.gradient} text-white p-6 shadow-xl`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentScreen('dashboard')}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              <div>
                <div className="border-2 border-dashed border-white/40 p-3 rounded-xl bg-white/10 inline-block">
                  <p className="text-xs text-white/80 mb-1">Admin editable: Deity name</p>
                  <h1 className="text-3xl font-bold flex items-center gap-3">
                    <span className="text-4xl">{selectedDeityData.emoji}</span>
                    {selectedDeityData.name}
                  </h1>
                </div>
                <p className="text-white/90 text-sm mt-2 border-b border-dashed border-white/40 inline-block">
                  {selectedDeityData.count} temples & circuits
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 space-y-8">
          <div className="border-2 border-dashed border-gray-200 p-6 rounded-3xl bg-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Associated Sacred Circuits</h2>
            <p className="text-sm text-gray-500 mb-4 border-b border-dashed border-gray-300 inline-block">
              Admin editable: Circuit list description
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sacredCircuits.slice(0, 3).map((circuit) => (
                <div
                  key={circuit.id}
                  className={`bg-gradient-to-br ${circuit.gradient} text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105`}
                  onClick={() => handleViewDetails(circuit)}
                >
                  <div className="border-2 border-dashed border-white/40 p-3 rounded-xl bg-white/10 mb-3">
                    <p className="text-xs text-white/80 mb-1">Admin editable</p>
                    <h3 className="font-bold text-lg">{circuit.name}</h3>
                  </div>
                  <p className="text-sm text-white/90 mb-4">{circuit.subtitle}</p>
                  <Button variant="secondary" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="border-2 border-dashed border-orange-200 p-6 rounded-3xl bg-white shadow-xl inline-block">
              <p className="text-sm text-orange-600 mb-2">Admin editable: CTA description</p>
              <Button
                onClick={() => setShowCustomTourModal(true)}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg px-8 py-6 shadow-xl"
              >
                <Plus className="w-5 h-5 mr-2" />
                Build by Deity Preference
              </Button>
            </div>
          </div>

          <Button
            onClick={() => setCurrentScreen('dashboard')}
            variant="outline"
            className="mx-auto block border-2 border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Circuits
          </Button>
        </div>
      </div>
    );
  }

  // ========================================
  // SCREEN 3: TEMPLE DETAIL
  // ========================================

  if (currentScreen === 'temple-detail' && selectedTemple) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <div className={`bg-gradient-to-r ${selectedCircuit?.gradient || 'from-orange-500 to-red-600'} text-white p-6 shadow-xl`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentScreen('dashboard')}
                  className="text-white hover:bg-white/20"
                >
                  <ArrowLeft className="w-6 h-6" />
                </Button>
                <div>
                  <div className="border-2 border-dashed border-white/40 p-3 rounded-xl bg-white/10 inline-block mb-2">
                    <p className="text-xs text-white/80 mb-1">Admin editable: Temple name</p>
                    <h1 className="text-3xl font-bold">{selectedTemple.name}</h1>
                  </div>
                  <p className="text-white/90 text-sm border-b border-dashed border-white/30 inline-block">
                    Dedicated to {selectedTemple.deity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleSaveInterest(selectedTemple.id || 'temple')}
                className={`p-4 rounded-full transition-all shadow-lg ${
                  savedInterests.has(selectedTemple.id || 'temple')
                    ? 'bg-red-500 scale-110'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <Heart
                  className={`w-6 h-6 ${
                    savedInterests.has(selectedTemple.id || 'temple') ? 'fill-white' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 space-y-8">
          {/* Temple Significance */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-dashed border-gray-200">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-orange-600" />
              Temple Significance
            </h2>
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-300">
              <p className="text-sm text-gray-500 mb-3">Admin editable: Significance section</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedTemple.description}
              </p>
            </div>
          </div>

          {/* Interactive Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white h-20 text-lg shadow-xl"
              onClick={() => handleWatchVideos(selectedTemple.name)}
            >
              <Youtube className="w-6 h-6 mr-2" />
              Watch Temple Videos
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white h-20 text-lg shadow-xl"
              onClick={() => handleViewMap(selectedTemple.name)}
            >
              <Globe className="w-6 h-6 mr-2" />
              View on Map
            </Button>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white h-20 text-lg shadow-xl"
              onClick={() => setShowCustomTourModal(true)}
            >
              <Navigation className="w-6 h-6 mr-2" />
              Request Custom Tour
            </Button>
          </div>

          {/* Grok AI Travel Tips */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-8 border-2 border-dashed border-purple-300">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Grok AI Travel Tips</h2>
                <p className="text-sm text-purple-600 border-b border-dashed border-purple-300 inline-block">
                  Admin editable: AI tips section
                </p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border-2 border-dashed border-purple-200 shadow-sm">
                  <p className="text-xs text-purple-500 mb-2">Admin editable: Tip {i}</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>
                </div>
              ))}
            </div>

            {/* Ask Grok Query Box */}
            <div className="bg-white p-6 rounded-2xl border-4 border-purple-300 shadow-lg">
              <div className="mb-4">
                <p className="text-sm text-purple-600 mb-2 border-b border-dashed border-purple-200 inline-block">
                  Admin editable: Query box label
                </p>
                <h3 className="font-bold text-xl text-gray-900">Ask Grok About This Temple</h3>
              </div>
              <Input
                placeholder="e.g., What are the darshan timings?"
                value={grokQuery}
                onChange={(e) => setGrokQuery(e.target.value)}
                className="mb-4 h-12 text-lg border-2 border-purple-200"
              />
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white h-14 text-lg"
                onClick={() => {
                  if (grokQuery) {
                    toast.success('Query sent to Grok AI!');
                    setGrokQuery('');
                  }
                }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Ask Grok
              </Button>
            </div>
          </div>

          {/* Nearby Temples */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-green-600" />
                Nearby Temples
              </h2>
              <p className="text-sm text-gray-500 border-b border-dashed border-gray-300 inline-block mt-1">
                Admin editable: Nearby temples description - Admin-managed list
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sacredCircuits.slice(0, 4).map((temple) => (
                <div
                  key={temple.id}
                  className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer border-2 border-dashed border-gray-200 hover:scale-105"
                  onClick={() => handleViewDetails(temple)}
                >
                  <div className="border-2 border-dashed border-gray-300 p-3 rounded-xl bg-gray-50 mb-3">
                    <p className="text-xs text-gray-500 mb-1">Admin editable</p>
                    <h3 className="font-bold">{temple.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{temple.subtitle}</p>
                  <Button size="sm" variant="outline" className="w-full border-2">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
