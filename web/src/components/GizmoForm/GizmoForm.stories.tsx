// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof GizmoForm> = (args) => {
//   return <GizmoForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import GizmoForm from './GizmoForm'

export const generated = () => {
  return <GizmoForm />
}

export default {
  title: 'Components/GizmoForm',
  component: GizmoForm,
} as ComponentMeta<typeof GizmoForm>
