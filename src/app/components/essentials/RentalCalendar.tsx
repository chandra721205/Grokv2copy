import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Check,
  Info,
  Navigation,
  Search
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

interface RentalCalendarProps {
  onPickupChange?: (date: string, time: string, location: string) => void;
  onDropoffChange?: (date: string, time: string, location: string) => void;
  defaultPickupDate?: string;
  defaultPickupTime?: string;
  defaultPickupLocation?: string;
  defaultDropoffDate?: string;
  defaultDropoffTime?: string;
  defaultDropoffLocation?: string;
  variant?: 'full' | 'compact';
}

export function RentalCalendar({
  onPickupChange,
  onDropoffChange,
  defaultPickupDate = '',
  defaultPickupTime = '10:00',
  defaultPickupLocation = 'Kochi Airport',
  defaultDropoffDate = '',
  defaultDropoffTime = '17:00',
  defaultDropoffLocation = 'Kochi Airport',
  variant = 'full'
}: RentalCalendarProps) {
  const [pickupDate, setPickupDate] = useState(defaultPickupDate);
  const [pickupTime, setPickupTime] = useState(defaultPickupTime);
  const [pickupLocation, setPickupLocation] = useState(defaultPickupLocation);
  const [dropoffDate, setDropoffDate] = useState(defaultDropoffDate);
  const [dropoffTime, setDropoffTime] = useState(defaultDropoffTime);
  const [dropoffLocation, setDropoffLocation] = useState(defaultDropoffLocation);
  
  const [activeSection, setActiveSection] = useState<'pickup' | 'dropoff' | null>(null);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [locationFor, setLocationFor] = useState<'pickup' | 'dropoff'>('pickup');

  // Popular locations
  const popularLocations = [
    { name: 'Kochi Airport', type: 'Airport', distance: '0 km' },
    { name: 'Kochi Railway Station', type: 'Railway', distance: '8 km' },
    { name: 'Admin Location A', type: 'City Center', distance: '12 km' },
    { name: 'Admin Location B', type: 'Tourist Hub', distance: '15 km' },
    { name: 'Admin Location C', type: 'Beach Area', distance: '25 km' },
  ];

  // Time slots (24-hour format)
  const timeSlots = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  const handlePickupUpdate = (date?: string, time?: string, location?: string) => {
    const newDate = date || pickupDate;
    const newTime = time || pickupTime;
    const newLocation = location || pickupLocation;
    
    if (date) setPickupDate(date);
    if (time) setPickupTime(time);
    if (location) setPickupLocation(location);
    
    onPickupChange?.(newDate, newTime, newLocation);
  };

  const handleDropoffUpdate = (date?: string, time?: string, location?: string) => {
    const newDate = date || dropoffDate;
    const newTime = time || dropoffTime;
    const newLocation = location || dropoffLocation;
    
    if (date) setDropoffDate(date);
    if (time) setDropoffTime(time);
    if (location) setDropoffLocation(location);
    
    onDropoffChange?.(newDate, newTime, newLocation);
  };

  const handleLocationSelect = (locationName: string) => {
    if (locationFor === 'pickup') {
      handlePickupUpdate(undefined, undefined, locationName);
    } else {
      handleDropoffUpdate(undefined, undefined, locationName);
    }
    setShowLocationPicker(false);
  };

  const calculateDuration = () => {
    if (!pickupDate || !dropoffDate) return null;
    
    const pickup = new Date(`${pickupDate}T${pickupTime}`);
    const dropoff = new Date(`${dropoffDate}T${dropoffTime}`);
    const diffMs = dropoff.getTime() - pickup.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} (${diffHours} hours)`;
    }
    return `${diffHours} hours`;
  };

  const duration = calculateDuration();

  // Compact Variant
  if (variant === 'compact') {
    return (
      <Card className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
        <h3 className="font-bold text-base text-gray-900 mb-4 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-purple-600" />
          Rental Duration
        </h3>

        <div className="space-y-3">
          {/* Pickup */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
            <p className="text-xs font-semibold text-green-900 mb-2">Pick-up</p>
            <div className="space-y-2">
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => handlePickupUpdate(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-green-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => handlePickupUpdate(undefined, e.target.value)}
                className="w-full px-3 py-2 bg-white border border-green-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Dropoff */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 border border-red-200">
            <p className="text-xs font-semibold text-red-900 mb-2">Drop-off</p>
            <div className="space-y-2">
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => handleDropoffUpdate(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-red-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="time"
                value={dropoffTime}
                onChange={(e) => handleDropoffUpdate(undefined, e.target.value)}
                className="w-full px-3 py-2 bg-white border border-red-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Duration Display */}
          {duration && (
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <p className="text-xs text-purple-700 mb-1">Total Duration</p>
              <p className="text-sm font-bold text-purple-900">{duration}</p>
            </div>
          )}
        </div>
      </Card>
    );
  }

  // Full Variant
  return (
    <div className="space-y-4">
      {/* Location Picker Modal */}
      <AnimatePresence>
        {showLocationPicker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
            onClick={() => setShowLocationPicker(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-t-[2rem] w-full max-w-md p-6 pb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Select Location</h3>
                <button
                  onClick={() => setShowLocationPicker(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  ×
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border-0 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Popular Locations */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {popularLocations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => handleLocationSelect(location.name)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-purple-50 rounded-2xl transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">{location.name}</p>
                        <p className="text-xs text-gray-500">{location.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{location.distance}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Use Current Location */}
              <Button className="w-full mt-4 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700">
                <Navigation className="w-4 h-4 mr-2" />
                Use Current Location
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pickup Section */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-5 border-2 border-green-300 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base text-green-900">Pick-up Details</h3>
            <p className="text-xs text-green-700">When and where will you collect the vehicle?</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Date Picker */}
          <div>
            <label className="text-xs font-semibold text-green-900 mb-2 flex items-center gap-1">
              <CalendarIcon className="w-3.5 h-3.5" />
              Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => handlePickupUpdate(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-2xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label className="text-xs font-semibold text-green-900 mb-2 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Time (24-hour format)
            </label>
            <select
              value={pickupTime}
              onChange={(e) => handlePickupUpdate(undefined, e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-2xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Location Picker */}
          <div>
            <label className="text-xs font-semibold text-green-900 mb-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Location
            </label>
            <button
              onClick={() => {
                setLocationFor('pickup');
                setShowLocationPicker(true);
              }}
              className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-2xl text-sm font-semibold text-gray-900 text-left flex items-center justify-between hover:border-green-400 transition-colors"
            >
              <span>{pickupLocation}</span>
              <ChevronRight className="w-4 h-4 text-green-600" />
            </button>
          </div>
        </div>
      </Card>

      {/* Dropoff Section */}
      <Card className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-5 border-2 border-red-300 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-base text-red-900">Drop-off Details</h3>
            <p className="text-xs text-red-700">When and where will you return the vehicle?</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Date Picker */}
          <div>
            <label className="text-xs font-semibold text-red-900 mb-2 flex items-center gap-1">
              <CalendarIcon className="w-3.5 h-3.5" />
              Date
            </label>
            <input
              type="date"
              value={dropoffDate}
              onChange={(e) => handleDropoffUpdate(e.target.value)}
              min={pickupDate}
              className="w-full px-4 py-3 bg-white border-2 border-red-200 rounded-2xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label className="text-xs font-semibold text-red-900 mb-2 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Time (24-hour format)
            </label>
            <select
              value={dropoffTime}
              onChange={(e) => handleDropoffUpdate(undefined, e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-red-200 rounded-2xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Location Picker */}
          <div>
            <label className="text-xs font-semibold text-red-900 mb-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Location
            </label>
            <button
              onClick={() => {
                setLocationFor('dropoff');
                setShowLocationPicker(true);
              }}
              className="w-full px-4 py-3 bg-white border-2 border-red-200 rounded-2xl text-sm font-semibold text-gray-900 text-left flex items-center justify-between hover:border-red-400 transition-colors"
            >
              <span>{dropoffLocation}</span>
              <ChevronRight className="w-4 h-4 text-red-600" />
            </button>
          </div>

          {/* Same as Pickup Checkbox */}
          <button
            onClick={() => {
              handleDropoffUpdate(undefined, undefined, pickupLocation);
            }}
            className="w-full bg-white/60 border border-red-200 rounded-xl p-3 flex items-center gap-2 hover:bg-white transition-colors"
          >
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              dropoffLocation === pickupLocation
                ? 'border-red-600 bg-red-600'
                : 'border-gray-400 bg-white'
            }`}>
              {dropoffLocation === pickupLocation && <Check className="w-3 h-3 text-white" />}
            </div>
            <span className="text-xs font-semibold text-gray-700">Same as pick-up location</span>
          </button>
        </div>
      </Card>

      {/* Duration Summary */}
      {duration && (
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 border-2 border-purple-300 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-purple-600" />
              <div>
                <p className="text-xs text-purple-700 mb-0.5">Total Rental Duration</p>
                <p className="text-lg font-bold text-purple-900">{duration}</p>
              </div>
            </div>
            <Check className="w-8 h-8 text-purple-600" />
          </div>
        </Card>
      )}

      {/* Info Card */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-200">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">
            Pick-up and drop-off times are flexible within business hours (6 AM - 11 PM). Additional charges may apply for services outside these hours.
          </p>
        </div>
      </Card>
    </div>
  );
}
