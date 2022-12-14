// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Gizmo> = (args) => {
//   return <Gizmo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Gizmo from './Gizmo'

export const generated = () => {
  return <Gizmo />
}

export default {
  title: 'Components/Gizmo',
  component: Gizmo,
} as ComponentMeta<typeof Gizmo>
