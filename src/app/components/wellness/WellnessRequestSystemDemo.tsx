import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WellnessLandingPage } from './WellnessLandingPage';
import { WellnessCategoryListing, CustomRequestForm } from './WellnessCategoryListing';
import { WellnessSuccessOverlay } from './WellnessSuccessOverlay';
import { toast } from 'sonner';

// ========================================
// WELLNESS REQUEST SYSTEM - COMPLETE DEMO
// Integrates all 3 parts of the flow
// ========================================

type ViewState = 'landing' | 'category' | 'success';

export function WellnessRequestSystemDemo() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
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

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('category');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setSelectedCategory('');
  };

  const handleRequestQuote = (treatment: any) => {
    setSelectedTreatment(treatment);
    setShowCustomForm(true);
  };

  const handleSelectStandard = (treatment: any) => {
    toast.success('Navigating to standard package booking...');
    // Navigate to standard booking flow
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    setShowCustomForm(false);
    setShowSuccessOverlay(true);
  };

  const handleViewMyRequests = () => {
    setShowSuccessOverlay(false);
    toast.success('Opening My Wellness Requests...');
    // Navigate to requests page
  };

  return (
    <div className="min-h-screen">
      {/* Landing Page (Part 1) */}
      {currentView === 'landing' && (
        <WellnessLandingPage onSelectCategory={handleSelectCategory} />
      )}

      {/* Category Listing (Part 2 - Step A) */}
      {currentView === 'category' && (
        <WellnessCategoryListing
          categoryId={selectedCategory}
          categoryName={categoryNames[selectedCategory] || 'Wellness'}
          onBack={handleBackToLanding}
          onRequestQuote={handleRequestQuote}
          onSelectStandard={handleSelectStandard}
        />
      )}

      {/* Custom Request Form Modal (Part 2 - Step B) */}
      <AnimatePresence>
        {showCustomForm && selectedTreatment && (
          <CustomRequestForm
            treatment={selectedTreatment}
            categoryName={categoryNames[selectedCategory] || 'Wellness'}
            onClose={() => setShowCustomForm(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </AnimatePresence>

      {/* Success Overlay (Part 3) */}
      <AnimatePresence>
        {showSuccessOverlay && (
          <WellnessSuccessOverlay
            categoryName={categoryNames[selectedCategory] || 'Wellness'}
            onClose={() => setShowSuccessOverlay(false)}
            onViewMyRequests={handleViewMyRequests}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default WellnessRequestSystemDemo;
