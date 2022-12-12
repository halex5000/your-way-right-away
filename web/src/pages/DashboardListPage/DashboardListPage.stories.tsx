import type { ComponentMeta } from '@storybook/react'

import DashboardListPage from './DashboardListPage'

export const generated = () => {
  return <DashboardListPage />
}

export default {
  title: 'Pages/DashboardListPage',
  component: DashboardListPage,
} as ComponentMeta<typeof DashboardListPage>
