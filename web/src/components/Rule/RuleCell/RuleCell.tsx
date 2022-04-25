import type { FindRuleById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Rule from 'src/components/Rule/Rule'

export const QUERY = gql`
  query FindRuleById($id: String!) {
    rule: rule(id: $id) {
      id
      created_at
      updated_at
      name
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Rule not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ rule }: CellSuccessProps<FindRuleById>) => {
  return <Rule rule={rule} />
}
