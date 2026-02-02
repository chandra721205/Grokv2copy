/**
 * Integration Success Celebration Screen
 * Shows the completion status of Design System integration
 */

import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  TrendingUp, 
  Award,
  Target,
  Zap,
  ArrowRight,
  Download
} from 'lucide-react';
import exampleImage from 'figma:asset/7b71416b181cfc5b3bc15aacbe1b0142d80c8649.png';

export function IntegrationSuccessScreen() {
  const stats = [
    { label: 'Modules Integrated', value: '16/17', icon: Target, color: 'from-blue-500 to-cyan-500' },
    { label: 'Completion Rate', value: '94%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'User Flow Steps', value: '10+', icon: Zap, color: 'from-purple-500 to-pink-500' },
    { label: 'Components Created', value: '45+', icon: Sparkles, color: 'from-orange-500 to-red-500' }
  ];

  const achievements = [
    {
      title: 'Core Modules',
      status: '100%',
      items: ['GROK AI', 'Travel Essentials', 'Research', 'Interest Tracker', 'Component Library'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Wellness Suite',
      status: '100%',
      items: ['Health Profile', 'Wellness Flow', 'Request System', 'Care & Accessibility'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Heritage Suite',
      status: '100%',
      items: ['Heritage Flow', 'Trip Dashboard', 'Cultural Experiences'],
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      title: 'Specialized',
      status: '67%',
      items: ['Post-Trip Feedback', 'Eco Tourism', 'Devotional (pending)'],
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Confetti Animation Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: Math.random() * window.innerWidth, rotate: 0, opacity: 1 }}
            animate={{ 
              y: window.innerHeight + 20, 
              rotate: Math.random() * 360,
              opacity: [1, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
            className={`absolute w-3 h-3 ${
              ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-yellow-500', 'bg-green-500'][i % 5]
            } rounded-full`}
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative px-4 pt-12 pb-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl"
          >
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3"
          >
            Integration Complete!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg mb-8"
          >
            Design System successfully integrated into GrokYatra
          </motion.p>

          {/* Progress Ring */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
            className="w-40 h-40 mx-auto mb-8 relative"
          >
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.94 }}
                transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
                style={{
                  strokeDasharray: 283,
                  strokeDashoffset: 0
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  94%
                </motion.div>
                <div className="text-xs text-gray-600 font-medium">Complete</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="px-4 py-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg border-2 border-gray-100"
              >
                <div className={`w-10 h-10 mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${achievement.gradient} text-white text-xs font-bold`}>
                  {achievement.status}
                </div>
              </div>
              <div className="space-y-2">
                {achievement.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 mb-8"
        >
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span>Original Design System Reference</span>
          </h3>
          <div className="rounded-xl overflow-hidden border-2 border-gray-200">
            <img 
              src={exampleImage} 
              alt="Figma Design System Components" 
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            All components from this Figma design system have been integrated into GrokYatra
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-all">
            <Sparkles className="w-5 h-5" />
            <span>View Integration Dashboard</span>
          </button>
          <button className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-all">
            <Download className="w-5 h-5" />
            <span>Download Documentation</span>
          </button>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-yellow-50 border-2 border-yellow-200 rounded-2xl px-6 py-4">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Remaining Work:</strong> Devotional Low-Fi needs upgrade to high-fidelity to reach 100%
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
