import { Router } from "express";
import Docente from "../controllers/docente.controller.js";

const docente = new Docente();
const router = Router();

/*METODOS CRUD*/

// obtener todos los registros
router.get("/docentes", docente.getDocentes);

// obtener un registro
router.get("/docentes/:id", docente.getDocente);

// crear registro
router.post("/docentes", docente.createDocente);

// actualizar registro
router.put("/docentes/:id", docente.updateDocente);

// eliminar registro
router.delete("/docentes/:id", docente.deleteDocente);

export default router;
