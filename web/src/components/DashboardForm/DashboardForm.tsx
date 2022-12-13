import { useState, useEffect } from 'react'

import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'

const DashboardForm = () => {
  const [dashboardName, setDashboardName] = useState('')
  const [dashboardKey, setDashboardKey] = useState('')

  useEffect(() => {
    setDashboardKey(dashboardName.toLowerCase().replace(' ', '-'))
  }, [dashboardName])
  return (
    <Box sx={{ mt: 10, ml: 2, mr: 2 }} component="form">
      <Typography variant="h5">Name your dashboard</Typography>
      <FormControl margin="normal" fullWidth>
        <TextField
          label="Dashboard Name"
          value={dashboardName}
          onChange={(event) => {
            setDashboardName(event.target.value)
          }}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField label="Dashboard Key" disabled value={dashboardKey} />
      </FormControl>
      <ButtonGroup size="medium" fullWidth>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="error">
          Cancel
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default DashboardForm
