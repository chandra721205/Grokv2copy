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
  Flame,
  BookOpen,
  Save,
  ChevronDown,
  Filter,
  Map,
  Play,
  Eye,
  Plus,
  X,
  MessageSquare,
  Phone,
  Mail,
  Truck,
  Home as HomeIcon,
  Utensils,
  Clock,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner';

// ========================================
// ☬ SIKH DEVOTEES - ETERNAL GURPURABS
// Complete Religion-Specific Implementation
// ========================================
// 
// Sacred Sites:
// - Golden Temple Amritsar (Harmandir Sahib)
// - Takht Sri Kesgarh Sahib (Anandpur)
// - Takht Sri Damdama Sahib (Talwandi Sabo)
// - Takht Sri Patna Sahib
// - Takht Sri Hazur Sahib (Nanded)
//
// Rituals:
// - Kirtan (devotional hymns)
// - Paath (recitation)
// - Akhand Path (48-hour continuous recitation)
// - Nagar Kirtan (procession)
// - Langar (community kitchen service)
//
// Festivals:
// - Guru Nanak Jayanti (Gurpurab) - Kartik Purnima (Nov)
// - Baisakhi - April 13/14
// - Diwali (Bandi Chhor Divas) - Oct/Nov
// - Hola Mohalla - Day after Holi (Mar)
// - Martyrdom Days (Guru Arjan, Guru Tegh Bahadur)
//
// Sacred Text:
// - Guru Granth Sahib (Adi Granth)
// - Key Shabads: "Ik Onkar Satnam..."
//
// ========================================

interface SikhDevoteesEnhancedProps {
  onBack: () => void;
}

// Sacred Sites Data
const sacredSites = [
  {
    id: 'site-1',
    name: '[Admin: Golden Temple]',
    location: '[Admin: Amritsar], [Admin: Punjab]',
    subtitle: 'Harmandir Sahib - Holiest Gurdwara',
    description: 'The Golden Temple, spiritual and cultural center of Sikhism',
    badge: 'MOST SACRED',
    deity: 'Eternal Guru Granth Sahib',
    significance: '5 TAKHTS PILGRIMAGE',
    visitors: '100,000+ daily',
    accessibility: 'Fully Accessible',
    gradient: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'site-2',
    name: '[Admin: Takht Sri Kesgarh Sahib]',
    location: '[Admin: Anandpur Sahib], [Admin: Punjab]',
    subtitle: 'Birthplace of Khalsa',
    description: 'Where Guru Gobind Singh created the Khalsa Panth',
    badge: 'HISTORIC TAKHT',
    deity: 'Khalsa Legacy',
    significance: 'HOLA MOHALLA VENUE',
    visitors: '50,000+ on festivals',
    accessibility: 'Senior-Friendly',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 'site-3',
    name: '[Admin: Takht Sri Damdama Sahib]',
    location: '[Admin: Talwandi Sabo], [Admin: Punjab]',
    subtitle: 'Seat of Temporal Authority',
    description: 'Where Guru Granth Sahib was finalized',
    badge: 'SACRED TAKHT',
    deity: 'Guru Granth Sahib',
    significance: 'SPIRITUAL LEARNING',
    visitors: '25,000+ monthly',
    accessibility: 'Wheelchair Access',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'site-4',
    name: '[Admin: Takht Sri Patna Sahib]',
    location: '[Admin: Patna], [Admin: Bihar]',
    subtitle: 'Birthplace of Guru Gobind Singh',
    description: 'Sacred site of the tenth Guru\'s birth',
    badge: 'BIRTH SITE',
    deity: 'Guru Gobind Singh Ji',
    significance: 'GURPURAB CELEBRATION',
    visitors: '40,000+ annually',
    accessibility: 'Fully Accessible',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'site-5',
    name: '[Admin: Takht Sri Hazur Sahib]',
    location: '[Admin: Nanded], [Admin: Maharashtra]',
    subtitle: 'Abode of the Timeless One',
    description: 'Where Guru Gobind Singh left his mortal body',
    badge: 'SACRED TAKHT',
    deity: 'Eternal Guru',
    significance: 'FINAL RESTING PLACE',
    visitors: '30,000+ monthly',
    accessibility: 'Senior Care Available',
    gradient: 'from-purple-500 to-pink-600',
  },
];

// Rituals & Practices
const rituals = [
  {
    id: 'ritual-1',
    name: 'Akhand Path',
    description: '48-hour continuous recitation of Guru Granth Sahib',
    duration: '48 hours non-stop',
    site: '[Admin: Any Gurdwara]',
    procedure: 'Continuous relay reading by trained Granthis',
    significance: 'Major life events, festivals, special occasions',
    participants: 'Community participation welcome',
    icon: '📖',
  },
  {
    id: 'ritual-2',
    name: 'Kirtan',
    description: 'Devotional hymn singing from Gurbani',
    duration: '1-3 hours',
    site: '[Admin: All Gurdwaras]',
    procedure: 'Raagis sing shabads accompanied by traditional instruments',
    significance: 'Daily practice, spiritual elevation',
    participants: 'Open to all',
    icon: '🎵',
  },
  {
    id: 'ritual-3',
    name: 'Nagar Kirtan',
    description: 'Religious procession through streets',
    duration: '4-6 hours',
    site: '[Admin: City Streets]',
    procedure: 'Panj Pyare lead, followed by Guru Granth Sahib on float',
    significance: 'Major Gurpurabs and festivals',
    participants: '10,000+ devotees',
    icon: '🚩',
  },
  {
    id: 'ritual-4',
    name: 'Langar Seva',
    description: 'Community kitchen service',
    duration: 'Continuous (24/7 at Golden Temple)',
    site: '[Admin: All Gurdwaras]',
    procedure: 'Free vegetarian meals served to all, regardless of background',
    significance: 'Equality, service, humility',
    participants: 'Volunteers and visitors',
    icon: '🍽️',
  },
  {
    id: 'ritual-5',
    name: 'Paath',
    description: 'Recitation of sacred verses',
    duration: '30 minutes - 2 hours',
    site: '[Admin: Home/Gurdwara]',
    procedure: 'Individual or group recitation of selected shabads',
    significance: 'Daily spiritual practice',
    participants: 'Individual devotees',
    icon: '🕉️',
  },
];

// Festivals Calendar
const festivals = [
  {
    id: 'festival-1',
    name: 'Guru Nanak Jayanti (Gurpurab)',
    date: '[Admin: Kartik Purnima - November]',
    dateRange: 'November (Full Moon)',
    description: 'Birth anniversary of Guru Nanak Dev Ji, founder of Sikhism',
    significance: 'MOST IMPORTANT FESTIVAL',
    celebrations: 'Prabhat Pheri, Akhand Path, Nagar Kirtan, Langar',
    venue: '[Admin: All Gurdwaras]',
    expectedVisitors: '100,000+ at Golden Temple',
    rituals: ['Akhand Path (3 days)', 'Nagar Kirtan', 'Kirtan Darbar', 'Langar'],
    icon: '🌟',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'festival-2',
    name: 'Baisakhi',
    date: '[Admin: April 13/14]',
    dateRange: 'April 13 or 14',
    description: 'Birth of Khalsa, harvest festival',
    significance: 'KHALSA FOUNDATION DAY',
    celebrations: 'Nagar Kirtan, Gatka displays, Cultural programs',
    venue: '[Admin: Anandpur Sahib]',
    expectedVisitors: '50,000+ at Anandpur',
    rituals: ['Amrit Sanchar', 'Gatka Demonstration', 'Bhangra/Giddha'],
    icon: '⚔️',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 'festival-3',
    name: 'Bandi Chhor Divas (Diwali)',
    date: '[Admin: October/November]',
    dateRange: 'Same as Diwali',
    description: 'Release of Guru Hargobind and 52 kings from prison',
    significance: 'FREEDOM & JUSTICE',
    celebrations: 'Golden Temple illumination, fireworks, sweets',
    venue: '[Admin: Golden Temple Amritsar]',
    expectedVisitors: '80,000+ at Golden Temple',
    rituals: ['Diya lighting', 'Fireworks', 'Special Langar'],
    icon: '🪔',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    id: 'festival-4',
    name: 'Hola Mohalla',
    date: '[Admin: Day after Holi - March]',
    dateRange: 'March (day after Holi)',
    description: 'Sikh martial arts festival started by Guru Gobind Singh',
    significance: 'MARTIAL TRADITION',
    celebrations: 'Gatka, horse riding, mock battles, poetry',
    venue: '[Admin: Anandpur Sahib]',
    expectedVisitors: '40,000+ participants',
    rituals: ['Gatka displays', 'Nihangs demonstration', 'Hola Mohalla procession'],
    icon: '🗡️',
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 'festival-5',
    name: 'Martyrdom of Guru Arjan',
    date: '[Admin: June]',
    dateRange: 'Jyeshtha (May-June)',
    description: 'Martyrdom day of the fifth Guru',
    significance: 'SACRIFICE & FAITH',
    celebrations: 'Prayer meetings, Path, community service',
    venue: '[Admin: All Gurdwaras]',
    expectedVisitors: '20,000+',
    rituals: ['Akhand Path', 'Ardas', 'Langar'],
    icon: '🙏',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'festival-6',
    name: 'Martyrdom of Guru Tegh Bahadur',
    date: '[Admin: November]',
    dateRange: 'November 24',
    description: 'Martyrdom day of the ninth Guru',
    significance: 'RELIGIOUS FREEDOM',
    celebrations: 'Prayer meetings, shabads, community meals',
    venue: '[Admin: All Gurdwaras]',
    expectedVisitors: '25,000+',
    rituals: ['Special Ardas', 'Kirtan', 'Langar Seva'],
    icon: '⚔️',
    color: 'from-blue-500 to-purple-600',
  },
];

// Sacred Text Quotes
const sacredTextQuotes = [
  {
    id: 'quote-1',
    text: 'Ik Onkar Satnam Karta Purakh Nirbhau Nirvair',
    translation: 'One Universal Creator, Truth is His Name, Creative Being, Without Fear, Without Hatred',
    source: 'Guru Granth Sahib - Mool Mantar',
    page: 'Opening verse',
  },
  {
    id: 'quote-2',
    text: 'Nanak Naam Chardi Kala, Tere Bhane Sarbat Da Bhala',
    translation: 'O Nanak, with Naam comes high spirits, and with Thy will, may everyone be blessed',
    source: 'Guru Granth Sahib',
    page: 'Ardas conclusion',
  },
  {
    id: 'quote-3',
    text: 'Rehat Pyari Mujh Ko, Sikh Pyara Nahin',
    translation: 'The Rehat (code of conduct) is dear to me, not just the Sikh',
    source: 'Guru Gobind Singh Ji',
    page: 'Sikh Rehat Maryada',
  },
];

// Pilgrimage Packages
const pilgrimagePackages = [
  {
    id: 'package-1',
    name: '[Admin: 5 Takhts Complete Circuit]',
    duration: '14 days',
    price: '₹95,000',
    description: 'Visit all five sacred Takhts of Sikhism',
    inclusions: [
      'AC transport with experienced driver',
      'Accommodation near Gurdwaras',
      'Vegetarian Langar-style meals',
      'Senior care assistance',
      'Wheelchair accessibility',
      'Guided Gurbani sessions',
      'Medical support 24/7',
    ],
    highlights: [
      'Golden Temple Amritsar darshan',
      'Anandpur Sahib Hola Mohalla',
      'All 5 Takhts covered',
      'Akhand Path participation',
    ],
    dates: '[Admin: Oct-Mar preferred]',
    groupSize: '6-15 people',
    badge: 'PREMIUM CIRCUIT',
    gradient: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'package-2',
    name: '[Admin: Baisakhi Special Package]',
    duration: '8 days',
    price: '₹65,000',
    description: 'Experience Baisakhi at Anandpur Sahib and Golden Temple',
    inclusions: [
      'Festival priority access',
      'Traditional Punjabi meals',
      'Gatka demonstration viewing',
      'Cultural program tickets',
      'Senior-friendly transport',
      'Guided tours',
    ],
    highlights: [
      'Baisakhi celebrations',
      'Nagar Kirtan participation',
      'Khalsa Panth anniversary',
      'Traditional folk dances',
    ],
    dates: '[Admin: April 10-18]',
    groupSize: '10-20 people',
    badge: 'FESTIVAL SPECIAL',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 'package-3',
    name: '[Admin: Senior Devotee Comfort Yatra]',
    duration: '10 days',
    price: '₹75,000',
    description: 'Senior-focused pilgrimage with medical care and comfort',
    inclusions: [
      'Medical support 24/7',
      'Wheelchair and assistance',
      'Comfortable AC hotels',
      'Dietary customization',
      'Slow-paced itinerary',
      'Prayer session guidance',
    ],
    highlights: [
      'Golden Temple 3-day stay',
      'Patna Sahib visit',
      'Comfortable pace',
      'Medical team onboard',
    ],
    dates: '[Admin: Oct-Mar (Cool weather)]',
    groupSize: '4-10 seniors',
    badge: 'SENIOR CARE',
    gradient: 'from-blue-500 to-indigo-600',
  },
];

export function SikhDevoteesEnhanced({ onBack }: SikhDevoteesEnhancedProps) {
  // State Management
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'rituals' | 'planning' | 'packages' | 'interest' | 'grok-chat'>('landing');
  const [showRitualsCalendar, setShowRitualsCalendar] = useState(false);
  const [showFestivalsCalendar, setShowFestivalsCalendar] = useState(true);
  const [selectedSites, setSelectedSites] = useState<string[]>([]);
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
      dietary: 'vegetarian',
    },
    budget: { min: 50000, max: 150000 },
    dates: { start: '', end: '' },
    ritualPreferences: [] as string[],
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
    
    toast.success('Your interests saved! Grok AI will plan your perfect Sikh pilgrimage shortly.');
    setTimeout(() => {
      setCurrentScreen('grok-chat');
      setGrokTyping(true);
      setTimeout(() => {
        setGrokTyping(false);
        setShowGrokResponse(true);
      }, 3000);
    }, 1500);
  };

  const handleCustomizePackage = () => {
    setShowCustomBuilder(true);
    setBuilderStep(1);
  };

  const handleBuilderNext = () => {
    if (builderStep < 4) {
      setBuilderStep(builderStep + 1);
    } else {
      // Final submit
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
        <div className="relative h-64 bg-gradient-to-r from-yellow-500 to-amber-600 overflow-hidden">
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
                ☬
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-2">
              Sikh Devotees
            </h1>
            <p className="text-white/90 text-center text-base">
              Eternal Gurpurabs – 5 Sacred Takhts Journey
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
                  <p className="text-xs font-bold text-blue-900">Accessible Darshan</p>
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
                  <p className="text-xs font-bold text-amber-900">Guru Granth Sahib</p>
                  <p className="text-[10px] text-amber-600">Sacred Scripture</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl">
                <Utensils className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-xs font-bold text-green-900">Langar Included</p>
                  <p className="text-[10px] text-green-600">Community Meals</p>
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
            className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl p-6 shadow-xl border-2 border-dashed border-amber-300"
            title="Admin: Edit sacred text quote"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="text-white text-lg font-bold mb-2 italic">
                  "[Admin: Ik Onkar Satnam Karta Purakh...]"
                </p>
                <p className="text-white/90 text-sm mb-2">
                  "[Admin: One Universal Creator, Truth is His Name...]"
                </p>
                <p className="text-white/80 text-xs">
                  - Guru Granth Sahib, Mool Mantar
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
                BAISAKHI AT ANANDPUR SAHIB - PEAK SEASON TIPS
              </h4>
              <p className="text-gray-700 text-xs leading-relaxed mb-4">
                Baisakhi (April 13-14) draws 50,000+ devotees to Anandpur Sahib. 
                Best time to visit: October to March for pleasant weather. 
                Golden Temple offers 24/7 Langar for 100,000+ daily visitors. 
                Senior devotees: Book wheelchair assistance 2 weeks in advance.
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
                  variant="outline"
                  className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                >
                  <Save className="h-4 w-4 mr-1" />
                  Save Insight
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  onClick={() => {
                    toast.success('Applied to Custom Yatra Builder!');
                    setShowCustomBuilder(true);
                  }}
                >
                  Apply to Custom Yatra
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
                🕉️ Sacred Gurdwaras & Takhts
              </h2>
              <p className="text-sm text-gray-600">
                Visit the holiest Sikh pilgrimage sites
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {sacredSites.map((site, index) => (
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
                        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(site.subtitle + ' Gurdwara')}`, '_blank');
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

        {/* Rituals & Special Days Section */}
        <div className="px-6 mb-6">
          <Button
            onClick={() => setCurrentScreen('rituals')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white h-16 text-base font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            View Rituals & Special Days
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Planning & Packages Buttons */}
        <div className="px-6 mb-6 grid grid-cols-2 gap-3">
          <Button
            onClick={() => setCurrentScreen('planning')}
            variant="outline"
            className="h-14 flex-col gap-1 border-2"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-bold">Plan Pilgrimage</span>
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

  // RITUALS & SPECIAL DAYS SCREEN
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
            📖 Rituals & Special Days
          </h1>
          <p className="text-gray-600 mb-6">
            Sacred practices and procedures in Sikhism
          </p>

          {/* Rituals Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Daily Rituals & Practices</h2>
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
                {rituals.map((ritual, index) => (
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                🎉 Festivals & Gurpurabs Calendar
              </h2>
            </div>

            <div className="grid gap-4">
              {festivals.map((festival, index) => (
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

  // PLANNING SCREEN
  if (currentScreen === 'planning') {
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
            📅 Plan Your Pilgrimage
          </h1>
          <p className="text-gray-600 mb-6">
            Customize your Sikh spiritual journey
          </p>

          {/* Destination Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Select Sacred Sites
            </h2>
            <div className="space-y-3">
              {sacredSites.map(site => (
                <label
                  key={site.id}
                  className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={planningForm.sites.includes(site.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPlanningForm({
                          ...planningForm,
                          sites: [...planningForm.sites, site.id]
                        });
                      } else {
                        setPlanningForm({
                          ...planningForm,
                          sites: planningForm.sites.filter(id => id !== site.id)
                        });
                      }
                    }}
                    className="w-5 h-5"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{site.name}</p>
                    <p className="text-sm text-gray-600">{site.location}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Group Size */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Group Size
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {['1-5', '6-15', '16+'].map(size => (
                <button
                  key={size}
                  onClick={() => setPlanningForm({ ...planningForm, groupSize: size })}
                  className={`p-4 rounded-xl border-2 font-bold transition-all ${
                    planningForm.groupSize === size
                      ? 'border-amber-500 bg-amber-50 text-amber-900'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Users className="h-6 w-6 mx-auto mb-2" />
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Special Requirements
            </h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Accessibility className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-gray-900">Senior Care</p>
                    <p className="text-sm text-gray-600">Dedicated assistance for elderly</p>
                  </div>
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

              <label className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Accessibility className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-bold text-gray-900">Wheelchair Access</p>
                    <p className="text-sm text-gray-600">Priority wheelchair arrangements</p>
                  </div>
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

              <label className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-bold text-gray-900">Medical Support</p>
                    <p className="text-sm text-gray-600">24/7 medical team on-site</p>
                  </div>
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

          {/* Submit Button */}
          <Button
            onClick={() => {
              if (planningForm.sites.length === 0) {
                toast.error('Please select at least one sacred site');
                return;
              }
              toast.success('Planning request submitted to Grok AI!');
              setCurrentScreen('grok-chat');
              setGrokTyping(true);
              setTimeout(() => {
                setGrokTyping(false);
                setShowGrokResponse(true);
              }, 3000);
            }}
            className="w-full h-14 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold text-base rounded-2xl shadow-lg"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Submit to Grok AI
          </Button>
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
            Curated Sikh spiritual journeys
          </p>

          <div className="grid gap-6">
            {pilgrimagePackages.map((pkg, index) => (
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
                    onClick={handleCustomizePackage}
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

        {/* Custom Tour Builder Modal */}
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
                <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-6 sticky top-0 z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-white">
                      Customize Your Yatra
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
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Travel Dates
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Start Date
                          </label>
                          <Input
                            type="date"
                            value={planningForm.dates.start}
                            onChange={(e) => setPlanningForm({
                              ...planningForm,
                              dates: { ...planningForm.dates, start: e.target.value }
                            })}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            End Date
                          </label>
                          <Input
                            type="date"
                            value={planningForm.dates.end}
                            onChange={(e) => setPlanningForm({
                              ...planningForm,
                              dates: { ...planningForm.dates, end: e.target.value }
                            })}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {builderStep === 2 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Group & Budget
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Group Size
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {['1-5', '6-15', '16+'].map(size => (
                              <button
                                key={size}
                                onClick={() => setPlanningForm({ ...planningForm, groupSize: size })}
                                className={`p-3 rounded-xl border-2 font-bold ${
                                  planningForm.groupSize === size
                                    ? 'border-amber-500 bg-amber-50'
                                    : 'border-gray-200'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Budget Range (per person)
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Minimum</p>
                              <Input
                                type="number"
                                value={planningForm.budget.min}
                                onChange={(e) => setPlanningForm({
                                  ...planningForm,
                                  budget: { ...planningForm.budget, min: parseInt(e.target.value) }
                                })}
                                placeholder="₹50,000"
                              />
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Maximum</p>
                              <Input
                                type="number"
                                value={planningForm.budget.max}
                                onChange={(e) => setPlanningForm({
                                  ...planningForm,
                                  budget: { ...planningForm.budget, max: parseInt(e.target.value) }
                                })}
                                placeholder="₹150,000"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {builderStep === 3 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Special Needs
                      </h3>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Review & Submit
                      </h3>
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
                        <div className="bg-green-50 rounded-xl p-4">
                          <p className="text-xs text-green-600 mb-1">Budget Range</p>
                          <p className="text-sm font-bold text-green-900">
                            ₹{planningForm.budget.min.toLocaleString()} - ₹{planningForm.budget.max.toLocaleString()}
                          </p>
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
                      className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-white"
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
                <p className="text-sm text-gray-600">Personalizing your pilgrimage...</p>
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
                        Thank you! Grok AI has received your Sikh pilgrimage request. 
                        We'll get back to you within 24 hours with:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">
                            Detailed budget breakdown for all Takhts
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">
                            Senior care & wheelchair accessibility options
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">
                            Custom itinerary with Akhand Path & Langar timings
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">
                            Vegetarian meal planning and accommodation details
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm text-green-900">
                            Festival calendar coordination (Baisakhi, Gurpurabs)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="font-bold text-purple-900 mb-3">
                    📋 Preliminary Itinerary Preview
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-amber-600" />
                        <span className="font-bold text-gray-900">Golden Temple, Amritsar</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        3 days • Early morning Asa di Var • Langar seva • Palki Sahib ceremony
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Estimated: ₹15,000-₹25,000 (accommodation + meals)
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-orange-600" />
                        <span className="font-bold text-gray-900">Anandpur Sahib</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        2 days • Takht Sri Kesgarh Sahib • Khalsa Heritage Complex
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Estimated: ₹10,000-₹18,000
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="font-bold text-gray-900">Senior Care Services</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Wheelchair rental • Medical support • Comfortable transport
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Estimated: ₹8,000-₹12,000 (full package)
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <p className="text-sm font-bold text-gray-900 mb-2">
                      💰 Total Estimated Cost: ₹75,000 - ₹95,000
                    </p>
                    <p className="text-xs text-gray-600">
                      Final pricing will be provided in the detailed quote within 24 hours
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    toast.success('Itinerary saved! We\'ll contact you shortly.');
                    setCurrentScreen('landing');
                  }}
                  className="w-full h-14 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-base rounded-2xl shadow-lg mt-6"
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
