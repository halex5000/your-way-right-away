import type { GizmosQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GizmoGrid from '../GizmoGrid/GizmoGrid'

export const QUERY = gql`
  query GizmosQuery($dashboardId: String!) {
    gizmos(dashboardId: $dashboardId) {
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
  return <GizmoGrid gizmos={gizmos} mode="editing" />
}
