/**
 * Custom hook for managing language preferences
 */

import { useState, useEffect } from 'react';
import { LanguageCode } from '@/types/language';
import { LanguageService } from '@/services/language-service';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      setLoading(true);
      const lang = await LanguageService.getCurrentLanguage();
      setCurrentLanguage(lang);
    } catch (err) {
      console.error('Failed to load language:', err);
    } finally {
      setLoading(false);
    }
  };

  const changeLanguage = async (languageCode: LanguageCode) => {
    try {
      const success = await LanguageService.setLanguage(languageCode);
      if (success) {
        setCurrentLanguage(languageCode);
      }
    } catch (err) {
      console.error('Failed to change language:', err);
    }
  };

  return {
    currentLanguage,
    loading,
    changeLanguage,
  };
}
