import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  BookOpen,
  Award,
  TrendingUp,
  Users as UsersIcon,
  Clock,
  CheckCircle,
  Bot,
  Target,
  BarChart3,
  Calendar,
} from 'lucide-react';
import { motion } from 'motion/react';

interface TrainingConfigProps {
  formData: any;
  onUpdate: (field: string, value: any) => void;
}

export function TrainingConfig({ formData, onUpdate }: TrainingConfigProps) {
  const topics = [
    { id: 'leadership', name: 'Leadership Development', emoji: '👑', color: 'from-purple-500 to-indigo-600' },
    { id: 'pmp', name: 'Project Management (PMP)', emoji: '📊', color: 'from-blue-500 to-cyan-600' },
    { id: 'sales', name: 'Sales & Negotiation', emoji: '💼', color: 'from-green-500 to-emerald-600' },
    { id: 'ai', name: 'AI Literacy & Digital Skills', emoji: '🤖', color: 'from-orange-500 to-red-600' },
    { id: 'communication', name: 'Communication & Presentation', emoji: '🎤', color: 'from-pink-500 to-rose-600' },
    { id: 'custom', name: 'Custom Topic', emoji: '✏️', color: 'from-gray-500 to-slate-600' },
  ];

  const certifications = [
    {
      id: 'grokyatra',
      name: 'GrokYatra Certificate',
      description: 'Company-recognized certificate',
      logo: '🎓',
      price: 'Included',
    },
    {
      id: 'pmi',
      name: 'PMI Certification',
      description: 'Project Management Institute',
      logo: '📜',
      price: '₹15,000 - ₹30,000 per person',
    },
    {
      id: 'microsoft',
      name: 'Microsoft Certified',
      description: 'Azure, Office 365, Power Platform',
      logo: '🖥️',
      price: '₹20,000 - ₹40,000 per person',
    },
    {
      id: 'aws',
      name: 'AWS Certified',
      description: 'Cloud practitioner to Solutions Architect',
      logo: '☁️',
      price: '₹25,000 - ₹50,000 per person',
    },
  ];

  const languages = [
    { id: 'hindi', name: 'Hindi', flag: '🇮🇳' },
    { id: 'english', name: 'English', flag: '🇬🇧' },
    { id: 'tamil', name: 'Tamil', flag: '🇮🇳' },
    { id: 'bengali', name: 'Bengali', flag: '🇮🇳' },
  ];

  return (
    <div className="space-y-6">
      {/* Topic Selection Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Select Training Domain</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onUpdate('trainingTopic', topic.id)}
              className={`overflow-hidden rounded-2xl border-3 transition-all ${
                formData.trainingTopic === topic.id
                  ? 'border-blue-600 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className={`bg-gradient-to-br ${topic.color} p-4 h-28 flex flex-col justify-between`}>
                <div className="text-3xl">{topic.emoji}</div>
                <h4 className="text-white font-bold text-sm">{topic.name}</h4>
              </div>
            </button>
          ))}
        </div>

        {formData.trainingTopic === 'custom' && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Specify your custom training topic..."
              value={formData.customTopic || ''}
              onChange={(e) => onUpdate('customTopic', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none"
            />
          </div>
        )}
      </motion.div>

      {/* Methodology Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Training Methodology</h3>

        {/* Pie Chart Representation */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-48 h-48">
            {/* Practical Section (70%) */}
            <div className="absolute inset-0 rounded-full" style={{
              background: `conic-gradient(from 0deg, #10b981 0%, #10b981 70%, #e5e7eb 70%, #e5e7eb 100%)`,
            }}></div>
            {/* Theory Section (30%) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-gray-900">70/30</p>
                <p className="text-xs text-gray-600">Split</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <h4 className="font-bold text-gray-900">70% Practical</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Role-plays</li>
              <li>• Case studies</li>
              <li>• Hands-on exercises</li>
              <li>• Group activities</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <h4 className="font-bold text-gray-900">30% Theory</h4>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Concepts</li>
              <li>• Frameworks</li>
              <li>• Best practices</li>
              <li>• Industry trends</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* LMS Integration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Learning Management System</h3>

        <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer">
          <input
            type="checkbox"
            checked={formData.includeLMS || false}
            onChange={(e) => onUpdate('includeLMS', e.target.checked)}
            className="mt-1 w-5 h-5 text-blue-600 rounded"
          />
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-2">Digital LMS Access</h4>
            <ul className="space-y-2 mb-3">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Pre-training materials & readings
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Post-training resources & references
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Assessment portal with quizzes
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Progress tracking dashboard
              </li>
            </ul>
            <p className="text-sm font-bold text-blue-600">+₹20,000</p>
          </div>
        </label>
      </motion.div>

      {/* Certification Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-amber-600" />
          <h3 className="text-lg font-bold text-gray-900">🎓 Certification Partners</h3>
        </div>

        <div className="space-y-3">
          {certifications.map((cert) => (
            <button
              key={cert.id}
              onClick={() => onUpdate('certification', cert.id)}
              className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                formData.certification === cert.id
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-amber-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">{cert.logo}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{cert.description}</p>
                  <p className="text-sm font-bold text-amber-600">{cert.price}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Training Language */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">🌐 Training Language</h3>

        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => onUpdate('trainingLanguage', lang.id)}
              className={`p-3 rounded-2xl border-2 transition-all ${
                formData.trainingLanguage === lang.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">{lang.flag}</span>
                <span className={`font-semibold ${
                  formData.trainingLanguage === lang.id ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {lang.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Long-Term Value Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 shadow-xl"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Calendar className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">
              🎯 Long-Term Learning Journey
            </h3>
            <p className="text-white/90 text-xs">Sustained skill development program</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Timeline */}
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-white/30"></div>

            {/* Day 1 */}
            <div className="relative mb-4">
              <div className="absolute left-[-1.75rem] top-1 w-4 h-4 bg-white rounded-full"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                <p className="text-white font-semibold text-sm mb-1">Day 1: Training Program</p>
                <p className="text-white/80 text-xs">Intensive workshop with expert trainers</p>
              </div>
            </div>

            {/* Day 30 */}
            <div className="relative mb-4">
              <div className="absolute left-[-1.75rem] top-1 w-4 h-4 bg-white/70 rounded-full"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                <p className="text-white font-semibold text-sm mb-1">Day 30: Refresher Session</p>
                <p className="text-white/80 text-xs">Virtual check-in + Q&A</p>
              </div>
            </div>

            {/* Day 60 */}
            <div className="relative mb-4">
              <div className="absolute left-[-1.75rem] top-1 w-4 h-4 bg-white/50 rounded-full"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                <p className="text-white font-semibold text-sm mb-1">Day 60: Practice Review</p>
                <p className="text-white/80 text-xs">Implementation challenges discussion</p>
              </div>
            </div>

            {/* Day 90 */}
            <div className="relative">
              <div className="absolute left-[-1.75rem] top-1 w-4 h-4 bg-white/30 rounded-full"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                <p className="text-white font-semibold text-sm mb-1">Day 90: Retention Assessment</p>
                <p className="text-white/80 text-xs">Skill evaluation + Certificate distribution</p>
              </div>
            </div>
          </div>

          {/* Additional Support */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <Bot className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm mb-1">🤖 AI Coach Bot (90 days)</p>
                <p className="text-white/90 text-xs">
                  24/7 access to AI assistant for questions, practice scenarios, and ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* HR Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-bold text-gray-900">📊 HR Dashboard Access</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Track training effectiveness with comprehensive analytics:
        </p>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-purple-50 rounded-2xl">
            <Target className="w-5 h-5 text-purple-600 mb-2" />
            <p className="text-xs font-semibold text-gray-900">Attendance Tracking</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-2xl">
            <Award className="w-5 h-5 text-blue-600 mb-2" />
            <p className="text-xs font-semibold text-gray-900">Assessment Scores</p>
          </div>
          <div className="p-3 bg-green-50 rounded-2xl">
            <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
            <p className="text-xs font-semibold text-gray-900">Certification Rate</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-2xl">
            <TrendingUp className="w-5 h-5 text-amber-600 mb-2" />
            <p className="text-xs font-semibold text-gray-900">Skill Improvement</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
