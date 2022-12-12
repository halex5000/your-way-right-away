// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Search> = (args) => {
//   return <Search {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Search from './Search'

export const generated = () => {
  return <Search />
}

export default {
  title: 'Components/Search',
  component: Search,
} as ComponentMeta<typeof Search>
