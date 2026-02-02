import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { religionData } from './AllReligionsEnhanced';

interface MuslimTravelersEnhancedProps {
  onBack: () => void;
}

export function MuslimTravelersEnhanced({ onBack }: MuslimTravelersEnhancedProps) {
  return <UniversalReligionTemplate religionData={religionData.muslim} onBack={onBack} />;
}
