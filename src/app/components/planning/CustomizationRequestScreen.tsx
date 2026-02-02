import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Calendar, DollarSign, MessageSquare, Heart } from 'lucide-react';
import type { CustomizationRequestProps } from './types';

// ========================================
// CUSTOMIZATION REQUEST SCREEN
// ========================================
// Optional path for users who want AI-generated custom itinerary
// Collects user preferences for Grok AI to analyze
// ========================================

export function CustomizationRequestScreen({
  onNext,
  onBack,
  selectedComboName,
  selectedCategories,
}: CustomizationRequestProps) {
  const [customDescription, setCustomDescription] = useState('');
  const [budgetRange, setBudgetRange] = useState('medium');
  const [dateFlexibility, setDateFlexibility] = useState('flexible');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [specialRequests, setSpecialRequests] = useState<string[]>([]);

  const budgetOptions = [
    { id: 'budget', label: 'Budget', range: '₹5,000 - ₹15,000', icon: '💰' },
    { id: 'medium', label: 'Medium', range: '₹15,000 - ₹35,000', icon: '💵' },
    { id: 'premium', label: 'Premium', range: '₹35,000 - ₹60,000', icon: '💎' },
    { id: 'luxury', label: 'Luxury', range: '₹60,000+', icon: '✨' },
  ];

  const specialRequestOptions = [
    { id: 'accessibility', label: 'Accessibility Needs', icon: '♿' },
    { id: 'dietary', label: 'Dietary Restrictions', icon: '🥗' },
    { id: 'medical', label: 'Medical Assistance', icon: '⚕️' },
    { id: 'photography', label: 'Photography Focus', icon: '📸' },
    { id: 'pet-friendly', label: 'Pet-Friendly', icon: '🐕' },
    { id: 'eco-conscious', label: 'Eco-Conscious Travel', icon: '🌿' },
  ];

  const toggleSpecialRequest = (requestId: string) => {
    if (specialRequests.includes(requestId)) {
      setSpecialRequests(specialRequests.filter(id => id !== requestId));
    } else {
      setSpecialRequests([...specialRequests, requestId]);
    }
  };

  const handleGenerate = () => {
    const dates = dateFlexibility === 'fixed' && startDate && endDate
      ? `${startDate} to ${endDate}`
      : 'Flexible dates';

    onNext({
      customDescription,
      customBudgetRange: budgetOptions.find(b => b.id === budgetRange)?.range || '',
      customDates: dates,
      specialRequests: specialRequests.join(', '),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 pt-12 pb-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            aria-label="Go back"
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <span className="text-white text-sm font-medium">Step 2 of 6 (Custom Path)</span>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white font-bold text-2xl mb-2">
            Tell Us More for Custom Itinerary
          </h1>
          <p className="text-white/90 text-sm">
            Grok AI will analyze and suggest destinations based on your preferences
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-2 bg-white/30 rounded-full">
            <div 
              className="h-2 bg-white rounded-full transition-all duration-300" 
              style={{ width: '33%' }} 
            />
          </div>
          <span className="text-white text-sm font-semibold">33%</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-2xl mx-auto">
        {/* AI Notice */}
        <div className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-1">AI-Powered Recommendations</h3>
              <p className="text-sm text-blue-800">
                Grok AI will analyze your input and suggest personalized destinations. 
                These are recommendations only - all final details are managed by admins.
              </p>
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-6">
          {/* 1. Trip Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Describe Your Ideal Trip
              </h3>
            </div>
            
            <textarea
              value={customDescription}
              onChange={(e) => setCustomDescription(e.target.value)}
              placeholder="e.g., 'I want 5 days in the mountains with meditation sessions, nature walks, and comfortable accommodations. Looking for peaceful environment away from crowds.'"
              className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl resize-none focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
            />
            
            <p className="text-xs text-gray-500 mt-2">
              💡 Be as specific as possible - mention activities, atmosphere, accommodation style, etc.
            </p>
          </motion.div>

          {/* 2. Budget Range */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Budget Range (Per Person)
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {budgetOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setBudgetRange(option.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    budgetRange === option.id
                      ? 'bg-green-50 border-green-500 ring-2 ring-green-300'
                      : 'bg-white border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{option.icon}</div>
                  <div className="font-bold text-sm text-gray-900">{option.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{option.range}</div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* 3. Date Flexibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Travel Dates
              </h3>
            </div>

            {/* Flexible/Fixed Toggle */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setDateFlexibility('flexible')}
                className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
                  dateFlexibility === 'flexible'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'
                }`}
              >
                📅 Flexible Dates
              </button>
              <button
                onClick={() => setDateFlexibility('fixed')}
                className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold transition-all ${
                  dateFlexibility === 'fixed'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'
                }`}
              >
                📍 Fixed Dates
              </button>
            </div>

            {/* Date Pickers (only show if fixed) */}
            {dateFlexibility === 'fixed' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-2 gap-3"
              >
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* 4. Special Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Special Requests (Optional)
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {specialRequestOptions.map((option) => {
                const isSelected = specialRequests.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => toggleSpecialRequest(option.id)}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      isSelected
                        ? 'bg-pink-50 border-pink-500 ring-2 ring-pink-300'
                        : 'bg-white border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="text-xl mb-1">{option.icon}</div>
                    <div className="text-sm font-semibold text-gray-900">{option.label}</div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Generate Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={handleGenerate}
          disabled={!customDescription.trim()}
          className={`w-full mt-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
            customDescription.trim()
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl active:scale-[0.98]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          Generate Custom Itinerary with AI
        </motion.button>

        {/* Warning if no description */}
        {!customDescription.trim() && (
          <div className="mt-4 bg-orange-50 border-2 border-orange-300 rounded-2xl p-4 flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <h5 className="font-bold text-orange-800 mb-1">Description Required</h5>
              <p className="text-sm text-orange-700">
                Please describe your ideal trip so Grok AI can generate personalized recommendations.
              </p>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">How It Works</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Grok AI analyzes your description and preferences</li>
                <li>• Suggests destinations matching your criteria</li>
                <li>• Admins review and finalize all itinerary details</li>
                <li>• You'll receive a customized travel plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
