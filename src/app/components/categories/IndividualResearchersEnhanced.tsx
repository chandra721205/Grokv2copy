import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import {
  ArrowLeft,
  BookOpen,
  DollarSign,
  Calendar,
  Shield,
  Users,
  TrendingUp,
  Sparkles,
  Clock,
  Target,
  CheckCircle,
  Filter,
  Plus,
  Minus,
  Download,
  AlertTriangle,
  Network,
  MapPin,
  Car,
  Utensils,
  Battery,
  Camera,
  Wifi,
  Home as HomeIcon,
  Search,
  Award,
  Building,
  Mail,
  Phone,
  Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import IndividualResearchersFlow from '@/app/components/categories/IndividualResearchersFlow';

// ========================================
// THEME
// ========================================
const theme = {
  primary: '#7851A9',
  secondary: '#4F46E5',
  accent: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  background: '#F9FAFB',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  mediumGray: '#E0E0E0',
};

// ========================================
// DATA: PHASE-SPECIFIC CONFIGURATIONS
// ========================================

// Phase 1: Funding Sources
const microGrants = [
  { id: 1, name: '[Admin: Micro-Grant A]', amount: '< Rs.15L', discipline: 'All', timeline: '3 months', eligibility: '90%' },
  { id: 2, name: '[Admin: Micro-Grant B]', amount: '< Rs.10L', discipline: 'STEM', timeline: '2 months', eligibility: '75%' },
  { id: 3, name: '[Admin: Micro-Grant C]', amount: '< Rs.12L', discipline: 'Humanities', timeline: '4 months', eligibility: '85%' },
];

const governmentFellowships = [
  { id: 1, name: 'DST Inspire Fellowship', eligibility: 'PhD Students', amount: 'Rs.25,000/month', duration: '5 years' },
  { id: 2, name: 'UGC-JRF', eligibility: 'NET Qualified', amount: 'Rs.31,000/month', duration: '2 years' },
  { id: 3, name: '[Admin: Fellowship Program]', eligibility: '[Admin: Criteria]', amount: '[Admin: Amount]', duration: '[Admin: Duration]' },
];

const corporateSponsors = [
  { id: 1, name: '[Admin: Corporate Sponsor A]', type: 'CSR', focus: 'Education', typical: 'Rs.50L-Rs.2Cr' },
  { id: 2, name: '[Admin: Corporate Sponsor B]', type: 'R&D Partnership', focus: 'Technology', typical: 'Rs.1Cr-Rs.5Cr' },
];

// Phase 2: Timeline Data
const grantDeadlines = [
  { name: '[Admin: Grant A]', deadline: 'June 30, 2026', processing: '90 days', amount: 'Rs.50L' },
  { name: '[Admin: Grant B]', deadline: 'August 15, 2026', processing: '60 days', amount: 'Rs.25L' },
  { name: '[Admin: Grant C]', deadline: 'September 1, 2026', processing: '45 days', amount: 'Rs.15L' },
];

// Phase 3: Risk Factors
const riskFactors = [
  { 
    id: 1, 
    risk: 'Funding Delay', 
    probability: 'Medium (35%)', 
    impact: 'High',
    mitigation: 'Apply to multiple sources, maintain emergency fund',
    severity: 'warning'
  },
  { 
    id: 2, 
    risk: 'Currency Fluctuation', 
    probability: 'Low (15%)', 
    impact: 'Medium',
    mitigation: 'Lock exchange rates, budget 10% buffer',
    severity: 'info'
  },
  { 
    id: 3, 
    risk: 'Access Denial', 
    probability: 'Low (20%)', 
    impact: 'High',
    mitigation: 'Secure permissions early, have backup sites',
    severity: 'danger'
  },
  { 
    id: 4, 
    risk: 'Equipment Failure', 
    probability: 'Medium (30%)', 
    impact: 'Medium',
    mitigation: 'Backup equipment, local rental options',
    severity: 'warning'
  },
];

// Phase 4: Network Profiles
const mentors = [
  { 
    id: 1, 
    name: 'Dr. Priya Patel', 
    expertise: 'Field Research Methodology', 
    institution: '[Admin: University]',
    availability: 'Available for consultation',
    rating: 4.8
  },
  { 
    id: 2, 
    name: 'Prof. Rajesh Sharma', 
    expertise: 'Data Analysis & Publishing', 
    institution: '[Admin: Institute]',
    availability: 'Monthly mentorship slots',
    rating: 4.9
  },
];

const researchBuddies = [
  { id: 1, name: 'Priya M.', discipline: 'Biology', location: '[Admin: Location]', status: 'Active' },
  { id: 2, name: 'Ankit K.', discipline: 'Physics', location: '[Admin: Location]', status: 'Available' },
  { id: 3, name: 'Rohan S.', discipline: 'History', location: '[Admin: Location]', status: 'Active' },
];

const upcomingEvents = [
  { id: 1, title: '[Admin: Research Seminar]', date: 'June 20, 2026', type: 'Seminar', spots: 45 },
  { id: 2, title: '[Admin: Networking Mixer]', date: 'June 25, 2026', type: 'Social', spots: 30 },
  { id: 3, title: '[Admin: Workshop]', date: 'July 5, 2026', type: 'Workshop', spots: 20 },
];

// ========================================
// MAIN ENHANCED COMPONENT
// ========================================
export default function IndividualResearchersEnhanced({ onBack }: { onBack: () => void }) {
  const [showAdvancedTools, setShowAdvancedTools] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<number | null>(null);

  // If showing basic flow
  if (!showAdvancedTools && currentPhase === null) {
    return (
      <div className="min-h-screen py-6 px-4" style={{ backgroundColor: theme.background }}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={onBack}
              className="flex items-center gap-2 text-white font-bold"
              style={{ backgroundColor: theme.primary }}
            >
              <ArrowLeft className="w-4 h-4" />
              Educational Tourism
            </Button>
          </div>

          {/* Main Selection */}
          <div className="rounded-2xl p-8 shadow-xl mb-6" style={{ backgroundColor: theme.white }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">📚</div>
              <h1 className="text-3xl font-bold mb-3" style={{ color: theme.primary }}>
                Individual Researchers & Students
              </h1>
              <p className="text-sm mb-4" style={{ color: theme.secondary }}>
                Choose your planning approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Basic Planning Flow */}
              <button
                onClick={() => setShowAdvancedTools(true)}
                className="p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg"
                style={{ borderColor: theme.accent, backgroundColor: theme.lightGray }}
              >
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: theme.primary }}>
                  Quick Start (15 Steps)
                </h3>
                <p className="text-sm mb-3" style={{ color: theme.secondary }}>
                  Guided flow from profile to booking
                </p>
                <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
                  Recommended for first-time users
                </Badge>
              </button>

              {/* Advanced Research Tools */}
              <button
                onClick={() => setCurrentPhase(0)}
                className="p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg"
                style={{ borderColor: theme.secondary, backgroundColor: theme.lightGray }}
              >
                <div className="text-4xl mb-3">🔬</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: theme.primary }}>
                  Advanced Research Tools
                </h3>
                <p className="text-sm mb-3" style={{ color: theme.secondary }}>
                  6 specialized phases for complex projects
                </p>
                <Badge style={{ backgroundColor: theme.secondary, color: theme.white }}>
                  For experienced researchers
                </Badge>
              </button>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
              Advanced Tools Include:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: DollarSign, label: 'Funding Stack Builder' },
                { icon: Calendar, label: 'Timeline Planner' },
                { icon: Shield, label: 'Risk Assessment' },
                { icon: Users, label: 'Network Hub' },
                { icon: TrendingUp, label: 'Logistics Tracker' },
                { icon: Sparkles, label: 'AI Optimization' },
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-lg"
                  style={{ backgroundColor: theme.lightGray }}
                >
                  <tool.icon className="w-4 h-4" style={{ color: theme.accent }} />
                  <span className="text-xs font-medium">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show basic flow
  if (showAdvancedTools) {
    return <IndividualResearchersFlow onBack={() => setShowAdvancedTools(false)} />;
  }

  // Show advanced phases
  return (
    <div className="min-h-screen py-6 px-4" style={{ backgroundColor: theme.background }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => setCurrentPhase(null)}
            className="flex items-center gap-2 text-white font-bold"
            style={{ backgroundColor: theme.primary }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Selection
          </Button>
          
          <Badge className="px-4 py-2" style={{ backgroundColor: theme.accent, color: theme.white }}>
            Advanced Research Tools
          </Badge>
        </div>

        {/* Phase Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {[
            { id: 0, icon: DollarSign, label: 'Funding & Proposal' },
            { id: 1, icon: Calendar, label: 'Timeline & Strategy' },
            { id: 2, icon: Shield, label: 'Risk Assessment' },
            { id: 3, icon: Users, label: 'Team & Network' },
            { id: 4, icon: TrendingUp, label: 'Logistics & Budget' },
            { id: 5, icon: Sparkles, label: 'AI Optimization' },
          ].map((phase) => (
            <button
              key={phase.id}
              onClick={() => setCurrentPhase(phase.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                currentPhase === phase.id ? 'shadow-lg' : ''
              }`}
              style={{
                backgroundColor: currentPhase === phase.id ? theme.primary : theme.white,
                borderColor: currentPhase === phase.id ? theme.accent : theme.mediumGray,
                color: currentPhase === phase.id ? theme.white : theme.primary,
              }}
            >
              <phase.icon className="w-5 h-5 mb-2 mx-auto" />
              <p className="text-xs font-bold text-center">{phase.label}</p>
            </button>
          ))}
        </div>

        {/* Phase Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentPhase === 0 && <Phase1_FundingProposal />}
            {currentPhase === 1 && <Phase2_TimelineStrategy />}
            {currentPhase === 2 && <Phase3_RiskAssessment />}
            {currentPhase === 3 && <Phase4_TeamNetwork />}
            {currentPhase === 4 && <Phase5_LogisticsBudget />}
            {currentPhase === 5 && <Phase6_AIOptimization />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ========================================
// PHASE 1: FUNDING & PROPOSAL DEVELOPMENT
// ========================================
function Phase1_FundingProposal() {
  const [fundingStack, setFundingStack] = useState<any[]>([]);
  const [selectedDiscipline, setSelectedDiscipline] = useState('all');
  const [selectedTimeline, setSelectedTimeline] = useState('all');

  const addToStack = (grant: any) => {
    setFundingStack(prev => [...prev, grant]);
    toast.success(`${grant.name} added to your funding stack!`);
  };

  const removeFromStack = (grantId: number) => {
    setFundingStack(prev => prev.filter(g => g.id !== grantId));
    toast.info('Removed from funding stack');
  };

  const totalPotential = fundingStack.reduce((sum, grant) => sum + parseFloat(grant.amount.replace(/[^\d]/g, '')) || 0, 0);
  const crowdfundingProbability = 45;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
          💰 Grant Finder & Funding Stack
        </h2>
        <p className="text-sm" style={{ color: theme.secondary }}>
          Discover and combine multiple funding sources to support your research trip
        </p>
      </div>

      {/* Micro-Grant Finder */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold" style={{ color: theme.primary }}>
            Micro-Grant Finder (&lt; Rs.15L)
          </h3>
          <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
            {microGrants.length} Available
          </Badge>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <select
            value={selectedDiscipline}
            onChange={(e) => setSelectedDiscipline(e.target.value)}
            className="px-3 py-2 rounded-lg border-2 text-sm"
            style={{ borderColor: theme.mediumGray }}
          >
            <option value="all">All Disciplines</option>
            <option value="stem">STEM</option>
            <option value="humanities">Humanities</option>
            <option value="social">Social Sciences</option>
          </select>

          <select
            value={selectedTimeline}
            onChange={(e) => setSelectedTimeline(e.target.value)}
            className="px-3 py-2 rounded-lg border-2 text-sm"
            style={{ borderColor: theme.mediumGray }}
          >
            <option value="all">All Timelines</option>
            <option value="1-2">1-2 Months</option>
            <option value="3-4">3-4 Months</option>
            <option value="5+">5+ Months</option>
          </select>
        </div>

        {/* Grant Cards */}
        <div className="space-y-3">
          {microGrants.map(grant => (
            <div key={grant.id} className="p-4 rounded-xl border-2" style={{ borderColor: theme.mediumGray, backgroundColor: theme.lightGray }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: theme.primary }}>{grant.name}</h4>
                  <p className="text-xs" style={{ color: theme.secondary }}>
                    {grant.discipline} • {grant.timeline} processing
                  </p>
                </div>
                <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
                  {grant.amount}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => addToStack(grant)}
                  className="flex-1 h-8 text-xs"
                  style={{ backgroundColor: theme.primary, color: theme.white }}
                >
                  <Plus className="w-3 h-3 mr-1" /> Add to Stack
                </Button>
                <Badge className="px-3 py-1 text-xs" style={{ backgroundColor: theme.lightGray, color: theme.accent }}>
                  {grant.eligibility} Match
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={() => toast.success('Searching for more grants...')}
          className="w-full mt-4 h-10"
          style={{ backgroundColor: theme.secondary, color: theme.white }}
        >
          <Search className="w-4 h-4 mr-2" /> Find More Grants
        </Button>
      </div>

      {/* Government Fellowships */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Government Fellowships
        </h3>
        <div className="space-y-3">
          {governmentFellowships.map(fellowship => (
            <div key={fellowship.id} className="p-4 rounded-xl border-2" style={{ borderColor: theme.mediumGray, backgroundColor: theme.lightGray }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-sm mb-1">{fellowship.name}</h4>
                  <p className="text-xs" style={{ color: theme.secondary }}>
                    {fellowship.eligibility} • {fellowship.duration}
                  </p>
                </div>
                <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
                  {fellowship.amount}
                </Badge>
              </div>
              <Button
                onClick={() => toast.success('Checking eligibility...')}
                className="w-full h-8 text-xs"
                style={{ backgroundColor: theme.primary, color: theme.white }}
              >
                <CheckCircle className="w-3 h-3 mr-1" /> Check Eligibility
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Sponsorship */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Corporate Sponsorship / CSR Explorer
        </h3>
        <div className="space-y-3">
          {corporateSponsors.map(sponsor => (
            <div key={sponsor.id} className="p-4 rounded-xl border-2" style={{ borderColor: theme.mediumGray, backgroundColor: theme.lightGray }}>
              <h4 className="font-bold text-sm mb-1">{sponsor.name}</h4>
              <p className="text-xs mb-2" style={{ color: theme.secondary }}>
                {sponsor.type} • Focus: {sponsor.focus}
              </p>
              <Badge style={{ backgroundColor: theme.warning, color: theme.white }}>
                Typical: {sponsor.typical}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Funding Stack Builder */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          📊 Your Funding Stack
        </h3>
        
        {fundingStack.length === 0 ? (
          <div className="text-center py-8" style={{ color: theme.secondary }}>
            <p className="text-sm">No funding sources added yet</p>
            <p className="text-xs mt-2">Add grants from above to build your stack</p>
          </div>
        ) : (
          <div className="space-y-2 mb-4">
            {fundingStack.map((grant, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: theme.lightGray }}>
                <div>
                  <p className="font-bold text-sm">{grant.name}</p>
                  <p className="text-xs" style={{ color: theme.secondary }}>{grant.amount}</p>
                </div>
                <Button
                  onClick={() => removeFromStack(grant.id)}
                  className="h-8 w-8 p-0"
                  style={{ backgroundColor: theme.danger, color: theme.white }}
                >
                  <Minus className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {fundingStack.length > 0 && (
          <div className="p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Total Potential Funding:</span>
              <span className="text-xl font-bold" style={{ color: theme.accent }}>
                Rs.{totalPotential.toFixed(2)}L
              </span>
            </div>
            <Button
              onClick={() => toast.success('Saving funding strategy...')}
              className="w-full mt-2"
              style={{ backgroundColor: theme.accent, color: theme.white }}
            >
              <Download className="w-4 h-4 mr-2" /> Save Funding Strategy
            </Button>
          </div>
        )}
      </div>

      {/* Crowdfunding Indicator */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Crowdfunding Probability Indicator
        </h3>
        <div className="p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Success Probability:</span>
            <Badge style={{ backgroundColor: theme.warning, color: theme.white }}>
              {crowdfundingProbability}%
            </Badge>
          </div>
          <div className="w-full h-4 rounded-full" style={{ backgroundColor: theme.mediumGray }}>
            <div
              className="h-4 rounded-full"
              style={{ width: `${crowdfundingProbability}%`, backgroundColor: theme.warning }}
            />
          </div>
          <p className="text-xs mt-2" style={{ color: theme.secondary }}>
            Based on project type, narrative strength, and network size
          </p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// PHASE 2: TIMELINE & STRATEGY PLANNING
// ========================================
function Phase2_TimelineStrategy() {
  const [selectedDeadlines, setSelectedDeadlines] = useState<number[]>([]);
  
  const toggleDeadline = (id: number) => {
    setSelectedDeadlines(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
          📅 Application Calendar & Time Planner
        </h2>
        <p className="text-sm" style={{ color: theme.secondary }}>
          Strategic timeline management for grant applications and research preparation
        </p>
      </div>

      {/* Grant Deadlines Visual Timeline */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Grant Deadlines & Processing Times
        </h3>
        
        <div className="space-y-4">
          {grantDeadlines.map((grant, idx) => (
            <div key={idx} className="relative">
              <div
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedDeadlines.includes(idx) ? 'shadow-md' : ''
                }`}
                style={{
                  borderColor: selectedDeadlines.includes(idx) ? theme.accent : theme.mediumGray,
                  backgroundColor: selectedDeadlines.includes(idx) ? theme.lightGray : theme.white,
                }}
                onClick={() => toggleDeadline(idx)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-sm mb-1">{grant.name}</h4>
                    <p className="text-xs" style={{ color: theme.secondary }}>
                      <Clock className="w-3 h-3 inline mr-1" />
                      {grant.processing} processing time
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge style={{ backgroundColor: theme.danger, color: theme.white }}>
                      {grant.deadline}
                    </Badge>
                    <p className="text-xs mt-1 font-bold" style={{ color: theme.accent }}>
                      {grant.amount}
                    </p>
                  </div>
                </div>
                
                {selectedDeadlines.includes(idx) && (
                  <div className="mt-3 pt-3 border-t-2" style={{ borderColor: theme.mediumGray }}>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          toast.success('Added to your calendar!');
                        }}
                        className="h-8 text-xs"
                        style={{ backgroundColor: theme.primary, color: theme.white }}
                      >
                        <Calendar className="w-3 h-3 mr-1" /> Add to Calendar
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          toast.success('Reminder set!');
                        }}
                        className="h-8 text-xs"
                        style={{ backgroundColor: theme.secondary, color: theme.white }}
                      >
                        Set Reminder
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Timeline Connector */}
              {idx < grantDeadlines.length - 1 && (
                <div className="w-0.5 h-6 mx-auto" style={{ backgroundColor: theme.mediumGray }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Time Investment Estimator */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Time Investment Estimator
        </h3>
        
        <div className="space-y-3">
          {[
            { type: 'Major Grant (≥ Rs.75L)', hours: '40-60 hrs', tasks: 'Full proposal, budget, references, reviews' },
            { type: 'Medium Grant (Rs.25L-Rs.75L)', hours: '20-35 hrs', tasks: 'Concept note, budget, 2-3 references' },
            { type: 'Micro Grant (< Rs.15L)', hours: '10-15 hrs', tasks: 'Short application, basic budget' },
            { type: 'Fellowship Application', hours: '15-25 hrs', tasks: 'SOP, CV, research plan, references' },
          ].map((estimate, idx) => (
            <div key={idx} className="p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-sm">{estimate.type}</h4>
                <Badge style={{ backgroundColor: theme.warning, color: theme.white }}>
                  {estimate.hours}
                </Badge>
              </div>
              <p className="text-xs" style={{ color: theme.secondary }}>{estimate.tasks}</p>
            </div>
          ))}
        </div>

        <Button
          onClick={() => toast.success('Calculating your total time investment...')}
          className="w-full mt-4"
          style={{ backgroundColor: theme.accent, color: theme.white }}
        >
          <Clock className="w-4 h-4 mr-2" /> Estimate My Total Hours
        </Button>
      </div>

      {/* Interactive Calendar */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Research Trip Calendar
        </h3>
        
        <div className="p-6 rounded-xl text-center" style={{ backgroundColor: theme.lightGray }}>
          <Calendar className="w-16 h-16 mx-auto mb-4" style={{ color: theme.primary }} />
          <p className="text-sm font-medium mb-2">Interactive Calendar View</p>
          <p className="text-xs mb-4" style={{ color: theme.secondary }}>
            Visualize grant deadlines, application periods, and research trip dates
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Badge style={{ backgroundColor: theme.danger, color: theme.white }}>
              {selectedDeadlines.length} Deadlines Tracked
            </Badge>
            <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
              Calendar Sync Ready
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// PHASE 3: RISK ASSESSMENT & CONTINGENCY
// ========================================
function Phase3_RiskAssessment() {
  const [contingencyChecklist, setContingencyChecklist] = useState<string[]>([]);
  
  const toggleContingency = (item: string) => {
    setContingencyChecklist(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const overallSuccessProbability = 92; // For >= Rs.75L

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
          🛡️ Risk & Contingency Dashboard
        </h2>
        <p className="text-sm" style={{ color: theme.secondary }}>
          Identify potential challenges and prepare mitigation strategies
        </p>
      </div>

      {/* Success Probability Meter */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Success Probability Meter
        </h3>
        
        <div className="p-6 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">Overall Success Rate</span>
            <Badge className="text-lg px-4 py-2" style={{ backgroundColor: theme.accent, color: theme.white }}>
              {overallSuccessProbability}%
            </Badge>
          </div>
          
          <div className="w-full h-8 rounded-full relative" style={{ backgroundColor: theme.mediumGray }}>
            <div
              className="h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all"
              style={{ width: `${overallSuccessProbability}%`, backgroundColor: theme.accent }}
            >
              Excellent
            </div>
          </div>
          
          <p className="text-xs mt-3 text-center" style={{ color: theme.secondary }}>
            Based on funding level &ge; Rs.75L, preparation quality, and network strength
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: 'Funding', value: '88%', color: theme.accent },
            { label: 'Access', value: '95%', color: theme.accent },
            { label: 'Timeline', value: '93%', color: theme.accent },
          ].map((metric, idx) => (
            <div key={idx} className="p-3 rounded-lg text-center" style={{ backgroundColor: theme.lightGray }}>
              <p className="text-xs mb-1" style={{ color: theme.secondary }}>{metric.label}</p>
              <p className="text-lg font-bold" style={{ color: metric.color }}>{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Cards with Mitigations */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Risk Factors & Mitigation Strategies
        </h3>
        
        <div className="space-y-3">
          {riskFactors.map(risk => (
            <div
              key={risk.id}
              className="p-4 rounded-xl border-2"
              style={{
                borderColor: risk.severity === 'danger' ? theme.danger :
                             risk.severity === 'warning' ? theme.warning :
                             theme.secondary,
                backgroundColor: theme.lightGray
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle
                      className="w-4 h-4"
                      style={{
                        color: risk.severity === 'danger' ? theme.danger :
                               risk.severity === 'warning' ? theme.warning :
                               theme.secondary
                      }}
                    />
                    <h4 className="font-bold text-sm">{risk.risk}</h4>
                  </div>
                  <div className="flex gap-3 text-xs mb-2">
                    <Badge style={{ backgroundColor: theme.secondary, color: theme.white }}>
                      {risk.probability}
                    </Badge>
                    <Badge style={{ backgroundColor: theme.danger, color: theme.white }}>
                      Impact: {risk.impact}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg" style={{ backgroundColor: theme.white }}>
                <p className="text-xs font-medium mb-1" style={{ color: theme.primary }}>
                  Mitigation Strategy:
                </p>
                <p className="text-xs" style={{ color: theme.secondary }}>
                  {risk.mitigation}
                </p>
              </div>

              <Button
                onClick={() => toast.success('Viewing detailed mitigation plan...')}
                className="w-full mt-2 h-8 text-xs"
                style={{ backgroundColor: theme.primary, color: theme.white }}
              >
                View Detailed Plan
              </Button>
            </div>
          ))}
        </div>

        <Button
          onClick={() => toast.success('Assessing your project risks...')}
          className="w-full mt-4"
          style={{ backgroundColor: theme.accent, color: theme.white }}
        >
          <Shield className="w-4 h-4 mr-2" /> Assess My Project Risks
        </Button>
      </div>

      {/* Contingency Plan Checklist */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Contingency Plan Checklist
        </h3>
        
        <div className="space-y-2">
          {[
            'Backup funding sources identified (minimum 2)',
            'Emergency fund allocated (10-15% of budget)',
            'Alternative research sites mapped',
            'Equipment rental options researched',
            'Modular research design allowing partial completion',
            'Insurance coverage confirmed',
            'Local emergency contacts established',
            'Data backup systems in place',
          ].map((item, idx) => (
            <label
              key={idx}
              className="flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all"
              style={{
                backgroundColor: contingencyChecklist.includes(item) ? theme.lightGray : theme.white,
                border: `2px solid ${contingencyChecklist.includes(item) ? theme.accent : theme.mediumGray}`
              }}
            >
              <input
                type="checkbox"
                checked={contingencyChecklist.includes(item)}
                onChange={() => toggleContingency(item)}
                className="w-5 h-5 mt-0.5"
                style={{ accentColor: theme.primary }}
              />
              <span className="text-sm flex-1">{item}</span>
            </label>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Contingency Preparedness:</span>
            <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
              {Math.round((contingencyChecklist.length / 8) * 100)}% Complete
            </Badge>
          </div>
        </div>

        <Button
          onClick={() => toast.success('Identifying backup funding sources...')}
          className="w-full mt-4"
          style={{ backgroundColor: theme.secondary, color: theme.white }}
        >
          <Search className="w-4 h-4 mr-2" /> Identify Backup Sources
        </Button>
      </div>
    </div>
  );
}

// Continuing with Phases 4-6... (will create in next part due to length)
// For now, creating placeholders:

function Phase4_TeamNetwork() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
          👥 Research Network Hub
        </h2>
        <p className="text-sm" style={{ color: theme.secondary }}>
          Build your research team and safety network
        </p>
      </div>

      {/* Mentor Profiles */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Mentor Profiles
        </h3>
        <div className="space-y-3">
          {mentors.map(mentor => (
            <div key={mentor.id} className="p-4 rounded-xl border-2" style={{ borderColor: theme.mediumGray, backgroundColor: theme.lightGray }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-sm mb-1">{mentor.name}</h4>
                  <p className="text-xs" style={{ color: theme.secondary }}>{mentor.expertise}</p>
                  <p className="text-xs" style={{ color: theme.secondary }}>{mentor.institution}</p>
                </div>
                <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
                  ⭐ {mentor.rating}
                </Badge>
              </div>
              <p className="text-xs mb-3" style={{ color: theme.secondary }}>{mentor.availability}</p>
              <Button className="w-full h-8 text-xs" style={{ backgroundColor: theme.primary, color: theme.white }}>
                <Mail className="w-3 h-3 mr-1" /> Request Mentorship
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Research Buddy Matching */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Research Buddy Matching
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {researchBuddies.map(buddy => (
            <div key={buddy.id} className="p-4 rounded-xl border-2" style={{ borderColor: theme.mediumGray, backgroundColor: theme.lightGray }}>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm mb-1">{buddy.name}</h4>
                  <p className="text-xs" style={{ color: theme.secondary }}>
                    {buddy.discipline} • {buddy.location}
                  </p>
                </div>
                <Button className="h-8 text-xs" style={{ backgroundColor: theme.accent, color: theme.white }}>
                  <Users className="w-3 h-3 mr-1" /> Connect
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Calendar */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Upcoming Events
        </h3>
        <div className="space-y-3">
          {upcomingEvents.map(event => (
            <div key={event.id} className="p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-sm mb-1">{event.title}</h4>
                  <p className="text-xs" style={{ color: theme.secondary }}>{event.date} • {event.type}</p>
                </div>
                <Badge style={{ backgroundColor: theme.secondary, color: theme.white }}>
                  {event.spots} spots
                </Badge>
              </div>
              <Button className="w-full h-8 text-xs" style={{ backgroundColor: theme.primary, color: theme.white }}>
                Register for Event
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Network */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Safety Network
        </h3>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
            <h4 className="font-bold text-sm mb-2">Women Researchers Network</h4>
            <p className="text-xs mb-3" style={{ color: theme.secondary }}>
              24/7 support, safety resources, and community
            </p>
            <Button className="w-full h-8 text-xs" style={{ backgroundColor: theme.accent, color: theme.white }}>
              Join Network
            </Button>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
            <h4 className="font-bold text-sm mb-2">Emergency Contacts</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <Phone className="w-3 h-3" />
                <span>[Admin: Emergency Hotline]</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Mail className="w-3 h-3" />
                <span>[Admin: Support Email]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Phase5_LogisticsBudget() {
  const [expenses, setExpenses] = useState<any[]>([]);
  
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
          📊 Logistics & Budget Tracker
        </h2>
        <p className="text-sm" style={{ color: theme.secondary }}>
          Real-time expense tracking and resource management
        </p>
      </div>

      {/* Transport Comparison */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Transport Comparison Widget
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { mode: 'Auto', cost: 'Rs.150', time: '30 min', eco: '⚠️' },
            { mode: 'Walk', cost: 'Rs.0', time: '60 min', eco: '✅' },
            { mode: 'Taxi', cost: 'Rs.300', time: '25 min', eco: '⚠️' },
            { mode: 'Bus', cost: 'Rs.50', time: '45 min', eco: '✅' },
          ].map((option, idx) => (
            <div key={idx} className="p-4 rounded-xl border-2" style={{ borderColor: theme.mediumGray, backgroundColor: theme.lightGray }}>
              <h4 className="font-bold text-sm mb-2">{option.mode}</h4>
              <p className="text-xs mb-1"><strong>Cost:</strong> {option.cost}</p>
              <p className="text-xs mb-1"><strong>Time:</strong> {option.time}</p>
              <p className="text-xs"><strong>Eco:</strong> {option.eco}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Cost Tracker */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Meal Cost Tracker
        </h3>
        <div className="space-y-3">
          {['Breakfast', 'Lunch', 'Dinner'].map((meal, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Utensils className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="text-sm flex-1">{meal}</span>
              <Input type="number" placeholder="Rs. Amount" className="w-24 h-8 text-xs" />
              <Button className="h-8 px-3 text-xs" style={{ backgroundColor: theme.accent, color: theme.white }}>
                Log
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Status Dashboard */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Equipment Status Dashboard
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { item: 'Battery', icon: Battery, status: '85%', color: theme.accent },
            { item: 'Memory', icon: Camera, status: '62%', color: theme.warning },
            { item: 'Connectivity', icon: Wifi, status: '100%', color: theme.accent },
            { item: 'Camera', icon: Camera, status: 'OK', color: theme.accent },
          ].map((equipment, idx) => (
            <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: theme.lightGray }}>
              <div className="flex items-center gap-2 mb-2">
                <equipment.icon className="w-4 h-4" style={{ color: equipment.color }} />
                <span className="text-sm font-medium">{equipment.item}</span>
              </div>
              <p className="text-lg font-bold" style={{ color: equipment.color }}>{equipment.status}</p>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" style={{ backgroundColor: theme.primary, color: theme.white }}>
          Update Equipment Status
        </Button>
      </div>

      {/* Daily Budget Table */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Daily Budget: Planned vs. Spent
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr style={{ backgroundColor: theme.lightGray }}>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-right">Planned</th>
                <th className="p-2 text-right">Spent</th>
                <th className="p-2 text-right">Variance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: 'Transport', planned: 500, spent: 450 },
                { category: 'Meals', planned: 800, spent: 820 },
                { category: 'Equipment', planned: 200, spent: 150 },
                { category: 'Misc', planned: 300, spent: 280 },
              ].map((row, idx) => {
                const variance = row.spent - row.planned;
                return (
                  <tr key={idx} className="border-t" style={{ borderColor: theme.mediumGray }}>
                    <td className="p-2">{row.category}</td>
                    <td className="p-2 text-right">Rs.{row.planned}</td>
                    <td className="p-2 text-right">Rs.{row.spent}</td>
                    <td
                      className="p-2 text-right font-bold"
                      style={{ color: variance > 0 ? theme.danger : theme.accent }}
                    >
                      {variance > 0 ? '+' : ''}Rs.{variance}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Phase6_AIOptimization() {
  const [progressData, setProgressData] = useState({
    photos: 45,
    measurements: 23,
    contacts: 8,
  });

  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
          ✨ AI Optimization & Progress Panel
        </h2>
        <p className="text-sm" style={{ color: theme.secondary }}>
          Real-time productivity tracking with AI-powered suggestions
        </p>
      </div>

      {/* Grok AI Suggestions Panel */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Grok AI Suggestions
        </h3>
        <div className="space-y-3">
          {[
            { icon: DollarSign, suggestion: 'Switch to bus for next 3 trips to save Rs.450', savings: 'Rs.450' },
            { icon: Users, suggestion: 'Share equipment with nearby researcher Ankit K.', savings: 'Rs.800' },
            { icon: Clock, suggestion: 'Visit Lab B in morning to avoid peak crowds', benefit: 'Time' },
            { icon: MapPin, suggestion: 'Combine Sites C & D visits tomorrow for efficiency', benefit: 'Logistics' },
          ].map((tip, idx) => (
            <div key={idx} className="p-4 rounded-xl border-2" style={{ borderColor: theme.accent, backgroundColor: theme.lightGray }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme.primary }}>
                  <tip.icon className="w-5 h-5" style={{ color: theme.white }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm mb-2">{tip.suggestion}</p>
                  {tip.savings && (
                    <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
                      Save {tip.savings}
                    </Badge>
                  )}
                  {tip.benefit && (
                    <Badge style={{ backgroundColor: theme.secondary, color: theme.white }}>
                      {tip.benefit} Benefit
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" style={{ backgroundColor: theme.primary, color: theme.white }}>
          <Sparkles className="w-4 h-4 mr-2" /> Get More AI Tips
        </Button>
      </div>

      {/* Daily Productivity Tracker */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Daily Productivity Tracker
        </h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-4 rounded-xl text-center" style={{ backgroundColor: theme.lightGray }}>
            <Camera className="w-6 h-6 mx-auto mb-2" style={{ color: theme.accent }} />
            <p className="text-2xl font-bold mb-1" style={{ color: theme.primary }}>{progressData.photos}</p>
            <p className="text-xs" style={{ color: theme.secondary }}>Photos</p>
          </div>
          <div className="p-4 rounded-xl text-center" style={{ backgroundColor: theme.lightGray }}>
            <Target className="w-6 h-6 mx-auto mb-2" style={{ color: theme.accent }} />
            <p className="text-2xl font-bold mb-1" style={{ color: theme.primary }}>{progressData.measurements}</p>
            <p className="text-xs" style={{ color: theme.secondary }}>Measurements</p>
          </div>
          <div className="p-4 rounded-xl text-center" style={{ backgroundColor: theme.lightGray }}>
            <Users className="w-6 h-6 mx-auto mb-2" style={{ color: theme.accent }} />
            <p className="text-2xl font-bold mb-1" style={{ color: theme.primary }}>{progressData.contacts}</p>
            <p className="text-xs" style={{ color: theme.secondary }}>Contacts</p>
          </div>
        </div>
        <Button
          onClick={() => {
            setProgressData({
              photos: progressData.photos + 1,
              measurements: progressData.measurements,
              contacts: progressData.contacts,
            });
            toast.success('Progress logged!');
          }}
          className="w-full"
          style={{ backgroundColor: theme.accent, color: theme.white }}
        >
          Log Today's Progress
        </Button>
      </div>

      {/* Progress vs. Projection Meters */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          Progress vs. Projection
        </h3>
        <div className="space-y-4">
          {[
            { label: 'Overall Progress', actual: 68, projected: 75, unit: '%' },
            { label: 'Today Progress', actual: 85, projected: 70, unit: '%' },
            { label: 'Budget Usage', actual: 62, projected: 65, unit: '%' },
          ].map((meter, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{meter.label}</span>
                <div className="flex gap-2">
                  <Badge style={{ backgroundColor: theme.accent, color: theme.white }}>
                    Actual: {meter.actual}{meter.unit}
                  </Badge>
                  <Badge style={{ backgroundColor: theme.secondary, color: theme.white }}>
                    Projected: {meter.projected}{meter.unit}
                  </Badge>
                </div>
              </div>
              <div className="w-full h-6 rounded-full relative" style={{ backgroundColor: theme.mediumGray }}>
                <div
                  className="h-6 rounded-full absolute top-0 left-0"
                  style={{ width: `${meter.projected}%`, backgroundColor: theme.secondary, opacity: 0.3 }}
                />
                <div
                  className="h-6 rounded-full absolute top-0 left-0 flex items-center justify-center text-white text-xs font-bold"
                  style={{ width: `${meter.actual}%`, backgroundColor: meter.actual >= meter.projected ? theme.accent : theme.warning }}
                >
                  {meter.actual >= meter.projected ? '✓ On Track' : '⚠ Behind'}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full mt-4" style={{ backgroundColor: theme.primary, color: theme.white }}>
          <TrendingUp className="w-4 h-4 mr-2" /> View Detailed Dashboard
        </Button>
      </div>

      {/* AI Productivity Insights */}
      <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: theme.white }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: theme.primary }}>
          AI Productivity Insights
        </h3>
        <div className="p-4 rounded-xl" style={{ backgroundColor: theme.lightGray }}>
          <div className="flex items-start gap-3 mb-3">
            <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: theme.accent }} />
            <div>
              <p className="text-sm font-bold mb-1">You are 15% ahead of schedule! 🎉</p>
              <p className="text-xs" style={{ color: theme.secondary }}>
                At this pace, you will complete data collection 2 days early, allowing extra time for analysis.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 flex-shrink-0" style={{ color: theme.warning }} />
            <div>
              <p className="text-sm font-bold mb-1">Budget Alert</p>
              <p className="text-xs" style={{ color: theme.secondary }}>
                Transport costs trending 8% higher than planned. Consider implementing suggested bus routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
