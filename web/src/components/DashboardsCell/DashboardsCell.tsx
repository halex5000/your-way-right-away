import { Box, Grid } from '@mui/material'
import type { DashboardsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Dashboard from '../Dashboard/Dashboard'

export const QUERY = gql`
  query DashboardsQuery {
    dashboards {
      id
      name
      key
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ dashboards }: CellSuccessProps<DashboardsQuery>) => {
  return (
    <Box component="main">
      {dashboards.map((dashboard) => {
        return (
          <Box
            key={dashboard.id}
            sx={{ backgroundColor: 'white' }}
            margin={0.25}
            padding={2}
          >
            <Dashboard key={dashboard.id} dashboard={dashboard}></Dashboard>
          </Box>
        )
      })}
    </Box>
  )
}
