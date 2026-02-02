import { useState } from 'react';
import { motion } from 'motion/react';
import { Bell, MapPin, Camera, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface GetStartedProps {
  onComplete: () => void;
}

const permissions = [
  {
    icon: Bell,
    title: 'Notifications',
    desc: 'Get updates on bookings and offers',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: MapPin,
    title: 'Location',
    desc: 'Find nearby attractions and services',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Camera,
    title: 'Camera & Photos',
    desc: 'Upload documents and share memories',
    color: 'from-purple-500 to-purple-600',
  },
];

export function GetStarted({ onComplete }: GetStartedProps) {
  const [granted, setGranted] = useState<boolean[]>([false, false, false]);

  const handleGrant = (index: number) => {
    const newGranted = [...granted];
    newGranted[index] = true;
    setGranted(newGranted);
  };

  const allGranted = granted.every(g => g);

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-blue-50 to-purple-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-12"
      >
        <h1 className="text-3xl font-bold mb-2">Enable Permissions</h1>
        <p className="text-gray-600">For the best experience, allow these permissions</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 space-y-4"
      >
        {permissions.map((permission, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`bg-white rounded-3xl p-6 shadow-md ${granted[index] ? 'ring-2 ring-green-500' : ''}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${permission.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <permission.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{permission.title}</h3>
                <p className="text-gray-600 text-sm">{permission.desc}</p>
              </div>
            </div>
            {!granted[index] ? (
              <Button
                onClick={() => handleGrant(index)}
                variant="outline"
                className="w-full rounded-full"
              >
                Allow
              </Button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <Check className="w-5 h-5" />
                <span>Granted</span>
              </div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-blue-50 rounded-3xl p-4 text-sm text-gray-700"
        >
          ℹ️ You can change these permissions anytime in app settings
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 space-y-4"
      >
        <Button
          onClick={onComplete}
          disabled={!allGranted}
          className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg disabled:opacity-50"
        >
          Start Exploring
        </Button>
        <button
          onClick={onComplete}
          className="w-full text-gray-600 text-sm"
        >
          Skip for now
        </button>
      </motion.div>
    </div>
  );
}
