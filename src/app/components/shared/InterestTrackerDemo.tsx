import { useState } from 'react';
import { ArrowLeft, Heart, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  InterestTrackerProvider,
  useInterestTracker,
  InterestDashboardSummary
} from '@/app/components/shared/InterestTracker';
import {
  BeachDestinationCard,
  HeritageDestinationCard,
  WellnessDestinationCard,
  AdventureDestinationCard,
  HillStationDestinationCard,
  InternationalDestinationCard,
  generateDestinationCards
} from '@/app/components/honeymoon/DestinationCard';

// ========================================
// INTEREST TRACKER DEMO
// ========================================

function DemoContent() {
  const { getAllInterests } = useInterestTracker();
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Generate sample cards
  const beachCards = generateDestinationCards('beach', 3);
  const heritageCards = generateDestinationCards('heritage', 3);
  const wellnessCards = generateDestinationCards('wellness', 3);
  const adventureCards = generateDestinationCards('adventure', 3);
  const hillStationCards = generateDestinationCards('hill-station', 3);
  const internationalCards = generateDestinationCards('international', 3);

  const allCards = [
    ...beachCards,
    ...heritageCards,
    ...wellnessCards,
    ...adventureCards,
    ...hillStationCards,
    ...internationalCards
  ];

  const categories = [
    { id: 'all', label: 'All Destinations', count: allCards.length },
    { id: 'beach', label: 'Beach', count: beachCards.length },
    { id: 'heritage', label: 'Heritage', count: heritageCards.length },
    { id: 'wellness', label: 'Wellness', count: wellnessCards.length },
    { id: 'adventure', label: 'Adventure', count: adventureCards.length },
    { id: 'hill-station', label: 'Hill Station', count: hillStationCards.length },
    { id: 'international', label: 'International', count: internationalCards.length }
  ];

  const getFilteredCards = () => {
    if (activeCategory === 'all') return allCards;
    if (activeCategory === 'beach') return beachCards;
    if (activeCategory === 'heritage') return heritageCards;
    if (activeCategory === 'wellness') return wellnessCards;
    if (activeCategory === 'adventure') return adventureCards;
    if (activeCategory === 'hill-station') return hillStationCards;
    if (activeCategory === 'international') return internationalCards;
    return allCards;
  };

  if (showDashboard) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => setShowDashboard(false)}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <BarChart3 className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold">Interest Dashboard</h1>
              <p className="text-white/80 text-sm">Admin analytics & insights</p>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="px-6 py-6">
          <InterestDashboardSummary />

          <div className="mt-6">
            <Button
              onClick={() => setShowDashboard(false)}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 h-14 rounded-2xl text-lg font-bold"
            >
              Back to Destination Cards
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={() => window.history.back()}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Interest Tracker</h1>
            <p className="text-white/80 text-sm">Click hearts to save destinations</p>
          </div>
        </div>

        {/* Interest Count Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-5 h-5 text-white fill-current" />
              <span className="text-white/90 text-xs font-semibold">Your Interests</span>
            </div>
            <p className="text-white text-2xl font-bold">{getAllInterests().length}</p>
          </div>

          <Button
            onClick={() => setShowDashboard(true)}
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 h-auto px-4 py-3 rounded-2xl"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Dashboard
          </Button>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Feature Explanation */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-600 fill-current" />
            How Interest Tracking Works
          </h2>
          <div className="space-y-2 text-sm text-blue-800">
            <p>✅ <strong>Click the heart icon</strong> in the top-right of any card</p>
            <p>✅ <strong>System logs:</strong> User ID + Destination ID + Timestamp</p>
            <p>✅ <strong>4 States:</strong> Outline → Hover → Filled → Checkmark (admin confirmed)</p>
            <p>✅ <strong>Admin Dashboard:</strong> Shows aggregated interest data</p>
            <p>✅ <strong>Automated Matching:</strong> Personalized deals based on interests</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Filter by Category</h2>
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Icon States Legend */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200 mb-6">
          <h3 className="text-lg font-bold mb-4">Heart Icon States</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-xs font-semibold">Default</p>
                <p className="text-[10px] text-gray-600">Outline heart</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="text-xs font-semibold">Hover</p>
                <p className="text-[10px] text-gray-600">Pink outline</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <div>
                <p className="text-xs font-semibold">Selected</p>
                <p className="text-[10px] text-gray-600">Filled heart</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold">Confirmed</p>
                <p className="text-[10px] text-gray-600">Admin confirmed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="space-y-4">
          {activeCategory === 'all' && (
            <>
              {/* Beach */}
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🏖️</span>
                  </div>
                  Beach Destinations
                </h3>
                <div className="space-y-4">
                  {beachCards.map((card, i) => (
                    <BeachDestinationCard
                      key={card.id}
                      data={card}
                      animationDelay={0.1 + i * 0.05}
                      onExplore={dest => alert(`Exploring: ${dest.name}`)}
                      showAdminIndicators={false}
                    />
                  ))}
                </div>
              </div>

              {/* Heritage */}
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🏰</span>
                  </div>
                  Heritage Sites
                </h3>
                <div className="space-y-4">
                  {heritageCards.map((card, i) => (
                    <HeritageDestinationCard
                      key={card.id}
                      data={card}
                      animationDelay={0.3 + i * 0.05}
                      onExplore={dest => alert(`Exploring: ${dest.name}`)}
                      showAdminIndicators={false}
                    />
                  ))}
                </div>
              </div>

              {/* Add more sections... */}
            </>
          )}

          {activeCategory === 'beach' && (
            <div className="space-y-4">
              {beachCards.map((card, i) => (
                <BeachDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + i * 0.05}
                  onExplore={dest => alert(`Exploring: ${dest.name}`)}
                  showAdminIndicators={false}
                />
              ))}
            </div>
          )}

          {activeCategory === 'heritage' && (
            <div className="space-y-4">
              {heritageCards.map((card, i) => (
                <HeritageDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + i * 0.05}
                  onExplore={dest => alert(`Exploring: ${dest.name}`)}
                  showAdminIndicators={false}
                />
              ))}
            </div>
          )}

          {activeCategory === 'wellness' && (
            <div className="space-y-4">
              {wellnessCards.map((card, i) => (
                <WellnessDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + i * 0.05}
                  onExplore={dest => alert(`Exploring: ${dest.name}`)}
                  showAdminIndicators={false}
                />
              ))}
            </div>
          )}

          {activeCategory === 'adventure' && (
            <div className="space-y-4">
              {adventureCards.map((card, i) => (
                <AdventureDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + i * 0.05}
                  onExplore={dest => alert(`Exploring: ${dest.name}`)}
                  showAdminIndicators={false}
                />
              ))}
            </div>
          )}

          {activeCategory === 'hill-station' && (
            <div className="space-y-4">
              {hillStationCards.map((card, i) => (
                <HillStationDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + i * 0.05}
                  onExplore={dest => alert(`Exploring: ${dest.name}`)}
                  showAdminIndicators={false}
                />
              ))}
            </div>
          )}

          {activeCategory === 'international' && (
            <div className="space-y-4">
              {internationalCards.map((card, i) => (
                <InternationalDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + i * 0.05}
                  onExplore={dest => alert(`Exploring: ${dest.name}`)}
                  showAdminIndicators={false}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function InterestTrackerDemo() {
  return (
    <InterestTrackerProvider>
      <DemoContent />
    </InterestTrackerProvider>
  );
}
