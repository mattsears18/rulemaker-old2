import ProfilePage from './ProfilePage'

export const generated = () => {
  mockCurrentUser({
    given_name: 'Matt',
  })

  return <ProfilePage />
}

export default { title: 'Pages/ProfilePage' }
