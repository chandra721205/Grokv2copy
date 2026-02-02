// Adventure Tourism Hub - OPTIMIZED VERSION
// Reduced from 1,948 lines to ~350 lines using:
// - CategoryHubTemplate for UI structure
// - adventureData.ts for all data
// - ActivityDetailView for detail screens
// - Extracted sub-components

import { useState } from 'react';
import { CategoryHubTemplate } from '@/app/components/templates/CategoryHubTemplate';
import { ActivityDetailView } from './adventure/ActivityDetailView';
import { ComboTourPlanner } from '@/app/components/planning/ComboTourPlanner';
import {
  adventureCategories,
  difficultyLevels,
  seasonalRecommendations,
  type AdventureActivity
} from '@/data/adventureData';
import { Card } from '@/app/components/ui/card';
import { Shield, Users, Phone, TrendingUp } from 'lucide-react';

interface AdventureTourismHubProps {
  onBack: () => void;
}

type ViewMode = 'hub' | 'detail' | 'combo-planner';

export default function AdventureTourismHub({ onBack }: AdventureTourismHubProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);

  // Handle combo tour planner
  if (viewMode === 'combo-planner') {
    return <ComboTourPlanner onBack={() => setViewMode('hub')} />;
  }

  // Handle activity detail view
  if (viewMode === 'detail' && selectedActivityId) {
    return (
      <ActivityDetailView
        activityId={selectedActivityId}
        onBack={() => {
          setViewMode('hub');
          setSelectedActivityId(null);
        }}
      />
    );
  }

  // Main hub view using template
  return (
    <CategoryHubTemplate
      categoryName="Adventure Tourism"
      description="Explore thrilling adventures across India"
      categories={adventureCategories.map(activity => ({
        id: activity.id,
        name: activity.name,
        icon: activity.icon,
        description: activity.description,
        difficulty: activity.difficulty,
        duration: activity.duration,
        tags: activity.seasons,
        ...activity
      }))}
      onBack={onBack}
      onCategorySelect={(id) => {
        setSelectedActivityId(id);
        setViewMode('detail');
      }}
      heroGradient="from-orange-500 to-red-600"
      searchPlaceholder="Search adventure activities..."
      showGoogleSearch={true}
      showYoutubeSearch={true}
      filters={[
        {
          id: 'difficulty',
          label: 'Difficulty Level',
          values: Object.keys(difficultyLevels)
        },
        {
          id: 'seasons',
          label: 'Best Season',
          values: ['All Year', 'Oct-May', 'Dec-Feb', 'Mar-May', 'Sep-Nov']
        }
      ]}
      statsComponent={<StatsSection />}
      infoComponent={<SafetyBanner />}
      renderHeaderActions={() => (
        <button
          onClick={() => setViewMode('combo-planner')}
          className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          + Plan Combo Tour
        </button>
      )}
      gridColumns={2}
    />
  );
}

// Safety Banner Component
function SafetyBanner() {
  return (
    <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Shield className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">[Admin: Safety First]</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-xs font-semibold text-gray-700">[Admin: Certified Guides]</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <Shield className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-xs font-semibold text-gray-700">[Admin: Safety Gear]</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-2">
            <Phone className="w-6 h-6 text-red-600" />
          </div>
          <p className="text-xs font-semibold text-gray-700">[Admin: 24/7 Support]</p>
        </div>
      </div>
    </Card>
  );
}

// Stats Section Component
function StatsSection() {
  const totalActivities = adventureCategories.length;
  const easyActivities = adventureCategories.filter(a => a.difficulty === 'easy').length;
  const allSeasonActivities = adventureCategories.filter(
    a => a.seasons.includes('All Year')
  ).length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-orange-600 mb-1">{totalActivities}</div>
        <div className="text-xs text-gray-600">Activities</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-green-600 mb-1">{easyActivities}</div>
        <div className="text-xs text-gray-600">Beginner-Friendly</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600 mb-1">{allSeasonActivities}</div>
        <div className="text-xs text-gray-600">All Season</div>
      </Card>
    </div>
  );
}

// Export for compatibility
export default AdventureTourismHub;
