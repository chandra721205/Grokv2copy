import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, DollarSign, Check, Map, Youtube, Sparkles } from 'lucide-react';
import type { DestinationSelectionProps } from './types';

// ========================================
// DESTINATION SELECTION SCREEN
// ========================================
// Appears after user selects a combo
// Shows admin-defined destination cards
// Includes Google Maps and YouTube browse options
// ========================================

interface DestinationCard {
  id: string;
  name: string;
  location: string;
  image: string;
  badges: string[];
  highlights: string;
  priceRange: string;
  duration: string;
  comboType: string;
}

// Sample admin-defined destinations for each combo type
const destinationsByCombo: Record<string, DestinationCard[]> = {
  'spiritual-nature': [
    {
      id: 'dest-1',
      name: '[Admin: Himalayan Ashram Retreat]',
      location: '[Admin: Rishikesh, Uttarakhand]',
      image: 'mountain-retreat',
      badges: ['Spiritual + Nature', 'Eco-Friendly', 'Temple Stay'],
      highlights: '[Admin: Morning Yoga + Ganga Aarti + Forest Meditation]',
      priceRange: '₹12,000 - ₹20,000',
      duration: '4D/3N',
      comboType: 'spiritual-nature',
    },
    {
      id: 'dest-2',
      name: '[Admin: Kerala Temple & Backwaters]',
      location: '[Admin: Alappuzha, Kerala]',
      image: 'backwaters',
      badges: ['Spiritual + Nature', 'Houseboat', 'Ayurveda'],
      highlights: '[Admin: Temple Visit + Houseboat Stay + Ayurveda Sessions]',
      priceRange: '₹15,000 - ₹25,000',
      duration: '5D/4N',
      comboType: 'spiritual-nature',
    },
    {
      id: 'dest-3',
      name: '[Admin: Varanasi Sacred Journey]',
      location: '[Admin: Varanasi, Uttar Pradesh]',
      image: 'temple-architecture',
      badges: ['Spiritual + Nature', 'River Ganges', 'Ancient Temples'],
      highlights: '[Admin: Boat Ride + Temple Tours + Evening Aarti]',
      priceRange: '₹10,000 - ₹18,000',
      duration: '3D/2N',
      comboType: 'spiritual-nature',
    },
  ],
  'adventure-heritage': [
    {
      id: 'dest-4',
      name: '[Admin: Rajasthan Desert & Forts]',
      location: '[Admin: Jaisalmer, Rajasthan]',
      image: 'desert-fort',
      badges: ['Adventure + Heritage', 'Desert Safari', 'Historic Forts'],
      highlights: '[Admin: Desert Safari + Fort Exploration + Camel Ride]',
      priceRange: '₹10,000 - ₹18,000',
      duration: '4D/3N',
      comboType: 'adventure-heritage',
    },
    {
      id: 'dest-5',
      name: '[Admin: Himachal Trek & Monasteries]',
      location: '[Admin: Manali, Himachal Pradesh]',
      image: 'mountain-trek',
      badges: ['Adventure + Heritage', 'Trekking', 'Monasteries'],
      highlights: '[Admin: Mountain Trek + Monastery Visits + Local Culture]',
      priceRange: '₹14,000 - ₹22,000',
      duration: '5D/4N',
      comboType: 'adventure-heritage',
    },
  ],
  'family-complete': [
    {
      id: 'dest-6',
      name: '[Admin: Goa Family Vacation]',
      location: '[Admin: Goa]',
      image: 'beach-family',
      badges: ['Family Fun', 'Beach', 'Water Sports', 'Culture'],
      highlights: '[Admin: Beach Activities + Fort Visit + Water Parks]',
      priceRange: '₹18,000 - ₹30,000',
      duration: '5D/4N',
      comboType: 'family-complete',
    },
    {
      id: 'dest-7',
      name: '[Admin: Kerala Cruise & Culture]',
      location: '[Admin: Kochi, Kerala]',
      image: 'cruise-boat',
      badges: ['Family Fun', 'Cruise', 'Educational', 'Culture'],
      highlights: '[Admin: Backwater Cruise + Museum Tours + Cultural Shows]',
      priceRange: '₹20,000 - ₹35,000',
      duration: '6D/5N',
      comboType: 'family-complete',
    },
  ],
  'senior-spiritual': [
    {
      id: 'dest-8',
      name: '[Admin: Shirdi Comfort Pilgrimage]',
      location: '[Admin: Shirdi, Maharashtra]',
      image: 'temple-peaceful',
      badges: ['Senior Wellness', 'Spiritual', 'Comfortable'],
      highlights: '[Admin: Temple Darshan + Health Support + AC Transport]',
      priceRange: '₹8,000 - ₹15,000',
      duration: '3D/2N',
      comboType: 'senior-spiritual',
    },
    {
      id: 'dest-9',
      name: '[Admin: Haridwar Senior Retreat]',
      location: '[Admin: Haridwar, Uttarakhand]',
      image: 'river-ghat',
      badges: ['Senior Wellness', 'Spiritual', 'Health Care'],
      highlights: '[Admin: Gentle Temple Tours + Medical Support + River View]',
      priceRange: '₹12,000 - ₹20,000',
      duration: '4D/3N',
      comboType: 'senior-spiritual',
    },
  ],
  'honeymoon-luxury': [
    {
      id: 'dest-10',
      name: '[Admin: Maldives Romance Package]',
      location: '[Admin: Maldives]',
      image: 'beach-resort',
      badges: ['Honeymoon', 'Luxury', 'Beach', 'Spa'],
      highlights: '[Admin: Private Beach + Couple Spa + Sunset Cruise]',
      priceRange: '₹80,000 - ₹150,000',
      duration: '5D/4N',
      comboType: 'honeymoon-luxury',
    },
    {
      id: 'dest-11',
      name: '[Admin: Udaipur Royal Honeymoon]',
      location: '[Admin: Udaipur, Rajasthan]',
      image: 'palace-lake',
      badges: ['Honeymoon', 'Heritage', 'Luxury'],
      highlights: '[Admin: Palace Stay + Lake Boat + Candlelight Dinner]',
      priceRange: '₹35,000 - ₹60,000',
      duration: '4D/3N',
      comboType: 'honeymoon-luxury',
    },
  ],
  'corporate-retreat': [
    {
      id: 'dest-12',
      name: '[Admin: Coorg Team Building]',
      location: '[Admin: Coorg, Karnataka]',
      image: 'coffee-plantation',
      badges: ['Corporate', 'Team Building', 'Adventure', 'Wellness'],
      highlights: '[Admin: Outdoor Activities + Workshop Venues + Wellness Sessions]',
      priceRange: '₹15,000 - ₹25,000',
      duration: '3D/2N',
      comboType: 'corporate-retreat',
    },
    {
      id: 'dest-13',
      name: '[Admin: Lonavala Corporate Offsite]',
      location: '[Admin: Lonavala, Maharashtra]',
      image: 'hill-resort',
      badges: ['Corporate', 'MICE', 'Adventure'],
      highlights: '[Admin: Conference Halls + Team Activities + Nature Walks]',
      priceRange: '₹12,000 - ₹20,000',
      duration: '2D/1N',
      comboType: 'corporate-retreat',
    },
  ],
};

export function DestinationSelectionScreen({
  onNext,
  onCustomize,
  onBack,
  selectedComboId,
  selectedComboName,
  selectedCategories,
}: DestinationSelectionProps) {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  // Get destinations for the selected combo
  const destinations = selectedComboId 
    ? destinationsByCombo[selectedComboId] || []
    : [];

  // If no combo selected, show generic destinations
  const displayDestinations = destinations.length > 0 
    ? destinations 
    : Object.values(destinationsByCombo).flat().slice(0, 6);

  const handleSelectDestination = (destination: DestinationCard) => {
    setSelectedDestination(destination.id);
  };

  const handleContinue = () => {
    const selected = displayDestinations.find(d => d.id === selectedDestination);
    if (selected) {
      onNext({
        selectedDestinationId: selected.id,
        selectedDestinationName: selected.name,
        destinationLocation: selected.location,
        destinationPrice: selected.priceRange,
        destinationDuration: selected.duration,
      });
    }
  };

  const handleGoogleMaps = () => {
    try {
      const query = selectedComboName 
        ? `india ${selectedComboName} destinations tourism`
        : 'india tourism destinations';
      const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.warn('Popup blocked. Opening in same tab.');
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error opening Google Maps:', error);
    }
  };

  const handleYouTubeBrowse = () => {
    try {
      const query = selectedComboName
        ? `${selectedComboName} india travel guide`
        : 'india tourism travel guide';
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.warn('Popup blocked. Opening in same tab.');
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error opening YouTube:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-12 pb-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            aria-label="Go back"
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <span className="text-white text-sm font-medium">Step 2 of 6</span>
        </div>

        <div className="text-center">
          <h1 className="text-white font-bold text-2xl mb-2">
            Browse & Select Destinations
          </h1>
          {selectedComboName && (
            <p className="text-white/90 text-sm">
              For: <span className="font-semibold">{selectedComboName}</span>
            </p>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-2 bg-white/30 rounded-full">
            <div 
              className="h-2 bg-white rounded-full transition-all duration-300" 
              style={{ width: '33%' }} 
            />
          </div>
          <span className="text-white text-sm font-semibold">33%</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Admin Notice Banner */}
        <div className="mb-6 bg-purple-100 border-2 border-purple-300 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">📝</span>
            </div>
            <div>
              <h3 className="font-bold text-purple-900 mb-1">Admin-Managed Content</h3>
              <p className="text-sm text-purple-800">
                All destinations, images, pricing, and details are managed by administrators. 
                This ensures accurate, up-to-date information.
              </p>
            </div>
          </div>
        </div>

        {/* Section A: Admin-Defined Destinations */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">✨</span>
            <h2 className="text-xl font-bold text-purple-900">
              Recommended Curated Destinations
            </h2>
          </div>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {displayDestinations.map((destination, index) => {
              const isSelected = selectedDestination === destination.id;
              
              return (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all cursor-pointer ${
                    isSelected 
                      ? 'ring-4 ring-purple-500 shadow-2xl scale-105' 
                      : 'hover:shadow-xl hover:scale-102'
                  }`}
                  onClick={() => handleSelectDestination(destination)}
                >
                  {/* Selected Checkmark */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Check className="w-6 h-6 text-white" strokeWidth={3} />
                    </div>
                  )}

                  {/* Image Placeholder with Unsplash */}
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/90">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm font-medium px-4 bg-gray-800/50 rounded-xl py-1">
                          [Admin: Add Destination Image]
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    {/* Destination Name */}
                    <h3 className="font-bold text-lg text-gray-900 mb-1 bg-gray-100 px-2 py-1 rounded">
                      {destination.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1 mb-3 text-gray-600 text-sm bg-gray-100 px-2 py-1 rounded w-fit">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.location}</span>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {destination.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <p className="text-sm text-gray-700 mb-3 bg-yellow-50 px-2 py-1 rounded border border-yellow-200">
                      <strong>Highlights:</strong> {destination.highlights}
                    </p>

                    {/* Price and Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-green-600 font-bold">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{destination.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 font-semibold">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{destination.duration}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectDestination(destination);
                        }}
                        className={`flex-1 py-2 rounded-xl font-bold text-sm transition-all ${
                          isSelected
                            ? 'bg-green-500 text-white'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                        }`}
                      >
                        {isSelected ? '✓ Selected' : 'Select This'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="px-3 py-2 border-2 border-purple-300 text-purple-700 rounded-xl font-semibold text-sm hover:bg-purple-50 transition-colors"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <span className="text-sm font-semibold text-purple-600">OR</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>

        {/* Section B: Browse & Discover */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🔍</span>
            <h2 className="text-xl font-bold text-purple-900">
              Explore More Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Google Maps Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleMaps}
              className="bg-white border-2 border-blue-300 rounded-2xl p-6 hover:shadow-xl transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Map className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-blue-900 mb-1">Browse Destinations on Google Maps</h3>
                  <p className="text-sm text-gray-600 mb-2">Find locations that match your interests</p>
                  <span className="text-xs text-blue-600 font-semibold">External link opens in new tab →</span>
                </div>
              </div>
            </motion.button>

            {/* YouTube Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleYouTubeBrowse}
              className="bg-white border-2 border-red-300 rounded-2xl p-6 hover:shadow-xl transition-all text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-red-900 mb-1">Watch Destination Videos</h3>
                  <p className="text-sm text-gray-600 mb-2">Get inspired by traveler experiences</p>
                  <span className="text-xs text-red-600 font-semibold">External link opens in new tab →</span>
                </div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col gap-3">
          {/* Continue with Selected Destination */}
          <button
            onClick={handleContinue}
            disabled={!selectedDestination}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all ${
              selectedDestination
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl active:scale-[0.98]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedDestination 
              ? '✓ Proceed with Selected Destination' 
              : 'Select a Destination to Continue'}
          </button>

          {/* OR Customize with AI */}
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="text-sm font-semibold text-gray-600">OR</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <button
            onClick={onCustomize}
            className="w-full py-4 rounded-2xl font-bold text-lg border-2 border-purple-400 text-purple-700 bg-white hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Ask AI for Custom Itinerary
          </button>
        </div>

        {/* Info Note */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Need Help Deciding?</h4>
              <p className="text-sm text-blue-800">
                Use Google Maps or YouTube to explore destinations, or let Grok AI create a custom itinerary based on your specific preferences!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
