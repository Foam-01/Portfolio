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
  {
    id: '11',
    title: '📈 List of Stocks',
    description: 'A simple web page that displays a list of stocks and ETFs with tables for quick viewing.',
    technologies: ['HTML', 'CSS'],
    imageUrl: '/images/inventory11.png',
    
    githubUrl: 'https://github.com/Foam-01/List-of-stocks',
    featured: false,
},
{
    id: '12',
    title: '🩺 Doctor-s',
    description: 'A full-stack web application for doctor appointment and patient management, including backend API, frontend UI, and test modules.',
    technologies: ['React.js', 'Node.js', 'Python', 'FastAPI', 'MongoDB'],
    imageUrl: '/images/inventory12.png',
    
    githubUrl: 'https://github.com/Foam-01/doctor-s',
    featured: false,
},
{
    id: '13',
    title: '🐱 Flutter List of Cat Breeds',
    description: 'A cross-platform Flutter app that displays a list of cat breeds with detailed information, supporting Android, iOS, web, and desktop platforms.',
    technologies: ['Flutter', 'Dart'],
    imageUrl: '/images/inventory13.png',
    liveUrl: '', // ถ้ามีลิงก์ตัวอย่างเว็บหรือไฟล์ APK ให้ใส่ที่นี่
    githubUrl: 'https://github.com/Foam-01/Flutter-List-of-cat-breeds',
    featured: false,
},
{
    id: '14',
    title: '🐾 Flutter Cat App Result',
    description: 'A Flutter app showcasing cat breed search results and details, supporting multiple platforms including Android, iOS, web, and desktop.',
    technologies: ['Flutter', 'Dart'],
    imageUrl: '/images/inventory14.png',
    liveUrl: '', // ถ้ามีลิงก์ตัวอย่างเว็บหรือไฟล์ APK ให้ใส่ที่นี่
    githubUrl: 'https://github.com/Foam-01/Flutter_CatApp_Result',
    featured: false,
},
{
    id: '15',
    title: '🔌 Flutter Custom API',
    description: 'A Flutter application demonstrating how to connect and fetch data from a custom API, supporting Android, iOS, web, and desktop platforms.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    imageUrl: '/images/inventory15.png',
    liveUrl: '', // ถ้ามีลิงก์ตัวอย่างเว็บหรือไฟล์ APK ให้ใส่ที่นี่
    githubUrl: 'https://github.com/Foam-01/FlutterCustomAPI',
    featured: false,
},
{
    id: '16',
    title: '🏢 Flutter Company List API Presentation',
    description: 'A Flutter app that fetches and presents a list of companies from an API, showcasing data in an organized and user-friendly UI. Supports Android, iOS, web, and desktop.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    imageUrl: '/images/inventory16.png',
    liveUrl: '', // ถ้ามีลิงก์ APK หรือเว็บให้ใส่ที่นี่
    githubUrl: 'https://github.com/Foam-01/Flutter_CompanyList_API_Presentation',
    featured: false,
},
{
    id: '17',
    title: '🎯 Flutter Anime Finder App (Full)',
    description: 'A Flutter application for searching and discovering anime with detailed information. Supports Android, iOS, web, and desktop platforms.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    imageUrl: '/images/inventory17.png',
    liveUrl: '', // ใส่ลิงก์ APK หรือเว็บถ้ามี
    githubUrl: 'https://github.com/Foam-01/flutter-anime_finder_app_full',
    featured: false,
},
{
    id: '18',
    title: '👷 Worker Mobile',
    description: 'A Flutter mobile application designed for worker task management and tracking, supporting Android, iOS, web, and desktop platforms.',
    technologies: ['Flutter', 'Dart'],
    imageUrl: '/images/inventory18.png',
    liveUrl: '', // ถ้ามีไฟล์ APK หรือเว็บให้ใส่ที่นี่
    githubUrl: 'https://github.com/Foam-01/worker-mobile-',
    featured: false,
},


]