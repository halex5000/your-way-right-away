import type { Gizmo } from '@prisma/client'

import { gizmos, gizmo, createGizmo, updateGizmo, deleteGizmo } from './gizmos'
import type { StandardScenario } from './gizmos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('gizmos', () => {
  scenario('returns all gizmos', async (scenario: StandardScenario) => {
    const result = await gizmos()

    expect(result.length).toEqual(Object.keys(scenario.gizmo).length)
  })

  scenario('returns a single gizmo', async (scenario: StandardScenario) => {
    const result = await gizmo({ id: scenario.gizmo.one.id })

    expect(result).toEqual(scenario.gizmo.one)
  })

  scenario('creates a gizmo', async () => {
    const result = await createGizmo({
      input: {
        xCoordinate: 2725827,
        yCoordinate: 7402565,
        width: 1065022,
        height: 952241,
      },
    })

    expect(result.xCoordinate).toEqual(2725827)
    expect(result.yCoordinate).toEqual(7402565)
    expect(result.width).toEqual(1065022)
    expect(result.height).toEqual(952241)
  })

  scenario('updates a gizmo', async (scenario: StandardScenario) => {
    const original = (await gizmo({ id: scenario.gizmo.one.id })) as Gizmo
    const result = await updateGizmo({
      id: original.id,
      input: { xCoordinate: 1915644 },
    })

    expect(result.xCoordinate).toEqual(1915644)
  })

  scenario('deletes a gizmo', async (scenario: StandardScenario) => {
    const original = (await deleteGizmo({ id: scenario.gizmo.one.id })) as Gizmo
    const result = await gizmo({ id: original.id })

    expect(result).toEqual(null)
  })
})
