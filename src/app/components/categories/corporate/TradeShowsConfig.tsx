import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  Layout,
  Maximize,
  MapPin,
  Smartphone,
  BarChart3,
  Zap,
  Camera,
  Palette,
  TrendingUp,
  QrCode,
  Radio,
} from 'lucide-react';
import { motion } from 'motion/react';

interface TradeShowsConfigProps {
  formData: any;
  onUpdate: (field: string, value: any) => void;
}

export function TradeShowsConfig({ formData, onUpdate }: TradeShowsConfigProps) {
  const stallSizes = [
    {
      id: '3x3',
      name: '3x3m (9 sqm)',
      category: 'Startups',
      priceRange: '₹80,000 - ₹1,50,000',
      icon: '🏪',
      features: ['Basic stall', 'Table & chairs', 'Basic lighting'],
    },
    {
      id: '3x6',
      name: '3x6m (18 sqm)',
      category: 'SMEs',
      priceRange: '₹2,00,000 - ₹4,00,000',
      icon: '🏬',
      features: ['Premium stall', 'Display units', 'Enhanced AV', 'Storage room'],
      popular: true,
    },
    {
      id: '6x6',
      name: '6x6m (36 sqm)',
      category: 'Corporate',
      priceRange: '₹5,00,000 - ₹10,00,000',
      icon: '🏢',
      features: ['Luxury stall', 'Meeting room', 'Full AV setup', 'Custom design', 'Refreshments area'],
    },
  ];

  const zones = [
    {
      id: 'premium',
      name: 'Premium Zone',
      description: 'Main entrance booths • Corner positions',
      footfall: '+40% extra footfall',
      pricing: 'Base + 40%',
      color: 'from-amber-500 to-orange-600',
      badge: '⭐ Best Visibility',
    },
    {
      id: 'standard',
      name: 'Standard Zone',
      description: 'Central hall placement • Good visibility',
      footfall: 'Standard footfall',
      pricing: 'Base rate',
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  const techStack = [
    {
      id: 'rfid',
      name: 'Smart RFID Badges',
      description: 'Contactless info exchange with attendees',
      price: '₹50 per badge',
      icon: Radio,
    },
    {
      id: 'qr',
      name: 'QR Code Scanner System',
      description: 'Instant contact capture to CRM',
      price: '₹25,000',
      icon: QrCode,
    },
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      description: 'Real-time heatmaps • Visitor traffic • Dwell time tracking',
      price: '₹40,000',
      icon: BarChart3,
    },
    {
      id: 'crm',
      name: 'CRM Integration',
      description: 'Auto-sync to Salesforce/HubSpot',
      price: '₹30,000',
      icon: Zap,
    },
  ];

  const designPreferences = [
    { id: 'minimalist', name: 'Minimalist Modern', emoji: '⚪' },
    { id: 'tech', name: 'Tech & Innovation', emoji: '💻' },
    { id: 'traditional', name: 'Traditional & Professional', emoji: '🏛️' },
    { id: 'creative', name: 'Creative & Bold', emoji: '🎨' },
  ];

  return (
    <div className="space-y-6">
      {/* Stall Size Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Maximize className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-bold text-gray-900">Select Stall Size</h3>
        </div>

        <div className="space-y-3">
          {stallSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onUpdate('stallSize', size.id)}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left relative ${
                formData.stallSize === size.id
                  ? 'border-purple-600 bg-purple-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              {size.popular && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="flex items-start gap-4 mb-3">
                <div className="text-4xl">{size.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900">{size.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{size.category}</p>
                  <p className="text-sm font-bold text-purple-600">{size.priceRange}</p>
                </div>
              </div>

              <ul className="space-y-1">
                {size.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Floor Plan Visualizer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">🗺️ Booth Location & Zone</h3>
        </div>

        {/* Simplified Floor Map */}
        <div className="mb-6 p-6 bg-gray-100 rounded-2xl">
          <div className="relative">
            {/* Map Visualization */}
            <div className="space-y-4">
              {/* Entrance */}
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg font-bold text-sm">
                  🚪 MAIN ENTRANCE
                </div>
              </div>

              {/* Premium Zone */}
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">⭐ P{i}</span>
                  </div>
                ))}
              </div>

              {/* Standard Zone */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-600 text-center mt-3">
              Interactive floor plan (schematic representation)
            </p>
          </div>
        </div>

        {/* Zone Selection */}
        <div className="space-y-3">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => onUpdate('boothZone', zone.id)}
              className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                formData.boothZone === zone.id
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-amber-300'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">{zone.name}</h4>
                  <p className="text-sm text-gray-600">{zone.description}</p>
                </div>
                {zone.badge && (
                  <Badge className="bg-amber-100 text-amber-700 text-xs">{zone.badge}</Badge>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-green-700">{zone.footfall}</span>
                <span className="text-sm font-bold text-gray-900">{zone.pricing}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <label className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-2xl cursor-pointer">
            <input
              type="checkbox"
              checked={formData.request3DRender || false}
              onChange={(e) => onUpdate('request3DRender', e.target.checked)}
              className="mt-1 w-5 h-5 text-blue-600 rounded"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Camera className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-gray-900">Request Custom 3D Stall Render</h4>
              </div>
              <p className="text-sm text-gray-600">
                Get photorealistic mockups before fabrication
              </p>
              <p className="text-sm font-bold text-blue-600 mt-2">+₹15,000</p>
            </div>
          </label>
        </div>
      </motion.div>

      {/* Tech Stack for Lead Generation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="w-6 h-6 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">📱 Tech Stack for Lead Generation</h3>
        </div>

        <div className="space-y-3">
          {techStack.map((tech) => (
            <label
              key={tech.id}
              className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-green-300 transition-all"
            >
              <input
                type="checkbox"
                checked={formData.techStack?.includes(tech.id) || false}
                onChange={(e) => {
                  const current = formData.techStack || [];
                  const updated = e.target.checked
                    ? [...current, tech.id]
                    : current.filter((id: string) => id !== tech.id);
                  onUpdate('techStack', updated);
                }}
                className="mt-1 w-5 h-5 text-green-600 rounded"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <tech.icon className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-gray-900">{tech.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{tech.description}</p>
                <p className="text-sm font-bold text-green-600">{tech.price}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-2xl">
          <p className="text-xs text-purple-800">
            <strong>Pro Tip:</strong> Analytics Dashboard + CRM Integration combo increases lead conversion by 45%
          </p>
        </div>
      </motion.div>

      {/* Branding & Design Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-6 h-6 text-pink-600" />
          <h3 className="text-lg font-bold text-gray-900">🎨 Stall Design Preference</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {designPreferences.map((design) => (
            <button
              key={design.id}
              onClick={() => onUpdate('designStyle', design.id)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                formData.designStyle === design.id
                  ? 'border-pink-600 bg-pink-50'
                  : 'border-gray-200 bg-white hover:border-pink-300'
              }`}
            >
              <div className="text-3xl mb-2">{design.emoji}</div>
              <p className={`text-sm font-semibold ${
                formData.designStyle === design.id ? 'text-pink-600' : 'text-gray-700'
              }`}>
                {design.name}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Brand Colors (Hex codes)</label>
            <input
              type="text"
              placeholder="#000000, #FFFFFF"
              value={formData.brandColors || ''}
              onChange={(e) => onUpdate('brandColors', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-pink-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Key Products to Showcase (max 5)</label>
            <textarea
              placeholder="Product 1, Product 2, Product 3..."
              value={formData.keyProducts || ''}
              onChange={(e) => onUpdate('keyProducts', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-pink-600 focus:outline-none resize-none"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
