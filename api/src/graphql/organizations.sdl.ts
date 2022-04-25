export const schema = gql`
  type Organization {
    id: String!
    created_at: DateTime!
    updated_at: DateTime!
    name: String!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(id: String!): Organization @requireAuth
  }

  input CreateOrganizationInput {
    created_at: DateTime!
    updated_at: DateTime!
    name: String!
  }

  input UpdateOrganizationInput {
    created_at: DateTime
    updated_at: DateTime
    name: String
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
      @requireAuth
    updateOrganization(
      id: String!
      input: UpdateOrganizationInput!
    ): Organization! @requireAuth
    deleteOrganization(id: String!): Organization! @requireAuth
  }
`
