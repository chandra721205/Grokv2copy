import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Check, Calendar, Users, DollarSign, Clock, 
  Bot, Sparkles, ChevronRight, Mountain, Church, Leaf, 
  GraduationCap, Briefcase, Ship, Heart, Trophy, HeartPulse,
  Compass, Map, Youtube
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Slider } from '@/app/components/ui/slider';

interface ComboTourPlannerProps {
  onBack: () => void;
}

const allCategories = [
  { id: 'adventure', icon: Mountain, name: 'Adventure', color: 'orange', bgColor: 'bg-orange-500', ringColor: 'ring-orange-400', textColor: 'text-orange-600' },
  { id: 'wellness', icon: HeartPulse, name: 'Wellness', color: 'green', bgColor: 'bg-green-500', ringColor: 'ring-green-400', textColor: 'text-green-600' },
  { id: 'devotional', icon: Church, name: 'Devotional', color: 'purple', bgColor: 'bg-purple-500', ringColor: 'ring-purple-400', textColor: 'text-purple-600' },
  { id: 'heritage', icon: Compass, name: 'Heritage', color: 'amber', bgColor: 'bg-amber-500', ringColor: 'ring-amber-400', textColor: 'text-amber-600' },
  { id: 'eco', icon: Leaf, name: 'Eco', color: 'emerald', bgColor: 'bg-emerald-500', ringColor: 'ring-emerald-400', textColor: 'text-emerald-600' },
  { id: 'educational', icon: GraduationCap, name: 'Educational', color: 'blue', bgColor: 'bg-blue-500', ringColor: 'ring-blue-400', textColor: 'text-blue-600' },
  { id: 'corporate', icon: Briefcase, name: 'Corporate', color: 'gray', bgColor: 'bg-gray-500', ringColor: 'ring-gray-400', textColor: 'text-gray-600' },
  { id: 'cruise', icon: Ship, name: 'Cruise', color: 'cyan', bgColor: 'bg-cyan-500', ringColor: 'ring-cyan-400', textColor: 'text-cyan-600' },
  { id: 'health', icon: HeartPulse, name: 'Health', color: 'red', bgColor: 'bg-red-500', ringColor: 'ring-red-400', textColor: 'text-red-600' },
  { id: 'senior', icon: Users, name: 'Senior', color: 'indigo', bgColor: 'bg-indigo-500', ringColor: 'ring-indigo-400', textColor: 'text-indigo-600' },
  { id: 'honeymoon', icon: Heart, name: 'Honeymoon', color: 'pink', bgColor: 'bg-pink-500', ringColor: 'ring-pink-400', textColor: 'text-pink-600' },
  { id: 'sports', icon: Trophy, name: 'Sports', color: 'yellow', bgColor: 'bg-yellow-500', ringColor: 'ring-yellow-400', textColor: 'text-yellow-600' },
];

export function ComboTourPlanner({ onBack }: ComboTourPlannerProps) {
  const [step, setStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    travelers: 2,
    budget: 50000,
    pace: 50,
  });

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      if (selectedCategories.length < 5) {
        setSelectedCategories([...selectedCategories, categoryId]);
      }
    }
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Select Your Interests</h2>
        <p className="text-gray-600">Choose up to 5 categories to mix & match</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-blue-600">
            {selectedCategories.length}/5 selected
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {allCategories.map((category, index) => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleCategory(category.id)}
              className={`relative p-4 rounded-3xl transition-all ${
                isSelected
                  ? `${category.bgColor} ${category.ringColor} text-white shadow-lg ring-2`
                  : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
              }`}
            >
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              <category.icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-white' : category.textColor}`} />
              <p className="font-semibold text-sm">{category.name}</p>
            </motion.button>
          );
        })}
      </div>

      <Button
        onClick={() => setStep(2)}
        disabled={selectedCategories.length === 0}
        className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
      >
        Continue <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Travel Preferences</h2>
        <p className="text-gray-600">Tell us about your trip details</p>
      </div>

      <div className="space-y-6 mb-6">
        {/* Dates */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-lg">Travel Dates</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Start Date</label>
              <Input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="rounded-2xl h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">End Date</label>
              <Input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="rounded-2xl h-12"
              />
            </div>
          </div>
        </div>

        {/* Travelers */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-purple-600" />
            <h3 className="font-bold text-lg">Number of Travelers</h3>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFormData({ ...formData, travelers: Math.max(1, formData.travelers - 1) })}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold"
            >
              -
            </button>
            <div className="flex-1 text-center">
              <p className="text-3xl font-bold text-purple-600">{formData.travelers}</p>
              <p className="text-sm text-gray-600">Travelers</p>
            </div>
            <button
              onClick={() => setFormData({ ...formData, travelers: formData.travelers + 1 })}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Budget */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h3 className="font-bold text-lg">Budget per Person</h3>
          </div>
          <div className="mb-4">
            <p className="text-3xl font-bold text-green-600 mb-2">
              ₹{formData.budget.toLocaleString()}
            </p>
            <Slider
              value={[formData.budget]}
              onValueChange={(value) => setFormData({ ...formData, budget: value[0] })}
              min={5000}
              max={200000}
              step={5000}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>₹5K</span>
              <span>₹2L</span>
            </div>
          </div>
        </div>

        {/* Pace */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-orange-600" />
            <h3 className="font-bold text-lg">Travel Pace</h3>
          </div>
          <Slider
            value={[formData.pace]}
            onValueChange={(value) => setFormData({ ...formData, pace: value[0] })}
            min={0}
            max={100}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-sm">
            <span className={formData.pace < 33 ? 'font-bold text-orange-600' : 'text-gray-500'}>
              Relaxed
            </span>
            <span className={formData.pace >= 33 && formData.pace < 66 ? 'font-bold text-orange-600' : 'text-gray-500'}>
              Moderate
            </span>
            <span className={formData.pace >= 66 ? 'font-bold text-orange-600' : 'text-gray-500'}>
              Fast-paced
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => setStep(1)}
          variant="outline"
          className="flex-1 h-14 rounded-full"
        >
          Back
        </Button>
        <Button
          onClick={() => setStep(3)}
          className="flex-1 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Bot className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl font-bold">Your Preferences Summary</h2>
        </div>
        <p className="text-gray-600">Review your selections and discover destinations</p>
      </div>

      {/* Selected Categories Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 mb-6 text-white">
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Your Custom Combo
        </h3>
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((catId) => {
            const cat = allCategories.find(c => c.id === catId);
            return (
              <div key={catId} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {cat && <cat.icon className="w-4 h-4" />}
                <span>{cat?.name}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-white/70">Duration</p>
            <p className="font-bold">
              {formData.startDate && formData.endDate
                ? `${Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24))} days`
                : 'Not set'}
            </p>
          </div>
          <div>
            <p className="text-white/70">Budget</p>
            <p className="font-bold">₹{(formData.budget * formData.travelers).toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Discover Destinations */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-6 mb-6 border-2 border-orange-200">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-orange-600" />
          <h3 className="font-bold text-lg text-gray-800">Discover Perfect Destinations</h3>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          Use these tools to explore and find destinations that match your selected categories and preferences:
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              const categoryText = selectedCategories.map(id => allCategories.find(c => c.id === id)?.name).filter(Boolean).join(' ');
              const query = `india ${categoryText} ${formData.budget > 100000 ? 'luxury' : formData.budget > 50000 ? 'premium' : 'budget'} destinations`;
              window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
            }}
            className="flex-1 bg-white border-2 border-blue-300 text-blue-700 px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-sm"
          >
            <Map className="w-4 h-4" />
            Google Search
          </button>
          <button
            onClick={() => {
              const categoryText = selectedCategories.map(id => allCategories.find(c => c.id === id)?.name).filter(Boolean).join(' ');
              const query = `india ${categoryText} travel guide vlog`;
              window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
            }}
            className="flex-1 bg-red-600 text-white px-4 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-sm"
          >
            <Youtube className="w-4 h-4" />
            YouTube Browse
          </button>
        </div>
      </div>

      {/* Admin Managed Destinations */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Available Destinations</h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Admin Managed</span>
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6">
          <div className="text-center">
            <div className="text-5xl mb-3">📍</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Destinations Coming Soon</h4>
            <p className="text-sm text-gray-600 mb-4">
              Our admin team is curating the best destinations for your selected categories. Meanwhile, use the Google Search and YouTube Browse buttons above to explore options!
            </p>
            <div className="bg-white rounded-2xl p-4 text-left space-y-2">
              <p className="text-xs text-gray-500 flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Admin-Added Destination 1 (Placeholder)</span>
              </p>
              <p className="text-xs text-gray-500 flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Admin-Added Destination 2 (Placeholder)</span>
              </p>
              <p className="text-xs text-gray-500 flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Admin-Added Destination 3 (Placeholder)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => setStep(2)}
          variant="outline"
          className="flex-1 h-14 rounded-full"
        >
          Back
        </Button>
        <Button
          onClick={onBack}
          className="flex-1 h-14 rounded-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
        >
          Save Preferences
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-8 rounded-b-[2rem] mb-6">
        <button
          onClick={step === 1 ? onBack : () => setStep(step - 1)}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <h1 className="text-white text-2xl font-bold mb-4">Custom Combo Tour</h1>

        {/* Progress Steps */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`h-2 rounded-full flex-1 transition-all ${
                  s <= step ? 'bg-white' : 'bg-white/30'
                }`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-white/80 text-xs">
          <span>Interests</span>
          <span>Preferences</span>
          <span>Review</span>
        </div>
      </div>

      <div className="px-6">
        <AnimatePresence mode="wait">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </AnimatePresence>
      </div>
    </div>
  );
}
