import React, { useState } from 'react';
import MainCategoryGrid from './categories/MainCategoryGrid';
import TravelEssentialsRouter from './travel-essentials/TravelEssentialsRouter';
import {
  Home,
  Compass,
  Calendar,
  MessageCircle,
  User
} from 'lucide-react';

type AppScreen = 
  | { type: 'home' }
  | { type: 'explore' }
  | { type: 'trips' }
  | { type: 'messages' }
  | { type: 'profile' }
  | { type: 'category'; categoryId: string };

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  screen: AppScreen['type'];
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    screen: 'home'
  },
  {
    id: 'explore',
    label: 'Explore',
    icon: Compass,
    screen: 'explore'
  },
  {
    id: 'trips',
    label: 'Trip',
    icon: Calendar,
    screen: 'trips'
  },
  {
    id: 'messages',
    label: 'Message',
    icon: MessageCircle,
    screen: 'messages'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    screen: 'profile'
  }
];

function BottomNavigation({ 
  currentScreen, 
  onNavigate 
}: { 
  currentScreen: string; 
  onNavigate: (screen: AppScreen['type']) => void;
}) {
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentScreen === item.screen;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.screen)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <IconComponent 
                className={`w-6 h-6 mb-1 ${isActive ? 'fill-current' : ''}`}
                aria-hidden="true"
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default function GrokYatraApp() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>({ type: 'home' });
  const [userLocation] = useState('[Admin: Auto-Detect Location]');
  const [userBudget] = useState(25000);

  const handleCategorySelect = (categoryId: string) => {
    setCurrentScreen({ type: 'category', categoryId });
  };

  const handleBackToHome = () => {
    setCurrentScreen({ type: 'home' });
  };

  const handleNavigation = (screen: AppScreen['type']) => {
    setCurrentScreen({ type: screen });
  };

  // Render current screen
  const renderScreen = () => {
    if (currentScreen.type === 'home' || currentScreen.type === 'explore') {
      return (
        <MainCategoryGrid onCategorySelect={handleCategorySelect} />
      );
    }

    if (currentScreen.type === 'category') {
      const categoryId = currentScreen.categoryId;

      // Travel Essentials has its own router
      if (categoryId === 'travel-essentials') {
        return (
          <TravelEssentialsRouter
            onBack={handleBackToHome}
            currentLocation={userLocation}
            userBudget={userBudget}
          />
        );
      }

      // Other categories would have their own implementations
      // For now, show a placeholder
      return (
        <div className="min-h-screen bg-gray-50 p-6 pb-24">
          <button
            onClick={handleBackToHome}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Categories
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {categoryId.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h1>
          <p className="text-gray-600">
            This category page is under development. The Travel Essentials category is fully implemented!
          </p>
        </div>
      );
    }

    if (currentScreen.type === 'trips') {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pb-24">
          <div className="text-center">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">My Trips</h2>
            <p className="text-gray-600">Your saved trips will appear here</p>
          </div>
        </div>
      );
    }

    if (currentScreen.type === 'messages') {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pb-24">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Messages</h2>
            <p className="text-gray-600">Your conversations will appear here</p>
          </div>
        </div>
      );
    }

    if (currentScreen.type === 'profile') {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pb-24">
          <div className="text-center">
            <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile</h2>
            <p className="text-gray-600">Your account settings</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="relative">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation
        currentScreen={currentScreen.type}
        onNavigate={handleNavigation}
      />
    </div>
  );
}
