// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof WidgetInput> = (args) => {
//   return <WidgetInput {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import WidgetInput from './WidgetInput'

export const generated = () => {
  return <WidgetInput />
}

export default {
  title: 'Components/WidgetInput',
  component: WidgetInput,
} as ComponentMeta<typeof WidgetInput>
