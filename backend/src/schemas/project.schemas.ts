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

export { addProjectBodySchema, addProjectResponseSchema };

export type { AddProjectBody, AddProjectResponse };
