import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  FileText,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Award,
  Target,
  BarChart3,
  Building2,
} from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryDetailProps {
  categoryId: number;
  categoryTitle: string;
  categoryEmoji: string;
  categoryGradient: string;
  onBack: () => void;
  onRequestQuote: () => void;
  onScheduleCall: () => void;
}

// Category-specific data
const categoryDetailsData: Record<number, {
  useCase: string;
  description: string;
  included: string[];
  specialFeature?: {
    icon: any;
    title: string;
    items: string[];
  };
}> = {
  1: { // Conferences & Exhibitions
    useCase: 'Host large-scale conferences, summits, and exhibitions for 100-5,000 delegates',
    description: 'From product launches to industry expos, we handle venue, technology, registration, and hospitality—so you can focus on content and networking.',
    included: [
      'Conference halls (50-5,000 capacity)',
      'AV & hybrid streaming setup',
      'Delegate registration & badge system',
      'F&B (breakfast, lunch, dinner, breaks)',
      'Exhibitor coordination (if applicable)',
      'On-site event management',
    ],
    specialFeature: {
      icon: Zap,
      title: 'Tech Capabilities',
      items: [
        '4K UHD screens & wireless mics',
        'Live streaming (Hybrid events)',
        'Virtual breakout rooms',
        'Real-time Q&A integration',
      ],
    },
  },
  2: { // Board Meetings & AGMs
    useCase: 'Secure executive boardrooms for 10-50 participants with privacy protocols',
    description: 'Designed for high-stakes meetings where confidentiality and professionalism matter. All venues meet privacy standards and provide executive-grade services.',
    included: [
      'Premium boardroom (10-50 capacity)',
      'Video conferencing & presentation tech',
      'Secretarial support (on request)',
      'Privacy & NDA protocols',
      'Executive catering (coffee, tea, meals)',
      'Document handling & disposal',
    ],
    specialFeature: {
      icon: Shield,
      title: 'Privacy Assurance',
      items: [
        'Biometric access control',
        'Soundproofed rooms',
        'Staff NDA enforcement',
        'Secure document disposal',
      ],
    },
  },
  3: { // Incentive Trips & Rewards
    useCase: 'Reward top performers with memorable experiences (2-5 day trips)',
    description: 'Motivate and retain talent with aspirational getaways. Choose from beach, heritage, or international destinations with premium stays and VIP experiences.',
    included: [
      'Luxury hotel/resort accommodation',
      'Fine dining & gourmet meals',
      '3-5 VIP experiences per trip',
      'Recognition ceremony setup',
      'Professional photography & videography',
      'On-ground travel coordination',
    ],
    specialFeature: {
      icon: Award,
      title: 'ROI Impact',
      items: [
        'Sales boost: +20-30% (6 months)',
        'Retention rate: 85%+',
        'Employee satisfaction: +40%',
        'Measurable performance gains',
      ],
    },
  },
  4: { // Team Building & Retreats
    useCase: 'Build stronger teams through shared experiences (1-3 day offsites)',
    description: 'Blend adventure, workshops, and relaxation to foster collaboration and leadership. Certified facilitators guide activities tailored to your team culture.',
    included: [
      'Facilitators (certified coaches)',
      'Workshop venue & materials',
      'Team activities (indoor/outdoor)',
      'Meals & accommodation',
      'Transport & logistics',
      'Pre/post assessment reports',
    ],
    specialFeature: {
      icon: Target,
      title: 'Outcome-Focused',
      items: [
        'Trust-building exercises',
        'Leadership development',
        'Communication workshops',
        '+35% collaboration improvement',
      ],
    },
  },
  5: { // Trade Shows & Exhibitions
    useCase: 'Showcase products and capture B2B leads at industry trade shows',
    description: 'We design, build, and manage your exhibition stall—from 3x3m startups to 6x6m corporate booths. Includes lead-gen tech and post-event analytics.',
    included: [
      'Stall design & construction',
      'Branding & marketing collateral',
      'Product display setup',
      'Lead capture technology (RFID/QR)',
      'Staffing & on-site support',
      'Post-event analytics report',
    ],
    specialFeature: {
      icon: BarChart3,
      title: 'Lead Generation',
      items: [
        'Smart RFID badges',
        'Heatmap analytics',
        'CRM integration',
        'Real-time lead tracking',
      ],
    },
  },
  6: { // Corporate Training & Workshops
    useCase: 'Upskill teams with expert-led training programs (1-5 days)',
    description: 'From leadership to AI literacy, we deliver 70% practical, 30% theory programs with certification options from PMI, Microsoft, and AWS partners.',
    included: [
      'Expert trainers (certified)',
      'Training materials & resources',
      'Assessment & certification',
      'Meals & venue',
      'Digital LMS access (90 days)',
      'Follow-up refresher sessions',
    ],
    specialFeature: {
      icon: TrendingUp,
      title: 'Long-Term Value',
      items: [
        'Day 1: Training program',
        'Day 30: Refresher session',
        'Day 60: Practice review',
        'Day 90: Retention check',
      ],
    },
  },
};

export function CorporateCategoryDetail({
  categoryId,
  categoryTitle,
  categoryEmoji,
  categoryGradient,
  onBack,
  onRequestQuote,
  onScheduleCall,
}: CategoryDetailProps) {
  const details = categoryDetailsData[categoryId];

  if (!details) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${categoryGradient} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl">{categoryEmoji}</span>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">{categoryTitle}</h1>
            <p className="text-white/80 text-sm">Professional event planning</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4 pb-8 space-y-6">
        {/* Use Case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3">{details.useCase}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{details.description}</p>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
          <ul className="space-y-3">
            {details.included.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Special Feature (if applicable) */}
        {details.specialFeature && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 shadow-md border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <details.specialFeature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{details.specialFeature.title}</h3>
            </div>
            <ul className="space-y-2">
              {details.specialFeature.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-900 mb-1">Indicative Pricing</p>
              <p className="text-xs text-amber-800">
                Final cost varies by city, season, group size, and customization. Request a quote for accurate pricing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3-Step Explainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-5">How It Works</h3>
          
          <div className="space-y-5">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Share Objectives & Budget</h4>
                <p className="text-sm text-gray-600">
                  Tell us your goals, group size, dates, and budget. We'll align our proposal to your needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Receive Curated Proposal</h4>
                <p className="text-sm text-gray-600">
                  We'll send a detailed proposal with venue options, inclusions, and cost breakdown within 48 hours.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Confirm & Book</h4>
                <p className="text-sm text-gray-600">
                  Review, approve, and confirm. We handle all logistics end-to-end until event day.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <Button
            onClick={onRequestQuote}
            className="w-full h-12 rounded-full font-bold text-base bg-green-600 hover:bg-green-700"
          >
            <FileText className="w-5 h-5 mr-2" />
            Request Quote
          </Button>

          <Button
            onClick={onScheduleCall}
            variant="outline"
            className="w-full h-12 rounded-full font-semibold text-base border-2 border-gray-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Schedule Strategy Call
          </Button>
        </motion.div>

        {/* Helper Text */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Tell us a few details and we'll design a corporate-ready proposal for you.
          </p>
        </div>
      </div>
    </div>
  );
}
