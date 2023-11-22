import Database from "../database/conexion.js";

const db = await Database.getInstance();

class Horario {
  constructor() {}

  /* OBTENER TODOS LOS REGISTROS */
  async getHorarios(req, res) {
    try {
      const [result] = await db.pool.query(
        "SELECT * FROM horario ORDER BY id_horario ASC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* OBTENER UN REGISTRO */
  async getHorario(req, res) {
    try {
      const [result] = await db.pool.query(
        "SELECT * FROM horario WHERE id_horario = ?",
        [req.params.id]
      );
      if (result.length === 0) {
        return res.status(404).json({ message: "Horario no existe" });
      }
      console.log(result);
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* CREAR REGISTRO */
  async createHorario(req, res) {
    try {
      const {
        horario_dia,
        horario_hora_inicio,
        horario_hora_fin,
        horario_duracion,
        docente_id_docente,
        ambiente_id_ambiente,
        periodo_academico_id_periodo_academico,
      } = req.body; //valores del body del request
      // query SQL
      const [result] = await db.pool.query(
        "INSERT INTO horario(horario_dia, horario_hora_inicio, horario_hora_fin, horario_duracion, docente_id_docente, ambiente_id_ambiente, periodo_academico_id_periodo_academico) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          horario_dia,
          horario_hora_inicio,
          horario_hora_fin,
          horario_duracion,
          docente_id_docente,
          ambiente_id_ambiente,
          periodo_academico_id_periodo_academico,
        ]
      );
      // respuesta de la peticion en formato json
      res.json({
        id: result.insertId,
        horario_dia,
        horario_hora_inicio,
        horario_hora_fin,
        horario_duracion,
        docente_id_docente,
        ambiente_id_ambiente,
        periodo_academico_id_periodo_academico,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* ACTUALIZAR UN REGISTRO */
  async updateHorario(req, res) {
    try {
      // query SQL
      const [result] = await db.pool.query(
        "UPDATE horario SET ? WHERE id_horario = ?",
        [req.body, req.params.id]
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* ELIMINAR UN REGISTRO */
  async deleteHorario(req, res) {
    try {
      const [result] = await db.pool.query(
        "DELETE FROM horario WHERE id_horario = ?",
        [req.params.id]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Horario no encontrado" });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default Horario;
