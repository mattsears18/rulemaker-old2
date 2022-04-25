export const schema = gql`
  type Rule {
    id: String!
    created_at: DateTime!
    updated_at: DateTime!
    name: String!
    content: String!
  }

  type Query {
    rules: [Rule!]! @requireAuth
    rule(id: String!): Rule @requireAuth
  }

  input CreateRuleInput {
    created_at: DateTime!
    updated_at: DateTime!
    name: String!
    content: String!
  }

  input UpdateRuleInput {
    created_at: DateTime
    updated_at: DateTime
    name: String
    content: String
  }

  type Mutation {
    createRule(input: CreateRuleInput!): Rule! @requireAuth
    updateRule(id: String!, input: UpdateRuleInput!): Rule! @requireAuth
    deleteRule(id: String!): Rule! @requireAuth
  }
`
