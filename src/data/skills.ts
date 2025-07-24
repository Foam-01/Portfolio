export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced';
}

// Sample skills data organized by categories
export const skills: Skill[] = [
  // Frontend Skills
  { name: 'React', category: 'frontend', level: 'intermediate' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'intermediate' },
  { name: 'Next.js', category: 'frontend', level: 'intermediate' },
  

  // Backend Skills
  { name: 'Node.js', category: 'backend', level: 'intermediate' },
  { name: 'Express.js', category: 'backend', level: 'intermediate' },
  { name: 'PostgreSQL', category: 'backend', level: 'intermediate' },
  { name: 'MongoDB', category: 'backend', level: 'intermediate' },

  // Tools & Technologies
  { name: 'Git', category: 'tools', level: 'beginner' },
  { name: 'Docker', category: 'tools', level: 'beginner' },
  { name: 'AWS', category: 'tools', level: 'beginner' },
  { name: 'Kubernetes ', category: 'tools', level: 'beginner' },
  { name: 'Netlify', category: 'tools', level: 'intermediate' },
  

  
]