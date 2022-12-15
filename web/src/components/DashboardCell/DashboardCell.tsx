import { ReactChildren, ReactNode } from 'react'

import {
  Box,
  Chip,
  createTheme,
  Grid,
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

type DashboardHeaderProps = {
  dashboard: Dashboard
}

const DashboardHeader = ({ dashboard }: DashboardHeaderProps) => {
  return (
    <>
      <MetaTags title="Dashboard Page" description="Dashboard page" />

      <Box sx={{ backgroundColor: 'white', height: 80, width: '100%' }}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography variant="h4">{dashboard.name}</Typography>
            <Chip label={dashboard.key}></Chip>
          </Grid>
          <Grid item xs={3} sx={{ mt: 1 }}></Grid>
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
        <DashboardHeader dashboard={dashboard}></DashboardHeader>
      </Box>
    </ThemeProvider>
  )
}
