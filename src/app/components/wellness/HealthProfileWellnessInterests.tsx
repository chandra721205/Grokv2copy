import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Bone,
  Leaf,
  Brain,
  Activity,
  UserCheck,
  Stethoscope,
  Sparkles,
  ChevronRight,
  MapPin,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// HEALTH PROFILE: WELLNESS INTERESTS SECTION
// Add to bottom of Health Profile form
// ========================================

interface WellnessInterest {
  id: string;
  label: string;
  icon: string;
}

const wellnessInterests: WellnessInterest[] = [
  { id: 'cardiac-care', label: 'Cardiac Care', icon: '❤️' },
  { id: 'joint-replacement', label: 'Joint Replacement', icon: '🦴' },
  { id: 'panchakarma-detox', label: 'Panchakarma Detox', icon: '🌿' },
  { id: 'stress-relief', label: 'Stress Relief', icon: '😌' },
  { id: 'yoga-retreats', label: 'Yoga Retreats', icon: '🧘' },
  { id: 'mental-wellness', label: 'Mental Wellness', icon: '🧠' },
  { id: 'post-surgery-recovery', label: 'Post-Surgery Recovery', icon: '🩹' },
  { id: 'executive-checkup', label: 'Executive Check-up', icon: '💼' },
];

interface RecommendedDestination {
  name: string;
  icon: string;
  reason: string;
}

interface HealthProfileWellnessInterestsProps {
  selectedInterests: string[];
  onInterestsChange: (interests: string[]) => void;
  onBrowseCuratedTrips: () => void;
  userHealthProfile?: {
    age?: number;
    conditions?: string[];
  };
}

export function HealthProfileWellnessInterests({
  selectedInterests,
  onInterestsChange,
  onBrowseCuratedTrips,
  userHealthProfile,
}: HealthProfileWellnessInterestsProps) {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const toggleInterest = (interestId: string) => {
    if (selectedInterests.includes(interestId)) {
      onInterestsChange(selectedInterests.filter((id) => id !== interestId));
    } else {
      onInterestsChange([...selectedInterests, interestId]);
    }
  };

  // Generate recommendations based on profile
  const getRecommendations = (): RecommendedDestination[] => {
    const recommendations: RecommendedDestination[] = [];

    if (userHealthProfile?.conditions?.includes('cardiac')) {
      recommendations.push(
        { name: 'Ooty', icon: '🏔️', reason: 'Cardiac-friendly high-altitude destination' },
        { name: 'Coorg', icon: '🌳', reason: 'Peaceful environment for heart recovery' }
      );
    }

    if (userHealthProfile?.age && userHealthProfile.age >= 65) {
      recommendations.push({
        name: 'Senior-accessible Ayurveda centers',
        icon: '♿',
        reason: 'Ground-floor rooms, dedicated senior care',
      });
    }

    if (selectedInterests.includes('stress-relief') || selectedInterests.includes('mental-wellness')) {
      recommendations.push({
        name: 'Rishikesh Wellness Retreats',
        icon: '🧘',
        reason: 'Yoga, meditation & stress relief programs',
      });
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="space-y-8">
      {/* ========================================
          WELLNESS INTERESTS SECTION
      ======================================== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-3 border-emerald-300 rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          Wellness Interests
        </h3>

        <p className="text-lg text-gray-700 mb-6">
          Select treatments you're considering:
          <span className="block text-base text-gray-600 mt-1">
            This helps us prioritize relevant providers
          </span>
        </p>

        {/* Interest Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {wellnessInterests.map((interest) => (
            <motion.label
              key={interest.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 cursor-pointer rounded-xl p-5 border-3 transition-all ${
                selectedInterests.includes(interest.id)
                  ? 'bg-emerald-100 border-emerald-500 shadow-lg'
                  : 'bg-white border-emerald-200 hover:border-emerald-400'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedInterests.includes(interest.id)}
                onChange={() => toggleInterest(interest.id)}
                className="w-7 h-7 accent-emerald-600 cursor-pointer flex-shrink-0"
              />
              <span className="text-3xl">{interest.icon}</span>
              <span className="text-lg font-bold text-gray-900 flex-1">
                {interest.label}
              </span>
            </motion.label>
          ))}
        </div>

        {/* Show Recommendations Button */}
        {selectedInterests.length > 0 && (
          <Button
            onClick={() => setShowRecommendations(!showRecommendations)}
            variant="outline"
            className="w-full mt-6 border-3 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-5 rounded-xl text-lg font-bold"
          >
            <Sparkles className="mr-3 h-6 w-6" />
            {showRecommendations ? 'Hide' : 'Show'} Personalized Recommendations
          </Button>
        )}
      </div>

      {/* ========================================
          RECOMMENDATIONS SECTION
      ======================================== */}
      {showRecommendations && recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 border-3 border-blue-300 rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <MapPin className="h-8 w-8 text-blue-600" />
            Based on your profile, we recommend:
          </h3>

          <div className="space-y-4 mb-6">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border-2 border-blue-200 flex items-center gap-4"
              >
                <div className="text-4xl">{rec.icon}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{rec.name}</h4>
                  <p className="text-base text-gray-600">{rec.reason}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={onBrowseCuratedTrips}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-6 rounded-xl text-xl font-bold shadow-lg"
          >
            <Sparkles className="mr-3 h-6 w-6" />
            Browse Curated Wellness Trips
            <ChevronRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
