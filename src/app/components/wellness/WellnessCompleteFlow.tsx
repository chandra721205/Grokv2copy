import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WellnessMainScreen } from './WellnessMainScreen';
import { WellnessCategoryListing, CustomRequestForm } from './WellnessCategoryListing';
import { WellnessInterestForm } from './WellnessInterestForm';
import { WellnessSuccessOverlay } from './WellnessSuccessOverlay';
import { MyWellnessInquiriesScreen, WellnessProposalDetailScreen } from './WellnessInterestFlow';
import { toast } from 'sonner';

// ========================================
// COMPLETE WELLNESS FLOW INTEGRATION
// Discovery → Interest → Quote → Proposal → Trip → Booking
// ========================================

type ViewState =
  | 'main'
  | 'category-listing'
  | 'inquiries'
  | 'proposal';

interface WellnessCompleteFlowProps {
  onNavigateToTripHub?: (bookingData: any) => void;
  onBack?: () => void;
}

export function WellnessCompleteFlow({
  onNavigateToTripHub,
  onBack,
}: WellnessCompleteFlowProps) {
  const [currentView, setCurrentView] = useState<ViewState>('main');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const categoryNames: Record<string, string> = {
    'medical-tourism': 'Medical Tourism',
    'ayurveda-panchakarma': 'Ayurveda & Panchakarma',
    'yoga-meditation': 'Yoga & Meditation Retreats',
    'mental-health': 'Mental Health & Wellness',
    'rehabilitation': 'Rehabilitation & Recovery',
    'executive-wellness': 'Executive Wellness Packages',
  };

  // ========================================
  // HANDLERS - Complete Flow Integration
  // ========================================

  // From Main Screen: Navigate to Category Listing
  const handleNavigateToCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('category-listing');
    toast.success(`Loading ${categoryNames[categoryId]} centers...`);
  };

  // From Main Screen: Get Personalized Plan (Opens Form Directly)
  const handleGetPersonalizedPlan = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Create a mock treatment for direct personalization
    const mockTreatment = {
      id: 'personalized',
      name: `Custom ${categoryNames[categoryId]} Plan`,
      centerName: '[To be assigned by admin]',
      location: 'Multiple locations available',
      rating: 0,
      duration: 'Flexible',
      referencePrice: 'Custom Quote',
      features: ['Personalized consultation', 'Custom itinerary', 'Flexible scheduling'],
      image: getCategoryEmoji(categoryId),
    };
    setSelectedTreatment(mockTreatment);
    setShowCustomForm(true);
  };

  // From Category Listing: Request Quote
  const handleRequestQuote = (treatment: any) => {
    setSelectedTreatment(treatment);
    setShowCustomForm(true);
  };

  // From Category Listing: Select Standard Package
  const handleSelectStandard = (treatment: any) => {
    toast.success('Navigating to standard booking flow...');
    // Navigate to standard booking (existing flow)
  };

  // From Custom Form: Submit
  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', {
      category: selectedCategory,
      treatment: selectedTreatment,
      formData,
    });
    setShowCustomForm(false);
    setShowSuccessOverlay(true);
  };

  // From Success Overlay: View My Requests
  const handleViewMyRequests = () => {
    setShowSuccessOverlay(false);
    setCurrentView('inquiries');
  };

  // From Inquiries: View Proposal
  const handleViewProposal = (proposalId: string) => {
    setCurrentView('proposal');
  };

  // From Proposal: Accept & Book
  const handleAcceptProposal = () => {
    toast.success('Processing booking and adding to Trip Hub...');
    
    // Create booking data
    const bookingData = {
      type: 'wellness',
      category: categoryNames[selectedCategory],
      treatment: selectedTreatment?.name,
      status: 'confirmed',
      dateBooked: new Date().toISOString(),
    };

    // Navigate to Trip Hub with booking data
    if (onNavigateToTripHub) {
      onNavigateToTripHub(bookingData);
    } else {
      // Fallback: Show success message
      setTimeout(() => {
        toast.success('✅ Booking confirmed and added to your Trip Hub!', {
          description: 'You can now view this in your itinerary',
        });
        setCurrentView('main');
      }, 1500);
    }
  };

  // From Proposal: Request Modification
  const handleRequestModification = () => {
    toast.info('Opening modification request form...');
    // Open modification form (reuse custom form with pre-filled data)
  };

  // Back to Main
  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedCategory('');
    setSelectedTreatment(null);
  };

  // Back to Category Listing
  const handleBackToCategoryListing = () => {
    setCurrentView('category-listing');
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Wellness Screen (screen1.png) */}
      {currentView === 'main' && (
        <WellnessMainScreen
          onNavigateToCategory={handleNavigateToCategory}
          onGetPersonalizedPlan={handleGetPersonalizedPlan}
          onBack={onBack || (() => toast.info('Back to home'))}
        />
      )}

      {/* Category Listing Screen */}
      {currentView === 'category-listing' && (
        <WellnessCategoryListing
          categoryId={selectedCategory}
          categoryName={categoryNames[selectedCategory] || 'Wellness'}
          onBack={handleBackToMain}
          onRequestQuote={handleRequestQuote}
          onSelectStandard={handleSelectStandard}
        />
      )}

      {/* My Wellness Inquiries Screen */}
      {currentView === 'inquiries' && (
        <MyWellnessInquiriesScreen onViewProposal={handleViewProposal} />
      )}

      {/* Wellness Proposal Detail Screen */}
      {currentView === 'proposal' && (
        <WellnessProposalDetailScreen
          proposalId="1"
          onAccept={handleAcceptProposal}
          onRequestModification={handleRequestModification}
        />
      )}

      {/* Custom Request Form Modal */}
      <AnimatePresence>
        {showCustomForm && selectedTreatment && (
          <WellnessInterestForm
            categoryId={selectedCategory}
            categoryName={categoryNames[selectedCategory] || 'Wellness'}
            categoryEmoji={getCategoryEmoji(selectedCategory)}
            onClose={() => setShowCustomForm(false)}
            onSubmit={(formData, action) => {
              console.log('Comprehensive form submitted:', formData, action);
              if (action === 'request-quote') {
                handleFormSubmit(formData);
              } else {
                toast.success('Viewing standard packages...');
                setShowCustomForm(false);
                setCurrentView('category-listing');
              }
            }}
          />
        )}
      </AnimatePresence>

      {/* Success Overlay */}
      <AnimatePresence>
        {showSuccessOverlay && (
          <WellnessSuccessOverlay
            categoryName={categoryNames[selectedCategory] || 'Wellness'}
            onClose={() => {
              setShowSuccessOverlay(false);
              handleBackToMain();
            }}
            onViewMyRequests={handleViewMyRequests}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function getCategoryEmoji(categoryId: string): string {
  const emojiMap: Record<string, string> = {
    'medical-tourism': '🏥',
    'ayurveda-panchakarma': '🌿',
    'yoga-meditation': '🧘',
    'mental-health': '🧠',
    'rehabilitation': '♿',
    'executive-wellness': '💼',
  };
  return emojiMap[categoryId] || '🏥';
}

export default WellnessCompleteFlow;