import { render } from '@redwoodjs/testing/web'

import DashboardBuilderPage from './DashboardBuilderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashboardBuilderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardBuilderPage />)
    }).not.toThrow()
  })
})
