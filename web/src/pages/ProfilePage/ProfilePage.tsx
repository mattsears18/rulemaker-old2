import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Heading } from '@chakra-ui/react'

const ProfilePage = () => {
  const { isAuthenticated, userMetadata } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {isAuthenticated && (
        <>
          <Heading>{userMetadata.given_name}'s profile</Heading>
          <p>userMetadata: {JSON.stringify(userMetadata)}</p>
        </>
      )}
    </>
  )
}

export default ProfilePage
