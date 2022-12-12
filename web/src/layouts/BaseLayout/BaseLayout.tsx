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
} from '@mui/material'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#282828',
      },
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
          <Toolbar></Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            boxSizing: 'border-box',
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <Divider />
            <List>
              {[
                'Dashboard',
                'Feature Flags',
                'Users',
                'Segments',
                'Experiments',
                'Debugger',
                'Audit Log',
                'Integrations',
                'Account Settings',
              ].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
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
