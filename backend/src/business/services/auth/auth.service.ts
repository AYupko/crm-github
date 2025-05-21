import bcrypt from "bcrypt";

import { ConflictError, encryptPassword } from "@/business/lib";
import { userRepository } from "@/database/repositories";

const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
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

  const { passwordHash, ...safeUser } = user;

  return { safeUser };
};

const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await userRepository.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new ConflictError("This email is already registered in the system");
  }

  const hashedPassword = encryptPassword(password);

  const createdUser = await userRepository.create({
    data: { email, passwordHash: hashedPassword },
  });

  const { passwordHash, ...safeUser } = createdUser;

  return { safeUser };
};

export const authService = {
  signIn,
  signUp,
};
