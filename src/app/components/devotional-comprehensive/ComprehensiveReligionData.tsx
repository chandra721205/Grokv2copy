// ========================================
// COMPREHENSIVE DEVOTIONAL TOURISM DATA
// Ultra-Detailed Religion Information
// All 9 Non-Hindu Religions
// ========================================

export interface SacredText {
  id: string;
  name: string;
  description: string;
  useInItinerary: boolean;
  category: 'primary' | 'secondary' | 'supplementary';
}

export interface Ritual {
  id: string;
  name: string;
  description: string;
  duration: string;
  frequency: string;
  requirements: string[];
  seniorFriendly: boolean;
  accessibility: string;
  bestTime: string;
}

export interface Festival {
  id: string;
  name: string;
  dateInfo: string;
  duration: string;
  significance: string;
  crowdLevel: 'low' | 'medium' | 'high' | 'very-high';
  servicesAvailable: string[];
  keyLocations: string[];
  specialRequirements: string[];
}

export interface PilgrimageCircuit {
  id: string;
  name: string;
  sites: string[];
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  bestSeason: string;
  accessibility: string;
  highlights: string[];
}

export interface SpecialFeature {
  id: string;
  category: string;
  title: string;
  details: string[];
  importance: 'critical' | 'important' | 'optional';
}

export interface ReligionComprehensiveData {
  id: string;
  name: string;
  emoji: string;
  color: string;
  overview: {
    description: string;
    coreBeliefs: string[];
    pilgrimageImportance: string;
  };
  sacredTexts: SacredText[];
  keyRituals: Ritual[];
  specialDays: Festival[];
  pilgrimageCircuits: PilgrimageCircuit[];
  specialFeatures: SpecialFeature[];
  practicalInfo: {
    dressCode: string[];
    foodRestrictions: string[];
    photographyRules: string[];
    entryRestrictions: string[];
    seniorCareNotes: string[];
  };
}

// ========================================
// ☬ SIKH DEVOTEES - COMPLETE DATA
// ========================================

export const sikhDevoteesData: ReligionComprehensiveData = {
  id: 'sikh',
  name: 'Sikh Devotees',
  emoji: '☬',
  color: '#FFA726',
  
  overview: {
    description: '[Admin: Edit] Sikhism is a monotheistic faith founded in Punjab in the 15th century by Guru Nanak Dev Ji. It emphasizes devotion to God, equality of all people, and selfless service.',
    coreBeliefs: [
      '[Admin: Edit] Belief in one God (Ik Onkar)',
      '[Admin: Edit] Equality of all humans regardless of caste, creed, or gender',
      '[Admin: Edit] Selfless service (Seva) and community sharing (Langar)',
      '[Admin: Edit] Honest living and meditation on God\'s name',
    ],
    pilgrimageImportance: '[Admin: Edit] Pilgrimage to the Five Takhts and historic Gurdwaras connects Sikhs to their spiritual heritage and the lives of the Gurus.',
  },

  sacredTexts: [
    {
      id: 'sikh-text-1',
      name: '[Admin: Edit] Guru Granth Sahib',
      description: '[Admin: Edit] The eternal Guru and central scripture of Sikhism, containing 1,430 pages of hymns and teachings from Sikh Gurus and other saints',
      useInItinerary: true,
      category: 'primary',
    },
    {
      id: 'sikh-text-2',
      name: '[Admin: Edit] Dasam Granth',
      description: '[Admin: Edit] Compilation of writings attributed to Guru Gobind Singh Ji, including Jaap Sahib and Chaupai Sahib prayers',
      useInItinerary: true,
      category: 'secondary',
    },
    {
      id: 'sikh-text-3',
      name: '[Admin: Edit] Janamsakhis',
      description: '[Admin: Edit] Biographical accounts of Guru Nanak\'s life and travels',
      useInItinerary: false,
      category: 'supplementary',
    },
  ],

  keyRituals: [
    {
      id: 'sikh-ritual-1',
      name: '[Admin: Edit] Amrit Sanchar',
      description: '[Admin: Edit] Sikh initiation ceremony into the Khalsa (community of baptized Sikhs)',
      duration: '2-3 hours',
      frequency: 'Once in lifetime (can be renewed)',
      requirements: [
        '[Admin: Edit] Must be performed at a Gurdwara by 5 baptized Sikhs',
        '[Admin: Edit] Requires commitment to follow Sikh code of conduct',
        '[Admin: Edit] Involves drinking Amrit (sanctified water)',
      ],
      seniorFriendly: true,
      accessibility: 'Seated ceremony, accessible for most',
      bestTime: 'Early morning (Amrit Vela)',
    },
    {
      id: 'sikh-ritual-2',
      name: '[Admin: Edit] Akhand Path',
      description: '[Admin: Edit] Continuous 48-hour reading of Guru Granth Sahib',
      duration: '48 hours non-stop',
      frequency: 'On special occasions or by request',
      requirements: [
        '[Admin: Edit] Book with Gurdwara management 1-2 weeks in advance',
        '[Admin: Edit] Family members can participate in reading',
        '[Admin: Edit] Karah Prasad (sacred sweet) distributed at completion',
      ],
      seniorFriendly: true,
      accessibility: 'Can be attended at any time during the 48 hours',
      bestTime: 'Starts and ends in early morning',
    },
    {
      id: 'sikh-ritual-3',
      name: '[Admin: Edit] Kirtan',
      description: '[Admin: Edit] Devotional singing of Gurbani (hymns from Guru Granth Sahib)',
      duration: '1-3 hours',
      frequency: 'Daily at Gurdwaras',
      requirements: [
        '[Admin: Edit] Open to all, no prior knowledge needed',
        '[Admin: Edit] Sit on floor with covered head',
      ],
      seniorFriendly: true,
      accessibility: 'Cushions available for seating',
      bestTime: 'Morning (Asa Di Var) and evening sessions',
    },
    {
      id: 'sikh-ritual-4',
      name: '[Admin: Edit] Langar Seva',
      description: '[Admin: Edit] Volunteering in community kitchen serving free meals to all',
      duration: '2-4 hours',
      frequency: 'Daily opportunity',
      requirements: [
        '[Admin: Edit] Cover head, wash hands',
        '[Admin: Edit] Follow kitchen hygiene protocols',
        '[Admin: Edit] No special skills required',
      ],
      seniorFriendly: true,
      accessibility: 'Various tasks available based on mobility',
      bestTime: 'Meal preparation times: 9 AM - 12 PM, 5 PM - 8 PM',
    },
    {
      id: 'sikh-ritual-5',
      name: '[Admin: Edit] Ardas',
      description: '[Admin: Edit] Standing prayer offered before and after all ceremonies',
      duration: '5-10 minutes',
      frequency: 'Multiple times daily',
      requirements: [
        '[Admin: Edit] Stand with folded hands (if able)',
        '[Admin: Edit] Head must be covered',
      ],
      seniorFriendly: true,
      accessibility: 'Seating allowed if standing is difficult',
      bestTime: 'After every religious program',
    },
  ],

  specialDays: [
    {
      id: 'sikh-festival-1',
      name: '[Admin: Edit] Vaisakhi',
      dateInfo: '[Admin: April 13-14 annually]',
      duration: '1-3 days of celebrations',
      significance: '[Admin: Edit] Birth of the Khalsa by Guru Gobind Singh Ji in 1699; also harvest festival',
      crowdLevel: 'very-high',
      servicesAvailable: [
        '[Admin: Edit] Special Nagar Kirtan (street procession)',
        '[Admin: Edit] Extended Langar services',
        '[Admin: Edit] Gatka martial arts demonstrations',
        '[Admin: Edit] Cultural programs and competitions',
      ],
      keyLocations: [
        '[Admin-Added Destination: Golden Temple, Amritsar]',
        '[Admin-Added Destination: Anandpur Sahib]',
        '[Admin-Added Destination: Takht Sri Keshgarh Sahib]',
      ],
      specialRequirements: [
        '[Admin: Edit] Book accommodation 2-3 months in advance',
        '[Admin: Edit] Expect 3-5x normal crowds',
        '[Admin: Edit] Security checks may be extensive',
      ],
    },
    {
      id: 'sikh-festival-2',
      name: '[Admin: Edit] Guru Nanak Jayanti (Gurpurab)',
      dateInfo: '[Admin: Kartik Purnima - November (full moon day)]',
      duration: '3 days',
      significance: '[Admin: Edit] Birth anniversary of Guru Nanak Dev Ji, founder of Sikhism',
      crowdLevel: 'very-high',
      servicesAvailable: [
        '[Admin: Edit] Prabhat Pheri (early morning processions)',
        '[Admin: Edit] Akhand Path (48-hour continuous reading)',
        '[Admin: Edit] Community Langar for hundreds of thousands',
        '[Admin: Edit] Kirtan Darbars (devotional music sessions)',
      ],
      keyLocations: [
        '[Admin-Added Destination: Golden Temple, Amritsar]',
        '[Admin-Added Destination: Nankana Sahib (Pakistan - special visa needed)]',
        '[Admin-Added Destination: Kartarpur Corridor]',
      ],
      specialRequirements: [
        '[Admin: Edit] Prabhat Pheri starts 4-5 AM (bring warm clothes in November)',
        '[Admin: Edit] Wheelchair services available but book in advance',
        '[Admin: Edit] Mobile charging stations limited - bring power banks',
      ],
    },
    {
      id: 'sikh-festival-3',
      name: '[Admin: Edit] Hola Mohalla',
      dateInfo: '[Admin: Day after Holi - March (lunar calendar)]',
      duration: '3 days',
      significance: '[Admin: Edit] Sikh martial arts festival started by Guru Gobind Singh Ji',
      crowdLevel: 'high',
      servicesAvailable: [
        '[Admin: Edit] Gatka (Sikh martial arts) displays',
        '[Admin: Edit] Horse riding demonstrations',
        '[Admin: Edit] Mock battles and archery',
        '[Admin: Edit] Community feasts and parades',
      ],
      keyLocations: [
        '[Admin-Added Destination: Anandpur Sahib]',
        '[Admin-Added Destination: Keshgarh Sahib]',
      ],
      specialRequirements: [
        '[Admin: Edit] Held in hilly terrain - comfortable walking shoes essential',
        '[Admin: Edit] Weather can be unpredictable - layers recommended',
      ],
    },
    {
      id: 'sikh-festival-4',
      name: '[Admin: Edit] Bandi Chhor Divas',
      dateInfo: '[Admin: Same day as Diwali - October/November]',
      duration: '1 day',
      significance: '[Admin: Edit] Celebrates Guru Hargobind Ji\'s release from imprisonment',
      crowdLevel: 'very-high',
      servicesAvailable: [
        '[Admin: Edit] Golden Temple illuminated with thousands of lights',
        '[Admin: Edit] Fireworks displays',
        '[Admin: Edit] Special kirtan programs',
      ],
      keyLocations: [
        '[Admin-Added Destination: Golden Temple, Amritsar]',
        '[Admin-Added Destination: Gwalior Fort]',
      ],
      specialRequirements: [
        '[Admin: Edit] Best viewed in evening (5 PM onwards)',
        '[Admin: Edit] Crowds similar to Diwali levels',
      ],
    },
  ],

  pilgrimageCircuits: [
    {
      id: 'sikh-circuit-1',
      name: '[Admin: Edit] Five Takhts Circuit',
      sites: [
        '[Admin-Added Site: Akal Takht - Amritsar]',
        '[Admin-Added Site: Takht Sri Keshgarh Sahib - Anandpur Sahib]',
        '[Admin-Added Site: Takht Sri Damdama Sahib - Talwandi Sabo]',
        '[Admin-Added Site: Takht Sri Patna Sahib - Bihar]',
        '[Admin-Added Site: Takht Sri Hazur Sahib - Nanded, Maharashtra]',
      ],
      duration: '10-14 days',
      difficulty: 'moderate',
      bestSeason: '[Admin: October to March]',
      accessibility: 'All sites wheelchair accessible with assistance',
      highlights: [
        '[Admin: Edit] Visit all 5 seats of Sikh temporal authority',
        '[Admin: Edit] Experience Sikh history across India',
        '[Admin: Edit] Participate in daily ceremonies at each Takht',
      ],
    },
    {
      id: 'sikh-circuit-2',
      name: '[Admin: Edit] Golden Temple Complex Circuit',
      sites: [
        '[Admin-Added Site: Golden Temple (Harmandir Sahib)]',
        '[Admin-Added Site: Partition Museum]',
        '[Admin-Added Site: Jallianwala Bagh]',
        '[Admin-Added Site: Durgiana Temple]',
        '[Admin-Added Site: Gobindgarh Fort]',
      ],
      duration: '2-3 days',
      difficulty: 'easy',
      bestSeason: '[Admin: Year-round, avoid peak summer (May-June)]',
      accessibility: 'Excellent wheelchair access throughout',
      highlights: [
        '[Admin: Edit] Stay in Golden Temple guest accommodation',
        '[Admin: Edit] Participate in Sarovar (holy pool) bathing',
        '[Admin: Edit] Volunteer in world\'s largest community kitchen',
      ],
    },
    {
      id: 'sikh-circuit-3',
      name: '[Admin: Edit] Hemkund Sahib Trek',
      sites: [
        '[Admin-Added Site: Hemkund Sahib - Uttarakhand]',
        '[Admin-Added Site: Valley of Flowers]',
        '[Admin-Added Site: Govindghat base]',
      ],
      duration: '4-6 days',
      difficulty: 'challenging',
      bestSeason: '[Admin: June to September only (snow-free)]',
      accessibility: 'Helicopter services available; pony/palanquin for partial route',
      highlights: [
        '[Admin: Edit] High-altitude pilgrimage (4,632m / 15,197 ft)',
        '[Admin: Edit] Trek through Himalayan scenery',
        '[Admin: Edit] Dip in glacial Hemkund lake',
      ],
    },
  ],

  specialFeatures: [
    {
      id: 'sikh-feature-1',
      category: 'Langar Timing',
      title: '[Admin: Edit] Community Kitchen Schedules',
      details: [
        '[Admin: Edit] Golden Temple: 24/7 service, feeding 100,000+ daily',
        '[Admin: Edit] Most Gurdwaras: Breakfast 8-10 AM, Lunch 12-2 PM, Dinner 7-9 PM',
        '[Admin: Edit] Special festival days: Extended hours and increased capacity',
        '[Admin: Edit] All meals 100% vegetarian and free for everyone',
      ],
      importance: 'critical',
    },
    {
      id: 'sikh-feature-2',
      category: 'Sarovar Bathing',
      title: '[Admin: Edit] Holy Pool (Sarovar) Timings & Protocol',
      details: [
        '[Admin: Edit] Golden Temple Sarovar: 24/7 open',
        '[Admin: Edit] Bathing steps on all four sides',
        '[Admin: Edit] Changing rooms available',
        '[Admin: Edit] Early morning (4-6 AM) preferred for devotional bathing',
        '[Admin: Edit] Women: modest swimwear or undergarments, full cover-up',
      ],
      importance: 'important',
    },
    {
      id: 'sikh-feature-3',
      category: 'Dress Code',
      title: '[Admin: Edit] Head Covering & Dress Requirements',
      details: [
        '[Admin: Edit] MANDATORY: Head covering for all (men, women, children)',
        '[Admin: Edit] Scarves/bandanas provided free at Gurdwara entrance',
        '[Admin: Edit] Shoulders and knees should be covered',
        '[Admin: Edit] Remove shoes before entering Gurdwara premises',
        '[Admin: Edit] Wash feet at provided water taps',
      ],
      importance: 'critical',
    },
    {
      id: 'sikh-feature-4',
      category: 'Shoes-Off Zones',
      title: '[Admin: Edit] Footwear Management',
      details: [
        '[Admin: Edit] Free shoe deposit counters at all Gurdwaras',
        '[Admin: Edit] Token system - keep your token safe',
        '[Admin: Edit] Socks permitted inside (floors cleaned regularly)',
        '[Admin: Edit] Some outdoor areas allow footwear - marked clearly',
      ],
      importance: 'critical',
    },
  ],

  practicalInfo: {
    dressCode: [
      '[Admin: Edit] Head covering MANDATORY for all',
      '[Admin: Edit] Modest clothing - shoulders and knees covered',
      '[Admin: Edit] Remove shoes before entering Gurdwara',
      '[Admin: Edit] Avoid leather items near prayer halls',
      '[Admin: Edit] Clean socks recommended for walking barefoot',
    ],
    foodRestrictions: [
      '[Admin: Edit] All Langar food is 100% vegetarian',
      '[Admin: Edit] No alcohol or tobacco on Gurdwara premises',
      '[Admin: Edit] No eggs in any Gurdwara food',
      '[Admin: Edit] Onions/garlic may be excluded in some Gurdwaras',
    ],
    photographyRules: [
      '[Admin: Edit] Photography generally allowed in Gurdwara complexes',
      '[Admin: Edit] Be respectful - avoid flash during prayers',
      '[Admin: Edit] Do not photograph while sitting with back to Guru Granth Sahib',
      '[Admin: Edit] Selfies should be taken discreetly',
    ],
    entryRestrictions: [
      '[Admin: Edit] No entry restrictions - all faiths welcome',
      '[Admin: Edit] Must remove shoes and cover head',
      '[Admin: Edit] Intoxicated persons not permitted',
      '[Admin: Edit] Weapons not allowed (except Kirpan for baptized Sikhs)',
    ],
    seniorCareNotes: [
      '[Admin: Edit] Wheelchair ramps at most major Gurdwaras',
      '[Admin: Edit] Wheelchairs available on request at Golden Temple',
      '[Admin: Edit] Palanquin (doli) service at Hemkund Sahib',
      '[Admin: Edit] Seating arrangements available during long ceremonies',
      '[Admin: Edit] Volunteers assist elderly with shoe deposit and navigation',
    ],
  },
};

// ========================================
// ✝️ CHRISTIAN PILGRIMS - COMPLETE DATA
// ========================================

export const christianPilgrimsData: ReligionComprehensiveData = {
  id: 'christian',
  name: 'Christian Pilgrims',
  emoji: '✝️',
  color: '#64B5F6',
  
  overview: {
    description: '[Admin: Edit] Christianity is based on the life and teachings of Jesus Christ, emphasizing love, forgiveness, and salvation through faith.',
    coreBeliefs: [
      '[Admin: Edit] Belief in one God in Trinity (Father, Son, Holy Spirit)',
      '[Admin: Edit] Jesus Christ as Savior and Son of God',
      '[Admin: Edit] Salvation through faith and grace',
      '[Admin: Edit] Love for God and neighbor as core commandment',
    ],
    pilgrimageImportance: '[Admin: Edit] Pilgrimage connects believers to the historical life of Christ and the saints, deepening faith through prayer and reflection at sacred sites.',
  },

  sacredTexts: [
    {
      id: 'christian-text-1',
      name: '[Admin: Edit] The Holy Bible',
      description: '[Admin: Edit] Old Testament (Hebrew scriptures) and New Testament (life and teachings of Jesus Christ)',
      useInItinerary: true,
      category: 'primary',
    },
    {
      id: 'christian-text-2',
      name: '[Admin: Edit] Apocrypha / Deuterocanonical Books',
      description: '[Admin: Edit] Additional books recognized by Catholic and Orthodox traditions',
      useInItinerary: false,
      category: 'secondary',
    },
  ],

  keyRituals: [
    {
      id: 'christian-ritual-1',
      name: '[Admin: Edit] Mass / Eucharist',
      description: '[Admin: Edit] Central act of worship commemorating the Last Supper',
      duration: '45 minutes - 1.5 hours',
      frequency: 'Daily (Sunday is primary)',
      requirements: [
        '[Admin: Edit] Modest dress (shoulders and knees covered)',
        '[Admin: Edit] Non-Catholics may attend but not receive communion',
        '[Admin: Edit] Arrive 10-15 minutes early',
      ],
      seniorFriendly: true,
      accessibility: 'Seating provided throughout',
      bestTime: 'Sunday morning; weekday evenings 6-7 PM',
    },
    {
      id: 'christian-ritual-2',
      name: '[Admin: Edit] Confession / Reconciliation',
      description: '[Admin: Edit] Sacrament of penance and forgiveness of sins',
      duration: '10-30 minutes',
      frequency: 'By appointment or scheduled times',
      requirements: [
        '[Admin: Edit] Examination of conscience beforehand',
        '[Admin: Edit] Catholic practice (other denominations vary)',
      ],
      seniorFriendly: true,
      accessibility: 'Private confessionals or face-to-face option',
      bestTime: 'Saturday afternoons; before major feasts',
    },
    {
      id: 'christian-ritual-3',
      name: '[Admin: Edit] Stations of the Cross',
      description: '[Admin: Edit] Devotional practice commemorating Jesus\' path to crucifixion',
      duration: '30-45 minutes',
      frequency: 'Especially during Lent on Fridays',
      requirements: [
        '[Admin: Edit] Follow 14 stations in sequence',
        '[Admin: Edit] Prayer and meditation at each station',
      ],
      seniorFriendly: true,
      accessibility: 'Can be done seated if stations are in one location',
      bestTime: 'Friday evenings during Lent; Good Friday',
    },
    {
      id: 'christian-ritual-4',
      name: '[Admin: Edit] Rosary Prayer',
      description: '[Admin: Edit] Meditative prayer using beads, focusing on mysteries of Christ\'s life',
      duration: '20-30 minutes',
      frequency: 'Daily personal devotion',
      requirements: [
        '[Admin: Edit] Rosary beads helpful but not required',
        '[Admin: Edit] Can be prayed individually or in groups',
      ],
      seniorFriendly: true,
      accessibility: 'Fully accessible - seated prayer',
      bestTime: 'Any time; often after Mass',
    },
    {
      id: 'christian-ritual-5',
      name: '[Admin: Edit] Baptism',
      description: '[Admin: Edit] Sacrament of initiation into Christian faith',
      duration: '30-60 minutes',
      frequency: 'Once in lifetime',
      requirements: [
        '[Admin: Edit] Preparation classes (for adults)',
        '[Admin: Edit] Godparents (for infant baptism)',
        '[Admin: Edit] Schedule with parish priest in advance',
      ],
      seniorFriendly: true,
      accessibility: 'Adapted for mobility needs',
      bestTime: 'Easter Vigil; Sunday celebrations',
    },
  ],

  specialDays: [
    {
      id: 'christian-festival-1',
      name: '[Admin: Edit] Christmas',
      dateInfo: '[Admin: December 25 annually]',
      duration: '12 days (Christmas season)',
      significance: '[Admin: Edit] Birth of Jesus Christ',
      crowdLevel: 'very-high',
      servicesAvailable: [
        '[Admin: Edit] Midnight Mass (December 24-25)',
        '[Admin: Edit] Christmas Day Mass',
        '[Admin: Edit] Nativity scene displays',
        '[Admin: Edit] Carol services',
      ],
      keyLocations: [
        '[Admin-Added Destination: Bethlehem - Church of Nativity]',
        '[Admin-Added Destination: Vatican City - St. Peter\'s Basilica]',
        '[Admin-Added Destination: Goa - Churches of Old Goa]',
      ],
      specialRequirements: [
        '[Admin: Edit] Midnight Mass requires advance tickets at major basilicas',
        '[Admin: Edit] Extremely cold in Jerusalem - bring warm clothes',
        '[Admin: Edit] Security checks extensive',
      ],
    },
    {
      id: 'christian-festival-2',
      name: '[Admin: Edit] Easter / Resurrection Sunday',
      dateInfo: '[Admin: March-April (lunar calendar - first Sunday after full moon following spring equinox)]',
      duration: '1 week (Holy Week leading up)',
      significance: '[Admin: Edit] Resurrection of Jesus Christ - most important Christian feast',
      crowdLevel: 'very-high',
      servicesAvailable: [
        '[Admin: Edit] Palm Sunday processions',
        '[Admin: Edit] Maundy Thursday - Last Supper commemoration',
        '[Admin: Edit] Good Friday - Stations of the Cross',
        '[Admin: Edit] Easter Vigil (Saturday night)',
        '[Admin: Edit] Easter Sunday celebrations',
      ],
      keyLocations: [
        '[Admin-Added Destination: Jerusalem - Holy Sepulchre]',
        '[Admin-Added Destination: Rome - Vatican]',
        '[Admin-Added Destination: Velankanni - Our Lady of Health Shrine]',
      ],
      specialRequirements: [
        '[Admin: Edit] Holy Week events require advance planning',
        '[Admin: Edit] Easter Vigil can last 2-3 hours',
        '[Admin: Edit] Jerusalem requires months-advance booking',
      ],
    },
    {
      id: 'christian-festival-3',
      name: '[Admin: Edit] Feast of St. Thomas',
      dateInfo: '[Admin: July 3 annually]',
      duration: '1 day',
      significance: '[Admin: Edit] Commemoration of Apostle Thomas who brought Christianity to India',
      crowdLevel: 'high',
      servicesAvailable: [
        '[Admin: Edit] Special Mass at San Thome Basilica',
        '[Admin: Edit] Tomb veneration',
        '[Admin: Edit] Procession with St. Thomas relic',
      ],
      keyLocations: [
        '[Admin-Added Destination: San Thome Basilica - Chennai]',
        '[Admin-Added Destination: St. Thomas Mount - Chennai]',
      ],
      specialRequirements: [
        '[Admin: Edit] Arrive early for tomb veneration (long queues)',
        '[Admin: Edit] Procession route can be crowded - plan accordingly',
      ],
    },
    {
      id: 'christian-festival-4',
      name: '[Admin: Edit] Feast of Our Lady of Health',
      dateInfo: '[Admin: August 29 - September 8 annually]',
      duration: '10 days',
      significance: '[Admin: Edit] Annual festival at Velankanni Shrine, one of India\'s most important Marian shrines',
      crowdLevel: 'very-high',
      servicesAvailable: [
        '[Admin: Edit] 10-day novena prayers',
        '[Admin: Edit] Special healing Mass',
        '[Admin: Edit] Candlelight procession',
        '[Admin: Edit] Flag hoisting ceremony',
      ],
      keyLocations: [
        '[Admin-Added Destination: Basilica of Our Lady of Good Health - Velankanni]',
      ],
      specialRequirements: [
        '[Admin: Edit] Book accommodation 6-12 months in advance',
        '[Admin: Edit] Expect 500,000-1 million pilgrims during the festival',
        '[Admin: Edit] Special entry passes may be required for certain events',
        '[Admin: Edit] VIP darshan bookings available',
      ],
    },
  ],

  pilgrimageCircuits: [
    {
      id: 'christian-circuit-1',
      name: '[Admin: Edit] Holy Land Circuit',
      sites: [
        '[Admin-Added Site: Jerusalem - Church of Holy Sepulchre]',
        '[Admin-Added Site: Bethlehem - Church of Nativity]',
        '[Admin-Added Site: Nazareth - Basilica of Annunciation]',
        '[Admin-Added Site: Sea of Galilee]',
        '[Admin-Added Site: River Jordan baptism site]',
      ],
      duration: '7-10 days',
      difficulty: 'moderate',
      bestSeason: '[Admin: March-May, September-November]',
      accessibility: 'Most sites accessible; some challenging terrain in Old City',
      highlights: [
        '[Admin: Edit] Walk where Jesus walked',
        '[Admin: Edit] Via Dolorosa (Way of the Cross) procession',
        '[Admin: Edit] Renewal of baptismal vows at Jordan River',
      ],
    },
    {
      id: 'christian-circuit-2',
      name: '[Admin: Edit] Indian Christian Heritage Circuit',
      sites: [
        '[Admin-Added Site: Goa - Bom Jesus Basilica, Se Cathedral]',
        '[Admin-Added Site: Velankanni - Basilica of Our Lady]',
        '[Admin-Added Site: Chennai - San Thome Basilica]',
        '[Admin-Added Site: Kerala - St. Thomas Churches]',
      ],
      duration: '7-12 days',
      difficulty: 'easy',
      bestSeason: '[Admin: October to March]',
      accessibility: 'Excellent accessibility at all major sites',
      highlights: [
        '[Admin: Edit] Tomb of St. Francis Xavier (Goa)',
        '[Admin: Edit] Tomb of St. Thomas the Apostle (Chennai)',
        '[Admin: Edit] Ancient Syrian Christian traditions (Kerala)',
      ],
    },
    {
      id: 'christian-circuit-3',
      name: '[Admin: Edit] European Pilgrimage Circuit',
      sites: [
        '[Admin-Added Site: Vatican City - St. Peter\'s Basilica]',
        '[Admin-Added Site: Santiago de Compostela - Spain]',
        '[Admin-Added Site: Lourdes - France]',
        '[Admin-Added Site: Fatima - Portugal]',
      ],
      duration: '14-21 days',
      difficulty: 'moderate',
      bestSeason: '[Admin: May-September]',
      accessibility: 'Varies by site; Santiago walk can be adapted',
      highlights: [
        '[Admin: Edit] Papal audience at Vatican',
        '[Admin: Edit] Camino de Santiago pilgrimage walk',
        '[Admin: Edit] Healing waters of Lourdes',
      ],
    },
  ],

  specialFeatures: [
    {
      id: 'christian-feature-1',
      category: 'Mass Schedules',
      title: '[Admin: Edit] Daily Mass & Confession Timings',
      details: [
        '[Admin: Edit] Weekday Masses: Typically 6:30-7:30 AM and 6:00-7:00 PM',
        '[Admin: Edit] Sunday Masses: Multiple slots 7:00 AM to 7:00 PM',
        '[Admin: Edit] Confession: Usually Saturday 4:00-6:00 PM; by appointment',
        '[Admin: Edit] Adoration hours: Check with specific church',
      ],
      importance: 'critical',
    },
    {
      id: 'christian-feature-2',
      category: 'Relic Veneration',
      title: '[Admin: Edit] Saint Relic Viewing Days',
      details: [
        '[Admin: Edit] St. Francis Xavier (Goa): Exposition every 10 years (next: 2024-25)',
        '[Admin: Edit] St. Thomas relics (Chennai): July 3 feast day special viewing',
        '[Admin: Edit] Check local church calendars for special exposition dates',
      ],
      importance: 'important',
    },
    {
      id: 'christian-feature-3',
      category: 'Procession Routes',
      title: '[Admin: Edit] Procession Timings & Routes',
      details: [
        '[Admin: Edit] Velankanni: Evening candlelight procession 7:00-9:00 PM during festival',
        '[Admin: Edit] Good Friday: Via Dolorosa (Jerusalem) - multiple groups throughout day',
        '[Admin: Edit] Corpus Christi: Special processions at major churches',
      ],
      importance: 'important',
    },
    {
      id: 'christian-feature-4',
      category: 'Pilgrim Passport',
      title: '[Admin: Edit] Pilgrim Stamp Collection',
      details: [
        '[Admin: Edit] Santiago de Compostela: Obtain Credencial (passport), collect stamps',
        '[Admin: Edit] Complete 100km walk for Compostela certificate',
        '[Admin: Edit] Many churches offer pilgrim blessings and stamps',
      ],
      importance: 'optional',
    },
  ],

  practicalInfo: {
    dressCode: [
      '[Admin: Edit] Modest clothing REQUIRED: shoulders and knees covered',
      '[Admin: Edit] No shorts, short skirts, or sleeveless tops',
      '[Admin: Edit] Scarves/shawls available at entrance of major basilicas',
      '[Admin: Edit] Remove hats for men; women may keep head covering',
    ],
    foodRestrictions: [
      '[Admin: Edit] Fasting before communion (1 hour minimum)',
      '[Admin: Edit] No meat on Fridays during Lent (fish allowed)',
      '[Admin: Edit] Abstinence on Ash Wednesday and Good Friday',
    ],
    photographyRules: [
      '[Admin: Edit] Generally allowed, but NO FLASH during Mass',
      '[Admin: Edit] Some areas (altar, confessional) may be restricted',
      '[Admin: Edit] Selfies during Mass considered disrespectful',
      '[Admin: Edit] Professional photography requires permission',
    ],
    entryRestrictions: [
      '[Admin: Edit] Open to all faiths',
      '[Admin: Edit] Only baptized Catholics receive communion',
      '[Admin: Edit] Respectful silence during services',
      '[Admin: Edit] Participation in prayers/responses optional for non-Catholics',
    ],
    seniorCareNotes: [
      '[Admin: Edit] Wheelchair access at most major churches (ramps/elevators)',
      '[Admin: Edit] Priority seating for elderly and disabled',
      '[Admin: Edit] Communion can be brought to pew for those unable to walk',
      '[Admin: Edit] Basilica wheelchairs available at St. Peter\'s, Velankanni',
    ],
  },
};

// Export all religion data
export const comprehensiveReligionDatabase = {
  sikh: sikhDevoteesData,
  christian: christianPilgrimsData,
  // Muslim, Buddhist, Jain, Jewish, Bahai, Indigenous, Parsi will be added in next file
};
