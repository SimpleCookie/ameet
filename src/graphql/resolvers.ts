import { CookieContext } from "../context"
import { repository } from "../database/repository"

export const graphQLResolvers = {
  Query: {
    users: (_parent: any, _args: any, context: CookieContext, _info: any) =>
      auth(context) && repository.findAllUsers(),
  },
}

const auth = (context: CookieContext) => {
  console.log("context", context)
  return context.auth
}
