import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Calendar, MapPin, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface OnboardingSlidesProps {
  onNext: () => void;
}

const slides = [
  {
    icon: Bot,
    title: 'AI-Powered Planning',
    description: 'Grok AI helps you create perfect itineraries based on your interests and preferences',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: Calendar,
    title: 'Custom Tours',
    description: 'Mix & match from 12 tourism categories to create your dream journey',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: MapPin,
    title: 'Explore India',
    description: 'Discover hidden gems, heritage sites, and adventures across incredible India',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Verified bookings, secure payments, and 24/7 support for worry-free travel',
    gradient: 'from-green-500 to-teal-600',
  },
];

export function OnboardingSlides({ onNext }: OnboardingSlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNext();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-white p-6">
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full text-center"
          >
            <div className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-full flex items-center justify-center shadow-2xl`}>
              {<CurrentIcon className="w-16 h-16 text-white" />}
            </div>
            <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-gray-600 text-lg px-4">{slides[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: currentSlide === index ? 32 : 8,
                backgroundColor: currentSlide === index ? '#3b82f6' : '#d1d5db',
              }}
              className="h-2 rounded-full"
            />
          ))}
        </div>

        <div className="flex gap-4">
          {currentSlide > 0 && (
            <Button
              onClick={handlePrev}
              variant="outline"
              className="flex-1 h-14 rounded-full"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            className={`${currentSlide === 0 ? 'w-full' : 'flex-1'} h-14 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} hover:opacity-90 text-white shadow-lg`}
          >
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            {currentSlide !== slides.length - 1 && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>

        <button
          onClick={onNext}
          className="w-full text-gray-500 text-sm"
        >
          Skip
        </button>
      </div>
    </div>
  );
}