export const schema = gql`
  type Gizmo {
    id: String!
    xCoordinate: Int!
    yCoordinate: Int!
    width: Int!
    height: Int!
    dashboards: [Dashboard]
  }

  type Query {
    gizmos: [Gizmo!]! @requireAuth
    gizmo(id: String!): Gizmo @requireAuth
  }

  input CreateGizmoInput {
    xCoordinate: Int!
    yCoordinate: Int!
    width: Int!
    height: Int!
    dashboards: [UpdateDashboardInput]
  }

  input UpdateGizmoInput {
    xCoordinate: Int
    yCoordinate: Int
    width: Int
    height: Int
  }

  type Mutation {
    createGizmo(input: CreateGizmoInput!): Gizmo! @requireAuth
    updateGizmo(id: String!, input: UpdateGizmoInput!): Gizmo! @requireAuth
    deleteGizmo(id: String!): Gizmo! @requireAuth
  }
`
