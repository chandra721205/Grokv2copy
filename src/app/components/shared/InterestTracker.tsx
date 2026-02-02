import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Check } from 'lucide-react';

// ========================================
// INTEREST TRACKER CONTEXT & STATE
// ========================================

interface Interest {
  userId: string;
  destinationId: string;
  destinationName: string;
  category: string;
  timestamp: string;
  isAdminConfirmed?: boolean;
}

interface InterestTrackerContextType {
  interests: Interest[];
  toggleInterest: (destinationId: string, destinationName: string, category: string) => void;
  isInterested: (destinationId: string) => boolean;
  isAdminConfirmed: (destinationId: string) => boolean;
  getInterestedCount: (destinationId: string) => number;
  getAllInterests: () => Interest[];
  clearInterests: () => void;
  confirmInterest: (destinationId: string) => void;
}

const InterestTrackerContext = createContext<InterestTrackerContextType | undefined>(undefined);

export function InterestTrackerProvider({ children }: { children: ReactNode }) {
  const [interests, setInterests] = useState<Interest[]>([]);
  const [userId] = useState(() => {
    // Get or create user ID
    let id = localStorage.getItem('grokyatra_user_id');
    if (!id) {
      id = `user_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
      localStorage.setItem('grokyatra_user_id', id);
    }
    return id;
  });

  // Load interests from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('grokyatra_interests');
    if (saved) {
      setInterests(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever interests change
  useEffect(() => {
    localStorage.setItem('grokyatra_interests', JSON.stringify(interests));
    
    // In production, sync to backend
    syncToBackend(interests);
  }, [interests]);

  const toggleInterest = (destinationId: string, destinationName: string, category: string) => {
    setInterests(prev => {
      const existing = prev.find(
        i => i.userId === userId && i.destinationId === destinationId
      );

      if (existing) {
        // Remove interest
        return prev.filter(
          i => !(i.userId === userId && i.destinationId === destinationId)
        );
      } else {
        // Add interest
        const newInterest: Interest = {
          userId,
          destinationId,
          destinationName,
          category,
          timestamp: new Date().toISOString(),
          isAdminConfirmed: false
        };
        
        // Track event
        trackInterestEvent('add', newInterest);
        
        return [...prev, newInterest];
      }
    });
  };

  const isInterested = (destinationId: string) => {
    return interests.some(
      i => i.userId === userId && i.destinationId === destinationId
    );
  };

  const isAdminConfirmed = (destinationId: string) => {
    const interest = interests.find(
      i => i.userId === userId && i.destinationId === destinationId
    );
    return interest?.isAdminConfirmed || false;
  };

  const getInterestedCount = (destinationId: string) => {
    return interests.filter(i => i.destinationId === destinationId).length;
  };

  const getAllInterests = () => {
    return interests;
  };

  const clearInterests = () => {
    setInterests([]);
    localStorage.removeItem('grokyatra_interests');
  };

  const confirmInterest = (destinationId: string) => {
    setInterests(prev =>
      prev.map(i =>
        i.destinationId === destinationId
          ? { ...i, isAdminConfirmed: true }
          : i
      )
    );
  };

  return (
    <InterestTrackerContext.Provider
      value={{
        interests,
        toggleInterest,
        isInterested,
        isAdminConfirmed,
        getInterestedCount,
        getAllInterests,
        clearInterests,
        confirmInterest
      }}
    >
      {children}
    </InterestTrackerContext.Provider>
  );
}

export function useInterestTracker() {
  const context = useContext(InterestTrackerContext);
  if (!context) {
    // Return default values instead of throwing error
    // This allows components to work without the provider
    return {
      interests: [],
      toggleInterest: () => {},
      isInterested: () => false,
      isAdminConfirmed: () => false,
      getInterestedCount: () => 0,
      getAllInterests: () => [],
      clearInterests: () => {},
      confirmInterest: () => {}
    };
  }
  return context;
}

// ========================================
// ANALYTICS & BACKEND SYNC
// ========================================

function trackInterestEvent(action: 'add' | 'remove', interest: Interest) {
  console.log('📊 Interest Event:', action, interest);
  
  // In production, send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'interest_' + action, {
      destination_id: interest.destinationId,
      destination_name: interest.destinationName,
      category: interest.category,
      user_id: interest.userId,
      timestamp: interest.timestamp
    });
  }
}

function syncToBackend(interests: Interest[]) {
  // In production, sync to backend API
  console.log('🔄 Syncing interests to backend:', interests.length, 'items');
  
  // Example backend sync:
  // await fetch('/api/interests/sync', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ interests })
  // });
}

// ========================================
// INTEREST TRACKER ICON COMPONENT
// ========================================

interface InterestTrackerIconProps {
  destinationId: string;
  destinationName: string;
  category: string;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export function InterestTrackerIcon({
  destinationId,
  destinationName,
  category,
  size = 'md',
  showCount = false
}: InterestTrackerIconProps) {
  const { toggleInterest, isInterested, isAdminConfirmed, getInterestedCount } = useInterestTracker();
  const [isHovered, setIsHovered] = useState(false);
  const [justClicked, setJustClicked] = useState(false);

  const interested = isInterested(destinationId);
  const confirmed = isAdminConfirmed(destinationId);
  const count = getInterestedCount(destinationId);

  // Size configurations
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleInterest(destinationId, destinationName, category);
    setJustClicked(true);
    setTimeout(() => setJustClicked(false), 300);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all ${
          interested
            ? confirmed
              ? 'bg-green-500 shadow-lg'
              : 'bg-pink-500 shadow-lg'
            : 'bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg'
        }`}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        aria-label={interested ? 'Remove from interests' : 'Add to interests'}
      >
        <AnimatePresence mode="wait">
          {confirmed ? (
            // State 4: Admin Confirmed - Checkmark
            <motion.div
              key="confirmed"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <Check className={`${iconSizes[size]} text-white`} />
            </motion.div>
          ) : interested ? (
            // State 3: Selected - Filled Heart
            <motion.div
              key="interested"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <Heart className={`${iconSizes[size]} text-white fill-current`} />
            </motion.div>
          ) : (
            // State 1: Default - Outline Heart
            // State 2: Hover - Slight Highlight
            <motion.div
              key="default"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Heart
                className={`${iconSizes[size]} ${
                  isHovered ? 'text-pink-500' : 'text-gray-600'
                } transition-colors`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Click Animation */}
      {justClicked && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          className="absolute inset-0 rounded-full border-2 border-pink-500"
        />
      )}

      {/* Interest Count Badge */}
      {showCount && count > 1 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-[10px] font-bold">{count}</span>
        </motion.div>
      )}
    </div>
  );
}

// ========================================
// INTEREST CONFIRMATION TOAST
// ========================================

interface InterestToastProps {
  show: boolean;
  destinationName: string;
  isAdding: boolean;
  onClose: () => void;
}

export function InterestToast({ show, destinationName, isAdding, onClose }: InterestToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            {isAdding ? (
              <>
                <Heart className="w-5 h-5 text-pink-500 fill-current" />
                <span className="text-sm font-semibold">
                  Added to interests: {destinationName}
                </span>
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-semibold">
                  Removed from interests
                </span>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ========================================
// ADMIN INTEREST DASHBOARD SUMMARY
// ========================================

export function InterestDashboardSummary() {
  const { getAllInterests } = useInterestTracker();
  const allInterests = getAllInterests();

  // Aggregate by destination
  const byDestination = allInterests.reduce((acc, interest) => {
    if (!acc[interest.destinationId]) {
      acc[interest.destinationId] = {
        name: interest.destinationName,
        category: interest.category,
        count: 0,
        users: []
      };
    }
    acc[interest.destinationId].count++;
    acc[interest.destinationId].users.push(interest.userId);
    return acc;
  }, {} as Record<string, { name: string; category: string; count: number; users: string[] }>);

  // Sort by count
  const topDestinations = Object.entries(byDestination)
    .sort(([, a], [, b]) => b.count - a.count)
    .slice(0, 10);

  // Aggregate by category
  const byCategory = allInterests.reduce((acc, interest) => {
    acc[interest.category] = (acc[interest.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-6 h-6 text-pink-600 fill-current" />
            <span className="text-xs text-pink-600 font-semibold">Total Interests</span>
          </div>
          <p className="text-3xl font-bold text-pink-900">{allInterests.length}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs text-blue-600 font-semibold">Destinations</span>
          </div>
          <p className="text-3xl font-bold text-blue-900">{Object.keys(byDestination).length}</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs text-green-600 font-semibold">Unique Users</span>
          </div>
          <p className="text-3xl font-bold text-green-900">
            {new Set(allInterests.map(i => i.userId)).size}
          </p>
        </div>
      </div>

      {/* Top Destinations */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200">
        <h3 className="text-lg font-bold mb-4">🔥 Top Interested Destinations</h3>
        <div className="space-y-3">
          {topDestinations.map(([id, data], index) => (
            <div
              key={id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl font-bold text-gray-400 w-8">#{index + 1}</span>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{data.name}</p>
                <p className="text-xs text-gray-600">{data.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500 fill-current" />
                <span className="text-lg font-bold text-pink-600">{data.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200">
        <h3 className="text-lg font-bold mb-4">📊 Interest by Category</h3>
        <div className="space-y-2">
          {Object.entries(byCategory)
            .sort(([, a], [, b]) => b - a)
            .map(([category, count]) => (
              <div key={category} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold capitalize">{category}</span>
                    <span className="text-sm text-gray-600">{count}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
                      style={{ width: `${(count / allInterests.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}