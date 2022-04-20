import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Heading } from '@chakra-ui/react'

const HomePage = () => {
  const { isAuthenticated, userMetadata } = useAuth()
  return (
    <>
      <br />
      <MetaTags title="Home" description="Home page" />
      <Heading>Home page...</Heading>
      {isAuthenticated && <p>userMetadata: {JSON.stringify(userMetadata)}</p>}
    </>
  )
}

export default HomePage
