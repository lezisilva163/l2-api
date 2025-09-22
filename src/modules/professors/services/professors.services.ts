import { getProfessorsScheduleDB } from "../repositories/professors.repository";
import { ProfessorScheduleSchema } from "../schemas/professors.schema";

export async function getProfessorsSchedule() {
  const rows = await getProfessorsScheduleDB();

  const formatted = rows.map((row) =>
    ProfessorScheduleSchema.parse({
      professor_id: Number(row.professor_id),
      professor_name: row.professor_name,
      total_hours: Number(row.total_hours),
    })
  );

  return { data: formatted, count: formatted.length };
}
