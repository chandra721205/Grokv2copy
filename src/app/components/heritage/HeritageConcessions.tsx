import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, GraduationCap, Users, Accessibility, Gift } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HeritageConcessionsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ConcessionCard {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  benefits: string[];
  buttonText: string;
  buttonAction: () => void;
  gradient: string;
  iconColor: string;
}

export function HeritageConcessions({ isOpen, onClose }: HeritageConcessionsProps) {
  const concessions: ConcessionCard[] = [
    {
      id: 'student',
      icon: '🎓',
      title: 'Student Concessions',
      subtitle: 'Valid ID Required',
      benefits: [
        'Archaeological Survey of India: 50% off entry',
        'State Tourism: 30% off guided tours',
        'Railway: 40% off heritage train journeys',
      ],
      buttonText: 'View 12+ Student Offers',
      buttonAction: () => console.log('View Student Offers'),
      gradient: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'senior',
      icon: '👵',
      title: 'Senior Citizen Benefits',
      subtitle: '60+',
      benefits: [
        'Free entry at 25+ monuments',
        'Priority access queues',
        'Senior-friendly transport: 20% off',
      ],
      buttonText: 'View Senior Packages',
      buttonAction: () => console.log('View Senior Packages'),
      gradient: 'from-purple-50 to-pink-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'accessibility',
      icon: '♿',
      title: 'Differently-Abled Facilities',
      subtitle: 'Full Accessibility Support',
      benefits: [
        'Wheelchair rental free at UNESCO sites',
        'Companion free entry',
        'Sign language guides available',
      ],
      buttonText: 'View Accessibility Map',
      buttonAction: () => console.log('View Accessibility Map'),
      gradient: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600',
    },
    {
      id: 'group',
      icon: '👨‍👩‍👧‍👦',
      title: 'Group Discounts',
      subtitle: '6+ people',
      benefits: [
        '15% off total for groups 6-10',
        '25% off for groups 11-20',
        'Free tour coordinator for 15+ groups',
      ],
      buttonText: 'Calculate Group Discount',
      buttonAction: () => console.log('Calculate Group Discount'),
      gradient: 'from-amber-50 to-yellow-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 'government',
      icon: '🏛️',
      title: 'Government Heritage Schemes',
      subtitle: 'National & State Programs',
      benefits: [
        '"Adopt a Heritage" Corporate Packages',
        '"Swadesh Darshan" Circuit Discounts',
        'State Cultural Department Vouchers',
      ],
      buttonText: 'Check Eligibility',
      buttonAction: () => console.log('Check Government Scheme Eligibility'),
      gradient: 'from-orange-50 to-red-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-cream-50 to-amber-50 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <Gift className="h-8 w-8" />
                    Heritage Concessions & Special Offers
                  </h2>
                  <p className="text-lg text-purple-100">
                    Available discounts for your group profile
                  </p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-full p-3"
                >
                  <X className="h-8 w-8" />
                </Button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-8">
              <div className="space-y-6">
                {/* Info Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-blue-50 border-3 border-blue-300 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    Smart Savings
                  </h3>
                  <p className="text-base text-gray-700">
                    We've highlighted the discounts that apply to your group. Simply present valid ID/documents at the venue to claim your concession.
                  </p>
                </motion.div>

                {/* Discount Cards by Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {concessions.map((concession, index) => (
                    <motion.div
                      key={concession.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`bg-gradient-to-br ${concession.gradient} rounded-2xl border-3 border-gray-300 p-8 shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      {/* Card Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-6xl">{concession.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {concession.title}
                          </h3>
                          <p className="text-base font-semibold text-gray-600">
                            {concession.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Benefits List */}
                      <div className="bg-white rounded-xl p-5 mb-6 border-2 border-gray-200">
                        <ul className="space-y-3">
                          {concession.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                              <span className="text-green-600 font-bold text-xl mt-0.5">•</span>
                              <span className="font-semibold">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <Button
                        onClick={concession.buttonAction}
                        className={`w-full ${concession.iconColor} bg-white border-3 border-current hover:bg-gray-50 py-5 rounded-xl text-base font-bold shadow-md flex items-center justify-center gap-3`}
                      >
                        {concession.buttonText}
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border-3 border-amber-400 p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">📋</span>
                    Important Notes
                  </h3>
                  <div className="space-y-3 text-base text-gray-700">
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        <span className="bg-yellow-200 px-2 py-0.5 rounded font-bold">[Admin: Update This Text]</span> All concessions require valid government-issued ID or proof documents
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        Discounts cannot be combined unless explicitly stated
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        Some monuments may have different policies - verify at ticket counter
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        Group bookings must be made 48 hours in advance for discounts to apply
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* Footer Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <Button
                    onClick={() => console.log('Apply Concessions to Booking')}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 rounded-2xl text-lg font-bold shadow-2xl"
                  >
                    Apply Concessions to My Booking
                  </Button>
                  <Button
                    onClick={() => console.log('Compare All Discounts')}
                    variant="outline"
                    className="flex-1 border-3 border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100 px-8 py-6 rounded-2xl text-lg font-bold"
                  >
                    Compare All Discounts
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="border-3 border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-6 rounded-2xl text-lg font-bold"
                  >
                    Close
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}