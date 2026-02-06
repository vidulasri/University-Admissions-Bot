
export interface University {
  id: string;
  name: string;
  location: string;
  rank: number;
  acceptanceRate: string;
  tuition: string;
  image: string;
  programs: Program[];
  requirements: string[];
  deadlines: {
    earlyAction?: string;
    regularDecision: string;
  };
}

export interface Program {
  id: string;
  name: string;
  department: string;
  degree: string;
  description: string;
}

export interface ApplicationStep {
  id: string;
  title: string;
  status: 'pending' | 'completed' | 'in-progress';
  dueDate: string;
}

export interface UserProfile {
  name: string;
  interests: string[];
  gpa: number;
  testScores: {
    sat?: number;
    act?: number;
  };
  preferredLocation: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
