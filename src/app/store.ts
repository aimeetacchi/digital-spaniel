import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import projectReducer from "../features/projects/projectsSlice"
import caseStudiesReducer from "../features/caseStudies/caseStudiesSlice"

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    caseStudies: caseStudiesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
