import { Box, Typography, CircularProgress } from '@mui/material'
import { Security as SecurityIcon } from '@mui/icons-material'

export function SecurityScore() {
  // This would normally come from your API/state management
  const score = 85

  return (
    <Box sx={{ textAlign: 'center', position: 'relative' }}>
      <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
      <Typography variant="h6" gutterBottom>
        Security Score
      </Typography>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={score}
          size={80}
          thickness={4}
          sx={{ color: score > 70 ? 'success.main' : score > 50 ? 'warning.main' : 'error.main' }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" component="div" color="text.secondary">
            {score}%
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        System Security Status
      </Typography>
    </Box>
  )
} 