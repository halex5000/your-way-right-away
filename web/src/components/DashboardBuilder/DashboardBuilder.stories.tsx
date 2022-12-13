// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DashboardBuilder> = (args) => {
//   return <DashboardBuilder {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DashboardBuilder from './DashboardBuilder'

export const generated = () => {
  return <DashboardBuilder />
}

export default {
  title: 'Components/DashboardBuilder',
  component: DashboardBuilder,
} as ComponentMeta<typeof DashboardBuilder>
