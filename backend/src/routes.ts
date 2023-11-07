import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify"
import { CreateCustomerController } from "./controllers/CreateCustomerController"
import { ListCustomersController } from "./controllers/ListCustomersController"
import { DeleteCustomerController } from "./controllers/DeleteCustomerController"

export async function Routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/customer",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(req, reply)
    }
  )

  fastify.get(
    "/customers",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(req, reply)
    }
  )

  fastify.delete(
    "/customer",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(req, reply)
    }
  )
}
