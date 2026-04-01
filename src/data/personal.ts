export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string; // ✅ เพิ่ม
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
  title: 'Junior Full-Stack Developer',

  // 🔥 ใช้สำหรับ Hero (สั้น)
  shortBio:
  'Junior full-stack developer with 6-month front-end internship experience. Experienced in building responsive, user-friendly interfaces with a strong focus on UI/UX. Currently expanding expertise in React, Node.js, and cloud technologies.',

  // 🔥 ใช้สำหรับ My Story (ยาว)
  bio: [
    'I am a junior full-stack developer with a strong passion for building real-world web applications. My journey started with a deep interest in creating user-friendly interfaces, which led me to gain hands-on experience in front-end development during a 6-month internship.',
    'I enjoy turning ideas into functional and visually appealing products, with a focus on clean UI and smooth user experience. Currently, I am expanding my skills in React (Next.js), Node.js (NestJS), and cloud technologies to build modern, scalable applications.',
    'I believe in continuous learning, consistency, and improving through real projects. Every challenge is an opportunity for me to grow and become a better developer.',
  ].join('\n\n'),

  email: 'ddotdka4@gmail.com',
  location: 'Open to Remote & On-site',

  socialLinks: {
    github: 'https://github.com/Foam-01',
    linkedin: 'https://www.linkedin.com/in/sitthidet-thongsawang-28524630a/',
    twitter: 'https://x.com/',
  }
}