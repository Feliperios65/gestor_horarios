import Database from "../database/conexion.js";

const db = await Database.getInstance();

class Ambiente {
  constructor() {}

  /* OBTENER TODOS LOS REGISTROS */
  async getAmbientes(req, res) {
    try {
      const [result] = await db.pool.query(
        "SELECT * FROM ambiente ORDER BY id_ambiente ASC"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* OBTENER UN REGISTRO */
  async getAmbiente(req, res) {
    try {
      const [result] = await db.pool.query(
        "SELECT * FROM ambiente WHERE id_ambiente = ?",
        [req.params.id]
      );
      if (result.length === 0) {
        return res.status(404).json({ message: "Ambiente no encontrado" });
      }
      console.log(result);
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* CREAR REGISTRO */
  async createAmbiente(req, res) {
    try {
      const {
        codigo_ambiente,
        nombre_ambiente,
        tipo_ambiente,
        capacidad_ambiente,
        ubicacion_ambiente,
      } = req.body; //valores del body del request
      // query SQL
      const [result] = await db.pool.query(
        "INSERT INTO ambiente(codigo_ambiente, nombre_ambiente, tipo_ambiente, capacidad_ambiente, ubicacion_ambiente) VALUES (?, ?, ?, ?, ?)",
        [
          codigo_ambiente,
          nombre_ambiente,
          tipo_ambiente,
          capacidad_ambiente,
          ubicacion_ambiente,
        ]
      );
      // respuesta de la peticion en formato json
      res.json({
        id: result.insertId,
        codigo_ambiente,
        nombre_ambiente,
        tipo_ambiente,
        capacidad_ambiente,
        ubicacion_ambiente,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* ACTUALIZAR UN REGISTRO */
  async updateAmbiente(req, res) {
    try {
      // query SQL
      const [result] = await db.pool.query(
        "UPDATE ambiente SET ? WHERE id_ambiente = ?",
        [req.body, req.params.id]
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /* ELIMINAR UN REGISTRO */
  async deleteAmbiente(req, res) {
    try {
      const [result] = await db.pool.query(
        "DELETE FROM ambiente WHERE id_ambiente = ?",
        [req.params.id]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Ambiente no encontrado" });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default Ambiente;
