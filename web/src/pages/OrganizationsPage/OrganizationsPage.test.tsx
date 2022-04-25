import { render } from '@redwoodjs/testing/web'

import OrganizationsPage from './OrganizationsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrganizationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrganizationsPage />)
    }).not.toThrow()
  })
})
