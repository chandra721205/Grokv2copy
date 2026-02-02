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
  User,
  Info,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS INTEREST FORM - UPDATED
// Sections B & C match user specifications
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
  
  // D. Health Profile Integration
  hasHealthProfile: boolean;
  
  // E. Document Upload
  medicalDocuments: File[];
  
  // F. Medical Information
  medicalCondition: string;
  currentMedications: string;
  allergies: string;
  
  // G. Dietary Preferences
  dietaryPreference: string;
  
  // H. Budget Range
  budgetRange: string;
  budgetFlexible: boolean;
  
  // I. Contact Preferences
  preferredContactTime: string;
  contactLanguage: string;
}

export function WellnessInterestFormUpdated({
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
    hasHealthProfile: false,
    medicalDocuments: [],
    medicalCondition: '',
    currentMedications: '',
    allergies: '',
    dietaryPreference: 'vegetarian',
    budgetRange: '',
    budgetFlexible: true,
    preferredContactTime: 'anytime',
    contactLanguage: 'english',
  });

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
              B. TRIP DETAILS
          ======================================== */}
          <div className="bg-blue-50 border-3 border-blue-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
              </div>
              B. Trip Details
            </h3>

            {/* Link to Your Trip */}
            <div className="mb-6">
              <label className="block text-xl font-bold text-gray-900 mb-4">
                Link to Your Trip:
              </label>
              
              {/* Radio: Create New Wellness Trip */}
              <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-blue-300 hover:border-blue-500 transition-colors mb-3">
                <input
                  type="radio"
                  name="tripLink"
                  checked={formData.tripLinkType === 'new'}
                  onChange={() => setFormData({ ...formData, tripLinkType: 'new', existingTripId: '' })}
                  className="w-7 h-7 accent-blue-600 cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-lg font-bold text-gray-900">○ Create New Wellness Trip</p>
                  <p className="text-sm text-gray-600">
                    Start a fresh trip itinerary for this wellness program
                  </p>
                </div>
              </label>

              {/* Radio: Add to Existing Trip */}
              <label className="flex items-start gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-blue-300 hover:border-blue-500 transition-colors">
                <input
                  type="radio"
                  name="tripLink"
                  checked={formData.tripLinkType === 'existing'}
                  onChange={() => setFormData({ ...formData, tripLinkType: 'existing' })}
                  className="w-7 h-7 mt-1 accent-blue-600 cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-lg font-bold text-gray-900 mb-3">○ Add to Existing Trip:</p>
                  {formData.tripLinkType === 'existing' && (
                    <select
                      value={formData.existingTripId}
                      onChange={(e) => setFormData({ ...formData, existingTripId: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-blue-400 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-200 text-base bg-white"
                    >
                      <option value="">-- Select an existing trip --</option>
                      <option value="goa">🏖️ Goa Recovery Trip</option>
                      <option value="kerala">🌿 Kerala Ayurveda</option>
                      <option value="rishikesh">🧘 Rishikesh Wellness Retreat</option>
                      <option value="south">🗺️ South India Heritage Tour</option>
                    </select>
                  )}
                </div>
              </label>
            </div>

            {/* Travel Dates: Date Range Picker */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Travel Dates:
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Start Date</p>
                  <input
                    type="date"
                    value={formData.travelStartDate}
                    onChange={(e) => setFormData({ ...formData, travelStartDate: e.target.value })}
                    className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 text-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">End Date</p>
                  <input
                    type="date"
                    value={formData.travelEndDate}
                    onChange={(e) => setFormData({ ...formData, travelEndDate: e.target.value })}
                    className="w-full px-6 py-4 border-3 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Number of Travelers */}
            <div className="mb-5">
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Number of Travelers:
              </label>
              <div className="flex items-center gap-4 bg-white rounded-xl p-5 border-2 border-blue-300">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      numberOfTravelers: Math.max(1, formData.numberOfTravelers - 1),
                    })
                  }
                  className="w-14 h-14 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-2xl transition-colors"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <span className="text-5xl font-bold text-blue-700">
                    {formData.numberOfTravelers}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">traveler(s)</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, numberOfTravelers: formData.numberOfTravelers + 1 })
                  }
                  className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-2xl transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Accompanying Persons */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Accompanying Persons: <span className="text-base font-normal text-gray-600">Attendants/Family</span>
              </label>
              <div className="flex items-center gap-4 bg-white rounded-xl p-5 border-2 border-blue-300">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      accompanyingPersons: Math.max(0, formData.accompanyingPersons - 1),
                    })
                  }
                  className="w-14 h-14 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-2xl transition-colors"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <span className="text-5xl font-bold text-blue-700">
                    {formData.accompanyingPersons}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">attendant(s)/family</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      accompanyingPersons: formData.accompanyingPersons + 1,
                    })
                  }
                  className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-2xl transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* ========================================
              C. SPECIAL REQUIREMENTS
          ======================================== */}
          <div className="bg-purple-50 border-3 border-purple-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Accessibility className="h-6 w-6 text-white" />
              </div>
              C. Special Requirements
            </h3>

            <p className="text-lg text-gray-700 mb-5 font-semibold">
              Special Care Needs: <span className="text-base font-normal">(Helps us customize your package)</span>
            </p>

            <div className="space-y-3">
              {/* Senior Care Assistance (65+) */}
              <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.specialCareNeeds.includes('senior-care')}
                  onChange={(e) => {
                    const newNeeds = e.target.checked
                      ? [...formData.specialCareNeeds, 'senior-care']
                      : formData.specialCareNeeds.filter((n) => n !== 'senior-care');
                    setFormData({ ...formData, specialCareNeeds: newNeeds });
                  }}
                  className="w-7 h-7 accent-purple-600 cursor-pointer flex-shrink-0"
                />
                <span className="text-lg font-semibold text-gray-900">
                  Senior Care Assistance (65+)
                </span>
              </label>

              {/* Mobility Support */}
              <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.specialCareNeeds.includes('mobility-support')}
                  onChange={(e) => {
                    const newNeeds = e.target.checked
                      ? [...formData.specialCareNeeds, 'mobility-support']
                      : formData.specialCareNeeds.filter((n) => n !== 'mobility-support');
                    setFormData({ ...formData, specialCareNeeds: newNeeds });
                  }}
                  className="w-7 h-7 accent-purple-600 cursor-pointer flex-shrink-0"
                />
                <span className="text-lg font-semibold text-gray-900">
                  Mobility Support (Wheelchair/Walker)
                </span>
              </label>

              {/* Post-Treatment Nursing */}
              <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.specialCareNeeds.includes('nursing')}
                  onChange={(e) => {
                    const newNeeds = e.target.checked
                      ? [...formData.specialCareNeeds, 'nursing']
                      : formData.specialCareNeeds.filter((n) => n !== 'nursing');
                    setFormData({ ...formData, specialCareNeeds: newNeeds });
                  }}
                  className="w-7 h-7 accent-purple-600 cursor-pointer flex-shrink-0"
                />
                <span className="text-lg font-semibold text-gray-900">
                  Post-Treatment Nursing
                </span>
              </label>

              {/* Dietary Management */}
              <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.specialCareNeeds.includes('dietary')}
                  onChange={(e) => {
                    const newNeeds = e.target.checked
                      ? [...formData.specialCareNeeds, 'dietary']
                      : formData.specialCareNeeds.filter((n) => n !== 'dietary');
                    setFormData({ ...formData, specialCareNeeds: newNeeds });
                  }}
                  className="w-7 h-7 accent-purple-600 cursor-pointer flex-shrink-0"
                />
                <span className="text-lg font-semibold text-gray-900">
                  Dietary Management (Vegetarian/Jain/Diabetic)
                </span>
              </label>

              {/* Language Interpreter */}
              <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.specialCareNeeds.includes('interpreter')}
                  onChange={(e) => {
                    const newNeeds = e.target.checked
                      ? [...formData.specialCareNeeds, 'interpreter']
                      : formData.specialCareNeeds.filter((n) => n !== 'interpreter');
                    setFormData({ ...formData, specialCareNeeds: newNeeds });
                  }}
                  className="w-7 h-7 accent-purple-600 cursor-pointer flex-shrink-0"
                />
                <span className="text-lg font-semibold text-gray-900">
                  Language Interpreter
                </span>
              </label>

              {/* Airport Medical Escort */}
              <label className="flex items-center gap-4 cursor-pointer bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.specialCareNeeds.includes('airport-escort')}
                  onChange={(e) => {
                    const newNeeds = e.target.checked
                      ? [...formData.specialCareNeeds, 'airport-escort']
                      : formData.specialCareNeeds.filter((n) => n !== 'airport-escort');
                    setFormData({ ...formData, specialCareNeeds: newNeeds });
                  }}
                  className="w-7 h-7 accent-purple-600 cursor-pointer flex-shrink-0"
                />
                <span className="text-lg font-semibold text-gray-900">
                  Airport Medical Escort
                </span>
              </label>

              {/* Other */}
              <div className="bg-white rounded-xl p-5 border-2 border-purple-200">
                <label className="flex items-center gap-4 mb-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.specialCareNeeds.includes('other')}
                    onChange={(e) => {
                      const newNeeds = e.target.checked
                        ? [...formData.specialCareNeeds, 'other']
                        : formData.specialCareNeeds.filter((n) => n !== 'other');
                      setFormData({ 
                        ...formData, 
                        specialCareNeeds: newNeeds, 
                        otherCareNeeds: e.target.checked ? formData.otherCareNeeds : '' 
                      });
                    }}
                    className="w-7 h-7 accent-purple-600 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-lg font-semibold text-gray-900">
                    Other:
                  </span>
                </label>
                {formData.specialCareNeeds.includes('other') && (
                  <input
                    type="text"
                    value={formData.otherCareNeeds}
                    onChange={(e) => setFormData({ ...formData, otherCareNeeds: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-purple-400 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-200 text-lg"
                    placeholder="Please specify other requirements..."
                  />
                )}
              </div>
            </div>
          </div>

          {/* ========================================
              D. HEALTH PROFILE INTEGRATION
              (Conditional - only if user hasn't completed profile)
          ======================================== */}
          {!formData.hasHealthProfile && (
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-3 border-orange-300 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                D. Health Profile Integration
                <span className="text-sm font-normal text-orange-700 bg-orange-200 px-3 py-1 rounded-full ml-auto">
                  Conditional
                </span>
              </h3>

              <div className="bg-white/80 rounded-2xl p-6 border-2 border-orange-200">
                {/* Heading */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl">💡</div>
                  <p className="text-lg font-bold text-gray-900">
                    For better safety & customization:
                  </p>
                </div>

                {/* Button FIRST */}
                <Button
                  onClick={() => {
                    // Navigate to health profile completion
                    console.log('Opening health profile form...');
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-6 rounded-xl text-lg font-bold shadow-lg mb-5"
                >
                  <User className="mr-3 h-6 w-6" />
                  Complete Health Profile (2 min)
                  <ChevronRight className="ml-3 h-6 w-6" />
                </Button>

                {/* Bullet points AFTER button */}
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-1">•</span>
                    <span>Your data is encrypted & shared only upon booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-1">•</span>
                    <span>Get AI-powered travel safety recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* ========================================
              E. DOCUMENT UPLOAD
              (For Medical Tourism only)
          ======================================== */}
          {categoryId === 'medical-tourism' && (
            <div className="bg-red-50 border-3 border-red-300 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                E. Document Upload
                <span className="text-sm font-normal text-red-700 bg-red-200 px-3 py-1 rounded-full ml-auto">
                  For Medical Tourism
                </span>
              </h3>

              <div className="bg-white rounded-xl p-6">
                <p className="text-base text-gray-700 mb-5 leading-relaxed">
                  Upload medical reports, prescriptions, and diagnostic results for accurate treatment planning.
                  <strong className="block mt-2">Accepted formats:</strong> PDF, JPG, PNG, DICOM • Maximum 10MB per file
                </p>

                {/* File Upload Area */}
                <div className="border-3 border-dashed border-red-400 rounded-2xl p-10 text-center bg-red-50/50 hover:bg-red-50 cursor-pointer transition-colors mb-5">
                  <Upload className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-900 mb-2">
                    📄 Click to upload medical documents
                  </p>
                  <p className="text-base text-gray-600 mb-3">
                    or drag and drop files here
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.dcm"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      setFormData({ ...formData, medicalDocuments: files });
                    }}
                    className="hidden"
                    id="medical-docs-upload"
                  />
                  <label
                    htmlFor="medical-docs-upload"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer transition-colors"
                  >
                    Choose Files
                  </label>
                </div>

                {/* Uploaded Files List */}
                {formData.medicalDocuments.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm font-bold text-gray-700 mb-3">
                      Uploaded Files ({formData.medicalDocuments.length}):
                    </p>
                    <ul className="space-y-2">
                      {formData.medicalDocuments.map((file, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                          <FileText className="h-5 w-5 text-red-600" />
                          <span className="flex-1">{file.name}</span>
                          <span className="text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-sm text-gray-600 mt-4">
                  <strong>Recommended documents:</strong> Lab reports, X-rays, MRI scans, CT scans, 
                  prescriptions, discharge summaries, doctor's referrals
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ========================================
            FOOTER - DUAL SUBMIT BUTTONS
        ======================================== */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-b-3xl border-t-3 border-gray-300">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Primary: ✅ Submit for Custom Quote */}
            <Button
              onClick={() => handleSubmit('request-quote')}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-8 rounded-2xl text-2xl font-bold shadow-2xl"
            >
              ✅ Submit for Custom Quote
            </Button>

            {/* Secondary: ⚡ Book Standard Package */}
            <Button
              onClick={() => handleSubmit('book-standard')}
              variant="outline"
              className="w-full border-3 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-8 rounded-2xl text-2xl font-bold"
            >
              ⚡ Book Standard Package
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
      { value: 'cardiac', label: 'Cardiac Surgery', icon: '❤️' },
      { value: 'orthopedic', label: 'Orthopedic', icon: '🦴' },
      { value: 'dental', label: 'Dental', icon: '🦷' },
      { value: 'cosmetic', label: 'Cosmetic', icon: '💄' },
    ],
    'ayurveda-panchakarma': [
      { value: 'general', label: 'General Consultation', icon: '🌿' },
      { value: 'panchakarma', label: 'Panchakarma', icon: '🧘' },
      { value: 'arthritis', label: 'Arthritis', icon: '🦴' },
      { value: 'stress', label: 'Stress Relief', icon: '😌' },
    ],
  };

  return options[categoryId] || options['medical-tourism'];
}

function getBudgetRanges(categoryId: string): Array<{ value: string; label: string; icon: string }> {
  return [
    { value: 'budget', label: '₹50k - ₹2L', icon: '💰' },
    { value: 'standard', label: '₹2L - ₹5L', icon: '💎' },
    { value: 'premium', label: '₹5L+', icon: '👑' },
  ];
}