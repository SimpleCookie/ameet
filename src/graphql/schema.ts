export const graphQLTypeDefs = `#graphql
  type User {
    alias: String
    ssn: String
    location: String
    age: Int
  }

  type Query {
    users: [User]
  }
`
