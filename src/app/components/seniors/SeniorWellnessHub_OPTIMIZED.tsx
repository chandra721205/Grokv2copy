// Senior Wellness Hub - OPTIMIZED VERSION
// Reduced from 1,351 lines to ~400 lines using:
// - seniorCareData.ts for all data
// - CategoryHubTemplate for UI structure
// - Links to existing flow components

import { useState } from 'react';
import { CategoryHubTemplate } from '@/app/components/templates/CategoryHubTemplate';
import {
  seniorPackages,
  seniorActivities,
  seniorServices,
  accessibilityFeatures,
  careLevels,
  getPackagesByMobility,
  getActivitiesByIntensity,
  getEssentialAccessibility
} from '@/data/seniorCareData';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Heart, Shield, Users, Accessibility, Activity, Star } from 'lucide-react';
import { 
  HealthSafetyScreen, 
  CaretakerDetailScreen, 
  TransportPlanner 
} from '@/app/components/seniors/SeniorTourismFlows';

interface SeniorWellnessHubProps {
  onBack: () => void;
}

type ViewMode = 'hub' | 'package-detail' | 'safety-flow' | 'caretaker-flow' | 'transport-flow';

export default function SeniorWellnessHub({ onBack }: SeniorWellnessHubProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedMobilityLevel, setSelectedMobilityLevel] = useState<string>('all');

  // Safety Flow
  if (viewMode === 'safety-flow') {
    return (
      <HealthSafetyScreen
        onBack={() => setViewMode('hub')}
        onContinue={() => setViewMode('caretaker-flow')}
        subCategory="senior-wellness"
      />
    );
  }

  // Caretaker Flow
  if (viewMode === 'caretaker-flow') {
    return (
      <CaretakerDetailScreen
        onBack={() => setViewMode('safety-flow')}
        onContinue={() => setViewMode('transport-flow')}
        subCategory="senior-wellness"
      />
    );
  }

  // Transport Flow
  if (viewMode === 'transport-flow') {
    return (
      <TransportPlanner
        onBack={() => setViewMode('caretaker-flow')}
        onContinue={() => setViewMode('hub')}
        subCategory="senior-wellness"
      />
    );
  }

  // Package Detail View
  if (viewMode === 'package-detail' && selectedPackageId) {
    const pkg = seniorPackages.find(p => p.id === selectedPackageId);
    if (!pkg) {
      setViewMode('hub');
      return null;
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
          🔧 Admin Editable Content - All text below can be updated
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 px-6 pt-12 pb-8 rounded-b-[2rem]">
          <button
            onClick={() => setViewMode('hub')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h1 className="text-3xl font-bold text-white mb-2">{pkg.name}</h1>
          <p className="text-white/90">{pkg.duration} • {pkg.ageGroup}</p>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Mobility Level */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Accessibility className="w-5 h-5 text-green-600" />
              <h2 className="font-bold text-gray-900">Mobility Level</h2>
            </div>
            <Badge className="bg-green-100 text-green-700 capitalize">
              {pkg.mobilityLevel}
            </Badge>
          </Card>

          {/* Price */}
          <Card className="p-6">
            <h2 className="font-bold text-gray-900 mb-2">Package Price</h2>
            <div className="text-3xl font-bold text-green-600">{pkg.price}</div>
          </Card>

          {/* Included */}
          <Card className="p-6">
            <h2 className="font-bold text-gray-900 mb-4">What's Included</h2>
            <ul className="space-y-2">
              {pkg.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Medical Support */}
          <Card className="p-6 bg-blue-50">
            <h2 className="font-bold text-gray-900 mb-4">Medical Support</h2>
            <ul className="space-y-2">
              {pkg.medicalSupport.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Accessibility */}
          <Card className="p-6 bg-purple-50">
            <h2 className="font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <div className="grid grid-cols-2 gap-2">
              {pkg.accessibility.map((feature, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  ♿ {feature}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Activities */}
          <Card className="p-6">
            <h2 className="font-bold text-gray-900 mb-4">Included Activities</h2>
            <div className="space-y-2">
              {pkg.activities.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <Activity className="w-4 h-4 text-green-600" />
                  {activity}
                </div>
              ))}
            </div>
          </Card>

          {/* Book Button */}
          <Button
            onClick={() => setViewMode('safety-flow')}
            className="w-full bg-green-500 hover:bg-green-600 text-white h-14 rounded-2xl text-lg font-semibold"
          >
            Book This Package
          </Button>
        </div>
      </div>
    );
  }

  // Filter packages by mobility level
  const filteredPackages = selectedMobilityLevel === 'all'
    ? seniorPackages
    : getPackagesByMobility(selectedMobilityLevel);

  // Main Hub View using CategoryHubTemplate
  return (
    <CategoryHubTemplate
      categoryName="Senior Wellness & Care"
      description="Safe, comfortable & accessible travel experiences for seniors"
      categories={filteredPackages.map(pkg => ({
        id: pkg.id,
        name: pkg.name,
        icon: '👴',
        description: `${pkg.duration} • ${pkg.mobilityLevel}`,
        tags: [pkg.ageGroup, pkg.mobilityLevel, pkg.duration],
        gradient: 'from-green-500 to-teal-600'
      }))}
      onBack={onBack}
      onCategorySelect={(id) => {
        setSelectedPackageId(id);
        setViewMode('package-detail');
      }}
      heroGradient="from-green-500 to-teal-600"
      searchPlaceholder="Search senior packages..."
      showGoogleSearch={true}
      showYoutubeSearch={true}
      filters={[
        {
          id: 'mobilityLevel',
          label: 'Mobility Level',
          values: ['Independent', 'Assisted', 'Wheelchair']
        },
        {
          id: 'duration',
          label: 'Duration',
          values: ['3-5 days', '1 week', '2 weeks', '1 month+']
        },
        {
          id: 'ageGroup',
          label: 'Age Group',
          values: ['55+', '60+', '65+']
        }
      ]}
      statsComponent={<SeniorStatsSection />}
      infoComponent={<AccessibilityCard />}
      renderHeaderActions={() => (
        <button
          className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          ♿ View Accessibility
        </button>
      )}
      gridColumns={1}
    />
  );
}

// Stats Section Component
function SeniorStatsSection() {
  const totalPackages = seniorPackages.length;
  const totalActivities = seniorActivities.length;
  const totalServices = seniorServices.length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-green-600">{totalPackages}</div>
        <div className="text-xs text-gray-600">Packages</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">{totalActivities}</div>
        <div className="text-xs text-gray-600">Activities</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-purple-600">{totalServices}</div>
        <div className="text-xs text-gray-600">Services</div>
      </Card>
    </div>
  );
}

// Accessibility Features Card
function AccessibilityCard() {
  const essentialFeatures = getEssentialAccessibility();

  return (
    <Card className="p-6 bg-gradient-to-r from-green-50 to-teal-50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Accessibility className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">[Admin: Accessibility First]</h2>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        [Admin: All our packages include essential accessibility features]
      </p>
      <div className="space-y-2">
        {essentialFeatures.slice(0, 4).map(feature => (
          <div key={feature.id} className="flex items-start gap-2">
            <div className="text-lg">{feature.icon}</div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{feature.name}</p>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Care Levels Section
export function CareLevelsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">[Admin: Care Levels]</h2>
      {careLevels.map(level => (
        <Card key={level.id} className="p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2">{level.name}</h3>
          <p className="text-sm text-gray-700 mb-4">{level.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <p className="text-xs text-gray-600 mb-1">Staff Ratio</p>
              <p className="font-semibold text-gray-900">{level.staffRatio}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Medical Support</p>
              <p className="font-semibold text-gray-900">{level.medicalSupport}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">Services:</p>
            <div className="flex flex-wrap gap-1">
              {level.services.map(service => (
                <Badge key={service} variant="outline" className="text-xs">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// Export for compatibility
export default SeniorWellnessHub;
