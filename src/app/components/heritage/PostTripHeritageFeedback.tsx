import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Upload, Camera, Award, Send, ThumbsUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface PostTripHeritageFeedbackProps {
  isOpen: boolean;
  onClose: () => void;
  tripName?: string;
}

interface RatingCategory {
  id: string;
  label: string;
  icon: string;
  rating: number;
}

interface SpecialExperience {
  id: string;
  label: string;
  checked: boolean;
}

export function PostTripHeritageFeedback({
  isOpen,
  onClose,
  tripName = 'Golden Triangle Tour',
}: PostTripHeritageFeedbackProps) {
  const [ratings, setRatings] = useState<RatingCategory[]>([
    { id: 'guide', label: 'Guide Knowledge', icon: '👨‍🏫', rating: 0 },
    { id: 'accuracy', label: 'Historical Accuracy', icon: '📚', rating: 0 },
    { id: 'accessibility', label: 'Accessibility', icon: '♿', rating: 0 },
    { id: 'authenticity', label: 'Cultural Authenticity', icon: '🎭', rating: 0 },
  ]);

  const [specialExperiences, setSpecialExperiences] = useState<SpecialExperience[]>([
    { id: 'guides', label: 'Expert guides made history come alive', checked: false },
    { id: 'accessibility', label: 'Accessible facilities for seniors/disabled', checked: false },
    { id: 'artisan', label: 'Authentic artisan interactions', checked: false },
    { id: 'timing', label: 'Well-planned timing & routes', checked: false },
    { id: 'value', label: 'Value for money with concessions', checked: false },
  ]);

  const [improvements, setImprovements] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (categoryId: string, rating: number) => {
    setRatings(prev =>
      prev.map(cat => (cat.id === categoryId ? { ...cat, rating } : cat))
    );
  };

  const handleExperienceToggle = (expId: string) => {
    setSpecialExperiences(prev =>
      prev.map(exp => (exp.id === expId ? { ...exp, checked: !exp.checked } : exp))
    );
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto-close after showing success
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  const averageRating = ratings.reduce((sum, cat) => sum + cat.rating, 0) / ratings.length;
  const selectedExperiences = specialExperiences.filter(exp => exp.checked).length;
  const canSubmit = averageRating > 0 && selectedExperiences > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl"
            style={{ backgroundColor: '#F5E9D9' }} // Parchment
          >
            {/* Header */}
            <div
              className="sticky top-0 z-10 px-8 py-6"
              style={{ background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 100%)' }} // Heritage Maroon
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <span className="text-5xl">🏛️</span>
                    Heritage Experience Feedback
                  </h2>
                  <p className="text-lg font-semibold" style={{ color: '#D4AF37' }}>
                    Share your thoughts on "{tripName}"
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
            {!isSubmitted ? (
              <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-8">
                <div className="space-y-8">
                  {/* Rating Categories */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                      Rate Your Experience
                    </h3>
                    <div className="space-y-5">
                      {ratings.map((category, index) => (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="bg-white rounded-2xl border-3 p-6 shadow-lg"
                          style={{ borderColor: '#D4AF37' }}
                        >
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <span className="text-4xl">{category.icon}</span>
                              <h4 className="text-xl font-bold" style={{ color: '#8B0000' }}>
                                {category.label}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2">
                              {[1, 2, 3, 4, 5].map(star => (
                                <motion.button
                                  key={star}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => handleRatingClick(category.id, star)}
                                  className="transition-all"
                                >
                                  <Star
                                    className={`h-8 w-8 ${
                                      star <= category.rating
                                        ? 'fill-current'
                                        : 'fill-none'
                                    }`}
                                    style={{ 
                                      color: star <= category.rating ? '#D4AF37' : '#D1D5DB',
                                      stroke: star <= category.rating ? '#D4AF37' : '#D1D5DB',
                                    }}
                                  />
                                </motion.button>
                              ))}
                              {category.rating > 0 && (
                                <span className="ml-2 text-lg font-bold" style={{ color: '#D4AF37' }}>
                                  {category.rating}/5
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Special Experiences */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                      What made your heritage experience special?
                    </h3>
                    <div className="space-y-3">
                      {specialExperiences.map((exp, index) => (
                        <motion.div
                          key={exp.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          onClick={() => handleExperienceToggle(exp.id)}
                          className={`cursor-pointer rounded-xl p-5 border-3 transition-all shadow-md hover:shadow-lg ${
                            exp.checked
                              ? 'bg-white'
                              : 'bg-white/60'
                          }`}
                          style={{ borderColor: exp.checked ? '#D4AF37' : '#E2725B' }}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex-shrink-0 w-8 h-8 rounded-lg border-3 flex items-center justify-center transition-all ${
                                exp.checked ? 'bg-opacity-100' : 'bg-white'
                              }`}
                              style={{
                                backgroundColor: exp.checked ? '#D4AF37' : 'white',
                                borderColor: exp.checked ? '#D4AF37' : '#E2725B',
                              }}
                            >
                              {exp.checked && <ThumbsUp className="h-5 w-5 text-white" />}
                            </div>
                            <p className="text-lg font-semibold flex-1" style={{ color: '#4A4A4A' }}>
                              {exp.label}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Improvement Suggestions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.95 }}
                  >
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                      Suggest improvements for heritage conservation
                    </h3>
                    <p className="text-sm mb-4 font-semibold" style={{ color: '#6B7280' }}>
                      <span className="bg-yellow-200 px-2 py-0.5 rounded font-bold">[Admin: Update This Text]</span>
                      {' '}Your suggestions help preserve India's heritage for future generations
                    </p>
                    <textarea
                      value={improvements}
                      onChange={(e) => setImprovements(e.target.value)}
                      placeholder="Share your thoughts on conservation, maintenance, visitor management, or educational programs..."
                      className="w-full h-32 px-5 py-4 rounded-2xl border-3 resize-none text-base font-semibold focus:outline-none focus:ring-4 transition-all"
                      style={{
                        borderColor: '#E2725B',
                        backgroundColor: 'white',
                        color: '#4A4A4A',
                      }}
                    />
                  </motion.div>

                  {/* Photo Upload */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                      Share your best heritage photo
                    </h3>
                    <div className="relative">
                      {!uploadedImage ? (
                        <label className="cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <div
                            className="border-3 border-dashed rounded-2xl p-12 text-center hover:bg-white/50 transition-all"
                            style={{ borderColor: '#E2725B' }}
                          >
                            <Camera className="h-16 w-16 mx-auto mb-4" style={{ color: '#E2725B' }} />
                            <p className="text-lg font-bold mb-2" style={{ color: '#8B0000' }}>
                              Click to upload your photo
                            </p>
                            <p className="text-sm font-semibold" style={{ color: '#6B7280' }}>
                              JPG, PNG up to 10MB
                            </p>
                          </div>
                        </label>
                      ) : (
                        <div className="relative rounded-2xl overflow-hidden border-3" style={{ borderColor: '#D4AF37' }}>
                          <img
                            src={uploadedImage}
                            alt="Uploaded heritage photo"
                            className="w-full h-64 object-cover"
                          />
                          <Button
                            onClick={() => setUploadedImage(null)}
                            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <p className="text-white font-bold text-lg flex items-center gap-2">
                              <Camera className="h-5 w-5" />
                              Photo uploaded successfully
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Admin Note */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.15 }}
                    className="bg-yellow-100 border-2 border-yellow-400 rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">💡</span>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-800 mb-2">
                          Why Your Feedback Matters
                        </p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            <span className="font-semibold">
                              <span className="bg-yellow-200 px-1 rounded">[Admin: Update]</span> Your ratings help improve guide training programs
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            <span className="font-semibold">Photos shared may be featured in our Heritage Gallery</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            <span className="font-semibold">Suggestions are forwarded to heritage conservation authorities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ) : (
              // Success State
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center p-16"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <Award className="h-32 w-32 mx-auto" style={{ color: '#D4AF37' }} />
                  </motion.div>
                  <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}>
                    Heritage Explorer Badge Earned!
                  </h2>
                  <p className="text-xl font-semibold mb-6" style={{ color: '#6B7280' }}>
                    Thank you for helping preserve India's rich cultural heritage
                  </p>
                  <div className="bg-white rounded-2xl border-3 p-6 inline-block" style={{ borderColor: '#D4AF37' }}>
                    <p className="text-lg font-bold mb-2" style={{ color: '#8B0000' }}>
                      Your Feedback Summary
                    </p>
                    <div className="space-y-2 text-left">
                      <p className="text-base font-semibold" style={{ color: '#4A4A4A' }}>
                        ⭐ Average Rating: {averageRating.toFixed(1)}/5
                      </p>
                      <p className="text-base font-semibold" style={{ color: '#4A4A4A' }}>
                        ✅ Special Experiences: {selectedExperiences} selected
                      </p>
                      {improvements && (
                        <p className="text-base font-semibold" style={{ color: '#4A4A4A' }}>
                          💬 Conservation Suggestions: Submitted
                        </p>
                      )}
                      {uploadedImage && (
                        <p className="text-base font-semibold" style={{ color: '#4A4A4A' }}>
                          📸 Photo: Uploaded
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fixed Footer */}
            {!isSubmitted && (
              <div
                className="sticky bottom-0 px-8 py-6 border-t-4"
                style={{ backgroundColor: '#F5E9D9', borderColor: '#D4AF37' }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: '#8B0000' }}>
                      Completion Status
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1 rounded-lg font-bold text-sm ${
                        averageRating > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {averageRating > 0 ? '✓' : '○'} Ratings
                      </div>
                      <div className={`px-3 py-1 rounded-lg font-bold text-sm ${
                        selectedExperiences > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {selectedExperiences > 0 ? '✓' : '○'} Experiences
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSubmitting}
                    className={`px-12 py-6 rounded-2xl text-lg font-bold shadow-2xl flex items-center gap-3 transition-all ${
                      canSubmit && !isSubmitting
                        ? 'hover:scale-105'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    style={{
                      background: canSubmit ? 'linear-gradient(135deg, #8B0000 0%, #D4AF37 100%)' : '#D1D5DB',
                      color: 'white',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send className="h-6 w-6" />
                        </motion.div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Award className="h-6 w-6" />
                        Submit & Get Heritage Explorer Badge
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
