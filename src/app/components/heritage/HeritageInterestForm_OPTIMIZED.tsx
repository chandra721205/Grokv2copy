// Heritage Interest Form - OPTIMIZED VERSION
// Reduced from 1,767 lines to ~450 lines using:
// - heritageData.ts for all data
// - Simplified form sections
// - Reusable form components

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Check, Info, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { HeritageConcessions } from '@/app/components/heritage/HeritageConcessions';
import {
  heritageThemes,
  travelingAsOptions,
  ageGroupOptions,
  specialRequirements,
  experienceTypes,
  tripLinkTypes,
  dateFlexibilityOptions,
  type HeritageTheme
} from '@/data/heritageData';

interface HeritageInterestFormData {
  primaryTheme: string;
  specificInterest: string;
  travelingAs: string;
  customGroupSize: number;
  ageGroups: string[];
  specialRequirements: string[];
  experienceType: string;
  specialRequests: string;
  tripLinkType: string;
  selectedExistingTrip: string;
  preferredStartDate: string;
  preferredEndDate: string;
  flexibleDates: string;
}

interface HeritageInterestFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: HeritageInterestFormData) => void;
}

type Section = 'A' | 'B' | 'C' | 'D';

export function HeritageInterestForm({ isOpen, onClose, onSubmit }: HeritageInterestFormProps) {
  const [formData, setFormData] = useState<HeritageInterestFormData>({
    primaryTheme: '',
    specificInterest: '',
    travelingAs: '',
    customGroupSize: 1,
    ageGroups: [],
    specialRequirements: [],
    experienceType: '',
    specialRequests: '',
    tripLinkType: '',
    selectedExistingTrip: '',
    preferredStartDate: '',
    preferredEndDate: '',
    flexibleDates: ''
  });

  const [currentSection, setCurrentSection] = useState<Section>('A');
  const [showConcessions, setShowConcessions] = useState(false);

  const selectedThemeData = heritageThemes.find(t => t.id === formData.primaryTheme);

  const handleThemeSelect = (themeId: string) => {
    setFormData({ ...formData, primaryTheme: themeId, specificInterest: '' });
  };

  const handleToggle = (field: 'ageGroups' | 'specialRequirements', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const handleContinue = () => {
    if (currentSection === 'A') setCurrentSection('B');
    else if (currentSection === 'B') setCurrentSection('C');
    else if (currentSection === 'C') setCurrentSection('D');
    else if (currentSection === 'D') {
      onSubmit(formData);
      onClose();
    }
  };

  const handleBack = () => {
    if (currentSection === 'B') setCurrentSection('A');
    else if (currentSection === 'C') setCurrentSection('B');
    else if (currentSection === 'D') setCurrentSection('C');
  };

  const canContinue = () => {
    if (currentSection === 'A') return formData.primaryTheme && formData.specificInterest;
    if (currentSection === 'B') return formData.travelingAs;
    if (currentSection === 'C') return formData.experienceType;
    if (currentSection === 'D') return formData.tripLinkType;
    return false;
  };

  if (!isOpen) return null;

  if (showConcessions) {
    return <HeritageConcessions onBack={() => setShowConcessions(false)} />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
      >
        {/* Admin Banner */}
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold sticky top-0 z-10">
          🔧 [Admin: Admin Editable Content - All text can be updated]
        </div>

        {/* Header */}
        <div className="sticky top-8 bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-xl">[Admin: Heritage Interest Form]</h2>
            <p className="text-white/80 text-sm">Section {currentSection} of 4</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-orange-600 transition-all duration-300"
            style={{ width: `${((['A', 'B', 'C', 'D'].indexOf(currentSection) + 1) / 4) * 100}%` }}
          />
        </div>

        {/* Form Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {currentSection === 'A' && (
              <SectionA
                formData={formData}
                selectedThemeData={selectedThemeData}
                onThemeSelect={handleThemeSelect}
                onInterestSelect={(interest) => setFormData({ ...formData, specificInterest: interest })}
                onShowConcessions={() => setShowConcessions(true)}
              />
            )}

            {currentSection === 'B' && (
              <SectionB
                formData={formData}
                onTravelingAsSelect={(value) => setFormData({ ...formData, travelingAs: value })}
                onGroupSizeChange={(size) => setFormData({ ...formData, customGroupSize: size })}
                onToggleAgeGroup={(value) => handleToggle('ageGroups', value)}
                onToggleRequirement={(value) => handleToggle('specialRequirements', value)}
              />
            )}

            {currentSection === 'C' && (
              <SectionC
                formData={formData}
                onExperienceTypeSelect={(value) => setFormData({ ...formData, experienceType: value })}
                onSpecialRequestsChange={(value) => setFormData({ ...formData, specialRequests: value })}
              />
            )}

            {currentSection === 'D' && (
              <SectionD
                formData={formData}
                onTripLinkTypeSelect={(value) => setFormData({ ...formData, tripLinkType: value })}
                onDateChange={(field, value) => setFormData({ ...formData, [field]: value })}
                onFlexibilitySelect={(value) => setFormData({ ...formData, flexibleDates: value })}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex gap-3">
          {currentSection !== 'A' && (
            <Button onClick={handleBack} variant="outline" className="flex-1">
              Back
            </Button>
          )}
          <Button
            onClick={handleContinue}
            disabled={!canContinue()}
            className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600"
          >
            {currentSection === 'D' ? 'Submit Interest' : 'Continue'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================
// SECTION A: HERITAGE THEME SELECTION
// ============================================

function SectionA({ formData, selectedThemeData, onThemeSelect, onInterestSelect, onShowConcessions }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h3 className="text-lg font-bold mb-2">[Admin: Select Heritage Theme]</h3>
      <p className="text-sm text-gray-600 mb-4">[Admin: Choose your primary area of interest]</p>

      {/* Concessions Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-blue-900 mb-1">
              [Admin: Special Discounts Available]
            </p>
            <p className="text-xs text-blue-700 mb-2">
              [Admin: Students, seniors, and groups get 30-60% off on heritage sites]
            </p>
            <button onClick={onShowConcessions} className="text-xs text-blue-600 underline font-semibold">
              View All Concessions →
            </button>
          </div>
        </div>
      </div>

      {/* Theme Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {heritageThemes.map(theme => (
          <button
            key={theme.id}
            onClick={() => onThemeSelect(theme.id)}
            className={`p-4 rounded-xl border-2 transition-all ${
              formData.primaryTheme === theme.id
                ? 'border-amber-500 bg-amber-50'
                : 'border-gray-200 hover:border-amber-300'
            }`}
          >
            <div className="text-3xl mb-2">{theme.icon}</div>
            <div className="text-sm font-semibold">{theme.label}</div>
          </button>
        ))}
      </div>

      {/* Specific Interests Dropdown */}
      {selectedThemeData && (
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">
            [Admin: Select Specific Interest in {selectedThemeData.label}]
          </label>
          <select
            value={formData.specificInterest}
            onChange={(e) => onInterestSelect(e.target.value)}
            className="w-full p-3 border rounded-xl bg-white"
          >
            <option value="">[Admin: -- Choose One --]</option>
            {selectedThemeData.specificInterests.map((interest: string, idx: number) => (
              <option key={idx} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
      )}
    </motion.div>
  );
}

// ============================================
// SECTION B: GROUP PROFILE
// ============================================

function SectionB({ formData, onTravelingAsSelect, onGroupSizeChange, onToggleAgeGroup, onToggleRequirement }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h3 className="text-lg font-bold mb-2">[Admin: Group Profile]</h3>
      <p className="text-sm text-gray-600 mb-4">[Admin: Tell us about your travel group]</p>

      {/* Traveling As */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Traveling As]</label>
        <div className="grid grid-cols-2 gap-2">
          {travelingAsOptions.map(option => (
            <button
              key={option.id}
              onClick={() => onTravelingAsSelect(option.id)}
              className={`p-3 rounded-xl border-2 transition-all text-left ${
                formData.travelingAs === option.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="text-xl mb-1">{option.icon}</div>
              <div className="text-xs font-semibold">{option.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Group Size */}
      {formData.travelingAs === 'custom' && (
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">[Admin: Group Size]</label>
          <input
            type="number"
            min="1"
            value={formData.customGroupSize}
            onChange={(e) => onGroupSizeChange(parseInt(e.target.value) || 1)}
            className="w-full p-3 border rounded-xl"
          />
        </div>
      )}

      {/* Age Groups */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Age Groups (Select all that apply)]</label>
        <div className="space-y-2">
          {ageGroupOptions.map(option => (
            <button
              key={option.id}
              onClick={() => onToggleAgeGroup(option.id)}
              className={`w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 ${
                formData.ageGroups.includes(option.id)
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="text-xl">{option.icon}</div>
              <div className="flex-1 text-left text-sm font-semibold">{option.label}</div>
              {formData.ageGroups.includes(option.id) && <Check className="w-5 h-5 text-amber-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Special Requirements */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Special Requirements]</label>
        <div className="space-y-2">
          {specialRequirements.map(option => (
            <button
              key={option.id}
              onClick={() => onToggleRequirement(option.id)}
              className={`w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 ${
                formData.specialRequirements.includes(option.id)
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="text-xl">{option.icon}</div>
              <div className="flex-1 text-left text-sm font-semibold">{option.label}</div>
              {formData.specialRequirements.includes(option.id) && <Check className="w-5 h-5 text-amber-600" />}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// SECTION C: EXPERIENCE CUSTOMIZATION
// ============================================

function SectionC({ formData, onExperienceTypeSelect, onSpecialRequestsChange }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h3 className="text-lg font-bold mb-2">[Admin: Experience Customization]</h3>
      <p className="text-sm text-gray-600 mb-4">[Admin: How would you like to explore?]</p>

      {/* Experience Type */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Experience Type]</label>
        <div className="space-y-2">
          {experienceTypes.map(type => (
            <button
              key={type.id}
              onClick={() => onExperienceTypeSelect(type.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                formData.experienceType === type.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">{type.icon}</div>
                <div className="font-semibold">{type.label}</div>
              </div>
              <div className="text-xs text-gray-600">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Special Requests (Optional)]</label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => onSpecialRequestsChange(e.target.value)}
          placeholder="[Admin: Any specific preferences or requirements?]"
          className="w-full p-3 border rounded-xl min-h-[100px]"
        />
      </div>
    </motion.div>
  );
}

// ============================================
// SECTION D: TRIP INTEGRATION
// ============================================

function SectionD({ formData, onTripLinkTypeSelect, onDateChange, onFlexibilitySelect }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h3 className="text-lg font-bold mb-2">[Admin: Trip Integration]</h3>
      <p className="text-sm text-gray-600 mb-4">[Admin: How should this fit into your travel plans?]</p>

      {/* Trip Link Type */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Trip Type]</label>
        <div className="space-y-2">
          {tripLinkTypes.map(type => (
            <button
              key={type.id}
              onClick={() => onTripLinkTypeSelect(type.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                formData.tripLinkType === type.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">{type.icon}</div>
                <div className="font-semibold">{type.label}</div>
              </div>
              <div className="text-xs text-gray-600">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Preferred Travel Dates]</label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">[Admin: Start Date]</label>
            <input
              type="date"
              value={formData.preferredStartDate}
              onChange={(e) => onDateChange('preferredStartDate', e.target.value)}
              className="w-full p-3 border rounded-xl"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">[Admin: End Date]</label>
            <input
              type="date"
              value={formData.preferredEndDate}
              onChange={(e) => onDateChange('preferredEndDate', e.target.value)}
              className="w-full p-3 border rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Date Flexibility */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">[Admin: Date Flexibility]</label>
        <div className="space-y-2">
          {dateFlexibilityOptions.map(option => (
            <button
              key={option.id}
              onClick={() => onFlexibilitySelect(option.id)}
              className={`w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 ${
                formData.flexibleDates === option.id
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="text-xl">{option.icon}</div>
              <div className="flex-1 text-left text-sm font-semibold">{option.label}</div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
