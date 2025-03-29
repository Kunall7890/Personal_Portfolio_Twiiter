
import { Candidate, JobRequirement } from '@/types';

export const mockJobRequirement: JobRequirement = {
  id: '1',
  title: 'Senior Frontend Developer',
  description: 'We are looking for a Senior Frontend Developer with expertise in React, TypeScript, and modern web technologies.',
  requiredSkills: ['React', 'JavaScript', 'HTML', 'CSS', 'Git'],
  preferredSkills: ['TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Testing'],
  minimumExperience: 3,
  educationLevel: ['Bachelor\'s Degree'],
};

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    resumeUrl: '/resumes/john-smith.pdf',
    resumeText: 'Experienced frontend developer with 5 years of experience in React, JavaScript, HTML, CSS, and TypeScript...',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Next.js', 'Tailwind CSS'],
    experience: 5,
    education: ['Bachelor of Science in Computer Science'],
    score: 92,
    match: [
      { skill: 'React', required: true, match: true },
      { skill: 'JavaScript', required: true, match: true },
      { skill: 'HTML', required: true, match: true },
      { skill: 'CSS', required: true, match: true },
      { skill: 'Git', required: true, match: true },
      { skill: 'TypeScript', required: false, match: true },
      { skill: 'Next.js', required: false, match: true },
      { skill: 'Tailwind CSS', required: false, match: true },
    ],
    status: 'shortlisted'
  },
  {
    id: '2',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '(555) 987-6543',
    resumeUrl: '/resumes/emily-johnson.pdf',
    resumeText: 'Frontend developer with 2 years of experience in React, JavaScript, HTML, and CSS...',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    experience: 2,
    education: ['Bachelor of Arts in Design'],
    score: 75,
    match: [
      { skill: 'React', required: true, match: true },
      { skill: 'JavaScript', required: true, match: true },
      { skill: 'HTML', required: true, match: true },
      { skill: 'CSS', required: true, match: true },
      { skill: 'Git', required: true, match: false },
      { skill: 'TypeScript', required: false, match: false },
    ],
    status: 'reviewed'
  },
  {
    id: '3',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    resumeUrl: '/resumes/michael-wilson.pdf',
    resumeText: 'Full-stack developer with 4 years of experience in React, Node.js, MongoDB, and Express...',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS'],
    experience: 4,
    education: ['Master of Computer Science'],
    score: 83,
    match: [
      { skill: 'React', required: true, match: true },
      { skill: 'JavaScript', required: true, match: true },
      { skill: 'HTML', required: true, match: true },
      { skill: 'CSS', required: true, match: true },
      { skill: 'Git', required: true, match: false },
      { skill: 'Node.js', required: false, match: false },
    ],
    status: 'new'
  },
  {
    id: '4',
    name: 'Sophia Brown',
    email: 'sophia.brown@example.com',
    phone: '(555) 456-7890',
    resumeUrl: '/resumes/sophia-brown.pdf',
    resumeText: 'UI/UX designer with frontend development skills including React, HTML, CSS, and Figma...',
    skills: ['UI/UX Design', 'Figma', 'React', 'HTML', 'CSS'],
    experience: 3,
    education: ['Bachelor of Fine Arts in Design'],
    score: 68,
    match: [
      { skill: 'React', required: true, match: true },
      { skill: 'HTML', required: true, match: true },
      { skill: 'CSS', required: true, match: true },
      { skill: 'JavaScript', required: true, match: false },
      { skill: 'Git', required: true, match: false },
    ],
    status: 'rejected'
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david.lee@example.com',
    resumeUrl: '/resumes/david-lee.pdf',
    resumeText: 'Senior Frontend Engineer with 7 years of experience specializing in React, TypeScript, and performance optimization...',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Webpack', 'Git'],
    experience: 7,
    education: ['Master of Software Engineering'],
    score: 95,
    match: [
      { skill: 'React', required: true, match: true },
      { skill: 'JavaScript', required: true, match: true },
      { skill: 'HTML', required: true, match: true },
      { skill: 'CSS', required: true, match: true },
      { skill: 'Git', required: true, match: true },
      { skill: 'TypeScript', required: false, match: true },
      { skill: 'Redux', required: false, match: false },
    ],
    status: 'shortlisted'
  }
];
