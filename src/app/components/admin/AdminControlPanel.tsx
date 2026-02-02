import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Settings,
  Eye,
  Edit3,
  Save,
  X,
  Upload,
  Plus,
  Trash2,
  RotateCcw,
  Check,
  AlertCircle,
  Image as ImageIcon,
  DollarSign,
  Tag as TagIcon,
  Type,
  FileText,
  Sparkles
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { useAdminMode } from '@/app/components/admin/AdminModeContext';

// ========================================
// ADMIN CONTROL PANEL COMPONENT
// ========================================

interface EditField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'price' | 'tags' | 'image';
  value: string | string[] | number;
  placeholder?: string;
  maxLength?: number;
  level: 1 | 2 | 3 | 4 | 5; // Hierarchy level
}

interface AdminControlPanelProps {
  screenId: string;
  screenName: string;
  fields: EditField[];
  onSave: (updatedFields: EditField[]) => void;
  onClose: () => void;
}

export function AdminControlPanel({
  screenId,
  screenName,
  fields: initialFields,
  onSave,
  onClose
}: AdminControlPanelProps) {
  const [fields, setFields] = useState<EditField[]>(initialFields);
  const [hasChanges, setHasChanges] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 1 | 2 | 3 | 4 | 5>('all');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Track changes
  useEffect(() => {
    const changed = JSON.stringify(fields) !== JSON.stringify(initialFields);
    setHasChanges(changed);
  }, [fields, initialFields]);

  // Update field value
  const updateField = (fieldId: string, value: string | string[] | number) => {
    setFields(prev =>
      prev.map(field =>
        field.id === fieldId ? { ...field, value } : field
      )
    );
  };

  // Add tag to tags array
  const addTag = (fieldId: string, tag: string) => {
    setFields(prev =>
      prev.map(field => {
        if (field.id === fieldId && Array.isArray(field.value)) {
          return { ...field, value: [...field.value, tag] };
        }
        return field;
      })
    );
  };

  // Remove tag from tags array
  const removeTag = (fieldId: string, index: number) => {
    setFields(prev =>
      prev.map(field => {
        if (field.id === fieldId && Array.isArray(field.value)) {
          return {
            ...field,
            value: field.value.filter((_, i) => i !== index)
          };
        }
        return field;
      })
    );
  };

  // Handle save
  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      onSave(fields);
      setSaveStatus('saved');
      setHasChanges(false);
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }
  };

  // Handle reset
  const handleReset = () => {
    if (confirm('Reset all changes to original values?')) {
      setFields(initialFields);
      setHasChanges(false);
    }
  };

  // Filter fields by level
  const filteredFields = activeTab === 'all'
    ? fields
    : fields.filter(f => f.level === activeTab);

  // Get level color
  const getLevelColor = (level: number) => {
    const colors = {
      1: 'bg-purple-500',
      2: 'bg-blue-500',
      3: 'bg-green-500',
      4: 'bg-amber-500',
      5: 'bg-rose-500'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-end bg-purple-900/20 backdrop-blur-sm"
    >
      {/* Admin Panel */}
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        transition={{ type: 'spring', damping: 25 }}
        className="h-full w-full max-w-md bg-white shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-white text-xl font-bold">Admin Control Panel</h2>
                <p className="text-white/80 text-xs">{screenName}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              aria-label="Close admin panel"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Status Badge */}
          {hasChanges && (
            <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3 py-1.5 rounded-full">
              <AlertCircle className="w-3 h-3" />
              Unsaved changes
            </div>
          )}
        </div>

        {/* Level Filter Tabs */}
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Fields ({fields.length})
            </button>
            {[1, 2, 3, 4, 5].map(level => (
              <button
                key={level}
                onClick={() => setActiveTab(level as 1 | 2 | 3 | 4 | 5)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeTab === level
                    ? getLevelColor(level) + ' text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeTab === level ? 'bg-white' : getLevelColor(level)}`} />
                Level {level}
              </button>
            ))}
          </div>
        </div>

        {/* Fields Editor */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="space-y-6">
            {filteredFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-100 hover:border-purple-200 transition-all"
              >
                {/* Field Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${getLevelColor(field.level)}`}>
                        Level {field.level}
                      </span>
                      {field.type === 'text' && <Type className="w-3 h-3 text-gray-400" />}
                      {field.type === 'textarea' && <FileText className="w-3 h-3 text-gray-400" />}
                      {field.type === 'price' && <DollarSign className="w-3 h-3 text-gray-400" />}
                      {field.type === 'tags' && <TagIcon className="w-3 h-3 text-gray-400" />}
                      {field.type === 'image' && <ImageIcon className="w-3 h-3 text-gray-400" />}
                    </div>
                    <label className="text-sm font-semibold text-gray-900">
                      {field.label}
                    </label>
                  </div>
                </div>

                {/* Field Input */}
                {field.type === 'text' && (
                  <Input
                    type="text"
                    value={field.value as string}
                    onChange={(e) => updateField(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                    className="bg-white"
                  />
                )}

                {field.type === 'textarea' && (
                  <div>
                    <textarea
                      value={field.value as string}
                      onChange={(e) => updateField(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      maxLength={field.maxLength}
                      rows={3}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {field.maxLength && (
                      <p className="text-xs text-gray-500 mt-1">
                        {(field.value as string).length} / {field.maxLength} characters
                      </p>
                    )}
                  </div>
                )}

                {field.type === 'price' && (
                  <div className="space-y-2">
                    <Input
                      type="text"
                      value={field.value as string}
                      onChange={(e) => updateField(field.id, e.target.value)}
                      placeholder="₹XX,XXX - ₹XX,XXX"
                      className="bg-white"
                    />
                    <p className="text-xs text-gray-500">Format: ₹50,000 - ₹1,50,000</p>
                  </div>
                )}

                {field.type === 'tags' && (
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {Array.isArray(field.value) && field.value.map((tag, i) => (
                        <Badge
                          key={i}
                          className="bg-purple-100 text-purple-700 hover:bg-purple-200 flex items-center gap-1"
                        >
                          {tag}
                          <button
                            onClick={() => removeTag(field.id, i)}
                            className="ml-1 hover:text-purple-900"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Add new tag..."
                        className="bg-white flex-1"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const input = e.currentTarget;
                            if (input.value.trim()) {
                              addTag(field.id, input.value.trim());
                              input.value = '';
                            }
                          }
                        }}
                      />
                      <Button
                        onClick={(e) => {
                          const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                          if (input.value.trim()) {
                            addTag(field.id, input.value.trim());
                            input.value = '';
                          }
                        }}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {field.type === 'image' && (
                  <div className="space-y-2">
                    <div className="bg-gray-200 rounded-xl h-32 flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-purple-400 transition-all cursor-pointer">
                      {field.value ? (
                        <div className="relative w-full h-full">
                          <img
                            src={field.value as string}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <button
                            onClick={() => updateField(field.id, '')}
                            className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600"
                          >
                            <Trash2 className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-center p-4">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs text-gray-500 font-semibold">
                            Click to upload image
                          </p>
                          <p className="text-[10px] text-gray-400">
                            Recommended: 400x200px
                          </p>
                        </div>
                      )}
                    </div>
                    <Input
                      type="text"
                      value={field.value as string}
                      onChange={(e) => updateField(field.id, e.target.value)}
                      placeholder="Or enter image URL..."
                      className="bg-white"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex gap-3 mb-3">
            <Button
              onClick={handleSave}
              disabled={!hasChanges || saveStatus === 'saving'}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 h-12 rounded-xl font-semibold disabled:opacity-50"
            >
              {saveStatus === 'saving' && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                  </motion.div>
                  Saving...
                </>
              )}
              {saveStatus === 'saved' && (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Saved!
                </>
              )}
              {saveStatus === 'error' && (
                <>
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Error
                </>
              )}
              {saveStatus === 'idle' && (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
            <Button
              onClick={handleReset}
              disabled={!hasChanges}
              className="bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 h-12 rounded-xl disabled:opacity-50"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          {/* Publish Button */}
          <Button
            onClick={() => {
              if (confirm('Publish changes to live site?')) {
                handleSave();
                alert('Changes published successfully!');
              }
            }}
            disabled={hasChanges}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 h-12 rounded-xl font-semibold disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Publish to Live Site
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// ADMIN TOOLBAR (FLOATING BUTTON)
// ========================================

interface AdminToolbarProps {
  screenId: string;
  screenName: string;
  onEditClick: () => void;
}

export function AdminToolbar({ screenId, screenName, onEditClick }: AdminToolbarProps) {
  const { isAdminMode, setIsAdminMode } = useAdminMode();
  const [showTooltip, setShowTooltip] = useState(false);

  if (!isAdminMode) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="relative">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap"
            >
              Edit {screenName}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Edit Button */}
        <button
          onClick={onEditClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110"
          aria-label="Edit this screen"
        >
          <Edit3 className="w-6 h-6 text-white" />
        </button>

        {/* Pulsing Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 bg-purple-500 rounded-full -z-10"
        />
      </div>
    </motion.div>
  );
}

// ========================================
// ADMIN MODE TOGGLE (TOP BAR)
// ========================================

export function AdminModeToggle() {
  const { isAdminMode, setIsAdminMode } = useAdminMode();

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-full shadow-xl px-4 py-2 flex items-center gap-3 border-2 border-gray-200"
      >
        <span className="text-sm font-semibold text-gray-700">
          {isAdminMode ? 'Admin Edit View' : 'User View'}
        </span>
        <button
          onClick={() => setIsAdminMode(!isAdminMode)}
          className={`relative w-12 h-6 rounded-full transition-all ${
            isAdminMode ? 'bg-purple-600' : 'bg-gray-300'
          }`}
          aria-label="Toggle admin mode"
        >
          <motion.div
            animate={{ x: isAdminMode ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
          >
            {isAdminMode ? (
              <Edit3 className="w-3 h-3 text-purple-600" />
            ) : (
              <Eye className="w-3 h-3 text-gray-600" />
            )}
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}

// ========================================
// ADMIN OVERLAY (PURPLE TINT)
// ========================================

export function AdminOverlay() {
  const { isAdminMode } = useAdminMode();

  if (!isAdminMode) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-purple-600/5 pointer-events-none z-10"
    />
  );
}
