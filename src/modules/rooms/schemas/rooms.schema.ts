import { z } from "zod";

export const RoomScheduleSchema = z.object({
  room_id: z.number(),
  room_name: z.string(),
  day_of_week: z.number().min(1).max(7),
  horas_ocupadas: z.number().nonnegative(),
  horas_livres: z.number().nonnegative(),
});

export type RoomSchedule = z.infer<typeof RoomScheduleSchema>;
