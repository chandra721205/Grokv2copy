import { createContext, useContext, useState, ReactNode } from 'react';

// ========================================
// ADMIN MODE CONTEXT
// ========================================

interface AdminModeContextType {
  isAdminMode: boolean;
  setIsAdminMode: (mode: boolean) => void;
  editingScreenId: string | null;
  setEditingScreenId: (id: string | null) => void;
  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: (has: boolean) => void;
}

const AdminModeContext = createContext<AdminModeContextType | undefined>(undefined);

export function AdminModeProvider({ children }: { children: ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [editingScreenId, setEditingScreenId] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  return (
    <AdminModeContext.Provider
      value={{
        isAdminMode,
        setIsAdminMode,
        editingScreenId,
        setEditingScreenId,
        hasUnsavedChanges,
        setHasUnsavedChanges
      }}
    >
      {children}
    </AdminModeContext.Provider>
  );
}

export function useAdminMode() {
  const context = useContext(AdminModeContext);
  if (!context) {
    // Return default values instead of throwing error
    // This allows components to work without the provider
    return {
      isAdminMode: false,
      setIsAdminMode: () => {},
      editingScreenId: null,
      setEditingScreenId: () => {},
      hasUnsavedChanges: false,
      setHasUnsavedChanges: () => {}
    };
  }
  return context;
}

// ========================================
// EDITABLE CONTENT STORAGE
// ========================================

export interface EditableContent {
  [screenId: string]: {
    [fieldId: string]: string | string[] | number;
  };
}

const defaultContent: EditableContent = {};

export function useEditableContent() {
  const [content, setContent] = useState<EditableContent>(defaultContent);

  const updateField = (screenId: string, fieldId: string, value: string | string[] | number) => {
    setContent(prev => ({
      ...prev,
      [screenId]: {
        ...(prev[screenId] || {}),
        [fieldId]: value
      }
    }));
  };

  const getField = (screenId: string, fieldId: string, defaultValue: any) => {
    return content[screenId]?.[fieldId] ?? defaultValue;
  };

  const resetScreen = (screenId: string) => {
    setContent(prev => {
      const newContent = { ...prev };
      delete newContent[screenId];
      return newContent;
    });
  };

  const saveContent = () => {
    // In production, this would save to database
    localStorage.setItem('grokyatra_admin_content', JSON.stringify(content));
    console.log('Content saved:', content);
  };

  const loadContent = () => {
    const saved = localStorage.getItem('grokyatra_admin_content');
    if (saved) {
      setContent(JSON.parse(saved));
    }
  };

  return {
    content,
    updateField,
    getField,
    resetScreen,
    saveContent,
    loadContent
  };
}
