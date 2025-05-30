import prismaClient from "../prisma";

class ListCustomersService {
  async getAll() {
    const customers = await prismaClient.customer.findMany();

    return customers;
  }
}

export { ListCustomersService };
