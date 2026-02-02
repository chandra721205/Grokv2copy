import { useState } from 'react';
import { motion } from 'motion/react';
import { Loader2, Target } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS BUTTON STATES
// "Get Personalized Plan" button with all interaction states
// ========================================

interface WellnessButtonStatesProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export function GetPersonalizedPlanButton({
  onClick,
  loading = false,
  disabled = false,
}: WellnessButtonStatesProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
    >
      <Button
        onClick={onClick}
        disabled={disabled || loading}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className={`
          w-full py-6 rounded-xl text-xl font-bold shadow-lg
          transition-all duration-200
          ${
            loading
              ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-wait'
              : disabled
              ? 'bg-gradient-to-r from-gray-300 to-gray-400 cursor-not-allowed opacity-60'
              : isPressed
              ? 'bg-gradient-to-r from-purple-700 to-pink-700 shadow-xl'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
          }
          text-white
        `}
      >
        {loading ? (
          <>
            <Loader2 className="mr-3 h-6 w-6 animate-spin" />
            Loading Your Plan...
          </>
        ) : (
          <>
            <Target className="mr-3 h-6 w-6" />
            🎯 Get Personalized Plan
          </>
        )}
      </Button>
    </motion.div>
  );
}

// ========================================
// STATUS BADGE VARIANTS
// Color-coded status badges
// ========================================

type BadgeStatus = 'pending' | 'quote-ready' | 'booked' | 'completed';

interface StatusBadgeProps {
  status: BadgeStatus;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const configs = {
    pending: {
      label: 'Pending',
      icon: '⏳',
      color: '#FFB74D', // Yellow
      bgClass: 'bg-[#FFB74D]',
      textClass: 'text-amber-900',
    },
    'quote-ready': {
      label: 'Quote Ready',
      icon: '📋',
      color: '#64B5F6', // Blue
      bgClass: 'bg-[#64B5F6]',
      textClass: 'text-blue-900',
    },
    booked: {
      label: 'Booked',
      icon: '✅',
      color: '#81C784', // Green
      bgClass: 'bg-[#81C784]',
      textClass: 'text-green-900',
    },
    completed: {
      label: 'Completed',
      icon: '✔️',
      color: '#BDBDBD', // Gray
      bgClass: 'bg-[#BDBDBD]',
      textClass: 'text-gray-900',
    },
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const config = configs[status];

  return (
    <div
      className={`
        ${config.bgClass} ${config.textClass} ${sizeClasses[size]}
        rounded-lg font-bold inline-flex items-center gap-2
      `}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </div>
  );
}

// ========================================
// LOADING SKELETON
// For proposal loading states
// ========================================

export function ProposalLoadingSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex-1">
          <div className="h-10 bg-gray-300 rounded-lg w-3/4 mb-4" />
          <div className="h-6 bg-gray-200 rounded-lg w-1/2" />
        </div>
        <div className="w-24 h-24 bg-gray-300 rounded-2xl" />
      </div>

      {/* Summary Card Skeleton */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 mb-8">
        <div className="h-16 bg-gray-300 rounded-lg w-1/3 mb-4" />
        <div className="h-4 bg-gray-300 rounded-lg w-2/3 mb-6" />
        <div className="grid md:grid-cols-2 gap-4">
          <div className="h-32 bg-white rounded-lg" />
          <div className="h-32 bg-white rounded-lg" />
        </div>
      </div>

      {/* Breakdown Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-gray-200 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// ========================================
// FORM VALIDATION ERROR STATE
// Real-time validation display
// ========================================

interface FormFieldErrorProps {
  error?: string;
  touched?: boolean;
}

export function FormFieldError({ error, touched }: FormFieldErrorProps) {
  if (!error || !touched) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red-600 text-sm font-semibold mt-2 flex items-center gap-2"
    >
      <span className="text-lg">⚠️</span>
      {error}
    </motion.p>
  );
}

// ========================================
// EMPTY STATE COMPONENT
// For "My Wellness Inquiries" when no inquiries exist
// ========================================

interface EmptyInquiriesStateProps {
  onBrowseWellness: () => void;
}

export function EmptyInquiriesState({ onBrowseWellness }: EmptyInquiriesStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-lg p-16 text-center"
    >
      <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-6xl">🏥</span>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        No Wellness Inquiries Yet
      </h3>
      <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
        Start your wellness journey by exploring our curated health & medical tourism programs
      </p>
      <Button
        onClick={onBrowseWellness}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-5 rounded-xl text-xl font-bold"
      >
        <Target className="mr-3 h-6 w-6" />
        Browse Wellness Programs
      </Button>
    </motion.div>
  );
}
