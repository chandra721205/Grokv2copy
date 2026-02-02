import { useState } from 'react';
import { HealthWellnessHub } from '@/app/components/wellness/HealthWellnessHub';
import {
  MedicalTourismScreen,
  AyurvedaPanchakarmaScreen,
} from '@/app/components/wellness/TreatmentScreens';

// ========================================
// HEALTH & WELLNESS COMPLETE DEMO
// Matches Reference Images 100%
// ========================================

export function HealthWellnessDemo() {
  const [currentScreen, setCurrentScreen] = useState<string>('hub');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs (For Demo Only) */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentScreen('hub')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentScreen === 'hub'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🏠 Hub (Reference Image 2)
            </button>
            <button
              onClick={() => setCurrentScreen('medical')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentScreen === 'medical'
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🏥 Medical Tourism (Reference Image 3)
            </button>
            <button
              onClick={() => setCurrentScreen('ayurveda')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentScreen === 'ayurveda'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🌿 Ayurveda (Reference Image 4)
            </button>
          </div>
        </div>
      </div>

      {/* Screen Router */}
      {currentScreen === 'hub' && <HealthWellnessHub />}
      {currentScreen === 'medical' && <MedicalTourismScreen />}
      {currentScreen === 'ayurveda' && <AyurvedaPanchakarmaScreen />}
    </div>
  );
}

// Export for use in App.tsx
export default HealthWellnessDemo;
