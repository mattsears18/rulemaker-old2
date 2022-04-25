import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { UnorderedList, ListItem } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <UnorderedList>
        <ListItem>
          <Link to={routes.rules()}>Rules</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.organizations()}>Organizations</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.locations()}>Locations</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.users()}>Users</Link>
        </ListItem>
      </UnorderedList>
    </>
  )
}

export default HomePage
