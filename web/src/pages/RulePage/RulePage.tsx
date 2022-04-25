import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RulePage = () => {
  return (
    <>
      <MetaTags title="Rule" description="Rule page" />

      <h1>RulePage</h1>
      <p>
        Find me in <code>./web/src/pages/RulePage/RulePage.tsx</code>
      </p>
      <p>
        My default route is named <code>rule</code>, link to me with `
        <Link to={routes.rule()}>Rule</Link>`
      </p>
    </>
  )
}

export default RulePage
