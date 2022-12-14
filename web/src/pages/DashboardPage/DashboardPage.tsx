import { Box } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import Dashboard from 'src/components/Dashboard/Dashboard'

type Props = {
  id: string
}

const DashboardPage = ({ id }: Props) => {
  return (
    <Box sx={{ mt: 7, width: '100%' }}>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <Dashboard id={id} />
    </Box>
  )
}

export default DashboardPage
