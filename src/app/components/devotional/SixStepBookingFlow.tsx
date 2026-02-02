import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Clock,
  Star,
  Check,
  IndianRupee,
  AlertCircle,
  Sparkles,
  Mountain,
  Heart,
  Utensils,
  Hotel,
  Accessibility,
  Zap
} from 'lucide-react';

type BookingStep = 1 | 2 | 3 | 4 | 5 | 6;

interface DarshanOption {
  id: string;
  name: string;
  label: string;
  waitTime: string;
  cost: string;
  costValue: number;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

interface SixStepBookingFlowProps {
  onBack?: () => void;
  onComplete?: () => void;
}

export default function SixStepBookingFlow({ onBack, onComplete }: SixStepBookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<BookingStep>(1);
  const [selectedDarshan, setSelectedDarshan] = useState('');
  const [selectedRituals, setSelectedRituals] = useState<string[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState('');

  // Step 1: Circuit & Date Selection
  const [selectedCircuit, setSelectedCircuit] = useState('');
  const [travelDate, setTravelDate] = useState('');

  // Step 2: Darshan Mode Selection (CRITICAL FEATURE)
  const darshanOptions: DarshanOption[] = [
    {
      id: 'dharma',
      name: 'Dharma Darshan',
      label: 'General Queue (Free)',
      waitTime: '4-10 Hours',
      cost: '₹0',
      costValue: 0,
      features: [
        'Standard temple entry',
        'General queue access',
        'No time guarantee',
        'First-come, first-served'
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'sheegra',
      name: 'Sheegra Darshan',
      label: 'Express Entry (VIP)',
      waitTime: '1-2 Hours',
      cost: '₹300-₹1000',
      costValue: 650,
      features: [
        'Skip long queues',
        'Dedicated VIP gate',
        'Faster darshan',
        'Priority access'
      ],
      icon: <Zap className="w-6 h-6" />,
      popular: true
    },
    {
      id: 'senior',
      name: 'Senior/Accessible Darshan',
      label: 'Senior/Disabled Gate',
      waitTime: 'Minimal (15-30 min)',
      cost: '₹0-₹200',
      costValue: 100,
      features: [
        'Elevator/ramp access',
        'Wheelchair assistance',
        'Dedicated senior gate',
        'Medical support nearby'
      ],
      icon: <Accessibility className="w-6 h-6" />
    }
  ];

  // Step 3: Rituals & Add-Ons (Spiritual Cart)
  const ritualOptions = [
    {
      id: 'abhishekam',
      name: 'Abhishekam (Milk Offering)',
      price: 500,
      description: 'Traditional milk bath offering to the deity',
      duration: '30 min'
    },
    {
      id: 'aarti',
      name: 'Aarti Seva (Front Row Seat)',
      price: 300,
      description: 'Reserved front row seating for evening aarti',
      duration: '45 min'
    },
    {
      id: 'archana',
      name: 'Special Archana',
      price: 250,
      description: 'Personalized prayer with your name and gotra',
      duration: '15 min'
    },
    {
      id: 'prasad',
      name: 'Premium Prasad Package',
      price: 400,
      description: 'Laddoos, dry fruits, and sacred ash',
      duration: 'N/A'
    }
  ];

  // Step 4: Accommodation Options
  const accommodationOptions = [
    {
      id: 'dharamshala',
      name: 'Dharamshala',
      type: 'Temple Guest House',
      price: 500,
      features: ['Basic amenities', 'Near temple (5 min walk)', 'Shared facilities', 'Pure vegetarian meals'],
      badge: 'Most Authentic'
    },
    {
      id: '3star',
      name: '3-Star Hotel',
      type: 'Comfortable Stay',
      price: 2000,
      features: ['AC rooms', 'Private bathroom', 'Room service', 'TV & WiFi'],
      badge: 'Popular'
    },
    {
      id: '4star',
      name: '4-Star Hotel',
      type: 'Premium Comfort',
      price: 4000,
      features: ['Luxury amenities', 'Spa & gym', 'Multi-cuisine restaurant', 'Concierge service'],
      badge: 'Best Comfort'
    }
  ];

  // Step 5: Logistics & Special Services
  const [selectedLogistics, setSelectedLogistics] = useState<string[]>([]);

  const logisticsOptions = [
    { id: 'helicopter', name: 'Helicopter Service (Kedarnath)', price: 18000 },
    { id: 'palki', name: 'Palki/Pony Service (Elderly)', price: 2000 },
    { id: 'medical', name: 'Doctor on Tour', price: 15000 },
    { id: 'guide', name: 'Dedicated Spiritual Guide', price: 8000 }
  ];

  const progressPercentage = (currentStep / 6) * 100;

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((currentStep + 1) as BookingStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as BookingStep);
    } else {
      if (onBack) {
        onBack();
      }
    }
  };

  const toggleRitual = (ritualId: string) => {
    setSelectedRituals(prev =>
      prev.includes(ritualId)
        ? prev.filter(id => id !== ritualId)
        : [...prev, ritualId]
    );
  };

  const toggleLogistics = (logisticId: string) => {
    setSelectedLogistics(prev =>
      prev.includes(logisticId)
        ? prev.filter(id => id !== logisticId)
        : [...prev, logisticId]
    );
  };

  const calculateTotal = () => {
    let total = 0;
    
    // Darshan cost
    const darshan = darshanOptions.find(d => d.id === selectedDarshan);
    if (darshan) total += darshan.costValue;
    
    // Rituals cost
    selectedRituals.forEach(ritualId => {
      const ritual = ritualOptions.find(r => r.id === ritualId);
      if (ritual) total += ritual.price;
    });
    
    // Accommodation cost (per night, assume 3 nights)
    const accommodation = accommodationOptions.find(a => a.id === selectedAccommodation);
    if (accommodation) total += accommodation.price * 3;
    
    // Logistics cost
    selectedLogistics.forEach(logisticId => {
      const logistic = logisticsOptions.find(l => l.id === logisticId);
      if (logistic) total += logistic.price;
    });
    
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-24">
      {/* Header with Progress */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 px-6 pt-12 pb-6 rounded-b-3xl">
        <button
          onClick={handleBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4 focus:ring-2 focus:ring-white focus:outline-none hover:bg-white/30 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-white text-2xl font-bold mb-2">Sacred Booking Journey</h1>
        <p className="text-white/90 text-sm mb-4">
          Step {currentStep} of 6: {
            currentStep === 1 ? 'Circuit & Date' :
            currentStep === 2 ? 'Darshan Mode' :
            currentStep === 3 ? 'Rituals & Prasad' :
            currentStep === 4 ? 'Accommodation' :
            currentStep === 5 ? 'Logistics' :
            'Review & Confirm'
          }
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <div
            className="bg-white h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      <main className="px-6 -mt-4">
        {/* STEP 1: Circuit & Date Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-3xl p-6 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-900">Select Your Pilgrimage Circuit</h2>
              <div className="space-y-3">
                {['chardham', 'jyotirlinga', 'divya-desam', 'shakti'].map((circuit) => (
                  <button
                    key={circuit}
                    onClick={() => setSelectedCircuit(circuit)}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                      selectedCircuit === circuit
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">
                        {circuit === 'chardham' ? '🏔️' :
                         circuit === 'jyotirlinga' ? '🔱' :
                         circuit === 'divya-desam' ? '🪷' : '🌺'}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">
                          {circuit === 'chardham' ? 'Himalayan Chardham' :
                           circuit === 'jyotirlinga' ? 'Jyotirlinga Trail' :
                           circuit === 'divya-desam' ? 'Divya Desam' : 'Shakti Peeths'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {circuit === 'chardham' ? '10-12 days' :
                           circuit === 'jyotirlinga' ? '15-20 days' :
                           circuit === 'divya-desam' ? '12-15 days' : '18-20 days'}
                        </div>
                      </div>
                      {selectedCircuit === circuit && (
                        <Check className="w-6 h-6 text-orange-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Auspicious Calendar */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-900">Choose Auspicious Date</h2>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none"
              />

              {/* Auspicious Days Hint */}
              <div className="mt-3 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-yellow-900 text-sm mb-1">Auspicious Days This Month</div>
                    <div className="text-yellow-800 text-xs space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🕉️</span>
                        <span>Feb 10: Ekadashi (Fast & Pray)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🌕</span>
                        <span>Feb 15: Purnima (Full Moon)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🔱</span>
                        <span>Feb 18: Maha Shivaratri (Most Auspicious)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedCircuit || !travelDate}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full h-12 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              Next: Choose Darshan Mode
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* STEP 2: DARSHAN MODE SELECTOR (CRITICAL FEATURE) */}
        {currentStep === 2 && (
          <div className="bg-white rounded-3xl p-6 shadow-lg space-y-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Select Your Darshan Mode</h2>
              <p className="text-sm text-gray-600">Choose how you want to experience the sacred darshan</p>
            </div>

            <div className="space-y-4">
              {darshanOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedDarshan(option.id)}
                  className={`w-full p-5 rounded-2xl border-2 text-left transition-all relative ${
                    selectedDarshan === option.id
                      ? 'border-orange-500 bg-orange-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      selectedDarshan === option.id ? 'bg-orange-200 text-orange-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-1">{option.name}</div>
                      <div className="text-sm text-gray-600">{option.label}</div>
                    </div>
                    {selectedDarshan === option.id && (
                      <Check className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    )}
                  </div>

                  {/* Wait Time & Cost */}
                  <div className="flex gap-3 mb-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      <Clock className="w-3 h-3" />
                      {option.waitTime}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <IndianRupee className="w-3 h-3" />
                      {option.cost}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Grok Recommendation */}
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-purple-900 text-sm mb-1">Grok Tip</div>
                  <p className="text-purple-800 text-xs">
                    For Tirupati, Sheegra Darshan tickets open 3 months in advance and sell out quickly. Book now to avoid 8-10 hour wait times!
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedDarshan}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full h-12 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              Next: Add Rituals & Prasad
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* STEP 3: RITUALS & ADD-ONS (Spiritual Cart) */}
        {currentStep === 3 && (
          <div className="bg-white rounded-3xl p-6 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Spiritual Services & Prasad</h2>
              <p className="text-sm text-gray-600">Enhance your pilgrimage with sacred rituals</p>
            </div>

            <div className="space-y-3">
              {ritualOptions.map((ritual) => (
                <button
                  key={ritual.id}
                  onClick={() => toggleRitual(ritual.id)}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                    selectedRituals.includes(ritual.id)
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedRituals.includes(ritual.id)
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedRituals.includes(ritual.id) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-1">{ritual.name}</div>
                      <div className="text-xs text-gray-600 mb-2">{ritual.description}</div>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          ₹{ritual.price}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {ritual.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Prasad Counter */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-gray-900">Extra Prasad for Home</div>
                <div className="text-sm text-gray-600">₹50 per pack</div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold hover:bg-orange-700">
                  −
                </button>
                <div className="flex-1 text-center font-bold text-lg">3 packs</div>
                <button className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold hover:bg-orange-700">
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full h-12 flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition-all"
            >
              Next: Choose Accommodation
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* STEP 4: ACCOMMODATION & FOOD */}
        {currentStep === 4 && (
          <div className="bg-white rounded-3xl p-6 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Select Accommodation</h2>
              <p className="text-sm text-gray-600">Choose your stay preference</p>
            </div>

            <div className="space-y-4">
              {accommodationOptions.map((accommodation) => (
                <button
                  key={accommodation.id}
                  onClick={() => setSelectedAccommodation(accommodation.id)}
                  className={`w-full p-5 rounded-2xl border-2 text-left transition-all relative ${
                    selectedAccommodation === accommodation.id
                      ? 'border-orange-500 bg-orange-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="absolute -top-2 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {accommodation.badge}
                  </div>

                  <div className="flex items-start gap-4 mb-3">
                    <Hotel className="w-6 h-6 text-gray-600" />
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-1">{accommodation.name}</div>
                      <div className="text-sm text-gray-600 mb-2">{accommodation.type}</div>
                      <div className="text-lg font-bold text-orange-600">
                        ₹{accommodation.price} <span className="text-sm text-gray-500">/ night</span>
                      </div>
                    </div>
                    {selectedAccommodation === accommodation.id && (
                      <Check className="w-6 h-6 text-orange-600" />
                    )}
                  </div>

                  <div className="space-y-1">
                    {accommodation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-green-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Satvik Promise Badge */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-green-900 mb-1">🌿 Satvik Promise</div>
                  <div className="text-xs text-green-800">
                    100% Pure Vegetarian • No Onion-Garlic Options Available • Jain Food on Request
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedAccommodation}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full h-12 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              Next: Logistics & Services
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* STEP 5: LOGISTICS & SPECIAL SERVICES */}
        {currentStep === 5 && (
          <div className="bg-white rounded-3xl p-6 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Additional Services</h2>
              <p className="text-sm text-gray-600">Optional logistics and support services</p>
            </div>

            <div className="space-y-3">
              {logisticsOptions.map((logistic) => (
                <button
                  key={logistic.id}
                  onClick={() => toggleLogistics(logistic.id)}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                    selectedLogistics.includes(logistic.id)
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center ${
                      selectedLogistics.includes(logistic.id)
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedLogistics.includes(logistic.id) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">{logistic.name}</div>
                    </div>
                    <div className="text-orange-600 font-bold">₹{logistic.price.toLocaleString()}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* High Altitude Warning */}
            {selectedCircuit === 'chardham' && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-red-900 text-sm mb-1">High Altitude Warning</div>
                    <p className="text-red-800 text-xs mb-2">
                      Kedarnath is at 3,583m altitude. Helicopter service strongly recommended for seniors or those with heart conditions.
                    </p>
                    {!selectedLogistics.includes('helicopter') && (
                      <button
                        onClick={() => toggleLogistics('helicopter')}
                        className="text-xs text-red-700 underline font-semibold"
                      >
                        Add Helicopter Service Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full h-12 flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition-all"
            >
              Review & Confirm Booking
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* STEP 6: FINAL REVIEW & CONFIRMATION */}
        {currentStep === 6 && (
          <div className="bg-white rounded-3xl p-6 shadow-lg space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Review Your Sacred Journey</h2>
              <p className="text-sm text-gray-600">Verify all details before confirming</p>
            </div>

            {/* Summary Sections */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-bold text-gray-900 mb-2">Circuit & Date</div>
                <div className="text-sm text-gray-600">
                  {selectedCircuit === 'chardham' ? 'Himalayan Chardham' :
                   selectedCircuit === 'jyotirlinga' ? 'Jyotirlinga Trail' :
                   selectedCircuit === 'divya-desam' ? 'Divya Desam' : 'Shakti Peeths'}
                </div>
                <div className="text-sm text-gray-600">Starting: {travelDate}</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-bold text-gray-900 mb-2">Darshan Mode</div>
                <div className="text-sm text-gray-600">
                  {darshanOptions.find(d => d.id === selectedDarshan)?.name}
                </div>
              </div>

              {selectedRituals.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">Rituals & Services</div>
                  {selectedRituals.map(id => {
                    const ritual = ritualOptions.find(r => r.id === id);
                    return ritual ? (
                      <div key={id} className="text-sm text-gray-600 flex justify-between">
                        <span>{ritual.name}</span>
                        <span className="font-semibold">₹{ritual.price}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              )}

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-bold text-gray-900 mb-2">Accommodation</div>
                <div className="text-sm text-gray-600">
                  {accommodationOptions.find(a => a.id === selectedAccommodation)?.name} (3 nights)
                </div>
              </div>

              {selectedLogistics.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">Additional Services</div>
                  {selectedLogistics.map(id => {
                    const logistic = logisticsOptions.find(l => l.id === id);
                    return logistic ? (
                      <div key={id} className="text-sm text-gray-600 flex justify-between">
                        <span>{logistic.name}</span>
                        <span className="font-semibold">₹{logistic.price.toLocaleString()}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              )}
            </div>

            {/* Total Cost */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 border-2 border-orange-300">
              <div className="flex items-center justify-between">
                <div className="font-bold text-gray-900 text-lg">Total Cost</div>
                <div className="text-2xl font-bold text-orange-600">
                  ₹{calculateTotal().toLocaleString()}
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Per person • Includes all selected services
              </div>
            </div>

            <button
              onClick={() => alert('Booking Confirmed! 🙏')}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full h-12 flex items-center justify-center gap-2 font-semibold hover:shadow-lg transition-all"
            >
              <Check className="w-5 h-5" />
              Confirm Sacred Booking
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
