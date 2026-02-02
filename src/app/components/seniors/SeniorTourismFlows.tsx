import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Search,
  Shield,
  Check,
  Clock,
  MapPin,
  Stethoscope,
  Zap,
  Hospital,
  Bell,
  Users,
  UserCheck,
  Syringe,
  Ambulance,
  Heart,
  Mountain,
  Leaf,
  Sparkles,
  Train,
  Bus,
  Car,
  Plane,
  Phone,
  Activity,
  CreditCard,
  CheckCircle,
  Filter,
  ChevronRight,
  Plus,
  Minus,
  X,
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

// ========================================
// SHARED MODULE 1: HEALTH & SAFETY PRIORITY
// Used by all 3 sub-categories
// ========================================

interface HealthSafetyScreenProps {
  onBack: () => void;
  onContinue: () => void;
  subCategory: 'devotional' | 'nature' | 'wellness';
}

export function HealthSafetyScreen({ onBack, onContinue, subCategory }: HealthSafetyScreenProps) {
  const categoryColors = {
    devotional: { from: 'from-orange-600', to: 'to-amber-600', bg: 'bg-orange-50' },
    nature: { from: 'from-green-600', to: 'to-emerald-600', bg: 'bg-green-50' },
    wellness: { from: 'from-purple-600', to: 'to-pink-600', bg: 'bg-purple-50' },
  };

  const colors = categoryColors[subCategory];

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
      <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Shield className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Health & Safety Priority</h1>
            <p className="text-white/90 text-base">Your well-being is our top concern</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        {/* Medical Safety Net */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Medical Safety Net</h2>
          </div>

          <div className="space-y-3">
            {[
              { icon: Stethoscope, text: 'MBBS Doctor on Tour', sub: 'Qualified medical professional throughout journey' },
              { icon: Hospital, text: 'Hospital Proximity', sub: 'All stays within 5-10km of hospitals' },
              { icon: Ambulance, text: 'Emergency Evacuation', sub: 'Immediate medical emergency response protocol' },
              { icon: Shield, text: 'Medical Kit Onboard', sub: 'Comprehensive first-aid and essential medicines' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-base text-gray-900">{item.text}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Family Peace-of-Mind */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Family Peace-of-Mind</h2>
          </div>

          <div className="space-y-3">
            {[
              { icon: Zap, text: 'SOS Alert Button', sub: 'One-tap emergency alert to family and tour operator' },
              { icon: MapPin, text: 'Live Location Sharing', sub: 'Real-time GPS tracking for family members' },
              { icon: Bell, text: 'Family Notifications', sub: 'Regular updates on trip milestones and well-being' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-base text-gray-900">{item.text}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Safety Commitment Badge */}
        <Card className={`bg-gradient-to-r ${colors.from} ${colors.to} rounded-3xl p-6 text-white mb-6`}>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Safety Commitment</h3>
              <p className="text-white/95 text-base leading-relaxed">
                Every senior tourism package includes comprehensive safety measures at no additional cost. 
                Your health and comfort are guaranteed.
              </p>
            </div>
          </div>
        </Card>

        {/* Continue Button */}
        <Button
          onClick={onContinue}
          className={`w-full h-14 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} hover:opacity-90 text-lg font-semibold`}
        >
          Continue to Caretaker Selection <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SHARED MODULE 2: PERSONAL CARETAKER SERVICES
// Detailed selection with add/remove
// ========================================

interface CaretakerDetailScreenProps {
  onBack: () => void;
  onContinue: () => void;
  subCategory: 'devotional' | 'nature' | 'wellness';
}

export function CaretakerDetailScreen({ onBack, onContinue, subCategory }: CaretakerDetailScreenProps) {
  const [selectedCaretaker, setSelectedCaretaker] = useState<'none' | 'group' | 'personal'>('none');
  const [addDoctor, setAddDoctor] = useState(true); // Mandatory
  const [addNurse, setAddNurse] = useState(false);

  const categoryColors = {
    devotional: { from: 'from-orange-600', to: 'to-amber-600', bg: 'bg-orange-50' },
    nature: { from: 'from-green-600', to: 'to-emerald-600', bg: 'bg-green-50' },
    wellness: { from: 'from-purple-600', to: 'to-pink-600', bg: 'bg-purple-50' },
  };

  const colors = categoryColors[subCategory];

  const calculateTotal = () => {
    let total = 0;
    if (selectedCaretaker === 'group') total += 400 * 7; // 7 days
    if (selectedCaretaker === 'personal') total += 1500 * 7;
    if (addDoctor) total += 8000;
    if (addNurse) total += 6000;
    return total;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
      <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Users className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Personal Caretaker Services</h1>
            <p className="text-white/90 text-base">Choose your level of care support</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        {/* Quick Preview */}
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-5 shadow-lg mb-6 border-2 border-indigo-200">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-base text-gray-900 mb-1">Personalized Care Support</p>
              <p className="text-sm text-gray-700">
                Select caretaker type and optional medical professionals to ensure comfortable, safe travel.
              </p>
            </div>
          </div>
        </Card>

        {/* Caretaker Options */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Select Caretaker Type</h2>

          <div className="space-y-4">
            {/* Group Caretaker */}
            <motion.button
              onClick={() => setSelectedCaretaker('group')}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                selectedCaretaker === 'group'
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">Group Caretaker</h3>
                    <span className="text-2xl font-bold text-green-600">₹400/day</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    1 caretaker for 4-6 seniors. Shared assistance for basic needs, mobility support, and companionship.
                  </p>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-600">Cost-effective group care</span>
                  </div>
                </div>
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                  selectedCaretaker === 'group'
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300'
                }`}>
                  {selectedCaretaker === 'group' && (
                    <Check className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>
            </motion.button>

            {/* Personal Caretaker */}
            <motion.button
              onClick={() => setSelectedCaretaker('personal')}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                selectedCaretaker === 'personal'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">One-on-One Dedicated Caretaker</h3>
                    <span className="text-2xl font-bold text-purple-600">₹1,500/day</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Personal caretaker exclusively for you. Full-time care, medical assistance, and companionship.
                  </p>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-gray-600">Premium personalized care</span>
                  </div>
                </div>
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                  selectedCaretaker === 'personal'
                    ? 'border-purple-600 bg-purple-600'
                    : 'border-gray-300'
                }`}>
                  {selectedCaretaker === 'personal' && (
                    <Check className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>
            </motion.button>
          </div>
        </Card>

        {/* Medical Professionals */}
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Medical Professionals</h2>

          <div className="space-y-4">
            {/* Doctor-on-Tour (Mandatory) */}
            <div className="p-5 bg-blue-50 rounded-2xl border-2 border-blue-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold">Doctor-on-Tour</h3>
                      <span className="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded-full font-semibold">MANDATORY</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">₹8,000</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    MBBS doctor accompanies the tour for 24/7 medical support and emergencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Nurse */}
            <div className={`p-5 rounded-2xl border-2 transition-all ${
              addNurse ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  addNurse ? 'bg-green-600' : 'bg-gray-400'
                }`}>
                  <Syringe className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold">Nurse / Health Assistant</h3>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-semibold">OPTIONAL</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">₹6,000</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Qualified nurse for medication management and health monitoring.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setAddNurse(true)}
                      disabled={addNurse}
                      className={`h-10 rounded-full px-4 ${
                        addNurse
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add
                    </Button>
                    {addNurse && (
                      <Button
                        onClick={() => setAddNurse(false)}
                        variant="outline"
                        className="h-10 rounded-full px-4 border-2 border-red-300 text-red-600 hover:bg-red-50"
                      >
                        <Minus className="w-4 h-4 mr-1" /> Remove
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Running Total */}
        {selectedCaretaker !== 'none' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6"
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-5 shadow-lg border-2 border-green-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-gray-700">Selected Care Package</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedCaretaker === 'group' ? 'Group Caretaker' : 'Personal Caretaker'} + 
                    Doctor-on-Tour {addNurse ? '+ Nurse' : ''}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total Care Cost</p>
                  <p className="text-3xl font-bold text-green-600">₹{calculateTotal().toLocaleString()}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Continue Button */}
        <Button
          onClick={onContinue}
          disabled={selectedCaretaker === 'none'}
          className={`w-full h-14 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} hover:opacity-90 disabled:opacity-50 text-lg font-semibold`}
        >
          Continue to Transport Planner <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SHARED MODULE 3: TRANSPORT PLANNER
// Used by all 3 sub-categories
// ========================================

interface TransportPlannerProps {
  onBack: () => void;
  onContinue: () => void;
  subCategory: 'devotional' | 'nature' | 'wellness';
}

export function TransportPlanner({ onBack, onContinue, subCategory }: TransportPlannerProps) {
  const [selectedMode, setSelectedMode] = useState<'train' | 'bus' | 'car' | 'heli' | null>(null);

  const categoryColors = {
    devotional: { from: 'from-orange-600', to: 'to-amber-600', bg: 'bg-orange-50' },
    nature: { from: 'from-green-600', to: 'to-emerald-600', bg: 'bg-green-50' },
    wellness: { from: 'from-purple-600', to: 'to-pink-600', bg: 'bg-purple-50' },
  };

  const colors = categoryColors[subCategory];

  const transportModes = [
    {
      id: 'train' as const,
      name: 'Train',
      icon: Train,
      senior: 'AC compartments, lower berths reserved',
      cost: 3500,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'bus' as const,
      name: 'Comfortable Bus/Coach',
      icon: Bus,
      senior: 'AC, reclining seats, frequent rest stops',
      cost: 2800,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 'car' as const,
      name: 'Private Car/Cab',
      icon: Car,
      senior: 'Door-to-door service, flexible timing',
      cost: 6500,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 'heli' as const,
      name: 'Helicopter',
      icon: Plane,
      senior: 'Quick travel, accessible for seniors',
      cost: 25000,
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.bg} to-white`}>
      <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Car className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Transport Planner</h1>
            <p className="text-white/90 text-base">Choose senior-friendly transport</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        <Card className="bg-white rounded-3xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-5">Available Transport Modes</h2>

          <div className="grid grid-cols-1 gap-4">
            {transportModes.map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-2xl border-2 transition-all text-left ${
                  selectedMode === mode.id
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${mode.gradient} flex-shrink-0`}>
                    <mode.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{mode.name}</h3>
                      <span className="text-xl font-bold text-green-600">₹{mode.cost.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{mode.senior}</p>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-gray-600">Senior-optimized for comfort</span>
                    </div>
                  </div>
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                    selectedMode === mode.id
                      ? 'border-indigo-600 bg-indigo-600'
                      : 'border-gray-300'
                  }`}>
                    {selectedMode === mode.id && (
                      <Check className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </Card>

        {selectedMode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-5 shadow-lg border-2 border-blue-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-gray-700">Selected Transport</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {transportModes.find(m => m.id === selectedMode)?.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total Cost</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ₹{transportModes.find(m => m.id === selectedMode)?.cost.toLocaleString()}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        <Button
          onClick={onContinue}
          disabled={!selectedMode}
          className={`w-full h-14 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} hover:opacity-90 disabled:opacity-50 text-lg font-semibold`}
        >
          Continue to Booking Summary <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// Export all shared modules as a group (functions already exported above)
export const SeniorTourismSharedModules = {
  HealthSafetyScreen,
  CaretakerDetailScreen,
  TransportPlanner,
};
