// Educational Tourism Data - Extracted from Educational Tourism components
// Consolidates data from:
// - EducationalTourismHub.tsx
// - SchoolGroupsK12Flow.tsx
// - CollegeUniversityGroupsFlow.tsx
// - ResearchGroupsFlow.tsx
// - IndividualResearchersFlow.tsx

export interface EducationalPathway {
  id: string;
  name: string;
  icon: string;
  description: string;
  ageRange: string;
  typical Duration: string;
  features: string[];
  gradient: string;
}

export interface LearningTheme {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  recommendedGrade: string;
  icon: string;
}

export interface AcademicFocusType {
  id: string;
  name: string;
  description: string;
  departments: string[];
  researchAreas: string[];
}

export interface EducationalPackage {
  id: string;
  name: string;
  pathway: string;
  duration: string;
  groupSize: string;
  price: string;
  included: string[];
  learningOutcomes: string[];
  ageGroup: string;
}

export interface ResearchField {
  id: string;
  name: string;
  subfields: string[];
  facilities: string[];
  duration: string;
}

// Educational Pathways (5 main categories)
export const educationalPathways: EducationalPathway[] = [
  {
    id: 'school-k12',
    name: '[Admin: School Groups (K-12)]',
    icon: '🏫',
    description: 'Educational field trips for school students',
    ageRange: '5-18 years',
    typicalDuration: '1-3 days',
    features: [
      'Curriculum-aligned trips',
      'Supervised groups',
      'Interactive learning',
      'Safety-first approach',
      'Teacher support materials'
    ],
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'college-university',
    name: '[Admin: College/University Groups]',
    icon: '🎓',
    description: 'Academic tours and industrial visits',
    ageRange: '18-25 years',
    typicalDuration: '3-7 days',
    features: [
      'Industry exposure',
      'University campus tours',
      'Research facility visits',
      'Professional networking',
      'Career guidance'
    ],
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'research-groups',
    name: '[Admin: Research Groups & Labs]',
    icon: '🔬',
    description: 'Collaborative research expeditions',
    ageRange: 'Graduate students & above',
    typicalDuration: '1-4 weeks',
    features: [
      'Access to research facilities',
      'Data collection support',
      'Expert consultations',
      'Lab equipment access',
      'Publication support'
    ],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'individual-researchers',
    name: '[Admin: Individual Researchers]',
    icon: '📚',
    description: 'Solo academic research trips',
    ageRange: 'PhD & Post-Doc',
    typicalDuration: '2 weeks - 6 months',
    features: [
      'Flexible schedules',
      'Archive access',
      'Library privileges',
      'Expert interviews',
      'Accommodation support'
    ],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'skill-development',
    name: '[Admin: Skill Development Workshops]',
    icon: '🛠️',
    description: 'Hands-on skill-building programs',
    ageRange: 'All ages',
    typicalDuration: '2-5 days',
    features: [
      'Practical training',
      'Certificate programs',
      'Industry experts',
      'Tool & equipment access',
      'Career counseling'
    ],
    gradient: 'from-yellow-500 to-orange-600'
  }
];

// Learning Themes for K-12
export const learningThemesK12: LearningTheme[] = [
  {
    id: 'history-heritage',
    name: '[Admin: History & Heritage]',
    description: 'Historical monuments, museums, and cultural sites',
    subjects: ['History', 'Social Studies', 'Art'],
    recommendedGrade: 'Grades 6-12',
    icon: '🏛️'
  },
  {
    id: 'science-technology',
    name: '[Admin: Science & Technology]',
    description: 'Science museums, planetariums, tech parks',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Computer Science'],
    recommendedGrade: 'Grades 8-12',
    icon: '🔬'
  },
  {
    id: 'ecology-environment',
    name: '[Admin: Ecology & Environment]',
    description: 'Nature reserves, wildlife sanctuaries, botanical gardens',
    subjects: ['Environmental Science', 'Biology', 'Geography'],
    recommendedGrade: 'Grades 4-12',
    icon: '🌿'
  },
  {
    id: 'arts-culture',
    name: '[Admin: Arts & Culture]',
    description: 'Art galleries, cultural centers, performing arts',
    subjects: ['Art', 'Music', 'Drama', 'Literature'],
    recommendedGrade: 'Grades 1-12',
    icon: '🎨'
  },
  {
    id: 'geography-earth-science',
    name: '[Admin: Geography & Earth Science]',
    description: 'Geological sites, geographical landmarks',
    subjects: ['Geography', 'Geology', 'Earth Science'],
    recommendedGrade: 'Grades 6-12',
    icon: '🌍'
  }
];

// Academic Focus Types for College/University
export const academicFocusTypes: AcademicFocusType[] = [
  {
    id: 'engineering',
    name: '[Admin: Engineering & Technology]',
    description: 'Technical institutions and innovation hubs',
    departments: [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Computer Science',
      'Civil Engineering',
      'Aerospace Engineering'
    ],
    researchAreas: [
      'Robotics',
      'AI & Machine Learning',
      'Renewable Energy',
      'Smart Cities',
      'Nanotechnology'
    ]
  },
  {
    id: 'medical-health',
    name: '[Admin: Medical & Health Sciences]',
    description: 'Medical institutions and research hospitals',
    departments: [
      'Medicine',
      'Nursing',
      'Pharmacy',
      'Biotechnology',
      'Public Health'
    ],
    researchAreas: [
      'Clinical Research',
      'Drug Development',
      'Genomics',
      'Medical Devices',
      'Healthcare Management'
    ]
  },
  {
    id: 'business-management',
    name: '[Admin: Business & Management]',
    description: 'Business schools and corporate headquarters',
    departments: [
      'MBA',
      'Finance',
      'Marketing',
      'HR',
      'Operations'
    ],
    researchAreas: [
      'Entrepreneurship',
      'Digital Marketing',
      'Supply Chain',
      'FinTech',
      'Organizational Behavior'
    ]
  },
  {
    id: 'sciences',
    name: '[Admin: Pure Sciences]',
    description: 'Research institutes and science labs',
    departments: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology',
      'Astronomy'
    ],
    researchAreas: [
      'Particle Physics',
      'Molecular Biology',
      'Climate Science',
      'Space Exploration',
      'Quantum Computing'
    ]
  },
  {
    id: 'social-sciences',
    name: '[Admin: Social Sciences & Humanities]',
    description: 'Universities and cultural institutions',
    departments: [
      'Economics',
      'Sociology',
      'Psychology',
      'Political Science',
      'Anthropology'
    ],
    researchAreas: [
      'Behavioral Economics',
      'Social Policy',
      'Cultural Studies',
      'Development Studies',
      'Digital Humanities'
    ]
  }
];

// Research Fields for Advanced Studies
export const researchFields: ResearchField[] = [
  {
    id: 'stem',
    name: '[Admin: STEM Research]',
    subfields: [
      'Artificial Intelligence',
      'Quantum Computing',
      'Biotechnology',
      'Materials Science',
      'Environmental Engineering'
    ],
    facilities: [
      'Advanced computing labs',
      'Clean rooms',
      'Research libraries',
      'Testing facilities',
      'Collaboration spaces'
    ],
    duration: '2 weeks - 6 months'
  },
  {
    id: 'humanities',
    name: '[Admin: Humanities Research]',
    subfields: [
      'History',
      'Archaeology',
      'Literature',
      'Philosophy',
      'Linguistics'
    ],
    facilities: [
      'Archives',
      'Special collections',
      'Digital humanities labs',
      'Study rooms',
      'Expert consultations'
    ],
    duration: '1 month - 1 year'
  },
  {
    id: 'social-research',
    name: '[Admin: Social Science Research]',
    subfields: [
      'Economics',
      'Sociology',
      'Political Science',
      'Anthropology',
      'Geography'
    ],
    facilities: [
      'Survey labs',
      'Data centers',
      'Interview spaces',
      'Statistical software',
      'Field research support'
    ],
    duration: '3 weeks - 4 months'
  }
];

// Educational Packages
export const educationalPackages: EducationalPackage[] = [
  {
    id: 'pkg-school-history',
    name: '[Admin: Historical Heritage Tour - K-12]',
    pathway: 'school-k12',
    duration: '2 days / 1 night',
    groupSize: '30-40 students',
    price: 'Rs.3,000 per student',
    included: [
      'Transport',
      'Accommodation',
      'Meals',
      'Entry fees',
      'Expert guides',
      'Learning materials'
    ],
    learningOutcomes: [
      'Understanding historical events',
      'Cultural appreciation',
      'Critical thinking',
      'Documentation skills'
    ],
    ageGroup: 'Grades 6-12'
  },
  {
    id: 'pkg-school-science',
    name: '[Admin: Science Exploration - K-12]',
    pathway: 'school-k12',
    duration: '1 day',
    groupSize: '25-35 students',
    price: 'Rs.1,500 per student',
    included: [
      'Transport',
      'Science museum entry',
      'Planetarium show',
      'Interactive exhibits',
      'Lunch',
      'Activity booklets'
    ],
    learningOutcomes: [
      'Scientific inquiry',
      'Hands-on experiments',
      'STEM interest',
      'Teamwork'
    ],
    ageGroup: 'Grades 8-12'
  },
  {
    id: 'pkg-college-industry',
    name: '[Admin: Industry Visit - College/University]',
    pathway: 'college-university',
    duration: '3 days / 2 nights',
    groupSize: '20-30 students',
    price: 'Rs.8,000 per student',
    included: [
      'Transport',
      'Accommodation',
      'Meals',
      'Factory/Office tours',
      'Expert sessions',
      'Networking events',
      'Certificate'
    ],
    learningOutcomes: [
      'Industry exposure',
      'Practical knowledge',
      'Career insights',
      'Professional networking'
    ],
    ageGroup: 'Undergraduate'
  },
  {
    id: 'pkg-research-expedition',
    name: '[Admin: Research Expedition]',
    pathway: 'research-groups',
    duration: '2 weeks',
    groupSize: '5-10 researchers',
    price: 'Rs.50,000 per researcher',
    included: [
      'Accommodation',
      'Lab access',
      'Equipment usage',
      'Expert consultations',
      'Data collection support',
      'Meals',
      'Local transport'
    ],
    learningOutcomes: [
      'Original research',
      'Data collection',
      'Collaboration skills',
      'Publication material'
    ],
    ageGroup: 'Graduate & PhD'
  },
  {
    id: 'pkg-individual-archives',
    name: '[Admin: Archival Research Support]',
    pathway: 'individual-researchers',
    duration: '1 month',
    groupSize: '1 researcher',
    price: 'Rs.30,000',
    included: [
      'Studio apartment',
      'Archive access',
      'Library privileges',
      'Scanning services',
      'Expert consultations',
      'Weekly meals'
    ],
    learningOutcomes: [
      'Primary source analysis',
      'Research independence',
      'Documentation expertise',
      'Thesis material'
    ],
    ageGroup: 'PhD & Post-Doc'
  },
  {
    id: 'pkg-skill-workshop',
    name: '[Admin: Tech Skills Workshop]',
    pathway: 'skill-development',
    duration: '5 days',
    groupSize: '15-20 participants',
    price: 'Rs.10,000 per person',
    included: [
      'Workshop materials',
      'Tool access',
      'Expert trainers',
      'Lunch',
      'Certificate',
      'Project support'
    ],
    learningOutcomes: [
      'Practical skills',
      'Portfolio project',
      'Industry certification',
      'Job readiness'
    ],
    ageGroup: 'All ages'
  }
];

// Safety Guidelines for Educational Tourism
export const safetyGuidelines = {
  k12: [
    'Minimum 1 teacher per 10 students',
    'First aid kit mandatory',
    'Emergency contact list',
    'Parent consent forms',
    'Travel insurance',
    'COVID-19 protocols'
  ],
  college: [
    'Faculty supervisor required',
    'Group travel insurance',
    'Emergency protocols',
    'Health screening',
    'Code of conduct agreement'
  ],
  research: [
    'Lab safety training',
    'Equipment handling protocols',
    'Data security measures',
    'Ethics committee approval',
    'Insurance coverage'
  ]
};

// Helper Functions
export const getPathwayById = (id: string): EducationalPathway | undefined => {
  return educationalPathways.find(p => p.id === id);
};

export const getPackagesByPathway = (pathway: string): EducationalPackage[] => {
  return educationalPackages.filter(p => p.pathway === pathway);
};

export const getThemesByGrade = (grade: number): LearningTheme[] => {
  return learningThemesK12.filter(theme => {
    const gradeMatch = theme.recommendedGrade.match(/\d+/g);
    if (!gradeMatch) return true;
    const minGrade = parseInt(gradeMatch[0]);
    const maxGrade = gradeMatch[1] ? parseInt(gradeMatch[1]) : minGrade;
    return grade >= minGrade && grade <= maxGrade;
  });
};
