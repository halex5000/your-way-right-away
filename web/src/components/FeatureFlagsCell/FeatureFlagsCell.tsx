import { Box } from '@mui/material'
import type {
  FeatureFlagsQuery,
  FeatureFlagsQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FeatureFlag from '../FeatureFlag/FeatureFlag'

export const QUERY = gql`
  query FeatureFlagsQuery($projectKey: String!, $status: String) {
    featureFlags: featureFlags(projectKey: $projectKey, status: $status) {
      key
      name
      description
      creationDate
      kind
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  featureFlags,
}: CellSuccessProps<FeatureFlagsQuery, FeatureFlagsQueryVariables>) => {
  return (
    <Box component="main">
      {featureFlags.map((featureFlag) => {
        return (
          <Box
            key={featureFlag.key}
            sx={{ backgroundColor: 'white' }}
            margin={0.25}
            padding={2}
          >
            <FeatureFlag
              key={featureFlag.key}
              featureFlag={featureFlag}
            ></FeatureFlag>
          </Box>
        )
      })}
    </Box>
  )
}
