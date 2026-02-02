import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Search, Globe, Youtube, ChevronRight, Waves, Castle, Flower2, Sparkles
} from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { InterestTrackerIcon } from '@/app/components/shared/InterestTracker';
import { PersonalizedDealsAlert } from '@/app/components/shared/PersonalizedDealsAlert';

// ========================================
// ENHANCED HONEYMOON SUB-SCREENS
// - Beach & Island Paradise
// - Heritage & Luxury Palaces
// - Wellness & Spa Retreats
// 
// FEATURES:
// 1. ✅ Template-based placeholder content
// 2. ✅ 5-level admin-editable text hierarchy
// 3. ✅ Interest tracking heart icons
// 4. ✅ Deal notification preferences
// 5. ✅ Google/YouTube browsing integration
// 6. ✅ Admin visual indicators (purple banners, gray backgrounds)
// 7. ✅ Complete annotation system
// ========================================

interface ScreenProps {
  onBack: () => void;
  onGoogleSearch: (query: string) => void;
  onYouTubeSearch: (query: string) => void;
}

// ========================================
// SCREEN 1: BEACH & ISLAND PARADISE
// ========================================
export function BeachParadiseScreen({ onBack, onGoogleSearch, onYouTubeSearch }: ScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // ========================================
  // ADMIN EDITABLE CONTENT - GROUPED BY LEVEL
  // ========================================

  // LEVEL 1: Headers/Titles
  const headerTitle = '[Admin: Beach & Island Paradise]';
  const headerTagline = '[Admin: Romantic Shores & Tropical Escapes]';
  const searchPlaceholder = '[Admin: Search beach destinations...]';
  
  // LEVEL 2: Section Headings
  const sectionHeading = '[Admin: Featured Beach Destinations]';

  // LEVEL 3: Filter Labels
  const filterChips = [
    { label: '[Admin: Luxury Resorts]', query: 'luxury beach resort honeymoon' },
    { label: '[Admin: Private Islands]', query: 'private island honeymoon' },
    { label: '[Admin: Water Villas]', query: 'overwater villa honeymoon' },
    { label: '[Admin: Beach Activities]', query: 'beach activities for couples' },
    { label: '[Admin: Sunset Cruises]', query: 'sunset cruise honeymoon' }
  ];

  // LEVEL 4 & 5: Destination Card Content
  const destinations = [
    {
      id: 'beach-1',
      name: '[Admin: Destination Name 1]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Beach Lovers]', '[Admin: Water Sports]', '[Admin: Sunset Views]'],
      stayOptions: ['[Admin: Beach Resort]', '[Admin: Overwater Bungalow]'],
      specialRequest: '[Admin: Include special romantic beach dinner arrangement]'
    },
    {
      id: 'beach-2',
      name: '[Admin: Destination Name 2]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Snorkeling]', '[Admin: Island Hopping]', '[Admin: Spa Treatments]'],
      stayOptions: ['[Admin: Beachfront Villa]', '[Admin: Luxury Resort]'],
      specialRequest: '[Admin: Arrange private island tour and couple photography]'
    },
    {
      id: 'beach-3',
      name: '[Admin: Destination Name 3]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Secluded Beaches]', '[Admin: Pristine Waters]', '[Admin: Local Cuisine]'],
      stayOptions: ['[Admin: Eco Resort]', '[Admin: Beach Cottage]'],
      specialRequest: '[Admin: Book private beach access and candlelight dinner]'
    },
    {
      id: 'beach-4',
      name: '[Admin: Destination Name 4]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Diving]', '[Admin: Marine Life]', '[Admin: Beach Parties]'],
      stayOptions: ['[Admin: Boutique Hotel]', '[Admin: Beachside Cabana]'],
      specialRequest: '[Admin: Organize scuba diving session and beach barbecue]'
    },
    {
      id: 'beach-5',
      name: '[Admin: Destination Name 5]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Sailing]', '[Admin: Kayaking]', '[Admin: Beach Yoga]'],
      stayOptions: ['[Admin: Waterfront Hotel]', '[Admin: Island Resort]'],
      specialRequest: '[Admin: Schedule sunrise yoga and couples sailing trip]'
    },
    {
      id: 'beach-6',
      name: '[Admin: Destination Name 6]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Surfing]', '[Admin: Beach Walks]', '[Admin: Local Markets]'],
      stayOptions: ['[Admin: Beach Bungalow]', '[Admin: Seaside Inn]'],
      specialRequest: '[Admin: Include surf lessons and beach bonfire evening]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      {/* ========================================
          ADMIN INDICATOR BANNER
          Purpose: Alert admins that all content is editable
          ======================================== */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated via Admin Dashboard
      </div>

      {/* ========================================
          HEADER SECTION
          LEVEL 1: Header Title & Tagline
          ======================================== */}
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
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              {headerTitle}
            </h1>
            {/* LEVEL 1: Header Tagline */}
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
              {headerTagline}
            </p>
          </div>
        </div>

        {/* Search Bar with Admin Placeholder */}
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 h-12 rounded-full bg-white border-0 shadow-lg"
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

        {/* Search Helper Text */}
        <div className="flex items-center gap-2 text-white/70 text-xs">
          <Sparkles className="w-4 h-4" />
          <span>[Admin: Use Google/YouTube to discover real beach destinations]</span>
        </div>
      </div>

      <div className="px-6">
        {/* ========================================
            PERSONALIZED DEALS ALERT
            Purpose: Capture user budget preferences for beach honeymoon deals
            Admin: Can customize all text in this component
            ======================================== */}
        <div className="-mt-6 mb-6">
          <PersonalizedDealsAlert
            category="honeymoon-beach"
            showAdminIndicators={true}
            onSavePreferences={(data) => {
              console.log('Beach honeymoon deal preferences saved:', data);
              // In production: POST to /api/deals/preferences
            }}
            content={{
              heading: '[Admin: Get Beach Honeymoon Deal Alerts]',
              description: '[Admin: Set your budget and get notified of best beach deals]',
              budgetPlaceholder: '[Admin: e.g., ₹2,00,000 for beach resort package]',
              notificationText: '[Admin: Send me alerts for beach honeymoon packages]',
              buttonLabel: '[Admin: Save Beach Deal Preferences]'
            }}
          />
        </div>

        {/* ========================================
            LEVEL 3: FILTER CHIPS
            Purpose: Quick access to popular beach honeymoon searches
            Admin: Can update labels and associated search queries
            ======================================== */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {filterChips.map((filter, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onGoogleSearch(filter.query)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all shadow-md"
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Admin Note: Filter chips trigger Google searches with pre-defined queries
          </p>
        </div>

        {/* ========================================
            LEVEL 2: SECTION HEADING
            ======================================== */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold bg-gray-100 px-3 py-1 rounded">{sectionHeading}</h2>
            <span className="text-xs text-purple-600 font-semibold">✏️ Admin Editable</span>
          </div>
          
          {/* ========================================
              LEVEL 4 & 5: DESTINATION CARDS
              Purpose: Display admin-managed beach destinations
              Features: Interest tracking, Google/YouTube search integration
              ======================================== */}
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 relative"
              >
                {/* Interest Tracking Heart Icon - Top Right */}
                <div className="absolute top-6 right-6 z-10">
                  <InterestTrackerIcon
                    destinationId={destination.id}
                    destinationName={destination.name}
                    category="honeymoon-beach"
                    size="md"
                    showCount={false}
                  />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pr-12">
                    {/* LEVEL 4: Destination Name */}
                    <h3 className="font-bold text-lg mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                      {destination.name}
                    </h3>
                    {/* LEVEL 5: Price Range */}
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Price Range:</span>{' '}
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{destination.priceRange}</span>
                    </p>
                  </div>
                </div>

                {/* LEVEL 4: Perfect For Tags */}
                <div className="bg-pink-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-2 flex items-center gap-2">
                    Perfect For:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.perfectFor.map((tag, i) => (
                      <Badge key={i} className="bg-gray-100 text-pink-700 border-pink-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* LEVEL 4: Stay Options */}
                <div className="bg-blue-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    Stay Options:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.stayOptions.map((option, i) => (
                      <span key={i} className="text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LEVEL 5: Special Request */}
                <div className="bg-purple-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-2">
                    Special Request:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">{destination.specialRequest}</p>
                </div>

                {/* Browse Buttons */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => onGoogleSearch(`${destination.name} beach honeymoon package`)}
                    className="flex-1 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-10 text-sm"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Google
                  </Button>
                  <Button 
                    onClick={() => onYouTubeSearch(`${destination.name} beach resort tour`)}
                    className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-10 text-sm"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                </div>

                {/* Admin Note */}
                <div className="mt-3 text-xs text-gray-500 italic">
                  💡 Users can click the heart icon to track interest & receive deal notifications
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Admin Guidance Panel */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-6 mb-6">
          <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Admin Editing Guide
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Purpose:</strong> Template-based beach honeymoon category with placeholder content for admin customization</p>
            <p><strong>Update Process:</strong> Navigate to Admin Dashboard → Honeymoon Section → Beach Category to edit all text elements</p>
            <p><strong>User Flow:</strong> Users browse placeholder templates → Use Google/YouTube to find real destinations → Track interests → Receive deal alerts</p>
            <p><strong>Technical:</strong> All edits save to localStorage, sync to backend via /api/honeymoon/beach/update endpoint</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// SCREEN 2: HERITAGE & LUXURY PALACES
// ========================================
export function HeritagePalacesScreen({ onBack, onGoogleSearch, onYouTubeSearch }: ScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // LEVEL 1: Headers/Titles
  const headerTitle = '[Admin: Heritage & Luxury Palaces]';
  const headerTagline = '[Admin: Royal Romance in Historic Splendor]';
  const searchPlaceholder = '[Admin: Search heritage destinations...]';
  
  // LEVEL 2: Section Headings
  const sectionHeading = '[Admin: Featured Heritage Properties]';

  // LEVEL 3: Filter Labels
  const filterChips = [
    { label: '[Admin: Palace Hotels]', query: 'heritage palace hotel honeymoon india' },
    { label: '[Admin: Fort Stays]', query: 'historic fort hotel honeymoon' },
    { label: '[Admin: Havelis]', query: 'luxury haveli honeymoon' },
    { label: '[Admin: Royal Suites]', query: 'royal suite honeymoon package' },
    { label: '[Admin: Heritage Tours]', query: 'heritage tour honeymoon' }
  ];

  // LEVEL 4 & 5: Destination Card Content
  const destinations = [
    {
      id: 'heritage-1',
      name: '[Admin: Palace Destination 1]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: History Lovers]', '[Admin: Architecture]', '[Admin: Royal Experience]'],
      stayOptions: ['[Admin: Palace Suite]', '[Admin: Heritage Room]'],
      specialRequest: '[Admin: Arrange royal dinner in palace courtyard]'
    },
    {
      id: 'heritage-2',
      name: '[Admin: Palace Destination 2]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Cultural Tours]', '[Admin: Photography]', '[Admin: Traditional Cuisine]'],
      stayOptions: ['[Admin: Maharaja Suite]', '[Admin: Fort Chamber]'],
      specialRequest: '[Admin: Include elephant ride and traditional welcome ceremony]'
    },
    {
      id: 'heritage-3',
      name: '[Admin: Palace Destination 3]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Art & Craft]', '[Admin: Vintage Décor]', '[Admin: Heritage Walks]'],
      stayOptions: ['[Admin: Royal Wing]', '[Admin: Heritage Villa]'],
      specialRequest: '[Admin: Book private heritage tour with historian guide]'
    },
    {
      id: 'heritage-4',
      name: '[Admin: Palace Destination 4]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Folk Performances]', '[Admin: Museums]', '[Admin: Local Markets]'],
      stayOptions: ['[Admin: Luxury Suite]', '[Admin: Garden Room]'],
      specialRequest: '[Admin: Organize traditional dance performance and palace banquet]'
    },
    {
      id: 'heritage-5',
      name: '[Admin: Palace Destination 5]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Vintage Cars]', '[Admin: Royal Cuisine]', '[Admin: Spa Therapies]'],
      stayOptions: ['[Admin: Premium Suite]', '[Admin: Courtyard Room]'],
      specialRequest: '[Admin: Vintage car city tour and couples Ayurvedic spa]'
    },
    {
      id: 'heritage-6',
      name: '[Admin: Palace Destination 6]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Lake Views]', '[Admin: Boat Rides]', '[Admin: Sunset Dinners]'],
      stayOptions: ['[Admin: Lakeside Palace]', '[Admin: Water View Suite]'],
      specialRequest: '[Admin: Private boat dinner on palace lake]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated via Admin Dashboard
      </div>

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
            <Castle className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              {headerTitle}
            </h1>
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
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
            className="pl-12 pr-12 h-12 rounded-full bg-white border-0 shadow-lg"
          />
        </div>

        <div className="flex gap-3 mb-3">
          <Button
            onClick={() => onGoogleSearch('heritage palace honeymoon destinations')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => onYouTubeSearch('heritage palace honeymoon paradise')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>

        <div className="flex items-center gap-2 text-white/70 text-xs">
          <Sparkles className="w-4 h-4" />
          <span>[Admin: Discover authentic heritage properties via Google/YouTube]</span>
        </div>
      </div>

      <div className="px-6">
        <div className="-mt-6 mb-6">
          <PersonalizedDealsAlert
            category="honeymoon-heritage"
            showAdminIndicators={true}
            onSavePreferences={(data) => {
              console.log('Heritage honeymoon deal preferences saved:', data);
            }}
            content={{
              heading: '[Admin: Get Heritage Palace Deal Alerts]',
              description: '[Admin: Set budget for royal heritage honeymoon packages]',
              budgetPlaceholder: '[Admin: e.g., ₹3,00,000 for palace hotel stay]',
              notificationText: '[Admin: Notify me of heritage palace deals]',
              buttonLabel: '[Admin: Save Heritage Preferences]'
            }}
          />
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {filterChips.map((filter, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onGoogleSearch(filter.query)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all shadow-md"
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Admin Note: Filter chips trigger Google searches with pre-defined queries
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold bg-gray-100 px-3 py-1 rounded">{sectionHeading}</h2>
            <span className="text-xs text-purple-600 font-semibold">✏️ Admin Editable</span>
          </div>
          
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 relative"
              >
                <div className="absolute top-6 right-6 z-10">
                  <InterestTrackerIcon
                    destinationId={destination.id}
                    destinationName={destination.name}
                    category="honeymoon-heritage"
                    size="md"
                    showCount={false}
                  />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Castle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pr-12">
                    <h3 className="font-bold text-lg mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Price Range:</span>{' '}
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{destination.priceRange}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-2 flex items-center gap-2">
                    Perfect For:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.perfectFor.map((tag, i) => (
                      <Badge key={i} className="bg-gray-100 text-pink-700 border-pink-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    Stay Options:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.stayOptions.map((option, i) => (
                      <span key={i} className="text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-2">
                    Special Request:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">{destination.specialRequest}</p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => onGoogleSearch(`${destination.name} heritage palace hotel`)}
                    className="flex-1 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-10 text-sm"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Google
                  </Button>
                  <Button 
                    onClick={() => onYouTubeSearch(`${destination.name} palace tour`)}
                    className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-10 text-sm"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                </div>

                <div className="mt-3 text-xs text-gray-500 italic">
                  💡 Users can click the heart icon to track interest & receive deal notifications
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-6 mb-6">
          <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Admin Editing Guide
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Purpose:</strong> Template-based heritage palace category with placeholder content for admin customization</p>
            <p><strong>Update Process:</strong> Navigate to Admin Dashboard → Honeymoon Section → Heritage Category to edit all text elements</p>
            <p><strong>User Flow:</strong> Users browse heritage templates → Use Google/YouTube to find real palaces → Track interests → Receive deal alerts</p>
            <p><strong>Technical:</strong> All edits save to localStorage, sync to backend via /api/honeymoon/heritage/update endpoint</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// SCREEN 3: WELLNESS & SPA RETREATS
// ========================================
export function WellnessRetreatsScreen({ onBack, onGoogleSearch, onYouTubeSearch }: ScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // LEVEL 1: Headers/Titles
  const headerTitle = '[Admin: Wellness & Spa Retreats]';
  const headerTagline = '[Admin: Heal, Relax & Reconnect]';
  const searchPlaceholder = '[Admin: Search wellness destinations...]';
  
  // LEVEL 2: Section Headings
  const sectionHeading = '[Admin: Featured Wellness Resorts]';

  // LEVEL 3: Filter Labels
  const filterChips = [
    { label: '[Admin: Ayurveda Resorts]', query: 'ayurveda wellness resort honeymoon' },
    { label: '[Admin: Yoga Retreats]', query: 'yoga retreat honeymoon couples' },
    { label: '[Admin: Spa Packages]', query: 'luxury spa honeymoon package' },
    { label: '[Admin: Detox Programs]', query: 'detox wellness honeymoon' },
    { label: '[Admin: Meditation]', query: 'meditation retreat couples' }
  ];

  // LEVEL 4 & 5: Destination Card Content
  const destinations = [
    {
      id: 'wellness-1',
      name: '[Admin: Wellness Destination 1]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Ayurveda]', '[Admin: Panchakarma]', '[Admin: Rejuvenation]'],
      stayOptions: ['[Admin: Wellness Villa]', '[Admin: Spa Suite]'],
      specialRequest: '[Admin: Include couple Ayurvedic consultation and treatments]'
    },
    {
      id: 'wellness-2',
      name: '[Admin: Wellness Destination 2]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Yoga Classes]', '[Admin: Pranayama]', '[Admin: Nature Walks]'],
      stayOptions: ['[Admin: Garden Cottage]', '[Admin: Forest Room]'],
      specialRequest: '[Admin: Private yoga sessions and meditation classes for couple]'
    },
    {
      id: 'wellness-3',
      name: '[Admin: Wellness Destination 3]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Thai Massage]', '[Admin: Hot Stone Therapy]', '[Admin: Aromatherapy]'],
      stayOptions: ['[Admin: Spa Resort]', '[Admin: Luxury Retreat]'],
      specialRequest: '[Admin: Book couples spa package with Thai massages]'
    },
    {
      id: 'wellness-4',
      name: '[Admin: Wellness Destination 4]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Organic Food]', '[Admin: Juice Cleanse]', '[Admin: Wellness Cuisine]'],
      stayOptions: ['[Admin: Eco Wellness Resort]', '[Admin: Organic Farm Stay]'],
      specialRequest: '[Admin: Arrange personalized detox meal plan and cooking class]'
    },
    {
      id: 'wellness-5',
      name: '[Admin: Wellness Destination 5]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Sound Healing]', '[Admin: Crystal Therapy]', '[Admin: Energy Work]'],
      stayOptions: ['[Admin: Holistic Center]', '[Admin: Spiritual Retreat]'],
      specialRequest: '[Admin: Include couples sound bath and crystal healing session]'
    },
    {
      id: 'wellness-6',
      name: '[Admin: Wellness Destination 6]',
      priceRange: '[Admin: ₹XX,000 - ₹XX,000 per couple]',
      perfectFor: ['[Admin: Hydrotherapy]', '[Admin: Mud Baths]', '[Admin: Steam Rooms]'],
      stayOptions: ['[Admin: Thermal Resort]', '[Admin: Spa Hotel]'],
      specialRequest: '[Admin: Schedule hydrotherapy sessions and mud therapy]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-8">
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated via Admin Dashboard
      </div>

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
            <Flower2 className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold bg-white/10 px-3 py-1 rounded inline-block mb-2">
              {headerTitle}
            </h1>
            <p className="text-white/90 text-sm bg-white/10 px-3 py-1 rounded inline-block">
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
            className="pl-12 pr-12 h-12 rounded-full bg-white border-0 shadow-lg"
          />
        </div>

        <div className="flex gap-3 mb-3">
          <Button
            onClick={() => onGoogleSearch('wellness spa retreat honeymoon destinations')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google Search
          </Button>
          <Button
            onClick={() => onYouTubeSearch('wellness spa retreat paradise')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>

        <div className="flex items-center gap-2 text-white/70 text-xs">
          <Sparkles className="w-4 h-4" />
          <span>[Admin: Find authentic wellness retreats via Google/YouTube]</span>
        </div>
      </div>

      <div className="px-6">
        <div className="-mt-6 mb-6">
          <PersonalizedDealsAlert
            category="honeymoon-wellness"
            showAdminIndicators={true}
            onSavePreferences={(data) => {
              console.log('Wellness honeymoon deal preferences saved:', data);
            }}
            content={{
              heading: '[Admin: Get Wellness Retreat Deal Alerts]',
              description: '[Admin: Set budget for wellness & spa honeymoon packages]',
              budgetPlaceholder: '[Admin: e.g., ₹2,50,000 for wellness retreat]',
              notificationText: '[Admin: Notify me of wellness retreat deals]',
              buttonLabel: '[Admin: Save Wellness Preferences]'
            }}
          />
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {filterChips.map((filter, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => onGoogleSearch(filter.query)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all shadow-md"
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Admin Note: Filter chips trigger Google searches with pre-defined queries
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold bg-gray-100 px-3 py-1 rounded">{sectionHeading}</h2>
            <span className="text-xs text-purple-600 font-semibold">✏️ Admin Editable</span>
          </div>
          
          <div className="space-y-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 relative"
              >
                <div className="absolute top-6 right-6 z-10">
                  <InterestTrackerIcon
                    destinationId={destination.id}
                    destinationName={destination.name}
                    category="honeymoon-wellness"
                    size="md"
                    showCount={false}
                  />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Flower2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pr-12">
                    <h3 className="font-bold text-lg mb-2 bg-gray-100 px-2 py-1 rounded inline-block">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Price Range:</span>{' '}
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{destination.priceRange}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-2 flex items-center gap-2">
                    Perfect For:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.perfectFor.map((tag, i) => (
                      <Badge key={i} className="bg-gray-100 text-pink-700 border-pink-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    Stay Options:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {destination.stayOptions.map((option, i) => (
                      <span key={i} className="text-xs text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50 rounded-2xl p-3 mb-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1 flex items-center gap-2">
                    Special Request:
                    <span className="text-purple-600 text-[10px]">✏️ Admin Editable</span>
                  </p>
                  <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">{destination.specialRequest}</p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => onGoogleSearch(`${destination.name} wellness retreat`)}
                    className="flex-1 rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 h-10 text-sm"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Google
                  </Button>
                  <Button 
                    onClick={() => onYouTubeSearch(`${destination.name} spa resort tour`)}
                    className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 h-10 text-sm"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                </div>

                <div className="mt-3 text-xs text-gray-500 italic">
                  💡 Users can click the heart icon to track interest & receive deal notifications
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-6 mb-6">
          <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Admin Editing Guide
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Purpose:</strong> Template-based wellness retreat category with placeholder content for admin customization</p>
            <p><strong>Update Process:</strong> Navigate to Admin Dashboard → Honeymoon Section → Wellness Category to edit all text elements</p>
            <p><strong>User Flow:</strong> Users browse wellness templates → Use Google/YouTube to find real retreats → Track interests → Receive deal alerts</p>
            <p><strong>Technical:</strong> All edits save to localStorage, sync to backend via /api/honeymoon/wellness/update endpoint</p>
          </div>
        </div>
      </div>
    </div>
  );
}
