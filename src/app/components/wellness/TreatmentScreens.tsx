import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Bone,
  Circle,
  Sparkles,
  Ribbon,
  Brain,
  Activity,
  Bot,
  Baby,
  ChevronRight,
  X,
  Upload,
  Shield,
  Users,
  Accessibility,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Calendar,
  Clock,
  Target,
  Leaf,
  Utensils,
  Home,
  Stethoscope,
  HeartPulse,
  Dumbbell,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

// ========================================
// MEDICAL TOURISM SCREEN - MATCHES REFERENCE IMAGE
// ========================================

export function MedicalTourismScreen() {
  const [showTreatmentIntake, setShowTreatmentIntake] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'admin-packages' | 'custom-request'>('admin-packages');

  // Treatment types - EXACTLY AS IN REFERENCE IMAGE
  const treatmentTypes = [
    { id: 'cardiac', name: 'Cardiac Surgery & Interventions', icon: <Heart className="h-8 w-8" /> },
    { id: 'orthopedic', name: 'Orthopedic & Joint Replacement', icon: <Bone className="h-8 w-8" /> },
    { id: 'dental', name: 'Dental Implants & Maxillofacial', icon: <Circle className="h-8 w-8" /> },
    { id: 'cosmetic', name: 'Cosmetic & Plastic Surgery', icon: <Sparkles className="h-8 w-8" /> },
    { id: 'cancer', name: 'Cancer Care & Oncology', icon: <Ribbon className="h-8 w-8" /> },
    { id: 'neuro', name: 'Neurosurgery & Neurology', icon: <Brain className="h-8 w-8" /> },
    { id: 'transplant', name: 'Organ Transplant (Kidney/Liver)', icon: <Activity className="h-8 w-8" /> },
    { id: 'robotic', name: 'Robotic & Laparoscopic Surgery', icon: <Bot className="h-8 w-8" /> },
    { id: 'fertility', name: 'Fertility Treatments & IVF', icon: <Baby className="h-8 w-8" /> },
    { id: 'pediatric', name: 'Pediatric Specialized Care', icon: <Baby className="h-8 w-8" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-700 mb-6">
          <ChevronRight className="rotate-180 h-5 w-5" />
          <span>Back</span>
        </button>

        {/* Header Card - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-pink-500 to-red-600 rounded-3xl p-8 mb-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
              🏥
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Medical Tourism</h1>
              <p className="text-white/90 mb-4">
                World-class treatment + travel packages for Cardiac, Orthopedic, Dental & Cosmetic
                procedures
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  50+ hospitals
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  ₹50k-₹15L
                </span>
                <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold">
                  ⚕️ All JCI Accredited
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Select Treatment Type - MATCHES REFERENCE */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Activity className="h-6 w-6 text-red-600" />
            Select Treatment Type
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {treatmentTypes.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => {
                  setSelectedTreatment(treatment.id);
                  setShowTreatmentIntake(true);
                }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border-2 border-gray-200 hover:border-pink-300"
              >
                <div className="text-pink-600 mb-3 flex justify-center">{treatment.icon}</div>
                <p className="text-sm font-semibold text-gray-900">{treatment.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Admin Packages vs Custom Request - NEW */}
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

        {/* Filter by State - MATCHES REFERENCE */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            📍 Filter by State
          </h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-red-500 text-white rounded-full font-semibold">
              All States
            </button>
            {['Delhi-NCR', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Kerala'].map((state) => (
              <button
                key={state}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold"
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range - MATCHES REFERENCE */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            💰 Price Range
          </h3>
          <div className="relative">
            <input
              type="range"
              min="50000"
              max="1500000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">₹50k</span>
              <span className="text-sm text-gray-600">₹15L</span>
            </div>
          </div>
        </div>

        {/* Minimum Rating - MATCHES REFERENCE */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            ⭐ Minimum Rating
          </h3>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">0.0</span>
              <span className="text-sm text-gray-600">5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Details Intake Overlay */}
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
// TREATMENT DETAILS INTAKE OVERLAY
// ========================================

function TreatmentDetailsIntakeOverlay({
  treatmentType,
  onClose,
  onSubmit,
}: {
  treatmentType: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) {
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
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
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
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
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
                <Accessibility className="h-5 w-5 text-purple-600" />
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
// AYURVEDA & PANCHAKARMA SCREEN - MATCHES REFERENCE
// ========================================

export function AyurvedaPanchakarmaScreen() {
  const [showIntake, setShowIntake] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);

  // Unique Traditions - MATCHES REFERENCE
  const uniqueTraditions = [
    {
      id: 'vamana',
      name: 'Vamana',
      badge: 'DETOX THERAPY',
      desc: 'Ancient detox for kapha disorders, respiratory issues, & skin problems',
      duration: '3-5 days',
      price: '₹12k-₹15k',
      features: ['Reduces weight', 'Safe disease cure', 'Digestive clarity'],
    },
    {
      id: 'virechana',
      name: 'Virechana',
      badge: 'PITTA THERAPY',
      desc: 'Eliminates pitta toxins through controlled purging',
      duration: '2-7 days',
      price: '₹12k-₹25k',
      features: ['Liver detox', 'Improved digestion', 'Mental relaxation'],
    },
    {
      id: 'basti',
      name: 'Basti',
      badge: 'REJUVENATION',
      desc: 'Herbal oil/decoction enema for vata disorders',
      duration: '7-16 days',
      price: '₹20k-₹40k',
      features: ['Vata balance', 'Arthritis relief', 'IBS care healing'],
    },
  ];

  // Treatment Types - MATCHES REFERENCE
  const treatmentTypes = [
    { id: 'panchakarma', name: 'Panchakarma (Full 21-day detox)', icon: <Leaf className="h-6 w-6" /> },
    { id: 'arthritis', name: 'Arthritis & Joint Disorders', icon: <Bone className="h-6 w-6" /> },
    { id: 'weight', name: 'Weight Management Programs', icon: <Activity className="h-6 w-6" /> },
    { id: 'stress', name: 'Stress Relief & Insomnia Therapy', icon: <Brain className="h-6 w-6" /> },
    { id: 'skin', name: 'Skin Diseases & Dermatology', icon: <Sparkles className="h-6 w-6" /> },
    { id: 'digestive', name: 'Digestive Disorders Treatment', icon: <Utensils className="h-6 w-6" /> },
    { id: 'respiratory', name: 'Respiratory Care/Asthma', icon: <Activity className="h-6 w-6" /> },
    { id: 'womens', name: "Women's Health & PCOS", icon: <Heart className="h-6 w-6" /> },
    { id: 'detox', name: 'Detox & Rejuvenation Packages', icon: <Leaf className="h-6 w-6" /> },
    { id: 'anti-aging', name: 'Anti-Aging & Longevity Therapy', icon: <Clock className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <button className="flex items-center gap-2 text-gray-700 mb-6">
          <ChevronRight className="rotate-180 h-5 w-5" />
          <span>Back</span>
        </button>

        {/* Header Card - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 mb-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
              🌿
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Ayurveda & Panchakarma</h1>
              <p className="text-white/90 mb-4">
                Traditional detox & rejuvenation therapies at AYUSH-certified retreat centers
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  80+ centers
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  ₹20k-₹2L
                </span>
                <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold">
                  India Exclusive
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Unique India-Only Traditions - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            🌟 Unique India-Only Traditions
          </h2>
          <p className="text-white/90 mb-6 text-sm">
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
                <p className="text-sm text-gray-700 mb-4">{tradition.desc}</p>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                  <span>Duration: {tradition.duration}</span>
                  <span className="font-bold text-green-700">{tradition.price}</span>
                </div>
                <div className="space-y-1">
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

        {/* Select Treatment Type - MATCHES REFERENCE */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            Select Treatment Type
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {treatmentTypes.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => {
                  setSelectedTreatment(treatment.id);
                  setShowIntake(true);
                }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border-2 border-gray-200 hover:border-green-300"
              >
                <div className="text-green-600 mb-3 flex justify-center">{treatment.icon}</div>
                <p className="text-sm font-semibold text-gray-900">{treatment.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Filter by State */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            📍 Filter by State
          </h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold">
              All States
            </button>
            {['Kerala', 'Karnataka', 'Uttarakhand'].map((state) => (
              <button
                key={state}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold"
              >
                {state}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ayurveda-Specific Intake Overlay */}
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
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
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
          {/* Contraindications Checkbox */}
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

          {/* Preferred Program Length */}
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

          {/* Diet Preference */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              <Utensils className="inline h-4 w-4 mr-1" />
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