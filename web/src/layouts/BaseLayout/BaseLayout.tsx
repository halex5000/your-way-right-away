import AppsIcon from '@mui/icons-material/Apps'
import HelpIcon from '@mui/icons-material/Help'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import Image from 'mui-image'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

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
          display: 'flex',
          minHeight: '100vh',
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'black',
          }}
        >
          <Toolbar variant="dense">
            <Grid container>
              <Grid xs={5}>
                <Image
                  src="primary-lockup-white.png"
                  fit="contain"
                  width={150}
                />
              </Grid>
              <Grid xs={4}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Grid>
              <Grid xs={3}>
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
