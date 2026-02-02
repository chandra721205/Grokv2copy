// Type definitions for Combo Tour Planning flow

export interface GroupDetailsData {
  peopleCount: number;
  selectedGroupType: string;
  ageGroupCounts: Record<string, number>;
  travelers?: any[]; // Array of traveler details
}

export interface TripPreferencesData {
  selectedBudget: string;
  selectedDuration: string;
  selectedPace: string;
  selectedAccommodation: string;
  selectedTransport: string[];
  startDate: string;
  endDate: string;
}

export interface TransportPreferenceData {
  transportMode: string;
  vehicleTypes: string[];
  otherTransport: string;
}

export interface DestinationData {
  selectedDestinationId?: string;
  selectedDestinationName?: string;
  destinationLocation?: string;
  destinationPrice?: string;
  destinationDuration?: string;
}

export interface CustomizationData {
  customDescription?: string;
  customBudgetRange?: string;
  customDates?: string;
  specialRequests?: string;
}

export interface ComboTourData {
  selectedCategories: string[];
  selectedComboId?: string;
  selectedComboName?: string;
  destination?: DestinationData;
  customization?: CustomizationData;
  groupDetails: GroupDetailsData;
  tripPreferences: TripPreferencesData;
  transportPreference: TransportPreferenceData;
}

export interface ComboBuilderProps {
  onNext: (data: { selectedCategories: string[]; comboId?: string; comboName?: string }) => void;
  onBack: () => void;
}

export interface DestinationSelectionProps {
  onNext: (data: DestinationData) => void;
  onCustomize: () => void;
  onBack: () => void;
  selectedComboId?: string;
  selectedComboName?: string;
  selectedCategories: string[];
}

export interface CustomizationRequestProps {
  onNext: (data: CustomizationData) => void;
  onBack: () => void;
  selectedComboName?: string;
  selectedCategories: string[];
}

export interface GroupDetailsProps {
  onNext: (data: GroupDetailsData) => void;
  onBack: () => void;
}

export interface TripPreferencesProps {
  onNext: (data: TripPreferencesData) => void;
  onBack: () => void;
  selectedCategories?: string[];
}

export interface TransportPreferenceProps {
  onNext: (data: TransportPreferenceData) => void;
  onBack: () => void;
  selectedCategories?: string[];
}

export interface BookingConfirmationProps {
  onConfirm: () => void;
  onBack: () => void;
  onEdit: (section: 'categories' | 'destination' | 'group' | 'preferences' | 'transport') => void;
  tripData?: Partial<ComboTourData>;
}

export interface ComboTourFlowProps {
  onBack: () => void;
}
