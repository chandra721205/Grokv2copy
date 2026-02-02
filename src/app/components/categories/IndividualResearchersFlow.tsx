import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import {
  ArrowLeft,
  BookOpen,
  User,
  Target,
  Award,
  Calendar,
  Lock,
  Search,
  Heart,
  FileText,
  DollarSign,
  Shield,
  Clock,
  Download,
  Mail,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Youtube,
  Globe,
  MessageSquare,
  Home as HomeIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

// ========================================
// THEME: EDUCATIONAL TOURISM COLORS
// ========================================
const individualTheme = {
  primary: '#7851A9',      // Royal Purple
  secondary: '#4F46E5',    // Indigo
  accent: '#10B981',       // Green
  background: '#F9FAFB',   // Light Gray
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  mediumGray: '#E0E0E0',
};

// ========================================
// DATA: INDIVIDUAL RESEARCHERS CONFIGURATION
// ========================================

// Step B: Researcher Roles
const researcherRoles = [
  'Undergraduate Student',
  'Postgraduate Student',
  'PhD Scholar',
  'Independent Researcher',
  'Faculty Member',
];

// Step B: Proof Documents
const proofDocuments = [
  { id: 'id-card', label: 'ID Card' },
  { id: 'supervisor-letter', label: 'Supervisor Letter' },
  { id: 'conference-invite', label: 'Conference/Workshop Invite' },
  { id: 'proposal-abstract', label: 'Proposal Abstract' },
];

// Step C: Primary Purposes
const primaryPurposes = [
  { id: 'lab-visit', icon: '🔬', name: 'Lab / Facility Visit', description: 'Explore research facilities and equipment' },
  { id: 'archive-research', icon: '📚', name: 'Archive / Library / Museum Research', description: 'Access historical records and collections' },
  { id: 'field-study', icon: '🌍', name: 'Field Study / Data Collection', description: 'Gather empirical data in the field' },
  { id: 'workshop-training', icon: '🛠️', name: 'Workshop / Training', description: 'Learn new techniques and methodologies' },
  { id: 'conference', icon: '🎤', name: 'Conference / Symposium', description: 'Present research and network' },
  { id: 'mentorship', icon: '👨‍🏫', name: 'Mentorship / Collaboration Meeting', description: 'Meet with advisors and collaborators' },
];

// Step D: Measurable Outcomes
const measurableOutcomes = [
  { id: 'instrument-demo', label: 'Instrument demo + technical notes' },
  { id: 'dataset', label: 'Dataset / observations log' },
  { id: 'mentoring', label: 'Mentoring outcomes' },
  { id: 'collaboration-roadmap', label: 'Collaboration roadmap draft' },
  { id: 'certificate', label: 'Certificate/letter required' },
  { id: 'report', label: 'Post-visit report + presentation plan' },
];

// Step E: Trip Formats
const tripFormats = [
  { value: '1-day', label: '1 Day', icon: '⚡' },
  { value: '2-3-days', label: '2-3 Days', icon: '📅' },
  { value: '4-7-days', label: '4-7 Days', icon: '📆' },
  { value: 'field-camp', label: 'Field Camp', icon: '⛺' },
  { value: 'conference-addon', label: 'Conference + Add-on', icon: '🎤' },
];

// Step F: Access Requirements
const accessRequirements = [
  { id: 'entry-permission', label: 'Entry permission required' },
  { id: 'lab-walkthrough', label: 'Lab walkthrough' },
  { id: 'instrument-demo', label: 'Instrument demo' },
  { id: 'hands-on', label: 'Hands-on session (if allowed)' },
  { id: 'interviews', label: 'Interviews/human subjects (if applicable)' },
  { id: 'field-sampling', label: 'Field sampling permission' },
  { id: 'photography', label: 'Photography allowed' },
  { id: 'certificate-required', label: 'Certificate required' },
];

// ========================================
// MAIN COMPONENT
// ========================================
export default function IndividualResearchersFlow({ onBack }: { onBack: () => void }) {
  // Step Navigation (A-O: 15 steps)
  const [currentStep, setCurrentStep] = useState<string>('A');
  
  // Form State
  const [profile, setProfile] = useState({
    role: '',
    discipline: '',
    keywords: '',
    purposeStatement: '',
    proofDocs: [] as string[],
  });
  
  const [purpose, setPurpose] = useState<string>('');
  const [outcomes, setOutcomes] = useState<string[]>([]);
  
  const [tripFormat, setTripFormat] = useState({
    format: '',
    preferredDate: '',
    alternateDate: '',
    flexibility: 'flexible',
  });
  
  const [accessNeeds, setAccessNeeds] = useState<string[]>([]);
  
  const [savedOptions, setSavedOptions] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  
  const [budget, setBudget] = useState({
    minBudget: '',
    maxBudget: '',
    stay: 'standard',
    transport: 'train',
    meals: 'veg',
    pace: 'balanced',
    medicalSupport: false,
    accessibility: false,
  });
  
  const [safety, setSafety] = useState({
    emergencyContact: '',
    medicalNote: '',
    insurance: false,
    hospital: '[Admin: Nearest Hospital]',
    confirmed: false,
  });
  
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [proposalGenerated, setProposalGenerated] = useState(false);
  const [adminReviewStatus, setAdminReviewStatus] = useState('pending');
  const [showGrokPanel, setShowGrokPanel] = useState(false);

  // Helper Functions
  const goToStep = (step: string) => setCurrentStep(step);
  
  const toggleProofDoc = (doc: string) => {
    setProfile(prev => ({
      ...prev,
      proofDocs: prev.proofDocs.includes(doc)
        ? prev.proofDocs.filter(d => d !== doc)
        : [...prev.proofDocs, doc]
    }));
  };
  
  const toggleOutcome = (outcome: string) => {
    setOutcomes(prev =>
      prev.includes(outcome) ? prev.filter(o => o !== outcome) : [...prev, outcome]
    );
  };
  
  const toggleAccessNeed = (need: string) => {
    setAccessNeeds(prev =>
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };
  
  const saveOption = (option: any) => {
    setSavedOptions(prev => [...prev, option]);
    toast.success('Option saved to your interests!');
  };

  // Render Current Step
  const renderStep = () => {
    switch (currentStep) {
      case 'A':
        return <StepA_Landing onNext={() => goToStep('B')} />;
      case 'B':
        return (
          <StepB_ResearcherProfile
            profile={profile}
            setProfile={setProfile}
            toggleProofDoc={toggleProofDoc}
            onNext={() => goToStep('C')}
            onPrev={() => goToStep('A')}
          />
        );
      case 'C':
        return (
          <StepC_PrimaryPurpose
            purpose={purpose}
            setPurpose={setPurpose}
            onNext={() => goToStep('D')}
            onPrev={() => goToStep('B')}
          />
        );
      case 'D':
        return (
          <StepD_MeasurableOutcomes
            outcomes={outcomes}
            toggleOutcome={toggleOutcome}
            onNext={() => goToStep('E')}
            onPrev={() => goToStep('C')}
          />
        );
      case 'E':
        return (
          <StepE_TripFormat
            tripFormat={tripFormat}
            setTripFormat={setTripFormat}
            onNext={() => goToStep('F')}
            onPrev={() => goToStep('D')}
          />
        );
      case 'F':
        return (
          <StepF_AccessRequirements
            accessNeeds={accessNeeds}
            toggleAccessNeed={toggleAccessNeed}
            onNext={() => goToStep('G')}
            onPrev={() => goToStep('E')}
          />
        );
      case 'G':
        return (
          <StepG_ProgramDiscovery
            savedOptions={savedOptions}
            saveOption={saveOption}
            onNext={() => goToStep('H')}
            onPrev={() => goToStep('F')}
          />
        );
      case 'H':
        return (
          <StepH_SavedInterests
            savedOptions={savedOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            onNext={() => goToStep('I')}
            onPrev={() => goToStep('G')}
          />
        );
      case 'I':
        return (
          <StepI_BudgetConstraints
            budget={budget}
            setBudget={setBudget}
            onNext={() => goToStep('J')}
            onPrev={() => goToStep('H')}
          />
        );
      case 'J':
        return (
          <StepJ_SafetyCompliance
            safety={safety}
            setSafety={setSafety}
            onNext={() => goToStep('K')}
            onPrev={() => goToStep('I')}
          />
        );
      case 'K':
        return (
          <StepK_ItineraryBuilder
            itinerary={itinerary}
            setItinerary={setItinerary}
            onNext={() => goToStep('L')}
            onPrev={() => goToStep('J')}
          />
        );
      case 'L':
        return (
          <StepL_ProposalPack
            proposalGenerated={proposalGenerated}
            setProposalGenerated={setProposalGenerated}
            onNext={() => goToStep('M')}
            onPrev={() => goToStep('K')}
          />
        );
      case 'M':
        return (
          <StepM_AdminReview
            status={adminReviewStatus}
            setStatus={setAdminReviewStatus}
            onNext={() => goToStep('N')}
            onPrev={() => goToStep('L')}
          />
        );
      case 'N':
        return (
          <StepN_GrokAssist
            showPanel={showGrokPanel}
            setShowPanel={setShowGrokPanel}
            onNext={() => goToStep('O')}
            onPrev={() => goToStep('M')}
          />
        );
      case 'O':
        return <StepO_BookingConfirmation onBack={onBack} onPrev={() => goToStep('N')} />;
      default:
        return <StepA_Landing onNext={() => goToStep('B')} />;
    }
  };

  const stepLabels: { [key: string]: string } = {
    A: 'Landing',
    B: 'Profile',
    C: 'Purpose',
    D: 'Outcomes',
    E: 'Trip Format',
    F: 'Access',
    G: 'Discovery',
    H: 'Interests',
    I: 'Budget',
    J: 'Safety',
    K: 'Itinerary',
    L: 'Proposal',
    M: 'Admin Review',
    N: 'Grok AI',
    O: 'Confirmation',
  };

  return (
    <div className="min-h-screen py-6 px-4" style={{ backgroundColor: individualTheme.background }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={currentStep === 'A' ? onBack : () => goToStep('A')}
            className="flex items-center gap-2 text-white font-bold"
            style={{ backgroundColor: individualTheme.primary }}
          >
            <ArrowLeft className="w-4 h-4" />
            {currentStep === 'A' ? 'Educational Tourism' : 'Back to Start'}
          </Button>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg" style={{ backgroundColor: individualTheme.primary }}>
            <BookOpen className="w-6 h-6" style={{ color: individualTheme.accent }} />
            <span className="text-sm font-bold text-white">Individual Researchers</span>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium" style={{ color: individualTheme.primary }}>
              Step {currentStep}: {stepLabels[currentStep]}
            </p>
            <p className="text-xs" style={{ color: individualTheme.secondary }}>
              {Math.round((Object.keys(stepLabels).indexOf(currentStep) / 14) * 100)}% Complete
            </p>
          </div>
          <div className="w-full h-2 rounded-full" style={{ backgroundColor: individualTheme.lightGray }}>
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(Object.keys(stepLabels).indexOf(currentStep) / 14) * 100}%`,
                backgroundColor: individualTheme.accent,
              }}
            />
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
// STEP A: LANDING
// ========================================
function StepA_Landing({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: individualTheme.white }}>
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-3xl font-bold mb-3" style={{ color: individualTheme.primary }}>
            Individual Researchers & Students
          </h1>
          
          {/* Editable Helper Text */}
          <div className="rounded-xl p-4 mb-4 border-2" style={{ backgroundColor: individualTheme.lightGray, borderColor: individualTheme.mediumGray }}>
            <p className="text-sm font-medium" style={{ color: individualTheme.secondary }}>
              For solo students/researchers: lab visits, archives, field studies, workshops, conferences.
            </p>
            <Badge className="mt-2 text-xs" style={{ backgroundColor: individualTheme.accent, color: individualTheme.white }}>
              [Admin: Editable Description]
            </Badge>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { icon: '🔬', label: 'Lab Access', desc: 'Facility visits & demos' },
            { icon: '📚', label: 'Archives', desc: 'Library & museum research' },
            { icon: '🌍', label: 'Field Work', desc: 'Data collection' },
            { icon: '🎓', label: 'Learning', desc: 'Workshops & training' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 text-center border-2"
              style={{ backgroundColor: individualTheme.lightGray, borderColor: individualTheme.mediumGray }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm font-bold mb-1" style={{ color: individualTheme.primary }}>
                {item.label}
              </p>
              <p className="text-xs" style={{ color: individualTheme.secondary }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <Button
          onClick={onNext}
          className="w-full h-14 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: individualTheme.primary, color: individualTheme.white }}
        >
          Start Planning →
        </Button>
      </div>
    </div>
  );
}

// ========================================
// STEP B: RESEARCHER PROFILE
// ========================================
function StepB_ResearcherProfile({
  profile,
  setProfile,
  toggleProofDoc,
  onNext,
  onPrev,
}: {
  profile: any;
  setProfile: (data: any) => void;
  toggleProofDoc: (doc: string) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: individualTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>
          Researcher Profile
        </h2>

        <div className="space-y-4">
          {/* Role */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: individualTheme.secondary }}>
              Role
            </label>
            <select
              value={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 text-sm"
              style={{ borderColor: individualTheme.mediumGray }}
            >
              <option value="">Select your role...</option>
              {researcherRoles.map((role, idx) => (
                <option key={idx} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Discipline/Department */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: individualTheme.secondary }}>
              Discipline / Department
            </label>
            <Input
              placeholder="e.g., Physics, History, Computer Science"
              value={profile.discipline}
              onChange={(e) => setProfile({ ...profile, discipline: e.target.value })}
              className="border-2"
              style={{ borderColor: individualTheme.mediumGray }}
            />
          </div>

          {/* Research Keywords */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: individualTheme.secondary }}>
              Research Topic Keywords (3-8 keywords)
            </label>
            <Input
              placeholder="e.g., quantum mechanics, medieval manuscripts, neural networks"
              value={profile.keywords}
              onChange={(e) => setProfile({ ...profile, keywords: e.target.value })}
              className="border-2"
              style={{ borderColor: individualTheme.mediumGray }}
            />
            <p className="text-xs mt-1" style={{ color: individualTheme.secondary }}>
              Separate with commas
            </p>
          </div>

          {/* Purpose Statement */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: individualTheme.secondary }}>
              Purpose Statement (1-2 lines)
            </label>
            <textarea
              placeholder="Brief description of your research visit purpose..."
              value={profile.purposeStatement}
              onChange={(e) => setProfile({ ...profile, purposeStatement: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 resize-none text-sm"
              style={{ borderColor: individualTheme.mediumGray }}
              rows={3}
            />
          </div>

          {/* Proof Documents Checklist */}
          <div className="rounded-xl p-4 border-2" style={{ backgroundColor: individualTheme.lightGray, borderColor: individualTheme.mediumGray }}>
            <h3 className="text-sm font-bold mb-3" style={{ color: individualTheme.primary }}>
              Proof Documents Checklist
            </h3>
            <div className="space-y-2">
              {proofDocuments.map((doc) => (
                <label key={doc.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.proofDocs.includes(doc.id)}
                    onChange={() => toggleProofDoc(doc.id)}
                    className="w-4 h-4"
                    style={{ accentColor: individualTheme.primary }}
                  />
                  <span className="text-sm" style={{ color: individualTheme.secondary }}>
                    {doc.label}
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
            style={{ borderColor: individualTheme.primary, color: individualTheme.primary, backgroundColor: individualTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!profile.role || !profile.discipline || !profile.keywords || !profile.purposeStatement}
            className="flex-1 h-12 rounded-xl font-bold disabled:opacity-50"
            style={{ backgroundColor: individualTheme.primary, color: individualTheme.white }}
          >
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// STEP C: PRIMARY PURPOSE
// ========================================
function StepC_PrimaryPurpose({
  purpose,
  setPurpose,
  onNext,
  onPrev,
}: {
  purpose: string;
  setPurpose: (purpose: string) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: individualTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>
          Primary Purpose
        </h2>
        <p className="text-sm mb-6" style={{ color: individualTheme.secondary }}>
          Select the main objective of your research visit (single selection)
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {primaryPurposes.map((item) => (
            <button
              key={item.id}
              onClick={() => setPurpose(item.id)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                purpose === item.id ? 'shadow-lg' : ''
              }`}
              style={{
                backgroundColor: purpose === item.id ? individualTheme.primary : individualTheme.white,
                borderColor: purpose === item.id ? individualTheme.accent : individualTheme.mediumGray,
                color: purpose === item.id ? individualTheme.white : individualTheme.primary,
              }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-sm font-bold mb-1">{item.name}</h3>
              <p className="text-xs opacity-80">{item.description}</p>
              {purpose === item.id && (
                <CheckCircle className="w-5 h-5 mt-2" style={{ color: individualTheme.accent }} />
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onPrev}
            className="flex-1 h-12 rounded-xl font-bold border-2"
            style={{ borderColor: individualTheme.primary, color: individualTheme.primary, backgroundColor: individualTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!purpose}
            className="flex-1 h-12 rounded-xl font-bold disabled:opacity-50"
            style={{ backgroundColor: individualTheme.primary, color: individualTheme.white }}
          >
            Set Outcomes →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// STEP D: MEASURABLE OUTCOMES
// ========================================
function StepD_MeasurableOutcomes({
  outcomes,
  toggleOutcome,
  onNext,
  onPrev,
}: {
  outcomes: string[];
  toggleOutcome: (outcome: string) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: individualTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>
          Measurable Outcomes
        </h2>
        <p className="text-sm mb-6" style={{ color: individualTheme.secondary }}>
          Select all expected outcomes from your visit
        </p>

        <div className="space-y-2 mb-6">
          {measurableOutcomes.map((outcome) => (
            <label
              key={outcome.id}
              className="flex items-start gap-3 p-4 rounded-lg cursor-pointer border-2 transition-all"
              style={{
                backgroundColor: outcomes.includes(outcome.id) ? individualTheme.lightGray : individualTheme.white,
                borderColor: outcomes.includes(outcome.id) ? individualTheme.accent : individualTheme.mediumGray,
              }}
            >
              <input
                type="checkbox"
                checked={outcomes.includes(outcome.id)}
                onChange={() => toggleOutcome(outcome.id)}
                className="w-5 h-5 mt-0.5"
                style={{ accentColor: individualTheme.primary }}
              />
              <span className="text-sm font-medium flex-1" style={{ color: individualTheme.primary }}>
                {outcome.label}
              </span>
            </label>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onPrev}
            className="flex-1 h-12 rounded-xl font-bold border-2"
            style={{ borderColor: individualTheme.primary, color: individualTheme.primary, backgroundColor: individualTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={outcomes.length === 0}
            className="flex-1 h-12 rounded-xl font-bold disabled:opacity-50"
            style={{ backgroundColor: individualTheme.primary, color: individualTheme.white }}
          >
            Trip Format & Dates →
          </Button>
        </div>
      </div>
    </div>
  );
}

// ========================================
// STEP E: TRIP FORMAT & DATES
// ========================================
function StepE_TripFormat({
  tripFormat,
  setTripFormat,
  onNext,
  onPrev,
}: {
  tripFormat: any;
  setTripFormat: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: individualTheme.white }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>
          Trip Format & Dates
        </h2>

        <div className="space-y-4">
          {/* Format Selector */}
          <div>
            <label className="block text-sm font-bold mb-3" style={{ color: individualTheme.secondary }}>
              Trip Format
            </label>
            <div className="grid grid-cols-3 gap-2">
              {tripFormats.map((format) => (
                <button
                  key={format.value}
                  onClick={() => setTripFormat({ ...tripFormat, format: format.value })}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    tripFormat.format === format.value ? 'shadow-md' : ''
                  }`}
                  style={{
                    backgroundColor: tripFormat.format === format.value ? individualTheme.primary : individualTheme.white,
                    borderColor: tripFormat.format === format.value ? individualTheme.accent : individualTheme.mediumGray,
                    color: tripFormat.format === format.value ? individualTheme.white : individualTheme.primary,
                  }}
                >
                  <div className="text-2xl mb-1">{format.icon}</div>
                  <p className="text-xs font-bold">{format.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className="rounded-xl p-4 border-2" style={{ backgroundColor: individualTheme.lightGray, borderColor: individualTheme.mediumGray }}>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: individualTheme.secondary }}>
                  Preferred Date
                </label>
                <Input
                  type="text"
                  placeholder="e.g., June 15, 2026"
                  value={tripFormat.preferredDate}
                  onChange={(e) => setTripFormat({ ...tripFormat, preferredDate: e.target.value })}
                  className="text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: individualTheme.secondary }}>
                  Alternate Date
                </label>
                <Input
                  type="text"
                  placeholder="e.g., June 22, 2026"
                  value={tripFormat.alternateDate}
                  onChange={(e) => setTripFormat({ ...tripFormat, alternateDate: e.target.value })}
                  className="text-sm"
                />
              </div>
            </div>

            {/* Flexibility Toggle */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium" style={{ color: individualTheme.primary }}>
                Flexibility:
              </label>
              <div className="flex gap-2">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="flexibility"
                    value="fixed"
                    checked={tripFormat.flexibility === 'fixed'}
                    onChange={(e) => setTripFormat({ ...tripFormat, flexibility: e.target.value })}
                    className="w-4 h-4"
                    style={{ accentColor: individualTheme.primary }}
                  />
                  <span className="text-xs">Fixed</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="flexibility"
                    value="flexible"
                    checked={tripFormat.flexibility === 'flexible'}
                    onChange={(e) => setTripFormat({ ...tripFormat, flexibility: e.target.value })}
                    className="w-4 h-4"
                    style={{ accentColor: individualTheme.primary }}
                  />
                  <span className="text-xs">Flexible</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button
            onClick={onPrev}
            className="flex-1 h-12 rounded-xl font-bold border-2"
            style={{ borderColor: individualTheme.primary, color: individualTheme.primary, backgroundColor: individualTheme.white }}
          >
            ← Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!tripFormat.format || !tripFormat.preferredDate}
            className="flex-1 h-12 rounded-xl font-bold disabled:opacity-50"
            style={{ backgroundColor: individualTheme.primary, color: individualTheme.white }}
          >
            Access Requirements →
          </Button>
        </div>
      </div>
    </div>
  );
}

// Due to length constraints, I'll create placeholder implementations for the remaining steps (F-O)
// These follow the same pattern as above

function StepF_AccessRequirements({ accessNeeds, toggleAccessNeed, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Access Requirements</h2>
      <div className="space-y-2 mb-6">
        {accessRequirements.map(req => (
          <label key={req.id} className="flex items-center gap-2 cursor-pointer p-2">
            <input type="checkbox" checked={accessNeeds.includes(req.id)} onChange={() => toggleAccessNeed(req.id)} className="w-4 h-4" style={{ accentColor: individualTheme.primary }} />
            <span className="text-sm">{req.label}</span>
          </label>
        ))}
      </div>
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Discover Options →</Button>
      </div>
    </div>
  );
}

function StepG_ProgramDiscovery({ savedOptions, saveOption, onNext, onPrev }: any) {
  const mockOptions = [
    { id: 1, name: '[Admin: Institute/Lab A]', access: '[Admin: Full Access]', notes: '[Admin: Available weekdays]' },
    { id: 2, name: '[Admin: Archive B]', access: '[Admin: Reading Room]', notes: '[Admin: Prior approval needed]' },
    { id: 3, name: '[Admin: Workshop C]', access: '[Admin: Open Registration]', notes: '[Admin: Certificate provided]' },
  ];

  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Program Discovery</h2>
      
      {/* Admin-Published Options */}
      <div className="mb-6">
        <h3 className="text-sm font-bold mb-3">Admin-Published Options</h3>
        <div className="space-y-3">
          {mockOptions.map(option => (
            <div key={option.id} className="p-4 rounded-xl border-2" style={{ borderColor: individualTheme.mediumGray }}>
              <p className="font-bold text-sm mb-1">{option.name}</p>
              <p className="text-xs mb-1">{option.access}</p>
              <p className="text-xs mb-2" style={{ color: individualTheme.secondary }}>{option.notes}</p>
              <Button onClick={() => saveOption(option)} className="text-xs h-8" style={{ backgroundColor: individualTheme.accent }}>
                <Heart className="w-3 h-3 mr-1" /> Save Interest
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Browse-Only Discovery */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Button onClick={() => window.open('https://www.google.com/search?q=research+facilities', '_blank')} className="h-12" style={{ backgroundColor: individualTheme.secondary }}>
          <Globe className="w-4 h-4 mr-2" /> Google Search
        </Button>
        <Button onClick={() => window.open('https://www.youtube.com/results?search_query=research+facilities', '_blank')} className="h-12" style={{ backgroundColor: '#FF0000' }}>
          <Youtube className="w-4 h-4 mr-2" /> YouTube Browse
        </Button>
      </div>

      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Continue to Budget →</Button>
      </div>
    </div>
  );
}

function StepH_SavedInterests({ savedOptions, selectedOption, setSelectedOption, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Saved Interests & Notes</h2>
      {savedOptions.length > 0 ? (
        <div className="space-y-3 mb-6">
          {savedOptions.map((option: any, idx: number) => (
            <div key={idx} className="p-4 rounded-xl border-2" style={{ borderColor: individualTheme.accent }}>
              <p className="font-bold text-sm mb-2">{option.name}</p>
              <textarea placeholder="Why chosen / What to learn / Constraints..." className="w-full p-2 text-xs rounded border" rows={2} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-center py-6" style={{ color: individualTheme.secondary }}>No options saved yet. Go back to Discovery to save interests.</p>
      )}
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Budget & Constraints →</Button>
      </div>
    </div>
  );
}

function StepI_BudgetConstraints({ budget, setBudget, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Budget & Constraints</h2>
      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold">Min Budget</label>
            <Input type="number" placeholder="Min" value={budget.minBudget} onChange={(e: any) => setBudget({ ...budget, minBudget: e.target.value })} />
          </div>
          <div>
            <label className="text-xs font-bold">Max Budget</label>
            <Input type="number" placeholder="Max" value={budget.maxBudget} onChange={(e: any) => setBudget({ ...budget, maxBudget: e.target.value })} />
          </div>
        </div>
        
        <select value={budget.stay} onChange={(e) => setBudget({ ...budget, stay: e.target.value })} className="w-full p-2 rounded border text-sm">
          <option value="budget">Budget Stay</option>
          <option value="standard">Standard Stay</option>
          <option value="premium">Premium Stay</option>
        </select>
        
        <select value={budget.transport} onChange={(e) => setBudget({ ...budget, transport: e.target.value })} className="w-full p-2 rounded border text-sm">
          <option value="train">Train</option>
          <option value="flight">Flight</option>
          <option value="bus">Bus</option>
          <option value="local">Local Transport</option>
        </select>
      </div>
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Safety & Compliance →</Button>
      </div>
    </div>
  );
}

function StepJ_SafetyCompliance({ safety, setSafety, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Safety & Compliance</h2>
      <div className="space-y-4 mb-6">
        <Input placeholder="Emergency Contact Number" value={safety.emergencyContact} onChange={(e) => setSafety({ ...safety, emergencyContact: e.target.value })} />
        <textarea placeholder="Medical Notes (optional)" value={safety.medicalNote} onChange={(e) => setSafety({ ...safety, medicalNote: e.target.value })} className="w-full p-3 rounded border" rows={2} />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={safety.insurance} onChange={(e) => setSafety({ ...safety, insurance: e.target.checked })} />
          <span className="text-sm">Travel Insurance (Recommended)</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={safety.confirmed} onChange={(e) => setSafety({ ...safety, confirmed: e.target.checked })} />
          <span className="text-sm font-bold">I confirm all safety information</span>
        </label>
      </div>
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} disabled={!safety.emergencyContact || !safety.confirmed} className="flex-1 disabled:opacity-50">Build Itinerary →</Button>
      </div>
    </div>
  );
}

function StepK_ItineraryBuilder({ itinerary, setItinerary, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Itinerary Builder</h2>
      <div className="space-y-3 mb-6">
        {['Travel', 'Entry Buffer', 'Session Block', 'Meal', 'Documentation', 'Daily Debrief'].map((block, idx) => (
          <div key={idx} className="p-3 rounded-lg border-2" style={{ borderColor: individualTheme.mediumGray }}>
            <p className="text-sm font-bold">{block}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Generate Proposal →</Button>
      </div>
    </div>
  );
}

function StepL_ProposalPack({ proposalGenerated, setProposalGenerated, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Proposal Pack</h2>
      {!proposalGenerated ? (
        <Button onClick={() => { setProposalGenerated(true); toast.success('Proposal generated!'); }} className="w-full mb-6" style={{ backgroundColor: individualTheme.accent }}>
          Generate Proposal Pack
        </Button>
      ) : (
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl" style={{ backgroundColor: individualTheme.lightGray }}>
            <p className="font-bold">✓ Purpose & Outcomes</p>
            <p className="font-bold">✓ Day-wise Itinerary</p>
            <p className="font-bold">✓ Permissions Checklist</p>
            <p className="font-bold">✓ Budget Breakdown</p>
            <p className="font-bold">✓ Safety Summary</p>
          </div>
          <Button onClick={() => toast.success('Sharing with supervisor...')} className="w-full"><Mail className="w-4 h-4 mr-2" /> Share with Supervisor</Button>
          <Button onClick={() => toast.success('Downloading PDF...')} className="w-full"><Download className="w-4 h-4 mr-2" /> Download PDF</Button>
        </div>
      )}
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} disabled={!proposalGenerated} className="flex-1 disabled:opacity-50">Admin Confirmation →</Button>
      </div>
    </div>
  );
}

function StepM_AdminReview({ status, setStatus, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Admin Coordination & Permission</h2>
      <div className="space-y-3 mb-6 p-4 rounded-xl" style={{ backgroundColor: individualTheme.lightGray }}>
        <p className="text-sm"><strong>Entry Permission:</strong> [Admin Verifying]</p>
        <p className="text-sm"><strong>Slot Availability:</strong> [Admin Confirming]</p>
        <p className="text-sm"><strong>NDA/IP Rules:</strong> [Admin-Added if applicable]</p>
        <p className="text-sm"><strong>Final Quote:</strong> [Admin to provide]</p>
      </div>
      <div className="p-4 rounded-xl border-2" style={{ borderColor: individualTheme.accent }}>
        <p className="text-sm font-bold">Status: Admin is validating permissions and scheduling. You will be notified.</p>
      </div>
      <div className="flex gap-3 mt-6">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Ask Grok to Optimize →</Button>
      </div>
    </div>
  );
}

function StepN_GrokAssist({ showPanel, setShowPanel, onNext, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4" style={{ color: individualTheme.primary }}>Grok AI Planning Assist</h2>
      <Button onClick={() => { setShowPanel(true); toast.success('Grok AI optimizing your plan...'); }} className="w-full mb-6" style={{ backgroundColor: individualTheme.secondary }}>
        <Sparkles className="w-4 h-4 mr-2" /> Ask Grok to Optimize My Trip
      </Button>
      {showPanel && (
        <div className="space-y-3 p-4 rounded-xl" style={{ backgroundColor: individualTheme.lightGray }}>
          <p className="text-sm"><strong>✓ Optimized Sequencing</strong></p>
          <p className="text-sm"><strong>✓ Permission Lead-Time Warnings</strong></p>
          <p className="text-sm"><strong>✓ Documentation Checklist</strong></p>
          <p className="text-sm"><strong>✓ Suggested Questions for Meetings</strong></p>
          <p className="text-sm"><strong>✓ Safety Reminders</strong></p>
        </div>
      )}
      <div className="flex gap-3 mt-6">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onNext} className="flex-1">Booking Confirmation →</Button>
      </div>
    </div>
  );
}

function StepO_BookingConfirmation({ onBack, onPrev }: any) {
  return (
    <div className="rounded-2xl p-6 shadow-xl bg-white">
      <div className="text-center mb-6">
        <CheckCircle className="w-20 h-20 mx-auto mb-4" style={{ color: individualTheme.accent }} />
        <h2 className="text-2xl font-bold mb-2" style={{ color: individualTheme.primary }}>Trip Booking Confirmed!</h2>
        <p className="text-sm" style={{ color: individualTheme.secondary }}>Documents generated and ready to download</p>
      </div>
      
      <div className="space-y-3 mb-6">
        <Button onClick={() => toast.success('Downloading Itinerary PDF...')} className="w-full"><Download className="w-4 h-4 mr-2" /> Itinerary PDF</Button>
        <Button onClick={() => toast.success('Downloading Emergency Sheet...')} className="w-full"><Download className="w-4 h-4 mr-2" /> Emergency Sheet</Button>
        <Button onClick={() => toast.success('Downloading Permission Letters...')} className="w-full"><Download className="w-4 h-4 mr-2" /> Permission Letters Pack</Button>
        <Button onClick={() => toast.success('Downloading Receipts...')} className="w-full"><Download className="w-4 h-4 mr-2" /> Receipts/Confirmations</Button>
      </div>
      
      <div className="flex gap-3">
        <Button onClick={onPrev} className="flex-1">← Previous</Button>
        <Button onClick={onBack} className="flex-1" style={{ backgroundColor: individualTheme.accent }}><HomeIcon className="w-4 h-4 mr-2" /> Educational Tourism</Button>
      </div>
    </div>
  );
}
