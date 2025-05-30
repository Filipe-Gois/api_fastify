import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "./controller/CreateCustomerController";
import { ListCustomersController } from "./controller/ListCustomersController";
import { DeleteCustomerController } from "./controller/DeleteCustomerController";
import { GetCustomerByIdController } from "./controller/GetCustomerByIdController";

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) =>
      new ListCustomersController().handle(request, reply)
  );

  fastify.get(
    "/customer/:id",
    async (request: FastifyRequest, reply: FastifyReply) =>
      new GetCustomerByIdController().handle(request, reply)
  );

  fastify.delete(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) =>
      new DeleteCustomerController().handle(request, reply)
  );

  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return {
        ok: true,
      };
    }
  );
};
