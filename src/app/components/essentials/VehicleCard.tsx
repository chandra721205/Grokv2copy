import { motion } from 'motion/react';
import { 
  Check, 
  ChevronRight, 
  Star, 
  Users, 
  Fuel, 
  Settings, 
  Shield,
  Clock,
  MapPin,
  TrendingUp,
  Award,
  Info
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { VEHICLE_EMOJIS } from '@/app/components/essentials/VehicleEmojiGuide';

interface VehicleCardProps {
  vehicle: {
    id: string;
    name: string;
    category: string;
    image?: string;
    price: number;
    rating: number;
    reviews: number;
    seats: number;
    transmission: string;
    fuel: string;
    tags?: string[];
    features?: string[];
    available?: boolean;
    recommended?: boolean;
    vehicleType?: 'car' | 'bike' | 'electric';
  };
  variant?: 'grid' | 'list' | 'comparison';
  state?: 'default' | 'selected' | 'compared' | 'booked';
  onSelect?: (id: string) => void;
  onViewDetails?: (id: string) => void;
  onCompare?: (id: string) => void;
  showCompareButton?: boolean;
  showBookButton?: boolean;
}

export function VehicleCard({
  vehicle,
  variant = 'grid',
  state = 'default',
  onSelect,
  onViewDetails,
  onCompare,
  showCompareButton = false,
  showBookButton = true,
}: VehicleCardProps) {
  const isSelected = state === 'selected';
  const isCompared = state === 'compared';
  const isBooked = state === 'booked';

  // Get vehicle type emoji
  const getVehicleEmoji = () => {
    if (vehicle.vehicleType === 'bike') return VEHICLE_EMOJIS.twoWheeler;
    if (vehicle.vehicleType === 'electric' || vehicle.fuel?.toLowerCase() === 'electric') return VEHICLE_EMOJIS.electricVehicle;
    return VEHICLE_EMOJIS.selfDriveCar;
  };

  // Grid View
  if (variant === 'grid') {
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect?.(vehicle.id)}
        className="cursor-pointer"
      >
        <Card className={`rounded-3xl overflow-hidden border-2 transition-all ${
          isSelected 
            ? 'border-purple-500 bg-purple-50 shadow-xl' 
            : isCompared
            ? 'border-orange-500 bg-orange-50 shadow-xl'
            : isBooked
            ? 'border-green-500 bg-green-50 shadow-lg'
            : 'border-gray-200 bg-white shadow-lg hover:shadow-xl'
        }`}>
          {/* Image Section */}
          <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200">
            {vehicle.image ? (
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            )}
            
            {/* Status Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {vehicle.recommended && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                  <Award className="w-3 h-3 mr-1" />
                  Recommended
                </Badge>
              )}
              {isBooked && (
                <Badge className="bg-green-600 text-white border-0 shadow-lg">
                  <Check className="w-3 h-3 mr-1" />
                  Booked
                </Badge>
              )}
              {!vehicle.available && !isBooked && (
                <Badge className="bg-red-600 text-white border-0 shadow-lg">
                  Unavailable
                </Badge>
              )}
            </div>

            {/* Compare Checkbox */}
            {showCompareButton && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCompare?.(vehicle.id);
                }}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-lg shadow-lg flex items-center justify-center"
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  isCompared 
                    ? 'border-orange-600 bg-orange-600' 
                    : 'border-gray-400 bg-white'
                }`}>
                  {isCompared && <Check className="w-3 h-3 text-white" />}
                </div>
              </button>
            )}

            {/* Selection Indicator */}
            {isSelected && (
              <div className="absolute top-3 right-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4">
            {/* Header */}
            <div className="mb-3">
              <div className="flex items-start justify-between mb-1">
                <div className="flex-1">
                  <h3 className="font-bold text-base text-gray-900 mb-0.5">{vehicle.name}</h3>
                  <p className="text-xs text-gray-500">{vehicle.category}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold text-gray-900">{vehicle.rating}</span>
                <span className="text-xs text-gray-500">({vehicle.reviews})</span>
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="flex items-center gap-1.5 bg-gray-50 rounded-xl p-2">
                <Users className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-xs font-semibold text-gray-700">{vehicle.seats}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 rounded-xl p-2">
                <Settings className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-semibold text-gray-700">{vehicle.transmission}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 rounded-xl p-2">
                <Fuel className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs font-semibold text-gray-700">{vehicle.fuel}</span>
              </div>
            </div>

            {/* Tags */}
            {vehicle.tags && vehicle.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {vehicle.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} className="bg-purple-100 text-purple-700 text-[10px] border-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Price & Action */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Starting from</p>
                <p className="text-lg font-bold text-purple-600">₹{vehicle.price.toLocaleString()}</p>
                <p className="text-[10px] text-gray-500">per day</p>
              </div>
              {showBookButton && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetails?.(vehicle.id);
                  }}
                  className="h-10 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // List View
  if (variant === 'list') {
    return (
      <motion.div
        whileTap={{ scale: 0.99 }}
        onClick={() => onSelect?.(vehicle.id)}
        className="cursor-pointer"
      >
        <Card className={`rounded-3xl overflow-hidden border-2 transition-all ${
          isSelected 
            ? 'border-purple-500 bg-purple-50 shadow-xl' 
            : isCompared
            ? 'border-orange-500 bg-orange-50 shadow-xl'
            : isBooked
            ? 'border-green-500 bg-green-50 shadow-lg'
            : 'border-gray-200 bg-white shadow-lg hover:shadow-xl'
        }`}>
          <div className="flex gap-4 p-4">
            {/* Image Section */}
            <div className="relative w-32 h-32 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              {vehicle.image ? (
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              )}

              {/* Status Badge */}
              {vehicle.recommended && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-[9px]">
                    <Award className="w-2.5 h-2.5 mr-0.5" />
                    Top
                  </Badge>
                </div>
              )}

              {isBooked && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-green-600 text-white border-0 text-[9px]">
                    <Check className="w-2.5 h-2.5 mr-0.5" />
                    Booked
                  </Badge>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-base text-gray-900 mb-0.5">{vehicle.name}</h3>
                  <p className="text-xs text-gray-500">{vehicle.category}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-900">{vehicle.rating}</span>
                    <span className="text-[10px] text-gray-500">({vehicle.reviews})</span>
                  </div>
                </div>

                {/* Selection/Compare */}
                {isSelected && (
                  <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                {showCompareButton && !isSelected && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCompare?.(vehicle.id);
                    }}
                    className="w-7 h-7 bg-white border-2 rounded-lg shadow-sm flex items-center justify-center"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                      isCompared 
                        ? 'border-orange-600 bg-orange-600' 
                        : 'border-gray-400 bg-white'
                    }`}>
                      {isCompared && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                  </button>
                )}
              </div>

              {/* Specs Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                  <span className="text-xs font-semibold text-gray-700">{vehicle.seats} seats</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-xs font-semibold text-gray-700">{vehicle.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs font-semibold text-gray-700">{vehicle.fuel}</span>
                </div>
              </div>

              {/* Features */}
              {vehicle.features && vehicle.features.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} className="bg-blue-50 text-blue-700 text-[10px] border-0">
                      {feature}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Price & Action */}
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200">
                <div>
                  <p className="text-[10px] text-gray-500">Starting from</p>
                  <p className="text-lg font-bold text-purple-600">₹{vehicle.price.toLocaleString()}<span className="text-xs text-gray-500">/day</span></p>
                </div>
                {showBookButton && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetails?.(vehicle.id);
                    }}
                    className="h-9 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm hover:from-purple-700 hover:to-pink-700"
                  >
                    Book Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Comparison View
  if (variant === 'comparison') {
    return (
      <div className="flex flex-col h-full">
        <Card className={`rounded-3xl overflow-hidden border-2 flex-1 flex flex-col ${
          isSelected 
            ? 'border-purple-500 bg-purple-50 shadow-xl' 
            : 'border-gray-200 bg-white shadow-lg'
        }`}>
          {/* Image Section */}
          <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200">
            {vehicle.image ? (
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            )}

            {vehicle.recommended && (
              <div className="absolute top-2 left-2">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-[9px]">
                  <Award className="w-2.5 h-2.5 mr-0.5" />
                  Best
                </Badge>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4 flex-1 flex flex-col">
            {/* Name & Category */}
            <div className="mb-3 text-center">
              <h3 className="font-bold text-sm text-gray-900 mb-0.5">{vehicle.name}</h3>
              <p className="text-[10px] text-gray-500">{vehicle.category}</p>
            </div>

            {/* Price */}
            <div className="text-center mb-4 pb-3 border-b border-gray-200">
              <p className="text-xl font-bold text-purple-600">₹{vehicle.price.toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">per day</p>
            </div>

            {/* Specs List */}
            <div className="space-y-2.5 flex-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900">{vehicle.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Seats</span>
                <span className="font-semibold text-gray-900">{vehicle.seats}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Transmission</span>
                <span className="font-semibold text-gray-900">{vehicle.transmission}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Fuel Type</span>
                <span className="font-semibold text-gray-900">{vehicle.fuel}</span>
              </div>
              
              {/* Features as checkmarks */}
              {vehicle.features && vehicle.features.length > 0 && (
                <>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <p className="text-[10px] text-gray-500 mb-2">Features</p>
                  </div>
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-600" />
                      <span className="text-[10px] text-gray-700">{feature}</span>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Select Button */}
            <Button
              onClick={() => onSelect?.(vehicle.id)}
              className={`w-full h-10 rounded-xl font-semibold mt-4 ${
                isSelected
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              }`}
            >
              {isSelected ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Selected
                </>
              ) : (
                'Select This'
              )}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}