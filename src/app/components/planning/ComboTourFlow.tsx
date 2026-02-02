import { useState } from 'react';
import { ComboBuilder } from './ComboBuilder';
import { DestinationSelectionScreen } from './DestinationSelectionScreen';
import { CustomizationRequestScreen } from './CustomizationRequestScreen';
import { GroupDetails } from './GroupDetails';
import { TripPreferences } from './TripPreferences';
import { TransportPreference } from './TransportPreference';
import { BookingConfirmation } from './BookingConfirmation';
import type { 
  ComboTourFlowProps, 
  ComboTourData,
  GroupDetailsData,
  TripPreferencesData,
  TransportPreferenceData,
  DestinationData,
  CustomizationData
} from './types';

export function ComboTourFlow({ onBack }: ComboTourFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [comboData, setComboData] = useState<ComboTourData>({
    selectedCategories: [],
    selectedComboId: undefined,
    selectedComboName: undefined,
    destination: undefined,
    customization: undefined,
    groupDetails: {
      peopleCount: 0,
      selectedGroupType: '',
      ageGroupCounts: {},
    },
    tripPreferences: {
      selectedBudget: '',
      selectedDuration: '',
      selectedPace: '',
      selectedAccommodation: '',
      selectedTransport: [],
      startDate: '',
      endDate: '',
    },
    transportPreference: {
      transportMode: '',
      vehicleTypes: [],
      otherTransport: '',
    },
  });

  const handleComboNext = (data: { selectedCategories: string[]; comboId?: string; comboName?: string }) => {
    setComboData({ 
      ...comboData, 
      selectedCategories: data.selectedCategories,
      selectedComboId: data.comboId,
      selectedComboName: data.comboName
    });
    setCurrentStep(2); // Go to Destination Selection
  };

  const handleDestinationNext = (data: DestinationData) => {
    setComboData({ ...comboData, destination: data });
    setCurrentStep(3); // Go to Group Details
  };

  const handleCustomizeRequest = () => {
    setCurrentStep(2.5); // Special step for customization
  };

  const handleCustomizationNext = (data: CustomizationData) => {
    setComboData({ ...comboData, customization: data });
    setCurrentStep(3); // Go to Group Details
  };

  const handleGroupNext = (data: GroupDetailsData) => {
    setComboData({ ...comboData, groupDetails: data });
    setCurrentStep(4); // Update step numbers
  };

  const handlePreferencesNext = (data: TripPreferencesData) => {
    setComboData({ ...comboData, tripPreferences: data });
    setCurrentStep(5); // Update step numbers
  };

  const handleTransportNext = (data: TransportPreferenceData) => {
    setComboData({ ...comboData, transportPreference: data });
    setCurrentStep(6); // Go to Booking Confirmation
  };

  const handleConfirmBooking = () => {
    // Final booking confirmation
    alert('✅ Booking request submitted successfully! Admin will review and confirm your itinerary.');
    onBack();
  };

  const handleEditSection = (section: string) => {
    // Navigate back to specific section for editing
    switch (section) {
      case 'categories':
        setCurrentStep(1);
        break;
      case 'destination':
        setCurrentStep(2);
        break;
      case 'group':
        setCurrentStep(3);
        break;
      case 'preferences':
        setCurrentStep(4);
        break;
      case 'transport':
        setCurrentStep(5);
        break;
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <ComboBuilder
          onNext={handleComboNext}
          onBack={handleBack}
        />
      )}
      {currentStep === 2 && (
        <DestinationSelectionScreen
          onNext={handleDestinationNext}
          onCustomize={handleCustomizeRequest}
          onBack={handleBack}
          selectedComboId={comboData.selectedComboId}
          selectedComboName={comboData.selectedComboName}
          selectedCategories={comboData.selectedCategories}
        />
      )}
      {currentStep === 2.5 && (
        <CustomizationRequestScreen
          onNext={handleCustomizationNext}
          onBack={handleBack}
          selectedComboName={comboData.selectedComboName}
          selectedCategories={comboData.selectedCategories}
        />
      )}
      {currentStep === 3 && (
        <GroupDetails
          onNext={handleGroupNext}
          onBack={handleBack}
        />
      )}
      {currentStep === 4 && (
        <TripPreferences
          onNext={handlePreferencesNext}
          onBack={handleBack}
          selectedCategories={comboData.selectedCategories}
        />
      )}
      {currentStep === 5 && (
        <TransportPreference
          onNext={handleTransportNext}
          onBack={handleBack}
          selectedCategories={comboData.selectedCategories}
        />
      )}
      {currentStep === 6 && (
        <BookingConfirmation
          onConfirm={handleConfirmBooking}
          onBack={handleBack}
          onEdit={handleEditSection}
          tripData={comboData}
        />
      )}
    </>
  );
}