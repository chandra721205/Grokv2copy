/**
 * Tour Booking Flow with Travel Essentials Integration
 * 
 * Shows how Travel Essentials are suggested during tour booking.
 * This appears after a user selects a tour package from any category.
 */

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Check, Globe, Youtube, Heart, Sparkles, Info } from 'lucide-react';

// ============================================================================
// DATA - Simulated Tour and Suggested Essentials
// ============================================================================

const tourData = {
  id: 'kerala-backwaters',
  name: 'Kerala Backwaters Experience',
  category: 'Eco Tourism',
  duration: '3 Days / 2 Nights',
  price: 15000,
  image: '🌴'
};

// Based on user's saved preferences from Travel Essentials
const suggestedEssentials = [
  {
    id: 'hotels',
    category: 'Accommodation',
    icon: '🛏️',
    name: 'Admin-Added Hotels & Resorts',
    description: 'Lakeside resorts near backwaters',
    reason: 'Based on your accommodation preferences',
    saved: true
  },
  {
    id: 'car-rental',
    category: 'Transportation',
    icon: '🚗',
    name: 'Admin-Added Car Rentals',
    description: 'Self-drive options for local exploration',
    reason: 'You saved transportation preferences',
    saved: true
  },
  {
    id: 'local-cuisine',
    category: 'Hospitality & Dining',
    icon: '🍽️',
    name: 'Admin-Added Local Cuisine Experiences',
    description: 'Authentic Kerala food tours',
    reason: 'Recommended for food enthusiasts',
    saved: false
  },
  {
    id: 'tour-guide',
    category: 'Personal Assistance',
    icon: '👤',
    name: 'Admin-Added Tour Guides',
    description: 'Expert local guides for backwaters',
    reason: 'Popular with eco-tourism travelers',
    saved: false
  }
];

// ============================================================================
// COMPONENTS
// ============================================================================

interface EssentialCardProps {
  essential: typeof suggestedEssentials[0];
  onGoogleSearch: () => void;
  onYouTubeSearch: () => void;
  onToggleSave: () => void;
}

function EssentialCard({ essential, onGoogleSearch, onYouTubeSearch, onToggleSave }: EssentialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span className="text-3xl" aria-hidden="true">{essential.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                {essential.category}
              </span>
              {essential.saved && (
                <Sparkles className="w-4 h-4 text-yellow-500" aria-label="From your saved preferences" />
              )}
            </div>
            <h3 className="font-bold text-base text-gray-900 mb-1">
              {essential.name}
            </h3>
            <p className="text-sm text-gray-600">
              {essential.description}
            </p>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={onToggleSave}
          className={`ml-2 p-2 rounded-full transition-colors ${
            essential.saved
              ? 'bg-red-100 text-red-600'
              : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500'
          }`}
          aria-label={essential.saved ? 'Remove from preferences' : 'Save to preferences'}
        >
          <Heart className={`w-5 h-5 ${essential.saved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Reason Badge */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 italic flex items-center gap-1">
          <Info className="w-3 h-3" />
          {essential.reason}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onGoogleSearch}
          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full h-10 flex items-center justify-center gap-2 text-sm font-semibold hover:shadow-lg transition-all active:scale-98"
        >
          <Globe className="w-4 h-4" />
          Research
        </button>
        <button
          onClick={onYouTubeSearch}
          className="flex-1 bg-red-600 text-white rounded-full h-10 flex items-center justify-center gap-2 text-sm font-semibold hover:bg-red-700 transition-all active:scale-98"
        >
          <Youtube className="w-4 h-4" />
          Reviews
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function TourBookingFlow() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'essentials' | 'confirmation'>('details');
  const [essentials, setEssentials] = useState(suggestedEssentials);
  const [showSkipModal, setShowSkipModal] = useState(false);

  const handleGoogleSearch = (essential: typeof suggestedEssentials[0]) => {
    const query = `${essential.name.replace('Admin-Added ', '')} Kerala backwaters`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = (essential: typeof suggestedEssentials[0]) => {
    const query = `${essential.name.replace('Admin-Added ', '')} Kerala review`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  const handleToggleSave = (id: string) => {
    setEssentials(prev => prev.map(e => 
      e.id === id ? { ...e, saved: !e.saved } : e
    ));
  };

  const handleContinue = () => {
    if (step === 'details') {
      setStep('essentials');
    } else if (step === 'essentials') {
      setStep('confirmation');
    }
  };

  const handleSkip = () => {
    setShowSkipModal(true);
  };

  const confirmSkip = () => {
    setShowSkipModal(false);
    setStep('confirmation');
  };

  if (step === 'details') {
    // Tour details step (simplified)
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
        <header className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[32px]">
          <button
            onClick={() => navigate('/')}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-5xl">{tourData.image}</div>
            <div>
              <h1 className="text-white text-3xl font-bold mb-1">{tourData.name}</h1>
              <p className="text-white/90">{tourData.category} • {tourData.duration}</p>
            </div>
          </div>
        </header>

        <main className="px-6 -mt-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tour Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-bold">₹{tourData.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-bold">{tourData.duration}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full h-14 font-bold text-lg hover:shadow-lg transition-all"
          >
            Continue to Booking →
          </button>
        </main>
      </div>
    );
  }

  if (step === 'essentials') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
          <button
            onClick={() => setStep('details')}
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="w-12 h-12 text-yellow-300" />
            <div>
              <h1 className="text-white text-3xl font-bold mb-1">
                Add Recommended Essentials
              </h1>
              <p className="text-white/90">
                Complete your trip planning
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div className="bg-white h-full w-2/3 rounded-full transition-all" />
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 -mt-4 space-y-6">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-5 border-2 border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-sm text-blue-900 mb-1">
                  Based on Your Preferences
                </h3>
                <p className="text-xs text-blue-800 leading-relaxed">
                  We've suggested travel essentials based on your saved preferences and this tour's requirements. 
                  Research each service and save what you need!
                </p>
              </div>
            </div>
          </div>

          {/* Suggested Essentials */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Suggested for This Trip
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {essentials.filter(e => e.saved).length} already saved to your preferences
            </p>

            <div className="space-y-4">
              {essentials.map(essential => (
                <EssentialCard
                  key={essential.id}
                  essential={essential}
                  onGoogleSearch={() => handleGoogleSearch(essential)}
                  onYouTubeSearch={() => handleYouTubeSearch(essential)}
                  onToggleSave={() => handleToggleSave(essential.id)}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 sticky bottom-20 bg-gradient-to-t from-white via-white to-transparent pt-6">
            <button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full h-14 font-bold text-lg hover:shadow-lg transition-all active:scale-98"
            >
              Continue to Booking →
            </button>
            <button
              onClick={handleSkip}
              className="w-full bg-gray-100 text-gray-700 rounded-full h-12 font-semibold hover:bg-gray-200 transition-all active:scale-98"
            >
              Skip This Step
            </button>
          </div>

          {/* Browse All Link */}
          <button
            onClick={() => navigate('/travel-essentials')}
            className="w-full text-blue-600 text-sm font-semibold underline hover:text-blue-700"
          >
            Browse All Travel Essentials →
          </button>
        </main>

        {/* Skip Confirmation Modal */}
        {showSkipModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-3xl p-6 max-w-sm shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Skip Travel Essentials?
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Adding travel essentials helps you plan better and get personalized recommendations. 
                You can always add them later from your trip dashboard.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowSkipModal(false)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full h-11 font-semibold hover:shadow-lg transition-all"
                >
                  Go Back
                </button>
                <button
                  onClick={confirmSkip}
                  className="flex-1 bg-gray-200 text-gray-700 rounded-full h-11 font-semibold hover:bg-gray-300 transition-all"
                >
                  Skip Anyway
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Confirmation step
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your {tourData.name} booking is confirmed. Check your email for details.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full h-12 font-bold hover:shadow-lg transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
