import { useState } from 'react';
import { WellnessMainScreen } from './WellnessMainScreen';
import { WellnessInterestFormUpdated, WellnessFormData } from './WellnessInterestFormUpdated';
import { WellnessInquiryDashboard } from './WellnessInquiryDashboard';
import { WellnessProposalScreen } from './WellnessProposalScreen';
import { WellnessBookingConfirmation } from './WellnessBookingConfirmation';
import { TripHubWellnessSection, WellnessItineraryBlock } from './TripHubWellnessSection';
import { HealthProfileWellnessInterests } from './HealthProfileWellnessInterests';

// ========================================
// COMPLETE WELLNESS SYSTEM INTEGRATION
// Full navigation flow implementation
// ========================================

type Screen =
  | 'category-selection'
  | 'interest-form'
  | 'inquiry-dashboard'
  | 'proposal-view'
  | 'booking-confirmation'
  | 'trip-hub';

interface WellnessCompleteIntegrationProps {
  initialScreen?: Screen;
}

export function WellnessCompleteIntegration({
  initialScreen = 'category-selection',
}: WellnessCompleteIntegrationProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>(initialScreen);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    name: string;
    emoji: string;
  } | null>(null);
  const [currentProposalId, setCurrentProposalId] = useState<string | null>(null);

  // ========================================
  // NAVIGATION MAP IMPLEMENTATION
  // Wellness Category → Sub-category → "Get Personalized Plan" 
  // → Interest Form → Submission → Inquiry Dashboard 
  // → Proposal View → Accept → Booking Flow 
  // → Trip Hub Integration → Confirmation
  // ========================================

  // Handler: Wellness category selected
  const handleCategorySelect = (categoryId: string) => {
    const categories = {
      'medical-tourism': { id: 'medical-tourism', name: 'Medical Tourism', emoji: '🏥' },
      'ayurveda-panchakarma': { id: 'ayurveda-panchakarma', name: 'Ayurveda & Panchakarma', emoji: '🌿' },
      'yoga-meditation': { id: 'yoga-meditation', name: 'Yoga & Meditation', emoji: '🧘' },
      'mental-health': { id: 'mental-health', name: 'Mental Health', emoji: '🧠' },
      'rehabilitation': { id: 'rehabilitation', name: 'Rehabilitation', emoji: '🩹' },
      'executive-wellness': { id: 'executive-wellness', name: 'Executive Wellness', emoji: '💼' },
    };

    setSelectedCategory(categories[categoryId as keyof typeof categories]);
    setCurrentScreen('interest-form');
  };

  // Handler: Interest form submitted
  const handleFormSubmit = (formData: WellnessFormData, action: 'request-quote' | 'book-standard') => {
    console.log('Form submitted:', { formData, action });
    
    // In production: Send to API
    // For now: Navigate to inquiry dashboard
    setCurrentScreen('inquiry-dashboard');
  };

  // Handler: View proposal
  const handleViewProposal = (proposalId: string) => {
    setCurrentProposalId(proposalId);
    setCurrentScreen('proposal-view');
  };

  // Handler: Accept proposal and book
  const handleAcceptAndBook = () => {
    // In production: Process payment
    // For now: Navigate to confirmation
    setCurrentScreen('booking-confirmation');
  };

  // Handler: Request modifications
  const handleRequestModifications = () => {
    console.log('Modifications requested');
    // In production: Open modification form
  };

  // Handler: Chat with advisor
  const handleChatWithAdvisor = (inquiryId?: string) => {
    console.log('Opening chat with advisor', inquiryId);
    // In production: Open chat widget
  };

  // Handler: View itinerary after booking
  const handleViewItinerary = () => {
    setCurrentScreen('trip-hub');
  };

  // Handler: Contact health team
  const handleContactHealthTeam = () => {
    console.log('Contacting health team');
    // In production: Open contact modal or chat
  };

  // Handler: Back to trip planning
  const handleBackToTrip = () => {
    setCurrentScreen('trip-hub');
  };

  // ========================================
  // SCREEN RENDERING
  // ========================================

  return (
    <div>
      {/* Screen 1: Category Selection (Wellness Main Screen) */}
      {currentScreen === 'category-selection' && (
        <WellnessMainScreen onCategorySelect={handleCategorySelect} />
      )}

      {/* Screen 2: Interest Form */}
      {currentScreen === 'interest-form' && selectedCategory && (
        <WellnessInterestFormUpdated
          categoryId={selectedCategory.id}
          categoryName={selectedCategory.name}
          categoryEmoji={selectedCategory.emoji}
          onClose={() => setCurrentScreen('category-selection')}
          onSubmit={handleFormSubmit}
        />
      )}

      {/* Screen 3: Inquiry Dashboard */}
      {currentScreen === 'inquiry-dashboard' && (
        <WellnessInquiryDashboard
          onViewProposal={handleViewProposal}
          onChatWithAdvisor={handleChatWithAdvisor}
        />
      )}

      {/* Screen 4: Proposal View */}
      {currentScreen === 'proposal-view' && currentProposalId && (
        <WellnessProposalScreen
          proposalId={currentProposalId}
          onAcceptAndBook={handleAcceptAndBook}
          onRequestModifications={handleRequestModifications}
          onChatWithAdvisor={() => handleChatWithAdvisor()}
          onClose={() => setCurrentScreen('inquiry-dashboard')}
        />
      )}

      {/* Screen 5: Booking Confirmation */}
      {currentScreen === 'booking-confirmation' && (
        <WellnessBookingConfirmation
          bookingDetails={{
            packageType: 'Medical Package',
            seniorCareArranged: true,
            specialDietConfirmed: true,
            tripName: 'Dad\'s Heart Treatment Trip',
          }}
          onViewItinerary={handleViewItinerary}
          onContactHealthTeam={handleContactHealthTeam}
          onBackToTrip={handleBackToTrip}
        />
      )}

      {/* Screen 6: Trip Hub with Wellness Integration */}
      {currentScreen === 'trip-hub' && (
        <TripHubWellnessDemo
          onReviewProposal={handleViewProposal}
          onViewDetails={(serviceId) => console.log('View service:', serviceId)}
        />
      )}
    </div>
  );
}

// ========================================
// TRIP HUB DEMO WITH WELLNESS INTEGRATION
// Shows how wellness integrates into trip view
// ========================================

interface TripHubWellnessDemoProps {
  onReviewProposal: (proposalId: string) => void;
  onViewDetails: (serviceId: string) => void;
}

function TripHubWellnessDemo({
  onReviewProposal,
  onViewDetails,
}: TripHubWellnessDemoProps) {
  const wellnessServices = [
    {
      id: 'WS001',
      icon: '🏥',
      category: 'Medical Tourism',
      dates: 'Apr 15-29',
      facilityName: 'Apollo Hospitals',
      location: 'Chennai',
      treatmentType: 'Cardiac Surgery',
      status: 'confirmed' as const,
    },
    {
      id: 'WS002',
      icon: '🌿',
      category: 'Ayurveda Recovery',
      dates: 'May 1-7',
      facilityName: 'Somatheeram Resort',
      location: 'Kerala',
      treatmentType: 'Panchakarma',
      status: 'quote-pending' as const,
      proposalId: 'PROP002',
    },
  ];

  const wellnessActivities = [
    {
      time: '9:00 AM',
      icon: <span className="text-2xl">🏥</span>,
      title: 'Hospital Admission',
      location: 'Apollo Hospitals, Greams Road',
      details: '• Report submission • Room allocation',
      contactNumber: '+91-XXXXXXXXXX',
    },
    {
      time: '1:00 PM',
      icon: <span className="text-2xl">👨‍⚕️</span>,
      title: 'Doctor Consultation',
      location: 'Apollo Hospitals',
      details: 'Dr. Rajesh Verma - Pre-surgery briefing',
      contactNumber: '+91-XXXXXXXXXX',
    },
    {
      time: '5:00 PM',
      icon: <span className="text-2xl">🍽</span>,
      title: 'Special Dinner',
      location: 'Patient Room',
      details: 'Jain diabetic meal delivered to room',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Trip Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Dad's Heart Treatment Trip
          </h1>
          <p className="text-xl text-gray-600">Apr 15 - May 7, 2024 • Chennai & Kerala</p>
        </div>

        {/* Wellness Services Section */}
        <TripHubWellnessSection
          services={wellnessServices}
          onViewDetails={onViewDetails}
          onReviewProposal={onReviewProposal}
        />

        {/* Day-wise Itinerary with Wellness */}
        <WellnessItineraryBlock
          date="April 15, Monday"
          dayLabel="Day 1 - Hospital Admission"
          activities={wellnessActivities}
        />
      </div>
    </div>
  );
}

// ========================================
// HEALTH PROFILE INTEGRATION DEMO
// Shows wellness interests in health profile
// ========================================

export function HealthProfileWellnessDemo() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Existing health profile sections... */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Profile</h2>
          <p className="text-lg text-gray-600 mb-4">
            Complete your basic health information above...
          </p>
        </div>

        {/* New Wellness Interests Section */}
        <HealthProfileWellnessInterests
          selectedInterests={selectedInterests}
          onInterestsChange={setSelectedInterests}
          onBrowseCuratedTrips={() => console.log('Browse curated trips')}
          userHealthProfile={{
            age: 68,
            conditions: ['cardiac'],
          }}
        />
      </div>
    </div>
  );
}

// ========================================
// DATA PRE-FILLING EXAMPLE
// Shows how form data is pre-filled
// ========================================

export function getPreFilledFormData(
  categoryId: string,
  userProfile?: {
    hasHealthProfile: boolean;
    specialNeeds?: string[];
    existingTrips?: Array<{ id: string; name: string }>;
  }
): Partial<WellnessFormData> {
  return {
    // A. Pre-fill category from entry point
    category: categoryId,
    
    // C. Pre-fill special requirements from Health Profile
    specialCareNeeds: userProfile?.specialNeeds || [],
    
    // B. Pre-fill trip dropdown with existing trips
    tripLinkType: 'new',
    
    // D. Check if health profile exists
    hasHealthProfile: userProfile?.hasHealthProfile || false,
  };
}
