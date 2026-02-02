import { useState } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Users,
  UserPlus,
  Baby,
  Plane,
  Train,
  Bus,
  Car,
  User,
  Stethoscope,
  Accessibility,
  Languages,
  MapPin,
  Leaf,
  Utensils,
  Mountain,
  ChevronRight,
  Upload,
  FileText,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// HERITAGE REQUEST FORM - THE WIZARD
// Step-by-step vertical form
// Color Scheme: Cream (#FFF8E1), Gold/Beige, Dark Grey
// ========================================

interface HeritageRequestFormData {
  // Group Details
  groupType: 'family' | 'school' | 'corporate' | 'solo' | '';
  adults: number;
  children: number;
  seniors: number;

  // Transport & Logistics
  reachBy: 'train' | 'flight' | 'luxury-bus' | '';
  localCommute: 'ac-coach' | 'private-cab' | 'self-drive' | '';

  // On-Ground Support
  needGuide: boolean;
  guideLanguage: string;
  needCoordinator: boolean;
  needMedical: boolean;
  needAccessibility: boolean;

  // Multi-Category Interest
  nearbyNature: boolean;
  localCulinary: boolean;
  adventureActivities: boolean;

  // Documents (for concessions)
  uploadedDocuments: File[];
}

interface HeritageRequestFormProps {
  destinationId: string;
  destinationName: string;
  selectedConcessions: string[];
  onClose: () => void;
  onSubmit: (formData: HeritageRequestFormData) => void;
}

export function HeritageRequestForm({
  destinationId,
  destinationName,
  selectedConcessions,
  onClose,
  onSubmit,
}: HeritageRequestFormProps) {
  const [formData, setFormData] = useState<HeritageRequestFormData>({
    groupType: '',
    adults: 2,
    children: 0,
    seniors: 0,
    reachBy: '',
    localCommute: '',
    needGuide: false,
    guideLanguage: '',
    needCoordinator: false,
    needMedical: false,
    needAccessibility: false,
    nearbyNature: false,
    localCulinary: false,
    adventureActivities: false,
    uploadedDocuments: [],
  });

  const [progress, setProgress] = useState(0);

  // Calculate progress based on filled fields
  const calculateProgress = () => {
    let filled = 0;
    const total = 10;

    if (formData.groupType) filled++;
    if (formData.adults > 0) filled++;
    if (formData.reachBy) filled++;
    if (formData.localCommute) filled++;
    if (formData.needGuide || formData.needCoordinator || formData.needMedical || formData.needAccessibility) filled++;
    if (formData.nearbyNature || formData.localCulinary || formData.adventureActivities) filled++;
    if (selectedConcessions.length > 0 && formData.uploadedDocuments.length > 0) filled++;

    return Math.round((filled / total) * 100);
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        uploadedDocuments: [...formData.uploadedDocuments, ...Array.from(e.target.files)],
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFF8E1] rounded-3xl shadow-2xl w-full max-w-4xl my-8"
      >
        {/* ========================================
            HEADER
        ======================================== */}
        <div className="sticky top-0 bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] p-8 rounded-t-3xl z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">
                Custom Heritage Request
              </h1>
              <p className="text-xl text-amber-100">
                Planning your journey to <strong>{destinationName}</strong>
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors flex-shrink-0 ml-4"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${calculateProgress()}%` }}
              className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full"
            />
          </div>
          <p className="text-sm text-amber-200 mt-2">
            {calculateProgress()}% Complete • Takes 3-5 minutes
          </p>
        </div>

        {/* ========================================
            FORM CONTENT - SCROLLABLE
        ======================================== */}
        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* ========================================
              1. GROUP DETAILS
          ======================================== */}
          <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              1. Group Details
            </h3>

            {/* Group Type */}
            <div className="mb-6">
              <label className="block text-lg font-bold text-gray-800 mb-3">
                Group Type <span className="text-red-500">*</span>
              </label>
              <div className="grid md:grid-cols-4 gap-3">
                {[
                  { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
                  { value: 'school', label: 'School Trip', icon: '🎓' },
                  { value: 'corporate', label: 'Corporate', icon: '💼' },
                  { value: 'solo', label: 'Solo', icon: '🚶' },
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setFormData({ ...formData, groupType: type.value as any })}
                    className={`
                      p-4 rounded-xl border-2 font-bold transition-all
                      ${
                        formData.groupType === type.value
                          ? 'bg-amber-100 border-amber-500 text-amber-900'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-amber-400'
                      }
                    `}
                  >
                    <div className="text-3xl mb-2">{type.icon}</div>
                    <div className="text-sm">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Count */}
            <div className="grid md:grid-cols-3 gap-4">
              <CounterField
                label="Adults"
                icon={<UserPlus className="h-5 w-5" />}
                value={formData.adults}
                onChange={(val) => setFormData({ ...formData, adults: val })}
              />
              <CounterField
                label="Children"
                icon={<Baby className="h-5 w-5" />}
                value={formData.children}
                onChange={(val) => setFormData({ ...formData, children: val })}
              />
              <CounterField
                label="Seniors"
                icon={<User className="h-5 w-5" />}
                value={formData.seniors}
                onChange={(val) => setFormData({ ...formData, seniors: val })}
              />
            </div>
          </div>

          {/* ========================================
              2. TRANSPORT & LOGISTICS
          ======================================== */}
          <div className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Train className="h-6 w-6 text-white" />
              </div>
              2. Transport & Logistics
            </h3>

            {/* How to Reach */}
            <div className="mb-6">
              <label className="block text-lg font-bold text-gray-800 mb-3">
                How would you like to reach? <span className="text-red-500">*</span>
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { value: 'train', label: 'Train', icon: <Train className="h-6 w-6" /> },
                  { value: 'flight', label: 'Flight', icon: <Plane className="h-6 w-6" /> },
                  { value: 'luxury-bus', label: 'Luxury Bus', icon: <Bus className="h-6 w-6" /> },
                ].map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => setFormData({ ...formData, reachBy: mode.value as any })}
                    className={`
                      p-5 rounded-xl border-2 font-bold transition-all flex items-center gap-3
                      ${
                        formData.reachBy === mode.value
                          ? 'bg-blue-100 border-blue-500 text-blue-900'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-blue-400'
                      }
                    `}
                  >
                    {mode.icon}
                    <span>{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Local Commute */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-3">
                Local Commute <span className="text-red-500">*</span>
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { value: 'ac-coach', label: 'AC Coach', icon: <Bus className="h-6 w-6" /> },
                  { value: 'private-cab', label: 'Private Cab', icon: <Car className="h-6 w-6" /> },
                  { value: 'self-drive', label: 'Self-Drive', icon: <Car className="h-6 w-6" /> },
                ].map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => setFormData({ ...formData, localCommute: mode.value as any })}
                    className={`
                      p-5 rounded-xl border-2 font-bold transition-all flex items-center gap-3
                      ${
                        formData.localCommute === mode.value
                          ? 'bg-blue-100 border-blue-500 text-blue-900'
                          : 'bg-white border-gray-300 text-gray-700 hover:border-blue-400'
                      }
                    `}
                  >
                    {mode.icon}
                    <span>{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================
              3. ON-GROUND SUPPORT (CRUCIAL)
          ======================================== */}
          <div className="bg-white rounded-2xl shadow-lg border-3 border-orange-300 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              3. On-Ground Support
              <span className="text-base font-normal text-orange-700 bg-orange-200 px-3 py-1 rounded-full ml-auto">
                Crucial
              </span>
            </h3>

            <div className="space-y-4">
              {/* Certified Tour Guide */}
              <label className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-300 hover:border-orange-400 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.needGuide}
                  onChange={(e) => setFormData({ ...formData, needGuide: e.target.checked })}
                  className="w-6 h-6 accent-orange-600 mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Languages className="h-6 w-6 text-orange-600" />
                    <span className="text-lg font-bold text-gray-900">
                      Need Certified Tour Guide
                    </span>
                  </div>
                  {formData.needGuide && (
                    <select
                      value={formData.guideLanguage}
                      onChange={(e) => setFormData({ ...formData, guideLanguage: e.target.value })}
                      className="w-full mt-3 px-4 py-3 border-2 border-orange-300 rounded-xl text-base"
                    >
                      <option value="">Select Language</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="regional">Regional Language</option>
                      <option value="multiple">Multiple Languages</option>
                    </select>
                  )}
                </div>
              </label>

              {/* Tour Coordinator */}
              <label className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-300 hover:border-orange-400 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.needCoordinator}
                  onChange={(e) => setFormData({ ...formData, needCoordinator: e.target.checked })}
                  className="w-6 h-6 accent-orange-600 mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <User className="h-6 w-6 text-orange-600" />
                    <span className="text-lg font-bold text-gray-900">
                      Need Tour Coordinator
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">For large groups</p>
                </div>
              </label>

              {/* Medical Assistance */}
              <label className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-300 hover:border-orange-400 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.needMedical}
                  onChange={(e) => setFormData({ ...formData, needMedical: e.target.checked })}
                  className="w-6 h-6 accent-orange-600 mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-6 w-6 text-orange-600" />
                    <span className="text-lg font-bold text-gray-900">
                      Medical Assistance
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Doctor/Nurse on call</p>
                </div>
              </label>

              {/* Wheelchair/Accessibility */}
              <label className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-300 hover:border-orange-400 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.needAccessibility}
                  onChange={(e) => setFormData({ ...formData, needAccessibility: e.target.checked })}
                  className="w-6 h-6 accent-orange-600 mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Accessibility className="h-6 w-6 text-orange-600" />
                    <span className="text-lg font-bold text-gray-900">
                      Wheelchair/Accessibility Support
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ramps, elevators, assisted transport</p>
                </div>
              </label>
            </div>
          </div>

          {/* ========================================
              4. MULTI-CATEGORY INTEREST
          ======================================== */}
          <div className="bg-white rounded-2xl shadow-lg border-3 border-green-300 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              4. Multi-Category Interest
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              While visiting this Heritage site, also show me:
            </p>

            <div className="space-y-4">
              <label className="flex items-center gap-4 p-5 rounded-xl border-2 border-gray-300 hover:border-green-400 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.nearbyNature}
                  onChange={(e) => setFormData({ ...formData, nearbyNature: e.target.checked })}
                  className="w-6 h-6 accent-green-600"
                />
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-lg font-bold text-gray-900">Nearby Nature Spots</span>
              </label>

              <label className="flex items-center gap-4 p-5 rounded-xl border-2 border-gray-300 hover:border-green-400 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.localCulinary}
                  onChange={(e) => setFormData({ ...formData, localCulinary: e.target.checked })}
                  className="w-6 h-6 accent-green-600"
                />
                <Utensils className="h-6 w-6 text-green-600" />
                <span className="text-lg font-bold text-gray-900">Local Culinary Spots</span>
              </label>

              <label className="flex items-center gap-4 p-5 rounded-xl border-2 border-gray-300 hover:border-green-400 cursor-pointer transition-all">
                <input
                  type="checkbox"
                  checked={formData.adventureActivities}
                  onChange={(e) => setFormData({ ...formData, adventureActivities: e.target.checked })}
                  className="w-6 h-6 accent-green-600"
                />
                <Mountain className="h-6 w-6 text-green-600" />
                <span className="text-lg font-bold text-gray-900">Adventure Activities</span>
              </label>
            </div>
          </div>

          {/* ========================================
              5. DOCUMENT UPLOAD (IF CONCESSIONS SELECTED)
          ======================================== */}
          {selectedConcessions.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg border-3 border-purple-300 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                5. Document Upload
                <span className="text-base font-normal text-purple-700 bg-purple-200 px-3 py-1 rounded-full ml-auto">
                  For Concessions
                </span>
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Upload ID proofs for: {selectedConcessions.join(', ')}
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
                <p className="text-xl font-bold text-gray-900 mb-2">
                  Click to upload documents
                </p>
                <p className="text-base text-gray-600">
                  PDF, JPG, PNG • Max 5MB per file
                </p>
              </label>

              {formData.uploadedDocuments.length > 0 && (
                <div className="mt-4 space-y-2">
                  {formData.uploadedDocuments.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-purple-50 rounded-xl p-3 border-2 border-purple-200">
                      <FileText className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-900">{file.name}</span>
                      <span className="text-xs text-gray-600 ml-auto">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ========================================
            FOOTER - SUBMIT BUTTON
        ======================================== */}
        <div className="sticky bottom-0 bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-b-3xl border-t-3 border-amber-300">
          <Button
            onClick={handleSubmit}
            disabled={!formData.groupType || !formData.reachBy || !formData.localCommute}
            className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-8 rounded-2xl text-2xl font-bold shadow-2xl"
          >
            Submit Itinerary Request
            <ChevronRight className="ml-3 h-8 w-8" />
          </Button>
          <p className="text-center text-sm text-gray-600 mt-4">
            🔒 Your information is secure • Our heritage experts will review within 24 hours
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// COUNTER FIELD COMPONENT
// ========================================

interface CounterFieldProps {
  label: string;
  icon: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
}

function CounterField({ label, icon, value, onChange }: CounterFieldProps) {
  return (
    <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-sm font-bold text-gray-700">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-10 h-10 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition-colors"
        >
          -
        </button>
        <span className="text-2xl font-bold text-gray-900 flex-1 text-center">
          {value}
        </span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-10 h-10 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}
