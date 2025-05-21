import { createToken } from "@/business/lib";
import { authService } from "@/business/services/auth/auth.service";
import {
  AccessTokenJWTPayload,
  SigninRequestBody,
} from "@/schemas/auth.schemas";
import { FastifyReply, FastifyRequest } from "fastify";

export const signIn = async (
  request: FastifyRequest<{ Body: SigninRequestBody }>,
  reply: FastifyReply
) => {
  const { body } = request;
  const user = await authService.signIn(body.email, body.password);

  const payload: AccessTokenJWTPayload = {
    id: user.id,
    type: "access-token",
  };

  const accessToken = createToken(request.server.jwt, payload, {
    expiresIn: "7d",
  });

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
    .send({
      user: {
        id: user.id,
        email: user.email,
      },
    });
};
