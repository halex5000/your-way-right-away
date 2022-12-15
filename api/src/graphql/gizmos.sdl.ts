export const schema = gql`
  type Gizmo {
    id: String!
    xCoordinate: Int!
    yCoordinate: Int!
    width: Int!
    height: Int!
    title: String!
    content: String!
    dashboard: Dashboard
    dashboardId: String
  }

  type Query {
    gizmos(dashboardId: String!): [Gizmo!]! @requireAuth
    gizmo(id: String!): Gizmo @requireAuth
  }

  input CreateGizmoInput {
    xCoordinate: Int!
    yCoordinate: Int!
    width: Int!
    height: Int!
    title: String!
    content: String
    dashboardId: String
  }

  input UpdateGizmoInput {
    xCoordinate: Int
    yCoordinate: Int
    width: Int
    height: Int
    title: String
    content: String
    dashboardId: String
  }

  type Mutation {
    createGizmo(input: CreateGizmoInput!): Gizmo! @requireAuth
    updateGizmo(id: String!, input: UpdateGizmoInput!): Gizmo! @requireAuth
    deleteGizmo(id: String!): Gizmo! @requireAuth
  }
`
