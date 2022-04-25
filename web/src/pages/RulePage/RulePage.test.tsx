import { render } from '@redwoodjs/testing/web'

import RulePage from './RulePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RulePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RulePage />)
    }).not.toThrow()
  })
})
