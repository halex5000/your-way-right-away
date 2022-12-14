import type { Prisma, Dashboard } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DashboardCreateArgs>({
  dashboard: {
    one: { data: { key: 'String7528573', name: 'String' } },
    two: { data: { key: 'String9309180', name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Dashboard, 'dashboard'>
