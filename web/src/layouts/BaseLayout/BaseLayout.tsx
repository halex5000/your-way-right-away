import { useState } from 'react'

import {
  Menu as MenuIcon,
  Brightness7,
  Brightness4,
  Inbox,
  Mail,
  Dashboard,
  Create,
} from '@mui/icons-material'
import {
  Typography,
  Card,
  Box,
  ThemeProvider,
  createTheme,
  AppBar,
  IconButton,
  Toolbar,
  Paper,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CardHeader,
  CardContent,
} from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [preferredTheme, setLocalTheme] = useState('dark')

  const toggleTheme = () => {
    setLocalTheme(preferredTheme === 'dark' ? 'light' : 'dark')
  }

  const theme = createTheme({
    palette: {
      mode: preferredTheme === 'dark' ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
        }}
      >
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LaunchDarkly Dashboard Builder
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem key={'createDashboard'} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Create />
                  </ListItemIcon>
                  <ListItemText primary={'Create Dashboard'} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              {[
                'Product Manager Dashboard',
                'Lead Engineer Dashboard',
                'Developer Dashboard',
                'Ops Dashboard',
              ].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <>{children}</>
      </Box>
    </ThemeProvider>
  )
}

export default BaseLayout
