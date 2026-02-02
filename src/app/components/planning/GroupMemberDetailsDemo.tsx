import { useState } from 'react';
import { GroupMemberDetailsManager, type TravelerDetails } from './GroupMemberDetailsManager';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export function GroupMemberDetailsDemo() {
  const [step, setStep] = useState<'setup' | 'form' | 'success'>('setup');
  const [totalTravelers, setTotalTravelers] = useState(4);
  const [savedTravelers, setSavedTravelers] = useState<TravelerDetails[]>([]);

  const handleSave = (travelers: TravelerDetails[]) => {
    setSavedTravelers(travelers);
    setStep('success');
  };

  const handleReset = () => {
    setStep('setup');
    setSavedTravelers([]);
    setTotalTravelers(4);
  };

  if (step === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 pt-12 pb-6 rounded-b-3xl">
          <div className="text-center">
            <h1 className="text-white font-bold text-2xl mb-2">Group Member Details Demo</h1>
            <p className="text-white/90 text-sm">Experience the comprehensive traveler detail system</p>
          </div>
        </div>

        {/* Setup */}
        <div className="px-4 py-8 max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">How many travelers?</h2>
              <p className="text-sm text-gray-600">Set the total number of people in your group</p>
            </div>

            <div className="flex items-center justify-center gap-6 mb-6">
              <button
                onClick={() => setTotalTravelers(Math.max(1, totalTravelers - 1))}
                className="w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-colors"
              >
                −
              </button>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600">{totalTravelers}</div>
                <div className="text-sm text-gray-600 mt-1">people</div>
              </div>
              <button
                onClick={() => setTotalTravelers(totalTravelers + 1)}
                className="w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={() => setStep('form')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Start Adding Travelers
            </button>
          </div>

          {/* Info Cards */}
          <div className="mt-6 space-y-3">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border-2 border-purple-200">
              <h3 className="font-bold text-sm text-purple-900 mb-2">✨ What You Can Add</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Personal details (name, age, relation)</li>
                <li>• Medical conditions & mobility needs</li>
                <li>• Dietary restrictions & allergies</li>
                <li>• Travel interests & preferences</li>
                <li>• Emergency contact information</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200">
              <h3 className="font-bold text-sm text-green-900 mb-2">🎯 Benefits</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Age-appropriate activity planning</li>
                <li>• Personalized accessibility arrangements</li>
                <li>• Customized meal planning</li>
                <li>• Tailored itinerary suggestions</li>
                <li>• Enhanced safety & care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 pt-12 pb-6 rounded-b-3xl">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setStep('setup')}
              className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={handleReset}
              className="text-white text-sm font-medium"
            >
              Reset Demo
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-white font-bold text-2xl mb-2">Add Traveler Details</h1>
            <p className="text-white/90 text-sm">Fill in details for {totalTravelers} travelers</p>
          </div>
        </div>

        {/* Form */}
        <div className="px-4 py-6 max-w-2xl mx-auto pb-20">
          <GroupMemberDetailsManager 
            totalTravelers={totalTravelers}
            onSave={handleSave}
            initialTravelers={savedTravelers}
          />
        </div>
      </div>
    );
  }

  // Success Screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white font-bold text-2xl mb-2">All Set! 🎉</h1>
          <p className="text-white/90 text-sm">Traveler details saved successfully</p>
        </div>
      </div>

      {/* Success Content */}
      <div className="px-4 py-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4">Summary</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
              <span className="text-sm text-gray-700">Total Travelers</span>
              <span className="text-lg font-bold text-blue-600">{savedTravelers.length}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-yellow-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Kids (0-12)</p>
                <p className="text-lg font-bold text-yellow-600">
                  {savedTravelers.filter(t => t.ageGroup === 'kids').length}
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Teens (13-18)</p>
                <p className="text-lg font-bold text-purple-600">
                  {savedTravelers.filter(t => t.ageGroup === 'teens').length}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Adults (19-59)</p>
                <p className="text-lg font-bold text-green-600">
                  {savedTravelers.filter(t => t.ageGroup === 'adults').length}
                </p>
              </div>
              <div className="p-3 bg-teal-50 rounded-xl">
                <p className="text-xs text-gray-600 mb-1">Seniors (60+)</p>
                <p className="text-lg font-bold text-teal-600">
                  {savedTravelers.filter(t => t.ageGroup === 'seniors').length}
                </p>
              </div>
            </div>

            <div className="p-3 bg-red-50 rounded-xl">
              <p className="text-xs text-gray-600 mb-1">Special Care Needs</p>
              <p className="text-lg font-bold text-red-600">
                {savedTravelers.filter(t => t.mobilityAssistance || t.medicalConditions.length > 0).length} travelers
              </p>
            </div>

            <div className="p-3 bg-orange-50 rounded-xl">
              <p className="text-xs text-gray-600 mb-1">Dietary Restrictions</p>
              <p className="text-lg font-bold text-orange-600">
                {savedTravelers.filter(t => t.dietaryRestrictions.length > 0).length} travelers
              </p>
            </div>
          </div>
        </div>

        {/* Travelers List */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4">Traveler Details</h2>
          <div className="space-y-3">
            {savedTravelers.map((traveler, index) => (
              <div key={traveler.id} className="p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900">{traveler.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {traveler.age} years
                      </span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {traveler.relation}
                      </span>
                      {traveler.mobilityAssistance && (
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                          Mobility Support
                        </span>
                      )}
                      {traveler.medicalConditions.length > 0 && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                          {traveler.medicalConditions.length} Medical Condition(s)
                        </span>
                      )}
                      {traveler.dietaryRestrictions.length > 0 && (
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                          {traveler.dietaryRestrictions.length} Dietary Restriction(s)
                        </span>
                      )}
                      {traveler.interests.length > 0 && (
                        <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                          {traveler.interests.length} Interest(s)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={() => setStep('form')}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Edit Traveler Details
          </button>
          <button
            onClick={handleReset}
            className="w-full bg-gray-200 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-300 transition-colors"
          >
            Start Over
          </button>
        </div>

        {/* Next Steps Info */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border-2 border-blue-200">
          <h3 className="font-bold text-sm text-blue-900 mb-2">✨ What Happens Next?</h3>
          <ul className="text-xs text-gray-700 space-y-1">
            <li>• Our AI will personalize activities based on age groups</li>
            <li>• Special care arrangements will be made proactively</li>
            <li>• Meals will be customized for dietary needs</li>
            <li>• Itinerary will match everyone's interests</li>
            <li>• Emergency contacts kept on file for safety</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
