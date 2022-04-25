import EditRuleCell from 'src/components/Rule/EditRuleCell'

type RulePageProps = {
  id: string
}

const EditRulePage = ({ id }: RulePageProps) => {
  return <EditRuleCell id={id} />
}

export default EditRulePage
