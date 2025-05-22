import {
  addProjectBodySchema,
  addProjectResponseSchema,
} from "@/schemas/project.schemas";
import { FastifyInstance } from "fastify";
import { zodToJsonSchema as $ref } from "zod-to-json-schema";
import { addProject } from "./project.handlers";

export const projectRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/",
    {
      preHandler: [async (req, reply) => fastify.authenticate(req, reply)],
      schema: {
        tags: ["project"],
        summary: "Add GitHub project by repository path",
        description:
          "Repository path is expected in format owner/name (e.g. facebook/react)",
        body: $ref(addProjectBodySchema),
        response: {
          200: $ref(addProjectResponseSchema),
        },
      },
    },
    addProject
  );

  // fastify.post(
  //   "/sign-up",
  //   {
  //     preHandler: [async (req, reply) => fastify.notAuthenticated(req, reply)],
  //     schema: {
  //       tags: ["auth"],
  //       body: $ref(signUpBodySchema),
  //       summary: "Sign up with email and password",
  //       response: {
  //         201: $ref(signUpResponseSchema),
  //       },
  //     },
  //   },
  //   signUp
  // );
};
