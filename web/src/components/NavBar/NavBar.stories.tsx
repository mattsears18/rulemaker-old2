import NavBar from './NavBar'

export const authenticated = () => {
  mockCurrentUser({
    name: 'Matt Sears',
    picture:
      'https://lh3.googleusercontent.com/a-/AOh14GiohSKWePrycvk3eSeb0yPNy-TKwssjT30n7bewjdo=s96-c',
  })

  return <NavBar />
}

export const unauthenticated = () => {
  return <NavBar />
}

export default { title: 'Components/NavBar' }
