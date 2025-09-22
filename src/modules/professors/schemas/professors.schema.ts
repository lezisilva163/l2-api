import { z } from "zod";

export const ProfessorScheduleSchema = z.object({
  professor_id: z.number(),
  professor_name: z.string(),
  total_hours: z.number(),
});

export type ProfessorSchedule = z.infer<typeof ProfessorScheduleSchema>;
