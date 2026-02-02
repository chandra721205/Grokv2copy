import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Luggage, 
  Fuel, 
  Settings,
  Filter,
  SlidersHorizontal,
  Heart,
  MapPin,
  Shield,
  Zap,
  Grid3x3,
  List,
  Map as MapIcon,
  ChevronDown,
  X,
  Check,
  TrendingUp,
  DollarSign,
  Wind,
  Bluetooth,
  Baby,
  Navigation
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface VehicleListingsProps {
  onBack: () => void;
  onSelectVehicle?: (vehicleId: string) => void;
  onViewDetails?: (vehicleId: string) => void;
  onCompareVehicles?: (vehicleIds: string[]) => void;
}

export function VehicleListings({ 
  onBack, 
  onSelectVehicle,
  onViewDetails,
  onCompareVehicles 
}: VehicleListingsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('list');
  const [sortBy, setSortBy] = useState<'price-low' | 'rating' | 'popular'>('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [compareList, setCompareList] = useState<Set<string>>(new Set());
  const [showComparePanel, setShowComparePanel] = useState(false);

  // Filter states
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<Set<string>>(new Set());
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<Set<string>>(new Set());
  const [selectedTransmissions, setSelectedTransmissions] = useState<Set<string>>(new Set());
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 5000]);
  const [selectedCompanies, setSelectedCompanies] = useState<Set<string>>(new Set());
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());

  const vehicles = [
    {
      id: 'v1',
      name: 'Maruti Suzuki Swift Dzire',
      category: 'Sedan',
      image: '🚗',
      rating: 4.5,
      reviews: 120,
      seats: 5,
      baggage: 2,
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '22 kmpl',
      pricePerDay: 1199,
      company: 'Zoomcar',
      features: ['AC', 'Bluetooth', 'Power Windows'],
      popular: true,
      electric: false,
      insurance: true
    },
    {
      id: 'v2',
      name: 'Hyundai Creta',
      category: 'SUV',
      image: '🚙',
      rating: 4.8,
      reviews: 256,
      seats: 5,
      baggage: 3,
      transmission: 'Automatic',
      fuel: 'Diesel',
      mileage: '18 kmpl',
      pricePerDay: 1999,
      company: 'Revv',
      features: ['GPS Navigation', 'Bluetooth', 'Backup Camera', 'Sunroof'],
      popular: true,
      electric: false,
      insurance: true
    },
    {
      id: 'v3',
      name: 'Maruti Swift',
      category: 'Hatchback',
      image: '🚗',
      rating: 4.6,
      reviews: 189,
      seats: 4,
      baggage: 2,
      transmission: 'Manual',
      fuel: 'Petrol',
      mileage: '24 kmpl',
      pricePerDay: 999,
      company: 'Myles',
      features: ['AC', 'Music System', 'Power Windows'],
      popular: true,
      electric: false,
      insurance: true
    },
    {
      id: 'v4',
      name: 'Toyota Fortuner',
      category: 'SUV',
      image: '🚙',
      rating: 4.9,
      reviews: 142,
      seats: 7,
      baggage: 5,
      transmission: 'Automatic',
      fuel: 'Diesel',
      mileage: '15 kmpl',
      pricePerDay: 3999,
      company: 'Zoomcar',
      features: ['Leather Seats', '4WD', 'Sunroof', 'Advanced Safety'],
      popular: false,
      electric: false,
      insurance: true
    },
    {
      id: 'v5',
      name: 'Tata Nexon EV',
      category: 'SUV',
      image: '⚡',
      rating: 4.5,
      reviews: 87,
      seats: 5,
      baggage: 3,
      transmission: 'Automatic',
      fuel: 'Electric',
      mileage: '312 km range',
      pricePerDay: 1799,
      company: 'Revv',
      features: ['Fast Charging', 'Eco Mode', 'Connected App'],
      popular: false,
      electric: true,
      insurance: true
    },
    {
      id: 'v6',
      name: 'Mahindra Thar',
      category: '4x4',
      image: '🚙',
      rating: 4.8,
      reviews: 176,
      seats: 4,
      baggage: 2,
      transmission: 'Manual',
      fuel: 'Diesel',
      mileage: '16 kmpl',
      pricePerDay: 2999,
      company: 'Myles',
      features: ['4x4', 'Off-Road Ready', 'Convertible Top'],
      popular: true,
      electric: false,
      insurance: true
    },
    {
      id: 'v7',
      name: 'Honda City',
      category: 'Sedan',
      image: '🚗',
      rating: 4.7,
      reviews: 198,
      seats: 5,
      baggage: 3,
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '18 kmpl',
      pricePerDay: 1599,
      company: 'Zoomcar',
      features: ['Cruise Control', 'Touchscreen', 'Rear Camera'],
      popular: true,
      electric: false,
      insurance: true
    },
    {
      id: 'v8',
      name: 'Kia Seltos',
      category: 'SUV',
      image: '🚙',
      rating: 4.6,
      reviews: 134,
      seats: 5,
      baggage: 3,
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '17 kmpl',
      pricePerDay: 2199,
      company: 'Revv',
      features: ['Ventilated Seats', 'Wireless Charging', 'Bose Sound'],
      popular: false,
      electric: false,
      insurance: true
    },
  ];

  const filterVehicles = () => {
    return vehicles.filter(vehicle => {
      // Vehicle type filter
      if (selectedVehicleTypes.size > 0 && !selectedVehicleTypes.has(vehicle.category)) {
        return false;
      }
      // Fuel type filter
      if (selectedFuelTypes.size > 0 && !selectedFuelTypes.has(vehicle.fuel)) {
        return false;
      }
      // Transmission filter
      if (selectedTransmissions.size > 0 && !selectedTransmissions.has(vehicle.transmission)) {
        return false;
      }
      // Price range filter
      if (vehicle.pricePerDay < priceRange[0] || vehicle.pricePerDay > priceRange[1]) {
        return false;
      }
      // Company filter
      if (selectedCompanies.size > 0 && !selectedCompanies.has(vehicle.company)) {
        return false;
      }
      // Features filter
      if (selectedFeatures.size > 0) {
        const hasAllFeatures = Array.from(selectedFeatures).every(feature =>
          vehicle.features.some(vf => vf.toLowerCase().includes(feature.toLowerCase()))
        );
        if (!hasAllFeatures) return false;
      }
      return true;
    });
  };

  const sortedVehicles = [...filterVehicles()].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricePerDay - b.pricePerDay;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    }
  });

  const toggleFavorite = (vehicleId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(vehicleId)) {
        newFavorites.delete(vehicleId);
      } else {
        newFavorites.add(vehicleId);
      }
      return newFavorites;
    });
  };

  const toggleCompare = (vehicleId: string) => {
    setCompareList(prev => {
      const newCompareList = new Set(prev);
      if (newCompareList.has(vehicleId)) {
        newCompareList.delete(vehicleId);
      } else {
        if (newCompareList.size < 3) {
          newCompareList.add(vehicleId);
        } else {
          alert('You can compare up to 3 vehicles at a time');
        }
      }
      if (newCompareList.size > 0) {
        setShowComparePanel(true);
      } else {
        setShowComparePanel(false);
      }
      return newCompareList;
    });
  };

  const handleCompare = () => {
    if (onCompareVehicles && compareList.size >= 2) {
      onCompareVehicles(Array.from(compareList));
    }
  };

  const toggleFilter = (set: Set<string>, setState: (value: Set<string>) => void, value: string) => {
    const newSet = new Set(set);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setState(newSet);
  };

  const clearFilters = () => {
    setSelectedVehicleTypes(new Set());
    setSelectedFuelTypes(new Set());
    setSelectedTransmissions(new Set());
    setPriceRange([500, 5000]);
    setSelectedCompanies(new Set());
    setSelectedFeatures(new Set());
  };

  const handleViewDetails = (vehicleId: string) => {
    if (onViewDetails) {
      onViewDetails(vehicleId);
    }
  };

  const renderVehicleCard = (vehicle: any, index: number) => (
    <motion.div
      key={vehicle.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className={`bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all ${
        viewMode === 'list' ? 'rounded-3xl' : 'rounded-2xl'
      }`}>
        {/* Vehicle Image & Badges */}
        <div className={`relative bg-gradient-to-br from-gray-100 to-gray-200 ${
          viewMode === 'list' ? 'h-40' : 'h-32'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={viewMode === 'list' ? 'text-7xl' : 'text-5xl'}>{vehicle.image}</div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {vehicle.popular && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-xs">
                ⭐ Popular
              </Badge>
            )}
            {vehicle.electric && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xs">
                ⚡ Electric
              </Badge>
            )}
          </div>

          {/* Favorite & Compare Buttons */}
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={() => toggleFavorite(vehicle.id)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            >
              <Heart 
                className={`w-4 h-4 ${
                  favorites.has(vehicle.id) 
                    ? 'text-red-500 fill-red-500' 
                    : 'text-gray-400'
                }`} 
              />
            </button>
            <button
              onClick={() => toggleCompare(vehicle.id)}
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform ${
                compareList.has(vehicle.id)
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-400'
              }`}
            >
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Vehicle Info */}
        <div className={viewMode === 'list' ? 'p-4' : 'p-3'}>
          {/* Name & Category */}
          <div className="mb-2">
            <h3 className="font-bold text-base mb-1">{vehicle.name}</h3>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>{vehicle.category}</span>
              <span>•</span>
              <span>{vehicle.transmission}</span>
              <span>•</span>
              <span>{vehicle.fuel}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">{vehicle.rating}</span>
            <span className="text-xs text-gray-500">({vehicle.reviews} reviews)</span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{vehicle.seats} Seats</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Wind className="w-4 h-4" />
              <span>AC</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Fuel className="w-4 h-4" />
              <span>{vehicle.mileage}</span>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-orange-600">₹{vehicle.pricePerDay}</p>
              <p className="text-xs text-gray-600">per day</p>
            </div>
            <Button
              onClick={() => handleViewDetails(vehicle.id)}
              className="h-10 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold text-sm hover:from-orange-700 hover:to-amber-700"
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffedd4] via-[#fffbeb] to-[#fef9c2] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-lg sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Available Vehicles</h1>
            <p className="text-white/90 text-sm">{sortedVehicles.length} vehicles found</p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm relative"
          >
            <Filter className="w-5 h-5 text-white" />
            {(selectedVehicleTypes.size + selectedFuelTypes.size + selectedTransmissions.size + selectedCompanies.size + selectedFeatures.size) > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                {selectedVehicleTypes.size + selectedFuelTypes.size + selectedTransmissions.size + selectedCompanies.size + selectedFeatures.size}
              </span>
            )}
          </button>
        </div>

        {/* View Toggle & Sort */}
        <div className="flex items-center justify-between gap-3">
          {/* View Toggle */}
          <div className="flex gap-1 bg-white/20 rounded-xl p-1 backdrop-blur-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-white text-orange-600' 
                  : 'text-white/80'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-white text-orange-600' 
                  : 'text-white/80'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'map' 
                  ? 'bg-white text-orange-600' 
                  : 'text-white/80'
              }`}
            >
              <MapIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex-1 max-w-xs">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full h-10 bg-white/20 backdrop-blur-sm text-white rounded-xl px-3 text-sm border-0 outline-none"
            >
              <option value="popular" className="text-gray-900">Sort: Popularity</option>
              <option value="price-low" className="text-gray-900">Sort: Price (Low-High)</option>
              <option value="rating" className="text-gray-900">Sort: Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {showFilters && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto shadow-2xl"
            >
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Vehicle Type */}
                <div>
                  <h3 className="font-bold text-sm mb-3">Vehicle Type</h3>
                  <div className="space-y-2">
                    {['Sedan', 'SUV', 'Hatchback', '4x4'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedVehicleTypes.has(type)}
                          onChange={() => toggleFilter(selectedVehicleTypes, setSelectedVehicleTypes, type)}
                          className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Type */}
                <div>
                  <h3 className="font-bold text-sm mb-3">Fuel Type</h3>
                  <div className="space-y-2">
                    {['Petrol', 'Diesel', 'Electric', 'CNG'].map(fuel => (
                      <label key={fuel} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFuelTypes.has(fuel)}
                          onChange={() => toggleFilter(selectedFuelTypes, setSelectedFuelTypes, fuel)}
                          className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm">{fuel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Transmission */}
                <div>
                  <h3 className="font-bold text-sm mb-3">Transmission</h3>
                  <div className="space-y-2">
                    {['Automatic', 'Manual'].map(trans => (
                      <label key={trans} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTransmissions.has(trans)}
                          onChange={() => toggleFilter(selectedTransmissions, setSelectedTransmissions, trans)}
                          className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm">{trans}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-bold text-sm mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-orange-600"
                    />
                  </div>
                </div>

                {/* Rental Company */}
                <div>
                  <h3 className="font-bold text-sm mb-3">Rental Company</h3>
                  <div className="space-y-2">
                    {['Zoomcar', 'Revv', 'Myles'].map(company => (
                      <label key={company} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCompanies.has(company)}
                          onChange={() => toggleFilter(selectedCompanies, setSelectedCompanies, company)}
                          className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm">{company}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-bold text-sm mb-3">Features</h3>
                  <div className="space-y-2">
                    {['AC', 'Bluetooth', 'GPS', 'Sunroof', '4WD'].map(feature => (
                      <label key={feature} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.has(feature)}
                          onChange={() => toggleFilter(selectedFeatures, setSelectedFeatures, feature)}
                          className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="h-11 rounded-xl border-2 border-gray-300"
                  >
                    Clear All
                  </Button>
                  <Button
                    onClick={() => setShowFilters(false)}
                    className="h-11 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-amber-700"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Vehicle List */}
      <div className={`px-6 mt-6 ${
        viewMode === 'grid' 
          ? 'grid grid-cols-2 gap-3' 
          : 'space-y-4'
      } ${showComparePanel ? 'pb-32' : 'pb-6'}`}>
        {viewMode === 'map' ? (
          <div className="bg-white rounded-3xl p-8 text-center">
            <MapIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Map View</h3>
            <p className="text-sm text-gray-600">
              Interactive map showing vehicle locations coming soon
            </p>
          </div>
        ) : (
          sortedVehicles.map((vehicle, index) => renderVehicleCard(vehicle, index))
        )}
      </div>

      {/* Compare Panel (Bottom Sheet) */}
      <AnimatePresence>
        {showComparePanel && compareList.size > 0 && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-200 shadow-2xl z-40 rounded-t-3xl"
          >
            <div className="p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">Compare Vehicles</h3>
                  <p className="text-xs text-gray-600">
                    {compareList.size} of 3 selected
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCompareList(new Set());
                    setShowComparePanel(false);
                  }}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Selected Vehicles */}
              <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide">
                {Array.from(compareList).map(vehicleId => {
                  const vehicle = vehicles.find(v => v.id === vehicleId);
                  if (!vehicle) return null;
                  return (
                    <div key={vehicleId} className="bg-gray-50 rounded-2xl p-3 min-w-[120px] relative">
                      <button
                        onClick={() => toggleCompare(vehicleId)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                      <div className="text-4xl text-center mb-2">{vehicle.image}</div>
                      <p className="text-xs font-semibold text-center">{vehicle.name}</p>
                      <p className="text-xs text-orange-600 font-bold text-center mt-1">
                        ₹{vehicle.pricePerDay}/day
                      </p>
                    </div>
                  );
                })}
              </div>

              <Button
                onClick={handleCompare}
                disabled={compareList.size < 2}
                className="w-full h-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-bold hover:from-orange-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Compare {compareList.size} Vehicles
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
