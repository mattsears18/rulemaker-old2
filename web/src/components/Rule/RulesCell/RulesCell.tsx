import type { FindRules } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Rules from 'src/components/Rule/Rules'

export const QUERY = gql`
  query FindRules {
    rules {
      id
      created_at
      updated_at
      name
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No rules yet. '}
      <Link
        to={routes.newRule()}
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

export const Success = ({ rules }: CellSuccessProps<FindRules>) => {
  return <Rules rules={rules} />
}
