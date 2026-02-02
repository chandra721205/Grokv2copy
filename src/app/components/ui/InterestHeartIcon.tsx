import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// ICON/INTEREST HEART
// Heart Icon with State Variants
// ========================================
// Used for Interest Tracker system
// Animated filled/empty states
// Saves to localStorage
// ========================================

export interface InterestHeartIconProps {
  /** Unique identifier for the item */
  itemId: string;
  
  /** Item name for display */
  itemName: string;
  
  /** Category (for organizing interests) */
  category?: string;
  
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /** Initial filled state (overrides localStorage) */
  initialFilled?: boolean;
  
  /** Callback when state changes */
  onToggle?: (isFilled: boolean) => void;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Custom className */
  className?: string;
}

const sizeConfig = {
  xs: { icon: 'w-4 h-4', container: 'w-8 h-8', text: 'text-[8px]' },
  sm: { icon: 'w-5 h-5', container: 'w-10 h-10', text: 'text-[9px]' },
  md: { icon: 'w-6 h-6', container: 'w-12 h-12', text: 'text-[10px]' },
  lg: { icon: 'w-7 h-7', container: 'w-14 h-14', text: 'text-xs' },
  xl: { icon: 'w-8 h-8', container: 'w-16 h-16', text: 'text-sm' }
};

export function InterestHeartIcon({
  itemId,
  itemName,
  category = 'general',
  size = 'md',
  initialFilled,
  onToggle,
  showAdminIndicators = false,
  className = ''
}: InterestHeartIconProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;
  
  const [isFilled, setIsFilled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    if (initialFilled !== undefined) {
      setIsFilled(initialFilled);
      return;
    }

    const savedInterests = JSON.parse(
      localStorage.getItem('grokyatra_interests') || '[]'
    );
    const isInterested = savedInterests.some(
      (item: any) => item.id === itemId
    );
    setIsFilled(isInterested);
  }, [itemId, initialFilled]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const newFilledState = !isFilled;
    setIsFilled(newFilledState);

    // Save to localStorage
    const savedInterests = JSON.parse(
      localStorage.getItem('grokyatra_interests') || '[]'
    );

    if (newFilledState) {
      // Add to interests
      const newInterest = {
        id: itemId,
        name: itemName,
        category,
        timestamp: new Date().toISOString()
      };
      savedInterests.push(newInterest);
    } else {
      // Remove from interests
      const filtered = savedInterests.filter(
        (item: any) => item.id !== itemId
      );
      savedInterests.length = 0;
      savedInterests.push(...filtered);
    }

    localStorage.setItem('grokyatra_interests', JSON.stringify(savedInterests));

    // Callback
    onToggle?.(newFilledState);

    // Show tooltip briefly
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500);
  };

  const sizes = sizeConfig[size];

  return (
    <div className={`relative ${className}`}>
      {/* Heart Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          ${sizes.container}
          bg-white rounded-full shadow-md
          flex items-center justify-center
          transition-all duration-200
          hover:shadow-lg
          ${showIndicators ? 'border-2 border-purple-300 border-dashed' : ''}
          relative z-10
        `}
        aria-label={isFilled ? 'Remove from interests' : 'Add to interests'}
      >
        <AnimatePresence mode="wait">
          {isFilled ? (
            // Filled Heart
            <motion.div
              key="filled"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Heart 
                className={`${sizes.icon} text-red-500 fill-red-500`}
              />
            </motion.div>
          ) : (
            // Empty Heart
            <motion.div
              key="empty"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Heart 
                className={`${sizes.icon} text-gray-400`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation on fill */}
        {isFilled && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-full bg-red-500"
          />
        )}
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`
              absolute top-full mt-2 left-1/2 -translate-x-1/2
              bg-gray-900 text-white rounded-lg px-3 py-2
              ${sizes.text} font-medium whitespace-nowrap
              pointer-events-none z-20
              shadow-lg
            `}
          >
            {isFilled ? 'Added to interests ❤️' : 'Add to interests'}
            {/* Arrow */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Indicator */}
      {showIndicators && (
        <div className="absolute -top-2 -right-2 z-30">
          <div className="bg-purple-100 border-2 border-purple-300 rounded-full w-5 h-5 flex items-center justify-center">
            <span className="text-[8px]">🔧</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ========================================
// INTEREST HEART WITH COUNTER
// Shows number of interests
// ========================================

export interface InterestHeartWithCounterProps {
  /** Total number of interests */
  count: number;
  
  /** Click handler to view all interests */
  onClick?: () => void;
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Custom className */
  className?: string;
}

export function InterestHeartWithCounter({
  count,
  onClick,
  size = 'md',
  showAdminIndicators = false,
  className = ''
}: InterestHeartWithCounterProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  const sizeClasses = {
    sm: { icon: 'w-5 h-5', container: 'h-10 px-3 text-xs' },
    md: { icon: 'w-6 h-6', container: 'h-12 px-4 text-sm' },
    lg: { icon: 'w-7 h-7', container: 'h-14 px-5 text-base' }
  };

  const sizes = sizeClasses[size];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        bg-gradient-to-r from-pink-500 to-red-500
        text-white rounded-full shadow-md hover:shadow-lg
        ${sizes.container}
        flex items-center gap-2 font-semibold
        transition-all duration-200
        ${showIndicators ? 'border-2 border-purple-300 border-dashed' : ''}
        ${className}
      `}
    >
      <Heart className={`${sizes.icon} fill-white`} />
      <span>{count > 0 ? count : '0'}</span>
    </motion.button>
  );
}

// ========================================
// HELPER: Get All Interests
// ========================================

export interface InterestItem {
  id: string;
  name: string;
  category: string;
  timestamp: string;
}

export function getAllInterests(): InterestItem[] {
  const savedInterests = localStorage.getItem('grokyatra_interests');
  if (!savedInterests) return [];
  
  try {
    return JSON.parse(savedInterests);
  } catch {
    return [];
  }
}

// ========================================
// HELPER: Get Interests by Category
// ========================================

export function getInterestsByCategory(category: string): InterestItem[] {
  const allInterests = getAllInterests();
  return allInterests.filter(item => item.category === category);
}

// ========================================
// HELPER: Clear All Interests
// ========================================

export function clearAllInterests(): void {
  localStorage.removeItem('grokyatra_interests');
}

// ========================================
// HELPER: Remove Interest
// ========================================

export function removeInterest(itemId: string): void {
  const interests = getAllInterests();
  const filtered = interests.filter(item => item.id !== itemId);
  localStorage.setItem('grokyatra_interests', JSON.stringify(filtered));
}
