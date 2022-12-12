import { Box, Button, ButtonGroup, Drawer } from '@mui/material'

const WidgetInput = ({
  open,
  toggleDrawer,
}: {
  open: boolean
  toggleDrawer: Function
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      variant="temporary"
      sx={{
        width: 240,
        flexShrink: 0,
        boxSizing: 'border-box',
      }}
    >
      <Box width={300} component="form" noValidate autoComplete="off">
        <ButtonGroup>
          <Button variant="contained">Save</Button>
          <Button variant="outlined">Cancel</Button>
        </ButtonGroup>
      </Box>
    </Drawer>
  )
}

export default WidgetInput
