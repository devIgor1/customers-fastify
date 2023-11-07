import Fastify from "fastify"
import cors from "@fastify/cors"
import { Routes } from "./routes"

const server = Fastify({
  logger: true,
})

const startServer = async () => {
  await server.register(cors)
  await server.register(Routes)

  try {
    await server.listen({ port: 2000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

startServer()
