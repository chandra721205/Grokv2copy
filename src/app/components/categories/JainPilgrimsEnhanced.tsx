import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { remainingReligionsData } from './RemainingReligionsData';

interface JainPilgrimsEnhancedProps {
  onBack: () => void;
}

export function JainPilgrimsEnhanced({ onBack }: JainPilgrimsEnhancedProps) {
  return <UniversalReligionTemplate religionData={remainingReligionsData.jain} onBack={onBack} />;
}
