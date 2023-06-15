export const graphQLTypeDefs = `#graphql
  type User {
    alias: String
    ssn: String
    location: String
    age: Int
    gender: Gender
    lookingFor: [Gender]
  }

  enum Gender {
    M
    F
  }

  type Query {
    users: [User]
    user(alias: String): User
  }
`
