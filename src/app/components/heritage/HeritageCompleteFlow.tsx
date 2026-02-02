import { useState } from 'react';
import { HeritageLandingPage } from './HeritageLandingPage';
import { HeritageExpressInterest } from './HeritageExpressInterest';
import { HeritageCustomizeExperience } from './HeritageCustomizeExperience';
import { HeritageTripIntegration } from './HeritageTripIntegration';
import { HeritageRequestSuccess } from './HeritageRequestSuccess';

// ========================================
// HERITAGE COMPLETE FLOW INTEGRATION
// New Flow: Browse → Express Interest → Customize → Trip Integration → Success
// ========================================

type Screen = 'landing' | 'express-interest' | 'customize' | 'trip-integration' | 'success';

interface HeritageFlowState {
  selectedTheme: { id: string; name: string; icon: string; description: string } | null;
  selectedDestinations: Array<{ id: string; name: string }>;
  selectedServices: string[];
  selectedConcessions: string[];
  tripData: any | null;
}

export function HeritageCompleteFlow() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [flowState, setFlowState] = useState<HeritageFlowState>({
    selectedTheme: null,
    selectedDestinations: [],
    selectedServices: [],
    selectedConcessions: [],
    tripData: null,
  });

  // Theme metadata
  const themeMetadata: Record<string, { name: string; icon: string; description: string }> = {
    'unesco-sites': {
      name: 'UNESCO World Heritage Sites',
      icon: '🏛️',
      description: "India's 42 protected marvels with expert guides",
    },
    'archaeological-sites': {
      name: 'Archaeological Sites & Monuments',
      icon: '🏺',
      description: 'Ancient ruins, excavations, historical monuments',
    },
    'cultural-festivals': {
      name: 'Cultural Festivals & Events',
      icon: '🎭',
      description: 'Traditional festivals, dance forms, music events',
    },
    'craft-villages': {
      name: 'Craft Villages & Artisan Communities',
      icon: '🎨',
      description: 'Handicraft workshops & living artisan experiences',
    },
    'living-heritage': {
      name: 'Living Heritage & Traditions',
      icon: '🕉️',
      description: 'Temple rituals, traditional ceremonies, classical arts',
    },
    'heritage-circuits': {
      name: 'Heritage Circuits & Routes',
      icon: '🗺️',
      description: 'Curated multi-destination heritage trails',
    },
  };

  // Destination names mapping
  const destinationNames: Record<string, string> = {
    'taj-mahal': 'Taj Mahal',
    'red-fort': 'Red Fort',
    'qutub-minar': 'Qutub Minar',
    'hampi': 'Hampi',
    'ajanta-ellora': 'Ajanta & Ellora Caves',
  };

  // Handler: Theme selected on landing page
  const handleThemeSelect = (themeId: string) => {
    const metadata = themeMetadata[themeId] || {
      name: themeId,
      icon: '🏛️',
      description: 'Explore heritage destinations',
    };
    
    setFlowState({
      ...flowState,
      selectedTheme: {
        id: themeId,
        ...metadata,
      },
    });
    setCurrentScreen('express-interest');
  };

  // Handler: Trending experience selected
  const handleTrendingSelect = (experienceId: string) => {
    console.log('Trending experience selected:', experienceId);
    // In production: Navigate to specialized combo page
  };

  // Handler: Destinations selected (Express Interest)
  const handleExpressInterest = (destinationIds: string[]) => {
    const destinations = destinationIds.map((id) => ({
      id,
      name: destinationNames[id] || id,
    }));
    
    setFlowState({
      ...flowState,
      selectedDestinations: destinations,
    });
    setCurrentScreen('customize');
  };

  // Handler: Services and concessions selected (Customize)
  const handleCustomizeComplete = (
    services: string[],
    concessions: string[],
    preferences: any
  ) => {
    setFlowState({
      ...flowState,
      selectedServices: services,
      selectedConcessions: concessions,
    });
    setCurrentScreen('trip-integration');
  };

  // Handler: Trip integration complete
  const handleTripSubmit = (tripData: any) => {
    setFlowState({
      ...flowState,
      tripData,
    });
    setCurrentScreen('success');
  };

  // Handler: Back navigation
  const handleBack = () => {
    if (currentScreen === 'express-interest') {
      setCurrentScreen('landing');
    } else if (currentScreen === 'customize') {
      setCurrentScreen('express-interest');
    } else if (currentScreen === 'trip-integration') {
      setCurrentScreen('customize');
    }
  };

  // Handler: Explore more after success
  const handleExploreMore = () => {
    setFlowState({
      selectedTheme: null,
      selectedDestinations: [],
      selectedServices: [],
      selectedConcessions: [],
      tripData: null,
    });
    setCurrentScreen('landing');
  };

  return (
    <>
      {/* ========================================
          SCREEN 1: LANDING PAGE
      ======================================== */}
      {currentScreen === 'landing' && (
        <HeritageLandingPage
          onThemeSelect={handleThemeSelect}
          onTrendingSelect={handleTrendingSelect}
        />
      )}

      {/* ========================================
          SCREEN 2: EXPRESS INTEREST
      ======================================== */}
      {currentScreen === 'express-interest' && flowState.selectedTheme && (
        <HeritageExpressInterest
          themeId={flowState.selectedTheme.id}
          themeName={flowState.selectedTheme.name}
          themeIcon={flowState.selectedTheme.icon}
          themeDescription={flowState.selectedTheme.description}
          onExpressInterest={handleExpressInterest}
          onBack={handleBack}
        />
      )}

      {/* ========================================
          SCREEN 3: CUSTOMIZE EXPERIENCE
      ======================================== */}
      {currentScreen === 'customize' && (
        <HeritageCustomizeExperience
          selectedDestinations={flowState.selectedDestinations}
          onContinue={handleCustomizeComplete}
          onBack={handleBack}
        />
      )}

      {/* ========================================
          SCREEN 4: TRIP INTEGRATION
      ======================================== */}
      {currentScreen === 'trip-integration' && (
        <HeritageTripIntegration
          selectedDestinations={flowState.selectedDestinations}
          selectedServices={flowState.selectedServices}
          selectedConcessions={flowState.selectedConcessions}
          onSubmit={handleTripSubmit}
          onBack={handleBack}
        />
      )}

      {/* ========================================
          SCREEN 5: SUCCESS
      ======================================== */}
      {currentScreen === 'success' && flowState.selectedDestinations.length > 0 && (
        <HeritageRequestSuccess
          destinationName={flowState.selectedDestinations.map((d) => d.name).join(', ')}
          hasConcessions={flowState.selectedConcessions.length > 0}
          hasGuide={flowState.selectedServices.includes('certified-guide')}
          hasTransport={flowState.tripData?.transport?.arrival !== ''}
          hasMultiCategory={false}
          onExploreMore={handleExploreMore}
          onClose={handleExploreMore}
        />
      )}
    </>
  );
}