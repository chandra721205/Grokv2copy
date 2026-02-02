import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface VehicleEmojiGuideProps {
  variant?: 'full' | 'compact' | 'inline';
  showTitle?: boolean;
}

export const VEHICLE_EMOJIS = {
  selfDriveCar: '🚗',
  twoWheeler: '🛵',
  electricVehicle: '⚡',
  rentalDocument: '🧾',
  roadTrip: '🛣️',
  parking: '🅿️',
  fuelStation: '⛽',
  // Additional related emojis
  key: '🔑',
  map: '🗺️',
  gps: '📍',
  insurance: '🛡️',
  calendar: '📅',
  clock: '🕐',
  checkmark: '✅',
  warning: '⚠️',
  info: 'ℹ️',
  location: '📌',
} as const;

export function VehicleEmojiGuide({ 
  variant = 'full',
  showTitle = true 
}: VehicleEmojiGuideProps) {
  const emojiData = [
    {
      emoji: VEHICLE_EMOJIS.selfDriveCar,
      label: 'Self-drive Car',
      description: 'Rent cars and drive yourself',
      gradient: 'from-orange-400 to-amber-500'
    },
    {
      emoji: VEHICLE_EMOJIS.twoWheeler,
      label: 'Two-wheeler',
      description: 'Bikes and scooters',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      emoji: VEHICLE_EMOJIS.electricVehicle,
      label: 'Electric Vehicle',
      description: 'Eco-friendly EVs',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      emoji: VEHICLE_EMOJIS.rentalDocument,
      label: 'Rental Document',
      description: 'Booking agreements',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      emoji: VEHICLE_EMOJIS.roadTrip,
      label: 'Road Trip',
      description: 'Highway adventures',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      emoji: VEHICLE_EMOJIS.parking,
      label: 'Parking',
      description: 'Parking facilities',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      emoji: VEHICLE_EMOJIS.fuelStation,
      label: 'Fuel Station',
      description: 'Refueling locations',
      gradient: 'from-red-400 to-pink-500'
    },
  ];

  // Inline Variant (single row)
  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        {emojiData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-2 py-1"
          >
            <span className="text-base">{item.emoji}</span>
            <span className="text-xs font-semibold text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Compact Variant (grid without descriptions)
  if (variant === 'compact') {
    return (
      <Card className="bg-white rounded-3xl p-4 border-2 border-gray-200 shadow-lg">
        {showTitle && (
          <h3 className="font-bold text-sm text-gray-900 mb-3">Quick Guide</h3>
        )}
        <div className="grid grid-cols-4 gap-2">
          {emojiData.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-3 flex flex-col items-center justify-center text-center`}
            >
              <span className="text-2xl mb-1">{item.emoji}</span>
              <span className="text-[9px] font-bold text-white leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  // Full Variant (detailed cards)
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border-2 border-purple-200 shadow-lg">
      {showTitle && (
        <div className="mb-5">
          <h3 className="font-bold text-lg text-gray-900 mb-1">Self-Drive Icon Guide</h3>
          <p className="text-xs text-gray-600">Quick reference for vehicle rental symbols</p>
        </div>
      )}

      <div className="space-y-3">
        {emojiData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              {/* Emoji */}
              <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                <span className="text-3xl">{item.emoji}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-bold text-sm text-gray-900 mb-0.5">{item.label}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>

              {/* Badge */}
              <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-0 text-[10px]`}>
                Active
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-5 pt-4 border-t border-purple-200">
        <div className="flex items-start gap-2">
          <span className="text-lg">ℹ️</span>
          <p className="text-xs text-gray-600">
            These icons are used throughout the self-drive section to help you quickly identify vehicle types, services, and features.
          </p>
        </div>
      </div>
    </Card>
  );
}

// Quick Access Component
export function VehicleTypeSelector({
  selectedType,
  onSelectType,
}: {
  selectedType?: string;
  onSelectType?: (type: string) => void;
}) {
  const vehicleTypes = [
    {
      id: 'car',
      emoji: VEHICLE_EMOJIS.selfDriveCar,
      label: 'Cars',
      gradient: 'from-orange-400 to-amber-500',
      count: 24
    },
    {
      id: 'bike',
      emoji: VEHICLE_EMOJIS.twoWheeler,
      label: 'Bikes',
      gradient: 'from-blue-400 to-cyan-500',
      count: 18
    },
    {
      id: 'electric',
      emoji: VEHICLE_EMOJIS.electricVehicle,
      label: 'Electric',
      gradient: 'from-green-400 to-emerald-500',
      count: 8
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {vehicleTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelectType?.(type.id)}
          className={`rounded-3xl p-4 transition-all ${
            selectedType === type.id
              ? 'bg-white border-2 border-purple-500 shadow-xl'
              : 'bg-white/80 border-2 border-gray-200 shadow-lg hover:shadow-xl'
          }`}
        >
          <div className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md`}>
            <span className="text-2xl">{type.emoji}</span>
          </div>
          <p className="text-xs font-bold text-gray-900 mb-0.5">{type.label}</p>
          <p className="text-[10px] text-gray-500">{type.count} available</p>
        </button>
      ))}
    </div>
  );
}

// Service Icons Component
export function VehicleServicesIcons() {
  const services = [
    { emoji: VEHICLE_EMOJIS.parking, label: 'Free Parking' },
    { emoji: VEHICLE_EMOJIS.fuelStation, label: 'Fuel Included' },
    { emoji: VEHICLE_EMOJIS.roadTrip, label: 'Unlimited KM' },
    { emoji: VEHICLE_EMOJIS.rentalDocument, label: 'Digital Docs' },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-3 text-center border border-purple-200"
        >
          <div className="text-2xl mb-1">{service.emoji}</div>
          <p className="text-[9px] font-semibold text-gray-700 leading-tight">{service.label}</p>
        </div>
      ))}
    </div>
  );
}

// Journey Steps Component
export function VehicleJourneySteps() {
  const steps = [
    {
      emoji: VEHICLE_EMOJIS.rentalDocument,
      title: 'Book Online',
      description: 'Choose & reserve your vehicle',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      emoji: VEHICLE_EMOJIS.key,
      title: 'Pick Up',
      description: 'Collect keys at location',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      emoji: VEHICLE_EMOJIS.roadTrip,
      title: 'Enjoy Trip',
      description: 'Drive freely, explore',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      emoji: VEHICLE_EMOJIS.parking,
      title: 'Return',
      description: 'Drop at designated spot',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 z-0"></div>

      {/* Steps */}
      <div className="grid grid-cols-4 gap-2 relative z-10">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg`}>
              <span className="text-3xl">{step.emoji}</span>
            </div>
            <p className="text-xs font-bold text-gray-900 mb-0.5">{step.title}</p>
            <p className="text-[10px] text-gray-600 leading-tight">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Feature Badge Component
export function VehicleFeatureBadge({
  feature,
  variant = 'default'
}: {
  feature: 'parking' | 'fuel' | 'electric' | 'document' | 'roadtrip';
  variant?: 'default' | 'compact';
}) {
  const featureMap = {
    parking: {
      emoji: VEHICLE_EMOJIS.parking,
      label: 'Free Parking',
      gradient: 'from-indigo-500 to-purple-500'
    },
    fuel: {
      emoji: VEHICLE_EMOJIS.fuelStation,
      label: 'Fuel Flexible',
      gradient: 'from-red-500 to-pink-500'
    },
    electric: {
      emoji: VEHICLE_EMOJIS.electricVehicle,
      label: 'Electric',
      gradient: 'from-green-500 to-emerald-500'
    },
    document: {
      emoji: VEHICLE_EMOJIS.rentalDocument,
      label: 'Digital Docs',
      gradient: 'from-purple-500 to-pink-500'
    },
    roadtrip: {
      emoji: VEHICLE_EMOJIS.roadTrip,
      label: 'Unlimited KM',
      gradient: 'from-orange-500 to-amber-500'
    }
  };

  const data = featureMap[feature];

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${data.gradient} text-white px-2 py-1 rounded-lg text-[10px] font-bold`}>
        <span>{data.emoji}</span>
        <span>{data.label}</span>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r ${data.gradient} rounded-2xl p-3 flex items-center gap-2 shadow-md`}>
      <span className="text-2xl">{data.emoji}</span>
      <div className="flex-1">
        <p className="text-sm font-bold text-white">{data.label}</p>
      </div>
    </div>
  );
}
