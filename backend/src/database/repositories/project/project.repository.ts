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

  if (!repository) throw new NotFoundError("Project not found");

  return repository;
};

const findFirst = <T extends Prisma.RepositoryFindFirstArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryFindFirstArgs>
) => {
  return prisma.repository.findFirst(payload);
};

const findMany = <T extends Prisma.RepositoryFindManyArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryFindManyArgs>
) => {
  return prisma.repository.findMany(payload);
};

const create = <T extends Prisma.RepositoryCreateArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryCreateArgs>
) => {
  return prisma.repository.create(payload);
};

const removeOne = <T extends Prisma.RepositoryDeleteArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryDeleteArgs>
) => {
  return prisma.repository.delete(payload);
};

const update = <T extends Prisma.RepositoryUpdateArgs>(
  payload: Prisma.SelectSubset<T, Prisma.RepositoryUpdateArgs>
) => {
  return prisma.repository.update(payload);
};

export const projectRepository = {
  findUnique,
  findUniqueOrFail,
  create,
  findFirst,
  findMany,
  removeOne,
  update,
};
