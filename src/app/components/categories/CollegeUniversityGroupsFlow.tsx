import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Building2, Users, Briefcase, FlaskConical, 
  GraduationCap, Target, Calendar, DollarSign, Bus, 
  Utensils, Home as HomeIcon, Shield, FileText, Download, 
  Mail, CheckCircle, Sparkles, Info, MapPin, Phone,
  MessageSquare, Share2, Edit3, Clock, TrendingUp,
  BookOpen, Award, Lightbulb, Network, FileCheck,
  AlertCircle, ChevronRight, Zap, Settings, BarChart3
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';

interface CollegeUniversityGroupsFlowProps {
  onBack: () => void;
}

// Academic Focus Types (Screen B)
const academicFocusTypes = [
  {
    id: 'industry-visits',
    icon: '🏭',
    name: 'Industry / Plant Visits',
    gradient: 'from-blue-400 via-cyan-300 to-blue-200',
    bgColor: '#DBEAFE',
    description: 'Manufacturing facilities, corporate offices, production units',
    placeholder: '[Admin-Defined Program: Industry/Plant Visit]',
  },
  {
    id: 'lab-research',
    icon: '🔬',
    name: 'Lab & Research Facilities',
    gradient: 'from-purple-400 via-indigo-300 to-purple-200',
    bgColor: '#E9D5FF',
    description: 'R&D centers, university labs, testing facilities',
    placeholder: '[Admin-Defined Program: Lab/Research Facility]',
  },
  {
    id: 'technical-workshops',
    icon: '💻',
    name: 'Technical Workshops',
    gradient: 'from-orange-400 via-amber-300 to-orange-200',
    bgColor: '#FED7AA',
    description: 'Hands-on training, skill development, certification programs',
    placeholder: '[Admin-Defined Program: Technical Workshop]',
  },
  {
    id: 'conferences-expos',
    icon: '🎤',
    name: 'Conferences / Expos',
    gradient: 'from-green-400 via-emerald-300 to-green-200',
    bgColor: '#D1FAE5',
    description: 'Industry events, trade shows, academic conferences',
    placeholder: '[Admin-Defined Program: Conference/Expo]',
  },
];

// Learning Outcomes (Screen D)
const learningOutcomes = [
  { id: 'industry-exposure', label: 'Industry Exposure', icon: '🏢' },
  { id: 'research-data', label: 'Data Collection / Project Work', icon: '📊' },
  { id: 'skill-development', label: 'Skill Development', icon: '🎯' },
  { id: 'networking', label: 'Networking', icon: '🤝' },
  { id: 'academic-credit', label: 'Academic Credit Mapping', icon: '📜' },
];

// College Services (Screen G)
const collegeServices = [
  { label: 'Permissions & protocols', icon: '📋' },
  { label: 'Faculty coordination letters', icon: '✉️' },
  { label: 'Travel & stay management', icon: '🚌' },
  { label: 'Certificates & documentation', icon: '🏆' },
  { label: 'Learning kits & report templates', icon: '📚' },
];

export function CollegeUniversityGroupsFlow({ onBack }: CollegeUniversityGroupsFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<string>('landing');
  
  // Screen B: Academic Focus
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  
  // Screen C: Department & Discipline
  const [department, setDepartment] = useState<string>('');
  
  // Screen D: Learning Outcomes
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  
  // Screen E: Trip Basics
  const [tripBasics, setTripBasics] = useState({
    duration: '',
    budgetBand: '',
  });
  
  // Screen F: Focus Areas
  const [focusAreas, setFocusAreas] = useState<string[]>([]);
  
  // Screen H: Discounts & Funding
  const [discounts, setDiscounts] = useState({
    transportConcessions: false,
    entryDiscounts: false,
    departmentFunding: false,
    csrSponsored: false,
  });
  
  // Screen I: Grok AI Input
  const [grokInput, setGrokInput] = useState({
    departmentMix: '',
    learningGoals: '',
    budgetRange: '',
    preferredRegions: '',
  });
  
  // Screen J: Detailed Requirements
  const [requirements, setRequirements] = useState({
    studentCount: '',
    facultyCount: '',
    travelDates: '',
    alternateDates: '',
    transport: '',
    stay: '',
    meals: '',
    specialRequirements: '',
  });
  
  // Screen K: Safety & Compliance
  const [compliance, setCompliance] = useState({
    facultyRatio: false,
    permissionLetters: false,
    idVerification: false,
    safetyBriefing: false,
    medicalReadiness: false,
  });

  const goToScreen = (screen: string) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (currentScreen === 'landing') {
      onBack();
    } else {
      const screens = [
        'landing', 'focus', 'department', 'outcomes', 'basics', 
        'areas', 'services', 'funding', 'grok', 'requirements', 
        'safety', 'proposal'
      ];
      const currentIndex = screens.indexOf(currentScreen);
      if (currentIndex > 0) {
        setCurrentScreen(screens[currentIndex - 1]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const toggleFocus = (focusId: string) => {
    if (selectedFocus.includes(focusId)) {
      setSelectedFocus(selectedFocus.filter(f => f !== focusId));
    } else {
      setSelectedFocus([...selectedFocus, focusId]);
    }
  };

  const toggleOutcome = (outcomeId: string) => {
    if (selectedOutcomes.includes(outcomeId)) {
      setSelectedOutcomes(selectedOutcomes.filter(o => o !== outcomeId));
    } else {
      setSelectedOutcomes([...selectedOutcomes, outcomeId]);
    }
  };

  const toggleFocusArea = (area: string) => {
    if (focusAreas.includes(area)) {
      setFocusAreas(focusAreas.filter(a => a !== area));
    } else {
      setFocusAreas([...focusAreas, area]);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <ScreenA_Landing onNext={() => goToScreen('focus')} />;
      case 'focus':
        return (
          <ScreenB_AcademicFocus
            selectedFocus={selectedFocus}
            toggleFocus={toggleFocus}
            onNext={() => goToScreen('department')}
          />
        );
      case 'department':
        return (
          <ScreenC_Department
            department={department}
            setDepartment={setDepartment}
            onNext={() => goToScreen('outcomes')}
          />
        );
      case 'outcomes':
        return (
          <ScreenD_LearningOutcomes
            selectedOutcomes={selectedOutcomes}
            toggleOutcome={toggleOutcome}
            onNext={() => goToScreen('basics')}
          />
        );
      case 'basics':
        return (
          <ScreenE_TripBasics
            tripBasics={tripBasics}
            setTripBasics={setTripBasics}
            onNext={() => goToScreen('areas')}
          />
        );
      case 'areas':
        return (
          <ScreenF_FocusAreas
            focusAreas={focusAreas}
            toggleFocusArea={toggleFocusArea}
            onNext={() => goToScreen('services')}
          />
        );
      case 'services':
        return <ScreenG_CollegeServices onNext={() => goToScreen('funding')} />;
      case 'funding':
        return (
          <ScreenH_Funding
            discounts={discounts}
            setDiscounts={setDiscounts}
            onNext={() => goToScreen('grok')}
          />
        );
      case 'grok':
        return (
          <ScreenI_GrokAI
            grokInput={grokInput}
            setGrokInput={setGrokInput}
            onNext={() => goToScreen('requirements')}
          />
        );
      case 'requirements':
        return (
          <ScreenJ_Requirements
            requirements={requirements}
            setRequirements={setRequirements}
            onNext={() => goToScreen('safety')}
          />
        );
      case 'safety':
        return (
          <ScreenK_Safety
            compliance={compliance}
            setCompliance={setCompliance}
            onNext={() => goToScreen('proposal')}
          />
        );
      case 'proposal':
        return <ScreenL_Proposal onBack={onBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      {/* Header with College Blue/Indigo theme */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={handleBack}
          className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 hover:bg-white/40 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">🎓</div>
          <div>
            <h1 className="text-white text-2xl font-bold">College & University Groups</h1>
            <p className="text-white/90 text-sm">Academic Excellence Through Experience</p>
          </div>
        </div>

        {/* Progress Steps Indicator */}
        {currentScreen !== 'landing' && (
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-white/70 mb-2">
              <span>Planning Your Academic Tour</span>
            </div>
            <div className="flex gap-1">
              {['focus', 'department', 'outcomes', 'basics', 'areas', 'services', 'funding', 'grok', 'requirements', 'safety', 'proposal'].map((step, idx) => (
                <div
                  key={step}
                  className={`flex-1 h-1 rounded-full transition-all ${
                    currentScreen === step ? 'bg-white' : 
                    ['focus', 'department', 'outcomes', 'basics', 'areas', 'services', 'funding', 'grok', 'requirements', 'safety', 'proposal'].indexOf(currentScreen) > idx
                      ? 'bg-white/60'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ========================================
// SCREEN A: 🎓 COLLEGE GROUPS – LANDING
// ========================================
function ScreenA_Landing({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            College & University Groups
          </h2>
          
          {/* Editable Subtitle */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-3 mb-4">
            <p className="text-sm text-gray-700 font-medium">
              Structured academic tours for Undergraduate, Postgraduate & Faculty groups
            </p>
            <Badge className="bg-purple-100 text-purple-700 text-xs mt-2">
              [Admin: Edit Subtitle]
            </Badge>
          </div>
        </div>

        {/* Info Chips (Static) */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-900 mb-3">What We Offer:</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🏭', label: 'Industry Visits' },
              { icon: '🔬', label: 'Lab & Research Tours' },
              { icon: '⚙️', label: 'Technical Workshops' },
              { icon: '🎤', label: 'Conferences & Seminars' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border-2 border-blue-200 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-xs font-bold text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border-2 border-blue-200">
            <div className="text-3xl mb-2">💼</div>
            <p className="text-sm font-bold text-gray-800">Career Insights</p>
            <p className="text-xs text-gray-600 mt-1">Real-world exposure</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-5 border-2 border-purple-200">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm font-bold text-gray-800">Skill Building</p>
            <p className="text-xs text-gray-600 mt-1">Hands-on training</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
            <div className="text-3xl mb-2">🤝</div>
            <p className="text-sm font-bold text-gray-800">Networking</p>
            <p className="text-xs text-gray-600 mt-1">Industry connections</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-amber-200">
            <div className="text-3xl mb-2">📜</div>
            <p className="text-sm font-bold text-gray-800">Certification</p>
            <p className="text-xs text-gray-600 mt-1">Official credits</p>
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Start Academic Tour Planner →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN B: ACADEMIC FOCUS SELECTION
// ========================================
function ScreenB_AcademicFocus({
  selectedFocus,
  toggleFocus,
  onNext,
}: {
  selectedFocus: string[];
  toggleFocus: (id: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Select Program Focus</h2>
        <p className="text-sm text-gray-600 mb-1">Choose one or more program types (multi-select)</p>
        
        {/* Admin Info */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3 mt-3 mb-6">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800">
              All program details are <span className="font-bold">[Admin-Configured]</span>. 
              Select focus areas to receive relevant options.
            </p>
          </div>
        </div>

        {/* 4 Academic Focus Cards (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {academicFocusTypes.map((focus) => (
            <button
              key={focus.id}
              onClick={() => toggleFocus(focus.id)}
              className={`relative overflow-hidden rounded-2xl p-5 text-center transition-all ${
                selectedFocus.includes(focus.id)
                  ? 'ring-4 ring-blue-500 shadow-xl scale-105'
                  : 'shadow-md hover:shadow-lg'
              }`}
              style={{ backgroundColor: focus.bgColor }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${focus.gradient} opacity-20`} />
              <div className="relative z-10">
                <div className="text-5xl mb-3">{focus.icon}</div>
                <h3 className="font-bold text-sm text-gray-900 mb-2">{focus.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{focus.description}</p>
                {selectedFocus.includes(focus.id) && (
                  <Badge className="bg-blue-600 text-white text-xs">Selected ✓</Badge>
                )}
                
                {/* Placeholder Badge */}
                <div className="mt-2">
                  <Badge className="bg-gray-200 text-gray-700 text-[10px]">
                    {focus.placeholder}
                  </Badge>
                </div>
              </div>
            </button>
          ))}
        </div>

        <Button
          onClick={onNext}
          disabled={selectedFocus.length === 0}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Department Selection →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN C: DEPARTMENT & DISCIPLINE
// ========================================
function ScreenC_Department({
  department,
  setDepartment,
  onNext,
}: {
  department: string;
  setDepartment: (dept: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Department & Discipline</h2>
        <p className="text-sm text-gray-600 mb-6">Select your department to get relevant recommendations</p>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-purple-600" />
            <h3 className="text-sm font-bold text-gray-900">[Admin-Added Department List]</h3>
          </div>
          
          {/* Dropdown (Editable) */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:outline-none text-gray-900 text-sm mb-3"
          >
            <option value="">Choose your department...</option>
            <option value="engineering">[Admin-Added Department: Engineering]</option>
            <option value="science">[Admin-Added Department: Science]</option>
            <option value="management">[Admin-Added Department: Management]</option>
            <option value="arts">[Admin-Added Department: Arts & Humanities]</option>
            <option value="commerce">[Admin-Added Department: Commerce]</option>
            <option value="medicine">[Admin-Added Department: Medicine]</option>
            <option value="law">[Admin-Added Department: Law]</option>
            <option value="architecture">[Admin-Added Department: Architecture]</option>
          </select>

          {/* Helper Text */}
          <div className="bg-white rounded-xl p-3">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-700">This helps suggest relevant industries, labs, and workshops.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Display Selected Department */}
        {department && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-gray-900">Department Selected</h3>
            </div>
            <p className="text-sm text-gray-700">
              You'll receive recommendations for <span className="font-bold">{department}</span> programs
            </p>
          </div>
        )}

        <Button
          onClick={onNext}
          disabled={!department}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold disabled:opacity-50"
        >
          Continue to Learning Outcomes →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN D: LEARNING OUTCOMES
// ========================================
function ScreenD_LearningOutcomes({
  selectedOutcomes,
  toggleOutcome,
  onNext,
}: {
  selectedOutcomes: string[];
  toggleOutcome: (id: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Primary Goals</h2>
        <p className="text-sm text-gray-600 mb-6">Select your primary learning goals (multi-select)</p>

        <div className="space-y-3 mb-6">
          {learningOutcomes.map((outcome) => (
            <label
              key={outcome.id}
              className={`flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
                selectedOutcomes.includes(outcome.id)
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-50 hover:bg-blue-50 text-gray-800 border-2 border-gray-200'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedOutcomes.includes(outcome.id)}
                onChange={() => toggleOutcome(outcome.id)}
                className="w-5 h-5 mt-0.5 flex-shrink-0 rounded"
              />
              <span className="text-3xl flex-shrink-0">{outcome.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-bold">{outcome.label}</p>
              </div>
              {selectedOutcomes.includes(outcome.id) && (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              )}
            </label>
          ))}
        </div>

        {/* Selected Summary */}
        {selectedOutcomes.length > 0 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-green-800">
              <span className="font-bold">{selectedOutcomes.length} outcome(s) selected</span> — 
              Your itinerary will be optimized for these goals
            </p>
          </div>
        )}

        <Button
          onClick={onNext}
          disabled={selectedOutcomes.length === 0}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold disabled:opacity-50"
        >
          Continue to Trip Basics →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN E: TRIP BASICS
// ========================================
function ScreenE_TripBasics({
  tripBasics,
  setTripBasics,
  onNext,
}: {
  tripBasics: any;
  setTripBasics: (data: any) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Trip Parameters</h2>
        <p className="text-sm text-gray-600 mb-6">Set duration and budget preferences</p>

        <div className="space-y-5">
          {/* Duration Selection */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              Duration
            </h3>
            
            <div className="space-y-2">
              {[
                { value: '2-3', label: '2–3 days', subLabel: 'Local tours' },
                { value: '4-5', label: '4–5 days', subLabel: 'Regional exploration' },
                { value: '6-7', label: '6–7 days', subLabel: 'Extended programs' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    tripBasics.duration === option.value
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white hover:bg-blue-100 border-2 border-blue-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="duration"
                    value={option.value}
                    checked={tripBasics.duration === option.value}
                    onChange={(e) => setTripBasics({ ...tripBasics, duration: e.target.value })}
                    className="w-4 h-4"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold">{option.label}</p>
                    <p className={`text-xs ${tripBasics.duration === option.value ? 'text-white/80' : 'text-gray-500'}`}>
                      {option.subLabel}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Budget Band Selection */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-purple-600" />
              Budget Band
            </h3>
            
            <div className="space-y-2">
              {[
                { value: 'budget', label: 'Budget', icon: '💰', desc: 'Cost-effective options' },
                { value: 'standard', label: 'Standard', icon: '💼', desc: 'Balanced comfort & value' },
                { value: 'premium', label: 'Premium', icon: '✨', desc: 'Enhanced facilities' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    tripBasics.budgetBand === option.value
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-white hover:bg-purple-100 border-2 border-purple-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="budgetBand"
                    value={option.value}
                    checked={tripBasics.budgetBand === option.value}
                    onChange={(e) => setTripBasics({ ...tripBasics, budgetBand: e.target.value })}
                    className="w-4 h-4"
                  />
                  <span className="text-2xl">{option.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{option.label}</p>
                    <p className={`text-xs ${tripBasics.budgetBand === option.value ? 'text-white/80' : 'text-gray-500'}`}>
                      {option.desc}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          disabled={!tripBasics.duration || !tripBasics.budgetBand}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold mt-6 disabled:opacity-50"
        >
          Continue to Focus Areas →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN F: FOCUS AREAS (WHAT TO INCLUDE)
// ========================================
function ScreenF_FocusAreas({
  focusAreas,
  toggleFocusArea,
  onNext,
}: {
  focusAreas: string[];
  toggleFocusArea: (area: string) => void;
  onNext: () => void;
}) {
  const areas = [
    { id: 'industry-visits', label: 'Industry Visits', icon: '🏭' },
    { id: 'lab-tours', label: 'Lab Tours', icon: '🔬' },
    { id: 'workshops', label: 'Workshops', icon: '💻' },
    { id: 'seminars', label: 'Seminars', icon: '🎤' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">What to Include?</h2>
        <p className="text-sm text-gray-600 mb-6">Select focus areas for your itinerary (multi-select)</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => toggleFocusArea(area.id)}
              className={`p-5 rounded-2xl transition-all ${
                focusAreas.includes(area.id)
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg ring-2 ring-blue-400'
                  : 'bg-gray-50 hover:bg-blue-50 text-gray-700 border-2 border-gray-200'
              }`}
            >
              <div className="text-4xl mb-2">{area.icon}</div>
              <p className="text-sm font-bold">{area.label}</p>
              {focusAreas.includes(area.id) && (
                <CheckCircle className="w-4 h-4 mt-2 mx-auto" />
              )}
            </button>
          ))}
        </div>

        {focusAreas.length > 0 && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3 mb-6">
            <p className="text-xs text-blue-800">
              <span className="font-bold">{focusAreas.length} area(s) selected</span> — 
              Your itinerary will include these components
            </p>
          </div>
        )}

        <Button
          onClick={onNext}
          disabled={focusAreas.length === 0}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold disabled:opacity-50"
        >
          Continue to Services →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN G: COLLEGE-FRIENDLY SERVICES
// ========================================
function ScreenG_CollegeServices({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">College-Friendly Services</h2>
        <p className="text-sm text-gray-600 mb-1">Comprehensive support for institutional tours</p>
        
        {/* Admin Notice */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3 mt-3 mb-6">
          <div className="flex items-start gap-2">
            <Settings className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800">
              All services are <span className="font-bold">[Admin-Managed]</span> and included based on your program type
            </p>
          </div>
        </div>

        {/* Static Checklist (Non-interactive) */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border-2 border-blue-300">
          <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-600" />
            What's Included:
          </h3>
          
          <div className="space-y-3">
            {collegeServices.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{service.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-800 flex-1">{service.label}</p>
                <Badge className="bg-gray-200 text-gray-700 text-xs">
                  [Admin-Managed]
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-purple-900 mb-1">Full Institutional Support</p>
              <p className="text-xs text-purple-700">
                All documentation, permissions, and coordination are handled by our academic tours team
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold"
        >
          Continue to Funding Options →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN H: DISCOUNTS & FUNDING
// ========================================
function ScreenH_Funding({
  discounts,
  setDiscounts,
  onNext,
}: {
  discounts: any;
  setDiscounts: (data: any) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Funding & Concessions</h2>
        <p className="text-sm text-gray-600 mb-6">Optional financial support options</p>

        <div className="space-y-3 mb-6">
          <label className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer">
            <input
              type="checkbox"
              checked={discounts.transportConcessions}
              onChange={(e) => setDiscounts({ ...discounts, transportConcessions: e.target.checked })}
              className="w-5 h-5 text-green-600 rounded mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Bus className="w-4 h-4 text-green-600" />
                Transport Concessions (Railway/State Bus)
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Student group discounts for rail, bus, or chartered transport
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer">
            <input
              type="checkbox"
              checked={discounts.entryDiscounts}
              onChange={(e) => setDiscounts({ ...discounts, entryDiscounts: e.target.checked })}
              className="w-5 h-5 text-blue-600 rounded mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                Museum/Entry Fee Discounts
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Reduced rates for museums, labs, and facilities
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 rounded-xl bg-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer">
            <input
              type="checkbox"
              checked={discounts.departmentFunding}
              onChange={(e) => setDiscounts({ ...discounts, departmentFunding: e.target.checked })}
              className="w-5 h-5 text-purple-600 rounded mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-600" />
                Department Funding Available
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Use college/university department grants or subsidies
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer">
            <input
              type="checkbox"
              checked={discounts.csrSponsored}
              onChange={(e) => setDiscounts({ ...discounts, csrSponsored: e.target.checked })}
              className="w-5 h-5 text-orange-600 rounded mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                Seek CSR / Industry Sponsorship
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Corporate or NGO sponsorship opportunities
              </p>
            </div>
          </label>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold"
        >
          Continue to AI Tour Builder →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN I: 🤖 GROK AI – ACADEMIC TOUR BUILDER
// ========================================
function ScreenI_GrokAI({
  grokInput,
  setGrokInput,
  onNext,
}: {
  grokInput: any;
  setGrokInput: (data: any) => void;
  onNext: () => void;
}) {
  const [showAIResult, setShowAIResult] = useState(false);

  const handleGenerateItinerary = () => {
    setShowAIResult(true);
    toast.success('AI is generating your academic tour itinerary...');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        {/* AI Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-5 mb-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8" />
            <div>
              <h2 className="text-xl font-bold">Grok AI – Academic Tour Builder</h2>
              <p className="text-sm opacity-90">Smart itinerary suggestions powered by AI</p>
            </div>
          </div>
        </div>

        {!showAIResult ? (
          <>
            <p className="text-sm text-gray-600 mb-6">
              Answer a few questions, and Grok will design a custom academic tour itinerary
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Department Mix
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Engineering + Management students"
                  value={grokInput.departmentMix}
                  onChange={(e) => setGrokInput({ ...grokInput, departmentMix: e.target.value })}
                  className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Primary Learning Goals
                </label>
                <textarea
                  placeholder="e.g., Industry exposure, skill development, networking"
                  value={grokInput.learningGoals}
                  onChange={(e) => setGrokInput({ ...grokInput, learningGoals: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-sm resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Budget Range (Optional)
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Budget / Standard / Premium"
                  value={grokInput.budgetRange}
                  onChange={(e) => setGrokInput({ ...grokInput, budgetRange: e.target.value })}
                  className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Preferred Regions (Generic)
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Metro cities, Industrial zones, Tech hubs"
                  value={grokInput.preferredRegions}
                  onChange={(e) => setGrokInput({ ...grokInput, preferredRegions: e.target.value })}
                  className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
                />
              </div>
            </div>

            <Button
              onClick={handleGenerateItinerary}
              disabled={!grokInput.departmentMix || !grokInput.learningGoals}
              className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Ask Grok to Design My Academic Tour
            </Button>
          </>
        ) : (
          <>
            {/* AI-Generated Itinerary Output */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-5 mb-6 border-2 border-purple-300">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-gray-900">AI-Generated Academic Itinerary</h3>
              </div>
              
              <div className="bg-white rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-700 mb-4">
                  Based on your inputs, here's a suggested 3-day academic tour:
                </p>
                
                {/* Sample AI Output */}
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-xs font-bold text-gray-900">Day 1: Industry Exposure</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Morning: [Admin-Added Manufacturing Plant Visit]<br />
                      Afternoon: [Admin-Added Corporate Office Tour]<br />
                      Evening: Networking session with industry professionals
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-xs font-bold text-gray-900">Day 2: Technical Skills</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Morning: [Admin-Added Workshop: Advanced Tools]<br />
                      Afternoon: [Admin-Added Lab Tour: R&D Facility]<br />
                      Evening: Certificate distribution
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-xs font-bold text-gray-900">Day 3: Knowledge Exchange</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Morning: [Admin-Added Conference: Industry Trends]<br />
                      Afternoon: Q&A with experts, feedback session<br />
                      Evening: Return with learning materials
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800">
                    This is a <span className="font-bold">suggested itinerary</span>. 
                    All locations and programs are <span className="font-bold">[Admin-Configured]</span>
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={onNext}
              className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold"
            >
              Continue with This Itinerary →
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

// ========================================
// SCREEN J: DETAILED REQUIREMENTS (BOOKING-READY)
// ========================================
function ScreenJ_Requirements({
  requirements,
  setRequirements,
  onNext,
}: {
  requirements: any;
  setRequirements: (data: any) => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Logistics Details</h2>
        <p className="text-sm text-gray-600 mb-6">Complete booking-ready information</p>

        <div className="space-y-4">
          {/* Group Size */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Student Count
              </label>
              <Input
                type="number"
                placeholder="e.g., 50"
                value={requirements.studentCount}
                onChange={(e) => setRequirements({ ...requirements, studentCount: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Faculty Count
              </label>
              <Input
                type="number"
                placeholder="e.g., 4"
                value={requirements.facultyCount}
                onChange={(e) => setRequirements({ ...requirements, facultyCount: e.target.value })}
                className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Travel Dates */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Primary Travel Dates
            </label>
            <Input
              type="text"
              placeholder="e.g., March 15-18, 2026"
              value={requirements.travelDates}
              onChange={(e) => setRequirements({ ...requirements, travelDates: e.target.value })}
              className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Alternate Dates (Optional)
            </label>
            <Input
              type="text"
              placeholder="e.g., March 22-25, 2026"
              value={requirements.alternateDates}
              onChange={(e) => setRequirements({ ...requirements, alternateDates: e.target.value })}
              className="px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500"
            />
          </div>

          {/* Preferences */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Transport Preference
            </label>
            <select
              value={requirements.transport}
              onChange={(e) => setRequirements({ ...requirements, transport: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-sm"
            >
              <option value="">Select transport...</option>
              <option value="bus">Chartered AC Bus</option>
              <option value="train">Train (Group Booking)</option>
              <option value="flight">Flight (if long distance)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Stay Preference
            </label>
            <select
              value={requirements.stay}
              onChange={(e) => setRequirements({ ...requirements, stay: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-sm"
            >
              <option value="">Select accommodation...</option>
              <option value="hostel">Hostel / Guest House</option>
              <option value="hotel-budget">Budget Hotel</option>
              <option value="hotel-standard">Standard Hotel</option>
              <option value="hotel-premium">Premium Hotel</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Meal Preference
            </label>
            <select
              value={requirements.meals}
              onChange={(e) => setRequirements({ ...requirements, meals: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-sm"
            >
              <option value="">Select meal plan...</option>
              <option value="breakfast">Breakfast only</option>
              <option value="half-board">Breakfast + Dinner</option>
              <option value="full-board">All meals (Breakfast, Lunch, Dinner)</option>
            </select>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">
              Special Requirements (Optional)
            </label>
            <textarea
              placeholder="Dietary restrictions, accessibility needs, etc."
              value={requirements.specialRequirements}
              onChange={(e) => setRequirements({ ...requirements, specialRequirements: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-sm resize-none"
              rows={3}
            />
          </div>
        </div>

        <Button
          onClick={onNext}
          disabled={!requirements.studentCount || !requirements.facultyCount || !requirements.travelDates}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold mt-6 disabled:opacity-50"
        >
          Continue to Safety & Compliance →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN K: SAFETY & COMPLIANCE (MANDATORY)
// ========================================
function ScreenK_Safety({
  compliance,
  setCompliance,
  onNext,
}: {
  compliance: any;
  setCompliance: (data: any) => void;
  onNext: () => void;
}) {
  const allMandatoryChecked = 
    compliance.facultyRatio &&
    compliance.permissionLetters &&
    compliance.idVerification &&
    compliance.safetyBriefing &&
    compliance.medicalReadiness;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Safety Protocols</h2>
        <p className="text-sm text-gray-600 mb-1">Mandatory requirements for institutional tours</p>
        
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3 mt-3 mb-6">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-800">
              All items below are <span className="font-bold">mandatory</span> for college/university group tours
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <label className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all ${
            compliance.facultyRatio
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-red-50 border-2 border-red-200'
          }`}>
            <input
              type="checkbox"
              checked={compliance.facultyRatio}
              onChange={(e) => setCompliance({ ...compliance, facultyRatio: e.target.checked })}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold flex items-center gap-2">
                <Users className="w-4 h-4" />
                Faculty–Student Ratio
              </p>
              <p className={`text-xs mt-1 ${compliance.facultyRatio ? 'text-white/90' : 'text-gray-600'}`}>
                Minimum 1 faculty per 15 students
              </p>
            </div>
            {!compliance.facultyRatio && (
              <Badge className="bg-red-600 text-white text-xs">Required</Badge>
            )}
          </label>

          <label className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all ${
            compliance.permissionLetters
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-red-50 border-2 border-red-200'
          }`}>
            <input
              type="checkbox"
              checked={compliance.permissionLetters}
              onChange={(e) => setCompliance({ ...compliance, permissionLetters: e.target.checked })}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Permission Letters
              </p>
              <p className={`text-xs mt-1 ${compliance.permissionLetters ? 'text-white/90' : 'text-gray-600'}`}>
                Institutional approval and parental consent (if under 18)
              </p>
            </div>
            {!compliance.permissionLetters && (
              <Badge className="bg-red-600 text-white text-xs">Required</Badge>
            )}
          </label>

          <label className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all ${
            compliance.idVerification
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-red-50 border-2 border-red-200'
          }`}>
            <input
              type="checkbox"
              checked={compliance.idVerification}
              onChange={(e) => setCompliance({ ...compliance, idVerification: e.target.checked })}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold flex items-center gap-2">
                <Award className="w-4 h-4" />
                ID Verification
              </p>
              <p className={`text-xs mt-1 ${compliance.idVerification ? 'text-white/90' : 'text-gray-600'}`}>
                Student ID cards and attendance tracking
              </p>
            </div>
            {!compliance.idVerification && (
              <Badge className="bg-red-600 text-white text-xs">Required</Badge>
            )}
          </label>

          <label className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all ${
            compliance.safetyBriefing
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-red-50 border-2 border-red-200'
          }`}>
            <input
              type="checkbox"
              checked={compliance.safetyBriefing}
              onChange={(e) => setCompliance({ ...compliance, safetyBriefing: e.target.checked })}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Safety Briefing
              </p>
              <p className={`text-xs mt-1 ${compliance.safetyBriefing ? 'text-white/90' : 'text-gray-600'}`}>
                Pre-departure safety instructions and guidelines
              </p>
            </div>
            {!compliance.safetyBriefing && (
              <Badge className="bg-red-600 text-white text-xs">Required</Badge>
            )}
          </label>

          <label className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all ${
            compliance.medicalReadiness
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-red-50 border-2 border-red-200'
          }`}>
            <input
              type="checkbox"
              checked={compliance.medicalReadiness}
              onChange={(e) => setCompliance({ ...compliance, medicalReadiness: e.target.checked })}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-sm font-bold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Emergency & Medical Readiness
              </p>
              <p className={`text-xs mt-1 ${compliance.medicalReadiness ? 'text-white/90' : 'text-gray-600'}`}>
                First aid kit, emergency contacts, medical declarations
              </p>
            </div>
            {!compliance.medicalReadiness && (
              <Badge className="bg-red-600 text-white text-xs">Required</Badge>
            )}
          </label>
        </div>

        {allMandatoryChecked && (
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm font-bold text-green-800">
                All safety requirements confirmed ✓
              </p>
            </div>
          </div>
        )}

        <Button
          onClick={onNext}
          disabled={!allMandatoryChecked}
          className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold disabled:opacity-50"
        >
          Generate Proposal →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// SCREEN L: REVIEW & PROPOSAL GENERATION
// ========================================
function ScreenL_Proposal({ onBack }: { onBack: () => void }) {
  const [proposalGenerated, setProposalGenerated] = useState(false);

  const handleGenerateProposal = () => {
    setProposalGenerated(true);
    toast.success('Academic tour proposal generated successfully!');
  };

  const handleDownloadPDF = () => {
    toast.success('Downloading PDF proposal...');
  };

  const handleShareAdmin = () => {
    toast.success('Proposal shared with administration!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Academic Proposal Ready</h2>
        <p className="text-sm text-gray-600 mb-6">Your academic tour is ready for institutional approval</p>

        {!proposalGenerated ? (
          <>
            {/* Summary Card */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-5 mb-6 border-2 border-blue-300">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Tour Summary
              </h3>
              <div className="bg-white rounded-xl p-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-gray-600">Focus</p>
                    <p className="font-semibold text-gray-900">Industry + Lab Tours</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Duration</p>
                    <p className="font-semibold text-gray-900">4-5 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Group Size</p>
                    <p className="font-semibold text-gray-900">50 students + 4 faculty</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Budget</p>
                    <p className="font-semibold text-gray-900">Standard</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleGenerateProposal}
              className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <FileCheck className="w-5 h-5 mr-2" />
              Generate Academic Proposal
            </Button>
          </>
        ) : (
          <>
            {/* Success State */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="text-center py-6 mb-6"
            >
              <CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proposal Generated!</h3>
              <p className="text-sm text-gray-600 mb-1">
                Ready for institutional approval
              </p>
              
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mt-4 mx-auto max-w-sm">
                <p className="text-xs text-green-800">
                  <span className="font-bold">Confirmation:</span> "Proposal generated. Ready for institutional approval."
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadPDF}
                className="w-full p-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:shadow-xl transition-all group"
              >
                <Download className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-lg">Download Proposal (PDF)</p>
                <p className="text-sm opacity-90 mt-1">Complete tour details and pricing</p>
              </button>

              <button
                onClick={handleShareAdmin}
                className="w-full p-5 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-all group"
              >
                <Mail className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-lg">Share with Administration</p>
                <p className="text-sm opacity-90 mt-1">Email to college/university office</p>
              </button>

              <Button
                onClick={onBack}
                className="w-full h-12 rounded-full bg-gray-800 text-white font-bold hover:bg-gray-900"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                Back to Educational Tourism
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
