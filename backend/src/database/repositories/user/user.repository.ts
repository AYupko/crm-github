import { NotFoundError } from "@/business/lib";
import { Prisma, prisma } from "@/database/prisma";

const findUnique = <T extends Prisma.UserFindUniqueArgs>(
  payload: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
) => {
  return prisma.user.findUnique(payload);
};

const findUniqueOrFail = async <T extends Prisma.UserFindUniqueArgs>(
  payload: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
) => {
  const user = await prisma.user.findUnique(payload);

  if (!user) throw new NotFoundError("User not found");

  return user;
};

const create = <T extends Prisma.UserCreateArgs>(
  payload: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
) => {
  return prisma.user.create(payload);
};

export const userRepository = {
  findUnique,
  findUniqueOrFail,
  create,
};
