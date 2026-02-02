// Travel Essentials Main - OPTIMIZED VERSION
// Reduced from 1,063 lines to ~280 lines using:
// - travelEssentialsData.ts for vehicle data
// - Simplified screen structure
// - Reusable components

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, Hotel, Car, Package, Shield, ChevronRight,
  Youtube, ExternalLink, Globe, MapPin, Users, Smartphone,
  UtensilsCrossed, PawPrint, Accessibility, Baby, Home as HomeIcon
} from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { SelfDriveVehicles } from '@/app/components/essentials/SelfDriveVehicles';
import { VehicleListings } from '@/app/components/essentials/VehicleListings';
import { VehicleBookingForm } from '@/app/components/essentials/VehicleBookingForm';
import { VehicleDetails } from '@/app/components/essentials/VehicleDetails';
import { VehicleComparison } from '@/app/components/essentials/VehicleComparison';
import {
  travelEssentialsSubcategories,
  vehicleTypes,
  insurancePackages,
  connectivityOptions
} from '@/data/travelEssentialsData';

type Screen =
  | 'home'
  | 'accommodation'
  | 'transportation'
  | 'self-drive'
  | 'vehicle-listings'
  | 'vehicle-booking'
  | 'vehicle-details'
  | 'vehicle-comparison';

export function TravelEssentialsMain() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
  const [compareVehicleIds, setCompareVehicleIds] = useState<string[]>([]);

  const handleGoogleSearch = (query: string) => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(`india ${query} travel`)}`,
      '_blank'
    );
  };

  const handleYouTubeSearch = (query: string) => {
    window.open(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(`india ${query} travel guide`)}`,
      '_blank'
    );
  };

  const handleSubmitBooking = (bookingData: any) => {
    console.log('Booking submitted:', bookingData);
    alert('✅ Booking submitted successfully! This is a demo - no actual booking was made.');
    setCurrentScreen('home');
  };

  // Self-Drive and Vehicle Screens (using existing components)
  if (currentScreen === 'self-drive') {
    return (
      <SelfDriveVehicles
        onBack={() => setCurrentScreen('home')}
        onNavigateToListings={() => setCurrentScreen('vehicle-listings')}
      />
    );
  }

  if (currentScreen === 'vehicle-listings') {
    return (
      <VehicleListings
        onBack={() => setCurrentScreen('self-drive')}
        onSelectVehicle={(id) => {
          setSelectedVehicleId(id);
          setCurrentScreen('vehicle-details');
        }}
        onAddToComparison={(id) => {
          if (!compareVehicleIds.includes(id)) {
            setCompareVehicleIds([...compareVehicleIds, id]);
          }
        }}
        compareVehicleIds={compareVehicleIds}
        onNavigateToComparison={() => setCurrentScreen('vehicle-comparison')}
      />
    );
  }

  if (currentScreen === 'vehicle-details') {
    return (
      <VehicleDetails
        vehicleId={selectedVehicleId}
        onBack={() => setCurrentScreen('vehicle-listings')}
        onBookNow={(id) => {
          setSelectedVehicleId(id);
          setCurrentScreen('vehicle-booking');
        }}
      />
    );
  }

  if (currentScreen === 'vehicle-booking') {
    return (
      <VehicleBookingForm
        vehicleId={selectedVehicleId}
        onBack={() => setCurrentScreen('vehicle-details')}
        onSubmit={handleSubmitBooking}
      />
    );
  }

  if (currentScreen === 'vehicle-comparison') {
    return (
      <VehicleComparison
        vehicleIds={compareVehicleIds}
        onBack={() => setCurrentScreen('vehicle-listings')}
        onRemoveVehicle={(id) => {
          setCompareVehicleIds(compareVehicleIds.filter((vid) => vid !== id));
        }}
        onBookVehicle={(id) => {
          setSelectedVehicleId(id);
          setCurrentScreen('vehicle-booking');
        }}
      />
    );
  }

  // Accommodation Screen
  if (currentScreen === 'accommodation') {
    return (
      <SimpleServiceScreen
        title="[Admin: Accommodation Services]"
        icon={<Hotel className="w-8 h-8 text-white" />}
        gradient="from-purple-600 to-indigo-600"
        services={[
          { name: '[Admin: Hotels & Resorts]', description: '[Admin: Comfortable stays]', icon: Hotel },
          { name: '[Admin: Villas & Homes]', description: '[Admin: Private rentals]', icon: HomeIcon },
          { name: '[Admin: Budget Stays]', description: '[Admin: Affordable options]', icon: Package },
          { name: '[Admin: Luxury Suites]', description: '[Admin: Premium experiences]', icon: ExternalLink }
        ]}
        onBack={() => setCurrentScreen('home')}
        onGoogleSearch={handleGoogleSearch}
        onYouTubeSearch={handleYouTubeSearch}
      />
    );
  }

  // Transportation Screen
  if (currentScreen === 'transportation') {
    return (
      <SimpleServiceScreen
        title="[Admin: Transportation Services]"
        icon={<Car className="w-8 h-8 text-white" />}
        gradient="from-blue-600 to-cyan-600"
        services={[
          { name: '[Admin: Airport Transfers]', description: '[Admin: Reliable pickup/drop]', icon: Car },
          { name: '[Admin: Car Rentals]', description: '[Admin: Self-drive & chauffeur]', icon: Car },
          {
            name: '[Admin: Self-Drive Vehicles]',
            description: '[Admin: Explore at your pace]',
            icon: Car,
            action: () => setCurrentScreen('self-drive')
          }
        ]}
        onBack={() => setCurrentScreen('home')}
        onGoogleSearch={handleGoogleSearch}
        onYouTubeSearch={handleYouTubeSearch}
      />
    );
  }

  // Home Screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Admin Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 [Admin: Admin Editable Content - All text below can be updated]
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Package className="w-9 h-9 text-white" />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">[Admin: Travel Essentials]</h1>
            <p className="text-white/80 text-sm">[Admin: Your complete travel toolkit]</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Button
            onClick={() => handleGoogleSearch('travel essentials')}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google
          </Button>
          <Button
            onClick={() => handleYouTubeSearch('travel essentials')}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="px-6 py-6">
        <h2 className="text-xl font-bold mb-4">[Admin: Essential Services]</h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Accommodation */}
          <ServiceCard
            icon={<Hotel className="w-7 h-7 text-white" />}
            title="[Admin: Accommodation]"
            description="[Admin: Hotels, resorts, villas, and stays]"
            gradient="from-purple-500 to-indigo-500"
            onClick={() => setCurrentScreen('accommodation')}
          />

          {/* Transportation */}
          <ServiceCard
            icon={<Car className="w-7 h-7 text-white" />}
            title="[Admin: Transportation]"
            description="[Admin: Transfers, rentals, self-drive vehicles]"
            gradient="from-blue-500 to-cyan-500"
            onClick={() => setCurrentScreen('transportation')}
            badge="[Admin: Self-Drive Available]"
          />

          {/* Quick Access Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <MiniServiceCard
              icon={<Shield className="w-6 h-6" />}
              title="[Admin: Insurance]"
              onClick={() => handleGoogleSearch('travel insurance')}
            />
            <MiniServiceCard
              icon={<Smartphone className="w-6 h-6" />}
              title="[Admin: eSIM & WiFi]"
              onClick={() => handleGoogleSearch('travel esim')}
            />
            <MiniServiceCard
              icon={<UtensilsCrossed className="w-6 h-6" />}
              title="[Admin: Dining]"
              onClick={() => handleGoogleSearch('restaurants')}
            />
            <MiniServiceCard
              icon={<Users className="w-6 h-6" />}
              title="[Admin: Assistance]"
              onClick={() => handleGoogleSearch('travel assistance')}
            />
          </div>
        </div>

        {/* Special Services */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-3">[Admin: Special Services]</h3>
          <div className="space-y-3">
            <SpecialServiceBanner
              icon={<Accessibility className="w-5 h-5" />}
              title="[Admin: Accessibility Services]"
              description="[Admin: Wheelchair access, special assistance]"
              color="blue"
            />
            <SpecialServiceBanner
              icon={<Baby className="w-5 h-5" />}
              title="[Admin: Family Services]"
              description="[Admin: Child care, family activities]"
              color="pink"
            />
            <SpecialServiceBanner
              icon={<PawPrint className="w-5 h-5" />}
              title="[Admin: Pet Travel]"
              description="[Admin: Pet-friendly hotels & transport]"
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================

function ServiceCard({ icon, title, description, gradient, onClick, badge }: any) {
  return (
    <Card className="p-5 cursor-pointer hover:shadow-xl transition-all" onClick={onClick}>
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradient}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          {badge && (
            <Badge className="mt-2" variant="secondary">
              {badge}
            </Badge>
          )}
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>
    </Card>
  );
}

function MiniServiceCard({ icon, title, onClick }: any) {
  return (
    <Card className="p-4 cursor-pointer hover:shadow-lg transition-all" onClick={onClick}>
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-2">
          {icon}
        </div>
        <p className="text-xs font-semibold">{title}</p>
      </div>
    </Card>
  );
}

function SpecialServiceBanner({ icon, title, description, color }: any) {
  const colors = {
    blue: 'from-blue-50 to-cyan-50 border-blue-200 text-blue-900',
    pink: 'from-pink-50 to-rose-50 border-pink-200 text-pink-900',
    green: 'from-green-50 to-emerald-50 border-green-200 text-green-900'
  };

  return (
    <Card className={`p-4 bg-gradient-to-r ${colors[color as keyof typeof colors]} border`}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h4 className="font-bold text-sm mb-0.5">{title}</h4>
          <p className="text-xs opacity-80">{description}</p>
        </div>
        <Button size="sm" variant="ghost" className="ml-auto">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}

function SimpleServiceScreen({ title, icon, gradient, services, onBack, onGoogleSearch, onYouTubeSearch }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 [Admin: Admin Editable Content]
      </div>

      <div className={`bg-gradient-to-r ${gradient} px-6 pt-12 pb-8 rounded-b-[2rem]`}>
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            {icon}
          </div>
          <h1 className="text-white text-2xl font-bold">{title}</h1>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => onGoogleSearch(title)}
            className="flex-1 bg-white text-blue-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Globe className="w-4 h-4 mr-2" />
            Google
          </Button>
          <Button
            onClick={() => onYouTubeSearch(title)}
            className="flex-1 bg-white text-red-600 hover:bg-gray-100 rounded-full h-9"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-3">
        {services.map((service: any, idx: number) => {
          const Icon = service.icon;
          return (
            <Card
              key={idx}
              className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={service.action || (() => onGoogleSearch(service.name))}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
