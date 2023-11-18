import Database from "../database/conexion.js";

const db = await Database.getInstance();

class Docente {
  constructor() {}

  /* OBTENER TODOS LOS REGISTROS */
  async getDocentes(req, res) {
    try {
      const [result] = await db.pool.query(
        "SELECT * FROM docente ORDER BY id_docente ASC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* OBTENER UN REGISTRO */
  async getDocente(req, res) {
    try {
      const [result] = await db.pool.query(
        "SELECT * FROM docente WHERE id_docente = ?",
        [req.params.id]
      );
      if (result.length === 0) {
        return res.status(404).json({ message: "Docente no encontrado" });
      }
      console.log(result);
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* CREAR REGISTRO */
  async createDocente(req, res) {
    try {
      const {
        nombre_docente,
        apellido_docente,
        tipo_identificacion_docente,
        identificacion_docente,
        tipo_docente,
        tipo_contrato_docente,
        area_docente,
      } = req.body; //valores del body del request
      // query SQL
      const [result] = await db.pool.query(
        "INSERT INTO docente(nombre_docente, apellido_docente, tipo_identificacion_docente, identificacion_docente, tipo_docente, tipo_contrato_docente, area_docente) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          nombre_docente,
          apellido_docente,
          tipo_identificacion_docente,
          identificacion_docente,
          tipo_docente,
          tipo_contrato_docente,
          area_docente,
        ]
      );
      // respuesta de la peticion en formato json
      res.json({
        id: result.insertId,
        nombre_docente,
        apellido_docente,
        tipo_identificacion_docente,
        tipo_docente,
        tipo_contrato_docente,
        area_docente,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* ACTUALIZAR UN REGISTRO */
  async updateDocente(req, res) {
    try {
      // query SQL
      const [result] = await db.pool.query(
        "UPDATE docente SET ? WHERE id_docente = ?",
        [req.body, req.params.id]
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* ELIMINAR UN REGISTRO */
  async deleteDocente(req, res) {
    try {
      const [result] = await db.pool.query(
        "DELETE FROM docente WHERE id_docente = ?",
        [req.params.id]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Docente no encontrado" });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default Docente;
