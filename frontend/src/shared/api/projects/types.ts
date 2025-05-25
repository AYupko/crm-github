import { Project } from "@/entities";

type AddProjectBody = {
  path: string;
};

type AddProjectResponse = {
  project: Project;
};

type GetProjectsResponse = {
  projects: Project[];
};

type UpdateProjectResponse = {
  project: Project;
};

export {
  AddProjectBody,
  AddProjectResponse,
  GetProjectsResponse,
  UpdateProjectResponse,
};
