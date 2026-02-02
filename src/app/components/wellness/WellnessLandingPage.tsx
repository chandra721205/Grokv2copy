import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Leaf,
  Flower2,
  Brain,
  Activity,
  Briefcase,
  ChevronRight,
  Info,
} from 'lucide-react';

// ========================================
// WELLNESS LANDING PAGE - 6 SUB-CATEGORIES
// 2-Column Grid with Senior-Friendly Design
// ========================================

interface SubCategory {
  id: string;
  title: string;
  focus: string;
  icon: React.ReactNode;
  emoji: string;
  gradient: string;
}

interface WellnessLandingPageProps {
  onSelectCategory: (categoryId: string) => void;
}

export function WellnessLandingPage({ onSelectCategory }: WellnessLandingPageProps) {
  const subCategories: SubCategory[] = [
    {
      id: 'medical-tourism',
      title: 'Medical Tourism',
      focus: 'Surgeries, Dental, Cardiac',
      icon: <Heart className="h-16 w-16" />,
      emoji: '🏥',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 'ayurveda-panchakarma',
      title: 'Ayurveda & Panchakarma',
      focus: 'Detox, Natural Healing',
      icon: <Leaf className="h-16 w-16" />,
      emoji: '🌿',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'yoga-meditation',
      title: 'Yoga & Meditation Retreats',
      focus: 'Mindfulness, Stress Relief',
      icon: <Flower2 className="h-16 w-16" />,
      emoji: '🧘',
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      id: 'mental-health',
      title: 'Mental Health & Wellness',
      focus: 'Therapy, Counseling',
      icon: <Brain className="h-16 w-16" />,
      emoji: '🧠',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'rehabilitation',
      title: 'Rehabilitation & Recovery',
      focus: 'Post-Surgery, Physio, Mobility',
      icon: <Activity className="h-16 w-16" />,
      emoji: '♿',
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      id: 'executive-wellness',
      title: 'Executive Wellness Packages',
      focus: 'Preventive Care, Burnout Recovery',
      icon: <Briefcase className="h-16 w-16" />,
      emoji: '💼',
      gradient: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-gray-700 mb-6 hover:text-gray-900 text-lg">
            <ChevronRight className="rotate-180 h-6 w-6" />
            <span className="font-semibold">Back</span>
          </button>

          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Health & Wellness Tourism
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Expert-curated wellness journeys combining world-class treatment, 
              traditional healing, and comprehensive senior care
            </p>
          </div>

          {/* Info Banner - Senior-Friendly */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white mb-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Info className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-3">How It Works</h2>
                <div className="space-y-2 text-xl leading-relaxed">
                  <p>✓ Browse treatments and centers in your preferred category</p>
                  <p>✓ Submit a custom request with your specific needs</p>
                  <p>✓ Our specialists prepare a personalized quote within 24 hours</p>
                  <p>✓ Review detailed itinerary, pricing, and senior care options</p>
                  <p>✓ Accept and book with complete confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Grid - Senior-Friendly Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {subCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectCategory(category.id)}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-left"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-8`}>
                <div className="flex items-center gap-6">
                  {/* Large Emoji Icon */}
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl">
                    {category.emoji}
                  </div>
                  {/* Lucide Icon (High Contrast) */}
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title - Extra Large for Seniors */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {category.title}
                </h3>

                {/* Focus Description - Large, High Contrast */}
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Focus: <span className="font-semibold">{category.focus}</span>
                </p>

                {/* Call to Action */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-emerald-700">
                    View Treatments →
                  </span>
                  <ChevronRight className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Label Below Grid - Senior-Friendly */}
        <div className="bg-teal-100 border-2 border-teal-400 rounded-2xl p-6 text-center">
          <p className="text-2xl font-semibold text-gray-900">
            👆 Select a category to view treatments
          </p>
          <p className="text-lg text-gray-700 mt-2">
            All services include personalized consultation and senior care options
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Customized Care',
              desc: 'Every package tailored to your medical and mobility needs',
            },
            {
              icon: '👨‍⚕️',
              title: 'Expert Verification',
              desc: 'All facilities verified by medical professionals',
            },
            {
              icon: '🛡️',
              title: 'Senior Safety',
              desc: '24/7 support with wheelchair access and ground floor options',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
