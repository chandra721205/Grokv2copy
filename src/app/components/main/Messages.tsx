import { motion } from 'motion/react';
import { MessageCircle, Bot, HeadphonesIcon, Bell } from 'lucide-react';

export function Messages() {
  const messages = [
    {
      id: 1,
      from: 'Grok AI Assistant',
      message: 'Your custom tour itinerary is ready! 🎉',
      time: '2 mins ago',
      unread: true,
      icon: Bot,
      gradient: 'from-purple-500 to-blue-600',
    },
    {
      id: 2,
      from: 'Customer Support',
      message: 'Your booking BK001 has been confirmed',
      time: '1 hour ago',
      unread: true,
      icon: HeadphonesIcon,
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 3,
      from: 'Notifications',
      message: 'Special offer: 20% off on selected categories!',
      time: '3 hours ago',
      unread: false,
      icon: Bell,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 4,
      from: 'Trip Updates',
      message: 'Reminder: Your upcoming trip starts in 5 days',
      time: 'Yesterday',
      unread: false,
      icon: MessageCircle,
      gradient: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 pt-12 pb-6 rounded-b-[2rem]">
        <h1 className="text-white text-3xl font-bold mb-2">Messages</h1>
        <p className="text-white/80">Stay connected with your trips</p>
      </div>

      {/* Messages List */}
      <div className="px-6 pt-6 pb-6">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer ${
                msg.unread ? 'ring-2 ring-cyan-500' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${msg.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <msg.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-sm">{msg.from}</h3>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className={`text-sm ${msg.unread ? 'font-semibold text-gray-900' : 'text-gray-600'} line-clamp-2`}>
                    {msg.message}
                  </p>
                  {msg.unread && (
                    <div className="mt-2">
                      <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded-full">
                        New
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}