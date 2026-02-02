import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronRight,
  ChevronLeft,
  Calendar,
  Users,
  MapPin,
  Train,
  Plane,
  Bus,
  Car,
  Plus,
  Check,
  Info,
  Edit,
  Upload,
  FileText,
  X,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// HERITAGE TRIP INTEGRATION SCREEN
// Trip details, dates, transport, documents
// Color Scheme: Cream (#FFF8E1), Gold/Beige, Dark Grey
// ========================================

interface TripIntegrationData {
  tripType: 'new' | 'existing';
  existingTripId?: string;
  tripName: string;
  startDate: string;
  endDate: string;
  groupType: 'family' | 'school' | 'corporate' | 'solo' | 'friends';
  travelers: {
    adults: number;
    children: number;
    seniors: number;
  };
  transport: {
    arrival: 'train' | 'flight' | 'bus' | '';
    local: 'ac-coach' | 'private-cab' | 'self-drive' | '';
  };
  uploadedDocuments: File[];
}

interface HeritageTripIntegrationProps {
  selectedDestinations: Array<{ id: string; name: string }>;
  selectedServices: string[];
  selectedConcessions: string[];
  onSubmit: (tripData: TripIntegrationData) => void;
  onBack: () => void;
}

export function HeritageTripIntegration({
  selectedDestinations,
  selectedServices,
  selectedConcessions,
  onSubmit,
  onBack,
}: HeritageTripIntegrationProps) {
  const [tripData, setTripData] = useState<TripIntegrationData>({
    tripType: 'new',
    tripName: '',
    startDate: '',
    endDate: '',
    groupType: 'family',
    travelers: { adults: 2, children: 0, seniors: 0 },
    transport: { arrival: '', local: '' },
    uploadedDocuments: [],
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setTripData({
        ...tripData,
        uploadedDocuments: [...tripData.uploadedDocuments, ...Array.from(e.target.files)],
      });
    }
  };

  const removeDocument = (index: number) => {
    setTripData({
      ...tripData,
      uploadedDocuments: tripData.uploadedDocuments.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = () => {
    onSubmit(tripData);
  };

  const canProceed = () => {
    if (step === 1) {
      return tripData.tripName && tripData.startDate && tripData.endDate;
    }
    if (step === 2) {
      return tripData.groupType && tripData.travelers.adults > 0;
    }
    if (step === 3) {
      return tripData.transport.arrival && tripData.transport.local;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3D0] to-[#FFE8B8] pb-32">
      {/* ========================================
          HEADER
      ======================================== */}
      <div className="bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-200 hover:text-[#FFF8E1] mb-6 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="text-lg font-semibold">Back to Services</span>
          </button>

          <h1 className="text-5xl font-bold text-[#FFF8E1] mb-4">
            Plan Your Heritage Journey
          </h1>
          <p className="text-2xl text-amber-100 mb-6">
            Add trip details, dates, and travel arrangements
          </p>

          {/* Progress Steps */}
          <div className="flex items-center gap-4">
            {[
              { num: 1, label: 'Trip Details' },
              { num: 2, label: 'Group Info' },
              { num: 3, label: 'Transport' },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-3
                    ${
                      step >= s.num
                        ? 'bg-white text-amber-900 border-white'
                        : 'bg-white/20 text-white border-white/30'
                    }
                  `}
                  >
                    {step > s.num ? <Check className="h-6 w-6" /> : s.num}
                  </div>
                  <span className="text-base font-semibold text-white">{s.label}</span>
                </div>
                {s.num < 3 && <ChevronRight className="h-5 w-5 text-white/60" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
          MAIN CONTENT
      ======================================== */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* ========================================
            STEP 1: TRIP DETAILS
        ======================================== */}
        {step === 1 && (
          <div className="space-y-6">
            {/* Trip Type Selection */}
            <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📅 Trip Type
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setTripData({ ...tripData, tripType: 'new' })}
                  className={`p-6 rounded-xl border-3 transition-all text-left ${
                    tripData.tripType === 'new'
                      ? 'bg-amber-100 border-amber-500'
                      : 'bg-white border-gray-300 hover:border-amber-400'
                  }`}
                >
                  <Plus className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Create New Trip</h4>
                  <p className="text-base text-gray-600">Start a fresh heritage journey</p>
                </button>
                <button
                  onClick={() => setTripData({ ...tripData, tripType: 'existing' })}
                  className={`p-6 rounded-xl border-3 transition-all text-left ${
                    tripData.tripType === 'existing'
                      ? 'bg-amber-100 border-amber-500'
                      : 'bg-white border-gray-300 hover:border-amber-400'
                  }`}
                >
                  <Edit className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Add to Existing Trip</h4>
                  <p className="text-base text-gray-600">Combine with your current plans</p>
                </button>
              </div>
            </div>

            {/* Trip Name */}
            <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8">
              <label className="block text-2xl font-bold text-gray-900 mb-4">
                🏷️ Trip Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={tripData.tripName}
                onChange={(e) => setTripData({ ...tripData, tripName: e.target.value })}
                placeholder="e.g., Family Heritage Tour 2024"
                className="w-full px-6 py-4 border-2 border-amber-300 rounded-xl text-lg"
              />
            </div>

            {/* Dates */}
            <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📆 Travel Dates <span className="text-red-500">*</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-bold text-gray-700 mb-3">Start Date</label>
                  <input
                    type="date"
                    value={tripData.startDate}
                    onChange={(e) => setTripData({ ...tripData, startDate: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-amber-300 rounded-xl text-base"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-gray-700 mb-3">End Date</label>
                  <input
                    type="date"
                    value={tripData.endDate}
                    onChange={(e) => setTripData({ ...tripData, endDate: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-amber-300 rounded-xl text-base"
                  />
                </div>
              </div>
            </div>

            {/* Selected Destinations Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-300 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                📍 Your Selected Destinations ({selectedDestinations.length})
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="bg-white px-4 py-2 rounded-xl border-2 border-blue-200 font-semibold text-base"
                  >
                    {dest.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================
            STEP 2: GROUP INFO
        ======================================== */}
        {step === 2 && (
          <div className="space-y-6">
            {/* Group Type */}
            <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                👥 Group Type <span className="text-red-500">*</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
                  { value: 'school', label: 'School', icon: '🎓' },
                  { value: 'corporate', label: 'Corporate', icon: '💼' },
                  { value: 'solo', label: 'Solo', icon: '🚶' },
                  { value: 'friends', label: 'Friends', icon: '👫' },
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setTripData({ ...tripData, groupType: type.value as any })}
                    className={`p-5 rounded-xl border-2 transition-all ${
                      tripData.groupType === type.value
                        ? 'bg-amber-100 border-amber-500'
                        : 'bg-white border-gray-300 hover:border-amber-400'
                    }`}
                  >
                    <div className="text-4xl mb-2">{type.icon}</div>
                    <div className="text-base font-bold">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Traveler Count */}
            <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🧮 Number of Travelers <span className="text-red-500">*</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <CounterField
                  label="Adults"
                  value={tripData.travelers.adults}
                  onChange={(val) =>
                    setTripData({ ...tripData, travelers: { ...tripData.travelers, adults: val } })
                  }
                />
                <CounterField
                  label="Children (< 12 yrs)"
                  value={tripData.travelers.children}
                  onChange={(val) =>
                    setTripData({ ...tripData, travelers: { ...tripData.travelers, children: val } })
                  }
                />
                <CounterField
                  label="Seniors (60+ yrs)"
                  value={tripData.travelers.seniors}
                  onChange={(val) =>
                    setTripData({ ...tripData, travelers: { ...tripData.travelers, seniors: val } })
                  }
                />
              </div>
            </div>

            {/* Services Summary */}
            {selectedServices.length > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  ✅ Added Services ({selectedServices.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white px-3 py-2 rounded-lg border-2 border-green-200 text-sm font-semibold"
                    >
                      {service.replace(/-/g, ' ')}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================
            STEP 3: TRANSPORT & DOCUMENTS
        ======================================== */}
        {step === 3 && (
          <div className="space-y-6">
            {/* How to Reach */}
            <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🚂 How will you reach? <span className="text-red-500">*</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: 'train', label: 'Train', icon: <Train className="h-6 w-6" /> },
                  { value: 'flight', label: 'Flight', icon: <Plane className="h-6 w-6" /> },
                  { value: 'bus', label: 'Bus', icon: <Bus className="h-6 w-6" /> },
                ].map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => setTripData({ ...tripData, transport: { ...tripData.transport, arrival: mode.value as any } })}
                    className={`p-6 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      tripData.transport.arrival === mode.value
                        ? 'bg-blue-100 border-blue-500'
                        : 'bg-white border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {mode.icon}
                    <span className="text-lg font-bold">{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Local Transport */}
            <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🚗 Local Commute <span className="text-red-500">*</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: 'ac-coach', label: 'AC Coach', icon: <Bus className="h-6 w-6" /> },
                  { value: 'private-cab', label: 'Private Cab', icon: <Car className="h-6 w-6" /> },
                  { value: 'self-drive', label: 'Self Drive', icon: <Car className="h-6 w-6" /> },
                ].map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => setTripData({ ...tripData, transport: { ...tripData.transport, local: mode.value as any } })}
                    className={`p-6 rounded-xl border-2 transition-all flex items-center gap-4 ${
                      tripData.transport.local === mode.value
                        ? 'bg-blue-100 border-blue-500'
                        : 'bg-white border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {mode.icon}
                    <span className="text-lg font-bold">{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Document Upload (if concessions selected) */}
            {selectedConcessions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border-3 border-purple-300 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  📋 Upload ID Proofs for Concessions
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Required for: {selectedConcessions.join(', ')}
                </p>

                <label className="block border-3 border-dashed border-purple-300 rounded-2xl p-12 text-center cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <Upload className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-xl font-bold text-gray-900 mb-2">Click to upload documents</p>
                  <p className="text-base text-gray-600">PDF, JPG, PNG • Max 5MB per file</p>
                </label>

                {tripData.uploadedDocuments.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {tripData.uploadedDocuments.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                        <div className="flex items-center gap-3">
                          <FileText className="h-6 w-6 text-purple-600" />
                          <div>
                            <p className="text-base font-semibold text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-600">{(file.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeDocument(idx)}
                          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors"
                        >
                          <X className="h-6 w-6 text-red-600" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ========================================
          STICKY FOOTER
      ======================================== */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-50 to-yellow-50 border-t-3 border-amber-300 p-6 shadow-2xl z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">
          {step > 1 && (
            <Button
              onClick={() => setStep((step - 1) as any)}
              variant="outline"
              className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold"
            >
              <ChevronLeft className="mr-2 h-6 w-6" />
              Previous
            </Button>
          )}

          <div className="flex-1" />

          {step < 3 ? (
            <Button
              onClick={() => setStep((step + 1) as any)}
              disabled={!canProceed()}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl"
            >
              Next Step
              <ChevronRight className="ml-3 h-7 w-7" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl"
            >
              Submit Request
              <Check className="ml-3 h-7 w-7" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// ========================================
// COUNTER FIELD COMPONENT
// ========================================

interface CounterFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function CounterField({ label, value, onChange }: CounterFieldProps) {
  return (
    <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200">
      <p className="text-base font-bold text-gray-700 mb-4">{label}</p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-12 h-12 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors text-2xl"
        >
          -
        </button>
        <span className="text-3xl font-bold text-gray-900 flex-1 text-center">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-12 h-12 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
