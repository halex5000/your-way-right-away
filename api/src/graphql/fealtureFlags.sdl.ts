export const schema = gql`
  type FeatureFlag {
    name: String!
    kind: String!
    description: String!
    key: String!
    creationDate: BigInt!
  }

  type Query {
    featureFlags(
      projectKey: String!
      status: String
      hasExperiment: Boolean
    ): [FeatureFlag!] @skipAuth
    featureFlag(key: String!, projectKey: String!): FeatureFlag @skipAuth
  }
`
