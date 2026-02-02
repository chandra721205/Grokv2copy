import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingCart,
  ClipboardList,
  Heart,
  ChevronRight,
  ChevronDown,
  Package,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Accessibility,
  Utensils,
  Stethoscoe,
  Home,
  User,
  Calendar,
  MapPin,
  Search,
  Filter,
  Star,
  Shield,
  X,
  FileText,
  Phone,
  Mail,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

// ========================================
// HEALTH & WELLNESS - SENIOR-FRIENDLY UI
// Complete Request-to-Book Flow
// ========================================

// DESIGN SYSTEM: Emerald/Teal Palette (Preserved)
const COLORS = {
  primary: '#10B981', // Emerald-500
  primaryDark: '#059669', // Emerald-600
  secondary: '#14B8A6', // Teal-500
  secondaryDark: '#0D9488', // Teal-600
  accent: '#34D399', // Emerald-400
  text: {
    primary: '#1F2937', // Gray-800 (High contrast)
    secondary: '#4B5563', // Gray-600
    light: '#9CA3AF', // Gray-400
  },
  background: {
    white: '#FFFFFF',
    light: '#F9FAFB', // Gray-50
    emerald: '#ECFDF5', // Emerald-50
  },
  senior: {
    warning: '#F59E0B', // Amber-500
    danger: '#EF4444', // Red-500
    success: '#10B981', // Emerald-500
  },
};

// ========================================
// PHASE 1: GLOBAL WELLNESS NAVIGATION BAR
// Floating Action Button (FAB) - "My Wellness Cart"
// ========================================

export function WellnessNavigationBar() {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example: 3 active requests

  return (
    <>
      {/* Floating Action Button (FAB) - Bottom Right */}
      <motion.button
        onClick={() => setShowCart(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-full shadow-2xl"
        style={{ fontSize: '18px', fontWeight: 600 }}
      >
        <ClipboardList className="h-7 w-7" />
        <span>My Wellness Cart</span>
        {cartCount > 0 && (
          <span className="bg-white text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-base">
            {cartCount}
          </span>
        )}
      </motion.button>

      {/* Wellness Cart Overlay */}
      <AnimatePresence>
        {showCart && (
          <WellnessCartOverlay onClose={() => setShowCart(false)} cartItems={[]} />
        )}
      </AnimatePresence>
    </>
  );
}

function WellnessCartOverlay({ onClose, cartItems }: { onClose: () => void; cartItems: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto"
        style={{ padding: '40px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold" style={{ color: COLORS.text.primary }}>
            <ClipboardList className="inline h-10 w-10 mr-3 text-emerald-600" />
            My Wellness Requests
          </h2>
          <button
            onClick={onClose}
            className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-8 w-8 text-gray-600" />
          </button>
        </div>

        {/* Active Requests */}
        <div className="space-y-6">
          {/* Example Request Card */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border-3 border-emerald-300 rounded-2xl p-6 bg-emerald-50"
              style={{ borderWidth: '3px' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.text.primary }}>
                    [Admin: Treatment Name]
                  </h3>
                  <p className="text-lg text-gray-600 mb-3">
                    Requested: [Date]
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-semibold text-base">
                      ⏳ Pending Admin Review
                    </span>
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-semibold text-base">
                      ✓ Senior Care Included
                    </span>
                  </div>
                </div>
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  style={{ fontSize: '16px', padding: '12px 24px' }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {cartItems.length === 0 && (
          <div className="text-center py-12">
            <ClipboardList className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <p className="text-2xl text-gray-600 mb-6">No active wellness requests</p>
            <Button
              onClick={onClose}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              style={{ fontSize: '18px', padding: '16px 32px' }}
            >
              Browse Treatments
            </Button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ========================================
// PHASE 1: ENHANCED LISTING CARDS
// Split Action Buttons + Senior-Friendly Badge
// ========================================

interface TreatmentCardProps {
  treatment: {
    id: string;
    name: string;
    category: string;
    imageUrl?: string;
    price: string;
    duration: string;
    rating: number;
    seniorFriendly: boolean;
  };
  onSelectPackage: () => void;
  onCustomize: () => void;
}

export function TreatmentCard({ treatment, onSelectPackage, onCustomize }: TreatmentCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-emerald-400 transition-all">
      {/* Image Area */}
      <div className="relative h-56 bg-gradient-to-br from-emerald-200 to-teal-200">
        {/* Senior-Friendly Badge (Prominent) */}
        {treatment.seniorFriendly && (
          <div className="absolute top-4 right-4 bg-emerald-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-base">Senior-Friendly Certified</span>
          </div>
        )}

        {/* Placeholder Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🏥</span>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '28px' }}>
        {/* Treatment Name (Large, High Contrast) */}
        <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.text.primary, lineHeight: 1.3 }}>
          {treatment.name}
        </h3>

        {/* Category */}
        <p className="text-lg text-gray-600 mb-4">{treatment.category}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Duration</p>
            <p className="text-xl font-bold text-emerald-700">{treatment.duration}</p>
          </div>
          <div className="bg-teal-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Price Range</p>
            <p className="text-xl font-bold text-teal-700">{treatment.price}</p>
          </div>
        </div>

        {/* Price Disclaimer (Required) */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mb-6">
          <p className="text-sm text-amber-900 flex items-start gap-2">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Indicative Price.</strong> Final Quote provided by Admin after Medical Review.
            </span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-6 w-6 ${
                  star <= treatment.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-lg font-semibold text-gray-700">{treatment.rating}.0</span>
        </div>

        {/* Senior-Friendly Features (If Applicable) */}
        {treatment.seniorFriendly && (
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4 mb-6">
            <p className="text-base font-bold text-emerald-900 mb-3">Senior Care Features:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-base text-gray-800">Wheelchair/Ramp Access</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-base text-gray-800">24/7 Medical Staff On-Site</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-base text-gray-800">Ground Floor Rooms Available</span>
              </div>
            </div>
          </div>
        )}

        {/* Split Action Buttons (NEW) */}
        <div className="space-y-3">
          {/* Primary Button: Select Package */}
          <Button
            onClick={onSelectPackage}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg"
            style={{ height: '64px', fontSize: '20px', fontWeight: 600 }}
          >
            <Package className="mr-3 h-7 w-7" />
            Select Package
            <ChevronRight className="ml-3 h-7 w-7" />
          </Button>

          {/* Secondary Button: Customize (Outline) */}
          <Button
            onClick={onCustomize}
            variant="outline"
            className="w-full border-3 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            style={{ height: '60px', fontSize: '18px', fontWeight: 600, borderWidth: '3px' }}
          >
            <Edit3 className="mr-3 h-6 w-6" />
            Customize / Request Info
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// PHASE 1: ENHANCED SEARCH BAR
// Search by Ailment (Senior-Friendly)
// ========================================

export function EnhancedSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'treatment' | 'ailment'>('ailment');

  const ailmentSuggestions = [
    'Knee Pain',
    'Back Pain',
    'Arthritis',
    'Diabetes',
    'High Blood Pressure',
    'Insomnia',
    'Stress & Anxiety',
    'Digestive Issues',
    'Weight Management',
    'Heart Conditions',
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 border-2 border-emerald-200">
      {/* Search Type Toggle */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSearchType('ailment')}
          className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
            searchType === 'ailment'
              ? 'bg-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Search by Ailment
        </button>
        <button
          onClick={() => setSearchType('treatment')}
          className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
            searchType === 'treatment'
              ? 'bg-teal-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Search by Treatment
        </button>
      </div>

      {/* Search Input (Large, High Contrast) */}
      <div className="relative mb-6">
        <Search
          className="absolute left-6 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-400"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            searchType === 'ailment'
              ? 'E.g., Knee Pain, Insomnia, Diabetes...'
              : 'E.g., Ayurveda, Physiotherapy, Yoga...'
          }
          className="w-full pl-16 pr-6 py-5 text-xl border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
          style={{ fontSize: '20px', borderWidth: '3px' }}
        />
      </div>

      {/* Quick Ailment Suggestions (For Seniors) */}
      {searchType === 'ailment' && (
        <div>
          <p className="text-lg font-bold text-gray-900 mb-4">Common Ailments:</p>
          <div className="flex flex-wrap gap-3">
            {ailmentSuggestions.map((ailment) => (
              <button
                key={ailment}
                onClick={() => setSearchQuery(ailment)}
                className="px-5 py-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-full font-semibold text-base transition-colors"
              >
                {ailment}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filter Button */}
      <Button
        className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white"
        style={{ height: '56px', fontSize: '18px', fontWeight: 600 }}
      >
        <Filter className="mr-3 h-6 w-6" />
        Apply Filters
      </Button>
    </div>
  );
}

// ========================================
// PHASE 2: SCREEN A - TREATMENT INTEREST & CUSTOMIZATION
// Complete Form with Senior Assistance Section
// ========================================

interface TreatmentCustomizationFormProps {
  treatmentType: string;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function TreatmentCustomizationForm({
  treatmentType,
  onClose,
  onSubmit,
}: TreatmentCustomizationFormProps) {
  const [formData, setFormData] = useState({
    // Auto-filled
    treatmentType: treatmentType,

    // Basic Info
    preferredDates: '',
    numberOfPeople: 1,
    budget: '',

    // Senior Assistance Requirements (CRITICAL)
    wheelchairRequired: false,
    fullTimeCaretaker: false,
    groundFloorOnly: false,
    specialDietaryNeeds: false,
    dietaryDetails: '',

    // Additional Info
    medicalHistory: '',
    specialRequests: '',
  });

  const handleAutoFill = () => {
    // Simulate pulling from Health Profile
    toast.success('✓ Auto-filled from your Health Profile');
    setFormData({
      ...formData,
      wheelchairRequired: true,
      specialDietaryNeeds: true,
      dietaryDetails: 'Low Sodium, Diabetic',
      medicalHistory: '[Auto-filled from profile]',
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl"
          style={{ padding: '48px' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-3" style={{ color: COLORS.text.primary }}>
                Treatment Interest & Customization
              </h2>
              <p className="text-xl text-gray-600">
                Help us understand your needs for personalized care
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X className="h-8 w-8 text-gray-600" />
            </button>
          </div>

          {/* Auto-fill Button (Prominent) */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-3 border-purple-300 rounded-2xl p-6 mb-10" style={{ borderWidth: '3px' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Save Time with AI</h3>
                  <p className="text-base text-gray-600">
                    We can auto-fill this form from your existing Health Profile
                  </p>
                </div>
              </div>
              <Button
                onClick={handleAutoFill}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
                style={{ height: '56px', fontSize: '18px', fontWeight: 600, paddingLeft: '32px', paddingRight: '32px' }}
              >
                <User className="mr-2 h-6 w-6" />
                Auto-fill from Health Profile
              </Button>
            </div>
          </div>

          {/* Form Sections */}
          <div className="space-y-10">
            {/* Treatment Type (Auto-filled) */}
            <div className="bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-6" style={{ borderWidth: '3px' }}>
              <label className="block text-xl font-bold text-gray-900 mb-3">
                Treatment Type (Auto-filled)
              </label>
              <div className="flex items-center gap-3 text-emerald-700">
                <Stethoscope className="h-7 w-7" />
                <span className="text-2xl font-bold">{treatmentType}</span>
              </div>
            </div>

            {/* Basic Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 border-b-3 border-emerald-300 pb-4">
                Basic Information
              </h3>

              {/* Preferred Dates */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  <Calendar className="inline h-6 w-6 mr-2" />
                  Preferred Dates
                </label>
                <input
                  type="date"
                  value={formData.preferredDates}
                  onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                  className="w-full px-6 py-5 text-xl border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
                  style={{ fontSize: '20px', borderWidth: '3px' }}
                />
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  <User className="inline h-6 w-6 mr-2" />
                  Number of People
                </label>
                <input
                  type="number"
                  value={formData.numberOfPeople}
                  onChange={(e) =>
                    setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) })
                  }
                  min={1}
                  className="w-full px-6 py-5 text-xl border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
                  style={{ fontSize: '20px', borderWidth: '3px' }}
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  Budget Range (₹)
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="E.g., ₹50,000 - ₹1,00,000"
                  className="w-full px-6 py-5 text-xl border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
                  style={{ fontSize: '20px', borderWidth: '3px' }}
                />
              </div>
            </div>

            {/* SENIOR ASSISTANCE REQUIREMENTS (CRITICAL SECTION) */}
            <div className="bg-amber-50 border-4 border-amber-400 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center">
                  <Accessibility className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Senior Assistance Requirements
                </h3>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Please check all that apply to ensure we provide appropriate care and facilities:
              </p>

              <div className="space-y-6">
                {/* Wheelchair/Mobility Aid */}
                <label className="flex items-start gap-5 p-6 bg-white border-3 border-gray-300 rounded-2xl hover:border-emerald-400 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.wheelchairRequired}
                    onChange={(e) =>
                      setFormData({ ...formData, wheelchairRequired: e.target.checked })
                    }
                    className="w-8 h-8 mt-1"
                    style={{ accentColor: COLORS.primary }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Accessibility className="h-7 w-7 text-emerald-600" />
                      <span className="text-xl font-bold text-gray-900">
                        Wheelchair/Mobility Aid Required
                      </span>
                    </div>
                    <p className="text-base text-gray-600">
                      We will ensure ramp access, wide doorways, and accessible facilities
                    </p>
                  </div>
                </label>

                {/* Full-time Caretaker/Nurse */}
                <label className="flex items-start gap-5 p-6 bg-white border-3 border-gray-300 rounded-2xl hover:border-emerald-400 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.fullTimeCaretaker}
                    onChange={(e) =>
                      setFormData({ ...formData, fullTimeCaretaker: e.target.checked })
                    }
                    className="w-8 h-8 mt-1"
                    style={{ accentColor: COLORS.primary }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Stethoscope className="h-7 w-7 text-emerald-600" />
                      <span className="text-xl font-bold text-gray-900">
                        Full-time Caretaker/Nurse Needed
                      </span>
                    </div>
                    <p className="text-base text-gray-600">
                      24/7 dedicated medical staff will be arranged
                    </p>
                  </div>
                </label>

                {/* Ground Floor Accommodation Only */}
                <label className="flex items-start gap-5 p-6 bg-white border-3 border-gray-300 rounded-2xl hover:border-emerald-400 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.groundFloorOnly}
                    onChange={(e) =>
                      setFormData({ ...formData, groundFloorOnly: e.target.checked })
                    }
                    className="w-8 h-8 mt-1"
                    style={{ accentColor: COLORS.primary }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Home className="h-7 w-7 text-emerald-600" />
                      <span className="text-xl font-bold text-gray-900">
                        Ground Floor Accommodation Only
                      </span>
                    </div>
                    <p className="text-base text-gray-600">
                      No stairs or elevators required - easy access rooms
                    </p>
                  </div>
                </label>

                {/* Special Dietary Needs */}
                <label className="flex items-start gap-5 p-6 bg-white border-3 border-gray-300 rounded-2xl hover:border-emerald-400 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.specialDietaryNeeds}
                    onChange={(e) =>
                      setFormData({ ...formData, specialDietaryNeeds: e.target.checked })
                    }
                    className="w-8 h-8 mt-1"
                    style={{ accentColor: COLORS.primary }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Utensils className="h-7 w-7 text-emerald-600" />
                      <span className="text-xl font-bold text-gray-900">
                        Special Dietary Needs (Low Sodium/Diabetic)
                      </span>
                    </div>
                    <p className="text-base text-gray-600 mb-4">
                      Customized meals for health conditions
                    </p>
                    {formData.specialDietaryNeeds && (
                      <textarea
                        value={formData.dietaryDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, dietaryDetails: e.target.value })
                        }
                        rows={3}
                        placeholder="E.g., Low Sodium, Diabetic-friendly, No Sugar..."
                        className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 resize-none"
                        style={{ fontSize: '18px' }}
                      />
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Medical History */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-4">
                <FileText className="inline h-6 w-6 mr-2" />
                Medical History (Optional)
              </label>
              <textarea
                value={formData.medicalHistory}
                onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                rows={4}
                placeholder="Any relevant medical conditions, allergies, or ongoing treatments..."
                className="w-full px-6 py-5 text-xl border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 resize-none"
                style={{ fontSize: '18px', borderWidth: '3px' }}
              />
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xl font-bold text-gray-900 mb-4">
                Special Requests
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                rows={4}
                placeholder="Any other requirements or preferences..."
                className="w-full px-6 py-5 text-xl border-3 border-gray-300 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 resize-none"
                style={{ fontSize: '18px', borderWidth: '3px' }}
              />
            </div>
          </div>

          {/* Submit Button (Large, High Contrast) */}
          <div className="mt-12 flex gap-6">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-3 border-gray-400 text-gray-700 hover:bg-gray-100"
              style={{ height: '72px', fontSize: '20px', fontWeight: 600, borderWidth: '3px' }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-2xl"
              style={{ height: '72px', fontSize: '22px', fontWeight: 700 }}
            >
              Submit Request
              <ChevronRight className="ml-3 h-8 w-8" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ========================================
// PHASE 2: SCREEN B - SUBMISSION & ADMIN MESSAGE
// Confirmation Overlay (High Trust)
// ========================================

interface ConfirmationModalProps {
  onClose: () => void;
  onViewRequests: () => void;
}

export function ConfirmationModal({ onClose, onViewRequests }: ConfirmationModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl"
        style={{ padding: '56px' }}
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl"
          >
            <CheckCircle2 className="h-20 w-20 text-white" />
          </motion.div>
        </div>

        {/* Main Message (STRICT TEXT CONTENT) */}
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: COLORS.text.primary }}>
          Thank you! Your interest has been noted.
        </h2>

        <div className="bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-8 mb-8" style={{ borderWidth: '3px' }}>
          <p className="text-2xl text-gray-800 text-center mb-6 leading-relaxed">
            Your request has been sent to our <strong>Wellness Admin Team</strong>. We will analyze your health profile and treatment needs.
          </p>

          <div className="bg-white rounded-2xl p-6 mb-6">
            <p className="text-xl font-bold text-emerald-700 mb-4">
              We will return shortly with a detailed:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="text-lg text-gray-800">Customized Fare Quote</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="h-6 w-6 text-teal-600" />
                </div>
                <span className="text-lg text-gray-800">Treatment Plan & Doctor Profile</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-800">Facility Amenities & Photos</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Accessibility className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-lg text-gray-800">Senior Care Arrangements</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <p className="text-lg text-blue-900 flex items-start gap-3">
              <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
              <span>
                <strong>Response Time:</strong> Our admin team typically responds within <strong>24-48 hours</strong>. You will receive notifications via your preferred channel.
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 border-3 border-gray-400 text-gray-700 hover:bg-gray-100"
            style={{ height: '68px', fontSize: '20px', fontWeight: 600, borderWidth: '3px' }}
          >
            Back to Browsing
          </Button>
          <Button
            onClick={onViewRequests}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-2xl"
            style={{ height: '68px', fontSize: '20px', fontWeight: 700 }}
          >
            <ClipboardList className="mr-3 h-7 w-7" />
            View My Requests
          </Button>
        </div>

        {/* Contact Support */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 mb-4">Need immediate assistance?</p>
          <div className="flex justify-center gap-6">
            <a
              href="tel:1800-xxx-xxxx"
              className="flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700"
            >
              <Phone className="h-6 w-6" />
              Call Support
            </a>
            <a
              href="mailto:wellness@example.com"
              className="flex items-center gap-2 text-teal-600 font-semibold text-lg hover:text-teal-700"
            >
              <Mail className="h-6 w-6" />
              Email Us
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
