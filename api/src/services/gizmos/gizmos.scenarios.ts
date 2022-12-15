import type { Prisma, Gizmo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GizmoCreateArgs>({
  gizmo: {
    one: {
      data: {
        xCoordinate: 3879594,
        yCoordinate: 8010068,
        width: 1968736,
        height: 7685645,
      },
    },
    two: {
      data: {
        xCoordinate: 4653309,
        yCoordinate: 4630031,
        width: 4758475,
        height: 2223416,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Gizmo, 'gizmo'>
