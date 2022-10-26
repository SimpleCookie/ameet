import fastify from "fastify"
import { userRoutes } from "./userRoutes"

const server = fastify({ logger: true })

server.get("/", async (_request, _reply) => {
  return "pong\n"
})

server.register(userRoutes)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
