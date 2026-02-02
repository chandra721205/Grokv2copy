import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft,
  X,
  Check,
  Star,
  Users,
  Settings,
  Fuel,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { VehicleCard } from '@/app/components/essentials/VehicleCard';
import { VEHICLE_EMOJIS } from '@/app/components/essentials/VehicleEmojiGuide';

interface Screen77XProps {
  onBack: () => void;
  onSelectVehicle: (vehicleId: string) => void;
  vehicleIds: string[];
  onRemoveVehicle?: (vehicleId: string) => void;
}

export function Screen77X_ComparisonView({
  onBack,
  onSelectVehicle,
  vehicleIds,
  onRemoveVehicle
}: Screen77XProps) {
  const [comparisonMode, setComparisonMode] = useState<'side-by-side' | 'table'>('side-by-side');

  // Mock vehicles for comparison
  const vehicles = [
    {
      id: '1',
      name: 'Admin SUV Model 1',
      category: 'SUV',
      price: 2500,
      rating: 4.8,
      reviews: 245,
      seats: 7,
      transmission: 'Auto',
      fuel: 'Diesel',
      mileage: '15 km/l',
      luggage: '3 Large',
      features: ['GPS', 'Bluetooth', 'Dual AC', 'Parking Sensors', 'Cruise Control', 'Airbags (6)'],
      recommended: true,
      vehicleType: 'car' as const,
      emoji: VEHICLE_EMOJIS.selfDriveCar
    },
    {
      id: '2',
      name: 'Admin Sedan Model 1',
      category: 'Sedan',
      price: 1500,
      rating: 4.6,
      reviews: 189,
      seats: 5,
      transmission: 'Manual',
      fuel: 'Petrol',
      mileage: '18 km/l',
      luggage: '2 Large',
      features: ['Fuel Efficient', 'AC', 'Music System', 'Power Windows', 'Central Lock'],
      recommended: false,
      vehicleType: 'car' as const,
      emoji: VEHICLE_EMOJIS.selfDriveCar
    },
    {
      id: '3',
      name: 'Admin Electric Car 1',
      category: 'Electric',
      price: 2000,
      rating: 4.9,
      reviews: 156,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Electric',
      mileage: '250 km/charge',
      luggage: '2 Medium',
      features: ['Fast Charging', 'Silent Drive', 'Tech Display', 'Auto Pilot', 'Eco Mode'],
      recommended: true,
      vehicleType: 'electric' as const,
      emoji: VEHICLE_EMOJIS.electricVehicle
    }
  ];

  const selectedVehicles = vehicles.slice(0, Math.min(vehicleIds.length, 3));

  const comparisonRows = [
    { label: 'Price (per day)', key: 'price', format: (v: any) => `₹${v.toLocaleString()}` },
    { label: 'Rating', key: 'rating', format: (v: any) => v },
    { label: 'Reviews', key: 'reviews', format: (v: any) => v },
    { label: 'Seats', key: 'seats', format: (v: any) => v },
    { label: 'Transmission', key: 'transmission', format: (v: any) => v },
    { label: 'Fuel Type', key: 'fuel', format: (v: any) => v },
    { label: 'Mileage', key: 'mileage', format: (v: any) => v },
    { label: 'Luggage', key: 'luggage', format: (v: any) => v },
  ];

  const getBestValue = (key: string) => {
    if (key === 'price') {
      return Math.min(...selectedVehicles.map(v => v.price));
    }
    if (key === 'rating') {
      return Math.max(...selectedVehicles.map(v => v.rating));
    }
    if (key === 'seats') {
      return Math.max(...selectedVehicles.map(v => v.seats));
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div>
              <h1 className="text-white text-xl font-bold">Compare Vehicles</h1>
              <p className="text-white/90 text-xs">{selectedVehicles.length} vehicles selected</p>
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-2 bg-white/20 rounded-xl p-1 backdrop-blur-sm">
            <button
              onClick={() => setComparisonMode('side-by-side')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                comparisonMode === 'side-by-side' ? 'bg-white text-purple-600' : 'text-white'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setComparisonMode('table')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                comparisonMode === 'table' ? 'bg-white text-purple-600' : 'text-white'
              }`}
            >
              Table
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Screen Indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <p className="text-xs font-bold text-gray-700">Screen 77X</p>
          </div>
        </div>

        {/* AI Recommendation */}
        {selectedVehicles.some(v => v.recommended) && (
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 border-2 border-purple-300 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-purple-900 mb-1">Grok AI Insight</h3>
                <p className="text-xs text-purple-800">
                  Based on your comparison, we recommend the{' '}
                  <strong>{selectedVehicles.find(v => v.recommended)?.name}</strong> for the best balance of features, comfort, and value.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Side-by-Side Comparison */}
        {comparisonMode === 'side-by-side' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {selectedVehicles.length < 3 && (
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200 mb-4">
                <p className="text-xs text-blue-800 text-center">
                  💡 You can compare up to 3 vehicles. Add more vehicles to compare!
                </p>
              </Card>
            )}

            <div className="grid grid-cols-3 gap-3">
              {selectedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="relative">
                  {/* Remove Button */}
                  {onRemoveVehicle && (
                    <button
                      onClick={() => onRemoveVehicle(vehicle.id)}
                      className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <X className="w-3 h-3 text-white" />
                    </button>
                  )}
                  
                  <VehicleCard
                    vehicle={vehicle}
                    variant="comparison"
                    onSelect={() => onSelectVehicle(vehicle.id)}
                    showBookButton={false}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Table Comparison */}
        {comparisonMode === 'table' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-3 p-4 bg-gray-50 border-b border-gray-200">
                <div className="text-xs font-bold text-gray-700">Specification</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="text-center">
                    <div className="text-4xl mb-2">{vehicle.emoji}</div>
                    <p className="text-[10px] font-bold text-gray-900 leading-tight">{vehicle.name}</p>
                  </div>
                ))}
              </div>

              {/* Comparison Rows */}
              {comparisonRows.map((row, index) => {
                const bestValue = getBestValue(row.key);
                
                return (
                  <div
                    key={row.key}
                    className={`grid grid-cols-4 gap-3 p-4 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } border-b border-gray-200`}
                  >
                    <div className="flex items-center">
                      <p className="text-xs font-semibold text-gray-700">{row.label}</p>
                    </div>
                    {selectedVehicles.map((vehicle) => {
                      const value = vehicle[row.key as keyof typeof vehicle];
                      const isBest = bestValue !== null && value === bestValue;
                      
                      return (
                        <div key={vehicle.id} className="flex items-center justify-center">
                          <div className={`text-center ${isBest ? 'bg-green-100 rounded-lg px-2 py-1' : ''}`}>
                            <p className={`text-xs font-semibold ${isBest ? 'text-green-900' : 'text-gray-900'}`}>
                              {row.format(value)}
                            </p>
                            {isBest && <Award className="w-3 h-3 text-green-600 mx-auto mt-1" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              {/* Features Row */}
              <div className="p-4 bg-purple-50">
                <div className="grid grid-cols-4 gap-3">
                  <div>
                    <p className="text-xs font-bold text-gray-700 mb-2">Features</p>
                  </div>
                  {selectedVehicles.map((vehicle) => (
                    <div key={vehicle.id} className="space-y-1">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-1">
                          <Check className="w-2.5 h-2.5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <p className="text-[9px] text-gray-700 leading-tight">{feature}</p>
                        </div>
                      ))}
                      {vehicle.features.length > 3 && (
                        <p className="text-[9px] text-purple-600 font-semibold">+{vehicle.features.length - 3} more</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {selectedVehicles.map((vehicle) => (
            <Button
              key={vehicle.id}
              onClick={() => onSelectVehicle(vehicle.id)}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl h-11 font-bold hover:from-orange-700 hover:to-amber-700"
            >
              Book
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ))}
        </div>

        {/* Winner Card */}
        {selectedVehicles.find(v => v.recommended) && (
          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-5 border-2 border-yellow-300 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">Best Value</h3>
                <p className="text-xs text-gray-600">Top recommended choice</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-2xl p-4">
              <p className="font-bold text-sm text-gray-900 mb-2">
                {selectedVehicles.find(v => v.recommended)?.name}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-gray-900">
                    {selectedVehicles.find(v => v.recommended)?.rating}
                  </span>
                </div>
                <p className="text-lg font-bold text-orange-600">
                  ₹{selectedVehicles.find(v => v.recommended)?.price.toLocaleString()}/day
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Comparison Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 text-center border border-orange-200">
            <p className="text-2xl font-bold text-orange-600 mb-1">
              ₹{Math.min(...selectedVehicles.map(v => v.price)).toLocaleString()}
            </p>
            <p className="text-xs text-gray-600">Lowest Price</p>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 text-center border border-yellow-200">
            <p className="text-2xl font-bold text-yellow-600 mb-1">
              {Math.max(...selectedVehicles.map(v => v.rating))}
            </p>
            <p className="text-xs text-gray-600">Highest Rating</p>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center border border-purple-200">
            <p className="text-2xl font-bold text-purple-600 mb-1">
              {Math.max(...selectedVehicles.map(v => v.seats))}
            </p>
            <p className="text-xs text-gray-600">Most Seats</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
