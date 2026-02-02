// ========================================
// UI COMPONENTS - CENTRAL EXPORT
// ========================================
// Import all UI components from this single file
// ========================================

// NEW COMPONENTS (6 components)
export {
  DestinationCardTemplate,
  generateSampleCardData,
  type DestinationCardTemplateProps
} from './DestinationCardTemplate';

export {
  BudgetRangeInput,
  formatBudgetValue,
  validateBudgetInput,
  parseBudgetRange,
  type BudgetRangeInputProps,
  type BudgetRange
} from './BudgetRangeInput';

export {
  ExternalBrowseButton,
  BrowseButtonsGroup,
  buildSearchQuery,
  formatQueryForPlatform,
  type ExternalBrowseButtonProps,
  type BrowseButtonsGroupProps,
  type BrowseButtonType,
  type SearchQueryOptions
} from './ExternalBrowseButton';

export {
  InterestHeartIcon,
  InterestHeartWithCounter,
  getAllInterests,
  getInterestsByCategory,
  clearAllInterests,
  removeInterest,
  type InterestHeartIconProps,
  type InterestHeartWithCounterProps,
  type InterestItem
} from './InterestHeartIcon';

export {
  FilterChipTemplate,
  FilterChipGroup,
  generateSampleChips,
  type FilterChipTemplateProps,
  type FilterChipGroupProps
} from './FilterChipTemplate';

export {
  AdminEditableSection,
  GroupedAdminSections,
  AdminEditableText,
  isAdminPlaceholder,
  extractAdminText,
  type AdminEditableSectionProps,
  type GroupedAdminSectionsProps,
  type AdminEditableTextProps,
  type AdminLevel
} from './AdminEditableSection';

// Component Library Demo
export { ComponentLibraryDemo } from './ComponentLibraryDemo';

// ANNOTATION SYSTEM (4-Color Framework)
export {
  ComponentAnnotation,
  InlineAnnotation,
  AnnotationSummary,
  type AnnotationType,
  type AnnotationData
} from './ComponentAnnotation';

export {
  AnnotatedDestinationCard
} from './AnnotatedDestinationCard';

export {
  destinationCardAnnotations,
  budgetInputAnnotations,
  browsButtonAnnotations,
  interestHeartAnnotations,
  filterChipAnnotations,
  adminSectionAnnotations
} from './AllComponentAnnotations';

// EXISTING UI COMPONENTS
export { Button } from './button';
export { Input } from './input';
export { Badge } from './badge';
export { Checkbox } from './checkbox';
export { Label } from './label';
export { Textarea } from './textarea';
export { Switch } from './switch';
export { Separator } from './separator';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';