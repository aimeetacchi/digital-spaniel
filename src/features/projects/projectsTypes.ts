// src/features/projects/projectsTypes.ts
export interface Project {
  id: number
  image: string
  title: string
  description: string
  link: string
}

export interface ProjectState {
  items: Project[]
  loading: boolean
  error: string | null
}
