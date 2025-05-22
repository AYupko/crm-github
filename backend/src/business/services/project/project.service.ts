import {
  ConflictError,
  getProjectByPath,
  InternalServerError,
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
    throw new ConflictError("Repository already added.");
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

export const projectService = {
  addProject,
};
