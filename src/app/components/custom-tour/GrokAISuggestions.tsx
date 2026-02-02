import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Sparkles, MapPin, Clock, TrendingUp, Plus, Check, MessageCircle } from 'lucide-react';
import { PrioritizedCategory } from './PriorityAssignment';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface GrokAISuggestionsProps {
  onBack: () => void;
  onAddToCombo: (suggestions: SuggestedDestination[]) => void;
  prioritizedCategories: PrioritizedCategory[];
  selectedPrimaryDestination: string;
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
  image: string;
}

export function GrokAISuggestions({ 
  onBack, 
  onAddToCombo, 
  prioritizedCategories,
  selectedPrimaryDestination 
}: GrokAISuggestionsProps) {
  const [addedSuggestions, setAddedSuggestions] = useState<string[]>([]);
  const [showAskGrok, setShowAskGrok] = useState(false);

  const priority1 = prioritizedCategories[0];
  const otherPriorities = prioritizedCategories.slice(1);

  // 🎯 GROK AI INTEGRATION - COMBO TOUR SUGGESTIONS
  // AI analyzes Priority 1 (Main Reference Category) selections and suggests complementary activities
  const generateSuggestions = (): SuggestedDestination[] => {
    const suggestions: SuggestedDestination[] = [];
    
    // 🎯 GROK AI ANALYSIS INPUTS:
    // 1. Priority 1 category (e.g., Devotional)
    // 2. Selected Priority 1 destination(s) (e.g., "Admin-Added Temple 1")
    // 3. Selected Priority 1 activities (e.g., "Morning Prayer", "Temple Tour")
    // 4. Priority 2-5 categories (complementary interests)
    
    // 🎯 GROK AI SUGGESTION LOGIC:
    // - Uses Admin-listed inventory first (e.g., "Admin-Added Heritage Fort 1")
    // - Supplements with Google & YouTube discovery for inspiration
    // - Prioritizes proximity to Priority 1 destination
    // - Considers visitor patterns and compatibility
    // - All suggestions are editable and optional (non-destructive)
    
    // Generate suggestions for each secondary priority (2-5)
    otherPriorities.forEach((priority, index) => {
      suggestions.push({
        id: `suggestion-${priority.id}-${index}`,
        name: `Admin-Added ${priority.name} Destination ${index + 1}`, // 🎯 From admin inventory
        category: priority.name,
        categoryEmoji: priority.emoji,
        distance: `${50 + index * 30} km from ${selectedPrimaryDestination}`,
        duration: `${1 + index} hour drive`,
        whyItFits: `Perfect ${priority.name.toLowerCase()} activity near your ${priority1.name.toLowerCase()} destination. Grok AI recommends this based on proximity and visitor patterns.`,
        rating: 4.5 + (Math.random() * 0.4),
        image: getImageQuery(priority.name)
      });
    });

    // 🎯 FINAL COMBO TOUR ASSEMBLY:
    // Priority 1 selections (fixed base) + AI-suggested items (user can accept/reject)
    // No duplication of destination/activity selection steps
    // Clear hierarchy maintained: Priority 1 → Priorities 2-5
    // All categories linked to same trip timeline

    return suggestions;
  };

  const getImageQuery = (categoryName: string): string => {
    const imageMap: Record<string, string> = {
      'Adventure': 'mountain adventure india',
      'Devotional': 'indian temple',
      'Health & Wellness': 'yoga wellness india',
      'Eco Tourism': 'nature forest india',
      'Heritage': 'heritage fort india',
      'Honeymoon': 'romantic beach india',
      'Educational': 'museum india',
      'Family Fun': 'theme park india',
      'Senior & Special Care': 'peaceful garden india',
      'Cruise': 'boat cruise india',
      'Corporate': 'conference resort india',
      'Sports': 'sports stadium india',
      'Self-Drive': 'scenic road india',
    };
    return imageMap[categoryName] || 'india tourism';
  };

  const suggestions = generateSuggestions();

  const toggleAddSuggestion = (id: string) => {
    setAddedSuggestions(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleContinueToSummary = () => {
    const selected = suggestions.filter(s => addedSuggestions.includes(s.id));
    onAddToCombo(selected);
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
            <h1 className="text-white text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Grok AI Suggestions
            </h1>
            <p className="text-white/90 text-sm">Complementary activities for your combo tour</p>
          </div>
        </div>

        {/* Priority 1 Info */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
              {priority1.emoji}
            </div>
            <div className="flex-1">
              <p className="text-white/80 text-xs font-semibold">Your Priority 1 Choice:</p>
              <p className="text-white text-base font-bold">{selectedPrimaryDestination}</p>
              <p className="text-white/70 text-xs">{priority1.name} Category</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* AI Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-5 border-2 border-blue-300 shadow-lg"
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-blue-900 mb-2">How Grok AI Helps:</h3>
              <p className="text-xs text-blue-800 leading-relaxed">
                Based on your <span className="font-bold">{priority1.name}</span> destination and {otherPriorities.length} other {otherPriorities.length === 1 ? 'priority' : 'priorities'}, 
                Grok AI has found the best complementary activities within reasonable distance. Add the ones you like!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Suggestions List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 px-2">
            Suggested Activities ({suggestions.length})
          </h2>

          {suggestions.map((suggestion, index) => {
            const isAdded = addedSuggestions.includes(suggestion.id);
            return (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  isAdded ? 'ring-4 ring-green-400' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-40 bg-gradient-to-br from-gray-200 to-gray-300">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/featured/400x300/?${encodeURIComponent(suggestion.image)}`}
                    alt={suggestion.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
                    <span>{suggestion.categoryEmoji}</span>
                    <span>{suggestion.category}</span>
                  </div>

                  {/* Added Badge */}
                  {isAdded && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      <span>Added</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 bg-gray-100 px-3 py-1 rounded-lg inline-block">
                    [{suggestion.name}]
                  </h3>

                  {/* Distance & Duration */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span>{suggestion.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{suggestion.duration}</span>
                    </div>
                  </div>

                  {/* Why It Fits */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 mb-4">
                    <p className="text-xs font-bold text-purple-900 mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Why Grok recommends this:
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {suggestion.whyItFits}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <span key={star} className={star <= Math.round(suggestion.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{suggestion.rating.toFixed(1)}</span>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => toggleAddSuggestion(suggestion.id)}
                    className={`w-full h-12 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 ${
                      isAdded
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Added to Combo</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        <span>Add to Combo</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ask Grok for More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-5 border-2 border-yellow-300 shadow-lg"
        >
          <div className="flex items-start gap-3 mb-3">
            <MessageCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-base text-orange-900 mb-1">No perfect matches?</h3>
              <p className="text-xs text-orange-800">Ask Grok AI for more personalized suggestions</p>
            </div>
          </div>
          <button
            onClick={() => setShowAskGrok(!showAskGrok)}
            className="w-full h-10 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold text-sm hover:from-orange-600 hover:to-yellow-600 transition-all"
          >
            {showAskGrok ? 'Hide Chat' : 'Ask Grok for More Ideas'}
          </button>
          
          {showAskGrok && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 bg-white rounded-2xl p-4"
            >
              <textarea
                className="w-full h-24 px-3 py-2 border-2 border-gray-300 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="E.g., 'I want water sports near my temple visit' or 'Suggest family-friendly activities'"
              />
              <button className="w-full h-10 bg-orange-500 text-white rounded-xl font-semibold text-sm mt-2 hover:bg-orange-600 transition-all">
                Send to Grok AI
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl z-40">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">
              Selected: {addedSuggestions.length} of {suggestions.length}
            </span>
            <span className="text-xs text-gray-500">
              {addedSuggestions.length > 0 ? '✓ Ready to continue' : 'Select activities to add'}
            </span>
          </div>
          <button
            onClick={handleContinueToSummary}
            className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg active:scale-95"
          >
            Continue to Combo Summary ({addedSuggestions.length}) →
          </button>
        </div>
      </div>
    </div>
  );
}
