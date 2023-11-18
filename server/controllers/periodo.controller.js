import Database from "../database/conexion.js";

const db = await Database.getInstance();

/* OBTENER TODOS LOS REGISTROS */
export const getPeriodos = async (req, res) => {
  try {
    const [result] = await db.pool.query(
      "SELECT * FROM periodo_academico ORDER BY id_periodo_academico ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* OBTENER UN REGISTRO */
export const getPeriodo = async (req, res) => {
  try {
    const [result] = await db.pool.query(
      "SELECT * FROM periodo_academico WHERE id_periodo_academico = ?",
      [req.params.id]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Periodo no encontrado" });
    }
    console.log(result);
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* CREAR REGISTRO */
export const createPeriodo = async (req, res) => {
  try {
    const { nombre_periodo, fecha_inicio_periodo, fecha_fin_periodo } =
      req.body; //valores del body del request
    // query SQL
    const [result] = await db.pool.query(
      "INSERT INTO periodo_academico(nombre_periodo, fecha_inicio_periodo, fecha_fin_periodo) VALUES (?, ?, ?)",
      [nombre_periodo, fecha_inicio_periodo, fecha_fin_periodo]
    );
    // respuesta de la peticion en formato json
    res.json({
      id: result.insertId,
      nombre_periodo,
      fecha_inicio_periodo,
      fecha_fin_periodo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ACTUALIZAR UN REGISTRO */
export const updatePeriodo = async (req, res) => {
  try {
    // query SQL
    const [result] = await db.pool.query(
      "UPDATE periodo_academico SET ? WHERE id_periodo_academico = ?",
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ELIMINAR UN REGISTRO */
export const deletePeriodo = async (req, res) => {
  try {
    const [result] = await db.pool.query(
      "DELETE FROM periodo_academico WHERE id_periodo_academico = ?",
      [req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Periodo no encontrado" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
