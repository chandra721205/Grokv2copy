import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronRight,
  Heart,
  Calendar,
  DollarSign,
  Users,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Upload,
  MessageSquare,
  Bell,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  Info,
  Plus,
  Filter,
  Clock,
  Shield,
  Wheelchair,
  Stethoscope,
  Activity,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

// ========================================
// HEALTH & WELLNESS - RECTIFIED FLOW
// Interest → Booking (Admin-Driven, Low-Fi Editable)
// ========================================

// STRICT RULES:
// - NO layout/frame/screen structure changes
// - NO spacing/padding changes
// - NO color/gradient/shadow changes
// - NO typography/icon set changes
// - NO existing component placement changes
// - All additions via overlays/bottom sheets only
// - All content admin-managed with placeholders

interface HealthWellnessHubProps {
  onNavigate: (journey: string) => void;
}

// ========================================
// 1. HEALTH & WELLNESS HUB (EXISTING LAYOUT PRESERVED)
// ========================================

export function HealthWellnessHub({ onNavigate }: HealthWellnessHubProps) {
  const [showInterestPanel, setShowInterestPanel] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);

  // Journey cards (EXISTING - preserved exactly)
  const journeys = [
    {
      id: 'medical-tourism',
      title: 'Medical Tourism',
      subtitle: 'World-class treatment + travel packages',
      icon: '🏥',
      features: ['Treatment Types', 'JCI/NABH Accr.', 'Cashless', 'Dental', 'Cosmetic'],
    },
    {
      id: 'ayurveda-panchakarma',
      title: 'Ayurveda & Panchakarma',
      subtitle: 'Traditional detox & rejuvenation therapies',
      icon: '🌿',
      features: ['Authentic', 'Dosha-Based', 'Wellness', 'Detox'],
    },
    {
      id: 'yoga-meditation',
      title: 'Yoga & Meditation Retreats',
      subtitle: 'Holistic wellness through ancient practices',
      icon: '🧘',
      features: ['Stress Relief', 'Mindfulness', 'Pranayama', 'Retreat'],
    },
    {
      id: 'mental-health',
      title: 'Mental Health & Wellness',
      subtitle: 'Providing safe & counseling pathways',
      icon: '🧠',
      features: ['Therapy', 'Counseling', 'Support', 'Confidential'],
    },
    {
      id: 'rehabilitation',
      title: 'Rehabilitation & Recovery',
      subtitle: 'Post-surgery recovery with physiotherapy',
      icon: '♿',
      features: ['Physio', 'Recovery', 'Mobility', 'Support'],
    },
    {
      id: 'executive-wellness',
      title: 'Executive Wellness Packages',
      subtitle: 'Preventive health checkups',
      icon: '💼',
      features: ['Full Checkup', 'Diabetes Mgmt', 'Longevity', 'Lifestyle'],
    },
  ];

  const handleJourneyClick = (journeyId: string) => {
    // CHANGED BEHAVIOR (NOT VISUAL): Opens interest panel instead of direct booking
    setSelectedJourney(journeyId);
    setShowInterestPanel(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* EXISTING LAYOUT - PRESERVED 100% */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header (EXISTING) */}
        <div className="mb-6">
          <button className="flex items-center gap-2 text-gray-600 mb-4">
            <ChevronRight className="rotate-180 h-5 w-5" />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health & Wellness</h1>
          <p className="text-gray-600">
            World-class medical treatments, Ayurvedic healing, and holistic wellness combined with
            carefree travel & stay
          </p>
        </div>

        {/* Why Choose India Banner (EXISTING) */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6 mb-8 text-white">
          <h2 className="text-xl font-bold mb-4">🇮🇳 Why Choose India for Health Tourism?</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-2xl font-bold">40-80%</p>
              <p className="text-sm">Cost Savings</p>
            </div>
            <div>
              <p className="text-2xl font-bold">✓</p>
              <p className="text-sm">JCI-Accredited Hospitals</p>
            </div>
            <div>
              <p className="text-2xl font-bold">🎓</p>
              <p className="text-sm">Experienced Specialists</p>
            </div>
            <div>
              <p className="text-2xl font-bold">🌍</p>
              <p className="text-sm">Ancient + Modern</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            {/* EXISTING BUTTONS - BEHAVIOR CHANGED ONLY */}
            <Button
              onClick={() => {
                setSelectedJourney('general');
                setShowInterestPanel(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              🏥 View Top Treatment Centers
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              📞 Get Personalized Recommendations
            </Button>
          </div>
        </div>

        {/* Choose Your Health Journey (EXISTING GRID) */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Health Journey</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {journeys.map((journey) => (
            <div key={journey.id} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">{journey.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{journey.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{journey.subtitle}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {journey.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Treatment Types: [Admin: Count]
                </p>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Available Centers: [Admin: Count]
                </p>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Price Range: [Admin: Range]
                </p>
              </div>

              {/* EXISTING BUTTON - BEHAVIOR CHANGED */}
              <Button
                onClick={() => handleJourneyClick(journey.id)}
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
              >
                View Top Centers & Book →
              </Button>
            </div>
          ))}
        </div>

        {/* EXISTING SECTIONS (Package Includes, Insights, Continue button) - PRESERVED */}
        {/* ... rest of existing layout ... */}
      </div>

      {/* ========================================
          NEW: INTEREST & ELIGIBILITY PANEL
          (Overlay - No layout change)
          ======================================== */}
      <AnimatePresence>
        {showInterestPanel && (
          <InterestEligibilityPanel
            journeyType={selectedJourney || ''}
            onClose={() => setShowInterestPanel(false)}
            onSubmit={(data) => {
              console.log('Interest submitted:', data);
              setShowInterestPanel(false);
              toast.success(
                '✅ Interest received. We will get back shortly with treatment options, facilities, pricing, senior care support, and next steps.'
              );
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// 2. INTEREST & ELIGIBILITY PANEL (OVERLAY)
// ========================================

interface InterestEligibilityPanelProps {
  journeyType: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

function InterestEligibilityPanel({ journeyType, onClose, onSubmit }: InterestEligibilityPanelProps) {
  const [formData, setFormData] = useState({
    treatmentCategory: journeyType,
    preferredMonth: '',
    flexibleDates: true,
    budgetMin: 50000,
    budgetMax: 500000,
    statePreference: '',
    seniorCareRequired: false,
    medicalAssistanceRequired: false,
    specialRequests: '',
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Share Your Interest</h2>
            <p className="text-sm text-gray-600 mt-1">
              We'll match you with admin-curated options
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Form Fields (LOW-FI EDITABLE) */}
        <div className="space-y-6">
          {/* Treatment Category (Auto-filled) */}
          <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Treatment/Service Category
            </label>
            <div className="flex items-center gap-2 text-blue-700">
              <Activity className="h-5 w-5" />
              <span className="font-semibold">[Admin: {journeyType}]</span>
            </div>
          </div>

          {/* Preferred Month/Dates */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Preferred Month/Dates
            </label>
            <input
              type="month"
              value={formData.preferredMonth}
              onChange={(e) => setFormData({ ...formData, preferredMonth: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <label className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                checked={formData.flexibleDates}
                onChange={(e) => setFormData({ ...formData, flexibleDates: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Flexible with dates</span>
            </label>
          </div>

          {/* Budget Range */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              <DollarSign className="inline h-4 w-4 mr-1" />
              Budget Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Minimum</label>
                <input
                  type="number"
                  value={formData.budgetMin}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetMin: parseInt(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="₹50,000"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Maximum</label>
                <input
                  type="number"
                  value={formData.budgetMax}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetMax: parseInt(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="₹5,00,000"
                />
              </div>
            </div>
          </div>

          {/* State/Region Preference */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              State/Region Preference (Optional)
            </label>
            <select
              value={formData.statePreference}
              onChange={(e) => setFormData({ ...formData, statePreference: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">[Admin: Any State]</option>
              <option value="kerala">[Admin: State 1]</option>
              <option value="karnataka">[Admin: State 2]</option>
              <option value="tamilnadu">[Admin: State 3]</option>
              <option value="maharashtra">[Admin: State 4]</option>
            </select>
          </div>

          {/* Senior Care Required */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.seniorCareRequired}
                onChange={(e) =>
                  setFormData({ ...formData, seniorCareRequired: e.target.checked })
                }
                className="w-5 h-5"
              />
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-900">
                  Senior Care Required (60+)
                </span>
              </div>
            </label>
            {formData.seniorCareRequired && (
              <p className="text-xs text-gray-600 mt-2 ml-8">
                We'll prioritize centers with senior-friendly facilities
              </p>
            )}
          </div>

          {/* Medical Assistance Required */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.medicalAssistanceRequired}
                onChange={(e) =>
                  setFormData({ ...formData, medicalAssistanceRequired: e.target.checked })
                }
                className="w-5 h-5"
              />
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-red-600" />
                <span className="text-sm font-semibold text-gray-900">
                  Medical Assistance Required
                </span>
              </div>
            </label>
            {formData.medicalAssistanceRequired && (
              <p className="text-xs text-gray-600 mt-2 ml-8">
                We'll arrange doctor-on-call and emergency support
              </p>
            )}
          </div>

          {/* Special Requests */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              <MessageSquare className="inline h-4 w-4 mr-1" />
              Special Requests
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
              placeholder="Any specific requirements, dietary restrictions, accessibility needs, etc."
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
        >
          Submit Interest
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>

        {/* Info Note */}
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <p className="text-xs text-blue-900 flex items-start gap-2">
            <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <span>
              After submission, our admin team will review your requirements and respond with
              matched treatment options, centers, pricing, and complete itinerary within 24-48
              hours.
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// 3. MEDICAL TOURISM SCREEN (EXISTING LAYOUT PRESERVED)
// ========================================

export function MedicalTourismScreen() {
  const [showTreatmentIntake, setShowTreatmentIntake] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'admin-packages' | 'custom-request'>('admin-packages');

  // Treatment types (EXISTING - preserved)
  const treatmentTypes = [
    { id: 'cardiac', name: 'Cardiac Surgery & Interventions', icon: '❤️' },
    { id: 'orthopedic', name: 'Orthopedic & Joint Replacement', icon: '🦴' },
    { id: 'dental', name: 'Dental Implants & Maxillofacial', icon: '🦷' },
    { id: 'cosmetic', name: 'Cosmetic & Plastic Surgery', icon: '✨' },
    { id: 'cancer', name: 'Cancer Care & Oncology', icon: '🎗️' },
    { id: 'neurosurgery', name: 'Neurosurgery & Neurology', icon: '🧠' },
    { id: 'transplant', name: 'Organ Transplant (Kidney/Liver)', icon: '🫀' },
    { id: 'robotic', name: 'Robotic & Laparoscopic Surgery', icon: '🤖' },
    { id: 'ivf', name: 'Fertility Treatments & IVF', icon: '👶' },
    { id: 'pediatric', name: 'Pediatric Specialized Care', icon: '🧒' },
  ];

  const handleTreatmentClick = (treatmentId: string) => {
    // CHANGED BEHAVIOR: Opens treatment intake overlay
    setSelectedTreatment(treatmentId);
    setShowTreatmentIntake(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* EXISTING LAYOUT - PRESERVED 100% */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Back Button (EXISTING) */}
        <button className="flex items-center gap-2 text-gray-600 mb-6">
          <ChevronRight className="rotate-180 h-5 w-5" />
          <span>Back</span>
        </button>

        {/* Header Card (EXISTING) */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl p-8 mb-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
              🏥
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Medical Tourism</h1>
              <p className="text-white/90">
                World-class treatment + travel packages for [Admin: Specialties List]
              </p>
              <div className="flex gap-3 mt-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  [Admin: Hospital Count]+
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  [Admin: Price Range]
                </span>
                <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold">
                  ⚕️ All JCI Accredited
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Select Treatment Type (EXISTING GRID) */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Activity className="h-6 w-6 text-red-600" />
          Select Treatment Type
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {treatmentTypes.map((treatment) => (
            <button
              key={treatment.id}
              onClick={() => handleTreatmentClick(treatment.id)}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border-2 border-gray-200 hover:border-pink-300"
            >
              <div className="text-4xl mb-3">{treatment.icon}</div>
              <p className="text-sm font-semibold text-gray-900">{treatment.name}</p>
            </button>
          ))}
        </div>

        {/* NEW: ADMIN PACKAGES vs CUSTOM REQUEST TOGGLE */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setViewMode('admin-packages')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                viewMode === 'admin-packages'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Admin Packages
            </button>
            <button
              onClick={() => setViewMode('custom-request')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                viewMode === 'custom-request'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Request Custom Plan
            </button>
          </div>

          {viewMode === 'admin-packages' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Browse admin-curated treatment packages with transparent pricing
              </p>
              {/* Package Cards (LOW-FI PLACEHOLDERS) */}
              {[1, 2, 3].map((pkg) => (
                <div
                  key={pkg}
                  className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        [Admin: Package {pkg} Name]
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        [Admin: Package {pkg} Description]
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          ✓ [Admin: Include 1]
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          ✓ [Admin: Include 2]
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          ✓ [Admin: Include 3]
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="text-xl font-bold text-gray-900">[Admin: Days]</p>
                      <p className="text-sm text-gray-600 mt-2">Price</p>
                      <p className="text-2xl font-bold text-green-600">[Admin: ₹Price]</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      Select Package
                    </Button>
                    <Button variant="outline" className="flex-shrink-0">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewMode === 'custom-request' && (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                Need a customized treatment plan? Submit your requirements
              </p>
              <Button
                onClick={() => setShowTreatmentIntake(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Custom Request →
              </Button>
            </div>
          )}
        </div>

        {/* EXISTING FILTER SECTIONS - PRESERVED */}
        {/* Filter by State, Price Range, Minimum Rating - KEPT AS-IS */}
      </div>

      {/* NEW: TREATMENT DETAILS INTAKE OVERLAY */}
      <AnimatePresence>
        {showTreatmentIntake && (
          <TreatmentDetailsIntakeOverlay
            treatmentType={selectedTreatment || ''}
            onClose={() => setShowTreatmentIntake(false)}
            onSubmit={(data) => {
              console.log('Treatment request:', data);
              setShowTreatmentIntake(false);
              toast.success(
                '✅ Request received. Admin will review and respond with centers, estimated cost, inclusions, and timeline.'
              );
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// 4. TREATMENT DETAILS INTAKE OVERLAY
// ========================================

interface TreatmentDetailsIntakeOverlayProps {
  treatmentType: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

function TreatmentDetailsIntakeOverlay({
  treatmentType,
  onClose,
  onSubmit,
}: TreatmentDetailsIntakeOverlayProps) {
  const [formData, setFormData] = useState({
    caseType: '',
    urgency: 'medium',
    documents: [] as File[],
    jciOnly: false,
    travelCompanions: 0,
    seniorCare: false,
    wheelchairAccess: false,
    additionalNotes: '',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Treatment Details</h2>
            <p className="text-sm text-gray-600 mt-1">
              Treatment: <span className="font-semibold">[Admin: {treatmentType}]</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Case Type */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Case Type / Specific Procedure
            </label>
            <select
              value={formData.caseType}
              onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select procedure type...</option>
              <option value="type1">[Admin: Procedure Type 1]</option>
              <option value="type2">[Admin: Procedure Type 2]</option>
              <option value="type3">[Admin: Procedure Type 3]</option>
            </select>
          </div>

          {/* Urgency */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Urgency Level</label>
            <div className="grid grid-cols-3 gap-3">
              {['low', 'medium', 'high'].map((level) => (
                <button
                  key={level}
                  onClick={() => setFormData({ ...formData, urgency: level })}
                  className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                    formData.urgency === level
                      ? level === 'high'
                        ? 'bg-red-600 text-white'
                        : level === 'medium'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Documents Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              <Upload className="inline h-4 w-4 mr-1" />
              Medical Documents (Admin Review)
            </label>
            <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to upload reports, scans, prescriptions
              </p>
              <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 10MB)</p>
            </div>
          </div>

          {/* JCI Only Toggle */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.jciOnly}
                onChange={(e) => setFormData({ ...formData, jciOnly: e.target.checked })}
                className="w-5 h-5"
              />
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">
                  JCI-Accredited Hospitals Only
                </span>
              </div>
            </label>
          </div>

          {/* Travel Companions */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              Travel Companions Count
            </label>
            <input
              type="number"
              value={formData.travelCompanions}
              onChange={(e) =>
                setFormData({ ...formData, travelCompanions: parseInt(e.target.value) })
              }
              min={0}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Senior Care Toggle */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.seniorCare}
                onChange={(e) => setFormData({ ...formData, seniorCare: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm font-semibold">Senior Care Required (60+)</span>
            </label>
          </div>

          {/* Wheelchair Access Toggle */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.wheelchairAccess}
                onChange={(e) =>
                  setFormData({ ...formData, wheelchairAccess: e.target.checked })
                }
                className="w-5 h-5"
              />
              <div className="flex items-center gap-2">
                <Wheelchair className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-semibold">Wheelchair Accessibility Needed</span>
              </div>
            </label>
          </div>

          {/* Additional Notes */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Additional Notes
            </label>
            <textarea
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
              placeholder="Any other medical history, allergies, special requirements..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={() => onSubmit(formData)}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
        >
          Request Quote / Submit Case
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// 5. SAVE INTEREST WITH NOTIFICATIONS
// ========================================

interface SaveInterestWidgetProps {
  onSave: (preferences: any) => void;
}

export function SaveInterestWidget({ onSave }: SaveInterestWidgetProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [preferences, setPreferences] = useState({
    notifyBudgetMatch: false,
    notifySlotsOpen: false,
    notifySeasonalOffers: false,
    channel: 'whatsapp',
  });

  const handleSave = () => {
    onSave(preferences);
    setShowOptions(false);
    toast.success(
      "✅ Saved. You'll be notified when admin-published options match your preferences."
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-dashed border-purple-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          Save Your Interests
        </h3>
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="text-sm text-purple-600 font-semibold"
        >
          {showOptions ? 'Hide' : 'Setup Notifications'}
        </button>
      </div>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-4 overflow-hidden"
          >
            {/* Notification Toggles */}
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.notifyBudgetMatch}
                  onChange={(e) =>
                    setPreferences({ ...preferences, notifyBudgetMatch: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Notify me when budget matches</span>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.notifySlotsOpen}
                  onChange={(e) =>
                    setPreferences({ ...preferences, notifySlotsOpen: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Notify me when slots open</span>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.notifySeasonalOffers}
                  onChange={(e) =>
                    setPreferences({ ...preferences, notifySeasonalOffers: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">Notify me for seasonal offers</span>
                </div>
              </label>
            </div>

            {/* Preferred Channel */}
            <div className="border-t pt-4">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Preferred Channel
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPreferences({ ...preferences, channel: 'whatsapp' })}
                  className={`py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all ${
                    preferences.channel === 'whatsapp'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </button>
                <button
                  onClick={() => setPreferences({ ...preferences, channel: 'sms' })}
                  className={`py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all ${
                    preferences.channel === 'sms'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  SMS
                </button>
                <button
                  onClick={() => setPreferences({ ...preferences, channel: 'email' })}
                  className={`py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all ${
                    preferences.channel === 'email'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  Email
                </button>
              </div>
            </div>

            <Button onClick={handleSave} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <Heart className="mr-2 h-5 w-5" />
              Save Preferences
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// 6. GROK AI ADVISORY WIDGET
// ========================================

export function GrokAIAdvisoryWidget() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([]);

  const suggestedPrompts = [
    'What should I know before medical tourism?',
    'Best time for Ayurveda treatment?',
    'Senior-friendly wellness packages?',
    'How to choose the right center?',
  ];

  const handlePromptClick = (prompt: string) => {
    setMessages([
      ...messages,
      { role: 'user', text: prompt },
      {
        role: 'ai',
        text: `Based on your query, here are recommendations from [Admin-verified centers]. Our team will provide detailed options matching your preferences. Would you like to apply these insights to your request?`,
      },
    ]);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">Grok Health Tourism Insights</h3>
          <p className="text-sm text-gray-600">AI-powered advisory (Admin-curated data)</p>
        </div>
      </div>

      {!showChat ? (
        <div className="space-y-3">
          <p className="text-sm text-gray-700">
            Get personalized recommendations for your health journey
          </p>
          <div className="flex gap-3">
            <Button
              onClick={() => setShowChat(true)}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Ask Grok
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Apply to My Request
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Suggested Prompts */}
          <div className="space-y-2">
            <p className="text-xs text-gray-600 font-semibold">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePromptClick(prompt)}
                  className="px-3 py-1.5 bg-white border border-purple-300 rounded-lg text-xs text-gray-700 hover:bg-purple-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          {messages.length > 0 && (
            <div className="bg-white rounded-lg p-4 space-y-3 max-h-60 overflow-y-auto">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-xs ${
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Button
            onClick={() => setShowChat(false)}
            variant="outline"
            className="w-full"
          >
            Close Chat
          </Button>
        </div>
      )}
    </div>
  );
}
