import { CookieContext } from "./context"
import { repository } from "../database/repository"

export const graphQLResolvers = {
  Query: {
    users: (_parent: any, _args: any, context: CookieContext, _info: any) => {
      if (!auth(context)) {
        throw new Error("Not authorized")
      }
      return repository.findAllUsers()
    },
  },
}

const auth = (context: CookieContext) => {
  console.log("context", context)
  return context.auth
}
