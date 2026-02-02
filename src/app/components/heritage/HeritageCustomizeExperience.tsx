import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronRight,
  ChevronLeft,
  Languages,
  User,
  Stethoscope,
  Accessibility,
  Camera,
  Utensils,
  Hotel,
  Car,
  ShoppingBag,
  Music,
  Book,
  GraduationCap,
  UserCheck,
  Shield,
  Tag,
  Info,
  Plus,
  Check,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// HERITAGE CUSTOMIZE EXPERIENCE SCREEN
// Add services, guides, concessions
// Color Scheme: Cream (#FFF8E1), Gold/Beige, Dark Grey
// ========================================

interface ServiceOption {
  id: string;
  category: 'guide' | 'support' | 'enhancement' | 'accommodation';
  icon: React.ReactNode;
  name: string;
  description: string;
  price: number | 'variable';
  recommended: boolean;
}

interface ConcessionOption {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  discount: string;
  requiresProof: boolean;
}

interface HeritageCustomizeExperienceProps {
  selectedDestinations: Array<{ id: string; name: string }>;
  onContinue: (services: string[], concessions: string[], preferences: any) => void;
  onBack: () => void;
}

export function HeritageCustomizeExperience({
  selectedDestinations,
  onContinue,
  onBack,
}: HeritageCustomizeExperienceProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedConcessions, setSelectedConcessions] = useState<string[]>([]);
  const [guideLanguage, setGuideLanguage] = useState('');
  const [mealPreference, setMealPreference] = useState('');
  const [activeTab, setActiveTab] = useState<'services' | 'concessions'>('services');

  // Service Options
  const serviceOptions: ServiceOption[] = [
    // Guides
    {
      id: 'certified-guide',
      category: 'guide',
      icon: <Languages className="h-6 w-6" />,
      name: 'Certified Heritage Guide',
      description: 'Expert guide with ASI certification, multilingual support',
      price: 2500,
      recommended: true,
    },
    {
      id: 'audio-guide',
      category: 'guide',
      icon: <Music className="h-6 w-6" />,
      name: 'Audio Guide Device',
      description: 'Self-paced audio commentary in 12 languages',
      price: 300,
      recommended: false,
    },
    {
      id: 'historian-expert',
      category: 'guide',
      icon: <Book className="h-6 w-6" />,
      name: 'Historian Expert',
      description: 'In-depth academic tour with published historian',
      price: 5000,
      recommended: false,
    },

    // Support Services
    {
      id: 'tour-coordinator',
      category: 'support',
      icon: <User className="h-6 w-6" />,
      name: 'Tour Coordinator',
      description: 'Dedicated coordinator for group management',
      price: 3000,
      recommended: true,
    },
    {
      id: 'medical-support',
      category: 'support',
      icon: <Stethoscope className="h-6 w-6" />,
      name: 'Medical Support',
      description: 'On-call doctor/nurse for emergencies',
      price: 2000,
      recommended: false,
    },
    {
      id: 'accessibility-support',
      category: 'support',
      icon: <Accessibility className="h-6 w-6" />,
      name: 'Accessibility Support',
      description: 'Wheelchair, ramps, assisted mobility',
      price: 1500,
      recommended: false,
    },

    // Enhancements
    {
      id: 'photography-session',
      category: 'enhancement',
      icon: <Camera className="h-6 w-6" />,
      name: 'Professional Photography',
      description: '2-hour photoshoot with edited photos',
      price: 4000,
      recommended: false,
    },
    {
      id: 'traditional-meals',
      category: 'enhancement',
      icon: <Utensils className="h-6 w-6" />,
      name: 'Traditional Cuisine Experience',
      description: 'Authentic local meals at heritage sites',
      price: 800,
      recommended: true,
    },
    {
      id: 'souvenir-shopping',
      category: 'enhancement',
      icon: <ShoppingBag className="h-6 w-6" />,
      name: 'Curated Shopping Tour',
      description: 'Guided visit to authentic craft markets',
      price: 500,
      recommended: false,
    },

    // Accommodation
    {
      id: 'heritage-hotel',
      category: 'accommodation',
      icon: <Hotel className="h-6 w-6" />,
      name: 'Heritage Hotel Stay',
      description: 'Night at converted palace/haveli',
      price: 'variable',
      recommended: true,
    },
    {
      id: 'luxury-transport',
      category: 'accommodation',
      icon: <Car className="h-6 w-6" />,
      name: 'Luxury Transport',
      description: 'AC sedan/SUV with driver',
      price: 'variable',
      recommended: false,
    },
  ];

  // Concession Options
  const concessionOptions: ConcessionOption[] = [
    {
      id: 'student',
      icon: <GraduationCap className="h-6 w-6" />,
      name: 'Student Group Concession',
      description: 'For schools, colleges, educational institutions',
      discount: 'Up to 50% off',
      requiresProof: true,
    },
    {
      id: 'senior',
      icon: <UserCheck className="h-6 w-6" />,
      name: 'Senior Citizen Discount',
      description: 'Government mandated concession for 60+ years',
      discount: '50% off entry',
      requiresProof: true,
    },
    {
      id: 'differently-abled',
      icon: <Accessibility className="h-6 w-6" />,
      name: 'Differently Abled Support',
      description: 'Free entry + accessibility services',
      discount: 'Free entry + support',
      requiresProof: true,
    },
    {
      id: 'government',
      icon: <Shield className="h-6 w-6" />,
      name: 'Government/Defense Personnel',
      description: 'Special rates for govt employees & armed forces',
      discount: 'Special rates',
      requiresProof: true,
    },
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const toggleConcession = (concessionId: string) => {
    if (selectedConcessions.includes(concessionId)) {
      setSelectedConcessions(selectedConcessions.filter((id) => id !== concessionId));
    } else {
      setSelectedConcessions([...selectedConcessions, concessionId]);
    }
  };

  const handleContinue = () => {
    onContinue(selectedServices, selectedConcessions, {
      guideLanguage,
      mealPreference,
    });
  };

  const getTotalCost = () => {
    let total = 0;
    selectedServices.forEach((serviceId) => {
      const service = serviceOptions.find((s) => s.id === serviceId);
      if (service && typeof service.price === 'number') {
        total += service.price;
      }
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3D0] to-[#FFE8B8] pb-32">
      {/* ========================================
          HEADER
      ======================================== */}
      <div className="bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-200 hover:text-[#FFF8E1] mb-6 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="text-lg font-semibold">Back to Destinations</span>
          </button>

          <h1 className="text-5xl font-bold text-[#FFF8E1] mb-4">
            Customize Your Heritage Experience
          </h1>
          <p className="text-2xl text-amber-100 mb-6">
            Add services, guides, and check concessions for your selected destinations
          </p>

          {/* Selected Destinations Chips */}
          <div className="flex flex-wrap gap-3">
            {selectedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white/20 backdrop-blur px-5 py-3 rounded-xl text-base font-semibold border-2 border-white/30"
              >
                📍 {dest.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
          TABS
      ======================================== */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-2 flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
              activeTab === 'services'
                ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white'
                : 'text-gray-700 hover:bg-amber-50'
            }`}
          >
            <Plus className="inline-block h-5 w-5 mr-2" />
            Add Services ({selectedServices.length})
          </button>
          <button
            onClick={() => setActiveTab('concessions')}
            className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
              activeTab === 'concessions'
                ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white'
                : 'text-gray-700 hover:bg-amber-50'
            }`}
          >
            <Tag className="inline-block h-5 w-5 mr-2" />
            Check Concessions ({selectedConcessions.length})
          </button>
        </div>

        {/* ========================================
            SERVICES TAB
        ======================================== */}
        {activeTab === 'services' && (
          <div className="space-y-8">
            {/* Info Banner */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 flex items-start gap-4">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  💡 Recommended Services Highlighted
                </h3>
                <p className="text-base text-gray-700">
                  Select services to enhance your heritage experience. Prices are per group/per day.
                </p>
              </div>
            </div>

            {/* Services by Category */}
            {['guide', 'support', 'enhancement', 'accommodation'].map((category) => (
              <div key={category} className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                  {category === 'guide' && '🎓 Guides & Tours'}
                  {category === 'support' && '🆘 Support Services'}
                  {category === 'enhancement' && '✨ Experience Enhancements'}
                  {category === 'accommodation' && '🏨 Stays & Transport'}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {serviceOptions
                    .filter((service) => service.category === category)
                    .map((service) => (
                      <ServiceCard
                        key={service.id}
                        service={service}
                        selected={selectedServices.includes(service.id)}
                        onToggle={() => toggleService(service.id)}
                      />
                    ))}
                </div>
              </div>
            ))}

            {/* Additional Preferences */}
            {selectedServices.includes('certified-guide') && (
              <div className="bg-white rounded-2xl shadow-lg border-3 border-purple-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🗣️ Guide Language Preference
                </h3>
                <select
                  value={guideLanguage}
                  onChange={(e) => setGuideLanguage(e.target.value)}
                  className="w-full md:w-1/2 px-5 py-4 border-2 border-purple-300 rounded-xl text-lg font-semibold"
                >
                  <option value="">Select Language</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="regional">Regional Language</option>
                  <option value="multiple">Multiple Languages</option>
                </select>
              </div>
            )}

            {selectedServices.includes('traditional-meals') && (
              <div className="bg-white rounded-2xl shadow-lg border-3 border-green-300 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🍽️ Meal Preference
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Vegetarian', 'Non-Vegetarian', 'Jain', 'Vegan'].map((pref) => (
                    <button
                      key={pref}
                      onClick={() => setMealPreference(pref)}
                      className={`p-4 rounded-xl border-2 font-bold transition-all ${
                        mealPreference === pref
                          ? 'bg-green-100 border-green-500 text-green-900'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-green-400'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================
            CONCESSIONS TAB
        ======================================== */}
        {activeTab === 'concessions' && (
          <div className="space-y-6">
            {/* Info Banner */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6 flex items-start gap-4">
              <Info className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  📋 ID Proof Required
                </h3>
                <p className="text-base text-gray-700">
                  Upload valid ID proofs in the next step to claim these concessions. Verification is mandatory.
                </p>
              </div>
            </div>

            {/* Concession Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {concessionOptions.map((concession) => (
                <ConcessionCard
                  key={concession.id}
                  concession={concession}
                  selected={selectedConcessions.includes(concession.id)}
                  onToggle={() => toggleConcession(concession.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================
          STICKY FOOTER
      ======================================== */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-50 to-yellow-50 border-t-3 border-amber-300 p-6 shadow-2xl z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Summary */}
            <div className="flex items-center gap-8">
              <div>
                <p className="text-sm font-bold text-gray-600 mb-1">Services Added</p>
                <p className="text-3xl font-bold text-gray-900">{selectedServices.length}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600 mb-1">Concessions</p>
                <p className="text-3xl font-bold text-gray-900">{selectedConcessions.length}</p>
              </div>
              {getTotalCost() > 0 && (
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-1">Est. Service Cost</p>
                  <p className="text-3xl font-bold text-amber-700">₹{getTotalCost().toLocaleString()}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <Button
              onClick={handleContinue}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl"
            >
              Continue to Trip Details
              <ChevronRight className="ml-3 h-7 w-7" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// SERVICE CARD COMPONENT
// ========================================

interface ServiceCardProps {
  service: ServiceOption;
  selected: boolean;
  onToggle: () => void;
}

function ServiceCard({ service, selected, onToggle }: ServiceCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className={`
        text-left p-5 rounded-xl border-3 transition-all
        ${
          selected
            ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-500 shadow-lg'
            : 'bg-white border-amber-200 hover:border-amber-400'
        }
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className={`
          w-12 h-12 rounded-xl flex items-center justify-center
          ${selected ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'}
        `}
        >
          {service.icon}
        </div>
        <div
          className={`
          w-8 h-8 rounded-full border-2 flex items-center justify-center
          ${selected ? 'bg-green-500 border-green-600' : 'bg-white border-gray-300'}
        `}
        >
          {selected && <Check className="h-5 w-5 text-white" strokeWidth={3} />}
        </div>
      </div>

      <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
      <p className="text-sm text-gray-600 mb-3">{service.description}</p>

      <div className="flex items-center gap-3">
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-bold">
          {typeof service.price === 'number' ? `₹${service.price}` : 'Variable'}
        </div>
        {service.recommended && (
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-xs font-bold">
            ⭐ Recommended
          </div>
        )}
      </div>
    </motion.button>
  );
}

// ========================================
// CONCESSION CARD COMPONENT
// ========================================

interface ConcessionCardProps {
  concession: ConcessionOption;
  selected: boolean;
  onToggle: () => void;
}

function ConcessionCard({ concession, selected, onToggle }: ConcessionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className={`
        text-left p-6 rounded-xl border-3 transition-all
        ${
          selected
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-500 shadow-lg'
            : 'bg-white border-gray-300 hover:border-green-400'
        }
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`
          w-14 h-14 rounded-xl flex items-center justify-center
          ${selected ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}
        `}
        >
          {concession.icon}
        </div>
        <div
          className={`
          w-10 h-10 rounded-full border-2 flex items-center justify-center
          ${selected ? 'bg-green-500 border-green-600' : 'bg-white border-gray-300'}
        `}
        >
          {selected && <Check className="h-6 w-6 text-white" strokeWidth={3} />}
        </div>
      </div>

      <h4 className="text-xl font-bold text-gray-900 mb-2">{concession.name}</h4>
      <p className="text-base text-gray-600 mb-4">{concession.description}</p>

      <div className="flex items-center gap-3">
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-bold">
          💰 {concession.discount}
        </div>
        {concession.requiresProof && (
          <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg text-xs font-bold">
            📋 ID Required
          </div>
        )}
      </div>
    </motion.button>
  );
}
