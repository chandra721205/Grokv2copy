import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { 
  X, Church, Mountain, PartyPopper, HeartPulse, Leaf, 
  Compass, GraduationCap, Heart, Users, Ship, Briefcase, 
  Trophy, Car, Accessibility, Sparkles, ArrowLeft, ChevronRight
} from 'lucide-react';

interface CategorySelectionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryId: string) => void;
}

// 15 categories with exact emojis and navigation targets
const tourCategories = [
  { id: 'devotional', emoji: '🕉️', name: 'Devotional', icon: Church, gradient: 'from-purple-500 to-pink-600', target: 'devotional' },
  { id: 'adventure', emoji: '⛰️', name: 'Adventure', icon: Mountain, gradient: 'from-orange-500 to-red-600', target: 'adventure' },
  { id: 'family-fun', emoji: '🎡', name: 'Family Fun', icon: PartyPopper, gradient: 'from-pink-500 to-rose-600', target: 'NEW', isNew: true },
  { id: 'wellness', emoji: '🧘', name: 'Health & Wellness', icon: HeartPulse, gradient: 'from-green-500 to-teal-600', target: 'wellness' },
  { id: 'eco', emoji: '🌿', name: 'Eco Tourism', icon: Leaf, gradient: 'from-emerald-500 to-green-600', target: 'eco' },
  { id: 'heritage', emoji: '🏛️', name: 'Heritage', icon: Compass, gradient: 'from-amber-500 to-orange-600', target: 'heritage' },
  { id: 'educational', emoji: '📚', name: 'Educational', icon: GraduationCap, gradient: 'from-blue-500 to-indigo-600', target: 'educational' },
  { id: 'honeymoon', emoji: '💑', name: 'Honeymoon', icon: Heart, gradient: 'from-pink-500 to-rose-600', target: 'honeymoon' },
  { id: 'senior', emoji: '👴', name: 'Senior & Special Care', icon: Users, gradient: 'from-indigo-500 to-purple-600', target: 'senior' },
  { id: 'cruise', emoji: '🚢', name: 'Cruise', icon: Ship, gradient: 'from-cyan-500 to-blue-600', target: 'cruise' },
  { id: 'corporate', emoji: '💼', name: 'Corporate', icon: Briefcase, gradient: 'from-gray-600 to-slate-700', target: 'corporate' },
  { id: 'sports', emoji: '⚽', name: 'Sports', icon: Trophy, gradient: 'from-yellow-500 to-orange-600', target: 'sports' },
  { id: 'self-drive', emoji: '🚗', name: 'Self-Drive', icon: Car, gradient: 'from-orange-400 to-amber-500', target: 'self-drive' },
  { id: 'accessibility', emoji: '♿', name: 'Accessibility Services', icon: Accessibility, gradient: 'from-teal-500 to-cyan-600', target: 'senior', isFallback: true },
  { id: 'other', emoji: '✨', name: 'Other/Custom', icon: Sparkles, gradient: 'from-violet-500 to-purple-600', target: 'NEW', isNew: true, hasInput: true },
];

export function CategorySelectionOverlay({ isOpen, onClose, onSelectCategory }: CategorySelectionOverlayProps) {
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
        // Prevent body scroll when overlay is open
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

  const handleCategoryClick = (category: typeof tourCategories[0]) => {
    try {
      // Validate before calling
      if (category && category.target) {
        onSelectCategory(category.target);
      }
    } catch (error) {
      console.error('Error selecting category:', error);
      // Close overlay on error
      onClose();
    }
  };

  // Prevent backdrop click from propagating
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
              <p className="text-white/90 text-sm">Select a category to continue to destinations</p>
            </div>

            {/* Instruction Banner */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b-2 border-orange-200 px-6 py-4 flex-shrink-0">
              <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>Select a category to continue to destinations</span>
              </p>
            </div>

            {/* Scrollable Category Grid */}
            <div className="flex-1 overflow-y-auto px-6 py-6 overscroll-contain">
              <div className="grid grid-cols-2 gap-4 pb-2">
                {tourCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      type="button"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCategoryClick(category)}
                      className={`relative bg-gradient-to-br ${category.gradient} rounded-[24px] p-5 text-white shadow-lg hover:shadow-xl transition-all group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      aria-label={`Select ${category.name} category`}
                    >
                      {/* Emoji at top */}
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform" aria-hidden="true">
                        {category.emoji}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-sm leading-tight text-left min-h-[2.5rem] flex items-center">
                        {category.name}
                      </h3>

                      {/* Hover indicator */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-[24px] transition-all pointer-events-none" />

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
                  <span className="font-bold text-blue-700">Note:</span> Categories marked "NEW" are coming soon. 
                  "Accessibility Services" routes to Senior Tourism section. 
                  "Other/Custom" allows custom tour requests.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
