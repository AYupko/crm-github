import { projectService } from "@/business/services";
import { AddProjectBody, AddProjectResponse } from "@/schemas/project.schemas";
import { FastifyReply, FastifyRequest } from "fastify";

export const addProject = async (
  request: FastifyRequest<{
    Body: AddProjectBody;
  }>,
  reply: FastifyReply
) => {
  const path = request.body.path;
  const userId = request.user.id;

  const data = await projectService.addProject({ path, userId });

  const response: AddProjectResponse = { project: data.project };

  return reply.code(201).send(response);
};
