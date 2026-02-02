import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Heart,
  Clock,
  FileText,
  DollarSign,
  PartyPopper,
  Home,
  ArrowRight,
  Download,
  Share2,
  Bell,
  Mail,
  MessageSquare,
  Loader2,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

// ========================================
// INTEREST CONFIRMATION SCREEN
// Post-Submission Success & Grok AI Processing
// ========================================

interface InterestConfirmationProps {
  religion: {
    id: string;
    name: string;
    emoji: string;
    gradient: string;
  };
  submittedPlan: {
    destinations: Array<{ name: string }>;
    travelDates: { arrival: string; departure: string };
    groupSize: number;
    specialRequests: string[];
    spiritualPreferences: string[];
    packageType: 'existing' | 'custom';
    budgetRange?: { min: number; max: number };
  };
  onClose: () => void;
  onViewOtherReligions: () => void;
  referenceNumber: string;
}

export function InterestConfirmation({
  religion,
  submittedPlan,
  onClose,
  onViewOtherReligions,
  referenceNumber,
}: InterestConfirmationProps) {
  const [processingStage, setProcessingStage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  // Grok AI processing stages animation
  const processingStages = [
    {
      id: 1,
      text: 'Analyzing destination sequences and optimal routes...',
      duration: 3000,
    },
    {
      id: 2,
      text: 'Matching ritual timings with your travel dates...',
      duration: 3000,
    },
    {
      id: 3,
      text: 'Checking festival calendars and special events...',
      duration: 3000,
    },
    {
      id: 4,
      text: 'Identifying senior-friendly facilities and accommodations...',
      duration: 3000,
    },
    {
      id: 5,
      text: 'Finalizing customized itinerary and budget estimates...',
      duration: 3000,
    },
  ];

  useEffect(() => {
    // Hide confetti after 3 seconds
    const confettiTimer = setTimeout(() => setShowConfetti(false), 3000);

    // Cycle through processing stages
    const stageTimer = setInterval(() => {
      setProcessingStage((prev) => (prev + 1) % processingStages.length);
    }, 3000);

    return () => {
      clearTimeout(confettiTimer);
      clearInterval(stageTimer);
    };
  }, []);

  const willReceive = [
    {
      icon: FileText,
      title: 'Customized Itinerary',
      description: 'Day-by-day plan with optimal route covering all selected destinations',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Clock,
      title: 'Ritual Schedule Alignment',
      description: 'Prayer times, ceremonies, and participation opportunities matched to your dates',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Heart,
      title: 'Senior Care Facilities List',
      description:
        'Wheelchair access, medical support, rest areas, and special assistance at each site',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: PartyPopper,
      title: 'Festival Participation Options',
      description: 'Special events, celebrations, and cultural experiences during your visit',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: DollarSign,
      title: 'Budget Breakdown',
      description:
        'Detailed cost estimates for accommodation, transport, meals, and entrance fees',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Confetti Effect (First 3 seconds) */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 ${
                ['bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'][
                  i % 5
                ]
              } rounded-full`}
              initial={{
                top: '-20px',
                left: `${Math.random() * 100}%`,
                opacity: 1,
              }}
              animate={{
                top: '100vh',
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'easeIn',
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12 max-w-5xl mx-auto">
        {/* Success Header */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 shadow-2xl">
            <CheckCircle2 className="h-14 w-14 text-white" />
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            ✓ Interest Successfully Captured!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Thank you for sharing your pilgrimage interests. Our system has noted your preferences
            and Grok AI is now crafting your personalized spiritual journey.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4"
          >
            <Badge className="bg-purple-100 text-purple-800 border-2 border-purple-300 px-4 py-2 text-sm">
              Reference Number: #{referenceNumber}
            </Badge>
          </motion.div>
        </motion.div>

        {/* Summary Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Destinations Summary */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Selected Destinations</h3>
                <p className="text-xs text-gray-600">{submittedPlan.destinations.length} sites</p>
              </div>
            </div>
            <div className="space-y-2">
              {submittedPlan.destinations.slice(0, 3).map((dest, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-sm font-semibold text-gray-900">{dest.name}</p>
                </div>
              ))}
              {submittedPlan.destinations.length > 3 && (
                <p className="text-xs text-gray-600 text-center pt-2">
                  +{submittedPlan.destinations.length - 3} more destinations
                </p>
              )}
            </div>
          </div>

          {/* Travel Period */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Travel Period</h3>
                <p className="text-xs text-gray-600">Dates & Duration</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <p className="text-xs text-gray-600 mb-1">Arrival</p>
                <p className="text-sm font-semibold text-gray-900">
                  {submittedPlan.travelDates.arrival || 'Not specified'}
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <p className="text-xs text-gray-600 mb-1">Departure</p>
                <p className="text-sm font-semibold text-gray-900">
                  {submittedPlan.travelDates.departure || 'Not specified'}
                </p>
              </div>
            </div>
          </div>

          {/* Group Size */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Group Size</h3>
                <p className="text-xs text-gray-600">Total travelers</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
              <p className="text-4xl font-bold text-green-700 mb-1">
                {submittedPlan.groupSize}
              </p>
              <p className="text-sm text-gray-600">
                {submittedPlan.groupSize === 1 ? 'Person' : 'People'}
              </p>
            </div>
          </div>

          {/* Special Requests */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-dashed border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Special Requests</h3>
                <p className="text-xs text-gray-600">
                  {submittedPlan.specialRequests.length} requirements
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {submittedPlan.specialRequests.length > 0 ? (
                submittedPlan.specialRequests.map((request, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-amber-50 rounded-lg p-2 border border-amber-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{request}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600 text-center py-2">No special requests</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Grok AI Processing Animation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-3xl shadow-2xl p-8 mb-12 relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
              animate={{
                backgroundPosition: ['0px 0px', '60px 60px'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          <div className="relative z-10 text-white">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Grok AI Processing</h2>
                <p className="text-white/90 text-sm">
                  Crafting your personalized pilgrimage experience
                </p>
              </div>
            </div>

            {/* Processing Stage Indicator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Loader2 className="h-6 w-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <motion.p
                    key={processingStage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white font-medium"
                  >
                    {processingStages[processingStage].text}
                  </motion.p>
                  <div className="mt-4 flex gap-2">
                    {processingStages.map((stage, idx) => (
                      <div
                        key={stage.id}
                        className={`h-1 rounded-full flex-1 transition-all ${
                          idx === processingStage
                            ? 'bg-white'
                            : idx < processingStage
                            ? 'bg-white/50'
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-flex items-center gap-3">
              <Clock className="h-5 w-5" />
              <div>
                <p className="text-xs text-white/80">Estimated Response Time</p>
                <p className="font-bold text-lg">24-48 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What You'll Receive */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Receive
          </h2>

          <div className="space-y-4">
            {willReceive.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Notification Preference */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 mb-12 border-2 border-blue-200"
        >
          <h3 className="font-bold text-gray-900 mb-4 text-center">
            How would you like to be notified?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="bg-white border-2 border-blue-300 text-blue-700 hover:bg-blue-50 h-auto py-4 flex flex-col items-center gap-2">
              <Mail className="h-6 w-6" />
              <span className="text-sm font-semibold">Email</span>
              <span className="text-xs text-gray-600">Detailed plan via email</span>
            </Button>
            <Button className="bg-white border-2 border-green-300 text-green-700 hover:bg-green-50 h-auto py-4 flex flex-col items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              <span className="text-sm font-semibold">SMS</span>
              <span className="text-xs text-gray-600">Quick updates via text</span>
            </Button>
            <Button className="bg-white border-2 border-purple-300 text-purple-700 hover:bg-purple-50 h-auto py-4 flex flex-col items-center gap-2">
              <Bell className="h-6 w-6" />
              <span className="text-sm font-semibold">App Notification</span>
              <span className="text-xs text-gray-600">In-app alerts</span>
            </Button>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-8"
        >
          <h3 className="font-bold text-gray-900 mb-4 text-center">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
              <Download className="mr-2 h-5 w-5" />
              Download Summary
            </Button>
            <Button className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
              <Share2 className="mr-2 h-5 w-5" />
              Share with Group
            </Button>
            <Button className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
              <Mail className="mr-2 h-5 w-5" />
              Email Copy
            </Button>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Button
            onClick={onClose}
            className="flex-1 bg-white border-4 border-gray-300 text-gray-900 hover:bg-gray-50 h-16 text-lg shadow-xl"
          >
            <Home className="mr-2 h-6 w-6" />
            Return to Dashboard
          </Button>
          <Button
            onClick={onViewOtherReligions}
            className={`flex-1 bg-gradient-to-r ${religion.gradient} text-white hover:shadow-2xl h-16 text-lg shadow-xl`}
          >
            Explore Other Religions
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            🙏 Your spiritual journey begins with understanding. We're honored to assist in
            planning your pilgrimage.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Reference: #{referenceNumber} | Submitted:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
