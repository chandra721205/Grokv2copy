import { Heart, Accessibility, Stethoscope, Ear } from 'lucide-react';

export interface AccessibilityFeatures {
  seniorFriendly?: boolean;
  wheelchairAccessible?: boolean;
  medicalSupport?: boolean;
  sensoryFriendly?: boolean;
}

interface AccessibilityBadgesProps {
  features: AccessibilityFeatures;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical' | 'grid';
  withTooltip?: boolean;
  className?: string;
}

const badgeConfig = {
  seniorFriendly: {
    icon: Heart,
    label: 'Senior-Friendly',
    emoji: '👴',
    color: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  wheelchairAccessible: {
    icon: Accessibility,
    label: 'Wheelchair Accessible',
    emoji: '♿',
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  medicalSupport: {
    icon: Stethoscope,
    label: 'Medical Support',
    emoji: '🏥',
    color: 'bg-green-100 text-green-700 border-green-300',
  },
  sensoryFriendly: {
    icon: Ear,
    label: 'Sensory-Friendly',
    emoji: '👂',
    color: 'bg-purple-100 text-purple-700 border-purple-300',
  },
};

export function AccessibilityBadges({
  features,
  size = 'sm',
  layout = 'horizontal',
  withTooltip = false,
  className = '',
}: AccessibilityBadgesProps) {
  const activeBadges = Object.entries(features)
    .filter(([_, value]) => value)
    .map(([key]) => key as keyof AccessibilityFeatures);

  if (activeBadges.length === 0) {
    return null;
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm',
  };

  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-1',
    vertical: 'flex flex-col gap-1',
    grid: 'grid grid-cols-2 gap-1',
  };

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {activeBadges.map((badgeKey) => {
        const badge = badgeConfig[badgeKey];
        const Icon = badge.icon;

        return (
          <div
            key={badgeKey}
            className={`${badge.color} ${sizeClasses[size]} rounded-full font-medium border flex items-center gap-1 ${
              withTooltip ? 'group relative cursor-help' : ''
            }`}
            title={withTooltip ? badge.label : undefined}
          >
            <span>{badge.emoji}</span>
            {size !== 'sm' && <span className="hidden sm:inline">{badge.label}</span>}
            
            {withTooltip && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {badge.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Icon-only version for compact displays
export function AccessibilityIcons({
  features,
  size = 'md',
  withTooltip = true,
  className = '',
}: Omit<AccessibilityBadgesProps, 'layout'>) {
  const activeBadges = Object.entries(features)
    .filter(([_, value]) => value)
    .map(([key]) => key as keyof AccessibilityFeatures);

  if (activeBadges.length === 0) {
    return null;
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {activeBadges.map((badgeKey) => {
        const badge = badgeConfig[badgeKey];

        return (
          <div
            key={badgeKey}
            className={`relative ${withTooltip ? 'group cursor-help' : ''}`}
            title={withTooltip ? badge.label : undefined}
          >
            <div className={`w-7 h-7 rounded-full ${badge.color} flex items-center justify-center border`}>
              <span className="text-sm">{badge.emoji}</span>
            </div>
            
            {withTooltip && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {badge.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Compact text-only version
export function AccessibilityLabels({
  features,
  className = '',
}: Pick<AccessibilityBadgesProps, 'features' | 'className'>) {
  const activeBadges = Object.entries(features)
    .filter(([_, value]) => value)
    .map(([key]) => badgeConfig[key as keyof AccessibilityFeatures].label);

  if (activeBadges.length === 0) {
    return null;
  }

  return (
    <p className={`text-xs text-teal-700 font-medium ${className}`}>
      {activeBadges.join(' • ')}
    </p>
  );
}
