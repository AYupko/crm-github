import { QueryKeys } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";
import { selectIsAuthorized, userStore } from "@/entities/user";
import { authService } from "./auth-service";

export const useAuthQuery = () => {
  const isAuthorized = userStore(selectIsAuthorized);

  return useQuery({
    queryKey: [QueryKeys.me],
    queryFn: async () => {
      const res = await authService.checkAuth();
      const user = res.data.user;

      userStore.getState().setUser(user);

      return user;
    },
    enabled: !isAuthorized,
    staleTime: 1000 * 60 * 60,
  });
};
