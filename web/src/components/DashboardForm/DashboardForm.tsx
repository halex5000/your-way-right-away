/* eslint-disable import/order */
import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

const CREATE = gql`
  mutation CreateDashboardMutation($input: CreateDashboardInput!) {
    createDashboard(input: $input) {
      name
      key
      id
    }
  }
`

import {
  CreateDashboardMutation,
  CreateDashboardMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'

const DashboardForm = ({ onCancelHandler, onSaveHandler }) => {
  const [dashboardName, setDashboardName] = useState('')
  const [dashboardKey, setDashboardKey] = useState('')
  const [createDashboard, { dashboardLoading, dashboardError }] = useMutation<
    CreateDashboardMutation,
    CreateDashboardMutationVariables
  >(CREATE)

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
      <Stack spacing={1} direction="row" sx={{ justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={async () => {
            await createDashboard({
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
        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={onCancelHandler}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  )
}

export default DashboardForm
