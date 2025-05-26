import { baseQuery } from "@/shared/lib";
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "./types";

const signIn = (params: SignInRequest) => {
  return baseQuery.post<SignInResponse>("/auth/sign-in", {
    ...params,
  });
};

const signUp = (params: SignUpRequest) => {
  return baseQuery.post<SignUpResponse>("/auth/sign-up", {
    ...params,
  });
};

const logout = () => {
  return baseQuery.post("auth/logout");
};

export const authService = {
  signIn,
  signUp,
  logout,
};
