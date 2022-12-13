export const schema = gql`
  type Clause {
    attribute: String!
    op: String!
    values: [String]!
  }

  type Rule {
    variation: Int!
    clauses: [Clause]
  }

  type Target {
    values: [String]!
    variation: Int!
  }

  type RolloutVariation {
    variation: Int!
    weight: Int!
  }

  type Rollout {
    variations: RolloutVariation
  }

  type FallThrough {
    rollout: Rollout!
  }

  type Environment {
    on: Boolean!
    archived: Boolean!
    lastModified: BigInt!
    targets: [Target]
    rules: [Rule]
    fallThrough: FallThrough
  }

  type FeatureFlag {
    name: String!
    kind: String!
    description: String!
    key: String!
    creationDate: BigInt!
    environments: [Environment]!
  }

  type Query {
    featureFlags(
      projectKey: String!
      status: String
      hasExperiment: Boolean
      evaluatedAfter: BigInt
      environment: String
      archived: Boolean
      type: String
      compare: Boolean
    ): [FeatureFlag!] @skipAuth
    featureFlag(key: String!, projectKey: String!): FeatureFlag @skipAuth
  }
`
