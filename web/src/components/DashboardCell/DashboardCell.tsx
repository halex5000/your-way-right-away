import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'
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
          paddingTop: 10,
          backgroundColor: '#e6e6e6',
          minHeight: '100%',
          width: '100%',
        }}
      >
        {JSON.stringify(dashboard)}
      </Box>
    </ThemeProvider>
  )
}
