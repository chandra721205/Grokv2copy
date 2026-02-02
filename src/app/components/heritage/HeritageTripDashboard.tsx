import { motion } from 'motion/react';
import { Calendar, Clock, User, MapPin, AlertCircle, ChevronRight, FileText, Edit, Ticket } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HeritageTripDashboardProps {
  tripName?: string;
  onViewItinerary?: () => void;
  onModifyServices?: () => void;
  onViewTickets?: () => void;
}

interface DayActivity {
  id: string;
  day: number;
  title: string;
  activities: Activity[];
}

interface Activity {
  location: string;
  time: string;
  details: string[];
}

interface Update {
  id: string;
  icon: string;
  message: string;
  type: 'warning' | 'success' | 'info';
}

export function HeritageTripDashboard({
  tripName = 'Golden Triangle Tour',
  onViewItinerary,
  onModifyServices,
  onViewTickets,
}: HeritageTripDashboardProps) {
  const itinerary: DayActivity[] = [
    {
      id: 'day1',
      day: 1,
      title: 'Delhi Heritage Walk',
      activities: [
        {
          location: 'Red Fort',
          time: '9-11AM',
          details: ['Guide: Rajesh'],
        },
        {
          location: 'Qutub Minar',
          time: '2-4PM',
          details: ['Audio guide'],
        },
      ],
    },
    {
      id: 'day2',
      day: 2,
      title: 'Agra - Taj Mahal Sunrise',
      activities: [
        {
          location: 'Special Entry',
          time: '6AM',
          details: ['Photography pass'],
        },
        {
          location: 'Senior Golf Cart',
          time: 'Booked for 2',
          details: [],
        },
      ],
    },
    {
      id: 'day3',
      day: 3,
      title: 'Jaipur Forts',
      activities: [
        {
          location: 'Wheelchair accessible route confirmed',
          time: '',
          details: [],
        },
        {
          location: 'Artisan village visit included',
          time: '',
          details: [],
        },
      ],
    },
  ];

  const updates: Update[] = [
    {
      id: 'update1',
      icon: '⚠️',
      message: 'Taj Mahal closed Friday - Rescheduled to Thursday',
      type: 'warning',
    },
    {
      id: 'update2',
      icon: '✅',
      message: 'Pushkar Mela tickets confirmed - E-ticket sent',
      type: 'success',
    },
    {
      id: 'update3',
      icon: '🚗',
      message: 'Senior golf cart booking confirmed - Pickup 5:45AM',
      type: 'info',
    },
  ];

  const getUpdateColor = (type: Update['type']) => {
    switch (type) {
      case 'warning':
        return 'bg-orange-100 border-orange-400 text-orange-800';
      case 'success':
        return 'bg-green-100 border-green-400 text-green-800';
      case 'info':
        return 'bg-blue-100 border-blue-400 text-blue-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-3xl border-3 border-amber-400 shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl">🏛️</div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-1">
              Heritage Experiences
            </h2>
            <p className="text-xl text-purple-100 font-semibold">
              "{tripName}"
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="space-y-6">
          {/* Day-by-Day Itinerary */}
          <div className="space-y-4">
            {itinerary.map((day, index) => (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border-3 border-gray-300 p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Day Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-lg">
                    <Calendar className="inline h-5 w-5 mr-2" />
                    Day {day.day}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{day.title}</h3>
                </div>

                {/* Activities */}
                <div className="space-y-3">
                  {day.activities.map((activity, actIdx) => (
                    <div key={actIdx} className="flex items-start gap-3">
                      <div className="flex items-center gap-2 min-w-[140px]">
                        <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                        <span className="text-lg font-bold text-gray-900">{activity.location}</span>
                      </div>
                      {activity.time && (
                        <div className="flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-lg">
                          <Clock className="h-4 w-4 text-amber-700" />
                          <span className="text-sm font-bold text-amber-800">{activity.time}</span>
                        </div>
                      )}
                      {activity.details.length > 0 && (
                        <div className="flex items-center gap-2 flex-1">
                          <User className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-base text-gray-700 font-semibold">
                            {activity.details.join(' • ')}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <Button
              onClick={onViewItinerary}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-6 rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center gap-3"
            >
              <FileText className="h-6 w-6" />
              View Detailed Itinerary
            </Button>
            <Button
              onClick={onModifyServices}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-6 rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center gap-3"
            >
              <Edit className="h-6 w-6" />
              Modify Services
            </Button>
            <Button
              onClick={onViewTickets}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-6 rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center gap-3"
            >
              <Ticket className="h-6 w-6" />
              View Tickets & Passes
            </Button>
          </motion.div>

          {/* Real-time Updates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-3 border-orange-400 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">Important Updates</h3>
            </div>

            <div className="space-y-3">
              {updates.map((update, index) => (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`${getUpdateColor(update.type)} rounded-xl p-4 border-2`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{update.icon}</span>
                    <p className="text-base font-bold flex-1">{update.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Admin Editable Note */}
            <div className="mt-4 bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <span className="bg-yellow-200 px-2 py-0.5 rounded font-bold">[Admin: Update This Text]</span>
                {' '}Updates are sent in real-time via SMS and app notifications
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl border-2 border-blue-300 p-5 text-center">
              <div className="text-4xl mb-2">📅</div>
              <p className="text-3xl font-bold text-gray-900">{itinerary.length}</p>
              <p className="text-sm font-semibold text-gray-600">Total Days</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-300 p-5 text-center">
              <div className="text-4xl mb-2">🏛️</div>
              <p className="text-3xl font-bold text-gray-900">
                {itinerary.reduce((acc, day) => acc + day.activities.length, 0)}
              </p>
              <p className="text-sm font-semibold text-gray-600">Attractions</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border-2 border-green-300 p-5 text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-3xl font-bold text-gray-900">
                {updates.filter(u => u.type === 'success').length}
              </p>
              <p className="text-sm font-semibold text-gray-600">Confirmed</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl border-2 border-orange-300 p-5 text-center">
              <div className="text-4xl mb-2">⚠️</div>
              <p className="text-3xl font-bold text-gray-900">
                {updates.filter(u => u.type === 'warning').length}
              </p>
              <p className="text-sm font-semibold text-gray-600">Action Needed</p>
            </div>
          </motion.div>

          {/* Google Search & YouTube Browse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-3 border-indigo-400 p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🔍</span>
              Explore Your Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(tripName + ' heritage tour')}`, '_blank')}
                className="bg-white border-3 border-blue-500 text-blue-700 hover:bg-blue-50 px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🔍</span>
                Google Search: {tripName}
              </Button>
              <Button
                onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(tripName + ' heritage tour documentary')}`, '_blank')}
                className="bg-white border-3 border-red-500 text-red-700 hover:bg-red-50 px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📺</span>
                YouTube: Browse Videos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
