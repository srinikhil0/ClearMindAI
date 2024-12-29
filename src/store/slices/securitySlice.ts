import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SecurityState {
  score: number
  threats: number
  lastScan: string
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState: SecurityState = {
  score: 85,
  threats: 0,
  lastScan: new Date().toISOString(),
  status: 'idle',
  error: null,
}

export const fetchSecurityMetrics = createAsyncThunk(
  'security/fetchMetrics',
  async () => {
    // This would be replaced with actual API call
    const response = await Promise.resolve({
      score: 85,
      threats: 0,
      lastScan: new Date().toISOString(),
    })
    return response
  }
)

export const securitySlice = createSlice({
  name: 'security',
  initialState,
  reducers: {
    updateScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload
    },
    setThreats: (state, action: PayloadAction<number>) => {
      state.threats = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSecurityMetrics.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSecurityMetrics.fulfilled, (state, action) => {
        state.status = 'idle'
        state.score = action.payload.score
        state.threats = action.payload.threats
        state.lastScan = action.payload.lastScan
      })
      .addCase(fetchSecurityMetrics.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch security metrics'
      })
  },
})

export const { updateScore, setThreats } = securitySlice.actions
export default securitySlice.reducer 