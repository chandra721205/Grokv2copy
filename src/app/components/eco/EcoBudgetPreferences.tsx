import { motion, AnimatePresence } from 'motion/react';
import { X, DollarSign, Calendar, Clock, Bell, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';
import { EcoBudgetPreferencesData } from '@/types/index';

interface EcoBudgetPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: EcoBudgetPreferencesData) => void;
}

export function EcoBudgetPreferences({ isOpen, onClose, onSave }: EcoBudgetPreferencesProps) {
  const [budgetRange, setBudgetRange] = useState<string>('medium');
  const [travelDates, setTravelDates] = useState<string>('flexible');
  const [tripDuration, setTripDuration] = useState<string>('4-6');
  const [dealAlert, setDealAlert] = useState(true);
  const [notificationChannel, setNotificationChannel] = useState<string>('whatsapp');
  
  // Eco-Experience Preferences
  const [stayStyle, setStayStyle] = useState<string[]>([]);
  const [pace, setPace] = useState<string>('balanced');
  const [privacy, setPrivacy] = useState<string>('medium');
  const [diet, setDiet] = useState<string[]>([]);
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Safety & Comfort
  const [accessibility, setAccessibility] = useState(false);
  const [medicalSupport, setMedicalSupport] = useState(false);
  const [seniorFriendly, setSeniorFriendly] = useState(false);

  const budgetRanges = [
    { id: 'budget', label: 'Budget', range: '₹5,000-15,000', color: 'from-blue-500 to-cyan-500' },
    { id: 'medium', label: 'Medium', range: '₹15,000-35,000', color: 'from-green-500 to-emerald-500' },
    { id: 'premium', label: 'Premium', range: '₹35,000-75,000', color: 'from-amber-500 to-orange-500' },
    { id: 'luxury', label: 'Luxury', range: '₹75,000+', color: 'from-purple-500 to-pink-500' },
  ];

  const stayStyles = ['Resort', 'Villa', 'Boutique', 'Budget', 'Luxury'];
  const dietOptions = ['Veg', 'Jain', 'Vegan', 'Other'];

  const toggleStayStyle = (style: string) => {
    setStayStyle(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const toggleDiet = (option: string) => {
    setDiet(prev =>
      prev.includes(option) ? prev.filter(d => d !== option) : [...prev, option]
    );
  };

  const handleSave = () => {
    onSave({
      budgetRange,
      travelDates,
      tripDuration,
      dealAlert,
      notificationChannel,
      stayStyle,
      pace,
      privacy,
      diet,
      specialRequests,
      accessibility,
      medicalSupport,
      seniorFriendly,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <DollarSign className="h-8 w-8" />
                    Budget & Travel Preferences
                  </h2>
                  <p className="text-lg text-green-100 font-semibold">
                    Customize your eco-tourism experience
                  </p>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-full p-3"
                >
                  <X className="h-8 w-8" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-8">
              <div className="space-y-8">
                {/* Budget Range */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    Budget Range
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {budgetRanges.map(range => (
                      <motion.div
                        key={range.id}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setBudgetRange(range.id)}
                        className={`cursor-pointer rounded-2xl p-6 border-3 transition-all ${
                          budgetRange === range.id
                            ? `bg-gradient-to-r ${range.color} border-white shadow-xl`
                            : 'bg-white border-gray-300 shadow-md'
                        }`}
                      >
                        <h4 className={`text-xl font-bold mb-2 ${
                          budgetRange === range.id ? 'text-white' : 'text-gray-900'
                        }`}>
                          {range.label}
                        </h4>
                        <p className={`text-base font-semibold ${
                          budgetRange === range.id ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {range.range}
                        </p>
                        {budgetRange === range.id && (
                          <Check className="h-6 w-6 text-white mt-2" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Travel Dates */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Travel Dates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['fixed', 'flexible'].map(option => (
                      <motion.div
                        key={option}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setTravelDates(option)}
                        className={`cursor-pointer rounded-2xl p-6 border-3 transition-all ${
                          travelDates === option
                            ? 'bg-blue-100 border-blue-500 shadow-lg'
                            : 'bg-white border-gray-300 shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 capitalize mb-1">
                              {option} Dates
                            </h4>
                            <p className="text-base text-gray-600 font-semibold">
                              {option === 'fixed' ? 'Specific travel dates' : 'Open to date suggestions'}
                            </p>
                          </div>
                          {travelDates === option && (
                            <Check className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Trip Duration */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-purple-600" />
                    Trip Duration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: '2-3', label: '2-3 Days', desc: 'Weekend getaway' },
                      { id: '4-6', label: '4-6 Days', desc: 'Extended stay' },
                      { id: '7-10', label: '7-10 Days', desc: 'Full immersion' },
                    ].map(duration => (
                      <motion.div
                        key={duration.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setTripDuration(duration.id)}
                        className={`cursor-pointer rounded-2xl p-6 border-3 transition-all ${
                          tripDuration === duration.id
                            ? 'bg-purple-100 border-purple-500 shadow-lg'
                            : 'bg-white border-gray-300 shadow-md'
                        }`}
                      >
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {duration.label}
                        </h4>
                        <p className="text-base text-gray-600 font-semibold">
                          {duration.desc}
                        </p>
                        {tripDuration === duration.id && (
                          <Check className="h-6 w-6 text-purple-600 mt-2" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Eco-Experience Preferences */}
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl border-3 border-emerald-400 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    🌿 Eco-Experience Preferences
                  </h3>

                  {/* Stay Style */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Stay Style (Multi-Select)</h4>
                    <div className="flex flex-wrap gap-3">
                      {stayStyles.map(style => (
                        <motion.button
                          key={style}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => toggleStayStyle(style)}
                          className={`px-6 py-3 rounded-xl font-bold text-base transition-all ${
                            stayStyle.includes(style)
                              ? 'bg-emerald-600 text-white border-3 border-emerald-400'
                              : 'bg-white text-gray-700 border-3 border-gray-300'
                          }`}
                        >
                          {style}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Pace */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Trip Pace</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {['relaxed', 'balanced', 'packed'].map(option => (
                        <button
                          key={option}
                          onClick={() => setPace(option)}
                          className={`px-6 py-4 rounded-xl font-bold text-base capitalize transition-all ${
                            pace === option
                              ? 'bg-teal-600 text-white border-3 border-teal-400'
                              : 'bg-white text-gray-700 border-3 border-gray-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Privacy Level</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {['high', 'medium', 'flexible'].map(option => (
                        <button
                          key={option}
                          onClick={() => setPrivacy(option)}
                          className={`px-6 py-4 rounded-xl font-bold text-base capitalize transition-all ${
                            privacy === option
                              ? 'bg-emerald-600 text-white border-3 border-emerald-400'
                              : 'bg-white text-gray-700 border-3 border-gray-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Diet */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Dietary Preferences (Multi-Select)</h4>
                    <div className="flex flex-wrap gap-3">
                      {dietOptions.map(option => (
                        <motion.button
                          key={option}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => toggleDiet(option)}
                          className={`px-6 py-3 rounded-xl font-bold text-base transition-all ${
                            diet.includes(option)
                              ? 'bg-teal-600 text-white border-3 border-teal-400'
                              : 'bg-white text-gray-700 border-3 border-gray-300'
                          }`}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Special Requests</h4>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="E.g., 'Need ground floor rooms' or 'Bird watching enthusiast'"
                      className="w-full h-24 px-5 py-4 rounded-2xl border-3 border-gray-300 resize-none text-base font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-400 transition-all"
                    />
                  </div>
                </div>

                {/* Safety & Comfort */}
                <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl border-3 border-orange-400 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    🛡️ Safety & Comfort Requirements
                  </h3>
                  <div className="space-y-4">
                    {[
                      { id: 'accessibility', label: 'Accessibility-Friendly Required', icon: '♿', state: accessibility, setState: setAccessibility },
                      { id: 'medical', label: 'Medical Support Preferred', icon: '🏥', state: medicalSupport, setState: setMedicalSupport },
                      { id: 'senior', label: 'Senior-Friendly Add-ons', icon: '👵', state: seniorFriendly, setState: setSeniorFriendly },
                    ].map(toggle => (
                      <div
                        key={toggle.id}
                        onClick={() => toggle.setState(!toggle.state)}
                        className="cursor-pointer bg-white rounded-xl p-5 border-3 border-gray-300 hover:border-orange-400 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{toggle.icon}</span>
                            <span className="text-lg font-bold text-gray-900">{toggle.label}</span>
                          </div>
                          <div className={`w-14 h-8 rounded-full transition-all ${
                            toggle.state ? 'bg-orange-500' : 'bg-gray-300'
                          }`}>
                            <div className={`w-6 h-6 bg-white rounded-full mt-1 transition-all ${
                              toggle.state ? 'ml-7' : 'ml-1'
                            }`}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deal Alert */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Bell className="h-6 w-6 text-amber-600" />
                    Deal Alert Settings
                  </h3>
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-3 border-amber-400">
                    <div className="mb-6">
                      <div
                        onClick={() => setDealAlert(!dealAlert)}
                        className="cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            🔔 Notify me when deals match my budget
                          </h4>
                          <p className="text-base text-gray-700 font-semibold">
                            Get instant alerts for matching eco-deals
                          </p>
                        </div>
                        <div className={`w-16 h-9 rounded-full transition-all ${
                          dealAlert ? 'bg-amber-600' : 'bg-gray-300'
                        }`}>
                          <div className={`w-7 h-7 bg-white rounded-full mt-1 transition-all ${
                            dealAlert ? 'ml-8' : 'ml-1'
                          }`}></div>
                        </div>
                      </div>
                    </div>

                    {dealAlert && (
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Preferred Notification Channel</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
                            { id: 'sms', label: 'SMS', icon: '📱' },
                            { id: 'email', label: 'Email', icon: '📧' },
                          ].map(channel => (
                            <button
                              key={channel.id}
                              onClick={() => setNotificationChannel(channel.id)}
                              className={`px-6 py-4 rounded-xl font-bold text-base transition-all ${
                                notificationChannel === channel.id
                                  ? 'bg-amber-600 text-white border-3 border-amber-400'
                                  : 'bg-white text-gray-700 border-3 border-gray-300'
                              }`}
                            >
                              {channel.icon} {channel.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Admin Note */}
                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-2xl p-5">
                  <p className="text-sm text-gray-700">
                    <span className="bg-yellow-200 px-2 py-0.5 rounded font-bold">[Admin: Update This Text]</span>
                    {' '}Preferences are saved to match you with admin-published eco-tourism deals
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 border-t-4 border-green-500">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <p className="text-sm font-semibold text-gray-300">Preferences Configured</p>
                  <p className="text-lg font-bold">Budget: {budgetRange} • Duration: {tripDuration} days</p>
                </div>
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 rounded-2xl text-lg font-bold shadow-2xl flex items-center gap-3"
                >
                  <Check className="h-6 w-6" />
                  Save Preferences
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
