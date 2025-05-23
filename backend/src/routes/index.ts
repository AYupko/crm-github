import { FastifyInstance } from "fastify";
import { authRoutes } from "./auth";
import { projectRoutes } from "./project";

const configureRoutes = async (fastify: FastifyInstance) => {
  const defaultPrefix = "api/";

  fastify.register(authRoutes, {
    prefix: defaultPrefix + "auth",
  });

  fastify.register(projectRoutes, {
    prefix: defaultPrefix + "projects",
  });
};

export { configureRoutes };
