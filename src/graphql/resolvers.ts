import { CookieContext } from "./context"
import { repository } from "../database/repository"

export const graphQLResolvers = {
  Query: {
    users: (_parent: any, _args: any, context: CookieContext, _info: any) => {
      requireAuth(context)
      return repository.findAllUsers()
    },
    user: (_parent: any, args: any, context: CookieContext, _info: any) => {
      requireAuth(context)
      return repository.findUserByAlias(args.alias)
    },
  },
}

const requireAuth = (context: CookieContext) => {
  if (context.auth) return context.auth
  throw new Error("Not authorized")
}
