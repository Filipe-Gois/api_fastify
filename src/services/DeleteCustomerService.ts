import prismaClient from "../prisma";

class DeleteCustomerService {
  async deleteCustomer(id: string) {
    if (!id) throw new Error("Informe o id de um cliente!");

    const customer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!customer) throw new Error("Usuário não encontrado!");

    await prismaClient.customer.delete({
      where: {
        id: customer.id,
      },
    });

    return { message: `${customer.name} foi deletado com sucesso!` };
  }
}

export { DeleteCustomerService };
