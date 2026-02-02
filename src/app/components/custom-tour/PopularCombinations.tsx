import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

interface PopularCombinationsProps {
  onQuickSelect: (comboId: string, categoryIds: string[]) => void;
}

interface PopularCombo {
  id: string;
  title: string;
  emoji1: string;
  emoji2: string;
  category1: string;
  category2: string;
  category1Id: string;
  category2Id: string;
  gradient: string;
  description: string;
  tag?: string;
}

// 🎯 POPULAR COMBINATIONS - PRE-DEFINED COMBOS
// These are the most frequently chosen category combinations
// Quick Start auto-fills these 2 categories and sets Priority 1
const popularCombos: PopularCombo[] = [
  {
    id: 'devotional-adventure',
    title: 'Devotional + Adventure',
    emoji1: '🕉️',
    emoji2: '⛰️',
    category1: 'Devotional',
    category2: 'Adventure',
    category1Id: 'devotional',
    category2Id: 'adventure',
    gradient: 'from-purple-500 via-pink-500 to-orange-500',
    description: 'Sacred sites with thrilling experiences',
    tag: '🔥 POPULAR'
  },
  {
    id: 'family-honeymoon',
    title: 'Family Fun + Honeymoon',
    emoji1: '🎡',
    emoji2: '💑',
    category1: 'Family Fun',
    category2: 'Honeymoon',
    category1Id: 'family-fun',
    category2Id: 'honeymoon',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    description: 'Perfect blend for multigenerational trips',
    tag: '❤️ ROMANTIC'
  },
  {
    id: 'eco-heritage',
    title: 'Eco Tourism + Heritage',
    emoji1: '🌿',
    emoji2: '🏛️',
    category1: 'Eco Tourism',
    category2: 'Heritage',
    category1Id: 'eco',
    category2Id: 'heritage',
    gradient: 'from-emerald-500 via-green-500 to-amber-500',
    description: 'Nature trails & ancient wonders',
    tag: '🌍 ECO-FRIENDLY'
  },
  {
    id: 'wellness-senior',
    title: 'Health & Wellness + Senior Care',
    emoji1: '🧘',
    emoji2: '👴',
    category1: 'Health & Wellness',
    category2: 'Senior & Special Care',
    category1Id: 'wellness',
    category2Id: 'senior',
    gradient: 'from-green-500 via-teal-500 to-indigo-500',
    description: 'Relaxing trips with full care support',
    tag: '💚 WELLNESS'
  },
  {
    id: 'self-drive-sports',
    title: 'Self-Drive + Sports',
    emoji1: '🚗',
    emoji2: '⚽',
    category1: 'Self-Drive',
    category2: 'Sports',
    category1Id: 'self-drive',
    category2Id: 'sports',
    gradient: 'from-orange-400 via-amber-500 to-yellow-500',
    description: 'Road trips to sporting events',
    tag: '🏆 ADVENTURE'
  },
  {
    id: 'educational-heritage',
    title: 'Educational + Heritage',
    emoji1: '📚',
    emoji2: '🏛️',
    category1: 'Educational',
    category2: 'Heritage',
    category1Id: 'educational',
    category2Id: 'heritage',
    gradient: 'from-blue-500 via-indigo-500 to-amber-500',
    description: 'Learn history at historic sites',
    tag: '📖 LEARNING'
  },
  {
    id: 'custom-mix',
    title: '✨ Custom Mix',
    emoji1: '✨',
    emoji2: '🎨',
    category1: 'Custom',
    category2: 'Your Way',
    category1Id: 'custom',
    category2Id: 'custom',
    gradient: 'from-violet-500 via-purple-500 to-pink-500',
    description: 'Build your unique combination',
    tag: '⚡ UNIQUE'
  }
];

export function PopularCombinations({ onQuickSelect }: PopularCombinationsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 320; // Card width + gap
    const newScrollLeft = direction === 'left'
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleQuickStart = (combo: PopularCombo) => {
    if (combo.id === 'custom-mix') {
      // For custom mix, trigger with empty array to open full selection
      onQuickSelect('custom-mix', []);
    } else {
      // Pre-select the two categories
      onQuickSelect(combo.id, [combo.category1Id, combo.category2Id]);
    }
  };

  return (
    <div className="mb-8">
      {/* Admin Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold rounded-t-3xl mb-0">
        🔧 [Admin: Admin Editable Content - Popular combo suggestions]
      </div>

      {/* Section Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 pt-6 pb-4 rounded-b-3xl mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">[Admin: Popular Combinations]</h2>
            <p className="text-sm text-gray-600">[Admin: Quick Select - Pre-made combos or mix your own]</p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-purple-200">
          <p className="text-xs text-gray-700 text-center">
            <span className="font-semibold text-purple-700">Quick Start:</span> Select a popular combo to auto-fill 2–3 categories and Priority 1
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative px-6">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        )}

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {popularCombos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex-shrink-0 w-[300px] snap-start"
            >
              <div
                className={`relative h-full bg-gradient-to-br ${combo.gradient} rounded-[24px] p-5 shadow-lg hover:shadow-2xl transition-all cursor-pointer group`}
                onClick={() => handleQuickStart(combo)}
              >
                {/* Tag Badge */}
                {combo.tag && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-gray-800">{combo.tag}</span>
                  </div>
                )}

                {/* Emoji Icons */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">{combo.emoji1}</span>
                  </div>
                  <div className="text-white text-2xl font-bold">+</div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">{combo.emoji2}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-center font-bold text-lg mb-2">
                  {combo.title}
                </h3>

                {/* Category Names */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-xs text-white/90 bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">
                    {combo.category1}
                  </span>
                  <span className="text-white/80">•</span>
                  <span className="text-xs text-white/90 bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">
                    {combo.category2}
                  </span>
                </div>

                {/* Description */}
                <p className="text-white/80 text-xs text-center mb-4 leading-relaxed">
                  {combo.description}
                </p>

                {/* Quick Start Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuickStart(combo);
                  }}
                  className="w-full bg-white/90 hover:bg-white text-gray-900 font-bold py-3 rounded-xl transition-all active:scale-95 group-hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {combo.id === 'custom-mix' ? (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Build Custom</span>
                    </>
                  ) : (
                    <>
                      <span>Quick Start</span>
                      <span>→</span>
                    </>
                  )}
                </button>

                {/* Annotation */}
                <p className="text-[10px] text-white/60 text-center mt-2 italic">
                  {combo.id === 'custom-mix' 
                    ? 'Opens category selector'
                    : `Auto-fills ${combo.category1} + ${combo.category2}`
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {popularCombos.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Bottom Help Text */}
      <div className="px-6 mt-4">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <p className="text-xs text-blue-900 text-center">
            <span className="font-bold">💡 Pro Tip:</span> Popular combos auto-select 2 categories and set your first priority. 
            You can add more categories or customize after selection!
          </p>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
