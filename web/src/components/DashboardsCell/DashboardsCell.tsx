import {
  Backdrop,
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import type { DashboardsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query DashboardsQuery {
    dashboards {
      id
      name
      key
    }
  }
`

export const Loading = () => (
  <Backdrop open={true}>
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  </Backdrop>
)

export const Empty = () => (
  <Box
    component="main"
    sx={{ height: '100%', width: '100%', justifyContent: 'center' }}
  >
    <Paper elevation={12}>
      <Typography variant="h6" sx={{ alignContent: 'center' }}>
        No dashboards yet, you should create one!!
      </Typography>
    </Paper>
  </Box>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  dashboards,
  buttons,
}: CellSuccessProps<DashboardsQuery>) => {
  return (
    <Stack component="main" direction="column">
      {dashboards.map((dashboard) => {
        return (
          <Box
            key={dashboard.id}
            sx={{ backgroundColor: 'white' }}
            margin={0.25}
            padding={2}
          >
            <Grid container>
              <Grid item xs={2}>
                <Stack direction="column">
                  <Link to={routes.dashboard({ id: dashboard.id })}>
                    <Typography>{dashboard.name}</Typography>
                  </Link>
                  <Chip label={dashboard.key}></Chip>
                </Stack>
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={2}>
                <Stack
                  spacing={1}
                  padding={2}
                  direction="row"
                  sx={{ justifyContent: 'center' }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    onClick={async () => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    fullWidth
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={() => {}}
                  >
                    Delete
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )
      })}
    </Stack>
  )
}
