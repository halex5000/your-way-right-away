// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GizmoGrid> = (args) => {
//   return <GizmoGrid {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GizmoGrid from './GizmoGrid'

export const generated = () => {
  return <GizmoGrid />
}

export default {
  title: 'Components/GizmoGrid',
  component: GizmoGrid,
} as ComponentMeta<typeof GizmoGrid>
