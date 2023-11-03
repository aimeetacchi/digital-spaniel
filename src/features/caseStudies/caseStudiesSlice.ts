// src/features/caseStudies/caseStudiesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { CaseStudy, CaseStudiesState } from "./caseStudiesTypes"

export const fetchCaseStudies = createAsyncThunk<CaseStudy[]>(
  "caseStudies/fetchCaseStudies",
  async () => {
    const response = await fetch("/data/caseStudies.json") // Fetching fake case studies data
    if (!response.ok) throw new Error("Could not fetch case studies.")
    return (await response.json()) as CaseStudy[]
  },
)

const initialState: CaseStudiesState = {
  items: [],
  loading: false,
  error: null,
}

const caseStudiesSlice = createSlice({
  name: "caseStudies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaseStudies.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCaseStudies.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchCaseStudies.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to load case studies"
      })
  },
})

export default caseStudiesSlice.reducer
