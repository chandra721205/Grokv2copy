import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ArrowLeft, Building2, Filter, X, Globe, Youtube, Users, Clock, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { corporateSubCategories, corporateTheme, type CorporateSubCategory } from '@/data/corporateData';
import { CorporateCategoryDetailEnhanced } from '@/app/components/categories/corporate/CorporateCategoryDetailEnhanced';
import { CorporateEventDetailsForm } from '@/app/components/categories/corporate/CorporateEventDetailsForm';
import { CorporateProposalScreen } from '@/app/components/categories/corporate/CorporateProposalScreen';
import { CorporateConfirmBooking } from '@/app/components/categories/corporate/CorporateConfirmBooking';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';

// ========================================
// OPTIMIZED CORPORATE & MICE HUB
// ========================================

type Screen = 'hub' | 'detail' | 'form' | 'proposal' | 'confirm';

interface NavigationState {
  screen: Screen;
  categoryId?: number;
  formData?: any;
  proposal?: any;
}

interface Filters {
  groupSize: string;
  budgetRange: string;
  duration: string;
}

const filterOptions = {
  groupSize: [
    { label: 'Small (10-50)', min: 10, max: 50 },
    { label: 'Medium (50-200)', min: 50, max: 200 },
    { label: 'Large (200+)', min: 200, max: 10000 },
  ],
  budgetRange: [
    { label: 'Budget (₹0-2L)', min: 0, max: 200000 },
    { label: 'Mid (₹2L-10L)', min: 200000, max: 1000000 },
    { label: 'Premium (₹10L+)', min: 1000000, max: 100000000 },
  ],
  duration: [
    { label: '1 Day', days: 1 },
    { label: '2-3 Days', days: 2 },
    { label: '4+ Days', days: 4 },
  ],
};

export default function CorporateMICEHubEnhanced({ onBack }: { onBack: () => void }) {
  const [navState, setNavState] = useState<NavigationState>({ screen: 'hub' });
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    groupSize: '',
    budgetRange: '',
    duration: '',
  });

  const handleGoogleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query + ' India')}`, '_blank');
  };

  const handleYouTubeSearch = (query: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query + ' India')}`, '_blank');
  };

  const getCurrentCategory = () => {
    if (navState.screen === 'hub') return null;
    return corporateSubCategories.find(cat => cat.id === navState.categoryId) || null;
  };

  const getFilteredCategories = () => {
    if (!filters.groupSize && !filters.budgetRange && !filters.duration) {
      return corporateSubCategories;
    }

    return corporateSubCategories.filter(cat => {
      if (filters.groupSize) {
        const groupSizeFilter = filterOptions.groupSize.find(opt => opt.label === filters.groupSize);
        if (groupSizeFilter) {
          const matchesMin = cat.groupSizeMin >= groupSizeFilter.min;
          const matchesMax = cat.groupSizeMax <= groupSizeFilter.max;
          if (!matchesMin && !matchesMax) return false;
        }
      }

      if (filters.budgetRange) {
        const budgetFilter = filterOptions.budgetRange.find(opt => opt.label === filters.budgetRange);
        if (budgetFilter) {
          const inRange = cat.budgetMin <= budgetFilter.max && cat.budgetMax >= budgetFilter.min;
          if (!inRange) return false;
        }
      }

      if (filters.duration) {
        const durationFilter = filterOptions.duration.find(opt => opt.label === filters.duration);
        if (durationFilter) {
          const matchesDuration = cat.durationDays >= durationFilter.days - 1 && cat.durationDays <= durationFilter.days + 2;
          if (!matchesDuration) return false;
        }
      }

      return true;
    });
  };

  const filteredCategories = getFilteredCategories();
  const hasActiveFilters = filters.groupSize || filters.budgetRange || filters.duration;
  const currentCategory = getCurrentCategory();

  const clearFilters = () => {
    setFilters({ groupSize: '', budgetRange: '', duration: '' });
  };

  // SCREEN ROUTING
  if (navState.screen === 'detail' && currentCategory) {
    return (
      <CorporateCategoryDetailEnhanced
        category={currentCategory}
        onBack={() => setNavState({ screen: 'hub' })}
        onNext={(data) => setNavState({ screen: 'form', categoryId: currentCategory.id, formData: data })}
      />
    );
  }

  if (navState.screen === 'form' && currentCategory) {
    return (
      <CorporateEventDetailsForm
        category={currentCategory}
        onBack={() => setNavState({ screen: 'detail', categoryId: currentCategory.id })}
        onNext={(formData) => setNavState({ screen: 'proposal', categoryId: currentCategory.id, formData })}
      />
    );
  }

  if (navState.screen === 'proposal' && currentCategory && navState.formData) {
    return (
      <CorporateProposalScreen
        category={currentCategory}
        formData={navState.formData}
        onBack={() => setNavState({ screen: 'form', categoryId: currentCategory.id, formData: navState.formData })}
        onNext={(proposal) => setNavState({ screen: 'confirm', categoryId: currentCategory.id, proposal })}
      />
    );
  }

  if (navState.screen === 'confirm' && currentCategory && navState.proposal) {
    return (
      <CorporateConfirmBooking
        category={currentCategory}
        proposal={navState.proposal}
        onBack={() => setNavState({ screen: 'proposal', categoryId: currentCategory.id, formData: navState.formData })}
        onConfirm={() => {
          toast.success('Booking confirmed! Our team will contact you shortly.');
          setNavState({ screen: 'hub' });
        }}
      />
    );
  }

  // HUB VIEW
  return (
    <div className="min-h-screen" style={{ backgroundColor: corporateTheme.background }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-700 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Building2 className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Corporate & MICE</h1>
            <p className="text-white/80 text-sm">Professional event planning solutions</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Button
            onClick={() => handleGoogleSearch('corporate event venues')}
            className="flex-1 bg-white text-slate-600 hover:bg-gray-100 rounded-full h-9 text-sm flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4" />
            Search Venues
          </Button>
          <Button
            onClick={() => handleYouTubeSearch('corporate event planning')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9 text-sm flex items-center justify-center gap-2"
          >
            <Youtube className="w-4 h-4" />
            Watch Videos
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-3xl p-4 shadow-md">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between"
          >
            <span className="font-semibold">Filters {hasActiveFilters && `(${Object.values(filters).filter(Boolean).length})`}</span>
            <Filter className="w-5 h-5" />
          </button>

          {showFilters && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Group Size</p>
                <div className="flex gap-2">
                  {filterOptions.groupSize.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setFilters({ ...filters, groupSize: filters.groupSize === opt.label ? '' : opt.label })}
                      className={`px-3 py-2 rounded-full text-xs ${
                        filters.groupSize === opt.label ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Budget Range</p>
                <div className="flex gap-2">
                  {filterOptions.budgetRange.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setFilters({ ...filters, budgetRange: filters.budgetRange === opt.label ? '' : opt.label })}
                      className={`px-3 py-2 rounded-full text-xs ${
                        filters.budgetRange === opt.label ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Duration</p>
                <div className="flex gap-2">
                  {filterOptions.duration.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setFilters({ ...filters, duration: filters.duration === opt.label ? '' : opt.label })}
                      className={`px-3 py-2 rounded-full text-xs ${
                        filters.duration === opt.label ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <Button onClick={clearFilters} variant="outline" className="w-full rounded-full" size="sm">
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 pb-8">
        <div className="grid grid-cols-1 gap-4">
          {filteredCategories.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 shadow-md text-center">
              <p className="text-gray-500">No categories match your filters. Try adjusting them.</p>
            </div>
          ) : (
            filteredCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setNavState({ screen: 'detail', categoryId: cat.id })}
                className="bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all cursor-pointer relative"
              >
                <div className="absolute top-4 right-4">
                  <InterestTrackerIcon
                    destinationId={`corporate-${cat.id}`}
                    destinationName={cat.title}
                    category="Corporate & MICE"
                    size="sm"
                  />
                </div>

                <div className="flex gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cat.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-3xl">{cat.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
                    <p className="text-sm text-gray-600">{cat.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {cat.capacity}
                  </Badge>
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {cat.duration}
                  </Badge>
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    {cat.budget}
                  </Badge>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-6 p-4 bg-white rounded-2xl text-center shadow-md">
          <p className="text-xs text-gray-700">
            <strong>Admin-managed content.</strong> All packages are customizable to your needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CorporateMICEHubEnhanced;
