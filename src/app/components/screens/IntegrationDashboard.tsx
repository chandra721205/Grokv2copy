/**
 * Design System Integration Dashboard
 * Visual interface showing all Figma design system components integrated into the app
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  AlertTriangle,
  ArrowRight,
  Package,
  Heart,
  BookOpen,
  Sparkles,
  Building2,
  Leaf,
  Church,
  Star,
  MapPin,
  Calendar,
  User,
  MessageCircle,
  X,
  ChevronRight
} from 'lucide-react';

interface IntegrationModule {
  id: string;
  name: string;
  status: 'integrated' | 'needs-upgrade';
  icon: React.ElementType;
  gradient: string;
  integrationPoint: string;
  verificationSteps: string[];
}

const modules: IntegrationModule[] = [
  {
    id: 'grok-ai',
    name: 'GROK AI Multi-Category',
    status: 'integrated',
    icon: Sparkles,
    gradient: 'from-orange-400 to-pink-500',
    integrationPoint: 'Main Dashboard Entry',
    verificationSteps: [
      'Navigate to home screen',
      'View AI-powered category grid',
      'Select multiple categories',
      'See recommendation engine in action'
    ]
  },
  {
    id: 'travel-essentials-v2',
    name: 'Travel Essentials V2',
    status: 'integrated',
    icon: Package,
    gradient: 'from-blue-500 to-cyan-500',
    integrationPoint: 'Booking Flow',
    verificationSteps: [
      'Complete destination selection',
      'Proceed through preferences',
      'Access Travel Essentials step',
      'Build custom bundle'
    ]
  },
  {
    id: 'research-destinations',
    name: 'Research Destinations',
    status: 'integrated',
    icon: BookOpen,
    gradient: 'from-green-500 to-emerald-500',
    integrationPoint: 'Discovery Phase',
    verificationSteps: [
      'View any destination card',
      'Click "Research Destinations" button',
      'Use Google Search integration',
      'Browse YouTube videos'
    ]
  },
  {
    id: 'interest-tracker',
    name: 'Interest Tracker',
    status: 'integrated',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-600',
    integrationPoint: 'All Destination Cards',
    verificationSteps: [
      'Find heart icon on destination cards',
      'Click to add to interests',
      'View filled heart animation',
      'Access profile to see all interests'
    ]
  },
  {
    id: 'care-accessibility',
    name: 'Care & Accessibility Preferences',
    status: 'integrated',
    icon: User,
    gradient: 'from-teal-500 to-green-600',
    integrationPoint: 'Trip Preferences',
    verificationSteps: [
      'Navigate to Preferences screen',
      'Scroll to Care & Accessibility section',
      'Select travel pace and mobility needs',
      'View real-time selection counter'
    ]
  },
  {
    id: 'wellness-suite',
    name: 'Wellness Complete Suite',
    status: 'integrated',
    icon: Heart,
    gradient: 'from-green-500 to-teal-500',
    integrationPoint: 'Wellness Category',
    verificationSteps: [
      'Select Health & Wellness category',
      'Complete wellness interest flow',
      'Customize wellness package',
      'Book wellness retreat'
    ]
  },
  {
    id: 'heritage-suite',
    name: 'Heritage Complete Flow',
    status: 'integrated',
    icon: Building2,
    gradient: 'from-orange-600 to-amber-700',
    integrationPoint: 'Heritage Category',
    verificationSteps: [
      'Select Heritage & Cultural category',
      'Browse heritage destinations',
      'View trip dashboard demo',
      'Book cultural experience'
    ]
  },
  {
    id: 'post-trip-feedback',
    name: 'Post Trip Feedback',
    status: 'integrated',
    icon: Star,
    gradient: 'from-orange-500 to-red-600',
    integrationPoint: 'Post-Completion',
    verificationSteps: [
      'Complete a booking',
      'Access feedback form',
      'Rate trip and destinations',
      'Submit review with photos'
    ]
  },
  {
    id: 'eco-tourism',
    name: 'Eco Tourism Demo',
    status: 'integrated',
    icon: Leaf,
    gradient: 'from-green-600 to-lime-600',
    integrationPoint: 'Eco Tourism Category',
    verificationSteps: [
      'Select Eco Tourism category',
      'View sustainable destinations',
      'Check carbon footprint',
      'Book eco-friendly experience'
    ]
  },
  {
    id: 'devotional',
    name: 'Devotional Flow',
    status: 'needs-upgrade',
    icon: Church,
    gradient: 'from-blue-500 to-indigo-600',
    integrationPoint: 'Devotional Category',
    verificationSteps: [
      'Currently in low-fidelity',
      'Needs Component Library styling',
      'Requires gradient card design',
      'Add Interest Tracker integration'
    ]
  }
];

export function IntegrationDashboard() {
  const [selectedModule, setSelectedModule] = useState<IntegrationModule | null>(null);
  const [showVerification, setShowVerification] = useState(false);

  const integratedCount = modules.filter(m => m.status === 'integrated').length;
  const totalCount = modules.length;
  const completionPercentage = Math.round((integratedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-white font-bold text-3xl mb-2">Integration Dashboard</h1>
          <p className="text-white/90 text-sm mb-6">
            Design System Components Integrated into GrokYatra
          </p>

          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full p-1 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2 px-3">
              <span className="text-white text-xs font-semibold">Integration Progress</span>
              <span className="text-white text-xs font-bold">{completionPercentage}%</span>
            </div>
            <div className="bg-white/30 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-white rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-white/80 text-xs mb-1">Total</p>
              <p className="text-white font-bold text-2xl">{totalCount}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-white/80 text-xs mb-1">Integrated</p>
              <p className="text-white font-bold text-2xl">{integratedCount}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-white/80 text-xs mb-1">Pending</p>
              <p className="text-white font-bold text-2xl">{totalCount - integratedCount}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Module Grid */}
      <div className="px-4 py-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <motion.button
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setSelectedModule(module);
                  setShowVerification(true);
                }}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 text-left w-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {module.status === 'integrated' ? (
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                      <Check className="w-3 h-3" />
                      <span>Integrated</span>
                    </div>
                  ) : (
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Pending</span>
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-base text-gray-900 mb-2">{module.name}</h3>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="line-clamp-1">{module.integrationPoint}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-semibold">View Details</span>
                  <ChevronRight className="w-4 h-4 text-blue-600" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Verification Modal */}
      <AnimatePresence>
        {showVerification && selectedModule && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVerification(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto bg-white rounded-3xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-br ${selectedModule.gradient} px-6 py-8 rounded-t-3xl relative`}>
                <button
                  onClick={() => setShowVerification(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <selectedModule.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-white font-bold text-xl mb-1">{selectedModule.name}</h2>
                    {selectedModule.status === 'integrated' ? (
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-white text-xs font-bold w-fit">
                        <Check className="w-3 h-3" />
                        <span>Integrated</span>
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-white text-xs font-bold w-fit">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Needs Upgrade</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Integration Point */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900 text-sm">Integration Point</span>
                  </div>
                  <p className="text-blue-700 font-medium">{selectedModule.integrationPoint}</p>
                </div>

                {/* Verification Steps */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>📋</span>
                    <span>{selectedModule.status === 'integrated' ? 'Verification Steps' : 'Required Actions'}</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedModule.verificationSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          selectedModule.status === 'integrated' ? 'bg-green-100' : 'bg-yellow-100'
                        }`}>
                          <span className={`text-xs font-bold ${
                            selectedModule.status === 'integrated' ? 'text-green-700' : 'text-yellow-700'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowVerification(false)}
                  className={`w-full mt-6 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 ${
                    selectedModule.status === 'integrated'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                  }`}
                >
                  <span>{selectedModule.status === 'integrated' ? 'Test Integration' : 'View Action Plan'}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
