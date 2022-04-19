import { useAuth } from '@redwoodjs/auth'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { logIn, logOut, isAuthenticated, userMetadata } = useAuth()

  return (
    <>
      <div className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
              <span className="text-l ml-3 mt-1">
                Amazingly Secure Redwood Site
              </span>
            </div>
            <div className="flex items-center">
              <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <div className="flex right space-x-2">
                  <div className="flex right space-x-2">
                    {isAuthenticated && (
                      <span className="span">{userMetadata.email}</span>
                    )}
                    <button
                      className="link-button"
                      onClick={isAuthenticated ? logOut : logIn}
                    >
                      {isAuthenticated ? 'Log Out' : 'Log In'}
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex relative z-20 items-center">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default HomeLayout
