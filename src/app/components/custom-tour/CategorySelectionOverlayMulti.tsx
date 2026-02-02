import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { 
  X, Church, Mountain, PartyPopper, HeartPulse, Leaf, 
  Compass, GraduationCap, Heart, Users, Ship, Briefcase, 
  Trophy, Car, Accessibility, Sparkles, ArrowLeft, CheckCircle2, Circle
} from 'lucide-react';

interface CategorySelectionOverlayMultiProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueToPriorities: (selectedCategories: SelectedCategory[]) => void;
}

export interface SelectedCategory {
  id: string;
  emoji: string;
  name: string;
  gradient: string;
  target: string;
  isNew?: boolean;
  isFallback?: boolean;
  hasInput?: boolean;
}

// 15 categories with exact emojis and navigation targets
const tourCategories: SelectedCategory[] = [
  { id: 'devotional', emoji: '🕉️', name: 'Devotional', gradient: 'from-purple-500 to-pink-600', target: 'devotional' },
  { id: 'adventure', emoji: '⛰️', name: 'Adventure', gradient: 'from-orange-500 to-red-600', target: 'adventure' },
  { id: 'family-fun', emoji: '🎡', name: 'Family Fun', gradient: 'from-pink-500 to-rose-600', target: 'NEW', isNew: true },
  { id: 'wellness', emoji: '🧘', name: 'Health & Wellness', gradient: 'from-green-500 to-teal-600', target: 'wellness' },
  { id: 'eco', emoji: '🌿', name: 'Eco Tourism', gradient: 'from-emerald-500 to-green-600', target: 'eco' },
  { id: 'heritage', emoji: '🏛️', name: 'Heritage', gradient: 'from-amber-500 to-orange-600', target: 'heritage' },
  { id: 'educational', emoji: '📚', name: 'Educational', gradient: 'from-blue-500 to-indigo-600', target: 'educational' },
  { id: 'honeymoon', emoji: '💑', name: 'Honeymoon', gradient: 'from-pink-500 to-rose-600', target: 'honeymoon' },
  { id: 'senior', emoji: '👴', name: 'Senior & Special Care', gradient: 'from-indigo-500 to-purple-600', target: 'senior' },
  { id: 'cruise', emoji: '🚢', name: 'Cruise', gradient: 'from-cyan-500 to-blue-600', target: 'cruise' },
  { id: 'corporate', emoji: '💼', name: 'Corporate', gradient: 'from-gray-600 to-slate-700', target: 'corporate' },
  { id: 'sports', emoji: '⚽', name: 'Sports', gradient: 'from-yellow-500 to-orange-600', target: 'sports' },
  { id: 'self-drive', emoji: '🚗', name: 'Self-Drive', gradient: 'from-orange-400 to-amber-500', target: 'self-drive' },
  { id: 'accessibility', emoji: '♿', name: 'Accessibility Services', gradient: 'from-teal-500 to-cyan-600', target: 'senior', isFallback: true },
  { id: 'other', emoji: '✨', name: 'Other/Custom', gradient: 'from-violet-500 to-purple-600', target: 'NEW', isNew: true, hasInput: true },
];

export function CategorySelectionOverlayMulti({ isOpen, onClose, onContinueToPriorities }: CategorySelectionOverlayMultiProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showWarning, setShowWarning] = useState(false);

  // Handle ESC key to close overlay
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      try {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      } catch (error) {
        console.error('Error handling escape key:', error);
      }
    };

    if (isOpen) {
      try {
        document.addEventListener('keydown', handleEscape);
        if (document.body) {
          document.body.style.overflow = 'hidden';
        }
      } catch (error) {
        console.error('Error setting up overlay:', error);
      }
    }

    return () => {
      try {
        document.removeEventListener('keydown', handleEscape);
        if (document.body) {
          document.body.style.overflow = 'unset';
        }
      } catch (error) {
        console.error('Error cleaning up overlay:', error);
      }
    };
  }, [isOpen, onClose]);

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedCategories([]);
      setShowWarning(false);
    }
  }, [isOpen]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        if (prev.length >= 5) {
          // Show warning if trying to select more than 5
          setShowWarning(true);
          setTimeout(() => setShowWarning(false), 3000);
          return prev;
        }
        return [...prev, categoryId];
      }
    });
  };

  const handleContinue = () => {
    if (selectedCategories.length < 2) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    const selected = selectedCategories.map(id => 
      tourCategories.find(cat => cat.id === id)!
    );
    onContinueToPriorities(selected);
  };

  const isValid = selectedCategories.length >= 2 && selectedCategories.length <= 5;

  const handleBackdropClick = (e: React.MouseEvent) => {
    try {
      e.stopPropagation();
      onClose();
    } catch (error) {
      console.error('Error handling backdrop click:', error);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Overlay Panel - Mobile-first, centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-20 bottom-20 bg-white rounded-[2rem] shadow-2xl z-50 overflow-hidden flex flex-col max-w-[420px] mx-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="category-overlay-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Matching existing gradient style */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-6 flex-shrink-0 rounded-t-[2rem]">
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors active:scale-95"
                  aria-label="Go back"
                  type="button"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors active:scale-95"
                  aria-label="Close overlay"
                  type="button"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <h2 id="category-overlay-title" className="text-white text-2xl font-bold mb-2">
                Create Your Custom Combo Tour
              </h2>
              <p className="text-white/90 text-sm">Select 2–5 categories for your personalized combo</p>
              
              {/* Selection Counter */}
              <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center justify-between">
                <span className="text-white text-sm font-semibold">Selected:</span>
                <span className={`text-white text-lg font-bold ${isValid ? 'text-green-200' : 'text-yellow-200'}`}>
                  {selectedCategories.length} / 5
                </span>
              </div>
            </div>

            {/* Warning Banner */}
            <AnimatePresence>
              {showWarning && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gradient-to-r from-red-100 to-orange-100 border-b-2 border-red-300 px-6 py-4 flex-shrink-0"
                >
                  <p className="text-sm font-semibold text-red-800 text-center">
                    {selectedCategories.length < 2 
                      ? '⚠️ Please select at least 2 categories' 
                      : '⚠️ Maximum 5 categories allowed'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Instruction Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-blue-200 px-6 py-3 flex-shrink-0">
              <p className="text-xs font-semibold text-gray-700 text-center">
                ✨ Tap cards to select/deselect • Min 2 categories • Max 5 categories
              </p>
            </div>

            {/* Scrollable Category Grid */}
            <div className="flex-1 overflow-y-auto px-6 py-6 overscroll-contain">
              <div className="grid grid-cols-2 gap-4 pb-2">
                {tourCategories.map((category, index) => {
                  const isSelected = selectedCategories.includes(category.id);
                  return (
                    <motion.button
                      key={category.id}
                      type="button"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleCategory(category.id)}
                      className={`relative bg-gradient-to-br ${category.gradient} rounded-[24px] p-5 text-white shadow-lg hover:shadow-xl transition-all group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isSelected ? 'ring-4 ring-white ring-offset-2' : ''
                      }`}
                      aria-label={`${isSelected ? 'Deselect' : 'Select'} ${category.name} category`}
                      aria-pressed={isSelected}
                    >
                      {/* Checkbox Indicator */}
                      <div className="absolute top-2 left-2 z-10">
                        {isSelected ? (
                          <CheckCircle2 className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" />
                        ) : (
                          <Circle className="w-6 h-6 text-white/60" />
                        )}
                      </div>

                      {/* Emoji at top */}
                      <div className="text-4xl mb-3 mt-2 group-hover:scale-110 transition-transform" aria-hidden="true">
                        {category.emoji}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-sm leading-tight text-left min-h-[2.5rem] flex items-center">
                        {category.name}
                      </h3>

                      {/* Hover indicator */}
                      <div className={`absolute inset-0 rounded-[24px] transition-all pointer-events-none ${
                        isSelected ? 'bg-white/20' : 'bg-white/0 group-hover:bg-white/10'
                      }`} />

                      {/* Badges */}
                      {category.isNew && (
                        <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                          NEW
                        </div>
                      )}
                      {category.isFallback && (
                        <div className="absolute top-2 right-2 bg-blue-400 text-blue-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                          →Senior
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Info Note */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-[24px] p-4"
              >
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-bold text-blue-700">How it works:</span> Select 2-5 categories, assign priorities, then Grok AI will suggest complementary destinations from your selected categories to create the perfect combo tour!
                </p>
              </motion.div>
            </div>

            {/* Bottom Action Bar */}
            <div className="border-t border-gray-200 px-6 py-4 flex-shrink-0 bg-white">
              <button
                onClick={handleContinue}
                disabled={!isValid}
                className={`w-full h-14 rounded-2xl font-bold text-base transition-all shadow-lg ${
                  isValid
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 active:scale-95'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Priorities →
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                {selectedCategories.length === 0 && 'Select at least 2 categories to continue'}
                {selectedCategories.length === 1 && 'Select 1 more category to continue'}
                {selectedCategories.length >= 2 && selectedCategories.length <= 5 && '✓ Ready to assign priorities!'}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
