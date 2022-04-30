export const schema = gql`
  type Location {
    id: String!
    created_at: DateTime!
    created_by_user: User!
    created_by_user_id: String!
    updated_at: DateTime!
    name: String!
    is_public: Boolean!
  }

  type Query {
    locations: [Location!]! @requireAuth
    location(id: String!): Location @requireAuth
  }

  input CreateLocationInput {
    created_at: DateTime!
    created_by_user_id: String!
    updated_at: DateTime!
    name: String!
    is_public: Boolean!
  }

  input UpdateLocationInput {
    created_at: DateTime
    created_by_user_id: String
    updated_at: DateTime
    name: String
    is_public: Boolean
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location! @requireAuth
    updateLocation(id: String!, input: UpdateLocationInput!): Location!
      @requireAuth
    deleteLocation(id: String!): Location! @requireAuth
  }
`
