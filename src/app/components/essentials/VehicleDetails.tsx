import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Luggage, 
  Fuel, 
  Settings,
  Heart,
  Share2,
  Shield,
  Check,
  X,
  Wind,
  Bluetooth,
  Navigation,
  Camera,
  Baby,
  MapPin,
  Home,
  Plane,
  Calendar,
  Clock,
  Info,
  CreditCard,
  AlertCircle,
  FileText,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Edit3
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface VehicleDetailsProps {
  onBack: () => void;
  onBookNow?: () => void;
  vehicleId?: string;
}

type TabType = 'overview' | 'features' | 'reviews' | 'policies';

export function VehicleDetails({ onBack, onBookNow, vehicleId = 'v1' }: VehicleDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Mock vehicle data
  const vehicle = {
    id: vehicleId,
    name: 'Maruti Suzuki Swift Dzire',
    category: 'Sedan',
    company: {
      name: 'Zoomcar',
      logo: '🚗',
      rating: 4.6,
      reviews: 2340
    },
    images: ['🚗', '🚙', '🏎️', '🚕'],
    rating: 4.7,
    reviewCount: 120,
    pricePerDay: 1199,
    seats: 5,
    baggage: 2,
    transmission: 'Automatic',
    fuel: 'Petrol',
    
    // Rental details
    rentalDays: 3,
    startDate: 'Dec 15',
    endDate: 'Dec 18',
    
    // Delivery options
    delivery: {
      airport: { available: true, charge: 'Free' },
      hotel: { available: true, charge: 'Free' },
      home: { available: true, charge: 'Free' }
    },
    
    // Insurance & policies
    insurance: {
      included: true,
      type: 'Comprehensive',
      coverage: '₹15 Lakhs'
    },
    cancellation: {
      free: true,
      deadline: '24 hours before pickup'
    },
    
    // Features
    features: [
      { name: 'Air Conditioning', icon: Wind, available: true },
      { name: 'Bluetooth Audio', icon: Bluetooth, available: true },
      { name: 'Rear Camera', icon: Camera, available: true },
      { name: 'Airbags (6)', icon: Shield, available: true },
      { name: 'Child Seat Available', icon: Baby, available: true },
      { name: 'Unlimited Kilometers', icon: TrendingUp, available: true },
      { name: 'GPS Navigation', icon: Navigation, available: true },
      { name: 'USB Charging', icon: Settings, available: true },
      { name: 'Power Windows', icon: Settings, available: true },
      { name: 'Central Locking', icon: Settings, available: true },
    ],
    
    // Reviews
    reviews: [
      {
        id: 1,
        name: 'Rajesh Kumar',
        rating: 5,
        date: '2 days ago',
        comment: 'Excellent car! Very clean and well-maintained. The pickup and drop service was smooth.',
        verified: true,
        hasPhotos: true
      },
      {
        id: 2,
        name: 'Priya Sharma',
        rating: 4,
        date: '1 week ago',
        comment: 'Good experience overall. Car was in good condition. Fuel efficiency was as mentioned.',
        verified: true,
        hasPhotos: false
      },
      {
        id: 3,
        name: 'Amit Patel',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Perfect for city driving. Comfortable seats and good AC. Would rent again!',
        verified: true,
        hasPhotos: true
      },
    ],
    
    // Policies
    policies: {
      driverRequirements: [
        'Age: 21-65 years',
        'Valid driving license (minimum 1 year old)',
        'Government ID proof required'
      ],
      securityDeposit: {
        amount: 0,
        note: 'No deposit with comprehensive insurance'
      },
      fuelPolicy: 'Same fuel level return',
      lateCharges: '₹200 per hour after grace period of 1 hour'
    }
  };

  const totalPrice = vehicle.pricePerDay * vehicle.rentalDays;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'policies', label: 'Policies' },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffedd4] via-[#fffbeb] to-[#fef9c2] pb-40">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-6 pt-12 pb-4 sticky top-0 z-30">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Heart 
                className={`w-5 h-5 ${isFavorite ? 'fill-white text-white' : 'text-white'}`} 
              />
            </button>
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Image Gallery */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-9xl"
          >
            {vehicle.images[currentImageIndex]}
          </motion.div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {vehicle.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Vehicle Name & Rating */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-gray-900">{vehicle.rating}</span>
            <span className="text-sm text-gray-600">({vehicle.reviewCount})</span>
          </div>
          <Badge className="bg-blue-100 text-blue-700 text-xs">
            {vehicle.company.name}
          </Badge>
        </div>

        {/* Quick Specs */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-gray-700">
            <Settings className="w-4 h-4 text-orange-600" />
            <span>{vehicle.transmission}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1 text-gray-700">
            <Fuel className="w-4 h-4 text-orange-600" />
            <span>{vehicle.fuel}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1 text-gray-700">
            <Users className="w-4 h-4 text-orange-600" />
            <span>{vehicle.seats}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1 text-gray-700">
            <Luggage className="w-4 h-4 text-orange-600" />
            <span>{vehicle.baggage}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[88px] z-20 bg-white border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-fit px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-6 space-y-4">
        <AnimatePresence mode="wait">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Rental Company */}
              <Card className="bg-white rounded-3xl p-4 border-2 border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{vehicle.company.logo}</div>
                    <div>
                      <h3 className="font-bold text-base">{vehicle.company.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold">{vehicle.company.rating}</span>
                        <span className="text-xs text-gray-600">({vehicle.company.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Verified</Badge>
                </div>
              </Card>

              {/* Delivery Options */}
              <Card className="bg-white rounded-3xl p-4 border-2 border-gray-200">
                <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  Delivery Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Plane className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">Airport Pickup</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {vehicle.delivery.airport.charge}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-sm">Hotel Delivery</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {vehicle.delivery.hotel.charge}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-orange-600" />
                      <span className="text-sm">Home Delivery</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {vehicle.delivery.home.charge}
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Insurance */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-4 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-base text-green-900">Insurance Included</h3>
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-green-700 mb-1">{vehicle.insurance.type}</p>
                    <p className="text-xs text-green-600">Coverage: {vehicle.insurance.coverage}</p>
                  </div>
                </div>
              </Card>

              {/* Cancellation */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-4 border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-base text-blue-900">Free Cancellation</h3>
                      <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-blue-700">Cancel free up to {vehicle.cancellation.deadline}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* FEATURES TAB */}
          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Card className="bg-white rounded-3xl p-4 border-2 border-gray-200">
                <h3 className="font-bold text-base mb-4">All Features & Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          feature.available 
                            ? 'bg-green-100' 
                            : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            feature.available 
                              ? 'text-green-600' 
                              : 'text-gray-400'
                          }`} />
                        </div>
                        <span className={`text-sm font-medium ${
                          feature.available 
                            ? 'text-gray-900' 
                            : 'text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Average Rating */}
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-4 border-2 border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                      <span className="text-4xl font-bold text-gray-900">{vehicle.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">Based on {vehicle.reviewCount} reviews</p>
                  </div>
                  <Button className="h-10 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl text-sm font-semibold hover:from-orange-700 hover:to-amber-700">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Write Review
                  </Button>
                </div>
              </Card>

              {/* Review Cards */}
              <div className="space-y-3">
                {vehicle.reviews.map((review) => (
                  <Card key={review.id} className="bg-white rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-sm">{review.name}</p>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-700 text-xs">
                              ✓ Verified
                            </Badge>
                          )}
                          {review.hasPhotos && (
                            <Badge variant="secondary" className="text-xs">
                              📷 Photos
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* POLICIES TAB */}
          {activeTab === 'policies' && (
            <motion.div
              key="policies"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Driver Requirements */}
              <Card className="bg-white rounded-3xl p-4 border-2 border-gray-200">
                <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  Driver Requirements
                </h3>
                <div className="space-y-2">
                  {vehicle.policies.driverRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Security Deposit */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-4 border-2 border-purple-200">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base text-purple-900 mb-1">Security Deposit</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-1">₹{vehicle.policies.securityDeposit.amount}</p>
                    <p className="text-xs text-purple-700">{vehicle.policies.securityDeposit.note}</p>
                  </div>
                </div>
              </Card>

              {/* Fuel Policy */}
              <Card className="bg-white rounded-3xl p-4 border-2 border-gray-200">
                <div className="flex items-start gap-3">
                  <Fuel className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base mb-1">Fuel Policy</h3>
                    <p className="text-sm text-gray-700">{vehicle.policies.fuelPolicy}</p>
                  </div>
                </div>
              </Card>

              {/* Late Return Charges */}
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-4 border-2 border-red-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base text-red-900 mb-1">Late Return Charges</h3>
                    <p className="text-sm text-red-700">{vehicle.policies.lateCharges}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Booking Panel */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-200 shadow-2xl z-40">
        <div className="max-w-md mx-auto p-4">
          {/* Dates & Total */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Calendar className="w-4 h-4" />
                <span>{vehicle.rentalDays} days ({vehicle.startDate} - {vehicle.endDate})</span>
              </div>
              <p className="text-xs text-gray-500">
                ₹{vehicle.pricePerDay} × {vehicle.rentalDays} days
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600 mb-1">Total</p>
              <p className="text-2xl font-bold text-orange-600">₹{totalPrice.toLocaleString()}</p>
            </div>
          </div>

          {/* Book Button */}
          <Button
            onClick={onBookNow}
            className="w-full h-14 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-bold text-base hover:from-orange-700 hover:to-amber-700"
          >
            Select This Vehicle
          </Button>

          {/* Price Breakdown Link */}
          <button className="w-full text-center text-xs text-orange-600 font-semibold mt-2">
            View Price Breakdown
          </button>
        </div>
      </div>
    </div>
  );
}
