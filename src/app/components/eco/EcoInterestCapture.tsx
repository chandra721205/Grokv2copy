import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Star, Bell, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface EcoInterestCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  destinationName?: string;
  categoryName?: string;
}

export function EcoInterestCapture({
  isOpen,
  onClose,
  destinationName = 'Admin-Added Destination 1',
  categoryName = 'National Parks & Wildlife',
}: EcoInterestCaptureProps) {
  const [saveToWishlist, setSaveToWishlist] = useState(false);
  const [markInterested, setMarkInterested] = useState(false);
  const [notes, setNotes] = useState('');
  const [notifyDeals, setNotifyDeals] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const canSubmit = saveToWishlist || markInterested;

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
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl"
          >
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="sticky top-0 z-10 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        <Heart className="h-8 w-8" />
                        Save Your Interest
                      </h2>
                      <p className="text-lg text-green-100 font-semibold">
                        {destinationName} • {categoryName}
                      </p>
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

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-8">
                  <div className="space-y-6">
                    {/* Interest Options */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Mark Your Interest
                      </h3>
                      
                      <div className="space-y-4">
                        {/* Save to Wishlist */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSaveToWishlist(!saveToWishlist)}
                          className={`cursor-pointer rounded-2xl p-6 border-3 transition-all ${
                            saveToWishlist
                              ? 'bg-white border-pink-500 shadow-lg'
                              : 'bg-white border-gray-300 shadow-md'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                                saveToWishlist ? 'bg-pink-500' : 'bg-gray-200'
                              }`}
                            >
                              <Heart className={`h-6 w-6 ${saveToWishlist ? 'text-white fill-white' : 'text-gray-500'}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-gray-900 mb-1">
                                ❤️ Save to Wishlist
                              </h4>
                              <p className="text-base text-gray-600 font-semibold">
                                Keep this destination in your favorites for future planning
                              </p>
                            </div>
                            {saveToWishlist && (
                              <Check className="h-6 w-6 text-pink-500 flex-shrink-0" />
                            )}
                          </div>
                        </motion.div>

                        {/* Mark Interested */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setMarkInterested(!markInterested)}
                          className={`cursor-pointer rounded-2xl p-6 border-3 transition-all ${
                            markInterested
                              ? 'bg-white border-yellow-500 shadow-lg'
                              : 'bg-white border-gray-300 shadow-md'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                                markInterested ? 'bg-yellow-500' : 'bg-gray-200'
                              }`}
                            >
                              <Star className={`h-6 w-6 ${markInterested ? 'text-white fill-white' : 'text-gray-500'}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-gray-900 mb-1">
                                ⭐ Mark Interested
                              </h4>
                              <p className="text-base text-gray-600 font-semibold">
                                Show interest and get priority when deals become available
                              </p>
                            </div>
                            {markInterested && (
                              <Check className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Optional Notes */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Notes (Optional)
                      </h3>
                      <p className="text-sm text-gray-600 font-semibold mb-3">
                        Share your preferences: vibe, must-haves, deal expectations
                      </p>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="E.g., 'Looking for family-friendly eco-lodge with kids activities' or 'Interested in wildlife photography tours'"
                        className="w-full h-32 px-5 py-4 rounded-2xl border-3 border-gray-300 resize-none text-base font-semibold focus:outline-none focus:ring-4 focus:ring-green-400 transition-all"
                      />
                    </div>

                    {/* Deal Notification */}
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setNotifyDeals(!notifyDeals)}
                        className={`cursor-pointer rounded-2xl p-6 border-3 transition-all ${
                          notifyDeals
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500 shadow-lg'
                            : 'bg-white border-gray-300 shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                              notifyDeals ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                          >
                            <Bell className={`h-6 w-6 ${notifyDeals ? 'text-white' : 'text-gray-500'}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">
                              🔔 Notify me when deals match my budget
                            </h4>
                            <p className="text-base text-gray-600 font-semibold">
                              Get alerts when admin-published eco-deals are available
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <div
                              className={`w-14 h-8 rounded-full transition-all ${
                                notifyDeals ? 'bg-green-500' : 'bg-gray-300'
                              }`}
                            >
                              <div
                                className={`w-6 h-6 bg-white rounded-full mt-1 transition-all ${
                                  notifyDeals ? 'ml-7' : 'ml-1'
                                }`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Admin Note */}
                    <div className="bg-yellow-100 border-2 border-yellow-400 rounded-2xl p-5">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">💡</span>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-800 mb-2">
                            How Interest Capture Works
                          </p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-600">•</span>
                              <span className="font-semibold">
                                <span className="bg-yellow-200 px-1 rounded">[Admin: Update]</span> Your interests are saved for admin review
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-600">•</span>
                              <span className="font-semibold">Grok AI will notify you when matching deals are published</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-yellow-600">•</span>
                              <span className="font-semibold">No booking or payment required at this stage</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 border-t-4 border-green-500">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-white">
                      <p className="text-sm font-semibold text-gray-300">Selection Status</p>
                      <div className="flex items-center gap-3 mt-1">
                        <div className={`px-3 py-1 rounded-lg font-bold text-sm ${
                          saveToWishlist ? 'bg-pink-500 text-white' : 'bg-gray-600 text-gray-300'
                        }`}>
                          {saveToWishlist ? '❤️ Wishlist' : '○ Wishlist'}
                        </div>
                        <div className={`px-3 py-1 rounded-lg font-bold text-sm ${
                          markInterested ? 'bg-yellow-500 text-white' : 'bg-gray-600 text-gray-300'
                        }`}>
                          {markInterested ? '⭐ Interested' : '○ Interested'}
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                      className={`px-12 py-6 rounded-2xl text-lg font-bold shadow-2xl flex items-center gap-3 transition-all ${
                        canSubmit
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white hover:scale-105'
                          : 'bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <Bell className="h-6 w-6" />
                      Save Interest & Notify Me
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              // Success State
              <div className="flex items-center justify-center p-16">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="h-16 w-16 text-white" />
                    </div>
                  </motion.div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Interest Saved Successfully!
                  </h2>
                  <p className="text-xl text-gray-700 font-semibold mb-6">
                    We've noted your interest in {destinationName}
                  </p>
                  <div className="bg-white rounded-2xl border-3 border-green-500 p-6 inline-block max-w-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                      <span className="text-2xl">🤖</span>
                      Grok AI Notification Active
                    </h3>
                    <p className="text-base text-gray-700 font-semibold">
                      Grok AI will notify you when admin-published eco-deals match your preferences and budget.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
