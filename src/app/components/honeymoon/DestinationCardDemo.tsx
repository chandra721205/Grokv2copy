import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { 
  DestinationCard,
  BeachDestinationCard,
  HeritageDestinationCard,
  WellnessDestinationCard,
  AdventureDestinationCard,
  HillStationDestinationCard,
  InternationalDestinationCard,
  generateDestinationCards,
  DestinationCardData
} from '@/app/components/honeymoon/DestinationCard';

// ========================================
// MASTER CARD DEMO COMPONENT
// Shows all 6 variants with examples
// ========================================

export function DestinationCardDemo() {
  const [selectedVariant, setSelectedVariant] = useState<string>('all');

  // Generate sample data for each variant
  const beachCards = generateDestinationCards('beach', 3);
  const heritageCards = generateDestinationCards('heritage', 3);
  const wellnessCards = generateDestinationCards('wellness', 3);
  const adventureCards = generateDestinationCards('adventure', 3);
  const hillStationCards = generateDestinationCards('hill-station', 3);
  const internationalCards = generateDestinationCards('international', 3);

  const handleExplore = (destination: DestinationCardData) => {
    console.log('Exploring destination:', destination);
    alert(`Exploring: ${destination.name}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => window.history.back()}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-white text-3xl font-bold">Master Card Components</h1>
            <p className="text-white/80 text-sm">6 Variants - All Admin Editable</p>
          </div>
        </div>

        {/* Variant Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['all', 'beach', 'heritage', 'wellness', 'adventure', 'hill-station', 'international'].map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                selectedVariant === variant
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Admin Instructions */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-3xl p-6 mb-6">
          <h2 className="text-lg font-bold text-purple-900 mb-3">🔧 Admin Card System</h2>
          <div className="space-y-2 text-sm text-purple-800">
            <p>✅ <strong>6 Variants:</strong> Beach, Heritage, Wellness, Adventure, Hill Station, International</p>
            <p>✅ <strong>Consistent Layout:</strong> All cards share the same structure</p>
            <p>✅ <strong>Admin Editable:</strong> Every text field can be updated</p>
            <p>✅ <strong>Visual Indicators:</strong> Gray backgrounds show editable content</p>
            <p>✅ <strong>Bulk Generation:</strong> Create multiple cards at once</p>
          </div>
        </div>

        {/* Beach Variant */}
        {(selectedVariant === 'all' || selectedVariant === 'beach') && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🏖️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Beach Destination Cards</h2>
                <p className="text-sm text-gray-600">Blue/Cyan gradient with wave icon</p>
              </div>
            </div>
            <div className="grid gap-4">
              {beachCards.map((card, index) => (
                <BeachDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + index * 0.1}
                  onExplore={handleExplore}
                  showAdminIndicators={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Heritage Variant */}
        {(selectedVariant === 'all' || selectedVariant === 'heritage') && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🏰</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Heritage Destination Cards</h2>
                <p className="text-sm text-gray-600">Amber/Orange gradient with castle icon</p>
              </div>
            </div>
            <div className="grid gap-4">
              {heritageCards.map((card, index) => (
                <HeritageDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + index * 0.1}
                  onExplore={handleExplore}
                  showAdminIndicators={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Wellness Variant */}
        {(selectedVariant === 'all' || selectedVariant === 'wellness') && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">💆</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Wellness Destination Cards</h2>
                <p className="text-sm text-gray-600">Emerald/Teal gradient with lotus icon</p>
              </div>
            </div>
            <div className="grid gap-4">
              {wellnessCards.map((card, index) => (
                <WellnessDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + index * 0.1}
                  onExplore={handleExplore}
                  showAdminIndicators={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Adventure Variant */}
        {(selectedVariant === 'all' || selectedVariant === 'adventure') && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Adventure Destination Cards</h2>
                <p className="text-sm text-gray-600">Red/Rose gradient with activity icon</p>
              </div>
            </div>
            <div className="grid gap-4">
              {adventureCards.map((card, index) => (
                <AdventureDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + index * 0.1}
                  onExplore={handleExplore}
                  showAdminIndicators={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Hill Station Variant */}
        {(selectedVariant === 'all' || selectedVariant === 'hill-station') && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">⛰️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Hill Station Cards</h2>
                <p className="text-sm text-gray-600">Green/Lime gradient with mountain icon</p>
              </div>
            </div>
            <div className="grid gap-4">
              {hillStationCards.map((card, index) => (
                <HillStationDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + index * 0.1}
                  onExplore={handleExplore}
                  showAdminIndicators={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* International Variant */}
        {(selectedVariant === 'all' || selectedVariant === 'international') && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">✈️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">International Destination Cards</h2>
                <p className="text-sm text-gray-600">Purple/Indigo gradient with plane icon</p>
              </div>
            </div>
            <div className="grid gap-4">
              {internationalCards.map((card, index) => (
                <InternationalDestinationCard
                  key={card.id}
                  data={card}
                  animationDelay={0.1 + index * 0.1}
                  onExplore={handleExplore}
                  showAdminIndicators={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Usage Guide */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 mt-8">
          <h2 className="text-lg font-bold text-blue-900 mb-3">📘 Usage Guide</h2>
          <div className="space-y-3 text-sm text-blue-800">
            <div>
              <p className="font-semibold mb-1">1. Import the component:</p>
              <code className="bg-blue-100 px-2 py-1 rounded text-xs block">
                {`import { BeachDestinationCard } from '@/app/components/honeymoon/DestinationCard';`}
              </code>
            </div>
            <div>
              <p className="font-semibold mb-1">2. Use with data:</p>
              <code className="bg-blue-100 px-2 py-1 rounded text-xs block whitespace-pre">
                {`<BeachDestinationCard 
  data={destinationData} 
  onExplore={handleExplore}
  showAdminIndicators={true}
/>`}
              </code>
            </div>
            <div>
              <p className="font-semibold mb-1">3. Generate bulk cards:</p>
              <code className="bg-blue-100 px-2 py-1 rounded text-xs block">
                {`const cards = generateDestinationCards('beach', 6);`}
              </code>
            </div>
          </div>
        </div>

        {/* Component Features */}
        <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-6 mt-6">
          <h2 className="text-lg font-bold text-green-900 mb-3">✨ Component Features</h2>
          <div className="grid grid-cols-2 gap-3 text-sm text-green-800">
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Variants:</strong> 6 destination types</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Icons:</strong> Auto color-coded</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Animations:</strong> Stagger support</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Compact Mode:</strong> Space-saving</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Admin Mode:</strong> Visual indicators</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Flexible:</strong> Optional fields</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
