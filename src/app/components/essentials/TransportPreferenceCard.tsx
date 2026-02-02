import { motion } from 'motion/react';
import { Check, Sparkles, TrendingUp, Info } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface TransportPreferenceCardProps {
  type: 'self-drive' | 'chauffeur' | 'public' | 'mixed';
  variant?: 'default' | 'compact';
  state?: 'unselected' | 'selected' | 'recommended';
  onSelect?: () => void;
  showRecommendation?: boolean;
  customIcon?: string;
  customGradient?: string;
}

const transportData = {
  'self-drive': {
    icon: '🚗',
    title: 'Self-Drive Vehicle',
    description: 'Rent a car/bike and drive yourself',
    bestFor: 'Flexibility, privacy, adventure',
    gradient: 'from-orange-400 to-amber-500',
    benefits: [
      'Complete freedom and flexibility',
      'No dependency on drivers',
      'Explore at your own pace',
      'Cost-effective for groups'
    ],
    priceRange: '₹1,200 - ₹5,000/day',
    popular: true
  },
  'chauffeur': {
    icon: '👨‍✈️',
    title: 'Chauffeur-Driven',
    description: 'Professional driver with vehicle',
    bestFor: 'Relaxation, business, groups',
    gradient: 'from-blue-400 to-cyan-500',
    benefits: [
      'Stress-free travel experience',
      'Local knowledge and guidance',
      'No parking hassles',
      'Safe and comfortable'
    ],
    priceRange: '₹2,000 - ₹8,000/day',
    popular: true
  },
  'public': {
    icon: '🚌',
    title: 'Public Transport',
    description: 'Trains, buses, local transport',
    bestFor: 'Budget, local experience',
    gradient: 'from-green-400 to-emerald-500',
    benefits: [
      'Most economical option',
      'Authentic local experience',
      'Eco-friendly travel',
      'Well-connected routes'
    ],
    priceRange: '₹100 - ₹500/day',
    popular: false
  },
  'mixed': {
    icon: '🔀',
    title: 'Mixed Modes',
    description: 'Combine different transport types',
    bestFor: 'Complex itineraries',
    gradient: 'from-purple-400 to-pink-500',
    benefits: [
      'Optimized for each journey',
      'Best of all worlds',
      'Flexible planning',
      'Cost optimization'
    ],
    priceRange: 'Variable',
    popular: false
  }
};

export function TransportPreferenceCard({
  type,
  variant = 'default',
  state = 'unselected',
  onSelect,
  showRecommendation = false,
  customIcon,
  customGradient,
}: TransportPreferenceCardProps) {
  const data = transportData[type];
  const isSelected = state === 'selected';
  const isRecommended = state === 'recommended';
  const icon = customIcon || data.icon;
  const gradient = customGradient || data.gradient;

  // Compact Variant
  if (variant === 'compact') {
    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onSelect}
        className="w-full text-left"
      >
        <Card className={`rounded-2xl p-4 border-2 transition-all ${
          isSelected
            ? 'border-purple-500 bg-purple-50 shadow-xl'
            : isRecommended
            ? 'border-yellow-500 bg-yellow-50 shadow-lg'
            : 'border-gray-200 bg-white/80 shadow-md hover:shadow-lg'
        }`}>
          <div className="flex items-center gap-3">
            {/* Radio Button */}
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
              isSelected
                ? 'border-purple-600 bg-purple-600'
                : 'border-gray-300 bg-white'
            }`}>
              {isSelected && <div className="w-3 h-3 bg-white rounded-full"></div>}
            </div>

            {/* Icon */}
            <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
              {icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-sm text-gray-900 truncate">{data.title}</h3>
                {isRecommended && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 text-[9px]">
                    <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                    AI Pick
                  </Badge>
                )}
              </div>
              <p className="text-xs text-gray-600 truncate">{data.description}</p>
            </div>

            {/* Selection Check */}
            {isSelected && (
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
            )}
          </div>
        </Card>
      </motion.button>
    );
  }

  // Default Variant (Full Card)
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="w-full text-left"
    >
      <Card className={`rounded-3xl overflow-hidden border-2 transition-all ${
        isSelected
          ? 'border-purple-500 bg-white shadow-2xl'
          : isRecommended
          ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl'
          : 'border-gray-200 bg-white/80 shadow-lg hover:shadow-xl'
      }`}>
        {/* Header Section */}
        <div className={`bg-gradient-to-br ${gradient} p-5 relative`}>
          {/* Recommended Badge */}
          {isRecommended && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-white/90 text-gray-900 border-0 shadow-lg">
                <Sparkles className="w-3 h-3 mr-1 text-yellow-500" />
                AI Recommended
              </Badge>
            </div>
          )}

          {/* Selected Badge */}
          {isSelected && (
            <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Check className="w-5 h-5 text-purple-600" />
            </div>
          )}

          <div className="flex items-start gap-4">
            {/* Radio Button */}
            <div className={`w-7 h-7 rounded-full border-3 flex items-center justify-center flex-shrink-0 transition-all ${
              isSelected
                ? 'border-white bg-white'
                : 'border-white/80 bg-transparent'
            }`}>
              {isSelected && <div className={`w-4 h-4 bg-gradient-to-br ${gradient} rounded-full`}></div>}
            </div>

            {/* Icon & Title */}
            <div className="flex-1">
              <div className="text-5xl mb-3">{icon}</div>
              <h3 className="text-white text-xl font-bold mb-1">{data.title}</h3>
              <p className="text-white/90 text-sm">{data.description}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Best For */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-3 mb-4">
            <p className="text-xs text-gray-600 mb-1">
              <span className="font-semibold text-gray-800">Best for:</span>
            </p>
            <p className="text-sm font-semibold text-gray-900">{data.bestFor}</p>
          </div>

          {/* Benefits */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">Key Benefits:</p>
            <div className="space-y-2">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Typical Cost</p>
              <p className="text-sm font-bold text-gray-900">{data.priceRange}</p>
            </div>
            {data.popular && (
              <Badge className="bg-purple-100 text-purple-700 border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>

          {/* AI Recommendation Message */}
          {showRecommendation && isRecommended && (
            <div className="mt-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-3 border-2 border-purple-200">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-purple-900 mb-1">Grok AI Insight</p>
                  <p className="text-xs text-purple-700">
                    Based on your 7-day Kerala trip with family, this option offers the best balance of comfort, flexibility, and value.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Selection Footer */}
        {isSelected && (
          <div className="bg-purple-600 px-5 py-3">
            <div className="flex items-center justify-center gap-2 text-white">
              <Check className="w-4 h-4" />
              <p className="text-sm font-bold">Selected as your transport mode</p>
            </div>
          </div>
        )}
      </Card>
    </motion.button>
  );
}
