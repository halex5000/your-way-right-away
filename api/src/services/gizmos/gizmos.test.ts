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
        xCoordinate: 5877733,
        yCoordinate: 3248672,
        width: 1733459,
        height: 1888588,
      },
    })

    expect(result.xCoordinate).toEqual(5877733)
    expect(result.yCoordinate).toEqual(3248672)
    expect(result.width).toEqual(1733459)
    expect(result.height).toEqual(1888588)
  })

  scenario('updates a gizmo', async (scenario: StandardScenario) => {
    const original = (await gizmo({ id: scenario.gizmo.one.id })) as Gizmo
    const result = await updateGizmo({
      id: original.id,
      input: { xCoordinate: 4462030 },
    })

    expect(result.xCoordinate).toEqual(4462030)
  })

  scenario('deletes a gizmo', async (scenario: StandardScenario) => {
    const original = (await deleteGizmo({ id: scenario.gizmo.one.id })) as Gizmo
    const result = await gizmo({ id: original.id })

    expect(result).toEqual(null)
  })
})
