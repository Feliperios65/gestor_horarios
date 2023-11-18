import { Router } from "express";
import {
  createPeriodo,
  deletePeriodo,
  getPeriodo,
  getPeriodos,
  updatePeriodo,
} from "../controllers/periodo.controller.js";

const router = Router();

/*METODOS CRUD*/

// obtener todos los registros
router.get("/periodos", getPeriodos);

// obtener un registro
router.get("/periodos/:id", getPeriodo);

// crear registro
router.post("/periodos", createPeriodo);

// actualizar registro
router.put("/periodos/:id", updatePeriodo);

// eliminar registro
router.delete("/periodos/:id", deletePeriodo);

export default router;
