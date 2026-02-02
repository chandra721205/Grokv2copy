// Wellness Main Screen - OPTIMIZED VERSION
// Reduced from 578 lines to ~300 lines using:
// - wellnessData.ts for all data
// - CategoryHubTemplate for UI structure
// - Extracted sub-components

import { useState } from 'react';
import { CategoryHubTemplate } from '@/app/components/templates/CategoryHubTemplate';
import {
  wellnessCategories,
  wellnessPackages,
  treatmentCategories,
  yogaPrograms,
  getCategoriesByType
} from '@/data/wellnessData';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Heart, Leaf, TrendingUp, Award, Info } from 'lucide-react';

interface WellnessMainScreenProps {
  onNavigateToCategory: (categoryId: string) => void;
  onGetPersonalizedPlan: (categoryId: string) => void;
  onBack: () => void;
}

type ViewMode = 'hub' | 'category-detail' | 'benefits' | 'personalized-plan';

export function WellnessMainScreen({
  onNavigateToCategory,
  onGetPersonalizedPlan,
  onBack
}: WellnessMainScreenProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'benefits' | 'recommendation'>('benefits');

  // Category Detail View
  if (viewMode === 'category-detail' && selectedCategoryId) {
    const category = wellnessCategories.find(c => c.id === selectedCategoryId);
    if (!category) {
      setViewMode('hub');
      return null;
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
          🔧 Admin Editable Content - All text below can be updated
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => setViewMode('hub')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h1 className="text-3xl font-bold text-white mb-2">{category.title}</h1>
          <p className="text-white/90">{category.subtitle}</p>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Treatment Types */}
          <Card className="p-6">
            <h2 className="font-bold text-gray-900 mb-4">[Admin: Treatment Types]</h2>
            <div className="grid grid-cols-2 gap-2">
              {category.treatmentTypes.map(treatment => (
                <Badge key={treatment} variant="outline" className="text-xs justify-center py-2">
                  {treatment}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Cost & Facilities */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{category.costRange}</div>
              <div className="text-xs text-gray-600">Cost Range</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{category.facilitiesCount}</div>
              <div className="text-xs text-gray-600">Facilities</div>
            </Card>
          </div>

          {/* Related Packages */}
          <div>
            <h2 className="font-bold text-lg text-gray-900 mb-4">[Admin: Available Packages]</h2>
            {wellnessPackages
              .filter(pkg => pkg.category === category.id)
              .slice(0, 3)
              .map(pkg => (
                <Card key={pkg.id} className="p-6 mb-4">
                  <h3 className="font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>📅 {pkg.duration}</span>
                    <span>💰 {pkg.price}</span>
                  </div>
                  <Button
                    onClick={() => onNavigateToCategory(category.id)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full"
                  >
                    View Details
                  </Button>
                </Card>
              ))}
          </div>

          {/* Get Personalized Plan */}
          <Button
            onClick={() => onGetPersonalizedPlan(category.id)}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white h-14 rounded-2xl text-lg font-semibold"
          >
            Get Personalized Plan
          </Button>
        </div>
      </div>
    );
  }

  // Benefits View
  if (viewMode === 'benefits') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
          🔧 Admin Editable Content - All text below can be updated
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => setViewMode('hub')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h1 className="text-3xl font-bold text-white mb-2">[Admin: Wellness Benefits]</h1>
          <p className="text-white/90">[Admin: Why choose wellness tourism?]</p>
        </div>

        <div className="px-6 py-6">
          <WellnessBenefitsSection />
        </div>
      </div>
    );
  }

  // Main Hub View using CategoryHubTemplate
  return (
    <CategoryHubTemplate
      categoryName="Health & Wellness"
      description="Rejuvenate your mind, body & soul with holistic treatments"
      categories={wellnessCategories.map(cat => ({
        id: cat.id,
        name: cat.title,
        icon: cat.emoji,
        description: cat.subtitle,
        tags: cat.treatmentTypes.slice(0, 3),
        gradient: 'from-green-500 to-teal-600'
      }))}
      onBack={onBack}
      onCategorySelect={(id) => {
        setSelectedCategoryId(id);
        setViewMode('category-detail');
      }}
      heroGradient="from-green-500 to-teal-600"
      searchPlaceholder="Search wellness treatments..."
      showGoogleSearch={true}
      showYoutubeSearch={true}
      filters={[
        {
          id: 'category',
          label: 'Category',
          values: wellnessCategories.map(c => c.title)
        },
        {
          id: 'costRange',
          label: 'Budget',
          values: ['Under ₹25k', '₹25k-₹1L', '₹1L-₹5L', '₹5L+']
        },
        {
          id: 'duration',
          label: 'Duration',
          values: ['1-3 days', '4-7 days', '1-2 weeks', '2+ weeks']
        }
      ]}
      statsComponent={<WellnessStatsSection />}
      infoComponent={<WellnessInfoCard onViewBenefits={() => setViewMode('benefits')} />}
      renderHeaderActions={() => (
        <button
          onClick={() => setViewMode('benefits')}
          className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          💚 View Benefits
        </button>
      )}
      gridColumns={1}
    />
  );
}

// Stats Section Component
function WellnessStatsSection() {
  const totalCategories = wellnessCategories.length;
  const totalPackages = wellnessPackages.length;
  const totalPrograms = yogaPrograms.length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-green-600">{totalCategories}</div>
        <div className="text-xs text-gray-600">Categories</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">{totalPackages}</div>
        <div className="text-xs text-gray-600">Packages</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-purple-600">{totalPrograms}</div>
        <div className="text-xs text-gray-600">Programs</div>
      </Card>
    </div>
  );
}

// Wellness Info Card Component
function WellnessInfoCard({ onViewBenefits }: { onViewBenefits: () => void }) {
  return (
    <Card className="p-6 bg-gradient-to-r from-green-50 to-teal-50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">[Admin: Why Wellness Tourism?]</h2>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        [Admin: Combine healing treatments with travel for complete rejuvenation]
      </p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-green-600" />
          <span className="text-xs text-gray-700">Natural Healing</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-gray-700">Expert Care</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-600" />
          <span className="text-xs text-gray-700">Certified Centers</span>
        </div>
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-orange-600" />
          <span className="text-xs text-gray-700">Personalized</span>
        </div>
      </div>
      <Button
        onClick={onViewBenefits}
        className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full"
      >
        Learn More
      </Button>
    </Card>
  );
}

// Wellness Benefits Section
function WellnessBenefitsSection() {
  const benefits = [
    {
      icon: '🌿',
      title: '[Admin: Natural Healing]',
      description: 'Traditional therapies using natural ingredients and ancient wisdom',
      color: 'bg-green-100',
      textColor: 'text-green-700'
    },
    {
      icon: '🧘',
      title: '[Admin: Holistic Approach]',
      description: 'Treating mind, body, and spirit as interconnected',
      color: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      icon: '💆',
      title: '[Admin: Expert Care]',
      description: 'Certified practitioners with years of experience',
      color: 'bg-purple-100',
      textColor: 'text-purple-700'
    },
    {
      icon: '🏞️',
      title: '[Admin: Serene Locations]',
      description: 'Healing environments in nature\'s lap',
      color: 'bg-teal-100',
      textColor: 'text-teal-700'
    },
    {
      icon: '📊',
      title: '[Admin: Proven Results]',
      description: 'Thousands of successful treatments and satisfied guests',
      color: 'bg-orange-100',
      textColor: 'text-orange-700'
    },
    {
      icon: '💰',
      title: '[Admin: Affordable Pricing]',
      description: 'Quality treatments at fraction of international costs',
      color: 'bg-pink-100',
      textColor: 'text-pink-700'
    }
  ];

  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 ${benefit.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
              {benefit.icon}
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${benefit.textColor}`}>{benefit.title}</h3>
              <p className="text-sm text-gray-700">{benefit.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// Export for compatibility
export default WellnessMainScreen;
