import { z } from "zod";

const addProjectBodySchema = z.object({
  path: z.string(),
});

type AddProjectBody = z.infer<typeof addProjectBodySchema>;

export const defaultProjectSchema = z.object({
  id: z.string().uuid(),
  owner: z.string(),
  name: z.string(),
  url: z.string().url(),
  stars: z.number(),
  forks: z.number(),
  issues: z.number(),
  createdAt: z.date(),
});

const addProjectResponseSchema = z.object({
  project: defaultProjectSchema,
});

type AddProjectResponse = z.infer<typeof addProjectResponseSchema>;

const getProjectsResponseSchema = z.object({
  projects: z.array(defaultProjectSchema),
});

type GetProjectsResponse = z.infer<typeof getProjectsResponseSchema>;

const projectIdParamsSchema = z.object({
  id: z.string().uuid(),
});

type ProjectIdParams = z.infer<typeof projectIdParamsSchema>;

const updateProjectResponseSchema = z.object({
  project: defaultProjectSchema,
});

type updateProjectResponse = z.infer<typeof updateProjectResponseSchema>;

export {
  addProjectBodySchema,
  addProjectResponseSchema,
  getProjectsResponseSchema,
  projectIdParamsSchema,
  updateProjectResponseSchema,
};

export type {
  AddProjectBody,
  AddProjectResponse,
  GetProjectsResponse,
  ProjectIdParams,
  updateProjectResponse,
};
