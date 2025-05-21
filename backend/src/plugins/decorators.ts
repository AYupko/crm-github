import { BadRequestError, UnauthorizedError } from "@/business/lib";
import { userService } from "@/business/services";
import {
  AccessTokenJWTPayload,
  accessTokenJWTPayloadSchema,
} from "@/schemas/auth.schemas";
import { FastifyInstance, FastifyRequest } from "fastify";

const authenticate = async (req: FastifyRequest) => {
  try {
    const result = req.unsignCookie(req.cookies.accessToken ?? "");

    if (!result.valid) {
      throw new UnauthorizedError("Invalid token.");
    }

    const decoded = req.server.jwt.verify<AccessTokenJWTPayload>(result.value);

    await accessTokenJWTPayloadSchema.parseAsync(decoded);
    await userService.checkUserExists(decoded.id);
  } catch (err) {
    throw new UnauthorizedError("Unauthenticated.");
  }
};

const notAuthenticated = async (req: FastifyRequest) => {
  const token = req.headers.authorization;

  if (token) {
    throw new BadRequestError("Already authenticated");
  }
};

export const setFastifyDecorators = (fastify: FastifyInstance) => {
  fastify.decorate("authenticate", authenticate);
  fastify.decorate("notAuthenticated", notAuthenticated);
};
