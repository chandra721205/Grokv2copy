import { motion } from 'motion/react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';
import { ComponentAnnotation, AnnotationData } from '@/app/components/ui/ComponentAnnotation';

// ========================================
// CARD/DESTINATION/TEMPLATE
// Base Destination Card Component
// ========================================
// Reusable card with admin-editable placeholders
// Supports all category variants
// ========================================

export interface DestinationCardTemplateProps {
  /** Unique identifier for the destination */
  id: string;
  
  /** Icon component (from lucide-react) */
  icon: LucideIcon;
  
  /** Gradient classes for icon background */
  gradientFrom: string;
  gradientTo: string;
  
  /** Accent color for text elements */
  accentColor?: string;
  
  /** Admin-editable card content */
  content: {
    name: string;              // [Admin: Destination Name]
    priceRange: string;        // [Admin: ₹XX,XXX - ₹XX,XXX]
    tags?: string[];           // [Admin: Tag 1], [Admin: Tag 2]
    description?: string;      // [Admin: Description]
    stayOptions?: string[];    // [Admin: Stay Option 1]
    specialRequest?: string;   // [Admin: Special Request]
  };
  
  /** Category for interest tracking */
  category?: string;
  
  /** Animation delay for staggered entry */
  animationDelay?: number;
  
  /** Click handler for explore button */
  onExplore?: () => void;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Compact mode (smaller padding) */
  compact?: boolean;
  
  /** Custom className */
  className?: string;
}

export function DestinationCardTemplate({
  id,
  icon: Icon,
  gradientFrom,
  gradientTo,
  accentColor = 'text-gray-700',
  content,
  category = 'general',
  animationDelay = 0,
  onExplore,
  showAdminIndicators = false,
  compact = false,
  className = ''
}: DestinationCardTemplateProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.3 }}
      className={`
        bg-white rounded-3xl shadow-md hover:shadow-xl transition-all relative
        ${showIndicators ? 'border-2 border-purple-200' : ''}
        ${compact ? 'p-4' : 'p-6'}
        ${className}
      `}
    >
      {/* Interest Tracker Icon - Top Right */}
      <div className="absolute top-4 right-4 z-10">
        <InterestTrackerIcon
          destinationId={id}
          destinationName={content.name}
          category={category}
          size={compact ? 'sm' : 'md'}
        />
      </div>

      {/* Admin Indicator Badge */}
      {showIndicators && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-full border border-purple-200">
            🔧 Admin Editable Card
          </span>
        </div>
      )}

      {/* Card Header with Icon and Title */}
      <div className={`flex items-start gap-4 ${compact ? 'mb-3' : 'mb-4'}`}>
        {/* Icon Container */}
        <div 
          className={`
            ${compact ? 'w-14 h-14' : 'w-16 h-16'}
            bg-gradient-to-br ${gradientFrom} ${gradientTo}
            rounded-2xl flex items-center justify-center flex-shrink-0
            shadow-md
          `}
        >
          <Icon className={`${compact ? 'w-7 h-7' : 'w-8 h-8'} text-white`} />
        </div>

        {/* Title and Price Section */}
        <div className="flex-1 min-w-0">
          {/* LEVEL 4: Destination Name */}
          <h3 
            className={`
              font-bold ${compact ? 'text-base' : 'text-lg'} mb-2 leading-tight
              ${showIndicators 
                ? 'bg-gray-100 border-2 border-dashed border-purple-300 px-2 py-1 rounded inline-block' 
                : ''
              }
            `}
          >
            {content.name}
          </h3>
          
          {/* LEVEL 5: Price Range */}
          <p className={`text-sm text-gray-600 ${compact ? 'mb-1' : 'mb-2'}`}>
            <span className="font-semibold">Price Range:</span>{' '}
            <span 
              className={showIndicators 
                ? 'bg-gray-100 border border-dashed border-purple-300 px-2 py-0.5 rounded inline-block' 
                : ''
              }
            >
              {content.priceRange}
            </span>
          </p>
        </div>
      </div>

      {/* LEVEL 4: Tags */}
      {content.tags && content.tags.length > 0 && (
        <div className={`flex flex-wrap gap-2 ${compact ? 'mb-3' : 'mb-4'}`}>
          {content.tags.map((tag, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className={`
                text-xs
                ${showIndicators 
                  ? 'bg-gray-100 border-2 border-dashed border-purple-300' 
                  : ''
                }
              `}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* LEVEL 5: Description */}
      {content.description && (
        <p 
          className={`
            text-sm text-gray-600 ${compact ? 'mb-3' : 'mb-4'} leading-relaxed
            ${showIndicators 
              ? 'bg-gray-100 border-2 border-dashed border-purple-300 p-2 rounded' 
              : ''
            }
          `}
        >
          {content.description}
        </p>
      )}

      {/* LEVEL 5: Stay Options */}
      {content.stayOptions && content.stayOptions.length > 0 && (
        <div className={compact ? 'mb-3' : 'mb-4'}>
          <p className="text-xs font-semibold text-gray-700 mb-2">Stay Options:</p>
          <div className="space-y-1">
            {content.stayOptions.map((option, index) => (
              <p 
                key={index}
                className={`
                  text-xs text-gray-600 pl-4 relative
                  ${showIndicators 
                    ? 'bg-gray-100 border border-dashed border-purple-300 px-2 py-1 rounded' 
                    : ''
                  }
                `}
              >
                <span className="absolute left-0 top-1">•</span>
                {option}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* LEVEL 5: Special Request */}
      {content.specialRequest && (
        <div 
          className={`
            bg-blue-50 border border-blue-200 rounded-2xl p-3 ${compact ? 'mb-3' : 'mb-4'}
            ${showIndicators ? 'border-2 border-dashed border-purple-300' : ''}
          `}
        >
          <p className="text-xs font-semibold text-blue-900 mb-1">Special Request:</p>
          <p className="text-xs text-blue-700">{content.specialRequest}</p>
        </div>
      )}

      {/* Explore Button */}
      <Button
        onClick={onExplore}
        className={`
          w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}
          text-white font-semibold rounded-2xl
          ${compact ? 'h-10 text-sm' : 'h-12'}
          hover:opacity-90 transition-opacity
          flex items-center justify-center gap-2
          shadow-md hover:shadow-lg
        `}
      >
        Explore Destination
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Admin Instructions Overlay */}
      {showIndicators && (
        <div className="mt-4 p-3 bg-purple-50 border-2 border-purple-200 rounded-2xl">
          <p className="text-[10px] text-purple-800 font-semibold mb-1">
            📝 Admin Editable Fields:
          </p>
          <ul className="text-[9px] text-purple-700 space-y-0.5 list-disc list-inside">
            <li>Destination Name (Level 4)</li>
            <li>Price Range (Level 5)</li>
            <li>Tags (Level 4)</li>
            <li>Description (Level 5)</li>
            <li>Stay Options (Level 5)</li>
            <li>Special Request (Level 5)</li>
          </ul>
        </div>
      )}
    </motion.div>
  );
}

// ========================================
// HELPER: Generate Sample Card Data
// ========================================

export function generateSampleCardData(
  variant: string,
  count: number = 3
): Array<DestinationCardTemplateProps['content']> {
  return Array.from({ length: count }, (_, i) => ({
    name: `[Admin: ${variant.charAt(0).toUpperCase() + variant.slice(1)} Destination ${i + 1}]`,
    priceRange: `[Admin: ₹${25000 + i * 15000} - ₹${40000 + i * 20000}]`,
    tags: [
      `[Admin: Tag ${i * 3 + 1}]`,
      `[Admin: Tag ${i * 3 + 2}]`,
      `[Admin: Tag ${i * 3 + 3}]`
    ],
    description: `[Admin: Description for ${variant} destination ${i + 1}. This placeholder text should be replaced with actual destination details by the admin.]`,
    stayOptions: [
      `[Admin: Stay Option ${i * 2 + 1}]`,
      `[Admin: Stay Option ${i * 2 + 2}]`
    ],
    specialRequest: `[Admin: Special request or highlight for destination ${i + 1}]`
  }));
}