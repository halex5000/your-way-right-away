import AppsIcon from '@mui/icons-material/Apps'
import HelpIcon from '@mui/icons-material/Help'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  CardContent,
  Card,
  Typography,
} from '@mui/material'
import Image from 'mui-image'

import { Link, navigate, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import Search from 'src/components/Search/Search'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const drawerWidth = 240

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#282828',
        paper: '#282828',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: 'black',
          }}
        >
          <Toolbar variant="dense">
            <Grid container>
              <Grid item xs={5}>
                <Image
                  src="primary-lockup-white.png"
                  fit="contain"
                  width={150}
                />
              </Grid>
              <Grid item xs={4}>
                <Search placeholder="Search…"></Search>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{ float: 'right' }}>
                  <NotificationsIcon sx={{ p: '6px' }} />
                  <HelpIcon sx={{ p: '6px' }} />
                  <AppsIcon sx={{ p: '6px' }} />
                  <PersonIcon sx={{ p: '6px' }} />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              width: `${drawerWidth}px`,
              mt: 5,
            }}
          >
            <Box>
              <Card sx={{ backgroundColor: '#34ebe1', color: 'black' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, pb: 1, pt: 1 }}>
                    Umbrella Corp
                  </Typography>
                  <Typography variant="body1">Production</Typography>
                </CardContent>
              </Card>
            </Box>
            <Divider />
            <List>
              {[
                {
                  name: 'Dashboards',
                  selected: true,
                  link: routes.dashboardlist(),
                },
                { name: 'Feature Flags', selected: false },
                { name: 'Users', selected: false },
                { name: 'Segments', selected: false },
                { name: 'Experiments', selected: false },
                { name: 'Debugger', selected: false },
                { name: 'Audit Log', selected: false },
                { name: 'Integrations', selected: false },
                { name: 'Account Settings', selected: false },
              ].map(({ name, selected, link }) => (
                <ListItem key={name} disablePadding selected={selected}>
                  <ListItemButton
                    onClick={() => {
                      if (link) navigate(link)
                    }}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Toaster />
        <>{children}</>
      </Box>
    </ThemeProvider>
  )
}

export default BaseLayout
