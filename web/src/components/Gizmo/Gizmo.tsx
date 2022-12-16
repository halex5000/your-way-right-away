import { Box, Grid, Paper, Typography } from '@mui/material'
import { Gizmo as GizmoType } from 'types/graphql'

type GizmoProps = {
  gizmo: GizmoType
  index: number
  style?: any
  className?: string
  onMouseDown?: any
  onMouseUp?: any
  onTouchStart?: any
  onTouchEnd?: any
  id: string
}

const Gizmo = ({
  gizmo,
  style,
  className,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
}: GizmoProps) => {
  console.log(gizmo)
  const { content: json, title } = gizmo

  const content = JSON.parse(json)

  // const content = {
  //   title: 'something',
  // }

  return (
    <Paper
      sx={{ minHeight: '100%', minWidth: '100%' }}
      style={style}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Grid container margin={1} spacing={1} padding={2}>
        <Grid item xs={12}>
          <Box>
            <Typography textAlign="center" variant="h5">
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography>{JSON.stringify(content)}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Gizmo
