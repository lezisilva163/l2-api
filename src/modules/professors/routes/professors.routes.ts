import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getProfessorsSchedule } from "../services/professors.services";
import { professorsScheduleDoc } from "../docs/professors.docs";

export const professorsRoutes: FastifyPluginAsyncZod = async (app) => {
  app.get("/horas", professorsScheduleDoc, async () => {
    return await getProfessorsSchedule();
  });
};
