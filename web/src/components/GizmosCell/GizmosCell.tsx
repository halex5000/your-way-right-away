import { useMemo } from 'react'

import { Box, Paper, Stack, Typography } from '@mui/material'
import ReactGridLayout, { Responsive } from 'react-grid-layout'
import GridLines from 'react-gridlines'
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
    <Box minHeight="100%" width="100%" sx={{ backgroundColor: '#e6e6e6' }}>
      {/* <GridLines
        className="grid-area"
        cellWidth={60}
        strokeWidth={2}
        cellWidth2={12}
      > */}
      <Responsive
        className="layout"
        width={1600}
        rowHeight={40}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
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
      </Responsive>
      {/* </GridLines> */}
    </Box>
  )
}
