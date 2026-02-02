import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  ArrowLeft,
  Building2,
  CheckCircle,
  Download,
  Share2,
  MapPin,
  Users,
  Clock,
  DollarSign,
  Utensils,
  Monitor,
  TrendingUp,
  Calendar,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface CorporateProposalScreenProps {
  categoryTitle: string;
  categoryEmoji: string;
  categoryGradient: string;
  formData: any;
  onBack: () => void;
  onConfirm: () => void;
}

export function CorporateProposalScreen({
  categoryTitle,
  categoryEmoji,
  categoryGradient,
  formData,
  onBack,
  onConfirm,
}: CorporateProposalScreenProps) {
  // Mock proposal data (in production, this would come from API)
  const proposalData = {
    proposalId: `PROP-${Date.now().toString().slice(-6)}`,
    venues: [
      {
        name: '[Admin: Venue Option 1]',
        type: 'Conference Hotel',
        capacity: formData.groupSize || '100',
        location: formData.preferredCity || '[Admin: City]',
        rating: 4.8,
      },
      {
        name: '[Admin: Venue Option 2]',
        type: 'Convention Center',
        capacity: formData.groupSize || '100',
        location: formData.preferredCity || '[Admin: City]',
        rating: 4.6,
      },
    ],
    budgetBreakdown: {
      venue: 40,
      fb: 30,
      av: 15,
      logistics: 10,
      contingency: 5,
    },
    totalEstimate: formData.budget || '₹10,00,000',
    inclusions: [
      'Venue booking & setup',
      'Audio-visual equipment',
      'Meals & refreshments (all days)',
      'Registration & coordination',
      'On-site event management',
      'Post-event report',
    ],
    upgrades: [
      { name: 'Premium AV Setup', price: '+₹50,000' },
      { name: 'Professional Photography', price: '+₹30,000' },
      { name: 'VIP Lounge Access', price: '+₹40,000' },
      { name: 'Live Streaming', price: '+₹60,000' },
    ],
    timeline: [
      { day: 'Day 1', activity: 'Registration & welcome session' },
      { day: 'Day 2', activity: 'Main conference & networking' },
      { day: 'Day 3', activity: 'Closing ceremony & departure' },
    ],
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
            <h1 className="text-white text-2xl font-bold">Your Proposal</h1>
            <p className="text-white/80 text-sm">Customized for {formData.companyName || 'your company'}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => toast.success('Downloading proposal...')}
            className="flex-1 bg-white text-gray-700 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
          <Button
            onClick={() => toast.success('Sharing proposal...')}
            className="flex-1 bg-white text-gray-700 hover:bg-gray-100 rounded-full h-9 flex items-center justify-center gap-2 text-sm"
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4 pb-8 space-y-6">
        {/* Proposal ID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-blue-900">
                Proposal ID: {proposalData.proposalId}
              </p>
              <p className="text-xs text-blue-700">
                This proposal is customized based on your inputs and availability.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Venue Shortlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Venue Shortlist</h3>
          
          <div className="space-y-3">
            {proposalData.venues.map((venue, index) => (
              <div
                key={index}
                className="p-4 border-2 border-gray-200 rounded-2xl hover:border-slate-400 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{venue.name}</h4>
                    <p className="text-sm text-gray-600">{venue.type}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    ⭐ {venue.rating}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {venue.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {venue.capacity} pax
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Inclusions Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
          
          <ul className="space-y-3">
            {proposalData.inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Budget Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Budget Breakdown</h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Venue & AV</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{proposalData.budgetBreakdown.venue}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">F&B</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{proposalData.budgetBreakdown.fb}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Tech & AV</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{proposalData.budgetBreakdown.av}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Logistics</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{proposalData.budgetBreakdown.logistics}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Contingency</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{proposalData.budgetBreakdown.contingency}%</span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-gray-900">Total Estimate</span>
              <span className="text-lg font-bold text-green-600">{proposalData.totalEstimate}</span>
            </div>
          </div>
        </motion.div>

        {/* Execution Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Execution Plan (Run-of-Show)</h3>
          
          <div className="space-y-3">
            {proposalData.timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900">{item.day}</p>
                  <p className="text-sm text-gray-600">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Optional Upgrades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Optional Upgrades</h3>
          
          <div className="space-y-2">
            {proposalData.upgrades.map((upgrade, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white rounded-2xl"
              >
                <span className="text-sm font-semibold text-gray-700">{upgrade.name}</span>
                <span className="text-sm font-bold text-amber-600">{upgrade.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          <Button
            onClick={onConfirm}
            className="w-full h-12 rounded-full font-bold text-base bg-green-600 hover:bg-green-700"
          >
            Confirm & Proceed to Booking
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>

          <Button
            onClick={() => toast.success('Requesting modifications...')}
            variant="outline"
            className="w-full h-12 rounded-full font-semibold text-base border-2 border-gray-300"
          >
            Request Modifications
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
