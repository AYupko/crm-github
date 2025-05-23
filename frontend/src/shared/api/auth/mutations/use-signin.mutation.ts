import { QueryKeys } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../auth-service";
import { SignInRequest } from "../types";

export const useSignIn = () => {
  return useMutation({
    mutationKey: [QueryKeys.signIn],
    mutationFn: async (params: SignInRequest) => {
      const response = await authService.signIn(params);

      return response.data.user;
    },
  });
};
