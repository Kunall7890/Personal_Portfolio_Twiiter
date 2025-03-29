
export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
  resumeUrl: string;
  resumeText: string;
  skills: string[];
  experience: number;
  education: string[];
  score: number;
  match: SkillMatch[];
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
}

export interface SkillMatch {
  skill: string;
  required: boolean;
  match: boolean;
}

export interface JobRequirement {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  preferredSkills: string[];
  minimumExperience: number;
  educationLevel: string[];
}
