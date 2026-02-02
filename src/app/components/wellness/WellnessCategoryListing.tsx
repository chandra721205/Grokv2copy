import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  MapPin,
  Star,
  CheckCircle2,
  Package,
  Edit3,
  X,
  Upload,
  Accessibility,
  Users,
  Home,
  Utensils,
  FileText,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ========================================
// WELLNESS CATEGORY LISTING SCREEN
// Shows treatments/centers with dual-button system
// ========================================

interface Treatment {
  id: string;
  name: string;
  centerName: string;
  location: string;
  rating: number;
  duration: string;
  referencePrice: string;
  features: string[];
  image: string;
}

interface WellnessCategoryListingProps {
  categoryId: string;
  categoryName: string;
  onBack: () => void;
  onRequestQuote: (treatment: Treatment) => void;
  onSelectStandard: (treatment: Treatment) => void;
}

export function WellnessCategoryListing({
  categoryId,
  categoryName,
  onBack,
  onRequestQuote,
  onSelectStandard,
}: WellnessCategoryListingProps) {
  // Mock treatments data
  const treatments: Treatment[] = [
    {
      id: '1',
      name: 'Complete Panchakarma Detox Program',
      centerName: '[Admin: Somatheeram Ayurveda Resort]',
      location: '[Admin: Kerala, Trivandrum]',
      rating: 4.8,
      duration: '21 days',
      referencePrice: '₹80,000',
      features: ['Vamana Therapy', 'Virechana', 'Basti', 'Yoga Sessions', 'Herbal Medicine'],
      image: '🌿',
    },
    {
      id: '2',
      name: 'Arthritis & Joint Care Package',
      centerName: '[Admin: Kalari Kovilakom Palace]',
      location: '[Admin: Kerala, Palakkad]',
      rating: 4.9,
      duration: '14 days',
      referencePrice: '₹65,000',
      features: ['Kati Basti', 'Pizhichil', 'Njavarakizhi', 'Physiotherapy'],
      image: '🦴',
    },
    {
      id: '3',
      name: 'Stress Relief & Mental Wellness',
      centerName: '[Admin: Ayurvedic Healing Village]',
      location: '[Admin: Karnataka, Bangalore]',
      rating: 4.7,
      duration: '7 days',
      referencePrice: '₹45,000',
      features: ['Shirodhara', 'Meditation', 'Pranayama', 'Counseling'],
      image: '🧘',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 mb-6 hover:text-gray-900 text-lg"
          >
            <ChevronRight className="rotate-180 h-6 w-6" />
            <span className="font-semibold">Back to Categories</span>
          </button>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-3">{categoryName}</h1>
            <p className="text-xl leading-relaxed">
              Browse verified centers and treatments. Submit a custom request for personalized care.
            </p>
          </div>
        </div>

        {/* Important Notice - Reference Pricing */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-yellow-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Important: Pricing Information
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                All prices shown are <strong>Reference Only</strong>. Your final price will be 
                determined by our admin team based on your specific medical needs, senior care 
                requirements, travel dates, and customization requests.
              </p>
            </div>
          </div>
        </div>

        {/* Treatments List */}
        <div className="space-y-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Top Section */}
              <div className="p-8">
                {/* Header with Icon and Rating */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
                    {treatment.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                      {treatment.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                      <span className="text-lg font-semibold">{treatment.centerName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-base">{treatment.location}</span>
                    </div>
                  </div>
                  <div className="bg-emerald-100 px-4 py-2 rounded-xl flex items-center gap-2">
                    <Star className="h-6 w-6 text-emerald-600 fill-emerald-600" />
                    <span className="text-2xl font-bold text-gray-900">{treatment.rating}</span>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="bg-teal-50 rounded-2xl p-6 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    Package Includes
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {treatment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-lg text-gray-800">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration and Price */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <p className="text-base text-gray-600 mb-1">Duration</p>
                    <p className="text-3xl font-bold text-gray-900">{treatment.duration}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-2xl p-6 relative">
                    <p className="text-base text-gray-600 mb-1">Reference Price</p>
                    <p className="text-3xl font-bold text-emerald-700">{treatment.referencePrice}</p>
                    <div className="absolute top-2 right-2">
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        REFERENCE ONLY
                      </span>
                    </div>
                  </div>
                </div>

                {/* DUAL BUTTON SYSTEM - Senior-Friendly Large Buttons */}
                <div className="space-y-4">
                  {/* Primary Button: Customize / Request Quote */}
                  <Button
                    onClick={() => onRequestQuote(treatment)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-8 rounded-2xl text-2xl font-bold shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Edit3 className="mr-3 h-8 w-8" />
                    Customize / Request Quote
                    <ChevronRight className="ml-3 h-8 w-8" />
                  </Button>

                  {/* Secondary Button: Select Standard Package */}
                  <Button
                    onClick={() => onSelectStandard(treatment)}
                    variant="outline"
                    className="w-full border-3 border-emerald-600 text-emerald-700 hover:bg-emerald-50 py-8 rounded-2xl text-2xl font-bold"
                  >
                    <Package className="mr-3 h-8 w-8" />
                    Select Standard Package
                  </Button>
                </div>

                {/* Additional Info */}
                <p className="text-center text-base text-gray-600 mt-4 leading-relaxed">
                  💡 Choose "Customize" to specify your medical needs, senior care requirements, 
                  and get a personalized quote within 24 hours
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our wellness specialists are available to guide you through the selection process
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white text-xl px-8 py-6 rounded-xl">
            📞 Speak to a Specialist
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CUSTOM REQUEST FORM MODAL
// Senior-Friendly with Specific Toggles
// ========================================

interface CustomRequestFormProps {
  treatment: Treatment;
  categoryName: string;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

export function CustomRequestForm({
  treatment,
  categoryName,
  onClose,
  onSubmit,
}: CustomRequestFormProps) {
  const [formData, setFormData] = useState({
    treatmentNeed: '',
    medicalReports: [] as File[],
    requiresWheelchair: false,
    requiresCareAssistant: false,
    groundFloorAccommodation: false,
    dietaryPreference: 'vegetarian',
    additionalRequirements: '',
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl my-8"
      >
        {/* Header - Gradient */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-3">
                Plan Your {categoryName} Journey
              </h2>
              <p className="text-xl leading-relaxed">
                Fill in your requirements for a personalized quote
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors flex-shrink-0 ml-4"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Form Content - Scrollable */}
        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Selected Treatment Summary */}
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              Selected Treatment
            </h3>
            <p className="text-2xl font-semibold text-gray-900 mb-2">{treatment.name}</p>
            <p className="text-lg text-gray-700">{treatment.centerName}</p>
          </div>

          {/* Treatment Need - Large Text Input */}
          <div className="space-y-3">
            <label className="block text-2xl font-bold text-gray-900">
              <FileText className="inline h-6 w-6 mr-2 text-emerald-600" />
              What is your specific treatment need?
            </label>
            <p className="text-base text-gray-600">
              Example: "Knee replacement recovery with mobility assistance"
            </p>
            <textarea
              value={formData.treatmentNeed}
              onChange={(e) => setFormData({ ...formData, treatmentNeed: e.target.value })}
              rows={4}
              className="w-full px-6 py-4 border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 text-xl resize-none"
              placeholder="Please describe your medical condition and treatment goals..."
            />
          </div>

          {/* Medical Upload - Senior-Friendly */}
          <div className="space-y-3">
            <label className="block text-2xl font-bold text-gray-900">
              <Upload className="inline h-6 w-6 mr-2 text-emerald-600" />
              Attach Medical Reports (Optional)
            </label>
            <div className="border-3 border-dashed border-emerald-400 rounded-2xl p-10 text-center bg-emerald-50 hover:bg-emerald-100 cursor-pointer transition-colors">
              <Upload className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-900 mb-2">
                Click to upload medical reports
              </p>
              <p className="text-lg text-gray-600">
                PDF, JPG, PNG • Maximum 10MB per file
              </p>
            </div>
          </div>

          {/* SENIOR CARE TOGGLES - Critical Section */}
          <div className="bg-purple-50 border-3 border-purple-300 rounded-2xl p-8 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-purple-600" />
              Senior Care Requirements
            </h3>

            {/* Wheelchair/Mobility Aid */}
            <label className="flex items-start gap-6 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.requiresWheelchair}
                onChange={(e) =>
                  setFormData({ ...formData, requiresWheelchair: e.target.checked })
                }
                className="w-8 h-8 mt-1 accent-emerald-600 cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Accessibility className="h-7 w-7 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    I require a Wheelchair/Mobility Aid
                  </span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We will ensure wheelchair-accessible facilities and arrange transport with mobility support
                </p>
              </div>
            </label>

            {/* Personal Care Assistant */}
            <label className="flex items-start gap-6 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.requiresCareAssistant}
                onChange={(e) =>
                  setFormData({ ...formData, requiresCareAssistant: e.target.checked })
                }
                className="w-8 h-8 mt-1 accent-emerald-600 cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-7 w-7 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    I need a Personal Care Assistant
                  </span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trained nursing staff will be assigned for daily care, medication management, and personal assistance
                </p>
              </div>
            </label>

            {/* Ground Floor Accommodation */}
            <label className="flex items-start gap-6 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.groundFloorAccommodation}
                onChange={(e) =>
                  setFormData({ ...formData, groundFloorAccommodation: e.target.checked })
                }
                className="w-8 h-8 mt-1 accent-emerald-600 cursor-pointer"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Home className="h-7 w-7 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    Preferred Accommodation: Ground Floor / Hospital Bed
                  </span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Room on ground floor with elevator access and hospital-grade bed if needed
                </p>
              </div>
            </label>
          </div>

          {/* Dietary Preferences - Large Dropdown */}
          <div className="space-y-3">
            <label className="block text-2xl font-bold text-gray-900">
              <Utensils className="inline h-6 w-6 mr-2 text-emerald-600" />
              Dietary Preferences
            </label>
            <select
              value={formData.dietaryPreference}
              onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
              className="w-full px-6 py-5 border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 text-xl cursor-pointer"
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="jain">Jain (No Root Vegetables)</option>
              <option value="diabetic">Diabetic-Friendly</option>
              <option value="low-sodium">Low Sodium</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="halal">Halal</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </select>
          </div>

          {/* Additional Requirements */}
          <div className="space-y-3">
            <label className="block text-2xl font-bold text-gray-900">
              Additional Requirements
            </label>
            <textarea
              value={formData.additionalRequirements}
              onChange={(e) =>
                setFormData({ ...formData, additionalRequirements: e.target.value })
              }
              rows={4}
              className="w-full px-6 py-4 border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 text-xl resize-none"
              placeholder="Any other specific needs, allergies, or preferences..."
            />
          </div>
        </div>

        {/* Footer - Action Button */}
        <div className="sticky bottom-0 bg-gray-50 p-8 rounded-b-3xl border-t-3 border-gray-200">
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-8 rounded-2xl text-3xl font-bold shadow-2xl"
          >
            <CheckCircle2 className="mr-4 h-10 w-10" />
            Submit Interest to Specialist
            <ChevronRight className="ml-4 h-10 w-10" />
          </Button>
          <p className="text-center text-lg text-gray-600 mt-4">
            You will receive a detailed response within 24 hours
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}