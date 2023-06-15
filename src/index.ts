import fastify from "fastify"
import { ApolloServer, BaseContext } from "@apollo/server"
import fastifyApollo, {
  fastifyApolloDrainPlugin,
  fastifyApolloHandler,
} from "@as-integrations/fastify"
// import compress from "@fastify/compress"
import cors from "@fastify/cors"
import helmet from "@fastify/helmet"
import rateLimit from "@fastify/rate-limit"
import { graphQLTypeDefs } from "./graphql/schema"
import { graphQLResolvers } from "./graphql/resolvers"
import { cookieContext, CookieContext } from "./graphql/context"

const main = async () => {
  const server = fastify({ logger: true })
  const apollo = new ApolloServer<CookieContext>({
    typeDefs: graphQLTypeDefs,
    resolvers: [graphQLResolvers],
    plugins: [fastifyApolloDrainPlugin(server)],
  })
  await apollo.start()

  server.get("/", async (_request: any, _reply: any) => {
    return "pong\n"
  })

  // await server.register(rateLimit)
  // await server.register(helmet)
  // await server.register(cors)
  // await server.register(compress)
  await server.register(fastifyApollo(apollo), {
    context: cookieContext,
  })

  server.listen({ port: 8080 }, (err: any, address: any) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
}

main()
