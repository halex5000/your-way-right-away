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

import DashboardBuilder from '../DashboardBuilder/DashboardBuilder'

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
  addGizmo,
}: {
  dashboard: Dashboard
  editHandler?: Function
  cancelHandler?: Function
  saveHandler?: Function
  addGizmo?: Function
}) => {
  return (
    <>
      <MetaTags title="Dashboard Page" description="Dashboard page" />

      <Box sx={{ backgroundColor: 'white', height: 80, width: '100%' }}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography variant="h5">{dashboard.name}</Typography>
            <Chip label={dashboard.key}></Chip>
          </Grid>
          <Grid item xs={3} sx={{ mt: 1 }}>
            <Stack spacing={1} direction="row" sx={{ justifyContent: 'right' }}>
              {addGizmo && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    addGizmo()
                  }}
                >
                  Add Gizmo
                </Button>
              )}
              {saveHandler && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    saveHandler()
                  }}
                >
                  Save
                </Button>
              )}
              {cancelHandler && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    cancelHandler()
                  }}
                >
                  Cancel
                </Button>
              )}
              {editHandler && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ float: 'right' }}
                  onClick={() => {
                    editHandler()
                  }}
                >
                  Edit
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
  const [layout, setLayout] = useState()

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

  const addGizmo = () => {}

  const layoutChangeHandler = () => {}

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
          <>
            <DashboardHeader
              dashboard={dashboard}
              saveHandler={saveHandler}
              cancelHandler={cancelHandler}
              addGizmo={addGizmo}
            />
            <DashboardBuilder
              layout={layout}
              layoutChangeHandler={() => {}}
            ></DashboardBuilder>
          </>
        ) : (
          <DashboardHeader dashboard={dashboard} editHandler={editHandler} />
        )}
      </Box>
    </ThemeProvider>
  )
}
