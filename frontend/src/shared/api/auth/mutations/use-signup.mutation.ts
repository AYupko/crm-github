import { QueryKeys } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../auth-service";
import { SignUpRequest } from "../types";

export const useSignUp = () => {
  return useMutation({
    mutationKey: [QueryKeys.signUp],
    mutationFn: async (params: SignUpRequest) => {
      const response = await authService.signUp(params);

      return response.data.user;
    },
  });
};
