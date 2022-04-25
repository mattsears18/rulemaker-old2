import type { FindLocations } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Locations from 'src/components/Location/Locations'

export const QUERY = gql`
  query FindLocations {
    locations {
      id
      created_at
      updated_at
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No locations yet. '}
      <Link
        to={routes.newLocation()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ locations }: CellSuccessProps<FindLocations>) => {
  return <Locations locations={locations} />
}