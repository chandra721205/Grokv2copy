import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Stethoscope,
  Brain,
  Activity,
  Users,
  Briefcase,
  Leaf,
  Flower2,
  HeartPulse,
  Accessibility,
  ChevronRight,
  X,
  Calendar,
  DollarSign,
  MapPin,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Bell,
  Info,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

// ========================================
// HEALTH & WELLNESS HUB - MATCHES REFERENCE IMAGE
// ========================================

interface JourneyType {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

export function HealthWellnessHub() {
  const [showInterestPanel, setShowInterestPanel] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState<JourneyType | null>(null);
  const [showGrokChat, setShowGrokChat] = useState(false);

  // Journey types - EXACTLY as shown in reference image
  const journeys: JourneyType[] = [
    {
      id: 'medical-tourism',
      title: 'Medical Tourism',
      subtitle: 'World-class treatment + travel packages',
      icon: <Heart className="h-8 w-8" />,
      color: 'from-pink-400 to-pink-600',
      features: ['Treatment Types', 'Cost Effective', '50+ Hospitals', '₹50k-₹15L'],
    },
    {
      id: 'ayurveda-panchakarma',
      title: 'Ayurveda & Panchakarma',
      subtitle: 'Traditional detox & rejuvenation therapies',
      icon: <Leaf className="h-8 w-8" />,
      color: 'from-green-400 to-green-600',
      features: ['80+ centers', '₹20k-₹2L', 'India Exclusive'],
    },
    {
      id: 'yoga-meditation',
      title: 'Yoga & Meditation Retreats',
      subtitle: 'Holistic wellness through ancient practices',
      icon: <Flower2 className="h-8 w-8" />,
      color: 'from-orange-400 to-orange-600',
      features: ['Retreats', 'Mind-Body', 'Detox', 'Stress Relief'],
    },
    {
      id: 'mental-health',
      title: 'Mental Health & Wellness',
      subtitle: 'Providing safe & counseling paths',
      icon: <Brain className="h-8 w-8" />,
      color: 'from-blue-400 to-blue-600',
      features: ['Therapy', 'Counseling', 'Confidential', '24/7 Support'],
    },
    {
      id: 'rehabilitation',
      title: 'Rehabilitation & Recovery',
      subtitle: 'Post-surgery recovery with physiotherapy',
      icon: <Activity className="h-8 w-8" />,
      color: 'from-teal-400 to-teal-600',
      features: ['Cardiac rehab', 'Sports injury', 'Stroke', 'Ortho'],
    },
    {
      id: 'executive-wellness',
      title: 'Executive Wellness Packages',
      subtitle: 'Preventive health checkups',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'from-purple-400 to-purple-600',
      features: ['Full Checkup', 'Diabetes Mgmt', 'Preventive', '2-7 days'],
    },
  ];

  const handleJourneyClick = (journey: JourneyType) => {
    setSelectedJourney(journey);
    setShowInterestPanel(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WELLNESS – RECTIFIED (ADMIN-DRIVEN / LOW-FI) */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-700 mb-6 hover:text-gray-900">
          <ChevronRight className="rotate-180 h-5 w-5" />
          <span className="text-base font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health & Wellness</h1>
          <p className="text-gray-600">
            World-class medical treatments, Ayurvedic healing, and holistic wellness combined with
            carefree travel & stay
          </p>
        </div>

        {/* Why Choose India Banner - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-6 mb-8 text-white">
          <h2 className="text-xl font-bold mb-4">🇮🇳 Why Choose India for Health Tourism?</h2>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-2xl font-bold">40-80%</div>
              <div className="text-sm">Cost Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold">✓</div>
              <div className="text-sm">Accredited Hospitals</div>
            </div>
            <div>
              <div className="text-2xl font-bold">🎓</div>
              <div className="text-sm">Experienced Specialists</div>
            </div>
            <div>
              <div className="text-2xl font-bold">⚕️</div>
              <div className="text-sm">Ancient + Modern</div>
            </div>
          </div>

          {/* Action Buttons - BEHAVIOR CHANGED TO OPEN INTEREST PANEL */}
          <div className="flex gap-4">
            <Button
              onClick={() => {
                setSelectedJourney({
                  id: 'general',
                  title: 'Health & Wellness',
                  subtitle: 'General inquiry',
                  icon: <Heart className="h-8 w-8" />,
                  color: 'from-green-500 to-teal-600',
                  features: [],
                });
                setShowInterestPanel(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              🏥 View Top Treatment Centers
            </Button>
            <Button
              onClick={() => {
                setSelectedJourney({
                  id: 'personalized',
                  title: 'Personalized Recommendations',
                  subtitle: 'Get customized suggestions',
                  icon: <Sparkles className="h-8 w-8" />,
                  color: 'from-green-500 to-teal-600',
                  features: [],
                });
                setShowInterestPanel(true);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              📞 Get Personalized Recommendations
            </Button>
          </div>
        </div>

        {/* Choose Your Health Journey - MATCHES REFERENCE */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Health Journey</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {journeys.map((journey) => (
            <div
              key={journey.id}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${journey.color} rounded-2xl flex items-center justify-center text-white mb-4`}
              >
                {journey.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{journey.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{journey.subtitle}</p>

              {/* Features - ADMIN PLACEHOLDERS */}
              <div className="space-y-2 mb-6">
                {journey.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-xs text-gray-700">{feature}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-xs text-gray-700">Available: [Admin: Count]</span>
                </div>
              </div>

              {/* Button - BEHAVIOR CHANGED TO OPEN INTEREST PANEL */}
              <Button
                onClick={() => handleJourneyClick(journey)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
              >
                View Top Centers & Book →
              </Button>
            </div>
          ))}
        </div>

        {/* Medical Tourism Package Includes - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-pink-500 to-red-600 rounded-3xl p-6 mb-8 text-white">
          <h3 className="text-xl font-bold mb-4">🏥 Medical Tourism Package Includes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏥', title: 'Airport Pickup', subtitle: 'Cab to & from treatment center (incl hotel)' },
              { icon: '🏨', title: 'Accommodation', subtitle: 'Patient (single bed)  + caretaker (single bed)' },
              { icon: '💊', title: 'Planning & Care', subtitle: 'Pre-arrival planning with expert team' },
              { icon: '🗣️', title: 'Language Assistance', subtitle: 'Interpreter for consultations' },
              { icon: '🩺', title: 'Treatment + Followup', subtitle: 'High-quality care with follow-ups, lab access/tests' },
              { icon: '🚑', title: 'Emergency Support', subtitle: '24x7 emergency helpline + insurance coordination' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-sm mb-1">{item.title}</div>
                <div className="text-xs opacity-90">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ayurvedic 5000 Years of Healing Wisdom - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-3xl p-6 mb-8 text-white">
          <h3 className="text-xl font-bold mb-4">🌿 Ayurvedic: 5000 Years of Healing Wisdom</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3">Detoxifying (Panchakarma)</h4>
              <p className="text-sm opacity-90">
                Panchakarma eliminates deep-rooted toxins, restores natural balance, and rejuvenates
                mind-body harmony.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Certified Treatments</h4>
              <p className="text-sm opacity-90">
                All therapies follow ancient Ayurvedic principles validated by Kerala, Tamil Nadu, and
                AYUSH (Govt of India).
              </p>
            </div>
          </div>
        </div>

        {/* Cost Comparison India vs World - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 mb-8 text-white">
          <h3 className="text-xl font-bold mb-4">💰 Cost Comparison: India vs World</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { procedure: 'Heart Surgery (CABG)', india: '₹6,00,000', usa: '₹1.2 Cr', savings: '80%' },
              { procedure: 'Knee Replacement', india: '₹2,50,000', usa: '₹45L', savings: '82%' },
              { procedure: 'Dental Implant (Full)', india: '₹2,00,000', usa: '₹33L', savings: '82%' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="font-bold text-sm mb-2">{item.procedure}</div>
                <div className="text-xs mb-1">India: {item.india}</div>
                <div className="text-xs mb-1">USA: {item.usa}</div>
                <div className="text-xs font-bold text-yellow-300">Save {item.savings}!</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grok AI Health Tourism Insights - MATCHES REFERENCE */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">✨ Grok AI Health Tourism Insights</h3>
              <p className="text-sm mb-4 opacity-90">
                Get personalized treatment plans, cost estimations, and recovery timelines powered by
                AI. Grok analyzes your health profile, budget, and preferences to recommend the best
                [Admin-verified centers] and care pathways.
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowGrokChat(true)}
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-2 rounded-xl font-semibold"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Ask Grok
                </Button>
                <Button
                  onClick={() => {
                    toast.success('Grok insights applied to your request!');
                  }}
                  className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-2 rounded-xl font-semibold"
                >
                  Apply to My Request
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Interest Widget */}
        <SaveInterestWidget onSave={(prefs) => console.log('Saved:', prefs)} />

        {/* Continue Button - MATCHES REFERENCE */}
        <div className="mt-8">
          <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white py-4 rounded-xl text-lg font-bold">
            Continue →
          </Button>
        </div>
      </div>

      {/* Interest & Eligibility Panel (Overlay) */}
      <AnimatePresence>
        {showInterestPanel && selectedJourney && (
          <InterestEligibilityPanel
            journey={selectedJourney}
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

      {/* Grok AI Chat Overlay */}
      <AnimatePresence>
        {showGrokChat && <GrokChatOverlay onClose={() => setShowGrokChat(false)} />}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// INTEREST & ELIGIBILITY PANEL (Overlay)
// ========================================

interface InterestEligibilityPanelProps {
  journey: JourneyType;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

function InterestEligibilityPanel({ journey, onClose, onSubmit }: InterestEligibilityPanelProps) {
  const [formData, setFormData] = useState({
    treatmentCategory: journey.title,
    preferredMonth: '',
    flexibleDates: true,
    budgetMin: 50000,
    budgetMax: 500000,
    statePreference: '',
    seniorCareRequired: false,
    medicalAssistanceRequired: false,
    specialRequests: '',
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

        <div className="space-y-6">
          {/* Treatment Category (Auto-filled) */}
          <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-xl p-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Treatment/Service Category
            </label>
            <div className="flex items-center gap-2 text-green-700">
              <Activity className="h-5 w-5" />
              <span className="font-semibold">[Admin: {journey.title}]</span>
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
                <label className="block text-xs text-gray-600 mb-1">Minimum (₹)</label>
                <input
                  type="number"
                  value={formData.budgetMin}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetMin: parseInt(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Maximum (₹)</label>
                <input
                  type="number"
                  value={formData.budgetMax}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetMax: parseInt(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
              <option value="state1">[Admin: State 1]</option>
              <option value="state2">[Admin: State 2]</option>
              <option value="state3">[Admin: State 3]</option>
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
              placeholder="Any specific requirements, dietary restrictions, accessibility needs..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={() => onSubmit(formData)}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
        >
          Submit Interest
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// SAVE INTEREST WIDGET
// ========================================

interface SaveInterestWidgetProps {
  onSave: (preferences: any) => void;
}

function SaveInterestWidget({ onSave }: SaveInterestWidgetProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [preferences, setPreferences] = useState({
    notifyBudgetMatch: false,
    notifySlotsOpen: false,
    notifySeasonalOffers: false,
    channel: 'whatsapp',
  });

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-dashed border-purple-300 mb-8">
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

            <Button
              onClick={() => {
                onSave(preferences);
                toast.success(
                  "✅ Saved. You'll be notified when admin-published options match your preferences."
                );
              }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
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
// GROK AI CHAT OVERLAY
// ========================================

function GrokChatOverlay({ onClose }: { onClose: () => void }) {
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
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            Grok AI Health Tourism Insights
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">Suggested questions:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handlePromptClick(prompt)}
                className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 border border-purple-300 rounded-lg text-xs text-gray-700"
              >
                {prompt}
              </button>
            ))}
          </div>

          {messages.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 max-h-60 overflow-y-auto">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-xs ${
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}