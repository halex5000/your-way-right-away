export const schema = gql`
  type Gizmo {
    id: String!
    xCoordinate: Int!
    yCoordinate: Int!
    width: Int!
    height: Int!
  }

  type Query {
    gizmos(dashboardId: String!): [Gizmo!]! @skipAuth
    gizmo(id: String!): Gizmo @skipAuth
  }

  input CreateGizmoInput {
    xCoordinate: Int!
    yCoordinate: Int!
    width: Int!
    height: Int!
    dashboardId: String!
  }

  input UpdateGizmoInput {
    xCoordinate: Int
    yCoordinate: Int
    width: Int
    height: Int
    dashboardId: String
  }

  type Mutation {
    createGizmo(input: CreateGizmoInput!): Gizmo! @skipAuth
    updateGizmo(id: String!, input: UpdateGizmoInput!): Gizmo! @skipAuth
    deleteGizmo(id: String!): Gizmo! @skipAuth
  }
`
