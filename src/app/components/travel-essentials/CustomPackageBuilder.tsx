import React, { useState } from 'react';
import {
  ArrowLeft,
  Package,
  Building2,
  Car,
  UtensilsCrossed,
  UserRound,
  HeartPulse,
  Accessibility,
  Users,
  PawPrint,
  Smartphone,
  Check,
  Plus,
  Minus,
  Share2,
  Save,
  Sparkles,
  DollarSign,
  Info,
  ChevronRight
} from 'lucide-react';

interface PackageService {
  id: string;
  categoryId: string;
  categoryName: string;
  icon: React.ElementType;
  estimatedCost: number;
  isSelected: boolean;
  serviceCount: number;
}

const availableServices: PackageService[] = [
  {
    id: 'pkg-accommodation',
    categoryId: 'accommodation',
    categoryName: 'Accommodation',
    icon: Building2,
    estimatedCost: 5000,
    isSelected: false,
    serviceCount: 4
  },
  {
    id: 'pkg-transportation',
    categoryId: 'transportation',
    categoryName: 'Transportation',
    icon: Car,
    estimatedCost: 3000,
    isSelected: false,
    serviceCount: 5
  },
  {
    id: 'pkg-hospitality',
    categoryId: 'hospitality',
    categoryName: 'Hospitality & Dining',
    icon: UtensilsCrossed,
    estimatedCost: 2000,
    isSelected: false,
    serviceCount: 4
  },
  {
    id: 'pkg-personal',
    categoryId: 'personal-assistance',
    categoryName: 'Personal Assistance',
    icon: UserRound,
    estimatedCost: 1500,
    isSelected: false,
    serviceCount: 4
  },
  {
    id: 'pkg-senior',
    categoryId: 'senior-care',
    categoryName: 'Senior Care',
    icon: HeartPulse,
    estimatedCost: 2500,
    isSelected: false,
    serviceCount: 4
  },
  {
    id: 'pkg-accessibility',
    categoryId: 'accessibility',
    categoryName: 'Accessibility Services',
    icon: Accessibility,
    estimatedCost: 1800,
    isSelected: false,
    serviceCount: 4
  },
  {
    id: 'pkg-family',
    categoryId: 'family',
    categoryName: 'Family Services',
    icon: Users,
    estimatedCost: 2200,
    isSelected: false,
    serviceCount: 4
  },
  {
    id: 'pkg-pet',
    categoryId: 'pet-travel',
    categoryName: 'Pet Travel',
    icon: PawPrint,
    estimatedCost: 1200,
    isSelected: false,
    serviceCount: 4
  },
  {
    id: 'pkg-digital',
    categoryId: 'digital-tools',
    categoryName: 'Digital Tools',
    icon: Smartphone,
    estimatedCost: 800,
    isSelected: false,
    serviceCount: 5
  }
];

interface CustomPackageBuilderProps {
  onBack: () => void;
  userBudget?: number;
}

export default function CustomPackageBuilder({
  onBack,
  userBudget = 0
}: CustomPackageBuilderProps) {
  const [services, setServices] = useState(availableServices);
  const [packageName, setPackageName] = useState('');
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const selectedServices = services.filter(s => s.isSelected);
  const totalCost = selectedServices.reduce((sum, s) => sum + s.estimatedCost, 0);
  const budgetRemaining = userBudget - totalCost;
  const isOverBudget = userBudget > 0 && totalCost > userBudget;

  const toggleService = (serviceId: string) => {
    setServices(services.map(s =>
      s.id === serviceId ? { ...s, isSelected: !s.isSelected } : s
    ));
  };

  const handleSavePackage = () => {
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  const handleSharePackage = () => {
    setShowShareModal(true);
  };

  const getRecommendations = () => {
    // Simple recommendation logic
    const recommendations = [];
    if (!selectedServices.find(s => s.categoryId === 'accommodation')) {
      recommendations.push('Add Accommodation for a complete travel package');
    }
    if (!selectedServices.find(s => s.categoryId === 'transportation')) {
      recommendations.push('Include Transportation to get around easily');
    }
    if (selectedServices.length === 0) {
      recommendations.push('Select at least 2-3 services for a well-rounded package');
    }
    return recommendations;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 hover:bg-white/30 transition-colors active:scale-95"
          aria-label="Go back to Travel Essentials"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Title Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <Package className="w-9 h-9 text-white" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              Build Your Custom Package
            </h1>
            <p className="text-white/90 text-sm">
              Mix & match services from all categories
            </p>
          </div>
        </div>

        {/* Budget Display */}
        {userBudget > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80 text-sm font-medium">Your Budget</span>
              <span className="text-white font-bold text-lg">₹{userBudget.toLocaleString()}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  isOverBudget ? 'bg-red-400' : 'bg-green-400'
                }`}
                style={{ width: `${Math.min((totalCost / userBudget) * 100, 100)}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-white/80 text-xs">Used: ₹{totalCost.toLocaleString()}</span>
              <span className={`text-xs font-semibold ${isOverBudget ? 'text-red-200' : 'text-green-200'}`}>
                {isOverBudget ? `Over by ₹${Math.abs(budgetRemaining).toLocaleString()}` : `Remaining: ₹${budgetRemaining.toLocaleString()}`}
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="px-6 -mt-4 space-y-6">
        {/* Package Name Input */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <label htmlFor="package-name" className="block text-sm font-semibold text-gray-700 mb-2">
            Package Name (Optional)
          </label>
          <input
            id="package-name"
            type="text"
            placeholder="e.g., My Summer Trip Essentials"
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Service Selector */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Select Services
            </h2>
            <span className="text-xs text-gray-500">
              {selectedServices.length} of {services.length} selected
            </span>
          </div>

          {/* Service Grid */}
          <div className="space-y-3">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                    service.isSelected
                      ? 'bg-purple-50 border-purple-500 shadow-lg'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'
                  }`}
                >
                  {/* Checkbox */}
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-colors ${
                      service.isSelected
                        ? 'bg-purple-600 border-purple-600'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    {service.isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>

                  {/* Icon */}
                  <div className={`p-3 rounded-xl ${service.isSelected ? 'bg-purple-100' : 'bg-gray-50'}`}>
                    <IconComponent className={`w-6 h-6 ${service.isSelected ? 'text-purple-600' : 'text-gray-600'}`} />
                  </div>

                  {/* Service Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900 mb-0.5">
                      {service.categoryName}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {service.serviceCount} services available
                    </p>
                  </div>

                  {/* Cost */}
                  <div className="text-right">
                    <p className="font-bold text-sm text-gray-900">
                      ₹{service.estimatedCost.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">estimated</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Summary Panel */}
        {selectedServices.length > 0 && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100">
            <h3 className="font-bold text-base text-purple-900 mb-4">
              Package Summary
            </h3>
            
            {/* Selected Services List */}
            <div className="space-y-2 mb-4">
              {selectedServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-purple-800">{service.categoryName}</span>
                    </div>
                    <span className="text-sm font-semibold text-purple-900">
                      ₹{service.estimatedCost.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Total Cost */}
            <div className="pt-4 border-t border-purple-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-purple-900">Total Estimated Cost</span>
                <span className="text-xl font-bold text-purple-900">₹{totalCost.toLocaleString()}</span>
              </div>
              {isOverBudget && (
                <p className="text-xs text-red-600 mt-1">
                  ⚠️ This exceeds your budget by ₹{Math.abs(budgetRemaining).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        )}

        {/* AI Recommendations */}
        {getRecommendations().length > 0 && (
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100">
            <div className="flex gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-blue-600 shrink-0" />
              <h3 className="font-bold text-base text-blue-900">
                Smart Recommendations
              </h3>
            </div>
            <ul className="space-y-2">
              {getRecommendations().map((rec, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-blue-800">
                  <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleSavePackage}
            disabled={selectedServices.length === 0}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            Save Package
          </button>

          <button
            onClick={handleSharePackage}
            disabled={selectedServices.length === 0}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-2xl font-bold text-base hover:bg-purple-50 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Share2 className="w-5 h-5" />
            Share with Group
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-100">
          <div className="flex gap-3 mb-3">
            <Info className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="font-bold text-base text-amber-900">
              About Custom Packages
            </h3>
          </div>
          <div className="space-y-2 text-sm text-amber-800 leading-relaxed">
            <p>
              Build your perfect travel package by selecting services across multiple categories. All costs shown are <strong>estimated averages</strong> for planning purposes.
            </p>
            <p>
              Your saved package will appear as a <strong>recommendation</strong> when you book tours in other categories, making it easy to add your preferred services to any trip.
            </p>
          </div>
        </div>
      </main>

      {/* Success Toast */}
      {showSaveToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-slide-up z-50">
          <Check className="w-5 h-5" />
          <span className="font-medium">Package saved successfully!</span>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50" onClick={() => setShowShareModal(false)}>
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Share Package</h3>
            <p className="text-sm text-gray-600 mb-6">
              Copy the link below to share your custom travel package with friends or family:
            </p>
            <div className="bg-gray-50 rounded-xl p-3 mb-4 text-sm text-gray-700 font-mono break-all">
              https://grokyatra.com/packages/{packageName.replace(/\s+/g, '-').toLowerCase() || 'custom-package'}
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full px-4 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
