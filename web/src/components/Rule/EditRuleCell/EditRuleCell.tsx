import type { EditRuleById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import RuleForm from 'src/components/Rule/RuleForm'

export const QUERY = gql`
  query EditRuleById($id: String!) {
    rule: rule(id: $id) {
      id
      created_at
      updated_at
      name
      content
    }
  }
`
const UPDATE_RULE_MUTATION = gql`
  mutation UpdateRuleMutation($id: String!, $input: UpdateRuleInput!) {
    updateRule(id: $id, input: $input) {
      id
      created_at
      updated_at
      name
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ rule }: CellSuccessProps<EditRuleById>) => {
  const [updateRule, { loading, error }] = useMutation(UPDATE_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('Rule updated')
      navigate(routes.rules())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateRule({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Rule {rule.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RuleForm rule={rule} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
