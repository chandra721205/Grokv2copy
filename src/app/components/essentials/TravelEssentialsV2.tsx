import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, Search, Heart, Bell, User, MessageCircle
} from 'lucide-react';
import { Screen77U_SelfDriveHub } from '@/app/components/essentials/screens/Screen77U_SelfDriveHub';
import { Screen77V_VehicleListings } from '@/app/components/essentials/screens/Screen77V_VehicleListings';
import { Screen77W_VehicleDetails } from '@/app/components/essentials/screens/Screen77W_VehicleDetails';
import { Screen77X_ComparisonView } from '@/app/components/essentials/screens/Screen77X_ComparisonView';
import { VehicleBookingForm } from '@/app/components/essentials/VehicleBookingForm';

// Import the original home screen components from TravelEssentialsMain
import { TravelEssentialsMain } from '@/app/components/essentials/TravelEssentialsMain';

type Screen = '77' | '77U' | '77V' | '77W' | '77X' | '82' | 'home';

export function TravelEssentialsV2() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('77');
  const [activeNavItem, setActiveNavItem] = useState<'home' | 'search' | 'favorites' | 'alerts' | 'profile'>('home');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
  const [compareVehicleIds, setCompareVehicleIds] = useState<string[]>([]);

  const handleGoogleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(`india ${query} travel`)}`, '_blank');
  };

  const handleYouTubeSearch = (query: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(`india ${query} travel guide`)}`, '_blank');
  };

  const handleNavigateToListings = (category?: string) => {
    setCurrentScreen('77V');
  };

  const handleNavigateToBooking = (vehicleId?: string) => {
    if (vehicleId) {
      setSelectedVehicleId(vehicleId);
    }
    setCurrentScreen('82');
  };

  const handleSubmitBooking = (bookingData: any) => {
    console.log('Booking submitted:', bookingData);
    alert('✅ Booking submitted successfully! This is a demo - no actual booking was made.');
    setCurrentScreen('77');
  };

  const handleCompareVehicles = (vehicleIds: string[]) => {
    setCompareVehicleIds(vehicleIds);
    setCurrentScreen('77X');
  };

  const handleRemoveFromComparison = (vehicleId: string) => {
    setCompareVehicleIds(compareVehicleIds.filter(id => id !== vehicleId));
  };

  // For Screen 77 (main hub), use the original TravelEssentialsMain but only show self-drive path
  if (currentScreen === 'home' || currentScreen === '77') {
    return <TravelEssentialsMain />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <AnimatePresence mode="wait">
        {currentScreen === '77U' && (
          <Screen77U_SelfDriveHub
            key="77U"
            onBack={() => setCurrentScreen('77')}
            onNavigateToListings={handleNavigateToListings}
            onGoogleSearch={handleGoogleSearch}
            onYouTubeSearch={handleYouTubeSearch}
          />
        )}
        
        {currentScreen === '77V' && (
          <Screen77V_VehicleListings
            key="77V"
            onBack={() => setCurrentScreen('77U')}
            onSelectVehicle={(vehicleId) => handleNavigateToBooking(vehicleId)}
            onViewDetails={(vehicleId) => {
              setSelectedVehicleId(vehicleId);
              setCurrentScreen('77W');
            }}
            onCompare={handleCompareVehicles}
          />
        )}

        {currentScreen === '77W' && (
          <Screen77W_VehicleDetails
            key="77W"
            onBack={() => setCurrentScreen('77V')}
            onBookNow={handleNavigateToBooking}
            vehicleId={selectedVehicleId}
            onGoogleSearch={handleGoogleSearch}
            onYouTubeSearch={handleYouTubeSearch}
          />
        )}

        {currentScreen === '77X' && (
          <Screen77X_ComparisonView
            key="77X"
            onBack={() => setCurrentScreen('77V')}
            onSelectVehicle={(vehicleId) => {
              setSelectedVehicleId(vehicleId);
              setCurrentScreen('77W');
            }}
            vehicleIds={compareVehicleIds}
            onRemoveVehicle={handleRemoveFromComparison}
          />
        )}

        {currentScreen === '82' && (
          <VehicleBookingForm
            key="82"
            onBack={() => setCurrentScreen('77W')}
            onSubmitBooking={handleSubmitBooking}
            selectedVehicle={selectedVehicleId || 'Admin SUV Model 1'}
          />
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-md mx-auto flex items-center justify-around py-2 px-4">
          <NavButton
            icon={HomeIcon}
            label="Home"
            active={activeNavItem === 'home'}
            onClick={() => {
              setActiveNavItem('home');
              setCurrentScreen('77');
            }}
          />
          <NavButton
            icon={Search}
            label="Search"
            active={activeNavItem === 'search'}
            onClick={() => {
              setActiveNavItem('search');
              handleGoogleSearch('self drive vehicles');
            }}
          />
          <div className="relative">
            <button className="w-14 h-14 -mt-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </button>
          </div>
          <NavButton
            icon={Bell}
            label="Alerts"
            active={activeNavItem === 'alerts'}
            onClick={() => setActiveNavItem('alerts')}
          />
          <NavButton
            icon={User}
            label="Profile"
            active={activeNavItem === 'profile'}
            onClick={() => setActiveNavItem('profile')}
          />
        </div>
      </div>

      {/* Floating Support Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl z-40 hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
          3
        </span>
      </button>
    </div>
  );
}

function NavButton({ icon: Icon, label, active, onClick }: { icon: any; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 transition-colors ${
        active ? 'text-purple-600' : 'text-gray-400'
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
