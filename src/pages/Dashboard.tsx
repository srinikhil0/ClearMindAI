import { Grid, Paper, Typography, Box } from '@mui/material'
import { SecurityScore } from '../components/dashboard/SecurityScore'
import { BiasMetrics } from '../components/dashboard/BiasMetrics'
import { ReliabilityChart } from '../components/dashboard/ReliabilityChart'
import { TransparencyMetrics } from '../components/dashboard/TransparencyMetrics'

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        AI System Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <SecurityScore />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <BiasMetrics />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <TransparencyMetrics />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <ReliabilityChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
} 