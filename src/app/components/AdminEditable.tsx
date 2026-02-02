import React, { ReactNode, useState } from 'react';
import { motion } from 'motion/react';

interface AdminEditableProps {
  children: ReactNode;
  label: string; // Layer naming: e.g., "ADMIN_Circuit1_Title"
  className?: string;
  inline?: boolean; // For inline elements like badges
  contentType?: 'text' | 'image' | 'button' | 'card' | 'list';
}

export function AdminEditable({ 
  children, 
  label, 
  className = '', 
  inline = false,
  contentType = 'text'
}: AdminEditableProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const containerClass = inline ? 'inline-block' : 'block';
  
  return (
    <motion.div
      className={`${containerClass} relative group ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      whileHover={{ scale: contentType === 'card' ? 1.01 : 1 }}
      transition={{ duration: 0.2 }}
      data-admin-layer={label}
    >
      {/* Dashed border overlay */}
      <div className="absolute inset-0 border border-dashed border-gray-400 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      {/* Admin tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-50 shadow-lg"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400">✎</span>
            <span>Admin can edit this content</span>
          </div>
          {/* Tooltip arrow */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
        </motion.div>
      )}
      
      {/* Content */}
      {children}
      
      {/* Admin layer label (visible on hover, for designers) */}
      <div className="absolute -top-6 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="text-[10px] font-mono text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

// Specialized wrapper for placeholder text
interface AdminPlaceholderProps {
  text: string;
  label: string;
  className?: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
}

export function AdminPlaceholder({ 
  text, 
  label, 
  className = '',
  as: Component = 'p'
}: AdminPlaceholderProps) {
  return (
    <AdminEditable label={label} className={className}>
      <Component className="bg-gray-50 px-2 py-1 rounded text-gray-600">
        [Admin: {text}]
      </Component>
    </AdminEditable>
  );
}

// Specialized wrapper for editable cards
interface AdminEditableCardProps {
  children: ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}

export function AdminEditableCard({ 
  children, 
  label, 
  className = '',
  onClick
}: AdminEditableCardProps) {
  return (
    <AdminEditable label={label} className={className} contentType="card">
      <motion.div
        onClick={onClick}
        whileHover={{ 
          scale: 1.02, 
          y: -4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="cursor-pointer"
      >
        {children}
      </motion.div>
    </AdminEditable>
  );
}

// Specialized wrapper for buttons with loading/success states
interface AdminEditableButtonProps {
  children: ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  success?: boolean;
  variant?: 'default' | 'gradient' | 'outline';
}

export function AdminEditableButton({ 
  children, 
  label, 
  className = '',
  onClick,
  loading = false,
  success = false,
  variant = 'default'
}: AdminEditableButtonProps) {
  return (
    <AdminEditable label={label} inline>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={`${className} relative overflow-hidden`}
        disabled={loading || success}
      >
        {/* Loading spinner */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-white/90"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
        
        {/* Success checkmark */}
        {success && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-green-500 text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        )}
        
        <span className={loading || success ? 'invisible' : ''}>
          {children}
        </span>
      </motion.button>
    </AdminEditable>
  );
}
