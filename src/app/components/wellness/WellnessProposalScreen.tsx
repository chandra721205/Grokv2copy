import { useState } from 'react';
import { motion } from 'motion/react';
import {
  X,
  CheckCircle2,
  Building2,
  User,
  Calendar,
  Star,
  Award,
  Bed,
  Utensils,
  Car,
  DollarSign,
  Clock,
  MessageSquare,
  Edit,
  AlertCircle,
  Shield,
  Languages,
  Accessibility,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS PROPOSAL SCREEN
// Admin-sent treatment proposals
// ========================================

interface ProposalData {
  id: string;
  treatmentType: string;
  validUntil: string;
  preparedBy: string;
  
  // A. Summary
  totalCost: number;
  currencySaved: number;
  facility: {
    name: string;
    location: string;
    accreditation: string;
    successRate: number;
  };
  doctor: {
    name: string;
    experience: number;
  };
  recommendedDates: string;
  
  // B. Breakdown
  breakdown: {
    treatment: {
      cost: number;
      items: string[];
    };
    accommodation: {
      cost: number;
      items: string[];
    };
    transport: {
      cost: number;
      items: string[];
    };
  };
  
  // C. Special Requests
  specialRequests: {
    seniorCare?: string[];
    languageSupport?: string[];
    dietary?: string[];
  };
  
  // D. Schedule
  dailySchedule: {
    days: string;
    activities: string;
  }[];
}

interface WellnessProposalScreenProps {
  proposalId: string;
  onAcceptAndBook: () => void;
  onRequestModifications: () => void;
  onChatWithAdvisor: () => void;
  onClose: () => void;
}

export function WellnessProposalScreen({
  proposalId,
  onAcceptAndBook,
  onRequestModifications,
  onChatWithAdvisor,
  onClose,
}: WellnessProposalScreenProps) {
  // Mock data - replace with API call
  const proposal: ProposalData = {
    id: proposalId,
    treatmentType: 'Cardiac Surgery',
    validUntil: '7 days',
    preparedBy: 'GrokYatra Health Team',
    totalCost: 485000,
    currencySaved: 72,
    facility: {
      name: 'Apollo Hospitals',
      location: 'Chennai',
      accreditation: 'JCI Accredited',
      successRate: 94,
    },
    doctor: {
      name: 'Dr. Rajesh Verma',
      experience: 25,
    },
    recommendedDates: 'Apr 15-29, 2024',
    breakdown: {
      treatment: {
        cost: 320000,
        items: ['Bypass Surgery', 'ICU (3 days)', 'Medicines'],
      },
      accommodation: {
        cost: 120000,
        items: [
          'Deluxe Room (Patient + 2)',
          '14 nights',
          'Special Diabetic/Jain meals available',
        ],
      },
      transport: {
        cost: 45000,
        items: [
          'Airport-Hospital-Hotel transfers',
          'Medical escort vehicle',
        ],
      },
    },
    specialRequests: {
      seniorCare: [
        'Dedicated nurse (8 hrs/day)',
        'Ground-floor accessible room',
        'Emergency alert system',
      ],
      languageSupport: [
        'Hindi-speaking coordinator',
        'Daily doctor updates in Hindi/English',
      ],
      dietary: [
        'Jain meals (no root vegetables)',
        'Diabetic-friendly menu',
      ],
    },
    dailySchedule: [
      {
        days: 'Day 1-3',
        activities: 'Pre-op tests & consultation',
      },
      {
        days: 'Day 4',
        activities: 'Surgery + ICU monitoring',
      },
      {
        days: 'Day 5-7',
        activities: 'Hospital recovery',
      },
      {
        days: 'Day 8-14',
        activities: 'Hotel recovery + follow-ups',
      },
      {
        days: 'Day 15',
        activities: 'Final check-up & departure',
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl my-8"
      >
        {/* ========================================
            HEADER
        ======================================== */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-t-3xl z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">
                Your Personalized {proposal.treatmentType} Proposal
              </h1>
              <p className="text-xl text-white/90 flex items-center gap-3">
                <span>Prepared by {proposal.preparedBy}</span>
                <span className="text-white/60">•</span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ⏰ Valid for {proposal.validUntil}
                </span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors flex-shrink-0 ml-4"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* ========================================
            CONTENT - SCROLLABLE
        ======================================== */}
        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* ========================================
              A. PROPOSAL SUMMARY CARD
          ======================================== */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-3 border-emerald-300 rounded-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-lg text-gray-700 mb-2 font-semibold">Total Package</p>
                <h2 className="text-6xl font-bold text-emerald-700 mb-3">
                  ₹{proposal.totalCost.toLocaleString('en-IN')}
                </h2>
                <p className="text-lg text-gray-700">
                  Includes: Treatment + 14-day stay + meals + transfers
                </p>
              </div>
              <div className="bg-orange-500 text-white px-6 py-4 rounded-2xl text-center">
                <p className="text-sm font-bold mb-1">Saves</p>
                <p className="text-4xl font-bold">{proposal.currencySaved}%</p>
                <p className="text-xs">vs US pricing</p>
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full mb-6" />

            {/* Facility & Doctor Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Facility */}
              <div className="bg-white rounded-xl p-6 border-2 border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-8 w-8 text-emerald-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {proposal.facility.name}
                    </h3>
                    <p className="text-base text-gray-600">{proposal.facility.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    {proposal.facility.accreditation}
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    {proposal.facility.successRate}% Success Rate
                  </div>
                </div>
              </div>

              {/* Doctor & Dates */}
              <div className="space-y-4">
                {/* Doctor */}
                <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {proposal.doctor.name}
                      </h4>
                      <p className="text-base text-gray-600">
                        {proposal.doctor.experience} yrs experience
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-sm font-bold text-gray-600 mb-1">Recommended Dates</p>
                      <h4 className="text-xl font-bold text-gray-900">
                        {proposal.recommendedDates}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              B. DETAILED BREAKDOWN
          ======================================== */}
          <div className="bg-blue-50 border-3 border-blue-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-blue-600" />
              B. Detailed Breakdown
            </h3>

            <div className="space-y-4">
              {/* Treatment Cost */}
              <BreakdownItem
                icon={<Building2 className="h-6 w-6 text-red-600" />}
                title="Treatment Cost"
                cost={proposal.breakdown.treatment.cost}
                items={proposal.breakdown.treatment.items}
                bgColor="bg-red-50"
                borderColor="border-red-200"
              />

              {/* Accommodation */}
              <BreakdownItem
                icon={<Bed className="h-6 w-6 text-purple-600" />}
                title="Accommodation"
                cost={proposal.breakdown.accommodation.cost}
                items={proposal.breakdown.accommodation.items}
                bgColor="bg-purple-50"
                borderColor="border-purple-200"
              />

              {/* Transport */}
              <BreakdownItem
                icon={<Car className="h-6 w-6 text-orange-600" />}
                title="Transport"
                cost={proposal.breakdown.transport.cost}
                items={proposal.breakdown.transport.items}
                bgColor="bg-orange-50"
                borderColor="border-orange-200"
              />

              {/* Total */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold">Total</h4>
                  <p className="text-4xl font-bold">
                    ₹{proposal.totalCost.toLocaleString('en-IN')}
                  </p>
                </div>
                <p className="text-lg text-white/90 mt-2">
                  Saves {proposal.currencySaved}% vs US pricing
                </p>
              </div>
            </div>
          </div>

          {/* ========================================
              C. SPECIAL REQUESTS ADDRESSED
          ======================================== */}
          <div className="bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              C. Special Requests Addressed
            </h3>

            <div className="space-y-4">
              {/* Senior Care */}
              {proposal.specialRequests.seniorCare && (
                <SpecialRequestBlock
                  icon={<Accessibility className="h-6 w-6 text-orange-600" />}
                  title="✅ Senior Care Package Included:"
                  items={proposal.specialRequests.seniorCare}
                  bgColor="bg-orange-50"
                  borderColor="border-orange-200"
                />
              )}

              {/* Language Support */}
              {proposal.specialRequests.languageSupport && (
                <SpecialRequestBlock
                  icon={<Languages className="h-6 w-6 text-blue-600" />}
                  title="✅ Language Support:"
                  items={proposal.specialRequests.languageSupport}
                  bgColor="bg-blue-50"
                  borderColor="border-blue-200"
                />
              )}

              {/* Dietary */}
              {proposal.specialRequests.dietary && (
                <SpecialRequestBlock
                  icon={<Utensils className="h-6 w-6 text-purple-600" />}
                  title="✅ Dietary Arranged:"
                  items={proposal.specialRequests.dietary}
                  bgColor="bg-purple-50"
                  borderColor="border-purple-200"
                />
              )}
            </div>
          </div>

          {/* ========================================
              D. DAILY SCHEDULE PREVIEW
          ======================================== */}
          <div className="bg-purple-50 border-3 border-purple-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-600" />
              D. Daily Schedule Preview
            </h3>

            <div className="space-y-3">
              {proposal.dailySchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border-2 border-purple-200 flex items-center gap-4"
                >
                  <div className="w-24 flex-shrink-0">
                    <span className="text-lg font-bold text-purple-700">{item.days}</span>
                  </div>
                  <div className="h-12 w-1 bg-purple-300 rounded-full" />
                  <p className="text-lg text-gray-800 flex-1">{item.activities}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================
            E. ACTION BUTTONS FOOTER
        ======================================== */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-b-3xl border-t-3 border-gray-300">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Primary: Accept & Book */}
            <Button
              onClick={onAcceptAndBook}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 rounded-xl text-xl font-bold shadow-lg md:col-span-2"
            >
              <CheckCircle2 className="mr-3 h-6 w-6" />
              ✅ Accept & Book Now
            </Button>

            {/* Secondary: Request Modifications */}
            <Button
              onClick={onRequestModifications}
              variant="outline"
              className="border-3 border-blue-600 text-blue-700 hover:bg-blue-50 py-6 rounded-xl text-lg font-bold"
            >
              <Edit className="mr-2 h-5 w-5" />
              📝 Request Modifications
            </Button>
          </div>

          {/* Chat with Advisor */}
          <Button
            onClick={onChatWithAdvisor}
            variant="outline"
            className="w-full mt-4 border-2 border-gray-400 text-gray-700 hover:bg-gray-100 py-5 rounded-xl text-lg font-semibold"
          >
            <MessageSquare className="mr-3 h-6 w-6" />
            💬 Chat with Health Advisor
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// BREAKDOWN ITEM COMPONENT
// ========================================

interface BreakdownItemProps {
  icon: React.ReactNode;
  title: string;
  cost: number;
  items: string[];
  bgColor: string;
  borderColor: string;
}

function BreakdownItem({ icon, title, cost, items, bgColor, borderColor }: BreakdownItemProps) {
  return (
    <div className={`${bgColor} rounded-xl p-6 border-2 ${borderColor}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon}
          <h4 className="text-xl font-bold text-gray-900">{title}</h4>
        </div>
        <p className="text-2xl font-bold text-gray-900">
          ₹{cost.toLocaleString('en-IN')}
        </p>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-base text-gray-700">
            <span className="text-emerald-600 font-bold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ========================================
// SPECIAL REQUEST BLOCK COMPONENT
// ========================================

interface SpecialRequestBlockProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  bgColor: string;
  borderColor: string;
}

function SpecialRequestBlock({
  icon,
  title,
  items,
  bgColor,
  borderColor,
}: SpecialRequestBlockProps) {
  return (
    <div className={`${bgColor} rounded-xl p-6 border-2 ${borderColor}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-base text-gray-700">
            <span className="text-emerald-600 font-bold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
