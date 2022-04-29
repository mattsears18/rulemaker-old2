import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Rule/RulesCell'

import { Icon, Link } from '@chakra-ui/react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const DELETE_RULE_MUTATION = gql`
  mutation DeleteRuleMutation($id: String!) {
    deleteRule(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const RulesList = ({ rules }) => {
  const [deleteRule] = useMutation(DELETE_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('Rule deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete rule ' + id + '?')) {
      deleteRule({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Content</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => {
            return (
              <tr key={rule.id}>
                <td>
                  <Link
                    href={routes.rule({ id: rule.id })}
                    title={'Show rule ' + rule.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    {truncate(rule.name)}
                  </Link>
                </td>
                <td>{truncate(rule.content)}</td>
                <td>{timeTag(rule.created_at)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      href={routes.editRule({ id: rule.id })}
                      title={'Edit rule ' + rule.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      <Icon as={FaEdit} boxSize={4} />
                    </Link>
                    <button
                      type="button"
                      title={'Delete rule ' + rule.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(rule.id)}
                    >
                      <Icon as={FaTrash} boxSize={4} />
                    </button>
                  </nav>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RulesList
