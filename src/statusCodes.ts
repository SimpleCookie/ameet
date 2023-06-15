import { GraphQLError } from "graphql"

export const throwUnauthorized = () => {
  throw new GraphQLError("User is not authorized", {
    extensions: {
      code: "Unauthorized",
      http: { status: 401 },
    },
  })
}
