import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { remainingReligionsData } from './RemainingReligionsData';

interface BahaiVisitorsEnhancedProps {
  onBack: () => void;
}

export function BahaiVisitorsEnhanced({ onBack }: BahaiVisitorsEnhancedProps) {
  return <UniversalReligionTemplate religionData={remainingReligionsData.bahai} onBack={onBack} />;
}
