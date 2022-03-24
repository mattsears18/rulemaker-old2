type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <h1>Home Layout</h1>
      {children}
    </>
  )
}

export default HomeLayout
