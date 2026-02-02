import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft,
  Check,
  ChevronRight,
  Sparkles,
  Info,
  ExternalLink,
  Youtube,
  Car,
  Users,
  Fuel,
  Calendar,
  MapPin,
  Settings
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { VEHICLE_EMOJIS } from '@/app/components/essentials/VehicleEmojiGuide';

interface Screen32B4Props {
  onBack: () => void;
  onContinueToVehicleSelection: () => void;
  onContinueToSummary: () => void;
  onContinue?: () => void;
  onSkip?: () => void;
  selectedTransportMode: 'self-drive' | 'chauffeur' | 'public' | 'mixed';
  onTransportModeSelected?: (mode: 'self-drive' | 'chauffeur' | 'public' | 'mixed') => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

export function Screen32B4_TransportMode({
  onBack,
  onContinueToVehicleSelection,
  onContinueToSummary,
  onContinue,
  onSkip,
  selectedTransportMode,
  onGoogleSearch,
  onYouTubeSearch
}: Screen32B4Props) {
  const [vehicleCategory, setVehicleCategory] = useState<string>('suv');
  const [fuelPreference, setFuelPreference] = useState<string>('any');
  const [budgetRange, setBudgetRange] = useState<number>(3000);

  // Transport mode data
  const modeData = {
    'self-drive': {
      icon: VEHICLE_EMOJIS.selfDriveCar,
      title: 'Self-Drive Vehicle',
      description: 'Independent travel with your own rental vehicle',
      gradient: 'from-orange-500 to-amber-500',
      benefits: [
        'Complete freedom and flexibility',
        'Travel at your own pace',
        'No dependency on drivers',
        'Cost-effective for groups'
      ]
    },
    'chauffeur': {
      icon: '👨‍✈️',
      title: 'Chauffeur-Driven',
      description: 'Professional driver with comfortable vehicle',
      gradient: 'from-blue-500 to-cyan-500',
      benefits: [
        'Stress-free travel experience',
        'Local knowledge and guidance',
        'No parking hassles',
        'Premium comfort'
      ]
    },
    'public': {
      icon: '🚌',
      title: 'Public Transport',
      description: 'Trains, buses, and local transportation',
      gradient: 'from-green-500 to-emerald-500',
      benefits: [
        'Most economical option',
        'Authentic local experience',
        'Eco-friendly travel',
        'Well-connected routes'
      ]
    },
    'mixed': {
      icon: '🔀',
      title: 'Mixed Modes',
      description: 'Combination of different transport options',
      gradient: 'from-purple-500 to-pink-500',
      benefits: [
        'Optimized for each journey',
        'Best of all worlds',
        'Flexible planning',
        'Cost optimization'
      ]
    }
  };

  const currentMode = modeData[selectedTransportMode];

  const vehicleCategories = [
    { id: 'hatchback', name: 'Hatchback', price: '₹1,200/day', seats: 5, icon: '🚗' },
    { id: 'sedan', name: 'Sedan', price: '₹1,500/day', seats: 5, icon: '🚗' },
    { id: 'suv', name: 'SUV', price: '₹2,500/day', seats: 7, icon: '🚙', recommended: true },
    { id: 'muv', name: 'MUV', price: '₹2,000/day', seats: 8, icon: '🚐' },
    { id: 'luxury', name: 'Luxury', price: '₹5,000/day', seats: 5, icon: '✨' }
  ];

  const fuelOptions = [
    { id: 'any', label: 'No Preference' },
    { id: 'petrol', label: 'Petrol' },
    { id: 'diesel', label: 'Diesel' },
    { id: 'electric', label: 'Electric', badge: 'Eco' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
      {/* Header with 6-Step Progress */}
      <div className={`bg-gradient-to-r ${currentMode.gradient} px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30`}>
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-xl font-bold">Transport Mode</h1>
            <p className="text-white/90 text-xs">Step 4 of 6: Configure transport</p>
          </div>
        </div>

        {/* 6-Step Progress Indicator */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  step < 4 
                    ? 'bg-white text-green-600' 
                    : step === 4
                    ? 'bg-white text-purple-600 ring-4 ring-white/40'
                    : 'bg-white/30 text-white'
                }`}>
                  {step < 4 ? '✓' : step}
                </div>
                {step < 6 && (
                  <div className={`h-1 w-full -mt-4 ${step < 4 ? 'bg-white' : 'bg-white/30'}`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-1 text-[8px] text-white/90 text-center">
            <span>Dates</span>
            <span>Guests</span>
            <span>Location</span>
            <span className="font-bold">Transport</span>
            <span>Review</span>
            <span>Payment</span>
          </div>
        </div>

        {/* NEW Badge */}
        <div className="mt-3 flex justify-center">
          <Badge className="bg-yellow-500 text-white border-0 shadow-lg">
            NEW - Self-Drive Integration
          </Badge>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Screen Indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <p className="text-xs font-bold text-gray-700">Screen 32B4</p>
          </div>
        </div>

        {/* Selected Mode Card */}
        <Card className={`bg-gradient-to-br ${currentMode.gradient} rounded-3xl p-6 border-0 shadow-xl text-white`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">{currentMode.icon}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">{currentMode.title}</h2>
              <p className="text-white/90 text-sm">{currentMode.description}</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-xs font-bold text-white mb-2">Key Benefits:</p>
            <div className="space-y-2">
              {currentMode.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Self-Drive Specific Options */}
        {selectedTransportMode === 'self-drive' && (
          <>
            {/* Vehicle Category Selection */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-xl">
              <h3 className="font-bold text-base text-gray-900 mb-4">Choose Vehicle Category</h3>
              <div className="space-y-3">
                {vehicleCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setVehicleCategory(category.id)}
                    className={`w-full text-left rounded-2xl p-4 border-2 transition-all ${
                      vehicleCategory === category.id
                        ? 'border-purple-500 bg-purple-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{category.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-sm text-gray-900">{category.name}</h4>
                          {category.recommended && (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-[9px]">
                              <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{category.seats} seats</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-gray-900">{category.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        vehicleCategory === category.id
                          ? 'border-purple-600 bg-purple-600'
                          : 'border-gray-300'
                      }`}>
                        {vehicleCategory === category.id && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>

            {/* Fuel Preference */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-xl">
              <h3 className="font-bold text-base text-gray-900 mb-4">Fuel Preference</h3>
              <div className="grid grid-cols-2 gap-3">
                {fuelOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFuelPreference(option.id)}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      fuelPreference === option.id
                        ? 'border-green-500 bg-green-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Fuel className={`w-4 h-4 ${fuelPreference === option.id ? 'text-green-600' : 'text-gray-600'}`} />
                      {option.badge && (
                        <Badge className="bg-green-500 text-white border-0 text-[8px]">
                          {option.badge}
                        </Badge>
                      )}
                    </div>
                    <p className={`text-sm font-semibold ${fuelPreference === option.id ? 'text-gray-900' : 'text-gray-700'}`}>
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </Card>

            {/* Budget Range */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-xl">
              <h3 className="font-bold text-base text-gray-900 mb-2">Daily Budget</h3>
              <p className="text-sm text-gray-600 mb-4">Set your preferred daily rental budget</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">₹1,000</span>
                  <span className="text-lg font-bold text-purple-600">₹{budgetRange.toLocaleString()}/day</span>
                  <span className="text-xs text-gray-600">₹10,000</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
              </div>

              <div className="bg-purple-50 rounded-xl p-3">
                <p className="text-xs text-purple-800">
                  {budgetRange <= 2000 && '💡 Economy vehicles available in this range'}
                  {budgetRange > 2000 && budgetRange <= 4000 && '🚗 Premium sedans and SUVs available'}
                  {budgetRange > 4000 && '✨ Luxury and high-end vehicles available'}
                </p>
              </div>
            </Card>

            {/* Continue to Vehicle Selection */}
            <Button
              onClick={onContinueToVehicleSelection}
              className="w-full h-14 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-bold text-base hover:from-orange-700 hover:to-amber-700 shadow-xl"
            >
              Browse {vehicleCategory.toUpperCase()} Vehicles
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </>
        )}

        {/* AI Recommendation */}
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 border-2 border-purple-300 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm text-purple-900 mb-1">Grok AI Insight</h3>
              <p className="text-xs text-purple-800">
                Based on your 7-day Kerala trip with 4 people, we recommend an SUV for comfort and luggage space. 
                Self-drive gives you flexibility to explore at your own pace.
              </p>
            </div>
          </div>
        </Card>

        {/* Google & YouTube Discovery */}
        <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-5 border-2 border-orange-300 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <p className="text-xs font-bold text-gray-800">Research Transport Options</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onGoogleSearch(`${currentMode.title} Kerala`)}
              className="bg-white border-2 border-blue-400 text-blue-700 px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              Google Search
            </button>
            <button
              onClick={() => onYouTubeSearch(`${currentMode.title} Kerala tips`)}
              className="bg-red-600 text-white px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-md"
            >
              <Youtube className="w-4 h-4" />
              YouTube Browse
            </button>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800">
              Transport preferences will be integrated into your final tour package. You can modify these choices later before booking.
            </p>
          </div>
        </Card>

        {/* Continue to Summary (skip vehicle selection) */}
        {selectedTransportMode !== 'self-drive' && (
          <Button
            onClick={onContinueToSummary}
            className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base hover:from-purple-700 hover:to-pink-700 shadow-xl"
          >
            Continue to Tour Summary
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}