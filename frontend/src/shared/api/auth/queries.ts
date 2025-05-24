import { QueryKeys } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";
import { setUser } from "@/entities/user";
import { authService } from "./auth-service";

export const useAuthQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: [QueryKeys.me],
    queryFn: async () => {
      const res = await authService.checkAuth();
      const user = res.data.user;

      setUser(user);

      return user;
    },
    enabled,
    staleTime: 1000 * 60 * 60,
  });
};
