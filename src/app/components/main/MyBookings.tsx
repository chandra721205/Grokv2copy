import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronRight, QrCode } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function MyBookings() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      { 
        id: 'BK001', 
        destination: 'Admin-Added Destination 1', 
        date: '15-20 Feb 2026', 
        status: 'Confirmed',
        amount: '₹18,500',
        category: 'Beach & Cruise'
      },
      { 
        id: 'BK002', 
        destination: 'Popular Location A', 
        date: '1-5 Mar 2026', 
        status: 'Pending',
        amount: '₹12,000',
        category: 'Wellness'
      },
    ],
    past: [
      { 
        id: 'BK003', 
        destination: 'Heritage Tour Package', 
        date: '10-15 Jan 2026', 
        status: 'Completed',
        amount: '₹22,000',
        category: 'Heritage'
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 pt-12 pb-6 rounded-b-[2rem]">
        <h1 className="text-white text-3xl font-bold mb-2">My Trips</h1>
        <p className="text-white/80">Manage your bookings</p>
      </div>

      {/* Tabs */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-3xl shadow-lg p-2 flex gap-2">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-3 rounded-2xl font-semibold transition-all ${
              activeTab === 'upcoming'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                : 'text-gray-600'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-3 rounded-2xl font-semibold transition-all ${
              activeTab === 'past'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                : 'text-gray-600'
            }`}
          >
            Past
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="px-6 pb-6">
        {bookings[activeTab as keyof typeof bookings].length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No {activeTab} trips</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings[activeTab as keyof typeof bookings].map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono bg-purple-100 text-purple-700 px-2 py-1 rounded-lg">
                          {booking.id}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-lg ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-1">{booking.destination}</h3>
                      <p className="text-gray-600 text-sm">{booking.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-purple-600">{booking.amount}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">View Itinerary</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {activeTab === 'upcoming' && booking.status === 'Confirmed' && (
                      <Button className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-10">
                        <QrCode className="w-4 h-4 mr-2" />
                        View Ticket
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      className="flex-1 rounded-full h-10"
                    >
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}