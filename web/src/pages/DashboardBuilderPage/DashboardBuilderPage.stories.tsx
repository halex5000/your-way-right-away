import type { ComponentMeta } from '@storybook/react'

import DashboardBuilderPage from './DashboardBuilderPage'

export const generated = () => {
  return <DashboardBuilderPage />
}

export default {
  title: 'Pages/DashboardBuilderPage',
  component: DashboardBuilderPage,
} as ComponentMeta<typeof DashboardBuilderPage>
