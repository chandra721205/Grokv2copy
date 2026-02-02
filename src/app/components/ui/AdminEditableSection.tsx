import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Edit3, Info } from 'lucide-react';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// SECTION/ADMIN EDITABLE
// Container for Admin-Editable Content
// ========================================
// Visual wrapper for placeholder content
// Shows level indicators and instructions
// Supports 5-level hierarchy
// ========================================

export type AdminLevel = 1 | 2 | 3 | 4 | 5;

export interface AdminEditableSectionProps {
  /** Content hierarchy level (1-5) */
  level: AdminLevel;
  
  /** Section title */
  title?: string;
  
  /** Section description */
  description?: string;
  
  /** Children content (admin-editable elements) */
  children: ReactNode;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Show level banner */
  showBanner?: boolean;
  
  /** Show instruction card */
  showInstructions?: boolean;
  
  /** Enable batch update indicator */
  batchUpdateEnabled?: boolean;
  
  /** Number of items in batch (if applicable) */
  batchItemCount?: number;
  
  /** Animation delay */
  animationDelay?: number;
  
  /** Custom className */
  className?: string;
}

const levelConfig = {
  1: {
    name: 'Headers/Titles',
    description: 'Largest visual impact - Category names, main headers',
    color: 'purple',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-800',
    bannerBg: 'bg-purple-600'
  },
  2: {
    name: 'Section Headings',
    description: 'Organize content into logical groups',
    color: 'indigo',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-300',
    textColor: 'text-indigo-800',
    bannerBg: 'bg-indigo-600'
  },
  3: {
    name: 'Filter Labels',
    description: 'User selection chips - can be batch updated',
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
    bannerBg: 'bg-blue-600'
  },
  4: {
    name: 'Card Content',
    description: 'Destination cards, packages - bulk update capability',
    color: 'cyan',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-300',
    textColor: 'text-cyan-800',
    bannerBg: 'bg-cyan-600'
  },
  5: {
    name: 'Helper Text',
    description: 'Instructions, hints, disclaimers',
    color: 'gray',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    textColor: 'text-gray-800',
    bannerBg: 'bg-gray-600'
  }
};

export function AdminEditableSection({
  level,
  title,
  description,
  children,
  showAdminIndicators = false,
  showBanner = true,
  showInstructions = true,
  batchUpdateEnabled = false,
  batchItemCount,
  animationDelay = 0,
  className = ''
}: AdminEditableSectionProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  if (!showIndicators) {
    // Clean render without admin indicators
    return <div className={className}>{children}</div>;
  }

  const config = levelConfig[level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.3 }}
      className={`space-y-4 ${className}`}
    >
      {/* Level Banner */}
      {showBanner && (
        <div 
          className={`
            ${config.bannerBg} text-white
            px-4 py-2 rounded-2xl
            flex items-center justify-between
            shadow-sm
          `}
        >
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4" />
            <div>
              <p className="font-bold text-sm">
                🟣 ADMIN EDITABLE CONTENT - LEVEL {level}
              </p>
              <p className="text-xs opacity-90">
                {config.name}
              </p>
            </div>
          </div>

          {batchUpdateEnabled && batchItemCount && (
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <p className="text-xs font-semibold">
                {batchItemCount} items
              </p>
            </div>
          )}
        </div>
      )}

      {/* Optional Title */}
      {title && (
        <h3 className="text-lg font-bold text-gray-900">
          {title}
        </h3>
      )}

      {/* Optional Description */}
      {description && (
        <p className="text-sm text-gray-600">
          {description}
        </p>
      )}

      {/* Instructions Card */}
      {showInstructions && (
        <div 
          className={`
            ${config.bgColor} ${config.borderColor}
            border-2 rounded-2xl p-4
          `}
        >
          <div className="flex items-start gap-3">
            <Info className={`w-5 h-5 ${config.textColor} flex-shrink-0 mt-0.5`} />
            <div>
              <p className={`text-xs font-semibold ${config.textColor} mb-1`}>
                Level {level}: {config.name}
              </p>
              <p className="text-[10px] text-gray-700">
                {config.description}
              </p>
              
              {batchUpdateEnabled && (
                <p className="text-[10px] text-gray-700 mt-2 flex items-center gap-1">
                  <span className="text-base">ℹ️</span>
                  <span>
                    All {batchItemCount || 'these'} elements can be batch updated together
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content Container */}
      <div 
        className={`
          ${config.bgColor} ${config.borderColor}
          border-2 border-dashed rounded-3xl p-6
        `}
      >
        {children}
      </div>

      {/* Footer Note */}
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${config.bannerBg}`} />
        <p className="text-[10px] text-gray-500">
          Level {level} content - {config.name.toLowerCase()}
        </p>
      </div>
    </motion.div>
  );
}

// ========================================
// GROUPED ADMIN SECTIONS
// Multiple levels in one container
// ========================================

export interface GroupedAdminSectionsProps {
  /** Array of section configurations */
  sections: Array<{
    level: AdminLevel;
    title?: string;
    content: ReactNode;
    batchUpdateEnabled?: boolean;
    batchItemCount?: number;
  }>;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Custom className */
  className?: string;
}

export function GroupedAdminSections({
  sections,
  showAdminIndicators = false,
  className = ''
}: GroupedAdminSectionsProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  if (!showIndicators) {
    return (
      <div className={className}>
        {sections.map((section, index) => (
          <div key={index}>{section.content}</div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {sections.map((section, index) => (
        <AdminEditableSection
          key={index}
          level={section.level}
          title={section.title}
          batchUpdateEnabled={section.batchUpdateEnabled}
          batchItemCount={section.batchItemCount}
          showAdminIndicators={true}
          animationDelay={index * 0.1}
        >
          {section.content}
        </AdminEditableSection>
      ))}
    </div>
  );
}

// ========================================
// ADMIN EDITABLE TEXT
// Individual text placeholder
// ========================================

export interface AdminEditableTextProps {
  /** Text content with [Admin: ...] format */
  content: string;
  
  /** Level (for styling) */
  level?: AdminLevel;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** HTML tag to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  
  /** Custom className */
  className?: string;
}

export function AdminEditableText({
  content,
  level = 5,
  showAdminIndicators = false,
  as: Component = 'p',
  className = ''
}: AdminEditableTextProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  return (
    <Component
      className={`
        ${showIndicators 
          ? 'bg-gray-100 border-2 border-dashed border-purple-300 px-2 py-1 rounded inline-block' 
          : ''
        }
        ${className}
      `}
    >
      {content}
    </Component>
  );
}

// ========================================
// HELPER: Check if Admin Mode Text
// ========================================

export function isAdminPlaceholder(text: string): boolean {
  return text.includes('[Admin:') || text.includes('[admin:');
}

// ========================================
// HELPER: Extract Admin Text
// ========================================

export function extractAdminText(text: string): {
  isPlaceholder: boolean;
  cleanText: string;
} {
  const isPlaceholder = isAdminPlaceholder(text);
  
  if (!isPlaceholder) {
    return { isPlaceholder: false, cleanText: text };
  }

  // Remove [Admin: ...] wrapper
  const cleanText = text
    .replace(/\[Admin:\s*/gi, '')
    .replace(/\]/g, '')
    .trim();

  return { isPlaceholder: true, cleanText };
}
