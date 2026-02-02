import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Info,
  TrendingUp,
  Award,
  Globe,
  Target,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS MAIN SCREEN (screen1.png)
// Complete Integration with Interest-to-Booking Flow
// Visual Design: Green/Calm Palette #2E7D32 / #81C784
// ========================================

interface SubCategory {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  treatmentTypes: string[];
  costRange: string;
  facilitiesCount: string;
  color: string;
  bgColor: string;
}

interface WellnessMainScreenProps {
  onNavigateToCategory: (categoryId: string) => void;
  onGetPersonalizedPlan: (categoryId: string) => void;
  onBack: () => void;
}

export function WellnessMainScreen({
  onNavigateToCategory,
  onGetPersonalizedPlan,
  onBack,
}: WellnessMainScreenProps) {
  const [activeTab, setActiveTab] = useState<'benefits' | 'recommendation'>('benefits');

  const subCategories: SubCategory[] = [
    {
      id: 'medical-tourism',
      emoji: '🏥',
      title: 'Medical Tourism',
      subtitle: 'World-class treatment + travel packages',
      treatmentTypes: ['Cardiac', 'Orthopedic', 'Dental', 'Cosmetic'],
      costRange: '₹50k-₹15L',
      facilitiesCount: '50+ hospitals',
      color: '#E91E63',
      bgColor: '#FCE4EC',
    },
    {
      id: 'ayurveda-panchakarma',
      emoji: '🌿',
      title: 'Ayurveda & Panchakarma',
      subtitle: 'Traditional detox & rejuvenation therapies',
      treatmentTypes: ['Vamana', 'Virechana', 'Basti', 'Nasya'],
      costRange: '₹20k-₹5L',
      facilitiesCount: '80+ centers',
      color: '#2E7D32',
      bgColor: '#E8F5E9',
    },
    {
      id: 'yoga-meditation',
      emoji: '🧘',
      title: 'Yoga & Meditation Retreats',
      subtitle: 'Holistic wellness through ancient practices',
      treatmentTypes: ['Hatha Yoga', 'Meditation', 'Pranayama', 'Mindfulness'],
      costRange: '₹15k-₹3L',
      facilitiesCount: '100+ retreats',
      color: '#FF9800',
      bgColor: '#FFF3E0',
    },
    {
      id: 'mental-health',
      emoji: '🧠',
      title: 'Mental Health & Wellness',
      subtitle: 'Psychiatric care & counseling with professional therapists',
      treatmentTypes: ['Therapy', 'Counseling', 'Rehabilitation', 'Self-care'],
      costRange: '₹10k-₹2L',
      facilitiesCount: '60+ centers',
      color: '#9C27B0',
      bgColor: '#F3E5F5',
    },
    {
      id: 'rehabilitation',
      emoji: '♿',
      title: 'Rehabilitation & Recovery',
      subtitle: 'Post-surgery recovery with physio & care',
      treatmentTypes: ['Physiotherapy', 'Occupational Therapy', 'Speech Therapy', 'Cardiac Rehab'],
      costRange: '₹25k-₹8L',
      facilitiesCount: '45+ facilities',
      color: '#2196F3',
      bgColor: '#E3F2FD',
    },
    {
      id: 'executive-wellness',
      emoji: '💼',
      title: 'Executive Wellness Packages',
      subtitle: 'Preventive care & burnout recovery for professionals',
      treatmentTypes: ['Health Checkup', 'Stress Management', 'Fitness Programs', 'Nutrition'],
      costRange: '₹30k-₹10L',
      facilitiesCount: '35+ centers',
      color: '#795548',
      bgColor: '#EFEBE9',
    },
  ];

  const packageFeatures = [
    {
      icon: '🎯',
      title: 'Expert Consultation',
      subtitle: 'Pre & post treatment guidance',
    },
    {
      icon: '🏨',
      title: 'Accommodation',
      subtitle: 'Quality stays near facility',
    },
    {
      icon: '🚑',
      title: 'Healthcare Facilities',
      subtitle: 'Premium facility access',
    },
    {
      icon: '🛫',
      title: 'Planning & Care',
      subtitle: 'Complete travel & medical logistics',
    },
    {
      icon: '🍽️',
      title: 'Language Assistance',
      subtitle: 'Multilingual support staff',
    },
    {
      icon: '🧳',
      title: 'Treatment + Follow-up',
      subtitle: 'Scheduled care path',
    },
    {
      icon: '🚨',
      title: 'Emergency Support',
      subtitle: 'Round-the-clock medical assistance',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="font-semibold text-base">Back</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Health & Wellness</h1>
            <div className="w-20" /> {/* Spacer */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Tagline */}
        <div className="text-center">
          <p className="text-base text-gray-600 leading-relaxed">
            World-class medical treatment, Ayurvedic healing, and holistic wellness combined with
            <br />
            comfortable stays & fully managed care
          </p>
        </div>

        {/* Why Choose India Section - Tabs */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Info className="h-6 w-6" />
              Why Choose India for Health Tourism?
            </h2>

            {/* Tab Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === 'benefits'
                    ? 'bg-white text-emerald-700 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                💰 40-70% Cost Savings
                <div className="text-xs opacity-90 mt-1">Compared to Western countries</div>
              </button>
              <button
                onClick={() => setActiveTab('recommendation')}
                className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === 'recommendation'
                    ? 'bg-white text-teal-700 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                🏅 Accredited Hospitals
                <div className="text-xs opacity-90 mt-1">JCI/NABH certified facilities</div>
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              {activeTab === 'benefits' && (
                <div className="grid md:grid-cols-3 gap-4 text-white">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">Experienced Specialists</span>
                    </div>
                    <p className="text-sm opacity-90">
                      World-renowned doctors with international qualifications
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5" />
                      <span className="font-semibold">Ancient + Modern</span>
                    </div>
                    <p className="text-sm opacity-90">
                      Unique blend of traditional Ayurveda and modern medicine
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5" />
                      <span className="font-semibold">English-Speaking</span>
                    </div>
                    <p className="text-sm opacity-90">
                      Easy communication with medical and support staff
                    </p>
                  </div>
                </div>
              )}
              {activeTab === 'recommendation' && (
                <div className="text-white">
                  <p className="text-base leading-relaxed mb-4">
                    India has{' '}
                    <strong className="text-yellow-300">1,000+ JCI/NABH accredited hospitals</strong>{' '}
                    offering world-class treatment at a fraction of the cost. Medical tourists save
                    40-70% on procedures while enjoying comprehensive care packages.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-2xl font-bold">500K+</div>
                      <div className="text-sm">Medical tourists annually</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3">
                      <div className="text-2xl font-bold">95%+</div>
                      <div className="text-sm">Patient satisfaction rate</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <Button className="w-full bg-white text-emerald-700 hover:bg-gray-50 py-6 rounded-xl text-base font-bold shadow-lg">
                📚 View Top Treatment Centers
              </Button>
              <Button className="w-full bg-emerald-700 text-white hover:bg-emerald-800 py-6 rounded-xl text-base font-bold shadow-lg">
                💚 Get Personalized Recommendation
              </Button>
            </div>
          </div>
        </div>

        {/* Choose Your Health Journey Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Health Journey</h2>

          {/* 6 Sub-Category Cards - 3x2 Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {subCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Icon Header with Color */}
                <div
                  className="p-6 flex items-center gap-4"
                  style={{ backgroundColor: category.bgColor }}
                >
                  <div className="text-5xl">{category.emoji}</div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Treatment Types */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                      • Treatment Types:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {category.treatmentTypes.map((type, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: category.bgColor,
                            color: category.color,
                          }}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-600">Cost in INR</p>
                      <p className="text-sm font-bold text-gray-900">
                        {category.costRange}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Facilities</p>
                      <p className="text-sm font-bold text-gray-900">
                        {category.facilitiesCount}
                      </p>
                    </div>
                  </div>

                  {/* DUAL BUTTONS - 16px spacing */}
                  <div className="space-y-3">
                    {/* Primary: View Centers & Book */}
                    <Button
                      onClick={() => onNavigateToCategory(category.id)}
                      className="w-full py-3 rounded-xl text-sm font-semibold shadow-md"
                      style={{
                        backgroundColor: category.color,
                        color: 'white',
                      }}
                    >
                      View Top Centers & Book →
                    </Button>

                    {/* NEW: Get Personalized Plan - 160px × 36px */}
                    <Button
                      onClick={() => onGetPersonalizedPlan(category.id)}
                      variant="outline"
                      className="w-full h-[36px] rounded-xl text-sm font-medium border-2"
                      style={{
                        borderColor: category.color,
                        color: category.color,
                      }}
                    >
                      <Target className="mr-2 h-4 w-4" />
                      🎯 Get Personalized Plan
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Medical Tourism Package Features */}
        <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-rose-600 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Medical Tourism Package Includes</h2>
          <p className="text-base mb-6 opacity-90">
            All-in-one care solutions when you book with us
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {packageFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="text-base font-bold mb-1">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ayurveda: 5000 Years of Healing Wisdom */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            🌿 Ayurveda: 5000 Years of Healing Wisdom
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">India-Exclusive Experiences</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• Panchakarma detox performed by certified Ayurvedic doctors</li>
                <li>• Traditional herbal therapies using ancient formulations</li>
                <li>• Yoga & meditation in authentic ashram settings</li>
                <li>• Personalized dosha assessment and diet plans</li>
                <li>• Access to Kerala's renowned Ayurveda lineages</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Certified Treatments</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• All centers AYUSH Ministry approved</li>
                <li>• Doctors trained in traditional Gurukul system</li>
                <li>• Organic, lab-tested herbal medicines</li>
                <li>• Post-treatment follow-up care included</li>
                <li>• Integration with modern diagnostic tools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Comparison Table */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              💰 Cost Comparison: India vs World
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/20">
                  <tr>
                    <th className="text-left p-4 text-white font-bold">Treatment Type</th>
                    <th className="text-right p-4 text-white font-bold">USA</th>
                    <th className="text-right p-4 text-white font-bold">UK</th>
                    <th className="text-right p-4 text-white font-bold">India</th>
                    <th className="text-right p-4 text-white font-bold">You Save</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {[
                    {
                      treatment: 'Heart Bypass Surgery',
                      usa: '₹75L',
                      uk: '₹60L',
                      india: '₹4-6L',
                      save: '90%',
                    },
                    {
                      treatment: 'Knee Replacement',
                      usa: '₹30L',
                      uk: '₹25L',
                      india: '₹2-3L',
                      save: '85%',
                    },
                    {
                      treatment: 'Dental Implants (Full)',
                      usa: '₹20L',
                      uk: '₹18L',
                      india: '₹1.5-2.5L',
                      save: '88%',
                    },
                    {
                      treatment: 'Cosmetic Surgery',
                      usa: '₹12L',
                      uk: '₹10L',
                      india: '₹1-2L',
                      save: '85%',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-white/10">
                      <td className="p-4">{row.treatment}</td>
                      <td className="text-right p-4">{row.usa}</td>
                      <td className="text-right p-4">{row.uk}</td>
                      <td className="text-right p-4 font-bold text-yellow-300">
                        {row.india}
                      </td>
                      <td className="text-right p-4 font-bold text-green-300">
                        {row.save}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-6 rounded-xl text-lg font-bold shadow-xl">
                🌟 NEW Treatments Alert: Add India to India International Queries
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">⭐</div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed mb-4">
                "I came to Kerala for a 21-day Panchakarma treatment for chronic back pain. Not only
                did the treatment work wonders, but the serene environment, Ayurvedic doctors, and
                the resort's hospitality made it an unforgettable healing journey. I returned home
                pain-free and rejuvenated!"
              </p>
              <div>
                <p className="font-bold text-lg">— Sarah M., Australia</p>
                <p className="text-sm opacity-80">Treated at Somatheeram Ayurveda Resort, Kerala</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-base font-semibold mb-2">
              📊 Real Patient Success Stories - Verified Reviews
            </p>
            <div className="flex items-center justify-center gap-8">
              <div>
                <p className="text-3xl font-bold">4.8/5</p>
                <p className="text-sm opacity-80">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10,000+</p>
                <p className="text-sm opacity-80">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold">95%+</p>
                <p className="text-sm opacity-80">Would Recommend</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Custom Combo Tour */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              🎨 Create Your Custom Combo Tour
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Combine treatment with sightseeing! Visit Taj Mahal, Kerala backwaters, or Goa beaches
              before/after your medical procedure. Our wellness + tourism packages are designed for
              complete healing and cultural immersion.
            </p>
            <Button className="bg-white text-purple-900 hover:bg-gray-100 py-6 px-12 rounded-xl text-lg font-bold shadow-xl">
              🌟 Build My Custom Health + Tourism Package
            </Button>
          </div>
        </div>

        {/* Bottom Floating Button */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-base font-bold shadow-2xl flex items-center gap-3">
            📞 Get Help
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
