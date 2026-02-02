import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { remainingReligionsData } from './RemainingReligionsData';

interface ParsiHeritageEnhancedProps {
  onBack: () => void;
}

export function ParsiHeritageEnhanced({ onBack }: ParsiHeritageEnhancedProps) {
  return <UniversalReligionTemplate religionData={remainingReligionsData.parsi} onBack={onBack} />;
}
