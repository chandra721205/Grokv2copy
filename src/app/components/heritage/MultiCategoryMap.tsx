import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Navigation, Plus, ChevronRight, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface MultiCategoryMapProps {
  isOpen: boolean;
  onClose: () => void;
  primaryDestination?: {
    name: string;
    category: string;
    location: string;
  };
}

interface NearbyAttraction {
  id: string;
  icon: string;
  category: string;
  name: string;
  distance: string;
  details: string[];
  price?: string;
  gradient: string;
}

interface AgeRecommendation {
  id: string;
  icon: string;
  audience: string;
  recommendation: string;
  gradient: string;
}

export function MultiCategoryMap({ isOpen, onClose, primaryDestination }: MultiCategoryMapProps) {
  const defaultDestination = {
    name: 'Taj Mahal, Agra',
    category: 'Heritage',
    location: 'Agra, Uttar Pradesh',
  };

  const destination = primaryDestination || defaultDestination;

  const nearbyAttractions: NearbyAttraction[] = [
    {
      id: 'cultural',
      icon: '🎭',
      category: 'Cultural',
      name: 'Kalakriti Cultural Show',
      distance: '2km',
      details: ['Traditional dance', '7PM daily', '₹800'],
      gradient: 'from-purple-50 to-pink-50',
    },
    {
      id: 'shopping',
      icon: '🛍️',
      category: 'Shopping',
      name: 'Sadar Bazaar',
      distance: '3km',
      details: ['Marble handicrafts', 'Local cuisine'],
      gradient: 'from-blue-50 to-cyan-50',
    },
    {
      id: 'eco',
      icon: '🌿',
      category: 'Eco Tourism',
      name: 'Keoladeo Bird Sanctuary',
      distance: '55km',
      details: ['UNESCO World Heritage', 'Bird watching'],
      gradient: 'from-green-50 to-emerald-50',
    },
    {
      id: 'accommodation',
      icon: '🏨',
      category: 'Accommodation',
      name: 'Heritage Havelis',
      distance: 'Various',
      details: ['17th-century mansions', '₹3000-8000/night'],
      gradient: 'from-amber-50 to-orange-50',
    },
  ];

  const ageRecommendations: AgeRecommendation[] = [
    {
      id: 'families',
      icon: '👶',
      audience: 'For Families with Kids',
      recommendation: 'Sound & Light Show',
      gradient: 'from-pink-100 to-rose-100',
    },
    {
      id: 'seniors',
      icon: '👵',
      audience: 'For Seniors',
      recommendation: 'Golf Cart Service at Monument',
      gradient: 'from-purple-100 to-violet-100',
    },
    {
      id: 'students',
      icon: '🎓',
      audience: 'For Students',
      recommendation: 'Archaeological Workshop',
      gradient: 'from-blue-100 to-indigo-100',
    },
    {
      id: 'photographers',
      icon: '📸',
      audience: 'For Photographers',
      recommendation: 'Sunrise Photography Pass',
      gradient: 'from-amber-100 to-yellow-100',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-cream-50 to-amber-50 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <Navigation className="h-8 w-8" />
                    Multi-Category Attractions Map
                  </h2>
                  <p className="text-lg text-purple-100">
                    Explore nearby experiences around your heritage destination
                  </p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-full p-3"
                >
                  <X className="h-8 w-8" />
                </Button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-8">
              <div className="space-y-6">
                {/* Primary Destination Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-r from-cream-100 to-amber-100 rounded-2xl border-3 border-amber-500 p-8 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-6xl">📍</div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Primary: {destination.name}
                      </h3>
                      <p className="text-xl font-semibold text-amber-700 mb-3">
                        Category: {destination.category}
                      </p>
                      <p className="text-base text-gray-700 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-red-600" />
                        {destination.location}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Nearby Attractions Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Nearby Attractions
                    </h3>
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      within 50km
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {nearbyAttractions.map((attraction, index) => (
                      <motion.div
                        key={attraction.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`bg-gradient-to-br ${attraction.gradient} rounded-2xl border-3 border-gray-300 p-6 shadow-md hover:shadow-xl transition-all`}
                      >
                        {/* Attraction Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-3">
                            <div className="text-5xl">{attraction.icon}</div>
                            <div>
                              <p className="text-sm font-bold text-purple-600 mb-1">
                                {attraction.category}
                              </p>
                              <h4 className="text-xl font-bold text-gray-900">
                                {attraction.name}
                              </h4>
                            </div>
                          </div>
                          <div className="bg-white px-3 py-1 rounded-full border-2 border-purple-400">
                            <p className="text-sm font-bold text-purple-700 flex items-center gap-1">
                              <Navigation className="h-4 w-4" />
                              {attraction.distance}
                            </p>
                          </div>
                        </div>

                        {/* Details List */}
                        <div className="bg-white rounded-xl p-4 mb-4 border-2 border-gray-200">
                          <ul className="space-y-2">
                            {attraction.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-base text-gray-700">
                                <span className="text-green-600 font-bold">•</span>
                                <span className="font-semibold">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Quick Add Button */}
                        <Button
                          onClick={() => console.log(`Add ${attraction.name} to trip`)}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                        >
                          <Plus className="h-4 w-4" />
                          Add to Trip Plan
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Age-Specific Recommendations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-3 border-indigo-400 p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    Age-Specific Recommendations
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ageRecommendations.map((rec, index) => (
                      <motion.div
                        key={rec.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.05 }}
                        className={`bg-gradient-to-r ${rec.gradient} rounded-xl p-5 border-2 border-gray-300 shadow-md`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{rec.icon}</div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-600 mb-1">
                              {rec.audience}
                            </p>
                            <p className="text-lg font-bold text-gray-900">
                              {rec.recommendation}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Admin Editable Note */}
                  <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4">
                    <p className="text-base text-gray-700">
                      <span className="bg-yellow-200 px-2 py-0.5 rounded font-bold">[Admin: Update This Text]</span>
                      {' '}Recommendations are tailored based on your group profile and can be customized
                    </p>
                  </div>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-3 border-gray-400 p-12 text-center"
                >
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Interactive Map View
                  </h3>
                  <p className="text-base text-gray-600 mb-6">
                    <span className="bg-gray-300 px-2 py-0.5 rounded font-bold">[Admin: Configure Map Integration]</span>
                    {' '}Map will show all nearby attractions with distance markers and navigation options
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button
                      onClick={() => console.log('Open in Google Maps')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-base font-bold"
                    >
                      🔍 Open in Google Maps
                    </Button>
                    <Button
                      onClick={() => console.log('Get Directions')}
                      variant="outline"
                      className="border-3 border-green-600 bg-green-50 text-green-700 hover:bg-green-100 px-6 py-3 rounded-xl text-base font-bold"
                    >
                      🧭 Get Directions
                    </Button>
                  </div>
                </motion.div>

                {/* Footer Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <Button
                    onClick={() => console.log('View All Nearby Attractions')}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-2xl text-lg font-bold shadow-2xl flex items-center justify-center gap-3"
                  >
                    <MapPin className="h-6 w-6" />
                    View All Nearby Attractions
                  </Button>
                  <Button
                    onClick={() => console.log('Add to My Trip Plan')}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 rounded-2xl text-lg font-bold shadow-2xl flex items-center justify-center gap-3"
                  >
                    <Plus className="h-6 w-6" />
                    Add to My Trip Plan
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="border-3 border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-6 rounded-2xl text-lg font-bold"
                  >
                    Close
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
