import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  ArrowLeft, Crown, MapPin, Calendar, Users, DollarSign, 
  Save, CreditCard, MessageCircle, Sparkles, Check, Clock, Star
} from 'lucide-react';
import { PrioritizedCategory } from './PriorityAssignment';

interface ComboSummaryProps {
  onBack: () => void;
  onSaveCombo: () => void;
  onBookNow: () => void;
  prioritizedCategories: PrioritizedCategory[];
  selectedPrimaryDestination: string;
  selectedSuggestions: SuggestedDestination[];
}

interface SuggestedDestination {
  id: string;
  name: string;
  category: string;
  categoryEmoji: string;
  distance: string;
  duration: string;
  whyItFits: string;
  rating: number;
}

export function ComboSummary({ 
  onBack, 
  onSaveCombo, 
  onBookNow,
  prioritizedCategories,
  selectedPrimaryDestination,
  selectedSuggestions 
}: ComboSummaryProps) {
  const [showGrokTweaks, setShowGrokTweaks] = useState(false);
  const [savedToWishlist, setSavedToWishlist] = useState(false);

  // 🎯 COMBO TOUR ASSEMBLY - FINAL SUMMARY
  // Priority 1 = Main Reference Category (fixed base)
  // Priority 2-5 = Complementary add-ons (AI-suggested, user-selected)
  const priority1 = prioritizedCategories[0];
  const totalActivities = 1 + selectedSuggestions.length; // Priority 1 base + AI suggestions
  const estimatedDuration = `${3 + selectedSuggestions.length} days`;
  const estimatedCost = 15000 + (selectedSuggestions.length * 5000);
  
  // 🎯 FINAL COMBO STRUCTURE:
  // Base: Priority 1 destination(s) + Priority 1 activities (auto-selected during browsing)
  // Add-ons: Grok AI suggested items from Priorities 2-5 (user accepted)
  // All linked to same trip timeline with clear hierarchy

  const handleSave = () => {
    setSavedToWishlist(true);
    setTimeout(() => {
      onSaveCombo();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Your Combo Tour</h1>
            <p className="text-white/90 text-sm">Review and book your custom experience</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-white/80 text-xs font-semibold mb-1">Categories</p>
              <p className="text-white text-xl font-bold">{prioritizedCategories.length}</p>
            </div>
            <div className="text-center border-l border-r border-white/30">
              <p className="text-white/80 text-xs font-semibold mb-1">Activities</p>
              <p className="text-white text-xl font-bold">{totalActivities}</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-xs font-semibold mb-1">Duration</p>
              <p className="text-white text-xl font-bold">{estimatedDuration}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Success Message */}
        {savedToWishlist && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-5 border-2 border-green-400 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base text-green-900">Saved to Wishlist!</h3>
                <p className="text-xs text-green-700">You can access this combo anytime from My Trips</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Selected Categories & Priorities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-xl"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-purple-600" />
            Your Selected Categories
          </h2>
          
          <div className="space-y-3">
            {prioritizedCategories.map((category, index) => (
              <div
                key={category.id}
                className={`flex items-center gap-3 p-3 rounded-2xl ${
                  index === 0 
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400' 
                    : 'bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  index === 0 
                    ? 'bg-yellow-400 text-yellow-900' 
                    : 'bg-white text-gray-900'
                }`}>
                  {index === 0 ? <Crown className="w-5 h-5" /> : index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.emoji}</span>
                    <h3 className="font-bold text-sm text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {index === 0 ? 'Priority 1 - Main focus' : `Priority ${category.priority}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Destinations & Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-xl"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-orange-600" />
            Your Itinerary
          </h2>

          {/* Primary Destination */}
          <div className="mb-4 pb-4 border-b-2 border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{priority1.emoji}</span>
                  <h3 className="font-bold text-base text-gray-900 bg-gray-100 px-3 py-1 rounded-lg inline-block">
                    [{selectedPrimaryDestination}]
                  </h3>
                </div>
                <p className="text-xs text-gray-600">{priority1.name} • Your main destination</p>
                <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-semibold text-yellow-800">Priority 1 Choice</span>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Activities */}
          {selectedSuggestions.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm font-bold text-gray-700">Complementary Activities:</p>
              {selectedSuggestions.map((suggestion, index) => (
                <div key={suggestion.id} className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 2}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{suggestion.categoryEmoji}</span>
                      <h3 className="font-bold text-sm text-gray-900 bg-gray-100 px-2 py-0.5 rounded-lg inline-block">
                        [{suggestion.name}]
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{suggestion.category}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-orange-600" />
                        <span>{suggestion.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-600" />
                        <span>{suggestion.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedSuggestions.length === 0 && (
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <p className="text-sm text-gray-600">No additional activities selected</p>
              <p className="text-xs text-gray-500 mt-1">Your tour will focus on the Priority 1 destination</p>
            </div>
          )}
        </motion.div>

        {/* Estimated Cost */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-6 border-2 border-green-300 shadow-lg"
        >
          <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6" />
            Estimated Cost
          </h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Base package ({priority1.name})</span>
              <span className="font-semibold text-gray-900">₹15,000</span>
            </div>
            {selectedSuggestions.map((suggestion, index) => (
              <div key={suggestion.id} className="flex justify-between text-sm">
                <span className="text-gray-700">{suggestion.category} activity</span>
                <span className="font-semibold text-gray-900">₹5,000</span>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-green-400 pt-3 flex justify-between items-center">
            <span className="text-lg font-bold text-green-900">Total Estimated Cost</span>
            <span className="text-3xl font-bold text-green-600">₹{estimatedCost.toLocaleString()}</span>
          </div>

          <p className="text-xs text-green-700 mt-3 text-center">
            * Includes accommodation, activities, and local transport. Final price confirmed at booking.
          </p>
        </motion.div>

        {/* Ask Grok for Tweaks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-5 border-2 border-yellow-300 shadow-lg"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-orange-900 mb-1">Want to adjust your combo?</h3>
              <p className="text-xs text-orange-800">Ask Grok AI for tweaks or alternative suggestions</p>
            </div>
          </div>
          
          <button
            onClick={() => setShowGrokTweaks(!showGrokTweaks)}
            className="w-full h-10 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold text-sm hover:from-orange-600 hover:to-yellow-600 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{showGrokTweaks ? 'Hide Grok Chat' : 'Ask Grok for Tweaks'}</span>
          </button>
          
          {showGrokTweaks && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 bg-white rounded-2xl p-4"
            >
              <textarea
                className="w-full h-24 px-3 py-2 border-2 border-gray-300 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="E.g., 'Reduce travel time between activities' or 'Add more family-friendly options'"
              />
              <button className="w-full h-10 bg-orange-500 text-white rounded-xl font-semibold text-sm mt-2 hover:bg-orange-600 transition-all">
                Send to Grok AI
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-5"
        >
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs font-bold text-blue-900 mb-2">Next Steps:</p>
              <ul className="text-xs text-gray-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Save:</strong> Add to wishlist to book later</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Book Now:</strong> Select dates and complete payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Customize:</strong> Admin will contact you within 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl z-40">
        <div className="max-w-md mx-auto space-y-2">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleSave}
              disabled={savedToWishlist}
              className={`h-12 rounded-2xl font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                savedToWishlist
                  ? 'bg-green-500 text-white'
                  : 'bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
            >
              {savedToWishlist ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  <span>Save Combo</span>
                </>
              )}
            </button>
            
            <button
              onClick={onBookNow}
              className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-sm hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>Book Now</span>
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            Total: ₹{estimatedCost.toLocaleString()} • {totalActivities} {totalActivities === 1 ? 'activity' : 'activities'} • {estimatedDuration}
          </p>
        </div>
      </div>
    </div>
  );
}
