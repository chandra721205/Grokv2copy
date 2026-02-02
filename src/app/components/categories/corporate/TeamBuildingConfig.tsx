import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  Zap,
  Heart,
  Mountain,
  Waves,
  TreePine,
  Lightbulb,
  Palette,
  Users as UsersIcon,
  Award,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface TeamBuildingConfigProps {
  formData: any;
  onUpdate: (field: string, value: any) => void;
}

export function TeamBuildingConfig({ formData, onUpdate }: TeamBuildingConfigProps) {
  const moods = [
    {
      id: 'adrenaline',
      name: 'High-Adrenaline',
      description: 'Rafting, Trekking, Rope Courses',
      icon: Zap,
      emoji: '⚡',
      gradient: 'from-orange-500 to-red-600',
      activities: ['White Water Rafting', 'Rock Climbing', 'Zipline Adventures', 'Obstacle Courses'],
    },
    {
      id: 'wellness',
      name: 'Wellness & Mindfulness',
      description: 'Yoga, Meditation, Spa',
      icon: Heart,
      emoji: '🧘',
      gradient: 'from-green-500 to-emerald-600',
      activities: ['Sunrise Yoga', 'Meditation Sessions', 'Spa Therapy', 'Nature Walks'],
    },
    {
      id: 'balanced',
      name: 'Balanced Mix',
      description: 'Best of both worlds',
      icon: TrendingUp,
      emoji: '⚖️',
      gradient: 'from-blue-500 to-purple-600',
      activities: ['Morning Yoga', 'Adventure Activities', 'Team Games', 'Evening Bonfire'],
    },
  ];

  const outdoorActivities = [
    { id: 'rafting', name: 'White Water Rafting', location: 'Rishikesh', icon: Waves },
    { id: 'trekking', name: 'Mountain Trekking', location: 'Himalayas, Coorg', icon: Mountain },
    { id: 'camping', name: 'Camping & Survival', location: 'Various', icon: TreePine },
  ];

  const indoorActivities = [
    { id: 'management', name: 'Management Games', icon: Lightbulb },
    { id: 'problem', name: 'Problem-Solving Challenges', icon: Lightbulb },
    { id: 'art', name: 'Art & Craft Workshops', icon: Palette },
  ];

  const facilitators = [
    {
      id: 'junior',
      name: 'Junior Facilitator',
      experience: '3-5 years',
      price: '₹25,000/day',
      features: ['Basic workshops', 'Team games', 'Activity coordination'],
    },
    {
      id: 'senior',
      name: 'Senior Facilitator',
      experience: '6-10 years',
      price: '₹45,000/day',
      features: ['Advanced workshops', 'Leadership training', 'Custom modules', 'Follow-up reports'],
      recommended: true,
    },
    {
      id: 'certified',
      name: 'Certified Coach',
      experience: '10+ years • ICF/EMCC certified',
      price: '₹75,000/day',
      features: ['Executive coaching', 'Psychometric assessments', '360° feedback', 'Long-term mentoring'],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Mood Selector - Large Image Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Select Program Focus</h3>

        <div className="space-y-4">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => onUpdate('programMood', mood.id)}
              className={`w-full overflow-hidden rounded-2xl border-3 transition-all ${
                formData.programMood === mood.id
                  ? 'border-blue-600 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className={`bg-gradient-to-r ${mood.gradient} p-6 flex items-center gap-4`}>
                <div className="text-5xl">{mood.emoji}</div>
                <div className="flex-1 text-left">
                  <h4 className="text-white font-bold text-lg mb-1">{mood.name}</h4>
                  <p className="text-white/90 text-sm mb-2">{mood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {mood.activities.slice(0, 3).map((activity, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white/20 rounded-full text-white">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Adventure Meter / Intensity Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">🎚️ Activity Intensity Level</h3>

        <div className="mb-6">
          <input
            type="range"
            min="1"
            max="10"
            value={formData.intensityLevel || 5}
            onChange={(e) => onUpdate('intensityLevel', parseInt(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #fbbf24 50%, #ef4444 100%)`,
            }}
          />
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-600">Relaxed</span>
            <span className="text-sm font-bold text-gray-900">
              Level {formData.intensityLevel || 5}/10
            </span>
            <span className="text-xs text-gray-600">Extreme</span>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
          <p className="text-xs text-blue-800">
            <strong>Recommended Balance:</strong> 60% Activity / 40% Downtime for optimal team bonding
          </p>
        </div>
      </motion.div>

      {/* Activity Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">🏔️ Select Activities</h3>

        {/* Outdoor Activities */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">OUTDOOR:</p>
          <div className="space-y-2">
            {outdoorActivities.map((activity) => (
              <label
                key={activity.id}
                className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-green-300 transition-all"
              >
                <input
                  type="checkbox"
                  checked={formData.selectedActivities?.includes(activity.id) || false}
                  onChange={(e) => {
                    const current = formData.selectedActivities || [];
                    const updated = e.target.checked
                      ? [...current, activity.id]
                      : current.filter((id: string) => id !== activity.id);
                    onUpdate('selectedActivities', updated);
                  }}
                  className="w-5 h-5 text-green-600 rounded"
                />
                <activity.icon className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{activity.name}</p>
                  <p className="text-xs text-gray-600">{activity.location}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Indoor Activities */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-3">INDOOR:</p>
          <div className="space-y-2">
            {indoorActivities.map((activity) => (
              <label
                key={activity.id}
                className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-all"
              >
                <input
                  type="checkbox"
                  checked={formData.selectedActivities?.includes(activity.id) || false}
                  onChange={(e) => {
                    const current = formData.selectedActivities || [];
                    const updated = e.target.checked
                      ? [...current, activity.id]
                      : current.filter((id: string) => id !== activity.id);
                    onUpdate('selectedActivities', updated);
                  }}
                  className="w-5 h-5 text-blue-600 rounded"
                />
                <activity.icon className="w-5 h-5 text-blue-600" />
                <p className="font-semibold text-gray-900 text-sm">{activity.name}</p>
              </label>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Facilitator Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">👨‍🏫 Select Facilitator Level</h3>

        <div className="space-y-3">
          {facilitators.map((facilitator) => (
            <button
              key={facilitator.id}
              onClick={() => onUpdate('facilitatorLevel', facilitator.id)}
              className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                formData.facilitatorLevel === facilitator.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-bold text-gray-900">{facilitator.name}</h4>
                  <p className="text-xs text-gray-600">{facilitator.experience}</p>
                </div>
                <div className="flex items-center gap-2">
                  {facilitator.recommended && (
                    <Badge className="bg-green-100 text-green-700 text-xs">Recommended</Badge>
                  )}
                  <p className="text-sm font-bold text-purple-600">{facilitator.price}</p>
                </div>
              </div>

              <ul className="space-y-1">
                {facilitator.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Psychometric Assessment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-3xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Team Assessment Tools</h3>

        <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-2xl cursor-pointer">
          <input
            type="checkbox"
            checked={formData.includePsychometrics || false}
            onChange={(e) => onUpdate('includePsychometrics', e.target.checked)}
            className="mt-1 w-5 h-5 text-blue-600 rounded"
          />
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-2">Pre/Post Event Assessment</h4>
            <p className="text-sm text-gray-600 mb-3">
              Measure improvement in team dynamics before and after the retreat
            </p>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="p-2 bg-green-50 rounded-lg text-center">
                <p className="text-xs text-green-700 font-semibold">Trust Score</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg text-center">
                <p className="text-xs text-blue-700 font-semibold">Communication</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg text-center">
                <p className="text-xs text-purple-700 font-semibold">Collaboration</p>
              </div>
            </div>
            <p className="text-sm font-bold text-blue-600">+₹15,000</p>
          </div>
        </label>
      </motion.div>

      {/* Grok Tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-6 shadow-xl"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-2">💡 Grok Expert Tips</h3>
            <div className="space-y-2 text-white/90 text-sm">
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Best Start Time:</strong> Friday evening (allows 2-day program without impacting work week)</span>
              </p>
              <p className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Recommended Balance:</strong> 60% Activity / 40% Downtime for optimal team bonding</span>
              </p>
              <p className="flex items-start gap-2">
                <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Impact Metrics:</strong> Teams show +35% improvement in collaboration scores post-retreat</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
