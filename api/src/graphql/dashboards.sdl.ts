export const schema = gql`
  type Dashboard {
    id: String!
    key: String!
    name: String!
  }

  type Query {
    dashboards: [Dashboard!]! @skipAuth
    dashboard(id: String!): Dashboard @skipAuth
  }

  input CreateDashboardInput {
    key: String!
    name: String!
  }

  input UpdateDashboardInput {
    key: String
    name: String
  }

  type Mutation {
    createDashboard(input: CreateDashboardInput!): Dashboard! @requireAuth
    updateDashboard(id: String!, input: UpdateDashboardInput!): Dashboard!
      @requireAuth
    deleteDashboard(id: String!): Dashboard! @requireAuth
  }
`
