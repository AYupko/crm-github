import { QueryKeys } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";
import { projectService } from "./projects-service";

export const useGetProjectsQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.projects],
    queryFn: async () => {
      const res = await projectService.getProjects();

      return res.data.projects;
    },
  });
};
