import { userRepository } from "@/database/repositories";

const checkUserExists = async (userId: string) => {
  await userRepository.findUniqueOrFail({
    where: {
      id: userId,
    },
    select: {
      id: true,
    },
  });
};

export const userService = {
  checkUserExists,
};
