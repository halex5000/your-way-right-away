import { render } from '@redwoodjs/testing/web'

import DashboardBuilder from './DashboardBuilder'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardBuilder', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardBuilder />)
    }).not.toThrow()
  })
})
