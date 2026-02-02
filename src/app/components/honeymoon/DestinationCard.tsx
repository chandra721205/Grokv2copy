import { motion } from 'motion/react';
import { 
  ChevronRight, Waves, Castle, Flower2, Mountain, Plane, Activity,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';

// ========================================
// VARIANT CONFIGURATION
// ========================================

export type DestinationVariant = 
  | 'beach' 
  | 'heritage' 
  | 'wellness' 
  | 'adventure' 
  | 'hill-station' 
  | 'international';

interface VariantConfig {
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  iconBgFrom: string;
  iconBgTo: string;
}

const variantConfigs: Record<DestinationVariant, VariantConfig> = {
  beach: {
    icon: Waves,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-600',
    accentColor: 'text-blue-700',
    iconBgFrom: 'from-blue-500',
    iconBgTo: 'to-cyan-600'
  },
  heritage: {
    icon: Castle,
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-600',
    accentColor: 'text-amber-700',
    iconBgFrom: 'from-amber-500',
    iconBgTo: 'to-orange-600'
  },
  wellness: {
    icon: Flower2,
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-600',
    accentColor: 'text-emerald-700',
    iconBgFrom: 'from-emerald-500',
    iconBgTo: 'to-teal-600'
  },
  adventure: {
    icon: Activity,
    gradientFrom: 'from-red-500',
    gradientTo: 'to-rose-600',
    accentColor: 'text-red-700',
    iconBgFrom: 'from-red-500',
    iconBgTo: 'to-rose-600'
  },
  'hill-station': {
    icon: Mountain,
    gradientFrom: 'from-green-500',
    gradientTo: 'to-lime-600',
    accentColor: 'text-green-700',
    iconBgFrom: 'from-green-500',
    iconBgTo: 'to-lime-600'
  },
  international: {
    icon: Plane,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-600',
    accentColor: 'text-purple-700',
    iconBgFrom: 'from-purple-500',
    iconBgTo: 'to-indigo-600'
  }
};

// ========================================
// MASTER DESTINATION CARD COMPONENT
// ========================================

export interface DestinationCardData {
  id: string;
  name: string;              // [Admin: Destination Name]
  description?: string;      // [Admin: Description - 120 chars max]
  priceRange: string;        // [Admin: ₹XX,XXX - ₹XX,XXX]
  tags: string[];            // [Admin: Tag 1], [Admin: Tag 2], etc.
  stayOptions?: string[];    // [Admin: Stay Option 1], etc.
  specialRequest?: string;   // [Admin: Special Request]
  imageUrl?: string;         // [Admin: Upload Destination Image]
}

export interface DestinationCardProps {
  /** Card data with admin-editable content */
  data: DestinationCardData;
  
  /** Visual variant for the card */
  variant: DestinationVariant;
  
  /** Animation delay for stagger effect */
  animationDelay?: number;
  
  /** Click handler for explore button */
  onExplore?: (destination: DestinationCardData) => void;
  
  /** Show admin-editable indicators */
  showAdminIndicators?: boolean;
  
  /** Compact mode (reduced padding/spacing) */
  compact?: boolean;
}

export function DestinationCard({
  data,
  variant,
  animationDelay = 0,
  onExplore,
  showAdminIndicators = true,
  compact = false
}: DestinationCardProps) {
  const config = variantConfigs[variant];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      className={`bg-white rounded-3xl shadow-md hover:shadow-xl transition-all relative ${
        showAdminIndicators ? 'border-2 border-gray-100' : ''
      } ${compact ? 'p-4' : 'p-6'}`}
    >
      {/* Interest Tracker Icon - Top Right Corner */}
      <div className="absolute top-4 right-4 z-10">
        <InterestTrackerIcon
          destinationId={data.id}
          destinationName={data.name}
          category={variant}
          size={compact ? 'sm' : 'md'}
        />
      </div>

      {/* Admin Indicator Badge */}
      {showAdminIndicators && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-full">
            🔧 Admin Editable Card
          </span>
        </div>
      )}

      {/* Card Header with Icon and Title */}
      <div className={`flex items-start gap-4 ${compact ? 'mb-3' : 'mb-4'}`}>
        {/* Icon */}
        <div className={`${compact ? 'w-14 h-14' : 'w-16 h-16'} bg-gradient-to-br ${config.iconBgFrom} ${config.iconBgTo} rounded-2xl flex items-center justify-center flex-shrink-0`}>
          <Icon className={`${compact ? 'w-7 h-7' : 'w-8 h-8'} text-white`} />
        </div>

        {/* Title and Price */}
        <div className="flex-1">
          {/* LEVEL 4: Destination Name */}
          <h3 className={`font-bold ${compact ? 'text-base' : 'text-lg'} mb-2 ${
            showAdminIndicators ? 'bg-gray-100 px-2 py-1 rounded inline-block' : ''
          }`}>
            {data.name}
          </h3>
          
          {/* LEVEL 5: Price Range */}
          <p className={`text-sm text-gray-600 ${compact ? 'mb-1' : 'mb-2'}`}>
            <span className="font-semibold">Price Range:</span>{' '}
            <span className={showAdminIndicators ? 'bg-gray-100 px-2 py-0.5 rounded' : ''}>
              {data.priceRange}
            </span>
          </p>
        </div>
      </div>

      {/* Optional Image Placeholder */}
      {data.imageUrl !== undefined && (
        <div className={`${compact ? 'mb-3' : 'mb-4'}`}>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-32 flex items-center justify-center border-2 border-dashed border-gray-300">
            {data.imageUrl ? (
              <img 
                src={data.imageUrl} 
                alt={data.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-4">
                <p className="text-xs text-gray-500 font-semibold mb-1">
                  [Admin: Upload Destination Image]
                </p>
                <p className="text-[10px] text-gray-400">
                  Recommended: 400x200px
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Optional Description */}
      {data.description && (
        <div className={`bg-gray-50 rounded-2xl p-3 ${compact ? 'mb-3' : 'mb-4'}`}>
          <p className={`text-xs ${config.accentColor} font-semibold mb-1 flex items-center gap-2`}>
            Description:
            {showAdminIndicators && (
              <span className="text-purple-600 text-[10px]">Max 120 chars</span>
            )}
          </p>
          <p className={`text-xs text-gray-700 ${
            showAdminIndicators ? 'bg-gray-100 px-2 py-1 rounded' : ''
          }`}>
            {data.description}
          </p>
        </div>
      )}

      {/* LEVEL 4: Tags (Perfect For) */}
      {data.tags && data.tags.length > 0 && (
        <div className={`bg-pink-50 rounded-2xl p-3 ${compact ? 'mb-3' : 'mb-4'}`}>
          <p className="text-xs font-semibold text-pink-700 mb-2 flex items-center gap-2">
            Perfect For:
            {showAdminIndicators && (
              <span className="text-purple-600 text-[10px]">Admin Editable</span>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, i) => (
              <Badge 
                key={i} 
                className={`${
                  showAdminIndicators ? 'bg-gray-100' : 'bg-pink-100'
                } text-pink-700 border-pink-300 text-xs`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* LEVEL 4: Stay Options */}
      {data.stayOptions && data.stayOptions.length > 0 && (
        <div className={`bg-blue-50 rounded-2xl p-3 ${compact ? 'mb-3' : 'mb-4'}`}>
          <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-2">
            Stay Options:
            {showAdminIndicators && (
              <span className="text-purple-600 text-[10px]">Admin Editable</span>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.stayOptions.map((option, i) => (
              <span 
                key={i} 
                className={`text-xs text-gray-700 ${
                  showAdminIndicators ? 'bg-gray-100 px-2 py-0.5 rounded' : ''
                }`}
              >
                {option}
                {i < data.stayOptions.length - 1 && ' | '}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* LEVEL 5: Special Request */}
      {data.specialRequest && (
        <div className={`bg-purple-50 rounded-2xl p-3 ${compact ? 'mb-3' : 'mb-4'}`}>
          <p className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-2">
            Special Request:
            {showAdminIndicators && (
              <span className="text-purple-600 text-[10px]">Admin Editable</span>
            )}
          </p>
          <p className={`text-xs text-gray-700 ${
            showAdminIndicators ? 'bg-gray-100 px-2 py-1 rounded' : ''
          }`}>
            {data.specialRequest}
          </p>
        </div>
      )}

      {/* Explore Button (Static - Non-editable) */}
      <Button 
        onClick={() => onExplore?.(data)}
        className={`w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 ${
          compact ? 'h-10' : 'h-11'
        } flex items-center justify-center gap-2`}
      >
        Explore
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}

// ========================================
// VARIANT-SPECIFIC CARD COMPONENTS
// ========================================

export function BeachDestinationCard(props: Omit<DestinationCardProps, 'variant'>) {
  return <DestinationCard {...props} variant="beach" />;
}

export function HeritageDestinationCard(props: Omit<DestinationCardProps, 'variant'>) {
  return <DestinationCard {...props} variant="heritage" />;
}

export function WellnessDestinationCard(props: Omit<DestinationCardProps, 'variant'>) {
  return <DestinationCard {...props} variant="wellness" />;
}

export function AdventureDestinationCard(props: Omit<DestinationCardProps, 'variant'>) {
  return <DestinationCard {...props} variant="adventure" />;
}

export function HillStationDestinationCard(props: Omit<DestinationCardProps, 'variant'>) {
  return <DestinationCard {...props} variant="hill-station" />;
}

export function InternationalDestinationCard(props: Omit<DestinationCardProps, 'variant'>) {
  return <DestinationCard {...props} variant="international" />;
}

// ========================================
// EXAMPLE DATA TEMPLATES
// ========================================

export const createBeachCardData = (index: number): DestinationCardData => ({
  id: `beach-${index}`,
  name: `[Admin: Beach Destination ${index}]`,
  description: `[Admin: Destination Description ${index}]`,
  priceRange: `[Admin: ₹XX,XXX - ₹XX,XXX]`,
  tags: ['[Admin: Tag 1]', '[Admin: Tag 2]', '[Admin: Tag 3]'],
  stayOptions: ['[Admin: Stay Option 1]', '[Admin: Stay Option 2]'],
  specialRequest: `[Admin: Special Request ${index}]`,
  imageUrl: '' // Empty for placeholder
});

export const createHeritageCardData = (index: number): DestinationCardData => ({
  id: `heritage-${index}`,
  name: `[Admin: Heritage Destination ${index}]`,
  description: `[Admin: Royal Experience Description ${index}]`,
  priceRange: `[Admin: ₹XX,XXX - ₹XX,XXX]`,
  tags: ['[Admin: Experience 1]', '[Admin: Experience 2]', '[Admin: Experience 3]'],
  stayOptions: ['[Admin: Palace Stay]', '[Admin: Heritage Hotel]'],
  specialRequest: `[Admin: Royal Service ${index}]`,
  imageUrl: ''
});

export const createWellnessCardData = (index: number): DestinationCardData => ({
  id: `wellness-${index}`,
  name: `[Admin: Wellness Retreat ${index}]`,
  description: `[Admin: Wellness Experience Description ${index}]`,
  priceRange: `[Admin: ₹XX,XXX - ₹XX,XXX]`,
  tags: ['[Admin: Treatment 1]', '[Admin: Treatment 2]', '[Admin: Wellness Focus]'],
  stayOptions: ['[Admin: Retreat Type 1]', '[Admin: Retreat Type 2]'],
  specialRequest: `[Admin: Wellness Service ${index}]`,
  imageUrl: ''
});

export const createAdventureCardData = (index: number): DestinationCardData => ({
  id: `adventure-${index}`,
  name: `[Admin: Adventure Destination ${index}]`,
  description: `[Admin: Adventure Experience Description ${index}]`,
  priceRange: `[Admin: ₹XX,XXX - ₹XX,XXX]`,
  tags: ['[Admin: Activity 1]', '[Admin: Activity 2]', '[Admin: Thrill Level]'],
  stayOptions: ['[Admin: Adventure Camp]', '[Admin: Resort]'],
  specialRequest: `[Admin: Adventure Package ${index}]`,
  imageUrl: ''
});

export const createHillStationCardData = (index: number): DestinationCardData => ({
  id: `hill-station-${index}`,
  name: `[Admin: Hill Station ${index}]`,
  description: `[Admin: Mountain Experience Description ${index}]`,
  priceRange: `[Admin: ₹XX,XXX - ₹XX,XXX]`,
  tags: ['[Admin: Climate]', '[Admin: View]', '[Admin: Activities]'],
  stayOptions: ['[Admin: Mountain Resort]', '[Admin: Cottage]'],
  specialRequest: `[Admin: Mountain Experience ${index}]`,
  imageUrl: ''
});

export const createInternationalCardData = (index: number): DestinationCardData => ({
  id: `international-${index}`,
  name: `[Admin: International Destination ${index}]`,
  description: `[Admin: International Experience Description ${index}]`,
  priceRange: `[Admin: ₹X,XX,XXX - ₹X,XX,XXX]`,
  tags: ['[Admin: Country]', '[Admin: Experience]', '[Admin: Visa Status]'],
  stayOptions: ['[Admin: 5-Star Hotel]', '[Admin: Resort]'],
  specialRequest: `[Admin: International Package ${index}]`,
  imageUrl: ''
});

// ========================================
// BULK CARD GENERATOR
// ========================================

export function generateDestinationCards(
  variant: DestinationVariant, 
  count: number = 6
): DestinationCardData[] {
  const generators = {
    'beach': createBeachCardData,
    'heritage': createHeritageCardData,
    'wellness': createWellnessCardData,
    'adventure': createAdventureCardData,
    'hill-station': createHillStationCardData,
    'international': createInternationalCardData
  };

  const generator = generators[variant];
  return Array.from({ length: count }, (_, i) => generator(i + 1));
}