import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Search, 
  Filter,
  MapPin,
  Calendar,
  ChevronRight,
  TrendingUp,
  Award,
  Sparkles,
  ExternalLink,
  Youtube,
  Info
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { VEHICLE_EMOJIS } from '@/app/components/essentials/VehicleEmojiGuide';
import { VehicleTypeSelector, VehicleServicesIcons, VehicleJourneySteps } from '@/app/components/essentials/VehicleEmojiGuide';

interface Screen77UProps {
  onBack: () => void;
  onNavigateToListings: (category?: string) => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

export function Screen77U_SelfDriveHub({
  onBack,
  onNavigateToListings,
  onGoogleSearch,
  onYouTubeSearch
}: Screen77UProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const quickActions = [
    {
      title: 'Weekend Getaway',
      subtitle: '2-3 days',
      gradient: 'from-orange-500 to-amber-500',
      icon: '🏖️'
    },
    {
      title: 'Week-long Trip',
      subtitle: '7+ days',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🗺️'
    }
  ];

  const popularVehicles = [
    {
      id: '1',
      name: 'Admin SUV Model 1',
      category: 'SUV',
      price: 2500,
      rating: 4.8,
      image: null,
      emoji: VEHICLE_EMOJIS.selfDriveCar,
      popular: true
    },
    {
      id: '2',
      name: 'Admin Sedan Model 1',
      category: 'Sedan',
      price: 1500,
      rating: 4.6,
      image: null,
      emoji: VEHICLE_EMOJIS.selfDriveCar,
      popular: true
    },
    {
      id: '3',
      name: 'Admin Scooter Model 1',
      category: 'Bike',
      price: 500,
      rating: 4.7,
      image: null,
      emoji: VEHICLE_EMOJIS.twoWheeler,
      popular: true
    },
    {
      id: '4',
      name: 'Admin Electric Car 1',
      category: 'Electric',
      price: 2000,
      rating: 4.9,
      image: null,
      emoji: VEHICLE_EMOJIS.electricVehicle,
      popular: true,
      badge: 'Eco'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
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
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-white text-2xl font-bold">Self-Drive Vehicles</h1>
              <Badge className="bg-yellow-500 text-white border-0 text-[10px]">NEW</Badge>
            </div>
            <p className="text-white/90 text-sm">Rent cars, bikes & scooters</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by destination or vehicle..."
            className="w-full pl-12 pr-12 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Screen Indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <p className="text-xs font-bold text-gray-700">Screen 77U</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigateToListings()}
              className={`bg-gradient-to-br ${action.gradient} rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="text-4xl mb-2">{action.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1">{action.title}</h3>
              <p className="text-white/90 text-xs">{action.subtitle}</p>
            </motion.button>
          ))}
        </div>

        {/* Vehicle Categories */}
        <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-xl">
          <h2 className="font-bold text-base text-gray-900 mb-4">Choose Vehicle Type</h2>
          <VehicleTypeSelector 
            selectedType={selectedCategory}
            onSelectType={(type) => {
              setSelectedCategory(type);
              setTimeout(() => onNavigateToListings(type), 300);
            }}
          />
        </Card>

        {/* Services */}
        <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-xl">
          <h2 className="font-bold text-base text-gray-900 mb-4">Included Services</h2>
          <VehicleServicesIcons />
        </Card>

        {/* Popular Vehicles */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-gray-900">Popular Right Now</h2>
            <Button
              onClick={() => onNavigateToListings()}
              className="bg-white border-2 border-orange-300 text-orange-700 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-orange-50"
            >
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-3">
            {popularVehicles.map((vehicle) => (
              <motion.button
                key={vehicle.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigateToListings()}
                className="w-full text-left"
              >
                <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4">
                    {/* Vehicle Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-5xl">{vehicle.emoji}</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm text-gray-900 mb-1 truncate">{vehicle.name}</h3>
                          <p className="text-xs text-gray-600 mb-1">{vehicle.category}</p>
                          <div className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs font-bold text-gray-900">{vehicle.rating}</span>
                            {vehicle.badge && (
                              <Badge className="bg-green-100 text-green-700 border-0 text-[9px] ml-2">
                                {vehicle.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                        {vehicle.popular && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-[9px] flex-shrink-0">
                            <TrendingUp className="w-2.5 h-2.5 mr-0.5" />
                            Hot
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div>
                          <p className="text-xs text-gray-500">Starting from</p>
                          <p className="text-base font-bold text-orange-600">₹{vehicle.price.toLocaleString()}/day</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Journey Steps */}
        <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-xl">
          <h2 className="font-bold text-base text-gray-900 mb-4">How It Works</h2>
          <VehicleJourneySteps />
        </Card>

        {/* Google & YouTube Discovery */}
        <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-5 border-2 border-orange-300 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <p className="text-xs font-bold text-gray-800">Discover Real Vehicle Rentals</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onGoogleSearch('car rental india')}
              className="bg-white border-2 border-blue-400 text-blue-700 px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              Google Search
            </button>
            <button
              onClick={() => onYouTubeSearch('self drive car rental india')}
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
              All vehicles shown are <strong>admin-managed placeholders</strong>. Use Google Search and YouTube to discover real rental services with verified vehicles and pricing.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
