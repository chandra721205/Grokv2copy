import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  ArrowLeft, Send, Users, Calendar, DollarSign, 
  MessageSquare, Sparkles, CheckCircle2, AlertCircle, Accessibility
} from 'lucide-react';

interface CustomTourFormProps {
  onBack: () => void;
  onSubmit: () => void;
  categoryName: string;
  categoryEmoji: string;
}

export function CustomTourForm({ onBack, onSubmit, categoryName, categoryEmoji }: CustomTourFormProps) {
  const [formData, setFormData] = useState({
    groupSize: '',
    ages: '',
    interests: '',
    dates: '',
    budget: '',
    specialNeeds: '',
    customIdeas: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Wait 2 seconds then call onSubmit
      setTimeout(() => {
        onSubmit();
      }, 2000);
    }, 1500);
  };

  const isFormValid = formData.groupSize && formData.interests && formData.dates;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Request Submitted!</h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Grok AI is analyzing your requirements. You'll receive personalized suggestions within 1 week.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 mb-6">
              <p className="text-xs font-bold text-purple-900 mb-2">What happens next?</p>
              <ul className="text-xs text-gray-700 space-y-1.5 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">1.</span>
                  <span>Grok AI analyzes your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">2.</span>
                  <span>Admin reviews and customizes your tour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">3.</span>
                  <span>You receive notification with custom itinerary</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onBack}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Back to Tour Planning
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe5d4] via-[#ffd4e5] to-[#e5d4ff] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-xl sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">{categoryEmoji}</span>
              <span>Request Custom Tour</span>
            </h1>
            <p className="text-white/90 text-sm">{categoryName} Category</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-5 border-2 border-blue-300 shadow-lg"
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-blue-900 mb-2">Custom Tour Planning</h3>
              <p className="text-xs text-blue-800 leading-relaxed">
                Tell us about your needs and Grok AI will create a personalized itinerary. 
                Admin will review and contact you within 1 week with tailored suggestions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form Fields */}
        <div className="bg-white rounded-3xl p-6 shadow-xl space-y-5">
          {/* Group Size */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
              <Users className="w-4 h-4 text-purple-600" />
              <span>Group Size *</span>
            </label>
            <input
              type="number"
              min="1"
              required
              value={formData.groupSize}
              onChange={(e) => handleChange('groupSize', e.target.value)}
              placeholder="E.g., 4"
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Ages */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
              <Users className="w-4 h-4 text-purple-600" />
              <span>Ages of Travelers</span>
            </label>
            <input
              type="text"
              value={formData.ages}
              onChange={(e) => handleChange('ages', e.target.value)}
              placeholder="E.g., Adults (2), Children (2) ages 5 and 8"
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Interests */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
              <MessageSquare className="w-4 h-4 text-purple-600" />
              <span>Interests & Preferences *</span>
            </label>
            <textarea
              required
              value={formData.interests}
              onChange={(e) => handleChange('interests', e.target.value)}
              placeholder="E.g., Nature walks, cultural sites, kid-friendly activities, photography"
              className="w-full h-24 px-4 py-3 border-2 border-gray-300 rounded-2xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Dates */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span>Preferred Dates *</span>
            </label>
            <input
              type="text"
              required
              value={formData.dates}
              onChange={(e) => handleChange('dates', e.target.value)}
              placeholder="E.g., March 15-20, 2026"
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
              <DollarSign className="w-4 h-4 text-purple-600" />
              <span>Approximate Budget (per person)</span>
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
            >
              <option value="">Select budget range</option>
              <option value="budget">Budget (₹10,000 - ₹20,000)</option>
              <option value="moderate">Moderate (₹20,000 - ₹40,000)</option>
              <option value="premium">Premium (₹40,000 - ₹75,000)</option>
              <option value="luxury">Luxury (₹75,000+)</option>
            </select>
          </div>

          {/* Special Needs */}
          {categoryName.includes('Accessibility') && (
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                <Accessibility className="w-4 h-4 text-purple-600" />
                <span>Special Accessibility Needs</span>
              </label>
              <textarea
                value={formData.specialNeeds}
                onChange={(e) => handleChange('specialNeeds', e.target.value)}
                placeholder="E.g., Wheelchair accessible, hearing assistance, dietary restrictions"
                className="w-full h-24 px-4 py-3 border-2 border-gray-300 rounded-2xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Custom Ideas */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Any Custom Ideas or Special Requests?</span>
            </label>
            <textarea
              value={formData.customIdeas}
              onChange={(e) => handleChange('customIdeas', e.target.value)}
              placeholder="E.g., Want to visit local markets, celebrate a birthday, need vegetarian meals"
              className="w-full h-24 px-4 py-3 border-2 border-gray-300 rounded-2xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Grok AI Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-5 border-2 border-yellow-300 shadow-lg"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs font-bold text-orange-900 mb-1">Grok AI Processing:</p>
              <p className="text-xs text-orange-800 leading-relaxed">
                Your request will be analyzed by Grok AI and reviewed by our admin team. 
                You'll receive a notification within <strong>1 week</strong> with your custom itinerary.
              </p>
            </div>
          </div>
        </motion.div>
      </form>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl z-40">
        <div className="max-w-md mx-auto">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            onClick={handleSubmit}
            className={`w-full h-14 rounded-2xl font-bold text-base transition-all shadow-lg flex items-center justify-center gap-2 ${
              isFormValid && !isSubmitting
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 active:scale-95'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Custom Request</span>
              </>
            )}
          </button>
          {!isFormValid && (
            <p className="text-xs text-red-600 text-center mt-2">
              * Please fill in all required fields
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
