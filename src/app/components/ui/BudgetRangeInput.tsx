import { useState } from 'react';
import { IndianRupee, Info } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// INPUT/BUDGET RANGE
// Budget Preference Input Component
// ========================================
// Used in Personalized Deals Alert
// Admin-editable labels and placeholders
// ========================================

export interface BudgetRangeInputProps {
  /** Current budget value */
  value: string;
  
  /** Change handler */
  onChange: (value: string) => void;
  
  /** Admin-editable content */
  content?: {
    label?: string;           // [Admin: Budget Label]
    placeholder?: string;     // [Admin: Placeholder Text]
    helperText?: string;      // [Admin: Helper Text]
  };
  
  /** Show admin editable indicators */
  showAdminIndicators?: boolean;
  
  /** Error state */
  error?: string;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  
  /** Custom className */
  className?: string;
}

export function BudgetRangeInput({
  value,
  onChange,
  content,
  showAdminIndicators = false,
  error,
  disabled = false,
  size = 'md',
  className = ''
}: BudgetRangeInputProps) {
  const { isAdminMode } = useAdminMode();
  const showIndicators = isAdminMode || showAdminIndicators;

  // Admin-editable content with defaults
  const label = content?.label || '[Admin: Your Budget]';
  const placeholder = content?.placeholder || '[Admin: e.g., ₹50,000 for 5 nights]';
  const helperText = content?.helperText || '[Admin: Enter your approximate budget to get personalized deals]';

  // Size variants
  const sizeClasses = {
    sm: 'h-10 text-sm',
    md: 'h-12 text-base',
    lg: 'h-14 text-lg'
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {/* LEVEL 5: Label */}
      <label 
        className={`
          block text-sm font-semibold text-gray-900
          ${showIndicators 
            ? 'bg-gray-100 border-2 border-dashed border-purple-300 px-2 py-1 rounded inline-block' 
            : ''
          }
        `}
      >
        {label}
      </label>

      {/* Input Container */}
      <div className="relative">
        {/* Rupee Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <IndianRupee className="w-5 h-5 text-gray-400" />
        </div>

        {/* Input Field */}
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            pl-11 pr-4 rounded-xl border-2
            ${sizeClasses[size]}
            ${error 
              ? 'border-red-500 focus:border-red-600 bg-red-50' 
              : 'border-gray-300 focus:border-blue-500'
            }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
            ${showIndicators ? 'border-purple-300 border-dashed' : ''}
            transition-colors
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/20
          `}
        />
      </div>

      {/* Helper Text or Error */}
      {(helperText || error) && (
        <div className="flex items-start gap-2">
          <Info className={`w-4 h-4 mt-0.5 flex-shrink-0 ${error ? 'text-red-500' : 'text-blue-500'}`} />
          <p 
            className={`
              text-xs leading-relaxed
              ${error ? 'text-red-600' : 'text-gray-600'}
              ${showIndicators && !error
                ? 'bg-gray-100 border border-dashed border-purple-300 px-2 py-1 rounded inline-block' 
                : ''
              }
            `}
          >
            {error || helperText}
          </p>
        </div>
      )}

      {/* Admin Instructions */}
      {showIndicators && (
        <div className="mt-3 p-3 bg-purple-50 border-2 border-purple-200 rounded-xl">
          <p className="text-[10px] text-purple-800 font-semibold mb-1">
            📝 Admin Editable Fields:
          </p>
          <ul className="text-[9px] text-purple-700 space-y-0.5 list-disc list-inside">
            <li>Label text (Level 5)</li>
            <li>Placeholder text (Level 5)</li>
            <li>Helper text (Level 5)</li>
          </ul>
        </div>
      )}
    </div>
  );
}

// ========================================
// HELPER: Format Budget Value
// ========================================

export function formatBudgetValue(value: string): string {
  // Remove non-numeric characters except comma
  const numericValue = value.replace(/[^0-9,]/g, '');
  
  // Add rupee symbol
  if (numericValue) {
    return `₹${numericValue}`;
  }
  
  return '';
}

// ========================================
// HELPER: Validate Budget Input
// ========================================

export function validateBudgetInput(value: string): {
  isValid: boolean;
  error?: string;
} {
  if (!value || value.trim() === '') {
    return {
      isValid: false,
      error: 'Budget is required'
    };
  }

  // Extract numeric value
  const numericValue = value.replace(/[^0-9]/g, '');
  const budget = parseInt(numericValue, 10);

  if (isNaN(budget)) {
    return {
      isValid: false,
      error: 'Please enter a valid budget amount'
    };
  }

  if (budget < 1000) {
    return {
      isValid: false,
      error: 'Budget should be at least ₹1,000'
    };
  }

  if (budget > 10000000) {
    return {
      isValid: false,
      error: 'Budget seems too high. Please check the amount'
    };
  }

  return {
    isValid: true
  };
}

// ========================================
// HELPER: Parse Budget Range
// ========================================

export interface BudgetRange {
  min: number;
  max: number;
}

export function parseBudgetRange(value: string): BudgetRange | null {
  // Try to parse ranges like "50000-75000" or "₹50,000 - ₹75,000"
  const rangeMatch = value.match(/(\d[\d,]*)\s*[-–]\s*(\d[\d,]*)/);
  
  if (rangeMatch) {
    const min = parseInt(rangeMatch[1].replace(/,/g, ''), 10);
    const max = parseInt(rangeMatch[2].replace(/,/g, ''), 10);
    
    if (!isNaN(min) && !isNaN(max)) {
      return { min, max };
    }
  }

  // Try to parse single value
  const numericValue = value.replace(/[^0-9]/g, '');
  const budget = parseInt(numericValue, 10);
  
  if (!isNaN(budget)) {
    // Return range with ±20% flexibility
    return {
      min: Math.floor(budget * 0.8),
      max: Math.ceil(budget * 1.2)
    };
  }

  return null;
}
