// Hindu Pilgrims Final - OPTIMIZED VERSION
// Reduced from 1,546 lines to ~17 lines using:
// - religionData.ts (hinduData)
// - UniversalReligionTemplate

import { hinduData } from '@/data/religionData';
import { UniversalReligionTemplate } from './UniversalReligionTemplate';

interface HinduPilgrimsFinalProps {
  onBack: () => void;
}

export function HinduPilgrimsFinal({ onBack }: HinduPilgrimsFinalProps) {
  return (
    <UniversalReligionTemplate
      religionData={hinduData}
      onBack={onBack}
    />
  );
}
