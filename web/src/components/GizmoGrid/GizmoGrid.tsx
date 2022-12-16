import { useState } from 'react'

import { Box } from '@mui/material'
import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'
import { Gizmo as GizmoType } from 'types/graphql'

import Gizmo from '../Gizmo/Gizmo'

type Props = {
  gizmos: GizmoType[]
  mode?: 'readonly' | 'editing'
}

const GizmoGrid = ({ gizmos, mode }: Props) => {
  const [draggingGizmos, setDraggingGizmos] = useState(gizmos)

  console.log('mode', mode)

  const onDrag = (event, data) => {
    const newX = data.x
    const newY = data.y
    const nodeId = data.node.id
    const id = nodeId.substring(nodeId.indexOf('-') + 1)

    draggingGizmos.map((gizmo) => {
      const tempGizmo = {
        ...gizmo,
      }
      if (gizmo.id === id) {
        tempGizmo.xCoordinate = newX
        tempGizmo.yCoordinate = newY
      }
      return gizmo
    })

    setDraggingGizmos(draggingGizmos)
  }

  const onResize = (event, direction, element, delta) => {
    console.log('event', event)
    console.log('direction', direction)
    console.log('element', element)
    console.log('delta', delta)
    const nodeId = element.id

    console.log('node id', nodeId)

    const id = nodeId.substring(nodeId.indexOf('-') + 1)

    draggingGizmos.map((gizmo) => {
      const tempGizmo = {
        ...gizmo,
      }
      if (gizmo.id === id) {
        tempGizmo.width = gizmo.width + delta.width
        tempGizmo.yCoordinate = gizmo.height + delta.height
      }
      return gizmo
    })
    setDraggingGizmos(draggingGizmos)
  }

  const isEditable = mode === 'editing'

  return (
    <Box minHeight="100%" width="100%" sx={{ backgroundColor: '#e6e6e6' }}>
      {draggingGizmos.map((gizmo, index) => {
        return (
          <Draggable
            key={`resizable-${gizmo.id}`}
            defaultPosition={{ x: gizmo.xCoordinate, y: gizmo.yCoordinate }}
            onStop={onDrag}
            disabled={!isEditable}
          >
            <Resizable
              defaultSize={{
                height: 200,
                width: 200,
              }}
              id={`drag-${gizmo.id}`}
              enable={{
                top: isEditable,
                right: isEditable,
                bottom: isEditable,
                left: isEditable,
                topRight: isEditable,
                bottomRight: isEditable,
                bottomLeft: isEditable,
                topLeft: isEditable,
              }}
              onResizeStop={onResize}
            >
              <Gizmo id={`resize-${gizmo.id}`} gizmo={gizmo} index={index} />
            </Resizable>
          </Draggable>
        )
      })}
    </Box>
  )
}

export default GizmoGrid
