import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { professorsRoutes } from "@/modules/professors/routes/professors.routes";
import { roomsRoutes } from "@/modules/rooms/routes/rooms.routes";

export const routes: FastifyPluginAsyncZod = async (app) => {
  app.register(professorsRoutes, { prefix: "/professores" });
  app.register(roomsRoutes, { prefix: "/salas" });
};
