import prismaClient from "../prisma"

interface CustomerProps {
  name: string
  email: string
}

class CreateCustomerService {
  async execute({ name, email }: CustomerProps) {
    if (!name || !email) {
      throw new Error("Invalid Credentials")
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    })

    return customer
  }
}

export { CreateCustomerService }
