import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { religionData } from './AllReligionsEnhanced';

interface ChristianPilgrimsEnhancedProps {
  onBack: () => void;
}

export function ChristianPilgrimsEnhanced({ onBack }: ChristianPilgrimsEnhancedProps) {
  return <UniversalReligionTemplate religionData={religionData.christian} onBack={onBack} />;
}
