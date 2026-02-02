import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { 
  VehicleEmojiGuide,
  VehicleTypeSelector,
  VehicleServicesIcons,
  VehicleJourneySteps,
  VehicleFeatureBadge,
  VEHICLE_EMOJIS
} from '@/app/components/essentials/VehicleEmojiGuide';

export function VehicleEmojiDemo() {
  const [selectedType, setSelectedType] = useState<string>('car');
  const [currentView, setCurrentView] = useState<'guide' | 'selector' | 'services' | 'journey'>('guide');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4">
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Vehicle Emoji System</h1>
            <p className="text-white/90 text-sm">Self-Drive icon reference guide</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* View Tabs */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { id: 'guide', label: 'Guide', emoji: '📚' },
            { id: 'selector', label: 'Selector', emoji: '🚗' },
            { id: 'services', label: 'Services', emoji: '⚙️' },
            { id: 'journey', label: 'Journey', emoji: '🛣️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id as any)}
              className={`py-3 px-2 rounded-2xl font-semibold text-xs transition-all ${
                currentView === tab.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/60 text-gray-700'
              }`}
            >
              <div className="text-lg mb-1">{tab.emoji}</div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {currentView === 'guide' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Full Guide */}
            <VehicleEmojiGuide variant="full" />

            {/* Compact Guide */}
            <VehicleEmojiGuide variant="compact" />

            {/* Inline Guide */}
            <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-sm text-gray-900 mb-3">Inline Variant</h3>
              <VehicleEmojiGuide variant="inline" />
            </Card>

            {/* Individual Emoji Usage */}
            <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-4">Individual Emojis</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(VEHICLE_EMOJIS).map(([key, emoji]) => (
                  <div key={key} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
                    <span className="text-2xl">{emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-900 truncate">{key}</p>
                      <code className="text-[10px] text-purple-600">VEHICLE_EMOJIS.{key}</code>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {currentView === 'selector' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-4">Vehicle Type Selector</h3>
              <VehicleTypeSelector 
                selectedType={selectedType}
                onSelectType={setSelectedType}
              />
              
              {selectedType && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">
                    Selected: <span className="font-bold text-purple-600">{selectedType}</span>
                  </p>
                </div>
              )}
            </Card>

            {/* Usage Example */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-5 border-2 border-purple-200">
              <h4 className="text-sm font-bold text-purple-900 mb-3">Usage Example</h4>
              <pre className="bg-white rounded-xl p-3 overflow-x-auto">
                <code className="text-xs text-gray-800">
{`<VehicleTypeSelector 
  selectedType={selectedType}
  onSelectType={setSelectedType}
/>`}
                </code>
              </pre>
            </Card>
          </motion.div>
        )}

        {currentView === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-4">Service Icons</h3>
              <VehicleServicesIcons />
            </Card>

            <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-4">Feature Badges</h3>
              <div className="space-y-3">
                <VehicleFeatureBadge feature="parking" variant="default" />
                <VehicleFeatureBadge feature="fuel" variant="default" />
                <VehicleFeatureBadge feature="electric" variant="default" />
                <VehicleFeatureBadge feature="document" variant="default" />
                <VehicleFeatureBadge feature="roadtrip" variant="default" />
              </div>
            </Card>

            <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-4">Compact Badges</h3>
              <div className="flex flex-wrap gap-2">
                <VehicleFeatureBadge feature="parking" variant="compact" />
                <VehicleFeatureBadge feature="fuel" variant="compact" />
                <VehicleFeatureBadge feature="electric" variant="compact" />
                <VehicleFeatureBadge feature="document" variant="compact" />
                <VehicleFeatureBadge feature="roadtrip" variant="compact" />
              </div>
            </Card>
          </motion.div>
        )}

        {currentView === 'journey' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Card className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
              <h3 className="font-bold text-base text-gray-900 mb-5">Rental Journey Steps</h3>
              <VehicleJourneySteps />
            </Card>

            {/* Context Cards */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-4 border border-orange-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">{VEHICLE_EMOJIS.selfDriveCar}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 text-center mb-1">Cars</h4>
                <p className="text-xs text-gray-600 text-center">Self-drive vehicles</p>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-4 border border-blue-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">{VEHICLE_EMOJIS.twoWheeler}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 text-center mb-1">Bikes</h4>
                <p className="text-xs text-gray-600 text-center">Scooters & motorcycles</p>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-4 border border-green-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">{VEHICLE_EMOJIS.electricVehicle}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 text-center mb-1">Electric</h4>
                <p className="text-xs text-gray-600 text-center">Eco-friendly EVs</p>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-4 border border-yellow-200">
                <div className="text-center mb-3">
                  <span className="text-4xl">{VEHICLE_EMOJIS.roadTrip}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 text-center mb-1">Road Trips</h4>
                <p className="text-xs text-gray-600 text-center">Long distance travel</p>
              </Card>
            </div>

            {/* Location & Service Cards */}
            <div className="space-y-3">
              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-200">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{VEHICLE_EMOJIS.parking}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Parking Facilities</h4>
                    <p className="text-xs text-gray-600">Free parking at pickup/dropoff locations</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 border border-red-200">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{VEHICLE_EMOJIS.fuelStation}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Fuel Stations</h4>
                    <p className="text-xs text-gray-600">Convenient refueling options nearby</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-200">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{VEHICLE_EMOJIS.rentalDocument}</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Digital Documents</h4>
                    <p className="text-xs text-gray-600">Paperless rental agreements</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Code Reference */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-5 border-2 border-gray-700 shadow-xl">
          <h3 className="font-bold text-base text-white mb-4">Import & Usage</h3>
          <pre className="bg-black/30 rounded-2xl p-4 overflow-x-auto">
            <code className="text-xs text-green-400">
{`// Import emojis
import { VEHICLE_EMOJIS } from '@/components/VehicleEmojiGuide';

// Use in components
<span className="text-2xl">{VEHICLE_EMOJIS.selfDriveCar}</span>
<span className="text-2xl">{VEHICLE_EMOJIS.twoWheeler}</span>
<span className="text-2xl">{VEHICLE_EMOJIS.electricVehicle}</span>

// Import components
import { 
  VehicleEmojiGuide,
  VehicleTypeSelector,
  VehicleServicesIcons,
  VehicleJourneySteps,
  VehicleFeatureBadge
} from '@/components/VehicleEmojiGuide';`}
            </code>
          </pre>
        </Card>

        {/* Emoji Reference Table */}
        <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
          <h3 className="font-bold text-base text-gray-900 mb-4">Complete Emoji Reference</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-purple-50">
                <tr>
                  <th className="text-left py-2 px-3 font-bold text-purple-900">Emoji</th>
                  <th className="text-left py-2 px-3 font-bold text-purple-900">Constant</th>
                  <th className="text-left py-2 px-3 font-bold text-purple-900">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-2 px-3 text-2xl">{VEHICLE_EMOJIS.selfDriveCar}</td>
                  <td className="py-2 px-3"><code className="text-purple-600">selfDriveCar</code></td>
                  <td className="py-2 px-3 text-gray-600">Self-drive cars category</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-2xl">{VEHICLE_EMOJIS.twoWheeler}</td>
                  <td className="py-2 px-3"><code className="text-purple-600">twoWheeler</code></td>
                  <td className="py-2 px-3 text-gray-600">Bikes and scooters</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-2xl">{VEHICLE_EMOJIS.electricVehicle}</td>
                  <td className="py-2 px-3"><code className="text-purple-600">electricVehicle</code></td>
                  <td className="py-2 px-3 text-gray-600">Electric vehicles badge</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-2xl">{VEHICLE_EMOJIS.rentalDocument}</td>
                  <td className="py-2 px-3"><code className="text-purple-600">rentalDocument</code></td>
                  <td className="py-2 px-3 text-gray-600">Booking agreements</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-2xl">{VEHICLE_EMOJIS.roadTrip}</td>
                  <td className="py-2 px-3"><code className="text-purple-600">roadTrip</code></td>
                  <td className="py-2 px-3 text-gray-600">Road trip packages</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-2xl">{VEHICLE_EMOJIS.parking}</td>
                  <td className="py-2 px-3"><code className="text-purple-600">parking</code></td>
                  <td className="py-2 px-3 text-gray-600">Parking facilities</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-2xl">{VEHICLE_EMOJIS.fuelStation}</td>
                  <td className="py-2 px-3"><code className="text-purple-600">fuelStation</code></td>
                  <td className="py-2 px-3 text-gray-600">Fuel stations nearby</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-40">
        <div className="max-w-md mx-auto">
          <Button className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base hover:from-purple-700 hover:to-pink-700">
            Copy Emoji Constants
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
