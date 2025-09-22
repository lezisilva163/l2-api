import z from "zod";
import { RoomScheduleSchema } from "../schemas/rooms.schema";

export const roomsScheduleDoc = {
  schema: {
    tags: ["Salas"],
    description: "Get Rooms Schedule",
    operationId: "getSchedule",
    response: {
      200: z.object({
        data: z.array(RoomScheduleSchema),
        count: z.number(),
      }),
    },
  },
};
