import { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import {
  Card,
  Box,
  Toolbar,
  CardHeader,
  CardContent,
  Button,
  AppBar,
  Typography,
  createTheme,
  ThemeProvider,
  alpha,
  InputBase,
  styled,
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'

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

const Search = ({ placeholder }) => (
  <SearchInput placeholder={placeholder} adornment={<SearchAdornment />} />
)
const SearchAdornment = () => {
  return (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  )
}

const SearchInput = ({ placeholder, adornment }) => (
  <TextField
    sx={{ float: 'left' }}
    size="small"
    fullWidth
    placeholder={placeholder}
    InputProps={{ startAdornment: adornment }}
  />
)

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
          paddingTop: 5,
          backgroundColor: '#e6e6e6',
          minHeight: '100%',
          width: '100%',
        }}
      >
        <MetaTags
          title="DashboardBuilder"
          description="DashboardBuilder page"
        />

        <Box sx={{ backgroundColor: 'white', height: 80, width: '100%', p: 2 }}>
          <Typography variant="h4">Dashboards</Typography>
          <Typography>
            Use this page to see all your dashboards, create new ones, and
            manage existing dashboards
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#e6e6e6',
          }}
        >
          <Box border={1} sx={{ backgroundColor: 'white' }}>
            <Grid container spacing={2}>
              <Grid item xs={4} margin={2}>
                <Search placeholder="Find a dashboard by name, key, or description" />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2} margin={2} marginRight={0}>
                <Typography component="span">Sort: </Typography>
                <Select
                  id="demo-simple-select-helper"
                  label="Sort"
                  size="small"
                  defaultValue="creatednewest"
                >
                  <MenuItem value="creatednewest">Created newest</MenuItem>
                  <MenuItem value="createdoldest">Created oldest</MenuItem>
                  <MenuItem value="nameatoz">Name A-Z</MenuItem>
                  <MenuItem value="nameztoa">Name Z-A</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3} margin={2}>
                <Button sx={{ float: 'right' }} variant="contained">
                  Create Dashboard
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* <ResponsiveGridLayout
          backgroundColor="#e6e6e6"
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
        </ResponsiveGridLayout> */}
      </Box>
    </ThemeProvider>
  )
}

export default DashboardBuilderPage
