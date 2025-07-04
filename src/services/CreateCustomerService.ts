import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerService {
  async createCostumer({ email, name }: CreateCustomerProps) {
    console.log("first");

    if (!email || !name) throw new Error("Preencha todos os campos!");

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
