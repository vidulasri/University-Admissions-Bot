
import { University } from './types';

export const UNIVERSITIES: University[] = [
  {
    id: '1',
    name: 'Tech Institute of Excellence',
    location: 'Silicon Valley, CA',
    rank: 5,
    acceptanceRate: '8%',
    tuition: '$55,000',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600',
    deadlines: { regularDecision: 'Jan 01, 2025' },
    requirements: ['SAT/ACT Optional', '3 Letters of Recommendation', 'Personal Statement'],
    programs: [
      { id: 'p1', name: 'Computer Science', department: 'Engineering', degree: 'BS', description: 'Advanced AI and systems programming.' },
      { id: 'p2', name: 'Data Science', department: 'Mathematics', degree: 'BS', description: 'Statistical analysis and big data.' }
    ]
  },
  {
    id: '2',
    name: 'Global Humanities University',
    location: 'London, UK',
    rank: 12,
    acceptanceRate: '15%',
    tuition: '$42,000',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756eaa539?auto=format&fit=crop&q=80&w=600',
    deadlines: { regularDecision: 'Jan 15, 2025', earlyAction: 'Nov 01, 2024' },
    requirements: ['IELTS 7.5', 'Creative Portfolio', 'Personal Statement'],
    programs: [
      { id: 'p3', name: 'Digital Media', department: 'Arts', degree: 'BA', description: 'Content creation in the digital age.' },
      { id: 'p4', name: 'International Relations', department: 'Social Sciences', degree: 'BA', description: 'Global policy and diplomacy.' }
    ]
  },
  {
    id: '3',
    name: 'Heritage Business School',
    location: 'Boston, MA',
    rank: 8,
    acceptanceRate: '10%',
    tuition: '$62,000',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
    deadlines: { regularDecision: 'Jan 10, 2025' },
    requirements: ['GMAT/GRE for Grad', 'Business Resume', '2 Essays'],
    programs: [
      { id: 'p5', name: 'Finance', department: 'Business', degree: 'BS/MS', description: 'Quantitative finance and markets.' },
      { id: 'p6', name: 'Entrepreneurship', department: 'Business', degree: 'BS', description: 'Starting and scaling ventures.' }
    ]
  },
  {
    id: '4',
    name: 'Pacific Arts & Sciences',
    location: 'Seattle, WA',
    rank: 45,
    acceptanceRate: '40%',
    tuition: '$35,000',
    image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&q=80&w=600',
    deadlines: { regularDecision: 'Feb 01, 2025' },
    requirements: ['High School Transcript', 'Optional Essay'],
    programs: [
      { id: 'p7', name: 'Marine Biology', department: 'Sciences', degree: 'BS', description: 'Exploring ocean ecosystems.' },
      { id: 'p8', name: 'Environmental Policy', department: 'Sciences', degree: 'BA', description: 'Sustainability and law.' }
    ]
  }
];

export const APPLICATION_STEPS = [
  { id: 's1', title: 'Gather Transcripts', status: 'completed', dueDate: '2024-10-15' },
  { id: 's2', title: 'Draft Personal Statement', status: 'in-progress', dueDate: '2024-11-01' },
  { id: 's3', title: 'Request Letters of Rec', status: 'pending', dueDate: '2024-11-15' },
  { id: 's4', title: 'Finalize Portfolio', status: 'pending', dueDate: '2024-12-01' },
  { id: 's5', title: 'Submit FAFSA', status: 'pending', dueDate: '2024-12-15' },
];

export const SCHOLARSHIPS = [
  { id: 'sc1', name: 'Merit Excellence Award', amount: '$20,000', criteria: 'GPA > 3.8', deadline: 'Dec 15, 2024' },
  { id: 'sc2', name: 'STEM Innovators Grant', amount: '$15,000', criteria: 'Computer Science/Math Major', deadline: 'Jan 30, 2025' },
  { id: 'sc3', name: 'First-Gen Leaders Scholarship', amount: '$10,000', criteria: 'First-Generation College Student', deadline: 'Feb 15, 2025' },
];
