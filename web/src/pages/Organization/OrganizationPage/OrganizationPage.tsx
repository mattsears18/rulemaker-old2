import OrganizationCell from 'src/components/Organization/OrganizationCell'

type OrganizationPageProps = {
  id: string
}

const OrganizationPage = ({ id }: OrganizationPageProps) => {
  return <OrganizationCell id={id} />
}

export default OrganizationPage
