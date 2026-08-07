export type ProjectStatus = 'Planning' | 'In Progress' | 'Completed' | 'Archived'

export interface Project {
  id: string
  title: string
  status: ProjectStatus
  summary: string
  problem: string
  solution: string
  architecture: string[]
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  year: number
}
