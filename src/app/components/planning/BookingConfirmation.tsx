import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Edit, MapPin, Users, Calendar, DollarSign, Car, Zap, Hotel, Map, Youtube, Download, Share2, Heart } from 'lucide-react';
import type { BookingConfirmationProps } from './types';

export function BookingConfirmation({ onConfirm, onBack, onEdit, tripData = {} }: BookingConfirmationProps) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [savedTrip, setSavedTrip] = useState(false);

  const handleGoogleSearch = () => {
    const query = 'india tourism destinations itinerary planner booking';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const query = 'india travel guide tour booking tips';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  const handleSaveTrip = () => {
    setSavedTrip(true);
    setTimeout(() => setSavedTrip(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            aria-label="Go back"
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveTrip}
              aria-label={savedTrip ? "Trip saved" : "Save trip"}
              className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
            >
              <Heart className={`w-5 h-5 ${savedTrip ? 'fill-white text-white' : 'text-white'}`} />
            </button>
            <button aria-label="Share trip" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-white font-bold text-2xl mb-2">Review & Confirm</h1>
          <p className="text-white/90 text-sm">Your personalized itinerary is ready!</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-2 bg-white/30 rounded-full">
            <div className="h-2 bg-white rounded-full transition-all duration-300" style={{ width: '100%' }} />
          </div>
          <span className="text-white text-sm font-semibold">Step 6 of 6</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-md mx-auto pb-20">
        {/* Grok AI Generated Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl mb-6"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Grok AI Itinerary Ready!</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Based on your preferences, we've created a personalized multi-category tour combining all your selected interests into one seamless journey.
              </p>
            </div>
          </div>

          {/* Admin Placeholder Notice */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-start gap-2">
              <span className="text-lg">ℹ️</span>
              <div>
                <p className="text-xs text-white/80 leading-relaxed">
                  <strong className="text-white">Admin Configuration:</strong> Specific destinations, activities, pricing, and tour packages are configured by the admin. This preview shows the structure only.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trip Summary Sections */}
        <div className="space-y-4 mb-6">
          {/* Destination Selected (if available) */}
          {tripData.destination?.selectedDestinationName && (
            <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <h3 className="font-bold text-base text-gray-800">Selected Destination</h3>
                </div>
                <button
                  onClick={() => onEdit('destination')}
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm font-semibold">Edit</span>
                </button>
              </div>
              
              <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                  {tripData.destination.selectedDestinationName}
                </h4>
                {tripData.destination.destinationLocation && (
                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {tripData.destination.destinationLocation}
                  </p>
                )}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {tripData.destination.destinationDuration && (
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{tripData.destination.destinationDuration}</span>
                    </div>
                  )}
                  {tripData.destination.destinationPrice && (
                    <div className="flex items-center gap-1 text-sm">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">{tripData.destination.destinationPrice}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* AI Customization (if available) */}
          {tripData.customization?.customDescription && (
            <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-base text-gray-800">AI Custom Request</h3>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Your Request:</strong> {tripData.customization.customDescription}
                </p>
                {tripData.customization.customBudgetRange && (
                  <p className="text-xs text-gray-600">Budget: {tripData.customization.customBudgetRange}</p>
                )}
                {tripData.customization.specialRequests && (
                  <p className="text-xs text-gray-600 mt-1">Special Requests: {tripData.customization.specialRequests}</p>
                )}
              </div>
            </div>
          )}

          {/* Categories Selected */}
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <h3 className="font-bold text-base text-gray-800">Tour Categories</h3>
              </div>
              <button
                onClick={() => onEdit('categories')}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Edit className="w-4 h-4" />
                <span className="text-sm font-semibold">Edit</span>
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-sm text-gray-600 mb-2">Selected Interests:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                  🕉️ <span className="bg-gray-100 px-1 rounded">[Admin: Category 1]</span>
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  ⛰️ <span className="bg-gray-100 px-1 rounded">[Admin: Category 2]</span>
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  🌿 <span className="bg-gray-100 px-1 rounded">[Admin: Category 3]</span>
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                Categories displayed are admin-configured based on your selections
              </p>
            </div>
          </div>

          {/* Group Details */}
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-base text-gray-800">Group Details</h3>
              </div>
              <button
                onClick={() => onEdit('group')}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Edit className="w-4 h-4" />
                <span className="text-sm font-semibold">Edit</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-2xl p-3">
                <p className="text-xs text-gray-600 mb-1">Total Travelers</p>
                <p className="text-2xl font-bold text-blue-600 bg-gray-100 px-2 rounded inline-block">[Admin: Count]</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-3">
                <p className="text-xs text-gray-600 mb-1">Group Type</p>
                <p className="text-sm font-bold text-purple-600 bg-gray-100 px-2 py-1 rounded inline-block">[Admin: Type]</p>
              </div>
            </div>
          </div>

          {/* Trip Preferences */}
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-base text-gray-800">Trip Preferences</h3>
              </div>
              <button
                onClick={() => onEdit('preferences')}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Edit className="w-4 h-4" />
                <span className="text-sm font-semibold">Edit</span>
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Budget</span>
                </div>
                <span className="text-sm font-bold text-gray-800 bg-gray-200 px-2 py-1 rounded">[Admin: Budget Range]</span>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Duration</span>
                </div>
                <span className="text-sm font-bold text-gray-800 bg-gray-200 px-2 py-1 rounded">[Admin: Duration]</span>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Travel Pace</span>
                </div>
                <span className="text-sm font-bold text-gray-800 bg-gray-200 px-2 py-1 rounded">[Admin: Travel Pace]</span>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-3">
                <div className="flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Accommodation</span>
                </div>
                <span className="text-sm font-bold text-gray-800 bg-gray-200 px-2 py-1 rounded">[Admin: Accommodation Level]</span>
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-base text-gray-800">Transport</h3>
              </div>
              <button
                onClick={() => onEdit('transport')}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Edit className="w-4 h-4" />
                <span className="text-sm font-semibold">Edit</span>
              </button>
            </div>
            
            <div className="bg-orange-50 rounded-2xl p-4">
              <p className="text-sm font-bold text-orange-700 mb-1 bg-gray-100 px-2 py-1 rounded inline-block">[Admin: Transport Mode]</p>
              <p className="text-xs text-gray-600">Vehicle: <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Vehicle Type]</span></p>
            </div>
          </div>

          {/* Special Care Services Included */}
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-5 shadow-md border-2 border-teal-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤝</span>
                <h3 className="font-bold text-base text-teal-900">Special Care Services Included</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-white rounded-xl p-3">
                <span className="text-sm">👴</span>
                <p className="text-sm text-gray-700">Senior-Friendly Pace & Facilities</p>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl p-3">
                <span className="text-sm">🏥</span>
                <p className="text-sm text-gray-700">On-call Medical Support</p>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl p-3">
                <span className="text-sm">🍽️</span>
                <p className="text-sm text-gray-700">Special Dietary Accommodations</p>
              </div>
            </div>
          </div>

          {/* Accessibility Provisions */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-5 shadow-md border-2 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">♿</span>
                <h3 className="font-bold text-base text-blue-900">Accessibility Provisions</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-white rounded-xl p-3">
                <span className="text-sm">♿</span>
                <p className="text-sm text-gray-700">Wheelchair-Accessible Venues & Transport</p>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl p-3">
                <span className="text-sm">👂</span>
                <p className="text-sm text-gray-700">Sensory-Friendly Itinerary Planning</p>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl p-3">
                <span className="text-sm">🧠</span>
                <p className="text-sm text-gray-700">Cognitive Support & Patient Guides</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Itinerary Preview */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 border-2 border-indigo-200 shadow-lg mb-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-indigo-600" />
            <h3 className="font-bold text-lg text-indigo-900">Sample Itinerary Preview</h3>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 border-l-4 border-indigo-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-600">Day 1-2</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">[Admin: Destination 1]</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 mb-1 bg-gray-100 px-2 py-1 rounded">[Admin: Activity Day 1]</p>
              <p className="text-xs text-gray-600">Activities: <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Activity List 1]</span></p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-purple-600">Day 3-4</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">[Admin: Destination 2]</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 mb-1 bg-gray-100 px-2 py-1 rounded">[Admin: Activity Day 2]</p>
              <p className="text-xs text-gray-600">Activities: <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Activity List 2]</span></p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 border-l-4 border-pink-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-pink-600">Day 5+</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">[Admin: Destination 3]</span>
              </div>
              <p className="text-sm font-semibold text-gray-800 mb-1 bg-gray-100 px-2 py-1 rounded">[Admin: Activity Day 3]</p>
              <p className="text-xs text-gray-600">Activities: <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Activity List 3]</span></p>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 rounded-2xl p-3 border border-yellow-200">
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-yellow-800">⚠️ Note:</strong> Destinations, activities, and pricing are placeholders. Actual itinerary will be generated by admin based on your preferences.
            </p>
          </div>
        </div>

        {/* Discovery Buttons */}
        <div className="mb-6 bg-blue-50 rounded-3xl p-4 border-2 border-blue-200">
          <p className="text-sm font-semibold text-blue-900 mb-3 text-center">
            🔍 Research more about destinations & tours
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

        {/* Pricing Estimate */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-green-200 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h3 className="font-bold text-lg text-gray-800">Estimated Pricing</h3>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tour Package</span>
              <span className="font-semibold bg-gray-100 px-2 py-1 rounded">[Admin: Base Price]</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Transport</span>
              <span className="font-semibold bg-gray-100 px-2 py-1 rounded">[Admin: Transport Cost]</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Accommodation</span>
              <span className="font-semibold bg-gray-100 px-2 py-1 rounded">[Admin: Accommodation Cost]</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Activities & Meals</span>
              <span className="font-semibold bg-gray-100 px-2 py-1 rounded">[Admin: Activities Cost]</span>
            </div>
          </div>
          
          <div className="border-t-2 border-gray-200 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg text-gray-800">Total Estimate</span>
              <span className="font-bold text-2xl text-green-600 bg-gray-100 px-3 py-1 rounded">[Admin: Total Price]</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              *Pricing is approximate and will be finalized by admin based on availability and season
            </p>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-3xl p-5 shadow-md mb-6">
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 text-green-600 focus:ring-2 focus:ring-green-400"
              />
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I agree to the <span className="text-blue-600 font-semibold underline">Terms & Conditions</span> and understand that this is a preliminary booking request. Final confirmation and pricing will be provided by the admin.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer p-3 bg-teal-50 rounded-xl border border-teal-200">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 rounded border-2 border-teal-300 text-teal-600 focus:ring-2 focus:ring-teal-400"
              />
              <div>
                <p className="text-sm text-teal-900 font-semibold leading-relaxed">
                  ✓ I confirm all special care and accessibility needs have been communicated and will be available.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={onConfirm}
            disabled={!agreedToTerms}
            className={`w-full py-4 rounded-3xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
              agreedToTerms
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            Confirm & Submit Request
          </button>

          <button className="w-full py-4 rounded-3xl font-bold bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Itinerary (PDF)
          </button>
        </div>

        {/* Info Footer */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-5 border border-blue-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h4 className="font-bold text-sm text-blue-900 mb-2">What happens next?</h4>
              <ul className="text-xs text-gray-700 space-y-1.5 leading-relaxed">
                <li>✅ Admin reviews your preferences and confirms availability</li>
                <li>✅ You'll receive final itinerary with exact destinations & pricing</li>
                <li>✅ Payment options and booking confirmation will be sent</li>
                <li>✅ Any modifications can be requested during review</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">Almost there! Review and confirm to proceed 🎉</p>
      </div>
    </div>
  );
}
