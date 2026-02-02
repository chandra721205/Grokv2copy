import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Search, GraduationCap, Users, Microscope, BookOpen, 
  Globe, Youtube, Shield, Award, Lightbulb, UserCheck, FileText,
  AlertCircle, CheckCircle, Building, Briefcase, BookMarked, CheckSquare
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';
import { SchoolGroupsK12Flow } from '@/app/components/categories/SchoolGroupsK12Flow';
import { CollegeUniversityGroupsFlow } from '@/app/components/categories/CollegeUniversityGroupsFlow';
import ResearchGroupsFlow from '@/app/components/categories/ResearchGroupsFlow';
import IndividualResearchersEnhanced from '@/app/components/categories/IndividualResearchersEnhanced';

interface EducationalTourismHubProps {
  onBack: () => void;
}

// Updated color palette: Lavender, Light Blue, Royal Purple
const educationalColors = {
  lavender: '#E6E6FA',
  lightBlue: '#ADD8E6',
  royalPurple: '#7851A9',
  softPurple: '#9370DB',
  paleBlue: '#B0E0E6',
};

// Educational sub-categories matching PDF structure
const educationalPathways = [
  {
    id: 'school-groups',
    icon: '🎒',
    name: 'School Groups (K-12)',
    subtitle: 'For school students from Classes 1 to 12',
    description: 'Field trips, safety-first history & science tours',
    gradient: 'from-purple-400 via-purple-300 to-blue-200',
    bgColor: educationalColors.lavender,
    type: 'bulk',
  },
  {
    id: 'college-university',
    icon: '🎓',
    name: 'College & University Groups',
    subtitle: 'Structured academic tours for Undergraduate, Postgraduate & Faculty groups',
    description: 'Industrial visits, career insights, technical workshops',
    gradient: 'from-blue-300 via-indigo-300 to-purple-300',
    bgColor: educationalColors.lightBlue,
    type: 'bulk',
  },
  {
    id: 'research-groups',
    icon: '🔬',
    name: 'Research Groups & Academic Delegations',
    subtitle: 'Deep-dive visits for PhD scholars, Faculty Delegations & Lab Collaborations',
    gradient: 'from-purple-500 via-purple-400 to-indigo-400',
    bgColor: educationalColors.royalPurple,
    type: 'research',
  },
  {
    id: 'individual-researchers',
    icon: '📚',
    name: 'Individual Researchers & Students',
    subtitle: 'Flexible independent study & field research',
    gradient: 'from-indigo-400 via-blue-300 to-purple-300',
    bgColor: educationalColors.softPurple,
    type: 'research',
  },
];

// Why Educational Travel Matters (from PDF)
const educationalBenefits = [
  {
    icon: Lightbulb,
    title: 'Experiential Learning',
    description: 'Beyond textbooks into real-world applications',
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Collaborative experiences & peer bonding',
  },
  {
    icon: Award,
    title: 'Cultural Awareness',
    description: 'Exposure to diverse heritage & traditions',
  },
  {
    icon: Briefcase,
    title: 'Career Insights',
    description: 'Industry exposure & professional networks',
  },
];

export function EducationalTourismHub({ onBack }: EducationalTourismHubProps) {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const [showK12Flow, setShowK12Flow] = useState(false);
  const [showCollegeFlow, setShowCollegeFlow] = useState(false);
  const [showResearchFlow, setShowResearchFlow] = useState(false);
  const [showIndividualFlow, setShowIndividualFlow] = useState(false);

  const handleGoogleSearch = () => {
    const query = searchQuery || 'educational tourism india institutional visits';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = () => {
    const query = searchQuery || 'educational field trips india school tours';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  // Show K-12 Flow if School Groups selected
  if (showK12Flow) {
    return (
      <SchoolGroupsK12Flow
        onBack={() => setShowK12Flow(false)}
      />
    );
  }

  // Show College Flow if College & University Groups selected
  if (showCollegeFlow) {
    return (
      <CollegeUniversityGroupsFlow
        onBack={() => setShowCollegeFlow(false)}
      />
    );
  }

  // Show Research Flow if Research Groups selected
  if (showResearchFlow) {
    return (
      <ResearchGroupsFlow
        onBack={() => setShowResearchFlow(false)}
      />
    );
  }

  // Show Individual Flow if Individual Researchers selected
  if (showIndividualFlow) {
    return (
      <IndividualResearchersEnhanced
        onBack={() => setShowIndividualFlow(false)}
      />
    );
  }

  // Handle pathway selection
  if (selectedPathway && showRequestForm) {
    const pathway = educationalPathways.find(p => p.id === selectedPathway)!;
    return (
      <EducationalRequestForm
        pathway={pathway}
        onBack={() => {
          setShowRequestForm(false);
          setSelectedPathway(null);
        }}
        onSubmit={() => {
          setShowRequestForm(false);
          setShowSuccessModal(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-indigo-50">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <InstitutionalRequestModal
            pathway={educationalPathways.find(p => p.id === selectedPathway)!}
            onClose={() => {
              setShowSuccessModal(false);
              setSelectedPathway(null);
            }}
          />
        )}
      </AnimatePresence>

      {/* Header with Lavender/Purple gradient */}
      <div 
        className="px-6 pt-12 pb-8 rounded-b-[2rem]"
        style={{
          background: `linear-gradient(135deg, ${educationalColors.royalPurple} 0%, ${educationalColors.softPurple} 50%, ${educationalColors.lightBlue} 100%)`
        }}
      >
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 hover:bg-white/40 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <GraduationCap className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Educational Tourism</h1>
            <p className="text-white/90 text-sm">Institutional Visits & Academic Programs</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search educational programs, institutions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 h-12 rounded-full bg-white/95 border-0 shadow-lg"
          />
        </div>

        {/* Discovery Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleGoogleSearch}
            className="flex-1 bg-white/95 text-purple-700 hover:bg-white rounded-full h-9 flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <Globe className="w-4 h-4" />
            Google Search
          </Button>
          <Button
            onClick={handleYouTubeSearch}
            className="flex-1 bg-white/95 text-red-600 hover:bg-white rounded-full h-9 flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <Youtube className="w-4 h-4" />
            YouTube Browse
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Quick Eligibility Check Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-purple-300 rounded-3xl p-4 mb-6 shadow-md"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-purple-900 text-sm mb-1">
                Quick Eligibility Check
              </h3>
              <p className="text-xs text-purple-800">
                Check Government Student Concessions & Railway Discounts available for your group
              </p>
            </div>
            <Button 
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full h-8 px-4 text-xs font-semibold"
            >
              Check Now
            </Button>
          </div>
        </motion.div>

        {/* Phase 1: The 4 Pathways - 2x2 Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
          <div className="grid grid-cols-2 gap-4">
            {educationalPathways.map((pathway, index) => (
              <motion.button
                key={pathway.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Special handling for School Groups (K-12)
                  if (pathway.id === 'school-groups') {
                    setShowK12Flow(true);
                  } else if (pathway.id === 'college-university') {
                    // Special handling for College & University Groups
                    setShowCollegeFlow(true);
                  } else if (pathway.id === 'research-groups') {
                    // Special handling for Research Groups & Academic Delegations
                    setShowResearchFlow(true);
                  } else if (pathway.id === 'individual-researchers') {
                    // Special handling for Individual Researchers & Students
                    setShowIndividualFlow(true);
                  } else {
                    setSelectedPathway(pathway.id);
                    setShowRequestForm(true);
                  }
                }}
                className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all text-left relative overflow-hidden"
                style={{
                  borderTop: `4px solid ${pathway.bgColor}`,
                }}
              >
                {/* Gradient background overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${pathway.gradient} opacity-5`}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{pathway.icon}</div>
                  <h3 className="font-bold text-sm mb-2 text-gray-900 leading-tight">
                    {pathway.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-1">
                    {pathway.subtitle}
                  </p>
                  {pathway.description && (
                    <p className="text-[10px] text-gray-500 leading-relaxed italic">
                      {pathway.description}
                    </p>
                  )}
                  
                  {/* Type badge */}
                  <div className="mt-3">
                    <Badge 
                      variant="secondary" 
                      className="text-[10px] px-2 py-0.5"
                      style={{
                        backgroundColor: pathway.bgColor,
                        color: pathway.bgColor === educationalColors.royalPurple ? 'white' : '#6B21A8',
                      }}
                    >
                      {pathway.type === 'bulk' ? 'Group Booking' : 'Research Access'}
                    </Badge>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Why Educational Travel Matters - Carousel */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Why Educational Travel Matters</h2>
          <div className="relative">
            <motion.div
              key={currentBenefit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl p-6 shadow-md"
              style={{
                borderLeft: `6px solid ${educationalColors.royalPurple}`,
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: educationalColors.lavender,
                  }}
                >
                  {(() => {
                    const Icon = educationalBenefits[currentBenefit].icon;
                    return <Icon className="w-7 h-7" style={{ color: educationalColors.royalPurple }} />;
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {educationalBenefits[currentBenefit].title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {educationalBenefits[currentBenefit].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-4">
              {educationalBenefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBenefit(index)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: currentBenefit === index ? educationalColors.royalPurple : educationalColors.lavender,
                    width: currentBenefit === index ? '24px' : '8px',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Admin-Managed Content Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-purple-900 font-semibold mb-1">
                Institutional Travel Requires Planning
              </p>
              <p className="text-xs text-purple-800">
                All educational programs require 1-3 months advance notice for permissions (ISRO, Museums, Factories). 
                Our Education Wing will help with concession filing and safety protocols.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Phase 2: Request Forms (Different for Bulk vs Research)
function EducationalRequestForm({ 
  pathway, 
  onBack, 
  onSubmit 
}: { 
  pathway: any; 
  onBack: () => void; 
  onSubmit: () => void;
}) {
  const isBulkBooking = pathway.type === 'bulk';
  const isResearch = pathway.type === 'research';

  // Form state for School/College Groups
  const [bulkFormData, setBulkFormData] = useState({
    curriculumFocus: '',
    studentCount: '',
    facultyCount: '',
    teacherRatio: false,
    doctorOnCall: false,
    ladyAttendant: false,
    authorizationLetter: false,
    railwayConcession: false,
    csrSupport: false,
    // School-specific
    ageRange: '',
    curriculumAlignment: false,
    teacherStudentRatio: '',
    // College-specific
    degreeLevel: [] as string[],
    industryVisitRequest: false,
    academicCredit: false,
    conferenceTourCombo: false,
    // Common Educational Profile
    gradeYear: '',
    subjects: [] as string[],
    learningObjectives: '',
    // Institutional Requirements
    institutionLetter: null as File | null,
    studentId: null as File | null,
    supervisorName: '',
    supervisorEmail: '',
    supervisorPhone: '',
    // Academic Add-ons
    studyMaterials: false,
    expertSessions: false,
    assessmentTools: false,
    certificateOfParticipation: false,
  });

  // Form state for Researchers
  const [researchFormData, setResearchFormData] = useState({
    focusArea: '',
    permitHelp: false,
    institutionName: '',
    researchDuration: '',
    // Research Type Selection
    researchType: [] as string[],
    // Research Profile
    affiliation: '',
    researchTopic: '',
    durationDates: { start: '', end: '' },
    fundingSource: '',
    // Research-specific features
    researchProposal: null as File | null,
    equipmentTransportation: false,
    publicationDataSharing: false,
    mentorshipConnection: false,
    localGuideAssistant: false,
    academicNetworkAccess: false,
    // Common Educational Profile
    gradeYear: '',
    subjects: [] as string[],
    learningObjectives: '',
    // Institutional Requirements
    institutionLetter: null as File | null,
    studentId: null as File | null,
    supervisorName: '',
    supervisorEmail: '',
    supervisorPhone: '',
    // Academic Add-ons
    studyMaterials: false,
    expertSessions: false,
    assessmentTools: false,
    certificateOfParticipation: false,
  });

  const handleSubmit = () => {
    if (isBulkBooking) {
      console.log('Bulk Booking Request:', bulkFormData);
    } else {
      console.log('Research Access Request:', researchFormData);
    }
    onSubmit();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header */}
      <div 
        className="px-6 pt-12 pb-8 rounded-b-[2rem]"
        style={{
          background: `linear-gradient(135deg, ${educationalColors.royalPurple} 0%, ${educationalColors.softPurple} 100%)`
        }}
      >
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-3 text-white/80 text-xs">
          <span>Home</span>
          <span>→</span>
          <span>Educational Tourism</span>
          <span>→</span>
          <span className="text-white font-semibold">{pathway.name}</span>
        </div>

        {/* Sub-Category Badge */}
        <div className="mb-4">
          <Badge 
            className="text-xs px-3 py-1"
            style={{
              backgroundColor: pathway.id === 'school-groups' ? '#3B82F6' : 
                             pathway.id === 'college-university' ? '#10B981' :
                             pathway.id === 'research-groups' ? '#8B5CF6' : '#F59E0B',
              color: 'white',
            }}
          >
            {pathway.icon} {pathway.name}
          </Badge>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">{pathway.icon}</div>
          <div>
            <h1 className="text-white text-2xl font-bold">
              {isBulkBooking ? 'Plan Institutional Trip' : 'Request Research Access'}
            </h1>
            <p className="text-white/90 text-sm">{pathway.name}</p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* CASE A: School/College Groups (Bulk Booking) */}
          {isBulkBooking && (
            <>
              {/* Curriculum Focus */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-purple-600" />
                  Curriculum Focus
                </h3>
                <select
                  value={bulkFormData.curriculumFocus}
                  onChange={(e) => setBulkFormData({ ...bulkFormData, curriculumFocus: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none text-gray-900"
                >
                  <option value="">Select focus area</option>
                  <option value="history">History</option>
                  <option value="science">Science</option>
                  <option value="nature">Nature</option>
                  <option value="industry">Industry</option>
                  <option value="technology">Technology</option>
                  <option value="arts">Arts & Culture</option>
                </select>
              </div>

              {/* Group Size */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Group Size
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Students
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 45"
                      value={bulkFormData.studentCount}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, studentCount: e.target.value })}
                      className="px-4 py-3 rounded-2xl border-2 border-purple-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Faculty
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 3"
                      value={bulkFormData.facultyCount}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, facultyCount: e.target.value })}
                      className="px-4 py-3 rounded-2xl border-2 border-purple-200"
                    />
                  </div>
                </div>
              </div>

              {/* School-Specific: Age Range & Curriculum (Only for School Groups) */}
              {pathway.id === 'school-groups' && (
                <div className="bg-white rounded-3xl p-6 shadow-md">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    School Group Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Age Range
                      </label>
                      <select
                        value={bulkFormData.ageRange}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, ageRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-900"
                      >
                        <option value="">Select age range</option>
                        <option value="6-12">6-12 years (Primary)</option>
                        <option value="13-15">13-15 years (Middle School)</option>
                        <option value="16-18">16-18 years (High School)</option>
                      </select>
                    </div>
                    <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bulkFormData.curriculumAlignment}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, curriculumAlignment: e.target.checked })}
                        className="w-5 h-5 text-blue-600 rounded"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        Align with curriculum requirements
                      </span>
                    </label>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Teacher-Student Ratio Preference
                      </label>
                      <select
                        value={bulkFormData.teacherStudentRatio}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, teacherStudentRatio: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-900"
                      >
                        <option value="">Select ratio</option>
                        <option value="1:10">1:10 (High Supervision)</option>
                        <option value="1:15">1:15 (Standard)</option>
                        <option value="1:20">1:20 (Normal)</option>
                        <option value="1:25">1:25 (Relaxed)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* College-Specific: Degree Level & Features (Only for College Groups) */}
              {pathway.id === 'college-university' && (
                <div className="bg-white rounded-3xl p-6 shadow-md">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                    College Group Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Degree Level (Select all that apply)
                      </label>
                      <div className="space-y-2">
                        {['Undergraduate', 'Postgraduate', 'PhD/Research', 'Faculty/Staff'].map((level) => (
                          <label key={level} className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all cursor-pointer">
                            <input
                              type="checkbox"
                              checked={bulkFormData.degreeLevel.includes(level)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBulkFormData({ ...bulkFormData, degreeLevel: [...bulkFormData.degreeLevel, level] });
                                } else {
                                  setBulkFormData({ ...bulkFormData, degreeLevel: bulkFormData.degreeLevel.filter(l => l !== level) });
                                }
                              }}
                              className="w-5 h-5 text-green-600 rounded"
                            />
                            <span className="text-sm font-medium text-gray-900">{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bulkFormData.industryVisitRequest}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, industryVisitRequest: e.target.checked })}
                        className="w-5 h-5 text-green-600 rounded"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        Include Industry Visit Request
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bulkFormData.academicCredit}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, academicCredit: e.target.checked })}
                        className="w-5 h-5 text-green-600 rounded"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        Eligible for Academic Credit
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bulkFormData.conferenceTourCombo}
                        onChange={(e) => setBulkFormData({ ...bulkFormData, conferenceTourCombo: e.target.checked })}
                        className="w-5 h-5 text-green-600 rounded"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        Conference/Tour Combo Option
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Safety Requirements */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Safety Requirements
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bulkFormData.teacherRatio}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, teacherRatio: e.target.checked })}
                      className="w-5 h-5 text-purple-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      1:20 Teacher-Student Ratio Support
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bulkFormData.doctorOnCall}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, doctorOnCall: e.target.checked })}
                      className="w-5 h-5 text-purple-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Doctor-on-Call Required
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bulkFormData.ladyAttendant}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, ladyAttendant: e.target.checked })}
                      className="w-5 h-5 text-purple-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Lady Attendant Required
                    </span>
                  </label>
                </div>
              </div>

              {/* Concession & Permissions */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Concession & Permissions
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bulkFormData.authorizationLetter}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, authorizationLetter: e.target.checked })}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      We have School/College Authorization Letter
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bulkFormData.railwayConcession}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, railwayConcession: e.target.checked })}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Apply for Govt/Railway Student Concession
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bulkFormData.csrSupport}
                      onChange={(e) => setBulkFormData({ ...bulkFormData, csrSupport: e.target.checked })}
                      className="w-5 h-5 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      Need CSR/Grant Support (for rural schools)
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}

          {/* CASE B: Researchers (Individual/Small Group) */}
          {isResearch && (
            <>
              {/* Research Type Selection */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-purple-600" />
                  Research Type Selection
                </h3>
                <p className="text-xs text-gray-600 mb-3">Select all that apply</p>
                <div className="space-y-2">
                  {['Field Research', 'Laboratory Visits', 'Archive/Data Access', 'Conference Attendance', 'Collaborative Projects'].map((type) => (
                    <label key={type} className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-all cursor-pointer">
                      <input
                        type="checkbox"
                        checked={researchFormData.researchType.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setResearchFormData({ ...researchFormData, researchType: [...researchFormData.researchType, type] });
                          } else {
                            setResearchFormData({ ...researchFormData, researchType: researchFormData.researchType.filter(t => t !== type) });
                          }
                        }}
                        className="w-5 h-5 text-purple-600 rounded"
                      />
                      <span className="text-sm font-medium text-gray-900">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Research Profile */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  Research Profile
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Affiliation
                    </label>
                    <select
                      value={researchFormData.affiliation}
                      onChange={(e) => setResearchFormData({ ...researchFormData, affiliation: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-gray-900"
                    >
                      <option value="">Select affiliation type</option>
                      <option value="university">University</option>
                      <option value="research-institute">Research Institute</option>
                      <option value="government-agency">Government Agency</option>
                      <option value="independent">Independent Researcher</option>
                      <option value="ngo">NGO/Non-Profit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Research Topic
                    </label>
                    <Input
                      type="text"
                      placeholder="Brief description of your research topic"
                      value={researchFormData.researchTopic}
                      onChange={(e) => setResearchFormData({ ...researchFormData, researchTopic: e.target.value })}
                      className="px-4 py-3 rounded-2xl border-2 border-orange-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Duration (Date Range)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        type="date"
                        placeholder="Start Date"
                        value={researchFormData.durationDates.start}
                        onChange={(e) => setResearchFormData({ 
                          ...researchFormData, 
                          durationDates: { ...researchFormData.durationDates, start: e.target.value }
                        })}
                        className="px-4 py-3 rounded-2xl border-2 border-orange-200"
                      />
                      <Input
                        type="date"
                        placeholder="End Date"
                        value={researchFormData.durationDates.end}
                        onChange={(e) => setResearchFormData({ 
                          ...researchFormData, 
                          durationDates: { ...researchFormData.durationDates, end: e.target.value }
                        })}
                        className="px-4 py-3 rounded-2xl border-2 border-orange-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Funding Source
                    </label>
                    <select
                      value={researchFormData.fundingSource}
                      onChange={(e) => setResearchFormData({ ...researchFormData, fundingSource: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-gray-900"
                    >
                      <option value="">Select funding source</option>
                      <option value="self-funded">Self-Funded</option>
                      <option value="university-grant">University Grant</option>
                      <option value="government-grant">Government Grant</option>
                      <option value="private-foundation">Private Foundation</option>
                      <option value="fellowship">Fellowship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Research-Specific Features */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  Research Support Services
                </h3>
                <div className="space-y-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Research Proposal Upload
                    </label>
                    <div className="border-2 border-dashed border-indigo-200 rounded-2xl p-4 text-center hover:border-indigo-400 transition-all cursor-pointer">
                      <FileText className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-700">Upload Research Proposal</p>
                      <p className="text-xs text-gray-500 mt-1">PDF or DOC (Max 10MB)</p>
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setResearchFormData({ ...researchFormData, researchProposal: e.target.files?.[0] || null })}
                      />
                    </div>
                  </div>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={researchFormData.equipmentTransportation}
                      onChange={(e) => setResearchFormData({ ...researchFormData, equipmentTransportation: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">Equipment Transportation Needed</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={researchFormData.publicationDataSharing}
                      onChange={(e) => setResearchFormData({ ...researchFormData, publicationDataSharing: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">Publication/Data Sharing Agreement</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={researchFormData.mentorshipConnection}
                      onChange={(e) => setResearchFormData({ ...researchFormData, mentorshipConnection: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">Mentorship Connection</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={researchFormData.localGuideAssistant}
                      onChange={(e) => setResearchFormData({ ...researchFormData, localGuideAssistant: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">Local Guide/Assistant Request</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      checked={researchFormData.academicNetworkAccess}
                      onChange={(e) => setResearchFormData({ ...researchFormData, academicNetworkAccess: e.target.checked })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">Academic Network Access</span>
                  </label>
                </div>
              </div>

              {/* Focus Area (Moved down) */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-purple-600" />
                  Research Focus Area
                </h3>
                <select
                  value={researchFormData.focusArea}
                  onChange={(e) => setResearchFormData({ ...researchFormData, focusArea: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none text-gray-900"
                >
                  <option value="">Select research focus</option>
                  <option value="archives">Archives</option>
                  <option value="lab-access">Lab Access</option>
                  <option value="field-study">Field Study</option>
                  <option value="museum-research">Museum Research</option>
                  <option value="archaeological">Archaeological Sites</option>
                </select>
              </div>

              {/* Institution Details */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-purple-600" />
                  Institution Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Institution Name
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., Indian Institute of Science"
                      value={researchFormData.institutionName}
                      onChange={(e) => setResearchFormData({ ...researchFormData, institutionName: e.target.value })}
                      className="px-4 py-3 rounded-2xl border-2 border-purple-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Research Duration
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., 2 weeks, 1 month"
                      value={researchFormData.researchDuration}
                      onChange={(e) => setResearchFormData({ ...researchFormData, researchDuration: e.target.value })}
                      className="px-4 py-3 rounded-2xl border-2 border-purple-200"
                    />
                  </div>
                </div>
              </div>

              {/* Permit Help */}
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Permit Assistance
                </h3>
                <label className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border-2 border-blue-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={researchFormData.permitHelp}
                    onChange={(e) => setResearchFormData({ ...researchFormData, permitHelp: e.target.checked })}
                    className="w-5 h-5 text-blue-600 rounded mt-0.5"
                  />
                  <div>
                    <span className="text-sm font-semibold text-gray-900 block mb-1">
                      Do you need ASI/Govt Site Permissions?
                    </span>
                    <span className="text-xs text-gray-700">
                      We'll help you obtain necessary research permits for archaeological sites, museums, and government facilities
                    </span>
                  </div>
                </label>
              </div>
            </>
          )}

          {/* Common Section: Educational Profile (All Sub-Categories) */}
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              Educational Profile
            </h3>
            <p className="text-xs text-gray-600 mb-4">(Optional)</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Grade/Year
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Grade 10, 3rd Year UG"
                  value={isBulkBooking ? bulkFormData.gradeYear : researchFormData.gradeYear}
                  onChange={(e) => isBulkBooking ? 
                    setBulkFormData({ ...bulkFormData, gradeYear: e.target.value }) : 
                    setResearchFormData({ ...researchFormData, gradeYear: e.target.value })
                  }
                  className="px-4 py-3 rounded-2xl border-2 border-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subjects (comma-separated)
                </label>
                <Input
                  type="text"
                  placeholder="e.g., History, Science, Geography"
                  value={(isBulkBooking ? bulkFormData.subjects : researchFormData.subjects).join(', ')}
                  onChange={(e) => {
                    const subjects = e.target.value.split(',').map(s => s.trim());
                    if (isBulkBooking) {
                      setBulkFormData({ ...bulkFormData, subjects });
                    } else {
                      setResearchFormData({ ...researchFormData, subjects });
                    }
                  }}
                  className="px-4 py-3 rounded-2xl border-2 border-indigo-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Learning Objectives
                </label>
                <textarea
                  placeholder="Describe what you hope to learn from this trip..."
                  value={isBulkBooking ? bulkFormData.learningObjectives : researchFormData.learningObjectives}
                  onChange={(e) => isBulkBooking ? 
                    setBulkFormData({ ...bulkFormData, learningObjectives: e.target.value }) : 
                    setResearchFormData({ ...researchFormData, learningObjectives: e.target.value })
                  }
                  className="w-full h-24 px-4 py-3 rounded-2xl border-2 border-indigo-200 focus:border-indigo-500 focus:outline-none resize-none text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Common Section: Institutional Requirements (All Sub-Categories) */}
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-600" />
              Institutional Requirements
            </h3>
            <p className="text-xs text-gray-600 mb-4">Required for Booking</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Institution Letter
                </label>
                <div className="border-2 border-dashed border-orange-200 rounded-2xl p-4 text-center hover:border-orange-400 transition-all cursor-pointer">
                  <FileText className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Upload Official Letter</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, or JPG (Max 5MB)</p>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="hidden" 
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      if (isBulkBooking) {
                        setBulkFormData({ ...bulkFormData, institutionLetter: file });
                      } else {
                        setResearchFormData({ ...researchFormData, institutionLetter: file });
                      }
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student/Researcher ID
                </label>
                <div className="border-2 border-dashed border-orange-200 rounded-2xl p-4 text-center hover:border-orange-400 transition-all cursor-pointer">
                  <FileText className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Upload ID Card</p>
                  <p className="text-xs text-gray-500 mt-1">JPG or PNG (Max 2MB)</p>
                  <input 
                    type="file" 
                    accept=".jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      if (isBulkBooking) {
                        setBulkFormData({ ...bulkFormData, studentId: file });
                      } else {
                        setResearchFormData({ ...researchFormData, studentId: file });
                      }
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Supervisor Contact
                </label>
                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Supervisor Name"
                    value={isBulkBooking ? bulkFormData.supervisorName : researchFormData.supervisorName}
                    onChange={(e) => isBulkBooking ? 
                      setBulkFormData({ ...bulkFormData, supervisorName: e.target.value }) : 
                      setResearchFormData({ ...researchFormData, supervisorName: e.target.value })
                    }
                    className="px-4 py-3 rounded-2xl border-2 border-orange-200"
                  />
                  <Input
                    type="email"
                    placeholder="Supervisor Email"
                    value={isBulkBooking ? bulkFormData.supervisorEmail : researchFormData.supervisorEmail}
                    onChange={(e) => isBulkBooking ? 
                      setBulkFormData({ ...bulkFormData, supervisorEmail: e.target.value }) : 
                      setResearchFormData({ ...researchFormData, supervisorEmail: e.target.value })
                    }
                    className="px-4 py-3 rounded-2xl border-2 border-orange-200"
                  />
                  <Input
                    type="tel"
                    placeholder="Supervisor Phone"
                    value={isBulkBooking ? bulkFormData.supervisorPhone : researchFormData.supervisorPhone}
                    onChange={(e) => isBulkBooking ? 
                      setBulkFormData({ ...bulkFormData, supervisorPhone: e.target.value }) : 
                      setResearchFormData({ ...researchFormData, supervisorPhone: e.target.value })
                    }
                    className="px-4 py-3 rounded-2xl border-2 border-orange-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Common Section: Academic Add-ons (All Sub-Categories) */}
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-600" />
              Academic Add-ons
            </h3>
            <p className="text-xs text-gray-600 mb-4">Enhance your learning experience</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal-50 transition-all cursor-pointer">
                <input
                  type="checkbox"
                  checked={isBulkBooking ? bulkFormData.studyMaterials : researchFormData.studyMaterials}
                  onChange={(e) => isBulkBooking ? 
                    setBulkFormData({ ...bulkFormData, studyMaterials: e.target.checked }) : 
                    setResearchFormData({ ...researchFormData, studyMaterials: e.target.checked })
                  }
                  className="w-5 h-5 text-teal-600 rounded"
                />
                <span className="text-sm font-medium text-gray-900">Study Materials</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal-50 transition-all cursor-pointer">
                <input
                  type="checkbox"
                  checked={isBulkBooking ? bulkFormData.expertSessions : researchFormData.expertSessions}
                  onChange={(e) => isBulkBooking ? 
                    setBulkFormData({ ...bulkFormData, expertSessions: e.target.checked }) : 
                    setResearchFormData({ ...researchFormData, expertSessions: e.target.checked })
                  }
                  className="w-5 h-5 text-teal-600 rounded"
                />
                <span className="text-sm font-medium text-gray-900">Expert Sessions</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal-50 transition-all cursor-pointer">
                <input
                  type="checkbox"
                  checked={isBulkBooking ? bulkFormData.assessmentTools : researchFormData.assessmentTools}
                  onChange={(e) => isBulkBooking ? 
                    setBulkFormData({ ...bulkFormData, assessmentTools: e.target.checked }) : 
                    setResearchFormData({ ...researchFormData, assessmentTools: e.target.checked })
                  }
                  className="w-5 h-5 text-teal-600 rounded"
                />
                <span className="text-sm font-medium text-gray-900">Assessment Tools</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal-50 transition-all cursor-pointer">
                <input
                  type="checkbox"
                  checked={isBulkBooking ? bulkFormData.certificateOfParticipation : researchFormData.certificateOfParticipation}
                  onChange={(e) => isBulkBooking ? 
                    setBulkFormData({ ...bulkFormData, certificateOfParticipation: e.target.checked }) : 
                    setResearchFormData({ ...researchFormData, certificateOfParticipation: e.target.checked })
                  }
                  className="w-5 h-5 text-teal-600 rounded"
                />
                <span className="text-sm font-medium text-gray-900">Certificate of Participation</span>
              </label>
            </div>
          </div>

          {/* Budget Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-900 mb-1">
                  Budget Estimate (Subject to Group Size)
                </p>
                <p className="text-xs text-amber-800">
                  Pricing depends on group size, duration, and destination. An admin will provide a detailed quote based on your requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 h-12 rounded-full border-2 border-purple-300 text-purple-700 font-semibold"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 h-12 rounded-full font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${educationalColors.royalPurple} 0%, ${educationalColors.softPurple} 100%)`
              }}
            >
              {isBulkBooking ? 'Submit Trip Request' : 'Request Access'}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Phase 3: Institutional Request Submitted Modal
function InstitutionalRequestModal({ 
  pathway, 
  onClose 
}: { 
  pathway: any; 
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
      >
        {/* Header */}
        <div 
          className="p-6 rounded-t-3xl"
          style={{
            background: `linear-gradient(135deg, ${educationalColors.royalPurple} 0%, ${educationalColors.lightBlue} 100%)`
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold text-center mb-2">
            Institutional Request Submitted
          </h2>
          <p className="text-white/90 text-sm text-center">
            Your request for <span className="font-bold">{pathway.name}</span> has been sent to our Education Wing
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-blue-50 rounded-2xl p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Next Steps
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: educationalColors.royalPurple }}
                >
                  1
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Permission Check</p>
                  <p className="text-xs text-gray-700">
                    We will verify availability for ISRO/Factory/Museum visits (requires 1-3 months notice)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: educationalColors.royalPurple }}
                >
                  2
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Concession Filing</p>
                  <p className="text-xs text-gray-700">
                    Our team will help process your Railway/State Transport discount forms
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: educationalColors.royalPurple }}
                >
                  3
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Safety Protocol</p>
                  <p className="text-xs text-gray-700">
                    We will assign a certified tour coordinator & first-aid support
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <UserCheck className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-purple-900 mb-1">
                  Admin Contact Coming Soon
                </p>
                <p className="text-xs text-purple-800">
                  An admin will contact your institution's representative shortly with a detailed Quote and Itinerary
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={onClose}
            className="w-full h-12 rounded-full font-bold text-white"
            style={{
              background: `linear-gradient(135deg, ${educationalColors.royalPurple} 0%, ${educationalColors.softPurple} 100%)`
            }}
          >
            Got It, Thanks!
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
