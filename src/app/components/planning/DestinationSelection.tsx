import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Map, Youtube, Sparkles, Info } from 'lucide-react';
import type { DestinationSelectionProps } from './types';

// Admin-defined destination data for each combo type
const destinationsByCombo: Record<string, any[]> = {
  'spiritual-nature': [
    {
      id: 'dest-sn-1',
      name: '[Admin: Himalayan Ashram Retreat]',
      location: '[Admin: Rishikesh, Uttarakhand]',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop',
      badges: ['Spiritual + Nature', 'Eco-Friendly', 'Temple Stay'],
      highlights: '[Admin: Morning Yoga + Ganga Aarti + Forest Meditation]',
      priceRange: '₹12,000 - ₹20,000',
      duration: '4D/3N',
      rating: 4.8,
    },
    {
      id: 'dest-sn-2',
      name: '[Admin: Kerala Temple & Backwaters]',
      location: '[Admin: Alappuzha, Kerala]',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop',
      badges: ['Spiritual', 'Backwaters', 'Ayurveda'],
      highlights: '[Admin: Temple Visit + Houseboat Stay + Ayurveda]',
      priceRange: '₹15,000 - ₹25,000',
      duration: '5D/4N',
      rating: 4.9,
    },
    {
      id: 'dest-sn-3',
      name: '[Admin: Rishikesh Yoga Retreat]',
      location: '[Admin: Rishikesh, Uttarakhand]',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&auto=format&fit=crop',
      badges: ['Yoga', 'Meditation', 'Nature'],
      highlights: '[Admin: Yoga Classes + Nature Walks + Spiritual Sessions]',
      priceRange: '₹10,000 - ₹18,000',
      duration: '3D/2N',
      rating: 4.7,
    },
  ],
  'adventure-heritage': [
    {
      id: 'dest-ah-1',
      name: '[Admin: Rajasthan Desert & Forts]',
      location: '[Admin: Jaisalmer, Rajasthan]',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&auto=format&fit=crop',
      badges: ['Adventure', 'Heritage', 'Desert Safari'],
      highlights: '[Admin: Desert Safari + Fort Exploration + Camel Ride]',
      priceRange: '₹10,000 - ₹18,000',
      duration: '4D/3N',
      rating: 4.8,
    },
    {
      id: 'dest-ah-2',
      name: '[Admin: Ladakh Trek & Monasteries]',
      location: '[Admin: Leh-Ladakh, Jammu & Kashmir]',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
      badges: ['Trekking', 'Monasteries', 'Adventure'],
      highlights: '[Admin: Mountain Trekking + Monastery Visits + Scenic Views]',
      priceRange: '₹18,000 - ₹30,000',
      duration: '6D/5N',
      rating: 4.9,
    },
    {
      id: 'dest-ah-3',
      name: '[Admin: Hampi Heritage Trek]',
      location: '[Admin: Hampi, Karnataka]',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop',
      badges: ['Heritage', 'Trekking', 'UNESCO'],
      highlights: '[Admin: Temple Ruins + Boulder Climbing + Historical Tours]',
      priceRange: '₹8,000 - ₹15,000',
      duration: '3D/2N',
      rating: 4.7,
    },
  ],
  'family-complete': [
    {
      id: 'dest-fc-1',
      name: '[Admin: Goa Beach Family Package]',
      location: '[Admin: Goa]',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
      badges: ['Family Fun', 'Beach', 'Cultural Tours'],
      highlights: '[Admin: Beach Activities + Fort Visit + Cruise Party]',
      priceRange: '₹20,000 - ₹35,000',
      duration: '5D/4N',
      rating: 4.8,
    },
    {
      id: 'dest-fc-2',
      name: '[Admin: Kerala Family Discovery]',
      location: '[Admin: Kerala]',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&auto=format&fit=crop',
      badges: ['Family', 'Nature', 'Educational'],
      highlights: '[Admin: Houseboat + Wildlife Safari + Cultural Shows]',
      priceRange: '₹25,000 - ₹40,000',
      duration: '6D/5N',
      rating: 4.9,
    },
    {
      id: 'dest-fc-3',
      name: '[Admin: Rajasthan Royal Experience]',
      location: '[Admin: Jaipur-Udaipur, Rajasthan]',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop',
      badges: ['Heritage', 'Family', 'Palace Tours'],
      highlights: '[Admin: Palace Tours + Cultural Shows + City Tours]',
      priceRange: '₹22,000 - ₹38,000',
      duration: '5D/4N',
      rating: 4.8,
    },
  ],
  'senior-spiritual': [
    {
      id: 'dest-ss-1',
      name: '[Admin: Varanasi Gentle Pilgrimage]',
      location: '[Admin: Varanasi, Uttar Pradesh]',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop',
      badges: ['Senior-Friendly', 'Spiritual', 'Accessible'],
      highlights: '[Admin: Ganga Aarti + Medical Support + Comfortable Stay]',
      priceRange: '₹15,000 - ₹25,000',
      duration: '4D/3N',
      rating: 4.8,
    },
    {
      id: 'dest-ss-2',
      name: '[Admin: Tirupati Senior Care Package]',
      location: '[Admin: Tirupati, Andhra Pradesh]',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop',
      badges: ['Temple Visit', 'Senior Care', 'Medical Support'],
      highlights: '[Admin: Temple Darshan + Health Monitoring + Rest Facilities]',
      priceRange: '₹12,000 - ₹20,000',
      duration: '3D/2N',
      rating: 4.9,
    },
    {
      id: 'dest-ss-3',
      name: '[Admin: Shirdi Comfort Pilgrimage]',
      location: '[Admin: Shirdi, Maharashtra]',
      image: 'https://images.unsplash.com/photo-1596423430624-37eb87d98f3e?w=800&auto=format&fit=crop',
      badges: ['Pilgrimage', 'Senior-Friendly', 'Comfort'],
      highlights: '[Admin: Sai Baba Temple + Comfortable Transport + Care]',
      priceRange: '₹10,000 - ₹18,000',
      duration: '3D/2N',
      rating: 4.7,
    },
  ],
  'honeymoon-luxury': [
    {
      id: 'dest-hl-1',
      name: '[Admin: Maldives Luxury Escape]',
      location: '[Admin: Maldives]',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
      badges: ['Honeymoon', 'Luxury', 'Beach Resort'],
      highlights: '[Admin: Private Villa + Couples Spa + Cruise Dinner]',
      priceRange: '₹80,000 - ₹1,50,000',
      duration: '5D/4N',
      rating: 4.9,
    },
    {
      id: 'dest-hl-2',
      name: '[Admin: Andaman Romantic Getaway]',
      location: '[Admin: Andaman & Nicobar Islands]',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
      badges: ['Honeymoon', 'Beach', 'Water Sports'],
      highlights: '[Admin: Beach Resort + Scuba Diving + Sunset Cruise]',
      priceRange: '₹40,000 - ₹70,000',
      duration: '6D/5N',
      rating: 4.8,
    },
    {
      id: 'dest-hl-3',
      name: '[Admin: Kashmir Paradise Honeymoon]',
      location: '[Admin: Srinagar, Jammu & Kashmir]',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
      badges: ['Honeymoon', 'Mountains', 'Houseboat'],
      highlights: '[Admin: Houseboat Stay + Shikara Ride + Garden Tours]',
      priceRange: '₹35,000 - ₹60,000',
      duration: '5D/4N',
      rating: 4.9,
    },
  ],
  'corporate-retreat': [
    {
      id: 'dest-cr-1',
      name: '[Admin: Jim Corbett Team Retreat]',
      location: '[Admin: Jim Corbett, Uttarakhand]',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop',
      badges: ['Corporate', 'Team Building', 'Wildlife'],
      highlights: '[Admin: Safari + Team Activities + Conference Facilities]',
      priceRange: '₹15,000 - ₹28,000',
      duration: '3D/2N',
      rating: 4.8,
    },
    {
      id: 'dest-cr-2',
      name: '[Admin: Lonavala Corporate Wellness]',
      location: '[Admin: Lonavala, Maharashtra]',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
      badges: ['Corporate', 'Wellness', 'Team Building'],
      highlights: '[Admin: Yoga Sessions + Adventure Activities + Meetings]',
      priceRange: '₹12,000 - ₹22,000',
      duration: '2D/1N',
      rating: 4.7,
    },
    {
      id: 'dest-cr-3',
      name: '[Admin: Goa Beach Corporate Offsite]',
      location: '[Admin: Goa]',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
      badges: ['Corporate', 'Beach', 'Outdoor Activities'],
      highlights: '[Admin: Beach Games + Water Sports + Conference Rooms]',
      priceRange: '₹18,000 - ₹32,000',
      duration: '3D/2N',
      rating: 4.8,
    },
  ],
};

export function DestinationSelection({ 
  onNext, 
  onBack, 
  selectedComboId,
  selectedCategories 
}: DestinationSelectionProps) {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [showCustomization, setShowCustomization] = useState(false);

  // Get combo details
  const comboTitles: Record<string, string> = {
    'spiritual-nature': 'Spiritual + Nature',
    'adventure-heritage': 'Adventure + Heritage',
    'family-complete': 'Family Complete',
    'senior-spiritual': 'Senior Spiritual',
    'honeymoon-luxury': 'Honeymoon Luxury',
    'corporate-retreat': 'Corporate Retreat',
  };

  const comboTitle = selectedComboId ? comboTitles[selectedComboId] || 'Multi-Category Tour' : 'Multi-Category Tour';
  const destinations = selectedComboId && destinationsByCombo[selectedComboId] 
    ? destinationsByCombo[selectedComboId] 
    : [];

  const handleGoogleMaps = () => {
    try {
      const searchQuery = selectedCategories && selectedCategories.length > 0
        ? `india ${selectedCategories.join(' ')} tourism destinations`
        : `india ${comboTitle} tourism destinations`;
      const url = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
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
      const searchQuery = selectedCategories && selectedCategories.length > 0
        ? `india ${selectedCategories.join(' ')} travel vlog`
        : `india ${comboTitle} travel guide`;
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.warn('Popup blocked. Opening in same tab.');
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error opening YouTube:', error);
    }
  };

  const handleProceed = () => {
    if (selectedDestination) {
      const destinationData = destinations.find(d => d.id === selectedDestination);
      onNext({ selectedDestination, destinationData });
    }
  };

  const handleAskAI = () => {
    setShowCustomization(true);
  };

  if (showCustomization) {
    // Show customization request screen
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 pt-12 pb-6 rounded-b-3xl">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowCustomization(false)}
              aria-label="Go back"
              className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <span className="text-white text-sm font-medium">Step 2 of 6</span>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white font-bold text-2xl mb-2">Tell Us More for Custom Itinerary</h1>
            <p className="text-white/90 text-sm">Grok AI will analyze and suggest destinations based on your description</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mt-6">
            <div className="flex-1 h-2 bg-white/30 rounded-full">
              <div className="h-2 bg-white rounded-full transition-all duration-300" style={{ width: '33%' }} />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-4 py-6 max-w-md mx-auto">
          {/* Admin Note */}
          <div className="mb-6 bg-purple-100 border-2 border-purple-300 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-purple-900 mb-1">Grok AI Powered Recommendations</h4>
                <p className="text-sm text-purple-800">
                  Describe your ideal trip and our AI will suggest personalized destinations matching your preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Trip Description */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Describe Your Ideal Trip
            </label>
            <textarea
              placeholder="e.g., I want 5 days in mountains with meditation sessions and nature walks..."
              className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors resize-none"
            />
          </div>

          {/* Budget Range */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Budget Range (per person)
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Min ₹5,000"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
              />
              <span className="flex items-center text-gray-500 font-bold">to</span>
              <input
                type="number"
                placeholder="Max ₹50,000+"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
              />
            </div>
          </div>

          {/* Date Preference */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Travel Dates
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-3 border-2 border-purple-500 bg-purple-50 rounded-2xl font-semibold text-purple-900 transition-colors">
                Flexible Dates
              </button>
              <button className="px-4 py-3 border-2 border-gray-300 bg-white rounded-2xl font-semibold text-gray-700 hover:border-purple-400 transition-colors">
                Fixed Dates
              </button>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Special Requirements
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-2xl hover:border-purple-300 transition-colors cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm font-medium text-gray-800">Accessibility needs</span>
              </label>
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-2xl hover:border-purple-300 transition-colors cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm font-medium text-gray-800">Dietary restrictions</span>
              </label>
              <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-2xl hover:border-purple-300 transition-colors cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm font-medium text-gray-800">Child-friendly activities</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={() => {
              // In real implementation, this would call Grok AI
              alert('🤖 Grok AI is analyzing your preferences and generating custom recommendations...');
              setShowCustomization(false);
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-3xl font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
          >
            Generate Custom Itinerary with Grok AI
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            aria-label="Go back"
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <span className="text-white text-sm font-medium">Step 2 of 6</span>
        </div>

        <div className="text-center">
          <h1 className="text-white font-bold text-2xl mb-2">Browse & Select Destinations</h1>
          <p className="text-white/90 text-sm">for {comboTitle}</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-2 bg-white/30 rounded-full">
            <div className="h-2 bg-white rounded-full transition-all duration-300" style={{ width: '33%' }} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Admin Note */}
        <div className="mb-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-2xl p-4">
          <p className="text-sm text-gray-700">
            <span className="font-bold text-purple-900">📝 Admin-Managed Content:</span> All destination details, images, pricing, and itineraries are placeholders. Actual content is populated by admin only.
          </p>
        </div>

        {/* Recommended Destinations Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Recommended Curated Destinations</h2>
          
          {destinations.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedDestination(dest.id)}
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-md transition-all cursor-pointer ${
                    selectedDestination === dest.id
                      ? 'ring-4 ring-blue-500 shadow-xl'
                      : 'hover:shadow-lg'
                  }`}
                >
                  {selectedDestination === dest.id && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg mb-1 bg-gray-800/50 backdrop-blur-sm px-2 py-1 rounded">{dest.name}</h3>
                      <p className="text-white text-sm bg-gray-800/50 backdrop-blur-sm px-2 py-1 rounded inline-block">📍 {dest.location}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {dest.badges.map((badge: string, i: number) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <p className="text-sm text-gray-700 mb-3 bg-gray-100 px-3 py-2 rounded-xl">
                      <span className="font-bold text-purple-700">✨ Key Highlights:</span> {dest.highlights}
                    </p>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Price Range</p>
                        <p className="text-lg font-bold text-green-700">{dest.priceRange}</p>
                        <p className="text-xs text-gray-500">per person</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600 mb-1">Duration</p>
                        <p className="text-lg font-bold text-blue-700">{dest.duration}</p>
                        <p className="text-xs text-gray-500">⭐ {dest.rating}</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(dest.id);
                        }}
                        className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-colors ${
                          selectedDestination === dest.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {selectedDestination === dest.id ? '✓ Selected' : 'Select This Destination'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`View full details for ${dest.name}\n\nIn full implementation, this would show a detailed page with:\n- Complete itinerary\n- Photo gallery\n- Reviews\n- Inclusions/Exclusions\n- Booking calendar`);
                        }}
                        className="px-4 py-3 border-2 border-blue-500 text-blue-700 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 rounded-2xl p-6 text-center">
              <p className="text-gray-600">No curated destinations available for this combination yet. Use the browse options below to explore destinations!</p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <span className="text-sm font-semibold text-gray-600">OR</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Browse & Discover Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🔍 Explore More Options</h2>
          
          <div className="space-y-3">
            {/* Google Maps Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleMaps}
              className="w-full bg-white border-2 border-blue-400 rounded-3xl p-4 flex items-center gap-4 hover:bg-blue-50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Map className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Browse Destinations on Google Maps</h3>
                <p className="text-sm text-gray-600">Find locations that match your interests</p>
              </div>
            </motion.button>

            {/* YouTube Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleYouTubeBrowse}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-4 flex items-center gap-4 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Youtube className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-white text-lg mb-1">Watch Destination Videos</h3>
                <p className="text-sm text-white/90">Get inspired by traveler experiences</p>
              </div>
            </motion.button>
          </div>

          {/* External Link Note */}
          <p className="text-xs text-gray-500 text-center mt-3">
            🔗 External links open in new tab
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <span className="text-sm font-semibold text-purple-600">NEED HELP?</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>

        {/* AI Customization Option */}
        <div className="mb-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleAskAI}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="w-6 h-6" />
              <h3 className="font-bold text-xl">Ask Grok AI for Custom Suggestions</h3>
            </div>
            <p className="text-white/90 text-sm">
              Not sure which destination? Describe your ideal trip and let AI recommend perfect matches!
            </p>
          </motion.button>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleProceed}
          disabled={!selectedDestination}
          className={`w-full py-4 rounded-3xl font-bold text-lg shadow-lg transition-all ${
            selectedDestination
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl active:scale-[0.98]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {selectedDestination ? 'Proceed with Selected Destination' : 'Select a Destination to Continue'}
        </button>

        {/* Skip Option */}
        <button
          onClick={() => onNext({ selectedDestination: null, destinationData: null })}
          className="w-full mt-3 py-3 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors"
        >
          Skip for now (I'll decide later)
        </button>
      </div>
    </div>
  );
}
