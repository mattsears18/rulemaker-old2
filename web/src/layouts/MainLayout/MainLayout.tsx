import { Container } from '@chakra-ui/react'
import NavBar from 'src/components/NavBar'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <NavBar />
      <Container marginTop={4} maxW="container.xl">
        <main>{children}</main>
      </Container>
    </>
  )
}

export default MainLayout
