import axios from 'axios'
import type { QueryResolvers } from 'types/graphql'

type Props = {
  projectKey: string
  status?: string
  hasExperiment: boolean
}

const getFeatureFlags = async ({
  projectKey,
  status,
  hasExperiment,
}: Props) => {
  try {
    const result = await axios(
      `${process.env.LAUNCH_DARKLY_API_URL}/flags/${projectKey}?filter=hasExperiment:${hasExperiment}`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.LAUNCH_DARKLY_API_KEY,
        },
      }
    )
    const { data } = result
    console.log('data received')
    return data.items
  } catch (error) {
    console.log(error)
  }
  return []
}

export const featureFlags: QueryResolvers['featureFlags'] = async ({
  projectKey,
  status,
  hasExperiment,
}: Props) => {
  const flags = await getFeatureFlags({ projectKey, status, hasExperiment })
  console.log('flags', flags)
  if (flags) return flags
  return []
}

export const featureFlag: QueryResolvers['featureFlag'] = ({ key }) => {
  return {
    name: 'Some new feature flag',
    kind: 'boolean',
    description: 'a brand new feature flag which will rule the world',
    key: 'some-new-feature-flag',
    creationDate: Date.now(),
  } // call to api goes here
}
