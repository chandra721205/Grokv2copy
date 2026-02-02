import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  FileText,
  Users,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Award,
  Target,
  BarChart3,
  MapPin,
  Star,
  Sparkles,
  Calculator,
  Plus,
  Minus,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

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
  packages: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  venues: {
    name: string;
    location: string;
    capacity: string;
    price: string;
    rating: number;
    image: string;
  }[];
  grokTips: string[];
  basePrice: number;
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
    packages: [
      {
        name: 'Essential',
        price: '₹2,500/delegate',
        features: ['Standard AV setup', 'Basic registration', '3 meals/day', 'On-site coordinator'],
      },
      {
        name: 'Professional',
        price: '₹4,000/delegate',
        features: ['Premium AV & streaming', 'Smart registration (RFID)', 'Gourmet meals', 'Dedicated team', 'Photography'],
        popular: true,
      },
      {
        name: 'Premium',
        price: '₹6,500/delegate',
        features: ['4K hybrid setup', 'AI matchmaking', 'VIP dining', 'Full production crew', 'Post-event analytics'],
      },
    ],
    venues: [
      { name: '[Admin: Convention Center A]', location: '[Admin: Metro City]', capacity: '2,000 pax', price: '₹3L/day', rating: 4.8, image: 'conference' },
      { name: '[Admin: Hotel Conference Hall B]', location: '[Admin: Metro City]', capacity: '500 pax', price: '₹1.5L/day', rating: 4.6, image: 'hotel' },
      { name: '[Admin: Exhibition Ground C]', location: '[Admin: Business District]', capacity: '5,000 pax', price: '₹8L/day', rating: 4.7, image: 'exhibition' },
    ],
    grokTips: [
      'Book 6 months ahead for 25% savings on peak season venues',
      'Hybrid setups increase reach by 40% with minimal extra cost',
      'Off-season (Apr-Jun) bookings save 30-50% on accommodation',
    ],
    basePrice: 2500,
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
    packages: [
      {
        name: 'Essential',
        price: '₹50,000/day',
        features: ['Basic boardroom', 'Standard catering', 'Video conferencing', 'Privacy assured'],
      },
      {
        name: 'Professional',
        price: '₹1,00,000/day',
        features: ['Premium boardroom', 'Executive catering', 'Secretarial support', 'Biometric access', 'NDA protocols'],
        popular: true,
      },
      {
        name: 'Premium',
        price: '₹2,00,000/day',
        features: ['Luxury boardroom', 'VIP catering', 'Full secretarial team', 'Maximum security', 'Private entry/exit'],
      },
    ],
    venues: [
      { name: '[Admin: Executive Suite A]', location: '[Admin: Business District]', capacity: '20 pax', price: '₹80K/day', rating: 4.9, image: 'boardroom' },
      { name: '[Admin: Corporate Hub B]', location: '[Admin: CBD]', capacity: '50 pax', price: '₹1.5L/day', rating: 4.7, image: 'corporate' },
    ],
    grokTips: [
      'Book 30 days in advance for priority access to premium boardrooms',
      'Half-day bookings (4 hours) available at 60% of full-day rate',
      'Secretarial AI can reduce documentation time by 70%',
    ],
    basePrice: 50000,
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
    packages: [
      {
        name: 'Silver',
        price: '₹15,000/person',
        features: ['4-star accommodation', 'Breakfast included', '2 VIP experiences', 'Group transport', 'Award ceremony'],
      },
      {
        name: 'Gold',
        price: '₹30,000/person',
        features: ['5-star resort', 'All meals', '4 VIP experiences', 'Spa access', 'Gala dinner', 'Videography'],
        popular: true,
      },
      {
        name: 'Platinum',
        price: '₹60,000/person',
        features: ['Luxury resort', 'Premium dining', 'Unlimited experiences', 'Private jets (group)', 'Full production'],
      },
    ],
    venues: [
      { name: '[Admin: Beach Resort A]', location: '[Admin: Coastal Destination]', capacity: '100 pax', price: '₹25K/person', rating: 4.8, image: 'beach' },
      { name: '[Admin: Heritage Palace B]', location: '[Admin: Royal City]', capacity: '80 pax', price: '₹35K/person', rating: 4.9, image: 'heritage' },
      { name: '[Admin: International Resort C]', location: '[Admin: International]', capacity: '150 pax', price: '₹55K/person', rating: 4.7, image: 'international' },
    ],
    grokTips: [
      'Incentive trips deliver 4x ROI through increased sales performance',
      'Include spouse programs to boost participation by 35%',
      'Q1 and Q4 are best seasons for beach destinations',
    ],
    basePrice: 15000,
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
    packages: [
      {
        name: 'Essential',
        price: '₹3,500/person',
        features: ['1-day offsite', 'Basic activities', '2 meals', 'Facilitator', 'Materials'],
      },
      {
        name: 'Professional',
        price: '₹6,500/person',
        features: ['2-day retreat', 'Adventure + workshops', 'Accommodation', 'All meals', 'Certified coach', 'Assessment'],
        popular: true,
      },
      {
        name: 'Premium',
        price: '₹12,000/person',
        features: ['3-day immersive', 'Multi-activity', 'Premium resort', 'Expert facilitators', 'Personalized coaching'],
      },
    ],
    venues: [
      { name: '[Admin: Adventure Camp A]', location: '[Admin: Hill Station]', capacity: '60 pax', price: '₹5K/person', rating: 4.7, image: 'adventure' },
      { name: '[Admin: Wellness Retreat B]', location: '[Admin: Nature Resort]', capacity: '80 pax', price: '₹7K/person', rating: 4.8, image: 'wellness' },
    ],
    grokTips: [
      'Friday evening starts maximize participation (leave work early)',
      'Optimal balance: 60% activities, 40% downtime for reflection',
      'Teams of 15-30 show highest engagement in group exercises',
    ],
    basePrice: 3500,
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
    packages: [
      {
        name: 'Startup (3x3m)',
        price: '₹1,50,000',
        features: ['Basic stall design', 'Standard branding', 'QR lead capture', '2 staff', 'Setup/teardown'],
      },
      {
        name: 'SME (3x6m)',
        price: '₹3,50,000',
        features: ['Premium design', 'Advanced branding', 'RFID badges', 'Product demos', '4 staff', 'Analytics'],
        popular: true,
      },
      {
        name: 'Corporate (6x6m)',
        price: '₹8,00,000',
        features: ['Custom 3D design', 'Full production', 'Tech integration', 'VIP lounge', '8 staff', 'Full analytics'],
      },
    ],
    venues: [
      { name: '[Admin: Exhibition Center A]', location: '[Admin: Metro City]', capacity: '500 stalls', price: '₹2L/stall', rating: 4.6, image: 'exhibition' },
      { name: '[Admin: Convention Hall B]', location: '[Admin: Business Hub]', capacity: '200 stalls', price: '₹1.5L/stall', rating: 4.5, image: 'convention' },
    ],
    grokTips: [
      'Premium zone stalls get 40% more footfall than standard zones',
      'Lead capture ROI: Average 200-500 qualified leads per 3-day event',
      'Book 3 months ahead for prime floor locations',
    ],
    basePrice: 150000,
  },
  6: { // Corporate Training
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
    packages: [
      {
        name: 'Essential',
        price: '₹5,000/person',
        features: ['1-day workshop', 'Basic materials', 'Certificate', 'Meals', 'Digital access (30 days)'],
      },
      {
        name: 'Professional',
        price: '₹10,000/person',
        features: ['2-3 day program', 'Premium materials', 'Certification exam', 'All meals', 'LMS access (90 days)', 'Refresher'],
        popular: true,
      },
      {
        name: 'Premium',
        price: '₹18,000/person',
        features: ['5-day intensive', 'Expert trainers', 'Premium certification', 'Accommodation', 'Lifetime LMS', 'Coaching'],
      },
    ],
    venues: [
      { name: '[Admin: Training Center A]', location: '[Admin: IT Hub]', capacity: '50 pax', price: '₹8K/person', rating: 4.7, image: 'training' },
      { name: '[Admin: Corporate Campus B]', location: '[Admin: Business Park]', capacity: '100 pax', price: '₹12K/person', rating: 4.8, image: 'campus' },
    ],
    grokTips: [
      'Certification programs show 85% skill retention vs 40% for non-certified',
      'Best time: Q2 (Apr-Jun) for lower venue costs and higher attendance',
      '90-day follow-up improves long-term adoption by 60%',
    ],
    basePrice: 5000,
  },
};

export function CorporateCategoryDetailEnhanced({
  categoryId,
  categoryTitle,
  categoryEmoji,
  categoryGradient,
  onBack,
  onRequestQuote,
  onScheduleCall,
}: CategoryDetailProps) {
  const details = categoryDetailsData[categoryId];
  const [attendees, setAttendees] = useState(50);
  const [durationDays, setDurationDays] = useState(2);
  const [venueIndex, setVenueIndex] = useState(0);
  const [grokQuestion, setGrokQuestion] = useState('');

  if (!details) return null;

  const estimatedCost = details.basePrice * attendees * durationDays;

  const handleVenuePrev = () => {
    setVenueIndex((prev) => (prev === 0 ? details.venues.length - 1 : prev - 1));
  };

  const handleVenueNext = () => {
    setVenueIndex((prev) => (prev === details.venues.length - 1 ? 0 : prev + 1));
  };

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

        {/* A. QUICK CALCULATOR WIDGET */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Estimate Your Budget</h3>
          </div>

          <div className="space-y-4">
            {/* Attendees Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Attendees
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAttendees(Math.max(10, attendees - 10))}
                  className="w-10 h-10 bg-white rounded-xl border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <Minus className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex-1 text-center">
                  <span className="text-3xl font-bold text-gray-900">{attendees}</span>
                </div>
                <button
                  onClick={() => setAttendees(attendees + 10)}
                  className="w-10 h-10 bg-white rounded-xl border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Duration Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Event Duration (Days)
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                  className="w-10 h-10 bg-white rounded-xl border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <Minus className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex-1 text-center">
                  <span className="text-3xl font-bold text-gray-900">{durationDays}</span>
                </div>
                <button
                  onClick={() => setDurationDays(durationDays + 1)}
                  className="w-10 h-10 bg-white rounded-xl border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Estimated Cost Output */}
            <div className="pt-4 border-t-2 border-green-200">
              <p className="text-sm text-gray-600 mb-2">Estimated Cost:</p>
              <p className="text-3xl font-bold text-green-600">
                ₹{estimatedCost.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Helper Text */}
            <p className="text-xs text-gray-600 pt-2">
              This is a preliminary estimate. Final pricing includes venue, catering, AV, and logistics.
            </p>
          </div>
        </motion.div>

        {/* B. COMPARE PACKAGES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Your Service Tier</h3>
          
          <div className="space-y-3">
            {details.packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  pkg.popular
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-base text-gray-900">{pkg.name}</h4>
                    <p className="text-sm text-gray-600">{pkg.price}</p>
                  </div>
                  {pkg.popular && (
                    <Badge className="bg-green-600 text-white text-xs">
                      Most Popular
                    </Badge>
                  )}
                </div>
                
                <ul className="space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => {
                    toast.success(`Selected ${pkg.name} package`);
                    onRequestQuote();
                  }}
                  className={`w-full h-10 rounded-full font-semibold text-sm ${
                    pkg.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Select This Tier
                </Button>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Upgrade to Premium for dedicated planning, premium venues, and advanced tech.
          </p>
        </motion.div>

        {/* C. KEY VENUES / DESTINATIONS CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Choices</h3>

          {details.venues.length > 0 ? (
            <div className="relative">
              {/* Venue Card */}
              <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 mb-1">
                      {details.venues[venueIndex].name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                      <MapPin className="w-3 h-3" />
                      {details.venues[venueIndex].location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                    <span className="text-sm font-bold text-yellow-900">
                      {details.venues[venueIndex].rating}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-700">{details.venues[venueIndex].capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-bold text-green-600">{details.venues[venueIndex].price}</span>
                  </div>
                </div>

                <Button
                  onClick={() => toast.success('Opening venue details...')}
                  variant="outline"
                  className="w-full h-9 rounded-full font-semibold text-sm border-2"
                >
                  View Details
                </Button>
              </div>

              {/* Navigation Arrows */}
              {details.venues.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  <button
                    onClick={handleVenuePrev}
                    className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <span className="text-xs text-gray-500">
                    {venueIndex + 1} / {details.venues.length}
                  </span>
                  <button
                    onClick={handleVenueNext}
                    className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">
              Loading recommendations...
            </p>
          )}
        </motion.div>

        {/* D. AI RECOMMENDATIONS PANEL (Grok AI) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-6 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">Smart Suggestions from Grok AI</h3>
          </div>

          {/* Tips */}
          <div className="space-y-3 mb-4">
            {details.grokTips.map((tip, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                <p className="text-sm text-white/90">{tip}</p>
              </div>
            ))}
          </div>

          {/* Ask Grok */}
          <div className="relative">
            <input
              type="text"
              placeholder="Ask Grok a question about your event..."
              value={grokQuestion}
              onChange={(e) => setGrokQuestion(e.target.value)}
              className="w-full h-12 pl-4 pr-12 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <button
              onClick={() => {
                if (grokQuestion.trim()) {
                  toast.success('Grok is analyzing your question...');
                  setGrokQuestion('');
                }
              }}
              className="absolute right-1 top-1 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          <Button
            onClick={() => toast.success('Opening Grok insights...')}
            className="w-full mt-4 bg-white text-purple-600 hover:bg-gray-100 rounded-full h-11 font-semibold"
          >
            Get More Insights
          </Button>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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
            transition={{ delay: 0.6 }}
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

        {/* E. NEXT STEPS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-6 shadow-xl"
        >
          <h3 className="text-white font-bold text-xl mb-4 text-center">Ready to Plan?</h3>
          
          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <p className="text-white/90 text-sm pt-1">Submit your requirements</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <p className="text-white/90 text-sm pt-1">Get a custom proposal</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <p className="text-white/90 text-sm pt-1">Schedule a call with an expert</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={onRequestQuote}
              className="w-full h-12 bg-white text-green-600 hover:bg-gray-100 rounded-full font-bold text-base"
            >
              <FileText className="w-5 h-5 mr-2" />
              Submit Requirements
            </Button>

            <Button
              onClick={onScheduleCall}
              variant="outline"
              className="w-full h-12 bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 rounded-full font-semibold text-base backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call Now
            </Button>
          </div>

          <p className="text-white/80 text-xs text-center mt-4">
            Get a detailed quote in 24 hours.
          </p>
        </motion.div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
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
      </div>
    </div>
  );
}
