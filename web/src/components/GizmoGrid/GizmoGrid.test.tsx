import { render } from '@redwoodjs/testing/web'

import GizmoGrid from './GizmoGrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GizmoGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GizmoGrid />)
    }).not.toThrow()
  })
})
