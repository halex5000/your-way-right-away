import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { Gizmo as GizmoType } from 'types/graphql'

type GizmoProps = {
  gizmo: GizmoType
}

const Gizmo = ({ gizmo }: GizmoProps) => {
  console.log(gizmo)
  const { content: json, title } = gizmo

  const content = JSON.parse(json)

  return (
    <Card sx={{ minHeight: '100%' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
      <CardContent>
        <Typography>{json}</Typography>
      </CardContent>
    </Card>
  )
}

export default Gizmo
