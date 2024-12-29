import { configureStore } from '@reduxjs/toolkit'
import securityReducer from './slices/securitySlice'
import biasReducer from './slices/biasSlice'
import transparencyReducer from './slices/transparencySlice'
import reliabilityReducer from './slices/reliabilitySlice'

export const store = configureStore({
  reducer: {
    security: securityReducer,
    bias: biasReducer,
    transparency: transparencyReducer,
    reliability: reliabilityReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 