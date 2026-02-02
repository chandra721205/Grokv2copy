import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { remainingReligionsData } from './RemainingReligionsData';

interface IndigenousTribalEnhancedProps {
  onBack: () => void;
}

export function IndigenousTribalEnhanced({ onBack }: IndigenousTribalEnhancedProps) {
  return <UniversalReligionTemplate religionData={remainingReligionsData.indigenous} onBack={onBack} />;
}
