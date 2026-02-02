import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  Calendar,
  Users,
  Heart,
  BookOpen,
  Clock,
  DollarSign,
  Sparkles,
  Plus,
  Minus,
  X,
  Search,
  Map as MapIcon,
  Accessibility,
  Utensils,
  Stethoscope,
  Info,
  PartyPopper,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Package,
  Sliders,
  FileText,
  Send,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Switch } from '@/app/components/ui/switch';
import { toast } from 'sonner';

// ========================================
// PILGRIMAGE PLANNER (COMMON)
// Multi-Step Form with Religion-Specific Adaptations
// ========================================

interface PilgrimagePlannerProps {
  religion: {
    id: string;
    name: string;
    emoji: string;
    color: string;
    gradient: string;
  };
  onBack: () => void;
  onSubmit: (planData: PilgrimagePlanData) => void;
}

interface SelectedDestination {
  id: string;
  name: string;
  location: string;
  estimatedDays: number;
  mustVisit: boolean;
}

interface TravelDetails {
  arrivalDate: string;
  departureDate: string;
  groupSize: number;
  groupComposition: {
    adults: number;
    seniors: number;
    children: number;
  };
  specialRequests: {
    seniorCare: boolean;
    medicalAssistance: boolean;
    dietaryRestrictions: boolean;
    ritualGuidance: boolean;
    other: string;
  };
}

interface SpiritualPreferences {
  primaryRituals: string[];
  sacredTextFocus: string[];
  festivalParticipation: string[];
  prayerSchedule: 'flexible' | 'morning' | 'evening' | 'multiple';
  meditationInterest: boolean;
}

interface PackageSelection {
  type: 'existing' | 'custom';
  selectedPackageId?: string;
  budgetRange: {
    min: number;
    max: number;
  };
  customPreferences?: string[];
}

interface PilgrimagePlanData {
  destinations: SelectedDestination[];
  travelDetails: TravelDetails;
  spiritualPreferences: SpiritualPreferences;
  packageSelection: PackageSelection;
}

type Step = 1 | 2 | 3 | 4 | 5;

export function PilgrimagePlannerCommon({
  religion,
  onBack,
  onSubmit,
}: PilgrimagePlannerProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step 1: Destinations
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState<SelectedDestination[]>([]);

  // Step 2: Travel Details
  const [travelDetails, setTravelDetails] = useState<TravelDetails>({
    arrivalDate: '',
    departureDate: '',
    groupSize: 2,
    groupComposition: { adults: 2, seniors: 0, children: 0 },
    specialRequests: {
      seniorCare: false,
      medicalAssistance: false,
      dietaryRestrictions: false,
      ritualGuidance: false,
      other: '',
    },
  });

  // Step 3: Spiritual Preferences
  const [spiritualPreferences, setSpiritualPreferences] = useState<SpiritualPreferences>({
    primaryRituals: [],
    sacredTextFocus: [],
    festivalParticipation: [],
    prayerSchedule: 'flexible',
    meditationInterest: false,
  });

  // Step 4: Package Selection
  const [packageSelection, setPackageSelection] = useState<PackageSelection>({
    type: 'existing',
    budgetRange: { min: 15000, max: 50000 },
  });

  // Sample data (would be passed as props from comprehensive religion data)
  const availableDestinations = [
    {
      id: 'dest-1',
      name: '[Admin-Added Destination 1]',
      location: '[Admin-Added Location X]',
      estimatedDays: 2,
      mustVisit: true,
    },
    {
      id: 'dest-2',
      name: '[Admin-Added Destination 2]',
      location: '[Admin-Added Location Y]',
      estimatedDays: 1,
      mustVisit: false,
    },
    {
      id: 'dest-3',
      name: '[Admin-Added Destination 3]',
      location: '[Admin-Added Location Z]',
      estimatedDays: 3,
      mustVisit: true,
    },
    {
      id: 'dest-4',
      name: '[Admin-Added Destination 4]',
      location: '[Admin-Added Location W]',
      estimatedDays: 2,
      mustVisit: false,
    },
    {
      id: 'dest-5',
      name: '[Admin-Added Destination 5]',
      location: '[Admin-Added Location V]',
      estimatedDays: 1,
      mustVisit: false,
    },
  ];

  const availableRituals = [
    { id: 'ritual-1', name: '[Admin: Edit] Morning Prayer Ceremony', duration: '90 min' },
    { id: 'ritual-2', name: '[Admin: Edit] Sacred Bathing Ritual', duration: '60 min' },
    { id: 'ritual-3', name: '[Admin: Edit] Devotional Singing', duration: '120 min' },
    { id: 'ritual-4', name: '[Admin: Edit] Meditation Session', duration: '45 min' },
    { id: 'ritual-5', name: '[Admin: Edit] Sacred Text Reading', duration: '60 min' },
  ];

  const availableSacredTexts = [
    { id: 'text-1', name: '[Admin: Edit] Primary Sacred Scripture', focus: 'Core teachings' },
    { id: 'text-2', name: '[Admin: Edit] Secondary Commentaries', focus: 'Interpretations' },
    { id: 'text-3', name: '[Admin: Edit] Historical Accounts', focus: 'Context and stories' },
  ];

  const upcomingFestivals = [
    {
      id: 'fest-1',
      name: '[Admin: Edit] Annual Grand Festival',
      dates: '[Admin: Date Range 1]',
      participation: 'Full participation available',
    },
    {
      id: 'fest-2',
      name: '[Admin: Edit] Monthly Observance',
      dates: '[Admin: Date Range 2]',
      participation: 'One-day event',
    },
    {
      id: 'fest-3',
      name: '[Admin: Edit] Special Pilgrimage Season',
      dates: '[Admin: Date Range 3]',
      participation: 'Extended season',
    },
  ];

  const existingPackages = [
    {
      id: 'pkg-1',
      name: '[Admin: Edit] Essential Pilgrimage Package',
      duration: '5 Days / 4 Nights',
      destinations: 3,
      price: 25000,
      includes: [
        '[Admin: Edit] Accommodation in pilgrim lodges',
        '[Admin: Edit] All meals (vegetarian)',
        '[Admin: Edit] Guided ritual participation',
        '[Admin: Edit] Transportation between sites',
      ],
      popular: true,
    },
    {
      id: 'pkg-2',
      name: '[Admin: Edit] Grand Sacred Circuit',
      duration: '10 Days / 9 Nights',
      destinations: 5,
      price: 45000,
      includes: [
        '[Admin: Edit] Premium accommodation',
        '[Admin: Edit] All meals + special religious foods',
        '[Admin: Edit] Expert spiritual guide',
        '[Admin: Edit] Transportation + domestic flights',
        '[Admin: Edit] Festival participation arrangements',
      ],
      popular: false,
    },
    {
      id: 'pkg-3',
      name: '[Admin: Edit] Weekend Spiritual Retreat',
      duration: '3 Days / 2 Nights',
      destinations: 1,
      price: 15000,
      includes: [
        '[Admin: Edit] Shared accommodation',
        '[Admin: Edit] Meals included',
        '[Admin: Edit] Meditation sessions',
        '[Admin: Edit] Local transport',
      ],
      popular: false,
    },
  ];

  const steps = [
    { number: 1, title: 'Destinations', icon: MapPin },
    { number: 2, title: 'Travel Details', icon: Calendar },
    { number: 3, title: 'Spiritual Preferences', icon: BookOpen },
    { number: 4, title: 'Package', icon: Package },
    { number: 5, title: 'Review', icon: FileText },
  ];

  const handleAddDestination = (destination: typeof availableDestinations[0]) => {
    if (selectedDestinations.find((d) => d.id === destination.id)) {
      toast.error('Destination already added');
      return;
    }
    setSelectedDestinations([...selectedDestinations, destination]);
    toast.success(`Added ${destination.name}`);
  };

  const handleRemoveDestination = (id: string) => {
    setSelectedDestinations(selectedDestinations.filter((d) => d.id !== id));
    toast.success('Destination removed');
  };

  const handleNext = () => {
    // Validation
    if (currentStep === 1 && selectedDestinations.length === 0) {
      toast.error('Please select at least one destination');
      return;
    }
    if (currentStep === 2 && (!travelDetails.arrivalDate || !travelDetails.departureDate)) {
      toast.error('Please enter arrival and departure dates');
      return;
    }
    if (currentStep === 3 && spiritualPreferences.primaryRituals.length === 0) {
      toast.error('Please select at least one ritual you\'d like to participate in');
      return;
    }

    if (currentStep < 5) {
      setCurrentStep((currentStep + 1) as Step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const planData: PilgrimagePlanData = {
      destinations: selectedDestinations,
      travelDetails,
      spiritualPreferences,
      packageSelection,
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success('Plan submitted to Grok AI for processing!');
    onSubmit(planData);
    setIsSubmitting(false);
  };

  const getTotalDays = () => {
    return selectedDestinations.reduce((sum, dest) => sum + dest.estimatedDays, 0);
  };

  const getEstimatedBudget = () => {
    const { min, max } = packageSelection.budgetRange;
    return { min, max };
  };

  const filteredDestinations = availableDestinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center text-4xl backdrop-blur-md shadow-lg border-2 border-white/40">
              {religion.emoji}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Plan Your Pilgrimage</h1>
              <p className="text-white/90">{religion.name}</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/30">
            <div className="flex items-center justify-between">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                          isActive
                            ? 'bg-white text-gray-900 shadow-lg scale-110'
                            : isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-white/30 text-white/70'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="h-6 w-6" />
                        ) : (
                          <Icon className="h-6 w-6" />
                        )}
                      </div>
                      <p
                        className={`text-xs font-semibold text-center ${
                          isActive ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 mx-2 rounded-full transition-all ${
                          isCompleted ? 'bg-green-500' : 'bg-white/30'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {/* STEP 1: SELECT DESTINATIONS */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Select Sacred Destinations
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose the holy sites you'd like to visit during your pilgrimage
                </p>

                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search destinations by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-gray-300 rounded-xl"
                  />
                </div>

                {/* Interactive Map Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 mb-6 border-2 border-dashed border-blue-300 text-center">
                  <MapIcon className="h-16 w-16 mx-auto text-blue-600 mb-4" />
                  <p className="text-gray-700 font-semibold mb-2">
                    [Admin: Upload Interactive Map]
                  </p>
                  <p className="text-sm text-gray-600">
                    Map showing all sacred sites with clickable pins
                  </p>
                </div>

                {/* Available Destinations Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {filteredDestinations.map((dest) => {
                    const isSelected = selectedDestinations.find((d) => d.id === dest.id);
                    return (
                      <div
                        key={dest.id}
                        className={`border-2 rounded-2xl p-4 transition-all ${
                          isSelected
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{dest.name}</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {dest.location}
                            </p>
                          </div>
                          {dest.mustVisit && (
                            <Badge className="bg-amber-100 text-amber-800 border border-amber-300">
                              Must Visit
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                            <Clock className="h-3 w-3 mr-1" />
                            {dest.estimatedDays} day{dest.estimatedDays > 1 ? 's' : ''}
                          </Badge>

                          <Button
                            onClick={() =>
                              isSelected
                                ? handleRemoveDestination(dest.id)
                                : handleAddDestination(dest)
                            }
                            size="sm"
                            className={`${
                              isSelected
                                ? 'bg-red-500 hover:bg-red-600 text-white'
                                : `bg-gradient-to-r ${religion.gradient} text-white`
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <X className="h-4 w-4 mr-1" />
                                Remove
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-1" />
                                Add
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Destinations Summary */}
                {selectedDestinations.length > 0 && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Selected Destinations ({selectedDestinations.length})
                    </h3>
                    <div className="space-y-2 mb-4">
                      {selectedDestinations.map((dest) => (
                        <div
                          key={dest.id}
                          className="flex items-center justify-between bg-white rounded-lg p-3"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-green-600" />
                            <div>
                              <p className="font-semibold text-gray-900">{dest.name}</p>
                              <p className="text-xs text-gray-600">{dest.location}</p>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleRemoveDestination(dest.id)}
                            size="sm"
                            variant="ghost"
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-100 rounded-lg p-3 border border-green-300">
                      <p className="text-sm text-green-900">
                        <strong>Estimated Duration:</strong> {getTotalDays()} days total
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 2: TRAVEL DETAILS */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  Travel Details
                </h2>
                <p className="text-gray-600 mb-6">
                  Provide information about your travel dates and group
                </p>

                {/* Dates */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Arrival Date
                    </label>
                    <Input
                      type="date"
                      value={travelDetails.arrivalDate}
                      onChange={(e) =>
                        setTravelDetails({ ...travelDetails, arrivalDate: e.target.value })
                      }
                      className="h-12 border-2 border-gray-300 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Departure Date
                    </label>
                    <Input
                      type="date"
                      value={travelDetails.departureDate}
                      onChange={(e) =>
                        setTravelDetails({ ...travelDetails, departureDate: e.target.value })
                      }
                      className="h-12 border-2 border-gray-300 rounded-xl"
                    />
                  </div>
                </div>

                {/* Group Size & Composition */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Group Size & Composition
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Adults (18-59)
                      </label>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() =>
                            setTravelDetails({
                              ...travelDetails,
                              groupComposition: {
                                ...travelDetails.groupComposition,
                                adults: Math.max(1, travelDetails.groupComposition.adults - 1),
                              },
                            })
                          }
                          size="sm"
                          className="bg-white border-2 border-blue-300 text-blue-700 hover:bg-blue-50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-2xl font-bold text-gray-900 w-12 text-center">
                          {travelDetails.groupComposition.adults}
                        </span>
                        <Button
                          onClick={() =>
                            setTravelDetails({
                              ...travelDetails,
                              groupComposition: {
                                ...travelDetails.groupComposition,
                                adults: travelDetails.groupComposition.adults + 1,
                              },
                            })
                          }
                          size="sm"
                          className="bg-white border-2 border-blue-300 text-blue-700 hover:bg-blue-50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Seniors (60+)
                      </label>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() =>
                            setTravelDetails({
                              ...travelDetails,
                              groupComposition: {
                                ...travelDetails.groupComposition,
                                seniors: Math.max(0, travelDetails.groupComposition.seniors - 1),
                              },
                            })
                          }
                          size="sm"
                          className="bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-2xl font-bold text-gray-900 w-12 text-center">
                          {travelDetails.groupComposition.seniors}
                        </span>
                        <Button
                          onClick={() =>
                            setTravelDetails({
                              ...travelDetails,
                              groupComposition: {
                                ...travelDetails.groupComposition,
                                seniors: travelDetails.groupComposition.seniors + 1,
                              },
                            })
                          }
                          size="sm"
                          className="bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Children (<18)
                      </label>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() =>
                            setTravelDetails({
                              ...travelDetails,
                              groupComposition: {
                                ...travelDetails.groupComposition,
                                children: Math.max(0, travelDetails.groupComposition.children - 1),
                              },
                            })
                          }
                          size="sm"
                          className="bg-white border-2 border-green-300 text-green-700 hover:bg-green-50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-2xl font-bold text-gray-900 w-12 text-center">
                          {travelDetails.groupComposition.children}
                        </span>
                        <Button
                          onClick={() =>
                            setTravelDetails({
                              ...travelDetails,
                              groupComposition: {
                                ...travelDetails.groupComposition,
                                children: travelDetails.groupComposition.children + 1,
                              },
                            })
                          }
                          size="sm"
                          className="bg-white border-2 border-green-300 text-green-700 hover:bg-green-50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-3 mt-4 border border-gray-300">
                    <p className="text-sm text-gray-700">
                      <strong>Total Group Size:</strong>{' '}
                      {travelDetails.groupComposition.adults +
                        travelDetails.groupComposition.seniors +
                        travelDetails.groupComposition.children}{' '}
                      people
                    </p>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    Special Requests
                  </h3>

                  <div className="space-y-4">
                    <label className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50">
                      <Switch
                        checked={travelDetails.specialRequests.seniorCare}
                        onCheckedChange={(checked) =>
                          setTravelDetails({
                            ...travelDetails,
                            specialRequests: {
                              ...travelDetails.specialRequests,
                              seniorCare: checked,
                            },
                          })
                        }
                      />
                      <div className="flex items-center gap-2 flex-1">
                        <Accessibility className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Senior Care Needed</p>
                          <p className="text-xs text-gray-600">
                            Wheelchair assistance, priority seating, slower pace
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50">
                      <Switch
                        checked={travelDetails.specialRequests.medicalAssistance}
                        onCheckedChange={(checked) =>
                          setTravelDetails({
                            ...travelDetails,
                            specialRequests: {
                              ...travelDetails.specialRequests,
                              medicalAssistance: checked,
                            },
                          })
                        }
                      />
                      <div className="flex items-center gap-2 flex-1">
                        <Stethoscope className="h-5 w-5 text-red-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Medical Assistance</p>
                          <p className="text-xs text-gray-600">
                            On-call medical support, first aid, emergency contacts
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50">
                      <Switch
                        checked={travelDetails.specialRequests.dietaryRestrictions}
                        onCheckedChange={(checked) =>
                          setTravelDetails({
                            ...travelDetails,
                            specialRequests: {
                              ...travelDetails.specialRequests,
                              dietaryRestrictions: checked,
                            },
                          })
                        }
                      />
                      <div className="flex items-center gap-2 flex-1">
                        <Utensils className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Dietary Restrictions</p>
                          <p className="text-xs text-gray-600">
                            Vegan, gluten-free, allergies, or specific food requirements
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50">
                      <Switch
                        checked={travelDetails.specialRequests.ritualGuidance}
                        onCheckedChange={(checked) =>
                          setTravelDetails({
                            ...travelDetails,
                            specialRequests: {
                              ...travelDetails.specialRequests,
                              ritualGuidance: checked,
                            },
                          })
                        }
                      />
                      <div className="flex items-center gap-2 flex-1">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Ritual Guidance Needed</p>
                          <p className="text-xs text-gray-600">
                            Expert guide to explain rituals, dress codes, protocols
                          </p>
                        </div>
                      </div>
                    </label>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Other Special Requests
                      </label>
                      <Input
                        type="text"
                        placeholder="Please specify any other requirements..."
                        value={travelDetails.specialRequests.other}
                        onChange={(e) =>
                          setTravelDetails({
                            ...travelDetails,
                            specialRequests: {
                              ...travelDetails.specialRequests,
                              other: e.target.value,
                            },
                          })
                        }
                        className="h-12 border-2 border-gray-300 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: SPIRITUAL PREFERENCES */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                  Spiritual Preferences
                </h2>
                <p className="text-gray-600 mb-6">
                  Customize your spiritual journey and ritual participation
                </p>

                {/* Primary Rituals */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Primary Rituals to Participate In
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {availableRituals.map((ritual) => {
                      const isSelected = spiritualPreferences.primaryRituals.includes(ritual.id);
                      return (
                        <label
                          key={ritual.id}
                          className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-300 hover:border-blue-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSpiritualPreferences({
                                  ...spiritualPreferences,
                                  primaryRituals: [...spiritualPreferences.primaryRituals, ritual.id],
                                });
                              } else {
                                setSpiritualPreferences({
                                  ...spiritualPreferences,
                                  primaryRituals: spiritualPreferences.primaryRituals.filter(
                                    (id) => id !== ritual.id
                                  ),
                                });
                              }
                            }}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{ritual.name}</p>
                            <p className="text-xs text-gray-600">Duration: {ritual.duration}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Sacred Text Focus */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Sacred Text Focus Areas</h3>
                  <div className="space-y-3">
                    {availableSacredTexts.map((text) => {
                      const isSelected = spiritualPreferences.sacredTextFocus.includes(text.id);
                      return (
                        <label
                          key={text.id}
                          className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-gray-300 hover:border-amber-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSpiritualPreferences({
                                  ...spiritualPreferences,
                                  sacredTextFocus: [...spiritualPreferences.sacredTextFocus, text.id],
                                });
                              } else {
                                setSpiritualPreferences({
                                  ...spiritualPreferences,
                                  sacredTextFocus: spiritualPreferences.sacredTextFocus.filter(
                                    (id) => id !== text.id
                                  ),
                                });
                              }
                            }}
                            className="w-5 h-5 text-amber-600 rounded focus:ring-2 focus:ring-amber-500"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{text.name}</p>
                            <p className="text-xs text-gray-600">Focus: {text.focus}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Festival Participation */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Festival Participation Preferences</h3>
                  <div className="space-y-3">
                    {upcomingFestivals.map((festival) => {
                      const isSelected = spiritualPreferences.festivalParticipation.includes(
                        festival.id
                      );
                      return (
                        <label
                          key={festival.id}
                          className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-300 hover:border-purple-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSpiritualPreferences({
                                  ...spiritualPreferences,
                                  festivalParticipation: [
                                    ...spiritualPreferences.festivalParticipation,
                                    festival.id,
                                  ],
                                });
                              } else {
                                setSpiritualPreferences({
                                  ...spiritualPreferences,
                                  festivalParticipation:
                                    spiritualPreferences.festivalParticipation.filter(
                                      (id) => id !== festival.id
                                    ),
                                });
                              }
                            }}
                            className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{festival.name}</p>
                            <p className="text-xs text-gray-600">{festival.dates}</p>
                            <p className="text-xs text-purple-700 mt-1">{festival.participation}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Prayer Schedule */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4">Prayer/Meditation Schedule</h3>
                  <div className="space-y-3">
                    {[
                      { value: 'flexible', label: 'Flexible - As per convenience', icon: Clock },
                      { value: 'morning', label: 'Morning prayers only (5-8 AM)', icon: Clock },
                      { value: 'evening', label: 'Evening prayers only (6-8 PM)', icon: Clock },
                      {
                        value: 'multiple',
                        label: 'Multiple times daily (Morning & Evening)',
                        icon: Clock,
                      },
                    ].map((option) => {
                      const Icon = option.icon;
                      return (
                        <label
                          key={option.value}
                          className={`flex items-center gap-3 p-4 bg-white border-2 rounded-xl cursor-pointer transition-all ${
                            spiritualPreferences.prayerSchedule === option.value
                              ? 'border-blue-500 shadow-md'
                              : 'border-gray-300 hover:border-blue-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="prayerSchedule"
                            value={option.value}
                            checked={spiritualPreferences.prayerSchedule === option.value}
                            onChange={(e) =>
                              setSpiritualPreferences({
                                ...spiritualPreferences,
                                prayerSchedule: e.target.value as typeof spiritualPreferences.prayerSchedule,
                              })
                            }
                            className="w-5 h-5 text-blue-600"
                          />
                          <Icon className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold text-gray-900">{option.label}</span>
                        </label>
                      );
                    })}
                  </div>

                  <label className="flex items-center gap-3 p-4 bg-white border-2 border-gray-300 rounded-xl cursor-pointer mt-4 hover:border-blue-300">
                    <Switch
                      checked={spiritualPreferences.meditationInterest}
                      onCheckedChange={(checked) =>
                        setSpiritualPreferences({
                          ...spiritualPreferences,
                          meditationInterest: checked,
                        })
                      }
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Interested in Guided Meditation Sessions
                      </p>
                      <p className="text-xs text-gray-600">
                        Include meditation and mindfulness practices
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: PACKAGE SELECTION */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Package className="h-6 w-6 text-green-600" />
                  Package Selection
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose an existing package or customize your own
                </p>

                {/* Package Type Selection */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <label
                    className={`p-6 border-4 rounded-2xl cursor-pointer transition-all ${
                      packageSelection.type === 'existing'
                        ? `border-${religion.color} bg-gradient-to-br from-blue-50 to-purple-50`
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="packageType"
                      value="existing"
                      checked={packageSelection.type === 'existing'}
                      onChange={(e) =>
                        setPackageSelection({ ...packageSelection, type: 'existing' })
                      }
                      className="sr-only"
                    />
                    <div className="flex items-start gap-3 mb-3">
                      <Package className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          Use Existing Package
                        </h3>
                        <p className="text-sm text-gray-600">
                          Choose from our curated pilgrimage packages
                        </p>
                      </div>
                    </div>
                    {packageSelection.type === 'existing' && (
                      <Badge className="bg-blue-500 text-white">Selected</Badge>
                    )}
                  </label>

                  <label
                    className={`p-6 border-4 rounded-2xl cursor-pointer transition-all ${
                      packageSelection.type === 'custom'
                        ? `border-${religion.color} bg-gradient-to-br from-purple-50 to-pink-50`
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="packageType"
                      value="custom"
                      checked={packageSelection.type === 'custom'}
                      onChange={(e) =>
                        setPackageSelection({ ...packageSelection, type: 'custom' })
                      }
                      className="sr-only"
                    />
                    <div className="flex items-start gap-3 mb-3">
                      <Sliders className="h-6 w-6 text-purple-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          Customize Completely
                        </h3>
                        <p className="text-sm text-gray-600">
                          Build your own package with Grok AI assistance
                        </p>
                      </div>
                    </div>
                    {packageSelection.type === 'custom' && (
                      <Badge className="bg-purple-500 text-white">Selected</Badge>
                    )}
                  </label>
                </div>

                {/* Existing Packages */}
                {packageSelection.type === 'existing' && (
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 mb-4">Available Packages</h3>
                    {existingPackages.map((pkg) => {
                      const isSelected = packageSelection.selectedPackageId === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          className={`border-2 rounded-2xl p-6 transition-all ${
                            isSelected
                              ? 'border-green-500 bg-green-50 shadow-lg'
                              : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                                {pkg.popular && (
                                  <Badge className="bg-amber-100 text-amber-800 border border-amber-300">
                                    🔥 Popular
                                  </Badge>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-3 mb-3">
                                <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {pkg.duration}
                                </Badge>
                                <Badge className="bg-purple-100 text-purple-800 border border-purple-300">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {pkg.destinations} destinations
                                </Badge>
                                <Badge className="bg-green-100 text-green-800 border border-green-300">
                                  <DollarSign className="h-3 w-3 mr-1" />₹
                                  {pkg.price.toLocaleString()}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-2">
                              Package Includes:
                            </p>
                            <ul className="space-y-2">
                              {pkg.includes.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            onClick={() =>
                              setPackageSelection({
                                ...packageSelection,
                                selectedPackageId: isSelected ? undefined : pkg.id,
                              })
                            }
                            className={`w-full ${
                              isSelected
                                ? 'bg-green-600 hover:bg-green-700'
                                : `bg-gradient-to-r ${religion.gradient}`
                            } text-white`}
                          >
                            {isSelected ? (
                              <>
                                <CheckCircle2 className="mr-2 h-5 w-5" />
                                Selected
                              </>
                            ) : (
                              'Select This Package'
                            )}
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Custom Budget Slider */}
                {packageSelection.type === 'custom' && (
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-300">
                    <h3 className="font-bold text-gray-900 mb-6">Set Your Budget Range</h3>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Minimum Budget</p>
                          <p className="text-2xl font-bold text-gray-900">
                            ₹{packageSelection.budgetRange.min.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Maximum Budget</p>
                          <p className="text-2xl font-bold text-gray-900">
                            ₹{packageSelection.budgetRange.max.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <input
                        type="range"
                        min="10000"
                        max="100000"
                        step="5000"
                        value={packageSelection.budgetRange.max}
                        onChange={(e) =>
                          setPackageSelection({
                            ...packageSelection,
                            budgetRange: {
                              ...packageSelection.budgetRange,
                              max: parseInt(e.target.value),
                            },
                          })
                        }
                        className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-6 w-6 text-purple-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">
                            Grok AI Will Customize For You
                          </p>
                          <p className="text-sm text-gray-700">
                            Based on your budget, destinations, and preferences, Grok AI will create
                            a personalized pilgrimage plan with optimal accommodations, transport,
                            and experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 5: REVIEW & SUBMIT */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-indigo-600" />
                  Review Your Pilgrimage Plan
                </h2>
                <p className="text-gray-600 mb-6">
                  Please review all details before submitting to Grok AI
                </p>

                {/* Destinations Summary */}
                <div className="mb-6 bg-blue-50 rounded-2xl p-5 border-2 border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Selected Destinations ({selectedDestinations.length})
                  </h3>
                  <div className="space-y-2">
                    {selectedDestinations.map((dest) => (
                      <div key={dest.id} className="bg-white rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{dest.name}</p>
                          <p className="text-xs text-gray-600">{dest.location}</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                          {dest.estimatedDays}d
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-blue-900 mt-3 font-semibold">
                    Total Duration: {getTotalDays()} days
                  </p>
                </div>

                {/* Travel Details Summary */}
                <div className="mb-6 bg-purple-50 rounded-2xl p-5 border-2 border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    Travel Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Arrival Date</p>
                      <p className="font-semibold text-gray-900">{travelDetails.arrivalDate || 'Not set'}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Departure Date</p>
                      <p className="font-semibold text-gray-900">{travelDetails.departureDate || 'Not set'}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Group Composition</p>
                    <p className="font-semibold text-gray-900">
                      {travelDetails.groupComposition.adults} Adults, {travelDetails.groupComposition.seniors} Seniors,{' '}
                      {travelDetails.groupComposition.children} Children
                    </p>
                  </div>
                  {Object.values(travelDetails.specialRequests).some((val) => val === true || (typeof val === 'string' && val !== '')) && (
                    <div className="bg-amber-50 rounded-lg p-3 mt-3 border border-amber-200">
                      <p className="text-xs text-amber-700 font-semibold mb-2">Special Requests:</p>
                      <ul className="space-y-1">
                        {travelDetails.specialRequests.seniorCare && (
                          <li className="text-xs text-gray-700">✓ Senior Care</li>
                        )}
                        {travelDetails.specialRequests.medicalAssistance && (
                          <li className="text-xs text-gray-700">✓ Medical Assistance</li>
                        )}
                        {travelDetails.specialRequests.dietaryRestrictions && (
                          <li className="text-xs text-gray-700">✓ Dietary Restrictions</li>
                        )}
                        {travelDetails.specialRequests.ritualGuidance && (
                          <li className="text-xs text-gray-700">✓ Ritual Guidance</li>
                        )}
                        {travelDetails.specialRequests.other && (
                          <li className="text-xs text-gray-700">✓ {travelDetails.specialRequests.other}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Spiritual Preferences Summary */}
                <div className="mb-6 bg-amber-50 rounded-2xl p-5 border-2 border-amber-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-amber-600" />
                    Spiritual Preferences
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Selected Rituals</p>
                      <p className="font-semibold text-gray-900">
                        {spiritualPreferences.primaryRituals.length} ritual
                        {spiritualPreferences.primaryRituals.length !== 1 ? 's' : ''} selected
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Sacred Text Focus</p>
                      <p className="font-semibold text-gray-900">
                        {spiritualPreferences.sacredTextFocus.length} text
                        {spiritualPreferences.sacredTextFocus.length !== 1 ? 's' : ''} selected
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Prayer Schedule</p>
                      <p className="font-semibold text-gray-900 capitalize">
                        {spiritualPreferences.prayerSchedule.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Package Summary */}
                <div className="mb-6 bg-green-50 rounded-2xl p-5 border-2 border-green-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5 text-green-600" />
                    Package Selection
                  </h3>
                  {packageSelection.type === 'existing' ? (
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Selected Package</p>
                      <p className="font-semibold text-gray-900">
                        {packageSelection.selectedPackageId
                          ? existingPackages.find((p) => p.id === packageSelection.selectedPackageId)?.name
                          : 'No package selected'}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Custom Package Budget</p>
                      <p className="font-semibold text-gray-900">
                        ₹{packageSelection.budgetRange.min.toLocaleString()} - ₹
                        {packageSelection.budgetRange.max.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>

                {/* Grok AI Promise */}
                <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <Sparkles className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Ready to Submit to Grok AI</h3>
                        <p className="text-white/90">
                          Grok AI will analyze your preferences and create a personalized pilgrimage
                          itinerary with:
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                        <span>Optimized route covering all selected destinations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                        <span>Ritual participation schedule aligned with your preferences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                        <span>Accommodation and transport recommendations within budget</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                        <span>Festival timing coordination (if applicable)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                        <span>Special care arrangements for seniors and medical needs</span>
                      </li>
                    </ul>

                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-white text-purple-600 hover:bg-white/90 h-16 text-lg font-bold shadow-2xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-3" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-6 w-6" />
                          Submit to Grok AI for Planning
                          <ArrowRight className="ml-3 h-6 w-6" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>

          {currentStep < 5 && (
            <Button
              onClick={handleNext}
              className={`bg-gradient-to-r ${religion.gradient} text-white shadow-lg`}
            >
              Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
