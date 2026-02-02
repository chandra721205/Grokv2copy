import { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { AdminModeProvider, useAdminMode } from '@/app/components/admin/AdminModeContext';
import { AdminModeToggle } from '@/app/components/admin/AdminControlPanel';
import {
  ResearchDestination,
  BeachResearchBox,
  HeritageResearchBox,
  WellnessResearchBox,
  AdventureResearchBox,
  HillStationResearchBox,
  InternationalResearchBox,
  ResearchDestinationPresets
} from '@/app/components/shared/ResearchDestination';

// ========================================
// RESEARCH DESTINATION COMPONENT DEMO
// ========================================

function DemoContent() {
  const { isAdminMode } = useAdminMode();
  const [selectedVariant, setSelectedVariant] = useState<string>('all');

  const handleGoogleSearch = (query: string) => {
    console.log('Google search:', query);
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = (query: string) => {
    console.log('YouTube search:', query);
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => window.history.back()}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-white text-3xl font-bold">Research Destination Component</h1>
            <p className="text-white/80 text-sm">Browse before you book - All variants</p>
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
                  ? 'bg-white text-blue-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Admin Mode Toggle */}
      <AdminModeToggle />

      <div className="px-6 py-6">
        {/* Component Overview */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-3xl p-6 mb-6">
          <h2 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Component Purpose
          </h2>
          <div className="space-y-2 text-sm text-purple-800">
            <p>✅ <strong>Location:</strong> Below destination description, above booking button</p>
            <p>✅ <strong>Purpose:</strong> Let users research destinations via YouTube & Google</p>
            <p>✅ <strong>Tracking:</strong> System tracks interests for personalized deal recommendations</p>
            <p>✅ <strong>Admin:</strong> All content is admin-editable with 5-level hierarchy</p>
            <p>✅ <strong>Privacy:</strong> Clear privacy notes about tracking and data usage</p>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Key Features</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-xl p-3">
              <p className="text-xs font-semibold text-blue-900 mb-1">YouTube Browse</p>
              <p className="text-[10px] text-blue-700">Watch destination videos & travel vlogs</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-xs font-semibold text-green-900 mb-1">Google Search</p>
              <p className="text-[10px] text-green-700">Search guides, reviews & information</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-3">
              <p className="text-xs font-semibold text-amber-900 mb-1">Interest Tracking</p>
              <p className="text-[10px] text-amber-700">Personalized deal recommendations</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3">
              <p className="text-xs font-semibold text-purple-900 mb-1">Privacy Protected</p>
              <p className="text-[10px] text-purple-700">Clear privacy policy notes</p>
            </div>
          </div>
        </div>

        {/* Admin Editable Fields */}
        {isAdminMode && (
          <div className="bg-purple-50 border-2 border-purple-300 rounded-3xl p-6 mb-6">
            <h2 className="text-lg font-bold text-purple-900 mb-4">Admin Editable Fields</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">L2</span>
                <span className="text-gray-700">Browse Heading Text</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">L3</span>
                <span className="text-gray-700">YouTube Button Label</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">L3</span>
                <span className="text-gray-700">Google Button Label</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">L4</span>
                <span className="text-gray-700">Browsing Benefit Description (200 chars)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-rose-500 text-white text-xs rounded-full">L5</span>
                <span className="text-gray-700">Privacy Policy Note (150 chars)</span>
              </div>
            </div>
          </div>
        )}

        {/* Beach Variant */}
        {(selectedVariant === 'all' || selectedVariant === 'beach') && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🏖️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Beach Destinations</h2>
                <p className="text-sm text-gray-600">Research beaches & coastal paradise</p>
              </div>
            </div>
            <BeachResearchBox
              destinationName="Maldives Beach Resort"
              onGoogleSearch={handleGoogleSearch}
              onYouTubeSearch={handleYouTubeSearch}
              showAdminIndicators={isAdminMode}
            />
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
                <h2 className="text-xl font-bold">Heritage Sites</h2>
                <p className="text-sm text-gray-600">Explore historical monuments & culture</p>
              </div>
            </div>
            <HeritageResearchBox
              destinationName="Royal Palace Heritage Site"
              onGoogleSearch={handleGoogleSearch}
              onYouTubeSearch={handleYouTubeSearch}
              showAdminIndicators={isAdminMode}
            />
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
                <h2 className="text-xl font-bold">Wellness Retreats</h2>
                <p className="text-sm text-gray-600">Discover spa & wellness experiences</p>
              </div>
            </div>
            <WellnessResearchBox
              destinationName="Ayurvedic Spa Retreat"
              onGoogleSearch={handleGoogleSearch}
              onYouTubeSearch={handleYouTubeSearch}
              showAdminIndicators={isAdminMode}
            />
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
                <h2 className="text-xl font-bold">Adventure Activities</h2>
                <p className="text-sm text-gray-600">Research thrilling experiences</p>
              </div>
            </div>
            <AdventureResearchBox
              destinationName="Mountain Adventure Camp"
              onGoogleSearch={handleGoogleSearch}
              onYouTubeSearch={handleYouTubeSearch}
              showAdminIndicators={isAdminMode}
            />
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
                <h2 className="text-xl font-bold">Hill Stations</h2>
                <p className="text-sm text-gray-600">Explore mountain getaways</p>
              </div>
            </div>
            <HillStationResearchBox
              destinationName="Mountain Hill Station"
              onGoogleSearch={handleGoogleSearch}
              onYouTubeSearch={handleYouTubeSearch}
              showAdminIndicators={isAdminMode}
            />
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
                <h2 className="text-xl font-bold">International Destinations</h2>
                <p className="text-sm text-gray-600">Discover global travel options</p>
              </div>
            </div>
            <InternationalResearchBox
              destinationName="Paris France"
              onGoogleSearch={handleGoogleSearch}
              onYouTubeSearch={handleYouTubeSearch}
              showAdminIndicators={isAdminMode}
            />
          </div>
        )}

        {/* Usage Code */}
        <div className="bg-gray-900 rounded-3xl p-6 text-white mb-6">
          <h2 className="text-lg font-bold mb-4">Usage Example</h2>
          <pre className="text-xs overflow-x-auto">
            <code>{`import { BeachResearchBox } from '@/app/components/shared/ResearchDestination';

<BeachResearchBox
  destinationName="Maldives Beach Resort"
  onGoogleSearch={handleGoogleSearch}
  onYouTubeSearch={handleYouTubeSearch}
  showAdminIndicators={isAdminMode}
/>`}</code>
          </pre>
        </div>

        {/* Integration Guide */}
        <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-6">
          <h2 className="text-lg font-bold text-green-900 mb-4">Integration Checklist</h2>
          <div className="space-y-2 text-sm text-green-800">
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Placement:</strong> Add below destination description, above booking button</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Variant:</strong> Use variant-specific component (BeachResearchBox, etc.)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Handlers:</strong> Pass onGoogleSearch and onYouTubeSearch functions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Admin:</strong> Add research fields to AdminControlPanel fields array</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Tracking:</strong> Component auto-tracks research to localStorage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResearchDestinationDemo() {
  return (
    <AdminModeProvider>
      <DemoContent />
    </AdminModeProvider>
  );
}
