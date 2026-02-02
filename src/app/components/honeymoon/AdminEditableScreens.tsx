import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Search, Globe, Youtube, ChevronRight, Waves, Castle, Flower2
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { 
  BeachDestinationCard, 
  HeritageDestinationCard, 
  WellnessDestinationCard,
  generateDestinationCards 
} from '@/app/components/honeymoon/DestinationCard';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';
import { PersonalizedDealsAlert } from '@/app/components/shared/PersonalizedDealsAlert';

interface ScreenProps {
  onBack: () => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

// Beach & Island Paradise Sub-Screen with Admin Editable System
export function BeachParadiseScreen({ onBack, onGoogleSearch, onYouTubeSearch }: ScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // ========================================
  // ADMIN EDITABLE CONTENT - GROUPED BY LEVEL
  // ========================================

  // LEVEL 1: Headers/Titles
  const headerTitle = '[Admin: Beach Category Title]';
  const headerTagline = '[Admin: Beach Tagline]';
  const searchPlaceholder = '[Admin: Search Placeholder]';
  
  // LEVEL 2: Section Headings
  const sectionHeading = '[Admin: Section Heading]';

  // LEVEL 3: Filter Labels
  const filterChips = [
    { label: '[Admin: Filter Label 1]', query: 'beach filter 1' },
    { label: '[Admin: Filter Label 2]', query: 'beach filter 2' },
    { label: '[Admin: Filter Label 3]', query: 'beach filter 3' },
    { label: '[Admin: Filter Label 4]', query: 'beach filter 4' },
    { label: '[Admin: Filter Label 5]', query: 'beach filter 5' }
  ];

  // LEVEL 4 & 5: Destination Card Content
  const destinations = [
    {
      id: '1',
      name: '[Admin: Destination 1]',
      priceRange: '[Admin: Price 1]',
      perfectFor: ['[Admin: Tag 1]', '[Admin: Tag 2]', '[Admin: Tag 3]'],
      stayOptions: ['[Admin: Stay 1]', '[Admin: Stay 2]'],
      specialRequest: '[Admin: Special Request 1]'
    },
    {
      id: '2',
      name: '[Admin: Destination 2]',
      priceRange: '[Admin: Price 2]',
      perfectFor: ['[Admin: Tag 1]', '[Admin: Tag 2]', '[Admin: Tag 3]'],
      stayOptions: ['[Admin: Stay 1]', '[Admin: Stay 2]'],
      specialRequest: '[Admin: Special Request 2]'
    },
    {
      id: '3',
      name: '[Admin: Destination 3]',
      priceRange: '[Admin: Price 3]',
      perfectFor: ['[Admin: Tag 1]', '[Admin: Tag 2]', '[Admin: Tag 3]'],
      stayOptions: ['[Admin: Stay 1]', '[Admin: Stay 2]'],
      specialRequest: '[Admin: Special Request 3]'
    },
    {
      id: '4',
      name: '[Admin: Destination 4]',
      priceRange: '[Admin: Price 4]',
      perfectFor: ['[Admin: Tag 1]', '[Admin: Tag 2]', '[Admin: Tag 3]'],
      stayOptions: ['[Admin: Stay 1]', '[Admin: Stay 2]'],
      specialRequest: '[Admin: Special Request 4]'
    },
    {
      id: '5',
      name: '[Admin: Destination 5]',
      priceRange: '[Admin: Price 5]',
      perfectFor: ['[Admin: Tag 1]', '[Admin: Tag 2]', '[Admin: Tag 3]'],
      stayOptions: ['[Admin: Stay 1]', '[Admin: Stay 2]'],
      specialRequest: '[Admin: Special Request 5]'
    },
    {
      id: '6',
      name: '[Admin: Destination 6]',
      priceRange: '[Admin: Price 6]',
      perfectFor: ['[Admin: Tag 1]', '[Admin: Tag 2]', '[Admin: Tag 3]'],
      stayOptions: ['[Admin: Stay 1]', '[Admin: Stay 2]'],
      specialRequest: '[Admin: Special Request 6]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Admin Editable Indicator Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Waves className="w-9 h-9 text-white" />
          </div>
          <div>
            {/* LEVEL 1: Header Title */}
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              {headerTitle}
            </h1>
            {/* LEVEL 1: Header Tagline */}
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
              {headerTagline}
            </p>
          </div>
        </div>

        {/* Search Bar with Admin Placeholder */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 h-12 rounded-full bg-gray-100 border-0 shadow-lg"
          />
        </div>

        {/* Google/YouTube Buttons */}
        <div className="flex gap-3 mb-3">
          <Button
            onClick={() => onGoogleSearch('beach island honeymoon destinations')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => onYouTubeSearch('beach island honeymoon paradise')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6">
        {/* LEVEL 3: Filter Chips */}
        <div className="mb-6 -mt-6">
          <div className="flex flex-wrap gap-2">
            {filterChips.map((filter, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onGoogleSearch(filter.query)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all bg-gray-100"
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* LEVEL 2: Section Heading */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold bg-gray-100 px-3 py-1 rounded">{sectionHeading}</h2>
            <span className="text-xs text-purple-600 font-semibold">Admin Editable</span>
          </div>
          
          {/* LEVEL 4 & 5: Destination Cards */}
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    {/* LEVEL 4: Destination Name */}
                    <h3 className="font-bold text-lg mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                      {destination.name}
                    </h3>
                    {/* LEVEL 5: Price Range */}
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Price Range:</span>{' '}
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{destination.priceRange}</span>
                    </p>
                  </div>
                </div>

                {/* LEVEL 4: Perfect For Tags */}
                <div className="bg-pink-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-2 flex items-center gap-2">
                    Perfect For:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.perfectFor.map((tag, i) => (
                      <Badge key={i} className="bg-gray-100 text-pink-700 border-pink-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* LEVEL 4: Stay Options */}
                <div className="bg-blue-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    Stay Options:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <div className="flex gap-2">
                    {destination.stayOptions.map((option, i) => (
                      <span key={i} className="text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {option}
                        {i < destination.stayOptions.length - 1 && ' | '}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LEVEL 5: Special Request */}
                <div className="bg-purple-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-2">
                    Special Request:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">{destination.specialRequest}</p>
                </div>

                {/* Explore Button */}
                <Button 
                  onClick={() => onGoogleSearch(`${destination.name} beach honeymoon`)}
                  className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 h-11 flex items-center justify-center gap-2"
                >
                  Explore
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mb-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            onClick={onBack}
            className="w-full bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
          >
            <span className="font-bold text-lg text-gray-900">Continue</span>
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Heritage & Luxury Palaces Sub-Screen with Admin Editable System
export function HeritagePalacesScreen({ onBack, onGoogleSearch, onYouTubeSearch }: ScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // ========================================
  // ADMIN EDITABLE CONTENT - GROUPED BY LEVEL
  // ========================================

  // LEVEL 1: Headers/Titles
  const headerTitle = '[Admin: Heritage Category Title]';
  const headerTagline = '[Admin: Heritage Tagline]';
  const searchPlaceholder = '[Admin: Search Placeholder]';
  
  // LEVEL 2: Section Headings
  const sectionHeading = '[Admin: Section Heading]';

  // LEVEL 3: Filter Labels
  const filterChips = [
    { label: '[Admin: Filter Label 1]', query: 'heritage filter 1' },
    { label: '[Admin: Filter Label 2]', query: 'heritage filter 2' },
    { label: '[Admin: Filter Label 3]', query: 'heritage filter 3' },
    { label: '[Admin: Filter Label 4]', query: 'heritage filter 4' },
    { label: '[Admin: Filter Label 5]', query: 'heritage filter 5' }
  ];

  // LEVEL 4 & 5: Destination Card Content
  const destinations = [
    {
      id: '1',
      name: '[Admin: Heritage Destination 1]',
      priceRange: '[Admin: Price 1]',
      perfectFor: ['[Admin: Experience 1]', '[Admin: Experience 2]', '[Admin: Experience 3]'],
      stayOptions: ['[Admin: Accommodation 1]', '[Admin: Accommodation 2]'],
      specialRequest: '[Admin: Royal Experience 1]'
    },
    {
      id: '2',
      name: '[Admin: Heritage Destination 2]',
      priceRange: '[Admin: Price 2]',
      perfectFor: ['[Admin: Experience 1]', '[Admin: Experience 2]', '[Admin: Experience 3]'],
      stayOptions: ['[Admin: Accommodation 1]', '[Admin: Accommodation 2]'],
      specialRequest: '[Admin: Royal Experience 2]'
    },
    {
      id: '3',
      name: '[Admin: Heritage Destination 3]',
      priceRange: '[Admin: Price 3]',
      perfectFor: ['[Admin: Experience 1]', '[Admin: Experience 2]', '[Admin: Experience 3]'],
      stayOptions: ['[Admin: Accommodation 1]', '[Admin: Accommodation 2]'],
      specialRequest: '[Admin: Royal Experience 3]'
    },
    {
      id: '4',
      name: '[Admin: Heritage Destination 4]',
      priceRange: '[Admin: Price 4]',
      perfectFor: ['[Admin: Experience 1]', '[Admin: Experience 2]', '[Admin: Experience 3]'],
      stayOptions: ['[Admin: Accommodation 1]', '[Admin: Accommodation 2]'],
      specialRequest: '[Admin: Royal Experience 4]'
    },
    {
      id: '5',
      name: '[Admin: Heritage Destination 5]',
      priceRange: '[Admin: Price 5]',
      perfectFor: ['[Admin: Experience 1]', '[Admin: Experience 2]', '[Admin: Experience 3]'],
      stayOptions: ['[Admin: Accommodation 1]', '[Admin: Accommodation 2]'],
      specialRequest: '[Admin: Royal Experience 5]'
    },
    {
      id: '6',
      name: '[Admin: Heritage Destination 6]',
      priceRange: '[Admin: Price 6]',
      perfectFor: ['[Admin: Experience 1]', '[Admin: Experience 2]', '[Admin: Experience 3]'],
      stayOptions: ['[Admin: Accommodation 1]', '[Admin: Accommodation 2]'],
      specialRequest: '[Admin: Royal Experience 6]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Admin Editable Indicator Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Castle className="w-9 h-9 text-white" />
          </div>
          <div>
            {/* LEVEL 1: Header Title */}
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              {headerTitle}
            </h1>
            {/* LEVEL 1: Header Tagline */}
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
              {headerTagline}
            </p>
          </div>
        </div>

        {/* Search Bar with Admin Placeholder */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 h-12 rounded-full bg-gray-100 border-0 shadow-lg"
          />
        </div>

        {/* Google/YouTube Buttons */}
        <div className="flex gap-3 mb-3">
          <Button
            onClick={() => onGoogleSearch('heritage palace honeymoon destinations')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => onYouTubeSearch('heritage palace honeymoon paradise')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6">
        {/* LEVEL 3: Filter Chips */}
        <div className="mb-6 -mt-6">
          <div className="flex flex-wrap gap-2">
            {filterChips.map((filter, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onGoogleSearch(filter.query)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all bg-gray-100"
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* LEVEL 2: Section Heading */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold bg-gray-100 px-3 py-1 rounded">{sectionHeading}</h2>
            <span className="text-xs text-purple-600 font-semibold">Admin Editable</span>
          </div>
          
          {/* LEVEL 4 & 5: Destination Cards */}
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Castle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    {/* LEVEL 4: Destination Name */}
                    <h3 className="font-bold text-lg mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                      {destination.name}
                    </h3>
                    {/* LEVEL 5: Price Range */}
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Price Range:</span>{' '}
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{destination.priceRange}</span>
                    </p>
                  </div>
                </div>

                {/* LEVEL 4: Perfect For Tags */}
                <div className="bg-pink-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-2 flex items-center gap-2">
                    Perfect For:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.perfectFor.map((tag, i) => (
                      <Badge key={i} className="bg-gray-100 text-pink-700 border-pink-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* LEVEL 4: Stay Options */}
                <div className="bg-blue-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    Stay Options:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <div className="flex gap-2">
                    {destination.stayOptions.map((option, i) => (
                      <span key={i} className="text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {option}
                        {i < destination.stayOptions.length - 1 && ' | '}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LEVEL 5: Special Request */}
                <div className="bg-purple-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-2">
                    Special Request:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">{destination.specialRequest}</p>
                </div>

                {/* Explore Button */}
                <Button 
                  onClick={() => onGoogleSearch(`${destination.name} palace honeymoon`)}
                  className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 h-11 flex items-center justify-center gap-2"
                >
                  Explore
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mb-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            onClick={onBack}
            className="w-full bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
          >
            <span className="font-bold text-lg text-gray-900">Continue</span>
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Wellness & Spa Retreats Sub-Screen with Admin Editable System
export function WellnessRetreatsScreen({ onBack, onGoogleSearch, onYouTubeSearch }: ScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // ========================================
  // ADMIN EDITABLE CONTENT - GROUPED BY LEVEL
  // ========================================

  // LEVEL 1: Headers/Titles
  const headerTitle = '[Admin: Wellness Category Title]';
  const headerTagline = '[Admin: Wellness Tagline]';
  const searchPlaceholder = '[Admin: Search Placeholder]';
  
  // LEVEL 2: Section Headings
  const sectionHeading = '[Admin: Section Heading]';

  // LEVEL 3: Filter Labels
  const filterChips = [
    { label: '[Admin: Wellness Filter 1]', query: 'wellness filter 1' },
    { label: '[Admin: Wellness Filter 2]', query: 'wellness filter 2' },
    { label: '[Admin: Wellness Filter 3]', query: 'wellness filter 3' },
    { label: '[Admin: Wellness Filter 4]', query: 'wellness filter 4' },
    { label: '[Admin: Wellness Filter 5]', query: 'wellness filter 5' }
  ];

  // LEVEL 4 & 5: Destination Card Content
  const destinations = [
    {
      id: '1',
      name: '[Admin: Wellness Destination 1]',
      priceRange: '[Admin: Price 1]',
      perfectFor: ['[Admin: Treatment 1]', '[Admin: Treatment 2]', '[Admin: Wellness Focus]'],
      stayOptions: ['[Admin: Retreat Type 1]', '[Admin: Retreat Type 2]'],
      specialRequest: '[Admin: Wellness Service 1]'
    },
    {
      id: '2',
      name: '[Admin: Wellness Destination 2]',
      priceRange: '[Admin: Price 2]',
      perfectFor: ['[Admin: Treatment 1]', '[Admin: Treatment 2]', '[Admin: Wellness Focus]'],
      stayOptions: ['[Admin: Retreat Type 1]', '[Admin: Retreat Type 2]'],
      specialRequest: '[Admin: Wellness Service 2]'
    },
    {
      id: '3',
      name: '[Admin: Wellness Destination 3]',
      priceRange: '[Admin: Price 3]',
      perfectFor: ['[Admin: Treatment 1]', '[Admin: Treatment 2]', '[Admin: Wellness Focus]'],
      stayOptions: ['[Admin: Retreat Type 1]', '[Admin: Retreat Type 2]'],
      specialRequest: '[Admin: Wellness Service 3]'
    },
    {
      id: '4',
      name: '[Admin: Wellness Destination 4]',
      priceRange: '[Admin: Price 4]',
      perfectFor: ['[Admin: Treatment 1]', '[Admin: Treatment 2]', '[Admin: Wellness Focus]'],
      stayOptions: ['[Admin: Retreat Type 1]', '[Admin: Retreat Type 2]'],
      specialRequest: '[Admin: Wellness Service 4]'
    },
    {
      id: '5',
      name: '[Admin: Wellness Destination 5]',
      priceRange: '[Admin: Price 5]',
      perfectFor: ['[Admin: Treatment 1]', '[Admin: Treatment 2]', '[Admin: Wellness Focus]'],
      stayOptions: ['[Admin: Retreat Type 1]', '[Admin: Retreat Type 2]'],
      specialRequest: '[Admin: Wellness Service 5]'
    },
    {
      id: '6',
      name: '[Admin: Wellness Destination 6]',
      priceRange: '[Admin: Price 6]',
      perfectFor: ['[Admin: Treatment 1]', '[Admin: Treatment 2]', '[Admin: Wellness Focus]'],
      stayOptions: ['[Admin: Retreat Type 1]', '[Admin: Retreat Type 2]'],
      specialRequest: '[Admin: Wellness Service 6]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Admin Editable Indicator Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Flower2 className="w-9 h-9 text-white" />
          </div>
          <div>
            {/* LEVEL 1: Header Title */}
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              {headerTitle}
            </h1>
            {/* LEVEL 1: Header Tagline */}
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
              {headerTagline}
            </p>
          </div>
        </div>

        {/* Search Bar with Admin Placeholder */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 h-12 rounded-full bg-gray-100 border-0 shadow-lg"
          />
        </div>

        {/* Google/YouTube Buttons */}
        <div className="flex gap-3 mb-3">
          <Button
            onClick={() => onGoogleSearch('wellness spa retreat honeymoon destinations')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => onYouTubeSearch('wellness spa retreat paradise')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6">
        {/* LEVEL 3: Filter Chips */}
        <div className="mb-6 -mt-6">
          <div className="flex flex-wrap gap-2">
            {filterChips.map((filter, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onGoogleSearch(filter.query)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all bg-gray-100"
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* LEVEL 2: Section Heading */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold bg-gray-100 px-3 py-1 rounded">{sectionHeading}</h2>
            <span className="text-xs text-purple-600 font-semibold">Admin Editable</span>
          </div>
          
          {/* LEVEL 4 & 5: Destination Cards */}
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Flower2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    {/* LEVEL 4: Destination Name */}
                    <h3 className="font-bold text-lg mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                      {destination.name}
                    </h3>
                    {/* LEVEL 5: Price Range */}
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Price Range:</span>{' '}
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{destination.priceRange}</span>
                    </p>
                  </div>
                </div>

                {/* LEVEL 4: Perfect For Tags */}
                <div className="bg-pink-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-2 flex items-center gap-2">
                    Perfect For:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.perfectFor.map((tag, i) => (
                      <Badge key={i} className="bg-gray-100 text-pink-700 border-pink-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* LEVEL 4: Stay Options */}
                <div className="bg-blue-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    Stay Options:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <div className="flex gap-2">
                    {destination.stayOptions.map((option, i) => (
                      <span key={i} className="text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {option}
                        {i < destination.stayOptions.length - 1 && ' | '}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LEVEL 5: Special Request */}
                <div className="bg-purple-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-2">
                    Special Request:
                    <span className="text-purple-600 text-[10px]">Admin Editable</span>
                  </p>
                  <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">{destination.specialRequest}</p>
                </div>

                {/* Explore Button */}
                <Button 
                  onClick={() => onGoogleSearch(`${destination.name} wellness retreat honeymoon`)}
                  className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 h-11 flex items-center justify-center gap-2"
                >
                  Explore
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mb-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            onClick={onBack}
            className="w-full bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
          >
            <span className="font-bold text-lg text-gray-900">Continue</span>
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}