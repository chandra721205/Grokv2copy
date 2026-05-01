/**
 * Language types and interfaces
 */

export type LanguageCode = 'en' | 'hi' | 'bn' | 'te' | 'mr' | 'ta' | 'gu' | 'kn';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeScript: string;
  flagUrl: string;
  direction: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeScript: 'English',
    flagUrl: 'https://www.figma.com/api/mcp/asset/a8bd6536-c7a2-4413-8b38-fc25de8f9dc2',
    direction: 'ltr',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeScript: 'हिंदी',
    flagUrl: 'https://www.figma.com/api/mcp/asset/8ec376eb-184e-437e-9500-13a21f625a94',
    direction: 'ltr',
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeScript: 'বাংলা',
    flagUrl: 'https://www.figma.com/api/mcp/asset/2d9df241-8024-4eda-93e7-93bd45b380da',
    direction: 'ltr',
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeScript: 'తెలుగు',
    flagUrl: 'https://www.figma.com/api/mcp/asset/bb7c561c-a64b-488e-85bd-ec44c89aecb4',
    direction: 'ltr',
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeScript: 'मराठी',
    flagUrl: 'https://www.figma.com/api/mcp/asset/cdc1323d-b6d5-4672-84fa-e53e742bbae9',
    direction: 'ltr',
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeScript: 'தமிழ்',
    flagUrl: 'https://www.figma.com/api/mcp/asset/40dcbc4e-2146-44d0-9287-10ff48e26e6f',
    direction: 'ltr',
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeScript: 'ગુજરાતી',
    flagUrl: 'https://www.figma.com/api/mcp/asset/489d9c64-3905-43b7-a5cd-5821050de274',
    direction: 'ltr',
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeScript: 'ಕನ್ನಡ',
    flagUrl: 'https://www.figma.com/api/mcp/asset/870b2ea7-714f-42db-af56-a606d375a240',
    direction: 'ltr',
  },
];
