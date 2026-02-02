// ============================================
// HERITAGE & CULTURAL TOURISM DATA
// ============================================
// Centralized data for all heritage components
// Admin-editable placeholders throughout

export interface HeritageSite {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface HeritageTheme {
  id: string;
  icon: string;
  label: string;
  name: string;
  description: string;
  specificInterests: string[];
}

export interface HeritageCircuit {
  id: string;
  name: string;
  description: string;
  destinations: string[];
  duration: string;
  highlights: string[];
}

export interface HeritageTour {
  id: string;
  name: string;
  type: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  inclusions: string[];
}

// ============================================
// HERITAGE THEMES WITH SPECIFIC INTERESTS
// ============================================

export const heritageThemes: HeritageTheme[] = [
  {
    id: 'unesco-sites',
    icon: '🏛️',
    label: '[Admin: UNESCO Sites]',
    name: '[Admin: UNESCO World Heritage Sites]',
    description: '[Admin: Explore globally recognized heritage marvels]',
    specificInterests: [
      '[Admin: Taj Mahal, Agra]',
      '[Admin: Red Fort, Delhi]',
      '[Admin: Qutub Minar, Delhi]',
      '[Admin: Hampi, Karnataka]',
      '[Admin: Ajanta Caves, Maharashtra]',
      '[Admin: Ellora Caves, Maharashtra]',
      '[Admin: Khajuraho Temples, Madhya Pradesh]',
      '[Admin: Konark Sun Temple, Odisha]',
      '[Admin: Mahabodhi Temple, Bihar]',
      '[Admin: Sanchi Stupa, Madhya Pradesh]',
      '[Admin: Fatehpur Sikri, Uttar Pradesh]',
      '[Admin: Humayun\'s Tomb, Delhi]',
      '[Admin: Agra Fort, Uttar Pradesh]',
      '[Admin: Chhatrapati Shivaji Terminus, Mumbai]',
      '[Admin: Churches & Convents of Goa]',
      '[Admin: Group of Monuments at Pattadakal, Karnataka]',
      '[Admin: Rock Shelters of Bhimbetka, Madhya Pradesh]',
      '[Admin: Champaner-Pavagadh, Gujarat]',
      '[Admin: Rani Ki Vav, Gujarat]',
      '[Admin: Jaipur City, Rajasthan]'
    ]
  },
  {
    id: 'archaeological',
    icon: '🏺',
    label: '[Admin: Archaeological]',
    name: '[Admin: Archaeological Sites & Monuments]',
    description: '[Admin: Ancient ruins, excavations, historical monuments]',
    specificInterests: [
      '[Admin: Mohenjo-daro Style Sites]',
      '[Admin: Harappan Civilization Sites]',
      '[Admin: Ancient Temple Ruins]',
      '[Admin: Fort Excavations]',
      '[Admin: Buddhist Archaeological Sites]',
      '[Admin: Jain Temple Complexes]',
      '[Admin: Megalithic Sites]',
      '[Admin: Rock-Cut Architecture]',
      '[Admin: Ancient Trade Route Sites]',
      '[Admin: Prehistoric Cave Paintings]',
      '[Admin: Ancient Universities (Nalanda, Takshashila)]',
      '[Admin: Maritime Archaeological Sites]',
      '[Admin: Ancient Port Cities]',
      '[Admin: Stone Inscriptions & Edicts]',
      '[Admin: Ancient Water Structures]'
    ]
  },
  {
    id: 'festivals',
    icon: '🎭',
    label: '[Admin: Festivals]',
    name: '[Admin: Cultural Festivals & Events]',
    description: '[Admin: Experience vibrant traditional celebrations]',
    specificInterests: [
      '[Admin: Diwali Celebrations (Various Cities)]',
      '[Admin: Pushkar Mela, Rajasthan]',
      '[Admin: Hornbill Festival, Nagaland]',
      '[Admin: Kumbh Mela (Prayagraj, Haridwar, Nashik, Ujjain)]',
      '[Admin: Durga Puja, West Bengal]',
      '[Admin: Ganesh Chaturthi, Maharashtra]',
      '[Admin: Onam Festival, Kerala]',
      '[Admin: Pongal, Tamil Nadu]',
      '[Admin: Rath Yatra, Puri]',
      '[Admin: Hemis Festival, Ladakh]',
      '[Admin: Thrissur Pooram, Kerala]',
      '[Admin: Holi Celebrations (Mathura, Vrindavan)]',
      '[Admin: Navratri & Garba, Gujarat]',
      '[Admin: Baisakhi, Punjab]',
      '[Admin: Losar Festival, Tibetan New Year]',
      '[Admin: Surajkund Crafts Mela, Haryana]',
      '[Admin: Marwar Festival, Jodhpur]',
      '[Admin: Desert Festival, Jaisalmer]',
      '[Admin: Bihu Festival, Assam]',
      '[Admin: Tarnetar Fair, Gujarat]'
    ]
  },
  {
    id: 'craft-villages',
    icon: '🎨',
    label: '[Admin: Craft Villages]',
    name: '[Admin: Traditional Craft Villages]',
    description: '[Admin: Witness master artisans at work]',
    specificInterests: [
      '[Admin: Raghurajpur (Pattachitra), Odisha]',
      '[Admin: Channapatna (Wooden Toys), Karnataka]',
      '[Admin: Pochampally (Ikat Weaving), Telangana]',
      '[Admin: Kalamkari Villages, Andhra Pradesh]',
      '[Admin: Blue Pottery Workshops, Jaipur]',
      '[Admin: Pashmina Weaving, Kashmir]',
      '[Admin: Madhubani Painting Villages, Bihar]',
      '[Admin: Warli Art Villages, Maharashtra]',
      '[Admin: Kanchipuram Silk Weavers, Tamil Nadu]',
      '[Admin: Banarasi Silk Weaving, Varanasi]',
      '[Admin: Kutch Embroidery Villages, Gujarat]',
      '[Admin: Terracotta Villages, West Bengal]',
      '[Admin: Metal Craft Villages, Moradabad]',
      '[Admin: Bidriware Artisans, Karnataka]',
      '[Admin: Phulkari Embroidery, Punjab]',
      '[Admin: Bamboo & Cane Craft Villages, Northeast]',
      '[Admin: Meenakari Workshops, Jaipur]',
      '[Admin: Dhokra Metal Casting Villages]',
      '[Admin: Handmade Paper Villages, Rajasthan]',
      '[Admin: Stone Carving Villages, Rajasthan]'
    ]
  },
  {
    id: 'living-heritage',
    icon: '🕉️',
    label: '[Admin: Living Heritage]',
    name: '[Admin: Living Heritage Traditions]',
    description: '[Admin: Experience continuing cultural practices]',
    specificInterests: [
      '[Admin: Temple Rituals & Aarti Ceremonies]',
      '[Admin: Classical Dance Forms (Bharatanatyam, Kathak, Odissi)]',
      '[Admin: Classical Music Traditions]',
      '[Admin: Vedic Chanting & Recitations]',
      '[Admin: Traditional Theatre (Kathakali, Yakshagana)]',
      '[Admin: Folk Music & Dance Traditions]',
      '[Admin: Sufi Music & Qawwali Traditions]',
      '[Admin: Martial Arts (Kalaripayattu, Thang-Ta)]',
      '[Admin: Traditional Healing Practices]',
      '[Admin: Ancient Meditation Traditions]',
      '[Admin: Traditional Cuisine & Cooking Methods]',
      '[Admin: Hand-Loom Weaving Demonstrations]',
      '[Admin: Traditional Architecture Styles]',
      '[Admin: Folk Storytelling Traditions]',
      '[Admin: Traditional Astronomy & Astrology]',
      '[Admin: Sacred Rituals & Ceremonies]',
      '[Admin: Traditional Festival Celebrations]',
      '[Admin: Indigenous Tribal Traditions]',
      '[Admin: Pastoral & Agricultural Traditions]',
      '[Admin: Traditional Market Systems]'
    ]
  },
  {
    id: 'heritage-circuits',
    icon: '🗺️',
    label: '[Admin: Circuits]',
    name: '[Admin: Heritage Circuits & Trails]',
    description: '[Admin: Multi-destination heritage journeys]',
    specificInterests: [
      '[Admin: Golden Triangle (Delhi-Agra-Jaipur)]',
      '[Admin: Buddhist Circuit (Bihar, UP, Nepal)]',
      '[Admin: Rajasthan Heritage Circuit]',
      '[Admin: South Indian Temple Circuit]',
      '[Admin: Mughal Heritage Trail]',
      '[Admin: Deccan Heritage Circuit]',
      '[Admin: Northeast Tribal Heritage Trail]',
      '[Admin: Coastal Heritage Circuit (West Coast)]',
      '[Admin: Himalayan Heritage Trail]',
      '[Admin: Punjab Heritage Circuit (Sikh Heritage)]',
      '[Admin: Goa Heritage Circuit]',
      '[Admin: Kerala Backwater Heritage Trail]',
      '[Admin: Ajanta-Ellora-Daulatabad Circuit]',
      '[Admin: Khajuraho-Orchha-Gwalior Circuit]',
      '[Admin: Hampi-Badami-Aihole Circuit]',
      '[Admin: Konkan Heritage Trail]',
      '[Admin: Ladakh Buddhist Circuit]',
      '[Admin: Uttarakhand Temple Circuit]',
      '[Admin: Chhattisgarh Tribal Heritage Circuit]',
      '[Admin: Odisha Temple & Tribal Circuit]'
    ]
  }
];

// ============================================
// GROUP PROFILE OPTIONS
// ============================================

export const travelingAsOptions = [
  { id: 'individual', label: '[Admin: Individual Traveler]', icon: '👤' },
  { id: 'couple', label: '[Admin: Couple]', icon: '👥' },
  { id: 'family-small', label: '[Admin: Family (3-5 members)]', icon: '👨‍👩‍👧' },
  { id: 'family-large', label: '[Admin: Family (6+ members)]', icon: '👨‍👩‍👧‍👦' },
  { id: 'friends-small', label: '[Admin: Friends Group (3-8)]', icon: '🎭' },
  { id: 'friends-large', label: '[Admin: Friends Group (9+)]', icon: '🎪' },
  { id: 'corporate', label: '[Admin: Corporate Group]', icon: '💼' },
  { id: 'school-college', label: '[Admin: School/College Group]', icon: '🎓' },
  { id: 'senior-group', label: '[Admin: Senior Citizens Group]', icon: '👵' },
  { id: 'custom', label: '[Admin: Custom Group Size]', icon: '✏️' }
];

export const ageGroupOptions = [
  { id: 'children', label: '[Admin: Children (0-12)]', icon: '👶' },
  { id: 'teenagers', label: '[Admin: Teenagers (13-17)]', icon: '🧒' },
  { id: 'young-adults', label: '[Admin: Young Adults (18-35)]', icon: '🧑' },
  { id: 'adults', label: '[Admin: Adults (36-59)]', icon: '👨' },
  { id: 'seniors', label: '[Admin: Seniors (60+)]', icon: '👴' }
];

export const specialRequirements = [
  { id: 'wheelchair', label: '[Admin: Wheelchair Accessible]', icon: '♿' },
  { id: 'elderly', label: '[Admin: Elderly-Friendly Pacing]', icon: '🚶' },
  { id: 'children-activities', label: '[Admin: Children-Friendly Activities]', icon: '🎪' },
  { id: 'dietary', label: '[Admin: Special Dietary Needs]', icon: '🍽️' },
  { id: 'medical', label: '[Admin: Medical Assistance Required]', icon: '🏥' },
  { id: 'language', label: '[Admin: Specific Language Guide]', icon: '🗣️' }
];

// ============================================
// EXPERIENCE CUSTOMIZATION OPTIONS
// ============================================

export const experienceTypes = [
  { id: 'deep-dive', label: '[Admin: Deep Dive (Detailed Exploration)]', icon: '🔍', description: '[Admin: 4-6 hours per site, expert guides]' },
  { id: 'balanced', label: '[Admin: Balanced (Mix of Depth & Coverage)]', icon: '⚖️', description: '[Admin: 2-3 hours per site, moderate pace]' },
  { id: 'overview', label: '[Admin: Overview (Quick Highlights Tour)]', icon: '👁️', description: '[Admin: 1-2 hours per site, fast-paced]' },
  { id: 'photography', label: '[Admin: Photography Focused]', icon: '📸', description: '[Admin: Extra time for photo opportunities]' },
  { id: 'experiential', label: '[Admin: Experiential (Hands-on Activities)]', icon: '🎨', description: '[Admin: Workshops, interactions, experiences]' }
];

// ============================================
// TRIP INTEGRATION OPTIONS
// ============================================

export const tripLinkTypes = [
  { id: 'new-standalone', label: '[Admin: New Standalone Trip]', icon: '✨', description: '[Admin: Create a fresh heritage-only trip]' },
  { id: 'add-to-existing', label: '[Admin: Add to Existing Trip]', icon: '➕', description: '[Admin: Link with a trip you\'re planning]' },
  { id: 'multi-category', label: '[Admin: Multi-Category Combo]', icon: '🎭', description: '[Admin: Heritage + Other interests (Adventure, Wellness, etc.)]' }
];

export const dateFlexibilityOptions = [
  { id: 'exact', label: '[Admin: Exact Dates Required]', icon: '📅' },
  { id: 'flexible-3', label: '[Admin: Flexible (±3 days)]', icon: '📆' },
  { id: 'flexible-week', label: '[Admin: Flexible (±1 week)]', icon: '🗓️' },
  { id: 'month-specific', label: '[Admin: Specific Month/Season]', icon: '🌦️' },
  { id: 'open', label: '[Admin: Completely Open]', icon: '🌍' }
];

// ============================================
// HERITAGE TOUR PACKAGES
// ============================================

export const heritageTours: HeritageTour[] = [
  {
    id: 'golden-triangle',
    name: '[Admin: Golden Triangle Heritage Tour]',
    type: 'Circuit Tour',
    price: '₹45,000',
    duration: '6N/7D',
    rating: 4.9,
    reviews: 487,
    description: '[Admin: Explore Delhi-Agra-Jaipur with expert heritage guides]',
    inclusions: [
      '[Admin: UNESCO site visits]',
      '[Admin: Expert heritage guides]',
      '[Admin: Skip-the-line tickets]',
      '[Admin: Heritage hotels]',
      '[Admin: Cultural performances]'
    ]
  },
  {
    id: 'rajasthan-circuit',
    name: '[Admin: Rajasthan Royal Heritage]',
    type: 'Circuit Tour',
    price: '₹65,000',
    duration: '9N/10D',
    rating: 4.8,
    reviews: 356,
    description: '[Admin: Forts, palaces, and desert heritage]',
    inclusions: [
      '[Admin: 8 major forts & palaces]',
      '[Admin: Desert cultural experience]',
      '[Admin: Palace hotel stays]',
      '[Admin: Folk music & dance]',
      '[Admin: Traditional cuisine]'
    ]
  },
  {
    id: 'south-temples',
    name: '[Admin: South Indian Temple Circuit]',
    type: 'Religious Heritage',
    price: '₹52,000',
    duration: '7N/8D',
    rating: 4.7,
    reviews: 298,
    description: '[Admin: Dravidian architecture and temple traditions]',
    inclusions: [
      '[Admin: 12 major temples]',
      '[Admin: Temple architecture tours]',
      '[Admin: Ritual participation]',
      '[Admin: Classical dance shows]',
      '[Admin: South Indian cuisine]'
    ]
  },
  {
    id: 'buddhist-circuit',
    name: '[Admin: Buddhist Pilgrimage Circuit]',
    type: 'Religious Heritage',
    price: '₹38,000',
    duration: '5N/6D',
    rating: 4.6,
    reviews: 234,
    description: '[Admin: Follow the path of Buddha]',
    inclusions: [
      '[Admin: 6 major Buddhist sites]',
      '[Admin: Meditation sessions]',
      '[Admin: Monastery visits]',
      '[Admin: Buddhist ceremonies]',
      '[Admin: Spiritual guides]'
    ]
  },
  {
    id: 'craft-villages',
    name: '[Admin: Artisan Craft Villages Tour]',
    type: 'Experiential',
    price: '₹42,000',
    duration: '6N/7D',
    rating: 4.8,
    reviews: 189,
    description: '[Admin: Meet master craftspeople and learn traditions]',
    inclusions: [
      '[Admin: 8 craft villages]',
      '[Admin: Hands-on workshops]',
      '[Admin: Artisan interactions]',
      '[Admin: Craft purchases]',
      '[Admin: Traditional meals]'
    ]
  },
  {
    id: 'living-heritage',
    name: '[Admin: Living Heritage Experience]',
    type: 'Experiential',
    price: '₹48,000',
    duration: '7N/8D',
    rating: 4.7,
    reviews: 245,
    description: '[Admin: Immerse in continuing cultural traditions]',
    inclusions: [
      '[Admin: Classical arts performances]',
      '[Admin: Ritual participation]',
      '[Admin: Traditional cooking classes]',
      '[Admin: Music & dance workshops]',
      '[Admin: Cultural homestays]'
    ]
  }
];

// ============================================
// CONCESSION CATEGORIES
// ============================================

export const concessionCategories = [
  {
    id: 'students',
    label: '[Admin: Students]',
    icon: '🎓',
    discount: '50%',
    requirements: '[Admin: Valid student ID required]',
    benefits: [
      '[Admin: Archaeological Survey of India: 50% off entry]',
      '[Admin: State Tourism: 30% off guided tours]',
      '[Admin: Museum entry: Free or heavily discounted]'
    ]
  },
  {
    id: 'seniors',
    label: '[Admin: Senior Citizens]',
    icon: '👴',
    discount: '40%',
    requirements: '[Admin: Age 60+ with ID proof]',
    benefits: [
      '[Admin: Monument entry: 40% discount]',
      '[Admin: Priority queues at major sites]',
      '[Admin: Discounted heritage walks]'
    ]
  },
  {
    id: 'children',
    label: '[Admin: Children]',
    icon: '👶',
    discount: 'Free/50%',
    requirements: '[Admin: Age below 15 years]',
    benefits: [
      '[Admin: Under 5: Free entry]',
      '[Admin: 5-15 years: 50% discount]',
      '[Admin: Special children\'s guides available]'
    ]
  },
  {
    id: 'groups',
    label: '[Admin: School/College Groups]',
    icon: '🎒',
    discount: '60%',
    requirements: '[Admin: Min. 10 students with teacher]',
    benefits: [
      '[Admin: Group discount up to 60%]',
      '[Admin: Free guide for groups 20+]',
      '[Admin: Educational material provided]'
    ]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getThemeById(id: string): HeritageTheme | undefined {
  return heritageThemes.find(theme => theme.id === id);
}

export function getAllHeritageThemes(): HeritageTheme[] {
  return heritageThemes;
}

export function getToursByType(type: string): HeritageTour[] {
  return heritageTours.filter(tour => tour.type === type);
}

export function searchHeritageSites(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  const results: string[] = [];
  
  heritageThemes.forEach(theme => {
    theme.specificInterests.forEach(interest => {
      if (interest.toLowerCase().includes(lowerQuery)) {
        results.push(interest);
      }
    });
  });
  
  return results;
}
