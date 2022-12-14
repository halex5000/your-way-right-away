import { render } from '@redwoodjs/testing/web'

import Gizmo from './Gizmo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Gizmo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Gizmo />)
    }).not.toThrow()
  })
})
