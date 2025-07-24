export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

// Sample personal info
export const personalInfo: PersonalInfo = {
  name: 'Foam',
  title: 'Full Stack Developer',
  bio: 'Aspiring full-stack developer passionate about learning and building real-world applications Currently focusing on React, Node.js, and cloud technologies to create user-friendly and scalable web apps Although I have no internship experience yet, I’m highly motivated, eager to grow, and ready to contribute with full dedication.',
  email: 'ddotdka4@gmail.com',
  location: 'Remote',
  socialLinks: {
    github: 'https://github.com/Foam-01',
    linkedin: 'https://www.linkedin.com/in/sitthidet-thongsawang-28524630a/',
    twitter: 'https://x.com/',
  }
}