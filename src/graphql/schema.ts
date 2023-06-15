export const graphQLTypeDefs = `#graphql
  type User {
    id: String!
    alias: String!
    location: String!
    age: Int!
    gender: Gender!
    lookingFor: [Gender!]!
    ssn: String
  }

  enum Gender {
    M
    F
  }

  type Query {
    users(filter: UserFilterInput): [User]
  }

  input UserFilterInput {
    age: IntervalQueryOperatorInput
    alias: StringQueryOperatorInput
    id: StringQueryOperatorInput
    gender: Gender
  }

  input StringQueryOperatorInput {
    eq: String
    in: String
  }

  input IntervalQueryOperatorInput {
    min: Int!
    max: Int!
  }
`
