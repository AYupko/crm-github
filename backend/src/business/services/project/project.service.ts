import {
  ConflictError,
  getProjectByPath,
  InternalServerError,
  NotFoundError,
} from "@/business/lib";
import { projectRepository } from "@/database/repositories/project";

const addProject = async ({
  path,
  userId,
}: {
  path: string;
  userId: string;
}) => {
  const [owner, name] = path.split("/");

  const existing = await projectRepository.findFirst({
    where: { owner, name, userId },
  });

  if (existing) {
    throw new ConflictError("Repository already added");
  }

  const response = await getProjectByPath({ path });

  if (!response.success) {
    throw new InternalServerError("GitHub API request failed");
  }

  const project = await projectRepository.create({
    data: { ...response.data, userId },
  });

  return { project };
};

const getUserProjects = async ({ userId }: { userId: string }) => {
  const projects = await projectRepository.findMany({ where: { userId } });

  return { projects };
};

const deleteProject = async ({
  userId,
  projectId,
}: {
  userId: string;
  projectId: string;
}) => {
  const project = await projectRepository.findUniqueOrFail({
    where: {
      id: projectId,
      userId,
    },
    select: { id: true },
  });

  await projectRepository.removeOne({ where: { id: project.id } });
};

const updateProject = async ({
  userId,
  projectId,
}: {
  userId: string;
  projectId: string;
}) => {
  const project = await projectRepository.findUniqueOrFail({
    where: { id: projectId, userId },
    select: { owner: true, name: true },
  });

  const path = `${project.owner}/${project.name}`;
  const response = await getProjectByPath({ path });

  if (!response.success) {
    throw new InternalServerError("GitHub API request failed");
  }

  const updatedProject = await projectRepository.update({
    where: { id: projectId },
    data: { ...response.data },
  });

  return { updatedProject };
};

export const projectService = {
  addProject,
  getUserProjects,
  deleteProject,
  updateProject,
};
