// ========================================
// CORPORATE & MICE TOURISM DATA
// ========================================

export interface CorporateSubCategory {
  id: number;
  emoji: string;
  title: string;
  description: string;
  capacity: string;
  duration: string;
  budget: string;
  budgetMin: number;
  budgetMax: number;
  groupSizeMin: number;
  groupSizeMax: number;
  durationDays: number;
  gradient: string;
  helperText: string;
}

export const corporateSubCategories: CorporateSubCategory[] = [
  {
    id: 1,
    emoji: '🎤',
    title: 'Conferences & Exhibitions',
    description: 'Large-scale professional gatherings with hybrid capabilities',
    capacity: '100–5,000 delegates',
    duration: '1–3 days',
    budget: '$2,000–$5,000/delegate',
    budgetMin: 200000,
    budgetMax: 10000000,
    groupSizeMin: 100,
    groupSizeMax: 5000,
    durationDays: 2,
    gradient: 'from-blue-500 to-indigo-600',
    helperText: 'Ideal for 100-5,000 delegates | 1-3 days',
  },
  {
    id: 2,
    emoji: '📊',
    title: 'Board Meetings & AGMs',
    description: 'Executive boardrooms with privacy protocols & NDA compliance',
    capacity: '10–50 executives',
    duration: '1 day',
    budget: '₹50,000–₹2,00,000/day',
    budgetMin: 50000,
    budgetMax: 200000,
    groupSizeMin: 10,
    groupSizeMax: 50,
    durationDays: 1,
    gradient: 'from-slate-600 to-gray-700',
    helperText: 'Ideal for 10-50 executives | 1 day',
  },
  {
    id: 3,
    emoji: '🏆',
    title: 'Incentive Trips & Rewards',
    description: 'Employee rewards & recognition trips with measurable ROI',
    capacity: '20–200 employees',
    duration: '2–5 days',
    budget: '₹15,000–₹50,000/person',
    budgetMin: 300000,
    budgetMax: 10000000,
    groupSizeMin: 20,
    groupSizeMax: 200,
    durationDays: 3,
    gradient: 'from-amber-500 to-orange-600',
    helperText: 'Ideal for 20-200 employees | 2-5 days',
  },
  {
    id: 4,
    emoji: '🤝',
    title: 'Team Building & Offsite Retreats',
    description: 'Leadership workshops & team bonding for stronger collaboration',
    capacity: '15–100 employees',
    duration: '1–3 days',
    budget: '₹1,000–₹8,000/person',
    budgetMin: 15000,
    budgetMax: 800000,
    groupSizeMin: 15,
    groupSizeMax: 100,
    durationDays: 2,
    gradient: 'from-green-500 to-teal-600',
    helperText: 'Ideal for 15-100 employees | 1-3 days',
  },
  {
    id: 5,
    emoji: '🎓',
    title: 'Training & Workshops',
    description: 'Skill development programs with certified trainers',
    capacity: '10–50 participants',
    duration: '1–5 days',
    budget: '₹500–₹3,000/person',
    budgetMin: 5000,
    budgetMax: 150000,
    groupSizeMin: 10,
    groupSizeMax: 50,
    durationDays: 3,
    gradient: 'from-purple-500 to-pink-600',
    helperText: 'Ideal for 10-50 participants | 1-5 days',
  },
  {
    id: 6,
    emoji: '🏢',
    title: 'Trade Shows & Expos',
    description: 'Industry exhibitions with booth setup & logistics support',
    capacity: '500–10,000 visitors',
    duration: '2–5 days',
    budget: '₹5,00,000–₹50,00,000/event',
    budgetMin: 500000,
    budgetMax: 50000000,
    groupSizeMin: 500,
    groupSizeMax: 10000,
    durationDays: 3,
    gradient: 'from-red-500 to-orange-600',
    helperText: 'Ideal for 500-10,000 visitors | 2-5 days',
  },
];

export const corporateTheme = {
  primary: '#475569',
  secondary: '#334155',
  accent: '#10B981',
  background: '#F8FAFC',
};
