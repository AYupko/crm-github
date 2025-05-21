import { z } from "zod";

const applicationUserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  createdAt: z.date(),
});

const accessTokenJWTPayloadSchema = z.object({
  id: z.string(),
  type: z.literal("access-token"),
});

type AccessTokenJWTPayload = z.infer<typeof accessTokenJWTPayloadSchema>;

const signUpBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignupRequestBody = z.infer<typeof signUpBodySchema>;

const signUpResponseSchema = z.object({
  user: applicationUserSchema,
});

type SignupResponse = z.infer<typeof signUpResponseSchema>;

const signInBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInRequestBody = z.infer<typeof signInBodySchema>;

const signInResponseSchema = z.object({
  user: applicationUserSchema,
});

type SignInResponse = z.infer<typeof signInResponseSchema>;

export {
  signUpBodySchema,
  signInBodySchema,
  accessTokenJWTPayloadSchema,
  signInResponseSchema,
  signUpResponseSchema,
};

export type {
  AccessTokenJWTPayload,
  SignupRequestBody,
  SignInRequestBody,
  SignInResponse,
  SignupResponse,
};
