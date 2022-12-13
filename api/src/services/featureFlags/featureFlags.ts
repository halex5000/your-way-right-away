import axios from 'axios'
import type { FeatureFlag, QueryResolvers } from 'types/graphql'

type LaunchDarklyProps = {
  projectKey: string
  filter: string
}

type Props = {
  projectKey: string
  status?: string
  hasExperiment?: boolean
  environment?: string
  evaluatedAfter: number
  archived: boolean
  type: string
  compare: boolean
}

const callLaunchDarkly = async ({ projectKey, filter }: LaunchDarklyProps) => {
  const baseEarl = `${process.env.LAUNCH_DARKLY_API_URL}/flags/${projectKey}`
  const earl = filter ? `${baseEarl}${filter}` : `${baseEarl}`

  try {
    const result = await axios(`${earl}`, {
      method: 'GET',
      headers: {
        Authorization: process.env.LAUNCH_DARKLY_API_KEY,
      },
    })
    const { data } = result
    console.log('data received')
    return data.items
  } catch (error) {
    console.log(error)
  }
  return []
}

const buildFilter = ({
  status,
  hasExperiment,
  environment,
  evaluatedAfter,
  archived,
  type,
  compare,
}): string => {
  console.log('building filter ')

  if (evaluatedAfter || environment || type || status) {
    let filter = '?filter='

    if (evaluatedAfter) {
      filter =
        filter +
        `evaluated:{"after":${evaluatedAfter}},filterEnv:${environment}`
    }

    // if (status) {
    //   filter = filter + `status:${status}`
    // }

    if (type) {
      filter = filter + `&type:${type}`
    }

    return filter
  }
  return ''
}

// const postQueryFilter = ({}): FeatureFlag[] => {}

const getFeatureFlags = async ({
  projectKey,
  status,
  hasExperiment,
  environment,
  evaluatedAfter,
  archived,
  type,
  compare,
}: Props) => {
  console.log(' calling build filter')
  const filter = buildFilter({
    status,
    hasExperiment,
    environment,
    evaluatedAfter,
    archived,
    type,
    compare,
  })

  console.log('filter is', filter)

  try {
    const featureFlags = await callLaunchDarkly({ projectKey, filter })
    console.log('data received')
    return featureFlags
  } catch (error) {
    console.log(error)
  }
  return []
}

export const featureFlags: QueryResolvers['featureFlags'] = async ({
  projectKey,
  status,
  hasExperiment,
  environment,
  evaluatedAfter,
  archived,
  type,
  compare,
}: Props) => {
  const flags = await getFeatureFlags({
    projectKey,
    status,
    hasExperiment,
    environment,
    evaluatedAfter,
    archived,
    type,
    compare,
  })
  return flags
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
