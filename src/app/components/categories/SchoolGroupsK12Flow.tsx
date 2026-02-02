import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, BookOpen, Users, Bus, Utensils, Shield, 
  FileText, Download, Mail, CheckCircle, GraduationCap,
  Clock, Building, AlertCircle, Share2, Edit3, Sparkles,
  Info, Printer, Eye, Calendar, DollarSign, MapPin, Phone,
  UserCheck, Heart, Home as HomeIcon, MessageSquare, BarChart3
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';

interface SchoolGroupsK12FlowProps {
  onBack: () => void;
}

// Learning Themes (Step 2)
const learningThemes = [
  {
    id: 'history-heritage',
    icon: '🏛️',
    name: 'History & Heritage',
    gradient: 'from-amber-400 via-orange-300 to-amber-200',
    bgColor: '#FEF3C7',
    kidDescription: 'Learn about old buildings, kings, and how people lived long ago',
    activities: [
      'Admin-Added Historical Monument Visit',
      'Admin-Published Heritage Walk',
      'Admin-Added Museum Tour',
    ],
  },
  {
    id: 'science-innovation',
    icon: '🔬',
    name: 'Science & Innovation',
    gradient: 'from-blue-400 via-indigo-300 to-blue-200',
    bgColor: '#DBEAFE',
    kidDescription: 'Explore science centres, do experiments, and learn how things work',
    activities: [
      'Admin-Added Planetarium Visit',
      'Admin-Published Science Museum',
      'Admin-Added Tech Lab Workshop',
    ],
  },
  {
    id: 'environment-nature',
    icon: '🌿',
    name: 'Environment & Nature',
    gradient: 'from-green-400 via-emerald-300 to-green-200',
    bgColor: '#D1FAE5',
    kidDescription: 'Visit forests, learn about plants and animals, save the planet',
    activities: [
      'Admin-Added Nature Reserve',
      'Admin-Published Eco Park',
      'Admin-Added Wildlife Safari',
    ],
  },
  {
    id: 'culture-community',
    icon: '🤝',
    name: 'Culture & Community',
    gradient: 'from-purple-400 via-pink-300 to-purple-200',
    bgColor: '#E9D5FF',
    kidDescription: 'Learn about festivals, music, dance, and how people live together',
    activities: [
      'Admin-Added Cultural Centre',
      'Admin-Published Art Gallery',
      'Admin-Added Community Workshop',
    ],
  },
];

export function SchoolGroupsK12Flow({ onBack }: SchoolGroupsK12FlowProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Step 1: Welcome & Introduction
  // (Intro screen)
  
  // Step 2: Theme Selection
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  
  // Step 3: School Details & Demographics
  const [schoolDetails, setSchoolDetails] = useState({
    schoolName: '',
    board: '',
    city: '',
    state: '',
    gradeBand: '', // primary, middle, secondary
    studentCount: '',
    teacherCount: '',
  });
  
  // Step 4: Discounts & Support
  const [discounts, setDiscounts] = useState({
    govtConcessions: false,
    csrSponsorship: false,
    schoolSubsidy: false,
    selectedPartners: [] as string[],
  });
  
  // Step 5: Trip Type Selection
  const [tripType, setTripType] = useState<string>('');
  
  // Step 6: Logistics & Services
  const [logistics, setLogistics] = useState({
    transport: '',
    meals: [] as string[],
    accommodation: '',
  });
  
  // Step 7: Learning Support & Safety
  const [safetySupport, setSafetySupport] = useState({
    subjectExpertGuide: false,
    bilingualGuide: false,
    teacherKit: false,
    studentBooklet: false,
    postTripProjects: false,
    parentConsent: false,
    emergencyContact: false,
    firstAid: false,
    femaleStaff: false,
    travelInsurance: false,
  });

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getStepName = (step: number) => {
    const steps = [
      'Start',
      'Choose Theme',
      'School Details',
      'Discounts',
      'Trip Type',
      'Logistics',
      'Safety',
      'Itinerary',
      'Cost',
      'Proposal',
      'Dashboard'
    ];
    return steps[step - 1] || '';
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Welcome onNext={handleNext} />;
      case 2:
        return (
          <Step2ThemeSelection
            selectedTheme={selectedTheme}
            onSelectTheme={setSelectedTheme}
            onNext={handleNext}
          />
        );
      case 3:
        return (
          <Step3SchoolDetails
            schoolDetails={schoolDetails}
            setSchoolDetails={setSchoolDetails}
            onNext={handleNext}
          />
        );
      case 4:
        return (
          <Step4DiscountsSupport
            discounts={discounts}
            setDiscounts={setDiscounts}
            onNext={handleNext}
          />
        );
      case 5:
        return (
          <Step5TripType
            tripType={tripType}
            setTripType={setTripType}
            onNext={handleNext}
          />
        );
      case 6:
        return (
          <Step6Logistics
            logistics={logistics}
            setLogistics={setLogistics}
            onNext={handleNext}
          />
        );
      case 7:
        return (
          <Step7SafetySupport
            safetySupport={safetySupport}
            setSafetySupport={setSafetySupport}
            onNext={handleNext}
          />
        );
      case 8:
        return (
          <Step8Itinerary
            theme={selectedTheme}
            schoolDetails={schoolDetails}
            tripType={tripType}
            onNext={handleNext}
          />
        );
      case 9:
        return (
          <Step9CostBreakdown
            schoolDetails={schoolDetails}
            logistics={logistics}
            onNext={handleNext}
          />
        );
      case 10:
        return (
          <Step10ProposalSubmission
            schoolDetails={schoolDetails}
            onNext={handleNext}
          />
        );
      case 11:
        return <Step11TripHub onBack={onBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50">
      {/* Header with Educational Purple/Blue theme */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={handleBack}
          className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 hover:bg-white/40 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">🎒</div>
          <div>
            <h1 className="text-white text-2xl font-bold">School Groups (K-12)</h1>
            <p className="text-white/90 text-sm">Learning Expeditions</p>
          </div>
        </div>

        {/* Progress Indicator - Steps 1-10 only */}
        {currentStep <= 10 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80 text-xs">
                Step {currentStep} of 11: {getStepName(currentStep)}
              </span>
              <span className="text-white/80 text-xs">{Math.round((currentStep / 11) * 100)}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 11) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-white rounded-full"
              />
            </div>
            
            {/* Visual Step Progress */}
            <div className="flex items-center justify-between mt-4 text-xs text-white/70">
              <span className={currentStep >= 1 ? 'text-white font-bold' : ''}>Start</span>
              <span className={currentStep >= 4 ? 'text-white font-bold' : ''}>Details</span>
              <span className={currentStep >= 7 ? 'text-white font-bold' : ''}>Safety</span>
              <span className={currentStep >= 10 ? 'text-white font-bold' : ''}>Approval</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ========================================
// STEP 1: WELCOME & INTRODUCTION
// ========================================
function Step1Welcome({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            School Groups (K-12)
          </h2>
          <p className="text-gray-600 text-sm mb-2">
            Educational trips for students aged 6-18
          </p>
          
          {/* Kid-friendly tooltip */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mt-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-xs font-bold text-blue-900 mb-1">ℹ️ This means:</p>
                <p className="text-xs text-blue-800">
                  K-12 means school students (classes 1 to 12). 
                  Made for learning trips, not just fun trips!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-5 border-2 border-purple-200">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-sm font-bold text-gray-800">Curriculum-Aligned</p>
            <p className="text-xs text-gray-600 mt-1">Matches what you study</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-200">
            <div className="text-3xl mb-2">🛡️</div>
            <p className="text-sm font-bold text-gray-800">Safety-First</p>
            <p className="text-xs text-gray-600 mt-1">Parents can trust us</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-sm font-bold text-gray-800">School Discounts</p>
            <p className="text-xs text-gray-600 mt-1">Save money on trips</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-amber-200">
            <div className="text-3xl mb-2">👨‍🏫</div>
            <p className="text-sm font-bold text-gray-800">Expert Guides</p>
            <p className="text-xs text-gray-600 mt-1">Learn from teachers</p>
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          📋 Start Planning Wizard →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 2: THEME SELECTION
// ========================================
function Step2ThemeSelection({
  selectedTheme,
  onSelectTheme,
  onNext,
}: {
  selectedTheme: string;
  onSelectTheme: (theme: string) => void;
  onNext: () => void;
}) {
  const selected = learningThemes.find(t => t.id === selectedTheme);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Your Learning Theme</h2>
        <p className="text-sm text-gray-600 mb-1">Select the primary focus for your educational expedition</p>
        
        {/* Kid-friendly explanation */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-3 mt-3 mb-6">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-purple-800">
              <span className="font-bold">Kid version:</span> Pick what your class is studying in school 
              (History/Science/Nature) → Choose matching activities
            </p>
          </div>
        </div>

        {/* 4 Clickable Theme Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {learningThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onSelectTheme(theme.id)}
              className={`relative overflow-hidden rounded-2xl p-5 text-center transition-all ${
                selectedTheme === theme.id
                  ? 'ring-4 ring-purple-500 shadow-xl scale-105'
                  : 'shadow-md hover:shadow-lg'
              }`}
              style={{ backgroundColor: theme.bgColor }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-20`} />
              <div className="relative z-10">
                <div className="text-5xl mb-3">{theme.icon}</div>
                <h3 className="font-bold text-sm text-gray-900 mb-2">{theme.name}</h3>
                {selectedTheme === theme.id && (
                  <Badge className="bg-purple-600 text-white text-xs">Selected ✓</Badge>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Theme Description */}
        {selected && (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-5 mb-6 border-2 border-purple-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">{selected.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900">{selected.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{selected.kidDescription}</p>
              </div>
            </div>
            
            {/* Recommended Activities */}
            <div className="bg-white rounded-xl p-4 mt-3">
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Recommended Activities & Study Tours
              </h4>
              <div className="space-y-2">
                {selected.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="text-xs text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={onNext}
          disabled={!selectedTheme}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to School Details →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 3: SCHOOL DETAILS & DEMOGRAPHICS
// ========================================
function Step3SchoolDetails({
  schoolDetails,
  setSchoolDetails,
  onNext,
}: {
  schoolDetails: any;
  setSchoolDetails: (data: any) => void;
  onNext: () => void;
}) {
  const getAgeRange = (gradeBand: string) => {
    if (gradeBand === 'primary') return 'Ages 6-10';
    if (gradeBand === 'middle') return 'Ages 11-13';
    if (gradeBand === 'secondary') return 'Ages 14-18';
    return '';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">School Trip Planner</h2>
        <p className="text-sm text-gray-600 mb-6">Tell us about your school and student group</p>

        <div className="space-y-4">
          {/* SECTION A: School Details */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
              <Building className="w-4 h-4 text-purple-600" />
              School Information
            </h3>
            <p className="text-xs text-purple-700 mb-3">Basic details about your school</p>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  School Name
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Delhi Public School"
                  value={schoolDetails.schoolName}
                  onChange={(e) => setSchoolDetails({ ...schoolDetails, schoolName: e.target.value })}
                  className="px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Education Board
                </label>
                <select
                  value={schoolDetails.board}
                  onChange={(e) => setSchoolDetails({ ...schoolDetails, board: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none text-gray-900 text-sm"
                >
                  <option value="">Select board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="State">State Board</option>
                  <option value="IB">IB (International)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    City
                  </label>
                  <Input
                    type="text"
                    placeholder="City"
                    value={schoolDetails.city}
                    onChange={(e) => setSchoolDetails({ ...schoolDetails, city: e.target.value })}
                    className="px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    State
                  </label>
                  <Input
                    type="text"
                    placeholder="State"
                    value={schoolDetails.state}
                    onChange={(e) => setSchoolDetails({ ...schoolDetails, state: e.target.value })}
                    className="px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION B: Student Details */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              Student Details
            </h3>
            <p className="text-xs text-blue-700 mb-3">Tell us about the students going on the trip</p>
            
            {/* Grade Band Segmented Control */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Grade Band
              </label>
              <div className="grid grid-cols-3 gap-2 bg-white rounded-xl p-1 border-2 border-blue-200">
                {[
                  { value: 'primary', label: '1–5', subLabel: 'Primary' },
                  { value: 'middle', label: '6–8', subLabel: 'Middle' },
                  { value: 'secondary', label: '9–12', subLabel: 'Secondary' },
                ].map((band) => (
                  <button
                    key={band.value}
                    onClick={() => setSchoolDetails({ ...schoolDetails, gradeBand: band.value })}
                    className={`px-3 py-2 rounded-lg text-center transition-all ${
                      schoolDetails.gradeBand === band.value
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-transparent text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    <div className="text-sm font-bold">{band.label}</div>
                    <div className="text-xs opacity-80">{band.subLabel}</div>
                  </button>
                ))}
              </div>
              {schoolDetails.gradeBand && (
                <p className="text-xs text-blue-600 mt-2 font-semibold">
                  {getAgeRange(schoolDetails.gradeBand)}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Student Count
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 45"
                  value={schoolDetails.studentCount}
                  onChange={(e) => setSchoolDetails({ ...schoolDetails, studentCount: e.target.value })}
                  className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Teachers/Staff Count
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 3"
                  value={schoolDetails.teacherCount}
                  onChange={(e) => setSchoolDetails({ ...schoolDetails, teacherCount: e.target.value })}
                  className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Kid-friendly note */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">
                <span className="font-bold">This is like telling the app:</span> How many of us are going, and how old we are.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          disabled={!schoolDetails.schoolName || !schoolDetails.studentCount || !schoolDetails.gradeBand}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold mt-6 disabled:opacity-50"
        >
          Continue to Discounts & Support →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 4: DISCOUNTS & SUPPORT
// ========================================
function Step4DiscountsSupport({
  discounts,
  setDiscounts,
  onNext,
}: {
  discounts: any;
  setDiscounts: (data: any) => void;
  onNext: () => void;
}) {
  const partnerTypes = [
    { id: 'museums', name: 'Museums/science centres', icon: '🏛️' },
    { id: 'universities', name: 'University/research institutes', icon: '🎓' },
    { id: 'ngos', name: 'NGO learning centres', icon: '🤝' },
    { id: 'theme-parks', name: 'Theme/edutainment parks', icon: '🎡' },
  ];

  const togglePartner = (partnerId: string) => {
    const selected = discounts.selectedPartners.includes(partnerId);
    if (selected) {
      setDiscounts({
        ...discounts,
        selectedPartners: discounts.selectedPartners.filter((p: string) => p !== partnerId),
      });
    } else {
      setDiscounts({
        ...discounts,
        selectedPartners: [...discounts.selectedPartners, partnerId],
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Discounts & Support</h2>
        <p className="text-sm text-gray-600 mb-6">Apply for savings and choose partner preferences</p>

        {/* Apply for Savings & Support */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Apply for Savings & Support:</h3>
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer">
              <input
                type="checkbox"
                checked={discounts.govtConcessions}
                onChange={(e) => setDiscounts({ ...discounts, govtConcessions: e.target.checked })}
                className="w-5 h-5 text-green-600 rounded mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="text-sm font-bold text-gray-900 block">
                  Government/Museum Concessions
                </span>
                <span className="text-xs text-gray-600">
                  Apply for school-group ticket discounts at government sites
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer">
              <input
                type="checkbox"
                checked={discounts.csrSponsorship}
                onChange={(e) => setDiscounts({ ...discounts, csrSponsorship: e.target.checked })}
                className="w-5 h-5 text-blue-600 rounded mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="text-sm font-bold text-gray-900 block">
                  CSR/NGO Sponsorship
                </span>
                <span className="text-xs text-gray-600">
                  Open to funding support from companies or charities
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 rounded-xl bg-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer">
              <input
                type="checkbox"
                checked={discounts.schoolSubsidy}
                onChange={(e) => setDiscounts({ ...discounts, schoolSubsidy: e.target.checked })}
                className="w-5 h-5 text-purple-600 rounded mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="text-sm font-bold text-gray-900 block">
                  Internal School Subsidy Program
                </span>
                <span className="text-xs text-gray-600">
                  School will help pay for some students
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Partner Type Preferences */}
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-3">Partner Type Preferences:</h3>
          <p className="text-xs text-indigo-700 mb-4">Choose where you'd like to visit (select multiple)</p>
          
          <div className="grid grid-cols-2 gap-3">
            {partnerTypes.map((partner) => (
              <button
                key={partner.id}
                onClick={() => togglePartner(partner.id)}
                className={`p-4 rounded-xl text-left transition-all ${
                  discounts.selectedPartners.includes(partner.id)
                    ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-400'
                    : 'bg-white text-gray-700 hover:bg-indigo-100 border-2 border-indigo-200'
                }`}
              >
                <div className="text-3xl mb-2">{partner.icon}</div>
                <p className="text-xs font-bold leading-tight">{partner.name}</p>
                {discounts.selectedPartners.includes(partner.id) && (
                  <CheckCircle className="w-4 h-4 mt-2" />
                )}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold"
        >
          Continue to Trip Type →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 5: TRIP TYPE SELECTION
// ========================================
function Step5TripType({
  tripType,
  setTripType,
  onNext,
}: {
  tripType: string;
  setTripType: (type: string) => void;
  onNext: () => void;
}) {
  const tripTypes = [
    { 
      id: 'single-day', 
      name: 'Single-day Field Trip', 
      description: 'Return same day',
      icon: '☀️',
      kidText: 'We go and come back the same day'
    },
    { 
      id: '2-3-day', 
      name: '2–3 Day Overnight Camp', 
      description: 'Stay 2-3 nights',
      icon: '🏕️',
      kidText: 'We sleep there for 2-3 nights'
    },
    { 
      id: 'project', 
      name: 'Project/Exam-linked Visit', 
      description: 'Custom duration',
      icon: '📚',
      kidText: 'For school project or exam work'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Your Trip Type</h2>
        <p className="text-sm text-gray-600 mb-1">Select the duration of your educational trip</p>
        
        {/* Kid-friendly explanation */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3 mt-3 mb-6">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800">
              <span className="font-bold">Kid version:</span> Are we going and coming back the same day? 
              Or do we sleep there?
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {tripTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setTripType(type.id)}
              className={`w-full p-5 rounded-2xl text-left transition-all ${
                tripType === type.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl ring-4 ring-purple-300'
                  : 'bg-gray-50 hover:bg-purple-50 text-gray-800 border-2 border-gray-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{type.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1">{type.name}</h3>
                  <p className={`text-sm mb-2 ${tripType === type.id ? 'text-white/90' : 'text-gray-600'}`}>
                    {type.description}
                  </p>
                  <p className={`text-xs italic ${tripType === type.id ? 'text-white/80' : 'text-gray-500'}`}>
                    "{type.kidText}"
                  </p>
                </div>
                {tripType === type.id && (
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>

        <Button
          onClick={onNext}
          disabled={!tripType}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold disabled:opacity-50"
        >
          Continue to Logistics →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 6: LOGISTICS & SERVICES
// ========================================
function Step6Logistics({
  logistics,
  setLogistics,
  onNext,
}: {
  logistics: any;
  setLogistics: (data: any) => void;
  onNext: () => void;
}) {
  const mealOptions = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];

  const toggleMeal = (meal: string) => {
    if (logistics.meals.includes(meal)) {
      setLogistics({ ...logistics, meals: logistics.meals.filter((m: string) => m !== meal) });
    } else {
      setLogistics({ ...logistics, meals: [...logistics.meals, meal] });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Trip Logistics</h2>
        <p className="text-sm text-gray-600 mb-1">Configure transportation, food, and accommodation</p>
        
        {/* Kid-friendly explanation */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3 mt-3 mb-6">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-green-800">
              <span className="font-bold">Kid version:</span> Pick how we travel and what we eat. 
              Choose where we sleep if it's a night trip.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Transport & Pick-up */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Bus className="w-4 h-4 text-blue-600" />
              Transport & Pick-up
            </h3>
            <p className="text-xs text-blue-700 mb-3">How We Travel:</p>
            
            <div className="space-y-2">
              {[
                { value: 'ac-bus', label: 'AC School Bus', icon: '🚌' },
                { value: 'chartered-coach', label: 'Chartered Coach', icon: '🚐' },
                { value: 'train', label: 'Train Booking Assistance', icon: '🚂' },
                { value: 'flight', label: 'Flight (if far)', icon: '✈️' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    logistics.transport === option.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white hover:bg-blue-100 border-2 border-blue-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="transport"
                    value={option.value}
                    checked={logistics.transport === option.value}
                    onChange={(e) => setLogistics({ ...logistics, transport: e.target.value })}
                    className="w-4 h-4"
                  />
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-sm font-bold flex-1">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Meals & Accommodation */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-green-600" />
              Food & Stay
            </h3>
            
            <div className="mb-4">
              <p className="text-xs text-green-700 mb-2">Meals (pick all that apply):</p>
              <div className="grid grid-cols-2 gap-2">
                {mealOptions.map((meal) => (
                  <label
                    key={meal}
                    className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all ${
                      logistics.meals.includes(meal)
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-white hover:bg-green-100 border-2 border-green-200'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={logistics.meals.includes(meal)}
                      onChange={() => toggleMeal(meal)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-bold">{meal}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-green-700 mb-2">Stay Type:</p>
              <select
                value={logistics.accommodation}
                onChange={(e) => setLogistics({ ...logistics, accommodation: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none text-gray-900 text-sm"
              >
                <option value="">Select accommodation</option>
                <option value="day-trip">Day trip (no stay)</option>
                <option value="hostel">Hostel dormitory</option>
                <option value="hotel">Hotel</option>
              </select>
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          disabled={!logistics.transport}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold mt-6 disabled:opacity-50"
        >
          Continue to Learning & Safety →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 7: LEARNING SUPPORT & SAFETY
// ========================================
function Step7SafetySupport({
  safetySupport,
  setSafetySupport,
  onNext,
}: {
  safetySupport: any;
  setSafetySupport: (data: any) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Learning Support & Safety</h2>
        <p className="text-sm text-gray-600 mb-6">Choose educational helpers and safety measures</p>

        <div className="space-y-4">
          {/* Learning Helpers */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              Choose Learning Support:
            </h3>
            
            <div className="space-y-2">
              {[
                { key: 'subjectExpertGuide', label: 'Subject-expert guide (History/Science/Environment)', icon: '👨‍🏫' },
                { key: 'bilingualGuide', label: 'Bilingual local guide', icon: '🗣️' },
                { key: 'teacherKit', label: 'Pre-visit teacher kit (worksheets, PPT)', icon: '📋' },
                { key: 'studentBooklet', label: 'Student activity booklet', icon: '📖' },
                { key: 'postTripProjects', label: 'Post-trip project templates', icon: '✍️' },
              ].map((item) => (
                <label
                  key={item.key}
                  className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    safetySupport[item.key]
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white hover:bg-blue-100 border-2 border-blue-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={safetySupport[item.key]}
                    onChange={(e) => setSafetySupport({ ...safetySupport, [item.key]: e.target.checked })}
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Safety Essentials */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" />
              Safety Essentials (All Mandatory):
            </h3>
            
            <div className="space-y-2">
              {[
                { key: 'parentConsent', label: 'Digital Parent Consent Forms', icon: '📝', mandatory: true },
                { key: 'emergencyContact', label: 'Emergency Contact List & Student ID Tags', icon: '📞', mandatory: true },
                { key: 'firstAid', label: 'First-aid + Trained Staff', icon: '🏥', mandatory: true },
                { key: 'femaleStaff', label: 'Female Staff for Girl Groups', icon: '👩‍⚕️', mandatory: true },
                { key: 'travelInsurance', label: 'Group Travel Insurance', icon: '🛡️', mandatory: false },
              ].map((item) => (
                <label
                  key={item.key}
                  className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    safetySupport[item.key]
                      ? 'bg-red-600 text-white shadow-md'
                      : item.mandatory
                      ? 'bg-red-100 border-2 border-red-300'
                      : 'bg-white hover:bg-red-100 border-2 border-red-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={safetySupport[item.key]}
                    onChange={(e) => setSafetySupport({ ...safetySupport, [item.key]: e.target.checked })}
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <span className="text-sm font-medium block">{item.label}</span>
                    {!item.mandatory && (
                      <span className={`text-xs ${safetySupport[item.key] ? 'text-white/80' : 'text-gray-500'}`}>
                        (Optional)
                      </span>
                    )}
                  </div>
                  {item.mandatory && !safetySupport[item.key] && (
                    <Badge className="bg-red-600 text-white text-xs">Required</Badge>
                  )}
                </label>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold mt-6"
        >
          🎯 Get Itinerary & Quote →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 8: ITINERARY & QUOTE GENERATION
// ========================================
function Step8Itinerary({
  theme,
  schoolDetails,
  tripType,
  onNext,
}: {
  theme: string;
  schoolDetails: any;
  tripType: string;
  onNext: () => void;
}) {
  const themeName = learningThemes.find((t) => t.id === theme)?.name || 'Selected Theme';
  const themeIcon = learningThemes.find((t) => t.id === theme)?.icon || '🎒';

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Suggested School Trip Plan</h2>
          <Badge className="bg-purple-600 text-white flex items-center gap-1 px-3 py-1">
            <Edit3 className="w-3 h-3" />
            Editable by Teacher
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-6">Your customized day-wise timeline</p>

        {/* Trip Summary Card */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-5 mb-6 border-2 border-purple-300">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Trip Summary
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-xl p-3">
              <p className="text-xs text-gray-600 mb-1">School</p>
              <p className="font-bold text-gray-900">{schoolDetails.schoolName}</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <p className="text-xs text-gray-600 mb-1">Students + Staff</p>
              <p className="font-bold text-gray-900">
                {schoolDetails.studentCount} + {schoolDetails.teacherCount}
              </p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <p className="text-xs text-gray-600 mb-1">Theme</p>
              <p className="font-bold text-gray-900">{themeIcon} {themeName}</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <p className="text-xs text-gray-600 mb-1">Grade</p>
              <p className="font-bold text-gray-900 capitalize">{schoolDetails.gradeBand}</p>
            </div>
          </div>
        </div>

        {/* Sample Day Preview */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            Sample Day Preview
          </h3>
          
          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Day 1 - {themeName}</h4>
            </div>
            
            <div className="space-y-3">
              {[
                { time: '08:00 AM', activity: 'Start from school', detail: 'Attendance check & departure' },
                { time: '10:00 AM', activity: 'Visit Admin-Published Destination', detail: 'Guided tour with subject expert' },
                { time: '12:30 PM', activity: 'Do activity worksheet', detail: 'Hands-on learning session' },
                { time: '01:30 PM', activity: 'Lunch break', detail: 'Admin-Added Restaurant' },
                { time: '03:00 PM', activity: 'Interactive session', detail: 'Q&A with local expert' },
                { time: '05:00 PM', activity: 'Return by afternoon', detail: 'Safe arrival notification to parents' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-3">
                  <div className="flex-shrink-0">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <p className="text-xs font-bold text-purple-600 mt-1">{item.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">{item.activity}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold"
        >
          View Cost Breakdown →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 9: COST BREAKDOWN
// ========================================
function Step9CostBreakdown({
  schoolDetails,
  logistics,
  onNext,
}: {
  schoolDetails: any;
  logistics: any;
  onNext: () => void;
}) {
  const studentCount = parseInt(schoolDetails.studentCount) || 0;
  const estimatedPerStudent = 2500; // Sample estimate
  const totalEstimate = studentCount * estimatedPerStudent;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Cost Breakdown</h2>
        <p className="text-sm text-gray-600 mb-6">Clear cost visualization for your trip</p>

        {/* Estimated Cost Header */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm opacity-90">Estimated Cost per Student</p>
              <div className="flex items-baseline gap-2 mt-1">
                <DollarSign className="w-8 h-8" />
                <span className="text-4xl font-bold">₹{estimatedPerStudent.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-90">Total for {studentCount} students</p>
              <p className="text-2xl font-bold mt-1">₹{totalEstimate.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            What's Included:
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { item: 'Transport', included: true, icon: '🚌' },
              { item: 'Entry tickets', included: true, icon: '🎫' },
              { item: 'Expert guides', included: true, icon: '👨‍🏫' },
              { item: 'Meals', included: logistics.meals.length > 0, icon: '🍽️' },
              { item: 'Student activity booklets', included: true, icon: '📖' },
              { item: 'Teacher materials', included: true, icon: '📚' },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  service.included
                    ? 'bg-green-100 border-2 border-green-300'
                    : 'bg-gray-100 border-2 border-gray-300'
                }`}
              >
                <span className="text-2xl">{service.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">{service.item}</p>
                  {service.included ? (
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                  ) : (
                    <p className="text-xs text-gray-500 mt-1">Not selected</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Approval Notice */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-900 mb-1">
                Final Quote Subject to Admin Approval
              </p>
              <p className="text-xs text-amber-800">
                The admin will provide exact pricing based on group size, dates, and destinations selected. 
                This is an estimated range.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold"
        >
          Send for School Approval →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 10: PROPOSAL SUBMISSION
// ========================================
function Step10ProposalSubmission({
  schoolDetails,
  onNext,
}: {
  schoolDetails: any;
  onNext: () => void;
}) {
  const [proposalSent, setProposalSent] = useState(false);

  const handleShareEmail = () => {
    setProposalSent(true);
    toast.success('Proposal sent successfully to school email!');
  };

  const handleDownloadPDF = () => {
    toast.success('PDF proposal downloading...');
  };

  const handlePrintConsent = () => {
    toast.success('Parent consent forms ready to print!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Send for School Approval</h2>
        <p className="text-sm text-gray-600 mb-6">Share your trip proposal with school administration and parents</p>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-5 mb-6 border-2 border-purple-300">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="font-bold text-gray-900">Trip Proposal Ready</h3>
              <p className="text-xs text-gray-600">For {schoolDetails.schoolName}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 mt-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-gray-600">Students</p>
                <p className="font-semibold text-gray-900">{schoolDetails.studentCount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Staff</p>
                <p className="font-semibold text-gray-900">{schoolDetails.teacherCount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Grade</p>
                <p className="font-semibold text-gray-900 capitalize">{schoolDetails.gradeBand}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">City</p>
                <p className="font-semibold text-gray-900">{schoolDetails.city}</p>
              </div>
            </div>
          </div>
        </div>

        {!proposalSent ? (
          <div className="space-y-3">
            {/* Primary: Share Email */}
            <button
              onClick={handleShareEmail}
              className="w-full p-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl hover:shadow-xl transition-all group"
            >
              <Mail className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-bold text-lg">📧 Share Proposal with School Email</p>
              <p className="text-sm opacity-90 mt-1">Send to {schoolDetails.schoolName}</p>
            </button>

            {/* Secondary: Download PDF */}
            <button
              onClick={handleDownloadPDF}
              className="w-full p-5 bg-gray-800 text-white rounded-2xl hover:bg-gray-900 transition-all group"
            >
              <Download className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-bold text-lg">📄 Download Printable PDF Proposal</p>
              <p className="text-sm opacity-80 mt-1">For principal approval</p>
            </button>

            {/* Tertiary: Print Consent */}
            <button
              onClick={handlePrintConsent}
              className="w-full p-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all group"
            >
              <Printer className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-bold text-lg">🖨️ Print Parent Consent Forms</p>
              <p className="text-sm opacity-90 mt-1">Get signatures from parents</p>
            </button>

            {/* Kid-friendly note */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3 mt-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800">
                  <span className="font-bold">Kid version:</span> Teacher sends plan to principal and parents
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Proposal Sent Successfully!</h3>
            <p className="text-sm text-gray-600 mb-1">
              Your trip proposal has been emailed to {schoolDetails.schoolName}
            </p>
            <p className="text-xs text-gray-500 mb-6 italic">
              "Teacher sends plan to principal and parents" ✓
            </p>
            <Button
              onClick={onNext}
              className="w-full h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold"
            >
              Go to Educational Trip Hub →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// STEP 11: EDUCATIONAL TRIP HUB
// ========================================
function Step11TripHub({ onBack }: { onBack: () => void }) {
  const hubSections = [
    { icon: Eye, emoji: '👁️', name: 'View Profile', color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-50' },
    { icon: Sparkles, emoji: '✨', name: 'Smart Tour Discovery', color: 'from-purple-400 to-pink-400', bgColor: 'bg-purple-50' },
    { icon: FileText, emoji: '📋', name: 'My Bookings', color: 'from-green-400 to-emerald-400', bgColor: 'bg-green-50' },
    { icon: MessageSquare, emoji: '💬', name: 'Messages', color: 'from-amber-400 to-orange-400', bgColor: 'bg-amber-50' },
    { icon: BookOpen, emoji: '📚', name: 'Learning Hub', color: 'from-indigo-400 to-blue-400', bgColor: 'bg-indigo-50' },
    { icon: Shield, emoji: '🛡️', name: 'Safety Info', color: 'from-red-400 to-rose-400', bgColor: 'bg-red-50' },
  ];

  const currentTrips = [
    { name: 'Science Museum Trip', status: 'Planning Stage', color: 'bg-blue-100 text-blue-700', date: 'Mar 15, 2026' },
    { name: 'Heritage Walk', status: 'Approved', color: 'bg-green-100 text-green-700', date: 'Apr 2, 2026' },
    { name: 'Nature Camp', status: 'Completed', color: 'bg-gray-100 text-gray-700', date: 'Jan 20, 2026' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Educational Trip Hub</h2>
          <p className="text-sm text-gray-600">School Trip Dashboard - Manage all your trips</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-3">Quick Actions:</h3>
          <div className="grid grid-cols-2 gap-3">
            {hubSections.map((section, idx) => (
              <button
                key={idx}
                className={`${section.bgColor} p-5 rounded-2xl hover:shadow-lg transition-all text-left border-2 border-gray-200 group`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-sm text-gray-900">{section.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Current Trips */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-purple-600" />
            Current Trips:
          </h3>
          <div className="space-y-3">
            {currentTrips.map((trip, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border-2 border-purple-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{trip.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{trip.date}</p>
                  </div>
                  <Badge className={`${trip.color} text-xs px-3 py-1`}>
                    {trip.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onBack}
          className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Educational Tourism
        </Button>
      </div>
    </div>
  );
}
