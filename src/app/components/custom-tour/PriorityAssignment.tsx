import { motion, AnimatePresence, Reorder } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, ArrowLeft, GripVertical, AlertCircle, Crown, Star } from 'lucide-react';
import { SelectedCategory } from './CategorySelectionOverlayMulti';

interface PriorityAssignmentProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  selectedCategories: SelectedCategory[];
  onContinue: (prioritizedCategories: PrioritizedCategory[]) => void;
  onNavigateToPriority1Browse?: (priority1Category: PrioritizedCategory) => void; // 🎯 COMBO TOUR: Navigate to actual category hub for Priority 1 browsing
}

export interface PrioritizedCategory extends SelectedCategory {
  priority: number;
}

export function PriorityAssignment({ 
  isOpen, 
  onClose, 
  onBack, 
  selectedCategories,
  onContinue,
  onNavigateToPriority1Browse
}: PriorityAssignmentProps) {
  const [orderedCategories, setOrderedCategories] = useState<SelectedCategory[]>([]);
  const [showWarning, setShowWarning] = useState(false);

  // 🎯 COMBO TOUR PRIORITY LOGIC - STATE MANAGEMENT
  // This stores the hierarchical priority data for combo tour assembly
  // Priority 1 = Main Reference Category (base destination/activities)
  // Priorities 2-5 = Complementary add-ons
  // All selections are linked to the same trip timeline

  // Initialize ordered list when component opens
  useEffect(() => {
    if (isOpen && selectedCategories.length > 0) {
      setOrderedCategories([...selectedCategories]);
    }
  }, [isOpen, selectedCategories]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (document.body) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose]);

  const handleContinue = () => {
    // 🎯 COMBO TOUR PRIORITY LOGIC - PRIORITY ASSIGNMENT
    // Assign priorities based on order (1-based)
    // Priority 1 = Main Reference Category (defines primary flow, base destination, base activities)
    // Priorities 2-5 = Complementary experiences (AI will suggest add-ons from these)
    const prioritized: PrioritizedCategory[] = orderedCategories.map((cat, index) => ({
      ...cat,
      priority: index + 1
    }));

    // 🎯 COMBO TOUR ASSEMBLY LOGIC:
    // Next step: User browses Priority 1 category to select destination(s) & activities
    // Those selections become the fixed base for combo tour
    // Grok AI will then analyze Priority 1 and suggest complementary items from Priorities 2-5
    // Final combo = Priority 1 selections (fixed) + AI-suggested items (editable, optional)
    
    onContinue(prioritized);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Overlay Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-20 bottom-20 bg-white rounded-[2rem] shadow-2xl z-50 overflow-hidden flex flex-col max-w-[420px] mx-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="priority-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-6 flex-shrink-0 rounded-t-[2rem]">
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={onBack}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors active:scale-95"
                  aria-label="Go back"
                  type="button"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors active:scale-95"
                  aria-label="Close"
                  type="button"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <h2 id="priority-title" className="text-white text-2xl font-bold mb-2">
                Set Your Priorities
              </h2>
              <p className="text-white/90 text-sm">Drag to reorder • Priority 1 is your main focus</p>
            </div>

            {/* Instruction Banner */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b-2 border-orange-200 px-6 py-4 flex-shrink-0">
              <div className="flex items-start gap-3">
                <Crown className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    Priority 1 = Your Main Destination
                  </p>
                  <p className="text-xs text-gray-700">
                    Grok AI will suggest complementary activities from your other priorities based on your Priority 1 choice.
                  </p>
                </div>
              </div>
            </div>

            {/* Draggable Priority List */}
            <div className="flex-1 overflow-y-auto px-6 py-6 overscroll-contain">
              <Reorder.Group 
                axis="y" 
                values={orderedCategories} 
                onReorder={setOrderedCategories}
                className="space-y-4"
              >
                {orderedCategories.map((category, index) => {
                  const isPriority1 = index === 0;
                  return (
                    <Reorder.Item 
                      key={category.id} 
                      value={category}
                      className="cursor-grab active:cursor-grabbing"
                    >
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-gradient-to-br ${category.gradient} rounded-[24px] p-4 shadow-lg ${
                          isPriority1 ? 'ring-4 ring-yellow-400 ring-offset-2' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {/* 🎯 ENHANCEMENT: Drag Handle with Annotation */}
                          {/* Annotation: Drag and drop reordering enabled for priorities 2-5. */}
                          <div 
                            className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
                            title={isPriority1 ? "Priority 1 position is fixed" : "Drag to reorder"}
                            aria-label={isPriority1 ? "Priority 1 - cannot reorder" : "Drag handle - reorder priorities"}
                          >
                            <GripVertical className="w-6 h-6" />
                          </div>

                          {/* Priority Badge */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                            isPriority1 
                              ? 'bg-yellow-400 text-yellow-900' 
                              : 'bg-white/90 text-gray-900'
                          }`}>
                            {isPriority1 ? (
                              <Crown className="w-6 h-6" />
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>

                          {/* Category Info */}
                          <div className="flex-1 text-white">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl" aria-hidden="true">{category.emoji}</span>
                              <h3 className="font-bold text-base">{category.name}</h3>
                            </div>
                            <p className="text-xs text-white/80">
                              {isPriority1 ? 'Main destination focus' : `Secondary priority ${index + 1}`}
                            </p>
                          </div>

                          {/* Priority 1 Star */}
                          {isPriority1 && (
                            <div className="flex-shrink-0">
                              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                            </div>
                          )}
                        </div>

                        {/* Badges */}
                        {category.isNew && (
                          <div className="mt-3 inline-block bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            NEW CATEGORY
                          </div>
                        )}

                        {/* 🎯 ENHANCEMENT: Priority 1 Navigation Button */}
                        {/* Annotation: Clicking this navigates user directly to the corresponding category in 'Browse Categories' section */}
                        {isPriority1 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 pt-4 border-t border-white/30"
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                
                                // 🎯 COMBO TOUR NAVIGATION RULE - PRIORITY 1 BROWSING
                                // Navigate to the actual category hub inside "Browse Categories"
                                // This behaves identically to normal category browsing
                                // User selects destination(s) and activities within Priority 1 category
                                
                                // 🎯 AUTO-SELECTION RULE:
                                // All selections made in Priority 1 browsing are auto-stored as:
                                // - Confirmed base destination(s)
                                // - Confirmed base activities
                                // User will NOT be asked to re-select these later
                                // These silently populate the Combo Tour builder state
                                
                                // 🎯 CATEGORY MAPPING (Priority 1 → Browse Category Hub):
                                // Devotional → Browse Categories → Devotional
                                // Adventure → Browse Categories → Adventure
                                // Heritage → Browse Categories → Heritage
                                // Educational → Browse Categories → Educational
                                // Wellness → Browse Categories → Wellness
                                // etc.
                                
                                const prioritized: PrioritizedCategory = {
                                  ...category,
                                  priority: 1
                                };
                                
                                if (onNavigateToPriority1Browse) {
                                  onNavigateToPriority1Browse(prioritized);
                                } else {
                                  console.log(`🎯 Navigate to Browse ${category.name} (Priority 1 Main Reference)`);
                                }
                              }}
                              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all active:scale-95 flex items-center justify-between"
                            >
                              <span>Continue to Browse {category.name}</span>
                              <span>→</span>
                            </button>
                          </motion.div>
                        )}
                      </motion.div>
                    </Reorder.Item>
                  );
                })}
              </Reorder.Group>

              {/* Help Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-[24px] p-4"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-blue-900 mb-2">How Priority Works:</p>
                    <ul className="text-xs text-gray-700 space-y-1.5 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">1.</span>
                        <span>Choose your Priority 1 destination first</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">2.</span>
                        <span>Grok AI suggests nearby activities from your other priorities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">3.</span>
                        <span>Build the perfect multi-category combo tour!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Action Bar */}
            <div className="border-t border-gray-200 px-6 py-4 flex-shrink-0 bg-white">
              <button
                onClick={handleContinue}
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-base hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg active:scale-95"
              >
                Continue to Browse {orderedCategories[0]?.name} →
              </button>
              
              {/* Confirmation Status */}
              <div className="mt-3 text-center">
                <span className="text-sm font-semibold text-gray-700">
                  ✓ Priority 1: {orderedCategories[0]?.name} ({orderedCategories[0]?.emoji})
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
