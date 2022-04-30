import type { FindLocationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Location from 'src/components/Location/Location'

export const QUERY = gql`
  query FindLocationById($id: String!) {
    location: location(id: $id) {
      id
      created_at
      created_by_user_id
      updated_at
      name
      is_public
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Location not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ location }: CellSuccessProps<FindLocationById>) => {
  return <Location location={location} />
}
