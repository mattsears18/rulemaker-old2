type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <h1>Main Layout</h1>
      {children}
    </>
  )
}

export default MainLayout
