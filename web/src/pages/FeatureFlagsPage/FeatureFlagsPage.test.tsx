import { render } from '@redwoodjs/testing/web'

import FeatureFlagsPage from './FeatureFlagsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FeatureFlagsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeatureFlagsPage />)
    }).not.toThrow()
  })
})
