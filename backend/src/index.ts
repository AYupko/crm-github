import Fastify from "fastify";
import dotenv from "dotenv";
import { configureRoutes } from "./routes";
import { setFastifyDecorators } from "./decorators";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

const start = async () => {
  try {
    fastify.register(fastifyJwt, {
      secret: process.env.APPLICATION_SECRET || "",
    });

    fastify.register(fastifyCookie, {
      secret: process.env.COOKIE_SECRET,
    });

    setFastifyDecorators(fastify);

    configureRoutes(fastify);

    await fastify.listen({
      port: Number(process.env.PORT) || 3000,
      host: "0.0.0.0",
    });

    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT || 3000}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
