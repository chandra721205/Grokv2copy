/**
 * INTERNATIONALIZATION (i18n) - Multi-Language Support
 * 
 * Supports: English, Hindi, Marathi
 * Ready for: Tamil, Telugu, Kannada, Bengali
 * 
 * Usage:
 * const { t, language, setLanguage } = useTranslation();
 * <h1>{t('vehicle.title')}</h1>
 */

export type SupportedLanguage = 'en' | 'hi' | 'mr';

export interface Translations {
  [key: string]: string;
}

export const translations: Record<SupportedLanguage, Translations> = {
  // English
  en: {
    // Vehicle Screens
    'vehicle.title': 'Self-Drive Vehicles',
    'vehicle.description': 'Rent cars, bikes, scooters for your trip',
    'vehicle.searchPlaceholder': 'Search by location, vehicle type...',
    'vehicle.filters': 'Filters',
    'vehicle.bookNow': 'Book Now',
    'vehicle.viewDetails': 'View Details',
    'vehicle.compare': 'Compare',
    'vehicle.addToCompare': 'Add to Compare',
    'vehicle.removeFromCompare': 'Remove from Compare',
    'vehicle.perDay': 'per day',
    'vehicle.available': 'Available',
    'vehicle.unavailable': 'Unavailable',
    'vehicle.seats': 'seats',
    'vehicle.transmission': 'Transmission',
    'vehicle.fuel': 'Fuel Type',
    'vehicle.mileage': 'Mileage',
    'vehicle.year': 'Year',
    'vehicle.category': 'Category',
    'vehicle.priceRange': 'Price Range',
    'vehicle.sortBy': 'Sort By',
    'vehicle.lowToHigh': 'Price: Low to High',
    'vehicle.highToLow': 'Price: High to Low',
    'vehicle.rating': 'Rating',
    'vehicle.reviews': 'reviews',
    
    // Booking Flow
    'booking.selectDates': 'Select Dates',
    'booking.pickupLocation': 'Pickup Location',
    'booking.dropoffLocation': 'Dropoff Location',
    'booking.startDate': 'Start Date',
    'booking.endDate': 'End Date',
    'booking.duration': 'Duration',
    'booking.days': 'days',
    'booking.driverDetails': 'Driver Details',
    'booking.fullName': 'Full Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number',
    'booking.licenseNumber': 'License Number',
    'booking.uploadLicense': 'Upload License',
    'booking.frontSide': 'Front Side',
    'booking.backSide': 'Back Side',
    
    // Insurance
    'insurance.title': 'Insurance Options',
    'insurance.basic': 'Basic Coverage',
    'insurance.comprehensive': 'Comprehensive',
    'insurance.premium': 'Premium Plus',
    'insurance.coverage': 'Coverage',
    'insurance.deductible': 'Deductible',
    'insurance.maxCoverage': 'Max Coverage',
    
    // Payment
    'payment.title': 'Payment',
    'payment.totalAmount': 'Total Amount',
    'payment.baseRental': 'Base Rental',
    'payment.insurance': 'Insurance',
    'payment.tax': 'GST',
    'payment.payNow': 'Pay Now',
    'payment.cardNumber': 'Card Number',
    'payment.expiryDate': 'Expiry Date',
    'payment.cvv': 'CVV',
    'payment.upi': 'UPI',
    'payment.netBanking': 'Net Banking',
    'payment.wallet': 'Wallet',
    
    // Common
    'common.back': 'Back',
    'common.next': 'Next',
    'common.continue': 'Continue',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.confirm': 'Confirm',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.close': 'Close',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.clear': 'Clear',
    'common.apply': 'Apply',
    'common.select': 'Select',
    
    // Errors
    'error.networkError': 'Network error. Please check your connection.',
    'error.noVehiclesFound': 'No vehicles found',
    'error.bookingFailed': 'Booking failed. Please try again.',
    'error.paymentFailed': 'Payment failed',
    'error.invalidDate': 'Invalid date selection',
    'error.requiredField': 'This field is required',
    'error.invalidEmail': 'Invalid email address',
    'error.invalidPhone': 'Invalid phone number'
  },

  // Hindi - हिन्दी
  hi: {
    // Vehicle Screens
    'vehicle.title': 'स्व-ड्राइव वाहन',
    'vehicle.description': 'अपनी यात्रा के लिए कार, बाइक, स्कूटर किराए पर लें',
    'vehicle.searchPlaceholder': 'स्थान, वाहन प्रकार से खोजें...',
    'vehicle.filters': 'फ़िल्टर',
    'vehicle.bookNow': 'अभी बुक करें',
    'vehicle.viewDetails': 'विवरण देखें',
    'vehicle.compare': 'तुलना करें',
    'vehicle.addToCompare': 'तुलना में जोड़ें',
    'vehicle.removeFromCompare': 'तुलना से हटाएं',
    'vehicle.perDay': 'प्रति दिन',
    'vehicle.available': 'उपलब्ध',
    'vehicle.unavailable': 'अनुपलब्ध',
    'vehicle.seats': 'सीटें',
    'vehicle.transmission': 'ट्रांसमिशन',
    'vehicle.fuel': 'ईंधन प्रकार',
    'vehicle.mileage': 'माइलेज',
    'vehicle.year': 'वर्ष',
    'vehicle.category': 'श्रेणी',
    'vehicle.priceRange': 'मूल्य सीमा',
    'vehicle.sortBy': 'क्रमबद्ध करें',
    'vehicle.lowToHigh': 'मूल्य: कम से अधिक',
    'vehicle.highToLow': 'मूल्य: अधिक से कम',
    'vehicle.rating': 'रेटिंग',
    'vehicle.reviews': 'समीक्षाएं',
    
    // Booking Flow
    'booking.selectDates': 'तिथियां चुनें',
    'booking.pickupLocation': 'पिकअप स्थान',
    'booking.dropoffLocation': 'ड्रॉप स्थान',
    'booking.startDate': 'आरंभ तिथि',
    'booking.endDate': 'समाप्ति तिथि',
    'booking.duration': 'अवधि',
    'booking.days': 'दिन',
    'booking.driverDetails': 'ड्राइवर विवरण',
    'booking.fullName': 'पूरा नाम',
    'booking.email': 'ईमेल पता',
    'booking.phone': 'फोन नंबर',
    'booking.licenseNumber': 'लाइसेंस नंबर',
    'booking.uploadLicense': 'लाइसेंस अपलोड करें',
    'booking.frontSide': 'सामने का भाग',
    'booking.backSide': 'पिछला भाग',
    
    // Insurance
    'insurance.title': 'बीमा विकल्प',
    'insurance.basic': 'बुनियादी कवरेज',
    'insurance.comprehensive': 'व्यापक',
    'insurance.premium': 'प्रीमियम प्लस',
    'insurance.coverage': 'कवरेज',
    'insurance.deductible': 'कटौती योग्य',
    'insurance.maxCoverage': 'अधिकतम कवरेज',
    
    // Payment
    'payment.title': 'भुगतान',
    'payment.totalAmount': 'कुल राशि',
    'payment.baseRental': 'मूल किराया',
    'payment.insurance': 'बीमा',
    'payment.tax': 'जीएसटी',
    'payment.payNow': 'अभी भुगतान करें',
    'payment.cardNumber': 'कार्ड नंबर',
    'payment.expiryDate': 'समाप्ति तिथि',
    'payment.cvv': 'सीवीवी',
    'payment.upi': 'यूपीआई',
    'payment.netBanking': 'नेट बैंकिंग',
    'payment.wallet': 'वॉलेट',
    
    // Common
    'common.back': 'पीछे',
    'common.next': 'आगे',
    'common.continue': 'जारी रखें',
    'common.cancel': 'रद्द करें',
    'common.save': 'सहेजें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.confirm': 'पुष्टि करें',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    'common.close': 'बंद करें',
    'common.search': 'खोजें',
    'common.filter': 'फ़िल्टर',
    'common.sort': 'क्रमबद्ध करें',
    'common.clear': 'साफ़ करें',
    'common.apply': 'लागू करें',
    'common.select': 'चुनें',
    
    // Errors
    'error.networkError': 'नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें।',
    'error.noVehiclesFound': 'कोई वाहन नहीं मिला',
    'error.bookingFailed': 'बुकिंग विफल रही। कृपया पुनः प्रयास करें।',
    'error.paymentFailed': 'भुगतान विफल रहा',
    'error.invalidDate': 'अमान्य तिथि चयन',
    'error.requiredField': 'यह फ़ील्ड आवश्यक है',
    'error.invalidEmail': 'अमान्य ईमेल पता',
    'error.invalidPhone': 'अमान्य फोन नंबर'
  },

  // Marathi - मराठी
  mr: {
    // Vehicle Screens
    'vehicle.title': 'स्वयं-चालित वाहने',
    'vehicle.description': 'तुमच्या प्रवासासाठी कार, बाईक, स्कूटर भाड्याने घ्या',
    'vehicle.searchPlaceholder': 'स्थान, वाहन प्रकार शोधा...',
    'vehicle.filters': 'फिल्टर',
    'vehicle.bookNow': 'आता बुक करा',
    'vehicle.viewDetails': 'तपशील पहा',
    'vehicle.compare': 'तुलना करा',
    'vehicle.addToCompare': 'तुलनेत जोडा',
    'vehicle.removeFromCompare': 'तुलनेतून काढा',
    'vehicle.perDay': 'प्रति दिवस',
    'vehicle.available': 'उपलब्ध',
    'vehicle.unavailable': 'अनुपलब्ध',
    'vehicle.seats': 'आसने',
    'vehicle.transmission': 'ट्रान्समिशन',
    'vehicle.fuel': 'इंधन प्रकार',
    'vehicle.mileage': 'मायलेज',
    'vehicle.year': 'वर्ष',
    'vehicle.category': 'श्रेणी',
    'vehicle.priceRange': 'किंमत श्रेणी',
    'vehicle.sortBy': 'क्रमवारी लावा',
    'vehicle.lowToHigh': 'किंमत: कमी ते जास्त',
    'vehicle.highToLow': 'किंमत: जास्त ते कमी',
    'vehicle.rating': 'रेटिंग',
    'vehicle.reviews': 'पुनरावलोकने',
    
    // Booking Flow
    'booking.selectDates': 'तारखा निवडा',
    'booking.pickupLocation': 'पिकअप स्थान',
    'booking.dropoffLocation': 'ड्रॉप स्थान',
    'booking.startDate': 'सुरुवात तारीख',
    'booking.endDate': 'समाप्ती तारीख',
    'booking.duration': 'कालावधी',
    'booking.days': 'दिवस',
    'booking.driverDetails': 'ड्रायव्हर तपशील',
    'booking.fullName': 'पूर्ण नाव',
    'booking.email': 'ईमेल पत्ता',
    'booking.phone': 'फोन नंबर',
    'booking.licenseNumber': 'लायसन्स नंबर',
    'booking.uploadLicense': 'लायसन्स अपलोड करा',
    'booking.frontSide': 'समोरील बाजू',
    'booking.backSide': 'मागील बाजू',
    
    // Insurance
    'insurance.title': 'विमा पर्याय',
    'insurance.basic': 'मूलभूत कव्हरेज',
    'insurance.comprehensive': 'सर्वसमावेशक',
    'insurance.premium': 'प्रीमियम प्लस',
    'insurance.coverage': 'कव्हरेज',
    'insurance.deductible': 'वजावट',
    'insurance.maxCoverage': 'कमाल कव्हरेज',
    
    // Payment
    'payment.title': 'पेमेंट',
    'payment.totalAmount': 'एकूण रक्कम',
    'payment.baseRental': 'मूळ भाडे',
    'payment.insurance': 'विमा',
    'payment.tax': 'जीएसटी',
    'payment.payNow': 'आता पैसे द्या',
    'payment.cardNumber': 'कार्ड नंबर',
    'payment.expiryDate': 'समाप्ती तारीख',
    'payment.cvv': 'सीव्हीव्ही',
    'payment.upi': 'यूपीआय',
    'payment.netBanking': 'नेट बँकिंग',
    'payment.wallet': 'वॉलेट',
    
    // Common
    'common.back': 'मागे',
    'common.next': 'पुढे',
    'common.continue': 'सुरू ठेवा',
    'common.cancel': 'रद्द करा',
    'common.save': 'जतन करा',
    'common.edit': 'संपादित करा',
    'common.delete': 'हटवा',
    'common.confirm': 'पुष्टी करा',
    'common.loading': 'लोड होत आहे...',
    'common.error': 'त्रुटी',
    'common.success': 'यश',
    'common.close': 'बंद करा',
    'common.search': 'शोधा',
    'common.filter': 'फिल्टर',
    'common.sort': 'क्रमवारी',
    'common.clear': 'साफ करा',
    'common.apply': 'लागू करा',
    'common.select': 'निवडा',
    
    // Errors
    'error.networkError': 'नेटवर्क त्रुटी. कृपया आपले कनेक्शन तपासा.',
    'error.noVehiclesFound': 'कोणतेही वाहन सापडले नाही',
    'error.bookingFailed': 'बुकिंग अयशस्वी झाले. कृपया पुन्हा प्रयत्न करा.',
    'error.paymentFailed': 'पेमेंट अयशस्वी',
    'error.invalidDate': 'अवैध तारीख निवड',
    'error.requiredField': 'हे फील्ड आवश्यक आहे',
    'error.invalidEmail': 'अवैध ईमेल पत्ता',
    'error.invalidPhone': 'अवैध फोन नंबर'
  }
};

// Translation hook
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface TranslationContextType {
  t: (key: string) => string;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem('language');
    return (saved as SupportedLanguage) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}

// Language Selector Component
export function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  const languages = [
    { code: 'en' as SupportedLanguage, name: 'English', flag: '🇬🇧' },
    { code: 'hi' as SupportedLanguage, name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'mr' as SupportedLanguage, name: 'मराठी', flag: '🇮🇳' }
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            language === lang.code
              ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <span className="mr-2">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
}
