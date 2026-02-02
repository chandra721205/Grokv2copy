import { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface WelcomeVerifiedProps {
  onNext: () => void;
}

export function WelcomeVerified({ onNext }: WelcomeVerifiedProps) {
  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-6 relative overflow-hidden">
      {/* Confetti effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, opacity: 1 }}
          animate={{ y: 800, opacity: 0 }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 0.5,
            repeat: Infinity,
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            width: '8px',
            height: '8px',
            backgroundColor: ['#fbbf24', '#f472b6', '#60a5fa', '#34d399'][Math.floor(Math.random() * 4)],
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="relative z-10"
      >
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center text-white relative z-10"
      >
        <h1 className="text-4xl font-bold mb-4">
          You're Verified! 🎉
        </h1>
        <p className="text-xl mb-8 text-white/90">
          Welcome to GrokYatra community
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/20 backdrop-blur-md rounded-3xl p-6 mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold text-lg">Verified Badge</span>
          </div>
          <p className="text-sm text-white/90">
            You now have access to all features and exclusive deals
          </p>
        </motion.div>

        <Button
          onClick={onNext}
          className="w-full h-14 rounded-full bg-white text-blue-600 hover:bg-gray-100 shadow-lg font-bold"
        >
          Let's Get Started
        </Button>
      </motion.div>
    </div>
  );
}
