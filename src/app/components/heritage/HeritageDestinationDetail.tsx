import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Star,
  Users,
  GraduationCap,
  UserCheck,
  Accessibility,
  Shield,
  ChevronRight,
  Info,
  Sparkles,
  Tag,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// HERITAGE DESTINATION DETAIL PAGE
// With Concession & Discount Widget
// Color Scheme: Cream (#FFF8E1), Gold/Beige, Dark Grey
// ========================================

interface Destination {
  id: string;
  name: string;
  location: string;
  state: string;
  description: string;
  rating: number;
  reviews: number;
  visitDuration: string;
  bestTime: string;
  entryFee: {
    indian: number;
    foreign: number;
  };
  image: string;
  tags: string[];
}

interface ConcessionType {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  discount: string;
  selected: boolean;
}

interface HeritageDestinationDetailProps {
  themeId: string;
  themeName: string;
  onPlanTrip: (destinationId: string, concessions: string[]) => void;
}

export function HeritageDestinationDetail({
  themeId,
  themeName,
  onPlanTrip,
}: HeritageDestinationDetailProps) {
  const [selectedConcessions, setSelectedConcessions] = useState<string[]>([]);
  const [showConcessionInfo, setShowConcessionInfo] = useState(false);

  // Mock destinations data
  const destinations: Destination[] = [
    {
      id: 'taj-mahal',
      name: 'Taj Mahal',
      location: 'Agra',
      state: 'Uttar Pradesh',
      description: 'Iconic white marble mausoleum built by Shah Jahan, UNESCO World Heritage Site',
      rating: 4.8,
      reviews: 125000,
      visitDuration: '2-3 hours',
      bestTime: 'Oct - Mar',
      entryFee: { indian: 50, foreign: 1100 },
      image: '🕌',
      tags: ['UNESCO', 'Mughal', 'Architecture'],
    },
    {
      id: 'hampi',
      name: 'Hampi',
      location: 'Hampi',
      state: 'Karnataka',
      description: 'Ancient city of Vijayanagara Empire with magnificent temple ruins',
      rating: 4.7,
      reviews: 45000,
      visitDuration: '1-2 days',
      bestTime: 'Nov - Feb',
      entryFee: { indian: 40, foreign: 600 },
      image: '🏛️',
      tags: ['UNESCO', 'Ruins', 'Temple'],
    },
    {
      id: 'ajanta-ellora',
      name: 'Ajanta & Ellora Caves',
      location: 'Aurangabad',
      state: 'Maharashtra',
      description: 'Rock-cut Buddhist, Hindu and Jain cave monuments',
      rating: 4.6,
      reviews: 38000,
      visitDuration: '1 day',
      bestTime: 'Nov - Mar',
      entryFee: { indian: 40, foreign: 600 },
      image: '⛰️',
      tags: ['UNESCO', 'Caves', 'Buddhist'],
    },
    {
      id: 'khajuraho',
      name: 'Khajuraho Temples',
      location: 'Khajuraho',
      state: 'Madhya Pradesh',
      description: 'Famous for intricate erotic sculptures and temple architecture',
      rating: 4.5,
      reviews: 32000,
      visitDuration: '1 day',
      bestTime: 'Oct - Mar',
      entryFee: { indian: 35, foreign: 600 },
      image: '🛕',
      tags: ['UNESCO', 'Temple', 'Sculpture'],
    },
  ];

  // Concession Types
  const concessionTypes: ConcessionType[] = [
    {
      id: 'student',
      icon: <GraduationCap className="h-6 w-6" />,
      label: 'Student Group',
      description: 'Institutes/Colleges',
      discount: 'Up to 50% off',
      selected: selectedConcessions.includes('student'),
    },
    {
      id: 'senior',
      icon: <UserCheck className="h-6 w-6" />,
      label: 'Senior Citizen',
      description: 'Govt. Concession',
      discount: '50% off entry',
      selected: selectedConcessions.includes('senior'),
    },
    {
      id: 'differently-abled',
      icon: <Accessibility className="h-6 w-6" />,
      label: 'Differently Abled',
      description: 'Accessibility Support',
      discount: 'Free entry + support',
      selected: selectedConcessions.includes('differently-abled'),
    },
    {
      id: 'government',
      icon: <Shield className="h-6 w-6" />,
      label: 'Government/Defense',
      description: 'Govt. employees & Armed Forces',
      discount: 'Special rates',
      selected: selectedConcessions.includes('government'),
    },
  ];

  const toggleConcession = (concessionId: string) => {
    if (selectedConcessions.includes(concessionId)) {
      setSelectedConcessions(selectedConcessions.filter((id) => id !== concessionId));
    } else {
      setSelectedConcessions([...selectedConcessions, concessionId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3D0] to-[#FFE8B8]">
      {/* ========================================
          HEADER
      ======================================== */}
      <div className="bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 text-amber-200">
            <span className="text-lg">Heritage</span>
            <ChevronRight className="h-5 w-5" />
            <span className="text-lg font-bold text-[#FFF8E1]">{themeName}</span>
          </div>
          <h1 className="text-5xl font-bold text-[#FFF8E1]">
            {themeName}
          </h1>
          <p className="text-xl text-amber-100 mt-3">
            {destinations.length} incredible destinations to explore
          </p>
        </div>
      </div>

      {/* ========================================
          CONCESSION & DISCOUNT WIDGET
      ======================================== */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl shadow-xl border-3 border-amber-300 p-8 mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <Tag className="h-8 w-8 text-amber-600" />
                Unlock Special Fares
              </h2>
              <p className="text-lg text-gray-700">
                Select applicable concessions to get personalized pricing
              </p>
            </div>
            <button
              onClick={() => setShowConcessionInfo(!showConcessionInfo)}
              className="text-amber-700 hover:text-amber-900 transition-colors"
            >
              <Info className="h-6 w-6" />
            </button>
          </div>

          {/* Info Banner */}
          {showConcessionInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5 mb-6"
            >
              <p className="text-base text-blue-900 flex items-start gap-3">
                <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> Upload ID proofs in the next step for authorized discounts.
                  Concessions are subject to verification by our heritage team and site authorities.
                </span>
              </p>
            </motion.div>
          )}

          {/* Concession Chips Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {concessionTypes.map((concession) => (
              <ConcessionChip
                key={concession.id}
                concession={concession}
                onClick={() => toggleConcession(concession.id)}
              />
            ))}
          </div>

          {/* Selected Summary */}
          {selectedConcessions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-green-50 border-2 border-green-300 rounded-xl p-5"
            >
              <p className="text-lg font-bold text-green-900 mb-2">
                ✅ {selectedConcessions.length} Concession{selectedConcessions.length > 1 ? 's' : ''} Selected
              </p>
              <p className="text-base text-green-800">
                We'll calculate your special fares in the custom itinerary
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ========================================
          DESTINATIONS LIST
      ======================================== */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid gap-6">
          {destinations.map((destination, idx) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onPlanTrip={() => onPlanTrip(destination.id, selectedConcessions)}
              delay={idx * 0.1}
              hasConcessions={selectedConcessions.length > 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// CONCESSION CHIP COMPONENT
// ========================================

interface ConcessionChipProps {
  concession: ConcessionType;
  onClick: () => void;
}

function ConcessionChip({ concession, onClick }: ConcessionChipProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        flex items-center gap-4 p-5 rounded-xl border-3 transition-all text-left
        ${
          concession.selected
            ? 'bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-500 shadow-lg'
            : 'bg-white border-amber-200 hover:border-amber-400'
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
        w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
        ${concession.selected ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'}
      `}
      >
        {concession.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-gray-900">{concession.label}</h3>
          {concession.selected && (
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-2">{concession.description}</p>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs font-bold inline-block">
          💰 {concession.discount}
        </div>
      </div>
    </motion.button>
  );
}

// ========================================
// DESTINATION CARD COMPONENT
// ========================================

interface DestinationCardProps {
  destination: Destination;
  onPlanTrip: () => void;
  delay: number;
  hasConcessions: boolean;
}

function DestinationCard({ destination, onPlanTrip, delay, hasConcessions }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 overflow-hidden hover:shadow-xl transition-all"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image/Icon */}
        <div className="md:w-64 bg-gradient-to-br from-amber-100 to-yellow-100 p-12 flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-amber-200">
          <span className="text-9xl">{destination.image}</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {destination.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span className="text-lg">{destination.location}, {destination.state}</span>
              </div>
              <p className="text-base text-gray-700 mb-4">{destination.description}</p>
            </div>

            {/* Rating */}
            <div className="ml-4 bg-amber-100 rounded-xl p-4 text-center border-2 border-amber-300">
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-5 w-5 text-amber-600 fill-amber-600" />
                <span className="text-2xl font-bold text-gray-900">{destination.rating}</span>
              </div>
              <p className="text-xs text-gray-600">{destination.reviews.toLocaleString()} reviews</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {destination.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-semibold border border-amber-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <p className="text-sm font-bold text-gray-600">Duration</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{destination.visitDuration}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-green-600" />
                <p className="text-sm font-bold text-gray-600">Best Time</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{destination.bestTime}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-purple-600" />
                <p className="text-sm font-bold text-gray-600">Entry Fee</p>
              </div>
              <p className="text-lg font-bold text-gray-900">₹{destination.entryFee.indian}</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onPlanTrip}
            className={`
              w-full py-6 rounded-xl text-xl font-bold shadow-lg
              ${
                hasConcessions
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                  : 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white'
              }
            `}
          >
            {hasConcessions && <Tag className="mr-3 h-6 w-6" />}
            Plan Trip & Check Concessions
            <ChevronRight className="ml-3 h-6 w-6" />
          </Button>

          {hasConcessions && (
            <p className="text-center text-sm text-green-700 font-semibold mt-3">
              ✅ Special fares will be calculated based on your selected concessions
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
