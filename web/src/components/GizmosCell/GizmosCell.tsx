import { useMemo } from 'react'

import { Box, Paper, Stack, Typography } from '@mui/material'
import ReactGridLayout from 'react-grid-layout'
import type { GizmosQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Gizmo from '../Gizmo/Gizmo'

export const QUERY = gql`
  query GizmosQuery($dashboardId: String!) {
    gizmos(dashboardId: $dashboardId) {
      # gizmos {
      id
      height
      width
      xCoordinate
      yCoordinate
      title
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ gizmos }: CellSuccessProps<GizmosQuery>) => {
  return (
    <Box minHeight="100%" width="100%" sx={{ backgroundColor: 'e6e6e6' }}>
      <ReactGridLayout width={1200} rowHeight={40} cols={12}>
        {gizmos.map((gizmo) => {
          const {
            id,
            xCoordinate: x,
            yCoordinate: y,
            width: w,
            height: h,
          } = gizmo
          return (
            <div
              key={id}
              data-grid={{
                i: id,
                h,
                w,
                x,
                y,
                resizeHandles: ['s', 'e', 'se', 'ne'],
              }}
            >
              <Gizmo gizmo={gizmo}></Gizmo>
            </div>
          )
        })}
      </ReactGridLayout>
    </Box>
  )
}
