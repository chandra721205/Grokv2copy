import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft,
  Car,
  Users,
  Bus,
  Shuffle,
  Check,
  ChevronRight,
  ChevronDown,
  Info,
  Sparkles,
  DollarSign,
  Leaf,
  Settings,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Baby,
  Clock
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface TransportPreferencesProps {
  onBack: () => void;
  onContinue?: () => void;
  onSkip?: () => void;
  onNavigateToVehicles?: () => void;
  onNavigateToTransportHub?: () => void;
  onNavigateToTransportPlanner?: () => void;
}

type TransportType = 'self-drive' | 'chauffeur' | 'public' | 'mixed' | null;

export function TransportPreferences({ 
  onBack, 
  onContinue,
  onSkip,
  onNavigateToVehicles,
  onNavigateToTransportHub,
  onNavigateToTransportPlanner
}: TransportPreferencesProps) {
  const [selectedType, setSelectedType] = useState<TransportType>(null);
  const [selfDriveOptions, setSelfDriveOptions] = useState<Set<string>>(new Set());
  const [vehiclePreference, setVehiclePreference] = useState({
    carType: 'sedan',
    fuelType: 'no-preference',
    duration: 'same-as-trip'
  });
  const [showVehiclePrefs, setShowVehiclePrefs] = useState(false);
  const [transportBudget, setTransportBudget] = useState(15000);
  const [ecoOptions, setEcoOptions] = useState<Set<string>>(new Set());
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);

  const transportTypes = [
    {
      id: 'self-drive',
      icon: '🚗',
      title: 'Self-Drive Vehicle',
      description: 'Rent a car/bike and drive yourself',
      bestFor: 'Flexibility, privacy, adventure',
      gradient: 'from-orange-400 to-amber-500',
      connection: 'vehicles'
    },
    {
      id: 'chauffeur',
      icon: '👨‍✈️',
      title: 'Chauffeur-Driven',
      description: 'Professional driver with vehicle',
      bestFor: 'Relaxation, business, groups',
      gradient: 'from-blue-400 to-cyan-500',
      connection: 'transport-hub'
    },
    {
      id: 'public',
      icon: '🚌',
      title: 'Public Transport',
      description: 'Trains, buses, local transport',
      bestFor: 'Budget, local experience',
      gradient: 'from-green-400 to-emerald-500',
      connection: 'transport-planner'
    },
    {
      id: 'mixed',
      icon: '🔀',
      title: 'Mixed Modes',
      description: 'Combine different transport types',
      bestFor: 'Complex itineraries',
      gradient: 'from-purple-400 to-pink-500',
      connection: null
    },
  ];

  const selfDriveOptionsList = [
    { id: 'entire-trip', label: 'I need vehicle for entire trip (multi-city)', icon: MapPin },
    { id: 'specific-locations', label: 'I need vehicle only at specific locations', icon: MapPin },
    { id: 'automatic', label: 'I prefer automatic transmission', icon: Settings },
    { id: 'child-seat', label: 'I need child seat', icon: Baby },
    { id: 'zero-deposit', label: 'I want zero-deposit insurance', icon: Shield },
  ];

  const toggleSelfDriveOption = (optionId: string) => {
    const newOptions = new Set(selfDriveOptions);
    if (newOptions.has(optionId)) {
      newOptions.delete(optionId);
    } else {
      newOptions.add(optionId);
    }
    setSelfDriveOptions(newOptions);
  };

  const toggleEcoOption = (optionId: string) => {
    const newOptions = new Set(ecoOptions);
    if (newOptions.has(optionId)) {
      newOptions.delete(optionId);
    } else {
      newOptions.add(optionId);
    }
    setEcoOptions(newOptions);
  };

  const handleGetAIRecommendation = () => {
    setShowAIRecommendation(true);
  };

  const handleSavePreferences = () => {
    if (onContinue) {
      onContinue();
    }
  };

  const handleExploreVehicles = () => {
    if (selectedType === 'self-drive' && onNavigateToVehicles) {
      onNavigateToVehicles();
    } else if (selectedType === 'chauffeur' && onNavigateToTransportHub) {
      onNavigateToTransportHub();
    } else if (selectedType === 'public' && onNavigateToTransportPlanner) {
      onNavigateToTransportPlanner();
    }
  };

  const calculateBreakdown = () => {
    const vehicleRental = Math.round(transportBudget * 0.6);
    const fuel = Math.round(transportBudget * 0.25);
    const driver = selectedType === 'chauffeur' ? Math.round(transportBudget * 0.15) : 0;
    const other = transportBudget - vehicleRental - fuel - driver;
    
    return { vehicleRental, fuel, driver, other };
  };

  const breakdown = calculateBreakdown();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">How would you like to travel?</h1>
            <p className="text-white/90 text-sm">Select your preferred transport modes for this trip</p>
          </div>
        </div>

        {/* Step Progress Indicator */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            {[
              { num: 1, label: 'Interests', active: false, completed: true },
              { num: 2, label: 'Places', active: false, completed: true },
              { num: 3, label: 'Preferences', active: false, completed: true },
              { num: 4, label: 'Transport', active: true, completed: false, isNew: true },
              { num: 5, label: 'Itinerary', active: false, completed: false },
              { num: 6, label: 'Booking', active: false, completed: false },
            ].map((step, index, array) => (
              <div key={step.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  {/* Step Circle */}
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        step.completed
                          ? 'bg-white text-purple-600'
                          : step.active
                          ? 'bg-white text-purple-600 ring-4 ring-white/30'
                          : 'bg-white/20 text-white/60'
                      }`}
                    >
                      {step.completed ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        step.num
                      )}
                    </div>
                    {/* NEW Badge */}
                    {step.isNew && (
                      <div className="absolute -top-1 -right-1 bg-yellow-400 text-purple-900 text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                        NEW
                      </div>
                    )}
                  </div>
                  {/* Step Label */}
                  <span
                    className={`text-[10px] mt-1 font-semibold transition-all ${
                      step.active
                        ? 'text-white'
                        : step.completed
                        ? 'text-white/90'
                        : 'text-white/50'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {/* Connector Line */}
                {index < array.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 -mx-1 transition-all ${
                      step.completed ? 'bg-white' : 'bg-white/20'
                    }`}
                    style={{ marginTop: '-20px' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
          </div>
          <span className="text-white text-xs font-semibold">Step 4 of 6</span>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Transport Type Selector */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Choose Transport Type</h2>
          
          <div className="space-y-3">
            {transportTypes.map((type, index) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedType(type.id as TransportType)}
                className="w-full text-left"
              >
                <Card className={`rounded-3xl p-4 border-2 transition-all ${
                  selectedType === type.id
                    ? 'border-purple-500 bg-white shadow-xl'
                    : 'border-gray-200 bg-white/80 shadow-lg'
                }`}>
                  <div className="flex items-start gap-4">
                    {/* Radio Button */}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-all ${
                      selectedType === type.id
                        ? 'border-purple-600 bg-purple-600'
                        : 'border-gray-300 bg-white'
                    }`}>
                      {selectedType === type.id && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-md`}>
                          {type.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-base text-gray-900">{type.title}</h3>
                          <p className="text-xs text-gray-600">{type.description}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2 mt-2">
                        <p className="text-xs text-gray-700">
                          <span className="font-semibold">Best for:</span> {type.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Self-Drive Options */}
        <AnimatePresence>
          {selectedType === 'self-drive' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-5 border-2 border-orange-300">
                <h3 className="font-bold text-base text-orange-900 mb-4">Self-Drive Options</h3>
                
                <div className="space-y-3">
                  {selfDriveOptionsList.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => toggleSelfDriveOption(option.id)}
                        className="w-full text-left"
                      >
                        <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-3">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            selfDriveOptions.has(option.id)
                              ? 'border-orange-600 bg-orange-600'
                              : 'border-gray-400 bg-white'
                          }`}>
                            {selfDriveOptions.has(option.id) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 flex-1">
                            <IconComponent className="w-4 h-4 text-orange-700" />
                            <span className="text-sm text-gray-900">{option.label}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Quick Link to Vehicles */}
                <Button
                  onClick={handleExploreVehicles}
                  className="w-full mt-4 h-11 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-semibold hover:from-orange-700 hover:to-amber-700"
                >
                  Browse Available Vehicles
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vehicle Preference (Expandable) */}
        <AnimatePresence>
          {selectedType === 'self-drive' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Card className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200">
                <button
                  onClick={() => setShowVehiclePrefs(!showVehiclePrefs)}
                  className="w-full px-5 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-base text-gray-900">Vehicle Preferences</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${
                    showVehiclePrefs ? 'rotate-180' : ''
                  }`} />
                </button>

                {showVehiclePrefs && (
                  <div className="px-5 pb-5 space-y-4 border-t border-gray-200 pt-4">
                    {/* Car Type */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Car Type</label>
                      <div className="grid grid-cols-4 gap-2">
                        {['economy', 'sedan', 'suv', 'luxury'].map((type) => (
                          <button
                            key={type}
                            onClick={() => setVehiclePreference({ ...vehiclePreference, carType: type })}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                              vehiclePreference.carType === type
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fuel Preference */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Fuel Preference</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'petrol', label: 'Petrol' },
                          { id: 'diesel', label: 'Diesel' },
                          { id: 'electric', label: 'Electric' },
                          { id: 'no-preference', label: 'No Preference' }
                        ].map((fuel) => (
                          <button
                            key={fuel.id}
                            onClick={() => setVehiclePreference({ ...vehiclePreference, fuelType: fuel.id })}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                              vehiclePreference.fuelType === fuel.id
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {fuel.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Rental Duration */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Rental Duration</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'same-as-trip', label: 'Same as Trip' },
                          { id: 'few-days', label: 'Few Days Only' }
                        ].map((duration) => (
                          <button
                            key={duration.id}
                            onClick={() => setVehiclePreference({ ...vehiclePreference, duration: duration.id })}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                              vehiclePreference.duration === duration.id
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {duration.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Recommendation */}
        {selectedType && (
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 border-2 border-purple-300 shadow-xl">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base text-purple-900 mb-1">Grok AI Insights</h3>
                <p className="text-xs text-purple-700">Personalized recommendations for your trip</p>
              </div>
            </div>

            {showAIRecommendation ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/60 rounded-2xl p-4 space-y-3"
              >
                <p className="text-sm text-purple-900 font-semibold">
                  Based on your 7-day Kerala trip with family:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-purple-800">Recommend self-drive SUV for hill stations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-purple-800">Suggest chauffeur for city days</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-purple-800">Estimated transport cost: ₹12,000</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <Button
                onClick={handleGetAIRecommendation}
                className="w-full h-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700"
              >
                Get AI Recommendation
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            )}
          </Card>
        )}

        {/* Budget Allocation */}
        {selectedType && (
          <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-base text-gray-900">Budget Allocation</h3>
            </div>

            {/* Budget Slider */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Transport Budget</span>
                <span className="text-lg font-bold text-purple-600">₹{transportBudget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="50000"
                step="1000"
                value={transportBudget}
                onChange={(e) => setTransportBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #9333ea ${((transportBudget - 5000) / 45000) * 100}%, #e5e7eb ${((transportBudget - 5000) / 45000) * 100}%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹5,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-semibold text-purple-900 mb-2">Estimated Breakdown:</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">Vehicle Rental</span>
                  <span className="text-xs font-bold text-gray-900">₹{breakdown.vehicleRental.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-700">Fuel</span>
                  <span className="text-xs font-bold text-gray-900">₹{breakdown.fuel.toLocaleString()}</span>
                </div>
                {selectedType === 'chauffeur' && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-700">Driver Charges</span>
                    <span className="text-xs font-bold text-gray-900">₹{breakdown.driver.toLocaleString()}</span>
                  </div>
                )}
                {breakdown.other > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-700">Other Costs</span>
                    <span className="text-xs font-bold text-gray-900">₹{breakdown.other.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        )}

        {/* Eco-Friendly Options */}
        {selectedType && (
          <Card className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-5 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-base text-green-900">Eco-Friendly Options</h3>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => toggleEcoOption('electric-hybrid')}
                className="w-full text-left"
              >
                <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    ecoOptions.has('electric-hybrid')
                      ? 'border-green-600 bg-green-600'
                      : 'border-gray-400 bg-white'
                  }`}>
                    {ecoOptions.has('electric-hybrid') && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <Zap className="w-4 h-4 text-green-700" />
                    <span className="text-sm text-gray-900">Prefer electric/hybrid vehicles</span>
                  </div>
                </div>
              </button>

              <button
                onClick={() => toggleEcoOption('carbon-offset')}
                className="w-full text-left"
              >
                <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    ecoOptions.has('carbon-offset')
                      ? 'border-green-600 bg-green-600'
                      : 'border-gray-400 bg-white'
                  }`}>
                    {ecoOptions.has('carbon-offset') && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-green-700" />
                        <span className="text-sm text-gray-900">Carbon offset add-on</span>
                      </div>
                      <Badge className="bg-green-600 text-white text-[10px]">+₹500</Badge>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </Card>
        )}

        {/* Info Card */}
        <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-4 border-2 border-blue-300">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800">
              Your transport preferences will be used to optimize your itinerary and provide accurate cost estimates. You can always modify these later.
            </p>
          </div>
        </Card>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-40">
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex gap-2">
            <Button
              onClick={handleSavePreferences}
              disabled={!selectedType}
              className="flex-1 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Preferences
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            {!showAIRecommendation && selectedType && (
              <Button
                onClick={handleGetAIRecommendation}
                className="h-14 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600"
              >
                <Sparkles className="w-5 h-5" />
              </Button>
            )}
          </div>
          <Button
            onClick={onSkip}
            variant="ghost"
            className="w-full h-10 text-gray-600 hover:text-gray-900 font-semibold"
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  );
}