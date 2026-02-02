import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Settings,
  Sparkles,
  TrendingUp,
  Info
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { VEHICLE_EMOJIS } from '@/app/components/essentials/VehicleEmojiGuide';

interface FlowPathIndicatorProps {
  currentStep: number;
  flowType: 'essentials' | 'custom-tour' | 'multi-category';
  onNavigate?: (screen: string) => void;
}

const FLOW_PATHS = {
  'essentials': {
    title: 'Travel Essentials Flow',
    description: 'Browse vehicles from Travel Essentials Hub',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500',
    steps: [
      { 
        id: '77', 
        name: 'Travel Essentials Hub', 
        description: 'Main essentials landing',
        icon: '🎯'
      },
      { 
        id: '77U', 
        name: 'Self-Drive Vehicles', 
        description: 'Vehicle categories & filters',
        icon: VEHICLE_EMOJIS.selfDriveCar,
        badge: 'NEW'
      },
      { 
        id: '77V', 
        name: 'Vehicle Listings', 
        description: 'Browse available vehicles',
        icon: '📋'
      },
      { 
        id: '77W', 
        name: 'Vehicle Details', 
        description: 'Specs, features, reviews',
        icon: '📊'
      },
      { 
        id: '82', 
        name: 'Booking Form', 
        description: 'Dates, locations, add-ons',
        icon: VEHICLE_EMOJIS.rentalDocument
      },
      { 
        id: '83', 
        name: 'Payment', 
        description: 'Secure checkout',
        icon: '💳'
      },
      { 
        id: '84', 
        name: 'Confirmation', 
        description: 'Booking confirmed',
        icon: '✅'
      }
    ]
  },
  'custom-tour': {
    title: 'Custom Tour Flow',
    description: 'Add self-drive to your custom tour',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    steps: [
      { 
        id: '32B3', 
        name: 'Transport Preferences', 
        description: 'Choose transport mode',
        icon: '🚙'
      },
      { 
        id: '32B4', 
        name: 'Transport Mode Details', 
        description: 'Self-drive selected',
        icon: VEHICLE_EMOJIS.selfDriveCar,
        badge: 'UPDATED'
      },
      { 
        id: '77U', 
        name: 'Vehicle Selection', 
        description: 'Pick your vehicle',
        icon: '🚗'
      },
      { 
        id: 'CUSTOM', 
        name: 'Return to Tour Builder', 
        description: 'Continue tour customization',
        icon: '🎨'
      },
      { 
        id: '32B5', 
        name: 'Review & Book', 
        description: 'Complete tour booking',
        icon: '📝'
      }
    ]
  },
  'multi-category': {
    title: 'Multi-Category Flow',
    description: 'Integrated transport planning',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    steps: [
      { 
        id: '101', 
        name: 'Multi-Category Hub', 
        description: 'Combined experiences',
        icon: '🎪'
      },
      { 
        id: '109', 
        name: 'Transport Planner', 
        description: 'Plan all transport needs',
        icon: '🚌',
        badge: 'ENHANCED'
      },
      { 
        id: '109A', 
        name: 'Self-Drive Option', 
        description: 'Add self-drive segment',
        icon: VEHICLE_EMOJIS.selfDriveCar
      },
      { 
        id: '77V', 
        name: 'Vehicle Selection', 
        description: 'Choose vehicle',
        icon: '🚗'
      },
      { 
        id: '101', 
        name: 'Back to Multi-Category', 
        description: 'Continue planning',
        icon: '↩️'
      }
    ]
  }
};

export function FlowPathIndicator({ 
  currentStep, 
  flowType,
  onNavigate 
}: FlowPathIndicatorProps) {
  const flow = FLOW_PATHS[flowType];
  const totalSteps = flow.steps.length;

  return (
    <Card className={`bg-gradient-to-br from-${flow.color}-50 to-${flow.color}-100 rounded-3xl p-5 border-2 border-${flow.color}-200 shadow-lg`}>
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Badge className={`bg-gradient-to-r ${flow.gradient} text-white border-0 text-[10px]`}>
            Flow {currentStep}/{totalSteps}
          </Badge>
          <h3 className="font-bold text-sm text-gray-900">{flow.title}</h3>
        </div>
        <p className="text-xs text-gray-600">{flow.description}</p>
      </div>

      {/* Progress Steps */}
      <div className="space-y-3">
        {flow.steps.map((step, index) => {
          const isPast = index < currentStep - 1;
          const isCurrent = index === currentStep - 1;
          const isFuture = index > currentStep - 1;

          return (
            <div key={step.id}>
              <motion.button
                onClick={() => onNavigate?.(step.id)}
                className={`w-full text-left transition-all ${
                  isCurrent 
                    ? 'scale-105' 
                    : isPast 
                    ? 'opacity-60' 
                    : 'opacity-40'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`rounded-2xl p-3 ${
                  isCurrent
                    ? `bg-gradient-to-r ${flow.gradient} shadow-lg`
                    : isPast
                    ? 'bg-white border-2 border-green-300'
                    : 'bg-white border-2 border-gray-300'
                }`}>
                  <div className="flex items-center gap-3">
                    {/* Step Number/Status */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isPast
                        ? 'bg-green-600'
                        : isCurrent
                        ? 'bg-white'
                        : 'bg-gray-200'
                    }`}>
                      {isPast ? (
                        <Check className={`w-4 h-4 text-white`} />
                      ) : (
                        <span className={`text-xs font-bold ${
                          isCurrent ? `text-${flow.color}-600` : 'text-gray-500'
                        }`}>
                          {index + 1}
                        </span>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="text-2xl">{step.icon}</div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className={`font-bold text-xs truncate ${
                          isCurrent ? 'text-white' : 'text-gray-900'
                        }`}>
                          {step.name}
                        </h4>
                        {step.badge && (
                          <Badge className={`${
                            isCurrent 
                              ? 'bg-white/20 text-white' 
                              : 'bg-yellow-500 text-white'
                          } border-0 text-[8px]`}>
                            {step.badge}
                          </Badge>
                        )}
                      </div>
                      <p className={`text-[10px] ${
                        isCurrent ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className={`w-4 h-4 ${
                      isCurrent ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              </motion.button>

              {/* Connector */}
              {index < flow.steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className={`w-0.5 h-4 ${
                    index < currentStep - 1 ? 'bg-green-400' : 'bg-gray-300'
                  }`}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      {currentStep < totalSteps && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <Button
            onClick={() => onNavigate?.(flow.steps[currentStep]?.id)}
            className={`w-full h-10 bg-gradient-to-r ${flow.gradient} text-white rounded-xl font-semibold hover:shadow-lg`}
          >
            Continue to {flow.steps[currentStep]?.name}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </Card>
  );
}

// Flow Entry Points Component
export function FlowEntryPoints({ 
  onSelectFlow 
}: { 
  onSelectFlow?: (flowType: string) => void;
}) {
  const entryPoints = [
    {
      id: 'essentials',
      title: 'Travel Essentials',
      icon: VEHICLE_EMOJIS.selfDriveCar,
      gradient: 'from-orange-500 to-amber-500',
      description: 'Direct vehicle rental',
      screens: '77 → 77U → 77V → 77W → 82 → 83 → 84',
      features: ['Quick browse', 'All categories', 'Instant booking']
    },
    {
      id: 'custom-tour',
      title: 'Custom Tour Builder',
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Add transport to tour',
      screens: '32B3 → 32B4 → 77U → Custom Flow',
      features: ['Integrated booking', 'Tour-optimized', 'Bundle pricing']
    },
    {
      id: 'multi-category',
      title: 'Multi-Category',
      icon: '🎪',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Complex trip planning',
      screens: '101 → 109 → 109A → 77V → 101',
      features: ['Transport planner', 'Multi-segment', 'Coordinated timing']
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Your Path</h2>
        <p className="text-sm text-gray-600">Three ways to book self-drive vehicles</p>
      </div>

      {entryPoints.map((entry) => (
        <motion.button
          key={entry.id}
          onClick={() => onSelectFlow?.(entry.id)}
          whileTap={{ scale: 0.98 }}
          className="w-full text-left"
        >
          <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${entry.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-md`}>
                {entry.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base text-gray-900 mb-1">{entry.title}</h3>
                <p className="text-xs text-gray-600">{entry.description}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>

            {/* Screen Flow */}
            <div className="bg-gray-50 rounded-2xl p-3 mb-3">
              <p className="text-[10px] text-gray-500 mb-1">Screen Flow</p>
              <code className="text-xs font-mono text-purple-700">{entry.screens}</code>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {entry.features.map((feature, index) => (
                <Badge key={index} className={`bg-gradient-to-r ${entry.gradient} text-white border-0 text-[10px]`}>
                  {feature}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.button>
      ))}
    </div>
  );
}

// Flow Connection Indicator (shows where flows intersect)
export function FlowConnectionIndicator({
  fromScreen,
  toScreen,
  connectionType
}: {
  fromScreen: string;
  toScreen: string;
  connectionType: 'entry' | 'exit' | 'bridge';
}) {
  const connectionData = {
    entry: {
      icon: '🔵',
      label: 'Entry Point',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Starting a new flow path'
    },
    exit: {
      icon: '🟢',
      label: 'Exit Point',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Returning to previous flow'
    },
    bridge: {
      icon: '🟣',
      label: 'Bridge Connection',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Connecting between flows'
    }
  };

  const data = connectionData[connectionType];

  return (
    <Card className={`bg-gradient-to-br ${data.gradient} rounded-3xl p-4 border-0 shadow-lg`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{data.icon}</span>
        <div className="flex-1">
          <h4 className="font-bold text-sm text-white mb-0.5">{data.label}</h4>
          <p className="text-xs text-white/90">{data.description}</p>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-xs text-white/80 mb-1">From</p>
            <p className="text-sm font-bold text-white">{fromScreen}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-white mx-2" />
          <div className="text-center flex-1">
            <p className="text-xs text-white/80 mb-1">To</p>
            <p className="text-sm font-bold text-white">{toScreen}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Complete Flow Map Visualization
export function FlowMapVisualization() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Self-Drive Integration Map
        </h2>
        <p className="text-sm text-gray-600">
          Three entry points, interconnected flows
        </p>
      </div>

      {/* Visual Flow Map */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border-2 border-purple-200 shadow-xl">
        <div className="space-y-8">
          {/* Flow 1: Travel Essentials */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <h3 className="font-bold text-sm text-gray-900">Travel Essentials Flow</h3>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {['77', '77U', '77V', '77W', '82', '83', '84'].map((screen, index, arr) => (
                <div key={screen} className="flex items-center gap-2 flex-shrink-0">
                  <div className={`w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-md ${
                    screen === '77U' ? 'ring-4 ring-yellow-400' : ''
                  }`}>
                    <span className="text-xs font-bold text-white">{screen}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Flow 2: Custom Tour */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <h3 className="font-bold text-sm text-gray-900">Custom Tour Flow</h3>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {['32B3', '32B4', '77U', '32B5'].map((screen, index, arr) => (
                <div key={screen} className="flex items-center gap-2 flex-shrink-0">
                  <div className={`w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-md ${
                    screen === '77U' ? 'ring-4 ring-yellow-400' : ''
                  }`}>
                    <span className="text-[10px] font-bold text-white">{screen}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-purple-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Flow 3: Multi-Category */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <h3 className="font-bold text-sm text-gray-900">Multi-Category Flow</h3>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {['101', '109', '109A', '77V', '101'].map((screen, index, arr) => (
                <div key={screen} className="flex items-center gap-2 flex-shrink-0">
                  <div className={`w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-md ${
                    screen === '109A' ? 'ring-4 ring-yellow-400' : ''
                  }`}>
                    <span className="text-xs font-bold text-white">{screen}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 pt-4 border-t border-purple-200">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg ring-4 ring-yellow-400"></div>
              <span className="text-xs text-gray-700">New Screen</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
              <span className="text-xs text-gray-700">Existing Screen</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Screens */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-4 border border-orange-200">
          <div className="text-center mb-2">
            <span className="text-3xl">{VEHICLE_EMOJIS.selfDriveCar}</span>
          </div>
          <h4 className="font-bold text-sm text-gray-900 text-center mb-1">Screen 77U</h4>
          <p className="text-xs text-gray-600 text-center mb-2">Self-Drive Hub</p>
          <Badge className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 text-[10px] justify-center">
            NEW - Central Entry
          </Badge>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-4 border border-purple-200">
          <div className="text-center mb-2">
            <span className="text-3xl">🎨</span>
          </div>
          <h4 className="font-bold text-sm text-gray-900 text-center mb-1">Screen 32B4</h4>
          <p className="text-xs text-gray-600 text-center mb-2">Transport Mode</p>
          <Badge className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-[10px] justify-center">
            UPDATED - Bridge
          </Badge>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-4 border border-blue-200">
          <div className="text-center mb-2">
            <span className="text-3xl">🚌</span>
          </div>
          <h4 className="font-bold text-sm text-gray-900 text-center mb-1">Screen 109</h4>
          <p className="text-xs text-gray-600 text-center mb-2">Transport Planner</p>
          <Badge className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 text-[10px] justify-center">
            ENHANCED - Option
          </Badge>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-4 border border-green-200">
          <div className="text-center mb-2">
            <span className="text-3xl">✅</span>
          </div>
          <h4 className="font-bold text-sm text-gray-900 text-center mb-1">Screen 84</h4>
          <p className="text-xs text-gray-600 text-center mb-2">Confirmation</p>
          <Badge className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-[10px] justify-center">
            SHARED - Endpoint
          </Badge>
        </Card>
      </div>
    </div>
  );
}
