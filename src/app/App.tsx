import { useState, useEffect } from 'react';
import { AdminModeProvider } from '@/app/components/admin/AdminModeContext';
import { MainLayout } from '@/app/components/layout/MainLayout';
import { SplashScreen } from '@/app/components/onboarding/SplashScreen';
import { LanguageSelection } from '@/app/components/onboarding/LanguageSelection';
import { SignUp } from '@/app/components/onboarding/SignUp';
import { OTPVerification } from '@/app/components/onboarding/OTPVerification';
import { KYCIntro } from '@/app/components/onboarding/KYCIntro';
import { KYCPhone } from '@/app/components/onboarding/KYCPhone';
import { KYCDocuments } from '@/app/components/onboarding/KYCDocuments';
import { WelcomeVerified } from '@/app/components/onboarding/WelcomeVerified';
import { OnboardingSlides } from '@/app/components/onboarding/OnboardingSlides';
import { WelcomePostOnboarding } from '@/app/components/onboarding/WelcomePostOnboarding';
import { GetStarted } from '@/app/components/onboarding/GetStarted';
import { Toaster } from '@/app/components/ui/sonner';
import { ErrorBoundary } from '@/app/components/shared/ErrorBoundary';
import { UserData } from '@/types/index';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Comprehensive error suppression for browser extensions and dev tools
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      try {
        // Check if it's a fetch error (often from browser extensions or dev tools)
        if (event.reason && typeof event.reason === 'object') {
          const message = event.reason.message || '';
          if (
            message.includes('Failed to fetch') || 
            message.includes('NetworkError') ||
            message.includes('Network request failed') ||
            message.includes('Load failed') ||
            message.includes('net::ERR_')
          ) {
            // Suppress browser extension and dev tools errors
            console.warn('[Suppressed] Network error (likely from browser extension):', message);
            event.preventDefault();
            return;
          }
        }
        
        // Also handle string errors
        if (typeof event.reason === 'string') {
          if (
            event.reason.includes('Failed to fetch') ||
            event.reason.includes('NetworkError') ||
            event.reason.includes('Load failed')
          ) {
            console.warn('[Suppressed] Network error string:', event.reason);
            event.preventDefault();
            return;
          }
        }
      } catch (err) {
        // Fail silently if we can't process the error
        console.warn('[Error Handler] Failed to process rejection:', err);
      }
    };

    // Suppress general errors that might be from extensions or external resources
    const handleError = (event: ErrorEvent) => {
      try {
        const message = event.message || '';
        const filename = event.filename || '';
        
        if (
          message.includes('Failed to fetch') ||
          message.includes('NetworkError') ||
          message.includes('Load failed') ||
          message.includes('net::ERR_') ||
          filename.includes('extension') ||
          filename.includes('chrome-extension') ||
          filename.includes('moz-extension')
        ) {
          console.warn('[Suppressed] Error event (likely from browser extension or external resource):', message);
          event.preventDefault();
          return;
        }
      } catch (err) {
        // Fail silently
        console.warn('[Error Handler] Failed to process error:', err);
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    // Check onboarding status
    try {
      const onboarded = localStorage.getItem('grokyatra_onboarded');
      if (onboarded) {
        setIsOnboarded(true);
        setCurrentScreen('main');
      }
    } catch (error) {
      console.error('Error reading localStorage:', error);
    }

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  const handleNavigation = (screen: string, data?: Partial<UserData>) => {
    setCurrentScreen(screen);
    if (data) {
      setUserData({ ...userData, ...data });
    }
  };

  const completeOnboarding = () => {
    try {
      localStorage.setItem('grokyatra_onboarded', 'true');
      setIsOnboarded(true);
      setCurrentScreen('main');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      // Continue anyway
      setIsOnboarded(true);
      setCurrentScreen('main');
    }
  };

  if (isOnboarded && currentScreen === 'main') {
    return (
      <ErrorBoundary>
        <AdminModeProvider>
          <MainLayout userData={userData} />
          <Toaster />
        </AdminModeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <AdminModeProvider>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
          {currentScreen === 'splash' && (
            <SplashScreen onComplete={() => handleNavigation('language')} />
          )}
          {currentScreen === 'language' && (
            <LanguageSelection onNext={(lang) => handleNavigation('signup', { language: lang })} />
          )}
          {currentScreen === 'signup' && (
            <SignUp onNext={(data) => handleNavigation('otp', data)} />
          )}
          {currentScreen === 'otp' && (
            <OTPVerification onNext={() => handleNavigation('kyc-intro')} />
          )}
          {currentScreen === 'kyc-intro' && (
            <KYCIntro onNext={() => handleNavigation('kyc-phone')} />
          )}
          {currentScreen === 'kyc-phone' && (
            <KYCPhone onNext={() => handleNavigation('kyc-documents')} />
          )}
          {currentScreen === 'kyc-documents' && (
            <KYCDocuments onNext={() => handleNavigation('welcome-verified')} />
          )}
          {currentScreen === 'welcome-verified' && (
            <WelcomeVerified onNext={() => handleNavigation('onboarding-slides')} />
          )}
          {currentScreen === 'onboarding-slides' && (
            <OnboardingSlides onNext={() => handleNavigation('welcome-post')} />
          )}
          {currentScreen === 'welcome-post' && (
            <WelcomePostOnboarding onNext={() => handleNavigation('get-started')} />
          )}
          {currentScreen === 'get-started' && (
            <GetStarted onComplete={completeOnboarding} />
          )}
        </div>
        <Toaster />
      </AdminModeProvider>
    </ErrorBoundary>
  );
}
