import { CookieContext } from "./context"
import { repository } from "../database/repository"
import { UserFilterInput } from "./schema-type"
import { throwUnauthorized } from "../statusCodes"

export const graphQLResolvers = {
  Query: {
    users: (
      _parent: any,
      { filter }: UserFilterInput,
      context: CookieContext,
      _info: any
    ) => {
      requireAuth(context)

      if (filter?.gender) {
        return repository
          .findAllUsers()
          .filter((u) => u.gender === filter.gender)
      }
      if (filter?.alias?.eq) {
        return [repository.findUserByAlias(filter?.alias?.eq)]
      }
      if (filter?.alias?.in) {
        return repository
          .findAllUsers()
          .filter((u) => u.alias.includes(filter?.alias?.in!))
      }
      if (filter?.age) {
        return repository.findUserByAge(filter?.age?.min, filter?.age?.max)
      }
      return repository.findAllUsers()
    },
  },
}

const requireAuth = (context: CookieContext) => {
  if (context.auth) return context.auth
  throwUnauthorized()
}
