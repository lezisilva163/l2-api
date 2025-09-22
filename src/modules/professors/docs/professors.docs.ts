import z from "zod";
import { ProfessorScheduleSchema } from "../schemas/professors.schema";

export const professorsScheduleDoc = {
  schema: {
    tags: ["Professores"],
    description: "Get Professors Schedule",
    operationId: "getSchedule",
    response: {
      200: z.object({
        data: z.array(ProfessorScheduleSchema),
        count: z.number(),
      }),
    },
  },
};
