import type { Dashboard } from '@prisma/client'

import {
  dashboards,
  dashboard,
  createDashboard,
  updateDashboard,
  deleteDashboard,
} from './dashboards'
import type { StandardScenario } from './dashboards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dashboards', () => {
  scenario('returns all dashboards', async (scenario: StandardScenario) => {
    const result = await dashboards()

    expect(result.length).toEqual(Object.keys(scenario.dashboard).length)
  })

  scenario('returns a single dashboard', async (scenario: StandardScenario) => {
    const result = await dashboard({ id: scenario.dashboard.one.id })

    expect(result).toEqual(scenario.dashboard.one)
  })

  scenario('creates a dashboard', async () => {
    const result = await createDashboard({
      input: { key: 'String3453587', name: 'String' },
    })

    expect(result.key).toEqual('String3453587')
    expect(result.name).toEqual('String')
  })

  scenario('updates a dashboard', async (scenario: StandardScenario) => {
    const original = (await dashboard({
      id: scenario.dashboard.one.id,
    })) as Dashboard
    const result = await updateDashboard({
      id: original.id,
      input: { key: 'String49522642' },
    })

    expect(result.key).toEqual('String49522642')
  })

  scenario('deletes a dashboard', async (scenario: StandardScenario) => {
    const original = (await deleteDashboard({
      id: scenario.dashboard.one.id,
    })) as Dashboard
    const result = await dashboard({ id: original.id })

    expect(result).toEqual(null)
  })
})
