import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Construction, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState, useEffect } from 'react';

interface NewCategoryScreenProps {
  onBack: () => void;
  categoryType?: 'family-fun' | 'other';
}

export function NewCategoryScreen({ onBack, categoryType = 'other' }: NewCategoryScreenProps) {
  const [customIdea, setCustomIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Cleanup timeout on unmount
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    
    try {
      if (submitted) {
        timeoutId = setTimeout(() => {
          try {
            setCustomIdea('');
            setSubmitted(false);
          } catch (error) {
            console.error('Error resetting form:', error);
          }
        }, 3000);
      }
    } catch (error) {
      console.error('Error setting timeout:', error);
    }

    return () => {
      try {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      } catch (error) {
        console.error('Error clearing timeout:', error);
      }
    };
  }, [submitted]);

  const categoryInfo = {
    'family-fun': {
      emoji: '🎡',
      title: 'Family Fun Tours',
      subtitle: 'Coming Soon',
      description: 'Exciting family-friendly destinations and activities for all ages. Theme parks, water parks, zoos, and kid-friendly adventures across India.',
    },
    'other': {
      emoji: '✨',
      title: 'Other/Custom Tours',
      subtitle: 'Tell Us Your Idea',
      description: 'Have a unique tour idea? Share your custom requirements and our team will create a personalized itinerary just for you.',
    },
  };

  const info = categoryInfo[categoryType] || categoryInfo['other'];

  const handleSubmit = () => {
    try {
      const trimmedIdea = customIdea.trim();
      if (trimmedIdea && trimmedIdea.length >= 10) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting idea:', error);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      setCustomIdea(e.target.value);
    } catch (error) {
      console.error('Error updating textarea:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-orange-50 pb-6 overflow-y-auto">
      {/* Header - Matching existing style */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 pt-12 pb-8 rounded-b-[2rem] mb-6 sticky top-0 z-10">
        <button
          onClick={onBack}
          type="button"
          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 hover:bg-white/30 transition-colors active:scale-95"
          aria-label="Back to categories"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        <div className="text-center">
          <div className="text-6xl mb-4" role="img" aria-label={`${info.title} icon`}>
            {info.emoji}
          </div>
          <h1 className="text-white text-2xl font-bold mb-2">{info.title}</h1>
          <p className="text-white/80 text-sm">{info.subtitle}</p>
        </div>
      </div>

      <div className="px-6 max-w-[420px] mx-auto">
        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-[24px] p-6 mb-6 border-2 border-orange-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Construction className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 mb-2">New Category</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{info.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Custom Idea Input - Only for Other/Custom */}
        {categoryType === 'other' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="bg-white rounded-[24px] p-6 shadow-lg mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <h3 className="font-bold text-lg">Describe Your Custom Idea</h3>
            </div>
            
            {!submitted ? (
              <>
                <textarea
                  value={customIdea}
                  onChange={handleTextareaChange}
                  placeholder="Example: 'Photography tour of Rajasthan forts', 'Food and wine trail in Goa', 'Yoga retreat in Rishikesh', 'Wildlife safari with luxury camping'..."
                  className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl resize-none focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm mb-4 transition-all"
                  maxLength={500}
                  aria-label="Describe your custom tour idea"
                />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">
                    {customIdea.length}/500 characters
                  </span>
                  {customIdea.trim() && customIdea.trim().length < 10 && (
                    <span className="text-xs text-orange-600">
                      Please enter at least 10 characters
                    </span>
                  )}
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={!customIdea.trim() || customIdea.trim().length < 10}
                  type="button"
                  className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Custom Tour Idea
                </Button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-3" role="img" aria-label="Success">✅</div>
                <h4 className="font-bold text-green-800 mb-2">Idea Submitted!</h4>
                <p className="text-sm text-green-700">Our team will review and create a personalized itinerary for you.</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Back to Categories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[24px] p-6 text-white text-center shadow-lg"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Explore Other Categories</h3>
          <p className="text-sm text-white/90 mb-4 leading-relaxed">
            {categoryType === 'family-fun' 
              ? 'While this category is being prepared, check out our other amazing tour options!'
              : 'Browse our curated categories for instant tour planning!'}
          </p>
          <Button
            onClick={onBack}
            type="button"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-6 h-10 shadow-sm"
          >
            Back to Category Selection
          </Button>
        </motion.div>

        {/* Admin Note - Purple banner matching existing system */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-6 bg-purple-100 border-l-4 border-purple-600 rounded-2xl p-4"
        >
          <p className="text-xs text-gray-700 leading-relaxed">
            <span className="font-bold text-purple-700">[Admin Note]</span> This is a placeholder screen. 
            Content for this category will be managed by the admin team via the admin panel.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
