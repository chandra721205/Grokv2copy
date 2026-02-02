// Sikh Devotees Enhanced - OPTIMIZED VERSION
// Reduced from 1,679 lines to ~50 lines using:
// - religionData.ts (sikhData)
// - UniversalReligionTemplate

import { sikhData } from '@/data/religionData';
import { UniversalReligionTemplate } from './UniversalReligionTemplate';

interface SikhDevoteesEnhancedProps {
  onBack: () => void;
}

export function SikhDevoteesEnhanced({ onBack }: SikhDevoteesEnhancedProps) {
  return (
    <UniversalReligionTemplate
      religionData={sikhData}
      onBack={onBack}
    />
  );
}
