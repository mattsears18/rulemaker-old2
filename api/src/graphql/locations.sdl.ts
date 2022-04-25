export const schema = gql`
  type Location {
    id: String!
    created_at: DateTime!
    updated_at: DateTime!
    name: String!
  }

  type Query {
    locations: [Location!]! @requireAuth
    location(id: String!): Location @requireAuth
  }

  input CreateLocationInput {
    created_at: DateTime!
    updated_at: DateTime!
    name: String!
  }

  input UpdateLocationInput {
    created_at: DateTime
    updated_at: DateTime
    name: String
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location! @requireAuth
    updateLocation(id: String!, input: UpdateLocationInput!): Location!
      @requireAuth
    deleteLocation(id: String!): Location! @requireAuth
  }
`
