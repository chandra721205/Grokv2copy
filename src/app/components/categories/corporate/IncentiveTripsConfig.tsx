import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  MapPin,
  Star,
  Award,
  TrendingUp,
  Users as UsersIcon,
  Heart,
  Camera,
  Plane,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { unsplash_tool } from '@/tools';

interface IncentiveTripsConfigProps {
  formData: any;
  onUpdate: (field: string, value: any) => void;
}

export function IncentiveTripsConfig({ formData, onUpdate }: IncentiveTripsConfigProps) {
  const destinations = [
    {
      id: 'beach',
      name: 'Beach Paradise',
      locations: 'Goa, Andaman, Kerala',
      icon: '🏖️',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      id: 'heritage',
      name: 'Heritage Luxury',
      locations: 'Udaipur, Jaipur, Mysore',
      icon: '🏰',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'hills',
      name: 'Hill Retreat',
      locations: 'Shimla, Ooty, Darjeeling',
      icon: '⛰️',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: 'international',
      name: 'International',
      locations: 'Dubai, Thailand, Bali',
      icon: '✈️',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  const tiers = [
    {
      id: 'silver',
      name: 'Silver Tier',
      icon: '🥈',
      features: ['4-Star Stay', 'Breakfast Included', '1 VIP Experience', 'Group Transport'],
      priceRange: '₹15,000 - ₹25,000/person',
      gradient: 'from-gray-300 to-gray-400',
    },
    {
      id: 'gold',
      name: 'Gold Tier',
      icon: '🥇',
      features: ['5-Star Stay', 'All Meals', 'Spa Session', '3 VIP Experiences', 'Welcome Kit'],
      priceRange: '₹30,000 - ₹45,000/person',
      gradient: 'from-yellow-400 to-amber-500',
      popular: true,
    },
    {
      id: 'platinum',
      name: 'Platinum Tier',
      icon: '💎',
      features: ['Luxury Resort', 'Private Jets', 'Personal Concierge', 'Unlimited Experiences', 'Award Trophies'],
      priceRange: '₹50,000+/person',
      gradient: 'from-indigo-400 to-purple-500',
    },
  ];

  const familyOptions = [
    {
      id: 'spouse',
      name: 'Spouse Programs',
      description: 'Parallel activities for partners',
      price: '+₹8,000 per spouse',
      icon: Heart,
    },
    {
      id: 'family',
      name: 'Family Inclusion',
      description: 'Kids activities + childcare',
      price: '+₹5,000 per child',
      icon: UsersIcon,
    },
    {
      id: 'bleisure',
      name: 'Bleisure Extension',
      description: 'Extend 2-3 days for personal vacation',
      price: 'Employee pays differential',
      icon: Plane,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Destination Selection - Visual Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Select Destination Category</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {destinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => onUpdate('destinationType', dest.id)}
              className={`relative overflow-hidden rounded-2xl border-3 transition-all ${
                formData.destinationType === dest.id
                  ? 'border-blue-600 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className={`bg-gradient-to-br ${dest.gradient} p-6 h-32 flex flex-col justify-between`}>
                <div className="text-4xl">{dest.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-sm">{dest.name}</h4>
                  <p className="text-white/90 text-xs">{dest.locations}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tier Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-amber-600" />
          <h3 className="text-lg font-bold text-gray-900">Select Experience Tier</h3>
        </div>

        <div className="space-y-4">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => onUpdate('experienceTier', tier.id)}
              className={`w-full p-5 rounded-2xl border-3 transition-all text-left relative ${
                formData.experienceTier === tier.id
                  ? 'border-amber-600 bg-amber-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-amber-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}

              <div className="flex items-start gap-4 mb-3">
                <div className={`text-4xl ${tier.popular ? 'scale-110' : ''}`}>{tier.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">{tier.name}</h4>
                  <p className="text-sm font-bold text-amber-600">{tier.priceRange}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0 fill-amber-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* ROI Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-6 shadow-xl"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">
              📊 ROI Impact Calculator
            </h3>
            <p className="text-white/90 text-xs">Expected business outcomes</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Expected Outcomes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white font-semibold text-sm mb-3">Expected Outcomes:</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Sales Boost (6 months)</span>
                <span className="text-white font-bold text-lg">+20-30%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Retention Rate</span>
                <span className="text-white font-bold text-lg">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Engagement Score</span>
                <span className="text-white font-bold text-lg">+45 points</span>
              </div>
            </div>
          </div>

          {/* ROI Calculation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white font-semibold text-sm mb-2">Sample ROI (100 employees):</p>
            <div className="space-y-1 text-white/90 text-sm">
              <p>Investment: <strong className="text-white">₹30,00,000</strong></p>
              <p>Projected Return: <strong className="text-white">₹1.2 Cr</strong> (sales uplift)</p>
              <p className="text-lg font-bold text-white mt-2">ROI: 4x 🚀</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Family & Extension Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">👨‍👩‍👧 Family & Extension Options</h3>

        <div className="space-y-3">
          {familyOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-all"
            >
              <input
                type="checkbox"
                checked={formData.familyOptions?.includes(option.id) || false}
                onChange={(e) => {
                  const current = formData.familyOptions || [];
                  const updated = e.target.checked
                    ? [...current, option.id]
                    : current.filter((id: string) => id !== option.id);
                  onUpdate('familyOptions', updated);
                }}
                className="mt-1 w-5 h-5 text-blue-600 rounded"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <option.icon className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-gray-900">{option.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                <p className="text-sm font-bold text-blue-600">{option.price}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-2xl">
          <p className="text-xs text-purple-800 text-center">
            <Camera className="w-4 h-4 inline mr-1" />
            <strong>Included:</strong> Professional photography & videography coverage for all Gold & Platinum tiers
          </p>
        </div>
      </motion.div>
    </div>
  );
}
