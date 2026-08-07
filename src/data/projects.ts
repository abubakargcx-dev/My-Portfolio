import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'backend-api-starter',
    title: 'Backend API Starter',
    status: 'Planning',
    summary: 'A production-ready REST API template built with Django REST Framework, authentication, PostgreSQL, and Docker.',
    problem: 'Starting a new backend project usually means re-solving the same setup problems: auth, structure, and environment configuration.',
    solution: 'A reusable, opinionated starting point with authentication, structured settings, and containerized development already in place.',
    architecture: ['Client', 'REST API', 'Authentication', 'Business Logic', 'Database', 'Response'],
    techStack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/abubakargcx-dev',
    featured: true,
    year: 2026,
  },
  {
    id: 'ai-document-assistant',
    title: 'AI Document Assistant',
    status: 'Planning',
    summary: 'An AI-powered backend capable of processing documents, semantic search, and conversational retrieval using modern RAG techniques.',
    problem: 'Finding specific information inside long documents is slow and manual.',
    solution: 'A backend service that indexes documents and answers questions grounded in their actual content.',
    architecture: ['Client', 'REST API', 'Embedding Service', 'Vector Store', 'Response'],
    techStack: ['Python', 'Django', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/abubakargcx-dev',
    featured: true,
    year: 2026,
  },
  {
    id: 'task-management-platform',
    title: 'Task Management Platform',
    status: 'Planning',
    summary: 'A scalable project management backend supporting authentication, permissions, notifications, and REST APIs.',
    problem: 'Teams need a reliable, permissioned way to track shared work without heavyweight tooling.',
    solution: 'A backend built around clear roles, predictable permissions, and a documented REST API.',
    architecture: ['Client', 'REST API', 'Authentication', 'Business Logic', 'Database', 'Response'],
    techStack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
    githubUrl: 'https://github.com/abubakargcx-dev',
    featured: true,
    year: 2026,
  },
]

export const futureProjects: string[] = [
  'Authentication Service',
  'URL Shortener',
  'Chat Application',
  'Inventory System',
  'AI Knowledge Base',
  'Microservices Playground',
  'Cloud Deployment Portfolio',
]
