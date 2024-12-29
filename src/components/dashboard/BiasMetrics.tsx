import { Box, Typography, LinearProgress } from '@mui/material'
import { Balance as BalanceIcon } from '@mui/icons-material'

export function BiasMetrics() {
  // This would come from Redux store in production
  const biasScores = {
    gender: 92,
    ethnicity: 88,
    age: 90,
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <BalanceIcon sx={{ fontSize: 40, color: 'primary.main', mr: 1 }} />
        <Typography variant="h6">Bias Analysis</Typography>
      </Box>

      {Object.entries(biasScores).map(([category, score]) => (
        <Box key={category} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
              {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {score}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={score}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                backgroundColor: score > 90 ? 'success.main' : score > 80 ? 'warning.main' : 'error.main',
              },
            }}
          />
        </Box>
      ))}

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Overall Fairness Score
      </Typography>
    </Box>
  )
} 