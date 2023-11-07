import prismaClient from "../prisma"

interface CustomerProps {
  id: string
}

class DeleteCustomerService {
  async execute({ id }: CustomerProps) {
    if (!id) {
      throw new Error("Invalid Customer")
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    })

    if (!findCustomer) {
      throw new Error("Customer not found")
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    })

    return { message: "Customer deleted successfully" }
  }
}

export { DeleteCustomerService }
