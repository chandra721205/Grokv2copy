import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface LanguageSelectionProps {
  onNext: (language: string) => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
];

export function LanguageSelection({ onNext }: LanguageSelectionProps) {
  const [selectedLang, setSelectedLang] = useState('en');

  return (
    <div className="h-screen w-full max-w-[375px] mx-auto flex flex-col bg-gradient-to-b from-blue-50 to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-12"
      >
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <Globe className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Choose Your Language</h1>
        <p className="text-gray-600">Select your preferred language to continue</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 overflow-y-auto"
      >
        <div className="space-y-3">
          {languages.map((lang, index) => (
            <motion.button
              key={lang.code}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedLang(lang.code)}
              className={`w-full p-4 rounded-3xl flex items-center justify-between transition-all ${
                selectedLang === lang.code
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{lang.flag}</span>
                <span className="font-semibold">{lang.name}</span>
              </div>
              {selectedLang === lang.code && (
                <Check className="w-6 h-6" />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6"
      >
        <Button
          onClick={() => onNext(selectedLang)}
          className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
        >
          Continue
        </Button>
      </motion.div>
    </div>
  );
}
