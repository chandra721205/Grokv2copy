import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search, Globe, Youtube, ChevronRight, Waves, Calendar, Users, Star } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { 
  BeachDestinationCard,
  generateDestinationCards,
  DestinationCardData
} from '@/app/components/honeymoon/DestinationCard';
import { BeachResearchBox } from '@/app/components/shared/ResearchDestination';
import { PersonalizedDealsAlert } from '@/app/components/shared/PersonalizedDealsAlert';
import { 
  AdminControlPanel,
  AdminToolbar,
  AdminOverlay,
  AdminModeToggle
} from '@/app/components/admin/AdminControlPanel';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';
import { generateResearchAdminFields } from '@/app/components/shared/ResearchDestination';

// ========================================
// COMPLETE BEACH PARADISE SCREEN
// With Research Component Integration
// ========================================

interface BeachParadiseCompleteProps {
  onBack: () => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

export function BeachParadiseComplete({ onBack, onGoogleSearch, onYouTubeSearch }: BeachParadiseCompleteProps) {
  const { isAdminMode } = useAdminMode();
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<DestinationCardData | null>(null);
  
  // Editable content state
  const [headerTitle, setHeaderTitle] = useState('[Admin: Beach Category Title]');
  const [headerTagline, setHeaderTagline] = useState('[Admin: Beach Tagline]');
  const [searchPlaceholder, setSearchPlaceholder] = useState('[Admin: Search Placeholder]');
  const [sectionHeading, setSectionHeading] = useState('[Admin: Featured Destinations]');
  const [destinations] = useState<DestinationCardData[]>(generateDestinationCards('beach', 6));

  const [searchQuery, setSearchQuery] = useState('');

  // Prepare admin fields (including research box fields)
  const adminFields = [
    {
      id: 'headerTitle',
      label: 'Header Title',
      type: 'text' as const,
      value: headerTitle,
      placeholder: 'Enter category title',
      level: 1 as const
    },
    {
      id: 'headerTagline',
      label: 'Header Tagline',
      type: 'text' as const,
      value: headerTagline,
      placeholder: 'Enter tagline',
      level: 1 as const
    },
    {
      id: 'searchPlaceholder',
      label: 'Search Placeholder',
      type: 'text' as const,
      value: searchPlaceholder,
      placeholder: 'Enter search placeholder',
      level: 1 as const
    },
    {
      id: 'sectionHeading',
      label: 'Section Heading',
      type: 'text' as const,
      value: sectionHeading,
      placeholder: 'Enter section heading',
      level: 2 as const
    },
    // Add research box fields
    ...generateResearchAdminFields('research')
  ];

  // Handle admin save
  const handleAdminSave = (updatedFields: any[]) => {
    updatedFields.forEach(field => {
      switch (field.id) {
        case 'headerTitle':
          setHeaderTitle(field.value as string);
          break;
        case 'headerTagline':
          setHeaderTagline(field.value as string);
          break;
        case 'searchPlaceholder':
          setSearchPlaceholder(field.value as string);
          break;
        case 'sectionHeading':
          setSectionHeading(field.value as string);
          break;
      }
    });
    setShowAdminPanel(false);
  };

  // Handle destination selection
  const handleDestinationSelect = (dest: DestinationCardData) => {
    setSelectedDestination(dest);
  };

  // Destination Detail View
  if (selectedDestination) {
    return (
      <>
        <AdminModeToggle />
        <AdminOverlay />

        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {isAdminMode && (
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 text-center text-xs font-semibold">
              ADMIN MODE - Destination Detail View
            </div>
          )}

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
            <button
              onClick={() => setSelectedDestination(null)}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Waves className="w-9 h-9 text-white" />
              </div>
              <div>
                <h1 className="text-white text-2xl font-bold">{selectedDestination.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="text-white/90 text-sm">4.8 (1,234 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 space-y-6">
            {/* Destination Image */}
            {selectedDestination.imageUrl && (
              <div className="bg-gray-100 rounded-3xl overflow-hidden h-48">
                <img 
                  src={selectedDestination.imageUrl} 
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs text-gray-600 mb-1">Best Time</p>
                <p className="text-sm font-bold">Nov - Feb</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs text-gray-600 mb-1">Ideal For</p>
                <p className="text-sm font-bold">Couples</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
              <h2 className="font-bold text-lg mb-3">About This Destination</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedDestination.description || 'Experience pristine beaches, crystal-clear waters, and romantic sunsets at this beautiful coastal paradise. Perfect for honeymooners seeking relaxation and adventure.'}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-600 mb-2">Perfect For:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedDestination.tags.map((tag, i) => (
                    <Badge key={i} className="bg-blue-50 text-blue-700 border-blue-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* ========================================
                RESEARCH THIS DESTINATION COMPONENT
                Location: Below description, above booking
                ======================================== */}
            <BeachResearchBox
              destinationName={selectedDestination.name}
              onGoogleSearch={onGoogleSearch}
              onYouTubeSearch={onYouTubeSearch}
              showAdminIndicators={isAdminMode}
            />

            {/* Pricing */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 shadow-md border border-pink-100">
              <h2 className="font-bold text-lg mb-3">Package Details</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Price Range:</span>
                  <span className="text-lg font-bold text-pink-600">{selectedDestination.priceRange}</span>
                </div>
                {selectedDestination.stayOptions && (
                  <div>
                    <span className="text-sm text-gray-700 block mb-2">Stay Options:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedDestination.stayOptions.map((option, i) => (
                        <Badge key={i} className="bg-white text-gray-700 border-gray-200">
                          {option}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Button */}
            <Button
              onClick={() => alert('Booking system opens here')}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 h-14 rounded-2xl text-lg font-bold shadow-lg"
            >
              Book This Package
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Back Button */}
            <button
              onClick={() => setSelectedDestination(null)}
              className="w-full text-center text-sm text-gray-600 hover:text-gray-900 font-semibold py-4"
            >
              ← Back to All Destinations
            </button>
          </div>
        </div>
      </>
    );
  }

  // Main List View
  return (
    <>
      <AdminModeToggle />
      <AdminOverlay />
      <AdminToolbar
        screenId="beach-paradise"
        screenName="Beach Paradise Screen"
        onEditClick={() => setShowAdminPanel(true)}
      />

      <AnimatePresence>
        {showAdminPanel && (
          <AdminControlPanel
            screenId="beach-paradise"
            screenName="Beach & Island Paradise"
            fields={adminFields}
            onSave={handleAdminSave}
            onClose={() => setShowAdminPanel(false)}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {isAdminMode && (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 text-center text-xs font-semibold flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            ADMIN MODE ACTIVE - Click the edit button to modify content
          </div>
        )}

        <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Waves className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className={`text-white text-3xl font-bold ${
                isAdminMode ? 'bg-white/10 px-3 py-1 rounded inline-block' : ''
              } mb-2`}>
                {headerTitle}
              </h1>
              <p className={`text-white/90 text-sm ${
                isAdminMode ? 'bg-white/10 px-3 py-1 rounded inline-block' : ''
              }`}>
                {headerTagline}
              </p>
            </div>
          </div>

          <div className="relative mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-12 pr-12 h-12 rounded-full border-0 shadow-lg ${
                isAdminMode ? 'bg-gray-100' : 'bg-white'
              }`}
            />
          </div>

          <div className="flex gap-3 mb-3">
            <Button
              onClick={() => onGoogleSearch('beach island honeymoon destinations')}
              className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
            >
              <Globe className="w-4 h-4 mr-2" />
              Google Search
            </Button>
            <Button
              onClick={() => onYouTubeSearch('beach island honeymoon paradise')}
              className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
            >
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </Button>
          </div>
        </div>

        <div className="px-6">
          {/* ========================================
              PERSONALIZED DEALS ALERT
              Location: Below category intro, above destinations
              ======================================== */}
          <div className="-mt-6 mb-6">
            <PersonalizedDealsAlert
              category="beach"
              showAdminIndicators={isAdminMode}
              onSavePreferences={(data) => {
                console.log('Deal preferences saved:', data);
                // Backend sync would happen here in production
              }}
              content={{
                heading: '[Admin: Get Beach Deal Alerts]',
                description: '[Admin: Set your budget for personalized beach deals]',
                budgetPlaceholder: '[Admin: e.g., ₹75,000 for 5 nights]',
                notificationText: '[Admin: Notify me of beach paradise deals]',
                buttonLabel: '[Admin: Save Beach Preferences]'
              }}
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className={`text-xl font-bold ${
                isAdminMode ? 'bg-gray-100 px-3 py-1 rounded' : ''
              }`}>
                {sectionHeading}
              </h2>
              {isAdminMode && (
                <span className="text-xs text-purple-600 font-semibold">Admin Editable</span>
              )}
            </div>
            
            <div className="space-y-4">
              {destinations.map((destination, index) => (
                <BeachDestinationCard
                  key={destination.id}
                  data={destination}
                  animationDelay={0.3 + index * 0.1}
                  onExplore={handleDestinationSelect}
                  showAdminIndicators={isAdminMode}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              onClick={onBack}
              className="w-full bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
            >
              <span className="font-bold text-lg text-gray-900">Continue</span>
              <ChevronRight className="w-6 h-6 text-pink-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}