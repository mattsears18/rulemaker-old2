import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import RuleForm from 'src/components/Rule/RuleForm'

const CREATE_RULE_MUTATION = gql`
  mutation CreateRuleMutation($input: CreateRuleInput!) {
    createRule(input: $input) {
      id
    }
  }
`

const NewRule = () => {
  const [createRule, { loading, error }] = useMutation(CREATE_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('Rule created')
      navigate(routes.rules())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createRule({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Rule</h2>
      </header>
      <div className="rw-segment-main">
        <RuleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRule
