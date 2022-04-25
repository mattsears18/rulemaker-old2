import { render } from '@redwoodjs/testing/web'

import LocationsPage from './LocationsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LocationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocationsPage />)
    }).not.toThrow()
  })
})
