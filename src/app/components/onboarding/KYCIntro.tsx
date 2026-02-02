import { motion } from 'motion/react';
import { FileCheck, Shield, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface KYCIntroProps {
  onNext: () => void;
}

const steps = [
  { icon: Shield, title: 'Phone Verification', desc: 'Verify your mobile number' },
  { icon: FileCheck, title: 'Document Upload', desc: 'Upload ID proof securely' },
  { icon: Check, title: 'Get Verified', desc: 'Start booking your trips' },
];

export function KYCIntro({ onNext }: KYCIntroProps) {
  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-blue-50 to-purple-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-12"
      >
        <h1 className="text-3xl font-bold mb-2">Complete Your KYC</h1>
        <p className="text-gray-600">Quick verification for secure bookings</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1"
      >
        <div className="space-y-6 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-md flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-6 mb-8"
        >
          <h4 className="font-bold mb-2">Why KYC?</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Secure and safe bookings</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Faster checkout process</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Access to exclusive deals</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Button
          onClick={onNext}
          className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
        >
          Start Verification
        </Button>
        <button className="w-full mt-4 text-gray-600 text-sm">
          Skip for now
        </button>
      </motion.div>
    </div>
  );
}
