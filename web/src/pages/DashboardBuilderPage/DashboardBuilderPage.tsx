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
  const [layouts, setLayouts] = useState<LayoutInfo[]>([
    { i: 'a', x: 50, y: 20, w: 10, h: 2 },
  ])

  const [cards, setCards] = useState<CardInfo[]>([])

  const addCard = () => {}

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <MetaTags title="DashboardBuilder" description="DashboardBuilder page" />
      <Toolbar sx={{ mt: 5 }}>
        <Button variant="contained" onClick={addCard}>
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
