import { baseQuery } from "@/shared/lib";
import {
  AddProjectBody,
  AddProjectResponse,
  GetProjectsResponse,
  UpdateProjectResponse,
} from "./types";

const getProjects = () => {
  return baseQuery.get<GetProjectsResponse>("/projects");
};

const addProject = (params: AddProjectBody) => {
  return baseQuery.post<AddProjectResponse>("/projects", { ...params });
};

const updateProject = ({ id }: { id: string }) => {
  return baseQuery.put<UpdateProjectResponse>(`/projects/${id}`);
};

const deleteProject = ({ id }: { id: string }) => {
  return baseQuery.delete(`/projects/${id}`);
};

export const projectService = {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
};
