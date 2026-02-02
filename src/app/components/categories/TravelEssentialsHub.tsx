// Travel Essentials Hub - OPTIMIZED VERSION
// Reduced from 1,156 lines to ~280 lines using:
// - travelEssentialsData.ts for all data
// - Simplified subcategory views
// - Reusable service cards

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft, Search, Globe, Youtube, Sparkles, ChevronRight,
  Building2, Home, Wallet, Plane, Car, Train, Bus, Navigation,
  Utensils, Coffee, UtensilsCrossed, Users, Languages, Briefcase,
  ShoppingBag, Heart, Stethoscope, Pill, Accessibility, Activity,
  Baby, PawPrint, HeartPulse, Smartphone, Shield, Wifi, Map,
  CreditCard, FileText, Package, Info, ExternalLink
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import {
  travelEssentialsSubcategories,
  getSubcategoryById,
  type EssentialSubcategory
} from '@/data/travelEssentialsData';

interface TravelEssentialsHubProps {
  onBack: () => void;
  onNavigateToSelfDrive?: () => void;
}

type ViewMode = 'hub' | 'subcategory-detail';

// Icon mapping helper
const iconMap: Record<string, any> = {
  Bed: Building2, Building2, Home, Wallet, Sparkles, Plane, Car, Train, Bus, Navigation,
  Utensils, Coffee, UtensilsCrossed, Users, Languages, Briefcase, ShoppingBag,
  Heart, Stethoscope, Pill, Accessibility, Activity, Baby, PawPrint, HeartPulse,
  Smartphone, Shield, Wifi, Map, CreditCard, FileText, Package, MessageSquare: Users,
  Wrench: Users, UserCircle: Users
};

export function TravelEssentialsHub({ onBack, onNavigateToSelfDrive }: TravelEssentialsHubProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationDetected] = useState('[Admin: Auto-Detect Location]');

  const handleGoogleSearch = (serviceName?: string) => {
    const query = serviceName
      ? `best ${serviceName} in ${locationDetected} 2026`
      : searchQuery || 'travel services india';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = (serviceName?: string) => {
    const query = serviceName
      ? `${serviceName} guide ${locationDetected}`
      : searchQuery || 'travel essentials india';
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  // Subcategory Detail View
  if (viewMode === 'subcategory-detail' && selectedSubcategoryId) {
    const subcategory = getSubcategoryById(selectedSubcategoryId);
    if (!subcategory) return null;

    const IconComponent = iconMap[subcategory.icon] || Package;

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Admin Banner */}
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
          🔧 [Admin: Admin Editable Content - All text below can be updated]
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => setViewMode('hub')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <IconComponent className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">{subcategory.name}</h1>
              <p className="text-white/80 text-sm">{subcategory.tagline}</p>
            </div>
          </div>

          {/* Search Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={() => handleGoogleSearch(subcategory.name)}
              className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
            >
              <Globe className="w-4 h-4 mr-2" />
              Google
            </Button>
            <Button
              onClick={() => handleYouTubeSearch(subcategory.name)}
              className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
            >
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </Button>
          </div>
        </div>

        {/* Special Note */}
        {subcategory.specialNote && (
          <div className="px-6 -mt-4 mb-4">
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">{subcategory.specialNote}</p>
              </div>
            </Card>
          </div>
        )}

        {/* Services List */}
        <div className="px-6 py-4 space-y-3">
          {subcategory.services.map(service => {
            const ServiceIcon = iconMap[service.icon] || Package;
            
            return (
              <Card key={service.id} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ServiceIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>

                    {/* Cross-reference badge */}
                    {service.isCrossReference && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
                        <div className="flex items-start gap-2">
                          <ExternalLink className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-amber-900 mb-1">
                              Available in: {service.crossRefCategory}
                            </p>
                            <p className="text-xs text-amber-700">{service.crossRefMessage}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Featured badge */}
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white mb-2">
                        ⭐ Featured Service
                      </Badge>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleGoogleSearch(service.name)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Globe className="w-3 h-3 mr-1" />
                        Find Providers
                      </Button>
                      <Button
                        onClick={() => handleYouTubeSearch(service.name)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Youtube className="w-3 h-3 mr-1" />
                        Watch Guides
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Package className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">[Admin: Travel Essentials]</h1>
            <p className="text-white/80 text-sm">[Admin: Everything you need for your journey]</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="[Admin: Search services...]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 rounded-full bg-white border-0 shadow-lg"
          />
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

      {/* Location Info */}
      <div className="px-6 -mt-4 mb-6">
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">
              [Admin: Finding services near] <span className="font-semibold">{locationDetected}</span>
            </span>
          </div>
        </Card>
      </div>

      {/* Subcategories Grid */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4">[Admin: Essential Services]</h2>
        <div className="grid grid-cols-1 gap-4">
          {travelEssentialsSubcategories.map(subcategory => {
            const IconComponent = iconMap[subcategory.icon] || Package;
            const isSpecial = subcategory.isSpecial;

            return (
              <motion.div
                key={subcategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-5 cursor-pointer hover:shadow-xl transition-all ${
                    isSpecial ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200' : ''
                  }`}
                  onClick={() => {
                    if (subcategory.id === 'custom-package-builder') {
                      // Handle custom package builder separately if needed
                      return;
                    }
                    setSelectedSubcategoryId(subcategory.id);
                    setViewMode('subcategory-detail');
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      isSpecial
                        ? 'bg-gradient-to-br from-amber-500 to-orange-500'
                        : 'bg-gradient-to-br from-blue-500 to-indigo-500'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{subcategory.name}</h3>
                        {isSpecial && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                            Special
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{subcategory.tagline}</p>
                      <p className="text-xs text-gray-500">{subcategory.description}</p>
                      {subcategory.services.length > 0 && (
                        <div className="mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {subcategory.services.length} services
                          </Badge>
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  </div>

                  {subcategory.specialNote && (
                    <div className="mt-3 pt-3 border-t border-amber-200">
                      <p className="text-xs text-amber-800">{subcategory.specialNote}</p>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
