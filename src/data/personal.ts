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
    "Full-Stack Developer with hands-on experience building enterprise ERP systems, financial reporting platforms, and web applications. Proficient in Next.js, React, Golang, Spring Boot, NestJS, C# (.NET), PostgreSQL, and SQL Server with a focus on end-to-end feature development and scalable backend architecture.",

  // 🔥 ใช้สำหรับ My Story (ยาว)
  bio: [
    "I am a Full-Stack Developer passionate about engineering enterprise applications that solve real business problems. My professional journey began with frontend development and UX/UI design during a 6-month remote internship, where I developed a strong foundation in creating intuitive, user-centric web applications and technical architecture diagrams.",

    "At AIRA Securities, I contributed across two core engineering teams: Core ERP Engineering and Enterprise Application Development. My work spans building enterprise ERP systems, centralized RBAC authentication portals, data aggregation pipelines, TFEX MIS financial reporting, and accounting audit automation using technologies such as Next.js, React, Golang, Spring Boot, NestJS, C# (.NET), PHP, PostgreSQL, SQL Server, and REST APIs.",

    "I enjoy designing scalable software architectures, improving existing systems, and automating complex business workflows. I continuously expand my technical capabilities through hands-on system development and focus on delivering reliable, maintainable, and production-ready applications.",
  ].join("\n\n"),

  email: "ddotdka4@gmail.com",
  location: "Open to Remote & On-site",

  socialLinks: {
    github: "https://github.com/Foam-01",
    linkedin: "https://www.linkedin.com/in/sitthidet-thongsawang-28524630a/",
    twitter: "https://x.com/",
  },
};
