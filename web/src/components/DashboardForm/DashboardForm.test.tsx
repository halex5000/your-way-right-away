import { render } from '@redwoodjs/testing/web'

import DashboardForm from './DashboardForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardForm />)
    }).not.toThrow()
  })
})
