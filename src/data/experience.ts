export interface Contribution {
  number: string;
  title: string;
  bullets: string[];
}

export interface RelatedProject {
  title: string;
  id: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  companyFull: string;
  workType?: string;
  duration: string;
  durationShort: string;
  description: string;
  subtitle: string;
  contributions: Contribution[];
  technologies: string[];
  relatedProject?: RelatedProject;
}

export const experiences: Experience[] = [
  {
    id: "exp-aira-erp",
    position: "IT Developer",
    company: "AIRA Securities",
    companyFull: "AIRA Securities Public Company Limited",
    workType: "Full-time",
    duration: "August 2026 – September 2026 · 2 Months",
    durationShort: "Aug 2026 – Sep 2026",
    description:
      "Full-stack developer on an enterprise ERP team, building and maintaining HR, CRM, Procurement, Warehouse, and Accounting modules across the frontend, backend, and database.",
    subtitle: "ERP System Development",
    contributions: [
      {
        number: "01",
        title: "Feature Development",
        bullets: [
          "Built new features end to end from business requirements: UI, REST APIs, business logic, and PostgreSQL queries.",
          "Created reusable UI components, including data tables, forms, and modals that fetch, filter, and paginate data from the database.",
        ],
      },
      {
        number: "02",
        title: "Feature Completion & Refinement",
        bullets: [
          "Took over features started by senior developers and brought them to production quality by adding missing UI states, validation, edge-case handling, and responsive layouts.",
          "Worked across long, multi-step business flows (Sales → Quotation → Project → Procurement → Warehouse → Accounting), making sure each step works end to end.",
        ],
      },
      {
        number: "03",
        title: "Bug Fixing & Data Integrity",
        bullets: [
          "Investigated and fixed bugs across every layer of the system: UI behavior, frontend–backend API contracts, and data/SQL issues.",
          "Fixed problems at the root cause rather than the symptom, and added tests to prevent regressions.",
        ],
      },
      {
        number: "04",
        title: "UI / UX",
        bullets: [
          "Built responsive interfaces for desktop and mobile, including mobile screens for field staff such as warehouse, transport, and on-site receiving teams.",
        ],
      },
      {
        number: "05",
        title: "Performance Optimization",
        bullets: [
          "Analyzed every performance issue before changing code: identified the root cause, assessed the impact, and proposed solutions with their pros, cons, and risks, without changing the UI, UX, or business logic.",
          "Frontend: Reviewed SSR/CSR usage, JavaScript bundle size, duplicate requests, and unnecessary re-renders. Added lazy loading for images entering the viewport, disabled unnecessary prefetching, and added skeleton loading states.",
          "Backend/Database: Reviewed API response times, slow queries, N+1 queries, pagination, indexes, and connection pooling.",
          "Media: Compressed images in the browser before upload, and added cache headers (Cache-Control, ETag, Last-Modified) so the backend returns 304 Not Modified for unchanged images.",
          "Result – Employee directory: initial page load reduced from ~7 MB to ~1.8 MB, and unnecessary requests removed. Before, scrolling the full list triggered about 270 requests totaling ~57 MB.",
          "Result – Asset requisition page: newly uploaded images reduced from ~1 MB to ~200 KB, and repeat visits no longer re-download images. Before, every visit loaded 3.6 MB.",
        ],
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Go (Golang)",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
      "Docker",
      "GitHub Desktop",
    ],
  },
  {
    id: "exp-1",
    position: "IT Developer",
    company: "AIRA Securities",
    companyFull: "AIRA Securities Public Company Limited",
    workType: "Full-time",
    duration: "June 2026 – July 2026 · 2 Months",
    durationShort: "Jun 2026 – Jul 2026",
    description:
      "Contributed to enterprise applications involving authentication, financial reporting, data integration, and internal business systems.",
    subtitle: "Enterprise Application Development",
    contributions: [
      {
        number: "01",
        title: "Enterprise Authentication & RBAC",
        bullets: [
          "Developed a centralized Authentication & RBAC portal for enterprise user management.",
          "Integrated user information from 10+ internal systems into a unified search interface.",
          "Consolidated user roles, groups, system memberships, authentication status, and account status into a single interface.",
          "Analyzed authentication and RBAC workflows across 14 internal systems.",
        ],
      },
      {
        number: "02",
        title: "Data Aggregator Platform",
        bullets: [
          "Designed and developed a data aggregation service integrating data from the SBA database and external APIs.",
          "Consolidated financial information to calculate customers' net balances.",
          "Generated separate customer and financial report files automatically.",
          "Implemented scheduled processing for automated monthly data processing.",
        ],
      },
      {
        number: "03",
        title: "TFEX MIS Report R2643",
        bullets: [
          "Developed and enhanced the TFEX MIS Report R2643 across Database, Backend, and Frontend layers.",
          "Modified SQL Server schemas, data mapping, and XML import logic to support new data structures.",
          "Updated backend processing, report interfaces, and CSV export functionality.",
          "Added support for Cost Value, Market Value, and Other Collateral Movement data.",
        ],
      },
      {
        number: "04",
        title: "Accounting Audit Reports",
        bullets: [
          "Generated and exported quarterly Accounting Audit reports for Q2 2026.",
          "Retrieved and consolidated data from SQL Server, Smart System, and TFEX MIS.",
          "Prepared and formatted 6 reports according to Accounting department standards.",
        ],
      },
      {
        number: "05",
        title: "Global Trade Operations & Documentation",
        bullets: [
          "Learned and operated daily Global Trade system startup and shutdown procedures.",
          "Studied Smart Customer workflows, modules, and operational processes.",
          "Created structured operational documentation and step-by-step guides with screenshots.",
          "Performed daily system startup and shutdown procedures independently.",
        ],
      },
    ],
    technologies: [
      "C# / .NET",
      "NestJS",
      "React",
      "PHP",
      "SQL Server",
      "DBeaver",
      "REST API",
      "Cron Jobs",
      "XML",
      "CSV",
    ],
  },
  {
    id: "exp-2",
    position: "Frontend Developer & UX/UI Designer",
    company: "indistinct",
    companyFull: "indistinct",
    workType: "Internship · Remote / WFH",
    duration: "August 13, 2025 – February 13, 2026 · 6 Months",
    durationShort: "Aug 2025 – Feb 2026",
    description:
      "Collaborated in a remote environment, specializing in full-cycle design and development of user-centric web applications.",
    subtitle: "UX/UI & Frontend Development",
    contributions: [
      {
        number: "01",
        title: "UX/UI Architecture",
        bullets: [
          "Designed high-fidelity wireframes and user flows using Figma and FigJam, utilizing Mermaid for technical system sequence diagrams.",
        ],
      },
      {
        number: "02",
        title: "Frontend Development",
        bullets: [
          "Developed responsive web interfaces using Angular and Tailwind CSS, focusing on modular component design and seamless user interaction.",
        ],
      },
      {
        number: "03",
        title: "System Visualization",
        bullets: [
          "Streamlined communication between design and development teams by creating clear architectural diagrams to visualize complex logic.",
        ],
      },
      {
        number: "04",
        title: "Remote Efficiency",
        bullets: [
          "Demonstrated high self-discipline and task management while working 100% remotely in an agile environment.",
        ],
      },
    ],
    technologies: [
      "Angular",
      "Tailwind CSS",
      "Figma",
      "FigJam",
      "Mermaid",
      "Agile",
    ],
  },
];
