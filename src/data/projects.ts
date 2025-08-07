export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

// Sample project data
export const projects: Project[] = [
  {
    id: '1',
    title: '📦 POS Inventory Management System',
    description: 'Full-stack system for managing products and inventory with React, Node.js, and PostgreSQL. Features include product CRUD, user roles (Admin/Staff), stock tracking, and JWT authentication.',
    technologies: ['React',  'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/images/inventory.png',
    liveUrl: '',
    githubUrl: 'https://github.com/Foam-01/ReactAppWorkshopPOS?tab=readme-ov-file',
    featured: true,
  },
  {
    id: '2',
    title: '🧾 Thai-English Dictionary',
    description: 'A static website for learning basic English vocabulary with Thai meanings and pronunciation. Built using HTML, CSS, and JavaScript. Fully responsive and optimized for simplicity and speed.',
    technologies: ['HTML', 'CSS', 'JavaScript',],
    imageUrl: '/images/inventory2.png',
    liveUrl: 'https://thai-english-dictionary.netlify.app/',
    githubUrl: 'https://github.com/Foam-01/Thai-English-Dictionary?tab=readme-ov-file',
    featured: true,
  },
  {
    id: '3',
    title: '🤖 Llama3 Chat AI',
    description: 'A chatbot built with TypeScript and integrated with the Llama3 language model for real-time question and answer interaction. Designed with a responsive UI to deliver an engaging conversational experience.',
    technologies: ['TypeScript', 'Llama3', 'Next.js', 'React.js' , 'Tailwind CSS'],
    imageUrl: '/images/inventory3.png',
    liveUrl: '',
    githubUrl: 'https://github.com/Foam-01/llama3-chat-ai?tab=readme-ov-file',
    featured: false,
  },
  {
    id: '4',
    title: '🌸 Template-Anime',
    description: 'Anime-themed responsive UI template built using React.js and Tailwind CSS. Perfect for anime streaming sites, fan showcases, or otaku platforms. Includes category-based layouts and horizontal anime carousels. Built with Vite and PostCSS and deployed via GitHub Pages.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'PostCSS'],
    imageUrl: '/images/inventory4.png',
    liveUrl: 'https://template-anime.netlify.app/',
    githubUrl: 'https://github.com/Foam-01/Template-Anime',
    featured: true,
  },
  {
    id: '5',
    title: '💰 Financial Management App',
    description: 'A desktop personal finance application built with Java. Enables users to track income, expenses, and generate monthly financial reports. Includes categorized spending for clear analysis.',
    technologies: ['Java', 'JavaFX', 'OOP'],
    imageUrl: '/images/inventory5.png',
    liveUrl: '',
    githubUrl: 'https://github.com/Foam-01/financial-management-app',
    featured: false,
  },
  {
    id: '6',
    title: '📝 Review App',
    description: 'A Java-based system for user-submitted product reviews. Features full CRUD operations with rating capabilities. Designed with an intuitive interface for viewing and managing user feedback.',
    technologies: ['Java', 'JavaFX', 'OOP'],
    imageUrl: '/images/inventory6.png',
    githubUrl: 'https://github.com/Foam-01/review-app?tab=readme-ov-file',
    featured: false,
  },
  {
    id: '7',
    title: '📊 Excel to Web Data Chart System',
    description: 'A web-based tool that converts Excel spreadsheet data into interactive charts using JavaScript. Features drag-and-drop Excel upload and real-time visualization directly in the browser.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Chart.js', 'SheetJS'],
    imageUrl: '/images/inventory7.png',
    liveUrl: 'https://helmet-detection-system.netlify.app/',
    githubUrl: 'https://github.com/Foam-01/Excel-to-Web-Data-Chart-System',
    featured: false,
  },
  {
    id: '8',
    title: '⚗️ Chemical Conversion Tool',
    description: 'A lightweight web tool for converting between chemical units such as mass, mole, and concentration. Designed to assist students and researchers with quick, accurate conversions.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: '/images/inventory8.png',
    liveUrl: 'https://chemistryconversionapp.netlify.app/',
    githubUrl: 'https://github.com/Foam-01/chemicalconversion?tab=readme-ov-file',
    featured: false,
  },
  {
    id: '9',
    title: '🍰 Yum-cafe Website',
    description: 'A beautiful and responsive website for Yum-cafe, a bakery and cafe that serves delicious pastries and drinks. Built with clean HTML and CSS with Google Maps integration.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    imageUrl: '/images/inventory9.png',
    liveUrl: 'https://yum-cafe.netlify.app/',
    githubUrl: 'https://github.com/Foam-01/Yum-cafe',
    featured: true,
  },
  {
    id: '10',
    title: '🧺 Laundry Management System',
    description: 'A web app to manage laundry machines: real‑time status, booking, admin panel, and usage stats.',
    technologies: ['React.js', 'Tailwind CSS', 'FastAPI', 'MongoDB', ],
    imageUrl: '/images/inventory10.png',
    liveUrl: 'https://laundry-add.netlify.app/',
    githubUrl: 'https://github.com/Foam-01/laundry-app',
    featured: true,
  },

]