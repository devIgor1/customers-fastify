import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomersService } from "../services/ListCustomersService"

class ListCustomersController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const listCustomers = new ListCustomersService()

    const customers = await listCustomers.execute()

    reply.send(customers)
  }
}

export { ListCustomersController }
