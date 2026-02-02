import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, HelpCircle, Code, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

// ========================================
// COMPONENT ANNOTATION SYSTEM
// 4-Color Annotation Framework
// ========================================
// Blue: Purpose - Why it exists, user benefit
// Purple: Admin Guide - How to update content
// Green: Technical - Data mapping, API
// Yellow: User Flow - Previous/Current/Next
// ========================================

export type AnnotationType = 'purpose' | 'admin' | 'technical' | 'flow';

export interface AnnotationData {
  purpose?: {
    why: string;           // Why this exists
    userBenefit: string;   // User benefit
    businessValue: string; // Business value
  };
  admin?: {
    howToUpdate: string;      // How to update content
    contentGuidelines: string; // Content guidelines
    updateFrequency: string;   // Update frequency
  };
  technical?: {
    dataMapping: string;     // Data field mapping
    apiIntegration: string;  // API integration
    stateManagement: string; // State management
  };
  flow?: {
    previousStep: string;   // Previous step
    currentAction: string;  // Current interaction
    nextStep: string;       // Next step
  };
}

interface ComponentAnnotationProps {
  /** Annotation data for all 4 types */
  data: AnnotationData;
  
  /** Show annotations by default */
  defaultExpanded?: boolean;
  
  /** Compact mode (smaller text) */
  compact?: boolean;
  
  /** Custom className */
  className?: string;
}

const annotationConfig = {
  purpose: {
    color: 'blue',
    icon: Info,
    label: 'PURPOSE ANNOTATION',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-900',
    badgeBg: 'bg-blue-600',
    iconColor: 'text-blue-600'
  },
  admin: {
    color: 'purple',
    icon: HelpCircle,
    label: 'ADMIN GUIDE',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-900',
    badgeBg: 'bg-purple-600',
    iconColor: 'text-purple-600'
  },
  technical: {
    color: 'green',
    icon: Code,
    label: 'TECHNICAL NOTE',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-900',
    badgeBg: 'bg-green-600',
    iconColor: 'text-green-600'
  },
  flow: {
    color: 'yellow',
    icon: MapPin,
    label: 'USER FLOW',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-900',
    badgeBg: 'bg-amber-600',
    iconColor: 'text-amber-600'
  }
};

export function ComponentAnnotation({
  data,
  defaultExpanded = false,
  compact = false,
  className = ''
}: ComponentAnnotationProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [selectedType, setSelectedType] = useState<AnnotationType | 'all'>('all');

  const availableTypes: AnnotationType[] = [];
  if (data.purpose) availableTypes.push('purpose');
  if (data.admin) availableTypes.push('admin');
  if (data.technical) availableTypes.push('technical');
  if (data.flow) availableTypes.push('flow');

  if (availableTypes.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white
          ${compact ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'}
          rounded-2xl font-semibold
          flex items-center justify-between
          hover:shadow-lg transition-all
          border-2 border-gray-700
        `}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {availableTypes.map(type => {
              const config = annotationConfig[type];
              const Icon = config.icon;
              return (
                <div
                  key={type}
                  className={`${config.badgeBg} w-6 h-6 rounded-full flex items-center justify-center border-2 border-white`}
                  title={config.label}
                >
                  <Icon className="w-3 h-3 text-white" />
                </div>
              );
            })}
          </div>
          <span>📋 View Component Annotations ({availableTypes.length})</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {/* Annotation Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3">
              {/* Type Selector */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`
                    px-3 py-1.5 rounded-full text-xs font-semibold transition-all
                    ${selectedType === 'all'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                  `}
                >
                  All Annotations
                </button>
                {availableTypes.map(type => {
                  const config = annotationConfig[type];
                  const Icon = config.icon;
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`
                        px-3 py-1.5 rounded-full text-xs font-semibold transition-all
                        flex items-center gap-1.5
                        ${selectedType === type
                          ? `${config.badgeBg} text-white`
                          : `${config.bgColor} ${config.textColor} hover:opacity-80`
                        }
                      `}
                    >
                      <Icon className="w-3 h-3" />
                      {config.label}
                    </button>
                  );
                })}
              </div>

              {/* Annotations Display */}
              <div className="space-y-3">
                {/* PURPOSE ANNOTATION (Blue) */}
                {data.purpose && (selectedType === 'all' || selectedType === 'purpose') && (
                  <AnnotationCard
                    type="purpose"
                    title="PURPOSE ANNOTATION"
                    icon={Info}
                    sections={[
                      { label: '🎯 Why This Exists', content: data.purpose.why },
                      { label: '👤 User Benefit', content: data.purpose.userBenefit },
                      { label: '💼 Business Value', content: data.purpose.businessValue }
                    ]}
                    compact={compact}
                  />
                )}

                {/* ADMIN GUIDE (Purple) */}
                {data.admin && (selectedType === 'all' || selectedType === 'admin') && (
                  <AnnotationCard
                    type="admin"
                    title="ADMIN GUIDE"
                    icon={HelpCircle}
                    sections={[
                      { label: '✏️ How to Update Content', content: data.admin.howToUpdate },
                      { label: '📋 Content Guidelines', content: data.admin.contentGuidelines },
                      { label: '🔄 Update Frequency', content: data.admin.updateFrequency }
                    ]}
                    compact={compact}
                  />
                )}

                {/* TECHNICAL NOTE (Green) */}
                {data.technical && (selectedType === 'all' || selectedType === 'technical') && (
                  <AnnotationCard
                    type="technical"
                    title="TECHNICAL NOTE"
                    icon={Code}
                    sections={[
                      { label: '🗂️ Data Field Mapping', content: data.technical.dataMapping },
                      { label: '🔌 API Integration', content: data.technical.apiIntegration },
                      { label: '⚙️ State Management', content: data.technical.stateManagement }
                    ]}
                    compact={compact}
                  />
                )}

                {/* USER FLOW (Yellow) */}
                {data.flow && (selectedType === 'all' || selectedType === 'flow') && (
                  <AnnotationCard
                    type="flow"
                    title="USER FLOW"
                    icon={MapPin}
                    sections={[
                      { label: '⬅️ Previous Step', content: data.flow.previousStep },
                      { label: '▶️ Current Interaction', content: data.flow.currentAction },
                      { label: '➡️ Next Step', content: data.flow.nextStep }
                    ]}
                    compact={compact}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// ANNOTATION CARD COMPONENT
// Individual annotation display
// ========================================

interface AnnotationCardProps {
  type: AnnotationType;
  title: string;
  icon: any;
  sections: Array<{
    label: string;
    content: string;
  }>;
  compact?: boolean;
}

function AnnotationCard({ type, title, icon: Icon, sections, compact }: AnnotationCardProps) {
  const config = annotationConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`
        ${config.bgColor} ${config.borderColor}
        border-2 rounded-2xl
        ${compact ? 'p-3' : 'p-4'}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`${config.badgeBg} w-8 h-8 rounded-lg flex items-center justify-center`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h4 className={`font-bold ${compact ? 'text-xs' : 'text-sm'} ${config.textColor}`}>
          {title}
        </h4>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div key={index}>
            <p className={`font-semibold ${compact ? 'text-xs' : 'text-sm'} ${config.textColor} mb-1`}>
              {section.label}
            </p>
            <p className={`${compact ? 'text-xs' : 'text-sm'} ${config.textColor} opacity-90 leading-relaxed`}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ========================================
// INLINE ANNOTATION BADGE
// Compact badge for inline annotations
// ========================================

interface InlineAnnotationProps {
  type: AnnotationType;
  label: string;
  tooltip: string;
  compact?: boolean;
}

export function InlineAnnotation({ type, label, tooltip, compact = false }: InlineAnnotationProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const config = annotationConfig[type];
  const Icon = config.icon;

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        className={`
          ${config.badgeBg} text-white
          ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-2 py-1 text-[10px]'}
          rounded-full font-semibold
          flex items-center gap-1
          hover:opacity-90 transition-opacity
          cursor-help
        `}
      >
        <Icon className={compact ? 'w-2.5 h-2.5' : 'w-3 h-3'} />
        {label}
      </button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className={`
              absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              ${config.bgColor} ${config.borderColor} ${config.textColor}
              border-2 rounded-lg p-2 shadow-lg
              ${compact ? 'text-xs' : 'text-sm'}
              whitespace-nowrap
              z-50
              max-w-xs
            `}
          >
            {tooltip}
            {/* Arrow */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${config.borderColor.replace('border-', 'border-t-')}`}
              style={{ marginTop: '-2px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================================
// ANNOTATION SUMMARY BADGE
// Shows count of available annotations
// ========================================

interface AnnotationSummaryProps {
  count: number;
  onClick?: () => void;
  compact?: boolean;
}

export function AnnotationSummary({ count, onClick, compact = false }: AnnotationSummaryProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-r from-gray-700 to-gray-900 text-white
        ${compact ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs'}
        rounded-full font-bold
        flex items-center gap-1.5
        hover:shadow-md transition-all
        border border-gray-600
      `}
    >
      <span className="text-yellow-400">📋</span>
      {count} Annotation{count !== 1 ? 's' : ''}
    </button>
  );
}