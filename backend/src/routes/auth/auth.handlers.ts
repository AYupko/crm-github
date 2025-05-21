import { createToken } from "@/business/lib";
import { authService } from "@/business/services/auth/auth.service";
import {
  AccessTokenJWTPayload,
  SignInRequestBody,
  SignInResponse,
  SignupResponse,
} from "@/schemas/auth.schemas";
import { FastifyReply, FastifyRequest } from "fastify";

export const signIn = async (
  request: FastifyRequest<{
    Body: SignInRequestBody;
  }>,
  reply: FastifyReply
) => {
  const { email, password } = request.body;
  const data = await authService.signIn({ email, password });

  const payload: AccessTokenJWTPayload = {
    id: data.safeUser.id,
    type: "access-token",
  };

  const accessToken = createToken(request.server.jwt, payload, {
    expiresIn: "7d",
  });

  const response: SignInResponse = {
    user: data.safeUser,
  };

  reply
    .setCookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
      signed: true,
    })
    .code(200)
    .send(response);
};

export const signUp = async (
  request: FastifyRequest<{
    Body: SignInRequestBody;
  }>,
  reply: FastifyReply
) => {
  const { email, password } = request.body;

  const data = await authService.signUp({ email, password });

  const response: SignupResponse = {
    user: data.safeUser,
  };

  return reply.code(201).send(response);
};
