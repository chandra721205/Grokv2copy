import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Heart, 
  Shield, 
  Users, 
  MapPin, 
  Star, 
  ChevronRight, 
  Clock, 
  Stethoscope,
  Hospital,
  Bell,
  Zap,
  Check,
  Mountain,
  Leaf,
  Sparkles,
  Filter,
  ChevronDown,
  Plus,
  CreditCard,
  CheckCircle,
  Phone,
  AlertCircle,
  Activity,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { PersonalizedDealsAlert } from '@/app/components/shared/PersonalizedDealsAlert';
import { 
  HealthSafetyScreen, 
  CaretakerDetailScreen, 
  TransportPlanner 
} from '@/app/components/seniors/SeniorTourismFlows';

interface SeniorWellnessHubProps {
  onBack: () => void;
}

type MainView = 'landing' | 'devotional-flow' | 'nature-flow' | 'wellness-flow';
type DevotionalStep = 'list' | 'details' | 'safety' | 'caretaker' | 'transport' | 'booking';
type NatureStep = 'selection' | 'duration' | 'pace' | 'safety' | 'caretaker' | 'transport' | 'booking';
type WellnessStep = 'list' | 'details' | 'safety' | 'caretaker' | 'transport' | 'booking';

export function SeniorWellnessHub({ onBack }: SeniorWellnessHubProps) {
  const [mainView, setMainView] = useState<MainView>('landing');
  const [devotionalStep, setDevotionalStep] = useState<DevotionalStep>('list');
  const [natureStep, setNatureStep] = useState<NatureStep>('selection');
  const [wellnessStep, setWellnessStep] = useState<WellnessStep>('list');

  // Devotional Flow
  if (mainView === 'devotional-flow') {
    if (devotionalStep === 'list') {
      return <DevotionalListScreen onBack={() => setMainView('landing')} onContinue={() => setDevotionalStep('details')} />;
    }
    if (devotionalStep === 'details') {
      return <DevotionalDetailsScreen onBack={() => setDevotionalStep('list')} onContinue={() => setDevotionalStep('safety')} />;
    }
    if (devotionalStep === 'safety') {
      return <HealthSafetyScreen onBack={() => setDevotionalStep('details')} onContinue={() => setDevotionalStep('caretaker')} subCategory="devotional" />;
    }
    if (devotionalStep === 'caretaker') {
      return <CaretakerDetailScreen onBack={() => setDevotionalStep('safety')} onContinue={() => setDevotionalStep('transport')} subCategory="devotional" />;
    }
    if (devotionalStep === 'transport') {
      return <TransportPlanner onBack={() => setDevotionalStep('caretaker')} onContinue={() => setDevotionalStep('booking')} subCategory="devotional" />;
    }
    if (devotionalStep === 'booking') {
      return <BookingFlow onBack={() => setDevotionalStep('transport')} onComplete={() => { setMainView('landing'); setDevotionalStep('list'); }} subCategory="devotional" />;
    }
  }

  // Nature Flow
  if (mainView === 'nature-flow') {
    if (natureStep === 'selection') {
      return <NatureTypeSelection onBack={() => setMainView('landing')} onContinue={() => setNatureStep('duration')} />;
    }
    if (natureStep === 'duration') {
      return <NatureDurationSelector onBack={() => setNatureStep('selection')} onContinue={() => setNatureStep('pace')} />;
    }
    if (natureStep === 'pace') {
      return <NaturePaceConfirmation onBack={() => setNatureStep('duration')} onContinue={() => setNatureStep('safety')} />;
    }
    if (natureStep === 'safety') {
      return <HealthSafetyScreen onBack={() => setNatureStep('pace')} onContinue={() => setNatureStep('caretaker')} subCategory="nature" />;
    }
    if (natureStep === 'caretaker') {
      return <CaretakerDetailScreen onBack={() => setNatureStep('safety')} onContinue={() => setNatureStep('transport')} subCategory="nature" />;
    }
    if (natureStep === 'transport') {
      return <TransportPlanner onBack={() => setNatureStep('caretaker')} onContinue={() => setNatureStep('booking')} subCategory="nature" />;
    }
    if (natureStep === 'booking') {
      return <BookingFlow onBack={() => setNatureStep('transport')} onComplete={() => { setMainView('landing'); setNatureStep('selection'); }} subCategory="nature" />;
    }
  }

  // Wellness Flow
  if (mainView === 'wellness-flow') {
    if (wellnessStep === 'list') {
      return <WellnessRetreatsList onBack={() => setMainView('landing')} onContinue={() => setWellnessStep('details')} />;
    }
    if (wellnessStep === 'details') {
      return <WellnessRetreatDetails onBack={() => setWellnessStep('list')} onContinue={() => setWellnessStep('safety')} />;
    }
    if (wellnessStep === 'safety') {
      return <HealthSafetyScreen onBack={() => setWellnessStep('details')} onContinue={() => setWellnessStep('caretaker')} subCategory="wellness" />;
    }
    if (wellnessStep === 'caretaker') {
      return <CaretakerDetailScreen onBack={() => setWellnessStep('safety')} onContinue={() => setWellnessStep('transport')} subCategory="wellness" />;
    }
    if (wellnessStep === 'transport') {
      return <TransportPlanner onBack={() => setWellnessStep('caretaker')} onContinue={() => setWellnessStep('booking')} subCategory="wellness" />;
    }
    if (wellnessStep === 'booking') {
      return <BookingFlow onBack={() => setWellnessStep('transport')} onComplete={() => { setMainView('landing'); setWellnessStep('list'); }} subCategory="wellness" />;
    }
  }

  // Landing Screen
  return <SeniorTourismLanding onBack={onBack} onSelectCategory={(cat) => setMainView(cat)} />;
}

// ========================================
// LANDING SCREEN: Choose Your Journey
// ========================================

interface SeniorTourismLandingProps {
  onBack: () => void;
  onSelectCategory: (category: MainView) => void;
}

function SeniorTourismLanding({ onBack, onSelectCategory }: SeniorTourismLandingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [caretakerType, setCaretakerType] = useState<'group' | 'personal' | null>(null);

  const subCategories = [
    {
      id: 'devotional-flow' as MainView,
      icon: Mountain,
      emoji: '🙏',
      title: 'Senior Devotional Yatras',
      tagline: 'Spirituality without the struggle.',
      features: [
        '"Elevator Darshan" (Avoid stairs)',
        'Wheelchair-friendly temple access',
        'Pacing: Slow-paced (Max 2-3 temples/day)',
      ],
      specs: 'Duration: 5–15 Days | Doctor-on-Tour included',
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      id: 'nature-flow' as MainView,
      icon: Leaf,
      emoji: '🌿',
      title: 'Senior Relaxation & Nature',
      tagline: 'Gentle breaks in flat, calm environments.',
      features: [
        'Flat terrain walks (No climbing)',
        'Scenic drives (View from vehicle)',
        'Oxygen-rich destinations (Ooty, Kerala)',
      ],
      specs: 'Duration: 3–10 Days',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 'wellness-flow' as MainView,
      icon: Sparkles,
      emoji: '💆',
      title: 'Wellness Retreats for Seniors',
      tagline: 'Health repair through Ayurveda & Yoga.',
      features: [
        'Physiotherapy & Gentle Yoga sessions',
        'Customized diet plans (Low sugar/salt)',
        'Ayurvedic treatments',
      ],
      specs: 'Duration: 7–21 Days',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-4xl font-bold">Senior Tourism</h1>
            <p className="text-white/90 text-base">Choose Your Safe Journey</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <Input
            type="text"
            placeholder="Search destinations, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-14 h-14 rounded-full bg-white border-0 shadow-lg text-base"
          />
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        {/* Medical Safety Bar (Sticky) */}
        <Card className="bg-white rounded-3xl p-5 shadow-2xl mb-6 sticky top-4 z-10 border-2 border-green-500">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-bold text-gray-900">Medical Safety & Family Peace-of-Mind</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">MBBS Doctor</p>
                <p className="text-xs text-gray-600">Available on tour</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">SOS Alert</p>
                <p className="text-xs text-gray-600">Instant family notify</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Hospital className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Hospital Proximity</p>
                <p className="text-xs text-gray-600">Within 5-10km</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Medicine Reminder</p>
                <p className="text-xs text-gray-600">Caretaker logs</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Grok AI Insight Box */}
        <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-5 shadow-xl mb-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">Grok AI Travel Insights</h3>
              <p className="text-white/95 text-base leading-relaxed">
                <strong>Best time:</strong> Oct-Mar (Pleasant weather). Avoid trips &gt;10 days to prevent fatigue.
              </p>
            </div>
          </div>
        </Card>

        {/* Senior-First Promise Section */}
        <Card className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-6 shadow-lg mb-6 border-2 border-orange-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Senior-First Promise</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Clock, text: 'Zero Rush', sub: 'Slow pace, rest days' },
              { icon: Stethoscope, text: 'Medical Support', sub: 'Doctor-on-tour option' },
              { icon: Shield, text: 'Accessibility', sub: 'Wheelchair, ramps, elevators' },
              { icon: Heart, text: 'Comfort First', sub: 'AC buses, quality hotels' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900">{item.text}</p>
                  <p className="text-xs text-gray-600">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Personalized Deals Alert */}
        <div className="mb-6">
          <PersonalizedDealsAlert
            category="senior-wellness"
            showAdminIndicators={false}
            onSavePreferences={(data) => {
              console.log('Senior wellness deal preferences saved:', data);
            }}
            content={{
              heading: '[Admin: Get Senior Care Deal Alerts]',
              description: '[Admin: Set your budget for senior wellness packages]',
              budgetPlaceholder: '[Admin: e.g., ₹45,000 for 6 nights]',
              notificationText: '[Admin: Notify me of senior care travel deals]',
              buttonLabel: '[Admin: Save Senior Care Preferences]'
            }}
          />
        </div>

        {/* 3 Sub-Categories */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-2">Choose Your Safe Journey</h2>
          <p className="text-gray-600 text-base mb-6">
            Select a journey type designed specifically for senior travelers
          </p>

          <div className="grid grid-cols-1 gap-5">
            {subCategories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectCategory(category.id)}
                className="bg-white border-2 border-gray-200 rounded-3xl p-6 hover:border-indigo-300 hover:shadow-xl transition-all text-left"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${category.gradient} flex-shrink-0`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">{category.title}</h3>
                    <p className="text-base text-indigo-600 font-semibold mb-3 italic">"{category.tagline}"</p>
                    
                    <div className="space-y-2 mb-3">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-3 p-3 bg-gray-100 rounded-xl">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-700">{category.specs}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 mt-2" />
                </div>
              </motion.button>
            ))}
          </div>
        </Card>

        {/* Caretaker Selection */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold">Caretaker Selection</h2>
          </div>
          <p className="text-gray-600 text-base mb-5">
            Choose the level of personal care support during your journey
          </p>

          <div className="grid grid-cols-1 gap-4">
            <motion.button
              onClick={() => setCaretakerType('group')}
              className={`p-5 rounded-2xl border-2 transition-all text-left ${
                caretakerType === 'group'
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  caretakerType === 'group' ? 'bg-indigo-600' : 'bg-gray-200'
                }`}>
                  <Users className={`w-7 h-7 ${caretakerType === 'group' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Group Caretaker</h3>
                    <span className="text-2xl font-bold text-green-600">₹400/day</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    1 caretaker per 6 seniors - Shared assistance for basic needs
                  </p>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-600">Cost-effective group care</span>
                  </div>
                </div>
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                  caretakerType === 'group' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                }`}>
                  {caretakerType === 'group' && <Check className="w-5 h-5 text-white" />}
                </div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setCaretakerType('personal')}
              className={`p-5 rounded-2xl border-2 transition-all text-left ${
                caretakerType === 'personal'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  caretakerType === 'personal' ? 'bg-purple-600' : 'bg-gray-200'
                }`}>
                  <Users className={`w-7 h-7 ${caretakerType === 'personal' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Personal Caretaker</h3>
                    <span className="text-2xl font-bold text-purple-600">₹1,500/day</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    1-on-1 dedicated support - Full-time care and companionship
                  </p>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-gray-600">Premium personalized care</span>
                  </div>
                </div>
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                  caretakerType === 'personal' ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
                }`}>
                  {caretakerType === 'personal' && <Check className="w-5 h-5 text-white" />}
                </div>
              </div>
            </motion.button>
          </div>

          {caretakerType && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-5 p-4 bg-green-50 rounded-2xl border-2 border-green-200"
            >
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                <p className="text-sm font-semibold text-green-900">
                  {caretakerType === 'group' ? 'Group Caretaker' : 'Personal Caretaker'} selected - 
                  ₹{caretakerType === 'group' ? '400' : '1,500'}/day will be added to your booking
                </p>
              </div>
            </motion.div>
          )}
        </Card>

        {/* Why Choose Section */}
        <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-5">Why Choose Senior Tourism?</h2>
          <div className="space-y-4">
            {[
              { icon: Shield, text: 'Comprehensive travel insurance included' },
              { icon: Heart, text: 'Medical professionals on every tour' },
              { icon: Clock, text: 'Flexible, slow-paced itineraries' },
              { icon: Phone, text: '24/7 emergency helpline' },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/95 text-base">{feature.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ========================================
// SUB-CATEGORY FLOWS - TO BE IMPLEMENTED NEXT
// Devotional, Nature, Wellness screens
// ========================================

// DEVOTIONAL FLOW SCREENS
interface DevotionalListScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

function DevotionalListScreen({ onBack, onContinue }: DevotionalListScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    'Elevator access',
    'Wheelchair-friendly',
    'Short walking distance',
    'Darshan seating',
    'Battery car',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Mountain className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">🙏 Senior Devotional Yatras</h1>
            <p className="text-white/90 text-base">Find your spiritual journey</p>
          </div>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <Input
            type="text"
            placeholder="Search temple / district / devotion type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-14 h-14 rounded-full bg-white border-0 shadow-lg text-base"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                if (selectedFilters.includes(filter)) {
                  setSelectedFilters(selectedFilters.filter(f => f !== filter));
                } else {
                  setSelectedFilters([...selectedFilters, filter]);
                }
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedFilters.includes(filter)
                  ? 'bg-white text-orange-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-5 shadow-lg mb-6 border-2 border-orange-300">
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-base text-orange-900 mb-1">Admin-Managed Destinations</p>
              <p className="text-sm text-orange-800">
                All yatra destinations shown below are curated by administrators. These are examples only.
              </p>
            </div>
          </div>
        </Card>

        {/* Example destination cards (admin inventory) */}
        <div className="space-y-4">
          {[
            { name: '[Admin: Golden Temple Yatra]', location: 'Amritsar, Punjab', days: '7 Days', features: ['Elevator access', 'Wheelchair available', 'Slow pace'] },
            { name: '[Admin: Rishikesh Spiritual Tour]', location: 'Uttarakhand', days: '5 Days', features: ['River access', 'Gentle walks', 'Meditation halls'] },
            { name: '[Admin: Tirupati Darshan Package]', location: 'Andhra Pradesh', days: '4 Days', features: ['VIP darshan', 'Battery car', 'AC accommodation'] },
          ].map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{dest.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {dest.location}
                  </p>
                  <p className="text-sm font-semibold text-orange-600 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {dest.days}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dest.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          onClick={onContinue}
          className="w-full h-14 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:opacity-90 text-lg font-semibold mt-6"
        >
          View Selected Yatra Details <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function DevotionalDetailsScreen({ onBack, onContinue }: DevotionalListScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-3xl font-bold mb-2">[Admin: Golden Temple Yatra]</h1>
        <p className="text-white/90 text-base">7 Days | Amritsar, Punjab</p>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Senior-Friendly Features</h2>
          <div className="space-y-3">
            {[
              'Elevator access to main darshan hall',
              'Wheelchair-friendly pathways throughout',
              'Maximum 2-3 temples per day (slow pace)',
              'Dedicated seating for seniors during ceremonies',
              'Battery car service for long distances',
              'Early morning VIP darshan (avoid crowds)',
              'Special Satvik meals (low salt/sugar)',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
                <Check className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <span className="text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-5 shadow-lg mb-6 border-2 border-orange-300">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-base text-orange-900 mb-1">Safety Reminders</p>
              <p className="text-sm text-orange-800">
                • Doctor accompanies all tours<br />
                • Emergency medical kit available<br />
                • Accommodation near hospitals
              </p>
            </div>
          </div>
        </Card>

        <Button
          onClick={onContinue}
          className="w-full h-14 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:opacity-90 text-lg font-semibold"
        >
          Continue to Health & Safety <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// NATURE FLOW SCREENS
interface NatureScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

function NatureTypeSelection({ onBack, onContinue }: NatureScreenProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const types = [
    { id: 'garden', name: 'Garden Walks', icon: Leaf, desc: 'Peaceful botanical gardens' },
    { id: 'lake', name: 'Lake-side Stays', icon: MapPin, desc: 'Calm waterfront locations' },
    { id: 'scenic', name: 'Scenic Drives', icon: Mountain, desc: 'View from vehicle' },
    { id: 'trails', name: 'Short Nature Trails', icon: Mountain, desc: 'Flat, easy paths' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Leaf className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">🌿 Senior Relaxation & Nature</h1>
            <p className="text-white/90 text-base">Choose your nature experience</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Select Relaxation Type</h2>

          <div className="grid grid-cols-2 gap-4">
            {types.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                whileTap={{ scale: 0.95 }}
                className={`p-5 rounded-2xl border-2 transition-all ${
                  selectedType === type.id
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                  selectedType === type.id
                    ? 'bg-green-600'
                    : 'bg-gray-200'
                }`}>
                  <type.icon className={`w-7 h-7 ${selectedType === type.id ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className="font-bold text-base mb-1">{type.name}</h3>
                <p className="text-xs text-gray-600">{type.desc}</p>
              </motion.button>
            ))}
          </div>
        </Card>

        <Button
          onClick={onContinue}
          disabled={!selectedType}
          className="w-full h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 disabled:opacity-50 text-lg font-semibold"
        >
          Continue to Duration Selection <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function NatureDurationSelector({ onBack, onContinue }: NatureScreenProps) {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const durations = [
    { id: 'short', name: '3-5 Days', desc: 'Weekend getaway' },
    { id: 'medium', name: '6-10 Days', desc: 'Extended relaxation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-3xl font-bold mb-2">Select Duration</h1>
        <p className="text-white/90 text-base">Choose your stay length</p>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Trip Duration</h2>

          <div className="grid grid-cols-1 gap-4">
            {durations.map((dur) => (
              <motion.button
                key={dur.id}
                onClick={() => setSelectedDuration(dur.id)}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-2xl border-2 transition-all text-left ${
                  selectedDuration === dur.id
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{dur.name}</h3>
                    <p className="text-sm text-gray-600">{dur.desc}</p>
                  </div>
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                    selectedDuration === dur.id
                      ? 'border-green-600 bg-green-600'
                      : 'border-gray-300'
                  }`}>
                    {selectedDuration === dur.id && <Check className="w-5 h-5 text-white" />}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </Card>

        <Button
          onClick={onContinue}
          disabled={!selectedDuration}
          className="w-full h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 disabled:opacity-50 text-lg font-semibold"
        >
          Continue to Pace Confirmation <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function NaturePaceConfirmation({ onBack, onContinue }: NatureScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-3xl font-bold mb-2">Pace Confirmation</h1>
        <p className="text-white/90 text-base">Your journey will be slow & relaxed</p>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Your Journey Pace</h2>

          <div className="space-y-3 mb-6">
            {[
              'Slow pace with frequent rest stops',
              'Maximum 2-3 hours of activity per day',
              'Flexible schedule - no rush',
              'Rest days included',
              'Easy access to facilities',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Button
          onClick={onContinue}
          className="w-full h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 text-lg font-semibold"
        >
          Continue to Health & Safety <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// WELLNESS FLOW SCREENS
interface WellnessScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

function WellnessRetreatsList({ onBack, onContinue }: WellnessScreenProps) {
  const [selectedTab, setSelectedTab] = useState('ayurveda');

  const tabs = [
    { id: 'ayurveda', name: 'Ayurveda', icon: Sparkles },
    { id: 'yoga', name: 'Yoga & Meditation', icon: Heart },
    { id: 'physio', name: 'Physiotherapy', icon: Activity },
    { id: 'lifestyle', name: 'Lifestyle Programs', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">💆 Wellness Retreats for Seniors</h1>
            <p className="text-white/90 text-base">Health repair & rejuvenation</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap transition-all ${
                selectedTab === tab.id
                  ? 'bg-white shadow-lg text-purple-600'
                  : 'bg-white/50 text-gray-700 hover:bg-white/70'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-semibold">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Example retreat cards */}
        <div className="space-y-4 mb-6">
          {[
            { name: '[Admin: Kerala Ayurveda Retreat]', duration: '14 Days', features: ['Panchakarma', 'Diet plan', 'Doctor supervision'] },
            { name: '[Admin: Himalayan Wellness Center]', duration: '21 Days', features: ['Yoga sessions', 'Physiotherapy', 'Meditation'] },
            { name: '[Admin: Goa Beach Wellness]', duration: '7 Days', features: ['Gentle yoga', 'Spa therapies', 'Nutrition guidance'] },
          ].map((retreat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{retreat.name}</h3>
                  <p className="text-sm font-semibold text-purple-600 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {retreat.duration}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {retreat.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          onClick={onContinue}
          className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-lg font-semibold"
        >
          View Retreat Details <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function WellnessRetreatDetails({ onBack, onContinue }: WellnessScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-3xl font-bold mb-2">[Admin: Kerala Ayurveda Retreat]</h1>
        <p className="text-white/90 text-base">14 Days | Kerala, India</p>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Included Therapies</h2>
          <div className="space-y-3">
            {[
              'Daily Panchakarma therapies (detoxification)',
              'Abhyanga (oil massage) sessions',
              'Shirodhara (forehead oil treatment)',
              'Gentle yoga & pranayama',
              'Personalized diet plan (low sugar/salt)',
              'Doctor consultations (daily)',
              'Stress relief & meditation',
            ].map((therapy, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                <Check className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <span className="text-base text-gray-700">{therapy}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-5 shadow-lg mb-6 border-2 border-purple-300">
          <div className="flex items-start gap-3">
            <Stethoscope className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-base text-purple-900 mb-1">Doctor Supervision</p>
              <p className="text-sm text-purple-800">
                Ayurvedic doctor conducts initial assessment and monitors progress throughout the program.
              </p>
            </div>
          </div>
        </Card>

        <Button
          onClick={onContinue}
          className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-lg font-semibold"
        >
          Continue to Health & Safety <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// ========================================
// BOOKING FLOW (SHARED)
// ========================================

interface BookingFlowProps {
  onBack: () => void;
  onComplete: () => void;
  subCategory: 'devotional' | 'nature' | 'wellness';
}

function BookingFlow({ onBack, onComplete, subCategory }: BookingFlowProps) {
  const [bookingStep, setBookingStep] = useState<'summary' | 'safety' | 'price' | 'payment' | 'confirmed'>('summary');

  const categoryColors = {
    devotional: { from: 'from-orange-600', to: 'to-amber-600', bg: 'bg-orange-50' },
    nature: { from: 'from-green-600', to: 'to-emerald-600', bg: 'bg-green-50' },
    wellness: { from: 'from-purple-600', to: 'to-pink-600', bg: 'bg-purple-50' },
  };

  const colors = categoryColors[subCategory];

  // Trip Summary
  if (bookingStep === 'summary') {
    return (
      <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
        <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
          <button
            onClick={onBack}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <h1 className="text-white text-3xl font-bold mb-2">Trip Summary</h1>
          <p className="text-white/90 text-base">Review your booking details</p>
        </div>

        <div className="px-6 -mt-4 pb-8">
          <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
            <h2 className="text-2xl font-bold mb-5">Booking Details</h2>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Selected Package</p>
                <p className="font-bold text-lg">[Admin: Selected Destination]</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Dates</p>
                  <p className="font-semibold">[Admin: Jan 15-22, 2026]</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Travelers</p>
                  <p className="font-semibold">2 Seniors</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Selected Add-ons</p>
                <p className="font-semibold">• Group Caretaker (₹400/day)</p>
                <p className="font-semibold">• Doctor-on-Tour (₹8,000)</p>
                <p className="font-semibold">• Private Car Transport (₹6,500)</p>
              </div>
            </div>
          </Card>

          <Button
            onClick={() => setBookingStep('safety')}
            className={`w-full h-14 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} hover:opacity-90 text-lg font-semibold`}
          >
            Continue to Safety Details <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Safety Confirmation
  if (bookingStep === 'safety') {
    return (
      <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
        <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
          <button
            onClick={() => setBookingStep('summary')}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <h1 className="text-white text-3xl font-bold mb-2">Safety Confirmation</h1>
          <p className="text-white/90 text-base">Help us ensure your safety</p>
        </div>

        <div className="px-6 -mt-4 pb-8">
          <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
            <h2 className="text-2xl font-bold mb-5">Emergency Contact</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Name</label>
                <Input className="h-12 rounded-xl" placeholder="Family member name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Phone</label>
                <Input className="h-12 rounded-xl" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
            <h2 className="text-2xl font-bold mb-5">Health Notes (Optional)</h2>

            <textarea
              className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none h-32 text-base"
              placeholder="Any medical conditions, allergies, or special requirements..."
            />
          </Card>

          <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
            <h2 className="text-2xl font-bold mb-5">Accessibility Needs</h2>

            <div className="space-y-3">
              {['Wheelchair required', 'Low-walk itinerary', 'Special dietary needs'].map((need, i) => (
                <label key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-base">{need}</span>
                </label>
              ))}
            </div>
          </Card>

          <Button
            onClick={() => setBookingStep('price')}
            className={`w-full h-14 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} hover:opacity-90 text-lg font-semibold`}
          >
            Continue to Price Breakdown <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Price Breakdown
  if (bookingStep === 'price') {
    return (
      <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
        <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
          <button
            onClick={() => setBookingStep('safety')}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <h1 className="text-white text-3xl font-bold mb-2">Price Breakdown</h1>
          <p className="text-white/90 text-base">Complete pricing details</p>
        </div>

        <div className="px-6 -mt-4 pb-8">
          <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
            <h2 className="text-2xl font-bold mb-5">Cost Summary</h2>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-base font-semibold">Base Package</span>
                <span className="text-lg font-bold">₹25,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-base font-semibold">Transport (Private Car)</span>
                <span className="text-lg font-bold">₹6,500</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-base font-semibold">Group Caretaker (7 days)</span>
                <span className="text-lg font-bold">₹2,800</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <span className="text-base font-semibold">Doctor-on-Tour</span>
                <span className="text-lg font-bold">₹8,000</span>
              </div>

              <div className="h-px bg-gray-200 my-4" />

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border-2 border-green-300">
                <span className="text-lg font-bold text-gray-900">Total Amount</span>
                <span className="text-3xl font-bold text-green-600">₹42,300</span>
              </div>
            </div>
          </Card>

          <Button
            onClick={() => setBookingStep('payment')}
            className={`w-full h-14 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} hover:opacity-90 text-lg font-semibold`}
          >
            Proceed to Payment <CreditCard className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Payment
  if (bookingStep === 'payment') {
    return (
      <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
        <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
          <button
            onClick={() => setBookingStep('price')}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <h1 className="text-white text-3xl font-bold mb-2">Payment</h1>
          <p className="text-white/90 text-base">Secure payment gateway</p>
        </div>

        <div className="px-6 -mt-4 pb-8">
          <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
            <h2 className="text-2xl font-bold mb-5">Payment Method</h2>

            <div className="space-y-3">
              {['Credit/Debit Card', 'UPI', 'Net Banking', 'Wallet'].map((method, i) => (
                <button
                  key={i}
                  className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all text-left font-semibold"
                >
                  {method}
                </button>
              ))}
            </div>
          </Card>

          <Button
            onClick={() => setBookingStep('confirmed')}
            className={`w-full h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 text-lg font-semibold`}
          >
            Complete Payment - ₹42,300 <CheckCircle className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Booking Confirmed
  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
      <div className={`bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-white/90 text-base">Your senior tourism package is booked</p>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5 text-center">Booking ID</h2>
          <p className="text-4xl font-bold text-center text-indigo-600 mb-6">GY-SR-2026-1234</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-base">Confirmation email sent</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-base">Support team will contact you within 24h</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-base">Travel insurance activated</span>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white mb-6">
          <h3 className="text-xl font-bold mb-3">24/7 Support Available</h3>
          <p className="text-white/90 text-base mb-4">
            Need help? Our support team is available round the clock for your safety and comfort.
          </p>
          <Button className="w-full h-12 bg-white text-indigo-600 hover:bg-gray-100 rounded-full font-semibold">
            <Phone className="w-5 h-5 mr-2" /> Contact Support
          </Button>
        </Card>

        <Button
          onClick={onComplete}
          className="w-full h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-lg font-semibold"
        >
          Return to Senior Tourism Home
        </Button>
      </div>
    </div>
  );
}
