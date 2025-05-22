import {
  addProjectBodySchema,
  addProjectResponseSchema,
  getProjectsResponseSchema,
  projectIdParamsSchema,
  updateProjectResponseSchema,
} from "@/schemas/project.schemas";
import { FastifyInstance } from "fastify";
import { zodToJsonSchema as $ref } from "zod-to-json-schema";
import {
  addProject,
  getUserProjects,
  removeProject,
  updateProject,
} from "./project.handlers";

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
          201: $ref(addProjectResponseSchema),
        },
      },
    },
    addProject
  );

  fastify.get(
    "/",
    {
      preHandler: [async (req, reply) => fastify.authenticate(req, reply)],
      schema: {
        tags: ["project"],
        summary: "Get saved projects",
        response: {
          201: $ref(getProjectsResponseSchema),
        },
      },
    },
    getUserProjects
  );

  fastify.delete(
    "/:id",
    {
      preHandler: [async (req, reply) => fastify.authenticate(req, reply)],
      schema: {
        tags: ["project"],
        summary: "Delete saved project by id",
        params: $ref(projectIdParamsSchema),
      },
    },
    removeProject
  );

  fastify.put(
    "/:id",
    {
      preHandler: [async (req, reply) => fastify.authenticate(req, reply)],
      schema: {
        tags: ["project"],
        summary: "Update saved project by id",
        params: $ref(projectIdParamsSchema),
        response: {
          200: $ref(updateProjectResponseSchema),
        },
      },
    },
    updateProject
  );
};
