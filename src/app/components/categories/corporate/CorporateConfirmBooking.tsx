import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import {
  CheckCircle,
  Download,
  Share2,
  Calendar,
  User,
  Mail,
  Phone,
  FileText,
  Building2,
  MapPin,
  Clock,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface CorporateConfirmBookingProps {
  categoryTitle: string;
  categoryEmoji: string;
  formData: any;
  onBackToHub: () => void;
}

export function CorporateConfirmBooking({
  categoryTitle,
  categoryEmoji,
  formData,
  onBackToHub,
}: CorporateConfirmBookingProps) {
  const bookingData = {
    confirmationId: `BKG-${Date.now().toString().slice(-8)}`,
    status: 'Confirmed',
    eventDate: formData.preferredDates || 'To be finalized',
    venue: '[Admin: Confirmed Venue Name]',
    location: formData.preferredCity || '[Admin: City]',
    coordinator: {
      name: '[Admin: Event Coordinator Name]',
      email: 'coordinator@grokyatra.com',
      phone: '+91 98765 43210',
    },
    documents: [
      'Event Agreement',
      'Venue Contract',
      'F&B Menu',
      'AV Requirements',
      'Run-of-Show',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-white text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-white/90 text-sm mb-4">
            Your {categoryTitle} event is confirmed
          </p>
          <Badge className="bg-white/20 text-white text-base font-bold px-4 py-2 backdrop-blur-sm">
            {bookingData.confirmationId}
          </Badge>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-4 pb-8 space-y-6">
        {/* Event Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Event Summary</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-1">Company</p>
                <p className="text-sm font-semibold text-gray-900">{formData.companyName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-1">Venue</p>
                <p className="text-sm font-semibold text-gray-900">{bookingData.venue}</p>
                <p className="text-xs text-gray-600">{bookingData.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-1">Date</p>
                <p className="text-sm font-semibold text-gray-900">{bookingData.eventDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-semibold text-gray-900">{formData.duration}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Assigned Coordinator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Your Event Coordinator</h3>
              <p className="text-xs text-gray-600">Your dedicated point of contact</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-900">{bookingData.coordinator.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href={`mailto:${bookingData.coordinator.email}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {bookingData.coordinator.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a
                href={`tel:${bookingData.coordinator.phone}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {bookingData.coordinator.phone}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Shared Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-6 shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Event Documents</h3>
          
          <div className="space-y-2">
            {bookingData.documents.map((doc, index) => (
              <button
                key={index}
                onClick={() => toast.success(`Downloading ${doc}...`)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-900">{doc}</span>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>

          <Button
            onClick={() => toast.success('Downloading all documents...')}
            variant="outline"
            className="w-full mt-4 h-11 rounded-full font-semibold border-2"
          >
            <Download className="w-5 h-5 mr-2" />
            Download All Documents
          </Button>
        </motion.div>

        {/* Cancellation Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-900 mb-2">Cancellation & Compliance Notes</p>
              <ul className="space-y-1 text-xs text-amber-800">
                <li>• Free cancellation up to 30 days before event</li>
                <li>• 50% charge for cancellations 15-30 days before event</li>
                <li>• No refund for cancellations within 15 days</li>
                <li>• All venue and vendor contracts subject to their terms</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 shadow-xl"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-1">What Happens Next?</h3>
              <p className="text-white/90 text-xs">Your event journey timeline</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <p className="text-white font-semibold text-sm mb-1">Within 24 hours</p>
              <p className="text-white/90 text-xs">
                Your coordinator will reach out to finalize dates and logistics
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <p className="text-white font-semibold text-sm mb-1">2 weeks before event</p>
              <p className="text-white/90 text-xs">
                Final run-through, menu approval, and AV check
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
              <p className="text-white font-semibold text-sm mb-1">Event day</p>
              <p className="text-white/90 text-xs">
                Full on-site support from setup to teardown
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-3"
        >
          <Button
            onClick={() => toast.success('Sharing booking confirmation...')}
            className="w-full h-12 rounded-full font-bold text-base bg-slate-600 hover:bg-slate-700"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Confirmation
          </Button>

          <Button
            onClick={onBackToHub}
            variant="outline"
            className="w-full h-12 rounded-full font-semibold text-base border-2 border-gray-300"
          >
            Back to Corporate Hub
          </Button>
        </motion.div>

        {/* Confirmation Email Note */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            A detailed confirmation email has been sent to your registered email address
          </p>
        </div>
      </div>
    </div>
  );
}
