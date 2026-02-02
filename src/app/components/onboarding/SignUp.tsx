import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { UserData } from '@/types/index';

interface SignUpProps {
  onNext: (data: Partial<UserData>) => void;
}

export function SignUp({ onNext }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="min-h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-blue-50 via-purple-50 to-orange-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-8"
      >
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Create Account
        </h1>
        <p className="text-gray-600">Start your journey with GrokYatra</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex-1 space-y-4"
      >
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="pl-12 h-14 rounded-3xl bg-white border-2 border-gray-200 focus:border-blue-500"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="pl-12 h-14 rounded-3xl bg-white border-2 border-gray-200 focus:border-blue-500"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="pl-12 h-14 rounded-3xl bg-white border-2 border-gray-200 focus:border-blue-500"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="pl-12 pr-12 h-14 rounded-3xl bg-white border-2 border-gray-200 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs text-gray-500 text-center mb-4">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-600 underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>
          </p>
          <Button
            type="submit"
            className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
          >
            Sign Up
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600 pt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 font-semibold">Sign In</a>
        </p>
      </motion.form>
    </div>
  );
}