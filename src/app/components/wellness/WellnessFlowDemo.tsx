import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import {
  TreatmentCenterCard,
  WellnessServiceInquiryModal,
  ConfirmationModal,
  MyWellnessInquiriesScreen,
  WellnessProposalDetailScreen,
} from './WellnessInterestFlow';

// ========================================
// COMPLETE WELLNESS FLOW DEMO
// 5-Phase Interest → Booking System
// ========================================

export function WellnessFlowDemo() {
  const [currentView, setCurrentView] = useState<'cards' | 'inquiries' | 'proposal'>('cards');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<any>(null);
  const [confirmAction, setConfirmAction] = useState<'custom-quote' | 'book-standard'>('custom-quote');

  // Mock center data matching the Ayurveda screen
  const centers = [
    {
      id: '1',
      name: '[Admin: Somatheeram Ayurveda Resort]',
      location: '[Admin: Kerala, Trivandrum]',
      rating: 4.8,
      image: '',
      treatmentType: 'Panchakarma Detox',
      basePrice: '₹80,000',
      duration: '21 days',
      features: ['Vamana', 'Abhyanga', 'Basti', 'Panchakarma'],
      badge: 'India Exclusive',
    },
    {
      id: '2',
      name: '[Admin: Kalari Kovilakom]',
      location: '[Admin: Kerala, Palakkad]',
      rating: 4.9,
      image: '',
      treatmentType: 'Ayurveda & Panchakarma',
      basePrice: '₹1,20,000',
      duration: '14 days',
      features: ['Nasya', 'Virechana', 'Yoga', 'Meditation'],
      badge: 'Premium',
    },
    {
      id: '3',
      name: '[Admin: Kairali Ayurvedic Health Resort]',
      location: '[Admin: Kerala, Palakkad]',
      rating: 4.7,
      image: '',
      treatmentType: 'Arthritis & Joint Care',
      basePrice: '₹65,000',
      duration: '7 days',
      features: ['Kati Basti', 'Pizhichil', 'Njavarakizhi'],
    },
  ];

  const handleExpressInterest = (center: any) => {
    setSelectedCenter(center);
    setShowInquiryModal(true);
  };

  const handleBookStandard = (center: any) => {
    setSelectedCenter(center);
    // Navigate to standard booking flow
    alert(`Navigating to standard booking for ${center.name}`);
  };

  const handleInquirySubmit = (data: any, action: 'custom-quote' | 'book-standard') => {
    setConfirmAction(action);
    setShowInquiryModal(false);
    
    if (action === 'custom-quote') {
      setShowConfirmation(true);
    } else {
      // Navigate to standard booking
      alert('Proceeding to standard booking flow...');
    }
  };

  const handleViewInquiries = () => {
    setShowConfirmation(false);
    setCurrentView('inquiries');
  };

  const handleViewProposal = (proposalId: string) => {
    setCurrentView('proposal');
  };

  const handleAcceptProposal = () => {
    alert('Proceeding to payment...');
    // Navigate to booking/payment flow
  };

  const handleRequestModification = () => {
    alert('Opening modification request form...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs (For Demo) */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentView('cards')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                currentView === 'cards'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🌿 Treatment Centers
            </button>
            <button
              onClick={() => setCurrentView('inquiries')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                currentView === 'inquiries'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📋 My Inquiries
            </button>
            <button
              onClick={() => setCurrentView('proposal')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                currentView === 'proposal'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📄 View Proposal (Demo)
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {currentView === 'cards' && (
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Top Ayurveda Centers
            </h1>
            <p className="text-gray-600">
              Browse wellness centers and express your interest for personalized quotes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((center) => (
              <TreatmentCenterCard
                key={center.id}
                center={center}
                onExpressInterest={handleExpressInterest}
                onBookStandard={handleBookStandard}
              />
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              ℹ️ New Feature: Express Interest Flow
            </h3>
            <p className="text-gray-700">
              Click <strong>"Express Interest / Get Custom Quote"</strong> on any card to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Fill out your specific requirements (dates, travelers, special needs)</li>
              <li>Get a personalized quote from our wellness specialists within 24 hours</li>
              <li>Link the booking to your Trip Hub for seamless planning</li>
              <li>Track all inquiries in "My Wellness Inquiries"</li>
            </ul>
          </div>
        </div>
      )}

      {currentView === 'inquiries' && (
        <MyWellnessInquiriesScreen onViewProposal={handleViewProposal} />
      )}

      {currentView === 'proposal' && (
        <WellnessProposalDetailScreen
          proposalId="1"
          onAccept={handleAcceptProposal}
          onRequestModification={handleRequestModification}
        />
      )}

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && selectedCenter && (
          <WellnessServiceInquiryModal
            center={selectedCenter}
            onClose={() => setShowInquiryModal(false)}
            onSubmit={handleInquirySubmit}
          />
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && selectedCenter && (
          <ConfirmationModal
            center={selectedCenter}
            action={confirmAction}
            onClose={() => setShowConfirmation(false)}
            onViewInquiries={handleViewInquiries}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default WellnessFlowDemo;
