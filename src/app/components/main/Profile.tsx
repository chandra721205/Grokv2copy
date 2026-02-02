import { motion } from 'motion/react';
import { 
  User, Mail, Phone, MapPin, Edit, Settings, 
  Heart, History, HelpCircle, LogOut, Shield, Bell,
  CreditCard, Users, Gift
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { UserData } from '@/types/index';

interface ProfileProps {
  userData: UserData | null;
}

export function Profile({ userData }: ProfileProps) {
  const menuItems = [
    { icon: Edit, label: 'Edit Profile', color: 'text-blue-600' },
    { icon: Shield, label: 'KYC Verified', color: 'text-green-600', badge: '✓' },
    { icon: CreditCard, label: 'Payment Methods', color: 'text-purple-600' },
    { icon: Users, label: 'Travel Companions', color: 'text-orange-600' },
    { icon: Heart, label: 'Wishlist', color: 'text-pink-600' },
    { icon: History, label: 'Booking History', color: 'text-indigo-600' },
    { icon: Gift, label: 'Offers & Rewards', color: 'text-yellow-600' },
    { icon: Bell, label: 'Notifications', color: 'text-cyan-600' },
    { icon: Settings, label: 'Settings', color: 'text-gray-600' },
    { icon: HelpCircle, label: 'Help & Support', color: 'text-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-16 rounded-b-[2rem]">
        <h1 className="text-white text-2xl font-bold mb-8">Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="px-6 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-6"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {userData?.name?.[0] || 'U'}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">{userData?.name || 'User Name'}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Traveler Level: </span>
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  Explorer ⭐
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>{userData?.email || 'user@example.com'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{userData?.phone || '+91 98765 43210'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>City, State (Admin-set)</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-3 text-center">
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-xs text-gray-600">Trips</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-3 text-center">
              <p className="text-2xl font-bold text-green-600">8</p>
              <p className="text-xs text-gray-600">Reviews</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-3 text-center">
              <p className="text-2xl font-bold text-orange-600">₹2.5L</p>
              <p className="text-xs text-gray-600">Spent</p>
            </div>
          </div>
        </motion.div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                item.color === 'text-blue-600' ? 'bg-blue-50' :
                item.color === 'text-green-600' ? 'bg-green-50' :
                item.color === 'text-purple-600' ? 'bg-purple-50' :
                item.color === 'text-orange-600' ? 'bg-orange-50' :
                item.color === 'text-pink-600' ? 'bg-pink-50' :
                item.color === 'text-indigo-600' ? 'bg-indigo-50' :
                item.color === 'text-yellow-600' ? 'bg-yellow-50' :
                item.color === 'text-cyan-600' ? 'bg-cyan-50' :
                item.color === 'text-teal-600' ? 'bg-teal-50' :
                'bg-gray-50'
              }`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <span className="flex-1 text-left font-semibold">{item.label}</span>
              {item.badge && (
                <span className="text-green-600 font-bold">{item.badge}</span>
              )}
            </motion.button>
          ))}

          <Button
            variant="outline"
            className="w-full h-14 rounded-2xl text-red-600 border-red-200 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}