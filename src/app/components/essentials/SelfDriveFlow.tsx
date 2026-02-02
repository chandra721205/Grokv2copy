import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Screen77U_SelfDriveHub } from '@/app/components/essentials/screens/Screen77U_SelfDriveHub';
import { Screen77V_VehicleListings } from '@/app/components/essentials/screens/Screen77V_VehicleListings';
import { Screen77W_VehicleDetails } from '@/app/components/essentials/screens/Screen77W_VehicleDetails';
import { Screen77X_ComparisonView } from '@/app/components/essentials/screens/Screen77X_ComparisonView';

interface SelfDriveFlowProps {
  onBack: () => void;
  initialCategory?: string;
  onNavigateToBooking?: () => void;
}

export default function SelfDriveFlow({ onBack, initialCategory, onNavigateToBooking }: SelfDriveFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<'77U' | '77V' | '77W' | '77X'>('77U');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(initialCategory);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [comparedVehicles, setComparedVehicles] = useState<Set<string>>(new Set());

  const handleGoogleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const handleYouTubeSearch = (query: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  const handleNavigateToListings = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    setCurrentScreen('77V');
  };

  const handleNavigateToDetails = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    setCurrentScreen('77W');
  };

  const handleNavigateToComparison = () => {
    setCurrentScreen('77X');
  };

  const handleCompareToggle = (vehicleId: string) => {
    const newCompared = new Set(comparedVehicles);
    if (newCompared.has(vehicleId)) {
      newCompared.delete(vehicleId);
    } else {
      if (newCompared.size < 3) {
        newCompared.add(vehicleId);
      }
    }
    setComparedVehicles(newCompared);
  };

  const handleBackFromListings = () => {
    setCurrentScreen('77U');
    setSelectedCategory(undefined);
  };

  const handleBackFromDetails = () => {
    setCurrentScreen('77V');
    setSelectedVehicleId(null);
  };

  const handleBackFromComparison = () => {
    setCurrentScreen('77V');
  };

  const handleBookNow = () => {
    if (onNavigateToBooking) {
      onNavigateToBooking();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        {/* Screen 77U: Self-Drive Hub */}
        {currentScreen === '77U' && (
          <Screen77U_SelfDriveHub
            key="77U"
            onBack={onBack}
            onNavigateToListings={handleNavigateToListings}
            onGoogleSearch={handleGoogleSearch}
            onYouTubeSearch={handleYouTubeSearch}
          />
        )}

        {/* Screen 77V: Vehicle Listings */}
        {currentScreen === '77V' && (
          <Screen77V_VehicleListings
            key="77V"
            onBack={handleBackFromListings}
            onSelectVehicle={handleNavigateToDetails}
            onGoogleSearch={handleGoogleSearch}
            onYouTubeSearch={handleYouTubeSearch}
            onCompare={handleCompareToggle}
            onViewComparison={handleNavigateToComparison}
            initialCategory={selectedCategory}
            comparedVehicles={comparedVehicles}
          />
        )}

        {/* Screen 77W: Vehicle Details */}
        {currentScreen === '77W' && selectedVehicleId && (
          <Screen77W_VehicleDetails
            key="77W"
            onBack={handleBackFromDetails}
            vehicleId={selectedVehicleId}
            onBookNow={handleBookNow}
            onCompare={handleCompareToggle}
            onGoogleSearch={handleGoogleSearch}
            onYouTubeSearch={handleYouTubeSearch}
          />
        )}

        {/* Screen 77X: Comparison View */}
        {currentScreen === '77X' && (
          <Screen77X_ComparisonView
            key="77X"
            onBack={handleBackFromComparison}
            comparedVehicleIds={Array.from(comparedVehicles)}
            onSelectVehicle={handleNavigateToDetails}
            onRemoveFromComparison={handleCompareToggle}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
