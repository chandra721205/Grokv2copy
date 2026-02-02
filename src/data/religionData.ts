// Religion Tourism Data - Consolidated from multiple Enhanced components
// This file consolidates data from:
// - AllReligionsEnhanced.tsx
// - EnhancedReligionData.tsx
// - RemainingReligionsData.tsx
// - RemainingEnhancedData.tsx
// - Individual religion component data

export interface SacredSite {
  id: string;
  name: string;
  location: string;
  significance: string;
  bestTimeToVisit: string[];
  facilities: string[];
  accessibility?: string;
  timings?: string;
}

export interface Festival {
  id: string;
  name: string;
  date: string;
  significance: string;
  activities: string[];
  duration?: string;
}

export interface Ritual {
  id: string;
  name: string;
  description: string;
  duration: string;
  requirements: string[];
  timing?: string;
}

export interface PilgrimagePackage {
  id: string;
  name: string;
  duration: string;
  sites: string[];
  price: string;
  included: string[];
  difficulty?: string;
}

export interface ReligionCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  sacredSites: SacredSite[];
  festivals: Festival[];
  rituals: Ritual[];
  packages: PilgrimagePackage[];
  sacredTexts?: string[];
  beliefs?: string[];
  practices?: string[];
}

// ===========================================
// HINDU PILGRIMS DATA
// ===========================================
export const hinduData: ReligionCategory = {
  id: 'hindu',
  name: 'Hindu Pilgrims',
  icon: '🕉️',
  color: 'orange',
  gradient: 'from-orange-500 to-red-500',
  description: '[Admin: Update Description - Hindu pilgrimage sites across India]',
  sacredSites: [
    {
      id: 'hindu-site-1',
      name: '[Admin: Sacred Site 1]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      facilities: ['Accommodation', 'Prasadam', 'Guided tours', 'Wheelchair access'],
      timings: '5:00 AM - 10:00 PM'
    },
    {
      id: 'hindu-site-2',
      name: '[Admin: Sacred Site 2]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['All Year'],
      facilities: ['Accommodation', 'Medical facilities', 'Dining hall'],
      timings: '24 hours'
    }
  ],
  festivals: [
    {
      id: 'hindu-festival-1',
      name: '[Admin: Festival Name 1]',
      date: '[Admin: Date]',
      significance: '[Admin: Significance]',
      activities: ['Puja', 'Aarti', 'Prasadam distribution'],
      duration: '3 days'
    }
  ],
  rituals: [
    {
      id: 'hindu-ritual-1',
      name: '[Admin: Ritual Name]',
      description: '[Admin: Description]',
      duration: '1-2 hours',
      requirements: ['Dress code', 'Removal of footwear'],
      timing: 'Morning & Evening'
    }
  ],
  packages: [
    {
      id: 'hindu-pkg-1',
      name: '[Admin: Pilgrimage Package 1]',
      duration: '7 days / 6 nights',
      sites: ['[Admin: Site 1]', '[Admin: Site 2]', '[Admin: Site 3]'],
      price: 'Rs.25,000 per person',
      included: ['Accommodation', 'Meals', 'Temple entry fees', 'Guide', 'Transport'],
      difficulty: 'Moderate'
    }
  ],
  sacredTexts: ['Vedas', 'Upanishads', 'Bhagavad Gita', 'Ramayana', 'Mahabharata'],
  beliefs: ['Dharma', 'Karma', 'Moksha', 'Reincarnation'],
  practices: ['Daily puja', 'Meditation', 'Yoga', 'Fasting on holy days']
};

// ===========================================
// MUSLIM TRAVELERS DATA
// ===========================================
export const muslimData: ReligionCategory = {
  id: 'muslim',
  name: 'Muslim Travelers',
  icon: '☪️',
  color: 'green',
  gradient: 'from-green-500 to-teal-500',
  description: '[Admin: Update Description - Islamic heritage sites]',
  sacredSites: [
    {
      id: 'muslim-site-1',
      name: '[Admin: Islamic Heritage Site 1]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      facilities: ['Prayer hall', 'Wudu facilities', 'Halal dining', 'Library'],
      timings: 'Prayer times'
    }
  ],
  festivals: [
    {
      id: 'muslim-festival-1',
      name: '[Admin: Islamic Festival 1]',
      date: '[Admin: Date based on lunar calendar]',
      significance: '[Admin: Significance]',
      activities: ['Prayers', 'Community gathering', 'Charity'],
      duration: '1-3 days'
    }
  ],
  rituals: [
    {
      id: 'muslim-ritual-1',
      name: 'Five Daily Prayers',
      description: 'Salah performed five times daily',
      duration: '10-15 minutes each',
      requirements: ['Wudu (ablution)', 'Qibla direction', 'Prayer mat'],
      timing: 'Fajr, Dhuhr, Asr, Maghrib, Isha'
    }
  ],
  packages: [
    {
      id: 'muslim-pkg-1',
      name: '[Admin: Islamic Heritage Tour]',
      duration: '5 days / 4 nights',
      sites: ['[Admin: Site 1]', '[Admin: Site 2]'],
      price: 'Rs.18,000 per person',
      included: ['Halal meals', 'Prayer facilities', 'Islamic guide', 'Transport'],
      difficulty: 'Easy'
    }
  ],
  sacredTexts: ['Quran', 'Hadith'],
  beliefs: ['Five Pillars of Islam', 'Tawhid (Oneness of Allah)'],
  practices: ['Five daily prayers', 'Fasting in Ramadan', 'Zakat (charity)']
};

// ===========================================
// SIKH DEVOTEES DATA
// ===========================================
export const sikhData: ReligionCategory = {
  id: 'sikh',
  name: 'Sikh Devotees',
  icon: '☬',
  color: 'blue',
  gradient: 'from-blue-500 to-indigo-500',
  description: '[Admin: Update Description - Gurudwaras and Sikh heritage]',
  sacredSites: [
    {
      id: 'sikh-site-1',
      name: '[Admin: Gurudwara Name 1]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['All Year'],
      facilities: ['Langar hall', 'Accommodation', 'Shoe storage', 'Head covering provided'],
      timings: '24 hours (Langar: 6 AM - 10 PM)'
    }
  ],
  festivals: [
    {
      id: 'sikh-festival-1',
      name: '[Admin: Sikh Festival 1]',
      date: '[Admin: Date]',
      significance: '[Admin: Significance]',
      activities: ['Kirtan', 'Langar seva', 'Processions'],
      duration: '1-3 days'
    }
  ],
  rituals: [
    {
      id: 'sikh-ritual-1',
      name: 'Daily Nitnem',
      description: 'Daily prayer routine',
      duration: '30-60 minutes',
      requirements: ['Head covering', 'Removal of footwear'],
      timing: 'Morning & Evening'
    }
  ],
  packages: [
    {
      id: 'sikh-pkg-1',
      name: '[Admin: Sikh Heritage Tour]',
      duration: '6 days / 5 nights',
      sites: ['[Admin: Gurudwara 1]', '[Admin: Gurudwara 2]', '[Admin: Gurudwara 3]'],
      price: 'Rs.20,000 per person',
      included: ['Accommodation', 'Langar meals', 'Guide', 'Transport', 'Historical tours'],
      difficulty: 'Easy'
    }
  ],
  sacredTexts: ['Guru Granth Sahib', 'Dasam Granth'],
  beliefs: ['Oneness of God', 'Equality', 'Service to humanity'],
  practices: ['Langar (community kitchen)', 'Kirtan (hymns)', 'Seva (selfless service)']
};

// ===========================================
// CHRISTIAN PILGRIMS DATA
// ===========================================
export const christianData: ReligionCategory = {
  id: 'christian',
  name: 'Christian Pilgrims',
  icon: '✝️',
  color: 'purple',
  gradient: 'from-purple-500 to-pink-500',
  description: '[Admin: Update Description - Churches and Christian heritage]',
  sacredSites: [
    {
      id: 'christian-site-1',
      name: '[Admin: Church/Basilica Name 1]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      facilities: ['Chapel', 'Confession booth', 'Gift shop', 'Museum'],
      timings: '6:00 AM - 8:00 PM'
    }
  ],
  festivals: [
    {
      id: 'christian-festival-1',
      name: '[Admin: Christian Festival 1]',
      date: '[Admin: Date]',
      significance: '[Admin: Significance]',
      activities: ['Mass', 'Prayer services', 'Community meals'],
      duration: '1-3 days'
    }
  ],
  rituals: [
    {
      id: 'christian-ritual-1',
      name: 'Holy Mass',
      description: 'Eucharistic celebration',
      duration: '45-60 minutes',
      requirements: ['Modest dress', 'Respectful silence'],
      timing: 'Sunday & daily mass'
    }
  ],
  packages: [
    {
      id: 'christian-pkg-1',
      name: '[Admin: Christian Heritage Tour]',
      duration: '4 days / 3 nights',
      sites: ['[Admin: Church 1]', '[Admin: Church 2]'],
      price: 'Rs.15,000 per person',
      included: ['Accommodation', 'Meals', 'Mass attendance', 'Guide', 'Transport'],
      difficulty: 'Easy'
    }
  ],
  sacredTexts: ['Holy Bible (Old & New Testament)'],
  beliefs: ['Trinity', 'Salvation through Jesus Christ', 'Resurrection'],
  practices: ['Sunday worship', 'Prayer', 'Sacraments', 'Bible study']
};

// ===========================================
// BUDDHIST FOLLOWERS DATA
// ===========================================
export const buddhistData: ReligionCategory = {
  id: 'buddhist',
  name: 'Buddhist Followers',
  icon: '☸️',
  color: 'yellow',
  gradient: 'from-yellow-400 to-amber-500',
  description: '[Admin: Update Description - Buddhist monasteries and stupas]',
  sacredSites: [
    {
      id: 'buddhist-site-1',
      name: '[Admin: Monastery/Stupa Name 1]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      facilities: ['Meditation hall', 'Library', 'Accommodation', 'Vegetarian dining'],
      timings: '6:00 AM - 6:00 PM'
    }
  ],
  festivals: [
    {
      id: 'buddhist-festival-1',
      name: '[Admin: Buddhist Festival 1]',
      date: '[Admin: Date based on lunar calendar]',
      significance: '[Admin: Significance]',
      activities: ['Meditation', 'Dharma talks', 'Offerings'],
      duration: '1-3 days'
    }
  ],
  rituals: [
    {
      id: 'buddhist-ritual-1',
      name: 'Meditation Practice',
      description: 'Mindfulness and concentration meditation',
      duration: '30-60 minutes',
      requirements: ['Comfortable seating', 'Quiet environment', 'Modest dress'],
      timing: 'Morning & Evening'
    }
  ],
  packages: [
    {
      id: 'buddhist-pkg-1',
      name: '[Admin: Buddhist Circuit Tour]',
      duration: '8 days / 7 nights',
      sites: ['[Admin: Site 1]', '[Admin: Site 2]', '[Admin: Site 3]', '[Admin: Site 4]'],
      price: 'Rs.28,000 per person',
      included: ['Accommodation', 'Vegetarian meals', 'Meditation sessions', 'Guide', 'Transport'],
      difficulty: 'Moderate'
    }
  ],
  sacredTexts: ['Tripitaka', 'Dhammapada'],
  beliefs: ['Four Noble Truths', 'Eightfold Path', 'Nirvana'],
  practices: ['Meditation', 'Mindfulness', 'Compassion', 'Non-violence']
};

// ===========================================
// JAIN PILGRIMS DATA
// ===========================================
export const jainData: ReligionCategory = {
  id: 'jain',
  name: 'Jain Pilgrims',
  icon: '🔱',
  color: 'emerald',
  gradient: 'from-emerald-500 to-green-600',
  description: '[Admin: Update Description - Jain temples and tirthas]',
  sacredSites: [
    {
      id: 'jain-site-1',
      name: '[Admin: Jain Temple Name 1]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      facilities: ['Temple complex', 'Pathshala', 'Dharamshala', 'Pure vegetarian dining'],
      timings: '6:00 AM - 9:00 PM'
    }
  ],
  festivals: [
    {
      id: 'jain-festival-1',
      name: '[Admin: Jain Festival 1]',
      date: '[Admin: Date]',
      significance: '[Admin: Significance]',
      activities: ['Puja', 'Pratikraman', 'Fasting'],
      duration: '1-8 days'
    }
  ],
  rituals: [
    {
      id: 'jain-ritual-1',
      name: 'Pratikraman',
      description: 'Daily repentance ritual',
      duration: '30-45 minutes',
      requirements: ['Fasting before ritual', 'Modest white clothing', 'Barefoot entry'],
      timing: 'Morning & Evening'
    }
  ],
  packages: [
    {
      id: 'jain-pkg-1',
      name: '[Admin: Jain Pilgrimage Tour]',
      duration: '5 days / 4 nights',
      sites: ['[Admin: Tirtha 1]', '[Admin: Tirtha 2]'],
      price: 'Rs.22,000 per person',
      included: ['Accommodation', 'Satvik meals', 'Temple guide', 'Transport', 'Donations included'],
      difficulty: 'Moderate'
    }
  ],
  sacredTexts: ['Agamas', 'Tattvartha Sutra'],
  beliefs: ['Ahimsa (Non-violence)', 'Anekantavada (Multiple perspectives)', 'Aparigraha (Non-attachment)'],
  practices: ['Strict vegetarianism', 'Meditation', 'Fasting', 'Pratikraman']
};

// ===========================================
// BAHAI VISITORS DATA
// ===========================================
export const bahaiData: ReligionCategory = {
  id: 'bahai',
  name: 'Bahai Visitors',
  icon: '⭐',
  color: 'sky',
  gradient: 'from-sky-400 to-blue-500',
  description: '[Admin: Update Description - Bahai Houses of Worship]',
  sacredSites: [
    {
      id: 'bahai-site-1',
      name: '[Admin: Bahai Temple Name]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['All Year'],
      facilities: ['Prayer hall', 'Gardens', 'Visitor center', 'Information desk'],
      timings: '9:00 AM - 7:00 PM'
    }
  ],
  festivals: [
    {
      id: 'bahai-festival-1',
      name: '[Admin: Bahai Holy Day]',
      date: '[Admin: Date]',
      significance: '[Admin: Significance]',
      activities: ['Prayers', 'Readings', 'Fellowship'],
      duration: '1 day'
    }
  ],
  rituals: [
    {
      id: 'bahai-ritual-1',
      name: 'Daily Obligatory Prayer',
      description: 'One of three daily prayers',
      duration: '5-15 minutes',
      requirements: ['Facing Qiblih', 'Ritual washing'],
      timing: 'Morning, noon, or evening'
    }
  ],
  packages: [
    {
      id: 'bahai-pkg-1',
      name: '[Admin: Bahai Heritage Tour]',
      duration: '3 days / 2 nights',
      sites: ['[Admin: Lotus Temple]'],
      price: 'Rs.12,000 per person',
      included: ['Accommodation', 'Meals', 'Guide', 'Transport', 'Educational materials'],
      difficulty: 'Easy'
    }
  ],
  sacredTexts: ['Kitáb-i-Aqdas', 'Hidden Words'],
  beliefs: ['Unity of God', 'Unity of Religion', 'Unity of Humanity'],
  practices: ['Daily prayer', 'Fasting', 'Service to humanity']
};

// ===========================================
// JEWISH HERITAGE DATA
// ===========================================
export const jewishData: ReligionCategory = {
  id: 'jewish',
  name: 'Jewish Heritage',
  icon: '✡️',
  color: 'blue',
  gradient: 'from-blue-600 to-indigo-600',
  description: '[Admin: Update Description - Synagogues and Jewish heritage sites]',
  sacredSites: [
    {
      id: 'jewish-site-1',
      name: '[Admin: Synagogue Name]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      facilities: ['Prayer hall', 'Kosher dining', 'Museum', 'Archive'],
      timings: 'Varies by day (closed on Shabbat)'
    }
  ],
  festivals: [
    {
      id: 'jewish-festival-1',
      name: '[Admin: Jewish Festival]',
      date: '[Admin: Date based on Hebrew calendar]',
      significance: '[Admin: Significance]',
      activities: ['Services', 'Traditional meals', 'Community gathering'],
      duration: '1-8 days'
    }
  ],
  rituals: [
    {
      id: 'jewish-ritual-1',
      name: 'Shabbat Observance',
      description: 'Weekly day of rest',
      duration: 'Sunset Friday to Saturday evening',
      requirements: ['Modest dress', 'No photography on Shabbat'],
      timing: 'Friday evening & Saturday'
    }
  ],
  packages: [
    {
      id: 'jewish-pkg-1',
      name: '[Admin: Jewish Heritage Tour]',
      duration: '4 days / 3 nights',
      sites: ['[Admin: Synagogue 1]', '[Admin: Heritage site]'],
      price: 'Rs.18,000 per person',
      included: ['Accommodation', 'Kosher meals', 'Guide', 'Transport', 'Historical tours'],
      difficulty: 'Easy'
    }
  ],
  sacredTexts: ['Torah', 'Talmud'],
  beliefs: ['Monotheism', 'Covenant with God', 'Chosen people'],
  practices: ['Shabbat observance', 'Kosher diet', 'Prayer three times daily']
};

// ===========================================
// PARSI HERITAGE DATA
// ===========================================
export const parsiData: ReligionCategory = {
  id: 'parsi',
  name: 'Parsi Heritage',
  icon: '🔥',
  color: 'orange',
  gradient: 'from-orange-600 to-red-600',
  description: '[Admin: Update Description - Fire temples and Parsi heritage]',
  sacredSites: [
    {
      id: 'parsi-site-1',
      name: '[Admin: Fire Temple Name]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['All Year'],
      facilities: ['Prayer hall', 'Sacred fire sanctuary', 'Community hall'],
      timings: '6:00 AM - 10:00 PM (entry restrictions apply)'
    }
  ],
  festivals: [
    {
      id: 'parsi-festival-1',
      name: '[Admin: Parsi Festival]',
      date: '[Admin: Date]',
      significance: '[Admin: Significance]',
      activities: ['Prayers', 'Fire rituals', 'Community feast'],
      duration: '1-5 days'
    }
  ],
  rituals: [
    {
      id: 'parsi-ritual-1',
      name: 'Kusti Ritual',
      description: 'Daily prayer with sacred thread',
      duration: '10-15 minutes',
      requirements: ['Ritual purity', 'Sacred thread (Kusti)'],
      timing: 'Multiple times daily'
    }
  ],
  packages: [
    {
      id: 'parsi-pkg-1',
      name: '[Admin: Parsi Heritage Tour]',
      duration: '3 days / 2 nights',
      sites: ['[Admin: Fire Temple]', '[Admin: Heritage site]'],
      price: 'Rs.14,000 per person',
      included: ['Accommodation', 'Meals', 'Heritage guide', 'Transport', 'Museum visits'],
      difficulty: 'Easy'
    }
  ],
  sacredTexts: ['Avesta', 'Gathas'],
  beliefs: ['Good thoughts, good words, good deeds', 'Monotheism', 'Free will'],
  practices: ['Fire worship', 'Daily prayers', 'Charity']
};

// ===========================================
// INDIGENOUS & TRIBAL DATA
// ===========================================
export const indigenousData: ReligionCategory = {
  id: 'indigenous',
  name: 'Indigenous & Tribal',
  icon: '🌿',
  color: 'green',
  gradient: 'from-green-600 to-emerald-700',
  description: '[Admin: Update Description - Tribal heritage and sacred sites]',
  sacredSites: [
    {
      id: 'indigenous-site-1',
      name: '[Admin: Sacred Natural Site]',
      location: '[Admin: Location]',
      significance: '[Admin: Update Significance]',
      bestTimeToVisit: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      facilities: ['Eco-lodges', 'Cultural center', 'Craft workshops'],
      timings: 'Dawn to dusk'
    }
  ],
  festivals: [
    {
      id: 'indigenous-festival-1',
      name: '[Admin: Tribal Festival]',
      date: '[Admin: Seasonal/Harvest date]',
      significance: '[Admin: Significance]',
      activities: ['Traditional dances', 'Rituals', 'Community gathering'],
      duration: '1-3 days'
    }
  ],
  rituals: [
    {
      id: 'indigenous-ritual-1',
      name: '[Admin: Tribal Ritual]',
      description: 'Traditional ceremonial practice',
      duration: 'Varies',
      requirements: ['Respectful observation', 'Permission from elders'],
      timing: 'Seasonal'
    }
  ],
  packages: [
    {
      id: 'indigenous-pkg-1',
      name: '[Admin: Tribal Heritage Tour]',
      duration: '5 days / 4 nights',
      sites: ['[Admin: Sacred site 1]', '[Admin: Village]'],
      price: 'Rs.16,000 per person',
      included: ['Eco-accommodation', 'Local meals', 'Cultural guide', 'Transport', 'Craft workshop'],
      difficulty: 'Moderate'
    }
  ],
  sacredTexts: ['Oral traditions', 'Folk tales'],
  beliefs: ['Nature worship', 'Ancestor veneration', 'Animism'],
  practices: ['Seasonal festivals', 'Traditional crafts', 'Sustainable living']
};

// ===========================================
// CONSOLIDATED EXPORTS
// ===========================================
export const allReligionsData: Record<string, ReligionCategory> = {
  hindu: hinduData,
  muslim: muslimData,
  sikh: sikhData,
  christian: christianData,
  buddhist: buddhistData,
  jain: jainData,
  bahai: bahaiData,
  jewish: jewishData,
  parsi: parsiData,
  indigenous: indigenousData
};

// Helper function to get all religion names
export const getAllReligionNames = (): string[] => {
  return Object.keys(allReligionsData);
};

// Helper function to get religion by ID
export const getReligionById = (id: string): ReligionCategory | undefined => {
  return allReligionsData[id];
};

// Helper function to get all festivals across religions
export const getAllFestivals = (): Festival[] => {
  return Object.values(allReligionsData).flatMap(religion => religion.festivals);
};

// Helper function to get all packages
export const getAllPackages = (): PilgrimagePackage[] => {
  return Object.values(allReligionsData).flatMap(religion => religion.packages);
};
