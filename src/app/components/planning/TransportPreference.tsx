import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Car, Users, Bus, Train, MapPin, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import type { TransportPreferenceProps } from './types';

const transportOptions = [
  {
    id: 'self-drive',
    icon: Car,
    name: 'Self-Drive Vehicle',
    description: 'Drive yourself, explore freely',
    gradient: 'from-orange-500 to-red-600',
    popular: true,
  },
  {
    id: 'chauffeur',
    icon: Users,
    name: 'Chauffeur-Driven Car',
    description: 'Relax with a professional driver',
    gradient: 'from-blue-500 to-cyan-600',
    popular: false,
  },
  {
    id: 'public-transport',
    icon: Bus,
    name: 'Public Transport',
    description: 'Buses, metro, local transport',
    gradient: 'from-green-500 to-emerald-600',
    popular: false,
  },
  {
    id: 'rental-with-driver',
    icon: Car,
    name: 'Rental with Driver',
    description: 'Long-term rental with driver',
    gradient: 'from-purple-500 to-indigo-600',
    popular: false,
  },
  {
    id: 'other',
    icon: MapPin,
    name: 'Other',
    description: 'Specify your preference',
    gradient: 'from-gray-500 to-gray-600',
    popular: false,
  },
];

const vehicleTypes = [
  { id: 'compact', name: 'Compact Car', icon: '🚗', description: 'Small, fuel-efficient' },
  { id: 'sedan', name: 'Sedan', icon: '🚙', description: 'Comfortable, spacious' },
  { id: 'suv', name: 'SUV', icon: '🚙', description: 'Large, rugged' },
  { id: 'luxury', name: 'Luxury', icon: '✨', description: 'Premium experience' },
  { id: 'van', name: 'Van/Minibus', icon: '🚐', description: 'Group travel' },
  { id: 'bike', name: 'Bike/Scooter', icon: '🏍️', description: 'Solo, adventurous' },
];

export function TransportPreference({ onNext, onBack, selectedCategories = [] }: TransportPreferenceProps) {
  const [selectedTransport, setSelectedTransport] = useState<string>('');
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<string[]>([]);
  const [otherTransport, setOtherTransport] = useState('');
  const [showVehicleTypes, setShowVehicleTypes] = useState(false);

  const handleTransportSelect = (transportId: string) => {
    setSelectedTransport(transportId);
    setShowVehicleTypes(transportId === 'self-drive');
  };

  const toggleVehicleType = (typeId: string) => {
    if (selectedVehicleTypes.includes(typeId)) {
      setSelectedVehicleTypes(selectedVehicleTypes.filter(id => id !== typeId));
    } else {
      setSelectedVehicleTypes([...selectedVehicleTypes, typeId]);
    }
  };

  const handleNext = () => {
    const data = {
      transportMode: selectedTransport,
      vehicleTypes: selectedVehicleTypes,
      otherTransport: selectedTransport === 'other' ? otherTransport : '',
    };
    onNext(data);
  };

  const canProceed = selectedTransport && (
    selectedTransport !== 'self-drive' || selectedVehicleTypes.length > 0
  ) && (
    selectedTransport !== 'other' || otherTransport.trim() !== ''
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Car className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Transport Preference</h1>
            <p className="text-white/80 text-sm">Select your preferred mode</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-2 bg-white/30 rounded-full">
            <div className="h-2 bg-white rounded-full" style={{ width: '75%' }} />
          </div>
          <span className="text-white text-sm font-semibold">Step 5 of 6</span>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-24">
        {/* Instruction Card */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-5 border-2 border-blue-200 mb-6 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Choose Your Travel Style</h3>
              <p className="text-sm text-gray-600">
                Select how you'd like to get around during your trip. This helps us tailor your itinerary.
              </p>
            </div>
          </div>
        </Card>

        {/* Transport Options */}
        <div className="space-y-4 mb-6">
          <h2 className="text-lg font-bold text-gray-900">Select Transport Mode</h2>
          
          {transportOptions.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleTransportSelect(option.id)}
              className="w-full text-left"
            >
              <Card className={`rounded-3xl p-5 transition-all ${
                selectedTransport === option.id
                  ? 'border-3 border-blue-500 shadow-xl bg-blue-50'
                  : 'border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <option.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-base">{option.name}</h3>
                      {option.popular && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs px-2 py-0.5">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>

                  {selectedTransport === option.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.button>
          ))}
        </div>

        {/* Vehicle Type Selection (for Self-Drive) */}
        {showVehicleTypes && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-5 border-2 border-orange-200">
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-orange-600" />
                Select Vehicle Type(s)
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {vehicleTypes.map((type, index) => (
                  <motion.button
                    key={type.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => toggleVehicleType(type.id)}
                    className={`p-4 rounded-2xl border-2 transition-all text-left ${
                      selectedVehicleTypes.includes(type.id)
                        ? 'border-orange-500 bg-white shadow-lg'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{type.icon}</span>
                      {selectedVehicleTypes.includes(type.id) && (
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold text-sm mb-0.5">{type.name}</h4>
                    <p className="text-xs text-gray-600">{type.description}</p>
                  </motion.button>
                ))}
              </div>

              {selectedVehicleTypes.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-white rounded-2xl border border-orange-200"
                >
                  <p className="text-xs font-semibold text-gray-700 mb-2">
                    Selected: {selectedVehicleTypes.length} type(s)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedVehicleTypes.map(typeId => {
                      const type = vehicleTypes.find(t => t.id === typeId);
                      return type ? (
                        <Badge key={typeId} variant="secondary" className="bg-orange-100 text-orange-700">
                          {type.icon} {type.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        )}

        {/* Other Transport Input */}
        {selectedTransport === 'other' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Card className="bg-white rounded-3xl p-5 shadow-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Please specify your transport preference
              </label>
              <Input
                type="text"
                placeholder="e.g., Train + local taxi, cycle rental, etc."
                value={otherTransport}
                onChange={(e) => setOtherTransport(e.target.value)}
                className="h-12 rounded-2xl border-gray-300"
              />
            </Card>
          </motion.div>
        )}

        {/* Info Card */}
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-5 border-2 border-indigo-200 mb-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="font-bold text-sm mb-1">Pro Tip</h4>
              <p className="text-xs text-gray-600">
                Self-drive vehicles offer the most flexibility for exploring hidden gems and scenic routes at your own pace.
              </p>
            </div>
          </div>
        </Card>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className={`w-full h-14 rounded-2xl font-bold text-base flex items-center justify-center gap-2 ${
            canProceed
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue to Booking
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Skip Option */}
        <button
          onClick={() => onNext({ transportMode: 'flexible', vehicleTypes: [], otherTransport: '' })}
          className="w-full mt-4 text-center text-sm text-gray-500 hover:text-gray-700 font-medium"
        >
          Skip - I'll decide later
        </button>
      </div>
    </div>
  );
}
