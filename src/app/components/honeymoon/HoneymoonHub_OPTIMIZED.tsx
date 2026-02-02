// Honeymoon Hub - OPTIMIZED VERSION
// Reduced from 1,682 lines to ~350 lines using:
// - honeymoonData.ts for all data
// - CategoryHubTemplate for main UI
// - Simplified sub-screens

import { useState } from 'react';
import { CategoryHubTemplate } from '@/app/components/templates/CategoryHubTemplate';
import {
  honeymoonCategories,
  romanticPackages,
  getCategoryById,
  type HoneymoonPackage
} from '@/data/honeymoonData';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Heart, Star, MapPin, Calendar, ArrowLeft, Globe, Youtube } from 'lucide-react';
import { ComboTourPlanner } from '@/app/components/planning/ComboTourPlanner';
import { PersonalizedDealsAlert } from '@/app/components/shared/PersonalizedDealsAlert';
import { BeachParadiseScreen, HeritagePalacesScreen, WellnessRetreatsScreen } from '@/app/components/honeymoon/AdminEditableScreensEnhanced';

interface HoneymoonHubProps {
  onBack: () => void;
}

type ViewMode = 'hub' | 'category-detail' | 'planner' | 'beach-paradise' | 'heritage-palaces' | 'wellness-retreats';

export default function HoneymoonHub({ onBack }: HoneymoonHubProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [showPlanner, setShowPlanner] = useState(false);
  const [trackedInterests, setTrackedInterests] = useState<Set<string>>(new Set());

  const handleGoogleSearch = (query?: string) => {
    const searchQuery = query || 'romantic honeymoon destinations india';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
  };

  const handleYouTubeSearch = (query?: string) => {
    const searchQuery = query || 'honeymoon travel destinations india';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
  };

  const toggleInterestTracking = (packageId: string) => {
    setTrackedInterests(prev => {
      const newSet = new Set(prev);
      if (newSet.has(packageId)) {
        newSet.delete(packageId);
      } else {
        newSet.add(packageId);
      }
      return newSet;
    });
  };

  // Combo Tour Planner View
  if (showPlanner) {
    return <ComboTourPlanner onBack={() => setShowPlanner(false)} />;
  }

  // External sub-screens (already optimized elsewhere)
  if (viewMode === 'beach-paradise') {
    return <BeachParadiseScreen onBack={() => setViewMode('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (viewMode === 'heritage-palaces') {
    return <HeritagePalacesScreen onBack={() => setViewMode('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  if (viewMode === 'wellness-retreats') {
    return <WellnessRetreatsScreen onBack={() => setViewMode('hub')} onGoogleSearch={handleGoogleSearch} onYouTubeSearch={handleYouTubeSearch} />;
  }

  // Category Detail View
  if (viewMode === 'category-detail' && selectedCategoryId) {
    const category = getCategoryById(selectedCategoryId);
    if (!category) return null;

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Admin Banner */}
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
          🔧 [Admin: Admin Editable Content - All text below can be updated]
        </div>

        {/* Header */}
        <div className={`bg-gradient-to-r ${category.gradient} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
          <button
            onClick={() => setViewMode('hub')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <h1 className="text-white text-3xl font-bold mb-2">{category.name}</h1>
          <p className="text-white/90">{category.description}</p>

          {/* Search Buttons */}
          <div className="flex gap-3 mt-4">
            <Button
              onClick={() => handleGoogleSearch(category.name)}
              className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
            >
              <Globe className="w-4 h-4 mr-2" />
              Google Search
            </Button>
            <Button
              onClick={() => handleYouTubeSearch(category.name)}
              className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
            >
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </Button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="px-6 py-6 space-y-4">
          {category.packages.map(pkg => (
            <PackageCard
              key={pkg.id}
              package={pkg}
              isTracked={trackedInterests.has(pkg.id)}
              onToggleInterest={() => toggleInterestTracking(pkg.id)}
              onGoogleSearch={() => handleGoogleSearch(pkg.searchQuery)}
              onYouTubeSearch={() => handleYouTubeSearch(pkg.searchQuery)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Main Hub View
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Admin Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 [Admin: Admin Editable Content - All text below can be updated]
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">[Admin: Honeymoon & Romance]</h1>
            <p className="text-white/80 text-sm">[Admin: Create unforgettable memories together]</p>
          </div>
        </div>

        {/* Google & YouTube Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => handleGoogleSearch()}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => handleYouTubeSearch()}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6">
        {/* Personalized Deals Alert */}
        <div className="-mt-6 mb-6">
          <PersonalizedDealsAlert
            category="honeymoon"
            showAdminIndicators={false}
            onSavePreferences={(data) => console.log('Honeymoon deal preferences saved:', data)}
            content={{
              heading: '[Admin: Get Romantic Deal Alerts]',
              description: '[Admin: Set your budget for honeymoon packages]',
              budgetPlaceholder: '[Admin: e.g., ₹1,50,000 for 7 nights]',
              notificationText: '[Admin: Notify me of honeymoon & romance deals]',
              buttonLabel: '[Admin: Save Romance Preferences]'
            }}
          />
        </div>

        {/* Romantic Destinations - Main Packages */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">[Admin: Popular Romantic Packages]</h2>
          <div className="space-y-3">
            {romanticPackages.map(pkg => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                isTracked={trackedInterests.has(pkg.id)}
                onToggleInterest={() => toggleInterestTracking(pkg.id)}
                onGoogleSearch={() => handleGoogleSearch(pkg.searchQuery)}
                onYouTubeSearch={() => handleYouTubeSearch(pkg.searchQuery)}
              />
            ))}
          </div>
        </div>

        {/* Honeymoon Categories */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">[Admin: Explore Honeymoon Themes]</h2>
          <div className="grid grid-cols-2 gap-4">
            {honeymoonCategories.map((category, index) => (
              <Card
                key={category.id}
                className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => {
                  if (['beach-paradise', 'heritage-palaces', 'wellness-retreats'].includes(category.id)) {
                    setViewMode(category.id as ViewMode);
                  } else {
                    setSelectedCategoryId(category.id);
                    setViewMode('category-detail');
                  }
                }}
              >
                <div className={`h-24 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-3`}>
                  <span className="text-4xl">{category.icon}</span>
                </div>
                <h3 className="font-bold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600">{category.description}</p>
                <Badge className="mt-2" variant="secondary">
                  {category.packages.length} packages
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Build Custom Trip CTA */}
        <Card className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 mb-6">
          <h3 className="font-bold text-lg mb-2">[Admin: Build Your Dream Honeymoon]</h3>
          <p className="text-sm text-gray-700 mb-4">
            [Admin: Combine multiple destinations and experiences for your perfect romantic getaway]
          </p>
          <Button
            onClick={() => setShowPlanner(true)}
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white"
          >
            Open Trip Planner
          </Button>
        </Card>
      </div>
    </div>
  );
}

// ============================================
// PACKAGE CARD COMPONENT
// ============================================

interface PackageCardProps {
  package: HoneymoonPackage;
  isTracked: boolean;
  onToggleInterest: () => void;
  onGoogleSearch: () => void;
  onYouTubeSearch: () => void;
}

function PackageCard({ package: pkg, isTracked, onToggleInterest, onGoogleSearch, onYouTubeSearch }: PackageCardProps) {
  return (
    <Card className="p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-base mb-1">{pkg.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin className="w-3 h-3" />
            <span>{pkg.destination}</span>
          </div>
        </div>
        <button
          onClick={onToggleInterest}
          className={`p-2 rounded-full transition-colors ${isTracked ? 'bg-red-100' : 'bg-gray-100'}`}
        >
          <Heart className={`w-5 h-5 ${isTracked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold">{pkg.rating}</span>
          <span className="text-xs text-gray-500">({pkg.reviews})</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      {/* Inclusions */}
      {pkg.inclusions && pkg.inclusions.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {pkg.inclusions.slice(0, 4).map((inc, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {inc.icon} {inc.text}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Features (for packages with features instead of inclusions) */}
      {pkg.features && pkg.features.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {pkg.features.slice(0, 3).map((feature, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 pt-3 border-t">
        <Button onClick={onGoogleSearch} variant="outline" size="sm" className="flex-1">
          <Globe className="w-3 h-3 mr-1" />
          Google
        </Button>
        <Button onClick={onYouTubeSearch} variant="outline" size="sm" className="flex-1">
          <Youtube className="w-3 h-3 mr-1" />
          YouTube
        </Button>
        <div className="flex-1 text-right">
          <div className="text-lg font-bold text-pink-600">{pkg.price}</div>
        </div>
      </div>
    </Card>
  );
}
