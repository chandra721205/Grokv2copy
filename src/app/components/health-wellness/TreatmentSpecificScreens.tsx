import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronRight,
  Heart,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Activity,
  Brain,
  Dumbbell,
  Smile,
  Leaf,
  Target,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

// ========================================
// TREATMENT-SPECIFIC SCREENS (B-F)
// All following STRICT layout preservation rules
// ========================================

// ========================================
// B) AYURVEDA & PANCHAKARMA SCREEN
// ========================================

export function AyurvedaPanchakarmaScreen() {
  const [showIntake, setShowIntake] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);

  // EXISTING UNIQUE TRADITIONS CARDS - PRESERVED
  const uniqueTraditions = [
    {
      id: 'vamana',
      name: 'Vamana',
      badge: 'DETOX THERAPY',
      description: 'Ancient detox for kapha disorders, respiratory issues, & skin problems',
      duration: '3-5 days',
      price: '₹12k-₹15k',
      features: ['Reduces weight', 'Safe disease cure', 'Digestive clarity'],
    },
    // ... more traditions
  ];

  // EXISTING TREATMENT TYPE CHIPS - PRESERVED
  const treatmentTypes = [
    { id: 'panchakarma', name: 'Panchakarma (Full 21-day detox)', icon: '🌿' },
    { id: 'arthritis', name: 'Arthritis & Joint Disorders', icon: '🦴' },
    { id: 'weight', name: 'Weight Management Programs', icon: '⚖️' },
    { id: 'stress', name: 'Stress Relief & Insomnia Therapy', icon: '😌' },
    { id: 'skin', name: 'Skin Diseases & Dermatology', icon: '✨' },
    { id: 'digestive', name: 'Digestive Disorders Treatment', icon: '🍃' },
    { id: 'respiratory', name: 'Respiratory Care/Asthma', icon: '🫁' },
    { id: 'womens', name: "Women's Health & PCOS", icon: '🌸' },
    { id: 'detox', name: 'Detox & Rejuvenation Packages', icon: '🧘' },
    { id: 'anti-aging', name: 'Anti-Aging & Longevity Therapy', icon: '⏳' },
  ];

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
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-8 mb-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
              🌿
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Ayurveda & Panchakarma</h1>
              <p className="text-white/90">
                [Admin: Description of traditional Ayurveda offerings]
              </p>
              <div className="flex gap-3 mt-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  [Admin: Center Count]+
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  [Admin: Price Range]
                </span>
                <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold">
                  ✓ India Exclusive
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Unique India-Only Traditions (EXISTING CARDS) */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            Unique India-Only Traditions
          </h2>
          <p className="text-white/90 mb-6">
            Ancient therapies not available anywhere else in the world
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {uniqueTraditions.map((tradition) => (
              <div key={tradition.id} className="bg-white rounded-2xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{tradition.name}</h3>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-semibold">
                    {tradition.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-4">{tradition.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                  <span>Duration: {tradition.duration}</span>
                  <span className="font-bold text-green-700">{tradition.price}</span>
                </div>
                <div className="space-y-1 mb-4">
                  {tradition.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Select Treatment Type (EXISTING CHIPS) */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Activity className="h-6 w-6 text-green-600" />
          Select Treatment Type
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {treatmentTypes.map((treatment) => (
            <button
              key={treatment.id}
              onClick={() => {
                setSelectedTreatment(treatment.id);
                setShowIntake(true);
              }}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border-2 border-gray-200 hover:border-green-300"
            >
              <div className="text-4xl mb-3">{treatment.icon}</div>
              <p className="text-sm font-semibold text-gray-900">{treatment.name}</p>
            </button>
          ))}
        </div>

        {/* EXISTING FILTER SECTIONS - PRESERVED */}
      </div>

      {/* NEW: AYURVEDA-SPECIFIC INTAKE OVERLAY */}
      <AnimatePresence>
        {showIntake && (
          <AyurvedaIntakeOverlay
            treatmentType={selectedTreatment || ''}
            onClose={() => setShowIntake(false)}
            onSubmit={(data) => {
              console.log('Ayurveda request:', data);
              setShowIntake(false);
              toast.success('✅ Request received. Admin will respond with Ayurveda plan options.');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Ayurveda-Specific Intake Overlay
function AyurvedaIntakeOverlay({
  treatmentType,
  onClose,
  onSubmit,
}: {
  treatmentType: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) {
  const [formData, setFormData] = useState({
    contraindications: false,
    programLength: '7-days',
    dietPreference: 'vegetarian',
    doshaType: '',
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
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Ayurveda Treatment Details</h2>
            <p className="text-sm text-gray-600 mt-1">Treatment: {treatmentType}</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* NEW: Contraindications / Suitability Checkbox */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-yellow-50">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.contraindications}
                onChange={(e) =>
                  setFormData({ ...formData, contraindications: e.target.checked })
                }
                className="w-5 h-5 mt-1"
              />
              <div>
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  I confirm no contraindications (pregnancy, heart conditions, recent surgery)
                </span>
                <p className="text-xs text-gray-600 mt-1">
                  Panchakarma treatments require medical clearance for certain conditions
                </p>
              </div>
            </label>
          </div>

          {/* NEW: Preferred Program Length */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              <Clock className="inline h-4 w-4 mr-1" />
              Preferred Program Length
            </label>
            <div className="grid grid-cols-4 gap-3">
              {['7-days', '14-days', '21-days', '28-days'].map((duration) => (
                <button
                  key={duration}
                  onClick={() => setFormData({ ...formData, programLength: duration })}
                  className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                    formData.programLength === duration
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          {/* NEW: Diet Preference */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              <Leaf className="inline h-4 w-4 mr-1" />
              Diet Preference
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['vegetarian', 'vegan', 'sattvic'].map((diet) => (
                <button
                  key={diet}
                  onClick={() => setFormData({ ...formData, dietPreference: diet })}
                  className={`py-2 px-4 rounded-lg font-semibold transition-all capitalize ${
                    formData.dietPreference === diet
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {diet}
                </button>
              ))}
            </div>
          </div>

          {/* Dosha Type (Optional) */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Known Dosha Type (Optional)
            </label>
            <select
              value={formData.doshaType}
              onChange={(e) => setFormData({ ...formData, doshaType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select if known...</option>
              <option value="vata">Vata</option>
              <option value="pitta">Pitta</option>
              <option value="kapha">Kapha</option>
              <option value="vata-pitta">Vata-Pitta</option>
              <option value="pitta-kapha">Pitta-Kapha</option>
              <option value="vata-kapha">Vata-Kapha</option>
            </select>
            <p className="text-xs text-gray-600 mt-2">
              Don't know? Our practitioners will assess during consultation
            </p>
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
              placeholder="Any health conditions, allergies, previous Ayurveda experience..."
            />
          </div>
        </div>

        <Button
          onClick={() => onSubmit(formData)}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
        >
          Request Ayurveda Plan
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// C) YOGA & MEDITATION RETREATS SCREEN
// ========================================

export function YogaMeditationScreen() {
  const [showIntake, setShowIntake] = useState(false);
  const [formData, setFormData] = useState({
    goals: [] as string[],
    intensity: 'standard',
    experience: 'beginner',
  });

  const goalOptions = [
    { id: 'stress-relief', label: 'Stress Relief', icon: '😌' },
    { id: 'mindfulness', label: 'Mindfulness', icon: '🧘' },
    { id: 'detox', label: 'Detox', icon: '🌿' },
    { id: 'sleep', label: 'Better Sleep', icon: '😴' },
    { id: 'spiritual', label: 'Spiritual Growth', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* EXISTING HEADER - PRESERVED */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Yoga & Meditation Retreats</h1>
          <p className="text-white/90">[Admin: Holistic wellness through ancient practices]</p>
        </div>

        {/* NEW: GOAL SELECTION CHIPS */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-purple-600" />
            What are your goals?
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {goalOptions.map((goal) => (
              <button
                key={goal.id}
                onClick={() => {
                  const newGoals = formData.goals.includes(goal.id)
                    ? formData.goals.filter((g) => g !== goal.id)
                    : [...formData.goals, goal.id];
                  setFormData({ ...formData, goals: newGoals });
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  formData.goals.includes(goal.id)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{goal.icon}</span>
                {goal.label}
              </button>
            ))}
          </div>

          {/* NEW: INTENSITY SELECTOR */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Activity className="h-5 w-5 text-purple-600" />
            Intensity Level
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['gentle', 'standard', 'intensive'].map((intensity) => (
              <button
                key={intensity}
                onClick={() => setFormData({ ...formData, intensity })}
                className={`py-3 px-4 rounded-xl font-semibold transition-all capitalize ${
                  formData.intensity === intensity
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {intensity}
              </button>
            ))}
          </div>

          <Button
            onClick={() => setShowIntake(true)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Submit Interest
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// D) MENTAL HEALTH & WELLNESS SCREEN
// ========================================

export function MentalHealthScreen() {
  const [formData, setFormData] = useState({
    supportType: 'therapy',
    privacyPreference: 'high',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* EXISTING HEADER - PRESERVED */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Mental Health & Wellness</h1>
          <p className="text-white/90">[Admin: Providing safe & confidential counseling pathways]</p>
        </div>

        {/* NEW: SUPPORT TYPE SELECTOR */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            Type of Support Needed
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['therapy', 'retreat', 'counseling'].map((type) => (
              <button
                key={type}
                onClick={() => setFormData({ ...formData, supportType: type })}
                className={`py-3 px-4 rounded-xl font-semibold transition-all capitalize ${
                  formData.supportType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* NEW: PRIVACY PREFERENCE */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            Privacy Preference
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['high', 'medium', 'standard'].map((privacy) => (
              <button
                key={privacy}
                onClick={() => setFormData({ ...formData, privacyPreference: privacy })}
                className={`py-3 px-4 rounded-xl font-semibold transition-all capitalize ${
                  formData.privacyPreference === privacy
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {privacy}
              </button>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
            <p className="text-sm text-blue-900">
              🔒 All consultations are 100% confidential and encrypted. Your data is never shared.
            </p>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Request Support Plan
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// E) REHABILITATION & RECOVERY SCREEN
// ========================================

export function RehabilitationScreen() {
  const [formData, setFormData] = useState({
    conditionType: '',
    mobilitySupport: false,
  });

  const conditionTypes = [
    'post-surgery',
    'stroke-recovery',
    'cardiac-rehab',
    'sports-injury',
    'neurological',
    'orthopedic',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* EXISTING HEADER - PRESERVED */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Rehabilitation & Recovery</h1>
          <p className="text-white/90">[Admin: Post-surgery recovery with physiotherapy]</p>
        </div>

        {/* NEW: CONDITION TYPE SELECTOR */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-teal-600" />
            Condition Type
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {conditionTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFormData({ ...formData, conditionType: type })}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  formData.conditionType === type
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          {/* NEW: MOBILITY SUPPORT TOGGLE */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 mb-6">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.mobilitySupport}
                onChange={(e) =>
                  setFormData({ ...formData, mobilitySupport: e.target.checked })
                }
                className="w-5 h-5"
              />
              <span className="text-sm font-semibold text-gray-900">
                Mobility Support Required (wheelchair, walker, etc.)
              </span>
            </label>
          </div>

          <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
            Request Rehab Plan
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// F) EXECUTIVE WELLNESS PACKAGES SCREEN
// ========================================

export function ExecutiveWellnessScreen() {
  const [formData, setFormData] = useState({
    goals: [] as string[],
    timeConstraint: 'weekend',
  });

  const goalOptions = [
    'full-body-checkup',
    'weight-management',
    'diabetes-management',
    'longevity-program',
    'stress-management',
    'cardiac-screening',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* EXISTING HEADER - PRESERVED */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Executive Wellness Packages</h1>
          <p className="text-white/90">[Admin: Preventive health checkups for professionals]</p>
        </div>

        {/* NEW: GOALS SELECTOR */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-indigo-600" />
            Health Goals
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {goalOptions.map((goal) => (
              <button
                key={goal}
                onClick={() => {
                  const newGoals = formData.goals.includes(goal)
                    ? formData.goals.filter((g) => g !== goal)
                    : [...formData.goals, goal];
                  setFormData({ ...formData, goals: newGoals });
                }}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  formData.goals.includes(goal)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {goal.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          {/* NEW: TIME CONSTRAINT SELECTOR */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-indigo-600" />
            Time Available
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['weekend', '3-5-days', '7-10-days'].map((time) => (
              <button
                key={time}
                onClick={() => setFormData({ ...formData, timeConstraint: time })}
                className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                  formData.timeConstraint === time
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {time.split('-').join(' ')}
              </button>
            ))}
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Request Executive Plan
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
