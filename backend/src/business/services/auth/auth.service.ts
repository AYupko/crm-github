import bcrypt from "bcrypt";

import { ConflictError } from "@/business/lib";
import { userRepository } from "@/database/repositories/user/user.repository";

export const signIn = async (email: string, password: string) => {
  const user = await userRepository.findUnique({
    where: { email },
  });

  if (!user || !user.passwordHash) {
    throw new ConflictError("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    throw new ConflictError("Invalid email or password");
  }

  return user;
};

export const authService = {
  signIn,
};
