import {
  Typography,
  Card,
  Box,
  Toolbar,
  CardHeader,
  CardContent,
} from '@mui/material'
import GridLayout, {
  Responsive as ResponsiveGridLayout,
} from 'react-grid-layout'

import { MetaTags } from '@redwoodjs/web'

const DashboardBuilderPage = () => {
  const layouts = [
    { i: 'a', x: 50, y: 20, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ]

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <MetaTags title="DashboardBuilder" description="DashboardBuilder page" />
      <Toolbar />
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        width="100%"
        height="100%"
        breakpoints={{
          lg: 1400,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 0,
        }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <Card elevation={12} key="a">
          <CardHeader title="Something" />
          <CardContent>
            <Typography variant="h1">poop</Typography>
          </CardContent>
        </Card>
      </ResponsiveGridLayout>
    </Box>
  )
}

export default DashboardBuilderPage
