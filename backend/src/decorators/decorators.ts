import { BadRequestError, UnauthorizedError } from "@/business/lib";
import { AccessTokenJWTPayload, accessTokenJWTPayloadSchema } from "@/schemas/auth.schemas";
import { FastifyInstance, FastifyRequest } from "fastify";

const authenticate = async (req: FastifyRequest) => {
  try {
    const decoded = await req.jwtVerify<AccessTokenJWTPayload>();
    await accessTokenJWTPayloadSchema.parseAsync(decoded);
    await userService.checkUserExists(decoded.id);
  } catch (err) {
    throw new UnauthorizedError("Unauthenticated.");
  }
};

async function notAuthenticated(req: FastifyRequest) {
  const token = req.headers.authorization;

  if (token) {
    throw new BadRequestError("Already authenticated");
  }
}

export const setFastifyDecorators = (fastify: FastifyInstance) => {
  fastify.decorate("authenticate", authenticate);
  fastify.decorate("notAuthenticated", notAuthenticated);
};
