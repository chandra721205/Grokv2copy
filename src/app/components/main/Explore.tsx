import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Filter, Star, Heart, ChevronRight, Globe, Youtube } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

export function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['All', 'Popular', 'Nearby', 'Top Rated', 'Budget'];
  
  // Admin-managed destinations - placeholders only
  const destinations = [
    { name: 'Admin-Added Destination 1', category: 'Beach & Cruise', price: '₹15,000', rating: 4.8, duration: '3N/4D' },
    { name: 'Admin-Added Destination 2', category: 'Devotional', price: '₹8,000', rating: 4.9, duration: '2N/3D' },
    { name: 'Admin-Added Destination 3', category: 'Adventure', price: '₹35,000', rating: 4.7, duration: '5N/6D' },
    { name: 'Popular Spot A', category: 'Wellness', price: '₹25,000', rating: 4.8, duration: '4N/5D' },
    { name: 'Popular Spot B', category: 'Cultural', price: '₹12,000', rating: 4.6, duration: '2N/3D' },
    { name: 'Location X', category: 'Wellness', price: '₹10,000', rating: 4.9, duration: '3N/4D' },
  ];

  const handleGoogleSearch = () => {
    // Mock Google search functionality
    const query = searchQuery || 'tourist destinations india';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    // Mock YouTube search functionality
    const query = searchQuery || 'travel destinations india';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <h1 className="text-white text-3xl font-bold mb-6">Explore Destinations</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search destinations, activities, interests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 h-12 rounded-full bg-white border-0 shadow-lg"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Filter className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Google Search & YouTube Browse Buttons */}
        <div className="flex gap-3 mb-4">
          <Button
            onClick={handleGoogleSearch}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-10 flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4" />
            Google Search
          </Button>
          <Button
            onClick={handleYouTubeSearch}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-10 flex items-center justify-center gap-2"
          >
            <Youtube className="w-4 h-4" />
            YouTube Browse
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter.toLowerCase())}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeFilter === filter.toLowerCase()
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-white/20 text-white backdrop-blur-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Map Preview */}
      <div className="px-6 -mt-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl h-48 shadow-xl flex items-center justify-center relative overflow-hidden"
        >
          <MapPin className="w-16 h-16 text-white/30 absolute" />
          <div className="text-center text-white z-10">
            <p className="text-sm mb-2">Interactive Map</p>
            <Button 
              onClick={handleGoogleSearch}
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9 px-4"
            >
              Search on Google Maps
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Admin Notice */}
      <div className="px-6 mb-4">
        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="text-xs text-gray-600">
            <strong className="text-blue-600">Note:</strong> Destinations shown are admin-managed placeholders. 
            Use Google Search or YouTube Browse to discover real destinations.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Browse Options</h2>
          <p className="text-gray-600 text-sm">{destinations.length} items</p>
        </div>
        <div className="space-y-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex gap-4 p-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-lg">{dest.name}</h3>
                    <button className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-pink-500" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{dest.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-sm">{dest.rating}</span>
                      <span className="text-gray-500 text-xs ml-1">{dest.duration}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">from</p>
                      <p className="font-bold text-blue-600">{dest.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4 flex gap-2">
                <Button 
                  onClick={handleGoogleSearch}
                  className="flex-1 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-10 flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Google
                </Button>
                <Button 
                  onClick={handleYouTubeSearch}
                  className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-10 flex items-center justify-center gap-2"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}