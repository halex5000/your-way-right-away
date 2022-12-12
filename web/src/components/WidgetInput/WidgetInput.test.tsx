import { render } from '@redwoodjs/testing/web'

import WidgetInput from './WidgetInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WidgetInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetInput />)
    }).not.toThrow()
  })
})
