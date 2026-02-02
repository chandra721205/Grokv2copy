import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, ChevronLeft, ChevronRight, Clock, Info } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

/**
 * RENTAL CALENDAR COMPONENT - EXPORTABLE ASSET
 * 
 * A comprehensive rental calendar with location picker, date selection,
 * duration calculator, and pricing breakdown.
 * 
 * Usage:
 * ```tsx
 * <RentalCalendarExport
 *   onDateSelect={(startDate, endDate, location) => {
 *     console.log('Rental period:', { startDate, endDate, location });
 *   }}
 *   dailyRate={2500}
 *   minDays={1}
 *   maxDays={30}
 *   availableLocations={['Mumbai', 'Delhi', 'Bangalore']}
 * />
 * ```
 * 
 * Features:
 * - Interactive month/year navigation
 * - Date range selection (start + end)
 * - Location picker with search
 * - Duration calculator (auto-calculate days)
 * - Pricing breakdown (daily rate × days)
 * - Unavailable dates marking
 * - Mobile-optimized touch interactions
 * - Validation (min/max days)
 */

export interface RentalCalendarExportProps {
  onDateSelect: (startDate: Date | null, endDate: Date | null, location: string) => void;
  dailyRate?: number;
  minDays?: number;
  maxDays?: number;
  availableLocations?: string[];
  unavailableDates?: Date[];
  initialLocation?: string;
  showPricing?: boolean;
  currency?: string;
}

export function RentalCalendarExport({
  onDateSelect,
  dailyRate = 2500,
  minDays = 1,
  maxDays = 30,
  availableLocations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Jaipur'],
  unavailableDates = [],
  initialLocation = '',
  showPricing = true,
  currency = '₹'
}: RentalCalendarExportProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some(unavailable => 
      unavailable.toDateString() === date.toDateString()
    );
  };

  const isDateInPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateSelected = (date: Date) => {
    if (!startDate) return false;
    if (!endDate) return date.toDateString() === startDate.toDateString();
    return date >= startDate && date <= endDate;
  };

  const handleDateClick = (date: Date) => {
    if (isDateUnavailable(date) || isDateInPast(date)) return;

    if (!startDate || (startDate && endDate)) {
      // Start new selection
      setStartDate(date);
      setEndDate(null);
      onDateSelect(date, null, selectedLocation);
    } else {
      // Set end date
      if (date < startDate) {
        // If clicked date is before start, swap
        setEndDate(startDate);
        setStartDate(date);
        onDateSelect(date, startDate, selectedLocation);
      } else {
        setEndDate(date);
        onDateSelect(startDate, date, selectedLocation);
      }
    }
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both days
    return diffDays;
  };

  const calculateTotal = () => {
    return calculateDays() * dailyRate;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square" />
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isUnavailable = isDateUnavailable(date);
      const isPast = isDateInPast(date);
      const isSelected = isDateSelected(date);
      const isStart = startDate && date.toDateString() === startDate.toDateString();
      const isEnd = endDate && date.toDateString() === endDate.toDateString();

      days.push(
        <motion.button
          key={day}
          onClick={() => handleDateClick(date)}
          disabled={isUnavailable || isPast}
          whileTap={{ scale: 0.9 }}
          className={`aspect-square rounded-xl text-sm font-semibold transition-all relative
            ${isSelected 
              ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg' 
              : isUnavailable || isPast
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-white hover:bg-orange-50 text-gray-900 hover:shadow-md'
            }
            ${isStart || isEnd ? 'ring-4 ring-yellow-400' : ''}
          `}
        >
          {day}
          {isStart && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">S</span>
            </div>
          )}
          {isEnd && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">E</span>
            </div>
          )}
        </motion.button>
      );
    }

    return days;
  };

  return (
    <div className="space-y-4">
      {/* Location Picker */}
      <Card className="bg-white rounded-3xl p-4 shadow-lg border-2 border-gray-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-600 mb-1">Pickup Location</p>
            <button
              onClick={() => setShowLocationPicker(!showLocationPicker)}
              className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors"
            >
              {selectedLocation || 'Select a location'}
            </button>
          </div>
        </div>

        {/* Location Dropdown */}
        <AnimatePresence>
          {showLocationPicker && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2 mt-3">
                {availableLocations.map((location) => (
                  <button
                    key={location}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocationPicker(false);
                      onDateSelect(startDate, endDate, location);
                    }}
                    className={`p-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedLocation === location
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Calendar */}
      <Card className="bg-white rounded-3xl p-5 shadow-lg border-2 border-gray-200">
        {/* Month/Year Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </p>
          </div>
          <button
            onClick={nextMonth}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-center text-xs font-bold text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {renderCalendar()}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded" />
            <span className="text-xs text-gray-600">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100 rounded" />
            <span className="text-xs text-gray-600">Unavailable</span>
          </div>
        </div>
      </Card>

      {/* Duration & Pricing Summary */}
      {showPricing && startDate && endDate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-5 border-2 border-orange-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">Rental Duration</p>
                <p className="text-lg font-bold text-gray-900">{calculateDays()} Days</p>
              </div>
            </div>

            {/* Dates Display */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-xs text-gray-600 mb-1">From</p>
                  <p className="font-bold text-gray-900">
                    {startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-gray-300" />
                <div className="text-right">
                  <p className="text-xs text-gray-600 mb-1">To</p>
                  <p className="font-bold text-gray-900">
                    {endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Daily Rate</span>
                <span className="font-semibold text-gray-900">{currency}{dailyRate.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">Number of Days</span>
                <span className="font-semibold text-gray-900">× {calculateDays()}</span>
              </div>
              <div className="h-px bg-gray-300 my-2" />
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">Total Amount</span>
                <span className="text-2xl font-bold text-orange-600">
                  {currency}{calculateTotal().toLocaleString()}
                </span>
              </div>
            </div>

            {/* Validation Messages */}
            {calculateDays() < minDays && (
              <div className="flex items-start gap-2 bg-yellow-100 border-2 border-yellow-300 rounded-xl p-3">
                <Info className="w-4 h-4 text-yellow-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-800">
                  Minimum rental period is {minDays} day{minDays > 1 ? 's' : ''}.
                </p>
              </div>
            )}
            {calculateDays() > maxDays && (
              <div className="flex items-start gap-2 bg-red-100 border-2 border-red-300 rounded-xl p-3">
                <Info className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-800">
                  Maximum rental period is {maxDays} days. Please contact us for longer bookings.
                </p>
              </div>
            )}
          </Card>
        </motion.div>
      )}

      {/* Help Text */}
      {!startDate && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <CalendarIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">How to select dates</p>
              <p className="text-xs text-gray-700">
                1. Select your pickup location<br />
                2. Tap on your start date<br />
                3. Tap on your end date<br />
                4. Review the duration and total cost
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Compact version for smaller spaces
export function RentalCalendarCompact({
  onDateSelect,
  dailyRate = 2500,
  currency = '₹'
}: Pick<RentalCalendarExportProps, 'onDateSelect' | 'dailyRate' | 'currency'>) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    if (startDate && endDate) {
      onDateSelect(new Date(startDate), new Date(endDate), '');
    }
  };

  return (
    <Card className="bg-white rounded-2xl p-4 border-2 border-gray-200">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1 block">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={!startDate || !endDate}
          className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl h-11 font-bold disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </Card>
  );
}
