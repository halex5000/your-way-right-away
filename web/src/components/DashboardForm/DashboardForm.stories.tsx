// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DashboardForm> = (args) => {
//   return <DashboardForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DashboardForm from './DashboardForm'

export const generated = () => {
  return <DashboardForm />
}

export default {
  title: 'Components/DashboardForm',
  component: DashboardForm,
} as ComponentMeta<typeof DashboardForm>
