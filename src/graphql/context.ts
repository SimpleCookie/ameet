import { ApolloFastifyContextFunction } from "@as-integrations/fastify"

export interface CookieContext {
  auth: boolean
}

export const cookieContext: ApolloFastifyContextFunction<
  CookieContext
> = async (request, _reply) => ({
  auth: isAuthorized(request.headers.authorization),
})

const isAuthorized = (authorised?: string) => !!authorised?.length
