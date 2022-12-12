import { Box, Typography } from '@mui/material'
import type {
  FindDashboardQuery,
  FindDashboardQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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

export const Success = ({
  dashboard,
}: CellSuccessProps<FindDashboardQuery, FindDashboardQueryVariables>) => {
  return (
    <Box>
      <Typography>This is where we have some real work to do</Typography>
    </Box>
  )
}
