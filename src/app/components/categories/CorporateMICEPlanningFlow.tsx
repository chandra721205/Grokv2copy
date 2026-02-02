import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import {
  ArrowLeft,
  Building2,
  Users,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Download,
  Share2,
  FileText,
  Briefcase,
  Target,
  TrendingUp,
  Clock,
  Globe,
  Youtube,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { ConferencesConfig } from '@/app/components/categories/corporate/ConferencesConfig';
import { BoardMeetingsConfig } from '@/app/components/categories/corporate/BoardMeetingsConfig';
import { IncentiveTripsConfig } from '@/app/components/categories/corporate/IncentiveTripsConfig';
import { TeamBuildingConfig } from '@/app/components/categories/corporate/TeamBuildingConfig';
import { TradeShowsConfig } from '@/app/components/categories/corporate/TradeShowsConfig';
import { TrainingConfig } from '@/app/components/categories/corporate/TrainingConfig';

// ========================================
// TYPES
// ========================================
interface SubCategoryData {
  id: number;
  title: string;
  emoji: string;
  gradient: string;
}

interface CorporateMICEPlanningFlowProps {
  subCategory: SubCategoryData;
  onBack: () => void;
}

// ========================================
// THEME
// ========================================
const corporateTheme = {
  primary: '#475569',
  secondary: '#334155',
  accent: '#10B981',
  gold: '#F59E0B',
  background: '#F8FAFC',
};

// ========================================
// DATA: EVENT TYPES BY SUB-CATEGORY
// ========================================
const eventTypesByCategory: Record<number, string[]> = {
  1: ['Product Launch', 'Trade Fair', 'Industry Summit', 'Tech Conference', 'Expo Participation'],
  2: ['Annual General Meeting', 'Board Strategy Session', 'Shareholder Meeting', 'Executive Briefing', 'Quarterly Review'],
  3: ['Top Performer Trip', 'Sales Incentive', 'Annual Award Ceremony', 'President Club Getaway', 'Excellence Recognition'],
  4: ['Leadership Workshop', 'Team Bonding Retreat', 'Outdoor Adventure', 'Strategy Offsite', 'Department Retreat'],
  5: ['B2B Exhibition', 'Product Showcase', 'Industry Trade Show', 'Vendor Fair', 'Technology Demo'],
  6: ['Leadership Development', 'Technical Certification', 'Soft Skills Training', 'Compliance Workshop', 'Management Program'],
};

// ========================================
// DATA: OBJECTIVES
// ========================================
const objectivesByCategory: Record<number, string[]> = {
  1: ['Brand Visibility', 'Lead Generation', 'Product Launch', 'Networking', 'Market Research'],
  2: ['Strategic Planning', 'Governance Compliance', 'Decision Making', 'Stakeholder Communication', 'Policy Review'],
  3: ['Motivation', 'Recognition', 'Retention', 'Team Morale', 'Performance Reward'],
  4: ['Team Cohesion', 'Leadership Development', 'Communication', 'Problem Solving', 'Trust Building'],
  5: ['Brand Presence', 'Sales Leads', 'Product Demo', 'Market Entry', 'Competitive Intelligence'],
  6: ['Skill Enhancement', 'Certification', 'Knowledge Transfer', 'Compliance', 'Career Development'],
};

// ========================================
// DATA: SERVICE ADD-ONS BY CATEGORY
// ========================================
const servicesByCategory: Record<number, string[]> = {
  1: ['4K AV Setup', 'Live Streaming', 'Delegate Kits', 'Booth Design', 'Registration System', 'Catering', 'Photography'],
  2: ['Executive Boardroom', 'Video Conferencing', 'Secretarial Support', 'Privacy Screens', 'Premium Catering', 'Documentation'],
  3: ['Luxury Accommodation', 'Fine Dining', 'VIP Transport', 'Entertainment', 'Spa Access', 'Award Trophies', 'Photography'],
  4: ['Professional Facilitator', 'Adventure Guides', 'Workshop Venue', 'Team Activities', 'Meals', 'Transport', 'Materials'],
  5: ['Stall Design', 'Booth Construction', 'Marketing Collateral', 'Lead Scanner', 'Product Display', 'Demo Equipment', 'Staffing'],
  6: ['Expert Trainers', 'Training Materials', 'Certification', 'Assessment Tools', 'Meals', 'Accommodation', 'Follow-up Support'],
};

// ========================================
// DATA: GENERIC LOCATIONS
// ========================================
const genericLocations = [
  '[Admin: Metro City A]',
  '[Admin: Tech Hub B]',
  '[Admin: Heritage City C]',
  '[Admin: Coastal Destination D]',
  '[Admin: Hill Station E]',
  '[Admin: Business Capital F]',
];

// ========================================
// MAIN COMPONENT
// ========================================
export function CorporateMICEPlanningFlow({ subCategory, onBack }: CorporateMICEPlanningFlowProps) {
  // Navigation state - 6 steps following business flow + optional Step 1.5 for advanced config
  const [currentStep, setCurrentStep] = useState(1);
  const [showAdvancedConfig, setShowAdvancedConfig] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Requirements
    eventType: '',
    groupSize: '',
    duration: '',
    budgetRange: '',
    
    // Step 2: Event Details
    companyName: '',
    industry: '',
    objectives: [] as string[],
    location: '',
    preferredDates: '',
    
    // Step 3: Services
    selectedServices: [] as string[],
    
    // Step 4: Budget (auto-calculated display only)
    
    // Step 5: Proposal ready
    
    // Step 6: Booking ready
  });

  const handleGoogleSearch = () => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(subCategory.title + ' corporate events India')}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(subCategory.title + ' planning guide')}`, '_blank');
  };

  // ========================================
  // STEP 1: REQUIREMENT SELECTION
  // ========================================
  const renderRequirementSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold" style={{ color: corporateTheme.primary }}>
            Event Requirements
          </h2>
        </div>

        {/* Event Type */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Event Type</label>
          <div className="grid grid-cols-1 gap-2">
            {eventTypesByCategory[subCategory.id]?.map((type) => (
              <button
                key={type}
                onClick={() => setFormData({ ...formData, eventType: type })}
                className={`p-3 rounded-2xl border-2 text-sm text-left transition-all ${
                  formData.eventType === type
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Group Size */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Group Size</label>
          <div className="grid grid-cols-2 gap-3">
            {['10-25', '26-50', '51-100', '101-250', '251-500', '500+'].map((size) => (
              <button
                key={size}
                onClick={() => setFormData({ ...formData, groupSize: size })}
                className={`p-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                  formData.groupSize === size
                    ? 'border-green-600 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <Users className="w-4 h-4 inline mr-1" />
                {size} people
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Duration</label>
          <div className="grid grid-cols-3 gap-3">
            {['1 Day', '2-3 Days', '4-5 Days', '1 Week', '2 Weeks'].map((dur) => (
              <button
                key={dur}
                onClick={() => setFormData({ ...formData, duration: dur })}
                className={`p-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                  formData.duration === dur
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <Clock className="w-4 h-4 inline mr-1" />
                {dur}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Range */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Budget Range (Indicative)</label>
          <div className="grid grid-cols-1 gap-2">
            {[
              'Under Rs.5 Lakhs',
              'Rs.5-10 Lakhs',
              'Rs.10-25 Lakhs',
              'Rs.25-50 Lakhs',
              'Rs.50 Lakhs - 1 Crore',
              'Above Rs.1 Crore',
            ].map((budget) => (
              <button
                key={budget}
                onClick={() => setFormData({ ...formData, budgetRange: budget })}
                className={`p-3 rounded-2xl border-2 text-sm text-left transition-all ${
                  formData.budgetRange === budget
                    ? 'border-amber-600 bg-amber-50 text-amber-700 font-semibold'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-1" />
                {budget}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-3">
        <Button
          onClick={() => {
            if (!formData.eventType || !formData.groupSize || !formData.duration || !formData.budgetRange) {
              toast.error('Please complete all fields');
              return;
            }
            setShowAdvancedConfig(true);
          }}
          className="w-full h-12 rounded-full text-base font-semibold"
          style={{ backgroundColor: corporateTheme.accent }}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Advanced Configuration
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
        
        <button
          onClick={() => {
            if (!formData.eventType || !formData.groupSize || !formData.duration || !formData.budgetRange) {
              toast.error('Please complete all fields');
              return;
            }
            setCurrentStep(2);
          }}
          className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Skip to Event Details →
        </button>
      </div>
    </motion.div>
  );

  // ========================================
  // STEP 2: EVENT / PROGRAM DETAILS
  // ========================================
  const renderEventDetails = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold" style={{ color: corporateTheme.primary }}>
            Event Details
          </h2>
        </div>

        {/* Company Profile */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Company Name</label>
          <Input
            type="text"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="h-12 rounded-2xl"
          />
        </div>

        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Industry</label>
          <div className="grid grid-cols-2 gap-3">
            {['IT/Tech', 'Manufacturing', 'Finance', 'Healthcare', 'Retail', 'Other'].map((ind) => (
              <button
                key={ind}
                onClick={() => setFormData({ ...formData, industry: ind })}
                className={`p-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                  formData.industry === ind
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Objectives (Multi-select) */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Event Objectives (Select all that apply)</label>
          <div className="grid grid-cols-2 gap-2">
            {objectivesByCategory[subCategory.id]?.map((obj) => (
              <button
                key={obj}
                onClick={() => {
                  const current = formData.objectives;
                  if (current.includes(obj)) {
                    setFormData({ ...formData, objectives: current.filter(o => o !== obj) });
                  } else {
                    setFormData({ ...formData, objectives: [...current, obj] });
                  }
                }}
                className={`p-2 rounded-xl border-2 text-xs font-medium transition-all ${
                  formData.objectives.includes(obj)
                    ? 'border-green-600 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {formData.objectives.includes(obj) && <CheckCircle className="w-3 h-3 inline mr-1" />}
                {obj}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Location */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Preferred Location</label>
          <div className="grid grid-cols-1 gap-2">
            {genericLocations.map((loc) => (
              <button
                key={loc}
                onClick={() => setFormData({ ...formData, location: loc })}
                className={`p-3 rounded-2xl border-2 text-sm text-left transition-all ${
                  formData.location === loc
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Dates */}
        <div className="mb-5">
          <label className="text-sm font-semibold mb-2 block text-gray-700">Preferred Dates (Optional)</label>
          <Input
            type="text"
            placeholder="e.g., March 2026 or Q2 2026"
            value={formData.preferredDates}
            onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
            className="h-12 rounded-2xl"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button
          onClick={() => setCurrentStep(1)}
          variant="outline"
          className="flex-1 h-12 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={() => {
            if (!formData.companyName || !formData.industry || formData.objectives.length === 0 || !formData.location) {
              toast.error('Please complete all required fields');
              return;
            }
            setCurrentStep(3);
          }}
          className="flex-1 h-12 rounded-full text-base font-semibold"
          style={{ backgroundColor: corporateTheme.accent }}
        >
          Continue to Services
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  // ========================================
  // STEP 3: SERVICES & ADD-ONS
  // ========================================
  const renderServicesAddons = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-xl font-bold" style={{ color: corporateTheme.primary }}>
            Select Services
          </h2>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Choose the services and add-ons you need for your {subCategory.title.toLowerCase()}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-3">
          {servicesByCategory[subCategory.id]?.map((service) => (
            <button
              key={service}
              onClick={() => {
                const current = formData.selectedServices;
                if (current.includes(service)) {
                  setFormData({ ...formData, selectedServices: current.filter(s => s !== service) });
                } else {
                  setFormData({ ...formData, selectedServices: [...current, service] });
                }
              }}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                formData.selectedServices.includes(service)
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    formData.selectedServices.includes(service) ? 'text-green-700' : 'text-gray-700'
                  }`}
                >
                  {service}
                </span>
                {formData.selectedServices.includes(service) && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Count */}
        <div className="mt-4 p-4 bg-blue-50 rounded-2xl">
          <p className="text-sm font-semibold text-blue-800">
            {formData.selectedServices.length} service(s) selected
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button
          onClick={() => setCurrentStep(2)}
          variant="outline"
          className="flex-1 h-12 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={() => {
            if (formData.selectedServices.length === 0) {
              toast.error('Please select at least one service');
              return;
            }
            setCurrentStep(4);
          }}
          className="flex-1 h-12 rounded-full text-base font-semibold"
          style={{ backgroundColor: corporateTheme.accent }}
        >
          View Budget Summary
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  // ========================================
  // STEP 4: BUDGET & SCALE INDICATORS
  // ========================================
  const renderBudgetSummary = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold" style={{ color: corporateTheme.primary }}>
            Budget Summary
          </h2>
        </div>

        {/* Budget Breakdown */}
        <div className="space-y-3 mb-5">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
            <span className="text-sm font-medium text-gray-700">Selected Budget Range:</span>
            <span className="text-sm font-bold text-gray-900">{formData.budgetRange}</span>
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <p className="text-xs font-semibold text-blue-800 mb-2">Typical Allocation:</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-blue-700">Venue & Infrastructure</span>
                <span className="text-xs font-bold text-blue-900">35-40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-blue-700">Services & Add-ons</span>
                <span className="text-xs font-bold text-blue-900">25-30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-blue-700">Food & Hospitality</span>
                <span className="text-xs font-bold text-blue-900">20-25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-blue-700">Contingency & Misc</span>
                <span className="text-xs font-bold text-blue-900">10-15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scale Indicators */}
        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
          <p className="text-sm font-semibold text-purple-800 mb-3">Event Scale:</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-3">
              <Users className="w-5 h-5 text-purple-600 mb-1" />
              <p className="text-xs text-gray-600">Participants</p>
              <p className="text-sm font-bold text-gray-900">{formData.groupSize}</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <Calendar className="w-5 h-5 text-purple-600 mb-1" />
              <p className="text-xs text-gray-600">Duration</p>
              <p className="text-sm font-bold text-gray-900">{formData.duration}</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <MapPin className="w-5 h-5 text-purple-600 mb-1" />
              <p className="text-xs text-gray-600">Location</p>
              <p className="text-sm font-bold text-gray-900 truncate">{formData.location.replace('[Admin: ', '').replace(']', '')}</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <CheckCircle className="w-5 h-5 text-purple-600 mb-1" />
              <p className="text-xs text-gray-600">Services</p>
              <p className="text-sm font-bold text-gray-900">{formData.selectedServices.length} selected</p>
            </div>
          </div>
        </div>

        {/* Admin Note */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-xs text-blue-800 text-center">
            💡 Final pricing will be shared in detailed proposal based on specific requirements
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button
          onClick={() => setCurrentStep(3)}
          variant="outline"
          className="flex-1 h-12 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep(5)}
          className="flex-1 h-12 rounded-full text-base font-semibold"
          style={{ backgroundColor: corporateTheme.accent }}
        >
          Generate Proposal
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  // ========================================
  // STEP 5: PROPOSAL & APPROVAL
  // ========================================
  const renderProposalApproval = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold" style={{ color: corporateTheme.primary }}>
            Event Proposal
          </h2>
        </div>

        {/* Proposal Summary */}
        <div className="space-y-4 mb-5">
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
            <p className="text-sm font-bold text-indigo-900 mb-3">{subCategory.title}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Event Type:</span>
                <span className="font-semibold text-gray-900">{formData.eventType}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Company:</span>
                <span className="font-semibold text-gray-900">{formData.companyName}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Industry:</span>
                <span className="font-semibold text-gray-900">{formData.industry}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Participants:</span>
                <span className="font-semibold text-gray-900">{formData.groupSize}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Duration:</span>
                <span className="font-semibold text-gray-900">{formData.duration}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Location:</span>
                <span className="font-semibold text-gray-900">{formData.location}</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
            <p className="text-xs font-semibold text-green-800 mb-2">Objectives:</p>
            <div className="flex flex-wrap gap-2">
              {formData.objectives.map((obj) => (
                <Badge key={obj} className="bg-green-600 text-white text-xs">
                  {obj}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="text-xs font-semibold text-blue-800 mb-2">Selected Services ({formData.selectedServices.length}):</p>
            <div className="grid grid-cols-2 gap-2">
              {formData.selectedServices.map((service) => (
                <div key={service} className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  <span className="text-xs text-blue-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => {
              toast.success('Generating detailed PDF proposal...');
            }}
            className="w-full h-12 rounded-full text-base font-semibold bg-blue-600 hover:bg-blue-700"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Proposal (PDF)
          </Button>

          <Button
            onClick={() => {
              toast.success('Sharing proposal with management...');
            }}
            variant="outline"
            className="w-full h-12 rounded-full text-base font-semibold"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share with Admin / Management
          </Button>

          <Button
            onClick={() => {
              toast.success('Requesting detailed quotation...');
            }}
            variant="outline"
            className="w-full h-12 rounded-full text-base font-semibold"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Request Detailed Quote
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button
          onClick={() => setCurrentStep(4)}
          variant="outline"
          className="flex-1 h-12 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep(6)}
          className="flex-1 h-12 rounded-full text-base font-semibold"
          style={{ backgroundColor: corporateTheme.accent }}
        >
          Proceed to Booking
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </motion.div>
  );

  // ========================================
  // STEP 6: BOOKING-READY STATE
  // ========================================
  const renderBookingReady = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-2xl text-white">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <CheckCircle className="w-9 h-9 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Proposal Ready!</h2>
          <p className="text-white/90 text-sm">
            Your {subCategory.title.toLowerCase()} proposal has been generated
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-white/70">Company</p>
              <p className="text-sm font-bold">{formData.companyName}</p>
            </div>
            <div>
              <p className="text-xs text-white/70">Event Type</p>
              <p className="text-sm font-bold">{formData.eventType}</p>
            </div>
            <div>
              <p className="text-xs text-white/70">Participants</p>
              <p className="text-sm font-bold">{formData.groupSize}</p>
            </div>
            <div>
              <p className="text-xs text-white/70">Budget</p>
              <p className="text-sm font-bold">{formData.budgetRange.replace('Rs.', '₹')}</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-sm font-semibold mb-3">Next Steps:</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <p className="text-xs text-white/90">Our team will review your requirements within 24 hours</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <p className="text-xs text-white/90">You will receive a detailed quotation with venue options</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <p className="text-xs text-white/90">Finalize details and confirm booking with advance payment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={() => {
            toast.success('Opening dashboard...');
          }}
          className="w-full h-12 rounded-full text-base font-semibold bg-blue-600 hover:bg-blue-700"
        >
          View My Proposals Dashboard
        </Button>

        <Button
          onClick={() => {
            toast.success('Starting new event planning...');
            setCurrentStep(1);
            setFormData({
              eventType: '',
              groupSize: '',
              duration: '',
              budgetRange: '',
              companyName: '',
              industry: '',
              objectives: [],
              location: '',
              preferredDates: '',
              selectedServices: [],
            });
          }}
          variant="outline"
          className="w-full h-12 rounded-full text-base font-semibold"
        >
          Plan Another Event
        </Button>

        <Button
          onClick={onBack}
          variant="outline"
          className="w-full h-12 rounded-full text-base font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Corporate Hub
        </Button>
      </div>
    </motion.div>
  );

  // ========================================
  // STEP 1.5: ADVANCED CONFIGURATION (Category-Specific)
  // ========================================
  const renderAdvancedConfiguration = () => {
    const updateFormData = (field: string, value: any) => {
      setFormData({ ...formData, [field]: value });
    };

    let ConfigComponent = null;
    
    switch (subCategory.id) {
      case 1: // Conferences & Exhibitions
        ConfigComponent = ConferencesConfig;
        break;
      case 2: // Board Meetings & AGMs
        ConfigComponent = BoardMeetingsConfig;
        break;
      case 3: // Incentive Trips & Rewards
        ConfigComponent = IncentiveTripsConfig;
        break;
      case 4: // Team Building
        ConfigComponent = TeamBuildingConfig;
        break;
      case 5: // Trade Shows
        ConfigComponent = TradeShowsConfig;
        break;
      case 6: // Corporate Training
        ConfigComponent = TrainingConfig;
        break;
      default:
        return null;
    }

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold" style={{ color: corporateTheme.primary }}>
              Advanced Configuration
            </h2>
          </div>
          <p className="text-sm text-gray-600">
            Customize your event with premium features and specialized options
          </p>
        </div>

        {/* Category-Specific Configuration */}
        {ConfigComponent && <ConfigComponent formData={formData} onUpdate={updateFormData} />}

        {/* Navigation */}
        <div className="flex gap-3">
          <Button
            onClick={() => setShowAdvancedConfig(false)}
            variant="outline"
            className="flex-1 h-12 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={() => {
              setShowAdvancedConfig(false);
              setCurrentStep(2);
              toast.success('Advanced configuration saved!');
            }}
            className="flex-1 h-12 rounded-full text-base font-semibold"
            style={{ backgroundColor: corporateTheme.accent }}
          >
            Continue to Event Details
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>
    );
  };

  // ========================================
  // PROGRESS INDICATOR
  // ========================================
  const renderProgressIndicator = () => {
    const steps = [
      { num: 1, label: 'Requirements' },
      { num: 2, label: 'Details' },
      { num: 3, label: 'Services' },
      { num: 4, label: 'Budget' },
      { num: 5, label: 'Proposal' },
      { num: 6, label: 'Ready' },
    ];

    return (
      <div className="bg-white rounded-2xl p-4 shadow-md mb-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.num} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    currentStep >= step.num
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step.num ? <CheckCircle className="w-4 h-4" /> : step.num}
                </div>
                <span className="text-[10px] mt-1 font-medium text-gray-600">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-1 rounded ${currentStep > step.num ? 'bg-green-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ========================================
  // MAIN RENDER
  // ========================================
  return (
    <div className="min-h-screen" style={{ backgroundColor: corporateTheme.background }}>
      {/* Header */}
      <div className={`bg-gradient-to-r ${subCategory.gradient} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl">{subCategory.emoji}</span>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">{subCategory.title}</h1>
            <p className="text-white/80 text-sm">Plan your event in 6 easy steps</p>
          </div>
        </div>

        {/* Search Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleGoogleSearch}
            className="flex-1 bg-white text-gray-700 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Globe className="w-4 h-4" />
            Google Search
          </Button>
          <Button
            onClick={handleYouTubeSearch}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Youtube className="w-4 h-4" />
            YouTube
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4 pb-8">
        {/* Progress Indicator - Only show when not in advanced config */}
        {!showAdvancedConfig && renderProgressIndicator()}

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {showAdvancedConfig ? (
            renderAdvancedConfiguration()
          ) : (
            <>
              {currentStep === 1 && renderRequirementSelection()}
              {currentStep === 2 && renderEventDetails()}
              {currentStep === 3 && renderServicesAddons()}
              {currentStep === 4 && renderBudgetSummary()}
              {currentStep === 5 && renderProposalApproval()}
              {currentStep === 6 && renderBookingReady()}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Booking Bar Footer */}
      {currentStep >= 4 && !showAdvancedConfig && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-6 py-4 shadow-2xl">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`h-2 w-8 rounded-full ${
                        step <= (currentStep - 3) ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  Step {Math.min(currentStep - 3, 3)}/3
                </span>
              </div>
              <span className="text-xs text-gray-600">
                {currentStep === 4 && 'Review Budget'}
                {currentStep === 5 && 'Receive Proposal'}
                {currentStep === 6 && 'Execute'}
              </span>
            </div>
            <Button
              onClick={() => {
                if (currentStep < 6) setCurrentStep(currentStep + 1);
              }}
              className="w-full h-12 rounded-full text-base font-bold"
              style={{ backgroundColor: corporateTheme.accent }}
              disabled={currentStep === 6}
            >
              {currentStep === 6 ? 'Booking Complete' : 'Request Executive Proposal'}
              {currentStep < 6 && <ChevronRight className="w-5 h-5 ml-2" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CorporateMICEPlanningFlow;
