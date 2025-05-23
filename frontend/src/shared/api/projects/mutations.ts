import { QueryKeys } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { AddProjectBody } from "./types";
import { projectService } from "./projects-service";
import { queryClient } from "@/shared/lib";

export const useAddProjectMutation = () => {
  return useMutation({
    mutationKey: [QueryKeys.addProject],
    mutationFn: async (params: AddProjectBody) => {
      const response = await projectService.addProject(params);

      return response.data.project;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.projects] });
    },
  });
};

export const useDeleteProjectMutation = () => {
  return useMutation({
    mutationKey: [QueryKeys.deleteProject],
    mutationFn: async ({ id }: { id: string }) => {
      await projectService.deleteProject({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.projects] });
    },
  });
};

export const useUpdateProjectMutation = () => {
  return useMutation({
    mutationKey: [QueryKeys.updateProject],
    mutationFn: async ({ id }: { id: string }) => {
      const res = await projectService.updateProject({ id });

      return res.data.project;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.projects] });
    },
  });
};
