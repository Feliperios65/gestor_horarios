import { Router } from "express";
import Horario from "../controllers/horario.controller.js";

const horario = new Horario();
const router = Router();

/*METODOS CRUD*/

// obtener todos los registros
router.get("/horarios", horario.getHorarios);

// obtener un registro
router.get("/horarios/:id", horario.getHorario);

// crear registro
router.post("/horarios", horario.createHorario);

// actualizar registro
router.put("/horarios/:id", horario.updateHorario);

// eliminar registro
router.delete("/horarios/:id", horario.deleteHorario);

export default router;
