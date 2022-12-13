import { render } from '@redwoodjs/testing/web'

import FeatureFlag from './FeatureFlag'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeatureFlag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeatureFlag />)
    }).not.toThrow()
  })
})
