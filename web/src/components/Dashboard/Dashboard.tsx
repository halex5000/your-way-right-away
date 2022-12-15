import { ReactChildren } from 'react'

import { Grid } from '@mui/material'
import GridLines from 'react-gridlines'

import DashboardCell from 'src/components/DashboardCell'
import GizmosCell from 'src/components/GizmosCell'

type Props = {
  id: string
  buttons?: React.ReactNode
}

const Dashboard = ({ id, buttons }: Props) => {
  return (
    <Grid container height="90%">
      <Grid item xs={9}>
        <DashboardCell id={id} />
      </Grid>
      <Grid sx={{ mt: 2, float: 'right' }} xs={3}>
        {buttons}
      </Grid>
      <Grid item xs={12} height="100%">
        <GizmosCell dashboardId={id} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
