import { useState } from 'react'

import {
  Typography,
  Card,
  Box,
  Toolbar,
  CardHeader,
  CardContent,
  Button,
} from '@mui/material'
import GridLayout, {
  Responsive as ResponsiveGridLayout,
} from 'react-grid-layout'

import { MetaTags } from '@redwoodjs/web'

import WidgetInput from 'src/components/WidgetInput/WidgetInput'

type CardInfo = {
  name: string
  title: string
  content: string
}

type LayoutInfo = {
  i: string
  x: number
  y: number
  w: number
  h: number
}

const DashboardBuilderPage = () => {
  const [layouts, setLayouts] = useState<LayoutInfo[]>([])

  const [cards, setCards] = useState<CardInfo[]>([])

  const addCard = () => {
    setCards([
      ...cards,
      {
        name: 'flagvalues',
        title: 'Flag Values',
        content: 'Hello, I am a very good component',
      },
    ])
    setLayouts([{ i: 'flagvalues', x: 50, y: 20, w: 10, h: 2 }])
  }

  const [widgetDrawerOpen, setWidgetDrawerOpen] = useState(false)

  const toggleWidgetDrawer = () => {
    setWidgetDrawerOpen(!widgetDrawerOpen)
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <WidgetInput open={widgetDrawerOpen} toggleDrawer={toggleWidgetDrawer} />
      <MetaTags title="DashboardBuilder" description="DashboardBuilder page" />
      <Toolbar sx={{ mt: 5 }}>
        <Button variant="contained" onClick={toggleWidgetDrawer}>
          Add Widget
        </Button>
      </Toolbar>
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
        {cards.map(({ name, title, content }) => (
          <Card key={name}>
            <CardHeader title={title}></CardHeader>
            <CardContent>{content}</CardContent>
          </Card>
        ))}
      </ResponsiveGridLayout>
    </Box>
  )
}

export default DashboardBuilderPage
