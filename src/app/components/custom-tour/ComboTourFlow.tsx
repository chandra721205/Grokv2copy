import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { CategorySelectionOverlayMulti, SelectedCategory } from './CategorySelectionOverlayMulti';
import { PriorityAssignment, PrioritizedCategory } from './PriorityAssignment';
import { GrokAISuggestions } from './GrokAISuggestions';
import { ComboSummary } from './ComboSummary';
import { CustomTourForm } from './CustomTourForm';

type FlowStep = 
  | 'category-selection'
  | 'priority-assignment'
  | 'browse-priority1'
  | 'custom-form'
  | 'grok-suggestions'
  | 'combo-summary'
  | 'closed';

interface ComboTourFlowProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCategory?: (categoryTarget: string) => void;
}

interface SuggestedDestination {
  id: string;
  name: string;
  category: string;
  categoryEmoji: string;
  distance: string;
  duration: string;
  whyItFits: string;
  rating: number;
}

export function ComboTourFlow({ isOpen, onClose, onNavigateToCategory }: ComboTourFlowProps) {
  const [currentStep, setCurrentStep] = useState<FlowStep>('category-selection');
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategory[]>([]);
  const [prioritizedCategories, setPrioritizedCategories] = useState<PrioritizedCategory[]>([]);
  const [selectedPrimaryDestination, setSelectedPrimaryDestination] = useState<string>('');
  const [selectedSuggestions, setSelectedSuggestions] = useState<SuggestedDestination[]>([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customFormCategory, setCustomFormCategory] = useState<{ name: string; emoji: string }>({ name: '', emoji: '' });

  // 🎯 COMBO TOUR STATE MANAGEMENT - AUTO-SELECTION TRACKING
  // These track selections made during Priority 1 browsing
  // Automatically populated when user selects items in Priority 1 category hub
  const [priority1Destinations, setPriority1Destinations] = useState<string[]>([]); // Auto-stored base destinations
  const [priority1Activities, setPriority1Activities] = useState<string[]>([]);     // Auto-stored base activities

  // Reset flow when closed
  const handleClose = () => {
    setCurrentStep('category-selection');
    setSelectedCategories([]);
    setPrioritizedCategories([]);
    setSelectedPrimaryDestination('');
    setSelectedSuggestions([]);
    setShowCustomForm(false);
    onClose();
  };

  // Step 1: Category Selection → Priority Assignment
  const handleContinueToPriorities = (categories: SelectedCategory[]) => {
    // Check if Other/Custom or Accessibility is selected
    const needsCustomForm = categories.some(cat => 
      cat.id === 'other' || cat.id === 'accessibility'
    );

    if (needsCustomForm && categories.length === 1) {
      // If only custom category selected, go directly to form
      const customCat = categories[0];
      setCustomFormCategory({ name: customCat.name, emoji: customCat.emoji });
      setShowCustomForm(true);
      setCurrentStep('custom-form');
    } else {
      // Normal flow - go to priority assignment
      setSelectedCategories(categories);
      setCurrentStep('priority-assignment');
    }
  };

  // Step 2: Priority Assignment → Browse Priority 1 (simulated)
  const handleContinueFromPriorities = (prioritized: PrioritizedCategory[]) => {
    setPrioritizedCategories(prioritized);
    
    // Check if Priority 1 needs custom form
    const priority1 = prioritized[0];
    if (priority1.id === 'other' || priority1.id === 'accessibility') {
      setCustomFormCategory({ name: priority1.name, emoji: priority1.emoji });
      setShowCustomForm(true);
      setCurrentStep('custom-form');
      return;
    }

    // 🎯 COMBO TOUR NAVIGATION RULE - BROWSE PRIORITY 1
    // In production: Navigate to actual category hub for Priority 1 browsing
    // User selects destination(s) and activities there
    // Those selections auto-populate the combo tour state (no re-selection)
    
    // For now, simulate destination selection and go to Grok Suggestions
    const mockDestination = `Admin-Added ${priority1.name} Destination 1`;
    setSelectedPrimaryDestination(mockDestination);
    
    // 🎯 AUTO-SELECTION SIMULATION
    // In real implementation, these would be populated from category browsing
    setPriority1Destinations([mockDestination]);
    setPriority1Activities([
      `${priority1.name} Activity 1`,
      `${priority1.name} Activity 2`
    ]);
    
    setCurrentStep('grok-suggestions');

    // 🎯 PRODUCTION IMPLEMENTATION:
    // if (onNavigateToCategory) {
    //   onNavigateToCategory(priority1.target);
    //   // Then listen for selection completion event
    //   // When user completes selections, auto-capture them and proceed to grok-suggestions
    // }
  };

  // 🎯 COMBO TOUR - PRIORITY 1 BROWSING NAVIGATION
  // Handles direct navigation from Priority Assignment to category hub
  const handleNavigateToPriority1Browse = (priority1Category: PrioritizedCategory) => {
    // 🎯 NAVIGATION MAPPING (Priority 1 → Category Hub):
    // Map priority category to actual browse category target
    const categoryMap: Record<string, string> = {
      'devotional': 'devotional',
      'adventure': 'adventure',
      'wellness': 'senior',
      'educational': 'educational',
      'honeymoon': 'honeymoon',
      'heritage': 'heritage',
      'eco': 'eco',
      'corporate': 'corporate',
      'cruise': 'cruise',
      'sports': 'sports',
      'self-drive': 'self-drive',
      'health': 'senior',
    };

    const categoryTarget = categoryMap[priority1Category.id] || priority1Category.id;
    
    // 🎯 CRITICAL: Store priority info before navigation
    // When user returns from browsing, we'll have context
    setPrioritizedCategories([priority1Category]);
    
    // Navigate to actual category hub
    if (onNavigateToCategory) {
      onNavigateToCategory(categoryTarget);
      
      // 🎯 EXPECTED BEHAVIOR:
      // 1. User browses Priority 1 category (e.g., Devotional)
      // 2. User selects destination(s) (e.g., "Admin-Added Temple 1")
      // 3. User selects activities (e.g., "Morning Prayer", "Temple Tour")
      // 4. System auto-captures these selections
      // 5. System returns to combo flow with Priority 1 data populated
      // 6. Proceeds to Grok AI suggestions for Priorities 2-5
    }
  };

  // Step 3: Grok Suggestions → Combo Summary
  const handleAddToCombo = (suggestions: SuggestedDestination[]) => {
    setSelectedSuggestions(suggestions);
    setCurrentStep('combo-summary');
  };

  // Step 4: Save/Book from Summary
  const handleSaveCombo = () => {
    alert('✅ Combo tour saved to your wishlist!');
    handleClose();
  };

  const handleBookNow = () => {
    alert('🎉 Proceeding to booking and payment...');
    handleClose();
  };

  // Custom form submission
  const handleCustomFormSubmit = () => {
    handleClose();
  };

  // Navigation helpers
  const handleBackFromPriorities = () => {
    setCurrentStep('category-selection');
  };

  const handleBackFromGrokSuggestions = () => {
    setCurrentStep('priority-assignment');
  };

  const handleBackFromSummary = () => {
    setCurrentStep('grok-suggestions');
  };

  const handleBackFromCustomForm = () => {
    if (selectedCategories.length > 1) {
      setCurrentStep('priority-assignment');
    } else {
      setCurrentStep('category-selection');
    }
    setShowCustomForm(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {currentStep === 'category-selection' && (
        <CategorySelectionOverlayMulti
          key="category-selection"
          isOpen={true}
          onClose={handleClose}
          onContinueToPriorities={handleContinueToPriorities}
        />
      )}

      {currentStep === 'priority-assignment' && (
        <PriorityAssignment
          key="priority-assignment"
          isOpen={true}
          onClose={handleClose}
          onBack={handleBackFromPriorities}
          selectedCategories={selectedCategories}
          onContinue={handleContinueFromPriorities}
          onNavigateToPriority1Browse={handleNavigateToPriority1Browse}
        />
      )}

      {currentStep === 'custom-form' && (
        <CustomTourForm
          key="custom-form"
          onBack={handleBackFromCustomForm}
          onSubmit={handleCustomFormSubmit}
          categoryName={customFormCategory.name}
          categoryEmoji={customFormCategory.emoji}
        />
      )}

      {currentStep === 'grok-suggestions' && (
        <GrokAISuggestions
          key="grok-suggestions"
          onBack={handleBackFromGrokSuggestions}
          onAddToCombo={handleAddToCombo}
          prioritizedCategories={prioritizedCategories}
          selectedPrimaryDestination={selectedPrimaryDestination}
        />
      )}

      {currentStep === 'combo-summary' && (
        <ComboSummary
          key="combo-summary"
          onBack={handleBackFromSummary}
          onSaveCombo={handleSaveCombo}
          onBookNow={handleBookNow}
          prioritizedCategories={prioritizedCategories}
          selectedPrimaryDestination={selectedPrimaryDestination}
          selectedSuggestions={selectedSuggestions}
        />
      )}
    </AnimatePresence>
  );
}
