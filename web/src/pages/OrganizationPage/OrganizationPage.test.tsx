import { render } from '@redwoodjs/testing/web'

import OrganizationPage from './OrganizationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrganizationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrganizationPage />)
    }).not.toThrow()
  })
})
