import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const service = new DeleteCustomerService();

    const message = await service.deleteCustomer(id);

    console.log(id);

    reply.send(message);
  }
}

export { DeleteCustomerController };
