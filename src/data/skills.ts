export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "api"
    | "database"
    | "tools"
    | "data"
    | "mobile"
    | "other";
  /** familiar = heard of, light exposure · beginner → advanced */
  level: "familiar" | "beginner" | "intermediate" | "advanced";
}

// Sample skills data organized by categories
export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "intermediate" },
  { name: "Tailwind CSS", category: "frontend", level: "intermediate" },
  { name: "Bootstrap 5", category: "frontend", level: "intermediate" },
  { name: "Next.js", category: "frontend", level: "beginner" },

  // Backend
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "Express.js", category: "backend", level: "intermediate" },
  { name: "NestJS", category: "backend", level: "beginner" },
  { name: "Socket.IO", category: "backend", level: "familiar" },

  // API / Query
  { name: "GraphQL", category: "api", level: "familiar" },
  { name: "Swagger", category: "api", level: "familiar" },

  // Database
  { name: "PostgreSQL", category: "database", level: "intermediate" },
  { name: "Supabase", category: "database", level: "beginner" },
  { name: "MongoDB", category: "database", level: "familiar" },

  // Tools & Technologies
  { name: "Git", category: "tools", level: "intermediate" },
  { name: "Netlify", category: "tools", level: "beginner" },
  { name: "Render", category: "tools", level: "beginner" },
  { name: "Docker", category: "tools", level: "familiar" },
  { name: "Nginx", category: "tools", level: "familiar" },
  { name: "Cloudflare", category: "tools", level: "familiar" },
  { name: "Google Cloud Platform", category: "tools", level: "familiar" },
  { name: "Cron Jobs / Scheduling", category: "tools", level: "familiar" },
  { name: "Jenkins", category: "tools", level: "familiar" },
  { name: "Portainer.io", category: "tools", level: "familiar" },
  { name: "Kubernetes", category: "tools", level: "familiar" },

  // Data / Sync
  { name: "PowerSync", category: "data", level: "familiar" },
  { name: "RxDB", category: "data", level: "familiar" },

  // Mobile
  { name: "Flutter", category: "mobile", level: "familiar" },
  { name: "React Native", category: "mobile", level: "familiar" },
];
