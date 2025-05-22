import { NotFoundError } from "@/business/lib";
import { Prisma, prisma } from "@/database/prisma";

const findUnique = <T extends Prisma.RepositoryFindUniqueArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryFindUniqueArgs>
) => {
  return prisma.repository.findUnique(payload);
};

const findUniqueOrFail = async <T extends Prisma.RepositoryFindUniqueArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryFindUniqueArgs>
) => {
  const repository = await prisma.repository.findUnique(payload);

  if (!repository) throw new NotFoundError("Repository not found");

  return repository;
};

const findFirst = <T extends Prisma.RepositoryFindFirstArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryFindFirstArgs>
) => {
  return prisma.repository.findFirst(payload);
};

const create = <T extends Prisma.RepositoryCreateArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryCreateArgs>
) => {
  return prisma.repository.create(payload);
};

export const projectRepository = {
  findUnique,
  findUniqueOrFail,
  create,
  findFirst,
};
