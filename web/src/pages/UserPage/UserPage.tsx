import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UserPage = () => {
  return (
    <>
      <MetaTags title="User" description="User page" />

      <h1>UserPage</h1>
      <p>
        Find me in <code>./web/src/pages/UserPage/UserPage.tsx</code>
      </p>
      <p>
        My default route is named <code>user</code>, link to me with `
        <Link to={routes.user()}>User</Link>`
      </p>
    </>
  )
}

export default UserPage
