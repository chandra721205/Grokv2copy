import { motion } from 'motion/react';
import { Star, Users, Settings, Fuel, MapPin, Check, Heart, GitCompare } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

/**
 * VEHICLE CARD COMPONENT - EXPORTABLE ASSET
 * 
 * This is a fully functional, production-ready vehicle card component
 * with 3 variants and 4 states as documented in COMPONENTS_DOCUMENTATION.md
 * 
 * Features:
 * - Grid variant (compact, 2-column layout)
 * - List variant (full-width, horizontal layout)
 * - Featured variant (hero card with large image)
 * - States: default, hovered, selected, compared
 * - Google/YouTube search integration
 * - Compare functionality
 * - Booking CTA
 * 
 * Usage:
 * ```tsx
 * <VehicleCardExport
 *   vehicle={vehicleData}
 *   variant="grid" // or "list" or "featured"
 *   state="default" // or "hovered" or "selected" or "compared"
 *   onSelect={() => console.log('Vehicle selected')}
 *   onCompare={() => console.log('Added to comparison')}
 *   onGoogleSearch={() => window.open('...')}
 *   onYouTubeSearch={() => window.open('...')}
 * />
 * ```
 */

export interface VehicleData {
  id: string;
  name: string;
  category: string;
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
  vehicleType: 'car' | 'bike' | 'electric';
  image?: string;
  mileage?: string;
  year?: string;
}

export interface VehicleCardExportProps {
  vehicle: VehicleData;
  variant?: 'grid' | 'list' | 'featured';
  state?: 'default' | 'hovered' | 'selected' | 'compared';
  onSelect: () => void;
  onCompare?: () => void;
  onGoogleSearch?: () => void;
  onYouTubeSearch?: () => void;
  showCompareButton?: boolean;
  showBookButton?: boolean;
  isCompared?: boolean;
}

export function VehicleCardExport({
  vehicle,
  variant = 'grid',
  state = 'default',
  onSelect,
  onCompare,
  onGoogleSearch,
  onYouTubeSearch,
  showCompareButton = true,
  showBookButton = true,
  isCompared = false
}: VehicleCardExportProps) {
  const getVehicleEmoji = (type: string) => {
    switch (type) {
      case 'car': return '🚗';
      case 'bike': return '🏍️';
      case 'electric': return '⚡';
      default: return '🚙';
    }
  };

  const getStateClasses = () => {
    switch (state) {
      case 'hovered':
        return 'ring-4 ring-orange-400 shadow-2xl scale-105';
      case 'selected':
        return 'ring-4 ring-blue-500 shadow-2xl';
      case 'compared':
        return 'ring-4 ring-purple-500 shadow-2xl';
      default:
        return 'hover:shadow-xl';
    }
  };

  // GRID VARIANT - Compact 2-column layout
  if (variant === 'grid') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        <Card 
          className={`bg-white rounded-3xl overflow-hidden transition-all cursor-pointer ${getStateClasses()}`}
          onClick={onSelect}
        >
          {/* Image/Emoji Section */}
          <div className="relative h-32 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
            <div className="text-6xl">{getVehicleEmoji(vehicle.vehicleType)}</div>
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {vehicle.recommended && (
                <Badge className="bg-yellow-500 text-white border-0 text-[9px]">
                  ⭐ Top Pick
                </Badge>
              )}
              {!vehicle.available && (
                <Badge className="bg-red-500 text-white border-0 text-[9px]">
                  Booked
                </Badge>
              )}
            </div>

            {/* Compare Checkbox */}
            {showCompareButton && onCompare && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCompare();
                }}
                className={`absolute top-2 right-2 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  isCompared 
                    ? 'bg-purple-600 border-purple-600' 
                    : 'bg-white border-gray-300 hover:border-purple-600'
                }`}
              >
                {isCompared && <Check className="w-4 h-4 text-white" />}
              </button>
            )}
          </div>

          {/* Content */}
          <div className="p-3">
            <h3 className="font-bold text-sm mb-1 line-clamp-1">{vehicle.name}</h3>
            <p className="text-xs text-gray-600 mb-2">{vehicle.category}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-semibold">{vehicle.rating}</span>
              <span className="text-xs text-gray-500">({vehicle.reviews})</span>
            </div>

            {/* Specs */}
            <div className="flex items-center gap-3 mb-2 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{vehicle.seats}</span>
              </div>
              <div className="flex items-center gap-1">
                <Settings className="w-3 h-3" />
                <span>{vehicle.transmission}</span>
              </div>
              <div className="flex items-center gap-1">
                <Fuel className="w-3 h-3" />
                <span>{vehicle.fuel}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-lg font-bold text-orange-600">₹{vehicle.price}</p>
                <p className="text-xs text-gray-500">per day</p>
              </div>
            </div>

            {/* Actions */}
            {showBookButton && (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect();
                }}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl h-9 text-xs font-bold hover:from-orange-700 hover:to-amber-700"
                disabled={!vehicle.available}
              >
                {vehicle.available ? 'View Details' : 'Unavailable'}
              </Button>
            )}
          </div>
        </Card>
      </motion.div>
    );
  }

  // LIST VARIANT - Full-width horizontal layout
  if (variant === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Card 
          className={`bg-white rounded-3xl overflow-hidden transition-all cursor-pointer ${getStateClasses()}`}
          onClick={onSelect}
        >
          <div className="flex gap-4 p-4">
            {/* Image */}
            <div className="w-28 h-28 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 relative">
              <div className="text-5xl">{getVehicleEmoji(vehicle.vehicleType)}</div>
              {vehicle.recommended && (
                <Badge className="absolute top-1 left-1 bg-yellow-500 text-white border-0 text-[8px]">
                  ⭐
                </Badge>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1">{vehicle.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{vehicle.category}</p>
                </div>
                {showCompareButton && onCompare && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCompare();
                    }}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      isCompared 
                        ? 'bg-purple-600 border-purple-600' 
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    {isCompared && <Check className="w-4 h-4 text-white" />}
                  </button>
                )}
              </div>

              {/* Rating & Specs */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-semibold">{vehicle.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Users className="w-3 h-3" />
                  <span>{vehicle.seats}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Settings className="w-3 h-3" />
                  <span>{vehicle.transmission}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Fuel className="w-3 h-3" />
                  <span>{vehicle.fuel}</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-orange-600">₹{vehicle.price}</p>
                  <p className="text-xs text-gray-500">per day</p>
                </div>
                {showBookButton && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect();
                    }}
                    className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl h-9 px-6 text-xs font-bold"
                    disabled={!vehicle.available}
                  >
                    {vehicle.available ? 'Book Now' : 'Unavailable'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // FEATURED VARIANT - Hero card with large image
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className={`bg-white rounded-3xl overflow-hidden shadow-2xl ${getStateClasses()}`}>
          {/* Large Image */}
          <div className="relative h-48 bg-gradient-to-br from-orange-200 to-amber-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl">{getVehicleEmoji(vehicle.vehicleType)}</div>
            </div>
            
            {/* Badges */}
            <div className="absolute top-3 left-3">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold border-0">
                ⭐ Most Popular
              </Badge>
            </div>

            {/* Actions */}
            <div className="absolute top-3 right-3 flex gap-2">
              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
              {showCompareButton && onCompare && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCompare();
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    isCompared 
                      ? 'bg-purple-600' 
                      : 'bg-white/90 backdrop-blur-sm'
                  }`}
                >
                  <GitCompare className={`w-5 h-5 ${isCompared ? 'text-white' : 'text-gray-700'}`} />
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold text-xl mb-1">{vehicle.name}</h3>
                <p className="text-sm text-gray-600">{vehicle.category}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">₹{vehicle.price}</p>
                <p className="text-xs text-gray-500">per day</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-sm">{vehicle.rating}</span>
              <span className="text-xs text-gray-500 ml-1">• {vehicle.reviews}+ bookings</span>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-2 text-center">
                <Users className="w-4 h-4 text-gray-700 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-900">{vehicle.seats} Seats</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 text-center">
                <Settings className="w-4 h-4 text-gray-700 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-900">{vehicle.transmission}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-2 text-center">
                <Fuel className="w-4 h-4 text-gray-700 mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-900">{vehicle.fuel}</p>
              </div>
            </div>

            {/* Tags */}
            {vehicle.tags && vehicle.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {vehicle.tags.map((tag, index) => (
                  <Badge key={index} className="bg-orange-100 text-orange-700 border-orange-300 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex gap-2">
              {onGoogleSearch && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onGoogleSearch();
                  }}
                  variant="outline"
                  className="flex-1 rounded-xl h-11 border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50"
                >
                  Google Search
                </Button>
              )}
              {showBookButton && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect();
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl h-11 font-bold hover:from-orange-700 hover:to-amber-700"
                  disabled={!vehicle.available}
                >
                  {vehicle.available ? 'Book Now' : 'Unavailable'}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return null;
}

// Export sample data for testing
export const SAMPLE_VEHICLE_DATA: VehicleData = {
  id: '1',
  name: 'Admin SUV Model 1',
  category: 'SUV - 7 Seater',
  price: 2500,
  rating: 4.8,
  reviews: 245,
  seats: 7,
  transmission: 'Auto',
  fuel: 'Diesel',
  tags: ['Popular', 'Family', 'GPS'],
  features: ['GPS Navigation', 'Bluetooth', 'AC', 'Sunroof'],
  available: true,
  recommended: true,
  vehicleType: 'car',
  mileage: '15 km/l',
  year: '2023'
};
