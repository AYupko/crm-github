import {
  signInBodySchema,
  signInResponseSchema,
  signUpBodySchema,
  signUpResponseSchema,
} from "@/schemas/auth.schemas";
import { FastifyInstance } from "fastify";
import { zodToJsonSchema as $ref } from "zod-to-json-schema";
import { checkAuth, logout, signIn, signUp } from "./auth.handlers";

export const authRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/sign-in",
    {
      preHandler: [async (req, reply) => fastify.notAuthenticated(req, reply)],
      schema: {
        tags: ["auth"],
        summary: "Sign in with email and password",
        body: $ref(signInBodySchema),
        response: {
          200: $ref(signInResponseSchema),
        },
      },
    },
    signIn
  );

  fastify.post(
    "/sign-up",
    {
      preHandler: [async (req, reply) => fastify.notAuthenticated(req, reply)],
      schema: {
        tags: ["auth"],
        body: $ref(signUpBodySchema),
        summary: "Sign up with email and password",
        response: {
          201: $ref(signUpResponseSchema),
        },
      },
    },
    signUp
  );

  fastify.get(
    "/me",
    {
      preHandler: [async (req, reply) => fastify.authenticate(req, reply)],
      schema: {
        tags: ["auth"],
        summary: "Get user auth status",
        response: 200,
      },
    },
    checkAuth
  );

  fastify.post(
    "/logout",
    {
      schema: {
        tags: ["auth"],
        summary: "Logout user",
        response: 200,
      },
    },
    logout
  );
};
