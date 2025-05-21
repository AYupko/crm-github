import { FastifyInstance } from "fastify";

export const authRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/sign-in', {
    preHandler: [fastify.notAuthenticated],
    schema: {
      tags: ['auth'],
      body:
      response: {
        200:
      }
    }
  }, signIn)
};
