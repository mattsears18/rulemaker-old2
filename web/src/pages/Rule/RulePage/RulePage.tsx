import RuleCell from 'src/components/Rule/RuleCell'

type RulePageProps = {
  id: string
}

const RulePage = ({ id }: RulePageProps) => {
  return <RuleCell id={id} />
}

export default RulePage
