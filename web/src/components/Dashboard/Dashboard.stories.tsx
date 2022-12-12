// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Dashboard> = (args) => {
//   return <Dashboard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Dashboard from './Dashboard'

export const generated = () => {
  return <Dashboard />
}

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>
