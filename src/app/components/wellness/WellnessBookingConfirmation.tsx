import { motion } from 'motion/react';
import {
  CheckCircle2,
  Heart,
  Utensils,
  Calendar,
  Phone,
  FileText,
  Users,
  Plane,
  ClipboardCheck,
  Home,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS BOOKING CONFIRMATION SCREEN
// Post-payment success screen
// ========================================

interface WellnessBookingConfirmationProps {
  bookingDetails: {
    packageType: string;
    seniorCareArranged: boolean;
    specialDietConfirmed: boolean;
    tripName: string;
  };
  onViewItinerary: () => void;
  onContactHealthTeam: () => void;
  onBackToTrip: () => void;
}

export function WellnessBookingConfirmation({
  bookingDetails,
  onViewItinerary,
  onContactHealthTeam,
  onBackToTrip,
}: WellnessBookingConfirmationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ========================================
            SUCCESS ANIMATION HEADER
        ======================================== */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <CheckCircle2 className="h-20 w-20 text-white" strokeWidth={3} />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold text-gray-900 mb-4"
          >
            🎉 Your Wellness Journey is Confirmed!
          </motion.h1>
        </motion.div>

        {/* ========================================
            CONFIRMATION CHECKLIST
        ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl border-3 border-emerald-300 p-8 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <ConfirmationItem
              icon={<Heart className="h-8 w-8 text-red-500" />}
              text={`${bookingDetails.packageType} Booked`}
              completed
            />
            {bookingDetails.seniorCareArranged && (
              <ConfirmationItem
                icon={<Users className="h-8 w-8 text-orange-500" />}
                text="Senior Care Arranged"
                completed
              />
            )}
            {bookingDetails.specialDietConfirmed && (
              <ConfirmationItem
                icon={<Utensils className="h-8 w-8 text-purple-500" />}
                text="Special Diet Confirmed"
                completed
              />
            )}
            <ConfirmationItem
              icon={<Calendar className="h-8 w-8 text-blue-500" />}
              text={`Trip Updated: "${bookingDetails.tripName}"`}
              completed
            />
          </div>
        </motion.div>

        {/* ========================================
            WHAT'S NEXT SECTION
        ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl border-3 border-blue-300 p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-blue-600" />
            📱 What's Next:
          </h2>

          <div className="space-y-5">
            <NextStep
              number={1}
              icon={<Phone className="h-6 w-6 text-emerald-600" />}
              title="Health coordinator contacts in 2 hours"
              description="Your dedicated wellness coordinator will reach out to confirm all details"
            />
            <NextStep
              number={2}
              icon={<FileText className="h-6 w-6 text-blue-600" />}
              title="Receive hospital admission documents"
              description="All necessary forms and pre-admission paperwork sent via email"
            />
            <NextStep
              number={3}
              icon={<Plane className="h-6 w-6 text-purple-600" />}
              title="Visa assistance (if international)"
              description="Our team helps with visa documentation and travel arrangements"
            />
            <NextStep
              number={4}
              icon={<ClipboardCheck className="h-6 w-6 text-orange-600" />}
              title="Pre-travel health checklist"
              description="Personalized checklist to prepare for your wellness journey"
            />
          </div>
        </motion.div>

        {/* ========================================
            ACTION BUTTONS
        ======================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-4"
        >
          {/* Primary: View Itinerary */}
          <Button
            onClick={onViewItinerary}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-8 rounded-2xl text-2xl font-bold shadow-lg"
          >
            <FileText className="mr-3 h-8 w-8" />
            📋 View Complete Itinerary
          </Button>

          {/* Secondary: Contact Health Team */}
          <Button
            onClick={onContactHealthTeam}
            variant="outline"
            className="w-full border-3 border-blue-600 text-blue-700 hover:bg-blue-50 py-8 rounded-2xl text-2xl font-bold"
          >
            <Phone className="mr-3 h-8 w-8" />
            👨‍⚕️ Contact Health Team (24/7)
          </Button>

          {/* Tertiary: Back to Trip */}
          <Button
            onClick={onBackToTrip}
            variant="outline"
            className="w-full border-2 border-gray-400 text-gray-700 hover:bg-gray-100 py-6 rounded-2xl text-xl font-semibold"
          >
            <Home className="mr-3 h-6 w-6" />
            🏠 Back to Trip Planning
          </Button>
        </motion.div>

        {/* ========================================
            SUPPORT MESSAGE
        ======================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-gray-600">
            🔒 Your booking is secured • 📞 24/7 support available •{' '}
            <strong className="text-emerald-700">Booking ID: WB-{Date.now().toString().slice(-6)}</strong>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ========================================
// CONFIRMATION ITEM COMPONENT
// ========================================

interface ConfirmationItemProps {
  icon: React.ReactNode;
  text: string;
  completed: boolean;
}

function ConfirmationItem({ icon, text, completed }: ConfirmationItemProps) {
  return (
    <div className="flex items-center gap-4 bg-emerald-50 rounded-xl p-5 border-2 border-emerald-200">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <p className="text-lg font-bold text-gray-900">{text}</p>
      </div>
      {completed && (
        <CheckCircle2 className="h-8 w-8 text-emerald-600 flex-shrink-0" />
      )}
    </div>
  );
}

// ========================================
// NEXT STEP COMPONENT
// ========================================

interface NextStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function NextStep({ number, icon, title, description }: NextStepProps) {
  return (
    <div className="flex items-start gap-5 bg-white rounded-xl p-6 border-2 border-blue-200">
      {/* Step Number */}
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
        {number}
      </div>

      {/* Icon */}
      <div className="flex-shrink-0 mt-1">{icon}</div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}
