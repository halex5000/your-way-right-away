import { useState, useEffect } from 'react'

import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'

const CREATE = gql`
  mutation CreateDashboardMutation($input: CreateDashboardInput!) {
    createDashboard(input: $input) {
      name
      key
    }
  }
`

import { useMutation } from '@redwoodjs/web'

const DashboardForm = ({ onCancelHandler, onSaveHandler }) => {
  const [dashboardName, setDashboardName] = useState('')
  const [dashboardKey, setDashboardKey] = useState('')
  const [createDashboard, { loading, error }] = useMutation(CREATE)

  useEffect(() => {
    setDashboardKey(
      dashboardName
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^a-z0-9-]+/gi, '')
    )
  }, [dashboardName])

  return (
    <Box sx={{ mt: 10, ml: 2, mr: 2 }} component="form">
      <Typography variant="h5">Name your dashboard</Typography>
      <FormControl margin="normal" fullWidth required>
        <InputLabel htmlFor="dashboard-name">Dashboard Name</InputLabel>
        <Input
          id="dashboard-name"
          aria-describedby="dashboard-name-helper-text"
        />
        <TextField
          label="Dashboard Name"
          value={dashboardName}
          onChange={(event) => {
            setDashboardName(event.target.value)
          }}
        />
        <FormHelperText id="dashboard-name-helper-text">
          {`This name can't be changed later`}
        </FormHelperText>
      </FormControl>
      <FormControl margin="normal" fullWidth sx={{ mb: 2 }}>
        <TextField label="Dashboard Key" disabled value={dashboardKey} />
      </FormControl>
      <ButtonGroup size="medium" fullWidth>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            createDashboard({
              variables: {
                input: {
                  name: dashboardName,
                  key: dashboardKey,
                },
              },
            })
            onSaveHandler()
          }}
        >
          Save
        </Button>
        <Button variant="contained" color="error" onClick={onCancelHandler}>
          Cancel
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default DashboardForm
