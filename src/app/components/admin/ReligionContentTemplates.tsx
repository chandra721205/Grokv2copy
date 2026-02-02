// ========================================
// RELIGION-SPECIFIC CONTENT TEMPLATES
// Complete Data Structures for Admin Management
// ========================================

export const RELIGION_COLOR_SCHEMES = {
  sikh: {
    primary: '#1E3A8A', // Deep blue
    secondary: '#F97316', // Saffron
    gradient: 'from-blue-900 to-orange-500',
    textLight: '#DBEAFE',
    textDark: '#1E3A8A',
  },
  christian: {
    primary: '#7C3AED', // Purple
    secondary: '#FBBF24', // Gold
    gradient: 'from-purple-600 to-yellow-500',
    textLight: '#EDE9FE',
    textDark: '#7C3AED',
  },
  muslim: {
    primary: '#059669', // Green
    secondary: '#FFFFFF', // White
    gradient: 'from-green-600 to-teal-500',
    textLight: '#D1FAE5',
    textDark: '#059669',
  },
  buddhist: {
    primary: '#EA580C', // Saffron
    secondary: '#991B1B', // Maroon
    gradient: 'from-orange-600 to-red-800',
    textLight: '#FED7AA',
    textDark: '#EA580C',
  },
  jain: {
    primary: '#FFFFFF', // White
    secondary: '#DC2626', // Red
    gradient: 'from-gray-100 to-red-600',
    textLight: '#FEE2E2',
    textDark: '#DC2626',
  },
  jewish: {
    primary: '#1D4ED8', // Blue
    secondary: '#9CA3AF', // Silver
    gradient: 'from-blue-700 to-gray-400',
    textLight: '#DBEAFE',
    textDark: '#1D4ED8',
  },
  bahai: {
    primary: '#10B981', // Green
    secondary: '#FFFFFF', // White
    gradient: 'from-green-500 to-emerald-300',
    textLight: '#D1FAE5',
    textDark: '#10B981',
  },
  indigenous: {
    primary: '#15803D', // Forest green
    secondary: '#78350F', // Brown
    gradient: 'from-green-800 to-amber-900',
    textLight: '#D1FAE5',
    textDark: '#15803D',
  },
  parsi: {
    primary: '#FFFFFF', // White
    secondary: '#FBBF24', // Gold
    gradient: 'from-yellow-100 to-yellow-600',
    textLight: '#FEF3C7',
    textDark: '#FBBF24',
  },
  hindu: {
    primary: '#EA580C', // Orange
    secondary: '#DC2626', // Red
    gradient: 'from-orange-500 to-red-600',
    textLight: '#FED7AA',
    textDark: '#EA580C',
  },
};

// ========================================
// SACRED TEXTS TEMPLATES
// ========================================

export const SACRED_TEXTS_TEMPLATES = {
  sikh: {
    primary: {
      name: '[Admin: Sikh_Text_Primary_Name]',
      language: '[Admin: Sikh_Text_Primary_Language]',
      significance: '[Admin: Sikh_Text_Primary_Significance]',
      chapters: '[Admin: Sikh_Text_Primary_Chapters]',
      associatedSites: [
        '[Admin-Added Destination 1]',
        '[Admin-Added Destination 2]',
      ],
      keyPassages: [
        {
          text: '[Admin: Sikh_Passage_1_Text]',
          context: '[Admin: Sikh_Passage_1_Context]',
          ritualUse: '[Admin: Sikh_Passage_1_RitualUse]',
        },
      ],
    },
    secondary: {
      name: '[Admin: Sikh_Text_Secondary_Name]',
      language: '[Admin: Sikh_Text_Secondary_Language]',
      significance: '[Admin: Sikh_Text_Secondary_Significance]',
    },
  },
  muslim: {
    primary: {
      name: '[Admin: Muslim_Text_Primary_Name]',
      language: '[Admin: Muslim_Text_Primary_Language]',
      significance: '[Admin: Muslim_Text_Primary_Significance]',
      chapters: '[Admin: Muslim_Text_Primary_Chapters]',
      verses: '[Admin: Muslim_Text_Primary_Verses]',
      associatedSites: [
        '[Admin-Added Destination 1]',
        '[Admin-Added Destination 2]',
      ],
      keyPassages: [
        {
          text: '[Admin: Muslim_Passage_1_Text]',
          context: '[Admin: Muslim_Passage_1_Context]',
          ritualUse: '[Admin: Muslim_Passage_1_RitualUse]',
          surahNumber: '[Admin: Muslim_Passage_1_Surah]',
          verseNumber: '[Admin: Muslim_Passage_1_Verse]',
        },
      ],
    },
  },
  christian: {
    primary: {
      name: '[Admin: Christian_Text_Primary_Name]',
      language: '[Admin: Christian_Text_Primary_Language]',
      significance: '[Admin: Christian_Text_Primary_Significance]',
      books: '[Admin: Christian_Text_Primary_Books]',
      testaments: '[Admin: Christian_Text_Primary_Testaments]',
      associatedSites: [
        '[Admin-Added Destination 1]',
        '[Admin-Added Destination 2]',
      ],
      keyPassages: [
        {
          text: '[Admin: Christian_Passage_1_Text]',
          context: '[Admin: Christian_Passage_1_Context]',
          ritualUse: '[Admin: Christian_Passage_1_RitualUse]',
          book: '[Admin: Christian_Passage_1_Book]',
          chapter: '[Admin: Christian_Passage_1_Chapter]',
          verse: '[Admin: Christian_Passage_1_Verse]',
        },
      ],
    },
  },
  buddhist: {
    primary: {
      name: '[Admin: Buddhist_Text_Primary_Name]',
      language: '[Admin: Buddhist_Text_Primary_Language]',
      significance: '[Admin: Buddhist_Text_Primary_Significance]',
      collection: '[Admin: Buddhist_Text_Primary_Collection]',
      associatedSites: [
        '[Admin-Added Destination 1]',
        '[Admin-Added Destination 2]',
      ],
      keyPassages: [
        {
          text: '[Admin: Buddhist_Passage_1_Text]',
          context: '[Admin: Buddhist_Passage_1_Context]',
          ritualUse: '[Admin: Buddhist_Passage_1_RitualUse]',
          sutra: '[Admin: Buddhist_Passage_1_Sutra]',
        },
      ],
    },
  },
  // Add templates for other religions...
};

// ========================================
// FESTIVAL CALENDAR TEMPLATES
// ========================================

export const FESTIVAL_TEMPLATES = {
  sikh: [
    {
      name: '[Admin: Sikh_Festival_1_Name]',
      dateType: 'lunar' as const,
      lunarDate: {
        month: '[Admin: Sikh_Festival_1_Month]',
        day: '[Admin: Sikh_Festival_1_Day]',
      },
      primaryLocations: [
        '[Admin-Added Destination 1]',
        '[Admin-Added Destination 2]',
      ],
      duration: '[Admin: Sikh_Festival_1_Duration]',
      crowdLevel: '[Admin: Sikh_Festival_1_CrowdLevel]' as 'low' | 'medium' | 'high' | 'extreme',
      ritualProcedures: [
        '[Admin: Sikh_Festival_1_Ritual_1]',
        '[Admin: Sikh_Festival_1_Ritual_2]',
      ],
      participationRequirements: {
        dressCode: '[Admin: Sikh_Festival_1_DressCode]',
        fasting: '[Admin: Sikh_Festival_1_Fasting]',
        restrictions: [
          '[Admin: Sikh_Festival_1_Restriction_1]',
          '[Admin: Sikh_Festival_1_Restriction_2]',
        ],
        preparations: [
          '[Admin: Sikh_Festival_1_Prep_1]',
          '[Admin: Sikh_Festival_1_Prep_2]',
        ],
      },
      description: '[Admin: Sikh_Festival_1_Description]',
    },
  ],
  muslim: [
    {
      name: '[Admin: Muslim_Festival_1_Name]',
      dateType: 'lunar' as const,
      lunarDate: {
        month: '[Admin: Muslim_Festival_1_Month]',
        day: '[Admin: Muslim_Festival_1_Day]',
      },
      primaryLocations: [
        '[Admin-Added Destination 1]',
        '[Admin-Added Destination 2]',
      ],
      duration: '[Admin: Muslim_Festival_1_Duration]',
      crowdLevel: '[Admin: Muslim_Festival_1_CrowdLevel]' as 'low' | 'medium' | 'high' | 'extreme',
      ritualProcedures: [
        '[Admin: Muslim_Festival_1_Ritual_1]',
        '[Admin: Muslim_Festival_1_Ritual_2]',
      ],
      participationRequirements: {
        dressCode: '[Admin: Muslim_Festival_1_DressCode]',
        fasting: '[Admin: Muslim_Festival_1_Fasting]',
        restrictions: [
          '[Admin: Muslim_Festival_1_Restriction_1]',
        ],
        preparations: [
          '[Admin: Muslim_Festival_1_Prep_1]',
        ],
      },
      prayerTimings: {
        fajr: '[Admin: Muslim_Festival_1_Fajr]',
        dhuhr: '[Admin: Muslim_Festival_1_Dhuhr]',
        asr: '[Admin: Muslim_Festival_1_Asr]',
        maghrib: '[Admin: Muslim_Festival_1_Maghrib]',
        isha: '[Admin: Muslim_Festival_1_Isha]',
      },
      description: '[Admin: Muslim_Festival_1_Description]',
    },
  ],
  // Add festival templates for other religions...
};

// ========================================
// RITUAL PROCEDURE TEMPLATES
// ========================================

export const RITUAL_PROCEDURE_TEMPLATES = {
  sikh: {
    prayer: {
      name: '[Admin: Sikh_Ritual_Prayer_Name]',
      type: 'prayer' as const,
      steps: [
        {
          order: 1,
          instruction: '[Admin: Sikh_Ritual_Prayer_Step1]',
          duration: '[Admin: Sikh_Ritual_Prayer_Step1_Duration]',
          materials: ['[Admin: Sikh_Ritual_Prayer_Step1_Material1]'],
        },
        {
          order: 2,
          instruction: '[Admin: Sikh_Ritual_Prayer_Step2]',
          duration: '[Admin: Sikh_Ritual_Prayer_Step2_Duration]',
        },
      ],
      timingRequirements: {
        preferredTime: '[Admin: Sikh_Ritual_Prayer_PreferredTime]',
        duration: '[Admin: Sikh_Ritual_Prayer_TotalDuration]',
        frequency: '[Admin: Sikh_Ritual_Prayer_Frequency]',
      },
      materialPreparation: [
        '[Admin: Sikh_Ritual_Prayer_Material1]',
        '[Admin: Sikh_Ritual_Prayer_Material2]',
      ],
      dressCode: {
        required: ['[Admin: Sikh_Ritual_Prayer_DressRequired]'],
        prohibited: ['[Admin: Sikh_Ritual_Prayer_DressProhibited]'],
        recommendations: ['[Admin: Sikh_Ritual_Prayer_DressRecommended]'],
      },
      accessibility: {
        seniorFriendly: true,
        wheelchairAccessible: true,
        physicalDemand: 'low' as const,
        alternatives: '[Admin: Sikh_Ritual_Prayer_Alternatives]',
      },
    },
    langar: {
      name: '[Admin: Sikh_Ritual_Langar_Name]',
      type: 'offering' as const,
      steps: [
        {
          order: 1,
          instruction: '[Admin: Sikh_Ritual_Langar_Step1]',
          duration: '[Admin: Sikh_Ritual_Langar_Step1_Duration]',
        },
      ],
      timingRequirements: {
        preferredTime: '[Admin: Sikh_Ritual_Langar_PreferredTime]',
        duration: '[Admin: Sikh_Ritual_Langar_TotalDuration]',
        frequency: '[Admin: Sikh_Ritual_Langar_Frequency]',
      },
      materialPreparation: [],
      dressCode: {
        required: ['[Admin: Sikh_Ritual_Langar_DressRequired]'],
        prohibited: [],
        recommendations: ['[Admin: Sikh_Ritual_Langar_DressRecommended]'],
      },
      accessibility: {
        seniorFriendly: true,
        wheelchairAccessible: true,
        physicalDemand: 'low' as const,
      },
    },
  },
  muslim: {
    salah: {
      name: '[Admin: Muslim_Ritual_Salah_Name]',
      type: 'prayer' as const,
      steps: [
        {
          order: 1,
          instruction: '[Admin: Muslim_Ritual_Salah_Step1_Wudu]',
          duration: '[Admin: Muslim_Ritual_Salah_Step1_Duration]',
          materials: ['[Admin: Muslim_Ritual_Salah_Step1_Water]'],
        },
        {
          order: 2,
          instruction: '[Admin: Muslim_Ritual_Salah_Step2_Qibla]',
          duration: '[Admin: Muslim_Ritual_Salah_Step2_Duration]',
        },
        {
          order: 3,
          instruction: '[Admin: Muslim_Ritual_Salah_Step3_Rakats]',
          duration: '[Admin: Muslim_Ritual_Salah_Step3_Duration]',
        },
      ],
      timingRequirements: {
        preferredTime: '[Admin: Muslim_Ritual_Salah_PreferredTime]',
        duration: '[Admin: Muslim_Ritual_Salah_TotalDuration]',
        frequency: '[Admin: Muslim_Ritual_Salah_Frequency_5Daily]',
      },
      materialPreparation: [
        '[Admin: Muslim_Ritual_Salah_PrayerMat]',
        '[Admin: Muslim_Ritual_Salah_CleanWater]',
      ],
      dressCode: {
        required: [
          '[Admin: Muslim_Ritual_Salah_Dress_Modest]',
          '[Admin: Muslim_Ritual_Salah_Dress_Clean]',
        ],
        prohibited: [
          '[Admin: Muslim_Ritual_Salah_Dress_NoShoes]',
        ],
        recommendations: [
          '[Admin: Muslim_Ritual_Salah_Dress_WhitePreferred]',
        ],
      },
      accessibility: {
        seniorFriendly: true,
        wheelchairAccessible: true,
        physicalDemand: 'medium' as const,
        alternatives: '[Admin: Muslim_Ritual_Salah_SittingAlternative]',
      },
      prayerTimes: {
        calculation: '[Admin: Muslim_Ritual_Salah_TimeCalculation]',
        adjustments: '[Admin: Muslim_Ritual_Salah_TimeAdjustments]',
      },
    },
    hajj: {
      name: '[Admin: Muslim_Ritual_Hajj_Name]',
      type: 'pilgrimage' as const,
      steps: [
        {
          order: 1,
          instruction: '[Admin: Muslim_Ritual_Hajj_Step1_Ihram]',
          duration: '[Admin: Muslim_Ritual_Hajj_Step1_Duration]',
          materials: ['[Admin: Muslim_Ritual_Hajj_Step1_IhramCloth]'],
        },
        {
          order: 2,
          instruction: '[Admin: Muslim_Ritual_Hajj_Step2_Tawaf]',
          duration: '[Admin: Muslim_Ritual_Hajj_Step2_Duration]',
        },
        // ... more Hajj steps
      ],
      timingRequirements: {
        preferredTime: '[Admin: Muslim_Ritual_Hajj_DhulHijjah]',
        duration: '[Admin: Muslim_Ritual_Hajj_5to7Days]',
        frequency: '[Admin: Muslim_Ritual_Hajj_OnceLifetime]',
      },
      accessibility: {
        seniorFriendly: false,
        wheelchairAccessible: true,
        physicalDemand: 'high' as const,
        alternatives: '[Admin: Muslim_Ritual_Hajj_UmrahAlternative]',
      },
    },
  },
  // Add ritual templates for other religions...
};

// ========================================
// SACRED SITE TEMPLATES
// ========================================

export const SACRED_SITE_TEMPLATES = {
  sikh: {
    site1: {
      name: '[Admin-Added Destination 1]',
      location: '[Admin-Added Location X]',
      geoCoordinates: {
        latitude: 0, // [Admin: Sikh_Site1_Latitude]
        longitude: 0, // [Admin: Sikh_Site1_Longitude]
      },
      significance: '[Admin: Sikh_Site1_Significance]',
      ritualTimetable: [
        {
          ritualId: 'morning-prayer',
          times: [
            '[Admin: Sikh_Site1_MorningPrayer_Time1]',
            '[Admin: Sikh_Site1_MorningPrayer_Time2]',
          ],
          days: ['[Admin: Sikh_Site1_MorningPrayer_Days]'],
        },
        {
          ritualId: 'langar',
          times: [
            '[Admin: Sikh_Site1_Langar_Breakfast]',
            '[Admin: Sikh_Site1_Langar_Lunch]',
            '[Admin: Sikh_Site1_Langar_Dinner]',
          ],
        },
      ],
      festivalSchedule: [
        {
          festivalId: 'festival1',
          specialTimings: [
            '[Admin: Sikh_Site1_Festival1_SpecialTiming1]',
          ],
          specialProcedures: [
            '[Admin: Sikh_Site1_Festival1_SpecialProcedure1]',
          ],
        },
      ],
      restrictions: {
        entryRestrictions: [
          '[Admin: Sikh_Site1_Entry_Restriction1]',
        ],
        photographyAllowed: true,
        genderSeparation: false,
        dressCode: [
          '[Admin: Sikh_Site1_DressCode_HeadCovering]',
          '[Admin: Sikh_Site1_DressCode_NoShoes]',
        ],
        prohibitedItems: [
          '[Admin: Sikh_Site1_Prohibited_Tobacco]',
          '[Admin: Sikh_Site1_Prohibited_Alcohol]',
        ],
      },
      facilities: {
        parking: true,
        restrooms: true,
        wheelchairAccess: true,
        medicalAid: true,
        foodAvailable: true,
        accommodations: [
          '[Admin: Sikh_Site1_Accommodation1]',
          '[Admin: Sikh_Site1_Accommodation2]',
        ],
      },
      operatingHours: {
        open: '[Admin: Sikh_Site1_OpenTime]',
        close: '[Admin: Sikh_Site1_CloseTime]',
        closedDays: [],
      },
      contactInfo: {
        phone: '[Admin: Sikh_Site1_Phone]',
        email: '[Admin: Sikh_Site1_Email]',
        website: '[Admin: Sikh_Site1_Website]',
      },
    },
  },
  muslim: {
    site1: {
      name: '[Admin-Added Destination 1]',
      location: '[Admin-Added Location X]',
      geoCoordinates: {
        latitude: 0, // [Admin: Muslim_Site1_Latitude]
        longitude: 0, // [Admin: Muslim_Site1_Longitude]
      },
      significance: '[Admin: Muslim_Site1_Significance]',
      ritualTimetable: [
        {
          ritualId: 'salah',
          times: [
            '[Admin: Muslim_Site1_Fajr]',
            '[Admin: Muslim_Site1_Dhuhr]',
            '[Admin: Muslim_Site1_Asr]',
            '[Admin: Muslim_Site1_Maghrib]',
            '[Admin: Muslim_Site1_Isha]',
          ],
        },
        {
          ritualId: 'jumah',
          times: ['[Admin: Muslim_Site1_JumahTime]'],
          days: ['Friday'],
        },
      ],
      festivalSchedule: [
        {
          festivalId: 'eid-al-fitr',
          specialTimings: ['[Admin: Muslim_Site1_EidPrayerTime]'],
          specialProcedures: ['[Admin: Muslim_Site1_EidProcedure]'],
        },
      ],
      restrictions: {
        entryRestrictions: [
          '[Admin: Muslim_Site1_Entry_NonMuslimPolicy]',
        ],
        photographyAllowed: false,
        genderSeparation: true,
        dressCode: [
          '[Admin: Muslim_Site1_DressCode_Modest]',
          '[Admin: Muslim_Site1_DressCode_Hijab_Women]',
        ],
        prohibitedItems: [
          '[Admin: Muslim_Site1_Prohibited_Shoes]',
          '[Admin: Muslim_Site1_Prohibited_Food]',
        ],
      },
      facilities: {
        parking: true,
        restrooms: true,
        wheelchairAccess: true,
        medicalAid: true,
        foodAvailable: false,
        wuduArea: true, // Muslim-specific
        qiblaDirection: '[Admin: Muslim_Site1_QiblaDirection]',
        separatePrayerAreas: true,
      },
      operatingHours: {
        open: '[Admin: Muslim_Site1_OpenTime]',
        close: '[Admin: Muslim_Site1_CloseTime]',
        closedDays: [],
        prayerTimeAdjustments: '[Admin: Muslim_Site1_PrayerTimePolicy]',
      },
    },
  },
  // Add site templates for other religions...
};

// ========================================
// FILTER CONFIGURATION TEMPLATES
// ========================================

export const FILTER_TEMPLATES = {
  sacredTextFilter: {
    sikh: {
      texts: [
        {
          id: 'text1',
          name: '[Admin: Sikh_Filter_Text1_Name]',
          associatedSites: ['site1', 'site2', 'site3'],
        },
      ],
    },
    muslim: {
      texts: [
        {
          id: 'quran',
          name: '[Admin: Muslim_Filter_Quran]',
          associatedSites: ['site1', 'site2'],
        },
        {
          id: 'hadith',
          name: '[Admin: Muslim_Filter_Hadith]',
          associatedSites: ['site3', 'site4'],
        },
      ],
    },
  },
  ritualTypeFilter: {
    sikh: ['Prayer', 'Langar Service', 'Kirtan', 'Paath'],
    muslim: ['Salah', 'Hajj', 'Umrah', 'Dhikr', 'Fasting'],
    christian: ['Mass', 'Prayer', 'Confession', 'Baptism'],
    buddhist: ['Meditation', 'Chanting', 'Offering', 'Prostration'],
  },
  festivalFilter: {
    dateTypes: ['Fixed', 'Lunar', 'Solar'],
    crowdLevels: ['Low', 'Medium', 'High', 'Extreme'],
  },
};

// ========================================
// GROK AI INTEGRATION TEMPLATES
// ========================================

export const GROK_AI_TEMPLATES = {
  ritualTimingOptimizer: {
    inputs: [
      'User arrival time',
      'Departure time',
      'Selected rituals',
      'Group composition (seniors, children)',
      'Special requests (accessibility, dietary)',
    ],
    outputs: [
      'Optimized schedule avoiding conflicts',
      'Crowd avoidance suggestions',
      'Festival alignment opportunities',
      'Rest period recommendations',
    ],
    trainingData: '[Admin: GrokAI_RitualTiming_TrainingData]',
  },
  sacredTextJourneyPlanner: {
    inputs: [
      'Selected sacred texts',
      'Passages of interest',
      'Study goals',
      'Available time',
    ],
    outputs: [
      'Site itinerary based on text references',
      'Reading schedule at relevant locations',
      'Contextual insights at each site',
    ],
    trainingData: '[Admin: GrokAI_SacredText_TrainingData]',
  },
  personalizedRitualRecommendations: {
    inputs: [
      'Traveler profile (age, fitness, interests)',
      'Previous pilgrimage experience',
      'Spiritual goals',
      'Physical limitations',
    ],
    outputs: [
      'Recommended rituals (sorted by suitability)',
      'Festival participation suggestions',
      'Intensity level matching',
    ],
    trainingData: '[Admin: GrokAI_PersonalizedRitual_TrainingData]',
  },
  accessibilityIntelligence: {
    inputs: [
      'Mobility requirements',
      'Medical conditions',
      'Age group',
      'Dietary restrictions',
    ],
    outputs: [
      'Senior-friendly ritual timings',
      'Wheelchair-accessible prayer areas',
      'Medical support proximity mapping',
      'Accessible accommodation suggestions',
    ],
    trainingData: '[Admin: GrokAI_Accessibility_TrainingData]',
  },
};

// ========================================
// ADMIN EDITABLE CONTENT MARKERS
// ========================================

export const ADMIN_EDITABLE_STYLES = {
  border: '1px dashed #CCCCCC',
  backgroundColor: '#F9FAFB',
  padding: '8px',
  borderRadius: '4px',
  position: 'relative' as const,
  cursor: 'pointer',
};

export const ADMIN_PLACEHOLDER_FORMAT = {
  singleField: '[Admin: {Religion}_{Section}_{Field}]',
  destination: '[Admin-Added Destination {Number}]',
  location: '[Admin-Added Location {Letter}]',
  ritual: '[Admin: {Religion}_{Ritual}_Procedure]',
  text: '[Admin: {Religion}_Text_{Type}]',
};

export const ADMIN_TOOLTIP_TEMPLATES = {
  editField: 'Edit {fieldName} in admin panel',
  addNew: 'Add new {contentType}',
  delete: 'Delete this {contentType}',
  preview: 'Preview {contentType} on user-facing screen',
  duplicate: 'Duplicate this {contentType}',
};

export const ADMIN_LAYER_NAMING = {
  format: 'ADMIN_{Religion}_{Section}_{Field}',
  examples: [
    'ADMIN_SIKH_SACRED_TEXTS_PRIMARY_NAME',
    'ADMIN_MUSLIM_FESTIVAL_RAMADAN_DATE',
    'ADMIN_CHRISTIAN_RITUAL_MASS_TIMING',
    'ADMIN_BUDDHIST_SITE_COORDINATES',
  ],
};
