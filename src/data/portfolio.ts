import type { PortfolioData } from '../types'
import profile from '../assets/myimg.png'
import resume from '../assets/Akshay_Resume.pdf'
import imageProj1 from '../assets/imageProj1.png'

export const portfolioData: PortfolioData = {
  name: 'AKSHAY CHAUDHARY',
  title: 'Full Stack Developer',
  tagline:
    'Full-stack developer pursuing MCA with industry experience building production-grade platforms and SaaS products.Experienced in collaborating across teams, translating requirements into scalable solutions, and delivering business- focused outcomes.Strong interest in technology transformation, product thinking, and solving real - world business challenges',
  email: 'akshaypunia.info@gmail.com',
  profilePhoto: profile,
  resumeUrl: resume,
  resumeFileName: 'Akshay_Resume.pdf',

  about: {
    education1: {
      degree: 'Bachelor in Computer Application',
      institution: 'Guru Gobind Singh Indraprastha University',
      period: '2021 – 2024'
    },
    education2: {
      degree: 'Masters in Computer Application',
      institution: 'Uttaranchal University',
      period: '2024 – 2026',
    },
    summary:
      'I specialize in designing and building backend systems — RESTful APIs, database architecture, authentication, and cloud deployment — while delivering clean, responsive frontends with React and TypeScript.',
    profile:
      'As a backend-focused full stack developer, I prioritize performance, maintainability, and clear API contracts. I enjoy owning features end-to-end: from schema design and server logic to polished UI integration.',
  },

  experience: [
    {
      id: 'exp-1',
      title: 'Full Stack Developer',
      company: 'Recogsnap Technology Pvt. Ltd.',
      location: 'Remote',
      period: 'Sept 2025 – Dec 2025',
      type: 'full-time',
      description: [
        'Developed and delivered production-grade modules for enterprise monitoring platforms handling real-time system analytics and alerts',
        'Built and optimized REST APIs and backend workflows, improving data processing efficiency and reducing latency across critical endpoints',
        'Improved UI performance of company’s website and system reliability by fixing production issues and optimizing frontend-backend interactions',
        'Collaborated with cross-functional stakeholders to convert business requirements into production-ready features and measurable improvements.',
      ],
    },
    {
      id: 'exp-2',
      title: 'Freelance AI Training Specialist',
      company: 'Outlier AI',
      location: 'Remote',
      period: 'March 2025 – May 2025',
      type: 'Freelancing',
      description: [
        'Trained Large Language Models (LLMs) by creating, reviewing, and evaluating React, Next.js, JavaScript, and TypeScript based coding tasks and solutions.',
        'Validated AI-generated frontend code for correctness, code quality, responsiveness, accessibility, and best practices, providing detailed technical feedback to improve model performance.',
        'Designed high-quality prompts and compared multiple AI responses to identify the most accurate, maintainable, and production-ready solutions for real-world frontend scenarios.',
        'Worked remotely as a freelance contributor, following detailed project guidelines while maintaining high-quality technical evaluations across modern frontend technologies.'
      ],
    },
    {
      id: 'exp-3',
      title: 'Full Stack Developer Intern',
      company: 'Recogsnap Technology Pvt. Ltd.',
      location: 'Remote',
      period: 'July 2024 – Dec 2024',
      type: 'Internship',
      description: [
        'Built and enhanced scalable web application modules across both frontend and backend systems using modern development frameworks.',
        'Integrated APIs, managed data flow between client and server, and improved application performance, reliability, and usability',
        'Worked closely with developers to troubleshoot issues, implement new features, and deliver production-ready code in an Agile development environment.',
      ],
    },
  ],

  skills: [
    {
      id: 'frontend',
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'JWT Auth'],
    },
    {
      id: 'database',
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'SQL Optimization'],
    },
    {
      id: 'tools',
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Postman', 'Vite'],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      name: 'API Monitoring and Alerting System',
      description:
        'API Monitoring SaaS is a platform that helps developers monitor API uptime, latency, and failures across multiple projects from a centralized dashboard. It features automated health checks, secure authentication-aware monitoring, historical performance analytics, and persistent logging for debugging and observability, while safely handling non-idempotent APIs to prevent unintended data modifications.',
      image: imageProj1,
      techStack: ['Next.js', 'Tailwind', 'PostgreSQL', 'Node.js', 'Prisma', 'express.js', 'Git'],
      githubUrl: '',
      liveUrl: 'https://api-sentinal.vercel.app/',
    },
    {
      id: 'proj-2',
      name: 'Service Marketplace Backend',
      description:
        'Service Marketplace Backend is a scalable backend system that supports multiple user roles through role-based access control (RBAC). It includes secure payment processing with webhook verification, reliable transaction handling to maintain data consistency, and a structured order management workflow that enforces business rules throughout the order lifecycle.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      techStack: ['PostgreSQL', 'Node.js', 'Prisma', 'express.js', 'Git'],
      githubUrl: 'https://github.com/akshaypunia0/urban_ecom_company_backend',
      liveUrl: '',
    },
    {
      id: 'proj-3',
      name: 'Enterprise User Management API',
      description:
        'Developed a scalable backend system using Node.js, Express, Prisma, and PostgreSQL. Implemented JWT authentication, Role-Based Access Control (RBAC), pagination, search, soft delete, and rate limiting. Designed a clean and modular architecture with comprehensive Swagger API documentation. Deployed the application with a live API and interactive documentation following real-world backend development practices.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      techStack: ['Node.js','express.js', 'JWT', 'PostgreSQL', 'Prisma', 'bcrypt', 'Rate Limiting', 'Swagger'],
      githubUrl: 'https://github.com/akshaypunia0/zorvyn-finance-access-control-backend',
      liveUrl: 'https://zorvyn-finance-access-control-backend.onrender.com/docs',
    },
  ],

  openSource: [
    {
      id: 'oss-1',
      name: 'rbac-express-auth',
      description:
        'Developed an open-source Express.js middleware package to simplify Role-Based Access Control (RBAC) with JWT authentication and permission-based route protection. Designed for easy integration, reusable architecture, and production-ready authorization workflows in Node.js applications. Published on npm with 110+ downloads, demonstrating practical experience in building and maintaining open-source developer tools.',
      downloads: '110+ Downloads',
      githubUrl: 'https://github.com/akshaypunia0/RBAC-auth-npm-package',
      npmUrl: 'https://www.npmjs.com/package/rbac-express-auth',
    }
  ],

  socialLinks: [
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:akshaypunia.info@gmail.com',
      icon: 'email',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/akshaypunia',
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/akshaypunia0',
      icon: 'github',
    },
  ],
}
