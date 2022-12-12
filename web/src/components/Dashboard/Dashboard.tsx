import { Box, Chip, Grid, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

type Props = {
  dashboard: {
    id: string
    name: string
    key: string
  }
}

const Dashboard = ({ dashboard }: Props) => {
  return (
    <>
      <Link to={routes.dashboard({ id: dashboard.id })}>
        <Typography>{dashboard.name}</Typography>
      </Link>
      <Chip label={dashboard.key} />
    </>
  )
}

export default Dashboard
