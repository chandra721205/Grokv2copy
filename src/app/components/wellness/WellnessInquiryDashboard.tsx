import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Leaf,
  Brain,
  Activity,
  UserPlus,
  Calendar,
  Users,
  Target,
  Clock,
  FileText,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS INQUIRY DASHBOARD
// Shows all wellness inquiries with status filtering
// ========================================

type InquiryStatus = 'pending' | 'quote-ready' | 'booked' | 'completed';

interface WellnessInquiry {
  id: string;
  subCategory: string;
  subCategoryIcon: string;
  treatmentType: string;
  facilityName: string;
  location: string;
  submittedDate: string;
  linkedTripName?: string;
  requestedDates: string;
  travelers: {
    patients: number;
    attendants: number;
  };
  specialNeeds: string[];
  status: InquiryStatus;
  proposalId?: string;
}

interface WellnessInquiryDashboardProps {
  onViewProposal: (proposalId: string) => void;
  onChatWithAdvisor: (inquiryId: string) => void;
}

export function WellnessInquiryDashboard({
  onViewProposal,
  onChatWithAdvisor,
}: WellnessInquiryDashboardProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | InquiryStatus>('all');

  // Mock data - replace with API call
  const inquiries: WellnessInquiry[] = [
    {
      id: 'INQ001',
      subCategory: 'Medical Tourism',
      subCategoryIcon: '🏥',
      treatmentType: 'Cardiac Surgery',
      facilityName: 'Fortis Hospital',
      location: 'Bangalore',
      submittedDate: '15 Mar 2024',
      linkedTripName: 'Dad\'s Heart Treatment Trip',
      requestedDates: 'Apr 10-25, 2024',
      travelers: { patients: 1, attendants: 2 },
      specialNeeds: ['Senior Care', 'Hindi Interpreter'],
      status: 'quote-ready',
      proposalId: 'PROP001',
    },
    {
      id: 'INQ002',
      subCategory: 'Ayurveda & Panchakarma',
      subCategoryIcon: '🌿',
      treatmentType: 'Panchakarma Detox',
      facilityName: 'Somatheeram Resort',
      location: 'Kerala',
      submittedDate: '18 Mar 2024',
      linkedTripName: 'South India Wellness Tour',
      requestedDates: 'May 1-7, 2024',
      travelers: { patients: 2, attendants: 0 },
      specialNeeds: ['Vegetarian Meals', 'Yoga Classes'],
      status: 'pending',
    },
    {
      id: 'INQ003',
      subCategory: 'Medical Tourism',
      subCategoryIcon: '🏥',
      treatmentType: 'Joint Replacement',
      facilityName: 'Apollo Hospitals',
      location: 'Chennai',
      submittedDate: '10 Mar 2024',
      linkedTripName: 'Mom\'s Knee Surgery',
      requestedDates: 'Mar 25 - Apr 5, 2024',
      travelers: { patients: 1, attendants: 1 },
      specialNeeds: ['Mobility Support', 'Wheelchair Access'],
      status: 'booked',
    },
    {
      id: 'INQ004',
      subCategory: 'Yoga & Meditation',
      subCategoryIcon: '🧘',
      treatmentType: 'Stress Relief Program',
      facilityName: 'Parmarth Niketan',
      location: 'Rishikesh',
      submittedDate: '20 Feb 2024',
      linkedTripName: 'Personal Retreat',
      requestedDates: 'Feb 28 - Mar 10, 2024',
      travelers: { patients: 1, attendants: 0 },
      specialNeeds: ['Vegetarian Meals'],
      status: 'booked',
    },
  ];

  const filteredInquiries = inquiries.filter((inquiry) => {
    if (activeFilter === 'all') return true;
    return inquiry.status === activeFilter;
  });

  const statusCounts = {
    all: inquiries.length,
    pending: inquiries.filter((i) => i.status === 'pending').length,
    'quote-ready': inquiries.filter((i) => i.status === 'quote-ready').length,
    booked: inquiries.filter((i) => i.status === 'booked').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ========================================
            HEADER
        ======================================== */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
              <Activity className="h-8 w-8 text-white" />
            </div>
            My Wellness Inquiries
          </h1>
          <p className="text-xl text-gray-600">
            Track your health & wellness treatment requests
          </p>
        </div>

        {/* ========================================
            STATUS FILTER TABS
        ======================================== */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 flex flex-wrap gap-2">
          <FilterTab
            label="All"
            count={statusCounts.all}
            active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          />
          <FilterTab
            label="Pending"
            count={statusCounts.pending}
            active={activeFilter === 'pending'}
            onClick={() => setActiveFilter('pending')}
            color="yellow"
          />
          <FilterTab
            label="Quotes Ready"
            count={statusCounts['quote-ready']}
            active={activeFilter === 'quote-ready'}
            onClick={() => setActiveFilter('quote-ready')}
            color="blue"
          />
          <FilterTab
            label="Booked"
            count={statusCounts.booked}
            active={activeFilter === 'booked'}
            onClick={() => setActiveFilter('booked')}
            color="green"
          />
        </div>

        {/* ========================================
            INQUIRY CARDS LIST
        ======================================== */}
        {filteredInquiries.length === 0 ? (
          <EmptyState filter={activeFilter} />
        ) : (
          <div className="space-y-6">
            {filteredInquiries.map((inquiry) => (
              <InquiryCard
                key={inquiry.id}
                inquiry={inquiry}
                onViewProposal={onViewProposal}
                onChatWithAdvisor={onChatWithAdvisor}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// FILTER TAB COMPONENT
// ========================================

interface FilterTabProps {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  color?: 'yellow' | 'blue' | 'green';
}

function FilterTab({ label, count, active, onClick, color }: FilterTabProps) {
  const colorClasses = {
    yellow: 'bg-amber-100 text-amber-800 border-amber-300',
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    green: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  };

  const activeColorClasses = {
    yellow: 'bg-amber-500 text-white border-amber-600',
    blue: 'bg-blue-500 text-white border-blue-600',
    green: 'bg-emerald-500 text-white border-emerald-600',
  };

  const baseClass = active
    ? color
      ? activeColorClasses[color]
      : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-600'
    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200';

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-bold text-lg border-2 transition-all ${baseClass}`}
    >
      {label}
      {count > 0 && (
        <span className="ml-2 px-2 py-1 bg-white/30 rounded-full text-sm">
          {count}
        </span>
      )}
    </button>
  );
}

// ========================================
// INQUIRY CARD COMPONENT
// ========================================

interface InquiryCardProps {
  inquiry: WellnessInquiry;
  onViewProposal: (proposalId: string) => void;
  onChatWithAdvisor: (inquiryId: string) => void;
}

function InquiryCard({ inquiry, onViewProposal, onChatWithAdvisor }: InquiryCardProps) {
  const statusConfig = getStatusConfig(inquiry.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-xl transition-shadow"
    >
      {/* Header with Icon and Status */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b-2 border-gray-200 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl">
            {inquiry.subCategoryIcon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {inquiry.subCategory} - {inquiry.treatmentType}
            </h3>
            <p className="text-lg text-gray-700 font-semibold">
              {inquiry.facilityName}, {inquiry.location}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div
          className={`px-5 py-3 rounded-xl font-bold text-lg border-2 ${statusConfig.bgClass} ${statusConfig.textClass} ${statusConfig.borderClass}`}
        >
          {statusConfig.icon}
          <span className="ml-2">{statusConfig.label}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 mb-5 text-base text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            <span>
              <strong>Submitted:</strong> {inquiry.submittedDate}
            </span>
          </div>
          {inquiry.linkedTripName && (
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-600" />
              <span>
                <strong>For:</strong> "{inquiry.linkedTripName}"
              </span>
            </div>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* Requested Dates */}
          <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
            <p className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Requested
            </p>
            <p className="text-lg font-bold text-gray-900">{inquiry.requestedDates}</p>
          </div>

          {/* Travelers */}
          <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
            <p className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Travelers
            </p>
            <p className="text-lg font-bold text-gray-900">
              {inquiry.travelers.patients} Patient{inquiry.travelers.patients > 1 ? 's' : ''} +{' '}
              {inquiry.travelers.attendants} Attendant{inquiry.travelers.attendants !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Special Needs */}
          <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
            <p className="text-sm font-bold text-gray-600 mb-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Needs
            </p>
            <p className="text-base font-semibold text-gray-900">
              {inquiry.specialNeeds.join(', ')}
            </p>
          </div>
        </div>

        {/* Status-Specific Message */}
        <div className={`rounded-xl p-5 mb-5 border-2 ${statusConfig.messageBgClass} ${statusConfig.messageBorderClass}`}>
          <p className="text-lg font-semibold text-gray-800 flex items-center gap-3">
            {statusConfig.messageIcon}
            {statusConfig.message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {inquiry.status === 'quote-ready' && inquiry.proposalId && (
            <Button
              onClick={() => onViewProposal(inquiry.proposalId!)}
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-5 rounded-xl text-lg font-bold shadow-lg"
            >
              <FileText className="mr-3 h-6 w-6" />
              View Custom Proposal
              <ChevronRight className="ml-3 h-6 w-6" />
            </Button>
          )}

          {inquiry.status === 'booked' && (
            <Button
              onClick={() => console.log('View trip details')}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-5 rounded-xl text-lg font-bold shadow-lg"
            >
              <CheckCircle2 className="mr-3 h-6 w-6" />
              View in Trip
              <ChevronRight className="ml-3 h-6 w-6" />
            </Button>
          )}

          {inquiry.status === 'pending' && (
            <Button
              onClick={() => onChatWithAdvisor(inquiry.id)}
              variant="outline"
              className="flex-1 border-3 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-5 rounded-xl text-lg font-bold"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              Chat with Advisor
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// EMPTY STATE COMPONENT
// ========================================

function EmptyState({ filter }: { filter: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
      <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
        <Activity className="h-16 w-16 text-gray-500" />
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        No {filter !== 'all' ? filter.replace('-', ' ') : ''} inquiries found
      </h3>
      <p className="text-xl text-gray-600 mb-8">
        {filter === 'all'
          ? 'You haven\'t submitted any wellness inquiries yet.'
          : `You don't have any ${filter.replace('-', ' ')} inquiries at the moment.`}
      </p>
      <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-5 rounded-xl text-xl font-bold">
        Browse Wellness Programs
        <ChevronRight className="ml-3 h-6 w-6" />
      </Button>
    </div>
  );
}

// ========================================
// HELPER: STATUS CONFIGURATION
// ========================================

function getStatusConfig(status: InquiryStatus) {
  const configs = {
    pending: {
      label: 'Pending',
      icon: '⏳',
      bgClass: 'bg-amber-100',
      textClass: 'text-amber-800',
      borderClass: 'border-amber-300',
      messageBgClass: 'bg-amber-50',
      messageBorderClass: 'border-amber-300',
      messageIcon: <Clock className="h-6 w-6 text-amber-600" />,
      message: 'Specialist reviewing your request',
    },
    'quote-ready': {
      label: 'Quote Ready',
      icon: '📋',
      bgClass: 'bg-blue-100',
      textClass: 'text-blue-800',
      borderClass: 'border-blue-300',
      messageBgClass: 'bg-blue-50',
      messageBorderClass: 'border-blue-300',
      messageIcon: <FileText className="h-6 w-6 text-blue-600" />,
      message: 'View Custom Proposal (Ready in 24h)',
    },
    booked: {
      label: 'Booked',
      icon: '✅',
      bgClass: 'bg-emerald-100',
      textClass: 'text-emerald-800',
      borderClass: 'border-emerald-300',
      messageBgClass: 'bg-emerald-50',
      messageBorderClass: 'border-emerald-300',
      messageIcon: <CheckCircle2 className="h-6 w-6 text-emerald-600" />,
      message: inquiry => `Added to "${inquiry.linkedTripName}"`,
    },
    completed: {
      label: 'Completed',
      icon: '✔️',
      bgClass: 'bg-gray-100',
      textClass: 'text-gray-800',
      borderClass: 'border-gray-300',
      messageBgClass: 'bg-gray-50',
      messageBorderClass: 'border-gray-300',
      messageIcon: <CheckCircle2 className="h-6 w-6 text-gray-600" />,
      message: 'Treatment completed successfully',
    },
  };

  return configs[status];
}
