import { Router } from "express";
import Periodo from "../controllers/periodo.controller.js";

const periodo = new Periodo();
const router = Router();

/*METODOS CRUD*/

// obtener todos los registros
router.get("/periodos", periodo.getPeriodos);

// obtener un registro
router.get("/periodos/:id", periodo.getPeriodo);

// crear registro
router.post("/periodos", periodo.createPeriodo);

// actualizar registro
router.put("/periodos/:id", periodo.updatePeriodo);

// eliminar registro
router.delete("/periodos/:id", periodo.deletePeriodo);

export default router;
