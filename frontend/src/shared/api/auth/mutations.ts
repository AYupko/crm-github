import { QueryKeys } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { SignInRequest, SignUpRequest } from "./types";
import { authService } from "./auth-service";
import { useNavigate } from "react-router";
import { setUser, User } from "@/entities/user";

export const useSignIn = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [QueryKeys.signIn],
    mutationFn: async (params: SignInRequest) => {
      const response = await authService.signIn(params);

      return response.data.user;
    },
    onSuccess: async (user: User) => {
      setUser(user);
      navigate("/");
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
