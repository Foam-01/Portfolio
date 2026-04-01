export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced';
}

// Sample skills data organized by categories
export const skills: Skill[] = [
  // Frontend Skills
  { name: "React", category: "frontend", level: "intermediate" },
  { name: "Next.js", category: "frontend", level: "beginner" },
  { name: "Tailwind CSS", category: "frontend", level: "intermediate" },
  { name: "bootstrap 5", category: "frontend", level: "intermediate" },

  // Backend Skills
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "Express.js", category: "backend", level: "intermediate" },
  { name: "NestJS", category: "backend", level: "beginner" },
  { name: "GraphQL", category: "backend", level: "beginner" },
  { name: "PostgreSQL", category: "backend", level: "beginner" },
  { name: "MongoDB", category: "backend", level: "beginner" },
  { name: "Supabase", category: "backend", level: "beginner" },

  // Tools & Technologies
  { name: "Git", category: "tools", level: "intermediate" },
  { name: "Docker", category: "tools", level: "beginner" },
  { name: "Netlify", category: "tools", level: "beginner" },
  { name: "Render", category: "tools", level: "beginner" },
];