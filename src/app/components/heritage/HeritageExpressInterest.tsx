import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Calendar,
  Users,
  Heart,
  ChevronRight,
  Star,
  Clock,
  Info,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// HERITAGE EXPRESS INTEREST SCREEN
// Shows destinations under selected theme
// Users can express interest before customization
// Color Scheme: Cream (#FFF8E1), Gold/Beige, Dark Grey
// ========================================

interface HeritageDestination {
  id: string;
  name: string;
  location: string;
  state: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  popularityScore: number;
  bestTime: string;
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  highlights: string[];
  entryFee: number;
  trending: boolean;
}

interface HeritageExpressInterestProps {
  themeId: string;
  themeName: string;
  themeIcon: string;
  themeDescription: string;
  onExpressInterest: (destinationIds: string[]) => void;
  onBack: () => void;
}

export function HeritageExpressInterest({
  themeId,
  themeName,
  themeIcon,
  themeDescription,
  onExpressInterest,
  onBack,
}: HeritageExpressInterestProps) {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  // Mock destinations data (would come from API based on themeId)
  const destinations: HeritageDestination[] = [
    {
      id: 'taj-mahal',
      name: 'Taj Mahal',
      location: 'Agra',
      state: 'Uttar Pradesh',
      description: 'Iconic white marble mausoleum built by Shah Jahan in memory of his wife Mumtaz Mahal',
      image: '🕌',
      rating: 4.8,
      reviews: 125000,
      popularityScore: 98,
      bestTime: 'Oct - Mar',
      duration: '2-3 hours',
      difficulty: 'easy',
      highlights: ['UNESCO Site', 'Mughal Architecture', 'Sunrise View'],
      entryFee: 50,
      trending: true,
    },
    {
      id: 'red-fort',
      name: 'Red Fort',
      location: 'Delhi',
      state: 'Delhi',
      description: 'Historic fortified palace serving as residence of Mughal emperors for 200 years',
      image: '🏰',
      rating: 4.6,
      reviews: 89000,
      popularityScore: 92,
      bestTime: 'Oct - Mar',
      duration: '2-3 hours',
      difficulty: 'easy',
      highlights: ['UNESCO Site', 'Independence Day Venue', 'Light & Sound Show'],
      entryFee: 35,
      trending: true,
    },
    {
      id: 'qutub-minar',
      name: 'Qutub Minar',
      location: 'Delhi',
      state: 'Delhi',
      description: 'Tallest brick minaret in the world, built in early 13th century',
      image: '🗼',
      rating: 4.5,
      reviews: 67000,
      popularityScore: 87,
      bestTime: 'Oct - Mar',
      duration: '1-2 hours',
      difficulty: 'easy',
      highlights: ['UNESCO Site', 'Indo-Islamic Architecture', 'Iron Pillar'],
      entryFee: 30,
      trending: false,
    },
    {
      id: 'hampi',
      name: 'Hampi',
      location: 'Hampi',
      state: 'Karnataka',
      description: 'Ancient city of Vijayanagara Empire with magnificent temple ruins spread over 25 sq km',
      image: '🏛️',
      rating: 4.7,
      reviews: 45000,
      popularityScore: 85,
      bestTime: 'Nov - Feb',
      duration: '2 days',
      difficulty: 'moderate',
      highlights: ['UNESCO Site', 'Temple Ruins', 'Boulder Landscape'],
      entryFee: 40,
      trending: true,
    },
    {
      id: 'ajanta-ellora',
      name: 'Ajanta & Ellora Caves',
      location: 'Aurangabad',
      state: 'Maharashtra',
      description: 'Rock-cut Buddhist, Hindu and Jain cave monuments showcasing ancient Indian art',
      image: '⛰️',
      rating: 4.6,
      reviews: 38000,
      popularityScore: 83,
      bestTime: 'Nov - Mar',
      duration: '1 day',
      difficulty: 'moderate',
      highlights: ['UNESCO Site', 'Cave Paintings', 'Kailasa Temple'],
      entryFee: 40,
      trending: false,
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    if (filterDifficulty === 'all') return true;
    return dest.difficulty === filterDifficulty;
  });

  const toggleDestination = (destinationId: string) => {
    if (selectedDestinations.includes(destinationId)) {
      setSelectedDestinations(selectedDestinations.filter((id) => id !== destinationId));
    } else {
      setSelectedDestinations([...selectedDestinations, destinationId]);
    }
  };

  const handleContinue = () => {
    if (selectedDestinations.length > 0) {
      onExpressInterest(selectedDestinations);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3D0] to-[#FFE8B8]">
      {/* ========================================
          HEADER
      ======================================== */}
      <div className="bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-200 hover:text-[#FFF8E1] mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-lg font-semibold">Back to All Themes</span>
          </button>

          {/* Theme Header */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl text-6xl">
              {themeIcon}
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#FFF8E1] mb-3">
                {themeName}
              </h1>
              <p className="text-2xl text-amber-100">
                {themeDescription}
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-amber-300" />
              <div>
                <p className="text-sm text-amber-200">Destinations</p>
                <p className="text-2xl font-bold text-[#FFF8E1]">{destinations.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-amber-300" />
              <div>
                <p className="text-sm text-amber-200">Avg. Rating</p>
                <p className="text-2xl font-bold text-[#FFF8E1]">4.6</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-amber-300" />
              <div>
                <p className="text-sm text-amber-200">Trending Now</p>
                <p className="text-2xl font-bold text-[#FFF8E1]">{destinations.filter(d => d.trending).length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          FILTER & SELECTION BAR
      ======================================== */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Filter Chips */}
            <div>
              <p className="text-sm font-bold text-gray-600 mb-3">Filter by Difficulty:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'all', label: 'All Sites' },
                  { value: 'easy', label: 'Easy Access' },
                  { value: 'moderate', label: 'Moderate' },
                  { value: 'challenging', label: 'Challenging' },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterDifficulty(filter.value)}
                    className={`px-5 py-3 rounded-xl font-bold text-base border-2 transition-all ${
                      filterDifficulty === filter.value
                        ? 'bg-amber-600 text-white border-amber-700'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-amber-400'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Selection Counter */}
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl px-6 py-4 border-2 border-amber-400">
              <p className="text-sm font-bold text-gray-600 mb-1">Selected</p>
              <p className="text-3xl font-bold text-amber-900">{selectedDestinations.length}</p>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 mb-8 flex items-start gap-4">
          <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              📍 Select Destinations You're Interested In
            </h3>
            <p className="text-base text-gray-700">
              Pick one or more heritage sites to customize your experience. You can add tours, guides,
              and special services in the next step.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================
          DESTINATIONS GRID
      ======================================== */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredDestinations.map((destination) => (
            <DestinationInterestCard
              key={destination.id}
              destination={destination}
              selected={selectedDestinations.includes(destination.id)}
              onToggle={() => toggleDestination(destination.id)}
            />
          ))}
        </div>
      </div>

      {/* ========================================
          STICKY FOOTER - CONTINUE BUTTON
      ======================================== */}
      {selectedDestinations.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-50 to-yellow-50 border-t-3 border-amber-300 p-6 shadow-2xl z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
            <div>
              <p className="text-lg font-bold text-gray-900 mb-1">
                {selectedDestinations.length} Destination{selectedDestinations.length > 1 ? 's' : ''} Selected
              </p>
              <p className="text-base text-gray-600">
                Continue to customize your heritage experience
              </p>
            </div>
            <Button
              onClick={handleContinue}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl"
            >
              Continue to Customize
              <ChevronRight className="ml-3 h-7 w-7" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ========================================
// DESTINATION INTEREST CARD
// ========================================

interface DestinationInterestCardProps {
  destination: HeritageDestination;
  selected: boolean;
  onToggle: () => void;
}

function DestinationInterestCard({ destination, selected, onToggle }: DestinationInterestCardProps) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800 border-green-300',
    moderate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    challenging: 'bg-red-100 text-red-800 border-red-300',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onToggle}
      className={`
        cursor-pointer rounded-2xl overflow-hidden border-3 transition-all
        ${
          selected
            ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-2xl'
            : 'border-amber-200 bg-white hover:border-amber-400 shadow-lg hover:shadow-xl'
        }
      `}
    >
      {/* Header with Icon and Selection Checkbox */}
      <div className="relative bg-gradient-to-br from-amber-100 to-yellow-100 p-8 border-b-2 border-amber-200">
        <div className="flex items-center justify-between">
          <div className="text-8xl">{destination.image}</div>
          <div
            className={`
            w-14 h-14 rounded-full border-3 flex items-center justify-center transition-all
            ${
              selected
                ? 'bg-amber-600 border-amber-700'
                : 'bg-white border-amber-300'
            }
          `}
          >
            {selected ? (
              <Heart className="h-8 w-8 text-white fill-white" />
            ) : (
              <Heart className="h-8 w-8 text-amber-600" />
            )}
          </div>
        </div>

        {/* Trending Badge */}
        {destination.trending && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            TRENDING
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Location */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <MapPin className="h-5 w-5 text-amber-600" />
            <span className="text-base">{destination.location}, {destination.state}</span>
          </div>
          <p className="text-base text-gray-700 line-clamp-2">{destination.description}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-purple-50 rounded-xl p-3 border-2 border-purple-200">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
              <span className="text-lg font-bold text-gray-900">{destination.rating}</span>
            </div>
            <p className="text-xs text-gray-600">{(destination.reviews / 1000).toFixed(0)}k reviews</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-3 border-2 border-blue-200">
            <div className="flex items-center gap-1 mb-1">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-bold text-gray-900">{destination.duration}</span>
            </div>
            <p className="text-xs text-gray-600">Duration</p>
          </div>
          <div className="bg-green-50 rounded-xl p-3 border-2 border-green-200">
            <div className="flex items-center gap-1 mb-1">
              <Sparkles className="h-4 w-4 text-green-600" />
              <span className="text-sm font-bold text-gray-900">₹{destination.entryFee}</span>
            </div>
            <p className="text-xs text-gray-600">Entry</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-semibold border border-amber-300"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Difficulty Badge */}
        <div className={`px-4 py-2 rounded-xl font-bold text-sm border-2 inline-block ${difficultyColors[destination.difficulty]}`}>
          {destination.difficulty.charAt(0).toUpperCase() + destination.difficulty.slice(1)} Access
        </div>
      </div>
    </motion.div>
  );
}
