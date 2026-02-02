import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TransportPreferences } from '@/app/components/custom-tour/TransportPreferences';
import { Screen32B4_TransportMode } from '@/app/components/custom-tour/Screen32B4_TransportMode';
import { SelfDriveVehicles } from '@/app/components/essentials/SelfDriveVehicles';
import { VehicleListings } from '@/app/components/essentials/VehicleListings';
import { VehicleBookingForm } from '@/app/components/essentials/VehicleBookingForm';
import { VehicleDetails } from '@/app/components/essentials/VehicleDetails';
import { VehicleComparison } from '@/app/components/essentials/VehicleComparison';

type Screen = 
  | 'transport-preferences'    // Screen 32B3
  | 'transport-mode'           // Screen 32B4 (NEW)
  | 'self-drive-hub' 
  | 'vehicle-listings' 
  | 'vehicle-details' 
  | 'vehicle-comparison'
  | 'vehicle-booking'
  | 'tour-review';

export function CustomTourDemo() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('transport-preferences');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
  const [compareVehicleIds, setCompareVehicleIds] = useState<string[]>([]);
  const [selectedTransportMode, setSelectedTransportMode] = useState<'self-drive' | 'chauffeur' | 'public' | 'mixed'>('self-drive');

  const handleGoogleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(`india ${query}`)}`, '_blank');
  };

  const handleYouTubeSearch = (query: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(`india ${query}`)}`, '_blank');
  };

  // From 32B3 → 32B4
  const handleTransportModeSelected = (mode: 'self-drive' | 'chauffeur' | 'public' | 'mixed') => {
    setSelectedTransportMode(mode);
    setCurrentScreen('transport-mode');
  };

  // From 32B4 → Vehicle Selection (only for self-drive)
  const handleNavigateToSelfDrive = () => {
    setCurrentScreen('self-drive-hub');
  };

  const handleNavigateToListings = () => {
    setCurrentScreen('vehicle-listings');
  };

  const handleNavigateToBooking = (vehicleId?: string) => {
    if (vehicleId) {
      setSelectedVehicleId(vehicleId);
    }
    setCurrentScreen('vehicle-booking');
  };

  const handleSubmitBooking = (bookingData: any) => {
    console.log('Booking submitted:', bookingData);
    alert('✅ Vehicle added to your custom tour! Returning to tour planning...');
    setCurrentScreen('tour-review');
  };

  // Direct continue to summary (skip vehicle selection for non-self-drive)
  const handleContinueToSummary = () => {
    setCurrentScreen('tour-review');
  };

  const handleSkipTransport = () => {
    alert('⏭️ Transport preferences skipped. You can add them later.');
    setCurrentScreen('tour-review');
  };

  const handleNavigateToTransportHub = () => {
    alert('🚗 Transport Hub: Chauffeur-driven services (Screen 79)');
  };

  const handleNavigateToTransportPlanner = () => {
    alert('🚌 Transport Planner: Public transport options (Screen 81)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <AnimatePresence mode="wait">
        {/* Screen 32B3: Transport Preferences (Initial Selection) */}
        {currentScreen === 'transport-preferences' && (
          <TransportPreferences
            key="transport-preferences"
            onBack={() => console.log('Back to previous step')}
            onContinue={handleContinueToSummary}
            onSkip={handleSkipTransport}
            onNavigateToVehicles={() => handleTransportModeSelected('self-drive')}
            onNavigateToTransportHub={handleNavigateToTransportHub}
            onNavigateToTransportPlanner={handleNavigateToTransportPlanner}
          />
        )}

        {/* Screen 32B4: Transport Mode Details (NEW - Detailed configuration) */}
        {currentScreen === 'transport-mode' && (
          <Screen32B4_TransportMode
            key="transport-mode"
            onBack={() => setCurrentScreen('transport-preferences')}
            onContinueToVehicleSelection={handleNavigateToSelfDrive}
            onContinueToSummary={handleContinueToSummary}
            selectedTransportMode={selectedTransportMode}
            onGoogleSearch={handleGoogleSearch}
            onYouTubeSearch={handleYouTubeSearch}
          />
        )}

        {currentScreen === 'self-drive-hub' && (
          <SelfDriveVehicles
            key="self-drive-hub"
            onBack={() => setCurrentScreen('transport-mode')}
            onNavigateToListings={handleNavigateToListings}
            onNavigateToBooking={handleNavigateToBooking}
            onAddToComparison={(id) => {
              if (!compareVehicleIds.includes(id)) {
                setCompareVehicleIds([...compareVehicleIds, id]);
              }
            }}
            onRemoveFromComparison={(id) => {
              setCompareVehicleIds(compareVehicleIds.filter(vid => vid !== id));
            }}
            onNavigateToComparison={() => setCurrentScreen('vehicle-comparison')}
          />
        )}

        {currentScreen === 'vehicle-listings' && (
          <VehicleListings
            key="vehicle-listings"
            onBack={() => setCurrentScreen('self-drive-hub')}
            onSelectVehicle={(vehicleId) => handleNavigateToBooking(vehicleId)}
            onViewDetails={(vehicleId) => {
              setSelectedVehicleId(vehicleId);
              setCurrentScreen('vehicle-details');
            }}
            onCompareVehicles={(vehicleIds) => {
              setCompareVehicleIds(vehicleIds);
              setCurrentScreen('vehicle-comparison');
            }}
          />
        )}

        {currentScreen === 'vehicle-details' && (
          <VehicleDetails
            key="vehicle-details"
            onBack={() => setCurrentScreen('vehicle-listings')}
            onBookNow={() => {
              setCurrentScreen('vehicle-booking');
            }}
            vehicleId={selectedVehicleId}
          />
        )}

        {currentScreen === 'vehicle-comparison' && (
          <VehicleComparison
            key="vehicle-comparison"
            onBack={() => setCurrentScreen('vehicle-listings')}
            onSelectVehicle={(vehicleId) => {
              setSelectedVehicleId(vehicleId);
              setCurrentScreen('vehicle-details');
            }}
            vehicleIds={compareVehicleIds}
          />
        )}

        {currentScreen === 'vehicle-booking' && (
          <VehicleBookingForm
            key="vehicle-booking"
            onBack={() => setCurrentScreen('vehicle-listings')}
            onSubmitBooking={handleSubmitBooking}
            selectedVehicle={selectedVehicleId || 'Hyundai Creta'}
          />
        )}

        {currentScreen === 'tour-review' && (
          <TourReviewPlaceholder
            onBack={() => setCurrentScreen('transport-preferences')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function TourReviewPlaceholder({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-20"
    >
      {/* Header with 6-Step Progress */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Tour Summary</h1>
            <p className="text-white/90 text-sm">Step 5 of 6: Review your bookings</p>
          </div>
        </div>

        {/* 6-Step Progress Indicator */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  step <= 4 
                    ? 'bg-white text-green-600' 
                    : step === 5
                    ? 'bg-white text-purple-600 ring-4 ring-white/40'
                    : 'bg-white/30 text-white'
                }`}>
                  {step <= 4 ? '✓' : step}
                </div>
                {step < 6 && (
                  <div className={`h-1 w-full -mt-4 ${step <= 4 ? 'bg-white' : 'bg-white/30'}`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-1 text-[8px] text-white/90 text-center">
            <span>Dates</span>
            <span>Guests</span>
            <span>Location</span>
            <span>Transport</span>
            <span className="font-bold">Review</span>
            <span>Payment</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Screen Indicator */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <p className="text-xs font-bold text-gray-700">Screen 32B5 (Tour Summary)</p>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-5 border-2 border-green-300 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-green-900 mb-1">Transport Added!</h3>
              <p className="text-xs text-green-700">Your transport preferences have been saved to your tour.</p>
            </div>
          </div>
        </div>

        {/* Booking Summary Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h2>

          {/* Accommodation Section */}
          <div className="mb-5 pb-5 border-b border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base text-gray-900 mb-1">✓ Accommodation</h3>
                <p className="text-sm text-gray-700 font-semibold">3 nights</p>
                <p className="text-xs text-gray-500 mt-1">Admin-Selected Hotel in Location A</p>
              </div>
            </div>
          </div>

          {/* Activities Section */}
          <div className="mb-5 pb-5 border-b border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base text-gray-900 mb-1">✓ Activities</h3>
                <p className="text-sm text-gray-700 font-semibold">4 booked</p>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-gray-600">• Admin-Selected Experience 1</p>
                  <p className="text-xs text-gray-600">• Admin-Selected Experience 2</p>
                  <p className="text-xs text-gray-600">• Admin-Selected Experience 3</p>
                  <p className="text-xs text-gray-600">• Admin-Selected Experience 4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Section - NEW */}
          <div className="mb-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-base text-gray-900">✓ Transport</h3>
                  <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
                </div>
                <p className="text-sm text-gray-700 font-semibold mb-3">Self-drive SUV (Hyundai Creta)</p>
                
                {/* Vehicle Details */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-200 space-y-3">
                  {/* Pickup */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700 mb-0.5">Pickup</p>
                      <p className="text-sm font-bold text-gray-900">Kochi Airport</p>
                      <p className="text-xs text-gray-600">Dec 15, 2024 at 10:00 AM</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-l-2 border-dashed border-gray-300 h-4 ml-4"></div>

                  {/* Dropoff */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-700 mb-0.5">Dropoff</p>
                      <p className="text-sm font-bold text-gray-900">Kochi Airport</p>
                      <p className="text-xs text-gray-600">Dec 18, 2024 at 5:00 PM</p>
                    </div>
                  </div>

                  {/* Duration & Total */}
                  <div className="bg-white/80 rounded-xl p-3 mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="text-sm font-bold text-gray-900">3 days (72 hours)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600">Total Cost</p>
                      <p className="text-lg font-bold text-orange-600">₹12,000</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-3 flex items-start gap-2 bg-blue-50 rounded-xl p-3">
                  <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-blue-700">
                    Includes: Unlimited kms, Zero deposit insurance, 24/7 roadside assistance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Total Cost Summary */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-300 mt-6">
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Accommodation</span>
                <span className="font-semibold text-gray-900">₹18,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Activities</span>
                <span className="font-semibold text-gray-900">₹8,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Transport (Self-drive)</span>
                <span className="font-semibold text-gray-900">₹12,000</span>
              </div>
            </div>
            <div className="border-t-2 border-purple-300 pt-3 flex justify-between items-center">
              <span className="text-base font-bold text-purple-900">Total Amount</span>
              <span className="text-2xl font-bold text-purple-600">₹38,000</span>
            </div>
          </div>
        </div>

        {/* Next Steps Card */}
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-5 border-2 border-blue-300 shadow-lg">
          <h3 className="font-bold text-base text-blue-900 mb-3">Next Steps</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">6</div>
              <p className="text-sm text-blue-800">Confirm booking and make payment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-40">
        <div className="max-w-md mx-auto space-y-2">
          <button className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
            Proceed to Payment
            <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={onBack}
            className="w-full h-10 text-gray-600 hover:text-gray-900 font-semibold"
          >
            Back to Transport Preferences
          </button>
        </div>
      </div>
    </motion.div>
  );
}
