import { motion } from 'motion/react';
import {
  CheckCircle2,
  FileText,
  Stethoscope,
  Users,
  Image as ImageIcon,
  X,
  Phone,
  Mail,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// SUCCESS OVERLAY - STRICT IMPLEMENTATION
// Shown after form submission
// ========================================

interface WellnessSuccessOverlayProps {
  categoryName: string;
  onClose: () => void;
  onViewMyRequests: () => void;
}

export function WellnessSuccessOverlay({
  categoryName,
  onClose,
  onViewMyRequests,
}: WellnessSuccessOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden"
      >
        {/* Success Icon Header */}
        <div className="bg-gradient-to-b from-emerald-500 to-teal-600 p-12 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Animated Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <CheckCircle2 className="h-20 w-20 text-emerald-600" />
          </motion.div>

          {/* Namaste Icon */}
          <div className="text-7xl mb-4">🙏</div>

          <h2 className="text-5xl font-bold text-white mb-3">
            Your Interest is Noted!
          </h2>
        </div>

        {/* Content Section */}
        <div className="p-10">
          {/* Main Message */}
          <div className="bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-8 mb-8">
            <p className="text-2xl text-gray-900 leading-relaxed text-center">
              Your request for{' '}
              <span className="font-bold text-emerald-700">{categoryName}</span>{' '}
              has been sent to our Admin Team.
            </p>
          </div>

          {/* Information Box */}
          <div className="bg-teal-50 border-3 border-teal-300 rounded-2xl p-8 mb-8">
            <p className="text-xl text-gray-900 leading-relaxed mb-6">
              We will review your <strong>medical requirements</strong> and{' '}
              <strong>senior care needs</strong>. You will shortly receive a notification with:
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: FileText,
                  text: 'Final Custom Fare & Itinerary',
                  color: 'text-emerald-600',
                },
                {
                  icon: Stethoscope,
                  text: 'Doctor/Facility Verification',
                  color: 'text-blue-600',
                },
                {
                  icon: Users,
                  text: 'Senior Assistance Confirmation',
                  color: 'text-purple-600',
                },
                {
                  icon: ImageIcon,
                  text: 'Special Facility Photos',
                  color: 'text-orange-600',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl ${item.color.replace(
                        'text',
                        'bg'
                      )}/10 flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                      <span className="text-xl font-semibold text-gray-900">{item.text}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Timeline Box */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-gray-900 mb-1">Response Timeline</p>
                <p className="text-lg text-gray-700">
                  Our specialists will review and respond within <strong>24 hours</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Need Immediate Assistance?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 text-center shadow-md">
                <Phone className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">24/7 Helpline</p>
                <p className="text-lg font-bold text-gray-900">1800-XXX-XXXX</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-md">
                <Mail className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">Email Support</p>
                <p className="text-lg font-bold text-gray-900">wellness@grokyatra.com</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={onViewMyRequests}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 rounded-2xl text-xl font-bold shadow-xl"
            >
              <FileText className="mr-2 h-6 w-6" />
              View My Requests
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-3 border-gray-300 text-gray-700 hover:bg-gray-50 py-6 rounded-2xl text-xl font-bold"
            >
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
