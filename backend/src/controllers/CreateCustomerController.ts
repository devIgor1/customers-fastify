import { FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerService } from "../services/CreateCustomerService"

class CreateCustomerController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string }

    const customerService = new CreateCustomerService()

    const customer = await customerService.execute({ name, email })

    reply.send(customer)
  }
}

export { CreateCustomerController }
