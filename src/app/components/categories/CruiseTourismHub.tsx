import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ArrowLeft, Ship, Calendar, Star, Clock, Users, Globe, Youtube } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { cruiseSubCategories, ageFilters, type CruiseSubCategory } from '@/data/cruiseData';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';

// ========================================
// OPTIMIZED CRUISE TOURISM HUB
// ========================================

interface CruiseTourismHubProps {
  onBack: () => void;
}

type View = 'home' | 'detail' | 'planner';
type PlannerStep = 1 | 2 | 3 | 4;

export default function CruiseTourismHub({ onBack }: CruiseTourismHubProps) {
  const [view, setView] = useState<View>('home');
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(null);
  const [selectedAgeFilters, setSelectedAgeFilters] = useState<string[]>(['all']);
  const [plannerStep, setPlannerStep] = useState<PlannerStep>(1);
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAgeFilter = (filterId: string) => {
    if (filterId === 'all') {
      setSelectedAgeFilters(['all']);
    } else {
      const newFilters = selectedAgeFilters.filter(f => f !== 'all');
      if (newFilters.includes(filterId)) {
        const updated = newFilters.filter(f => f !== filterId);
        setSelectedAgeFilters(updated.length > 0 ? updated : ['all']);
      } else {
        setSelectedAgeFilters([...newFilters, filterId]);
      }
    }
  };

  const filteredSubCategories = cruiseSubCategories.filter(subCat => {
    if (selectedAgeFilters.includes('all')) return true;
    return selectedAgeFilters.some(filter => subCat.ageGroups.includes(filter));
  });

  // View Routing
  if (view === 'planner') {
    return (
      <PlannerView
        onBack={() => setView('home')}
        step={plannerStep}
        onStepChange={setPlannerStep}
        selectedActivities={selectedActivities}
        onActivitiesChange={setSelectedActivities}
      />
    );
  }

  if (view === 'detail' && selectedSubCategory) {
    const subCat = cruiseSubCategories.find(s => s.id === selectedSubCategory);
    if (!subCat) {
      setView('home');
      return null;
    }
    return <DetailView subCategory={subCat} onBack={() => setView('home')} />;
  }

  // HOME VIEW
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Ship className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Cruise & Family Fun</h1>
            <p className="text-white/90 text-sm">Ocean adventures & family activities</p>
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search activities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-12 px-4 rounded-full mb-3 bg-white border-0 shadow-lg text-sm"
        />

        {/* Quick Action */}
        <Button
          onClick={() => setView('planner')}
          className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-full h-10 font-semibold"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Build Family Day Planner
        </Button>
      </div>

      {/* Age Filters */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-3xl p-4 shadow-md">
          <p className="text-sm font-semibold mb-3">Filter by Age Group</p>
          <div className="flex flex-wrap gap-2">
            {ageFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleAgeFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedAgeFilters.includes(filter.id)
                    ? filter.color
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-6 pb-8">
        <div className="grid grid-cols-1 gap-4">
          {filteredSubCategories.map((subCat, index) => (
            <CategoryCard
              key={subCat.id}
              category={subCat}
              index={index}
              onClick={() => {
                setSelectedSubCategory(subCat.id);
                setView('detail');
              }}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 p-4 bg-white rounded-2xl text-center shadow-md">
          <p className="text-xs text-gray-700">
            <strong>Admin-managed content.</strong> All destinations and pricing are dynamic placeholders.
          </p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// CATEGORY CARD
// ========================================
interface CategoryCardProps {
  category: CruiseSubCategory;
  index: number;
  onClick: () => void;
}

function CategoryCard({ category, index, onClick }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all cursor-pointer relative"
      onClick={onClick}
    >
      <div className="absolute top-4 right-4">
        <InterestTrackerIcon
          destinationId={`cruise-${category.id}`}
          destinationName={category.title}
          category="Cruise & Family Fun"
          size="sm"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
          <span className="text-4xl">{category.emoji}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{category.title}</h3>
          <p className="text-xs text-gray-500 mb-2">{category.tagline}</p>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Badge variant="outline" className="text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {category.duration}
          </Badge>
          <Badge variant="outline" className="text-xs flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {category.familyScore}
          </Badge>
        </div>
        <span className="text-sm font-bold text-blue-600">₹{category.startingPrice.toLocaleString()}+</span>
      </div>
    </motion.div>
  );
}

// ========================================
// DETAIL VIEW
// ========================================
interface DetailViewProps {
  subCategory: CruiseSubCategory;
  onBack: () => void;
}

function DetailView({ subCategory, onBack }: DetailViewProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-3xl font-bold">{subCategory.title}</h1>
        <p className="text-white/90 text-sm">{subCategory.tagline}</p>
      </div>

      <div className="px-6 -mt-4 pb-8 space-y-4">
        {/* Included Activities */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <h3 className="font-bold text-lg mb-3">Included Activities</h3>
          <div className="grid grid-cols-2 gap-2">
            {subCategory.included.activities.map((activity, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Info */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <h3 className="font-bold text-lg mb-3">Safety Measures</h3>
          {Object.entries(subCategory.safety).map(([key, items]) => (
            <div key={key} className="mb-3">
              <p className="text-sm font-semibold capitalize mb-2">{key.replace(/([A-Z])/g, ' $1')}</p>
              <ul className="space-y-1">
                {items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Grok Tips */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-5 shadow-md">
          <h3 className="font-bold text-lg mb-3">Grok AI Tips</h3>
          <div className="space-y-2">
            {subCategory.grokTips.map((tip, i) => (
              <p key={i} className="text-sm text-gray-700">{tip}</p>
            ))}
          </div>
        </div>

        {/* Booking Button */}
        <Button
          onClick={() => toast.success('Interest captured! Our team will contact you.')}
          className="w-full h-12 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-cyan-600"
        >
          Express Interest - ₹{subCategory.packagePrice.toLocaleString()}
        </Button>
      </div>
    </div>
  );
}

// ========================================
// PLANNER VIEW
// ========================================
interface PlannerViewProps {
  onBack: () => void;
  step: PlannerStep;
  onStepChange: (step: PlannerStep) => void;
  selectedActivities: number[];
  onActivitiesChange: (activities: number[]) => void;
}

function PlannerView({ onBack, step, onStepChange, selectedActivities, onActivitiesChange }: PlannerViewProps) {
  const handleSubmit = () => {
    toast.success('Family day plan created! Check your bookings.');
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-3xl font-bold">Build Family Day Planner</h1>
        <p className="text-white/90 text-sm mb-4">Step {step} of 4</p>
        
        {/* Progress Bar */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`h-2 flex-1 rounded-full ${s <= step ? 'bg-white' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>

      <div className="px-6 -mt-4 pb-8">
        {step === 1 && (
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <h2 className="text-xl font-bold mb-3">Step 1: Pick Activities</h2>
            <div className="space-y-3">
              {cruiseSubCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (selectedActivities.includes(cat.id)) {
                      onActivitiesChange(selectedActivities.filter(id => id !== cat.id));
                    } else {
                      onActivitiesChange([...selectedActivities, cat.id]);
                    }
                  }}
                  className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                    selectedActivities.includes(cat.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.emoji}</span>
                    <div className="flex-1">
                      <p className="font-semibold">{cat.title}</p>
                      <p className="text-xs text-gray-600">₹{cat.startingPrice.toLocaleString()}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <Button
              onClick={() => onStepChange(2)}
              disabled={selectedActivities.length === 0}
              className="w-full mt-4 h-11 rounded-full"
            >
              Next Step
            </Button>
          </div>
        )}

        {step > 1 && (
          <div className="bg-white rounded-3xl p-5 shadow-md">
            <h2 className="text-xl font-bold mb-3">Step {step}: Additional Details</h2>
            <p className="text-sm text-gray-600 mb-4">Complete your family day plan with preferences and requirements.</p>
            <div className="flex gap-3">
              <Button onClick={() => onStepChange((step - 1) as PlannerStep)} variant="outline" className="flex-1 rounded-full">
                Previous
              </Button>
              {step < 4 ? (
                <Button onClick={() => onStepChange((step + 1) as PlannerStep)} className="flex-1 rounded-full">
                  Next Step
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="flex-1 rounded-full bg-green-600 hover:bg-green-700">
                  Complete Plan
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CruiseTourismHub;
