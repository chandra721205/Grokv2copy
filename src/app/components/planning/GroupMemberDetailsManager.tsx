import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, User, Calendar, Heart, Utensils, Accessibility, AlertCircle, Edit2, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

// Type Definitions
export interface TravelerDetails {
  id: string;
  name: string;
  age: number;
  ageGroup: 'kids' | 'teens' | 'adults' | 'seniors';
  gender: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  relation: string;
  // Medical & Accessibility
  medicalConditions: string[];
  mobilityAssistance: boolean;
  mobilityDetails: string;
  // Dietary
  dietaryRestrictions: string[];
  allergies: string;
  // Preferences
  interests: string[];
  specialRequests: string;
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
}

interface GroupMemberDetailsManagerProps {
  totalTravelers: number;
  onSave: (travelers: TravelerDetails[]) => void;
  initialTravelers?: TravelerDetails[];
}

const AGE_GROUPS = [
  { id: 'kids', label: 'Kids (0-12 years)', emoji: '👶', color: 'bg-yellow-500' },
  { id: 'teens', label: 'Teens (13-18 years)', emoji: '🧒', color: 'bg-purple-500' },
  { id: 'adults', label: 'Adults (19-59 years)', emoji: '👨', color: 'bg-green-500' },
  { id: 'seniors', label: 'Seniors (60+ years)', emoji: '👴', color: 'bg-teal-500' },
];

const RELATION_OPTIONS = [
  'Self', 'Spouse', 'Partner', 'Parent', 'Child', 'Sibling', 
  'Grandparent', 'Grandchild', 'Friend', 'Colleague', 
  'Aunt/Uncle', 'Cousin', 'Other'
];

const MEDICAL_CONDITIONS = [
  'Diabetes', 'Heart Condition', 'Asthma', 'Arthritis', 
  'High Blood Pressure', 'Low Blood Pressure', 'Epilepsy',
  'Mental Health Condition', 'Chronic Pain', 'Other'
];

const DIETARY_RESTRICTIONS = [
  'Vegetarian', 'Vegan', 'Gluten-Free', 'Lactose Intolerant',
  'Nut Allergies', 'Seafood Allergies', 'Diabetic Diet',
  'Low Sodium', 'Halal', 'Kosher', 'Jain Food', 'Other'
];

const INTERESTS = [
  'Photography', 'Adventure', 'History', 'Culture', 'Nature',
  'Wildlife', 'Spiritual', 'Shopping', 'Food & Cuisine',
  'Architecture', 'Art & Museums', 'Music', 'Sports', 'Relaxation'
];

export function GroupMemberDetailsManager({ 
  totalTravelers, 
  onSave, 
  initialTravelers = [] 
}: GroupMemberDetailsManagerProps) {
  const [travelers, setTravelers] = useState<TravelerDetails[]>(initialTravelers);
  const [isAddingPerson, setIsAddingPerson] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [expandedTravelerId, setExpandedTravelerId] = useState<string | null>(null);

  // Form state for new/editing traveler
  const [formData, setFormData] = useState<Partial<TravelerDetails>>({
    name: '',
    age: 25,
    ageGroup: 'adults',
    gender: 'prefer-not-to-say',
    relation: 'Self',
    medicalConditions: [],
    mobilityAssistance: false,
    mobilityDetails: '',
    dietaryRestrictions: [],
    allergies: '',
    interests: [],
    specialRequests: '',
    emergencyContact: {
      name: '',
      phone: '',
      relation: ''
    }
  });

  const getAgeGroup = (age: number): 'kids' | 'teens' | 'adults' | 'seniors' => {
    if (age <= 12) return 'kids';
    if (age <= 18) return 'teens';
    if (age <= 59) return 'adults';
    return 'seniors';
  };

  const handleAgeChange = (age: number) => {
    setFormData({
      ...formData,
      age,
      ageGroup: getAgeGroup(age)
    });
  };

  const handleAddPerson = () => {
    setIsAddingPerson(true);
    setEditingId(null);
    setFormData({
      name: '',
      age: 25,
      ageGroup: 'adults',
      gender: 'prefer-not-to-say',
      relation: 'Self',
      medicalConditions: [],
      mobilityAssistance: false,
      mobilityDetails: '',
      dietaryRestrictions: [],
      allergies: '',
      interests: [],
      specialRequests: '',
      emergencyContact: {
        name: '',
        phone: '',
        relation: ''
      }
    });
  };

  const handleEditPerson = (traveler: TravelerDetails) => {
    setEditingId(traveler.id);
    setFormData(traveler);
    setIsAddingPerson(true);
  };

  const handleSavePerson = () => {
    if (!formData.name || !formData.age) {
      alert('Please fill in name and age');
      return;
    }

    const traveler: TravelerDetails = {
      id: editingId || `traveler-${Date.now()}`,
      name: formData.name!,
      age: formData.age!,
      ageGroup: formData.ageGroup!,
      gender: formData.gender!,
      relation: formData.relation!,
      medicalConditions: formData.medicalConditions || [],
      mobilityAssistance: formData.mobilityAssistance || false,
      mobilityDetails: formData.mobilityDetails || '',
      dietaryRestrictions: formData.dietaryRestrictions || [],
      allergies: formData.allergies || '',
      interests: formData.interests || [],
      specialRequests: formData.specialRequests || '',
      emergencyContact: formData.emergencyContact || { name: '', phone: '', relation: '' }
    };

    if (editingId) {
      setTravelers(travelers.map(t => t.id === editingId ? traveler : t));
    } else {
      setTravelers([...travelers, traveler]);
    }

    setIsAddingPerson(false);
    setEditingId(null);
  };

  const handleDeletePerson = (id: string) => {
    if (confirm('Are you sure you want to remove this traveler?')) {
      setTravelers(travelers.filter(t => t.id !== id));
    }
  };

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    }
    return [...array, item];
  };

  const getAgeGroupColor = (ageGroup: string) => {
    const group = AGE_GROUPS.find(g => g.id === ageGroup);
    return group?.color || 'bg-gray-500';
  };

  const getAgeGroupEmoji = (ageGroup: string) => {
    const group = AGE_GROUPS.find(g => g.id === ageGroup);
    return group?.emoji || '👤';
  };

  return (
    <div className="space-y-4">
      {/* Admin Editable Banner */}
      <div className="bg-purple-100 border-l-4 border-purple-600 p-3 rounded-r-xl">
        <p className="text-xs text-purple-900 font-medium">
          🔧 [Admin: This section title can be customized]
        </p>
      </div>

      {/* Header Section */}
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-base text-blue-900">
            <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Update This Text]</span> Group Member Details (Optional but Recommended)
          </h3>
        </div>
        
        <p className="text-xs text-gray-600 mb-4">
          <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Update This Text]</span> Adding individual details helps us plan better: age-appropriate activities, accessibility, dietary needs, etc.
        </p>

        {/* Progress Indicator */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-4 border-2 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-blue-900">
                {travelers.length} of {totalTravelers} travelers added
              </p>
              <p className="text-xs text-gray-600">
                {totalTravelers - travelers.length > 0 
                  ? `${totalTravelers - travelers.length} more to go` 
                  : 'All travelers added! ✨'}
              </p>
            </div>
            <div className="relative w-16 h-16">
              <svg className="transform -rotate-90 w-16 h-16">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#E5E7EB"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#3B82F6"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${(travelers.length / totalTravelers) * 175.93} 175.93`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">
                  {Math.round((travelers.length / totalTravelers) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Add Person Button */}
        {travelers.length < totalTravelers && !isAddingPerson && (
          <button 
            onClick={handleAddPerson}
            className="w-full border-2 border-dashed border-blue-300 bg-blue-50 text-blue-600 py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Update This Text]</span> Add Person
          </button>
        )}

        <p className="text-xs text-gray-500 text-center mt-3">
          <span className="bg-gray-100 px-2 py-1 rounded">[Admin: Update This Text]</span> Click "Add Person" to provide details for each traveler
        </p>
      </div>

      {/* Travelers List */}
      {travelers.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-gray-700 px-2">Added Travelers</h4>
          {travelers.map((traveler, index) => (
            <motion.div
              key={traveler.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className={`w-12 h-12 ${getAgeGroupColor(traveler.ageGroup)} rounded-full flex items-center justify-center text-white text-xl flex-shrink-0`}>
                    {getAgeGroupEmoji(traveler.ageGroup)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-gray-900 truncate">{traveler.name}</h5>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {traveler.age} years
                          </span>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                            {traveler.relation}
                          </span>
                          {traveler.mobilityAssistance && (
                            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full flex items-center gap-1">
                              <Accessibility className="w-3 h-3" />
                              Mobility Support
                            </span>
                          )}
                          {traveler.medicalConditions.length > 0 && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              Medical
                            </span>
                          )}
                          {traveler.dietaryRestrictions.length > 0 && (
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full flex items-center gap-1">
                              <Utensils className="w-3 h-3" />
                              Dietary
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditPerson(traveler)}
                          className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                          aria-label="Edit traveler"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePerson(traveler.id)}
                          className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors"
                          aria-label="Delete traveler"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setExpandedTravelerId(expandedTravelerId === traveler.id ? null : traveler.id)}
                      className="mt-2 text-xs text-blue-600 font-medium flex items-center gap-1 hover:text-blue-700"
                    >
                      {expandedTravelerId === traveler.id ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          View Full Details
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedTravelerId === traveler.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200 space-y-3"
                    >
                      {traveler.medicalConditions.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Medical Conditions:</p>
                          <p className="text-xs text-gray-600">{traveler.medicalConditions.join(', ')}</p>
                        </div>
                      )}
                      {traveler.mobilityDetails && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Mobility Details:</p>
                          <p className="text-xs text-gray-600">{traveler.mobilityDetails}</p>
                        </div>
                      )}
                      {traveler.dietaryRestrictions.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Dietary Restrictions:</p>
                          <p className="text-xs text-gray-600">{traveler.dietaryRestrictions.join(', ')}</p>
                        </div>
                      )}
                      {traveler.allergies && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Allergies:</p>
                          <p className="text-xs text-gray-600">{traveler.allergies}</p>
                        </div>
                      )}
                      {traveler.interests.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Interests:</p>
                          <div className="flex flex-wrap gap-1">
                            {traveler.interests.map((interest, idx) => (
                              <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {traveler.specialRequests && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Special Requests:</p>
                          <p className="text-xs text-gray-600">{traveler.specialRequests}</p>
                        </div>
                      )}
                      {traveler.emergencyContact.name && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Emergency Contact:</p>
                          <p className="text-xs text-gray-600">
                            {traveler.emergencyContact.name} ({traveler.emergencyContact.relation}) - {traveler.emergencyContact.phone}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add/Edit Person Modal */}
      <AnimatePresence>
        {isAddingPerson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setIsAddingPerson(false)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {editingId ? 'Edit Traveler Details' : 'Add Traveler Details'}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    Fill in as much detail as possible for personalized planning
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingPerson(false)}
                  className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    Basic Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleAgeChange(parseInt(e.target.value) || 0)}
                        min="0"
                        max="120"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Age Group: {AGE_GROUPS.find(g => g.id === formData.ageGroup)?.label}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Relation to You</label>
                      <select
                        value={formData.relation}
                        onChange={(e) => setFormData({ ...formData, relation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm"
                      >
                        {RELATION_OPTIONS.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Medical & Accessibility */}
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-gray-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    Medical & Accessibility
                  </h4>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Medical Conditions</label>
                    <div className="grid grid-cols-2 gap-2">
                      {MEDICAL_CONDITIONS.map(condition => (
                        <label key={condition} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.medicalConditions?.includes(condition)}
                            onChange={() => setFormData({
                              ...formData,
                              medicalConditions: toggleArrayItem(formData.medicalConditions || [], condition)
                            })}
                            className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600"
                          />
                          <span className="text-xs text-gray-700">{condition}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.mobilityAssistance}
                        onChange={(e) => setFormData({ ...formData, mobilityAssistance: e.target.checked })}
                        className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600"
                      />
                      <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Accessibility className="w-4 h-4 text-teal-600" />
                        Requires Mobility Assistance
                      </span>
                    </label>
                  </div>

                  {formData.mobilityAssistance && (
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Mobility Details</label>
                      <textarea
                        value={formData.mobilityDetails}
                        onChange={(e) => setFormData({ ...formData, mobilityDetails: e.target.value })}
                        placeholder="Specify mobility needs (wheelchair, walker, gentle pace, etc.)"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm resize-none"
                        rows={2}
                      />
                    </div>
                  )}
                </div>

                {/* Dietary Preferences */}
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-gray-700 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-orange-600" />
                    Dietary Preferences
                  </h4>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                    <div className="grid grid-cols-2 gap-2">
                      {DIETARY_RESTRICTIONS.map(restriction => (
                        <label key={restriction} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.dietaryRestrictions?.includes(restriction)}
                            onChange={() => setFormData({
                              ...formData,
                              dietaryRestrictions: toggleArrayItem(formData.dietaryRestrictions || [], restriction)
                            })}
                            className="w-4 h-4 rounded border-2 border-gray-300 text-orange-600"
                          />
                          <span className="text-xs text-gray-700">{restriction}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Allergies & Food Sensitivities</label>
                    <textarea
                      value={formData.allergies}
                      onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                      placeholder="List any specific food allergies or sensitivities"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm resize-none"
                      rows={2}
                    />
                  </div>
                </div>

                {/* Interests & Preferences */}
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-gray-700 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    Interests & Preferences
                  </h4>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Travel Interests</label>
                    <div className="grid grid-cols-2 gap-2">
                      {INTERESTS.map(interest => (
                        <label key={interest} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.interests?.includes(interest)}
                            onChange={() => setFormData({
                              ...formData,
                              interests: toggleArrayItem(formData.interests || [], interest)
                            })}
                            className="w-4 h-4 rounded border-2 border-gray-300 text-pink-600"
                          />
                          <span className="text-xs text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Special Requests</label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Any special requests or preferences for this traveler"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm resize-none"
                      rows={2}
                    />
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    Emergency Contact (Optional)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.emergencyContact?.name}
                        onChange={(e) => setFormData({
                          ...formData,
                          emergencyContact: { ...formData.emergencyContact!, name: e.target.value }
                        })}
                        placeholder="Contact name"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.emergencyContact?.phone}
                        onChange={(e) => setFormData({
                          ...formData,
                          emergencyContact: { ...formData.emergencyContact!, phone: e.target.value }
                        })}
                        placeholder="Phone number"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Relation</label>
                      <input
                        type="text"
                        value={formData.emergencyContact?.relation}
                        onChange={(e) => setFormData({
                          ...formData,
                          emergencyContact: { ...formData.emergencyContact!, relation: e.target.value }
                        })}
                        placeholder="Relation"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50 flex gap-3">
                <button
                  onClick={() => setIsAddingPerson(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePerson}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {editingId ? 'Update Traveler' : 'Add Traveler'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Save All Button */}
      {travelers.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200">
          <button
            onClick={() => onSave(travelers)}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
          >
            Save {travelers.length} Traveler{travelers.length > 1 ? 's' : ''} & Continue
          </button>
          <p className="text-xs text-gray-600 text-center mt-2">
            You can always edit these details later
          </p>
        </div>
      )}
    </div>
  );
}
