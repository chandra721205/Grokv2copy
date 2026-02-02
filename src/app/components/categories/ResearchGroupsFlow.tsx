import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import {
  ArrowLeft,
  Microscope,
  Users,
  FileText,
  Calendar,
  Shield,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Download,
  Upload,
  Info,
  ChevronDown,
  ChevronUp,
  Clock,
  Award,
  BookOpen,
  FileCheck,
  Building,
  Beaker,
  Lock,
  Handshake,
  Target,
  Sparkles,
  TrendingUp,
  BarChart3,
  Home as HomeIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

// ========================================
// THEME: RESEARCH BLUE + ACADEMIC PURPLE
// ========================================
const researchTheme = {
  // Primary colors from spec
  researchBlue: '#1E40AF',
  academicPurple: '#7C3AED',
  scienceGreen: '#10B981',
  ivoryWhite: '#F9FAFB',
  
  // Supporting colors
  deepBlue: '#003366',
  gold: '#FFD700',
  darkGold: '#B8860B',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  mediumGray: '#E0E0E0',
};

// ========================================
// DATA: 11-STEP RESEARCH PLANNING FLOW
// ========================================

// Step 1: Key Differentiators
const keyDifferentiators = [
  {
    icon: Lock,
    title: 'Exclusive Access',
    description: 'Restricted archives, advanced labs, research facilities',
  },
  {
    icon: Handshake,
    title: 'Academic Networking',
    description: 'Connect with leading researchers',
  },
  {
    icon: Target,
    title: 'Customized Itineraries',
    description: 'Tailored to research interests',
  },
  {
    icon: DollarSign,
    title: 'Funding Assistance',
    description: 'Grants and sponsorship guidance',
  },
];

// Step 2: Research Domains
const researchDomains = [
  'Particle Physics',
  'Biotechnology',
  'Archaeology',
  'Data Science',
  'Quantum Computing',
  'Climate Science',
  'Neuroscience',
  'Materials Science',
  'Other (Custom)',
];

// Step 2: Academic Levels
const academicLevels = [
  { id: 'graduate', label: 'Graduate Students', icon: '🎓' },
  { id: 'phd', label: 'PhD Candidates', icon: '🔬' },
  { id: 'postdoc', label: 'Post-docs', icon: '📚' },
  { id: 'faculty', label: 'Faculty', icon: '👨‍🏫' },
];

// Step 2: Primary Goals
const primaryGoals = [
  { id: 'data-collection', label: 'Data collection for thesis/dissertation' },
  { id: 'technique-training', label: 'Laboratory technique training' },
  { id: 'archival-research', label: 'Archival research access' },
  { id: 'conference-visits', label: 'Conference presentation + facility visits' },
  { id: 'collaboration', label: 'Collaborative project initiation' },
];

// Step 6: Special Access Requirements
const specialAccessRequirements = [
  { id: 'restricted-archive', label: 'Restricted archive access' },
  { id: 'specialized-equipment', label: 'Specialized equipment usage' },
  { id: 'sample-collection', label: 'Research sample collection' },
  { id: 'photography', label: 'Academic photography/videography' },
  { id: 'data-sharing', label: 'Data sharing agreements' },
];

// Step 6: Academic Integration
const academicIntegration = [
  { id: 'credit-transfer', label: 'Credit transfer arrangements' },
  { id: 'publication-collab', label: 'Publication collaboration' },
  { id: 'thesis-data', label: 'Thesis data collection approval' },
  { id: 'assessment-rubric', label: 'Assessment rubric development' },
];

// Step 8: Mandatory Requirements
const mandatoryRequirements = [
  { id: 'institutional-approval', label: 'Institutional approval letters' },
  { id: 'research-declaration', label: 'Research purpose declarations' },
  { id: 'nda-agreements', label: 'NDA agreements (proprietary facilities)' },
  { id: 'safety-training', label: 'Safety training certifications' },
  { id: 'equipment-insurance', label: 'Research equipment insurance' },
];

// ========================================
// MAIN COMPONENT
// ========================================
export default function ResearchGroupsFlow({ onBack }: { onBack: () => void }) {
  // Progress tracking (1-11 steps)
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Form State for all 11 steps
  const [step2Data, setStep2Data] = useState({
    researchDomain: '',
    academicLevels: [] as string[],
    primaryGoals: [] as string[],
  });
  
  const [step5Data, setStep5Data] = useState({
    graduateStudents: 0,
    facultyMembers: 0,
    researchAssistants: 0,
    researchInterests: '',
    avoidExams: false,
    semesterBreaks: false,
    conferenceAlignment: '',
  });
  
  const [step6Data, setStep6Data] = useState({
    specialAccess: [] as string[],
    academicIntegration: [] as string[],
  });
  
  const [step7Data, setStep7Data] = useState({
    baseCost: 1445000,
    customization: 85000,
    ministryGrant: 289000,
    collaborationFund: 100000,
    paymentMethod: 'installment',
  });
  
  const [step8Data, setStep8Data] = useState({
    mandatoryChecklist: [] as string[],
  });
  
  const [step11Data, setStep11Data] = useState({
    researchReport: 0,
    collaborationFramework: 0,
    publicationDraft: 0,
    conferencePresentation: 0,
    curriculumIntegration: 0,
    dataCollected: '',
    methodologiesLearned: '',
    academicConnections: '',
    publicationOpportunities: '',
    grantApplications: '',
  });
  
  const [showGrokModal, setShowGrokModal] = useState(false);
  const [showFundingModal, setShowFundingModal] = useState(false);
  const [showItineraryExpanded, setShowItineraryExpanded] = useState(false);

  // Helper Functions
  const goToStep = (step: number) => setCurrentStep(step);
  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 11));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  
  const toggleAcademicLevel = (level: string) => {
    setStep2Data(prev => ({
      ...prev,
      academicLevels: prev.academicLevels.includes(level)
        ? prev.academicLevels.filter(l => l !== level)
        : [...prev.academicLevels, level]
    }));
  };
  
  const togglePrimaryGoal = (goal: string) => {
    setStep2Data(prev => ({
      ...prev,
      primaryGoals: prev.primaryGoals.includes(goal)
        ? prev.primaryGoals.filter(g => g !== goal)
        : [...prev.primaryGoals, goal]
    }));
  };
  
  const toggleSpecialAccess = (access: string) => {
    setStep6Data(prev => ({
      ...prev,
      specialAccess: prev.specialAccess.includes(access)
        ? prev.specialAccess.filter(a => a !== access)
        : [...prev.specialAccess, access]
    }));
  };
  
  const toggleAcademicIntegration = (integration: string) => {
    setStep6Data(prev => ({
      ...prev,
      academicIntegration: prev.academicIntegration.includes(integration)
        ? prev.academicIntegration.filter(i => i !== integration)
        : [...prev.academicIntegration, integration]
    }));
  };
  
  const toggleMandatoryRequirement = (requirement: string) => {
    setStep8Data(prev => ({
      ...prev,
      mandatoryChecklist: prev.mandatoryChecklist.includes(requirement)
        ? prev.mandatoryChecklist.filter(r => r !== requirement)
        : [...prev.mandatoryChecklist, requirement]
    }));
  };

  // Render Current Step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_ProgramUnderstanding onNext={nextStep} />;
      case 2:
        return (
          <Step2_ResearchFocus
            data={step2Data}
            setData={setStep2Data}
            toggleAcademicLevel={toggleAcademicLevel}
            togglePrimaryGoal={togglePrimaryGoal}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <Step3_ItineraryTemplate
            showExpanded={showItineraryExpanded}
            setShowExpanded={setShowItineraryExpanded}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <Step4_FundingFinancial
            showModal={showFundingModal}
            setShowModal={setShowFundingModal}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <Step5_GroupConfiguration
            data={step5Data}
            setData={setStep5Data}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 6:
        return (
          <Step6_CustomizationRequests
            data={step6Data}
            toggleSpecialAccess={toggleSpecialAccess}
            toggleAcademicIntegration={toggleAcademicIntegration}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 7:
        return (
          <Step7_CostBreakdown
            data={step7Data}
            setData={setStep7Data}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 8:
        return (
          <Step8_SafetyCompliance
            data={step8Data}
            toggleMandatoryRequirement={toggleMandatoryRequirement}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 9:
        return (
          <Step9_GrokAIAssistant
            showModal={showGrokModal}
            setShowModal={setShowGrokModal}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 10:
        return <Step10_BookingProcess onNext={nextStep} onPrev={prevStep} />;
      case 11:
        return (
          <Step11_OutcomesTracker
            data={step11Data}
            setData={setStep11Data}
            onBack={onBack}
            onPrev={prevStep}
          />
        );
      default:
        return <Step1_ProgramUnderstanding onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen py-6 px-4" style={{ backgroundColor: researchTheme.ivoryWhite }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={currentStep === 1 ? onBack : prevStep}
            className="flex items-center gap-2 text-white font-bold"
            style={{ backgroundColor: researchTheme.researchBlue }}
          >
            <ArrowLeft className="w-4 h-4" />
            {currentStep === 1 ? 'Educational Tourism' : 'Previous Step'}
          </Button>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg" style={{ backgroundColor: researchTheme.researchBlue }}>
            <Microscope className="w-6 h-6" style={{ color: researchTheme.scienceGreen }} />
            <span className="text-sm font-bold text-white">Research Planning</span>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium" style={{ color: researchTheme.researchBlue }}>
              Research Planning: Step {currentStep} of 11
            </p>
            <p className="text-xs" style={{ color: researchTheme.academicPurple }}>
              {Math.round((currentStep / 11) * 100)}% Complete
            </p>
          </div>
          <div className="w-full h-2 rounded-full" style={{ backgroundColor: researchTheme.lightGray }}>
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(currentStep / 11) * 100}%`,
                backgroundColor: researchTheme.scienceGreen,
              }}
            />
          </div>
          
          {/* Step Dots */}
          <div className="flex justify-between mt-2">
            {Array.from({ length: 11 }, (_, i) => i + 1).map((step) => (
              <div
                key={step}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: step <= currentStep ? researchTheme.scienceGreen : researchTheme.mediumGray,
                }}
              />
            ))}
          </div>
        </div>

        {/* Screen Content with Animation */}
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
// STEP 1: PROGRAM UNDERSTANDING
// ========================================
function Step1_ProgramUnderstanding({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: researchTheme.white }}>
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: researchTheme.researchBlue }}>
            <Microscope className="w-14 h-14" style={{ color: researchTheme.scienceGreen }} />
          </div>
          <h1 className="text-3xl font-bold mb-3" style={{ color: researchTheme.researchBlue }}>
            🔬 Research Groups & Academic Delegations
          </h1>
          
          <div className="rounded-xl p-4 mb-4 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}>
            <p className="text-base font-medium" style={{ color: researchTheme.academicPurple }}>
              Exclusive academic tours for graduate students, PhD scholars, faculty, and research teams
            </p>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>
            Key Differentiators
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {keyDifferentiators.map((diff, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 border-2"
                style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: researchTheme.researchBlue }}>
                    <diff.icon className="w-6 h-6" style={{ color: researchTheme.scienceGreen }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold mb-1" style={{ color: researchTheme.researchBlue }}>
                      {diff.title}
                    </h3>
                    <p className="text-xs" style={{ color: researchTheme.academicPurple }}>
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onNext}
          className="w-full h-14 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}
        >
          Begin Research Planning →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP 2: RESEARCH FOCUS DEFINITION
// ========================================
function Step2_ResearchFocus({
  data,
  setData,
  toggleAcademicLevel,
  togglePrimaryGoal,
  onNext,
  onPrev,
}: {
  data: any;
  setData: (data: any) => void;
  toggleAcademicLevel: (level: string) => void;
  togglePrimaryGoal: (goal: string) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: researchTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>
          Define Your Research Focus
        </h2>

        <div className="space-y-5">
          {/* Research Domain */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: researchTheme.academicPurple }}>
              Research Domain
            </label>
            <select
              value={data.researchDomain}
              onChange={(e) => setData({ ...data, researchDomain: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 text-sm"
              style={{ borderColor: researchTheme.mediumGray }}
            >
              <option value="">Select your research domain...</option>
              {researchDomains.map((domain, idx) => (
                <option key={idx} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>

          {/* Academic Level */}
          <div>
            <label className="block text-sm font-bold mb-3" style={{ color: researchTheme.academicPurple }}>
              Academic Level (Multi-select)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {academicLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => toggleAcademicLevel(level.id)}
                  className="p-4 rounded-xl border-2 transition-all text-left"
                  style={{
                    backgroundColor: data.academicLevels.includes(level.id) ? researchTheme.researchBlue : researchTheme.white,
                    borderColor: data.academicLevels.includes(level.id) ? researchTheme.scienceGreen : researchTheme.mediumGray,
                    color: data.academicLevels.includes(level.id) ? researchTheme.white : researchTheme.researchBlue,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{level.icon}</span>
                    <span className="text-sm font-bold">{level.label}</span>
                  </div>
                  {data.academicLevels.includes(level.id) && (
                    <CheckCircle className="w-4 h-4 mt-2" style={{ color: researchTheme.scienceGreen }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Goals */}
          <div>
            <label className="block text-sm font-bold mb-3" style={{ color: researchTheme.academicPurple }}>
              Primary Goals (Select all that apply)
            </label>
            <div className="space-y-2">
              {primaryGoals.map((goal) => (
                <label
                  key={goal.id}
                  className="flex items-start gap-3 p-3 rounded-lg cursor-pointer border-2 transition-all"
                  style={{
                    backgroundColor: data.primaryGoals.includes(goal.id) ? researchTheme.ivoryWhite : researchTheme.white,
                    borderColor: data.primaryGoals.includes(goal.id) ? researchTheme.scienceGreen : researchTheme.mediumGray,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={data.primaryGoals.includes(goal.id)}
                    onChange={() => togglePrimaryGoal(goal.id)}
                    className="w-5 h-5 mt-0.5"
                    style={{ accentColor: researchTheme.researchBlue }}
                  />
                  <span className="text-sm font-medium flex-1" style={{ color: researchTheme.researchBlue }}>
                    {goal.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button
            onClick={onPrev}
            className="flex-1 h-12 rounded-xl font-bold border-2"
            style={{ borderColor: researchTheme.researchBlue, color: researchTheme.researchBlue, backgroundColor: researchTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!data.researchDomain || data.academicLevels.length === 0 || data.primaryGoals.length === 0}
            className="flex-1 h-12 rounded-xl font-bold disabled:opacity-50"
            style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// STEP 3: ITINERARY TEMPLATE
// ========================================
function Step3_ItineraryTemplate({
  showExpanded,
  setShowExpanded,
  onNext,
  onPrev,
}: {
  showExpanded: boolean;
  setShowExpanded: (show: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: researchTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>
          Week-Long Research Expedition Template
        </h2>

        <div className="space-y-4 mb-6">
          {/* Day 1 */}
          <div className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}>
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2" style={{ color: researchTheme.researchBlue }}>
                  Day 1: Arrival & Orientation
                </h3>
                <div className="space-y-1 text-sm" style={{ color: researchTheme.academicPurple }}>
                  <p>• <span className="font-medium">Morning:</span> Check-in & welcome</p>
                  <p>• <span className="font-medium">Afternoon:</span> Host institution briefing</p>
                  <p className="text-xs mt-2 font-bold" style={{ color: researchTheme.scienceGreen }}>
                    Value: Research environment orientation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}>
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2" style={{ color: researchTheme.researchBlue }}>
                  Day 2: Specialist Sessions
                </h3>
                <div className="space-y-1 text-sm" style={{ color: researchTheme.academicPurple }}>
                  <p>• <span className="font-medium">Morning:</span> Seminar with leading researcher</p>
                  <p>• <span className="font-medium">Afternoon:</span> Major facilities introduction</p>
                  <p className="text-xs mt-2 font-bold" style={{ color: researchTheme.scienceGreen }}>
                    Value: Theoretical + practical foundation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expand Button */}
          {!showExpanded && (
            <button
              onClick={() => setShowExpanded(true)}
              className="w-full p-4 rounded-xl border-2 transition-all hover:shadow-md"
              style={{ borderColor: researchTheme.researchBlue, color: researchTheme.researchBlue, backgroundColor: researchTheme.white }}
            >
              <div className="flex items-center justify-center gap-2 font-bold">
                <ChevronDown className="w-5 h-5" />
                <span>View Complete 7-Day Template</span>
              </div>
            </button>
          )}

          {/* Expanded Days 3-7 */}
          {showExpanded && (
            <>
              {[
                { day: 3, title: 'Hands-On Lab Work', morning: 'Equipment training', afternoon: 'Practical sessions', value: 'Technical skills' },
                { day: 4, title: 'Data Collection', morning: 'Field work / experiments', afternoon: 'Data gathering', value: 'Research material' },
                { day: 5, title: 'Analysis & Discussion', morning: 'Data analysis workshop', afternoon: 'Peer collaboration', value: 'Methodological insights' },
                { day: 6, title: 'Presentation Prep', morning: 'Results compilation', afternoon: 'Presentation rehearsal', value: 'Communication skills' },
                { day: 7, title: 'Wrap-Up & Departure', morning: 'Final presentations', afternoon: 'Feedback & certificates', value: 'Academic recognition' },
              ].map((dayInfo) => (
                <div key={dayInfo.day} className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}>
                      {dayInfo.day}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: researchTheme.researchBlue }}>
                        Day {dayInfo.day}: {dayInfo.title}
                      </h3>
                      <div className="space-y-1 text-sm" style={{ color: researchTheme.academicPurple }}>
                        <p>• <span className="font-medium">Morning:</span> {dayInfo.morning}</p>
                        <p>• <span className="font-medium">Afternoon:</span> {dayInfo.afternoon}</p>
                        <p className="text-xs mt-2 font-bold" style={{ color: researchTheme.scienceGreen }}>
                          Value: {dayInfo.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setShowExpanded(false)}
                className="w-full p-3 rounded-xl border-2 transition-all"
                style={{ borderColor: researchTheme.mediumGray, color: researchTheme.academicPurple, backgroundColor: researchTheme.white }}
              >
                <div className="flex items-center justify-center gap-2 text-sm font-medium">
                  <ChevronUp className="w-4 h-4" />
                  <span>Collapse Template</span>
                </div>
              </button>
            </>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onPrev}
            className="flex-1 h-12 rounded-xl font-bold border-2"
            style={{ borderColor: researchTheme.researchBlue, color: researchTheme.researchBlue, backgroundColor: researchTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            className="flex-1 h-12 rounded-xl font-bold"
            style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// STEP 4: FUNDING & FINANCIAL PLANNING
// ========================================
function Step4_FundingFinancial({
  showModal,
  setShowModal,
  onNext,
  onPrev,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: researchTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>
          Research Funding Opportunities
        </h2>

        <div className="space-y-4 mb-6">
          {/* Government Grants */}
          <div className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.scienceGreen }}>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: researchTheme.researchBlue }}>
              <Building className="w-5 h-5" />
              Government Grants
            </h3>
            <div className="space-y-2 text-sm" style={{ color: researchTheme.academicPurple }}>
              <p>• <span className="font-bold">Ministry of Education:</span> Up to 20% discount (10+ groups)</p>
              <p>• <span className="font-bold">NSF Sponsorship:</span> Accommodation coverage (2 faculty)</p>
            </div>
          </div>

          {/* Collaboration Funds */}
          <div className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.academicPurple }}>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: researchTheme.researchBlue }}>
              <Handshake className="w-5 h-5" />
              Collaboration Funds
            </h3>
            <div className="space-y-2 text-sm" style={{ color: researchTheme.academicPurple }}>
              <p>• Specialized department funds available</p>
              <p>• <span className="font-bold">500-word Statement of Purpose required</span></p>
            </div>
          </div>

          {/* Facility Discounts */}
          <div className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: researchTheme.researchBlue }}>
              <Award className="w-5 h-5" />
              Facility Discounts
            </h3>
            <div className="space-y-2 text-sm" style={{ color: researchTheme.academicPurple }}>
              <p>• Reduced entry fees for academic groups</p>
              <p>• Valid with institutional ID</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => {
              setShowModal(true);
              toast.success('Opening funding opportunities explorer...');
            }}
            className="p-4 rounded-xl font-bold transition-all hover:shadow-md"
            style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}
          >
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>Explore Funding Options</span>
            </div>
          </button>

          <button
            onClick={() => toast.success('Opening Grok AI SOP Assistant...')}
            className="p-4 rounded-xl font-bold border-2 transition-all hover:shadow-md"
            style={{ borderColor: researchTheme.academicPurple, color: researchTheme.academicPurple, backgroundColor: researchTheme.white }}
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Get Grok AI SOP Assistance</span>
            </div>
          </button>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onPrev}
            className="flex-1 h-12 rounded-xl font-bold border-2"
            style={{ borderColor: researchTheme.researchBlue, color: researchTheme.researchBlue, backgroundColor: researchTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            className="flex-1 h-12 rounded-xl font-bold"
            style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// STEP 5: GROUP CONFIGURATION
// ========================================
function Step5_GroupConfiguration({
  data,
  setData,
  onNext,
  onPrev,
}: {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: researchTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>
          Research Group Configuration
        </h2>

        <div className="space-y-5">
          {/* Group Composition */}
          <div className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}>
            <h3 className="text-sm font-bold mb-4" style={{ color: researchTheme.academicPurple }}>
              Group Composition
            </h3>
            
            <div className="space-y-4">
              {/* Graduate Students Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold" style={{ color: researchTheme.researchBlue }}>
                    Graduate Students
                  </label>
                  <span className="text-xs font-bold" style={{ color: researchTheme.scienceGreen }}>
                    {data.graduateStudents}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={data.graduateStudents}
                  onChange={(e) => setData({ ...data, graduateStudents: parseInt(e.target.value) })}
                  className="w-full"
                  style={{ accentColor: researchTheme.researchBlue }}
                />
              </div>

              {/* Faculty Members Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold" style={{ color: researchTheme.researchBlue }}>
                    Faculty Members
                  </label>
                  <span className="text-xs font-bold" style={{ color: researchTheme.scienceGreen }}>
                    {data.facultyMembers}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={data.facultyMembers}
                  onChange={(e) => setData({ ...data, facultyMembers: parseInt(e.target.value) })}
                  className="w-full"
                  style={{ accentColor: researchTheme.researchBlue }}
                />
              </div>

              {/* Research Assistants Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold" style={{ color: researchTheme.researchBlue }}>
                    Research Assistants
                  </label>
                  <span className="text-xs font-bold" style={{ color: researchTheme.scienceGreen }}>
                    {data.researchAssistants}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={data.researchAssistants}
                  onChange={(e) => setData({ ...data, researchAssistants: parseInt(e.target.value) })}
                  className="w-full"
                  style={{ accentColor: researchTheme.researchBlue }}
                />
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: researchTheme.white }}>
              <p className="text-sm font-bold" style={{ color: researchTheme.researchBlue }}>
                Total Group Size: {data.graduateStudents + data.facultyMembers + data.researchAssistants}
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: researchTheme.academicPurple }}>
              Specific Research Interests
            </label>
            <textarea
              value={data.researchInterests}
              onChange={(e) => setData({ ...data, researchInterests: e.target.value })}
              placeholder="Describe your group's research focus in detail..."
              className="w-full px-4 py-3 rounded-xl border-2 resize-none text-sm"
              style={{ borderColor: researchTheme.mediumGray }}
              rows={4}
            />
          </div>

          {/* Timing Considerations */}
          <div className="rounded-xl p-5 border-2" style={{ backgroundColor: researchTheme.ivoryWhite, borderColor: researchTheme.mediumGray }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: researchTheme.academicPurple }}>
              Timing Considerations
            </h3>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.avoidExams}
                  onChange={(e) => setData({ ...data, avoidExams: e.target.checked })}
                  className="w-5 h-5"
                  style={{ accentColor: researchTheme.researchBlue }}
                />
                <span className="text-sm font-medium" style={{ color: researchTheme.researchBlue }}>
                  Avoid exam periods
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.semesterBreaks}
                  onChange={(e) => setData({ ...data, semesterBreaks: e.target.checked })}
                  className="w-5 h-5"
                  style={{ accentColor: researchTheme.researchBlue }}
                />
                <span className="text-sm font-medium" style={{ color: researchTheme.researchBlue }}>
                  Semester breaks preferred
                </span>
              </label>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: researchTheme.academicPurple }}>
                  Conference alignment
                </label>
                <Input
                  placeholder="e.g., International Physics Conference 2026"
                  value={data.conferenceAlignment}
                  onChange={(e) => setData({ ...data, conferenceAlignment: e.target.value })}
                  className="text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button
            onClick={onPrev}
            className="flex-1 h-12 rounded-xl font-bold border-2"
            style={{ borderColor: researchTheme.researchBlue, color: researchTheme.researchBlue, backgroundColor: researchTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={data.graduateStudents + data.facultyMembers + data.researchAssistants === 0 || !data.researchInterests}
            className="flex-1 h-12 rounded-xl font-bold disabled:opacity-50"
            style={{ backgroundColor: researchTheme.researchBlue, color: researchTheme.white }}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

// Due to length constraints, I'll continue with the remaining steps in the next part...
// Steps 6-11 will follow the same pattern with their specific content

// For now, let me add placeholder implementations to make the component complete:

function Step6_CustomizationRequests({ data, toggleSpecialAccess, toggleAcademicIntegration, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>Customization & Special Requests</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-sm font-bold mb-3" style={{ color: researchTheme.academicPurple }}>Special Access Requirements</h3>
          {specialAccessRequirements.map(req => (
            <label key={req.id} className="flex items-center gap-2 mb-2 cursor-pointer">
              <input type="checkbox" checked={data.specialAccess.includes(req.id)} onChange={() => toggleSpecialAccess(req.id)} className="w-4 h-4" style={{ accentColor: researchTheme.researchBlue }} />
              <span className="text-sm">{req.label}</span>
            </label>
          ))}
        </div>
        
        <div>
          <h3 className="text-sm font-bold mb-3" style={{ color: researchTheme.academicPurple }}>Academic Integration</h3>
          {academicIntegration.map(item => (
            <label key={item.id} className="flex items-center gap-2 mb-2 cursor-pointer">
              <input type="checkbox" checked={data.academicIntegration.includes(item.id)} onChange={() => toggleAcademicIntegration(item.id)} className="w-4 h-4" style={{ accentColor: researchTheme.researchBlue }} />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Continue →</Button>
      </div>
    </div>
  );
}

function Step7_CostBreakdown({ data, setData, onNext, onPrev }: any) {
  const total = data.baseCost + data.customization - data.ministryGrant - data.collaborationFund;
  const savings = data.ministryGrant + data.collaborationFund;
  
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>Research Tour Cost Breakdown</h2>
      
      <div className="space-y-3 mb-6 p-5 rounded-xl" style={{ backgroundColor: researchTheme.ivoryWhite }}>
        <div className="flex justify-between text-sm">
          <span>Base Cost (17 participants):</span>
          <span className="font-bold">₹14,45,000</span>
        </div>
        <div className="flex justify-between text-sm" style={{ color: researchTheme.scienceGreen }}>
          <span>+ Customization (Data Workshop):</span>
          <span className="font-bold">+₹85,000</span>
        </div>
        <div className="flex justify-between text-sm" style={{ color: researchTheme.academicPurple }}>
          <span>- Ministry Grant (20%):</span>
          <span className="font-bold">-₹2,89,000</span>
        </div>
        <div className="flex justify-between text-sm" style={{ color: researchTheme.academicPurple }}>
          <span>- Collaboration Fund:</span>
          <span className="font-bold">-₹1,00,000</span>
        </div>
        <div className="border-t-2 pt-3 flex justify-between text-lg font-bold" style={{ borderColor: researchTheme.mediumGray }}>
          <span>Total Payable:</span>
          <span style={{ color: researchTheme.researchBlue }}>₹11,41,000</span>
        </div>
        <div className="flex justify-between text-sm" style={{ color: researchTheme.scienceGreen }}>
          <span>Total Savings:</span>
          <span className="font-bold">₹3,89,000 (25%)</span>
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Continue →</Button>
      </div>
    </div>
  );
}

function Step8_SafetyCompliance({ data, toggleMandatoryRequirement, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>Safety & Compliance</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-bold mb-3" style={{ color: researchTheme.academicPurple }}>Mandatory Requirements (All Required)</h3>
        {mandatoryRequirements.map(req => (
          <label key={req.id} className="flex items-center gap-2 mb-2 cursor-pointer">
            <input type="checkbox" checked={data.mandatoryChecklist.includes(req.id)} onChange={() => toggleMandatoryRequirement(req.id)} className="w-4 h-4" style={{ accentColor: researchTheme.researchBlue }} />
            <span className="text-sm">{req.label}</span>
          </label>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} disabled={data.mandatoryChecklist.length < mandatoryRequirements.length} className="flex-1 disabled:opacity-50">Continue →</Button>
      </div>
    </div>
  );
}

function Step9_GrokAIAssistant({ showModal, setShowModal, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>🤖 Grok AI Research Assistant</h2>
      
      <div className="space-y-3 mb-6">
        <p className="text-sm" style={{ color: researchTheme.academicPurple }}>Grok Can Help With:</p>
        <ul className="space-y-2 text-sm">
          <li>• Statement of Purpose drafting</li>
          <li>• Research itinerary optimization</li>
          <li>• Compliance checklists</li>
          <li>• Collaboration opportunity identification</li>
          <li>• Document preparation</li>
        </ul>
      </div>
      
      <Button onClick={() => toast.success('Auto-generating documents with Grok AI...')} className="w-full mb-6" style={{ backgroundColor: researchTheme.academicPurple }}>
        <Sparkles className="w-5 h-5 mr-2" />
        Auto-Generate with Grok
      </Button>
      
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Continue →</Button>
      </div>
    </div>
  );
}

function Step10_BookingProcess({ onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>Booking Process</h2>
      
      <div className="space-y-4 mb-6">
        {[
          { phase: 'Phase 1: Proposal & Customization', steps: ['Submit group details ✓', 'Receive customized itinerary ✓', 'Review and modify ✓', 'Finalize academic components [Current]'] },
          { phase: 'Phase 2: Funding & Approvals', steps: ['Apply for grants/sponsorships', 'Secure institutional approvals', 'Complete ethics compliance', 'Finalize payment method'] },
          { phase: 'Phase 3: Pre-Departure', steps: ['Research coordinator assignment', 'Visa documentation assistance', 'Pre-trip academic briefing', 'Facility access confirmations'] },
        ].map((phaseInfo, idx) => (
          <div key={idx} className="p-4 rounded-xl" style={{ backgroundColor: researchTheme.ivoryWhite }}>
            <h3 className="font-bold mb-2" style={{ color: researchTheme.researchBlue }}>{phaseInfo.phase}</h3>
            <ul className="space-y-1 text-sm">
              {phaseInfo.steps.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Continue →</Button>
      </div>
    </div>
  );
}

function Step11_OutcomesTracker({ data, setData, onBack, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: researchTheme.researchBlue }}>Post-Trip Outcomes Tracker</h2>
      
      <div className="space-y-4 mb-6">
        <h3 className="text-sm font-bold" style={{ color: researchTheme.academicPurple }}>Expected Academic Deliverables:</h3>
        {[
          { label: 'Research Report', key: 'researchReport' },
          { label: 'Collaboration Framework', key: 'collaborationFramework' },
          { label: 'Publication Draft', key: 'publicationDraft' },
          { label: 'Conference Presentation', key: 'conferencePresentation' },
          { label: 'Curriculum Integration', key: 'curriculumIntegration' },
        ].map(item => (
          <div key={item.key}>
            <p className="text-xs mb-1">{item.label}</p>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-full h-2 rounded" style={{ backgroundColor: i <= data[item.key] ? researchTheme.scienceGreen : researchTheme.lightGray }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onBack} className="flex-1" style={{ backgroundColor: researchTheme.scienceGreen }}>Complete Planning</Button>
      </div>
    </div>
  );
}
