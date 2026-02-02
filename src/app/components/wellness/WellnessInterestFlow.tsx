import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronRight,
  Calendar,
  Users,
  FileText,
  Upload,
  Heart,
  CheckCircle2,
  Clock,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  Stethoscope,
  Activity,
  AlertCircle,
  Info,
  Plus,
  Edit3,
  Package,
  Bed,
  Utensils,
  Car,
  Shield,
  User,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { toast } from 'sonner';

// ========================================
// WELLNESS INTEREST TO BOOKING FLOW
// Complete 5-Phase Implementation
// ========================================

// ========================================
// PHASE 1: TREATMENT/CENTER CARD (ENHANCED)
// ========================================

interface TreatmentCenterCardProps {
  center: {
    id: string;
    name: string;
    location: string;
    rating: number;
    image: string;
    treatmentType: string;
    basePrice: string;
    duration: string;
    features: string[];
    badge?: string;
  };
  onExpressInterest: (center: any) => void;
  onBookStandard: (center: any) => void;
}

export function TreatmentCenterCard({ center, onExpressInterest, onBookStandard }: TreatmentCenterCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-green-100 to-teal-100">
        {center.badge && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ⭐ {center.badge}
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-gray-900">⭐ {center.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{center.name}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{center.location}</span>
        </div>

        {/* Treatment Type Badge */}
        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
          🌿 {center.treatmentType}
        </div>

        {/* Features */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-900 mb-2">India-Exclusive Therapies Offered</p>
          <div className="flex flex-wrap gap-2">
            {center.features.map((feature, idx) => (
              <span key={idx} className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Package Includes */}
        <div className="bg-green-50 rounded-xl p-4 mb-4">
          <p className="text-sm font-semibold text-gray-900 mb-2">📦 Package Includes</p>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span>Airport consultation</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span>Herbal medicine</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span>Yoga session</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span>Health records</span>
            </div>
          </div>
        </div>

        {/* Price & Duration */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-gray-600">Duration</p>
            <p className="text-lg font-bold text-gray-900">{center.duration}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-600">Starting from</p>
            <p className="text-2xl font-bold text-green-600">{center.basePrice}</p>
          </div>
        </div>

        {/* ACTION BUTTONS - NEW SPLIT DESIGN */}
        <div className="space-y-3">
          {/* Primary: Express Interest / Get Quote */}
          <Button
            onClick={() => onExpressInterest(center)}
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 rounded-xl font-semibold border-2 border-green-600"
          >
            <Edit3 className="mr-2 h-5 w-5" />
            Express Interest / Get Custom Quote
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Secondary: Book Standard Package */}
          <Button
            onClick={() => onBookStandard(center)}
            variant="outline"
            className="w-full border-2 border-green-600 text-green-700 hover:bg-green-50 py-3 rounded-xl font-semibold"
          >
            <Package className="mr-2 h-5 w-5" />
            View Full Details & Book →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// PHASE 2: WELLNESS SERVICE INQUIRY FORM (MODAL)
// ========================================

interface WellnessServiceInquiryProps {
  center: any;
  onClose: () => void;
  onSubmit: (data: any, action: 'custom-quote' | 'book-standard') => void;
}

export function WellnessServiceInquiryModal({ center, onClose, onSubmit }: WellnessServiceInquiryProps) {
  const [formData, setFormData] = useState({
    // Pre-filled
    treatmentType: center.treatmentType,
    centerName: center.name,
    basePrice: center.basePrice,
    
    // User inputs
    dateFrom: '',
    dateTo: '',
    numberOfPatients: 1,
    numberOfAttendants: 0,
    linkedTrip: '',
    specialRequirements: '',
    uploadedDocuments: [] as File[],
    
    // Health profile prompt
    healthProfileComplete: false,
  });

  const [showHealthPrompt, setShowHealthPrompt] = useState(true);

  const handleSubmit = (action: 'custom-quote' | 'book-standard') => {
    onSubmit(formData, action);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Get a Personalized Quote</h2>
              <p className="text-white/90">for {center.treatmentType}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 space-y-6">
          {/* Health Profile Prompt (Conditional) */}
          {showHealthPrompt && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 relative">
              <button
                onClick={() => setShowHealthPrompt(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    💡 Complete Your Health Profile
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    For safer, personalized recommendations. Your data is encrypted and shared only upon booking confirmation.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <User className="mr-2 h-4 w-4" />
                    Go to Health Profile →
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Pre-filled Information */}
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Pre-filled Information
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Treatment</p>
                <p className="text-sm font-semibold text-gray-900">{formData.treatmentType}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Center</p>
                <p className="text-sm font-semibold text-gray-900">{formData.centerName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Base Price</p>
                <p className="text-sm font-semibold text-green-600">{formData.basePrice}</p>
              </div>
            </div>
          </div>

          {/* Travel Details */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Travel Details
            </h3>

            {/* Date Selector */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">From Date</label>
                <input
                  type="date"
                  value={formData.dateFrom}
                  onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">To Date</label>
                <input
                  type="date"
                  value={formData.dateTo}
                  onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-200"
                />
              </div>
            </div>

            {/* Number of Patients */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Number of Patients
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFormData({ ...formData, numberOfPatients: Math.max(1, formData.numberOfPatients - 1) })}
                  className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-xl"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <span className="text-3xl font-bold text-gray-900">{formData.numberOfPatients}</span>
                </div>
                <button
                  onClick={() => setFormData({ ...formData, numberOfPatients: formData.numberOfPatients + 1 })}
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Number of Attendants */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Number of Attendants (Family/Companions)
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFormData({ ...formData, numberOfAttendants: Math.max(0, formData.numberOfAttendants - 1) })}
                  className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold text-xl"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <span className="text-3xl font-bold text-gray-900">{formData.numberOfAttendants}</span>
                </div>
                <button
                  onClick={() => setFormData({ ...formData, numberOfAttendants: formData.numberOfAttendants + 1 })}
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Trip Link */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="h-5 w-5 text-purple-600" />
              Link to a Trip
            </h3>
            <select
              value={formData.linkedTrip}
              onChange={(e) => setFormData({ ...formData, linkedTrip: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-200"
            >
              <option value="">Select an existing trip or create new...</option>
              <option value="new">+ Create a New Trip</option>
              <option value="trip1">[Admin: Trip Name 1]</option>
              <option value="trip2">[Admin: Trip Name 2]</option>
              <option value="trip3">[Admin: Trip Name 3]</option>
            </select>
            <p className="text-xs text-gray-600 mt-2">
              Link this wellness booking to a trip in your Trip Hub
            </p>
          </div>

          {/* Special Requirements */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              <FileText className="inline h-4 w-4 mr-1" />
              Special Requirements
            </label>
            <textarea
              value={formData.specialRequirements}
              onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-200 resize-none"
              placeholder="E.g., Senior care needed, gluten-free meals, post-therapy nursing, airport pickup with wheelchair, dietary restrictions, accessibility needs..."
            />
            <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-3 rounded-lg">
              <p className="text-xs text-blue-900 flex items-start gap-2">
                <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  If you've completed your Health Profile, we can pre-fill relevant conditions here (e.g., Diabetes, Vegetarian diet).
                </span>
              </p>
            </div>
          </div>

          {/* Medical Documents Upload (Conditional for Medical Tourism) */}
          {center.treatmentType === 'Medical Tourism' && (
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <Upload className="inline h-4 w-4 mr-1" />
                Upload Medical Reports (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-400 rounded-xl p-8 text-center bg-gray-50">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-700 font-semibold mb-1">
                  Click to upload medical reports
                </p>
                <p className="text-xs text-gray-500">
                  PDF, JPG, PNG • Max 10MB per file
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-3xl border-t-2 border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            {/* Request Custom Quote */}
            <Button
              onClick={() => handleSubmit('custom-quote')}
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-4 rounded-xl text-lg font-bold"
            >
              <Edit3 className="mr-2 h-5 w-5" />
              Request Custom Quote
            </Button>

            {/* Book Standard Package */}
            <Button
              onClick={() => handleSubmit('book-standard')}
              variant="outline"
              className="w-full border-2 border-green-600 text-green-700 hover:bg-green-50 py-4 rounded-xl text-lg font-bold"
            >
              <Package className="mr-2 h-5 w-5" />
              Book Standard Package
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// PHASE 2: CONFIRMATION SCREEN/TOAST
// ========================================

interface ConfirmationModalProps {
  center: any;
  action: 'custom-quote' | 'book-standard';
  onClose: () => void;
  onViewInquiries: () => void;
}

export function ConfirmationModal({ center, action, onClose, onViewInquiries }: ConfirmationModalProps) {
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
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8"
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center"
          >
            <CheckCircle2 className="h-14 w-14 text-white" />
          </motion.div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Interest Successfully Noted!
        </h2>

        {/* Body Text */}
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 mb-6">
          <p className="text-lg text-gray-800 text-center leading-relaxed">
            Your inquiry for <strong>{center.treatmentType}</strong> at{' '}
            <strong>{center.name}</strong> has been sent to our Health Tourism specialists.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl mb-6">
          <p className="text-base text-blue-900 leading-relaxed">
            <strong>What happens next?</strong>
            <br />
            They will contact you <strong>within 24 hours</strong> with a detailed quote including:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              'Customized fares based on your requirements',
              'Complete treatment schedule and itinerary',
              'Confirmed facilities and amenities',
              'Options for your special requests',
              'Senior care/assistance arrangements',
              'Emergency contact details',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-blue-900">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <Phone className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600 mb-1">Helpline</p>
            <p className="text-sm font-bold text-gray-900">1800-XXX-XXXX</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <Mail className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs text-gray-600 mb-1">Email</p>
            <p className="text-sm font-bold text-gray-900">wellness@grokyatra.com</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={onViewInquiries}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-bold"
          >
            <FileText className="mr-2 h-5 w-5" />
            View My Inquiries
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-xl text-lg font-bold"
          >
            OK
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// PHASE 3: MY WELLNESS INQUIRIES SCREEN
// ========================================

interface WellnessInquiry {
  id: string;
  treatmentName: string;
  centerName: string;
  dateSubmitted: string;
  status: 'pending' | 'quote-ready' | 'booked';
  thumbnail: string;
}

export function MyWellnessInquiriesScreen({ onViewProposal }: { onViewProposal: (id: string) => void }) {
  const [inquiries] = useState<WellnessInquiry[]>([
    {
      id: '1',
      treatmentName: 'Ayurveda & Panchakarma',
      centerName: '[Admin: Center Name 1]',
      dateSubmitted: 'Jan 15, 2026',
      status: 'quote-ready',
      thumbnail: '🌿',
    },
    {
      id: '2',
      treatmentName: 'Medical Tourism',
      centerName: '[Admin: Center Name 2]',
      dateSubmitted: 'Jan 14, 2026',
      status: 'pending',
      thumbnail: '🏥',
    },
    {
      id: '3',
      treatmentName: 'Yoga & Meditation',
      centerName: '[Admin: Center Name 3]',
      dateSubmitted: 'Jan 10, 2026',
      status: 'booked',
      thumbnail: '🧘',
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: '⏳ Pending', icon: Clock };
      case 'quote-ready':
        return { bg: 'bg-green-100', text: 'text-green-800', label: '✓ Quote Ready', icon: CheckCircle2 };
      case 'booked':
        return { bg: 'bg-blue-100', text: 'text-blue-800', label: '🎉 Booked', icon: CheckCircle2 };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', label: status, icon: Clock };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-900">
            <ChevronRight className="rotate-180 h-5 w-5" />
            <span>Back to Profile</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wellness Inquiries</h1>
          <p className="text-gray-600">Track all your health tourism requests and proposals</p>
        </div>

        {/* Inquiries List */}
        <div className="space-y-4">
          {inquiries.map((inquiry) => {
            const status = getStatusBadge(inquiry.status);
            const StatusIcon = status.icon;

            return (
              <div
                key={inquiry.id}
                onClick={() => inquiry.status === 'quote-ready' && onViewProposal(inquiry.id)}
                className={`bg-white rounded-2xl shadow-lg p-6 ${
                  inquiry.status === 'quote-ready' ? 'cursor-pointer hover:shadow-xl' : ''
                } transition-shadow`}
              >
                <div className="flex items-start gap-6">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {inquiry.thumbnail}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {inquiry.treatmentName}
                        </h3>
                        <p className="text-sm text-gray-600">{inquiry.centerName}</p>
                      </div>
                      <div className={`px-4 py-2 ${status.bg} ${status.text} rounded-full font-semibold text-sm flex items-center gap-2`}>
                        <StatusIcon className="h-4 w-4" />
                        {status.label}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Submitted: {inquiry.dateSubmitted}</span>
                      </div>
                    </div>

                    {inquiry.status === 'quote-ready' && (
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <FileText className="mr-2 h-4 w-4" />
                        View Custom Proposal →
                      </Button>
                    )}

                    {inquiry.status === 'pending' && (
                      <p className="text-sm text-gray-600">
                        Our specialists are reviewing your request. You'll be notified within 24 hours.
                      </p>
                    )}

                    {inquiry.status === 'booked' && (
                      <Button variant="outline" className="border-2 border-blue-600 text-blue-700">
                        <Package className="mr-2 h-4 w-4" />
                        View in Trip Hub →
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {inquiries.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Inquiries Yet</h3>
            <p className="text-gray-600 mb-6">
              Start exploring wellness treatments and express your interest!
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Browse Wellness Treatments →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// PHASE 3: WELLNESS PROPOSAL DETAIL SCREEN
// ========================================

export function WellnessProposalDetailScreen({ 
  proposalId, 
  onAccept, 
  onRequestModification 
}: { 
  proposalId: string;
  onAccept: () => void;
  onRequestModification: () => void;
}) {
  // Mock proposal data
  const proposal = {
    id: proposalId,
    treatmentName: 'Ayurveda & Panchakarma - Full 21-day Detox',
    centerName: '[Admin: Somatheeram Ayurveda Resort]',
    location: '[Admin: Kerala, India]',
    dates: 'Feb 1 - Feb 21, 2026',
    travelers: { patients: 1, attendants: 1 },
    
    fareBreakdown: {
      treatment: 85000,
      accommodation: 45000,
      meals: 18000,
      transfers: 8000,
      nursing: 12000,
      total: 168000,
    },
    
    dailySchedule: [
      { day: 'Day 1-3', activities: 'Initial consultation, Dosha assessment, Diet planning' },
      { day: 'Day 4-7', activities: 'Vamana therapy, Herbal oil massage, Yoga sessions' },
      { day: 'Day 8-14', activities: 'Virechana therapy, Meditation, Pranayama' },
      { day: 'Day 15-18', activities: 'Basti therapy, Steam bath, Rejuvenation treatments' },
      { day: 'Day 19-21', activities: 'Final consultation, Post-therapy care instructions' },
    ],
    
    facilities: [
      'JCI-accredited Ayurveda center',
      'Experienced Ayurvedic doctors (15+ years)',
      'Organic herbal medicines',
      'Private consultation rooms',
      '24/7 medical support',
      'Yoga & meditation hall',
    ],
    
    specialRequests: {
      seniorCare: 'Ground floor accommodation with wheelchair access arranged',
      dietary: 'Gluten-free, diabetic-friendly sattvic meals prepared',
      nursing: '24/7 dedicated nurse for post-therapy assistance',
    },
    
    contactPerson: {
      name: '[Admin: Dr. Rajesh Kumar]',
      role: 'Ayurvedic Physician & Wellness Coordinator',
      phone: '+91-XXXXX-XXXXX',
      email: 'wellness@center.com',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-900">
            <ChevronRight className="rotate-180 h-5 w-5" />
            <span>Back to Inquiries</span>
          </button>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-3xl p-8">
            <h1 className="text-3xl font-bold mb-2">Your Custom Proposal</h1>
            <p className="text-white/90">from GrokYatra Health Team</p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{proposal.treatmentName}</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Center</p>
                    <p className="font-semibold text-gray-900">{proposal.centerName}</p>
                    <p className="text-sm text-gray-600">{proposal.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Dates</p>
                    <p className="font-semibold text-gray-900">{proposal.dates}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Travelers</p>
                    <p className="font-semibold text-gray-900">
                      {proposal.travelers.patients} Patient(s) + {proposal.travelers.attendants} Attendant(s)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <p className="text-sm text-gray-600 mb-2">Total Fare</p>
              <p className="text-5xl font-bold text-green-600 mb-4">
                ₹{proposal.fareBreakdown.total.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">For 21 days • All-inclusive</p>
            </div>
          </div>
        </div>

        {/* Detailed Fare Breakdown */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            Detailed Fare Breakdown
          </h3>
          <div className="space-y-4">
            {[
              { icon: Stethoscope, label: 'Treatment & Consultations', amount: proposal.fareBreakdown.treatment },
              { icon: Bed, label: 'Accommodation (21 nights)', amount: proposal.fareBreakdown.accommodation },
              { icon: Utensils, label: 'Meals (Sattvic diet)', amount: proposal.fareBreakdown.meals },
              { icon: Car, label: 'Airport Transfers & Transport', amount: proposal.fareBreakdown.transfers },
              { icon: Shield, label: '24/7 Nursing Care', amount: proposal.fareBreakdown.nursing },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-900 font-medium">{item.label}</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    ₹{item.amount.toLocaleString()}
                  </span>
                </div>
              );
            })}
            <div className="flex items-center justify-between py-4 bg-green-50 rounded-xl px-4 mt-4">
              <span className="text-xl font-bold text-gray-900">Total Amount</span>
              <span className="text-3xl font-bold text-green-600">
                ₹{proposal.fareBreakdown.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            Daily Treatment Schedule
          </h3>
          <div className="space-y-4">
            {proposal.dailySchedule.map((schedule, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-bold text-gray-900">{schedule.day}</span>
                </div>
                <div className="flex-1 bg-blue-50 rounded-xl p-4">
                  <p className="text-gray-900">{schedule.activities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmed Facilities */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Confirmed Facilities & Amenities
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {proposal.facilities.map((facility, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-900">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Requests Addressed */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="h-6 w-6 text-purple-600" />
            Your Special Requests & How They Are Addressed
          </h3>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-6">
              <p className="text-sm font-bold text-purple-900 mb-2">Senior Care Requirements</p>
              <p className="text-gray-900">{proposal.specialRequests.seniorCare}</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
              <p className="text-sm font-bold text-blue-900 mb-2">Dietary Requirements</p>
              <p className="text-gray-900">{proposal.specialRequests.dietary}</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6">
              <p className="text-sm font-bold text-green-900 mb-2">Nursing Assistance</p>
              <p className="text-gray-900">{proposal.specialRequests.nursing}</p>
            </div>
          </div>
        </div>

        {/* Contact Person */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <User className="h-6 w-6 text-indigo-600" />
            Your Contact Person at Center
          </h3>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl">
              👨‍⚕️
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-1">{proposal.contactPerson.name}</h4>
              <p className="text-gray-600 mb-3">{proposal.contactPerson.role}</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-900">{proposal.contactPerson.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-900">{proposal.contactPerson.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-6 grid grid-cols-2 gap-4">
          <Button
            onClick={onAccept}
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-6 rounded-2xl text-xl font-bold shadow-2xl"
          >
            <CheckCircle2 className="mr-3 h-7 w-7" />
            Accept & Proceed to Payment
          </Button>
          <Button
            onClick={onRequestModification}
            variant="outline"
            className="w-full border-3 border-gray-400 text-gray-700 hover:bg-gray-50 py-6 rounded-2xl text-xl font-bold"
          >
            <Edit3 className="mr-3 h-7 w-7" />
            Request Modification
          </Button>
        </div>
      </div>
    </div>
  );
}
