import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { Gizmo as GizmoType } from 'types/graphql'

type GizmoProps = {
  gizmo: GizmoType
}

const Gizmo = ({ gizmo }: GizmoProps) => {
  return (
    <Card>
      <CardContent>
        <Typography>{"Look at me, I'm a content"}</Typography>
      </CardContent>
      <CardContent>
        <Typography>{"Look at me, I'm a content"}</Typography>
      </CardContent>
    </Card>
  )
}

export default Gizmo
