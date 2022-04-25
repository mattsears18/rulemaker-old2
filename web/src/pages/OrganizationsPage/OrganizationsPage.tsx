import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OrganizationsPage = () => {
  return (
    <>
      <MetaTags title="Organizations" description="Organizations page" />

      <h1>OrganizationsPage</h1>
      <p>
        Find me in <code>./web/src/pages/OrganizationsPage/OrganizationsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>organizations</code>, link to me with `
        <Link to={routes.organizations()}>Organizations</Link>`
      </p>
    </>
  )
}

export default OrganizationsPage
