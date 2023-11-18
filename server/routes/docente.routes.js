import { Router } from "express";
import {
  createDocente,
  deleteDocente,
  getDocente,
  getDocentes,
  updateDocente,
} from "../controllers/docente.controller.js";

const router = Router();

/*METODOS CRUD*/

// obtener todos los registros
router.get("/docentes", getDocentes);

// obtener un registro
router.get("/docentes/:id", getDocente);

// crear registro
router.post("/docentes", createDocente);

// actualizar registro
router.put("/docentes/:id", updateDocente);

// eliminar registro
router.delete("/docentes/:id", deleteDocente);

export default router;
