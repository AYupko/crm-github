import { QueryKeys } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";
import { authService } from "./auth-service";

export const useAuthQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.me],
    queryFn: async () => {
      const res = await authService.checkAuth();
      return res;
    },
  });
};
