import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Plus, ShoppingCart, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface HeritageServicesProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: (selectedServices: SelectedService[]) => void;
}

interface Service {
  id: string;
  icon: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

interface SelectedService {
  id: string;
  name: string;
  price: string;
}

export function HeritageServices({ isOpen, onClose, onProceedToBooking }: HeritageServicesProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const transportReach: Service[] = [
    {
      id: 'flight-hotel',
      icon: '✈️',
      name: 'Flight + Hotel Package',
      description: 'Complete travel and stay package',
      price: '₹15,000/person',
      category: 'reach',
    },
    {
      id: 'heritage-train',
      icon: '🚂',
      name: 'Heritage Train Journey',
      description: 'Luxury train experience',
      price: '₹8,000/person',
      category: 'reach',
    },
    {
      id: 'private-car',
      icon: '🚙',
      name: 'Private AC Car',
      description: 'Door-to-door comfort',
      price: '₹4,500/day',
      category: 'reach',
    },
    {
      id: 'group-bus',
      icon: '🚌',
      name: 'Group Bus',
      description: 'Economical group travel',
      price: '₹800/person',
      category: 'reach',
    },
  ];

  const transportLocal: Service[] = [
    {
      id: 'auto-guide',
      icon: '🛺',
      name: 'Auto-rickshaw with Guide',
      description: 'Local experience with insights',
      price: '₹300/4hrs',
      category: 'local',
    },
    {
      id: 'golf-cart',
      icon: '⛳',
      name: 'Electric Golf Carts',
      description: 'Eco-friendly monument tours',
      price: '₹500/4hrs',
      category: 'local',
    },
    {
      id: 'cycle-rickshaw',
      icon: '🚲',
      name: 'Cycle Rickshaws',
      description: 'Old city heritage tours',
      price: '₹200/2hrs',
      category: 'local',
    },
    {
      id: 'ac-coach',
      icon: '🚍',
      name: 'AC Coach for Groups',
      description: 'Comfortable group touring',
      price: '₹2,000/day',
      category: 'local',
    },
  ];

  const guideTour: Service[] = [
    {
      id: 'standard-guide',
      icon: '👨‍🏫',
      name: 'Standard Guide',
      description: 'Professional tour guide',
      price: '₹500/4hrs',
      category: 'guide',
    },
    {
      id: 'expert-historian',
      icon: '📚',
      name: 'Expert Historian',
      description: 'Deep historical insights',
      price: '₹1,500/4hrs',
      category: 'guide',
    },
    {
      id: 'language-interpreter',
      icon: '🗣️',
      name: 'Language Interpreter',
      description: 'Multi-language support',
      price: '₹300/hr',
      category: 'guide',
    },
    {
      id: 'photo-guide',
      icon: '📸',
      name: 'Photography Guide',
      description: 'Best angles & moments',
      price: '₹800/4hrs',
      category: 'guide',
    },
  ];

  const guideHealth: Service[] = [
    {
      id: 'medical-escort',
      icon: '🏥',
      name: 'Medical Escort',
      description: 'Doctor/Nurse accompaniment',
      price: '₹2,000/day',
      category: 'health',
    },
    {
      id: 'first-aid',
      icon: '⚕️',
      name: 'First Aid Kit for Group',
      description: 'Comprehensive medical kit',
      price: '₹500',
      category: 'health',
    },
    {
      id: 'emergency-evacuation',
      icon: '🚁',
      name: 'Emergency Evacuation Coverage',
      description: 'Insurance for emergencies',
      price: '₹1,200/person',
      category: 'health',
    },
    {
      id: 'senior-care',
      icon: '👵',
      name: 'Senior Care Attendant',
      description: 'Dedicated senior support',
      price: '₹1,000/day',
      category: 'health',
    },
  ];

  const experienceAddons: Service[] = [
    {
      id: 'private-access',
      icon: '🌙',
      name: 'Private Monument Access',
      description: 'After hours exclusive visit',
      price: '₹5,000/group',
      category: 'experience',
    },
    {
      id: 'artisan-workshop',
      icon: '🎨',
      name: 'Artisan Workshop Participation',
      description: 'Learn traditional crafts',
      price: '₹1,200/person',
      category: 'experience',
    },
    {
      id: 'traditional-meal',
      icon: '🍛',
      name: 'Traditional Meal with Local Family',
      description: 'Authentic home dining',
      price: '₹800/person',
      category: 'experience',
    },
    {
      id: 'cultural-performance',
      icon: '🎭',
      name: 'Cultural Performance Booking',
      description: 'Private cultural show',
      price: '₹3,000/group',
      category: 'experience',
    },
    {
      id: 'heritage-photo',
      icon: '📷',
      name: 'Heritage Photography Session',
      description: 'Professional photoshoot',
      price: '₹2,500/2hrs',
      category: 'experience',
    },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const isSelected = (serviceId: string) => selectedServices.includes(serviceId);

  const getSelectedServicesData = (): SelectedService[] => {
    const allServices = [
      ...transportReach,
      ...transportLocal,
      ...guideTour,
      ...guideHealth,
      ...experienceAddons,
    ];
    return selectedServices.map(id => {
      const service = allServices.find(s => s.id === id);
      return {
        id,
        name: service?.name || '',
        price: service?.price || '',
      };
    });
  };

  const handleProceed = () => {
    onProceedToBooking(getSelectedServicesData());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-cream-50 to-amber-50 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <ShoppingCart className="h-8 w-8" />
                    Heritage Services Selection
                  </h2>
                  <p className="text-lg text-purple-100">
                    Enhance your heritage experience with premium services
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                    <p className="text-sm font-bold text-purple-100">Selected Services</p>
                    <p className="text-2xl font-bold text-white">{selectedServices.length}</p>
                  </div>
                  <Button
                    onClick={onClose}
                    variant="ghost"
                    className="text-white hover:bg-white/20 rounded-full p-3"
                  >
                    <X className="h-8 w-8" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-8">
              <div className="space-y-8">
                {/* Transport Services Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-t-2xl">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <span className="text-3xl">🚌</span>
                      Transport Services
                    </h3>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-b-2xl p-6 border-3 border-blue-300">
                    {/* Reach Destination */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        🚌 Reach Destination
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {transportReach.map(service => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            isSelected={isSelected(service.id)}
                            onToggle={() => toggleService(service.id)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Local Transport */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        🚗 Local Transport
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {transportLocal.map(service => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            isSelected={isSelected(service.id)}
                            onToggle={() => toggleService(service.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Guide & Assistance Services Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-t-2xl">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <span className="text-3xl">👨‍🏫</span>
                      Guide & Assistance Services
                    </h3>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-b-2xl p-6 border-3 border-purple-300">
                    {/* Tour Coordination */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        👨‍🏫 Tour Coordination
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {guideTour.map(service => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            isSelected={isSelected(service.id)}
                            onToggle={() => toggleService(service.id)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Health & Safety */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        🏥 Health & Safety
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {guideHealth.map(service => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            isSelected={isSelected(service.id)}
                            onToggle={() => toggleService(service.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Add-ons Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-t-2xl">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <span className="text-3xl">✨</span>
                      Experience Add-ons
                    </h3>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-b-2xl p-6 border-3 border-amber-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      ✨ Special Experiences
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {experienceAddons.map(service => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                          isSelected={isSelected(service.id)}
                          onToggle={() => toggleService(service.id)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Admin Editable Note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-yellow-100 border-2 border-yellow-400 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    Service Selection Tips
                  </h3>
                  <div className="space-y-2 text-base text-gray-700">
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        <span className="bg-yellow-200 px-2 py-0.5 rounded font-bold">[Admin: Update This Text]</span>
                        {' '}All services are subject to availability and advance booking recommended
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        Combine multiple services for package discounts (5-10% off)
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        Health & Safety services highly recommended for senior groups
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="font-semibold">
                        Experience Add-ons must be booked 72 hours in advance
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Fixed Footer with Summary */}
            <div className="sticky bottom-0 bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 border-t-4 border-amber-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-white">
                  <p className="text-sm font-semibold text-gray-300">Services Selected</p>
                  <p className="text-2xl font-bold">{selectedServices.length} Services</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <Button
                    onClick={() => setSelectedServices([])}
                    variant="outline"
                    className="border-3 border-white text-white bg-transparent hover:bg-white/10 px-8 py-6 rounded-2xl text-lg font-bold"
                  >
                    Clear All
                  </Button>
                  <Button
                    onClick={handleProceed}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 rounded-2xl text-lg font-bold shadow-2xl flex items-center gap-3"
                  >
                    Proceed to Booking
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Service Card Component
interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
}

function ServiceCard({ service, isSelected, onToggle }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className={`relative cursor-pointer rounded-xl p-4 border-3 transition-all ${
        isSelected
          ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-600 shadow-lg'
          : 'bg-white border-gray-300 hover:border-purple-400 shadow-md'
      }`}
    >
      {/* Selected Indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 bg-green-600 text-white rounded-full p-1"
        >
          <Check className="h-5 w-5" />
        </motion.div>
      )}

      {/* Icon */}
      <div className="text-5xl mb-3">{service.icon}</div>

      {/* Service Name */}
      <h5 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h5>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 min-h-[40px]">{service.description}</p>

      {/* Price */}
      <div className={`px-3 py-2 rounded-lg text-center font-bold ${
        isSelected ? 'bg-green-600 text-white' : 'bg-purple-100 text-purple-700'
      }`}>
        {service.price}
      </div>

      {/* Add/Remove Button */}
      <div className="mt-3">
        <Button
          className={`w-full text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 ${
            isSelected
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {isSelected ? (
            <>
              <X className="h-4 w-4" /> Remove
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" /> Add Service
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
