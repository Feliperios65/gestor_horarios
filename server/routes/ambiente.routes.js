import { Router } from "express";
import {
  createAmbiente,
  deleteAmbiente,
  getAmbiente,
  getAmbientes,
  updateAmbiente,
} from "../controllers/ambiente.controller.js";

const router = Router();

/*METODOS CRUD*/

// obtener todos los registros
router.get("/ambientes", getAmbientes);

// obtener un registro
router.get("/ambientes/:id", getAmbiente);

// crear registro
router.post("/ambientes", createAmbiente);

// actualizar registro
router.put("/ambientes/:id", updateAmbiente);

// eliminar registro
router.delete("/ambientes/:id", deleteAmbiente);

export default router;
