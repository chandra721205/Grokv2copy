import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Search,
  Globe,
  Youtube,
  Heart,
  Bell,
  Sparkles,
  ChevronRight,
  MapPin,
  Star,
  Calendar,
  Users,
  DollarSign,
  Check,
  Info,
  Accessibility,
  Flame,
  Flower2,
  Sun,
  BookOpen,
  Save,
  ChevronDown,
  Filter,
  Map,
  Play,
  Eye,
  Clock,
  Bookmark,
  Medal,
  Shield,
  Heart as HeartIcon,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner';

// ========================================
// HINDU PILGRIMS – ENHANCED BEAUTIFUL
// Admin-Driven, Browse + Interest, Visually Attractive
// ========================================
// 
// Layer Group: "Hindu – Beautiful & Functional"
// 
// ✅ ENHANCED FEATURES:
// - Beautiful grid-based card layout
// - Attractive circuit cards with icons & hover effects
// - Smart filter bar (State, Difficulty, Hidden Gems)
// - Browse module (YouTube, Google Maps)
// - Visual badges (Accessible, Medical, Heritage, Global)
// - Circuit detail view with admin-editable zones
// - Grok AI Insights panel
// - Enhanced typography & visual hierarchy
// - Smooth animations & interactions
//
// ========================================

type HinduCircuit = 
  | 'jyotirlinga'
  | 'divya-desam'
  | 'pancha-bhoota'
  | 'char-dham'
  | 'shakti-peetha'
  | 'navagraha'
  | 'pancharama'
  | 'ashtavinayak'
  | 'sapta-puri'
  | 'local-devotional'
  | 'hidden-gems'
  | 'admin-defined';

type FlowScreen = 
  | 'landing'
  | 'circuit-detail'
  | 'interest-form'
  | 'confirmation';

interface HinduPilgrimsFlowProps {
  onBack: () => void;
}

// 12 Sacred Circuits - Beautiful Card Data
const hinduCircuits = [
  {
    id: 'jyotirlinga' as HinduCircuit,
    emoji: '🕉️',
    icon: Flame,
    name: '12 Jyotirlingas',
    subtitle: 'Sacred Shiva Shrines',
    description: '[Admin: 12 sacred Shiva temples across India]',
    dedication: 'Shiva',
    tag: 'MOST SACRED',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    tagBg: 'bg-orange-100',
    tagText: 'text-orange-700',
    isFeatured: true,
  },
  {
    id: 'divya-desam' as HinduCircuit,
    emoji: '🏛️',
    icon: BookOpen,
    name: '108 Divya Desams',
    subtitle: 'Vishnu Temples',
    description: '[Admin: 108 holy Vishnu temples]',
    dedication: 'Vishnu',
    tag: '108 TEMPLES',
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-700',
    isFeatured: false,
  },
  {
    id: 'pancha-bhoota' as HinduCircuit,
    emoji: '🔥',
    icon: Flame,
    name: 'Pancha Bhoota Sthalams',
    subtitle: '5 Elements Circuit',
    description: '[Admin: 5 Shiva temples – 5 elements]',
    dedication: 'Shiva – 5 Elements',
    tag: '5 ELEMENTS',
    gradient: 'from-purple-500 via-pink-500 to-rose-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-700',
    isFeatured: false,
  },
  {
    id: 'char-dham' as HinduCircuit,
    emoji: '⛰️',
    icon: MapPin,
    name: 'Char Dham Yatra',
    subtitle: 'Four Divine Abodes',
    description: '[Admin: 4 Himalayan pilgrimage sites]',
    dedication: 'Vishnu & Shiva',
    tag: '4 DHAMS',
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200',
    tagBg: 'bg-green-100',
    tagText: 'text-green-700',
    isFeatured: false,
  },
  {
    id: 'shakti-peetha' as HinduCircuit,
    emoji: '🌺',
    icon: Flower2,
    name: '51 Shakti Peethas',
    subtitle: 'Divine Feminine Shrines',
    description: '[Admin: 51 Goddess temples]',
    dedication: 'Shakti',
    tag: '51 SACRED SITES',
    gradient: 'from-pink-500 via-rose-500 to-red-600',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    tagBg: 'bg-pink-100',
    tagText: 'text-pink-700',
    isFeatured: false,
  },
  {
    id: 'navagraha' as HinduCircuit,
    emoji: '☀️',
    icon: Sun,
    name: 'Navagraha Temples',
    subtitle: 'Nine Planets Circuit',
    description: '[Admin: 9 temples – Nine planetary deities]',
    dedication: 'Nine Planets',
    tag: '9 PLANETS',
    gradient: 'from-yellow-500 via-orange-500 to-amber-600',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    tagBg: 'bg-yellow-100',
    tagText: 'text-yellow-700',
    isFeatured: false,
  },
  {
    id: 'pancharama' as HinduCircuit,
    emoji: '🕉️',
    icon: Shield,
    name: 'Pancharama Kshetras',
    subtitle: 'Five Ancient Shiva Temples',
    description: '[Admin: 5 Shiva temples in Andhra Pradesh]',
    dedication: 'Shiva – Andhra Pradesh',
    tag: '5 TEMPLES',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    tagBg: 'bg-cyan-100',
    tagText: 'text-cyan-700',
    isFeatured: false,
  },
  {
    id: 'ashtavinayak' as HinduCircuit,
    emoji: '🐘',
    icon: Medal,
    name: 'Ashtavinayak',
    subtitle: 'Eight Ganesha Temples',
    description: '[Admin: 8 Ganesha temples near Pune]',
    dedication: 'Ganesha',
    tag: '8 TEMPLES',
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    isFeatured: false,
  },
  {
    id: 'sapta-puri' as HinduCircuit,
    emoji: '🕌',
    icon: BookOpen,
    name: 'Sapta Puri',
    subtitle: 'Seven Sacred Cities',
    description: '[Admin: 7 Moksha liberation cities across India]',
    dedication: 'Multi-Deity – Moksha',
    tag: '7 CITIES',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    tagBg: 'bg-violet-100',
    tagText: 'text-violet-700',
    isFeatured: false,
  },
  {
    id: 'local-devotional' as HinduCircuit,
    emoji: '📍',
    icon: MapPin,
    name: 'Local Devotional Circuits',
    subtitle: 'District Sacred Sites',
    description: '[Admin: Curated local temple trails]',
    dedication: 'Local Deities',
    tag: 'LOCATION BASED',
    gradient: 'from-teal-500 via-emerald-500 to-green-600',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    tagBg: 'bg-teal-100',
    tagText: 'text-teal-700',
    isFeatured: false,
  },
  {
    id: 'hidden-gems' as HinduCircuit,
    emoji: '💎',
    icon: Sparkles,
    name: 'Hidden Gems',
    subtitle: 'Lesser-Known Ancient Temples',
    description: '[Admin: 1000+ year old exclusive sites]',
    dedication: 'Various',
    tag: 'EXCLUSIVE',
    gradient: 'from-rose-500 via-pink-500 to-purple-600',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    tagBg: 'bg-rose-100',
    tagText: 'text-rose-700',
    isFeatured: false,
  },
  {
    id: 'admin-defined' as HinduCircuit,
    emoji: '🏅',
    icon: Star,
    name: 'Admin Defined Circuits',
    subtitle: 'Expert Curated Journeys',
    description: '[Admin: Special pilgrimage packages]',
    dedication: 'Custom',
    tag: 'RECOMMENDED',
    gradient: 'from-slate-500 via-gray-500 to-zinc-600',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    borderColor: 'border-slate-200',
    tagBg: 'bg-slate-100',
    tagText: 'text-slate-700',
    isFeatured: false,
  },
];

export function HinduPilgrimsFlow({ onBack }: HinduPilgrimsFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<FlowScreen>('landing');
  const [selectedCircuit, setSelectedCircuit] = useState<HinduCircuit | null>(null);
  
  // Filters State
  const [selectedState, setSelectedState] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [showHiddenGems, setShowHiddenGems] = useState(false);
  
  // Interest Module State
  const [savedInterests, setSavedInterests] = useState<HinduCircuit[]>([]);
  const [interestNotes, setInterestNotes] = useState('');
  
  // Interest Form State
  const [interestedCircuits, setInterestedCircuits] = useState('');
  const [notes, setNotes] = useState('');
  const [darshanPreference, setDarshanPreference] = useState('');
  const [pace, setPace] = useState('');
  const [circuitFocus, setCircuitFocus] = useState('');
  const [budgetPerPerson, setBudgetPerPerson] = useState('');
  const [travelMonth, setTravelMonth] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [dealNotifications, setDealNotifications] = useState(false);
  const [seniorFriendly, setSeniorFriendly] = useState(false);
  const [wheelchairAccess, setWheelchairAccess] = useState(false);
  const [medicalSupport, setMedicalSupport] = useState(false);

  const handleGoogleMaps = (query: string) => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(query + ' temples india')}`, '_blank');
    toast.success('Opening Google Maps for temple locations');
  };

  const handleYouTubeVideos = (query: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' darshan pilgrimage')}`, '_blank');
    toast.success('Opening YouTube videos for spiritual journeys');
  };

  const handleCircuitClick = (circuitId: HinduCircuit) => {
    setSelectedCircuit(circuitId);
    setCurrentScreen('circuit-detail');
  };

  const handleToggleInterest = (circuitId: HinduCircuit) => {
    if (savedInterests.includes(circuitId)) {
      setSavedInterests(savedInterests.filter(id => id !== circuitId));
      toast.success('Removed from interests');
    } else {
      setSavedInterests([...savedInterests, circuitId]);
      toast.success('Added to interests');
    }
  };

  const handleSaveInterest = () => {
    if (!interestedCircuits.trim()) {
      toast.error('Please enter which circuits interest you');
      return;
    }
    setCurrentScreen('confirmation');
  };

  const handleBack = () => {
    if (currentScreen === 'landing') {
      onBack();
    } else if (currentScreen === 'circuit-detail') {
      setCurrentScreen('landing');
      setSelectedCircuit(null);
    } else if (currentScreen === 'interest-form') {
      setCurrentScreen('circuit-detail');
    } else if (currentScreen === 'confirmation') {
      setCurrentScreen('landing');
      // Reset form
      setInterestedCircuits('');
      setNotes('');
    } else {
      setCurrentScreen('landing');
    }
  };

  // Route to appropriate screen
  if (currentScreen === 'circuit-detail' && selectedCircuit) {
    const circuit = hinduCircuits.find(c => c.id === selectedCircuit)!;
    return (
      <CircuitDetailScreen
        circuit={circuit}
        onBack={handleBack}
        onGoogleMaps={handleGoogleMaps}
        onYouTubeVideos={handleYouTubeVideos}
        onSaveInterest={() => setCurrentScreen('interest-form')}
      />
    );
  }

  if (currentScreen === 'interest-form') {
    return (
      <InterestFormScreen
        onBack={handleBack}
        onSubmit={handleSaveInterest}
        interestedCircuits={interestedCircuits}
        setInterestedCircuits={setInterestedCircuits}
        notes={notes}
        setNotes={setNotes}
        darshanPreference={darshanPreference}
        setDarshanPreference={setDarshanPreference}
        pace={pace}
        setPace={setPace}
        circuitFocus={circuitFocus}
        setCircuitFocus={setCircuitFocus}
        budgetPerPerson={budgetPerPerson}
        setBudgetPerPerson={setBudgetPerPerson}
        travelMonth={travelMonth}
        setTravelMonth={setTravelMonth}
        groupSize={groupSize}
        setGroupSize={setGroupSize}
        accommodation={accommodation}
        setAccommodation={setAccommodation}
        dealNotifications={dealNotifications}
        setDealNotifications={setDealNotifications}
        seniorFriendly={seniorFriendly}
        setSeniorFriendly={setSeniorFriendly}
        wheelchairAccess={wheelchairAccess}
        setWheelchairAccess={setWheelchairAccess}
        medicalSupport={medicalSupport}
        setMedicalSupport={setMedicalSupport}
      />
    );
  }

  if (currentScreen === 'confirmation') {
    return <ConfirmationScreen onBack={handleBack} />;
  }

  // LANDING SCREEN - Beautiful Enhanced Design
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white pb-8">
      {/* Beautiful Header with Gradient */}
      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 px-6 pt-8 pb-8 rounded-b-[2.5rem] shadow-2xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white text-sm font-semibold mb-6 hover:bg-white/20 px-3 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journey
        </button>

        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-4 backdrop-blur-md shadow-xl border-2 border-white/30"
          >
            🕉️
          </motion.div>
          <h1 className="text-white text-3xl font-bold mb-2 tracking-tight">Hindu Pilgrims</h1>
          <p className="text-white/95 text-base font-medium">Spiritual Journeys – 5000+ Years of Tradition</p>
        </div>
      </div>

      <div className="px-6 -mt-6">
        {/* Visual Badges Section - Beautiful Icons */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6 border border-gray-100">
          <div className="grid grid-cols-2 gap-4">
            {/* Accessible Darshan */}
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Accessibility className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-900">Accessible Darshan</p>
                <p className="text-[10px] text-blue-700">Senior & Wheelchair</p>
              </div>
            </div>

            {/* Medical Support */}
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-2xl border border-green-100">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-green-900">Medical Support</p>
                <p className="text-[10px] text-green-700">On-site Assistance</p>
              </div>
            </div>

            {/* Ancient Heritage */}
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Medal className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-900">Ancient Heritage</p>
                <p className="text-[10px] text-orange-700">5000+ Years Old</p>
              </div>
            </div>

            {/* Global Faiths */}
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-2xl border border-purple-100">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-purple-900">Global Faiths</p>
                <p className="text-[10px] text-purple-700">Worldwide Unity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Filter Bar - Elegant Design */}
        <div className="bg-white rounded-3xl shadow-lg p-5 mb-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-orange-600" />
            <h3 className="text-base font-bold text-gray-900">Smart Filters</h3>
          </div>

          <div className="space-y-4">
            {/* State/Region Dropdown */}
            <div>
              <label className="block text-xs font-bold mb-2 text-gray-700">State / Region</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full h-11 px-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              >
                <option value="">All States</option>
                <option value="north">North India</option>
                <option value="south">South India</option>
                <option value="east">East India</option>
                <option value="west">West India</option>
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-xs font-bold mb-2 text-gray-700">Difficulty Level</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDifficultyFilter('all')}
                  className={`h-10 rounded-xl text-sm font-semibold transition-all ${
                    difficultyFilter === 'all'
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Levels
                </button>
                <button
                  onClick={() => setDifficultyFilter('senior')}
                  className={`h-10 rounded-xl text-sm font-semibold transition-all ${
                    difficultyFilter === 'senior'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Senior-Friendly
                </button>
              </div>
            </div>

            {/* Hidden Gems Toggle */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Show Hidden Gems</p>
                  <p className="text-xs text-gray-600">Lesser-known sacred sites</p>
                </div>
              </div>
              <Switch
                checked={showHiddenGems}
                onCheckedChange={setShowHiddenGems}
              />
            </div>
          </div>
        </div>

        {/* Sacred Circuits - Beautiful Grid Layout */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Sacred Circuits</h2>
          <p className="text-sm text-gray-600 mb-5">Choose your spiritual journey path</p>

          <div className="grid grid-cols-1 gap-5">
            {hinduCircuits.map((circuit, index) => (
              <motion.div
                key={circuit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div
                  className={`${
                    circuit.isFeatured
                      ? `bg-gradient-to-br ${circuit.gradient} shadow-2xl`
                      : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl'
                  } rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden`}
                  onClick={() => handleCircuitClick(circuit.id)}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <circuit.icon className="w-full h-full" />
                  </div>

                  <div className="relative">
                    {/* Icon & Heart */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 ${
                        circuit.isFeatured ? 'bg-white/20 border-white/30' : circuit.iconBg
                      } border-2 rounded-2xl flex items-center justify-center shadow-lg`}>
                        <circuit.icon className={`w-7 h-7 ${
                          circuit.isFeatured ? 'text-white' : circuit.iconColor
                        }`} />
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleInterest(circuit.id);
                        }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md ${
                          savedInterests.includes(circuit.id)
                            ? 'bg-pink-100'
                            : circuit.isFeatured ? 'bg-white/20' : 'bg-gray-100'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${
                          savedInterests.includes(circuit.id)
                            ? 'text-pink-600 fill-pink-600'
                            : circuit.isFeatured ? 'text-white' : 'text-gray-600'
                        }`} />
                      </button>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className={`text-xl font-bold mb-1 ${
                      circuit.isFeatured ? 'text-white' : 'text-gray-900'
                    }`}>
                      {circuit.name}
                    </h3>
                    <p className={`text-sm mb-3 ${
                      circuit.isFeatured ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {circuit.subtitle}
                    </p>

                    {/* Description */}
                    <p className={`text-xs mb-4 leading-relaxed ${
                      circuit.isFeatured ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {circuit.description}
                    </p>

                    {/* Tag & Dedication */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`${
                        circuit.isFeatured ? 'bg-white/20' : circuit.tagBg
                      } px-3 py-1.5 rounded-lg`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${
                          circuit.isFeatured ? 'text-white' : circuit.tagText
                        }`}>
                          {circuit.tag}
                        </span>
                      </div>
                      <div className={`${
                        circuit.isFeatured ? 'bg-white/10' : 'bg-gray-100'
                      } px-3 py-1.5 rounded-lg`}>
                        <span className={`text-[10px] font-semibold ${
                          circuit.isFeatured ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          Dedicated to: {circuit.dedication}
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCircuitClick(circuit.id);
                      }}
                      className={`w-full rounded-xl h-11 font-bold text-sm ${
                        circuit.isFeatured
                          ? 'bg-white text-orange-600 hover:bg-gray-100'
                          : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                      } shadow-lg transition-all`}
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore More Card - Browse Module */}
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-6 mb-6 border-2 border-purple-100 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Explore More</h3>
          </div>

          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Discover temple locations and watch spiritual journey videos to plan your pilgrimage.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <Button
              onClick={() => handleYouTubeVideos('hindu pilgrimage temples')}
              className="bg-red-600 hover:bg-red-700 text-white rounded-xl h-12 font-bold shadow-lg"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Videos
            </Button>
            <Button
              onClick={() => handleGoogleMaps('hindu sacred temples')}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-bold shadow-lg"
            >
              <Map className="w-4 h-4 mr-2" />
              Explore on Map
            </Button>
          </div>

          {/* Save Interests Toggle */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <Bookmark className="w-5 h-5 text-purple-600" />
              <p className="text-sm font-bold text-gray-900">Save Your Interests</p>
            </div>
            <Input
              type="text"
              placeholder="Note places you'd like to visit..."
              value={interestNotes}
              onChange={(e) => setInterestNotes(e.target.value)}
              className="h-10 text-sm bg-white border-purple-200"
            />
          </div>
        </div>

        {/* Grok AI Insights - Beautiful Panel */}
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-white font-bold text-lg">Grok AI Insights</h3>
            </div>
            
            <p className="text-white/80 text-xs mb-3 uppercase tracking-wider font-semibold">
              CEREMONY TIMING & SACRED CIRCUITS
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4 border border-white/20">
              <p className="text-purple-100 text-sm leading-relaxed">
                AI analysis shows <span className="text-yellow-300 font-bold">Pancha Bhoota Sthalams</span> experiencing 
                40% more interest for their meditative ambiance and unique elemental significance. 
                Best time: October-March for comfortable weather.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold rounded-full transition-all backdrop-blur-sm border border-white/30">
                LIKE THIS
              </button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-xs font-bold rounded-full transition-all shadow-lg flex items-center gap-2">
                <Save className="w-3.5 h-3.5" />
                Save Grok Insight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CIRCUIT DETAIL SCREEN - Beautiful Layout
// ========================================
interface CircuitDetailScreenProps {
  circuit: typeof hinduCircuits[0];
  onBack: () => void;
  onGoogleMaps: (query: string) => void;
  onYouTubeVideos: (query: string) => void;
  onSaveInterest: () => void;
}

function CircuitDetailScreen({
  circuit,
  onBack,
  onGoogleMaps,
  onYouTubeVideos,
  onSaveInterest,
}: CircuitDetailScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      {/* Beautiful Header */}
      <div className={`bg-gradient-to-br ${circuit.gradient} px-6 pt-8 pb-6 rounded-b-[2rem] shadow-xl`}>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white text-sm font-semibold mb-6 hover:bg-white/20 px-3 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Circuits
        </button>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md shadow-xl border-2 border-white/30">
            <circuit.icon className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold mb-1">{circuit.name}</h1>
            <p className="text-white/95 text-sm font-medium">{circuit.subtitle}</p>
          </div>
        </div>

        {/* Browse Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => onYouTubeVideos(circuit.name)}
            className="bg-white hover:bg-gray-100 text-red-600 rounded-xl h-12 font-bold shadow-lg"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Videos
          </Button>
          <Button
            onClick={() => onGoogleMaps(circuit.name)}
            className="bg-white hover:bg-gray-100 text-blue-600 rounded-xl h-12 font-bold shadow-lg"
          >
            <Map className="w-4 h-4 mr-2" />
            Explore Map
          </Button>
        </div>
      </div>

      <div className="px-6 pt-6">
        {/* Admin-Editable Zones - Beautiful Format */}
        <div className="bg-white rounded-3xl p-6 mb-6 border-2 border-dashed border-orange-300 shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-bold text-base text-orange-900">[Admin: Editable Content Zone]</h3>
          </div>

          <div className="space-y-4">
            {/* Spiritual Significance */}
            <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-300">
              <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Spiritual Significance
              </p>
              <p className="text-xs text-gray-600 bg-white px-3 py-2 rounded-lg">
                [Description will be added by admin]
              </p>
            </div>

            {/* Duration & Budget */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-300">
                <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  Duration
                </p>
                <p className="text-xs text-gray-600">[Admin: Days needed]</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-300">
                <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  Budget Range
                </p>
                <p className="text-xs text-gray-600">[Admin: Cost estimate]</p>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-300">
              <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-500" />
                Best Time to Visit
              </p>
              <p className="text-xs text-gray-600">[Admin: Seasonal recommendations]</p>
            </div>

            {/* Accessibility Notes */}
            <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-300">
              <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                <Accessibility className="w-4 h-4 text-blue-500" />
                Accessibility Notes
              </p>
              <p className="text-xs text-gray-600">[Admin: Senior-friendly, wheelchair access info]</p>
            </div>

            {/* Key Temples */}
            <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-300">
              <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                Key Temples
              </p>
              <p className="text-xs text-gray-600">[Admin: List of main temples in circuit]</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onSaveInterest}
          className={`w-full rounded-2xl bg-gradient-to-r ${circuit.gradient} text-white h-14 font-bold shadow-2xl text-base mb-4`}
        >
          Save Interest & Continue
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>

        {/* Info Card */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-orange-900 leading-relaxed font-medium">
                <strong className="block mb-1">Browse & Discover:</strong>
                Use YouTube and Maps to explore temples. Save your interests, and we'll notify you when 
                admin-published {circuit.name} packages match your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// INTEREST FORM SCREEN
// ========================================
interface InterestFormScreenProps {
  onBack: () => void;
  onSubmit: () => void;
  interestedCircuits: string;
  setInterestedCircuits: (value: string) => void;
  notes: string;
  setNotes: (value: string) => void;
  darshanPreference: string;
  setDarshanPreference: (value: string) => void;
  pace: string;
  setPace: (value: string) => void;
  circuitFocus: string;
  setCircuitFocus: (value: string) => void;
  budgetPerPerson: string;
  setBudgetPerPerson: (value: string) => void;
  travelMonth: string;
  setTravelMonth: (value: string) => void;
  groupSize: string;
  setGroupSize: (value: string) => void;
  accommodation: string;
  setAccommodation: (value: string) => void;
  dealNotifications: boolean;
  setDealNotifications: (value: boolean) => void;
  seniorFriendly: boolean;
  setSeniorFriendly: (value: boolean) => void;
  wheelchairAccess: boolean;
  setWheelchairAccess: (value: boolean) => void;
  medicalSupport: boolean;
  setMedicalSupport: (value: boolean) => void;
}

function InterestFormScreen({
  onBack,
  onSubmit,
  interestedCircuits,
  setInterestedCircuits,
  notes,
  setNotes,
  darshanPreference,
  setDarshanPreference,
  pace,
  setPace,
  circuitFocus,
  setCircuitFocus,
  budgetPerPerson,
  setBudgetPerPerson,
  travelMonth,
  setTravelMonth,
  groupSize,
  setGroupSize,
  accommodation,
  setAccommodation,
  dealNotifications,
  setDealNotifications,
  seniorFriendly,
  setSeniorFriendly,
  wheelchairAccess,
  setWheelchairAccess,
  medicalSupport,
  setMedicalSupport,
}: InterestFormScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 pt-8 pb-6 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white text-sm font-semibold mb-6 hover:bg-white/20 px-3 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <h1 className="text-white text-2xl font-bold mb-2">Sacred Circuit Interests</h1>
        <p className="text-white/90 text-sm">Share your pilgrimage preferences</p>
      </div>

      <div className="px-6 pt-6">
        <div className="bg-white rounded-3xl p-6 shadow-xl mb-6 border border-gray-100">
          {/* Circuits Interest */}
          <div className="mb-5">
            <label className="block text-sm font-bold mb-2 text-gray-900">
              Which circuits interest you? <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="e.g., 12 Jyotirlingas, Char Dham, Shakti Peethas..."
              value={interestedCircuits}
              onChange={(e) => setInterestedCircuits(e.target.value)}
              className="w-full h-12 bg-gray-50 border-gray-300 text-base rounded-xl"
            />
          </div>

          {/* Hindu-Specific Preferences */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 mb-5 border-2 border-orange-100">
            <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-gray-900">
              <Sparkles className="w-5 h-5 text-orange-600" />
              Pilgrim Preferences
            </h4>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-800">Darshan Preference</label>
                <select
                  value={darshanPreference}
                  onChange={(e) => setDarshanPreference(e.target.value)}
                  className="w-full h-11 px-3 border-2 border-gray-300 rounded-xl bg-white text-sm"
                >
                  <option value="">Select Preference</option>
                  <option value="VIP">VIP Darshan</option>
                  <option value="EarlyMorning">Early Morning</option>
                  <option value="SeniorQueue">Senior Queue</option>
                  <option value="Regular">Regular Darshan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 text-gray-800">Pace</label>
                <select
                  value={pace}
                  onChange={(e) => setPace(e.target.value)}
                  className="w-full h-11 px-3 border-2 border-gray-300 rounded-xl bg-white text-sm"
                >
                  <option value="">Select Pace</option>
                  <option value="Relaxed">Relaxed</option>
                  <option value="Balanced">Balanced</option>
                  <option value="Intensive">Intensive</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 text-gray-800">Circuit Focus</label>
                <select
                  value={circuitFocus}
                  onChange={(e) => setCircuitFocus(e.target.value)}
                  className="w-full h-11 px-3 border-2 border-gray-300 rounded-xl bg-white text-sm"
                >
                  <option value="">Select Focus</option>
                  <option value="Shiva">Shiva</option>
                  <option value="Vishnu">Vishnu</option>
                  <option value="Shakti">Shakti</option>
                  <option value="Mixed">Mixed Deities</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-5">
            <label className="block text-sm font-bold mb-2 text-gray-900">Additional Notes</label>
            <textarea
              placeholder="Special requirements, ritual preferences, dietary needs..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-24 px-4 py-3 border-2 border-gray-300 rounded-xl bg-gray-50 text-sm resize-none"
            />
          </div>

          {/* Budget & Timing */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 mb-5 border-2 border-purple-100">
            <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-gray-900">
              <DollarSign className="w-5 h-5 text-purple-600" />
              Budget & Timing
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-800">Budget/Person</label>
                <Input
                  type="text"
                  placeholder="₹50,000"
                  value={budgetPerPerson}
                  onChange={(e) => setBudgetPerPerson(e.target.value)}
                  className="h-11 text-sm bg-white border-gray-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-800">Month</label>
                <select
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full h-11 px-3 border-2 border-gray-300 rounded-xl bg-white text-sm"
                >
                  <option value="">Select</option>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-800">Group Size</label>
                <Input
                  type="text"
                  placeholder="4"
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value)}
                  className="h-11 text-sm bg-white border-gray-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-800">Stay</label>
                <select
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                  className="w-full h-11 px-3 border-2 border-gray-300 rounded-xl bg-white text-sm"
                >
                  <option value="">Type</option>
                  <option value="Budget">Budget</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 mb-5 border-2 border-blue-100">
            <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-gray-900">
              <Accessibility className="w-5 h-5 text-blue-600" />
              Accessibility
            </h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800">Senior-friendly</label>
                <Switch checked={seniorFriendly} onCheckedChange={setSeniorFriendly} />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800">Wheelchair access</label>
                <Switch checked={wheelchairAccess} onCheckedChange={setWheelchairAccess} />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800">Medical support</label>
                <Switch checked={medicalSupport} onCheckedChange={setMedicalSupport} />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl mb-5 border-2 border-orange-100">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-orange-600" />
              <div>
                <p className="font-bold text-sm text-gray-900">Notify Me</p>
                <p className="text-xs text-gray-600">Match my preferences</p>
              </div>
            </div>
            <Switch checked={dealNotifications} onCheckedChange={setDealNotifications} />
          </div>

          {/* Submit */}
          <Button
            onClick={onSubmit}
            disabled={!interestedCircuits.trim()}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white h-14 font-bold shadow-xl disabled:opacity-50"
          >
            <Check className="w-5 h-5 mr-2" />
            Submit Interest
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CONFIRMATION SCREEN
// ========================================
interface ConfirmationScreenProps {
  onBack: () => void;
}

function ConfirmationScreen({ onBack }: ConfirmationScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full text-center border-2 border-orange-200"
      >
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-12 h-12 text-orange-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">Sacred Interest Saved! 🙏</h1>
        
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          We'll notify you when admin-published Hindu circuit packages match your budget & preferences.
        </p>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5 mb-6 text-left">
          <p className="text-sm text-orange-900 font-medium mb-2">
            <strong>What happens next:</strong>
          </p>
          <ul className="text-xs text-orange-800 space-y-2">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Admin reviews your sacred circuit preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>Notifications when matching pilgrimage packages are published</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <span>No payment or booking commitment at this stage</span>
            </li>
          </ul>
        </div>

        <Button
          onClick={onBack}
          className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white h-12 font-bold"
        >
          Back to Hindu Pilgrims
        </Button>
      </motion.div>
    </div>
  );
}
