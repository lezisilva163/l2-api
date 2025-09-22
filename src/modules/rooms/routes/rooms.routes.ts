import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getRoomsSchedule } from "../services/rooms.services";
import { roomsScheduleDoc } from "../docs/rooms.docs";

export const roomsRoutes: FastifyPluginAsyncZod = async (app) => {
  app.get("/horarios", roomsScheduleDoc, async () => {
    return await getRoomsSchedule();
  });
};
