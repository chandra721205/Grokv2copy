import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, DollarSign, Calendar, Zap, Hotel, Train, Plane, Ship, Bus, Car, Map, Youtube } from 'lucide-react';
import type { TripPreferencesProps } from './types';

const budgetRanges = [
  { id: 'budget', emoji: '💰', name: 'Budget', range: '₹15,000 - ₹30,000/person' },
  { id: 'standard', emoji: '💵', name: 'Standard', range: '₹30,000 - ₹60,000/person' },
  { id: 'premium', emoji: '💎', name: 'Premium', range: '₹60,000 - ₹1,20,000/person' },
  { id: 'luxury', emoji: '🔥', name: 'Luxury', range: '₹1,20,000+ /person' },
];

const durations = [
  { id: '2-3', label: '2-3 Days', sublabel: 'Quick getaway' },
  { id: '4-6', label: '4-6 Days', sublabel: 'Short trip' },
  { id: '7-10', label: '7-10 Days', sublabel: 'Full vacation' },
  { id: '11-14', label: '11-14 Days', sublabel: 'Extended tour' },
  { id: '15+', label: '15+ Days', sublabel: 'Long journey' },
];

const travelPaces = [
  { id: 'relaxed', emoji: '🧘', name: 'Relaxed', description: '1-2 activities/day, plenty of rest' },
  { id: 'balanced', emoji: '⚖️', name: 'Balanced', description: '2-3 activities/day, moderate pace', recommended: true },
  { id: 'active', emoji: '⚡', name: 'Active', description: '3-4 activities/day, fast paced' },
  { id: 'intense', emoji: '🚀', name: 'Intense', description: '4+ activities/day, packed itinerary' },
];

const accommodationLevels = [
  { id: 'backpacker', emoji: '🎒', name: 'Backpacker', description: 'Hostels, shared rooms, local stays' },
  { id: 'comfortable', emoji: '🏨', name: 'Comfortable', description: '3-star hotels, AC, good amenities' },
  { id: 'premium', emoji: '⭐', name: 'Premium', description: '4-star hotels, private transport, pool amenities' },
  { id: 'luxury', emoji: '✨', name: 'Luxury', description: '5-star resorts, premium transport, all amenities' },
];

const transportModes = [
  { id: 'train', icon: Train, name: 'Train' },
  { id: 'flight', icon: Plane, name: 'Flight' },
  { id: 'bus', icon: Bus, name: 'Bus/Coach' },
  { id: 'privateCar', icon: Car, name: 'Private Car' },
  { id: 'cruise', icon: Ship, name: 'Cruise Ship' },
  { id: 'ferry', icon: Ship, name: 'Ferry' },
  { id: 'other', icon: Map, name: 'Other' },
];

export function TripPreferences({ onNext, onBack, selectedCategories = [] }: TripPreferencesProps) {
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedPace, setSelectedPace] = useState('');
  const [selectedAccommodation, setSelectedAccommodation] = useState('');
  const [selectedTransport, setSelectedTransport] = useState<string[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Care & Accessibility Preferences State
  const [travelPacePreference, setTravelPacePreference] = useState('');
  const [mobilitySupport, setMobilitySupport] = useState('');
  const [medicalAssistance, setMedicalAssistance] = useState('');
  const [dietaryAccommodations, setDietaryAccommodations] = useState('');
  const [accessibilityPriority, setAccessibilityPriority] = useState('');

  const toggleTransport = (transportId: string) => {
    if (selectedTransport.includes(transportId)) {
      setSelectedTransport(selectedTransport.filter(id => id !== transportId));
    } else {
      setSelectedTransport([...selectedTransport, transportId]);
    }
  };

  const handleGoogleSearch = () => {
    const categoryText = selectedCategories.length > 0 ? selectedCategories.join(' ') : 'tourism';
    const query = `india ${categoryText} ${selectedBudget} ${selectedDuration} destinations itinerary`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const categoryText = selectedCategories.length > 0 ? selectedCategories.join(' ') : 'tourism';
    const query = `india ${categoryText} ${selectedDuration} travel guide budget trip`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            aria-label="Go back"
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button aria-label="View journey map" className="text-white text-sm font-medium">Journey Map</button>
        </div>

        <div className="text-center">
          <h1 className="text-white font-bold text-2xl mb-2">Preferences</h1>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-2 bg-white/30 rounded-full">
            <div className="h-2 bg-white rounded-full transition-all duration-300" style={{ width: '60%' }} />
          </div>
          <span className="text-white text-sm font-semibold">Step 4 of 6</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-md mx-auto pb-20">
        {/* Icon & Title */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-3xl">✨</span>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Your Preferences</h2>
          <p className="text-gray-600 text-sm">Almost there! Share your travel style for the perfect itinerary</p>
        </div>

        {/* Budget Range */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-base text-blue-900">Budget Range (Total for all people)</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {budgetRanges.map((budget) => {
              const isSelected = selectedBudget === budget.id;
              return (
                <motion.button
                  key={budget.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBudget(budget.id)}
                  className={`relative p-4 rounded-2xl transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg ring-2 ring-blue-400'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="text-3xl mb-2">{budget.emoji}</div>
                  <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {budget.name}
                  </div>
                  <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                    {budget.range}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Trip Duration */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-base text-blue-900">Trip Duration</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {durations.map((duration) => {
              const isSelected = selectedDuration === duration.id;
              return (
                <motion.button
                  key={duration.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`relative p-3 rounded-2xl transition-all text-center ${
                    isSelected
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg ring-2 ring-purple-400'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {duration.label}
                  </div>
                  <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                    {duration.sublabel}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Preferred Travel Dates */}
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-base text-blue-900">Preferred Travel Dates (Optional)</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-3 bg-blue-50 rounded-xl p-3">
            <p className="text-xs text-blue-800">
              💡 Leave blank for flexible dates. Grok AI will suggest best timings based on weather & crowd levels.
            </p>
          </div>
        </div>

        {/* Travel Pace */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-orange-600" />
            <h3 className="font-bold text-base text-blue-900">Travel Pace</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {travelPaces.map((pace) => {
              const isSelected = selectedPace === pace.id;
              return (
                <motion.button
                  key={pace.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPace(pace.id)}
                  className={`relative p-4 rounded-2xl transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg ring-2 ring-orange-400'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {pace.recommended && !isSelected && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Recommended
                    </div>
                  )}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="text-3xl mb-2">{pace.emoji}</div>
                  <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {pace.name}
                  </div>
                  <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                    {pace.description}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Comfort & Accommodation Level */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Hotel className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-base text-blue-900">Comfort & Accommodation Level</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {accommodationLevels.map((accommodation) => {
              const isSelected = selectedAccommodation === accommodation.id;
              return (
                <motion.button
                  key={accommodation.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAccommodation(accommodation.id)}
                  className={`relative p-4 rounded-2xl transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg ring-2 ring-purple-400'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="text-3xl mb-2">{accommodation.emoji}</div>
                  <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {accommodation.name}
                  </div>
                  <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                    {accommodation.description}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Transport Preferences */}
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Train className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-base text-blue-900">Transport Preferences (Select all you're open to)</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {transportModes.map((transport) => {
              const isSelected = selectedTransport.includes(transport.id);
              const Icon = transport.icon;
              return (
                <motion.button
                  key={transport.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleTransport(transport.id)}
                  className={`relative p-3 rounded-2xl transition-all flex flex-col items-center ${
                    isSelected
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg ring-2 ring-blue-400'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <Icon className={`w-6 h-6 mb-1 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                  <span className={`text-xs font-semibold text-center ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                    {transport.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Care & Accessibility Preferences */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-6 shadow-md mb-6 border-2 border-teal-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">♿</span>
              <h3 className="font-bold text-base text-teal-900">Care & Accessibility Preferences</h3>
            </div>
            {(travelPacePreference || mobilitySupport || medicalAssistance || dietaryAccommodations || accessibilityPriority) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold"
              >
                <span>✓</span>
                <span>
                  {[travelPacePreference, mobilitySupport, medicalAssistance, dietaryAccommodations, accessibilityPriority].filter(Boolean).length} Selected
                </span>
              </motion.div>
            )}
          </div>
          
          <div className="space-y-4">
            {/* Pace of Travel */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Pace of travel:</label>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setTravelPacePreference('gentle')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    travelPacePreference === 'gentle'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  ⚠️ Gentle
                </button>
                <button 
                  onClick={() => setTravelPacePreference('moderate')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    travelPacePreference === 'moderate'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  Moderate
                </button>
                <button 
                  onClick={() => setTravelPacePreference('active')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    travelPacePreference === 'active'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  ⚡ Active
                </button>
              </div>
            </div>

            {/* Mobility Support */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Mobility support needed:</label>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setMobilitySupport('none')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    mobilitySupport === 'none'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  None
                </button>
                <button 
                  onClick={() => setMobilitySupport('occasional')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    mobilitySupport === 'occasional'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  Occasional
                </button>
                <button 
                  onClick={() => setMobilitySupport('fulltime')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    mobilitySupport === 'fulltime'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  Full-time
                </button>
              </div>
            </div>

            {/* Medical Assistance */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Medical assistance:</label>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setMedicalAssistance('none')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    medicalAssistance === 'none'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  None
                </button>
                <button 
                  onClick={() => setMedicalAssistance('oncall')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    medicalAssistance === 'oncall'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  On-call
                </button>
                <button 
                  onClick={() => setMedicalAssistance('24/7')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    medicalAssistance === '24/7'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  24/7 companion
                </button>
              </div>
            </div>

            {/* Dietary Accommodations */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Dietary accommodations:</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setDietaryAccommodations('standard')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    dietaryAccommodations === 'standard'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => setDietaryAccommodations('special')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    dietaryAccommodations === 'special'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  Special meals
                </button>
              </div>
            </div>

            {/* Accessibility Priority */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Accessibility priority:</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setAccessibilityPriority('standard')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    accessibilityPriority === 'standard'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => setAccessibilityPriority('full')}
                  className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                    accessibilityPriority === 'full'
                      ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
                  }`}
                >
                  Fully accessible
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 rounded-xl p-3 border border-yellow-200">
            <p className="text-xs text-gray-700 leading-relaxed flex items-start gap-2">
              <span className="text-yellow-600 flex-shrink-0">💡</span>
              <span>These preferences help us customize your itinerary for maximum comfort and accessibility.</span>
            </p>
          </div>
        </motion.div>

        {/* Grok AI Summary */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-6 text-white shadow-lg mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">💡</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-3">Grok AI Preference Summary</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-blue-200">Categories:</span>
                  <span className="font-semibold ml-2">
                    {selectedCategories.length > 0 ? `${selectedCategories.length} selected` : 'Not specified'}
                  </span>
                </div>
                <div>
                  <span className="text-blue-200">Budget:</span>
                  <span className="font-semibold ml-2">
                    {selectedBudget ? budgetRanges.find(b => b.id === selectedBudget)?.name : 'Not selected'}
                  </span>
                </div>
                <div>
                  <span className="text-blue-200">Duration:</span>
                  <span className="font-semibold ml-2">
                    {selectedDuration ? durations.find(d => d.id === selectedDuration)?.label : 'Not selected'}
                  </span>
                </div>
                {travelPacePreference && (
                  <div>
                    <span className="text-teal-200">♿ Travel Pace:</span>
                    <span className="font-semibold ml-2 capitalize">{travelPacePreference}</span>
                  </div>
                )}
                {mobilitySupport && (
                  <div>
                    <span className="text-teal-200">🦽 Mobility Support:</span>
                    <span className="font-semibold ml-2 capitalize">{mobilitySupport}</span>
                  </div>
                )}
                {medicalAssistance && (
                  <div>
                    <span className="text-teal-200">🏥 Medical Assistance:</span>
                    <span className="font-semibold ml-2 capitalize">{medicalAssistance}</span>
                  </div>
                )}
                {accessibilityPriority && (
                  <div>
                    <span className="text-teal-200">♿ Accessibility:</span>
                    <span className="font-semibold ml-2 capitalize">{accessibilityPriority === 'full' ? 'Fully Accessible' : accessibilityPriority}</span>
                  </div>
                )}
                <div>
                  <span className="text-blue-200">Next:</span>
                  <span className="font-semibold ml-2">
                    Configure group details and finalize your personalized itinerary!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Buttons */}
        <div className="mb-6 bg-blue-50 rounded-3xl p-4 border-2 border-blue-200">
          <p className="text-sm font-semibold text-blue-900 mb-3 text-center">
            🔍 Discover destinations matching your preferences
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleGoogleSearch}
              className="flex-1 bg-white border-2 border-blue-300 text-blue-700 px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-sm"
            >
              <Map className="w-4 h-4" />
              Google Search
            </button>
            <button
              onClick={handleYouTubeSearch}
              className="flex-1 bg-red-600 text-white px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-sm"
            >
              <Youtube className="w-4 h-4" />
              YouTube Browse
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => onNext({ 
            selectedBudget, 
            selectedDuration, 
            selectedPace, 
            selectedAccommodation, 
            selectedTransport,
            startDate,
            endDate
          })}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-3xl font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="text-xl">💡</span>
          Get Grok AI Recommendations
        </button>

        <p className="text-center text-gray-400 text-sm mt-6">Scroll to see all options ↓</p>
      </div>
    </div>
  );
}
