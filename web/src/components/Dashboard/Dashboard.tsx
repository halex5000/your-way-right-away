import { Box, Card, Chip, Grid, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

import DashboardCell from 'src/components/DashboardCell'
import GizmosCell from 'src/components/GizmosCell'

type Props = {
  id: string
}

const Dashboard = ({ id }: Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <DashboardCell id={id} />
      </Grid>
      <Grid item xs={12}>
        <GizmosCell dashboardId={id} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
