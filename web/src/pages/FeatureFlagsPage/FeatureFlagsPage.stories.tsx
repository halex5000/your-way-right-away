import type { ComponentMeta } from '@storybook/react'

import FeatureFlagsPage from './FeatureFlagsPage'

export const generated = () => {
  return <FeatureFlagsPage />
}

export default {
  title: 'Pages/FeatureFlagsPage',
  component: FeatureFlagsPage,
} as ComponentMeta<typeof FeatureFlagsPage>
