import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock,
  CreditCard,
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  Shield,
  Info
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface VehicleBookingFormProps {
  onBack: () => void;
  onSubmitBooking?: (bookingData: any) => void;
  selectedVehicle?: string;
}

export function VehicleBookingForm({ 
  onBack, 
  onSubmitBooking,
  selectedVehicle = 'Hyundai Creta' 
}: VehicleBookingFormProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  
  // Step 1: Personal Details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  // Step 2: Booking Details
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
  const [additionalDriver, setAdditionalDriver] = useState(false);

  // Step 3: Documents & Payment
  const [licenseUploaded, setLicenseUploaded] = useState(false);
  const [aadharUploaded, setAadharUploaded] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'full' | 'partial' | ''>('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const isStep1Valid = fullName && email && phone && age && parseInt(age) >= 18;
  const isStep2Valid = pickupLocation && dropoffLocation && pickupDate && pickupTime && dropoffDate && dropoffTime;
  const isStep3Valid = licenseUploaded && aadharUploaded && paymentMethod && agreedToTerms;

  const handleNext = () => {
    if (currentStep === 1 && isStep1Valid) {
      setCurrentStep(2);
    } else if (currentStep === 2 && isStep2Valid) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = () => {
    if (isStep3Valid && onSubmitBooking) {
      const bookingData = {
        personalDetails: { fullName, email, phone, age },
        bookingDetails: { 
          pickupLocation, 
          dropoffLocation, 
          pickupDate, 
          pickupTime, 
          dropoffDate, 
          dropoffTime,
          additionalDriver 
        },
        documents: { licenseUploaded, aadharUploaded },
        paymentMethod,
        vehicle: selectedVehicle
      };
      onSubmitBooking(bookingData);
    }
  };

  const renderProgressBar = () => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                currentStep >= step
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {currentStep > step ? <CheckCircle2 className="w-5 h-5" /> : step}
            </div>
            {step < 3 && (
              <div 
                className={`h-1 flex-1 mx-2 rounded ${
                  currentStep > step ? 'bg-gradient-to-r from-orange-600 to-amber-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs font-semibold text-gray-600">
        <span className={currentStep >= 1 ? 'text-orange-600' : ''}>Personal</span>
        <span className={currentStep >= 2 ? 'text-orange-600' : ''}>Booking</span>
        <span className={currentStep >= 3 ? 'text-orange-600' : ''}>Payment</span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <Card className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm text-blue-900 mb-1">Personal Information</h4>
            <p className="text-xs text-blue-700">Please provide accurate details matching your driving license</p>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold text-gray-700 mb-1 block">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="As per driving license"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="pl-11 pr-4 h-12 rounded-2xl bg-white border-gray-200"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 mb-1 block">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-11 pr-4 h-12 rounded-2xl bg-white border-gray-200"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 mb-1 block">Phone Number *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-11 pr-4 h-12 rounded-2xl bg-white border-gray-200"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 mb-1 block">Age *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="number"
              placeholder="Must be 18 or above"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="pl-11 pr-4 h-12 rounded-2xl bg-white border-gray-200"
            />
          </div>
          {age && parseInt(age) < 18 && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              You must be at least 18 years old to rent a vehicle
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <Card className="bg-green-50 rounded-2xl p-4 border-2 border-green-200">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm text-green-900 mb-1">Booking Details</h4>
            <p className="text-xs text-green-700">Choose your pickup & drop-off locations and timings</p>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold text-gray-700 mb-1 block">Pickup Location *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
            <Input
              type="text"
              placeholder="Enter pickup address"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="pl-11 pr-4 h-12 rounded-2xl bg-white border-gray-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Pickup Date *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="pl-10 pr-3 h-11 rounded-2xl bg-white border-gray-200 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Pickup Time *</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="pl-10 pr-3 h-11 rounded-2xl bg-white border-gray-200 text-sm"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 mb-1 block">Drop-off Location *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
            <Input
              type="text"
              placeholder="Enter drop-off address"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="pl-11 pr-4 h-12 rounded-2xl bg-white border-gray-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Drop-off Date *</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="pl-10 pr-3 h-11 rounded-2xl bg-white border-gray-200 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700 mb-1 block">Drop-off Time *</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="time"
                value={dropoffTime}
                onChange={(e) => setDropoffTime(e.target.value)}
                className="pl-10 pr-3 h-11 rounded-2xl bg-white border-gray-200 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={additionalDriver}
              onChange={(e) => setAdditionalDriver(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Add Additional Driver</p>
              <p className="text-xs text-gray-600">+₹200/day for extra driver</p>
            </div>
          </label>
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <Card className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-200">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm text-purple-900 mb-1">Documents & Payment</h4>
            <p className="text-xs text-purple-700">Upload required documents and choose payment method</p>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {/* Document Upload */}
        <div>
          <label className="text-xs font-semibold text-gray-700 mb-2 block">Upload Documents *</label>
          
          <div className="space-y-3">
            {/* Driving License */}
            <div 
              onClick={() => setLicenseUploaded(!licenseUploaded)}
              className={`border-2 border-dashed rounded-2xl p-4 cursor-pointer transition-colors ${
                licenseUploaded 
                  ? 'bg-green-50 border-green-400' 
                  : 'bg-gray-50 border-gray-300 hover:border-orange-400'
              }`}
            >
              <div className="flex items-center gap-3">
                {licenseUploaded ? (
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                ) : (
                  <Upload className="w-10 h-10 text-gray-400" />
                )}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Driving License</p>
                  <p className="text-xs text-gray-600">
                    {licenseUploaded ? 'Uploaded successfully ✓' : 'Click to upload'}
                  </p>
                </div>
              </div>
            </div>

            {/* Aadhar Card */}
            <div 
              onClick={() => setAadharUploaded(!aadharUploaded)}
              className={`border-2 border-dashed rounded-2xl p-4 cursor-pointer transition-colors ${
                aadharUploaded 
                  ? 'bg-green-50 border-green-400' 
                  : 'bg-gray-50 border-gray-300 hover:border-orange-400'
              }`}
            >
              <div className="flex items-center gap-3">
                {aadharUploaded ? (
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                ) : (
                  <Upload className="w-10 h-10 text-gray-400" />
                )}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Aadhar Card / ID Proof</p>
                  <p className="text-xs text-gray-600">
                    {aadharUploaded ? 'Uploaded successfully ✓' : 'Click to upload'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="text-xs font-semibold text-gray-700 mb-2 block">Payment Method *</label>
          <div className="space-y-3">
            <div 
              onClick={() => setPaymentMethod('full')}
              className={`rounded-2xl p-4 cursor-pointer border-2 transition-colors ${
                paymentMethod === 'full'
                  ? 'bg-orange-50 border-orange-400'
                  : 'bg-white border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === 'full' ? 'border-orange-600' : 'border-gray-300'
                }`}>
                  {paymentMethod === 'full' && (
                    <div className="w-3 h-3 rounded-full bg-orange-600" />
                  )}
                </div>
                <CreditCard className="w-5 h-5 text-orange-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Pay Full Amount</p>
                  <p className="text-xs text-gray-600">Pay complete booking amount now</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setPaymentMethod('partial')}
              className={`rounded-2xl p-4 cursor-pointer border-2 transition-colors ${
                paymentMethod === 'partial'
                  ? 'bg-orange-50 border-orange-400'
                  : 'bg-white border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === 'partial' ? 'border-orange-600' : 'border-gray-300'
                }`}>
                  {paymentMethod === 'partial' && (
                    <div className="w-3 h-3 rounded-full bg-orange-600" />
                  )}
                </div>
                <Shield className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Pay 20% Now</p>
                  <p className="text-xs text-gray-600">Rest at pickup (Recommended)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500 mt-0.5"
            />
            <div className="flex-1">
              <p className="text-xs text-gray-700">
                I agree to the <span className="text-orange-600 font-semibold">Terms & Conditions</span> and{' '}
                <span className="text-orange-600 font-semibold">Privacy Policy</span>. I confirm all information provided is accurate.
              </p>
            </div>
          </label>
        </div>

        {/* Booking Summary */}
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-4 border-2 border-orange-200">
          <h4 className="font-bold text-sm text-gray-900 mb-3">Booking Summary</h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Vehicle:</span>
              <span className="font-semibold text-gray-900">{selectedVehicle}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Base Price:</span>
              <span className="font-semibold text-gray-900">₹1,999/day</span>
            </div>
            {additionalDriver && (
              <div className="flex justify-between">
                <span className="text-gray-600">Additional Driver:</span>
                <span className="font-semibold text-gray-900">₹200/day</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Insurance:</span>
              <span className="font-semibold text-green-600">Included ✓</span>
            </div>
            <div className="border-t border-orange-200 pt-2 mt-2 flex justify-between">
              <span className="font-bold text-gray-900">Estimated Total:</span>
              <span className="font-bold text-orange-600 text-base">
                ₹{additionalDriver ? '2,199' : '1,999'}/day
              </span>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffedd4] via-[#fffbeb] to-[#fef9c2] pb-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-6 pt-12 pb-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={currentStep === 1 ? onBack : () => setCurrentStep((prev) => (prev - 1) as 1 | 2)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Vehicle Booking</h1>
            <p className="text-white/90 text-sm">Complete the form to book {selectedVehicle}</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Form Steps */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl">
        <div className="max-w-md mx-auto space-y-3">
          {currentStep < 3 ? (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !isStep1Valid) ||
                (currentStep === 2 && !isStep2Valid)
              }
              className="w-full h-14 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl font-bold text-base hover:from-orange-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to {currentStep === 1 ? 'Booking Details' : 'Payment'}
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStep3Valid}
              className="w-full h-14 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold text-base hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Booking
            </Button>
          )}
          
          {currentStep === 1 && (
            <p className="text-xs text-center text-gray-600">
              All fields marked with * are required
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
