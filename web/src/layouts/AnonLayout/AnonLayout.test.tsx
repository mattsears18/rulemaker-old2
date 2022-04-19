import { render } from '@redwoodjs/testing/web'

import AnonLayout from './AnonLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AnonLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnonLayout />)
    }).not.toThrow()
  })
})
