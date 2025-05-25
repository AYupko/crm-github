import Fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import fastifyFormbody from "@fastify/formbody";
import cors from "@fastify/cors";

import { config } from "dotenv";
import { configureRoutes } from "./routes";
import { setFastifyDecorators } from "./plugins";

config();

const fastify = Fastify({
  logger: true,
});

const start = async () => {
  try {
    await fastify.register(cors, {
      origin: true,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    });

    fastify.register(fastifyCookie, {
      secret: process.env.COOKIE_SECRET,
    });

    fastify.register(fastifyJwt, {
      secret: process.env.APPLICATION_SECRET || "",
      cookie: {
        cookieName: "accessToken",
        signed: false,
      },
    });

    fastify.register(fastifyFormbody);

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
