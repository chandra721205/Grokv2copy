import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  Shield,
  Lock,
  FileCheck,
  Car,
  Coffee,
  CheckCircle,
  Fingerprint,
  Volume2,
  Trash2,
  UserCheck,
} from 'lucide-react';
import { motion } from 'motion/react';

interface BoardMeetingsConfigProps {
  formData: any;
  onUpdate: (field: string, value: any) => void;
}

export function BoardMeetingsConfig({ formData, onUpdate }: BoardMeetingsConfigProps) {
  const privacyLevels = [
    { id: 'standard', name: 'Standard Confidentiality', icon: Lock },
    { id: 'high', name: 'High Confidentiality', icon: Shield, recommended: true },
    { id: 'maximum', name: 'Maximum Security', icon: Shield, description: 'Includes security screening' },
  ];

  const securityFeatures = [
    { id: 'biometric', name: 'Biometric Access Control', icon: Fingerprint, included: true },
    { id: 'encrypted', name: 'Encrypted Meeting Rooms', icon: Lock, included: true },
    { id: 'nda', name: 'Staff NDA Enforcement', icon: FileCheck, included: true },
    { id: 'soundproof', name: 'Acoustically Treated Rooms', icon: Volume2, included: true },
    { id: 'shredding', name: 'Secure Document Disposal', icon: Trash2, included: true },
  ];

  const premiumServices = [
    {
      id: 'secretarialAI',
      name: 'Secretarial AI',
      description: 'Real-time transcripts + Action item generation',
      icon: FileCheck,
      price: '₹15,000',
    },
    {
      id: 'vipLogistics',
      name: 'VIP Logistics',
      description: 'Chauffeur-driven luxury cars • Private entrance/exit',
      icon: Car,
      price: '₹30,000',
    },
    {
      id: 'brainFuel',
      name: 'Brain-Fuel Menu',
      description: 'Gourmet coffee, High tea, Executive lunch',
      icon: Coffee,
      price: '₹2,000 per person',
    },
  ];

  const verifiedVenues = [
    { name: 'ITC Maurya, Delhi', badge: 'Privacy-Verified' },
    { name: 'Taj Mahal Palace, Mumbai', badge: 'Privacy-Verified' },
    { name: 'ITC Grand Chola, Chennai', badge: 'Privacy-Verified' },
    { name: 'The Oberoi, Bangalore', badge: 'Privacy-Verified' },
  ];

  return (
    <div className="space-y-6">
      {/* Privacy Shield Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-slate-700 to-gray-800 rounded-3xl p-6 shadow-xl"
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">🔒 Privacy Shield Protocol</h3>
            <p className="text-white/80 text-sm">Military-grade confidentiality for your meeting</p>
          </div>
        </div>
      </motion.div>

      {/* Privacy Level Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Security & Privacy Level</h3>

        <div className="space-y-3">
          {privacyLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => onUpdate('privacyLevel', level.id)}
              className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                formData.privacyLevel === level.id
                  ? 'border-slate-600 bg-slate-50'
                  : 'border-gray-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.privacyLevel === level.id
                        ? 'border-slate-600 bg-slate-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {formData.privacyLevel === level.id && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <level.icon className="w-5 h-5 text-slate-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">{level.name}</h4>
                    {level.description && (
                      <p className="text-xs text-gray-600">{level.description}</p>
                    )}
                  </div>
                </div>
                {level.recommended && (
                  <Badge className="bg-green-100 text-green-700 text-xs">Recommended</Badge>
                )}
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Security Features Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">🛡️ Active Security Features</h3>

        <div className="grid grid-cols-1 gap-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-2xl"
            >
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <feature.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-900">{feature.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-slate-50 rounded-2xl">
          <p className="text-xs text-slate-700 text-center">
            <strong>Privacy Guarantee:</strong> All venue staff sign NDAs • Post-meeting secure document disposal
          </p>
        </div>
      </motion.div>

      {/* Premium Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">✨ Premium Executive Services</h3>

        <div className="space-y-3">
          {premiumServices.map((service) => (
            <label
              key={service.id}
              className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-amber-300 transition-all"
            >
              <input
                type="checkbox"
                checked={formData.premiumServices?.includes(service.id) || false}
                onChange={(e) => {
                  const current = formData.premiumServices || [];
                  const updated = e.target.checked
                    ? [...current, service.id]
                    : current.filter((id: string) => id !== service.id);
                  onUpdate('premiumServices', updated);
                }}
                className="mt-1 w-5 h-5 text-amber-600 rounded"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-gray-900">{service.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                <p className="text-sm font-bold text-amber-600">{service.price}</p>
              </div>
            </label>
          ))}
        </div>
      </motion.div>

      {/* Privacy-Verified Venues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Privacy-Verified Venues</h3>

        <div className="space-y-3">
          {verifiedVenues.map((venue, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-slate-600" />
                <span className="font-semibold text-gray-900">{venue.name}</span>
              </div>
              <Badge className="bg-green-100 text-green-700 text-xs">
                {venue.badge}
              </Badge>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
          <p className="text-xs text-blue-800">
            <strong>Note:</strong> All listed venues have passed our 25-point security audit
          </p>
        </div>
      </motion.div>
    </div>
  );
}
