import { useState } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Calendar,
  Users,
  Accessibility,
  Stethoscope,
  Utensils,
  DollarSign,
  Package,
  FileText,
  CheckCircle2,
  Upload,
  Home,
  User,
  Info,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS INTEREST FORM - COMPREHENSIVE
// Modal with 10 Dynamic Sections
// ========================================

interface WellnessInterestFormProps {
  categoryId: string;
  categoryName: string;
  categoryEmoji: string;
  onClose: () => void;
  onSubmit: (formData: WellnessFormData, action: 'request-quote' | 'book-standard') => void;
}

export interface WellnessFormData {
  // A. Treatment Selection
  category: string;
  specificTreatment: string;
  
  // B. Trip Details
  tripLinkType: 'new' | 'existing';
  existingTripId: string;
  travelStartDate: string;
  travelEndDate: string;
  numberOfTravelers: number;
  accompanyingPersons: number;
  
  // C. Special Requirements
  specialCareNeeds: string[];
  otherCareNeeds: string;
  
  // D. Senior Care Requirements (removed - merged into C)
  
  // E. Medical Information
  medicalCondition: string;
  currentMedications: string;
  allergies: string;
  medicalReports: File[];
  
  // F. Dietary Preferences
  dietaryPreference: string;
  foodAllergies: string;
  
  // G. Budget Range
  budgetRange: string;
  budgetFlexible: boolean;
  
  // H. Additional Information (renamed from Special Requirements)
  additionalRequirements: string;
  
  // I. Contact Preferences
  preferredContactTime: string;
  contactLanguage: string;
}

export function WellnessInterestForm({
  categoryId,
  categoryName,
  categoryEmoji,
  onClose,
  onSubmit,
}: WellnessInterestFormProps) {
  const [formData, setFormData] = useState<WellnessFormData>({
    category: categoryId,
    specificTreatment: '',
    tripLinkType: 'new',
    existingTripId: '',
    travelStartDate: '',
    travelEndDate: '',
    numberOfTravelers: 1,
    accompanyingPersons: 0,
    specialCareNeeds: [],
    otherCareNeeds: '',
    medicalCondition: '',
    currentMedications: '',
    allergies: '',
    medicalReports: [],
    dietaryPreference: 'vegetarian',
    foodAllergies: '',
    budgetRange: '',
    budgetFlexible: true,
    additionalRequirements: '',
    preferredContactTime: 'anytime',
    contactLanguage: 'english',
  });

  // Dynamic treatment options based on category
  const treatmentOptions = getTreatmentOptions(categoryId);
  const budgetRanges = getBudgetRanges(categoryId);

  const handleSubmit = (action: 'request-quote' | 'book-standard') => {
    onSubmit(formData, action);
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
        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl my-8"
      >
        {/* ========================================
            HEADER SECTION
        ======================================== */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-t-3xl z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-6xl">{categoryEmoji}</div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    Get Your Personalized {categoryName} Plan
                  </h2>
                  <p className="text-xl text-white/90">
                    Tell us your needs for a custom quote
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors flex-shrink-0 ml-4"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-1/3 transition-all duration-500" />
          </div>
          <p className="text-sm text-white/80 mt-2 text-center">
            ⏱️ Takes only 3-5 minutes to complete
          </p>
        </div>

        {/* ========================================
            FORM CONTENT - SCROLLABLE
        ======================================== */}
        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* ========================================
              A. TREATMENT SELECTION
          ======================================== */}
          <div className="bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              A. Treatment Selection
            </h3>

            {/* Pre-filled Category */}
            <div className="bg-white rounded-xl p-5 mb-5 border-2 border-emerald-400">
              <p className="text-sm font-semibold text-gray-600 mb-2">Selected Category</p>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{categoryEmoji}</span>
                <div>
                  <p className="text-2xl font-bold text-emerald-700">{categoryName}</p>
                  <p className="text-sm text-gray-600">✓ Pre-selected</p>
                </div>
              </div>
            </div>

            {/* Specific Treatment Dropdown */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Select Specific Treatment Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.specificTreatment}
                onChange={(e) => setFormData({ ...formData, specificTreatment: e.target.value })}
                className="w-full px-6 py-5 border-3 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 text-lg cursor-pointer bg-white"
              >
                <option value="">-- Choose your specific treatment --</option>
                {treatmentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-600 mt-2">
                💡 Not sure? Select "General Consultation" and our specialists will guide you
              </p>
            </div>
          </div>

          {/* ========================================
              B. TRAVEL DATES & DURATION
          ======================================== */}
          <div className="bg-blue-50 border-3 border-blue-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              B. Travel Dates & Duration
            </h3>

            {/* Preferred Travel Dates */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Preferred Travel Start Date
              </label>
              <input
                type="date"
                value={formData.travelStartDate}
                onChange={(e) => setFormData({ ...formData, travelStartDate: e.target.value })}
                className="w-full px-6 py-5 border-3 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 text-lg"
              />
            </div>

            {/* Stay Duration */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Planned Stay Duration
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['3-days', '7-days', '14-days', '21-days', '30-days', 'custom'].map((duration) => (
                  <button
                    key={duration}
                    type="button"
                    onClick={() => setFormData({ ...formData, stayDuration: duration })}
                    className={`py-4 px-4 rounded-xl font-semibold text-base border-2 transition-all ${
                      formData.stayDuration === duration
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {duration === 'custom' ? '📅 Custom' : duration.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Flexible Dates */}
            <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <input
                type="checkbox"
                checked={formData.flexibleDates}
                onChange={(e) => setFormData({ ...formData, flexibleDates: e.target.checked })}
                className="w-7 h-7 accent-blue-600 cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-900">My dates are flexible</p>
                <p className="text-sm text-gray-600">
                  Get better pricing by allowing ±3 days adjustment
                </p>
              </div>
            </label>
          </div>

          {/* ========================================
              C. TRAVELER DETAILS
          ======================================== */}
          <div className="bg-purple-50 border-3 border-purple-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              C. Traveler Details
            </h3>

            {/* Number of Patients */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Number of Patients (Receiving Treatment)
              </label>
              <div className="flex items-center gap-4 bg-white rounded-xl p-5 border-2 border-purple-300">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numberOfPatients: Math.max(1, formData.numberOfPatients - 1),
                    })
                  }
                  className="w-14 h-14 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-2xl transition-colors"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <span className="text-5xl font-bold text-purple-700">
                    {formData.numberOfPatients}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">patient(s)</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, numberOfPatients: formData.numberOfPatients + 1 })
                  }
                  className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-2xl transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Number of Companions */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Number of Companions (Family/Caregivers)
              </label>
              <div className="flex items-center gap-4 bg-white rounded-xl p-5 border-2 border-purple-300">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numberOfCompanions: Math.max(0, formData.numberOfCompanions - 1),
                    })
                  }
                  className="w-14 h-14 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-2xl transition-colors"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <span className="text-5xl font-bold text-purple-700">
                    {formData.numberOfCompanions}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">companion(s)</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numberOfCompanions: formData.numberOfCompanions + 1,
                    })
                  }
                  className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-2xl transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Age Groups */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Age Groups Included (Check all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { value: 'children', label: '👶 Children (0-12 years)', icon: '👶' },
                  { value: 'teenagers', label: '👦 Teenagers (13-19 years)', icon: '👦' },
                  { value: 'adults', label: '👨 Adults (20-59 years)', icon: '👨' },
                  { value: 'seniors', label: '👴 Seniors (60+ years)', icon: '👴' },
                ].map((age) => (
                  <label
                    key={age.value}
                    className="flex items-center gap-3 cursor-pointer bg-white rounded-xl p-4 border-2 border-purple-200 hover:border-purple-400 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.ageGroups.includes(age.value)}
                      onChange={(e) => {
                        const newAgeGroups = e.target.checked
                          ? [...formData.ageGroups, age.value]
                          : formData.ageGroups.filter((g) => g !== age.value);
                        setFormData({ ...formData, ageGroups: newAgeGroups });
                      }}
                      className="w-6 h-6 accent-purple-600 cursor-pointer"
                    />
                    <span className="text-base font-semibold text-gray-900">{age.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================
              D. SENIOR CARE REQUIREMENTS
          ======================================== */}
          <div className="bg-orange-50 border-3 border-orange-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Accessibility className="h-6 w-6 text-white" />
              </div>
              D. Senior Care Requirements
            </h3>

            <p className="text-base text-gray-700 mb-5 leading-relaxed">
              Select all accessibility and care options you need. We ensure dignified, comfortable
              care for all patients.
            </p>

            <div className="space-y-4">
              {/* Wheelchair/Mobility Aid */}
              <label className="flex items-start gap-5 cursor-pointer bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.requiresWheelchair}
                  onChange={(e) =>
                    setFormData({ ...formData, requiresWheelchair: e.target.checked })
                  }
                  className="w-7 h-7 mt-1 accent-orange-600 cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Accessibility className="h-6 w-6 text-orange-600" />
                    <span className="text-xl font-bold text-gray-900">
                      ♿ Wheelchair / Mobility Aid Required
                    </span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Wheelchair-accessible rooms, ramps, elevators, and dedicated transport
                  </p>
                </div>
              </label>

              {/* Personal Care Assistant */}
              <label className="flex items-start gap-5 cursor-pointer bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.requiresCareAssistant}
                  onChange={(e) =>
                    setFormData({ ...formData, requiresCareAssistant: e.target.checked })
                  }
                  className="w-7 h-7 mt-1 accent-orange-600 cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-6 w-6 text-orange-600" />
                    <span className="text-xl font-bold text-gray-900">
                      👨‍⚕️ Personal Care Assistant / Nursing Staff
                    </span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    24/7 trained nurse for medication management, daily care, and personal assistance
                  </p>
                </div>
              </label>

              {/* Ground Floor Room */}
              <label className="flex items-start gap-5 cursor-pointer bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.groundFloorRoom}
                  onChange={(e) =>
                    setFormData({ ...formData, groundFloorRoom: e.target.checked })
                  }
                  className="w-7 h-7 mt-1 accent-orange-600 cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="h-6 w-6 text-orange-600" />
                    <span className="text-xl font-bold text-gray-900">
                      🏠 Ground Floor Accommodation Preferred
                    </span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Room on ground floor with elevator access for easier mobility
                  </p>
                </div>
              </label>

              {/* Hospital Bed */}
              <label className="flex items-start gap-5 cursor-pointer bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.hospitalBed}
                  onChange={(e) => setFormData({ ...formData, hospitalBed: e.target.checked })}
                  className="w-7 h-7 mt-1 accent-orange-600 cursor-pointer"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Stethoscope className="h-6 w-6 text-orange-600" />
                    <span className="text-xl font-bold text-gray-900">
                      🛏️ Hospital Bed / Adjustable Bed Required
                    </span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Medical-grade adjustable bed for post-treatment recovery
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* ========================================
              E. MEDICAL INFORMATION
          ======================================== */}
          <div className="bg-red-50 border-3 border-red-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              E. Medical Information
            </h3>

            {/* Medical Condition */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Brief Description of Medical Condition / Treatment Need
              </label>
              <textarea
                value={formData.medicalCondition}
                onChange={(e) => setFormData({ ...formData, medicalCondition: e.target.value })}
                rows={4}
                className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 text-lg resize-none"
                placeholder="E.g., Chronic knee pain requiring replacement surgery, post-operative care needed..."
              />
            </div>

            {/* Current Medications */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Current Medications (if any)
              </label>
              <input
                type="text"
                value={formData.currentMedications}
                onChange={(e) => setFormData({ ...formData, currentMedications: e.target.value })}
                className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 text-lg"
                placeholder="E.g., Blood pressure medication, insulin, etc."
              />
            </div>

            {/* Allergies */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Known Allergies (Drugs, Food, Environment)
              </label>
              <input
                type="text"
                value={formData.allergies}
                onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-200 text-lg"
                placeholder="E.g., Penicillin, peanuts, latex..."
              />
            </div>

            {/* Medical Reports Upload */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Upload Medical Reports (Optional but Recommended)
              </label>
              <div className="border-3 border-dashed border-red-400 rounded-2xl p-10 text-center bg-white hover:bg-red-50 cursor-pointer transition-colors">
                <Upload className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  📄 Click to upload medical reports
                </p>
                <p className="text-base text-gray-600 mb-3">
                  PDF, JPG, PNG, DICOM • Maximum 10MB per file
                </p>
                <p className="text-sm text-gray-600">
                  Includes: Lab reports, X-rays, MRI scans, prescriptions, discharge summaries
                </p>
              </div>
            </div>
          </div>

          {/* ========================================
              F. DIETARY PREFERENCES
          ======================================== */}
          <div className="bg-green-50 border-3 border-green-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              F. Dietary Preferences
            </h3>

            {/* Dietary Preference */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Primary Dietary Preference
              </label>
              <select
                value={formData.dietaryPreference}
                onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                className="w-full px-6 py-5 border-3 border-gray-300 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-200 text-lg cursor-pointer bg-white"
              >
                <option value="vegetarian">🥗 Vegetarian</option>
                <option value="vegan">🌱 Vegan (No animal products)</option>
                <option value="jain">🙏 Jain (No root vegetables)</option>
                <option value="diabetic">💉 Diabetic-Friendly (Low sugar)</option>
                <option value="low-sodium">🧂 Low Sodium (Heart-healthy)</option>
                <option value="gluten-free">🌾 Gluten-Free</option>
                <option value="halal">☪️ Halal</option>
                <option value="kosher">✡️ Kosher</option>
                <option value="non-vegetarian">🍖 Non-Vegetarian</option>
                <option value="pescatarian">🐟 Pescatarian (Fish only)</option>
              </select>
            </div>

            {/* Food Allergies */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Food Allergies / Restrictions
              </label>
              <input
                type="text"
                value={formData.foodAllergies}
                onChange={(e) => setFormData({ ...formData, foodAllergies: e.target.value })}
                className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-200 text-lg"
                placeholder="E.g., Peanuts, shellfish, dairy, gluten..."
              />
            </div>
          </div>

          {/* ========================================
              G. BUDGET RANGE
          ======================================== */}
          <div className="bg-yellow-50 border-3 border-yellow-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              G. Budget Range
            </h3>

            <div className="bg-white rounded-xl p-5 mb-5 border-2 border-yellow-400">
              <Info className="h-6 w-6 text-yellow-700 mb-3" />
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Note:</strong> This helps us suggest appropriate packages. Final pricing will
                be based on specific treatments, facilities, and duration.
              </p>
            </div>

            {/* Budget Range Selection */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Your Approximate Budget (INR)
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, budgetRange: range.value })}
                    className={`py-5 px-4 rounded-xl font-semibold text-base border-2 transition-all ${
                      formData.budgetRange === range.value
                        ? 'bg-yellow-600 text-white border-yellow-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-400'
                    }`}
                  >
                    <div className="text-2xl mb-2">{range.icon}</div>
                    <div className="font-bold">{range.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Flexible */}
            <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <input
                type="checkbox"
                checked={formData.budgetFlexible}
                onChange={(e) => setFormData({ ...formData, budgetFlexible: e.target.checked })}
                className="w-7 h-7 accent-yellow-600 cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-900">My budget is flexible</p>
                <p className="text-sm text-gray-600">
                  I'm open to adjusting budget for better quality or additional services
                </p>
              </div>
            </label>
          </div>

          {/* ========================================
              H. LINK TO TRIP
          ======================================== */}
          <div className="bg-indigo-50 border-3 border-indigo-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
              </div>
              H. Link to Trip (Optional)
            </h3>

            <p className="text-base text-gray-700 mb-5 leading-relaxed">
              Connect this wellness booking to an existing trip or create a new one for better
              itinerary management.
            </p>

            <select
              value={formData.linkedTrip}
              onChange={(e) => setFormData({ ...formData, linkedTrip: e.target.value })}
              className="w-full px-6 py-5 border-3 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-lg cursor-pointer bg-white"
            >
              <option value="">-- No trip link (standalone booking) --</option>
              <option value="new">➕ Create a New Trip</option>
              <optgroup label="Your Existing Trips">
                <option value="trip1">🗺️ [Admin: South India Heritage Tour - Feb 2026]</option>
                <option value="trip2">🏖️ [Admin: Kerala Wellness Retreat - Mar 2026]</option>
                <option value="trip3">⛰️ [Admin: Himalayan Pilgrimage - Apr 2026]</option>
              </optgroup>
            </select>
          </div>

          {/* ========================================
              I. SPECIAL REQUIREMENTS
          ======================================== */}
          <div className="bg-pink-50 border-3 border-pink-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              I. Additional Special Requirements
            </h3>

            <textarea
              value={formData.specialRequirements}
              onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
              rows={6}
              className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200 text-lg resize-none"
              placeholder="Please share any other specific needs:&#10;• Language interpreter needed&#10;• Religious/cultural considerations&#10;• Specific doctor/facility preferences&#10;• Transportation arrangements&#10;• Post-treatment care plans&#10;• Family accommodation needs&#10;• Any other concerns or requests..."
            />

            <p className="text-sm text-gray-600 mt-3">
              💡 The more details you provide, the better we can customize your wellness experience
            </p>
          </div>

          {/* ========================================
              J. CONTACT PREFERENCES
          ======================================== */}
          <div className="bg-teal-50 border-3 border-teal-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              J. Contact Preferences
            </h3>

            {/* Preferred Contact Time */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Preferred Contact Time
              </label>
              <select
                value={formData.preferredContactTime}
                onChange={(e) =>
                  setFormData({ ...formData, preferredContactTime: e.target.value })
                }
                className="w-full px-6 py-5 border-3 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-200 text-lg cursor-pointer bg-white"
              >
                <option value="anytime">⏰ Anytime (9 AM - 9 PM IST)</option>
                <option value="morning">🌅 Morning (9 AM - 12 PM IST)</option>
                <option value="afternoon">☀️ Afternoon (12 PM - 5 PM IST)</option>
                <option value="evening">🌆 Evening (5 PM - 9 PM IST)</option>
              </select>
            </div>

            {/* Preferred Language */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Preferred Communication Language
              </label>
              <select
                value={formData.contactLanguage}
                onChange={(e) => setFormData({ ...formData, contactLanguage: e.target.value })}
                className="w-full px-6 py-5 border-3 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-200 text-lg cursor-pointer bg-white"
              >
                <option value="english">🇬🇧 English</option>
                <option value="hindi">🇮🇳 Hindi (हिंदी)</option>
                <option value="spanish">🇪🇸 Spanish (Español)</option>
                <option value="french">🇫🇷 French (Français)</option>
                <option value="german">🇩🇪 German (Deutsch)</option>
                <option value="arabic">🇸🇦 Arabic (العربية)</option>
                <option value="russian">🇷🇺 Russian (Русский)</option>
              </select>
            </div>
          </div>
        </div>

        {/* ========================================
            FOOTER - DUAL SUBMIT BUTTONS
        ======================================== */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-b-3xl border-t-3 border-gray-300">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Primary: Request Custom Quote */}
            <Button
              onClick={() => handleSubmit('request-quote')}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-8 rounded-2xl text-2xl font-bold shadow-2xl"
            >
              <CheckCircle2 className="mr-3 h-8 w-8" />
              Request Custom Quote
              <ChevronRight className="ml-3 h-8 w-8" />
            </Button>

            {/* Secondary: View Standard Packages */}
            <Button
              onClick={() => handleSubmit('book-standard')}
              variant="outline"
              className="w-full border-3 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-8 rounded-2xl text-2xl font-bold"
            >
              <Package className="mr-3 h-8 w-8" />
              View Standard Packages
            </Button>
          </div>

          <p className="text-center text-base text-gray-600">
            🔒 Your information is encrypted and will be reviewed by our wellness specialists within{' '}
            <strong>24 hours</strong>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// HELPER FUNCTIONS - DYNAMIC OPTIONS
// ========================================

function getTreatmentOptions(categoryId: string): Array<{ value: string; label: string; icon: string }> {
  const options: Record<string, Array<{ value: string; label: string; icon: string }>> = {
    'medical-tourism': [
      { value: 'general', label: 'General Consultation', icon: '👨‍⚕️' },
      { value: 'cardiac', label: 'Cardiac Surgery (Heart Bypass, Angioplasty)', icon: '❤️' },
      { value: 'orthopedic', label: 'Orthopedic (Knee/Hip Replacement, Spinal)', icon: '🦴' },
      { value: 'dental', label: 'Dental (Implants, Cosmetic, Full Mouth)', icon: '🦷' },
      { value: 'cosmetic', label: 'Cosmetic Surgery (Rhinoplasty, Liposuction)', icon: '💄' },
      { value: 'oncology', label: 'Oncology (Cancer Treatment)', icon: '🎗️' },
      { value: 'fertility', label: 'Fertility / IVF Treatment', icon: '👶' },
      { value: 'neurosurgery', label: 'Neurosurgery (Brain/Spine)', icon: '🧠' },
      { value: 'bariatric', label: 'Bariatric Surgery (Weight Loss)', icon: '⚖️' },
    ],
    'ayurveda-panchakarma': [
      { value: 'general', label: 'General Consultation', icon: '🌿' },
      { value: 'panchakarma', label: 'Complete Panchakarma Detox (21-day)', icon: '🧘' },
      { value: 'arthritis', label: 'Arthritis & Joint Pain Management', icon: '🦴' },
      { value: 'weight-loss', label: 'Ayurvedic Weight Loss Program', icon: '⚖️' },
      { value: 'stress', label: 'Stress & Anxiety Relief', icon: '😌' },
      { value: 'skin', label: 'Skin Disorders Treatment', icon: '✨' },
      { value: 'diabetes', label: 'Diabetes Management', icon: '💉' },
      { value: 'digestive', label: 'Digestive Disorders', icon: '🫃' },
      { value: 'rejuvenation', label: 'General Rejuvenation (Rasayana)', icon: '🌟' },
    ],
    'yoga-meditation': [
      { value: 'general', label: 'General Consultation', icon: '🧘' },
      { value: 'hatha', label: 'Hatha Yoga Retreat', icon: '🕉️' },
      { value: 'vipassana', label: 'Vipassana Meditation (Silent Retreat)', icon: '🤫' },
      { value: 'pranayama', label: 'Pranayama & Breathing Techniques', icon: '🌬️' },
      { value: 'mindfulness', label: 'Mindfulness & Stress Management', icon: '🧠' },
      { value: 'kundalini', label: 'Kundalini Yoga', icon: '⚡' },
      { value: 'iyengar', label: 'Iyengar Yoga (Alignment-based)', icon: '🧘‍♀️' },
      { value: 'ashram', label: 'Traditional Ashram Experience', icon: '🏛️' },
    ],
    'mental-health': [
      { value: 'general', label: 'General Consultation', icon: '🧠' },
      { value: 'depression', label: 'Depression & Anxiety Treatment', icon: '😔' },
      { value: 'therapy', label: 'Individual Counseling/Therapy', icon: '💬' },
      { value: 'couples', label: 'Couples/Family Therapy', icon: '👨‍👩‍👧' },
      { value: 'ptsd', label: 'PTSD & Trauma Recovery', icon: '🛡️' },
      { value: 'addiction', label: 'Addiction & De-addiction', icon: '🚭' },
      { value: 'burnout', label: 'Burnout & Work Stress', icon: '💼' },
      { value: 'psychiatric', label: 'Psychiatric Consultation', icon: '👨‍⚕️' },
    ],
    'rehabilitation': [
      { value: 'general', label: 'General Consultation', icon: '♿' },
      { value: 'post-surgery', label: 'Post-Surgery Rehabilitation', icon: '🏥' },
      { value: 'physiotherapy', label: 'Physiotherapy & Mobility', icon: '🦴' },
      { value: 'cardiac-rehab', label: 'Cardiac Rehabilitation', icon: '❤️' },
      { value: 'stroke', label: 'Stroke Recovery', icon: '🧠' },
      { value: 'occupational', label: 'Occupational Therapy', icon: '👐' },
      { value: 'speech', label: 'Speech Therapy', icon: '🗣️' },
      { value: 'sports', label: 'Sports Injury Recovery', icon: '⚽' },
    ],
    'executive-wellness': [
      { value: 'general', label: 'General Consultation', icon: '💼' },
      { value: 'checkup', label: 'Comprehensive Health Checkup', icon: '🔬' },
      { value: 'preventive', label: 'Preventive Care Package', icon: '🛡️' },
      { value: 'burnout', label: 'Executive Burnout Recovery', icon: '😓' },
      { value: 'fitness', label: 'Personalized Fitness Program', icon: '💪' },
      { value: 'nutrition', label: 'Nutrition & Diet Planning', icon: '🥗' },
      { value: 'sleep', label: 'Sleep Disorder Management', icon: '😴' },
      { value: 'longevity', label: 'Longevity & Anti-aging', icon: '🧬' },
    ],
  };

  return options[categoryId] || options['medical-tourism'];
}

function getBudgetRanges(categoryId: string): Array<{ value: string; label: string; icon: string }> {
  const ranges: Record<string, Array<{ value: string; label: string; icon: string }>> = {
    'medical-tourism': [
      { value: 'budget', label: '₹50k - ₹2L', icon: '💰' },
      { value: 'standard', label: '₹2L - ₹5L', icon: '💎' },
      { value: 'premium', label: '₹5L - ₹10L', icon: '👑' },
      { value: 'luxury', label: '₹10L+', icon: '✨' },
    ],
    'ayurveda-panchakarma': [
      { value: 'budget', label: '₹20k - ₹1L', icon: '🌿' },
      { value: 'standard', label: '₹1L - ₹3L', icon: '🧘' },
      { value: 'premium', label: '₹3L - ₹5L', icon: '👑' },
    ],
    'yoga-meditation': [
      { value: 'budget', label: '₹15k - ₹50k', icon: '🕉️' },
      { value: 'standard', label: '₹50k - ₹1.5L', icon: '🧘' },
      { value: 'premium', label: '₹1.5L+', icon: '✨' },
    ],
  };

  return (
    ranges[categoryId] || [
      { value: 'budget', label: '₹50k - ₹2L', icon: '💰' },
      { value: 'standard', label: '₹2L - ₹5L', icon: '💎' },
      { value: 'premium', label: '₹5L+', icon: '👑' },
    ]
  );
}