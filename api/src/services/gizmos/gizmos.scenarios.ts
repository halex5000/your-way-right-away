import type { Prisma, Gizmo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GizmoCreateArgs>({
  gizmo: {
    one: {
      data: {
        xCoordinate: 5554669,
        yCoordinate: 4319570,
        width: 7142349,
        height: 7265756,
      },
    },
    two: {
      data: {
        xCoordinate: 126125,
        yCoordinate: 5575367,
        width: 3834131,
        height: 7883777,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Gizmo, 'gizmo'>
