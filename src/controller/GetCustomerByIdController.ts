import { FastifyReply, FastifyRequest } from "fastify";
import { GetCustomerById } from "../services/GetCustomerById";

class GetCustomerByIdController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.params as { id: string };

    const service = new GetCustomerById();

    const customer = await service.get(id);

    rep.send(customer);
  }
}

export { GetCustomerByIdController };
