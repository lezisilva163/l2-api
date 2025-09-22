import { getRoomsScheduleDB } from "../repositories/rooms.repository";
import { RoomScheduleSchema } from "../schemas/rooms.schema";

export async function getRoomsSchedule() {
  const rows = await getRoomsScheduleDB();

  const formatted = rows.map((row) =>
    RoomScheduleSchema.parse({
      room_id: Number(row.room_id),
      room_name: row.room_name,
      day_of_week: Number(row.day_of_week),
      horas_ocupadas: Number(row.horas_ocupadas),
      horas_livres: Number(row.horas_livres),
    })
  );

  return { data: formatted, count: formatted.length };
}
