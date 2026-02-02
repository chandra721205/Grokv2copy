import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search, Globe, Youtube, ChevronRight, Waves } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { 
  BeachDestinationCard,
  generateDestinationCards,
  DestinationCardData
} from '@/app/components/honeymoon/DestinationCard';
import { 
  AdminControlPanel,
  AdminToolbar,
  AdminOverlay,
  AdminModeToggle
} from '@/app/components/admin/AdminControlPanel';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// EXAMPLE: BEACH PARADISE WITH ADMIN INTEGRATION
// ========================================

interface BeachParadiseAdminProps {
  onBack: () => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

export function BeachParadiseWithAdmin({ onBack, onGoogleSearch, onYouTubeSearch }: BeachParadiseAdminProps) {
  const { isAdminMode } = useAdminMode();
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  
  // Editable content state
  const [headerTitle, setHeaderTitle] = useState('[Admin: Beach Category Title]');
  const [headerTagline, setHeaderTagline] = useState('[Admin: Beach Tagline]');
  const [searchPlaceholder, setSearchPlaceholder] = useState('[Admin: Search Placeholder]');
  const [sectionHeading, setSectionHeading] = useState('[Admin: Section Heading]');
  const [filterChips, setFilterChips] = useState([
    { label: '[Admin: Filter Label 1]', query: 'beach filter 1' },
    { label: '[Admin: Filter Label 2]', query: 'beach filter 2' },
    { label: '[Admin: Filter Label 3]', query: 'beach filter 3' },
    { label: '[Admin: Filter Label 4]', query: 'beach filter 4' },
    { label: '[Admin: Filter Label 5]', query: 'beach filter 5' }
  ]);
  const [destinations, setDestinations] = useState<DestinationCardData[]>(generateDestinationCards('beach', 6));

  const [searchQuery, setSearchQuery] = useState('');

  // Prepare admin fields
  const adminFields = [
    // LEVEL 1: Headers
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
    // LEVEL 2: Section Heading
    {
      id: 'sectionHeading',
      label: 'Section Heading',
      type: 'text' as const,
      value: sectionHeading,
      placeholder: 'Enter section heading',
      level: 2 as const
    },
    // LEVEL 3: Filter Labels
    ...filterChips.map((chip, index) => ({
      id: `filter_${index}`,
      label: `Filter Label ${index + 1}`,
      type: 'text' as const,
      value: chip.label,
      placeholder: 'Enter filter label',
      level: 3 as const
    })),
    // LEVEL 4 & 5: Destination Cards (first card only for demo)
    {
      id: 'dest_0_name',
      label: 'Destination 1 - Name',
      type: 'text' as const,
      value: destinations[0]?.name || '',
      placeholder: 'Enter destination name',
      level: 4 as const
    },
    {
      id: 'dest_0_price',
      label: 'Destination 1 - Price Range',
      type: 'price' as const,
      value: destinations[0]?.priceRange || '',
      placeholder: '₹XX,XXX - ₹XX,XXX',
      level: 5 as const
    },
    {
      id: 'dest_0_description',
      label: 'Destination 1 - Description',
      type: 'textarea' as const,
      value: destinations[0]?.description || '',
      placeholder: 'Enter description (max 120 chars)',
      maxLength: 120,
      level: 4 as const
    },
    {
      id: 'dest_0_tags',
      label: 'Destination 1 - Tags',
      type: 'tags' as const,
      value: destinations[0]?.tags || [],
      placeholder: 'Add tags',
      level: 4 as const
    },
    {
      id: 'dest_0_image',
      label: 'Destination 1 - Image',
      type: 'image' as const,
      value: destinations[0]?.imageUrl || '',
      placeholder: 'Upload or enter URL',
      level: 4 as const
    }
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
        default:
          // Handle filter chips
          if (field.id.startsWith('filter_')) {
            const index = parseInt(field.id.split('_')[1]);
            setFilterChips(prev => prev.map((chip, i) =>
              i === index ? { ...chip, label: field.value as string } : chip
            ));
          }
          // Handle destination fields
          if (field.id.startsWith('dest_0_')) {
            const fieldName = field.id.split('_')[2];
            setDestinations(prev => {
              const newDests = [...prev];
              if (newDests[0]) {
                newDests[0] = {
                  ...newDests[0],
                  [fieldName]: field.value
                };
              }
              return newDests;
            });
          }
      }
    });

    setShowAdminPanel(false);
  };

  return (
    <>
      {/* Admin Mode Toggle (Top Right) */}
      <AdminModeToggle />

      {/* Admin Purple Overlay */}
      <AdminOverlay />

      {/* Admin Toolbar (Floating Edit Button) */}
      <AdminToolbar
        screenId="beach-paradise"
        screenName="Beach Paradise Screen"
        onEditClick={() => setShowAdminPanel(true)}
      />

      {/* Admin Control Panel */}
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

      {/* Main Screen Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Admin Mode Indicator Banner */}
        {isAdminMode && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 text-center text-xs font-semibold flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            ADMIN MODE ACTIVE - Click the edit button to modify content
          </motion.div>
        )}

        {/* Header */}
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
              {/* LEVEL 1: Header Title */}
              <h1 className={`text-white text-3xl font-bold ${
                isAdminMode ? 'bg-white/10 px-3 py-1 rounded inline-block' : ''
              } mb-2`}>
                {headerTitle}
              </h1>
              {/* LEVEL 1: Header Tagline */}
              <p className={`text-white/90 text-sm ${
                isAdminMode ? 'bg-white/10 px-3 py-1 rounded inline-block' : ''
              }`}>
                {headerTagline}
              </p>
            </div>
          </div>

          {/* Search Bar */}
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

          {/* Google/YouTube Buttons */}
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
          {/* LEVEL 3: Filter Chips */}
          <div className="mb-6 -mt-6">
            <div className="flex flex-wrap gap-2">
              {filterChips.map((filter, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  onClick={() => onGoogleSearch(filter.query)}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all ${
                    isAdminMode ? 'ring-2 ring-purple-300' : ''
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* LEVEL 2: Section Heading */}
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
            
            {/* LEVEL 4 & 5: Destination Cards */}
            <div className="space-y-4">
              {destinations.map((destination, index) => (
                <BeachDestinationCard
                  key={destination.id}
                  data={destination}
                  animationDelay={0.3 + index * 0.1}
                  onExplore={(dest) => onGoogleSearch(`${dest.name} beach honeymoon`)}
                  showAdminIndicators={isAdminMode}
                />
              ))}
            </div>
          </div>

          {/* Continue Button */}
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
