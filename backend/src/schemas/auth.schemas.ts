import { z } from "zod";

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

const signInBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SigninRequestBody = z.infer<typeof signInBodySchema>;

export { signUpBodySchema, signInBodySchema, accessTokenJWTPayloadSchema };

export type { AccessTokenJWTPayload, SignupRequestBody, SigninRequestBody };
