import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/app/components/ui/input-otp';

interface OTPVerificationProps {
  onNext: () => void;
}

export function OTPVerification({ onNext }: OTPVerificationProps) {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleVerify = () => {
    if (otp.length === 6) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-green-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-12"
      >
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Verify Your Number</h1>
        <p className="text-gray-600">Enter the 6-digit code sent to</p>
        <p className="text-blue-600 font-semibold">+91 98765 43210</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex flex-col items-center"
      >
        <div className="mb-8">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-12 h-14 text-xl border-2 border-gray-300 rounded-2xl bg-white"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="text-center mb-8">
          {timeLeft > 0 ? (
            <p className="text-gray-600">
              Resend code in{' '}
              <span className="font-bold text-blue-600">{timeLeft}s</span>
            </p>
          ) : (
            <button className="text-blue-600 font-semibold underline">
              Resend Code
            </button>
          )}
        </div>

        <Button
          onClick={handleVerify}
          disabled={otp.length !== 6}
          className="w-full h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg disabled:opacity-50"
        >
          Verify & Continue
        </Button>
      </motion.div>
    </div>
  );
}
