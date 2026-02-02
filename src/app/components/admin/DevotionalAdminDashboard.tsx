import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Settings,
  BookOpen,
  Calendar,
  MapPin,
  Users,
  Heart,
  Sparkles,
  Edit,
  Plus,
  Trash2,
  Save,
  X,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Copy,
  Check,
  AlertCircle,
  Info,
  ChevronRight,
  ChevronDown,
  Globe,
  Clock,
  Bell,
  Database,
  FileText,
  Image,
  Tag,
  Link,
  Languages,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';

// ========================================
// DEVOTIONAL ADMIN DASHBOARD
// Complete Management System for All Religions
// ========================================

interface Religion {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  primaryColor: string;
  secondaryColor: string;
  enabled: boolean;
}

interface SacredText {
  id: string;
  religionId: string;
  name: string;
  language: string;
  significance: string;
  associatedSites: string[];
  keyPassages: Array<{
    id: string;
    text: string;
    context: string;
    ritualUse: string;
  }>;
  metadata: {
    author?: string;
    period?: string;
    chapters?: number;
    verses?: number;
  };
}

interface Festival {
  id: string;
  religionId: string;
  name: string;
  dateType: 'fixed' | 'lunar' | 'solar';
  fixedDate?: { month: number; day: number };
  lunarDate?: { month: string; day: number };
  primaryLocations: string[];
  ritualProcedures: string[];
  participationRequirements: {
    dressCode?: string;
    fasting?: string;
    restrictions?: string[];
    preparations?: string[];
  };
  duration: number; // in days
  crowdLevel: 'low' | 'medium' | 'high' | 'extreme';
  description: string;
}

interface RitualProcedure {
  id: string;
  religionId: string;
  name: string;
  type: 'prayer' | 'meditation' | 'offering' | 'bathing' | 'chanting' | 'fasting' | 'pilgrimage';
  steps: Array<{
    order: number;
    instruction: string;
    duration?: string;
    materials?: string[];
    visualAid?: string; // URL to image/video
  }>;
  timingRequirements: {
    preferredTime?: string;
    duration: string;
    frequency?: string;
  };
  materialPreparation: string[];
  dressCode: {
    required: string[];
    prohibited: string[];
    recommendations: string[];
  };
  accessibility: {
    seniorFriendly: boolean;
    wheelchairAccessible: boolean;
    physicalDemand: 'low' | 'medium' | 'high';
    alternatives?: string;
  };
}

interface SacredSite {
  id: string;
  religionId: string;
  name: string;
  location: string;
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
  significance: string;
  ritualTimetable: Array<{
    ritualId: string;
    times: string[];
    days?: string[]; // specific days of week
  }>;
  festivalSchedule: Array<{
    festivalId: string;
    specialTimings?: string[];
    specialProcedures?: string[];
  }>;
  restrictions: {
    entryRestrictions?: string[];
    photographyAllowed: boolean;
    genderSeparation?: boolean;
    dressCode: string[];
    prohibitedItems?: string[];
  };
  facilities: {
    parking: boolean;
    restrooms: boolean;
    wheelchairAccess: boolean;
    medicalAid: boolean;
    foodAvailable: boolean;
    accommodations?: string[];
  };
  operatingHours: {
    open: string;
    close: string;
    closedDays?: string[];
  };
}

type AdminSection = 
  | 'overview'
  | 'sacred-texts'
  | 'festivals'
  | 'rituals'
  | 'sites'
  | 'filters'
  | 'grok-ai'
  | 'settings';

export function DevotionalAdminDashboard() {
  const [selectedReligion, setSelectedReligion] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Religion configurations
  const religions: Religion[] = [
    {
      id: 'hindu',
      name: 'Hindu Pilgrims',
      emoji: '🕉️',
      gradient: 'from-orange-500 to-red-600',
      primaryColor: '#EA580C',
      secondaryColor: '#DC2626',
      enabled: true,
    },
    {
      id: 'sikh',
      name: 'Sikh Devotees',
      emoji: '☬',
      gradient: 'from-yellow-500 to-amber-600',
      primaryColor: '#1E3A8A',
      secondaryColor: '#F97316',
      enabled: true,
    },
    {
      id: 'christian',
      name: 'Christian Pilgrims',
      emoji: '✝️',
      gradient: 'from-purple-600 to-indigo-700',
      primaryColor: '#7C3AED',
      secondaryColor: '#FBBF24',
      enabled: true,
    },
    {
      id: 'muslim',
      name: 'Muslim Travelers',
      emoji: '☪️',
      gradient: 'from-green-600 to-teal-700',
      primaryColor: '#059669',
      secondaryColor: '#FFFFFF',
      enabled: true,
    },
    {
      id: 'buddhist',
      name: 'Buddhist Seekers',
      emoji: '☸️',
      gradient: 'from-amber-600 to-orange-700',
      primaryColor: '#EA580C',
      secondaryColor: '#991B1B',
      enabled: true,
    },
    {
      id: 'jain',
      name: 'Jain Pilgrims',
      emoji: '🕉️',
      gradient: 'from-red-600 to-pink-700',
      primaryColor: '#FFFFFF',
      secondaryColor: '#DC2626',
      enabled: true,
    },
    {
      id: 'jewish',
      name: 'Jewish Travelers',
      emoji: '✡️',
      gradient: 'from-blue-600 to-indigo-700',
      primaryColor: '#1D4ED8',
      secondaryColor: '#9CA3AF',
      enabled: true,
    },
    {
      id: 'bahai',
      name: "Bahá'í Pilgrims",
      emoji: '⭐',
      gradient: 'from-green-500 to-emerald-600',
      primaryColor: '#10B981',
      secondaryColor: '#FFFFFF',
      enabled: true,
    },
    {
      id: 'indigenous',
      name: 'Indigenous Spiritual Sites',
      emoji: '🌍',
      gradient: 'from-green-700 to-brown-600',
      primaryColor: '#15803D',
      secondaryColor: '#78350F',
      enabled: true,
    },
    {
      id: 'parsi',
      name: 'Parsi/Zoroastrian',
      emoji: '🔥',
      gradient: 'from-yellow-400 to-orange-500',
      primaryColor: '#FFFFFF',
      secondaryColor: '#FBBF24',
      enabled: true,
    },
  ];

  const adminSections = [
    {
      id: 'overview' as AdminSection,
      name: 'Overview',
      icon: Globe,
      description: 'Quick stats and recent changes',
    },
    {
      id: 'sacred-texts' as AdminSection,
      name: 'Sacred Texts',
      icon: BookOpen,
      description: 'Manage religious scriptures and passages',
    },
    {
      id: 'festivals' as AdminSection,
      name: 'Festival Calendar',
      icon: Calendar,
      description: 'Add and edit festival dates and procedures',
    },
    {
      id: 'rituals' as AdminSection,
      name: 'Ritual Procedures',
      icon: Heart,
      description: 'Step-by-step ritual guides',
    },
    {
      id: 'sites' as AdminSection,
      name: 'Sacred Sites',
      icon: MapPin,
      description: 'Pilgrimage destinations database',
    },
    {
      id: 'filters' as AdminSection,
      name: 'Filter Configuration',
      icon: Filter,
      description: 'Setup search and filter options',
    },
    {
      id: 'grok-ai' as AdminSection,
      name: 'Grok AI Settings',
      icon: Sparkles,
      description: 'AI integration and training data',
    },
    {
      id: 'settings' as AdminSection,
      name: 'System Settings',
      icon: Settings,
      description: 'Global configurations',
    },
  ];

  const selectedReligionData = religions.find((r) => r.id === selectedReligion);

  const handleSaveItem = (item: any) => {
    toast.success('Item saved successfully!');
    setEditingItem(null);
    setShowAddModal(false);
  };

  const handleDeleteItem = (itemId: string) => {
    toast.success('Item deleted successfully!');
  };

  const handleExportData = () => {
    toast.success('Exporting data as JSON...');
  };

  const handleImportData = () => {
    toast.success('Import wizard opened...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border-2 border-white/40">
                <Settings className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Devotional Tourism Admin
                </h1>
                <p className="text-white/80 text-sm">
                  Manage content across all religious categories
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleExportData}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
              >
                <Download className="mr-2 h-5 w-5" />
                Export All
              </Button>
              <Button
                onClick={handleImportData}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white"
              >
                <Upload className="mr-2 h-5 w-5" />
                Import
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all content..."
              className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-xl text-white placeholder:text-white/60 focus:bg-white/30 focus:border-white/60"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar: Religion Selector */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-screen p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Database className="h-5 w-5 text-purple-600" />
            Select Religion
          </h2>

          <div className="space-y-2">
            {religions.map((religion) => (
              <button
                key={religion.id}
                onClick={() => setSelectedReligion(religion.id)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  selectedReligion === religion.id
                    ? `border-purple-500 bg-gradient-to-r ${religion.gradient} text-white shadow-lg`
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`text-3xl ${
                      selectedReligion === religion.id ? 'scale-110' : ''
                    }`}
                  >
                    {religion.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className={`font-semibold ${
                          selectedReligion === religion.id ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {religion.name}
                      </p>
                      {religion.enabled && (
                        <Badge
                          className={
                            selectedReligion === religion.id
                              ? 'bg-white/20 text-white border-white/40'
                              : 'bg-green-100 text-green-800 border-green-300'
                          }
                        >
                          Active
                        </Badge>
                      )}
                    </div>
                    <p
                      className={`text-xs ${
                        selectedReligion === religion.id ? 'text-white/80' : 'text-gray-600'
                      }`}
                    >
                      ID: {religion.id}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-purple-50 border-2 border-purple-200 rounded-xl">
            <h3 className="font-bold text-purple-900 mb-3 text-sm">System Stats</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Religions:</span>
                <span className="font-bold text-gray-900">{religions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Active Religions:</span>
                <span className="font-bold text-green-700">
                  {religions.filter((r) => r.enabled).length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Sites:</span>
                <span className="font-bold text-gray-900">142</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Rituals:</span>
                <span className="font-bold text-gray-900">87</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {selectedReligion ? (
            <div className="flex h-full">
              {/* Section Navigation */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Sections</h2>
                <div className="space-y-1">
                  {adminSections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full p-3 rounded-xl text-left transition-all ${
                          isActive
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                          <span className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                            {section.name}
                          </span>
                        </div>
                        <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-600'} ml-8`}>
                          {section.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content Panel */}
              <div className="flex-1 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedReligion}-${activeSection}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Section Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {adminSections.find((s) => s.id === activeSection)?.name}
                        </h2>
                        <p className="text-gray-600">
                          Managing content for{' '}
                          <span className="font-semibold text-purple-600">
                            {selectedReligionData?.name}
                          </span>
                        </p>
                      </div>

                      <Button
                        onClick={() => setShowAddModal(true)}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                      >
                        <Plus className="mr-2 h-5 w-5" />
                        Add New
                      </Button>
                    </div>

                    {/* Render Section-Specific Content */}
                    {activeSection === 'overview' && (
                      <OverviewSection religion={selectedReligionData!} />
                    )}
                    {activeSection === 'sacred-texts' && (
                      <SacredTextsSection religion={selectedReligionData!} />
                    )}
                    {activeSection === 'festivals' && (
                      <FestivalsSection religion={selectedReligionData!} />
                    )}
                    {activeSection === 'rituals' && (
                      <RitualsSection religion={selectedReligionData!} />
                    )}
                    {activeSection === 'sites' && (
                      <SitesSection religion={selectedReligionData!} />
                    )}
                    {activeSection === 'filters' && (
                      <FiltersSection religion={selectedReligionData!} />
                    )}
                    {activeSection === 'grok-ai' && (
                      <GrokAISection religion={selectedReligionData!} />
                    )}
                    {activeSection === 'settings' && (
                      <SettingsSection religion={selectedReligionData!} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            // No religion selected state
            <div className="flex items-center justify-center h-full p-8">
              <div className="text-center max-w-md">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-12 w-12 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Select a Religion to Begin
                </h2>
                <p className="text-gray-600">
                  Choose a religious category from the left sidebar to manage its content,
                  rituals, festivals, and sacred sites.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ========================================
// SECTION COMPONENTS
// ========================================

function OverviewSection({ religion }: { religion: Religion }) {
  const stats = [
    { label: 'Sacred Texts', value: 12, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Festivals', value: 8, icon: Calendar, color: 'bg-purple-500' },
    { label: 'Rituals', value: 24, icon: Heart, color: 'bg-red-500' },
    { label: 'Sacred Sites', value: 35, icon: MapPin, color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Changes</h3>
        <div className="space-y-3">
          {[
            { action: 'Updated', item: 'Sacred Text: Primary Scripture', time: '2 hours ago' },
            { action: 'Added', item: 'Festival: Spring Celebration', time: '5 hours ago' },
            { action: 'Modified', item: 'Ritual: Morning Prayer', time: '1 day ago' },
          ].map((activity, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <Badge
                  className={
                    activity.action === 'Added'
                      ? 'bg-green-100 text-green-800 border-green-300'
                      : activity.action === 'Updated'
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                  }
                >
                  {activity.action}
                </Badge>
                <span className="text-sm text-gray-900 font-medium">{activity.item}</span>
              </div>
              <span className="text-xs text-gray-600">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Editable Zones Info */}
      <div className="bg-purple-50 border-2 border-dashed border-purple-400 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
          <Info className="h-5 w-5" />
          Admin Editable Content Guidelines
        </h3>
        <ul className="space-y-2 text-sm text-purple-800">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 flex-shrink-0 mt-0.5" />
            All dynamic content has dashed borders (#CCCCCC, 1px)
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 flex-shrink-0 mt-0.5" />
            Placeholder format: [Admin: Religion_Section_Field]
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 flex-shrink-0 mt-0.5" />
            Tooltips show "Edit [field name] in admin panel"
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 flex-shrink-0 mt-0.5" />
            Layer naming: ADMIN_[Religion][Section][Field]
          </li>
        </ul>
      </div>
    </div>
  );
}

function SacredTextsSection({ religion }: { religion: Religion }) {
  const sampleTexts = [
    {
      id: '1',
      name: '[Admin: Edit] Primary Sacred Scripture',
      language: '[Admin: Edit] Original Language',
      significance: '[Admin: Edit] Core text for all followers',
      associatedSites: 3,
      passages: 12,
    },
    {
      id: '2',
      name: '[Admin: Edit] Commentary Collection',
      language: '[Admin: Edit] Multiple Languages',
      significance: '[Admin: Edit] Interpretative guidance',
      associatedSites: 5,
      passages: 8,
    },
  ];

  return (
    <div className="space-y-4">
      {sampleTexts.map((text) => (
        <div
          key={text.id}
          className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{text.name}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                  <Languages className="h-3 w-3 mr-1" />
                  {text.language}
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 border border-purple-300">
                  {text.associatedSites} Sites
                </Badge>
                <Badge className="bg-green-100 text-green-800 border border-green-300">
                  {text.passages} Passages
                </Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost">
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg p-3">
            {text.significance}
          </p>
        </div>
      ))}
    </div>
  );
}

function FestivalsSection({ religion }: { religion: Religion }) {
  const sampleFestivals = [
    {
      id: '1',
      name: '[Admin: Edit] Major Annual Festival',
      dateType: 'lunar' as const,
      date: '[Admin: Edit] Lunar Month, Day',
      duration: 3,
      crowdLevel: 'extreme' as const,
    },
  ];

  return (
    <div className="space-y-4">
      {sampleFestivals.map((festival) => (
        <div
          key={festival.id}
          className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{festival.name}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-100 text-purple-800 border border-purple-300">
                  <Calendar className="h-3 w-3 mr-1" />
                  {festival.dateType}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                  {festival.duration} days
                </Badge>
                <Badge className="bg-red-100 text-red-800 border border-red-300">
                  <Users className="h-3 w-3 mr-1" />
                  {festival.crowdLevel.toUpperCase()}
                </Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost">
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-700">{festival.date}</p>
        </div>
      ))}
    </div>
  );
}

function RitualsSection({ religion }: { religion: Religion }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 p-6">
      <p className="text-gray-600">Ritual procedures management interface...</p>
    </div>
  );
}

function SitesSection({ religion }: { religion: Religion }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 p-6">
      <p className="text-gray-600">Sacred sites database interface...</p>
    </div>
  );
}

function FiltersSection({ religion }: { religion: Religion }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 p-6">
      <p className="text-gray-600">Filter configuration interface...</p>
    </div>
  );
}

function GrokAISection({ religion }: { religion: Religion }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 p-6">
      <p className="text-gray-600">Grok AI training and settings...</p>
    </div>
  );
}

function SettingsSection({ religion }: { religion: Religion }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 p-6">
      <p className="text-gray-600">System settings and configurations...</p>
    </div>
  );
}
