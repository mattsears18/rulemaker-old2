export const schema = gql`
  type User {
    id: String!
    created_at: DateTime!
    updated_at: DateTime!
    auth0_sub: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    created_at: DateTime!
    updated_at: DateTime!
    auth0_sub: String!
  }

  input UpdateUserInput {
    created_at: DateTime
    updated_at: DateTime
    auth0_sub: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
