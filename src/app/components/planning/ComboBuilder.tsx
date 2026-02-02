import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Map, Youtube } from 'lucide-react';
import type { ComboBuilderProps } from './types';

const popularCombos = [
  {
    id: 'spiritual-nature',
    title: 'Spiritual + Nature',
    emoji: '🙏🌿',
    description: 'Temple visits + eco-friendly stays',
    example: 'e.g. Spiritual Tourism • Nature walks',
    includes: 'Devotional Tourism + Eco Tourism',
    categories: ['devotional', 'ecoTourism'],
    careBadges: ['👴 Senior-Friendly', '♿ Accessible Options'],
  },
  {
    id: 'adventure-heritage',
    title: 'Adventure + Heritage',
    emoji: '⛰️🏛️',
    description: 'Trekking + historical monuments',
    example: 'e.g. Trekking • Historical exploration • Scouter trekking',
    includes: 'Adventure Tourism + Heritage & Cultural',
    categories: ['adventure', 'heritage'],
    careBadges: ['👴 Moderate Pace Available', '♿ Selective Accessibility'],
  },
  {
    id: 'family-complete',
    title: 'Family Complete',
    emoji: '👨‍👩‍👧🎓🏰',
    description: 'Fun + learning + culture for all ages',
    example: 'e.g. Water parks • temple excels • entertainment',
    includes: 'Cruise & Family Fun + Educational Tourism + Heritage & Cultural',
    categories: ['cruise', 'familyFun', 'educational', 'heritage'],
    careBadges: ['👵 Senior Care Add-ons', '👨‍👩‍👧‍👦 Family Support'],
  },
  {
    id: 'senior-spiritual',
    title: 'Senior Spiritual',
    emoji: '🧓🕉️',
    description: 'Senior-friendly pilgrimages with care',
    example: 'e.g. Temples • health support • comfortable stays',
    includes: 'Senior Wellness + Devotional Tourism + Health & Wellness',
    categories: ['seniorCare', 'devotional', 'health'],
    careFeatures: [
      '✓ Wheelchair-accessible temples',
      '✓ On-call medical support',
      '✓ Gentle-paced itineraries',
      '✓ Special dietary accommodations',
    ],
  },
  {
    id: 'honeymoon-luxury',
    title: 'Honeymoon Luxury',
    emoji: '❤️🏖️🚢',
    description: 'Romance + spa + cruise experience',
    example: 'e.g. Spa, beach resort • couples spa • couple cruise',
    includes: 'Honeymoon & Romance + Health & Wellness + Cruise & Family Fun',
    categories: ['honeymoon', 'health', 'cruise'],
    careBadges: ['👴 Multi-gen Options', '♿ Accessibility Upgrades'],
  },
  {
    id: 'corporate-retreat',
    title: 'Corporate Retreat',
    emoji: '💼⛰️🧘',
    description: 'Team building + outdoor + wellness',
    example: 'e.g. Natural retreat • outdoor team activities',
    includes: 'Corporate & MICE + Adventure Tourism + Health & Wellness',
    categories: ['corporate', 'adventure', 'health'],
    careBadges: ['👴 Inclusive Planning', '♿ ADA Compliant'],
  },
];

const categories = [
  { id: 'devotional', emoji: '🕉️', name: 'Devotional' },
  { id: 'adventure', emoji: '⛰️', name: 'Adventure' },
  { id: 'familyFun', emoji: '🎡', name: 'Family Fun' },
  { id: 'health', emoji: '🧘', name: 'Health & Wellness' },
  { id: 'ecoTourism', emoji: '🌿', name: 'Eco Tourism' },
  { id: 'heritage', emoji: '🏛️', name: 'Heritage' },
  { id: 'educational', emoji: '📚', name: 'Educational' },
  { id: 'honeymoon', emoji: '💑', name: 'Honeymoon' },
  { id: 'seniorCare', emoji: '👴', name: 'Senior & Special Care' },
  { id: 'cruise', emoji: '🚢', name: 'Cruise' },
  { id: 'corporate', emoji: '💼', name: 'Corporate' },
  { id: 'sports', emoji: '⚽', name: 'Sports' },
  { id: 'selfDrive', emoji: '🚗', name: 'Self-Drive' },
  { id: 'accessibility', emoji: '♿', name: 'Accessibility Services' },
  { id: 'other', emoji: '✨', name: 'Other/Custom' },
];

export function ComboBuilder({ onNext, onBack }: ComboBuilderProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const selectCombo = (comboCategories: string[], comboId: string, comboTitle: string) => {
    setSelectedCategories(comboCategories);
    // When combo is selected, immediately navigate with combo info
    onNext({ 
      selectedCategories: comboCategories,
      comboId,
      comboName: comboTitle
    });
  };

  const handleGoogleSearch = () => {
    try {
      const query = selectedCategories.length > 0
        ? `india tourism ${selectedCategories.map(id => categories.find(c => c.id === id)?.name).filter(Boolean).join(' ')} destinations`
        : 'india tourism destinations';
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Popup was blocked, provide fallback
        console.warn('Popup blocked. Opening in same tab.');
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error opening Google search:', error);
    }
  };

  const handleYouTubeSearch = () => {
    try {
      const query = selectedCategories.length > 0
        ? `india ${selectedCategories.map(id => categories.find(c => c.id === id)?.name).filter(Boolean).join(' ')} travel guide`
        : 'india travel destinations';
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Popup was blocked, provide fallback
        console.warn('Popup blocked. Opening in same tab.');
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error opening YouTube search:', error);
    }
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
          <h1 className="text-white font-bold text-2xl mb-2">Combo Builder</h1>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-2 bg-white/30 rounded-full">
            <div className="h-2 bg-white rounded-full transition-all duration-300" style={{ width: '20%' }} />
          </div>
          <span className="text-white text-sm font-semibold">Step 1 of 6</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Multi-Category Trip Planner Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-2">Multi-Category Trip Planner</h2>
            <p className="text-gray-600 text-sm mb-1">Select multiple interests – Grok AI will create your perfect customized itinerary!</p>
          </div>

          {/* Popular Combinations */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🎯</span>
              <h3 className="text-lg font-bold text-purple-700">Popular Combinations (Quick Select)</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {popularCombos.map((combo, index) => {
                // Check if this combo is currently selected
                const isComboSelected = combo.categories.length === selectedCategories.length &&
                  combo.categories.every(cat => selectedCategories.includes(cat));
                
                return (
                  <motion.button
                    key={combo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => selectCombo(combo.categories, combo.id, combo.title)}
                    className={`relative rounded-3xl p-4 shadow-md transition-all border-2 text-left touch-manipulation min-h-[160px] flex flex-col ${
                      isComboSelected
                        ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-500 shadow-xl ring-2 ring-purple-400 ring-offset-2'
                        : 'bg-white border-purple-100 hover:border-purple-300 hover:shadow-xl'
                    }`}
                  >
                    {isComboSelected && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    <div className="text-2xl mb-2">{combo.emoji}</div>
                    <h4 className={`font-bold text-sm mb-1 ${isComboSelected ? 'text-purple-900' : 'text-purple-900'}`}>
                      {combo.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">{combo.description}</p>
                    <p className="text-xs text-purple-600 italic mb-1">{combo.example}</p>
                    <p className="text-xs text-gray-500 font-medium">
                      <span className="text-purple-700">Includes:</span> {combo.includes}
                    </p>
                    
                    {/* Care & Accessibility Badges */}
                    {combo.careBadges && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {combo.careBadges.map((badge, badgeIndex) => (
                          <span
                            key={badgeIndex}
                            className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-[10px] font-medium border border-teal-300"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Care Features for Senior Spiritual */}
                    {combo.careFeatures && (
                      <div className="mt-2 space-y-0.5">
                        {combo.careFeatures.map((feature, featureIndex) => (
                          <p key={featureIndex} className="text-[10px] text-green-700 font-medium">
                            {feature}
                          </p>
                        ))}
                      </div>
                    )}
                  </motion.button>
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
        </div>

        {/* Icon & Title */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-3xl">✨</span>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Create Your Custom Combo Tour</h2>
          <p className="text-gray-600 text-sm">Mix & match categories • Powered by Grok AI • Perfect for diverse groups</p>
        </div>

        {/* Category Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-900">✨ Select Your Interests (Multiple Allowed)</h3>
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-2 rounded-full">
              <span className="text-white font-bold text-sm">{selectedCategories.length} selected</span>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
            {categories.map((category, index) => {
              const isSelected = selectedCategories.includes(category.id);
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleCategory(category.id)}
                  className={`relative aspect-square rounded-3xl p-2 md:p-3 flex flex-col items-center justify-center transition-all touch-manipulation ${
                    isSelected
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg ring-2 ring-blue-400'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  <span className="text-3xl mb-1">{category.emoji}</span>
                  <span className={`text-xs font-bold text-center ${isSelected ? 'text-white' : 'text-blue-900'}`}>
                    {category.name}
                  </span>
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Discovery Buttons */}
        {selectedCategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-blue-50 rounded-3xl p-4 border-2 border-blue-200"
          >
            <p className="text-sm font-semibold text-blue-900 mb-3 text-center">
              🔍 Discover destinations for your selected interests
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
          </motion.div>
        )}

        {/* Grok AI Suggestion Button */}
        <button
          onClick={() => selectedCategories.length > 0 && onNext({ selectedCategories, comboId: 'custom', comboName: 'Custom Build' })}
          disabled={selectedCategories.length === 0}
          className={`w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 rounded-3xl font-bold shadow-lg transition-all ${
            selectedCategories.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl active:scale-[0.98]'
          }`}
        >
          Continue to Destination Selection
        </button>

        {/* Blend Mode Section */}
        <div className="mt-6 mb-6">
          <h3 className="text-base font-semibold text-gray-700 mb-4">How should we blend your selected categories?</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-3xl shadow-lg">
              <div className="text-2xl mb-2">⚖️</div>
              <div className="font-bold text-lg mb-1">Balanced Mix</div>
              <div className="text-xs opacity-90">Equal time for all selected categories</div>
            </button>
            <button className="bg-white border-2 border-gray-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">✨</div>
              <div className="font-bold text-lg mb-1 text-gray-800">Custom Blend</div>
              <div className="text-xs text-gray-600">Tell Grok your specific priorities</div>
            </button>
          </div>
        </div>

        {/* Grok AI Summary */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-6 text-white shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">💡</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1">Grok AI Preference Summary</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-blue-200">Categories Selected:</span>
                  <span className="font-semibold ml-2">
                    {selectedCategories.length > 0 ? `${selectedCategories.length} selected` : 'None yet'}
                  </span>
                </div>
                <div>
                  <span className="text-blue-200">Blend Mode:</span>
                  <span className="font-semibold ml-2">Balanced Mix</span>
                </div>
                <div>
                  <span className="text-blue-200">Next Steps:</span>
                  <span className="font-semibold ml-2">
                    Complete group details and preferences to get personalized recommendations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Message */}
        {selectedCategories.length === 0 && (
          <div className="mt-6 bg-orange-50 border-2 border-orange-300 rounded-2xl p-4 flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h5 className="font-bold text-orange-800 mb-1">No Categories Selected</h5>
              <p className="text-sm text-orange-700">
                Please select at least one category to create your custom combo tour. Choose from the options above to get started!
              </p>
            </div>
          </div>
        )}

        <p className="text-center text-gray-400 text-sm mt-6">Scroll for more ↓</p>
      </div>
    </div>
  );
}
