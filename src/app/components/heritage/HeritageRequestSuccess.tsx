import { motion } from 'motion/react';
import { CheckCircle2, Flower2, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// HERITAGE REQUEST SUCCESS OVERLAY
// "Atithi Devo Bhava" - Guest is God
// Color Scheme: Cream (#FFF8E1), Gold/Beige, Dark Grey
// ========================================

interface HeritageRequestSuccessProps {
  destinationName: string;
  hasConcessions: boolean;
  hasGuide: boolean;
  hasTransport: boolean;
  hasMultiCategory: boolean;
  onExploreMore: () => void;
  onClose: () => void;
}

export function HeritageRequestSuccess({
  destinationName,
  hasConcessions,
  hasGuide,
  hasTransport,
  hasMultiCategory,
  onExploreMore,
  onClose,
}: HeritageRequestSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', duration: 0.6 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-[#FFF8E1] via-[#FFF3D0] to-[#FFE8B8] rounded-3xl shadow-2xl w-full max-w-3xl border-4 border-amber-500"
      >
        {/* ========================================
            DECORATIVE HEADER WITH INDIAN MOTIF
        ======================================== */}
        <div className="relative bg-gradient-to-r from-amber-900 via-yellow-800 to-orange-900 text-[#FFF8E1] p-12 rounded-t-3xl overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 text-8xl">🪔</div>
            <div className="absolute top-4 right-4 text-8xl">🪔</div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-8xl">🕉️</div>
          </div>

          {/* Success Icon with Lotus */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', duration: 0.8 }}
            className="relative z-10 w-32 h-32 mx-auto mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
              <Flower2 className="h-20 w-20 text-amber-900" strokeWidth={2.5} />
            </div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center border-4 border-[#FFF8E1]">
              <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={3} />
            </div>
          </motion.div>

          {/* Atithi Devo Bhava */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 text-center"
          >
            <p className="text-2xl text-amber-200 mb-2 font-serif italic">
              अतिथि देवो भव:
            </p>
            <p className="text-lg text-amber-300 mb-4">
              "Guest is God"
            </p>
            <h1 className="text-5xl font-bold text-[#FFF8E1]">
              Your Heritage Journey Request is Noted!
            </h1>
          </motion.div>
        </div>

        {/* ========================================
            MAIN CONTENT
        ======================================== */}
        <div className="p-10">
          {/* Confirmation Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-8"
          >
            <p className="text-2xl text-gray-800 mb-2">
              We have received your request for
            </p>
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              {destinationName}
            </h2>
          </motion.div>

          {/* What's Happening */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl shadow-lg border-3 border-amber-300 p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Heritage Experts are currently:
            </h3>

            <div className="space-y-4">
              {/* Concession Verification */}
              {hasConcessions && (
                <ProcessingItem
                  icon="🎓"
                  text="Verifying your Concession Eligibility (Student/Senior)"
                  delay={1.1}
                />
              )}

              {/* Guide & Transport */}
              {(hasGuide || hasTransport) && (
                <ProcessingItem
                  icon="🚍"
                  text="Checking availability of Guides & Transport"
                  delay={1.3}
                />
              )}

              {/* Multi-Category */}
              {hasMultiCategory && (
                <ProcessingItem
                  icon="🗺️"
                  text="Curating nearby Multi-Category attractions for you"
                  delay={1.5}
                />
              )}

              {/* General Processing */}
              <ProcessingItem
                icon="📋"
                text="Preparing detailed itinerary with authentic heritage experiences"
                delay={1.7}
              />

              <ProcessingItem
                icon="💰"
                text="Calculating best fares with applicable discounts"
                delay={1.9}
              />
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl border-2 border-amber-400 p-6 mb-8 text-center"
          >
            <p className="text-xl font-bold text-gray-900 mb-3">
              📧 You will receive a detailed
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-3">
              <span className="bg-amber-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                Itinerary
              </span>
              <span className="text-2xl">+</span>
              <span className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                Fare Quote
              </span>
            </div>
            <p className="text-lg text-gray-800">
              from Admin <strong className="text-amber-900">within 24 hours</strong>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
          >
            <Button
              onClick={onExploreMore}
              className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-8 rounded-2xl text-2xl font-bold shadow-2xl"
            >
              Explore More Heritage Sites
              <ChevronRight className="ml-3 h-8 w-8" />
            </Button>

            <button
              onClick={onClose}
              className="w-full mt-4 text-gray-600 hover:text-gray-900 font-semibold py-3 transition-colors"
            >
              Close & Return to Trip Planning
            </button>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-8 text-center"
          >
            <p className="text-base text-gray-600">
              🔒 Request ID: <strong className="text-gray-900 font-mono">HR-{Date.now().toString().slice(-6)}</strong>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Check your email & SMS for updates • 24/7 Heritage Support: 1800-XXX-XXXX
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// PROCESSING ITEM COMPONENT
// Animated checklist item
// ========================================

interface ProcessingItemProps {
  icon: string;
  text: string;
  delay: number;
}

function ProcessingItem({ icon, text, delay }: ProcessingItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300"
    >
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
        <CheckCircle2 className="h-7 w-7 text-white" strokeWidth={3} />
      </div>
      <span className="text-3xl">{icon}</span>
      <p className="text-lg font-semibold text-gray-900 flex-1">{text}</p>
    </motion.div>
  );
}
