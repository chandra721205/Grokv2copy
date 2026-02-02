import { motion } from 'motion/react';
import { Check, Car, Users as Bus, Train, Bike } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

/**
 * TRANSPORT PREFERENCE SELECTOR - EXPORTABLE ASSET
 * 
 * A reusable component for selecting transport preferences in custom tour planning.
 * Features 4 transport types with visual feedback and AI recommendations.
 * 
 * Usage:
 * ```tsx
 * <TransportPreferenceSelectorExport
 *   selectedMode="self-drive"
 *   onSelectMode={(mode) => console.log('Selected:', mode)}
 *   aiRecommendation="self-drive"
 *   disabled={false}
 * />
 * ```
 * 
 * Features:
 * - 4 transport types: Self-Drive, Chauffeur, Public, Mixed
 * - AI recommendation highlighting
 * - Animated selection states
 * - Disabled state support
 * - Responsive grid layout
 * - Mobile-optimized (375px)
 */

export type TransportMode = 'self-drive' | 'chauffeur' | 'public' | 'mixed' | null;

export interface TransportOption {
  id: TransportMode;
  icon: any;
  emoji: string;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  bgColor: string;
  borderColor: string;
}

export interface TransportPreferenceSelectorExportProps {
  selectedMode: TransportMode;
  onSelectMode: (mode: TransportMode) => void;
  aiRecommendation?: TransportMode;
  disabled?: boolean;
  showBenefits?: boolean;
}

const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    id: 'self-drive',
    icon: Car,
    emoji: '🚗',
    title: 'Self-Drive Vehicle',
    description: 'Drive at your own pace',
    benefits: ['Full flexibility', 'Privacy', 'Stop anywhere'],
    gradient: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'chauffeur',
    icon: Bus,
    emoji: '🚕',
    title: 'Chauffeur-Driven',
    description: 'Professional driver included',
    benefits: ['Stress-free', 'Local expertise', 'Relax & enjoy'],
    gradient: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'public',
    icon: Train,
    emoji: '🚆',
    title: 'Public Transport',
    description: 'Trains, buses, metro',
    benefits: ['Cost-effective', 'Eco-friendly', 'Local experience'],
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'mixed',
    icon: Bike,
    emoji: '🎯',
    title: 'Mixed Transport',
    description: 'Combine multiple options',
    benefits: ['Best of all', 'Optimized cost', 'Maximum flexibility'],
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }
];

export function TransportPreferenceSelectorExport({
  selectedMode,
  onSelectMode,
  aiRecommendation,
  disabled = false,
  showBenefits = true
}: TransportPreferenceSelectorExportProps) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Transport</h2>
        <p className="text-sm text-gray-600">Select how you'd like to travel</p>
      </div>

      {/* Transport Options Grid */}
      <div className="grid grid-cols-1 gap-4">
        {TRANSPORT_OPTIONS.map((option) => {
          const isSelected = selectedMode === option.id;
          const isRecommended = aiRecommendation === option.id;
          const IconComponent = option.icon;

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={!disabled ? { scale: 1.02 } : undefined}
              whileTap={!disabled ? { scale: 0.98 } : undefined}
            >
              <Card
                onClick={() => !disabled && onSelectMode(option.id)}
                className={`relative overflow-hidden transition-all cursor-pointer ${
                  isSelected
                    ? `ring-4 ring-offset-2 shadow-2xl ${option.borderColor.replace('border', 'ring')}`
                    : 'hover:shadow-xl'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {/* AI Recommendation Badge */}
                {isRecommended && !isSelected && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-xs font-bold shadow-lg">
                      ⭐ AI Recommended
                    </Badge>
                  </div>
                )}

                {/* Selected Indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 p-5">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-3xl">{option.emoji}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {option.description}
                    </p>

                    {/* Benefits */}
                    {showBenefits && (
                      <div className="space-y-1">
                        {option.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${option.gradient}`} />
                            <span className="text-xs text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Selected State Bottom Bar */}
                {isSelected && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className={`h-2 bg-gradient-to-r ${option.gradient}`}
                  />
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Help Text */}
      {aiRecommendation && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">AI Suggestion</p>
              <p className="text-xs text-gray-700">
                Based on your itinerary and preferences, we recommend{' '}
                <strong>
                  {TRANSPORT_OPTIONS.find(opt => opt.id === aiRecommendation)?.title}
                </strong>{' '}
                for the best experience.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Compact variant for smaller spaces
export function TransportPreferenceSelectorCompact({
  selectedMode,
  onSelectMode,
  aiRecommendation,
  disabled = false
}: TransportPreferenceSelectorExportProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {TRANSPORT_OPTIONS.map((option) => {
        const isSelected = selectedMode === option.id;
        const isRecommended = aiRecommendation === option.id;

        return (
          <motion.button
            key={option.id}
            onClick={() => !disabled && onSelectMode(option.id)}
            whileTap={!disabled ? { scale: 0.95 } : undefined}
            disabled={disabled}
            className={`relative p-4 rounded-2xl transition-all ${
              isSelected
                ? `bg-gradient-to-br ${option.gradient} text-white shadow-xl`
                : `${option.bgColor} border-2 ${option.borderColor} hover:shadow-lg`
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isRecommended && !isSelected && (
              <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-white border-0 text-[8px]">
                AI
              </Badge>
            )}
            {isSelected && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-4 h-4 text-green-600" />
              </div>
            )}
            <div className="text-center">
              <div className="text-3xl mb-2">{option.emoji}</div>
              <p className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {option.title}
              </p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

// Export types and options for reuse
export { TRANSPORT_OPTIONS };
export type { TransportOption };
