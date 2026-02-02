import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Clock,
  BookOpen,
  PartyPopper,
  Map as MapIcon,
  Users,
  CloudSun,
  AlertCircle,
  Heart,
  Share2,
  Download,
  ChevronRight,
  Info,
  Accessibility,
  Camera,
  Phone,
  Navigation,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Minus,
  CheckCircle2,
  XCircle,
  Globe,
  Youtube,
  Bell,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';

// ========================================
// DESTINATION DETAIL VIEW
// Complete Holy Site Information Display
// ========================================

interface DestinationDetailProps {
  destination: {
    id: string;
    name: string;
    location: string;
    rating: number;
    reviewCount: number;
    bestTimeToVisit: string;
    religionId: string;
    religionColor: string;
    religionGradient: string;
  };
  onBack: () => void;
  onPlanVisit: (destinationId: string) => void;
}

type TabType = 'overview' | 'rituals' | 'festivals' | 'timings' | 'texts' | 'map';

interface Ritual {
  id: string;
  name: string;
  time: string;
  duration: string;
  dressCode: string[];
  procedure: string[];
  restrictions: string[];
  seniorFriendly: boolean;
}

interface Festival {
  id: string;
  name: string;
  dates: string;
  duration: string;
  significance: string;
  specialEvents: string[];
  crowdLevel: 'low' | 'medium' | 'high' | 'very-high';
}

interface DailyTiming {
  id: string;
  activity: string;
  startTime: string;
  endTime: string;
  days: string;
  notes: string;
}

interface SacredText {
  id: string;
  textName: string;
  passage: string;
  chapter: string;
  relevance: string;
}

interface MapPoint {
  id: string;
  name: string;
  type: 'entrance' | 'shrine' | 'prayer-hall' | 'facilities' | 'exit';
  description: string;
  accessibility: string;
}

export function DestinationDetailView({
  destination,
  onBack,
  onPlanVisit,
}: DestinationDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Sample data (would be passed as props from comprehensive religion data)
  const overviewData = {
    significance: '[Admin: Edit] This sacred site holds immense spiritual importance and has been a center of pilgrimage for centuries. The architecture reflects traditional religious design principles and the atmosphere promotes deep meditation and prayer.',
    history: '[Admin: Edit] Founded in [Year], this holy site has witnessed countless devotees seeking spiritual enlightenment. Historical records indicate its establishment by [Founder Name] and its continuous operation for [Duration] years.',
    highlights: [
      '[Admin: Edit] Main prayer hall with capacity for 5,000+ devotees',
      '[Admin: Edit] Sacred relic displayed daily from 6 AM to 9 PM',
      '[Admin: Edit] Ancient architecture dating back to [Century]',
      '[Admin: Edit] Community kitchen serving 10,000+ meals daily',
      '[Admin: Edit] Museum showcasing religious artifacts and history',
    ],
    facilities: {
      wheelchair: true,
      parking: true,
      restrooms: true,
      medical: true,
      food: true,
      lodging: true,
    },
  };

  const rituals: Ritual[] = [
    {
      id: 'ritual-1',
      name: '[Admin: Edit] Morning Prayer Ceremony',
      time: '5:00 AM - 6:30 AM',
      duration: '90 minutes',
      dressCode: [
        '[Admin: Edit] Modest clothing - shoulders and knees covered',
        '[Admin: Edit] Head covering required for all',
        '[Admin: Edit] Remove footwear before entering',
      ],
      procedure: [
        '[Admin: Edit] Arrive 15 minutes early for seating',
        '[Admin: Edit] Wash hands and feet at designated area',
        '[Admin: Edit] Enter quietly and sit cross-legged on floor',
        '[Admin: Edit] Follow guide\'s instructions for prayer sequence',
        '[Admin: Edit] Receive blessed offering at conclusion',
      ],
      restrictions: [
        '[Admin: Edit] Photography not allowed during ceremony',
        '[Admin: Edit] Silence must be maintained',
        '[Admin: Edit] No food or drinks inside prayer hall',
      ],
      seniorFriendly: true,
    },
    {
      id: 'ritual-2',
      name: '[Admin: Edit] Daily Devotional Singing',
      time: '6:00 PM - 7:30 PM',
      duration: '90 minutes',
      dressCode: [
        '[Admin: Edit] Modest attire required',
        '[Admin: Edit] Head covering recommended',
      ],
      procedure: [
        '[Admin: Edit] Open to all faiths - no prior knowledge needed',
        '[Admin: Edit] Songbooks provided at entrance',
        '[Admin: Edit] Sit or stand as comfortable',
        '[Admin: Edit] Participate by singing or listening',
      ],
      restrictions: [
        '[Admin: Edit] Late entry discouraged after first 15 minutes',
      ],
      seniorFriendly: true,
    },
    {
      id: 'ritual-3',
      name: '[Admin: Edit] Sacred Bathing Ritual',
      time: '6:00 AM - 8:00 PM',
      duration: 'Self-paced (30-60 min recommended)',
      dressCode: [
        '[Admin: Edit] Modest swimwear or traditional garments',
        '[Admin: Edit] Change rooms available',
      ],
      procedure: [
        '[Admin: Edit] Collect token from reception desk',
        '[Admin: Edit] Use designated changing facilities',
        '[Admin: Edit] Enter holy water pool from marked steps',
        '[Admin: Edit] Immerse 3 times while reciting prayers (optional)',
        '[Admin: Edit] Dry off in changing area',
      ],
      restrictions: [
        '[Admin: Edit] Soap/shampoo not permitted in holy pool',
        '[Admin: Edit] No photography in bathing area',
      ],
      seniorFriendly: false,
    },
  ];

  const festivals: Festival[] = [
    {
      id: 'fest-1',
      name: '[Admin: Edit] Annual Grand Festival',
      dates: '[Admin: Date Range]',
      duration: '10 days',
      significance: '[Admin: Edit] Celebrates the founding anniversary of this sacred site and honors the spiritual master who established it',
      specialEvents: [
        '[Admin: Edit] Opening ceremony with traditional music and dance',
        '[Admin: Edit] Daily morning and evening prayer gatherings',
        '[Admin: Edit] Community feast for all visitors (free)',
        '[Admin: Edit] Cultural performances by local artists',
        '[Admin: Edit] Closing procession with sacred relics',
      ],
      crowdLevel: 'very-high',
    },
    {
      id: 'fest-2',
      name: '[Admin: Edit] Full Moon Observance',
      dates: '[Admin: Monthly on full moon day]',
      duration: '1 day',
      significance: '[Admin: Edit] Special prayers and meditation under the full moon, believed to amplify spiritual energy',
      specialEvents: [
        '[Admin: Edit] Extended prayer hours (4 AM - 11 PM)',
        '[Admin: Edit] Candlelight vigil',
        '[Admin: Edit] Special sacred text readings',
      ],
      crowdLevel: 'medium',
    },
  ];

  const timings: DailyTiming[] = [
    {
      id: 'time-1',
      activity: '[Admin: Edit] Main Temple/Church/Mosque Opening',
      startTime: '4:00 AM',
      endTime: '10:00 PM',
      days: 'All days',
      notes: '[Admin: Edit] Entry may close 30 min before closing time',
    },
    {
      id: 'time-2',
      activity: '[Admin: Edit] Morning Prayer Service',
      startTime: '5:00 AM',
      endTime: '6:30 AM',
      days: 'Daily',
      notes: '[Admin: Edit] Most attended service - arrive early',
    },
    {
      id: 'time-3',
      activity: '[Admin: Edit] Community Kitchen (Free Meals)',
      startTime: '8:00 AM',
      endTime: '9:00 PM',
      days: 'All days',
      notes: '[Admin: Edit] Breakfast 8-10 AM, Lunch 12-2 PM, Dinner 7-9 PM',
    },
    {
      id: 'time-4',
      activity: '[Admin: Edit] Sacred Relic Viewing',
      startTime: '6:00 AM',
      endTime: '9:00 PM',
      days: 'All days except Monday',
      notes: '[Admin: Edit] Queue system in place during peak hours',
    },
    {
      id: 'time-5',
      activity: '[Admin: Edit] Guided Tour (English)',
      startTime: '10:00 AM',
      endTime: '4:00 PM',
      days: 'Tuesday - Sunday',
      notes: '[Admin: Edit] Tours every hour, free of charge, 45 min duration',
    },
  ];

  const sacredTexts: SacredText[] = [
    {
      id: 'text-1',
      textName: '[Admin: Edit] Primary Sacred Scripture',
      passage: '[Admin: Edit] "Those who meditate on the Divine Name with devotion, find peace and liberation. The sacred waters wash away sins and purify the soul."',
      chapter: '[Admin: Chapter/Verse Reference]',
      relevance: '[Admin: Edit] This passage is recited daily during morning prayers and explains the spiritual significance of this holy site',
    },
    {
      id: 'text-2',
      textName: '[Admin: Edit] Historical Commentary',
      passage: '[Admin: Edit] "Here the faithful gather to seek blessings. This place has been sanctified by the prayers of millions over centuries."',
      chapter: '[Admin: Chapter/Verse Reference]',
      relevance: '[Admin: Edit] Written by a renowned spiritual scholar describing the importance of pilgrimage to this location',
    },
  ];

  const mapPoints: MapPoint[] = [
    {
      id: 'map-1',
      name: '[Admin: Edit] Main Entrance Gate',
      type: 'entrance',
      description: '[Admin: Edit] Primary entry point with security screening and shoe deposit counter',
      accessibility: 'Wheelchair ramps available',
    },
    {
      id: 'map-2',
      name: '[Admin: Edit] Central Prayer Hall',
      type: 'prayer-hall',
      description: '[Admin: Edit] Main worship area with capacity for 5,000 people, air-conditioned',
      accessibility: 'Ground floor seating for seniors and wheelchair users',
    },
    {
      id: 'map-3',
      name: '[Admin: Edit] Sacred Shrine',
      type: 'shrine',
      description: '[Admin: Edit] Inner sanctum housing sacred relic, queue system for darshan/viewing',
      accessibility: 'Priority access lane for elderly and disabled',
    },
    {
      id: 'map-4',
      name: '[Admin: Edit] Visitor Facilities',
      type: 'facilities',
      description: '[Admin: Edit] Restrooms, medical aid, drinking water, cloakroom, information desk',
      accessibility: 'Accessible restrooms and elevators',
    },
    {
      id: 'map-5',
      name: '[Admin: Edit] Community Kitchen',
      type: 'facilities',
      description: '[Admin: Edit] Free meal service, dining hall, volunteer opportunities',
      accessibility: 'Ramp access, ground floor seating',
    },
  ];

  const liveUpdates = {
    crowdLevel: {
      current: 'medium',
      trend: 'increasing',
      percentage: 65,
      message: '[Live: Current crowd at 65% capacity - Moderate wait times expected]',
    },
    todayEvents: [
      {
        id: 'event-1',
        time: '5:00 PM',
        name: '[Admin: Edit] Special Evening Prayer Service',
        status: 'upcoming',
      },
      {
        id: 'event-2',
        time: '7:00 PM',
        name: '[Admin: Edit] Community Feast & Cultural Program',
        status: 'upcoming',
      },
    ],
    weather: {
      condition: 'Partly Cloudy',
      temperature: '24°C',
      recommendation: '[Admin: Edit] Pleasant weather for visit. Light jacket recommended for evening.',
    },
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? 'Removed from saved destinations' : 'Saved to your wishlist!');
  };

  const handleShare = () => {
    toast.success('Share link copied to clipboard!');
  };

  const handleDownload = () => {
    toast.success('Downloading visitor guide PDF...');
  };

  const handleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    toast.success(
      notificationsEnabled
        ? 'Notifications disabled'
        : 'You\'ll receive updates about this destination'
    );
  };

  const getCrowdLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'high':
        return 'bg-orange-500';
      case 'very-high':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCrowdLevelText = (level: string) => {
    switch (level) {
      case 'low':
        return 'Minimal Crowds';
      case 'medium':
        return 'Moderate Crowds';
      case 'high':
        return 'Heavy Crowds';
      case 'very-high':
        return 'Very Crowded';
      default:
        return 'Unknown';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'rituals', label: 'Rituals', icon: PartyPopper },
    { id: 'festivals', label: 'Festivals', icon: Calendar },
    { id: 'timings', label: 'Timings', icon: Clock },
    { id: 'texts', label: 'Texts', icon: BookOpen },
    { id: 'map', label: 'Map', icon: MapIcon },
  ] as const;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${destination.religionGradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        <div className="relative z-10 px-6 py-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Destinations
          </Button>

          {/* Site Name & Rating */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-3">{destination.name}</h1>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                {renderStars(destination.rating)}
                <span className="text-white ml-2 text-sm">
                  {destination.rating} ({destination.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{destination.location}</span>
              </div>
              <span className="text-white/60">•</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Best time: {destination.bestTimeToVisit}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleSave}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
            >
              <Heart className={`h-5 w-5 mr-2 ${isSaved ? 'fill-white' : ''}`} />
              {isSaved ? 'Saved' : 'Save'}
            </Button>
            <Button
              onClick={handleShare}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </Button>
            <Button
              onClick={handleDownload}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
            >
              <Download className="h-5 w-5 mr-2" />
              Guide
            </Button>
            <Button
              onClick={handleNotifications}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
            >
              <Bell className={`h-5 w-5 mr-2 ${notificationsEnabled ? 'fill-white' : ''}`} />
              Notify
            </Button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide px-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-6 py-4 border-b-4 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? `border-${destination.religionColor} text-gray-900 font-semibold`
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Significance */}
                  <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-gray-300">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Info className="h-6 w-6 text-blue-600" />
                      Significance
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{overviewData.significance}</p>
                  </div>

                  {/* History */}
                  <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-gray-300">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                      History
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{overviewData.history}</p>
                  </div>

                  {/* Highlights */}
                  <div className="bg-white rounded-3xl shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-yellow-500" />
                      Highlights
                    </h2>
                    <ul className="space-y-3">
                      {overviewData.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Facilities */}
                  <div className="bg-white rounded-3xl shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities Available</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(overviewData.facilities).map(([key, available]) => (
                        <div
                          key={key}
                          className={`flex items-center gap-3 p-3 rounded-xl border-2 ${
                            available
                              ? 'bg-green-50 border-green-200'
                              : 'bg-red-50 border-red-200'
                          }`}
                        >
                          {available ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                          <span className="text-sm font-semibold text-gray-900 capitalize">
                            {key}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* RITUALS TAB */}
              {activeTab === 'rituals' && (
                <motion.div
                  key="rituals"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {rituals.map((ritual, idx) => (
                    <div
                      key={ritual.id}
                      className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-purple-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{ritual.name}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                              <Clock className="h-3 w-3 mr-1" />
                              {ritual.time}
                            </Badge>
                            <Badge className="bg-green-100 text-green-800 border border-green-300">
                              Duration: {ritual.duration}
                            </Badge>
                            {ritual.seniorFriendly && (
                              <Badge className="bg-purple-100 text-purple-800 border border-purple-300">
                                <Accessibility className="h-3 w-3 mr-1" />
                                Senior Friendly
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Dress Code */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Camera className="h-4 w-4 text-gray-600" />
                          Dress Code
                        </h4>
                        <ul className="space-y-1">
                          {ritual.dressCode.map((item, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Procedure */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4 text-gray-600" />
                          Procedure
                        </h4>
                        <ol className="space-y-2">
                          {ritual.procedure.map((step, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Restrictions */}
                      {ritual.restrictions.length > 0 && (
                        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                          <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            Important Restrictions
                          </h4>
                          <ul className="space-y-1">
                            {ritual.restrictions.map((restriction, i) => (
                              <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                                <XCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                                {restriction}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {/* FESTIVALS TAB */}
              {activeTab === 'festivals' && (
                <motion.div
                  key="festivals"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {festivals.map((festival) => (
                    <div
                      key={festival.id}
                      className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-pink-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{festival.name}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className="bg-purple-100 text-purple-800 border border-purple-300">
                              <Calendar className="h-3 w-3 mr-1" />
                              {festival.dates}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                              {festival.duration}
                            </Badge>
                            <Badge
                              className={`border ${
                                festival.crowdLevel === 'low'
                                  ? 'bg-green-100 text-green-800 border-green-300'
                                  : festival.crowdLevel === 'medium'
                                  ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                                  : festival.crowdLevel === 'high'
                                  ? 'bg-orange-100 text-orange-800 border-orange-300'
                                  : 'bg-red-100 text-red-800 border-red-300'
                              }`}
                            >
                              <Users className="h-3 w-3 mr-1" />
                              {festival.crowdLevel.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Significance</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {festival.significance}
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <PartyPopper className="h-4 w-4 text-purple-600" />
                          Special Events
                        </h4>
                        <ul className="space-y-2">
                          {festival.specialEvents.map((event, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3 mt-4">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                          <Bell className="mr-2 h-4 w-4" />
                          Notify Me
                        </Button>
                        <Button
                          className={`flex-1 bg-gradient-to-r ${destination.religionGradient} text-white`}
                        >
                          Plan Visit
                        </Button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* TIMINGS TAB */}
              {activeTab === 'timings' && (
                <motion.div
                  key="timings"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl shadow-xl p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                    Daily Timings & Schedules
                  </h2>

                  <div className="space-y-4">
                    {timings.map((timing) => (
                      <div
                        key={timing.id}
                        className="border-2 border-gray-200 rounded-2xl p-5 hover:border-blue-300 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold text-gray-900 flex-1">{timing.activity}</h3>
                          <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                            {timing.days}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="h-4 w-4 text-green-600" />
                            <span className="font-semibold">{timing.startTime}</span>
                          </div>
                          <Minus className="h-4 w-4 text-gray-400" />
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="h-4 w-4 text-red-600" />
                            <span className="font-semibold">{timing.endTime}</span>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-3">
                          <p className="text-sm text-yellow-900 flex items-start gap-2">
                            <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            {timing.notes}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TEXTS TAB */}
              {activeTab === 'texts' && (
                <motion.div
                  key="texts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {sacredTexts.map((text) => (
                    <div
                      key={text.id}
                      className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-amber-200"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{text.textName}</h3>
                          <Badge className="bg-amber-100 text-amber-800 border border-amber-300">
                            {text.chapter}
                          </Badge>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 mb-4 border-l-4 border-amber-500">
                        <p className="text-gray-800 italic leading-relaxed text-lg">
                          "{text.passage}"
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          Relevance to This Site
                        </h4>
                        <p className="text-sm text-blue-800 leading-relaxed">{text.relevance}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* MAP TAB */}
              {activeTab === 'map' && (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl shadow-xl p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapIcon className="h-6 w-6 text-green-600" />
                    Site Layout & Important Points
                  </h2>

                  {/* Placeholder map */}
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-12 mb-6 border-2 border-dashed border-green-300 text-center">
                    <MapIcon className="h-16 w-16 mx-auto text-green-600 mb-4" />
                    <p className="text-gray-700 font-semibold mb-2">
                      [Admin: Upload Interactive Map]
                    </p>
                    <p className="text-sm text-gray-600">
                      Site layout diagram will be displayed here
                    </p>
                    <div className="flex gap-3 justify-center mt-6">
                      <Button className="bg-white border-2 border-green-300 text-green-700 hover:bg-green-50">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <Phone className="mr-2 h-4 w-4" />
                        Contact Info
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-4">Key Locations</h3>
                    {mapPoints.map((point) => (
                      <div
                        key={point.id}
                        className="border-2 border-gray-200 rounded-2xl p-4 hover:border-green-300 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              point.type === 'entrance'
                                ? 'bg-blue-500'
                                : point.type === 'shrine'
                                ? 'bg-purple-500'
                                : point.type === 'prayer-hall'
                                ? 'bg-amber-500'
                                : point.type === 'facilities'
                                ? 'bg-green-500'
                                : 'bg-gray-500'
                            }`}
                          >
                            <MapPin className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">{point.name}</h4>
                            <p className="text-sm text-gray-700 mb-2">{point.description}</p>
                            <div className="flex items-center gap-2">
                              <Accessibility className="h-4 w-4 text-green-600" />
                              <span className="text-xs text-green-700 font-semibold">
                                {point.accessibility}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar - Live Updates */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Live Updates Panel */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-dashed border-blue-300">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Live Updates
                </h2>

                {/* Current Crowd Level */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Current Crowd Level</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border-2 border-blue-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-gray-900">
                        {liveUpdates.crowdLevel.percentage}%
                      </span>
                      <Badge
                        className={`${getCrowdLevelColor(
                          liveUpdates.crowdLevel.current
                        )} text-white border-0`}
                      >
                        {getCrowdLevelText(liveUpdates.crowdLevel.current)}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div
                        className={`${getCrowdLevelColor(
                          liveUpdates.crowdLevel.current
                        )} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${liveUpdates.crowdLevel.percentage}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {liveUpdates.crowdLevel.trend === 'increasing' ? (
                        <TrendingUp className="h-4 w-4 text-red-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-green-600" />
                      )}
                      <span className="text-gray-700">{liveUpdates.crowdLevel.message}</span>
                    </div>
                  </div>
                </div>

                {/* Today's Events */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Today's Special Events</h3>
                  <div className="space-y-3">
                    {liveUpdates.todayEvents.map((event) => (
                      <div
                        key={event.id}
                        className="bg-purple-50 border-2 border-purple-200 rounded-xl p-3"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-purple-600" />
                          <span className="font-bold text-purple-900">{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-700">{event.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weather */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Weather Conditions</h3>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-4 border-2 border-yellow-200">
                    <div className="flex items-center gap-3 mb-2">
                      <CloudSun className="h-8 w-8 text-yellow-600" />
                      <div>
                        <p className="font-bold text-gray-900">{liveUpdates.weather.condition}</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {liveUpdates.weather.temperature}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{liveUpdates.weather.recommendation}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Globe className="mr-2 h-4 w-4" />
                    Search on Google
                  </Button>
                  <Button className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Youtube className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </Button>
                  <Button className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Site
                  </Button>
                </div>
              </div>

              {/* Plan Your Visit CTA */}
              <Button
                onClick={() => onPlanVisit(destination.id)}
                className={`w-full bg-gradient-to-r ${destination.religionGradient} text-white h-14 text-lg shadow-2xl hover:shadow-3xl transition-shadow`}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Plan Your Visit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
