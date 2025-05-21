import { Prisma, prisma } from "@/database/prisma";

const findUnique = <T extends Prisma.UserFindUniqueArgs>(
  payload: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
) => {
  return prisma.user.findUnique(payload);
};

export const userRepository = {
  findUnique,
};
