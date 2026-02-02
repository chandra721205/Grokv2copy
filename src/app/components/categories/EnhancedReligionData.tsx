// ========================================
// ENHANCED RELIGION DATA WITH NEW SECTIONS
// Adds: Sacred Context, Divine Calendar, Ritual Participation, Cultural Insights
// ========================================

export interface RitualBooking {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  requirements?: string[];
  availableTimes?: string[];
  icon: string;
}

export interface UpcomingOccasion {
  id: string;
  name: string;
  date: string;
  dateRange: string;
  type: 'festival' | 'special-day' | 'ritual-time';
  description: string;
  bookingRequired: boolean;
  icon: string;
  color: string;
}

export interface CulturalInsight {
  id: string;
  title: string;
  message: string;
  type: 'crowd-alert' | 'timing' | 'requirement' | 'tip' | 'restriction';
  icon: string;
  priority: 'high' | 'medium' | 'low';
}

export const enhancedReligionData = {
  // ========================================
  // ☬ SIKH DEVOTEES
  // ========================================
  sikh: {
    sectionName: 'Seva & Simran',
    sectionSubtitle: 'Participate in Sacred Service & Meditation',
    sectionIcon: '🙏',
    
    sacredTextReference: {
      quote: 'Ik Onkar Satnam Karta Purakh Nirbhau Nirvair',
      translation: 'One Universal Creator, Truth is His Name, Creative Being, Without Fear, Without Hatred',
      source: 'Guru Granth Sahib - Mool Mantar (Page 1)',
      context: 'The opening verse and fundamental belief of Sikhism',
    },

    ritualBookings: [
      {
        id: 'sikh-ritual-1',
        name: 'Book Langar Seva',
        description: 'Participate in community kitchen service',
        duration: '2-4 hours',
        price: '[Admin: Free (Voluntary Service)]',
        requirements: ['Head covering required', 'Comfortable clothing', 'Arrive 30 min early'],
        availableTimes: ['6:00 AM - 10:00 AM', '12:00 PM - 3:00 PM', '6:00 PM - 9:00 PM'],
        icon: '🍽️',
      },
      {
        id: 'sikh-ritual-2',
        name: 'Palki Sahib Ceremony',
        description: 'Witness the ceremonial procession of Guru Granth Sahib',
        duration: '1 hour',
        price: '[Admin: Free (Open to all)]',
        requirements: ['Remove shoes', 'Head covering mandatory', 'Maintain silence'],
        availableTimes: ['Morning: 4:00 AM', 'Evening: 9:00 PM'],
        icon: '📖',
      },
      {
        id: 'sikh-ritual-3',
        name: 'Akhand Path Booking',
        description: 'Sponsor 48-hour continuous recitation of Guru Granth Sahib',
        duration: '48 hours (non-stop)',
        price: '[Admin: ₹11,000 - ₹21,000]',
        requirements: ['Advance booking (7 days)', 'Family participation welcome', 'Karah prasad included'],
        availableTimes: ['Flexible start time (coordinate with Granthi)'],
        icon: '🕉️',
      },
      {
        id: 'sikh-ritual-4',
        name: 'Wheelchair for Parikrama',
        description: 'Senior care - wheelchair assistance for temple circumambulation',
        duration: 'As needed',
        price: '[Admin: Free / Donation]',
        requirements: ['Book 48 hours in advance', 'Attendant provided', 'Ramps available'],
        availableTimes: ['6:00 AM - 10:00 PM'],
        icon: '♿',
      },
    ],

    upcomingOccasions: [
      {
        id: 'sikh-occasion-1',
        name: 'Guru Nanak Jayanti (Gurpurab)',
        date: '[Admin: Kartik Purnima - November]',
        dateRange: 'November (Full Moon)',
        type: 'festival',
        description: 'Birth anniversary of Guru Nanak Dev Ji - 3-day celebrations',
        bookingRequired: true,
        icon: '🌟',
        color: 'from-yellow-400 to-amber-500',
      },
      {
        id: 'sikh-occasion-2',
        name: 'Vaisakhi / Baisakhi',
        date: '[Admin: April 13/14]',
        dateRange: 'April 13-14',
        type: 'festival',
        description: 'Birth of Khalsa - Major festival at Anandpur Sahib',
        bookingRequired: true,
        icon: '⚔️',
        color: 'from-orange-400 to-red-500',
      },
      {
        id: 'sikh-occasion-3',
        name: 'Amrit Vela (Morning Prayer)',
        date: '[Admin: Daily]',
        dateRange: 'Daily 3:00 AM - 6:00 AM',
        type: 'ritual-time',
        description: 'Most auspicious time for meditation and prayers',
        bookingRequired: false,
        icon: '🌅',
        color: 'from-blue-400 to-indigo-500',
      },
    ],

    culturalInsights: [
      {
        id: 'sikh-insight-1',
        title: 'Crowd Alert: Vaisakhi Peak Season',
        message: 'Vaisakhi (April) sees 3x footfall at Golden Temple and Anandpur Sahib. Book accommodation 3 months prior. Wheelchair services must be reserved 2 weeks in advance.',
        type: 'crowd-alert',
        icon: '⚠️',
        priority: 'high',
      },
      {
        id: 'sikh-insight-2',
        title: 'Palki Sahib Ceremony Timings',
        message: 'The Palki Sahib (palanquin) ceremony occurs twice daily: 4:00 AM (morning) when Guru Granth Sahib is brought to the sanctum, and 9:00 PM (evening) when it\'s taken for rest. Arrive 30 minutes early.',
        type: 'timing',
        icon: '⏰',
        priority: 'high',
      },
      {
        id: 'sikh-insight-3',
        title: 'Langar Protocol',
        message: 'Everyone sits on the floor during Langar to maintain equality. No distinction of caste, creed, or religion. Head covering is mandatory for all visitors.',
        type: 'requirement',
        icon: 'ℹ️',
        priority: 'medium',
      },
      {
        id: 'sikh-insight-4',
        title: 'Weather & Best Visiting Season',
        message: 'October to March offers pleasant weather for North India Gurdwaras. Summer (April-June) can be extremely hot (40°C+). Monsoon (July-September) sees fewer crowds.',
        type: 'tip',
        icon: '🌤️',
        priority: 'medium',
      },
    ],
  },

  // ========================================
  // ✝️ CHRISTIAN PILGRIMS
  // ========================================
  christian: {
    sectionName: 'Mass & Novena',
    sectionSubtitle: 'Participate in Sacred Liturgy & Prayer',
    sectionIcon: '✝️',
    
    sacredTextReference: {
      quote: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
      translation: 'John 3:16',
      source: 'The Holy Bible - New Testament',
      context: 'Central message of Christian faith and salvation',
    },

    ritualBookings: [
      {
        id: 'christian-ritual-1',
        name: 'Select Mass Language',
        description: 'Attend Holy Mass in your preferred language',
        duration: '1 hour',
        price: '[Admin: Free (Offerings welcome)]',
        requirements: ['Modest dress code', 'Arrive 15 min early', 'Silence during service'],
        availableTimes: ['English: 8:00 AM, 6:00 PM', 'Tamil: 9:30 AM', 'Konkani: 7:00 AM (Goa)'],
        icon: '⛪',
      },
      {
        id: 'christian-ritual-2',
        name: 'Candle Lighting Request',
        description: 'Light prayer candles for intentions',
        duration: 'Flexible',
        price: '[Admin: ₹50 - ₹200 per candle]',
        requirements: ['Written intention slip', 'Available at prayer candle stand', 'Church timings only'],
        availableTimes: ['6:00 AM - 8:00 PM'],
        icon: '🕯️',
      },
      {
        id: 'christian-ritual-3',
        name: 'Novena Enrollment',
        description: 'Join 9-day prayer novena for special intentions',
        duration: '9 days',
        price: '[Admin: Free / Voluntary offering]',
        requirements: ['Register at parish office', 'Daily attendance recommended', 'Novena booklet provided'],
        availableTimes: ['Check with specific shrine/church'],
        icon: '📿',
      },
      {
        id: 'christian-ritual-4',
        name: 'Feast Day Participation',
        description: 'Attend special feast day celebrations',
        duration: 'Full day',
        price: '[Admin: Free]',
        requirements: ['Book procession spot early', 'Cultural programs included', 'Community meals provided'],
        availableTimes: ['Feast day specific - see calendar'],
        icon: '🎊',
      },
    ],

    upcomingOccasions: [
      {
        id: 'christian-occasion-1',
        name: 'Christmas Midnight Mass',
        date: '[Admin: December 24-25]',
        dateRange: 'December 24, 11:00 PM',
        type: 'festival',
        description: 'Celebration of the birth of Jesus Christ',
        bookingRequired: true,
        icon: '🎄',
        color: 'from-green-500 to-red-600',
      },
      {
        id: 'christian-occasion-2',
        name: 'Feast of St. Francis Xavier',
        date: '[Admin: December 3]',
        dateRange: 'December 3 (with 9-day novena)',
        type: 'special-day',
        description: 'Exposition of relics at Bom Jesus Basilica, Goa',
        bookingRequired: true,
        icon: '🕊️',
        color: 'from-amber-400 to-orange-500',
      },
      {
        id: 'christian-occasion-3',
        name: 'Feast of Our Lady of Good Health',
        date: '[Admin: September 8]',
        dateRange: 'August 29 - September 8 (10-day festival)',
        type: 'festival',
        description: 'Velankanni Church annual festival',
        bookingRequired: true,
        icon: '🌸',
        color: 'from-blue-400 to-cyan-500',
      },
    ],

    culturalInsights: [
      {
        id: 'christian-insight-1',
        title: 'September 8th Special Entry Passes',
        message: 'September 8th (Feast of Our Lady of Good Health at Velankanni) requires booking special entry passes. Festival draws 500,000+ pilgrims. Accommodation must be booked 6 months in advance.',
        type: 'crowd-alert',
        icon: '⚠️',
        priority: 'high',
      },
      {
        id: 'christian-insight-2',
        title: 'Dress Code Requirements',
        message: 'Churches require modest dress: shoulders covered, no shorts/short skirts. Shawls available at entrance. Remove footwear only if indicated (most Catholic churches allow shoes).',
        type: 'requirement',
        icon: '👔',
        priority: 'high',
      },
      {
        id: 'christian-insight-3',
        title: 'Mass Timing Variations',
        message: 'Sunday Masses have more frequent timings. Weekday Masses are typically early morning (7 AM) or evening (6 PM). Confirm timings with specific church 24 hours prior.',
        type: 'timing',
        icon: '⏰',
        priority: 'medium',
      },
    ],
  },

  // ========================================
  // ☪️ MUSLIM TRAVELERS
  // ========================================
  muslim: {
    sectionName: 'Ziyarat & Ibadat',
    sectionSubtitle: 'Pilgrimage & Worship Services',
    sectionIcon: '🕌',
    
    sacredTextReference: {
      quote: 'Indeed, the first House [of worship] established for mankind was that at Makkah - blessed and a guidance for the worlds.',
      translation: 'Surah Al-Imran (3:96)',
      source: 'The Holy Quran',
      context: 'On the significance of sacred pilgrimage sites',
    },

    ritualBookings: [
      {
        id: 'muslim-ritual-1',
        name: 'Chadar Offering',
        description: 'Offer ceremonial cloth at Sufi saint\'s tomb',
        duration: '30 minutes',
        price: '[Admin: ₹500 - ₹5,000 (size/material dependent)]',
        requirements: ['Choose size (6ft, 9ft, 12ft)', 'Silk/Cotton/Embroidered options', 'Can be personalized with family name'],
        availableTimes: ['After each prayer time', 'Special slot during Urs'],
        icon: '🧵',
      },
      {
        id: 'muslim-ritual-2',
        name: 'Qawwali Session Timings',
        description: 'Attend Sufi devotional music performances',
        duration: '2-3 hours',
        price: '[Admin: Free / Donations accepted]',
        requirements: ['Seated floor arrangement', 'Respectful silence between performances', 'Photography restricted'],
        availableTimes: ['Thursday evenings: 8:00 PM - 11:00 PM', 'Daily during Urs: 7:00 PM onwards'],
        icon: '🎵',
      },
      {
        id: 'muslim-ritual-3',
        name: 'Jumma Namaz Space Reservation',
        description: 'Reserve prayer space for Friday congregational prayers',
        duration: '1.5 hours',
        price: '[Admin: Free]',
        requirements: ['Wudu (ablution) area available', 'Arrive 30 min before', 'Separate women\'s section'],
        availableTimes: ['Friday: 1:00 PM - 2:30 PM (varies by location)'],
        icon: '🙏',
      },
      {
        id: 'muslim-ritual-4',
        name: 'Deg Contribution (Digital)',
        description: 'Contribute to large cooking pot for community feeding',
        duration: 'One-time',
        price: '[Admin: ₹1,100 / ₹2,100 / ₹5,100]',
        requirements: ['Online payment available', 'Receipt for tax purposes', 'Name announced during Fateha'],
        availableTimes: ['Anytime (processed daily)'],
        icon: '🍲',
      },
    ],

    upcomingOccasions: [
      {
        id: 'muslim-occasion-1',
        name: 'Urs of Khwaja Moinuddin Chishti',
        date: '[Admin: Rajab 1-6 (Islamic Calendar)]',
        dateRange: 'Rajab 1-6 (varies yearly)',
        type: 'festival',
        description: 'Annual Urs at Ajmer Sharif - 6-day celebration',
        bookingRequired: true,
        icon: '🌙',
        color: 'from-green-400 to-emerald-600',
      },
      {
        id: 'muslim-occasion-2',
        name: 'Ramadan & Eid-ul-Fitr',
        date: '[Admin: Ramadan month + Shawwal 1]',
        dateRange: '30 days fasting + Eid day',
        type: 'festival',
        description: 'Iftaar at Dargahs, special Taraweeh prayers',
        bookingRequired: false,
        icon: '🌙',
        color: 'from-teal-400 to-cyan-500',
      },
      {
        id: 'muslim-occasion-3',
        name: 'Shab-e-Barat (Night of Forgiveness)',
        date: '[Admin: 15 Shaban]',
        dateRange: 'Mid-Shaban',
        type: 'special-day',
        description: 'Night prayers, grave visits, charity distribution',
        bookingRequired: false,
        icon: '🌟',
        color: 'from-blue-500 to-indigo-600',
      },
    ],

    culturalInsights: [
      {
        id: 'muslim-insight-1',
        title: 'Digital Deg Contribution',
        message: 'Visiting Ajmer Sharif? Deg (large cooking pot) contribution can be arranged digitally. Choose from ₹1,100, ₹2,100, or ₹5,100 tiers. Your name will be announced during Fateha prayers.',
        type: 'tip',
        icon: '💳',
        priority: 'high',
      },
      {
        id: 'muslim-insight-2',
        title: 'Ramadan Food Timing',
        message: 'During Ramadan, food stalls open at sunset (Maghrib prayer time). Many Dargahs offer free Iftaar. Suhoor (pre-dawn meal) available 4:00 AM - 5:30 AM.',
        type: 'timing',
        icon: '🍽️',
        priority: 'high',
      },
      {
        id: 'muslim-insight-3',
        title: 'Urs Peak Crowd Management',
        message: 'Urs of Khwaja Moinuddin Chishti (Rajab 1-6) draws 500,000+ pilgrims. Book accommodation 2-3 months prior. VIP darshan passes available for ₹200-500.',
        type: 'crowd-alert',
        icon: '⚠️',
        priority: 'high',
      },
      {
        id: 'muslim-insight-4',
        title: 'Head Covering & Respectful Attire',
        message: 'Both men and women should cover heads at Dargahs. Women: full sleeves, long skirts/pants. Scarves available at entrance. Remove shoes at designated points.',
        type: 'requirement',
        icon: '🧕',
        priority: 'medium',
      },
    ],
  },

  // ========================================
  // ☸️ BUDDHIST FOLLOWERS
  // ========================================
  buddhist: {
    sectionName: 'Dhamma & Meditation',
    sectionSubtitle: 'Path of Enlightenment & Mindfulness',
    sectionIcon: '☸️',
    
    sacredTextReference: {
      quote: 'Better than a thousand hollow words, is one word that brings peace.',
      translation: 'Dhammapada 100',
      source: 'Tripitaka - Sutta Pitaka (Dhammapada)',
      context: 'On the value of meaningful spiritual practice',
    },

    ritualBookings: [
      {
        id: 'buddhist-ritual-1',
        name: 'Meditation Under Bodhi Tree',
        description: 'Book session at Mahabodhi Temple Bodh Gaya',
        duration: '1-2 hours',
        price: '[Admin: Free / Donation]',
        requirements: ['Silence strictly maintained', 'Cushions provided', 'Guided sessions available'],
        availableTimes: ['Early morning: 4:00 AM - 6:00 AM', 'Evening: 5:00 PM - 7:00 PM'],
        icon: '🧘',
      },
      {
        id: 'buddhist-ritual-2',
        name: 'Robes Offering (Kathina)',
        description: 'Offer robes to monks during Kathina ceremony',
        duration: '2 hours',
        price: '[Admin: ₹1,500 - ₹5,000 per robe]',
        requirements: ['Book during Kathina season (Oct-Nov)', 'Yellow/Maroon robes available', 'Certificate of merit provided'],
        availableTimes: ['Kathina ceremony day (check monastery)'],
        icon: '👘',
      },
      {
        id: 'buddhist-ritual-3',
        name: 'Chanting Ceremony Participation',
        description: 'Join morning/evening chanting rituals',
        duration: '45 minutes',
        price: '[Admin: Free]',
        requirements: ['Pali/Tibetan chant books provided', 'Follow along or listen silently', 'Prostrations optional'],
        availableTimes: ['Morning: 5:30 AM', 'Evening: 6:00 PM'],
        icon: '📿',
      },
      {
        id: 'buddhist-ritual-4',
        name: 'Vipassana Retreat Enrollment',
        description: '10-day intensive silent meditation retreat',
        duration: '10 days',
        price: '[Admin: Donation-based (Dhamma Dana)]',
        requirements: ['Noble silence (no talking)', 'Vegetarian meals only', 'No phones/books/writing', 'Prior registration (3 months)'],
        availableTimes: ['Monthly batches - check center calendar'],
        icon: '🕉️',
      },
    ],

    upcomingOccasions: [
      {
        id: 'buddhist-occasion-1',
        name: 'Buddha Purnima (Vesak)',
        date: '[Admin: Vaishakha Purnima - April/May]',
        dateRange: 'Full moon of Vaishakha',
        type: 'festival',
        description: 'Birth, Enlightenment, and Parinirvana of Buddha',
        bookingRequired: true,
        icon: '🌕',
        color: 'from-yellow-400 to-orange-500',
      },
      {
        id: 'buddhist-occasion-2',
        name: 'Losar (Tibetan New Year)',
        date: '[Admin: February/March]',
        dateRange: 'Tibetan lunar calendar',
        type: 'festival',
        description: 'Cham dance, prayer flags, monastery celebrations',
        bookingRequired: false,
        icon: '🎊',
        color: 'from-red-400 to-pink-500',
      },
      {
        id: 'buddhist-occasion-3',
        name: 'Asalha Puja (Dharma Day)',
        date: '[Admin: Ashadha Purnima - July]',
        dateRange: 'Full moon of Ashadha',
        type: 'special-day',
        description: 'Commemoration of Buddha\'s first sermon at Sarnath',
        bookingRequired: false,
        icon: '☸️',
        color: 'from-orange-400 to-amber-500',
      },
    ],

    culturalInsights: [
      {
        id: 'buddhist-insight-1',
        title: 'Morning Meditation Silence Zones',
        message: 'Silence zones strictly enforced during morning meditation (4 AM - 6 AM) at Mahabodhi Temple and Sarnath. Mobile phones must be switched off. Late arrivals not permitted after 4:15 AM.',
        type: 'restriction',
        icon: '🔇',
        priority: 'high',
      },
      {
        id: 'buddhist-insight-2',
        title: 'Photography Restrictions',
        message: 'Photography inside meditation halls and main shrines is prohibited. Outer courtyards and stupas allow photography without flash. Video recording requires special permission.',
        type: 'restriction',
        icon: '📵',
        priority: 'high',
      },
      {
        id: 'buddhist-insight-3',
        title: 'Clockwise Circumambulation',
        message: 'Always walk clockwise (pradakshina) around stupas and main shrines. Spinning prayer wheels should be turned clockwise. This follows Buddhist tradition.',
        type: 'requirement',
        icon: '↻',
        priority: 'medium',
      },
      {
        id: 'buddhist-insight-4',
        title: 'Best Season for Bodh Gaya',
        message: 'October to March is ideal for visiting Bodh Gaya. Buddha Purnima (April/May) sees 500,000+ pilgrims. Winter (Dec-Jan) hosts Kalachakra teachings by Dalai Lama (when announced).',
        type: 'tip',
        icon: '🌤️',
        priority: 'medium',
      },
    ],
  },

  // ========================================
  // 卐 JAIN PILGRIMS
  // ========================================
  jain: {
    sectionName: 'Tirth Yatra Services',
    sectionSubtitle: 'Pilgrimage Support & Temple Services',
    sectionIcon: '🕉️',
    
    sacredTextReference: {
      quote: 'Parasparopagraho Jivanam',
      translation: 'All life is bound together by mutual support and interdependence',
      source: 'Tattvartha Sutra 5.21',
      context: 'Fundamental principle of Jainism and interconnectedness',
    },

    ritualBookings: [
      {
        id: 'jain-ritual-1',
        name: 'Doli/Palki Booking (Palitana)',
        description: 'Essential palanquin service for 3,500+ step climb',
        duration: '4-6 hours (round trip)',
        price: '[Admin: ₹2,500 - ₹8,000 (one-way/return, weight-based)]',
        requirements: ['Book 7 days in advance (peak season)', 'Weight limit per doli', '4-8 bearers assigned', 'Insurance included'],
        availableTimes: ['Start: 6:00 AM - 9:00 AM only (must descend before sunset)'],
        icon: '🪑',
      },
      {
        id: 'jain-ritual-2',
        name: 'Ayambil Food Pre-order',
        description: 'Special Jain dietary meal (no root vegetables)',
        duration: 'Per meal',
        price: '[Admin: ₹150 - ₹300 per thali]',
        requirements: ['100% Jain sattvic', 'No onion/garlic/root vegetables', 'Before sunset only', 'Advance order (1 day)'],
        availableTimes: ['Lunch: 11:00 AM - 2:00 PM', 'Dinner: 5:00 PM - 7:00 PM (before sunset)'],
        icon: '🍽️',
      },
      {
        id: 'jain-ritual-3',
        name: 'Pooja Materials Kit',
        description: 'Complete kit for temple worship (flowers, sandalwood, etc.)',
        duration: 'One-time',
        price: '[Admin: ₹250 - ₹1,000]',
        requirements: ['Includes: flowers, sandalwood paste, rice, incense', 'No animal products', 'Reusable containers'],
        availableTimes: ['Available at temple entrance'],
        icon: '🌸',
      },
      {
        id: 'jain-ritual-4',
        name: 'Abhishek (Bathing Ritual)',
        description: 'Ceremonial bathing of Tirthankara idol',
        duration: '30 minutes',
        price: '[Admin: ₹500 - ₹2,100]',
        requirements: ['Milk, saffron, sandalwood provided', 'Guided by temple priest', 'Dates/timings fixed by temple'],
        availableTimes: ['Morning: 6:00 AM - 10:00 AM'],
        icon: '💧',
      },
    ],

    upcomingOccasions: [
      {
        id: 'jain-occasion-1',
        name: 'Chha Gau Teerth Yatra',
        date: '[Admin: Kartika Purnima - November]',
        dateRange: 'Kartik Purnima (Full Moon)',
        type: 'festival',
        description: 'Largest Jain pilgrimage to Palitana - 100,000+ pilgrims',
        bookingRequired: true,
        icon: '⛰️',
        color: 'from-yellow-400 to-amber-500',
      },
      {
        id: 'jain-occasion-2',
        name: 'Mahavir Jayanti',
        date: '[Admin: Chaitra Sud 13 - March/April]',
        dateRange: 'Chaitra month',
        type: 'festival',
        description: 'Birth anniversary of Lord Mahavir (24th Tirthankara)',
        bookingRequired: false,
        icon: '👶',
        color: 'from-orange-400 to-red-500',
      },
      {
        id: 'jain-occasion-3',
        name: 'Chaturmas (Monsoon Retreat)',
        date: '[Admin: July - October]',
        dateRange: '4 months',
        type: 'special-day',
        description: 'Palitana and Shatrunjaya temples CLOSED to visitors',
        bookingRequired: false,
        icon: '🌧️',
        color: 'from-gray-400 to-gray-600',
      },
    ],

    culturalInsights: [
      {
        id: 'jain-insight-1',
        title: 'CRITICAL: Chaturmas Temple Closure',
        message: 'Palitana temple remains CLOSED for visitors during monsoon (Chaturmas - July to October). Plan visits between November and June only. Chha Gau Teerth (Kartika Purnima) is the most auspicious time.',
        type: 'restriction',
        icon: '🚫',
        priority: 'high',
      },
      {
        id: 'jain-insight-2',
        title: 'Doli Booking Essential for Seniors',
        message: '3,500+ steps at Palitana are challenging. Doli/Palki MUST be booked 7 days in advance during peak season (Nov-Feb). Weight limits apply. One-way up, walk down recommended for able-bodied.',
        type: 'requirement',
        icon: '♿',
        priority: 'high',
      },
      {
        id: 'jain-insight-3',
        title: 'No Food/Water Allowed Uphill',
        message: 'Jain principles prohibit carrying food/water up Shatrunjaya Hill. Shops available at base and summit only. Start early (6 AM) to avoid midday heat. Descent must complete before sunset.',
        type: 'restriction',
        icon: '⏰',
        priority: 'high',
      },
      {
        id: 'jain-insight-4',
        title: 'Leather Items Prohibited',
        message: 'No leather items (belts, wallets, bags, shoes) allowed in temple premises due to ahimsa (non-violence). Lockers available at entrance. Barefoot climb mandatory.',
        type: 'restriction',
        icon: '👟',
        priority: 'medium',
      },
    ],
  },
};
