// Activity Detail View - Extracted from AdventureTourismHub
// Shows detailed information about a specific adventure activity

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Globe,
  Youtube,
  Heart,
  Share2,
  Calendar,
  Users,
  Clock,
  MapPin,
  Star,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Card } from '@/app/components/ui/card';
import { toast } from 'sonner';
import {
  adventureCategories,
  safetyGuidelines,
  adventurePackages,
  difficultyLevels,
  equipmentRental,
  type AdventureActivity
} from '@/data/adventureData';

interface ActivityDetailViewProps {
  activityId: string;
  onBack: () => void;
}

export const ActivityDetailView: React.FC<ActivityDetailViewProps> = ({
  activityId,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'safety' | 'packages' | 'equipment'>('overview');
  const [saved, setSaved] = useState(false);

  // Find the activity
  const activity = adventureCategories.find(a => a.id === activityId);
  const safety = safetyGuidelines.find(s => s.category === activityId);
  const relatedPackages = adventurePackages.filter(p => 
    p.activities.includes(activityId)
  );

  if (!activity) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Activity not found</h2>
          <Button onClick={onBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  const difficultyInfo = difficultyLevels[activity.difficulty as keyof typeof difficultyLevels];

  const handleSave = () => {
    setSaved(!saved);
    toast.success(saved ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const handleShare = () => {
    toast.success('Share link copied to clipboard');
  };

  const handleGoogleSearch = () => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(activity.name + ' adventure India')}`,
      '_blank'
    );
  };

  const handleYoutubeSearch = () => {
    window.open(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(activity.name + ' India')}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Admin Banner */}
      <div className="bg-purple-600 text-white px-4 py-2 text-center text-xs font-semibold">
        🔧 Admin Editable Content - All text below can be updated
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 pt-8 pb-16 rounded-b-[2rem] relative">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Heart className={`w-5 h-5 ${saved ? 'fill-white text-white' : 'text-white'}`} />
            </button>
            <button
              onClick={handleShare}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-3xl font-bold mb-2">{activity.name}</h1>
          <p className="text-white/90 mb-4">{activity.description}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs text-white/80">Duration</span>
              </div>
              <p className="font-semibold">{activity.duration}</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs text-white/80">Min Age</span>
              </div>
              <p className="font-semibold">{activity.minAge}+ years</p>
            </div>
          </div>
        </div>
      </div>

      {/* External Search Buttons */}
      <div className="px-6 -mt-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <p className="text-sm text-gray-600 mb-3">Discover real destinations & experiences:</p>
          <div className="flex gap-3">
            <Button
              onClick={handleGoogleSearch}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              <Globe className="w-4 h-4 mr-2" />
              Google Search
            </Button>
            <Button
              onClick={handleYoutubeSearch}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-full"
            >
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </div>

      {/* Difficulty Badge */}
      {difficultyInfo && (
        <div className="px-6 mb-6">
          <Card className="p-4 border-l-4" style={{ borderColor: difficultyInfo.color }}>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 mt-0.5" style={{ color: difficultyInfo.color }} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Difficulty: {difficultyInfo.label}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{difficultyInfo.description}</p>
                <p className="text-xs text-gray-500">{difficultyInfo.requirements}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(['overview', 'safety', 'packages', 'equipment'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 mb-4">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Season & Timing</h3>
              <div className="flex flex-wrap gap-2">
                {activity.seasons.map(season => (
                  <Badge key={season} variant="outline">
                    {season}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 mb-4">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Group Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Max Group Size</p>
                    <p className="font-semibold text-gray-900">{activity.maxGroupSize} people</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Minimum Age</p>
                    <p className="font-semibold text-gray-900">{activity.minAge} years</p>
                  </div>
                </div>
              </div>
            </Card>

            {activity.certification && (
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Certification</h3>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{activity.certification}</p>
                    <p className="text-sm text-gray-600 mt-1">Required for this activity</p>
                  </div>
                </div>
              </Card>
            )}
          </motion.div>
        )}

        {activeTab === 'safety' && safety && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-lg text-gray-900">Risk Level: {safety.riskLevel}</h3>
              </div>
              <p className="text-sm text-gray-600">
                Insurance: <span className="font-semibold">{safety.insurance}</span>
              </p>
            </Card>

            <Card className="p-6 mb-4">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Required Equipment</h3>
              <div className="grid grid-cols-2 gap-2">
                {safety.equipment.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 mb-4">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Medical Requirements</h3>
              <ul className="space-y-2">
                {safety.medicalRequirements.map(req => (
                  <li key={req} className="flex items-start gap-2 text-sm text-gray-700">
                    <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </Card>

            {safety.certifications.length > 0 && (
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Required Certifications</h3>
                <ul className="space-y-2">
                  {safety.certifications.map(cert => (
                    <li key={cert} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </motion.div>
        )}

        {activeTab === 'packages' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {relatedPackages.length > 0 ? (
              <div className="space-y-4">
                {relatedPackages.map(pkg => (
                  <Card key={pkg.id} className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{pkg.name}</h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {pkg.location}
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-orange-600 mb-4">{pkg.price}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Included:</p>
                      <ul className="space-y-1">
                        {pkg.included.map(item => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                      Book Package
                    </Button>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-gray-500">No packages available for this activity yet</p>
              </Card>
            )}
          </motion.div>
        )}

        {activeTab === 'equipment' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Equipment Rental</h3>
              {equipmentRental[activityId as keyof typeof equipmentRental] ? (
                <div className="space-y-3">
                  {Object.entries(equipmentRental[activityId as keyof typeof equipmentRental]).map(([item, price]) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-900 capitalize">{item.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-semibold text-orange-600">₹{price}/day</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Equipment rental information coming soon
                </p>
              )}
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};
