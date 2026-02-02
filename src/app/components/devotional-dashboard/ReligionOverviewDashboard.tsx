import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  BookOpen,
  Heart,
  MapPin,
  Users,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Clock,
  Star,
  Info,
  Accessibility,
  Globe,
  Youtube,
  Bell,
  TrendingUp,
  Award,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner';

// ========================================
// RELIGION OVERVIEW DASHBOARD
// Feature-Rich Main Screen for Each Religion
// ========================================

interface ReligionOverviewProps {
  religion: {
    id: string;
    name: string;
    emoji: string;
    tagline: string;
    color: string;
    gradient: string;
  };
  onBack: () => void;
  onNavigate: (screen: string, data?: any) => void;
}

interface Circuit {
  id: string;
  name: string;
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  sites: number;
  imageUrl: string;
  highlights: string[];
  bestSeason: string;
}

interface UpcomingFestival {
  id: string;
  name: string;
  date: string;
  daysUntil: number;
  crowdLevel: 'low' | 'medium' | 'high' | 'very-high';
  significance: string;
}

interface SacredText {
  id: string;
  name: string;
  category: 'primary' | 'secondary';
  description: string;
  sitesCount: number;
}

export function ReligionOverviewDashboard({
  religion,
  onBack,
  onNavigate,
}: ReligionOverviewProps) {
  // State Management
  const [selectedTextFilter, setSelectedTextFilter] = useState<string>('all');
  const [selectedRitualTypes, setSelectedRitualTypes] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [showGrokInsights, setShowGrokInsights] = useState(false);
  const [savedCircuits, setSavedCircuits] = useState<string[]>([]);
  const [expandedCircuit, setExpandedCircuit] = useState<string | null>(null);

  // Sample Data (would be replaced with props from comprehensive religion data)
  const circuits: Circuit[] = [
    {
      id: 'circuit-1',
      name: '[Admin: Edit] Sacred Circuit Name 1',
      duration: '[Admin: 7-10 days]',
      difficulty: 'moderate',
      sites: 5,
      imageUrl: 'placeholder',
      highlights: [
        '[Admin: Edit] Major pilgrimage site visits',
        '[Admin: Edit] Sacred ritual participation',
        '[Admin: Edit] Cultural immersion experience',
      ],
      bestSeason: '[Admin: October to March]',
    },
    {
      id: 'circuit-2',
      name: '[Admin: Edit] Heritage Circuit Name 2',
      duration: '[Admin: 4-6 days]',
      difficulty: 'easy',
      sites: 3,
      imageUrl: 'placeholder',
      highlights: [
        '[Admin: Edit] Historical temples/churches/mosques',
        '[Admin: Edit] Local community engagement',
        '[Admin: Edit] Traditional ceremonies',
      ],
      bestSeason: '[Admin: Year-round]',
    },
    {
      id: 'circuit-3',
      name: '[Admin: Edit] Pilgrimage Trek Circuit 3',
      duration: '[Admin: 10-14 days]',
      difficulty: 'challenging',
      sites: 8,
      imageUrl: 'placeholder',
      highlights: [
        '[Admin: Edit] Multi-state pilgrimage journey',
        '[Admin: Edit] Sacred mountain/river visits',
        '[Admin: Edit] Festival timing coordination',
      ],
      bestSeason: '[Admin: September to November]',
    },
  ];

  const upcomingFestivals: UpcomingFestival[] = [
    {
      id: 'fest-1',
      name: '[Admin: Edit] Major Festival Name',
      date: '[Admin: Date 1]',
      daysUntil: 45,
      crowdLevel: 'very-high',
      significance: '[Admin: Edit] Most important annual celebration',
    },
    {
      id: 'fest-2',
      name: '[Admin: Edit] Special Observance Day',
      date: '[Admin: Date 2]',
      daysUntil: 82,
      crowdLevel: 'medium',
      significance: '[Admin: Edit] Sacred remembrance day',
    },
    {
      id: 'fest-3',
      name: '[Admin: Edit] Pilgrimage Season Opening',
      date: '[Admin: Date 3]',
      daysUntil: 120,
      crowdLevel: 'high',
      significance: '[Admin: Edit] Beginning of annual pilgrimage season',
    },
  ];

  const sacredTexts: SacredText[] = [
    {
      id: 'text-1',
      name: '[Admin: Edit] Primary Sacred Text',
      category: 'primary',
      description: '[Admin: Edit] Central scripture and foundation of faith',
      sitesCount: 12,
    },
    {
      id: 'text-2',
      name: '[Admin: Edit] Secondary Sacred Text',
      category: 'secondary',
      description: '[Admin: Edit] Complementary teachings and commentaries',
      sitesCount: 5,
    },
  ];

  const ritualTypes = [
    { id: 'daily', label: 'Daily Prayers', count: 8 },
    { id: 'weekly', label: 'Weekly Services', count: 4 },
    { id: 'special', label: 'Special Ceremonies', count: 6 },
    { id: 'initiation', label: 'Initiation Rites', count: 2 },
  ];

  const grokInsights = [
    {
      id: 'insight-1',
      type: 'timing',
      title: 'Best Time to Visit',
      message: '[Grok AI: October to March offers pleasant weather and moderate crowds at most sacred sites]',
      icon: Clock,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'insight-2',
      type: 'crowd',
      title: 'Crowd Prediction',
      message: '[Grok AI: Next 3 months show 40% lower than peak season crowds - ideal for seniors]',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'insight-3',
      type: 'ritual',
      title: 'Ritual Timing',
      message: '[Grok AI: Early morning rituals (4-6 AM) offer most authentic experience with fewer crowds]',
      icon: Star,
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const handleSaveCircuit = (circuitId: string) => {
    if (savedCircuits.includes(circuitId)) {
      setSavedCircuits(savedCircuits.filter(id => id !== circuitId));
      toast.success('Circuit removed from saved list');
    } else {
      setSavedCircuits([...savedCircuits, circuitId]);
      toast.success('Circuit saved to your wishlist!');
    }
  };

  const handleRitualTypeToggle = (ritualId: string) => {
    if (selectedRitualTypes.includes(ritualId)) {
      setSelectedRitualTypes(selectedRitualTypes.filter(id => id !== ritualId));
    } else {
      setSelectedRitualTypes([...selectedRitualTypes, ritualId]);
    }
  };

  const getCrowdLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'very-high': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'moderate': return 'bg-yellow-500';
      case 'challenging': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className={`relative bg-gradient-to-r ${religion.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative z-10 px-6 py-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Faith Selector
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-5xl backdrop-blur-md shadow-lg border-2 border-white/40">
              {religion.emoji}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-1">{religion.name}</h1>
              <p className="text-white/90 text-base italic">{religion.tagline}</p>
              <Badge className="bg-white/20 text-white border-white/40 mt-2">
                Admin Editable Content
              </Badge>
            </div>
          </div>

          {/* Key Features Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <div className="flex items-center gap-2 mb-2">
                <Accessibility className="h-5 w-5 text-white" />
                <p className="text-white text-xs font-semibold">Accessible Prayer</p>
              </div>
              <p className="text-white/80 text-xs">Wheelchair-friendly sites</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-white" />
                <p className="text-white text-xs font-semibold">Medical Support</p>
              </div>
              <p className="text-white/80 text-xs">24/7 assistance available</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-white" />
                <p className="text-white text-xs font-semibold">Sacred Texts</p>
              </div>
              <p className="text-white/80 text-xs">{sacredTexts.length} primary texts</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-white" />
                <p className="text-white text-xs font-semibold">Festival Calendar</p>
              </div>
              <p className="text-white/80 text-xs">{upcomingFestivals.length} upcoming events</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mt-6">
            <Button className="flex-1 bg-white text-gray-900 hover:bg-white/90 shadow-lg">
              <Globe className="mr-2 h-4 w-4" />
              Browse Google
            </Button>
            <Button className="flex-1 bg-white text-gray-900 hover:bg-white/90 shadow-lg">
              <Youtube className="mr-2 h-4 w-4" />
              Browse YouTube
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-white/90 shadow-lg px-6">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        {/* Smart Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-purple-200"
        >
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">Smart Filters</h2>
            <Badge className="bg-purple-100 text-purple-800 ml-auto">
              [Admin: Customize Filter Options]
            </Badge>
          </div>

          <div className="space-y-4">
            {/* Sacred Text Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sacred Text Filter
              </label>
              <select
                value={selectedTextFilter}
                onChange={(e) => setSelectedTextFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              >
                <option value="all">All Sacred Texts</option>
                {sacredTexts.map((text) => (
                  <option key={text.id} value={text.id}>
                    {text.name} ({text.sitesCount} sites)
                  </option>
                ))}
              </select>
            </div>

            {/* Festival Date Range */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Festival Timing
              </label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="border-2 border-gray-300 rounded-xl"
                  placeholder="Start Date"
                />
                <Input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="border-2 border-gray-300 rounded-xl"
                  placeholder="End Date"
                />
              </div>
            </div>

            {/* Ritual Type Checkboxes */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Ritual Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {ritualTypes.map((ritual) => (
                  <label
                    key={ritual.id}
                    className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl hover:border-purple-300 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedRitualTypes.includes(ritual.id)}
                      onChange={() => handleRitualTypeToggle(ritual.id)}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{ritual.label}</p>
                      <p className="text-xs text-gray-600">{ritual.count} rituals</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Button className={`w-full bg-gradient-to-r ${religion.gradient} text-white shadow-lg`}>
              <Search className="mr-2 h-5 w-5" />
              Apply Filters
            </Button>
          </div>
        </motion.div>

        {/* Sacred Circuits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Sacred Circuits</h2>
            </div>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {circuits.map((circuit, index) => (
              <motion.div
                key={circuit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 hover:shadow-2xl transition-all duration-300 border-2 border-dashed border-gray-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {circuit.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-white text-gray-700 border border-gray-300">
                        <Clock className="h-3 w-3 mr-1" />
                        {circuit.duration}
                      </Badge>
                      <Badge className="bg-white text-gray-700 border border-gray-300">
                        <MapPin className="h-3 w-3 mr-1" />
                        {circuit.sites} sites
                      </Badge>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveCircuit(circuit.id)}
                    className="p-2 hover:bg-white rounded-full transition-colors"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        savedCircuits.includes(circuit.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Difficulty Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-8 rounded ${
                          i === 0 && circuit.difficulty === 'easy'
                            ? getDifficultyColor(circuit.difficulty)
                            : i <= 1 && circuit.difficulty === 'moderate'
                            ? getDifficultyColor(circuit.difficulty)
                            : i <= 2 && circuit.difficulty === 'challenging'
                            ? getDifficultyColor(circuit.difficulty)
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 capitalize">{circuit.difficulty}</p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <button
                    onClick={() => setExpandedCircuit(expandedCircuit === circuit.id ? null : circuit.id)}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 hover:text-gray-900"
                  >
                    <Info className="h-4 w-4" />
                    Highlights
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedCircuit === circuit.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedCircuit === circuit.id && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-2 overflow-hidden"
                      >
                        {circuit.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                            <ChevronRight className="h-3 w-3 flex-shrink-0 mt-0.5 text-blue-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Best Season */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-blue-600 font-semibold mb-1">Best Season</p>
                  <p className="text-xs text-blue-900">{circuit.bestSeason}</p>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${religion.gradient} text-white hover:shadow-lg transition-shadow`}
                  onClick={() => onNavigate('circuit-details', { circuitId: circuit.id })}
                >
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Festival Calendar Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">Festival Calendar</h2>
              <Badge className="bg-purple-100 text-purple-800">Next 3 Events</Badge>
            </div>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
              View Full Calendar <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {upcomingFestivals.map((festival, index) => (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-dashed border-purple-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{festival.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-white text-gray-700 border border-gray-300">
                        <Calendar className="h-3 w-3 mr-1" />
                        {festival.date}
                      </Badge>
                      <Badge className={`border ${getCrowdLevelColor(festival.crowdLevel)}`}>
                        {festival.crowdLevel.replace('-', ' ').toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white rounded-xl px-4 py-2 shadow-sm border-2 border-purple-300">
                      <p className="text-2xl font-bold text-purple-600">{festival.daysUntil}</p>
                      <p className="text-xs text-gray-600">days until</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">{festival.significance}</p>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notify Me
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${religion.gradient} text-white`}
                  >
                    Plan Visit
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sacred Texts Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-600" />
              <h2 className="text-xl font-bold text-gray-900">Sacred Texts Reference</h2>
            </div>
            <Button variant="ghost" className="text-amber-600 hover:text-amber-700">
              Browse Related Sites <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {sacredTexts.map((text, index) => (
              <motion.div
                key={text.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-dashed border-amber-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl ${
                    text.category === 'primary'
                      ? 'bg-amber-500'
                      : 'bg-orange-400'
                  } flex items-center justify-center text-white shadow-lg`}>
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <Badge className={`mb-2 ${
                      text.category === 'primary'
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-orange-100 text-orange-800 border-orange-300'
                    } border`}>
                      {text.category.toUpperCase()}
                    </Badge>
                    <h3 className="font-bold text-gray-900">{text.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">{text.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{text.sitesCount} related sites</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-white border-2 border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    Explore
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grok AI Insights Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl shadow-2xl p-6 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Grok AI Insights</h2>
                  <p className="text-white/80 text-sm">Personalized recommendations for your journey</p>
                </div>
              </div>
              <Button
                onClick={() => setShowGrokInsights(!showGrokInsights)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40"
              >
                {showGrokInsights ? 'Hide' : 'Show'} Insights
              </Button>
            </div>

            <AnimatePresence>
              {showGrokInsights && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  {grokInsights.map((insight, index) => {
                    const Icon = insight.icon;
                    return (
                      <motion.div
                        key={insight.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2">{insight.title}</h3>
                            <p className="text-sm text-white/90">{insight.message}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1 bg-white text-purple-600 hover:bg-white/90 shadow-lg">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Apply to My Plan
                    </Button>
                    <Button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40">
                      <Heart className="mr-2 h-4 w-4" />
                      Save Insights
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 border-4 border-dashed border-gray-300"
        >
          <div className="text-center mb-6">
            <Award className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Begin Your Journey?</h2>
            <p className="text-gray-600">
              Explore sacred sites, participate in rituals, and immerse yourself in spiritual traditions
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => onNavigate('destinations')}
              className={`flex-1 bg-gradient-to-r ${religion.gradient} text-white h-14 text-lg shadow-xl`}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Browse Destinations
            </Button>
            <Button
              onClick={() => onNavigate('custom-plan')}
              className="flex-1 bg-white border-4 border-purple-300 text-purple-700 hover:bg-purple-50 h-14 text-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Custom AI Plan
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
