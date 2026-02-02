import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Sunrise,
  Sun,
  Sunset,
  Moon,
  Users,
  Heart,
  BookOpen,
  DollarSign,
  Download,
  Share2,
  Printer,
  Edit,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Info,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Accessibility,
  Utensils,
  Stethoscope,
  Home,
  PartyPopper,
  Bell,
  Navigation,
  Phone,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';

// ========================================
// GROK AI PLANNING DASHBOARD
// Personalized Itinerary Display
// ========================================

interface GrokAIPlanningDashboardProps {
  religion: {
    id: string;
    name: string;
    emoji: string;
    gradient: string;
  };
  plan: {
    referenceNumber: string;
    startDate: string;
    endDate: string;
    totalDays: number;
    destinations: number;
    groupSize: number;
  };
  onBack: () => void;
  onApprovePlan: () => void;
  onRequestChanges: (feedback: string) => void;
}

interface DayItinerary {
  day: number;
  date: string;
  destination: string;
  location: string;
  activities: {
    morning: Activity[];
    afternoon: Activity[];
    evening: Activity[];
    night: Activity[];
  };
  specialNotes: string[];
  crowdLevel: 'low' | 'medium' | 'high';
}

interface Activity {
  time: string;
  title: string;
  type: 'ritual' | 'travel' | 'meal' | 'rest' | 'sightseeing' | 'ceremony';
  duration: string;
  description: string;
  requirements?: string[];
}

interface RitualAlignment {
  ritual: string;
  optimalTime: string;
  duration: string;
  conflictsWith?: string[];
  festivalOverlap?: string;
  crowdPrediction: 'low' | 'medium' | 'high';
}

interface Facility {
  category: 'senior-care' | 'medical' | 'dietary' | 'prayer';
  name: string;
  location: string;
  distance: string;
  availableOn: number[];
}

interface SacredTextReading {
  day: number;
  textName: string;
  passage: string;
  relevance: string;
  suggestedTime: 'morning' | 'evening';
}

interface BudgetItem {
  category: string;
  amount: number;
  breakdown: Array<{ item: string; cost: number }>;
}

export function GrokAIPlanningDashboard({
  religion,
  plan,
  onBack,
  onApprovePlan,
  onRequestChanges,
}: GrokAIPlanningDashboardProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [showRitualChart, setShowRitualChart] = useState(true);
  const [showBudgetBreakdown, setShowBudgetBreakdown] = useState(false);
  const [changesFeedback, setChangesFeedback] = useState('');
  const [showChangesModal, setShowChangesModal] = useState(false);

  // Sample itinerary data (would come from Grok AI API)
  const dayItineraries: DayItinerary[] = [
    {
      day: 1,
      date: '[Admin: Date 1]',
      destination: '[Admin-Added Destination 1]',
      location: '[Admin-Added Location X]',
      activities: {
        morning: [
          {
            time: '5:00 AM',
            title: '[Admin: Edit] Arrival & Check-in',
            type: 'travel',
            duration: '2 hours',
            description: '[Admin: Edit] Arrive at destination, check into pilgrimage accommodation',
            requirements: ['Transportation arranged', 'Luggage assistance available'],
          },
          {
            time: '7:00 AM',
            title: '[Admin: Edit] Morning Prayer Ceremony',
            type: 'ritual',
            duration: '90 minutes',
            description:
              '[Admin: Edit] Participate in the sacred morning prayer ritual at main temple',
            requirements: ['Head covering required', 'Remove footwear', 'Arrive 15 min early'],
          },
        ],
        afternoon: [
          {
            time: '12:00 PM',
            title: '[Admin: Edit] Community Lunch (Free)',
            type: 'meal',
            duration: '60 minutes',
            description: '[Admin: Edit] Complimentary vegetarian meal at community kitchen',
          },
          {
            time: '2:00 PM',
            title: '[Admin: Edit] Sacred Site Tour',
            type: 'sightseeing',
            duration: '2 hours',
            description: '[Admin: Edit] Guided tour of historic architecture and sacred relics',
            requirements: ['Comfortable walking shoes', 'Camera allowed (no flash)'],
          },
        ],
        evening: [
          {
            time: '6:00 PM',
            title: '[Admin: Edit] Evening Devotional Singing',
            type: 'ceremony',
            duration: '90 minutes',
            description:
              '[Admin: Edit] Attend evening kirtan/hymn session with local community',
          },
          {
            time: '8:00 PM',
            title: '[Admin: Edit] Dinner & Rest',
            type: 'meal',
            duration: '2 hours',
            description: '[Admin: Edit] Dinner at accommodation, free time for rest',
          },
        ],
        night: [
          {
            time: '10:00 PM',
            title: '[Admin: Edit] Night Rest',
            type: 'rest',
            duration: '7 hours',
            description: '[Admin: Edit] Overnight stay at pilgrimage lodge',
          },
        ],
      },
      specialNotes: [
        '[Admin: Edit] Weather forecast: Pleasant, 22-28°C',
        '[Admin: Edit] Crowd level expected to be low on weekday',
        '[Admin: Edit] Senior care staff available 24/7 at accommodation',
      ],
      crowdLevel: 'low',
    },
    {
      day: 2,
      date: '[Admin: Date 2]',
      destination: '[Admin-Added Destination 2]',
      location: '[Admin-Added Location Y]',
      activities: {
        morning: [
          {
            time: '6:00 AM',
            title: '[Admin: Edit] Sacred Bathing Ritual',
            type: 'ritual',
            duration: '60 minutes',
            description: '[Admin: Edit] Traditional purification ritual at holy pool',
            requirements: ['Modest swimwear', 'Change rooms available', 'Towels provided'],
          },
          {
            time: '8:00 AM',
            title: '[Admin: Edit] Breakfast',
            type: 'meal',
            duration: '45 minutes',
            description: '[Admin: Edit] Light breakfast at accommodation',
          },
          {
            time: '9:00 AM',
            title: '[Admin: Edit] Travel to Next Destination',
            type: 'travel',
            duration: '3 hours',
            description: '[Admin: Edit] Private vehicle transfer to next sacred site',
          },
        ],
        afternoon: [
          {
            time: '12:30 PM',
            title: '[Admin: Edit] Arrival & Lunch',
            type: 'meal',
            duration: '90 minutes',
            description: '[Admin: Edit] Check-in and lunch at new location',
          },
          {
            time: '2:30 PM',
            title: '[Admin: Edit] Guided Meditation Session',
            type: 'ceremony',
            duration: '75 minutes',
            description: '[Admin: Edit] Optional meditation practice with instructor',
          },
        ],
        evening: [
          {
            time: '5:00 PM',
            title: '[Admin: Edit] Sacred Text Reading',
            type: 'ritual',
            duration: '60 minutes',
            description: '[Admin: Edit] Group study of relevant scriptures',
          },
          {
            time: '7:00 PM',
            title: '[Admin: Edit] Festival Preparation',
            type: 'ceremony',
            duration: '90 minutes',
            description: '[Admin: Edit] Participate in festival opening ceremony',
            requirements: ['Festival dress code applies', 'Photography allowed'],
          },
        ],
        night: [
          {
            time: '9:00 PM',
            title: '[Admin: Edit] Dinner & Rest',
            type: 'meal',
            duration: '8 hours',
            description: '[Admin: Edit] Evening meal and overnight rest',
          },
        ],
      },
      specialNotes: [
        '[Admin: Edit] Festival day - expect higher crowds in evening',
        '[Admin: Edit] Special dietary arrangements confirmed',
        '[Admin: Edit] Medical support on-site during festival',
      ],
      crowdLevel: 'high',
    },
    // Additional days would follow similar structure
  ];

  const ritualAlignments: RitualAlignment[] = [
    {
      ritual: '[Admin: Edit] Morning Prayer Ceremony',
      optimalTime: '5:00-6:30 AM (Day 1, 3, 5)',
      duration: '90 minutes',
      festivalOverlap: 'None',
      crowdPrediction: 'low',
    },
    {
      ritual: '[Admin: Edit] Sacred Bathing Ritual',
      optimalTime: '6:00-7:00 AM (Day 2, 4)',
      duration: '60 minutes',
      crowdPrediction: 'medium',
    },
    {
      ritual: '[Admin: Edit] Evening Devotional Singing',
      optimalTime: '6:00-7:30 PM (Daily)',
      duration: '90 minutes',
      festivalOverlap: 'Festival procession on Day 2 (alternative timing arranged)',
      crowdPrediction: 'medium',
    },
  ];

  const facilities: Facility[] = [
    {
      category: 'senior-care',
      name: '[Admin: Edit] Wheelchair Assistance Point',
      location: '[Admin-Added Destination 1]',
      distance: 'Main entrance',
      availableOn: [1, 3, 5],
    },
    {
      category: 'medical',
      name: '[Admin: Edit] First Aid Station',
      location: '[Admin-Added Destination 1, 2]',
      distance: 'Near prayer hall',
      availableOn: [1, 2, 3, 4, 5],
    },
    {
      category: 'dietary',
      name: '[Admin: Edit] Dietary-Compliant Kitchen',
      location: '[Admin-Added Destination 2]',
      distance: 'Community center',
      availableOn: [2, 3, 4],
    },
    {
      category: 'prayer',
      name: '[Admin: Edit] Private Meditation Room',
      location: 'All accommodations',
      distance: 'In-building',
      availableOn: [1, 2, 3, 4, 5],
    },
  ];

  const sacredTextReadings: SacredTextReading[] = [
    {
      day: 1,
      textName: '[Admin: Edit] Primary Sacred Scripture',
      passage:
        '[Admin: Edit] "Those who embark on pilgrimage with pure hearts find peace in every step, and the Divine reveals wisdom through sacred places."',
      relevance: '[Admin: Edit] Sets intention for the pilgrimage journey',
      suggestedTime: 'morning',
    },
    {
      day: 2,
      textName: '[Admin: Edit] Commentary on Rituals',
      passage:
        '[Admin: Edit] "The sacred waters cleanse not only the body but purify the soul, preparing one for deeper spiritual understanding."',
      relevance: '[Admin: Edit] Context for Day 2 bathing ritual',
      suggestedTime: 'morning',
    },
  ];

  const budget: BudgetItem[] = [
    {
      category: 'Accommodation',
      amount: 12000,
      breakdown: [
        { item: '[Admin: Edit] Pilgrimage Lodge (4 nights)', cost: 8000 },
        { item: '[Admin: Edit] Guesthouse (1 night)', cost: 2000 },
        { item: '[Admin: Edit] Service charges', cost: 2000 },
      ],
    },
    {
      category: 'Transportation',
      amount: 8000,
      breakdown: [
        { item: '[Admin: Edit] Private vehicle (5 days)', cost: 6000 },
        { item: '[Admin: Edit] Driver charges', cost: 1500 },
        { item: '[Admin: Edit] Fuel & tolls', cost: 500 },
      ],
    },
    {
      category: 'Ritual Materials',
      amount: 3000,
      breakdown: [
        { item: '[Admin: Edit] Offering materials', cost: 1500 },
        { item: '[Admin: Edit] Sacred texts purchase', cost: 1000 },
        { item: '[Admin: Edit] Ceremonial items', cost: 500 },
      ],
    },
    {
      category: 'Guide Services',
      amount: 5000,
      breakdown: [
        { item: '[Admin: Edit] Spiritual guide (5 days)', cost: 4000 },
        { item: '[Admin: Edit] Tips & gratuity', cost: 1000 },
      ],
    },
    {
      category: 'Special Care',
      amount: 4000,
      breakdown: [
        { item: '[Admin: Edit] Senior care assistance', cost: 2500 },
        { item: '[Admin: Edit] Medical support standby', cost: 1000 },
        { item: '[Admin: Edit] Dietary arrangements', cost: 500 },
      ],
    },
  ];

  const totalBudget = budget.reduce((sum, item) => sum + item.amount, 0);

  const handleDownloadPlan = () => {
    toast.success('Downloading your personalized itinerary as PDF...');
  };

  const handleSharePlan = () => {
    toast.success('Share link copied to clipboard!');
  };

  const handlePrintPlan = () => {
    toast.success('Opening print-friendly version...');
  };

  const handleRequestChanges = () => {
    if (changesFeedback.trim()) {
      onRequestChanges(changesFeedback);
      setShowChangesModal(false);
      toast.success('Your feedback has been submitted to Grok AI!');
      setChangesFeedback('');
    } else {
      toast.error('Please describe the changes you\'d like');
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'ritual':
        return BookOpen;
      case 'travel':
        return Navigation;
      case 'meal':
        return Utensils;
      case 'rest':
        return Moon;
      case 'sightseeing':
        return MapPin;
      case 'ceremony':
        return PartyPopper;
      default:
        return Clock;
    }
  };

  const getTimeOfDayIcon = (timeOfDay: string) => {
    switch (timeOfDay) {
      case 'morning':
        return Sunrise;
      case 'afternoon':
        return Sun;
      case 'evening':
        return Sunset;
      case 'night':
        return Moon;
      default:
        return Clock;
    }
  };

  const getCrowdLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getFacilityIcon = (category: string) => {
    switch (category) {
      case 'senior-care':
        return Accessibility;
      case 'medical':
        return Stethoscope;
      case 'dietary':
        return Utensils;
      case 'prayer':
        return BookOpen;
      default:
        return Info;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${religion.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        <div className="relative z-10 px-6 py-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-5xl backdrop-blur-md shadow-lg border-2 border-white/40">
              {religion.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">
                  Your Personalized Pilgrimage Plan
                </h1>
                <Badge className="bg-white/20 text-white border-white/40">
                  Generated by Grok AI
                </Badge>
              </div>
              <p className="text-white/90 text-lg">{religion.name} Itinerary</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {plan.startDate} to {plan.endDate}
                  </span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{plan.totalDays} days</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{plan.destinations} destinations</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{plan.groupSize} travelers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleDownloadPlan}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
            <Button
              onClick={handleSharePlan}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share
            </Button>
            <Button
              onClick={handlePrintPlan}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
            >
              <Printer className="mr-2 h-5 w-5" />
              Print
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 max-w-7xl mx-auto space-y-8">
        {/* Day-by-Day Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            Day-by-Day Itinerary
          </h2>

          {dayItineraries.map((dayPlan) => {
            const isExpanded = expandedDay === dayPlan.day;

            return (
              <motion.div
                key={dayPlan.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden"
              >
                {/* Day Header */}
                <button
                  onClick={() => setExpandedDay(isExpanded ? null : dayPlan.day)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${religion.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <span className="text-2xl font-bold">Day {dayPlan.day}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {dayPlan.destination}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {dayPlan.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {dayPlan.location}
                        </div>
                        <Badge className={`border ${getCrowdLevelColor(dayPlan.crowdLevel)}`}>
                          <Users className="h-3 w-3 mr-1" />
                          {dayPlan.crowdLevel.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                {/* Day Details (Expandable) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6">
                        {/* Activities by Time of Day */}
                        {Object.entries(dayPlan.activities).map(([timeOfDay, activities]) => {
                          if (activities.length === 0) return null;
                          const Icon = getTimeOfDayIcon(timeOfDay);

                          return (
                            <div key={timeOfDay}>
                              <div className="flex items-center gap-2 mb-4">
                                <Icon className="h-5 w-5 text-purple-600" />
                                <h4 className="font-bold text-gray-900 capitalize">
                                  {timeOfDay}
                                </h4>
                              </div>

                              <div className="space-y-3">
                                {activities.map((activity, idx) => {
                                  const ActivityIcon = getActivityIcon(activity.type);

                                  return (
                                    <div
                                      key={idx}
                                      className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border-2 border-gray-200"
                                    >
                                      <div className="flex items-start gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                          <ActivityIcon className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2 mb-1">
                                            <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                                              <Clock className="h-3 w-3 mr-1" />
                                              {activity.time}
                                            </Badge>
                                            <Badge className="bg-purple-100 text-purple-800 border border-purple-300">
                                              {activity.duration}
                                            </Badge>
                                            <Badge className="bg-gray-100 text-gray-800 border border-gray-300 capitalize">
                                              {activity.type}
                                            </Badge>
                                          </div>
                                          <h5 className="font-bold text-gray-900 mb-1">
                                            {activity.title}
                                          </h5>
                                          <p className="text-sm text-gray-700 mb-2">
                                            {activity.description}
                                          </p>
                                          {activity.requirements && (
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-2">
                                              <p className="text-xs font-semibold text-yellow-900 mb-2 flex items-center gap-1">
                                                <AlertCircle className="h-3 w-3" />
                                                Requirements:
                                              </p>
                                              <ul className="space-y-1">
                                                {activity.requirements.map((req, reqIdx) => (
                                                  <li
                                                    key={reqIdx}
                                                    className="text-xs text-yellow-800 flex items-start gap-2"
                                                  >
                                                    <CheckCircle2 className="h-3 w-3 flex-shrink-0 mt-0.5" />
                                                    {req}
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}

                        {/* Special Notes */}
                        {dayPlan.specialNotes.length > 0 && (
                          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                              <Info className="h-5 w-5" />
                              Special Notes for Day {dayPlan.day}
                            </h4>
                            <ul className="space-y-2">
                              {dayPlan.specialNotes.map((note, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-purple-800 flex items-start gap-2"
                                >
                                  <Sparkles className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                  {note}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ritual Alignment Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Clock className="h-6 w-6 text-amber-600" />
              Ritual Alignment Chart
            </h2>
            <Button
              onClick={() => setShowRitualChart(!showRitualChart)}
              variant="ghost"
              size="sm"
            >
              {showRitualChart ? 'Hide' : 'Show'}
            </Button>
          </div>

          <AnimatePresence>
            {showRitualChart && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-4 overflow-hidden"
              >
                {ritualAlignments.map((alignment, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-amber-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">{alignment.ritual}</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-amber-100 text-amber-800 border border-amber-300">
                            <Clock className="h-3 w-3 mr-1" />
                            {alignment.optimalTime}
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                            {alignment.duration}
                          </Badge>
                          <Badge
                            className={`border ${getCrowdLevelColor(
                              alignment.crowdPrediction
                            )}`}
                          >
                            {alignment.crowdPrediction === 'low' && (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            {alignment.crowdPrediction === 'high' && (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            )}
                            Crowd: {alignment.crowdPrediction.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {alignment.festivalOverlap && (
                      <div className="bg-purple-100 border border-purple-300 rounded-lg p-3 mt-3">
                        <p className="text-sm text-purple-900 flex items-start gap-2">
                          <PartyPopper className="h-4 w-4 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Festival Overlap:</strong> {alignment.festivalOverlap}
                          </span>
                        </p>
                      </div>
                    )}

                    {alignment.conflictsWith && alignment.conflictsWith.length > 0 && (
                      <div className="bg-red-100 border border-red-300 rounded-lg p-3 mt-3">
                        <p className="text-sm text-red-900 flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Timing Conflicts:</strong>{' '}
                            {alignment.conflictsWith.join(', ')}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
                  <p className="text-sm text-blue-900 flex items-start gap-2">
                    <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Grok AI Optimization:</strong> All ritual timings have been optimized to avoid conflicts, minimize crowd exposure, and align with your travel dates and special requests.
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Facilities & Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-600" />
            Facilities & Services
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {facilities.map((facility, idx) => {
              const Icon = getFacilityIcon(facility.category);

              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 border-2 border-gray-200"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        facility.category === 'senior-care'
                          ? 'bg-purple-500'
                          : facility.category === 'medical'
                          ? 'bg-red-500'
                          : facility.category === 'dietary'
                          ? 'bg-green-500'
                          : 'bg-blue-500'
                      }`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{facility.name}</h3>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {facility.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Navigation className="h-3 w-3" />
                          Distance: {facility.distance}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-300">
                    <p className="text-xs text-gray-700 mb-1 font-semibold">Available on:</p>
                    <div className="flex gap-1">
                      {facility.availableOn.map((day) => (
                        <Badge
                          key={day}
                          className="bg-blue-100 text-blue-800 border border-blue-300 text-xs"
                        >
                          Day {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Sacred Text References */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-purple-600" />
            Sacred Text References
          </h2>

          <div className="space-y-4">
            {sacredTextReadings.map((reading, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-purple-200"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Badge className="bg-purple-500 text-white">Day {reading.day}</Badge>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{reading.textName}</h3>
                    <Badge className="bg-purple-100 text-purple-800 border border-purple-300 capitalize">
                      Suggested: {reading.suggestedTime}
                    </Badge>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-3 border-l-4 border-purple-500">
                  <p className="text-gray-800 italic leading-relaxed">"{reading.passage}"</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-900 flex items-start gap-2">
                    <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Relevance:</strong> {reading.relevance}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Budget Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              Budget Breakdown
            </h2>
            <Button
              onClick={() => setShowBudgetBreakdown(!showBudgetBreakdown)}
              variant="ghost"
              size="sm"
            >
              {showBudgetBreakdown ? 'Hide Details' : 'Show Details'}
            </Button>
          </div>

          <div className="space-y-4">
            {budget.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{item.category}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-700">
                      ₹{item.amount.toLocaleString()}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {showBudgetBreakdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white rounded-lg p-3 border border-green-300">
                        <ul className="space-y-2">
                          {item.breakdown.map((subItem, subIdx) => (
                            <li
                              key={subIdx}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-gray-700">{subItem.item}</span>
                              <span className="font-semibold text-gray-900">
                                ₹{subItem.cost.toLocaleString()}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 mb-1">Total Estimated Cost</p>
                  <p className="text-4xl font-bold">₹{totalBudget.toLocaleString()}</p>
                  <p className="text-sm text-white/80 mt-2">
                    For {plan.groupSize} travelers • {plan.totalDays} days
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 mb-1 text-sm">Per Person</p>
                  <p className="text-2xl font-bold">
                    ₹{Math.round(totalBudget / plan.groupSize).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
              <p className="text-sm text-yellow-900 flex items-start gap-2">
                <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> These are estimated costs. Actual expenses may vary based on season, availability, and personal preferences. Payment will be collected after you approve the plan.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Button
            onClick={() => setShowChangesModal(true)}
            className="flex-1 bg-white border-4 border-amber-300 text-amber-700 hover:bg-amber-50 h-16 text-lg shadow-xl"
          >
            <Edit className="mr-2 h-6 w-6" />
            Request Changes
          </Button>
          <Button
            onClick={onApprovePlan}
            className={`flex-1 bg-gradient-to-r ${religion.gradient} text-white hover:shadow-2xl h-16 text-lg shadow-xl`}
          >
            <CheckCircle2 className="mr-2 h-6 w-6" />
            Approve Plan & Proceed
          </Button>
        </motion.div>
      </div>

      {/* Request Changes Modal */}
      <AnimatePresence>
        {showChangesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowChangesModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Edit className="h-6 w-6 text-amber-600" />
                Request Changes to Your Plan
              </h2>

              <p className="text-gray-600 mb-6">
                Please describe the changes you'd like Grok AI to make to your itinerary. Be as specific as possible.
              </p>

              <textarea
                value={changesFeedback}
                onChange={(e) => setChangesFeedback(e.target.value)}
                placeholder="Example: I'd like to spend more time at Destination 1, add a meditation session on Day 3, and swap the order of Day 2 and Day 3..."
                className="w-full h-40 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 resize-none"
              />

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={() => setShowChangesModal(false)}
                  className="flex-1 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleRequestChanges}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Submit to Grok AI
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
