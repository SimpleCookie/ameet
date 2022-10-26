import type {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from "fastify"
import { repository } from "./database/repository"

export const userRoutes: FastifyPluginAsync = async (
  server: FastifyInstance,
  _options: FastifyPluginOptions
) => {
  server.get("/users", {}, async (request, reply) => {
    try {
      const users = repository.findAllUsers()
      return reply.code(200).send({ users })
    } catch (error) {
      request.log.error(error)
      return reply.send(500)
    }
  })

  server.get<FindByAlias>("/user/alias/:alias", async (request, reply) => {
    try {
      const { alias } = request.params
      const user = repository.findUserByAlias(alias)
      if (!user) return reply.send(404)
      return reply.code(200).send({ user })
    } catch (error) {
      request.log.error(error)
      return reply.send(500)
    }
  })
}

interface FindByAlias {
  Params: { alias: string }
}
