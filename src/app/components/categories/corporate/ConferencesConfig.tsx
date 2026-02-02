import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Monitor, Wifi, Video, Users as UsersIcon, Globe, Sparkles, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

interface ConferencesConfigProps {
  formData: any;
  onUpdate: (field: string, value: any) => void;
}

export function ConferencesConfig({ formData, onUpdate }: ConferencesConfigProps) {
  const formats = ['Live', 'Hybrid', 'Virtual'];
  const techTiers = [
    {
      id: 'essential',
      name: 'Essential Package',
      features: ['10 Gbps Internet', 'Standard AV Setup', 'Basic Sound System', 'Projector & Screens'],
      price: 'Included',
      badge: null,
    },
    {
      id: 'premium',
      name: 'Premium Package',
      features: [
        '4K Hybrid Streaming',
        'Broadcast-quality Remote',
        'Virtual Breakout Rooms',
        'Live Q&A Integration',
        'Recording & Editing',
      ],
      price: '+₹2,00,000',
      badge: 'Recommended',
    },
  ];

  const smartAddons = [
    {
      id: 'smartReg',
      name: 'Smart Registration',
      options: ['Facial Recognition Entry', 'RFID Badge System'],
      price: '+₹75,000',
    },
    {
      id: 'aiMatch',
      name: 'AI Matchmaking',
      description: 'Enable pre-event networking based on attendee profiles',
      price: '+₹50,000',
    },
    {
      id: 'multiLang',
      name: 'Multi-Language Support',
      description: 'Live Interpretation (Select languages)',
      languages: ['Hindi', 'English', 'Spanish', 'French', 'Mandarin'],
      price: '₹15,000 per language/day',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Format Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Event Format</h3>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => onUpdate('conferenceFormat', format)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                formData.conferenceFormat === format
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <p className={`text-sm font-semibold ${
                formData.conferenceFormat === format ? 'text-blue-600' : 'text-gray-700'
              }`}>
                {format}
              </p>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tech Tier Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Wifi className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-bold text-gray-900">Select Technology Tier</h3>
        </div>

        <div className="space-y-4">
          {techTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => onUpdate('techTier', tier.id)}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                formData.techTier === tier.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.techTier === tier.id
                        ? 'border-purple-600 bg-purple-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {formData.techTier === tier.id && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <h4 className="font-bold text-gray-900">{tier.name}</h4>
                </div>
                {tier.badge && (
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    {tier.badge}
                  </Badge>
                )}
              </div>

              <ul className="space-y-2 mb-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-sm font-bold text-purple-600">{tier.price}</p>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Smart Add-ons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-amber-600" />
          <h3 className="text-lg font-bold text-gray-900">Enhanced Delegate Features</h3>
        </div>

        <div className="space-y-4">
          {smartAddons.map((addon) => (
            <div key={addon.id} className="p-4 border-2 border-gray-200 rounded-2xl">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.selectedAddons?.includes(addon.id) || false}
                  onChange={(e) => {
                    const current = formData.selectedAddons || [];
                    const updated = e.target.checked
                      ? [...current, addon.id]
                      : current.filter((id: string) => id !== addon.id);
                    onUpdate('selectedAddons', updated);
                  }}
                  className="mt-1 w-5 h-5 text-blue-600 rounded"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{addon.name}</h4>
                  {addon.options && (
                    <div className="space-y-1 mb-2">
                      {addon.options.map((opt, idx) => (
                        <p key={idx} className="text-xs text-gray-600">• {opt}</p>
                      ))}
                    </div>
                  )}
                  {addon.description && (
                    <p className="text-sm text-gray-600 mb-2">{addon.description}</p>
                  )}
                  {addon.languages && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {addon.languages.map((lang) => (
                        <span key={lang} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                          {lang}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm font-bold text-blue-600">{addon.price}</p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Grok AI Intelligence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-6 shadow-xl"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">
              🤖 Grok Venue Intelligence
            </h3>
            <p className="text-white/90 text-xs">AI-powered recommendations for your event</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Venue Recommendations */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white font-semibold text-sm mb-2">📍 Recommended Venues:</p>
            <ul className="space-y-1">
              <li className="text-white/90 text-sm">• Trident BKC, Mumbai (500-2K pax)</li>
              <li className="text-white/90 text-sm">• The Lalit, Bangalore (300-1.5K pax)</li>
              <li className="text-white/90 text-sm">• HICC Hyderabad (1K-5K pax)</li>
            </ul>
          </div>

          {/* Cost Optimization */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-1">💡 Cost Optimization Tips:</p>
                <ul className="space-y-1 text-white/90 text-xs">
                  <li>• Book 3-6 months early: Save <strong>20-30%</strong></li>
                  <li>• Off-season (Apr-Jun): Save <strong>40%</strong></li>
                  <li>• Weekday events: Save <strong>15%</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
