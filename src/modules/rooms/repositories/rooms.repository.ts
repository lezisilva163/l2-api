import { pool } from "@/config/db";

export async function getRoomsScheduleDB() {
  const query = `
    SELECT
      r.id AS room_id,
      r.name AS room_name,
      cs.day_of_week,
      COALESCE(SUM(EXTRACT(EPOCH FROM (cs.end_time - cs.start_time)) / 3600), 0) AS horas_ocupadas,
      8 - COALESCE(SUM(EXTRACT(EPOCH FROM (cs.end_time - cs.start_time)) / 3600), 0) AS horas_livres
    FROM room r
    LEFT JOIN class_schedule cs ON cs.room_id = r.id
    GROUP BY r.id, r.name, cs.day_of_week
    ORDER BY r.id, cs.day_of_week;
  `;
  const result = await pool.query(query);
  return result.rows;
}
