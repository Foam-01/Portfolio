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
  name: "Foam",
  title: "Junior Full-Stack Developer",

  // 🔥 ใช้สำหรับ Hero (สั้น)
  shortBio:
    "Full-Stack Developer with hands-on experience building enterprise web applications and financial systems. Experienced in React, NestJS, C# (.NET), SQL Server, and system integration, with a strong focus on scalable backend development and clean user interfaces.",

  // 🔥 ใช้สำหรับ My Story (ยาว)
  bio: [
    "I am a Full-Stack Developer passionate about building enterprise applications that solve real business problems. My professional journey began with frontend development and UX/UI design during a six-month remote internship, where I developed a strong foundation in creating intuitive and user-friendly web applications.",

    "Currently, I work as an IT Developer at AIRA Securities, contributing to enterprise authentication systems, financial reporting, data integration, and internal business applications. My work spans the full development lifecycle, including database design, backend services, frontend interfaces, and system integration using technologies such as React, NestJS, C# (.NET), PHP, SQL Server, and REST APIs.",

    "I enjoy designing scalable software, improving existing systems, and automating business processes. I continuously expand my technical knowledge through real-world projects and focus on building reliable, maintainable, and production-ready applications.",
  ].join("\n\n"),

  email: "ddotdka4@gmail.com",
  location: "Open to Remote & On-site",

  socialLinks: {
    github: "https://github.com/Foam-01",
    linkedin: "https://www.linkedin.com/in/sitthidet-thongsawang-28524630a/",
    twitter: "https://x.com/",
  },
};
