import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface KYCPhoneProps {
  onNext: () => void;
}

export function KYCPhone({ onNext }: KYCPhoneProps) {
  const [verified, setVerified] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-green-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-12"
      >
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
          <Phone className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Phone Verification</h1>
        <p className="text-gray-600">Confirm your registered number</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1"
      >
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            value="+91 98765 43210"
            disabled
            className="h-14 rounded-2xl bg-gray-50"
          />
          {verified && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 mt-4 text-green-600"
            >
              <Check className="w-5 h-5" />
              <span className="font-semibold">Verified</span>
            </motion.div>
          )}
        </div>

        {!verified && (
          <Button
            onClick={() => setVerified(true)}
            className="w-full h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg mb-4"
          >
            Send Verification Code
          </Button>
        )}

        {verified && (
          <Button
            onClick={onNext}
            className="w-full h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg"
          >
            Continue to Documents
          </Button>
        )}
      </motion.div>
    </div>
  );
}
