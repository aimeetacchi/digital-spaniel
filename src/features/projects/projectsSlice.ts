// src/features/caseStudies/caseStudiesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Project, ProjectState } from "./projectsTypes"

export const fetchProjects = createAsyncThunk<Project[]>(
  "projects/fetchProjects",
  async () => {
    const response = await fetch("/data/projects.json") // Fetching fake projects data
    if (!response.ok) throw new Error("Could not fetch projects.")
    return (await response.json()) as Project[]
  },
)

const initialState: ProjectState = {
  items: [],
  loading: false,
  error: null,
}

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to load projects"
      })
  },
})

export default projectSlice.reducer
