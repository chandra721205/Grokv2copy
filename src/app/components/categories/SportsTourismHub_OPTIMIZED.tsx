// Sports Tourism Hub - OPTIMIZED VERSION
// Reduced from 1,225 lines to ~350 lines using:
// - sportsData.ts for all data
// - CategoryHubTemplate for UI structure
// - Extracted sub-components

import { useState } from 'react';
import { CategoryHubTemplate } from '@/app/components/templates/CategoryHubTemplate';
import {
  sportsCategories,
  playerModes,
  sportsPackages,
  seasonalityData,
  getSportsByCategory
} from '@/data/sportsData';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Trophy, Users, TrendingUp, Calendar } from 'lucide-react';

interface SportsTourismHubProps {
  onBack: () => void;
}

type ViewMode = 'hub' | 'player-modes' | 'sport-detail' | 'booking';

export default function SportsTourismHub({ onBack }: SportsTourismHubProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedSportId, setSelectedSportId] = useState<string | null>(null);
  const [selectedPlayerMode, setSelectedPlayerMode] = useState<string | null>(null);

  // Player Modes View
  if (viewMode === 'player-modes') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
          🔧 Admin Editable Content - All text below can be updated
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => setViewMode('hub')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h1 className="text-3xl font-bold text-white mb-2">[Admin: Choose Your Player Mode]</h1>
          <p className="text-white/90">[Admin: Select how you want to experience sports]</p>
        </div>

        <div className="px-6 py-6 space-y-4">
          {playerModes.map(mode => (
            <Card
              key={mode.id}
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => {
                setSelectedPlayerMode(mode.id);
                setViewMode('hub');
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`text-4xl w-16 h-16 ${mode.bgColor} rounded-2xl flex items-center justify-center`}>
                  {mode.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{mode.name}</h3>
                  <p className="text-sm text-gray-600">{mode.subtitle}</p>
                </div>
                <Badge variant="outline">{mode.difficulty}</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-3">{mode.context}</p>
              <div className="flex flex-wrap gap-2">
                {mode.tags.map(tag => (
                  <Badge key={tag} className="text-xs">{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Sport Detail View (simplified - can be extracted to separate component)
  if (viewMode === 'sport-detail' && selectedSportId) {
    const category = sportsCategories.find(c => c.id === selectedSportId);
    if (!category) {
      setViewMode('hub');
      return null;
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
          🔧 Admin Editable Content - All text below can be updated
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => setViewMode('hub')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h1 className="text-3xl font-bold text-white mb-2">{category.name}</h1>
          <p className="text-white/90">{category.sports.length} sports available</p>
        </div>

        <div className="px-6 py-6">
          <div className="grid grid-cols-2 gap-4">
            {category.sports.map(sport => (
              <Card key={sport.name} className="p-4 text-center">
                <div className="text-3xl mb-2">{sport.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{sport.name}</h3>
                <p className="text-xs text-gray-600">{sport.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-lg mb-4 text-gray-900">[Admin: Available Packages]</h2>
            {sportsPackages
              .filter(pkg => pkg.sports.some(s => category.sports.some(cs => cs.name.includes(s))))
              .map(pkg => (
                <Card key={pkg.id} className="p-6 mb-4">
                  <h3 className="font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>📅 {pkg.duration}</span>
                    <span>💰 {pkg.price}</span>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                    Book Package
                  </Button>
                </Card>
              ))}
          </div>
        </div>
      </div>
    );
  }

  // Main Hub View using CategoryHubTemplate
  return (
    <CategoryHubTemplate
      categoryName="Sports Tourism"
      description="Experience sports as a fan, player, learner, or adventurer"
      categories={sportsCategories.map(cat => ({
        id: cat.id,
        name: cat.name,
        icon: cat.icon,
        description: `${cat.sports.length} sports`,
        tags: cat.sports.slice(0, 3).map(s => s.name),
        gradient: cat.gradient
      }))}
      onBack={onBack}
      onCategorySelect={(id) => {
        setSelectedSportId(id);
        setViewMode('sport-detail');
      }}
      heroGradient="from-blue-500 to-indigo-600"
      searchPlaceholder="Search sports, activities..."
      showGoogleSearch={true}
      showYoutubeSearch={true}
      filters={[
        {
          id: 'playerMode',
          label: 'Player Mode',
          values: playerModes.map(m => m.name)
        },
        {
          id: 'difficulty',
          label: 'Difficulty',
          values: ['Easy', 'Moderate', 'Hard']
        },
        {
          id: 'season',
          label: 'Best Season',
          values: ['All Year', 'Summer', 'Winter', 'Monsoon']
        }
      ]}
      statsComponent={<SportsStatsSection />}
      infoComponent={<PlayerModesCard onSelectMode={() => setViewMode('player-modes')} />}
      renderHeaderActions={() => (
        <button
          onClick={() => setViewMode('player-modes')}
          className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          🎯 Choose Player Mode
        </button>
      )}
      gridColumns={2}
    />
  );
}

// Stats Section Component
function SportsStatsSection() {
  const totalCategories = sportsCategories.length;
  const totalSports = sportsCategories.reduce((acc, cat) => acc + cat.sports.length, 0);
  const totalPackages = sportsPackages.length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">{totalCategories}</div>
        <div className="text-xs text-gray-600">Categories</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-green-600">{totalSports}+</div>
        <div className="text-xs text-gray-600">Sports</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-orange-600">{totalPackages}</div>
        <div className="text-xs text-gray-600">Packages</div>
      </Card>
    </div>
  );
}

// Player Modes Card Component
function PlayerModesCard({ onSelectMode }: { onSelectMode: () => void }) {
  return (
    <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
          <Trophy className="w-5 h-5 text-purple-600" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">[Admin: 4 Player Modes]</h2>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        [Admin: Choose how you want to experience sports - as a fan, player, learner, or adventurer]
      </p>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {playerModes.map(mode => (
          <div key={mode.id} className="text-center">
            <div className={`text-2xl w-12 h-12 ${mode.bgColor} rounded-xl flex items-center justify-center mx-auto mb-1`}>
              {mode.emoji}
            </div>
            <p className="text-xs font-semibold text-gray-700">{mode.name}</p>
          </div>
        ))}
      </div>
      <Button
        onClick={onSelectMode}
        className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full"
      >
        Explore Player Modes
      </Button>
    </Card>
  );
}

// Export for compatibility
export default SportsTourismHub;
