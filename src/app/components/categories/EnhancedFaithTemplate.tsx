import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Globe,
  Youtube,
  Heart,
  Sparkles,
  ChevronRight,
  MapPin,
  Star,
  Calendar,
  Users,
  DollarSign,
  Check,
  Accessibility,
  BookOpen,
  ChevronDown,
  Plus,
  X,
  Clock,
  Bell,
  AlertTriangle,
  Info,
  Lightbulb,
  ShieldAlert,
  Timer,
  Phone,
  Mail,
  Send,
  Loader,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner';

// ========================================
// ENHANCED FAITH DETAIL TEMPLATE
// Complete High-Fidelity Implementation
// ========================================
//
// New Sections:
// 1. Sacred Context (holy text quotes)
// 2. Divine Calendar (upcoming occasions)
// 3. Ritual Participation (booking functionality)
// 4. Grok AI Cultural Insights
// 5. Integrated Booking & AI Flow
//
// ========================================

interface RitualBooking {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  requirements?: string[];
  availableTimes?: string[];
  icon: string;
}

interface UpcomingOccasion {
  id: string;
  name: string;
  date: string;
  dateRange: string;
  type: 'festival' | 'special-day' | 'ritual-time';
  description: string;
  bookingRequired: boolean;
  icon: string;
  color: string;
}

interface CulturalInsight {
  id: string;
  title: string;
  message: string;
  type: 'crowd-alert' | 'timing' | 'requirement' | 'tip' | 'restriction';
  icon: string;
  priority: 'high' | 'medium' | 'low';
}

interface SacredTextReference {
  quote: string;
  translation: string;
  source: string;
  context: string;
}

interface ReligionEnhancedData {
  sectionName: string;
  sectionSubtitle: string;
  sectionIcon: string;
  sacredTextReference: SacredTextReference;
  ritualBookings: RitualBooking[];
  upcomingOccasions: UpcomingOccasion[];
  culturalInsights: CulturalInsight[];
}

interface EnhancedFaithTemplateProps {
  religionName: string;
  religionEmoji: string;
  gradient: string;
  enhancedData: ReligionEnhancedData;
  onBack: () => void;
}

export function EnhancedFaithTemplate({
  religionName,
  religionEmoji,
  gradient,
  enhancedData,
  onBack,
}: EnhancedFaithTemplateProps) {
  // State Management
  const [showCalendar, setShowCalendar] = useState(true);
  const [showInsights, setShowInsights] = useState(true);
  const [selectedRitual, setSelectedRitual] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [showBookingFlow, setShowBookingFlow] = useState(false);
  const [grokThinking, setGrokThinking] = useState(false);
  const [showGrokSuggestion, setShowGrokSuggestion] = useState(false);
  const [interestSent, setInterestSent] = useState(false);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    groupSize: 'solo',
    seniorCare: {
      wheelchair: false,
      doli: false,
      medicalSupport: false,
    },
    pricingTier: 'standard',
    packageType: 'existing',
    customPreferences: '',
    selectedSites: [] as string[],
    selectedRituals: [] as string[],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  // Handle Ritual Selection
  const handleRitualSelect = (ritualId: string) => {
    setSelectedRitual(ritualId);
  };

  // Handle Interest Capture
  const handleSendInterest = () => {
    setInterestSent(true);
    setGrokThinking(true);
    
    toast.success(
      `Your interest in ${religionName} journey is noted! Grok AI is analyzing budget and senior care options.`,
      { duration: 4000 }
    );

    setTimeout(() => {
      setGrokThinking(false);
      setShowGrokSuggestion(true);
      toast.info('Grok AI has prepared personalized suggestions for you!');
    }, 3500);
  };

  // Start Booking Flow
  const startBookingFlow = () => {
    setShowBookingFlow(true);
    setBookingStep(1);
  };

  // Booking Flow Navigation
  const handleBookingNext = () => {
    if (bookingStep < 4) {
      setBookingStep(bookingStep + 1);
    } else {
      // Submit booking
      handleSendInterest();
      setShowBookingFlow(false);
    }
  };

  // Get Priority Color
  const getPriorityColor = (type: string) => {
    switch (type) {
      case 'crowd-alert':
        return 'from-red-500 to-orange-600';
      case 'timing':
        return 'from-blue-500 to-indigo-600';
      case 'requirement':
        return 'from-purple-500 to-pink-600';
      case 'restriction':
        return 'from-gray-600 to-gray-800';
      case 'tip':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  // Get Priority Icon
  const getPriorityIcon = (type: string) => {
    switch (type) {
      case 'crowd-alert':
        return AlertTriangle;
      case 'timing':
        return Timer;
      case 'requirement':
        return Info;
      case 'restriction':
        return ShieldAlert;
      case 'tip':
        return Lightbulb;
      default:
        return Info;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className={`relative h-48 bg-gradient-to-r ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 px-6 py-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-md shadow-lg border-2 border-white/30">
              {religionEmoji}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{religionName}</h1>
              <p className="text-white/90 text-sm">{enhancedData.sectionSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* 📖 SACRED CONTEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-purple-200"
          title="Admin: Edit sacred text reference"
        >
          <div className={`bg-gradient-to-r ${gradient} p-4`}>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-white" />
              <h2 className="text-white font-bold">📖 Sacred Context</h2>
            </div>
          </div>
          <div className="p-6">
            <blockquote className="text-lg italic text-gray-800 mb-3 bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
              "{enhancedData.sacredTextReference.quote}"
            </blockquote>
            <p className="text-sm text-gray-700 mb-2 font-semibold">
              {enhancedData.sacredTextReference.translation}
            </p>
            <p className="text-xs text-gray-600 mb-1">
              Source: <span className="font-bold bg-gray-100 px-2 py-0.5 rounded">{enhancedData.sacredTextReference.source}</span>
            </p>
            <p className="text-xs text-gray-500 italic">
              {enhancedData.sacredTextReference.context}
            </p>
          </div>
        </motion.div>

        {/* 📅 DIVINE CALENDAR SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className={`bg-gradient-to-r ${gradient} p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-white" />
                <h2 className="text-white font-bold">📅 Divine Calendar - Upcoming Special Occasions</h2>
              </div>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <ChevronDown className={`h-5 w-5 transition-transform ${showCalendar ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showCalendar && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-5 space-y-4">
                  {enhancedData.upcomingOccasions.map((occasion, index) => (
                    <motion.div
                      key={occasion.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${occasion.color} rounded-2xl p-5 text-white shadow-lg border-2 border-dashed border-white/30`}
                      title="Admin: Edit occasion details"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-white/30 text-white text-xs">
                              {occasion.type.toUpperCase().replace('-', ' ')}
                            </Badge>
                            {occasion.bookingRequired && (
                              <Badge className="bg-red-500 text-white text-xs flex items-center gap-1">
                                <Bell className="h-3 w-3" />
                                BOOKING REQUIRED
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-1">{occasion.name}</h3>
                          <p className="text-sm opacity-90 bg-white/20 px-3 py-1 rounded-lg inline-block">
                            {occasion.date}
                          </p>
                        </div>
                        <div className="text-4xl">{occasion.icon}</div>
                      </div>
                      <p className="text-sm opacity-95 mb-2">{occasion.description}</p>
                      <p className="text-xs opacity-80 italic">Date Range: {occasion.dateRange}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 🕯️ RITUAL PARTICIPATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-blue-200"
          title="Admin: Edit ritual booking options"
        >
          <div className={`bg-gradient-to-r ${gradient} p-4`}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{enhancedData.sectionIcon}</span>
              <div>
                <h2 className="text-white font-bold">🕯️ {enhancedData.sectionName}</h2>
                <p className="text-white/80 text-xs">{enhancedData.sectionSubtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-4">
            {enhancedData.ritualBookings.map((ritual, index) => (
              <motion.div
                key={ritual.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 border-2 transition-all duration-300 ${
                  selectedRitual === ritual.id
                    ? 'border-blue-500 shadow-lg scale-[1.02]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-4xl">{ritual.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 bg-yellow-100 px-2 py-1 rounded inline-block">
                      {ritual.name}
                    </h3>
                    <p className="text-sm text-gray-700 mt-2">{ritual.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <p className="text-xs text-blue-600 font-semibold">Duration</p>
                    </div>
                    <p className="text-sm font-bold text-blue-900">{ritual.duration}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <p className="text-xs text-green-600 font-semibold">Price</p>
                    </div>
                    <p className="text-sm font-bold text-green-900 bg-green-100 px-2 rounded">{ritual.price}</p>
                  </div>
                </div>

                {ritual.requirements && ritual.requirements.length > 0 && (
                  <div className="bg-amber-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-amber-700 font-semibold mb-2">Requirements:</p>
                    <ul className="space-y-1">
                      {ritual.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-amber-900">
                          <Check className="h-3 w-3 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {ritual.availableTimes && ritual.availableTimes.length > 0 && (
                  <div className="bg-purple-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-purple-700 font-semibold mb-2">Available Times:</p>
                    <div className="space-y-1">
                      {ritual.availableTimes.map((time, idx) => (
                        <p key={idx} className="text-xs text-purple-900 bg-purple-100 px-2 py-1 rounded inline-block mr-2">
                          {time}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  onClick={() => {
                    handleRitualSelect(ritual.id);
                    const isSelected = bookingForm.selectedRituals.includes(ritual.id);
                    setBookingForm({
                      ...bookingForm,
                      selectedRituals: isSelected
                        ? bookingForm.selectedRituals.filter(id => id !== ritual.id)
                        : [...bookingForm.selectedRituals, ritual.id]
                    });
                    toast.success(isSelected ? 'Ritual removed from selection' : 'Ritual added to your journey!');
                  }}
                  className={`w-full ${
                    selectedRitual === ritual.id
                      ? `bg-gradient-to-r ${gradient} text-white`
                      : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {bookingForm.selectedRituals.includes(ritual.id) ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Added to Journey
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-5 w-5" />
                      Book / Participate
                    </>
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🤖 GROK AI CULTURAL INSIGHTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-white" />
                <h2 className="text-white font-bold">🤖 Grok AI Cultural Insights</h2>
              </div>
              <button
                onClick={() => setShowInsights(!showInsights)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <ChevronDown className={`h-5 w-5 transition-transform ${showInsights ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showInsights && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-5 space-y-4">
                  {enhancedData.culturalInsights.map((insight, index) => {
                    const Icon = getPriorityIcon(insight.type);
                    return (
                      <motion.div
                        key={insight.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-gradient-to-br ${getPriorityColor(insight.type)} rounded-2xl p-5 text-white shadow-lg relative overflow-hidden`}
                      >
                        <div className="absolute top-0 right-0 text-9xl opacity-10">
                          {insight.icon}
                        </div>
                        <div className="relative z-10">
                          <div className="flex items-start gap-3 mb-2">
                            <Icon className="h-6 w-6 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className="bg-white/30 text-white text-xs">
                                  {insight.type.toUpperCase().replace('-', ' ')}
                                </Badge>
                                {insight.priority === 'high' && (
                                  <Badge className="bg-red-600 text-white text-xs animate-pulse">
                                    HIGH PRIORITY
                                  </Badge>
                                )}
                              </div>
                              <h3 className="text-lg font-bold mb-2">{insight.title}</h3>
                              <p className="text-sm opacity-95 leading-relaxed">
                                {insight.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* INTEGRATED BOOKING & AI FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`bg-gradient-to-br ${gradient} rounded-2xl shadow-2xl p-6 text-white`}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            Plan Your {religionName} Journey
          </h2>

          {!interestSent ? (
            <>
              <p className="text-white/90 text-sm mb-6">
                Let Grok AI help you create the perfect spiritual journey with customized itinerary, senior care options, and best pricing.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <Users className="h-6 w-6 mb-2" />
                  <p className="text-xs opacity-80 mb-1">Group Options</p>
                  <p className="text-sm font-bold">Solo • Family • Community</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <Accessibility className="h-6 w-6 mb-2" />
                  <p className="text-xs opacity-80 mb-1">Senior Care</p>
                  <p className="text-sm font-bold">Wheelchair • Doli • Medical</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <DollarSign className="h-6 w-6 mb-2" />
                  <p className="text-xs opacity-80 mb-1">Pricing Tiers</p>
                  <p className="text-sm font-bold">Budget • Standard • Premium</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <Calendar className="h-6 w-6 mb-2" />
                  <p className="text-xs opacity-80 mb-1">Festival Timing</p>
                  <p className="text-sm font-bold">AI Optimized</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={startBookingFlow}
                  className="flex-1 bg-white text-gray-900 hover:bg-gray-100 font-bold h-14 text-base"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Customize My Journey
                </Button>
                <Button
                  onClick={handleSendInterest}
                  className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm font-bold h-14 text-base border-2 border-white/50"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Interest
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              {grokThinking && (
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <Loader className="h-12 w-12 mx-auto mb-4 animate-spin" />
                  <p className="text-lg font-bold mb-2">Grok AI is thinking...</p>
                  <p className="text-sm opacity-90">
                    Analyzing budget, senior care options, festival timings, and best routes...
                  </p>
                </div>
              )}

              {showGrokSuggestion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl text-gray-900 p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Grok AI Personalized Suggestion</h3>
                      <p className="text-sm text-gray-700 mb-4">
                        Based on your interest in {religionName} pilgrimage, here's what we recommend:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                      <p className="text-sm font-bold text-green-900 mb-1">✓ Best Season</p>
                      <p className="text-xs text-green-800">
                        October to March for pleasant weather. Avoid peak summer (April-June).
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                      <p className="text-sm font-bold text-blue-900 mb-1">✓ Group Discount Available</p>
                      <p className="text-xs text-blue-800">
                        30% discount on accommodation for groups of 10+. Special senior care packages available.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4">
                      <p className="text-sm font-bold text-amber-900 mb-1">✓ Festival Coordination</p>
                      <p className="text-xs text-amber-800">
                        Align your visit with upcoming festivals for authentic cultural experience.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-sm font-bold text-gray-900 mb-3">Estimated Package Cost:</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-gray-900">₹45,000</p>
                      <p className="text-sm text-gray-600">- ₹85,000</p>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      Includes transport, accommodation, meals, ritual bookings, and senior care (if needed)
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button className={`flex-1 bg-gradient-to-r ${gradient} text-white h-12`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us
                    </Button>
                    <Button className="flex-1 bg-gray-200 text-gray-900 hover:bg-gray-300 h-12">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Quote
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* CUSTOM JOURNEY BUILDER MODAL */}
      <AnimatePresence>
        {showBookingFlow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowBookingFlow(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className={`bg-gradient-to-r ${gradient} p-6 sticky top-0 z-10`}>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-white">
                    Plan {religionName} Journey
                  </h2>
                  <button
                    onClick={() => setShowBookingFlow(false)}
                    className="text-white hover:bg-white/20 rounded-full p-2"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-white/90 text-sm">Step {bookingStep} of 4</p>
                <div className="w-full bg-white/30 h-2 rounded-full mt-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(bookingStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              <div className="p-6">
                {/* Step 1: Group Size */}
                {bookingStep === 1 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Group Size</h3>
                    <div className="space-y-3">
                      {[
                        { id: 'solo', label: 'Solo Traveler', icon: '👤', desc: '1 person' },
                        { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', desc: '2-5 people' },
                        { id: 'community', label: 'Community Group', icon: '👥', desc: '6+ people' },
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setBookingForm({ ...bookingForm, groupSize: option.id })}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            bookingForm.groupSize === option.id
                              ? `border-blue-500 bg-blue-50`
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{option.icon}</span>
                            <div>
                              <p className="font-bold text-gray-900">{option.label}</p>
                              <p className="text-sm text-gray-600">{option.desc}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Senior Care */}
                {bookingStep === 2 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Senior Care Requirements</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Accessibility className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-bold text-gray-900">Wheelchair Assistance</p>
                            <p className="text-xs text-gray-600">Dedicated wheelchair support</p>
                          </div>
                        </div>
                        <Switch
                          checked={bookingForm.seniorCare.wheelchair}
                          onCheckedChange={(checked) =>
                            setBookingForm({
                              ...bookingForm,
                              seniorCare: { ...bookingForm.seniorCare, wheelchair: checked }
                            })
                          }
                        />
                      </label>

                      <label className="flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-bold text-gray-900">Doli/Palki Service</p>
                            <p className="text-xs text-gray-600">Palanquin for difficult terrain</p>
                          </div>
                        </div>
                        <Switch
                          checked={bookingForm.seniorCare.doli}
                          onCheckedChange={(checked) =>
                            setBookingForm({
                              ...bookingForm,
                              seniorCare: { ...bookingForm.seniorCare, doli: checked }
                            })
                          }
                        />
                      </label>

                      <label className="flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Heart className="h-5 w-5 text-red-600" />
                          <div>
                            <p className="font-bold text-gray-900">Medical Support 24/7</p>
                            <p className="text-xs text-gray-600">On-site medical team</p>
                          </div>
                        </div>
                        <Switch
                          checked={bookingForm.seniorCare.medicalSupport}
                          onCheckedChange={(checked) =>
                            setBookingForm({
                              ...bookingForm,
                              seniorCare: { ...bookingForm.seniorCare, medicalSupport: checked }
                            })
                          }
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 3: Pricing Tier */}
                {bookingStep === 3 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Tier</h3>
                    <div className="space-y-3">
                      {[
                        { id: 'budget', label: 'Budget', price: '₹30,000 - ₹50,000', features: ['Dorm accommodation', 'Basic transport', 'Group meals'] },
                        { id: 'standard', label: 'Standard', price: '₹50,000 - ₹80,000', features: ['AC rooms', 'Comfortable transport', 'Customized meals'] },
                        { id: 'premium', label: 'Premium', price: '₹80,000+', features: ['Luxury hotels', 'Private transport', 'VIP access'] },
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          onClick={() => setBookingForm({ ...bookingForm, pricingTier: tier.id })}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            bookingForm.pricingTier === tier.id
                              ? `border-green-500 bg-green-50`
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <p className="font-bold text-gray-900 mb-1">{tier.label}</p>
                          <p className="text-sm text-green-600 font-semibold mb-2">{tier.price}</p>
                          <div className="space-y-1">
                            {tier.features.map((feature, idx) => (
                              <p key={idx} className="text-xs text-gray-600 flex items-center gap-1">
                                <Check className="h-3 w-3 text-green-600" />
                                {feature}
                              </p>
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {bookingStep === 4 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Review Your Journey</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="text-xs text-blue-600 mb-1">Group Size</p>
                        <p className="text-sm font-bold text-blue-900 capitalize">{bookingForm.groupSize}</p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4">
                        <p className="text-xs text-purple-600 mb-1">Pricing Tier</p>
                        <p className="text-sm font-bold text-purple-900 capitalize">{bookingForm.pricingTier}</p>
                      </div>
                      {(bookingForm.seniorCare.wheelchair || bookingForm.seniorCare.doli || bookingForm.seniorCare.medicalSupport) && (
                        <div className="bg-amber-50 rounded-xl p-4">
                          <p className="text-xs text-amber-600 mb-2">Senior Care Services</p>
                          <div className="space-y-1">
                            {bookingForm.seniorCare.wheelchair && (
                              <p className="text-sm text-amber-900 flex items-center gap-2">
                                <Check className="h-4 w-4" /> Wheelchair Assistance
                              </p>
                            )}
                            {bookingForm.seniorCare.doli && (
                              <p className="text-sm text-amber-900 flex items-center gap-2">
                                <Check className="h-4 w-4" /> Doli/Palki Service
                              </p>
                            )}
                            {bookingForm.seniorCare.medicalSupport && (
                              <p className="text-sm text-amber-900 flex items-center gap-2">
                                <Check className="h-4 w-4" /> Medical Support 24/7
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                      {bookingForm.selectedRituals.length > 0 && (
                        <div className="bg-green-50 rounded-xl p-4">
                          <p className="text-xs text-green-600 mb-2">Selected Rituals</p>
                          <p className="text-sm text-green-900">
                            {bookingForm.selectedRituals.length} ritual{bookingForm.selectedRituals.length > 1 ? 's' : ''} selected
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  {bookingStep > 1 && (
                    <Button
                      onClick={() => setBookingStep(bookingStep - 1)}
                      variant="outline"
                      className="flex-1"
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    onClick={handleBookingNext}
                    className={`flex-1 bg-gradient-to-r ${gradient} text-white`}
                  >
                    {bookingStep === 4 ? (
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
