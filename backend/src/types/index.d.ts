import "fastify";
import { FastifyRequest, FastifyReply } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>;
    notAuthenticated: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>;
  }
}
