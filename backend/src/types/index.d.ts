import "fastify";
import "@fastify/jwt";

import { FastifyRequest, FastifyReply } from "fastify";
import { AccessTokenJWTPayload } from "@/schemas/auth.schemas";

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

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: AccessTokenJWTPayload;
  }
}
