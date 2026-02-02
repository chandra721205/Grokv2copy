import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// FILTER/CHIP TEMPLATE
// Admin Editable Filter Chip
// ========================================
// Used for category filtering
// Multiple selection support
// Animated selection states
// ========================================

export interface FilterChipTemplateProps {
  /** Unique identifier */
  id: string;
  
  /** Admin-editable label */
  label: string;
  
  /** Is chip selected */
  selected: boolean;
  
  /** Click handler */
  onToggle: (id: string) => void;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  
  /** Color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  
  /** Show checkmark when selected */
  showCheckmark?: boolean;
  
  /** Show close button when selected */
  showClose?: boolean;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Custom className */
  className?: string;
}

const variantConfig = {
  default: {
    base: 'bg-gray-100 text-gray-700 border-gray-300',
    selected: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-600',
    hover: 'hover:bg-gray-200'
  },
  primary: {
    base: 'bg-blue-50 text-blue-700 border-blue-200',
    selected: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-600',
    hover: 'hover:bg-blue-100'
  },
  success: {
    base: 'bg-green-50 text-green-700 border-green-200',
    selected: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-600',
    hover: 'hover:bg-green-100'
  },
  warning: {
    base: 'bg-amber-50 text-amber-700 border-amber-200',
    selected: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-600',
    hover: 'hover:bg-amber-100'
  },
  danger: {
    base: 'bg-red-50 text-red-700 border-red-200',
    selected: 'bg-gradient-to-r from-red-500 to-rose-600 text-white border-red-600',
    hover: 'hover:bg-red-100'
  }
};

export function FilterChipTemplate({
  id,
  label,
  selected,
  onToggle,
  showAdminIndicators = false,
  size = 'md',
  variant = 'default',
  showCheckmark = true,
  showClose = false,
  disabled = false,
  className = ''
}: FilterChipTemplateProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  const config = variantConfig[variant];

  // Size variants
  const sizeClasses = {
    sm: 'h-8 px-3 text-xs gap-1.5',
    md: 'h-10 px-4 text-sm gap-2',
    lg: 'h-12 px-5 text-base gap-2.5'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={() => !disabled && onToggle(id)}
      disabled={disabled}
      className={`
        ${selected ? config.selected : config.base}
        ${!disabled && !selected ? config.hover : ''}
        ${sizeClasses[size]}
        border-2 rounded-full font-semibold
        flex items-center justify-center
        transition-all duration-200
        shadow-sm hover:shadow-md
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${showIndicators ? 'border-purple-300 border-dashed' : ''}
        ${className}
      `}
    >
      {/* Checkmark when selected */}
      {selected && showCheckmark && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Check className={iconSizes[size]} />
        </motion.div>
      )}

      {/* Label */}
      <span 
        className={`
          ${showIndicators && !selected
            ? 'bg-white/50 border border-dashed border-purple-400 px-2 py-0.5 rounded' 
            : ''
          }
        `}
      >
        {label}
      </span>

      {/* Close button when selected */}
      {selected && showClose && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <X className={iconSizes[size]} />
        </motion.div>
      )}
    </motion.button>
  );
}

// ========================================
// FILTER CHIP GROUP
// Multiple chips in a row
// ========================================

export interface FilterChipGroupProps {
  /** Array of chip configurations */
  chips: Array<{
    id: string;
    label: string;
    selected: boolean;
  }>;
  
  /** Toggle handler */
  onToggle: (id: string) => void;
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  
  /** Color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  
  /** Allow multiple selections */
  multiSelect?: boolean;
  
  /** Show "All" option */
  showAllOption?: boolean;
  
  /** Custom className */
  className?: string;
}

export function FilterChipGroup({
  chips,
  onToggle,
  showAdminIndicators = false,
  size = 'md',
  variant = 'default',
  multiSelect = true,
  showAllOption = true,
  className = ''
}: FilterChipGroupProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  const handleToggle = (id: string) => {
    if (!multiSelect && id !== 'all') {
      // Single select: deselect all others first
      chips.forEach(chip => {
        if (chip.id !== id && chip.selected) {
          onToggle(chip.id);
        }
      });
    }
    onToggle(id);
  };

  // Check if all are selected (for "All" button)
  const allSelected = chips.every(chip => chip.selected) || chips.every(chip => !chip.selected);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Admin Instructions */}
      {showIndicators && (
        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-3">
          <p className="text-[10px] text-purple-800 font-semibold mb-1">
            🔧 Admin Editable Filter Chips (Level 3)
          </p>
          <ul className="text-[9px] text-purple-700 space-y-0.5 list-disc list-inside">
            <li>Each chip label can be customized</li>
            <li>Batch update all {chips.length} chips together</li>
            <li>{multiSelect ? 'Multi-select enabled' : 'Single-select only'}</li>
          </ul>
        </div>
      )}

      {/* Chips Container */}
      <div className="flex flex-wrap gap-2">
        {/* "All" Option */}
        {showAllOption && (
          <FilterChipTemplate
            id="all"
            label="[Admin: All]"
            selected={allSelected}
            onToggle={() => {
              // Toggle all chips
              const shouldSelectAll = !allSelected;
              chips.forEach(chip => {
                if (chip.selected !== shouldSelectAll) {
                  onToggle(chip.id);
                }
              });
            }}
            showAdminIndicators={showIndicators}
            size={size}
            variant={variant}
            showCheckmark={true}
          />
        )}

        {/* Individual Chips */}
        {chips.map(chip => (
          <FilterChipTemplate
            key={chip.id}
            id={chip.id}
            label={chip.label}
            selected={chip.selected}
            onToggle={handleToggle}
            showAdminIndicators={showIndicators}
            size={size}
            variant={variant}
            showCheckmark={true}
          />
        ))}
      </div>

      {/* Selected Count */}
      {multiSelect && (
        <p className="text-xs text-gray-600">
          {chips.filter(c => c.selected).length} of {chips.length} selected
        </p>
      )}
    </div>
  );
}

// ========================================
// HELPER: Generate Sample Chips
// ========================================

export function generateSampleChips(count: number = 5): Array<{
  id: string;
  label: string;
  selected: boolean;
}> {
  return Array.from({ length: count }, (_, i) => ({
    id: `chip-${i + 1}`,
    label: `[Admin: Filter Label ${i + 1}]`,
    selected: false
  }));
}
