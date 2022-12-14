import type { Prisma, Gizmo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GizmoCreateArgs>({
  gizmo: {
    one: {
      data: {
        xCoordinate: 6680307,
        yCoordinate: 3731019,
        width: 225293,
        height: 6077923,
      },
    },
    two: {
      data: {
        xCoordinate: 8044044,
        yCoordinate: 4859373,
        width: 1310076,
        height: 2917336,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Gizmo, 'gizmo'>
