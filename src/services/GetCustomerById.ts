import prismaClient from "../prisma";

class GetCustomerById {
  async get(id: string) {
    if (!id) throw new Error("Informe o id do usuário!");

    const customer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    return customer;
  }
}

export { GetCustomerById };
