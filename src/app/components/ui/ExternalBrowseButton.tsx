import { motion } from 'motion/react';
import { Search, Youtube, ExternalLink, LucideIcon } from 'lucide-react';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// BUTTON/EXTERNAL BROWSE
// YouTube/Google Search Buttons
// ========================================
// Opens external search in new tab
// Admin-editable button labels
// ========================================

export type BrowseButtonType = 'google' | 'youtube';

export interface ExternalBrowseButtonProps {
  /** Button type (google or youtube) */
  type: BrowseButtonType;
  
  /** Search query */
  searchQuery: string;
  
  /** Admin-editable button label */
  label?: string;
  
  /** Click handler (optional, defaults to opening URL) */
  onClick?: () => void;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  
  /** Full width */
  fullWidth?: boolean;
  
  /** Custom className */
  className?: string;
}

const buttonConfigs = {
  google: {
    icon: Search,
    defaultLabel: 'Google Search',
    baseUrl: 'https://www.google.com/search?q=',
    bgColor: 'bg-white',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    hoverBg: 'hover:bg-blue-50',
    iconColor: 'text-blue-600'
  },
  youtube: {
    icon: Youtube,
    defaultLabel: 'YouTube Browse',
    baseUrl: 'https://www.youtube.com/results?search_query=',
    bgColor: 'bg-white',
    borderColor: 'border-red-200',
    textColor: 'text-red-600',
    hoverBg: 'hover:bg-red-50',
    iconColor: 'text-red-600'
  }
};

export function ExternalBrowseButton({
  type,
  searchQuery,
  label,
  onClick,
  showAdminIndicators = false,
  size = 'md',
  fullWidth = false,
  className = ''
}: ExternalBrowseButtonProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;
  
  const config = buttonConfigs[type];
  const Icon = config.icon;
  const displayLabel = label || `[Admin: ${config.defaultLabel}]`;

  // Size variants
  const sizeClasses = {
    sm: 'h-9 px-3 text-xs gap-1.5',
    md: 'h-11 px-4 text-sm gap-2',
    lg: 'h-12 px-5 text-base gap-2.5'
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: open in new tab
      const url = `${config.baseUrl}${encodeURIComponent(searchQuery)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`
        ${config.bgColor} ${config.borderColor} ${config.textColor}
        ${config.hoverBg}
        border-2 rounded-2xl font-semibold
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : 'inline-flex'}
        flex items-center justify-center
        transition-all duration-200
        shadow-sm hover:shadow-md
        ${showIndicators ? 'border-purple-300 border-dashed' : ''}
        ${className}
      `}
    >
      {/* Icon */}
      <Icon className={`${iconSizes[size]} ${config.iconColor}`} />
      
      {/* Label */}
      <span 
        className={showIndicators 
          ? 'bg-gray-100 border border-dashed border-purple-300 px-2 py-0.5 rounded' 
          : ''
        }
      >
        {displayLabel}
      </span>
      
      {/* External Link Indicator */}
      <ExternalLink className={`${iconSizes[size]} opacity-60`} />
    </motion.button>
  );
}

// ========================================
// COMBINED BROWSE BUTTONS
// Google + YouTube in a row
// ========================================

export interface BrowseButtonsGroupProps {
  /** Search query */
  searchQuery: string;
  
  /** Admin-editable labels */
  content?: {
    googleLabel?: string;
    youtubeLabel?: string;
  };
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  
  /** Layout: 'row' or 'column' */
  layout?: 'row' | 'column';
  
  /** Custom className */
  className?: string;
}

export function BrowseButtonsGroup({
  searchQuery,
  content,
  showAdminIndicators = false,
  size = 'md',
  layout = 'row',
  className = ''
}: BrowseButtonsGroupProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  return (
    <div 
      className={`
        ${layout === 'row' ? 'flex gap-3' : 'space-y-3'}
        ${className}
      `}
    >
      {/* Google Search Button */}
      <ExternalBrowseButton
        type="google"
        searchQuery={searchQuery}
        label={content?.googleLabel}
        showAdminIndicators={showIndicators}
        size={size}
        fullWidth={layout === 'column'}
      />

      {/* YouTube Browse Button */}
      <ExternalBrowseButton
        type="youtube"
        searchQuery={searchQuery}
        label={content?.youtubeLabel}
        showAdminIndicators={showIndicators}
        size={size}
        fullWidth={layout === 'column'}
      />

      {/* Admin Instructions */}
      {showIndicators && layout === 'column' && (
        <div className="p-3 bg-purple-50 border-2 border-purple-200 rounded-xl">
          <p className="text-[10px] text-purple-800 font-semibold mb-1">
            📝 Admin Editable Fields:
          </p>
          <ul className="text-[9px] text-purple-700 space-y-0.5 list-disc list-inside">
            <li>Google Search button label</li>
            <li>YouTube Browse button label</li>
          </ul>
          <p className="text-[9px] text-purple-600 mt-2">
            ℹ️ These buttons open external sites in new tabs
          </p>
        </div>
      )}
    </div>
  );
}

// ========================================
// HELPER: Build Search Query
// ========================================

export interface SearchQueryOptions {
  /** Base destination or category name */
  destination: string;
  
  /** Additional keywords */
  keywords?: string[];
  
  /** Location filter */
  location?: string;
  
  /** Travel type (e.g., 'honeymoon', 'family', 'adventure') */
  travelType?: string;
}

export function buildSearchQuery(options: SearchQueryOptions): string {
  const parts: string[] = [options.destination];

  if (options.travelType) {
    parts.push(options.travelType);
  }

  if (options.location) {
    parts.push(options.location);
  }

  if (options.keywords && options.keywords.length > 0) {
    parts.push(...options.keywords);
  }

  return parts.join(' ');
}

// ========================================
// HELPER: Format Query for Platform
// ========================================

export function formatQueryForPlatform(
  query: string,
  platform: BrowseButtonType
): string {
  switch (platform) {
    case 'google':
      // Google: Add travel-specific terms
      return `${query} tourism travel guide`;
    
    case 'youtube':
      // YouTube: Add video-specific terms
      return `${query} travel vlog tour guide`;
    
    default:
      return query;
  }
}
