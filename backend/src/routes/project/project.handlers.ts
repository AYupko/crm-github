import { projectService } from "@/business/services";
import {
  AddProjectBody,
  AddProjectResponse,
  GetProjectsResponse,
  ProjectIdParams,
  updateProjectResponse,
} from "@/schemas/project.schemas";
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

export const getUserProjects = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const userId = request.user.id;
  const data = await projectService.getUserProjects({ userId });

  const response: GetProjectsResponse = { projects: data.projects };

  return reply.code(200).send(response);
};

export const removeProject = async (
  request: FastifyRequest<{ Params: ProjectIdParams }>,
  reply: FastifyReply
) => {
  const userId = request.user.id;
  const projectId = request.params.id;

  await projectService.deleteProject({ userId, projectId });

  return reply.code(204).send();
};

export const updateProject = async (
  request: FastifyRequest<{ Params: ProjectIdParams }>,
  reply: FastifyReply
) => {
  const userId = request.user.id;
  const projectId = request.params.id;

  const data = await projectService.updateProject({ userId, projectId });

  const response: updateProjectResponse = { project: data.updatedProject };

  return reply.code(200).send(response);
};
