import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type OrganizationLayoutProps = {
  children: React.ReactNode
}

const OrganizationsLayout = ({ children }: OrganizationLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.organizations()}
            className="rw-link"
          >
            Organizations
          </Link>
        </h1>
        <Link
          to={routes.newOrganization()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Organization
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default OrganizationsLayout
