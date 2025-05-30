import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, name } = request.body as { email: string; name: string };

    console.log({ email, name });
    console.log({ email, name });
    console.log({ email, name });
    const customerService = new CreateCustomerService();

    const customer = await customerService.createCostumer({ email, name });

    reply.send(customer);
  }
}

export { CreateCustomerController };
