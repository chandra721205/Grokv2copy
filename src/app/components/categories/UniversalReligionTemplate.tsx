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
  CalendarDays,
  Users,
  DollarSign,
  Check,
  Info,
  Accessibility,
  BookOpen,
  Save,
  ChevronDown,
  Plus,
  X,
  Clock,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner';

// ========================================
// UNIVERSAL RELIGION COMPONENT TEMPLATE
// Reusable structure for all 8 non-Hindu religions
// ========================================

interface Site {
  id: string;
  name: string;
  location: string;
  subtitle: string;
  description: string;
  badge: string;
  deity: string;
  significance: string;
  visitors: string;
  accessibility: string;
  gradient: string;
}

interface Ritual {
  id: string;
  name: string;
  description: string;
  duration: string;
  site: string;
  procedure: string;
  significance: string;
  participants: string;
  icon: string;
}

interface Festival {
  id: string;
  name: string;
  date: string;
  dateRange: string;
  description: string;
  significance: string;
  celebrations: string;
  venue: string;
  expectedVisitors: string;
  rituals: string[];
  icon: string;
  color: string;
}

interface Package {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  inclusions: string[];
  highlights: string[];
  dates: string;
  groupSize: string;
  badge: string;
  gradient: string;
}

interface SacredText {
  name: string;
  quote: string;
  translation: string;
  source: string;
}

interface ReligionData {
  name: string;
  emoji: string;
  subtitle: string;
  gradient: string;
  sacredText: SacredText;
  sites: Site[];
  rituals: Ritual[];
  festivals: Festival[];
  packages: Package[];
}

interface UniversalReligionTemplateProps {
  religionData: ReligionData;
  onBack: () => void;
}

export function UniversalReligionTemplate({ 
  religionData,
  onBack 
}: UniversalReligionTemplateProps) {
  // State Management
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'rituals' | 'planning' | 'packages' | 'grok-chat'>('landing');
  const [showRitualsCalendar, setShowRitualsCalendar] = useState(false);
  const [showFestivalsCalendar, setShowFestivalsCalendar] = useState(true);
  const [savedInterests, setSavedInterests] = useState<string[]>([]);
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [builderStep, setBuilderStep] = useState(1);
  const [showGrokResponse, setShowGrokResponse] = useState(false);
  const [grokTyping, setGrokTyping] = useState(false);

  // Form State
  const [planningForm, setPlanningForm] = useState({
    sites: [] as string[],
    groupSize: '1-5',
    specialRequests: {
      seniorCare: false,
      wheelchair: false,
      medical: false,
    },
    budget: { min: 30000, max: 100000 },
    dates: { start: '', end: '' },
  });

  // Interest Handlers
  const toggleInterest = (siteId: string) => {
    if (savedInterests.includes(siteId)) {
      setSavedInterests(savedInterests.filter(id => id !== siteId));
      toast.success('Removed from interests');
    } else {
      setSavedInterests([...savedInterests, siteId]);
      toast.success('Added to interests! ♥️');
    }
  };

  const handleSaveAllInterests = () => {
    if (savedInterests.length === 0) {
      toast.error('Please select at least one site');
      return;
    }
    
    toast.success(`Your interests saved! Grok AI will plan your perfect ${religionData.name} journey.`);
    setTimeout(() => {
      setCurrentScreen('grok-chat');
      setGrokTyping(true);
      setTimeout(() => {
        setGrokTyping(false);
        setShowGrokResponse(true);
      }, 3000);
    }, 1500);
  };

  const handleBuilderNext = () => {
    if (builderStep < 4) {
      setBuilderStep(builderStep + 1);
    } else {
      setShowCustomBuilder(false);
      setGrokTyping(true);
      toast.success('Request submitted to Grok AI!');
      setTimeout(() => {
        setGrokTyping(false);
        setShowGrokResponse(true);
        setCurrentScreen('grok-chat');
      }, 3000);
    }
  };

  // LANDING SCREEN
  if (currentScreen === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className={`relative h-64 bg-gradient-to-r ${religionData.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
          
          <div className="relative z-10 px-6 py-8">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white/20 mb-6"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Devotional Tourism
            </Button>

            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-5xl backdrop-blur-md shadow-lg border-2 border-white/30">
                {religionData.emoji}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-2">
              {religionData.name}
            </h1>
            <p className="text-white/90 text-center text-base">
              {religionData.subtitle}
            </p>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="px-6 -mt-6 mb-6">
          <div className="bg-white rounded-2xl shadow-xl p-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl">
                <Accessibility className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-xs font-bold text-blue-900">Accessible Sites</p>
                  <p className="text-[10px] text-blue-600">Senior & Wheelchair</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-xl">
                <Heart className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-xs font-bold text-red-900">Medical Support</p>
                  <p className="text-[10px] text-red-600">24/7 On-site</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl">
                <BookOpen className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="text-xs font-bold text-amber-900">{religionData.sacredText.name}</p>
                  <p className="text-[10px] text-amber-600">Sacred Scripture</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl">
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-xs font-bold text-green-900">Group Tours</p>
                  <p className="text-[10px] text-green-600">Customizable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Text Quote */}
        <div className="px-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-br ${religionData.gradient} rounded-2xl p-6 shadow-xl border-2 border-dashed border-white/30`}
            title="Admin: Edit sacred text quote"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="text-white text-lg font-bold mb-2 italic">
                  "{religionData.sacredText.quote}"
                </p>
                <p className="text-white/90 text-sm mb-2">
                  {religionData.sacredText.translation}
                </p>
                <p className="text-white/80 text-xs">
                  - {religionData.sacredText.source}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grok AI Insights */}
        <div className="px-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-white" />
                <h3 className="text-white font-bold text-sm">GROK AI INSIGHTS</h3>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-gray-900 mb-2 text-sm">
                BEST TIME TO VISIT & FESTIVAL RECOMMENDATIONS
              </h4>
              <p className="text-gray-700 text-xs leading-relaxed mb-4">
                Plan your {religionData.name} journey during major festivals for an authentic experience. 
                October to March offers pleasant weather for most sacred sites. 
                Senior devotees should book accessibility services 2 weeks in advance.
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-purple-600 border-purple-200 hover:bg-purple-50"
                >
                  <Heart className="h-4 w-4 mr-1" />
                  LIKE THIS
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  onClick={() => {
                    toast.success('Applied to Custom Journey Builder!');
                    setShowCustomBuilder(true);
                  }}
                >
                  Apply to Journey
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sacred Sites Grid */}
        <div className="px-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Sacred Sites
              </h2>
              <p className="text-sm text-gray-600">
                Visit the holiest pilgrimage destinations
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {religionData.sites.map((site, index) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-dashed border-gray-200"
                title="Admin: Edit sacred site details"
              >
                <div className={`h-2 bg-gradient-to-r ${site.gradient}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <Badge className={`bg-gradient-to-r ${site.gradient} text-white text-[10px] mb-2`}>
                        {site.badge}
                      </Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 bg-gray-100 px-2 py-1 rounded">
                        {site.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{site.subtitle}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span className="bg-gray-100 px-2 py-0.5 rounded">{site.location}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleInterest(site.id)}
                      className="flex-shrink-0 ml-3"
                    >
                      <Heart
                        className={`h-6 w-6 transition-all ${
                          savedInterests.includes(site.id)
                            ? 'fill-pink-500 text-pink-500'
                            : 'text-gray-400 hover:text-pink-500'
                        }`}
                      />
                    </button>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {site.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-blue-50 rounded-lg p-2">
                      <p className="text-[10px] text-blue-600 mb-0.5">Dedicated to</p>
                      <p className="text-xs font-bold text-blue-900">{site.deity}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-2">
                      <p className="text-[10px] text-purple-600 mb-0.5">Significance</p>
                      <p className="text-xs font-bold text-purple-900">{site.significance}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2">
                      <p className="text-[10px] text-green-600 mb-0.5">Visitors</p>
                      <p className="text-xs font-bold text-green-900">{site.visitors}</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-2">
                      <p className="text-[10px] text-amber-600 mb-0.5">Accessibility</p>
                      <p className="text-xs font-bold text-amber-900">{site.accessibility}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(site.subtitle)}`, '_blank');
                      }}
                    >
                      <Youtube className="h-4 w-4 mr-1 text-red-600" />
                      Watch Videos
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        window.open(`https://www.google.com/search?q=${encodeURIComponent(site.subtitle + ' pilgrimage')}`, '_blank');
                      }}
                    >
                      <Globe className="h-4 w-4 mr-1 text-blue-600" />
                      Explore
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rituals & Packages Buttons */}
        <div className="px-6 mb-6">
          <Button
            onClick={() => setCurrentScreen('rituals')}
            className={`w-full bg-gradient-to-r ${religionData.gradient} text-white h-16 text-base font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all mb-3`}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            View Rituals & Festivals
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => setCurrentScreen('planning')}
              variant="outline"
              className="h-14 flex-col gap-1 border-2"
            >
              <Calendar className="h-5 w-5" />
              <span className="text-xs font-bold">Plan Journey</span>
            </Button>
            <Button
              onClick={() => setCurrentScreen('packages')}
              variant="outline"
              className="h-14 flex-col gap-1 border-2"
            >
              <DollarSign className="h-5 w-5" />
              <span className="text-xs font-bold">View Packages</span>
            </Button>
          </div>
        </div>

        {/* Save Interests Button */}
        {savedInterests.length > 0 && (
          <div className="px-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-5 shadow-xl"
            >
              <p className="text-white text-center mb-3">
                <Heart className="h-5 w-5 inline mr-2" />
                {savedInterests.length} site{savedInterests.length > 1 ? 's' : ''} saved
              </p>
              <Button
                onClick={handleSaveAllInterests}
                className="w-full bg-white text-pink-600 hover:bg-pink-50 font-bold"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Grok AI Itinerary
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    );
  }

  // RITUALS & FESTIVALS SCREEN
  if (currentScreen === 'rituals') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-6 py-8">
          <Button
            onClick={() => setCurrentScreen('landing')}
            variant="ghost"
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Overview
          </Button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📖 Rituals & Festivals
          </h1>
          <p className="text-gray-600 mb-6">
            Sacred practices and celebrations
          </p>

          {/* Rituals Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Sacred Rituals</h2>
              <Button
                onClick={() => setShowRitualsCalendar(!showRitualsCalendar)}
                variant="outline"
                size="sm"
              >
                {showRitualsCalendar ? 'Hide' : 'Show'} Details
              </Button>
            </div>

            {showRitualsCalendar && (
              <div className="grid gap-4">
                {religionData.rituals.map((ritual, index) => (
                  <motion.div
                    key={ritual.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-5 border-2 border-dashed border-gray-200"
                    title="Admin: Edit ritual details"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl">{ritual.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 bg-gray-100 px-2 py-1 rounded inline-block">
                          {ritual.name}
                        </h3>
                        <p className="text-sm text-gray-700 mt-2">{ritual.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-xs text-blue-600 mb-1">Duration</p>
                        <p className="text-sm font-bold text-blue-900">{ritual.duration}</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="text-xs text-purple-600 mb-1">Location</p>
                        <p className="text-sm font-bold text-purple-900 bg-purple-100 px-2 rounded">
                          {ritual.site}
                        </p>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-3 mb-3">
                      <p className="text-xs text-amber-600 mb-1">Procedure</p>
                      <p className="text-sm text-amber-900">{ritual.procedure}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs text-green-600 mb-1">Significance</p>
                      <p className="text-sm text-green-900">{ritual.significance}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Festivals Calendar */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🎉 Festival Calendar
            </h2>

            <div className="grid gap-4">
              {religionData.festivals.map((festival, index) => (
                <motion.div
                  key={festival.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${festival.color} rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-white/30`}
                  title="Admin: Edit festival details"
                >
                  <div className="p-5 text-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <Badge className="bg-white/30 text-white text-xs mb-2">
                          {festival.significance}
                        </Badge>
                        <h3 className="text-xl font-bold mb-1">{festival.name}</h3>
                        <p className="text-sm opacity-90 bg-white/20 px-2 py-1 rounded inline-block">
                          {festival.date}
                        </p>
                      </div>
                      <div className="text-4xl">{festival.icon}</div>
                    </div>

                    <p className="text-sm opacity-95 mb-4 leading-relaxed">
                      {festival.description}
                    </p>

                    <div className="bg-white/20 rounded-xl p-3 mb-3">
                      <p className="text-xs opacity-80 mb-1">Celebrations</p>
                      <p className="text-sm font-semibold">{festival.celebrations}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-white/20 rounded-lg p-2">
                        <p className="text-xs opacity-80">Venue</p>
                        <p className="text-sm font-bold bg-white/20 px-2 rounded">
                          {festival.venue}
                        </p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-2">
                        <p className="text-xs opacity-80">Expected Visitors</p>
                        <p className="text-sm font-bold">{festival.expectedVisitors}</p>
                      </div>
                    </div>

                    <div className="bg-white/20 rounded-xl p-3">
                      <p className="text-xs opacity-80 mb-2">Key Rituals</p>
                      <div className="space-y-1">
                        {festival.rituals.map((ritual, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="h-4 w-4" />
                            <span className="text-sm">{ritual}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PACKAGES SCREEN
  if (currentScreen === 'packages') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-6 py-8">
          <Button
            onClick={() => setCurrentScreen('landing')}
            variant="ghost"
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Overview
          </Button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🎁 Pilgrimage Packages
          </h1>
          <p className="text-gray-600 mb-6">
            Curated spiritual journeys
          </p>

          <div className="grid gap-6">
            {religionData.packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-gray-200"
                title="Admin: Edit package details"
              >
                <div className={`h-3 bg-gradient-to-r ${pkg.gradient}`} />
                <div className="p-6">
                  <Badge className={`bg-gradient-to-r ${pkg.gradient} text-white mb-3`}>
                    {pkg.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-gray-100 px-3 py-2 rounded">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-blue-50 rounded-xl p-3 text-center">
                      <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs text-blue-600">Duration</p>
                      <p className="text-sm font-bold text-blue-900">{pkg.duration}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                      <p className="text-xs text-green-600">Price</p>
                      <p className="text-sm font-bold text-green-900">{pkg.price}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3 text-center">
                      <Users className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                      <p className="text-xs text-purple-600">Group</p>
                      <p className="text-sm font-bold text-purple-900">{pkg.groupSize}</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 mb-4">
                    <p className="text-sm font-bold text-amber-900 mb-2">Inclusions:</p>
                    <div className="space-y-1">
                      {pkg.inclusions.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-amber-900">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-4 mb-4">
                    <p className="text-sm font-bold text-indigo-900 mb-2">Highlights:</p>
                    <div className="space-y-1">
                      {pkg.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-indigo-900">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      setShowCustomBuilder(true);
                      setBuilderStep(1);
                    }}
                    className={`w-full h-12 bg-gradient-to-r ${pkg.gradient} text-white font-bold rounded-xl`}
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Customize This Package
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Builder Modal */}
        <AnimatePresence>
          {showCustomBuilder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowCustomBuilder(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              >
                <div className={`bg-gradient-to-r ${religionData.gradient} p-6 sticky top-0 z-10`}>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-white">
                      Customize Your Journey
                    </h2>
                    <button
                      onClick={() => setShowCustomBuilder(false)}
                      className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <p className="text-white/90 text-sm">Step {builderStep} of 4</p>
                  <div className="w-full bg-white/30 h-2 rounded-full mt-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(builderStep / 4) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="p-6">
                  {builderStep === 1 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Dates</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
                          <Input
                            type="date"
                            value={planningForm.dates.start}
                            onChange={(e) => setPlanningForm({
                              ...planningForm,
                              dates: { ...planningForm.dates, start: e.target.value }
                            })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">End Date</label>
                          <Input
                            type="date"
                            value={planningForm.dates.end}
                            onChange={(e) => setPlanningForm({
                              ...planningForm,
                              dates: { ...planningForm.dates, end: e.target.value }
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {builderStep === 2 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Group & Budget</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Group Size</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['1-5', '6-15', '16+'].map(size => (
                              <button
                                key={size}
                                onClick={() => setPlanningForm({ ...planningForm, groupSize: size })}
                                className={`p-3 rounded-xl border-2 font-bold ${
                                  planningForm.groupSize === size
                                    ? `border-orange-500 bg-orange-50`
                                    : 'border-gray-200'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {builderStep === 3 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Special Needs</h3>
                      <div className="space-y-4">
                        <label className="flex items-center justify-between p-4 border-2 rounded-xl">
                          <div className="flex items-center gap-3">
                            <Accessibility className="h-5 w-5 text-blue-600" />
                            <span className="font-bold">Senior Care</span>
                          </div>
                          <Switch
                            checked={planningForm.specialRequests.seniorCare}
                            onCheckedChange={(checked) => 
                              setPlanningForm({
                                ...planningForm,
                                specialRequests: { ...planningForm.specialRequests, seniorCare: checked }
                              })
                            }
                          />
                        </label>
                        <label className="flex items-center justify-between p-4 border-2 rounded-xl">
                          <div className="flex items-center gap-3">
                            <Accessibility className="h-5 w-5 text-purple-600" />
                            <span className="font-bold">Wheelchair</span>
                          </div>
                          <Switch
                            checked={planningForm.specialRequests.wheelchair}
                            onCheckedChange={(checked) => 
                              setPlanningForm({
                                ...planningForm,
                                specialRequests: { ...planningForm.specialRequests, wheelchair: checked }
                              })
                            }
                          />
                        </label>
                        <label className="flex items-center justify-between p-4 border-2 rounded-xl">
                          <div className="flex items-center gap-3">
                            <Heart className="h-5 w-5 text-red-600" />
                            <span className="font-bold">Medical Support</span>
                          </div>
                          <Switch
                            checked={planningForm.specialRequests.medical}
                            onCheckedChange={(checked) => 
                              setPlanningForm({
                                ...planningForm,
                                specialRequests: { ...planningForm.specialRequests, medical: checked }
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                  )}

                  {builderStep === 4 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Review & Submit</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <p className="text-xs text-blue-600 mb-1">Dates</p>
                          <p className="text-sm font-bold text-blue-900">
                            {planningForm.dates.start || 'Not set'} to {planningForm.dates.end || 'Not set'}
                          </p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                          <p className="text-xs text-purple-600 mb-1">Group Size</p>
                          <p className="text-sm font-bold text-purple-900">{planningForm.groupSize} people</p>
                        </div>
                        {(planningForm.specialRequests.seniorCare || 
                          planningForm.specialRequests.wheelchair || 
                          planningForm.specialRequests.medical) && (
                          <div className="bg-amber-50 rounded-xl p-4">
                            <p className="text-xs text-amber-600 mb-2">Special Requirements</p>
                            <div className="space-y-1">
                              {planningForm.specialRequests.seniorCare && (
                                <div className="flex items-center gap-2">
                                  <Check className="h-4 w-4 text-amber-600" />
                                  <span className="text-sm text-amber-900">Senior Care</span>
                                </div>
                              )}
                              {planningForm.specialRequests.wheelchair && (
                                <div className="flex items-center gap-2">
                                  <Check className="h-4 w-4 text-amber-600" />
                                  <span className="text-sm text-amber-900">Wheelchair Access</span>
                                </div>
                              )}
                              {planningForm.specialRequests.medical && (
                                <div className="flex items-center gap-2">
                                  <Check className="h-4 w-4 text-amber-600" />
                                  <span className="text-sm text-amber-900">Medical Support</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    {builderStep > 1 && (
                      <Button
                        onClick={() => setBuilderStep(builderStep - 1)}
                        variant="outline"
                        className="flex-1"
                      >
                        Previous
                      </Button>
                    )}
                    <Button
                      onClick={handleBuilderNext}
                      className={`flex-1 bg-gradient-to-r ${religionData.gradient} text-white`}
                    >
                      {builderStep === 4 ? (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Submit to Grok AI
                        </>
                      ) : (
                        <>
                          Next
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // GROK AI CHAT SCREEN
  if (currentScreen === 'grok-chat') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-6 py-8">
          <Button
            onClick={() => {
              setCurrentScreen('landing');
              setShowGrokResponse(false);
              setGrokTyping(false);
            }}
            variant="ghost"
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Overview
          </Button>

          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Grok AI Assistant</h2>
                <p className="text-sm text-gray-600">Personalizing your journey...</p>
              </div>
            </div>

            {grokTyping && (
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-purple-600 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-purple-600 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-purple-600 rounded-full"
                  />
                </div>
                <span className="text-sm">Grok AI is analyzing your request...</span>
              </div>
            )}

            {showGrokResponse && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-green-900 mb-2">
                        ✓ Request Received!
                      </h3>
                      <p className="text-green-800 text-sm leading-relaxed mb-4">
                        Thank you! Grok AI has received your {religionData.name} journey request. 
                        We'll get back to you within 24 hours with a personalized itinerary.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">Detailed budget breakdown</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">Senior care & accessibility options</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">Custom itinerary with timings</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">Travel and accommodation details</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">Festival calendar coordination</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    toast.success('Itinerary saved! We\'ll contact you shortly.');
                    setCurrentScreen('landing');
                  }}
                  className="w-full h-14 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-base rounded-2xl shadow-lg"
                >
                  <Check className="mr-2 h-5 w-5" />
                  Confirm & Proceed
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
