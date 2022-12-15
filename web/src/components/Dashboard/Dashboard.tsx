import { Grid } from '@mui/material'

import DashboardCell from 'src/components/DashboardCell'
import GizmosCell from 'src/components/GizmosCell'
import GizmosEditorCell from 'src/components/GizmosEditorCell'

type Props = {
  id: string
  buttons?: React.ReactNode
  mode: 'readonly' | 'editing'
}

const Dashboard = ({ id, buttons, mode }: Props) => {
  return (
    <Grid container height="90%">
      <Grid item xs={9}>
        <DashboardCell id={id} />
      </Grid>
      <Grid item sx={{ mt: 2 }} xs={3}>
        {buttons}
      </Grid>
      <Grid paddingTop={1} item xs={12} height="100%">
        {mode === 'editing' ? (
          <GizmosEditorCell dashboardId={id} />
        ) : (
          <GizmosCell dashboardId={id} />
        )}
      </Grid>
    </Grid>
  )
}

export default Dashboard
