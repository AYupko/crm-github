import { QueryKeys } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { SignInRequest, SignUpRequest } from "./types";
import { authService } from "./auth-service";

export const useSignIn = () => {
  return useMutation({
    mutationKey: [QueryKeys.signIn],
    mutationFn: async (params: SignInRequest) => {
      const response = await authService.signIn(params);

      return response.data.user;
    },
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationKey: [QueryKeys.signUp],
    mutationFn: async (params: SignUpRequest) => {
      const response = await authService.signUp(params);

      return response.data.user;
    },
  });
};
