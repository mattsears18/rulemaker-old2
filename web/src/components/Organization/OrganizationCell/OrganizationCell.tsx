import type { FindOrganizationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Organization from 'src/components/Organization/Organization'

export const QUERY = gql`
  query FindOrganizationById($id: String!) {
    organization: organization(id: $id) {
      id
      created_at
      updated_at
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Organization not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ organization }: CellSuccessProps<FindOrganizationById>) => {
  return <Organization organization={organization} />
}
