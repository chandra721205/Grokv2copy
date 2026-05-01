/**
 * Language Service
 * Handles language preferences and localization
 */

import { LanguageCode, SUPPORTED_LANGUAGES } from '@/types/language';

export class LanguageService {
  private static STORAGE_KEY = 'app_language';
  private static DEFAULT_LANGUAGE: LanguageCode = 'en';

  /**
   * Get the current language
   */
  static async getCurrentLanguage(): Promise<LanguageCode> {
    try {
      const stored = global.localStorage?.getItem(this.STORAGE_KEY);
      return (stored as LanguageCode) || this.DEFAULT_LANGUAGE;
    } catch (err) {
      console.error('Failed to get language preference:', err);
      return this.DEFAULT_LANGUAGE;
    }
  }

  /**
   * Set the current language
   */
  static async setLanguage(languageCode: LanguageCode): Promise<boolean> {
    try {
      global.localStorage?.setItem(this.STORAGE_KEY, languageCode);
      return true;
    } catch (err) {
      console.error('Failed to set language preference:', err);
      return false;
    }
  }

  /**
   * Get all supported languages
   */
  static getSupportedLanguages() {
    return SUPPORTED_LANGUAGES;
  }

  /**
   * Search languages by name
   */
  static searchLanguages(query: string) {
    const lowerQuery = query.toLowerCase();
    return SUPPORTED_LANGUAGES.filter(
      lang =>
        lang.name.toLowerCase().includes(lowerQuery) ||
        lang.nativeScript.includes(query)
    );
  }

  /**
   * Get language by code
   */
  static getLanguageByCode(code: LanguageCode) {
    return SUPPORTED_LANGUAGES.find(lang => lang.code === code);
  }
}
