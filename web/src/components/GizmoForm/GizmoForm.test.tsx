import { render } from '@redwoodjs/testing/web'

import GizmoForm from './GizmoForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GizmoForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GizmoForm />)
    }).not.toThrow()
  })
})
