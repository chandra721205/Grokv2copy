/**
 * Care & Accessibility Preferences Demo Screen
 * 
 * This demo showcases the fully functional, navigable, and responsive
 * Care & Accessibility Preferences component with real-time feedback.
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { CareAccessibilityPreferences } from '@/app/components/shared/CareAccessibilityPreferences';

export function CarePreferencesDemo() {
  const [preferences, setPreferences] = useState({
    travelPace: '',
    mobilitySupport: '',
    medicalAssistance: '',
    dietaryAccommodations: '',
    accessibilityPriority: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handlePreferencesChange = (newPreferences: typeof preferences) => {
    setPreferences(newPreferences);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-green-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <button
            aria-label="Go back"
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white font-bold text-xl">Care Preferences Demo</h1>
          <div className="w-10" />
        </div>

        <div className="text-center">
          <p className="text-white/90 text-sm">
            Interactive demo of fully functional accessibility preferences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 bg-green-100 border-2 border-green-500 rounded-2xl p-4 flex items-center gap-2"
          >
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Preferences updated successfully!
            </span>
          </motion.div>
        )}

        {/* Care & Accessibility Preferences Component */}
        <CareAccessibilityPreferences
          onPreferencesChange={handlePreferencesChange}
          showTitle={true}
          showInfoBanner={true}
        />

        {/* Live Preview of Selections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-white rounded-3xl p-6 shadow-md border-2 border-gray-200"
        >
          <h3 className="font-bold text-base text-gray-800 mb-4 flex items-center gap-2">
            <span>📊</span>
            <span>Live Selection Preview</span>
          </h3>

          <div className="space-y-3">
            {preferences.travelPace && (
              <div className="flex items-center justify-between bg-teal-50 rounded-xl p-3">
                <span className="text-sm text-gray-700">Travel Pace:</span>
                <span className="text-sm font-bold text-teal-700 capitalize">
                  {preferences.travelPace}
                </span>
              </div>
            )}

            {preferences.mobilitySupport && (
              <div className="flex items-center justify-between bg-blue-50 rounded-xl p-3">
                <span className="text-sm text-gray-700">Mobility Support:</span>
                <span className="text-sm font-bold text-blue-700 capitalize">
                  {preferences.mobilitySupport}
                </span>
              </div>
            )}

            {preferences.medicalAssistance && (
              <div className="flex items-center justify-between bg-purple-50 rounded-xl p-3">
                <span className="text-sm text-gray-700">Medical Assistance:</span>
                <span className="text-sm font-bold text-purple-700 capitalize">
                  {preferences.medicalAssistance}
                </span>
              </div>
            )}

            {preferences.dietaryAccommodations && (
              <div className="flex items-center justify-between bg-orange-50 rounded-xl p-3">
                <span className="text-sm text-gray-700">Dietary Needs:</span>
                <span className="text-sm font-bold text-orange-700 capitalize">
                  {preferences.dietaryAccommodations}
                </span>
              </div>
            )}

            {preferences.accessibilityPriority && (
              <div className="flex items-center justify-between bg-green-50 rounded-xl p-3">
                <span className="text-sm text-gray-700">Accessibility:</span>
                <span className="text-sm font-bold text-green-700 capitalize">
                  {preferences.accessibilityPriority === 'full' ? 'Fully Accessible' : preferences.accessibilityPriority}
                </span>
              </div>
            )}

            {!preferences.travelPace && !preferences.mobilitySupport && !preferences.medicalAssistance && !preferences.dietaryAccommodations && !preferences.accessibilityPriority && (
              <div className="text-center py-6 text-gray-400 text-sm">
                No preferences selected yet. Try selecting options above!
              </div>
            )}
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border-2 border-blue-200"
        >
          <h3 className="font-bold text-base text-blue-900 mb-4">✨ Component Features</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Fully functional state management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Active visual feedback with teal highlights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Touch-friendly with scale animations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Real-time selection counter badge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Accessible with ARIA attributes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Responsive design for all devices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Reusable component with callback support</span>
            </li>
          </ul>
        </motion.div>

        {/* JSON Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 bg-gray-900 rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-bold text-base text-white mb-4 flex items-center gap-2">
            <span>🔧</span>
            <span>JSON Output</span>
          </h3>
          <pre className="text-xs text-green-400 font-mono overflow-x-auto">
            {JSON.stringify(preferences, null, 2)}
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
