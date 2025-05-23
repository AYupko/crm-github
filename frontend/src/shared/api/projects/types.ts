type AddProjectBody = {
  path: string;
};

type Project = {
  id: string;
  owner: string;
  name: string;
  url: string;
  stars: number;
  forks: number;
  issues: number;
  createdAt: string;
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
