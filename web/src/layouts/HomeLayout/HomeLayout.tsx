import { Container } from '@chakra-ui/react'
import NavBar from 'src/components/NavBar'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <NavBar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default HomeLayout
