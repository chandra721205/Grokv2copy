import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Search, 
  Star,
  Truck,
  Headphones,
  Shield,
  Infinity,
  Smartphone,
  FileText,
  Car,
  Grid3x3,
  Filter,
  GitCompare,
  ShoppingCart
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface SelfDriveVehiclesProps {
  onBack: () => void;
  onNavigateToListings?: () => void;
  onNavigateToBooking?: () => void;
}

export function SelfDriveVehicles({ 
  onBack, 
  onNavigateToListings, 
  onNavigateToBooking 
}: SelfDriveVehiclesProps) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedCarType, setSelectedCarType] = useState<string>('');
  const [selectedBikeType, setSelectedBikeType] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'browse' | 'filters' | 'compare' | 'book'>('browse');

  const carTypes = ['SUV', 'Sedan', 'Hatchback', 'Luxury'];
  const bikeTypes = ['Scooter', 'Motorcycle', 'E-bike'];
  const priceRanges = ['Budget', 'Standard', 'Premium'];
  const transmissions = ['Automatic', 'Manual'];

  const categories = [
    {
      id: 'economy',
      name: 'ECONOMY CARS',
      price: '999',
      emoji: '🚗',
      subtitle: 'Fuel efficient',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'suv',
      name: 'SUVs & 4x4',
      price: '1,999',
      emoji: '🚙',
      subtitle: 'Family & adventure',
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'premium',
      name: 'PREMIUM CARS',
      price: '3,999',
      emoji: '🏎️',
      subtitle: 'Luxury experience',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'two-wheeler',
      name: 'TWO-WHEELERS',
      price: '299',
      emoji: '🛵',
      subtitle: 'City exploration',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Free Delivery',
      subtitle: 'At Airport/Hotel',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Headphones,
      title: '24/7 Roadside',
      subtitle: 'Assistance',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Zero Security',
      subtitle: 'Deposit',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Infinity,
      title: 'Unlimited',
      subtitle: 'Kilometers',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const steps = [
    { icon: Smartphone, title: 'Book online', step: '1' },
    { icon: FileText, title: 'Upload license', step: '2' },
    { icon: Car, title: 'Drive away', step: '3' }
  ];

  const handleSearch = () => {
    if (onNavigateToListings) {
      onNavigateToListings();
    }
  };

  const handleNavigateToListings = () => {
    if (onNavigateToListings) {
      onNavigateToListings();
    }
  };

  const handleNavigateToBooking = () => {
    if (onNavigateToBooking) {
      onNavigateToBooking();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffedd4] via-[#fffbeb] to-[#fef9c2] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Self Drive Vehicles</h1>
            <p className="text-white/90 text-sm">Rent cars, bikes, scooters for your trip</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-8 space-y-6">
        {/* Search Bar - Sticky */}
        <Card className="bg-white rounded-3xl p-4 shadow-xl sticky top-4 z-20">
          <div className="space-y-3">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-600" />
              <Input
                type="text"
                placeholder="Pick-up location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="pl-11 pr-4 h-12 rounded-2xl bg-gray-50 border-gray-200 text-sm"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="pl-10 pr-3 h-11 rounded-2xl bg-gray-50 border-gray-200 text-xs"
                  placeholder="From"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="pl-10 pr-3 h-11 rounded-2xl bg-gray-50 border-gray-200 text-xs"
                  placeholder="To"
                />
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              className="w-full h-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:from-orange-700 hover:to-amber-700"
            >
              <Search className="w-5 h-5" />
              Search
            </Button>
          </div>
        </Card>

        {/* Quick Filters - Horizontal Scroll */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-700">Quick Filters</h3>
          
          {/* Car Type */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-600">Car Type</p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {carTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedCarType === type ? 'default' : 'outline'}
                  className={`cursor-pointer px-4 py-2 whitespace-nowrap ${
                    selectedCarType === type 
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0' 
                      : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setSelectedCarType(type === selectedCarType ? '' : type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bike Type */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-600">Bike Type</p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {bikeTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedBikeType === type ? 'default' : 'outline'}
                  className={`cursor-pointer px-4 py-2 whitespace-nowrap ${
                    selectedBikeType === type 
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0' 
                      : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setSelectedBikeType(type === selectedBikeType ? '' : type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-600">Price Range</p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {priceRanges.map((range) => (
                <Badge
                  key={range}
                  variant={selectedPriceRange === range ? 'default' : 'outline'}
                  className={`cursor-pointer px-4 py-2 whitespace-nowrap ${
                    selectedPriceRange === range 
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0' 
                      : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setSelectedPriceRange(range === selectedPriceRange ? '' : range)}
                >
                  {range}
                </Badge>
              ))}
            </div>
          </div>

          {/* Transmission */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-600">Transmission</p>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {transmissions.map((trans) => (
                <Badge
                  key={trans}
                  variant={selectedTransmission === trans ? 'default' : 'outline'}
                  className={`cursor-pointer px-4 py-2 whitespace-nowrap ${
                    selectedTransmission === trans 
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0' 
                      : 'bg-white border-gray-300'
                  }`}
                  onClick={() => setSelectedTransmission(trans === selectedTransmission ? '' : trans)}
                >
                  {trans}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Vehicle - Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl overflow-hidden shadow-lg border-2 border-orange-200">
            <div className="relative h-48 bg-gradient-to-br from-orange-200 to-amber-200">
              <div className="absolute top-3 left-3">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold">
                  ⭐ Most Popular
                </Badge>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">🚙</div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-lg">Hyundai Creta</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">4.8</span>
                    <span className="text-xs text-gray-500 ml-1">• 200+ bookings</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">₹1,999</p>
                  <p className="text-xs text-gray-600">per day</p>
                </div>
              </div>
              <Button
                onClick={handleNavigateToBooking}
                className="w-full mt-3 h-11 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-semibold hover:from-orange-700 hover:to-amber-700"
              >
                Book Now
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Categories Grid 2x2 */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-700">Vehicle Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={handleNavigateToListings}
                className="cursor-pointer"
              >
                <Card className={`${category.bgColor} rounded-3xl p-4 border-2 ${category.borderColor} hover:shadow-lg transition-shadow`}>
                  <div className="text-center">
                    <div className="text-5xl mb-2">{category.emoji}</div>
                    <h4 className="font-bold text-sm mb-1">{category.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">{category.subtitle}</p>
                    <p className="text-lg font-bold text-gray-900">₹{category.price}<span className="text-xs font-normal text-gray-600">/day</span></p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Benefits */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-700">Why Choose Us</h3>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-2`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs font-bold text-gray-900">{benefit.title}</p>
                      <p className="text-xs text-gray-600">{benefit.subtitle}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* How It Works - 3 Steps */}
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-5 border-2 border-blue-200">
          <h3 className="text-sm font-bold text-gray-800 mb-4 text-center">How It Works</h3>
          <div className="space-y-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-600 text-white text-xs">Step {step.step}</Badge>
                      <p className="font-semibold text-sm text-gray-900">{step.title}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-8 bg-blue-300 ml-6" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </Card>

        {/* Admin Disclaimer */}
        <Card className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 border-2 border-gray-300">
          <p className="text-xs text-gray-700 text-center">
            <span className="font-bold">Note:</span> All vehicles shown are admin-managed placeholders. Use the browse and booking features to explore available options.
          </p>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-4 gap-1 p-2 max-w-md mx-auto">
          <button
            onClick={() => {
              setActiveTab('browse');
              handleNavigateToListings();
            }}
            className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-colors ${
              activeTab === 'browse' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Grid3x3 className="w-5 h-5 mb-1" />
            <span className="text-xs font-semibold">Browse</span>
          </button>

          <button
            onClick={() => setActiveTab('filters')}
            className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-colors ${
              activeTab === 'filters' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Filter className="w-5 h-5 mb-1" />
            <span className="text-xs font-semibold">Filters</span>
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-colors ${
              activeTab === 'compare' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <GitCompare className="w-5 h-5 mb-1" />
            <span className="text-xs font-semibold">Compare</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('book');
              handleNavigateToBooking();
            }}
            className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-colors ${
              activeTab === 'book' 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ShoppingCart className="w-5 h-5 mb-1" />
            <span className="text-xs font-semibold">Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
