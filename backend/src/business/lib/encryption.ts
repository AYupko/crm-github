import { JWT, SignOptions } from "@fastify/jwt";
import bcrypt from "bcrypt";

const TOKEN_LIFETIME = "7d";

const encryptPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};

const comparePassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};

const createToken = <T extends Record<string, unknown>>(
  jwt: JWT,
  payload: T,
  options: Partial<SignOptions> = {}
) => {
  return jwt.sign(payload, {
    ...options,
    expiresIn: options.expiresIn || TOKEN_LIFETIME,
  });
};

export { encryptPassword, comparePassword, createToken };
