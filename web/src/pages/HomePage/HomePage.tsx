import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>

      <ul>
        <li>AUTH0_DOMAIN: {process.env.AUTH0_DOMAIN}</li>
        <li>AUTH0_CLIENT_ID: {process.env.AUTH0_CLIENT_ID}</li>
        <li>AUTH0_CLIENT_SECRET: {process.env.AUTH0_CLIENT_SECRET}</li>
        <li>AUTH0_AUDIENCE: {process.env.AUTH0_AUDIENCE}</li>
        <li>AUTH0_REDIRECT_URI: {process.env.AUTH0_REDIRECT_URI}</li>
      </ul>
    </>
  )
}

export default HomePage
