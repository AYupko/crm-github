import { User } from "@/entities/user";

type SignInRequest = {
  email: string;
  password: string;
};

type SignInResponse = {
  user: User;
};

type SignUpRequest = {
  email: string;
  password: string;
};

type SignUpResponse = {
  user: User;
};

export type {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
};
