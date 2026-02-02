import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Filter,
  Grid3x3,
  List,
  SlidersHorizontal,
  ChevronDown,
  Check,
  X
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { VehicleCard } from '@/app/components/essentials/VehicleCard';
import { VEHICLE_EMOJIS } from '@/app/components/essentials/VehicleEmojiGuide';

interface Screen77VProps {
  onBack: () => void;
  onSelectVehicle: (vehicleId: string) => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
  onCompare: (vehicleId: string) => void;
  onViewComparison?: () => void;
  initialCategory?: string;
  comparedVehicles?: Set<string>;
}

export function Screen77V_VehicleListings({
  onBack,
  onSelectVehicle,
  onGoogleSearch,
  onYouTubeSearch,
  onCompare,
  onViewComparison,
  initialCategory,
  comparedVehicles = new Set()
}: Screen77VProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedFuel, setSelectedFuel] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>(Array.from(comparedVehicles));

  const vehicles = [
    {
      id: '1',
      name: 'Admin SUV Model 1',
      category: 'SUV - 7 Seater',
      price: 2500,
      rating: 4.8,
      reviews: 245,
      seats: 7,
      transmission: 'Auto',
      fuel: 'Diesel',
      tags: ['Popular', 'Family'],
      features: ['GPS Navigation', 'Bluetooth', 'AC'],
      available: true,
      recommended: true,
      vehicleType: 'car' as 'car' | 'bike' | 'electric'
    },
    {
      id: '2',
      name: 'Admin Sedan Model 1',
      category: 'Sedan - Compact',
      price: 1500,
      rating: 4.6,
      reviews: 189,
      seats: 5,
      transmission: 'Manual',
      fuel: 'Petrol',
      tags: ['Economy', 'City'],
      features: ['Fuel Efficient', 'AC', 'Music System'],
      available: true,
      recommended: false,
      vehicleType: 'car' as 'car' | 'bike' | 'electric'
    },
    {
      id: '3',
      name: 'Admin Electric Car 1',
      category: 'Electric - Eco',
      price: 2000,
      rating: 4.9,
      reviews: 156,
      seats: 5,
      transmission: 'Auto',
      fuel: 'Electric',
      tags: ['Eco-Friendly', 'Modern'],
      features: ['Fast Charging', 'Silent Drive', 'Tech Display'],
      available: true,
      recommended: true,
      vehicleType: 'electric' as 'car' | 'bike' | 'electric'
    },
    {
      id: '4',
      name: 'Admin Scooter Model 1',
      category: 'Scooter - Urban',
      price: 500,
      rating: 4.7,
      reviews: 298,
      seats: 2,
      transmission: 'Auto',
      fuel: 'Petrol',
      tags: ['Budget', 'Easy'],
      features: ['Helmet Included', 'Storage', 'Lightweight'],
      available: true,
      recommended: false,
      vehicleType: 'bike' as 'car' | 'bike' | 'electric'
    },
    {
      id: '5',
      name: 'Admin Hatchback Model 1',
      category: 'Hatchback - Compact',
      price: 1200,
      rating: 4.5,
      reviews: 176,
      seats: 5,
      transmission: 'Manual',
      fuel: 'Petrol',
      tags: ['Economy', 'Parking'],
      features: ['Compact Size', 'AC', 'USB Charging'],
      available: true,
      recommended: false,
      vehicleType: 'car' as 'car' | 'bike' | 'electric'
    },
    {
      id: '6',
      name: 'Admin Motorcycle Model 1',
      category: 'Motorcycle - Adventure',
      price: 800,
      rating: 4.8,
      reviews: 134,
      seats: 2,
      transmission: 'Manual',
      fuel: 'Petrol',
      tags: ['Adventure', 'Long Distance'],
      features: ['Luggage Carrier', 'Powerful Engine', '2 Helmets'],
      available: false,
      recommended: false,
      vehicleType: 'bike' as 'car' | 'bike' | 'electric'
    }
  ];

  const handleCompareToggle = (vehicleId: string) => {
    if (compareList.includes(vehicleId)) {
      setCompareList(compareList.filter(id => id !== vehicleId));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, vehicleId]);
    }
  };

  const categories = ['all', 'SUV', 'Sedan', 'Electric', 'Bike'];
  const fuelTypes = ['Petrol', 'Diesel', 'Electric'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div>
              <h1 className="text-white text-xl font-bold">Available Vehicles</h1>
              <p className="text-white/90 text-xs">{vehicles.length} vehicles found</p>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-white/20 rounded-xl p-1 backdrop-blur-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                viewMode === 'grid' ? 'bg-white text-purple-600' : 'text-white'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                viewMode === 'list' ? 'bg-white text-purple-600' : 'text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-900">Filters</span>
            {(selectedFuel.length > 0 || selectedCategory !== 'all') && (
              <Badge className="bg-orange-500 text-white border-0 text-[10px]">
                {selectedFuel.length + (selectedCategory !== 'all' ? 1 : 0)}
              </Badge>
            )}
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Screen Indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <p className="text-xs font-bold text-gray-700">Screen 77V</p>
          </div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 border-2 border-gray-200 shadow-xl">
                {/* Category Filter */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-700 mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                          selectedCategory === cat
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {cat === 'all' ? 'All Vehicles' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fuel Type Filter */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-700 mb-3">Fuel Type</p>
                  <div className="space-y-2">
                    {fuelTypes.map((fuel) => (
                      <button
                        key={fuel}
                        onClick={() => {
                          if (selectedFuel.includes(fuel)) {
                            setSelectedFuel(selectedFuel.filter(f => f !== fuel));
                          } else {
                            setSelectedFuel([...selectedFuel, fuel]);
                          }
                        }}
                        className="w-full flex items-center gap-3 bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors"
                      >
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          selectedFuel.includes(fuel)
                            ? 'border-purple-600 bg-purple-600'
                            : 'border-gray-400 bg-white'
                        }`}>
                          {selectedFuel.includes(fuel) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{fuel}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedFuel([]);
                  }}
                  className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-2xl h-11 font-semibold"
                >
                  Clear All Filters
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <Card className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-4 shadow-xl border-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <SlidersHorizontal className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{compareList.length} vehicles selected</p>
                  <p className="text-white/90 text-xs">Ready to compare</p>
                </div>
              </div>
              <Button
                onClick={() => onViewComparison?.()}
                disabled={compareList.length < 2}
                className="bg-white text-orange-600 hover:bg-gray-100 rounded-xl h-10 px-4 font-bold disabled:opacity-50"
              >
                Compare Now
              </Button>
            </div>
          </Card>
        )}

        {/* Vehicle List */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              variant={viewMode}
              state={compareList.includes(vehicle.id) ? 'compared' : 'default'}
              onSelect={() => onSelectVehicle(vehicle.id)}
              onViewDetails={() => onSelectVehicle(vehicle.id)}
              onCompare={() => onCompare(vehicle.id)}
              showCompareButton={true}
              showBookButton={true}
            />
          ))}
        </div>

        {/* Empty State if filtered */}
        {vehicles.length === 0 && (
          <Card className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 shadow-xl text-center">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="font-bold text-base text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-sm text-gray-600 mb-4">Try adjusting your filters</p>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedFuel([]);
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl h-11 px-6 font-semibold"
            >
              Clear Filters
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}