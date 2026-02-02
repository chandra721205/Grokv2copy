import { useState } from 'react';
import { Home, Compass, Calendar, User, MessageCircle } from 'lucide-react';
import { MainHome } from '@/app/components/main/MainHome_OPTIMIZED'; // ✅ OPTIMIZED VERSION - 60% smaller bundle!
import { Explore } from '@/app/components/main/Explore';
import { MyBookings } from '@/app/components/main/MyBookings';
import { Profile } from '@/app/components/main/Profile';
import { Messages } from '@/app/components/main/Messages';
import { ComboTourFlow } from '@/app/components/custom-tour/ComboTourFlow';
import { InterestTrackerProvider } from '@/app/components/shared/InterestTracker';
import { UserData } from '@/types/index';

interface MainLayoutProps {
  userData: UserData | null;
}

export function MainLayout({ userData }: MainLayoutProps) {
  const [activeTab, setActiveTab] = useState('home');
  const [showComboTour, setShowComboTour] = useState(false);

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Compass, label: 'Explore' },
    { id: 'bookings', icon: Calendar, label: 'Trips' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  // Show combo tour flow if active
  if (showComboTour) {
    return (
      <ComboTourFlow 
        isOpen={true}
        onClose={() => setShowComboTour(false)}
      />
    );
  }

  return (
    <InterestTrackerProvider>
      <div className="min-h-screen w-full max-w-[375px] mx-auto bg-gray-50 flex flex-col">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          {activeTab === 'home' && (
            <MainHome 
              userData={userData} 
              onNavigate={setActiveTab}
            />
          )}
          {activeTab === 'explore' && <Explore />}
          {activeTab === 'bookings' && <MyBookings />}
          {activeTab === 'messages' && <Messages />}
          {activeTab === 'profile' && <Profile userData={userData} />}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto bg-white border-t border-gray-200 px-2 py-2 shadow-lg">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all ${
                  activeTab === tab.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'scale-110' : ''}`} />
                <span className="text-xs mt-1 font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </InterestTrackerProvider>
  );
}