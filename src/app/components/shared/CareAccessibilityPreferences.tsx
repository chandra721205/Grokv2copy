/**
 * Care & Accessibility Preferences Component
 * 
 * A comprehensive, reusable form component for collecting user preferences
 * related to travel pace, mobility support, medical assistance, dietary needs,
 * and accessibility requirements.
 * 
 * Features:
 * - Fully functional with real-time state management
 * - Active visual feedback with teal color scheme
 * - Touch-friendly with scale animations on click
 * - Accessible with ARIA attributes
 * - Responsive design for mobile and desktop
 * - Real-time selection counter badge
 * - Optional callback for parent component integration
 * - Customizable with initial values
 * 
 * @example
 * ```tsx
 * <CareAccessibilityPreferences
 *   onPreferencesChange={(prefs) => console.log(prefs)}
 *   initialValues={{ travelPace: 'gentle' }}
 * />
 * ```
 */

import { useState } from 'react';
import { motion } from 'motion/react';

interface CareAccessibilityPreferencesProps {
  onPreferencesChange?: (preferences: {
    travelPace: string;
    mobilitySupport: string;
    medicalAssistance: string;
    dietaryAccommodations: string;
    accessibilityPriority: string;
  }) => void;
  initialValues?: {
    travelPace?: string;
    mobilitySupport?: string;
    medicalAssistance?: string;
    dietaryAccommodations?: string;
    accessibilityPriority?: string;
  };
  className?: string;
  showTitle?: boolean;
  showInfoBanner?: boolean;
}

export function CareAccessibilityPreferences({ 
  onPreferencesChange,
  initialValues = {},
  className = '',
  showTitle = true,
  showInfoBanner = true
}: CareAccessibilityPreferencesProps) {
  const [travelPacePreference, setTravelPacePreference] = useState(initialValues.travelPace || '');
  const [mobilitySupport, setMobilitySupport] = useState(initialValues.mobilitySupport || '');
  const [medicalAssistance, setMedicalAssistance] = useState(initialValues.medicalAssistance || '');
  const [dietaryAccommodations, setDietaryAccommodations] = useState(initialValues.dietaryAccommodations || '');
  const [accessibilityPriority, setAccessibilityPriority] = useState(initialValues.accessibilityPriority || '');

  const updatePreferences = (updates: Partial<typeof initialValues>) => {
    const allPreferences = {
      travelPace: updates.travelPace !== undefined ? updates.travelPace : travelPacePreference,
      mobilitySupport: updates.mobilitySupport !== undefined ? updates.mobilitySupport : mobilitySupport,
      medicalAssistance: updates.medicalAssistance !== undefined ? updates.medicalAssistance : medicalAssistance,
      dietaryAccommodations: updates.dietaryAccommodations !== undefined ? updates.dietaryAccommodations : dietaryAccommodations,
      accessibilityPriority: updates.accessibilityPriority !== undefined ? updates.accessibilityPriority : accessibilityPriority,
    };
    onPreferencesChange?.(allPreferences);
  };

  const handleTravelPaceChange = (value: string) => {
    setTravelPacePreference(value);
    updatePreferences({ travelPace: value });
  };

  const handleMobilitySupportChange = (value: string) => {
    setMobilitySupport(value);
    updatePreferences({ mobilitySupport: value });
  };

  const handleMedicalAssistanceChange = (value: string) => {
    setMedicalAssistance(value);
    updatePreferences({ medicalAssistance: value });
  };

  const handleDietaryAccommodationsChange = (value: string) => {
    setDietaryAccommodations(value);
    updatePreferences({ dietaryAccommodations: value });
  };

  const handleAccessibilityPriorityChange = (value: string) => {
    setAccessibilityPriority(value);
    updatePreferences({ accessibilityPriority: value });
  };

  const selectionCount = [travelPacePreference, mobilitySupport, medicalAssistance, dietaryAccommodations, accessibilityPriority].filter(Boolean).length;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-6 shadow-md border-2 border-teal-200 ${className}`}
    >
      {showTitle && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">♿</span>
            <h3 className="font-bold text-base text-teal-900">Care & Accessibility Preferences</h3>
          </div>
          {selectionCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold"
            >
              <span>✓</span>
              <span>{selectionCount} Selected</span>
            </motion.div>
          )}
        </div>
      )}
      
      <div className="space-y-4">
        {/* Pace of Travel */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Pace of travel:</label>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <button 
              onClick={() => handleTravelPaceChange('gentle')}
              aria-pressed={travelPacePreference === 'gentle'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                travelPacePreference === 'gentle'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              ⚠️ Gentle
            </button>
            <button 
              onClick={() => handleTravelPaceChange('moderate')}
              aria-pressed={travelPacePreference === 'moderate'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                travelPacePreference === 'moderate'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              Moderate
            </button>
            <button 
              onClick={() => handleTravelPaceChange('active')}
              aria-pressed={travelPacePreference === 'active'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                travelPacePreference === 'active'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              ⚡ Active
            </button>
          </div>
        </div>

        {/* Mobility Support */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Mobility support needed:</label>
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => handleMobilitySupportChange('none')}
              aria-pressed={mobilitySupport === 'none'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                mobilitySupport === 'none'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              None
            </button>
            <button 
              onClick={() => handleMobilitySupportChange('occasional')}
              aria-pressed={mobilitySupport === 'occasional'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                mobilitySupport === 'occasional'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              Occasional
            </button>
            <button 
              onClick={() => handleMobilitySupportChange('fulltime')}
              aria-pressed={mobilitySupport === 'fulltime'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                mobilitySupport === 'fulltime'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              Full-time
            </button>
          </div>
        </div>

        {/* Medical Assistance */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Medical assistance:</label>
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => handleMedicalAssistanceChange('none')}
              aria-pressed={medicalAssistance === 'none'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                medicalAssistance === 'none'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              None
            </button>
            <button 
              onClick={() => handleMedicalAssistanceChange('oncall')}
              aria-pressed={medicalAssistance === 'oncall'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                medicalAssistance === 'oncall'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              On-call
            </button>
            <button 
              onClick={() => handleMedicalAssistanceChange('24/7')}
              aria-pressed={medicalAssistance === '24/7'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                medicalAssistance === '24/7'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              24/7 companion
            </button>
          </div>
        </div>

        {/* Dietary Accommodations */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Dietary accommodations:</label>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleDietaryAccommodationsChange('standard')}
              aria-pressed={dietaryAccommodations === 'standard'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                dietaryAccommodations === 'standard'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              Standard
            </button>
            <button 
              onClick={() => handleDietaryAccommodationsChange('special')}
              aria-pressed={dietaryAccommodations === 'special'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                dietaryAccommodations === 'special'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              Special meals
            </button>
          </div>
        </div>

        {/* Accessibility Priority */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Accessibility priority:</label>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleAccessibilityPriorityChange('standard')}
              aria-pressed={accessibilityPriority === 'standard'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                accessibilityPriority === 'standard'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              Standard
            </button>
            <button 
              onClick={() => handleAccessibilityPriorityChange('full')}
              aria-pressed={accessibilityPriority === 'full'}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all active:scale-95 ${
                accessibilityPriority === 'full'
                  ? 'bg-teal-100 border-teal-500 text-teal-900 shadow-md ring-2 ring-teal-300'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-teal-300 hover:shadow'
              }`}
            >
              Fully accessible
            </button>
          </div>
        </div>
      </div>

      {showInfoBanner && (
        <div className="mt-4 bg-yellow-50 rounded-xl p-3 border border-yellow-200">
          <p className="text-xs text-gray-700 leading-relaxed flex items-start gap-2">
            <span className="text-yellow-600 flex-shrink-0">💡</span>
            <span>These preferences help us customize your itinerary for maximum comfort and accessibility.</span>
          </p>
        </div>
      )}
    </motion.div>
  );
}
