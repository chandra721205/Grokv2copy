import React, { useState } from 'react';
import {
  ArrowLeft,
  Globe,
  Youtube,
  Bookmark,
  BookmarkCheck,
  Star,
  ChevronRight,
  Info,
  LucideIcon
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  isFeatured?: boolean;
  isAvailable: boolean;
}

interface ServiceDetailPageProps {
  categoryId: string;
  categoryName: string;
  categoryIcon: LucideIcon;
  services: Service[];
  onBack: () => void;
  currentLocation?: string;
}

export default function ServiceDetailPage({
  categoryId,
  categoryName,
  categoryIcon: IconComponent,
  services,
  onBack,
  currentLocation = '[Admin: Auto-Detect Location]'
}: ServiceDetailPageProps) {
  const [savedServices, setSavedServices] = useState<Set<string>>(new Set());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSavePreferences = () => {
    const allServiceIds = services.map(s => s.id);
    setSavedServices(new Set(allServiceIds));
    setToastMessage(`${categoryName} preferences saved`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleServiceSave = (serviceId: string) => {
    const newSaved = new Set(savedServices);
    if (newSaved.has(serviceId)) {
      newSaved.delete(serviceId);
      setToastMessage('Service removed from preferences');
    } else {
      newSaved.add(serviceId);
      setToastMessage('Service saved to preferences');
    }
    setSavedServices(newSaved);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleGoogleSearch = (serviceName: string) => {
    const searchQuery = `${serviceName} ${currentLocation} booking`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
  };

  const handleYouTubeSearch = (serviceName: string) => {
    const searchQuery = `${serviceName} ${currentLocation} review guide`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 hover:bg-white/30 transition-colors active:scale-95"
          aria-label="Go back to Travel Essentials"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Title Section */}
        <div className="flex items-center gap-4">
          {/* Icon Container */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <IconComponent className="w-9 h-9 text-white" aria-hidden="true" />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              {categoryName}
            </h1>
            <p className="text-white/90 text-sm">
              {services.length} admin-managed {services.length === 1 ? 'service' : 'services'} available
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 -mt-4 space-y-6">
        {/* Service List Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            Admin-Managed Services
          </h2>

          {/* Service Cards */}
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-5 shadow-md border-2 transition-all ${
                  savedServices.has(service.id)
                    ? 'border-blue-500 shadow-lg'
                    : 'border-transparent hover:border-gray-200'
                }`}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-base text-gray-900">
                        {service.name}
                      </h3>
                      {service.isFeatured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                          <Star className="w-3 h-3 fill-current" />
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {service.description}
                    </p>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        service.isAvailable
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {service.isAvailable ? '✓ Available' : 'Coming Soon'}
                    </span>
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={() => toggleServiceSave(service.id)}
                    className={`p-2 rounded-full transition-colors ${
                      savedServices.has(service.id)
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    aria-label={savedServices.has(service.id) ? 'Remove from saved' : 'Save service'}
                  >
                    {savedServices.has(service.id) ? (
                      <BookmarkCheck className="w-5 h-5" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleGoogleSearch(service.name)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-colors active:scale-95"
                    aria-label={`Search ${service.name} on Google`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">Google</span>
                  </button>
                  <button
                    onClick={() => handleYouTubeSearch(service.name)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl text-sm font-medium text-red-700 transition-colors active:scale-95"
                    aria-label={`Search ${service.name} on YouTube`}
                  >
                    <Youtube className="w-4 h-4" />
                    <span className="hidden sm:inline">YouTube</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Save All Preferences Button */}
        <button
          onClick={handleSavePreferences}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-95"
        >
          <BookmarkCheck className="w-5 h-5" />
          Save All {categoryName} Preferences
        </button>

        {/* Information Card */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100">
          <div className="flex gap-3 mb-3">
            <Info className="w-6 h-6 text-blue-600 shrink-0" aria-hidden="true" />
            <h3 className="font-bold text-base text-blue-900">
              How to Use This Service Directory
            </h3>
          </div>
          <div className="space-y-2 text-sm text-blue-800 leading-relaxed">
            <p>
              All services shown are <strong>admin-curated placeholders</strong>. Use the buttons above to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Google Search</strong> – Discover real providers in your location</li>
              <li><strong>YouTube Browse</strong> – Watch reviews and guides</li>
              <li><strong>Save Preferences</strong> – Your choices will be suggested when booking tours</li>
            </ul>
            <p className="mt-3 pt-3 border-t border-blue-200">
              💡 <strong>Pro Tip:</strong> Save your preferred services now, and they'll appear as recommendations when you book packages in other categories!
            </p>
          </div>
        </div>

        {/* Related Categories */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h3 className="font-bold text-base text-gray-900 mb-4">
            Related Service Categories
          </h3>
          <div className="space-y-2">
            {['Accommodation', 'Transportation', 'Personal Assistance'].map((cat) => (
              cat !== categoryName && (
                <button
                  key={cat}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-left group"
                >
                  <span className="text-sm font-medium text-gray-700">{cat}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>
              )
            ))}
          </div>
        </div>
      </main>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-slide-up z-50">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
