import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft,
  Share2,
  Heart,
  Star,
  Users,
  Settings,
  Fuel,
  MapPin,
  Calendar,
  Check,
  ChevronRight,
  ExternalLink,
  Youtube,
  Info,
  Shield,
  Clock
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { VEHICLE_EMOJIS } from '@/app/components/essentials/VehicleEmojiGuide';
import { VehicleFeatureBadge } from '@/app/components/essentials/VehicleEmojiGuide';

interface Screen77WProps {
  onBack: () => void;
  onBookNow: (vehicleId: string) => void;
  vehicleId: string;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

export function Screen77W_VehicleDetails({
  onBack,
  onBookNow,
  vehicleId,
  onGoogleSearch,
  onYouTubeSearch
}: Screen77WProps) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'features' | 'reviews'>('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock vehicle data
  const vehicle = {
    id: vehicleId || '1',
    name: 'Admin SUV Model 1',
    category: 'SUV - 7 Seater',
    price: 2500,
    rating: 4.8,
    reviews: 245,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    year: '2023',
    mileage: '15 km/l',
    luggage: '3 Large Bags',
    description: 'Perfect for family trips and long journeys. This spacious SUV offers comfort, safety, and modern amenities for an unforgettable road trip experience.',
    features: [
      'GPS Navigation System',
      'Bluetooth Connectivity',
      'Dual AC (Front + Rear)',
      'Parking Sensors',
      'Reversing Camera',
      'Cruise Control',
      'Power Windows',
      'Central Locking',
      'Airbags (6)',
      'ABS with EBD'
    ],
    included: [
      'Unlimited Kilometers',
      '24/7 Roadside Assistance',
      'Comprehensive Insurance',
      'Free Pickup/Drop'
    ],
    emoji: VEHICLE_EMOJIS.selfDriveCar
  };

  const reviews = [
    {
      name: 'Admin User 1',
      rating: 5,
      date: 'Dec 2023',
      comment: 'Excellent vehicle for our Kerala trip. Very comfortable and well-maintained.',
      helpful: 45
    },
    {
      name: 'Admin User 2',
      rating: 4.5,
      date: 'Nov 2023',
      comment: 'Great experience overall. The SUV was perfect for mountain roads.',
      helpful: 32
    },
    {
      name: 'Admin User 3',
      rating: 5,
      date: 'Nov 2023',
      comment: 'Smooth booking process and excellent customer service. Highly recommend!',
      helpful: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
      {/* Header with Vehicle Image */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-9xl">{vehicle.emoji}</span>
        </div>

        {/* Floating Header Controls */}
        <div className="absolute top-0 left-0 right-0 px-6 pt-12 flex items-center justify-between z-10">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-900'}`} />
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Share2 className="w-5 h-5 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Recommended Badge */}
        <div className="absolute top-24 right-6">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
            ⭐ Recommended
          </Badge>
        </div>
      </div>

      <div className="px-6 -mt-6 space-y-4">
        {/* Screen Indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <p className="text-xs font-bold text-gray-700">Screen 77W</p>
          </div>
        </div>

        {/* Main Info Card */}
        <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-gray-200 shadow-xl">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{vehicle.name}</h1>
            <p className="text-sm text-gray-600 mb-3">{vehicle.category}</p>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-lg font-bold text-gray-900">{vehicle.rating}</span>
              </div>
              <span className="text-sm text-gray-600">({vehicle.reviews} reviews)</span>
            </div>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-purple-50 rounded-2xl p-3 text-center">
              <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Seats</p>
              <p className="text-sm font-bold text-gray-900">{vehicle.seats}</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-3 text-center">
              <Settings className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Transmission</p>
              <p className="text-sm font-bold text-gray-900">{vehicle.transmission}</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-3 text-center">
              <Fuel className="w-5 h-5 text-green-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Fuel</p>
              <p className="text-sm font-bold text-gray-900">{vehicle.fuel}</p>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-200">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-orange-600">₹{vehicle.price.toLocaleString()}</p>
                <p className="text-sm text-gray-600">per day</p>
              </div>
              <Button
                onClick={() => onBookNow(vehicle.id)}
                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl h-12 px-6 font-bold hover:from-orange-700 hover:to-amber-700"
              >
                Book Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex gap-2 bg-white/60 backdrop-blur-sm rounded-2xl p-1">
          {(['overview', 'features', 'reviews'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                selectedTab === tab
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Description */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-3">About This Vehicle</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{vehicle.description}</p>
            </Card>

            {/* Additional Specs */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-3">Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Year</span>
                  <span className="text-sm font-semibold text-gray-900">{vehicle.year}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Mileage</span>
                  <span className="text-sm font-semibold text-gray-900">{vehicle.mileage}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Luggage Capacity</span>
                  <span className="text-sm font-semibold text-gray-900">{vehicle.luggage}</span>
                </div>
              </div>
            </Card>

            {/* Included Services */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-5 border-2 border-green-200 shadow-lg">
              <h3 className="font-bold text-base text-green-900 mb-3">What's Included</h3>
              <div className="space-y-2">
                {vehicle.included.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {selectedTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-4">Features & Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-purple-50 rounded-xl p-3"
                  >
                    <Check className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {selectedTab === 'reviews' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-sm text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 rounded-lg px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-900">{review.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">{review.comment}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <button className="flex items-center gap-1 hover:text-purple-600">
                    👍 Helpful ({review.helpful})
                  </button>
                </div>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Google & YouTube Discovery */}
        <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-5 border-2 border-orange-300 shadow-xl">
          <p className="text-xs font-bold text-gray-800 mb-3 text-center">
            🔍 Research Real Vehicle Reviews
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onGoogleSearch(`${vehicle.name} review`)}
              className="bg-white border-2 border-blue-400 text-blue-700 px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              Google Search
            </button>
            <button
              onClick={() => onYouTubeSearch(`${vehicle.name} review india`)}
              className="bg-red-600 text-white px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-md"
            >
              <Youtube className="w-4 h-4" />
              YouTube Reviews
            </button>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800">
              This is an <strong>admin-managed placeholder vehicle</strong>. Features and specifications are for demonstration purposes. Use search tools to find real vehicles.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
