import { useState } from 'react'

import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  createTheme,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material'
import type {
  Dashboard,
  FindDashboardQuery,
  FindDashboardQueryVariables,
} from 'types/graphql'

import { CellSuccessProps, CellFailureProps, MetaTags } from '@redwoodjs/web'

export const QUERY = gql`
  query FindDashboardQuery($id: String!) {
    dashboard: dashboard(id: $id) {
      id
      name
      key
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDashboardQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const DashboardHeader = ({
  dashboard,
  editHandler,
  cancelHandler,
  saveHandler,
}: {
  dashboard: Dashboard
  editHandler?: Function
  cancelHandler?: Function
  saveHandler?: Function
}) => {
  return (
    <>
      <MetaTags title="Dashboard Page" description="Dashboard page" />

      <Box sx={{ backgroundColor: 'white', height: 80, width: '100%' }}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Typography variant="h5">{dashboard.name}</Typography>
            <Chip label={dashboard.key}></Chip>
          </Grid>
          <Grid item xs={2} sx={{ mt: 1 }}>
            <Stack
              spacing={1}
              direction="row"
              sx={{ justifyContent: 'center' }}
            >
              {editHandler && (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={() => {
                    editHandler()
                  }}
                >
                  Edit
                </Button>
              )}
              {saveHandler && (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={() => {
                    saveHandler()
                  }}
                >
                  Save
                </Button>
              )}
              {cancelHandler && (
                <Button
                  fullWidth
                  variant="contained"
                  color="error"
                  onClick={() => {
                    cancelHandler()
                  }}
                >
                  Cancel
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export const Success = ({
  dashboard,
}: CellSuccessProps<FindDashboardQuery, FindDashboardQueryVariables>) => {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#405BFF',
      },
    },
  })

  const [isEditMode, setIsEditMode] = useState(false)

  const editHandler = () => {
    setIsEditMode(true)
  }

  const saveHandler = () => {
    console.log('saving stuff')
    setIsEditMode(false)
  }

  const cancelHandler = () => {
    setIsEditMode(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          backgroundColor: '#e6e6e6',
          minHeight: '100%',
          width: '100%',
        }}
      >
        {isEditMode ? (
          <DashboardHeader
            dashboard={dashboard}
            saveHandler={saveHandler}
            cancelHandler={cancelHandler}
          />
        ) : (
          <DashboardHeader dashboard={dashboard} editHandler={editHandler} />
        )}
      </Box>
    </ThemeProvider>
  )
}
