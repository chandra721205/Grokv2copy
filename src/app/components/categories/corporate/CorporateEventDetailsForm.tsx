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
  Target,
  CheckCircle,
  ChevronRight,
  Info,
  Phone,
  Briefcase,
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface CorporateEventDetailsFormProps {
  categoryId: number;
  categoryTitle: string;
  categoryEmoji: string;
  categoryGradient: string;
  onBack: () => void;
  onSubmit: (formData: any) => void;
}

// Event objectives (icon-based)
const eventObjectives = [
  { id: 'conference', label: 'Conference / Seminar', icon: '🎤' },
  { id: 'agm', label: 'AGM / Board Meeting', icon: '📊' },
  { id: 'training', label: 'Training / Workshop', icon: '📚' },
  { id: 'teambuilding', label: 'Team Building', icon: '🤝' },
  { id: 'incentive', label: 'Incentive Trip', icon: '🏆' },
  { id: 'launch', label: 'Product Launch', icon: '🚀' },
  { id: 'tradeshow', label: 'Trade Show / Exhibition', icon: '🏢' },
  { id: 'awards', label: 'Awards Ceremony', icon: '🏅' },
];

// Optional add-ons
const optionalAddons = [
  { id: 'adventure', label: 'Adventure team building', icon: '🏔️' },
  { id: 'cultural', label: 'Cultural experiences', icon: '🎭' },
  { id: 'wellness', label: 'Wellness & yoga', icon: '🧘' },
  { id: 'vip', label: 'VIP experiences', icon: '⭐' },
  { id: 'golf', label: 'Golf tournament', icon: '⛳' },
  { id: 'tours', label: 'Guided city tours', icon: '🗺️' },
];

// Generic cities
const cities = [
  '[Admin: Metro City A]',
  '[Admin: Metro City B]',
  '[Admin: Metro City C]',
  '[Admin: Coastal City D]',
  '[Admin: Hill Station E]',
  '[Admin: International Destination]',
];

// Industries
const industries = [
  'Technology',
  'Finance & Banking',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Consulting',
  'Education',
  'Real Estate',
  'Other',
];

export function CorporateEventDetailsForm({
  categoryId,
  categoryTitle,
  categoryEmoji,
  categoryGradient,
  onBack,
  onSubmit,
}: CorporateEventDetailsFormProps) {
  const [formData, setFormData] = useState({
    // Company Profile
    companyName: '',
    industry: '',
    
    // Event Details
    groupSize: '',
    duration: '',
    budget: '',
    preferredCity: '',
    preferredDates: '',
    
    // Event Objective
    eventObjective: '',
    
    // Optional Add-ons
    addons: [] as string[],
    
    // Additional Notes
    additionalNotes: '',
  });

  const handleSubmit = () => {
    // Validation
    if (!formData.companyName || !formData.industry || !formData.groupSize || 
        !formData.duration || !formData.budget || !formData.preferredCity || !formData.eventObjective) {
      toast.error('Please complete all required fields');
      return;
    }

    onSubmit(formData);
  };

  const toggleAddon = (addonId: string) => {
    setFormData({
      ...formData,
      addons: formData.addons.includes(addonId)
        ? formData.addons.filter(id => id !== addonId)
        : [...formData.addons, addonId],
    });
  };

  // Get budget label based on category
  const getBudgetLabel = () => {
    switch(categoryId) {
      case 1: return 'Budget (per delegate)';
      case 2: return 'Budget (per day)';
      case 3: return 'Budget (per person)';
      case 4: return 'Budget (per person)';
      case 5: return 'Budget (per stall)';
      case 6: return 'Budget (per person)';
      default: return 'Budget';
    }
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
            <h1 className="text-white text-2xl font-bold">Event Details</h1>
            <p className="text-white/80 text-sm">{categoryTitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-md space-y-6"
        >
          {/* Section 1: Company Profile */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-bold text-gray-900">Company Profile</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry <span className="text-red-500">*</span>
                </label>
                <div className="flex items-start gap-2 mb-2">
                  <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-500">
                    This helps us align venues, compliance, and service standards.
                  </p>
                </div>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-2xl focus:border-slate-600 focus:outline-none"
                >
                  <option value="">Select industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Section 2: Event Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-bold text-gray-900">Event Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Group Size <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 50"
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Duration <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="e.g., 2 days"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {getBudgetLabel()} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="e.g., ₹50,000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred City <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.preferredCity}
                  onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-2xl focus:border-slate-600 focus:outline-none"
                >
                  <option value="">Select city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Dates (Optional)
                </label>
                <Input
                  type="text"
                  placeholder="e.g., March 2026 or Q2 2026"
                  value={formData.preferredDates}
                  onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Section 3: Event Objective */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Event Objective <span className="text-red-500">*</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {eventObjectives.map((obj) => (
                <button
                  key={obj.id}
                  onClick={() => setFormData({ ...formData, eventObjective: obj.id })}
                  className={`p-3 rounded-2xl border-2 transition-all text-left ${
                    formData.eventObjective === obj.id
                      ? 'border-slate-600 bg-slate-50'
                      : 'border-gray-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{obj.icon}</span>
                    <span className={`text-sm font-semibold ${
                      formData.eventObjective === obj.id ? 'text-slate-700' : 'text-gray-700'
                    }`}>
                      {obj.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Section 4: Optional Add-ons */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-bold text-gray-900">Optional Add-ons</h3>
            </div>

            <div className="space-y-2">
              {optionalAddons.map((addon) => (
                <label
                  key={addon.id}
                  className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-slate-300 transition-all"
                >
                  <input
                    type="checkbox"
                    checked={formData.addons.includes(addon.id)}
                    onChange={() => toggleAddon(addon.id)}
                    className="w-5 h-5 text-slate-600 rounded"
                  />
                  <span className="text-xl">{addon.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{addon.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Section 5: Additional Notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              placeholder="Any specific requirements or preferences..."
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-slate-600 focus:outline-none resize-none"
            />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 space-y-3"
        >
          <Button
            onClick={handleSubmit}
            className="w-full h-12 rounded-full font-bold text-base bg-green-600 hover:bg-green-700"
          >
            Get Quote
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>

          <Button
            onClick={() => {
              toast.success('Scheduling strategy call...');
            }}
            variant="outline"
            className="w-full h-12 rounded-full font-semibold text-base border-2 border-gray-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Schedule Strategy Call
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
