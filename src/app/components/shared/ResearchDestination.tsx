import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Youtube, Info, Shield, ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// RESEARCH THIS DESTINATION COMPONENT
// Admin-editable content framework
// ========================================

export interface ResearchDestinationProps {
  /** Destination name for search queries */
  destinationName: string;
  
  /** Category for personalized tracking (e.g., "beach", "heritage") */
  category?: string;
  
  /** Custom search query override */
  customSearchQuery?: string;
  
  /** Handler for Google search */
  onGoogleSearch?: (query: string) => void;
  
  /** Handler for YouTube search */
  onYouTubeSearch?: (query: string) => void;
  
  /** Show admin indicators */
  showAdminIndicators?: boolean;
  
  /** Compact mode */
  compact?: boolean;
  
  /** Custom admin-editable content */
  content?: {
    heading?: string;
    youtubeButtonLabel?: string;
    googleButtonLabel?: string;
    benefitDescription?: string;
    privacyNote?: string;
  };
}

export function ResearchDestination({
  destinationName,
  category = 'general',
  customSearchQuery,
  onGoogleSearch,
  onYouTubeSearch,
  showAdminIndicators = false,
  compact = false,
  content
}: ResearchDestinationProps) {
  const { isAdminMode } = useAdminMode();
  const [hasResearched, setHasResearched] = useState(false);
  
  // Admin-editable content with defaults
  const heading = content?.heading || '[Admin: Browse Heading Text]';
  const youtubeLabel = content?.youtubeButtonLabel || '[Admin: YouTube Button Label]';
  const googleLabel = content?.googleButtonLabel || '[Admin: Google Button Label]';
  const benefitText = content?.benefitDescription || '[Admin: Browsing Benefit Description]';
  const privacyText = content?.privacyNote || '[Admin: Privacy Policy Note]';

  // Determine if we should show admin styling
  const showAdminStyling = showAdminIndicators || isAdminMode;

  // Generate search query
  const searchQuery = customSearchQuery || `${destinationName} tourism travel guide`;
  const youtubeQuery = customSearchQuery || `${destinationName} travel vlog destination guide`;

  // Handle Google search
  const handleGoogleSearch = () => {
    setHasResearched(true);
    
    // Track interest for personalization (in production, send to analytics/backend)
    trackResearch('google', searchQuery, category);
    
    if (onGoogleSearch) {
      onGoogleSearch(searchQuery);
    } else {
      // Default: open in new tab
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  // Handle YouTube search
  const handleYouTubeSearch = () => {
    setHasResearched(true);
    
    // Track interest for personalization
    trackResearch('youtube', youtubeQuery, category);
    
    if (onYouTubeSearch) {
      onYouTubeSearch(youtubeQuery);
    } else {
      // Default: open in new tab
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeQuery)}`, '_blank');
    }
  };

  // Track research activity (mock implementation)
  const trackResearch = (platform: string, query: string, cat: string) => {
    console.log('📊 Tracking research:', { platform, query, category: cat });
    
    // In production, this would:
    // 1. Send to analytics service
    // 2. Update user preferences
    // 3. Trigger personalized deal recommendations
    // 4. Store in localStorage/database
    
    const researchHistory = JSON.parse(localStorage.getItem('grokyatra_research') || '[]');
    researchHistory.push({
      platform,
      query,
      category: cat,
      timestamp: new Date().toISOString(),
      destination: destinationName
    });
    localStorage.setItem('grokyatra_research', JSON.stringify(researchHistory));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl ${
        compact ? 'p-4' : 'p-6'
      } ${
        showAdminStyling ? 'border-2 border-blue-200' : 'border border-blue-100'
      } shadow-md hover:shadow-lg transition-all`}
    >
      {/* Admin Indicator */}
      {showAdminStyling && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded-full">
            🔧 Admin Editable Component
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0`}>
          <ExternalLink className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} text-white`} />
        </div>
        <div className="flex-1">
          {/* LEVEL 2: Heading */}
          <h3 className={`font-bold ${compact ? 'text-base' : 'text-lg'} text-gray-900 mb-1 ${
            showAdminStyling ? 'bg-gray-100 px-2 py-1 rounded inline-block' : ''
          }`}>
            {heading}
          </h3>
          <p className="text-xs text-gray-600">
            Explore videos, guides & reviews before you book
          </p>
        </div>
      </div>

      {/* Browse Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* YouTube Button */}
        <Button
          onClick={handleYouTubeSearch}
          className={`bg-white border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 ${
            compact ? 'h-12' : 'h-14'
          } rounded-2xl font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group`}
        >
          <Youtube className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} group-hover:scale-110 transition-transform`} />
          <span className={`${compact ? 'text-xs' : 'text-sm'} ${
            showAdminStyling ? 'bg-gray-100 px-2 py-0.5 rounded' : ''
          }`}>
            {youtubeLabel}
          </span>
        </Button>

        {/* Google Button */}
        <Button
          onClick={handleGoogleSearch}
          className={`bg-white border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 ${
            compact ? 'h-12' : 'h-14'
          } rounded-2xl font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group`}
        >
          <Globe className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} group-hover:scale-110 transition-transform`} />
          <span className={`${compact ? 'text-xs' : 'text-sm'} ${
            showAdminStyling ? 'bg-gray-100 px-2 py-0.5 rounded' : ''
          }`}>
            {googleLabel}
          </span>
        </Button>
      </div>

      {/* Benefit Description */}
      <div className="bg-white rounded-2xl p-3 mb-3 border border-blue-100">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className={`text-xs text-gray-700 ${
              showAdminStyling ? 'bg-gray-100 px-2 py-1 rounded' : ''
            }`}>
              {benefitText}
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Note */}
      <div className="bg-purple-50 rounded-2xl p-3 border border-purple-100">
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className={`text-[11px] text-purple-800 ${
              showAdminStyling ? 'bg-gray-100 px-2 py-1 rounded' : ''
            }`}>
              {privacyText}
            </p>
          </div>
        </div>
      </div>

      {/* Research Tracking Indicator */}
      {hasResearched && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-3 bg-green-50 rounded-2xl p-3 border border-green-200"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <p className="text-xs text-green-800 font-semibold">
              ✓ Interest saved! We'll show you personalized deals for this destination.
            </p>
          </div>
        </motion.div>
      )}

      {/* Admin Development Note */}
      {showAdminStyling && (
        <div className="mt-4 pt-4 border-t border-blue-200">
          <p className="text-[10px] text-gray-500 italic">
            <strong>Developer Note:</strong> This component tracks user research interests and triggers personalized deal recommendations. In production, integrate with analytics service and recommendation engine.
          </p>
        </div>
      )}
    </motion.div>
  );
}

// ========================================
// PRESET CONFIGURATIONS FOR COMMON USES
// ========================================

export const ResearchDestinationPresets = {
  beach: {
    heading: 'Research Beach Destinations',
    youtubeButtonLabel: 'Watch Beach Videos',
    googleButtonLabel: 'Search Beach Info',
    benefitDescription: 'Browse videos and guides to discover the best beaches, water sports, and coastal experiences. Your research helps us recommend perfect beach packages.',
    privacyNote: 'We track your browsing to personalize deals. No personal data is shared with external sites. See Privacy Policy.'
  },
  heritage: {
    heading: 'Research Heritage Sites',
    youtubeButtonLabel: 'Watch Heritage Tours',
    googleButtonLabel: 'Search History Info',
    benefitDescription: 'Explore cultural heritage, historical monuments, and royal experiences through videos and articles. We\'ll suggest matching heritage packages.',
    privacyNote: 'Your research interests help us curate personalized heritage tour recommendations. Privacy protected.'
  },
  wellness: {
    heading: 'Research Wellness Retreats',
    youtubeButtonLabel: 'Watch Spa Videos',
    googleButtonLabel: 'Search Wellness Info',
    benefitDescription: 'Discover spa treatments, yoga retreats, and wellness programs. Your interests guide our wellness package recommendations.',
    privacyNote: 'We use your research to suggest perfect wellness experiences. Your privacy is our priority.'
  },
  adventure: {
    heading: 'Research Adventure Activities',
    youtubeButtonLabel: 'Watch Adventure Videos',
    googleButtonLabel: 'Search Activities',
    benefitDescription: 'Watch thrilling adventure videos and read guides about activities. We\'ll recommend packages matching your adventure interests.',
    privacyNote: 'Research tracking helps personalize adventure recommendations. Privacy policy applies.'
  },
  hillStation: {
    heading: 'Research Hill Stations',
    youtubeButtonLabel: 'Watch Mountain Videos',
    googleButtonLabel: 'Search Hill Stations',
    benefitDescription: 'Explore mountain destinations, scenic views, and hill station activities. Your research helps us find ideal mountain getaways.',
    privacyNote: 'We track interests to suggest personalized hill station packages. Privacy protected.'
  },
  international: {
    heading: 'Research International Destinations',
    youtubeButtonLabel: 'Watch Travel Vlogs',
    googleButtonLabel: 'Search Destinations',
    benefitDescription: 'Discover international destinations through travel vlogs and guides. We\'ll recommend visa-friendly packages based on your interests.',
    privacyNote: 'Research tracking enables personalized international tour suggestions. See Privacy Policy.'
  }
};

// ========================================
// VARIANT-SPECIFIC COMPONENTS
// ========================================

export function BeachResearchBox(props: Omit<ResearchDestinationProps, 'content' | 'category'>) {
  return (
    <ResearchDestination
      {...props}
      category="beach"
      content={ResearchDestinationPresets.beach}
    />
  );
}

export function HeritageResearchBox(props: Omit<ResearchDestinationProps, 'content' | 'category'>) {
  return (
    <ResearchDestination
      {...props}
      category="heritage"
      content={ResearchDestinationPresets.heritage}
    />
  );
}

export function WellnessResearchBox(props: Omit<ResearchDestinationProps, 'content' | 'category'>) {
  return (
    <ResearchDestination
      {...props}
      category="wellness"
      content={ResearchDestinationPresets.wellness}
    />
  );
}

export function AdventureResearchBox(props: Omit<ResearchDestinationProps, 'content' | 'category'>) {
  return (
    <ResearchDestination
      {...props}
      category="adventure"
      content={ResearchDestinationPresets.adventure}
    />
  );
}

export function HillStationResearchBox(props: Omit<ResearchDestinationProps, 'content' | 'category'>) {
  return (
    <ResearchDestination
      {...props}
      category="hillStation"
      content={ResearchDestinationPresets.hillStation}
    />
  );
}

export function InternationalResearchBox(props: Omit<ResearchDestinationProps, 'content' | 'category'>) {
  return (
    <ResearchDestination
      {...props}
      category="international"
      content={ResearchDestinationPresets.international}
    />
  );
}

// ========================================
// ADMIN FIELD GENERATOR
// For integration with AdminControlPanel
// ========================================

export function generateResearchAdminFields(prefix: string = 'research') {
  return [
    {
      id: `${prefix}_heading`,
      label: 'Research Box - Heading',
      type: 'text' as const,
      value: '[Admin: Browse Heading Text]',
      placeholder: 'Enter heading text',
      level: 2 as const
    },
    {
      id: `${prefix}_youtube_label`,
      label: 'Research Box - YouTube Button',
      type: 'text' as const,
      value: '[Admin: YouTube Button Label]',
      placeholder: 'Enter YouTube button label',
      level: 3 as const
    },
    {
      id: `${prefix}_google_label`,
      label: 'Research Box - Google Button',
      type: 'text' as const,
      value: '[Admin: Google Button Label]',
      placeholder: 'Enter Google button label',
      level: 3 as const
    },
    {
      id: `${prefix}_benefit`,
      label: 'Research Box - Benefit Description',
      type: 'textarea' as const,
      value: '[Admin: Browsing Benefit Description]',
      placeholder: 'Explain benefits of researching',
      maxLength: 200,
      level: 4 as const
    },
    {
      id: `${prefix}_privacy`,
      label: 'Research Box - Privacy Note',
      type: 'textarea' as const,
      value: '[Admin: Privacy Policy Note]',
      placeholder: 'Enter privacy policy note',
      maxLength: 150,
      level: 5 as const
    }
  ];
}
