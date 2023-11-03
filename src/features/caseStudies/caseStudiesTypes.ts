// src/features/projects/caseStudiesTypes.ts
export interface CaseStudy {
  id: number
  image: string
  title: string
  description: string
  link: string
}

export interface CaseStudiesState {
  items: CaseStudy[]
  loading: boolean
  error: string | null
}
