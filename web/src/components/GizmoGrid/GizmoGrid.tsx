import { Fragment, useEffect, useMemo, useState } from 'react'

import { Box } from '@mui/material'
import { Drag, raise } from '@visx/drag'
import { getSeededRandom } from '@visx/mock-data'
import { scaleOrdinal } from '@visx/scale'
import { Circle, Polygon } from '@visx/shape'
import Draggable from 'react-draggable'
import { Gizmo as GizmoType } from 'types/graphql'

import Gizmo from '../Gizmo/Gizmo'

type Props = {
  gizmos: GizmoType[]
  mode?: 'readonly' | 'editing'
}

const colors = [
  '#025aac',
  '#02cff9',
  '#02efff',
  '#03aeed',
  '#0384d7',
  '#edfdff',
  '#ab31ff',
  '#5924d7',
  '#d145ff',
  '#1a02b1',
  '#e582ff',
  '#ff00d4',
  '#270eff',
  '#827ce2',
]

export interface Circle {
  id: string
  radius: number
  x: number
  y: number
}

const generateCircles = ({
  width,
  height,
}: {
  width: number
  height: number
}) => {
  const radiusRandom = getSeededRandom(0.2)
  const xRandom = getSeededRandom(0.3)
  const yRandom = getSeededRandom(0.4)

  return new Array(width < 360 ? 40 : 185).fill(1).map((d, i) => {
    const radius = 25 - radiusRandom() * 20
    return {
      id: `${i}`,
      radius,
      x: Math.round(xRandom() * (width - radius * 2) + radius),
      y: Math.round(yRandom() * (height - radius * 2) + radius),
    }
  })
}

const GizmoGrid = ({ gizmos, mode }: Props) => {
  const [draggingGizmos, setDraggingGizmos] = useState(gizmos)

  const [draggingItems, setDraggingItems] = useState<Circle[]>([])

  const width = 200
  const height = 200

  useEffect(() => {
    if (width > 10 && height > 10)
      setDraggingItems(generateCircles({ width, height }))
  }, [width, height])

  return (
    <Box minHeight="100%" width="100%" sx={{ backgroundColor: '#e6e6e6' }}>
      {draggingGizmos.map((gizmo, index) => (
        <Draggable key={`draggable-${gizmo.id}`}>
          <Gizmo gizmo={gizmo} index={index} />
        </Draggable>
      ))}
    </Box>
  )
}

export default GizmoGrid
