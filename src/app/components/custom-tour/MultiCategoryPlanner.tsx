import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Sparkles,
  Heart,
  Check,
  ChevronRight,
  Info,
  Zap,
  Search,
  Youtube,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';

// ========================================
// MULTI-CATEGORY TRIP PLANNER
// ========================================
//
// 🎯 GROK AI ASSISTANT (START PLANNING TOURISM)
// Integrate Multi-Category Planner + Category Grid
//
// ✅ FEATURES:
// - 6 Quick Select Combo Cards (Popular Combinations)
// - 14 Category Tiles (Build Your Own Combination)
// - EXCLUDES Multi Faith (⛩️) as per requirements
// - Admin-only inventory (no hardcoded destinations)
// - Multiple category selection allowed
// - Grok AI integration for custom itinerary
// - Google Search & YouTube Browse buttons
//
// 🚫 NON-NEGOTIABLES:
// - No hardcoded destination inventory
// - Admin-managed content only
// - Preserve design system
// - Exclude Multi Faith category
//
// ========================================

interface QuickCombo {
  id: string;
  emoji: string;
  name: string;
  tagline: string;
  example: string;
  includes: string;
  gradient: string;
  categories: string[];
}

interface Category {
  id: string;
  emoji: string;
  name: string;
  description: string;
  gradient: string;
}

// 6 Popular Combinations (Quick Select)
const quickCombos: QuickCombo[] = [
  {
    id: 'spiritual-nature',
    emoji: '🙏🌿',
    name: 'Spiritual + Nature',
    tagline: 'Temple visits + eco-friendly stays',
    example: 'Spiritual Tourism • Nature walks',
    includes: 'Devotional Tourism + Eco Tourism',
    gradient: 'from-green-500 to-emerald-600',
    categories: ['devotional', 'eco-tourism'],
  },
  {
    id: 'adventure-heritage',
    emoji: '⛰️🏛️',
    name: 'Adventure + Heritage',
    tagline: 'Trekking + historical monuments',
    example: 'Trekking • Historical exploration • Scouter trekking',
    includes: 'Adventure Tourism + Heritage & Cultural',
    gradient: 'from-orange-500 to-red-600',
    categories: ['adventure', 'heritage'],
  },
  {
    id: 'family-complete',
    emoji: '👨‍👩‍👧🎓🏰',
    name: 'Family Complete',
    tagline: 'Fun + learning + culture for all ages',
    example: 'Water parks • temple excels • entertainment',
    includes: 'Cruise & Family Fun + Educational Tourism + Heritage & Cultural',
    gradient: 'from-blue-500 to-purple-600',
    categories: ['cruise-family', 'educational', 'heritage'],
  },
  {
    id: 'senior-spiritual',
    emoji: '🧓🕉️',
    name: 'Senior Spiritual',
    tagline: 'Senior-friendly pilgrimages with care',
    example: 'Temples • health support • comfortable stays',
    includes: 'Senior Wellness + Devotional Tourism',
    gradient: 'from-amber-500 to-orange-600',
    categories: ['senior-wellness', 'devotional'],
  },
  {
    id: 'honeymoon-luxury',
    emoji: '❤️🏖️🚢',
    name: 'Honeymoon Luxury',
    tagline: 'Romance + spa + cruise experience',
    example: 'Spa, beach resort • couples spa • couple cruise',
    includes: 'Honeymoon & Romance + Health & Wellness + Cruise & Family Fun',
    gradient: 'from-pink-500 to-rose-600',
    categories: ['honeymoon', 'wellness', 'cruise-family'],
  },
  {
    id: 'corporate-retreat',
    emoji: '💼⛰️🧘',
    name: 'Corporate Retreat',
    tagline: 'Team building + outdoor + wellness',
    example: 'Natural retreat • outdoor team activities',
    includes: 'Corporate & MICE + Adventure Tourism + Health & Wellness',
    gradient: 'from-indigo-500 to-blue-600',
    categories: ['corporate', 'adventure', 'wellness'],
  },
];

// 13 Category Tiles (EXCLUDES Multi Faith ⛩️ as per requirements)
const categories: Category[] = [
  {
    id: 'pilgrimage-atlas',
    emoji: '🗺️',
    name: 'PilgrimageAtlas',
    description: 'Maps and guides for holy sites',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 'educational',
    emoji: '🎓',
    name: 'Educational Tourism',
    description: 'Museums, study tours',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'adventure',
    emoji: '🏔️',
    name: 'Adventure Tourism',
    description: 'Trekking, rafting, safaris',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'devotional',
    emoji: '🙏',
    name: 'Devotional Tourism',
    description: 'Temples, shrines, pilgrimages',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    id: 'senior-wellness',
    emoji: '👴',
    name: 'Senior Wellness',
    description: 'Health support, relaxation',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'honeymoon',
    emoji: '💑',
    name: 'Honeymoon & Romance',
    description: 'Romantic luxury stays',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'wellness',
    emoji: '🌿',
    name: 'Health & Wellness',
    description: 'Ayurveda, yoga, spa',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    id: 'eco-tourism',
    emoji: '🌳',
    name: 'Eco-Tourism',
    description: 'Nature, sustainability, tribes',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    id: 'cruise-family',
    emoji: '🚢',
    name: 'Cruise & Family Fun',
    description: 'Theme parks, cruises, kids',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'corporate',
    emoji: '🏢',
    name: 'Corporate & MICE',
    description: 'Conferences, team building',
    gradient: 'from-slate-500 to-gray-600',
  },
  {
    id: 'heritage',
    emoji: '🏛️',
    name: 'Heritage & Cultural',
    description: 'UNESCO sites, festivals, crafts',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'sports',
    emoji: '⚽',
    name: 'Sports Tourism',
    description: 'Sporting events, stadium tours',
    gradient: 'from-red-500 to-orange-600',
  },
  {
    id: 'custom',
    emoji: '✨',
    name: 'Other / Custom',
    description: 'Tell us your unique interests',
    gradient: 'from-purple-500 to-pink-600',
  },
];

interface MultiCategoryPlannerProps {
  onBack?: () => void;
  onPlanTrip?: (selectedCategories: string[]) => void;
}

export function MultiCategoryPlanner({ onBack, onPlanTrip }: MultiCategoryPlannerProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [savedCombos, setSavedCombos] = useState<Set<string>>(new Set());

  const handleComboSelect = (combo: QuickCombo) => {
    setSelectedCategories(combo.categories);
    toast.success(`Selected: ${combo.name}`);
  };

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
      toast.info('Category removed');
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
      toast.success('Category added');
    }
  };

  const handleSaveCombo = (comboId: string) => {
    if (savedCombos.has(comboId)) {
      const newSaved = new Set(savedCombos);
      newSaved.delete(comboId);
      setSavedCombos(newSaved);
      toast.info('Removed from saved');
    } else {
      setSavedCombos(new Set(savedCombos).add(comboId));
      toast.success('Saved to favorites');
    }
  };

  const handlePlanMyTrip = () => {
    if (selectedCategories.length === 0) {
      toast.error('Please select at least one category to continue');
      return;
    }
    toast.success('Planning your custom trip with Grok AI...');
    onPlanTrip?.(selectedCategories);
  };

  const handleGoogleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(`India ${query} tourism`)}`, '_blank');
    toast.success('Opening Google Search');
  };

  const handleYouTubeSearch = (query: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(`India ${query} travel guide`)}`, '_blank');
    toast.success('Opening YouTube');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 pt-12 pb-8 px-6 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <h1 className="text-white text-2xl font-bold">Grok AI Assistant</h1>
            </div>
            <p className="text-white/90 text-sm">Start Planning Tourism</p>
          </div>
        </div>

        {/* Selected Count Badge */}
        {selectedCategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/20 backdrop-blur-md rounded-2xl p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-white font-bold">{selectedCategories.length} Categories Selected</span>
              </div>
              <Badge className="bg-green-500 text-white border-0">Ready</Badge>
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-6 -mt-6">
        {/* Multi-Category Trip Planner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-6 mb-6"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Multi-Category Trip Planner</h2>
              <p className="text-sm text-gray-600">
                Select multiple interests – Grok AI will create your perfect customized itinerary!
              </p>
            </div>
          </div>

          {/* Admin Notice */}
          <div className="bg-purple-50 border-2 border-dashed border-purple-300 rounded-xl p-3 mb-4">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-purple-900 leading-relaxed">
                <strong>Admin-Managed Content:</strong> All destinations, activities, and packages are curated by the app admin. 
                Use Google/YouTube buttons to discover real locations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🎯🎨 Popular Combinations (Quick Select) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎯🎨</span>
            <h3 className="text-xl font-bold text-gray-900">Popular Combinations (Quick Select)</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {quickCombos.map((combo, index) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${combo.gradient} p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{combo.emoji}</span>
                      <div>
                        <h4 className="text-white font-bold text-lg">{combo.name}</h4>
                        <p className="text-white/90 text-sm">{combo.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSaveCombo(combo.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        savedCombos.has(combo.id)
                          ? 'bg-white text-red-500'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${savedCombos.has(combo.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>e.g.</strong> {combo.example}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    <strong>Includes:</strong> {combo.includes}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleComboSelect(combo)}
                      className={`flex-1 rounded-xl h-11 font-bold ${combo.gradient} bg-gradient-to-r text-white`}
                    >
                      Select This Combo
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleGoogleSearch(combo.name)}
                      className="w-11 h-11 rounded-xl p-0"
                    >
                      <Search className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleYouTubeSearch(combo.name)}
                      className="w-11 h-11 rounded-xl p-0"
                    >
                      <Youtube className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Or Build Your Own Combination (Select Multiple) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Or Build Your Own Combination (Select Multiple)
            </h3>
            <p className="text-sm text-gray-600">Select Your Interests (Multiple Allowed)</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {categories.map((category, index) => {
              const isSelected = selectedCategories.includes(category.id);
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => handleCategoryToggle(category.id)}
                  className={`relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all border-2 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  {/* Selection Check */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                    <span className="text-2xl">{category.emoji}</span>
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-sm text-gray-900 mb-1 text-center">{category.name}</h4>
                  <p className="text-xs text-gray-600 text-center">{category.description}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Helper Text */}
          {selectedCategories.length === 0 && (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-4 text-center mb-6">
              <p className="text-sm text-gray-600">
                Select at least one category to continue
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl">
        <Button
          onClick={handlePlanMyTrip}
          disabled={selectedCategories.length === 0}
          className={`w-full rounded-2xl h-14 font-bold text-lg ${
            selectedCategories.length > 0
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Plan My Trip with Grok AI
          {selectedCategories.length > 0 && (
            <Badge className="ml-2 bg-white text-purple-600 border-0">
              {selectedCategories.length}
            </Badge>
          )}
        </Button>
      </div>
    </div>
  );
}
