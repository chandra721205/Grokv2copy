import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Gift, Bell } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface WelcomePostOnboardingProps {
  onNext: () => void;
}

export function WelcomePostOnboarding({ onNext }: WelcomePostOnboardingProps) {
  const benefits = [
    { icon: TrendingUp, title: 'Smart Recommendations', desc: 'AI-powered suggestions' },
    { icon: Gift, title: 'Exclusive Offers', desc: 'Special deals for you' },
    { icon: Bell, title: 'Real-time Updates', desc: 'Stay informed always' },
  ];

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-blue-50 via-purple-50 to-orange-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-12"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        >
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome Aboard!
        </h1>
        <p className="text-xl text-gray-700">
          Let's make your journey unforgettable
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 space-y-4"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-md flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <benefit.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl p-6 text-white mt-8"
        >
          <h3 className="font-bold text-xl mb-2">🎁 Special Offer</h3>
          <p className="text-white/90 mb-4">
            Get 20% off on your first booking with code: <span className="font-bold">WELCOME20</span>
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 inline-block">
            <span className="font-mono font-bold">WELCOME20</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6"
      >
        <Button
          onClick={onNext}
          className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
        >
          Continue to App
        </Button>
      </motion.div>
    </div>
  );
}
