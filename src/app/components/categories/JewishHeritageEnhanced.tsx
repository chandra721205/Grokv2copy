import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { remainingReligionsData } from './RemainingReligionsData';

interface JewishHeritageEnhancedProps {
  onBack: () => void;
}

export function JewishHeritageEnhanced({ onBack }: JewishHeritageEnhancedProps) {
  return <UniversalReligionTemplate religionData={remainingReligionsData.jewish} onBack={onBack} />;
}
