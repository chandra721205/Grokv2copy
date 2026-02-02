import { motion } from 'motion/react';
import {
  Heart,
  Leaf,
  Calendar,
  ChevronRight,
  FileText,
  Clock,
  MapPin,
  Phone,
  Utensils,
  User,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// TRIP HUB: WELLNESS SERVICES SECTION
// Shows wellness services within trip detail view
// ========================================

interface WellnessService {
  id: string;
  icon: string;
  category: string;
  dates: string;
  facilityName: string;
  location: string;
  treatmentType: string;
  status: 'confirmed' | 'quote-pending' | 'in-progress';
  proposalId?: string;
}

interface TripHubWellnessSectionProps {
  services: WellnessService[];
  onViewDetails: (serviceId: string) => void;
  onReviewProposal: (proposalId: string) => void;
}

export function TripHubWellnessSection({
  services,
  onViewDetails,
  onReviewProposal,
}: TripHubWellnessSectionProps) {
  if (services.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg border-3 border-emerald-300 p-6">
      {/* Section Header */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
          <Heart className="h-6 w-6 text-white" />
        </div>
        Upcoming Wellness Services ({services.length})
      </h3>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service) => (
          <WellnessServiceCard
            key={service.id}
            service={service}
            onViewDetails={onViewDetails}
            onReviewProposal={onReviewProposal}
          />
        ))}
      </div>
    </div>
  );
}

// ========================================
// WELLNESS SERVICE CARD
// ========================================

interface WellnessServiceCardProps {
  service: WellnessService;
  onViewDetails: (serviceId: string) => void;
  onReviewProposal: (proposalId: string) => void;
}

function WellnessServiceCard({
  service,
  onViewDetails,
  onReviewProposal,
}: WellnessServiceCardProps) {
  const statusConfig = getStatusConfig(service.status);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl p-5 border-2 border-emerald-200 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
          {service.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-lg font-bold text-gray-900">
                  {service.dates} • {service.category}
                </p>
              </div>
              <h4 className="text-xl font-bold text-emerald-700 mb-1">
                {service.facilityName}, {service.location}
              </h4>
              <p className="text-base text-gray-600">{service.treatmentType}</p>
            </div>

            {/* Status Badge */}
            <div
              className={`px-4 py-2 rounded-xl font-bold text-sm border-2 whitespace-nowrap ${statusConfig.bgClass} ${statusConfig.textClass} ${statusConfig.borderClass}`}
            >
              {statusConfig.icon} {statusConfig.label}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            {service.status === 'confirmed' && (
              <Button
                onClick={() => onViewDetails(service.id)}
                variant="outline"
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-5 py-3 rounded-lg text-base font-bold"
              >
                View Details
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            )}

            {service.status === 'quote-pending' && service.proposalId && (
              <Button
                onClick={() => onReviewProposal(service.proposalId!)}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-5 py-3 rounded-lg text-base font-bold"
              >
                Review Proposal
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// WELLNESS ITINERARY BLOCK
// Shows wellness activities in day-wise itinerary
// ========================================

interface WellnessItineraryItem {
  time: string;
  icon: React.ReactNode;
  title: string;
  location: string;
  details: string;
  contactNumber?: string;
}

interface WellnessItineraryBlockProps {
  date: string;
  dayLabel: string;
  activities: WellnessItineraryItem[];
}

export function WellnessItineraryBlock({
  date,
  dayLabel,
  activities,
}: WellnessItineraryBlockProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
      {/* Date Header */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-200">
        <Calendar className="h-8 w-8 text-emerald-600" />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{date}</h3>
          <p className="text-base text-gray-600">{dayLabel}</p>
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-5">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="flex items-start gap-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200"
          >
            {/* Time */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Clock className="h-5 w-5 text-emerald-600" />
              <span className="text-lg font-bold text-gray-900 whitespace-nowrap">
                {activity.time}
              </span>
            </div>

            {/* Icon */}
            <div className="flex-shrink-0 mt-1">{activity.icon}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h4>
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <p className="text-base text-gray-700">{activity.location}</p>
              </div>
              <p className="text-base text-gray-600 mb-3">{activity.details}</p>
              
              {activity.contactNumber && (
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border-2 border-blue-200 w-fit">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-base font-bold text-blue-700">
                    Hospital Contact: {activity.contactNumber}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========================================
// EXAMPLE USAGE: Pre-configured wellness day
// ========================================

export function ExampleWellnessDay() {
  const activities: WellnessItineraryItem[] = [
    {
      time: '9:00 AM',
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: '🏥 Hospital Admission',
      location: 'Apollo Hospitals, Greams Road',
      details: '• Report submission • Room allocation',
      contactNumber: '+91-XXXXXXXXXX',
    },
    {
      time: '1:00 PM',
      icon: <User className="h-6 w-6 text-blue-600" />,
      title: '👨‍⚕️ Doctor Consultation',
      location: 'Apollo Hospitals, Consultation Wing',
      details: 'Dr. Rajesh Verma - Pre-surgery briefing',
      contactNumber: '+91-XXXXXXXXXX',
    },
    {
      time: '5:00 PM',
      icon: <Utensils className="h-6 w-6 text-purple-600" />,
      title: '🍽 Special Dinner',
      location: 'Patient Room',
      details: 'Jain diabetic meal delivered to room',
    },
  ];

  return (
    <WellnessItineraryBlock
      date="April 15, Monday"
      dayLabel="Day 1 - Hospital Admission"
      activities={activities}
    />
  );
}

// ========================================
// HELPER: STATUS CONFIGURATION
// ========================================

function getStatusConfig(status: 'confirmed' | 'quote-pending' | 'in-progress') {
  const configs = {
    confirmed: {
      label: 'Confirmed',
      icon: '✅',
      bgClass: 'bg-emerald-100',
      textClass: 'text-emerald-800',
      borderClass: 'border-emerald-300',
    },
    'quote-pending': {
      label: 'Quote Pending',
      icon: '📋',
      bgClass: 'bg-blue-100',
      textClass: 'text-blue-800',
      borderClass: 'border-blue-300',
    },
    'in-progress': {
      label: 'In Progress',
      icon: '⏳',
      bgClass: 'bg-amber-100',
      textClass: 'text-amber-800',
      borderClass: 'border-amber-300',
    },
  };

  return configs[status];
}
