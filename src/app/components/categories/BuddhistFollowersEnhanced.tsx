import { UniversalReligionTemplate } from './UniversalReligionTemplate';
import { religionData } from './AllReligionsEnhanced';

interface BuddhistFollowersEnhancedProps {
  onBack: () => void;
}

export function BuddhistFollowersEnhanced({ onBack }: BuddhistFollowersEnhancedProps) {
  return <UniversalReligionTemplate religionData={religionData.buddhist} onBack={onBack} />;
}
