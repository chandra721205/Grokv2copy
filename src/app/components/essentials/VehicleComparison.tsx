import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Luggage, 
  Fuel, 
  Settings,
  Check,
  X,
  TrendingUp,
  Award,
  DollarSign,
  Shield,
  Calendar,
  MapPin,
  Zap,
  Wind,
  Bluetooth,
  Camera,
  Baby,
  Navigation,
  Info
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface VehicleComparisonProps {
  onBack: () => void;
  onSelectVehicle?: (vehicleId: string) => void;
  vehicleIds?: string[];
}

export function VehicleComparison({ 
  onBack, 
  onSelectVehicle,
  vehicleIds = ['v1', 'v2', 'v3'] 
}: VehicleComparisonProps) {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');

  // Mock vehicle data - in real app, fetch by vehicleIds
  const vehicles = [
    {
      id: 'v1',
      name: 'Maruti Suzuki Swift Dzire',
      category: 'Sedan',
      image: '🚗',
      rating: 4.5,
      reviewCount: 120,
      pricePerDay: 1199,
      seats: 5,
      baggage: 2,
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: 22,
      mileageUnit: 'kmpl',
      company: {
        name: 'Zoomcar',
        rating: 4.6
      },
      features: {
        'Air Conditioning': true,
        'Bluetooth Audio': true,
        'GPS Navigation': true,
        'Rear Camera': false,
        'Airbags (6)': false,
        'Child Seat': true,
        'Unlimited KMs': true,
      },
      deliveryFee: 0,
      insurance: {
        included: true,
        type: 'Comprehensive',
        coverage: '₹15 Lakhs'
      },
      cancellation: {
        free: true,
        deadline: '24 hours'
      }
    },
    {
      id: 'v2',
      name: 'Hyundai Creta',
      category: 'SUV',
      image: '🚙',
      rating: 4.8,
      reviewCount: 256,
      pricePerDay: 1999,
      seats: 7,
      baggage: 4,
      transmission: 'Automatic',
      fuel: 'Diesel',
      mileage: 18,
      mileageUnit: 'kmpl',
      company: {
        name: 'Revv',
        rating: 4.7
      },
      features: {
        'Air Conditioning': true,
        'Bluetooth Audio': true,
        'GPS Navigation': true,
        'Rear Camera': true,
        'Airbags (6)': true,
        'Child Seat': true,
        'Unlimited KMs': true,
      },
      deliveryFee: 0,
      insurance: {
        included: true,
        type: 'Comprehensive',
        coverage: '₹20 Lakhs'
      },
      cancellation: {
        free: true,
        deadline: '48 hours'
      }
    },
    {
      id: 'v3',
      name: 'Maruti Swift',
      category: 'Hatchback',
      image: '🚗',
      rating: 4.6,
      reviewCount: 189,
      pricePerDay: 999,
      seats: 4,
      baggage: 2,
      transmission: 'Manual',
      fuel: 'Petrol',
      mileage: 24,
      mileageUnit: 'kmpl',
      company: {
        name: 'Myles',
        rating: 4.5
      },
      features: {
        'Air Conditioning': true,
        'Bluetooth Audio': true,
        'GPS Navigation': false,
        'Rear Camera': false,
        'Airbags (6)': false,
        'Child Seat': false,
        'Unlimited KMs': true,
      },
      deliveryFee: 200,
      insurance: {
        included: true,
        type: 'Basic',
        coverage: '₹10 Lakhs'
      },
      cancellation: {
        free: true,
        deadline: '24 hours'
      }
    },
  ].filter(v => vehicleIds.includes(v.id));

  // Recommendation engine
  const getRecommendation = () => {
    // Mock user context: family of 4
    const userContext = {
      travelers: 4,
      needsSpace: true,
      budget: 'moderate'
    };

    // Score each vehicle
    const scored = vehicles.map(v => {
      let score = 0;
      let reasons: string[] = [];

      // Space consideration
      if (v.seats >= userContext.travelers + 1) {
        score += 3;
        reasons.push('Adequate seating');
      }
      if (v.baggage >= 3) {
        score += 2;
        reasons.push('Extra luggage space');
      }

      // Features
      if (v.features['Child Seat']) {
        score += 2;
        reasons.push('Child seat available');
      }
      if (v.features['Airbags (6)']) {
        score += 2;
        reasons.push('Enhanced safety');
      }

      // Value
      if (v.deliveryFee === 0) {
        score += 1;
        reasons.push('Free delivery');
      }
      if (v.mileage >= 18) {
        score += 1;
        reasons.push('Good fuel efficiency');
      }

      // Rating
      if (v.rating >= 4.7) {
        score += 1;
        reasons.push('Highly rated');
      }

      return { vehicle: v, score, reasons };
    });

    // Return highest scored
    const best = scored.reduce((prev, current) => 
      current.score > prev.score ? current : prev
    );

    return best;
  };

  const recommendation = getRecommendation();

  // Get best values for highlighting
  const lowestPrice = Math.min(...vehicles.map(v => v.pricePerDay));
  const highestRating = Math.max(...vehicles.map(v => v.rating));
  const bestMileage = Math.max(...vehicles.map(v => v.mileage));
  const mostSeats = Math.max(...vehicles.map(v => v.seats));

  const handleSelectVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    if (onSelectVehicle) {
      onSelectVehicle(vehicleId);
    }
  };

  const allFeatures = Array.from(
    new Set(vehicles.flatMap(v => Object.keys(v.features)))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffedd4] via-[#fffbeb] to-[#fef9c2] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-lg sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Compare Vehicles</h1>
            <p className="text-white/90 text-sm">Side-by-side comparison</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Recommendation Card */}
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 border-2 border-purple-300 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-purple-900 mb-1">Recommended for You</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">{recommendation.vehicle.name}</p>
              <p className="text-xs text-purple-700 mb-2">
                Based on your trip (family of 4):
              </p>
              <div className="space-y-1">
                {recommendation.reasons.slice(0, 3).map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-purple-800">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Vehicle Cards Header */}
        <div className="grid grid-cols-3 gap-3">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {vehicle.id === recommendation.vehicle.id && (
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] z-10">
                  🏆 Best Match
                </Badge>
              )}
              <Card className={`bg-white rounded-2xl overflow-hidden ${
                vehicle.id === recommendation.vehicle.id
                  ? 'border-2 border-purple-500 shadow-xl'
                  : 'border border-gray-200 shadow-lg'
              }`}>
                <div className="relative h-24 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl">{vehicle.image}</div>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-bold text-[10px] text-center mb-1 line-clamp-2 min-h-[28px]">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] font-semibold">{vehicle.rating}</span>
                  </div>
                  <p className="text-center text-base font-bold text-orange-600">₹{vehicle.pricePerDay}</p>
                  <p className="text-center text-[9px] text-gray-600">per day</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <Card className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3">
            <h2 className="font-bold text-white text-base">Detailed Comparison</h2>
          </div>

          {/* Price per Day */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Price/Day</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  <p className={`text-sm font-bold ${
                    vehicle.pricePerDay === lowestPrice
                      ? 'text-green-600'
                      : 'text-gray-900'
                  }`}>
                    ₹{vehicle.pricePerDay}
                  </p>
                  {vehicle.pricePerDay === lowestPrice && (
                    <Badge className="bg-green-100 text-green-700 text-[9px] mt-1">
                      Lowest
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Company Rating */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Rating</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className={`w-3 h-3 ${
                      vehicle.rating === highestRating
                        ? 'text-green-600 fill-green-600'
                        : 'text-yellow-500 fill-yellow-500'
                    }`} />
                    <span className={`text-xs font-semibold ${
                      vehicle.rating === highestRating
                        ? 'text-green-600'
                        : 'text-gray-900'
                    }`}>
                      {vehicle.rating}
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-500">({vehicle.reviewCount})</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fuel Type */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <Fuel className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Fuel Type</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  <p className="text-xs font-semibold text-gray-900">{vehicle.fuel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Transmission</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  <p className="text-xs font-semibold text-gray-900">{vehicle.transmission}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seating Capacity */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Seats</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  <p className={`text-sm font-bold ${
                    vehicle.seats === mostSeats
                      ? 'text-green-600'
                      : 'text-gray-900'
                  }`}>
                    {vehicle.seats}
                  </p>
                  {vehicle.seats === mostSeats && (
                    <Check className="w-4 h-4 text-green-600 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mileage */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Mileage</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  <p className={`text-sm font-bold ${
                    vehicle.mileage === bestMileage
                      ? 'text-green-600'
                      : 'text-gray-900'
                  }`}>
                    {vehicle.mileage}
                  </p>
                  <p className="text-[9px] text-gray-500">{vehicle.mileageUnit}</p>
                  {vehicle.mileage === bestMileage && (
                    <Badge className="bg-green-100 text-green-700 text-[9px] mt-1">
                      Best
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Fee */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Delivery</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  {vehicle.deliveryFee === 0 ? (
                    <>
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                      <p className="text-[9px] text-green-600 font-semibold">Free</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-semibold text-gray-900">₹{vehicle.deliveryFee}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Coverage */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Insurance</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  <p className="text-[10px] font-semibold text-gray-900">{vehicle.insurance.type}</p>
                  <p className="text-[9px] text-gray-600">{vehicle.insurance.coverage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-gray-700">Cancellation</span>
              </div>
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="text-center">
                  {vehicle.cancellation.free ? (
                    <>
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                      <p className="text-[9px] text-green-600 font-semibold">Free</p>
                      <p className="text-[8px] text-gray-500">{vehicle.cancellation.deadline}</p>
                    </>
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Key Features Comparison */}
        <Card className="bg-white rounded-3xl p-4 border-2 border-gray-200">
          <h3 className="font-bold text-base mb-4">Key Features</h3>
          
          <div className="space-y-3">
            {allFeatures.map((feature) => (
              <div key={feature} className="grid grid-cols-4 gap-2 items-center">
                <div className="text-xs font-medium text-gray-700">{feature}</div>
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="flex justify-center">
                    {vehicle.features[feature] ? (
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {vehicles.map((vehicle) => (
            <Button
              key={vehicle.id}
              onClick={() => handleSelectVehicle(vehicle.id)}
              className={`h-12 rounded-2xl font-semibold text-xs ${
                vehicle.id === recommendation.vehicle.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 ring-2 ring-purple-300'
                  : 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700'
              }`}
            >
              {vehicle.id === recommendation.vehicle.id ? '🏆 Select Best' : 'Select'}
            </Button>
          ))}
        </div>

        {/* Back to Listings Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="w-full h-12 rounded-2xl font-semibold border-2 border-gray-300 hover:bg-gray-50"
        >
          Back to Listings
        </Button>

        {/* Admin Disclaimer */}
        <Card className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 border-2 border-gray-300">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700">
              <span className="font-bold">Note:</span> All vehicles shown are admin-managed placeholders. The recommendation engine is for demonstration purposes only.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
