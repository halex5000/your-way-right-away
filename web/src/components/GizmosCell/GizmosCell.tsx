import { useMemo } from 'react'

import { Box, Paper, Stack, Typography } from '@mui/material'
import ReactGridLayout from 'react-grid-layout'
import type { GizmosQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Gizmo from '../Gizmo/Gizmo'

export const QUERY = gql`
  query GizmosQuery($dashboardId: String!) {
    gizmos(dashboardId: $dashboardId) {
      id
      height
      id
      width
      xCoordinate
      yCoordinate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ gizmos }: CellSuccessProps<GizmosQuery>) => {
  console.log('gizmos received:', gizmos)
  return (
    <Box minHeight="100%" width="100%" sx={{ backgroundColor: 'e6e6e6' }}>
      <ReactGridLayout width={1200} rowHeight={40} cols={24}>
        {gizmos.map((gizmo) => {
          const {
            id,
            xCoordinate: x,
            yCoordinate: y,
            width: w,
            height: h,
          } = gizmo
          return (
            <Paper key={id} data-grid={{ i: id, h, w, x, y }}>
              <Gizmo gizmo={gizmo}></Gizmo>
            </Paper>
          )
        })}
      </ReactGridLayout>
    </Box>
  )
}
