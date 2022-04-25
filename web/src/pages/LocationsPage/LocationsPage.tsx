import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LocationsPage = () => {
  return (
    <>
      <MetaTags title="Locations" description="Locations page" />

      <h1>LocationsPage</h1>
      <p>
        Find me in <code>./web/src/pages/LocationsPage/LocationsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>locations</code>, link to me with `
        <Link to={routes.locations()}>Locations</Link>`
      </p>
    </>
  )
}

export default LocationsPage
